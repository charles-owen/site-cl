/*
 * Various interface options we can select
 */

/**
 * Editor interface options.
 *
 * This is used by Editor to provide default values for the editor options.
 *
 * @param options User provided options that override the default values.
 * @constructor
 */
export let EditorOptions = function(options) {
    options = options ? options : {};

    /// Options: vertical, horizontal, both
    this.resize = 'vertical';

    /// The resizing handle
    this.handle = 'bar';

    /// Range for grabbing
    this.grabSize = 10;

    /// Is this for source code?
    this.code = false;

    /// Initial textarea value
    this.value = '';

    /// Height value to use
    this.height = null;

    /// Name for the control
    this.name = null;

    /// Use handle the tab key?
    this.tab = false;

    /// Automatically indent code?
    this.autoIndent = false;

    /// Minimum height to set
    this.minHeight = null;

    /// Spellcheck the textarea?
    this.spellcheck = false;

    /// Size of a tab stop in characters.
    this.tabSize = 4;

    /// Classes to add to the textarea
    this.classes = [];

    for(var property in options) {
        if(options.hasOwnProperty(property)) {
            if(!this.hasOwnProperty(property)) {
                throw new Error("Invalid option " + property);
            }
            this[property] = options[property];
        }
    }


}

