import Dialog from 'dialog-cl';

/**
 * Tags validation component. Used by dialog boxes that allow entry of
 * tags. Checks to ensure a tag is a valid string.
 * @constructor
 */
export const Tags = function() {
}

Tags.MaxLength = 32;

Tags.validate = function(tag) {
	if(tag.trim() === '') {
		new Dialog.MessageBox('Must enter valid tag', 'You must provide a valid non-empty tag',
			Dialog.MessageBox.OK);
		return false;
	}

	if(tag.length > Tags.MaxLength) {
		new Dialog.MessageBox('Must enter valid tag', 'Tag is too long. Tags can be no longer than 32 characters.',
			Dialog.MessageBox.OK);
		return false;
	}

	const re = /^[a-zA-Z0-9\-_]*$/;
	if(!re.test(tag)) {
		new Dialog.MessageBox('Must enter valid tag', 'Tags are case sensitive and consist of the letters a-z, 0-9, -, and _ ' +
			'Tags cannot have spaces in them.',
			Dialog.MessageBox.OK);
		return false;
	}

	return true;
}
