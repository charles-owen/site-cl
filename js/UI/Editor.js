/*
 * Javascript support for the Editor
 */

import './_editor.scss';
import Resizer from 'resizer-cl';
import {EditorOptions} from './EditorOptions';

/**
 * Javascript object in support of textarea-based editor
 *
 * If editor has the code style, line numbers are displayed.
 * Set member .tab to support smart tabs
 * Set member .autoIndent to support automatic indentation
 * @param {HTMLElement} element The element for the textarea we are turning into an editor
 * @param {Object} options Options to pass to the editor
 * @constructor
 */
export let Editor = function(element, options) {
    if(options !== undefined) {
        options = new EditorOptions(options);
    } else {
        options = new EditorOptions(JSON.parse(element.textContent));
    }

    element.classList.add('cl-editor');

    if(options.styles !== null) {
	    for(let property in options.styles) {
		    if(options.styles.hasOwnProperty(property)) {
			    element.style[property] = options.styles[property];
		    }
	    }
    }

    if(options.resize !== 'none') {
	    new Resizer(element, {
		    resize: options.resize,
		    handle: options.handle,
		    grabSize: options.grabSize
	    });
    }

    const ta = document.createElement('textarea');
    this.textarea = ta;
    for(let cls of options.classes) {
        ta.classList.add(cls);
    }

    element.innerHTML = '';
    element.appendChild(ta);
    ta.value = options.value;
    if(options.name !== null) {
        ta.name = options.name;
    }

    if(options.code) {
        ta.classList.add('code');
    }

    if(options.height !== null) {
        element.style.height = options.height;
    }

    if(options.minHeight !== null) {
        element.style.minHeight = options.minHeight;
    }

    ta.spellcheck = options.spellcheck;

    // IE11 and some older browsers do not support
    // the insertText command. This determines if it
    // is available. This may be revised it the attempt to
    // use them fails.
    let insertTextSupported = document.queryCommandSupported ("insertText");
    let deleteSupported = document.queryCommandSupported ("delete");

    // Set true after we auto-indent
    let justIndented = false;
    if(options.tab || options.autoIndent) {
        ta.addEventListener('keydown', (event) => {
            if(options.tab && event.which === 9) {  // Tab character
                event.preventDefault();

                if(!event.shiftKey) {
                    tabAtCaret();
                    justIndented = true;
                } else {
                    unTab();
                    justIndented = false;
                }

                return false;
            }

            if(options.autoIndent) {
                if(event.which == 13) {     // Return character
                    event.preventDefault();
                    justIndented = returnWithIndent();
                    return false;
                } else if(justIndented && event.which == 8) {
                    // Backspace after we just indented!
                    if(unDent()) {
                        event.preventDefault();
                        return false;
                    }
                } else {
                    justIndented = false;
                }
            }


            return true;
        });
    }

    /*
     * This is the magic that syncs the background with the
     * line numbers in it.
     */
    ta.addEventListener('scroll', (event) => {
        const top = ta.scrollTop;
        const left = ta.scrollLeft;
        ta.style.backgroundPosition = -left + 'px ' + -top + 'px';
    });

    /*
     * Insert a tab at the current edit location in the textarea
     */
    function tabAtCaret() {
        const dSel = ta;

        if (dSel.selectionStart || dSel.selectionStart == '0') {
            //For browsers like Firefox and Webkit based
            var startPos = dSel.selectionStart;
            var endPos = dSel.selectionEnd;
            if(startPos == endPos) {
                // Tabbing at the current location
                var before = dSel.value.substring(0, startPos);
                var split = before.split("\n");
                var lastLine = split[split.length-1];
                var lastLen = lastLine.length;
                var toAdd = options.tabSize - (lastLen % options.tabSize);
                var spaces = '';
                for(var i=0; i<toAdd; i++) {
                    spaces += ' ';
                }

                insertText(dSel, spaces);
                dSel.selectionStart = startPos + toAdd;
                dSel.selectionEnd = startPos + toAdd;
            } else {
                // Tabbing a selection
                var val = dSel.value;
                var split = val.split("\n");
                var linePos = 0;

                // Find the line the selection starts on
                for(var line=0; line < split.length; line++) {
                    var nextLinePos = linePos + split[line].length + 1;
                    if(startPos >= linePos && startPos < nextLinePos) {
                        break;
                    }
                    linePos = nextLinePos;
                }

                spaces = '';
                for(var i=0; i<options.tabSize; i++) {
                    spaces += ' ';
                }

                var insertions = 0;

                // Indent until we are done
                for( ; line < split.length;  line++) {
                    dSel.selectionStart = linePos + insertions;
                    dSel.selectionEnd = linePos + insertions;

                    insertText(dSel, spaces);
                    insertions += options.tabSize;

                    nextLinePos = linePos + split[line].length + 1;
                    if(endPos <= nextLinePos) {
                        // We are done
                        break;
                    }

                    linePos = nextLinePos;
                }

                dSel.selectionStart = startPos + options.tabSize;
                dSel.selectionEnd = endPos + insertions;
            }

        } else {
            dSel.value += " ";
            dSel.focus();
        }
    }

    /*
     * Handle the Shift-TAB combination (untabbing)
     */
    function unTab() {
        // Selection DOM object
        const dSel = ta;

        var startPos = dSel.selectionStart;
        var endPos = dSel.selectionEnd;

        // Untabbing a selection
        var val = dSel.value;
        var split = val.split("\n");
        var linePos = 0;

        // Find the line the selection starts on
        for(var line=0; line < split.length; line++) {
            var nextLinePos = linePos + split[line].length + 1;
            if(startPos >= linePos && startPos < nextLinePos) {
                break;
            }
            linePos = nextLinePos;
        }

        var deletions = 0;
        var firstLine = true;

        // Undent until we are done
        for( ; line < split.length;  line++) {
            for(var spaces=0;  spaces < options.tabSize && spaces<split[line].length; spaces++) {
                if(split[line][spaces] != ' ') {
                    break;
                }
            }

            if(spaces > 0) {
                dSel.selectionStart = linePos - deletions;
                dSel.selectionEnd = linePos - deletions + spaces;
                deleteText(dSel);
                deletions += spaces;
            }

            if(firstLine) {
                startPos -= spaces;
                if(startPos < linePos) {
                    startPos = linePos;
                }
                firstLine = false;
            }

            nextLinePos = linePos + split[line].length + 1;
            if(endPos <= nextLinePos) {
                // We are done
                break;
            }

            linePos = nextLinePos;
        }

        dSel.selectionStart = startPos;
        dSel.selectionEnd = endPos - deletions;

    }

    /*
     * Insert a return character and enough spaces to indent
     * the text so as to match the previous line.
     */
    function returnWithIndent() {
        // Selection DOM object
        const dSel = ta;

        // How many spaces will be put before the first non-space?
        var space = 0;

        if (dSel.selectionStart || dSel.selectionStart == '0') {
            var startPos = dSel.selectionStart;
            var endPos = dSel.selectionEnd;
            var scrollTop = dSel.scrollTop;
            var before = dSel.value.substring(0, startPos);
            var after = dSel.value.substring(endPos,dSel.value.length);
            var split = before.split("\n");

            // What is the last line before the caret?
            var last = split[split.length-1];

            for(var i=0; i<last.length; i++) {
                if(last.charAt(i) != ' ') {
                    break;
                }

                space++;
            }

            // Create the return
            var myValue = "\n";
            for(i=0; i<space; i++) {
                myValue += ' ';
            }

            insertText(dSel, myValue);
            dSel.selectionStart = startPos + myValue.length;
            dSel.selectionEnd = startPos + myValue.length;
        } else {
            dSel.value += "\n";
            dSel.focus();
        }

        return space > 0;
    }


    /*
     * Remove the last tabSize spaces at the current location
     * @return true if was un-dented
     */
    function unDent() {
        // Selection DOM object
        const dSel = ta;


        if (dSel.selectionStart || dSel.selectionStart == '0') {
            var startPos = dSel.selectionStart;
            var endPos = dSel.selectionEnd;
            var scrollTop = dSel.scrollTop;
            var before = dSel.value.substring(0, startPos);
            var spaceStr = '';
            for(let i=0; i<options.tabSize; i++) {
                spaceStr += ' ';
            }
            if(before.length >= options.tabSize &&
                before.substr(before.length-options.tabSize, options.tabSize) === spaceStr) {
                dSel.selectionStart = before.length - options.tabSize;
                dSel.selectionEnd = before.length - 1;
                deleteText(dSel);
                dSel.selectionStart = before.length - options.tabSize;
                dSel.selectionEnd = dSel.selectionStart;
                return true;
            }

        }

        return false;
    }


    /*
     * Insert text in a textarea at the current selection.
     *
     * This is provided to allow for fallback to a non-undoable version
     * for Internet explorer and Firefox.
     * @param textarea Textarea we are modifying
     * @param text Text to insert
     */
    function insertText(textarea, text) {
        if(insertTextSupported) {
            if(!document.execCommand("insertText", false, text)) {
                insertTextSupported = false;
                insertText(textarea, text);
            }
        } else {
            // Backup version for Internet Explorer 11
            const pos = textarea.selectionStart;
            const scrollTop = textarea.scrollTop;
            const value = textarea.value;
            textarea.value = value.substring(0, pos) + text + value.substring(pos);
            textarea.focus();
            textarea.scrollTop = scrollTop;
        }
    }

    /*
     * Delete text in a textarea at the current selection.
     *
     * This is provided to allow for fallback to a non-undoable version
     * for Internet explorer and Firefox.
     * @param textarea
     */
    function deleteText(textarea) {
        if(deleteSupported) {
            if(!document.execCommand("delete")) {
                deleteSupported = false;
                deleteText(textarea);
            }
        } else {
            // Backup version for Internet Explorer 11
            // and Firefox
            const startPos = textarea.selectionStart;
            const endPos = textarea.selectionEnd;
            const scrollTop = textarea.scrollTop;
            const value = textarea.value;
            textarea.value = value.substring(0, startPos) + value.substring(endPos);
            textarea.focus();
            textarea.scrollTop = scrollTop;
        }
    }
}
