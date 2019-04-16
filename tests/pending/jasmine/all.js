// This gets replaced by karma webpack with the updated files on rebuild
var __karmaWebpackManifest__ = [];

function inManifest(path) {
	return __karmaWebpackManifest__.indexOf(path) >= 0;
}

// Specify the text contexts
var contexts = [
	require.context('../../vendor/cl/site/tests/jasmine', true, /\.spec\.js$/),
	require.context('../../vendor/cl/users/tests/jasmine', true, /\.spec\.js$/)
];

for(const testsContext of contexts) {
	var runnable = testsContext.keys().filter(inManifest);

	// Run all tests if we didn't find any changes
	if (!runnable.length) {
		runnable = testsContext.keys();
	}

	runnable.forEach(testsContext);
}

