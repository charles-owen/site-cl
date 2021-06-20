const fs = require('fs');
const path = require('path');
const cpx = require('cpx');
const fsExtra = require('fs-extra');
const makeDir = require('make-dir');
const rimraf = require('rimraf');

/**
 * The Publisher object creates the script that publishes a
 * site from /cl/dist to the various /dist directories of the
 * components.
 *
 * @constructor
 */
const Publisher = function() {
}

Publisher.verbose = false;

Publisher.publish = async function(publish) {
	let root = publish.root;

	console.log('Publishing:');
	for(let component in publish.components) {
		if(!publish.components.hasOwnProperty(component)) {
			continue;
		}

		console.log(component);

		let commands = publish.components[component];

		const dist = commands.dist;     // Destination directory
		const files = commands.files;   // Files to copy

		// Delete the contents of the dist directory first
		await new Promise(function(resolve, reject) {
			rimraf(dist + '/*', {}, function(response) {
				resolve();
			});
		});

		await Publisher.process(root, 'manifest.dev.json', component, files, dist);
		await Publisher.process(root, 'manifest.min.json', component, files, dist);
	}
}

/**
 * Process a component.
 *
 * This is called after the component's dist direction has been cleaned.
 * @param root Path to the site root
 * @param manifestFile The manifest file we are processing
 * @param component Component name, like 'site', 'users', etc.
 * @param files Array of file regular expressions to copy
 * @param dist Component dist directory path
 */
Publisher.process = function(root, manifestFile, component, files, dist) {
	return new Promise(async function(resolve, reject) {
		// Load the manifest file
		const contents = fs.readFileSync(path.join(root, 'cl/dist', manifestFile));
		const manifest = JSON.parse(contents);

		const distManifest = {};

		for(const file in manifest) {
			for(let i=0; i<files.length; i++) {
				const re = RegExp(files[i]);
				if(file.match(re)) {
					const filePath = manifest[file].substr(9);
					await Publisher.copyActual(path.join(root, manifest[file]), path.join(dist, filePath));
					distManifest[file] = manifest[file];
				}
			}
		}

		fs.writeFileSync(path.join(dist, manifestFile), JSON.stringify(distManifest, null, 2));
		resolve();
	});
}

Publisher.copyActual = function(source, dist) {
	let verbose = this.verbose;

	return new Promise(function(resolve, reject) {
		// if source is a file, just copyFile()
		// if source is a NOT a glob pattern, simply append **/*
		const fileRegex = /(\*|\{+|\}+)/g;
		const matches = fileRegex.exec(source);

		if (matches === null) {
			fs.lstat(source, (sErr, sStats) => {
				if (sErr) return reject(sErr);

				fs.lstat(dist, (dErr, dStats) => {
					if (sStats.isFile()) {
						const destination =
							dStats && dStats.isDirectory()
								? dist + '/' + path.basename(source)
								: dist;

						if (verbose) {
							console.log(
								`  - FileManagerPlugin: Start copy source: ${source} to destination: ${destination}`,
							);
						}

						/*
						 * If the supplied destination is a directory copy inside.
						 * If the supplied destination is a directory that does not exist yet create it & copy inside
						 */

						const pathInfo = path.parse(destination);

						const execCopy = (src, dest) => {
							fsExtra.copy(src, dest, err => {
								if (err) {
									reject(err);
								} else {
									resolve();
								}
							});
						};

						if (pathInfo.ext === '') {
							makeDir(destination).then(mPath => {
								execCopy(source, destination + '/' + path.basename(source));
							});
						} else {
							execCopy(source, destination);
						}
					} else {
						const sourceDir = source + (source.substr(-1) !== '/' ? '/' : '') + '**/*';
						copyDirectory(sourceDir, destination, resolve, reject);
					}
				});
			});
		} else {
			copyDirectory(source, destination, resolve, reject);
		}
	});


	/**
	 * Execute copy directory
	 *
	 * @param {string} source - source file path
	 * @param {string} destination - destination file path
	 * @param {Function} resolve - function used to resolve a Promise
	 * @param {Function} reject - function used to reject a Promise
	 * @return {void}
	 */
	function copyDirectory(source, destination, resolve, reject, options) {
		const verbose = this.verbose;

		/* cpx options */
		const cpxOptions = {
			clean: false,
			includeEmptyDirs: true,
			update: false,
		};

		if (verbose) {
			console.log(`  - FileManagerPlugin: Start copy source file: ${source} to destination file: ${destination}`);
		}

		cpx.copy(source, destination, cpxOptions, err => {
			if (err && options.verbose) {
				console.log('  - FileManagerPlugin: Error - copy failed', err);
				reject(err);
			}

			if (verbose) {
				console.log(`  - FileManagerPlugin: Finished copy source: ${source} to destination: ${destination}`);
			}

			resolve();
		});
	}
}

module.exports = Publisher;