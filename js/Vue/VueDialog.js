import Dialog from 'dialog-cl';
import {VueHelper} from './VueHelper'

/**
 * Dialog box that contains a Vue component
 * @constructor
 */
export const VueDialog = function(site, config) {

	let vue = null;
	let data = null;
	let parent = null;

	let configD = {};
	for(let key in config) {
		switch(key) {
			case 'vue':
				vue = config.vue;
				break;

			case 'data':
				data = config.data;
				break;

			case 'parent':
				parent = config.parent;
				break;

			default:
				// Move these over for the dialog box
				configD[key] = config[key];
				break;
		}
	}

	VueDialog.id++;
	let id = 'cl-dialog-' + VueDialog.id;
	configD.content = `<div id="${id}"></div>`;

	let dialog = new Dialog(configD);

	let template = '<vue';
	for(let key in data()) {
		template += ` :${key}="${key}"`;
	}

	if(parent !== null) {
		template += ` :parent="parent"`;
	}

	template += '></vue>';

	// Create a Vue inside the dialog box
	const app = VueHelper.createApp({
		data: function() {
		   let d = data();
		   if(parent !== null) {
			   d.parent = parent;
		   }
		   return d;
		},
		template: template,
		components: {
			vue: vue
		}
	})

	app.config.globalProperties.$site = site
	app.config.globalProperties.$dialog = dialog
	app.mount('#' + id)
}

VueDialog.id = 0;
