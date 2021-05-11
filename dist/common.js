(self["webpackChunkcourselib"] = self["webpackChunkcourselib"] || []).push([["common"],{

/***/ "./packages/dialog-cl/index.js":
/*!*************************************!*\
  !*** ./packages/dialog-cl/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Dialog": () => (/* reexport safe */ _src_Dialog_js__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _src_polyfills_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/polyfills/all.js */ "./packages/dialog-cl/src/polyfills/all.js");
/* harmony import */ var _src_polyfills_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_polyfills_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_Dialog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Dialog.js */ "./packages/dialog-cl/src/Dialog.js");
/* harmony import */ var _src_MessageBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/MessageBox.js */ "./packages/dialog-cl/src/MessageBox.js");
/* harmony import */ var _src_dialog_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/_dialog.scss */ "./packages/dialog-cl/src/_dialog.scss");
/* harmony import */ var icons_cl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons-cl */ "./node_modules/icons-cl/dist/icons.js");
/* harmony import */ var icons_cl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_cl__WEBPACK_IMPORTED_MODULE_4__);





_src_Dialog_js__WEBPACK_IMPORTED_MODULE_1__.default.MessageBox = _src_MessageBox_js__WEBPACK_IMPORTED_MODULE_2__.default;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_Dialog_js__WEBPACK_IMPORTED_MODULE_1__.default);


/***/ }),

/***/ "./packages/dialog-cl/src/Body.js":
/*!****************************************!*\
  !*** ./packages/dialog-cl/src/Body.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Body": () => (/* binding */ Body)
/* harmony export */ });
/* harmony import */ var _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools.js */ "./packages/dialog-cl/src/DOM/Tools.js");
/**
 * @file
 * Middle section of dialog box
 */

var Body = function Body(dialog, parentDiv) {
  var options = dialog.options;
  var div = document.createElement('div');
  div.classList.add('dialog-cl-body');
  _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__.default.addContent(div, options.content); // div = Tools.createClassedDiv('dialog-cl-body', options.content);

  parentDiv.appendChild(div);
  this.div = div;
};

/***/ }),

/***/ "./packages/dialog-cl/src/Bottom.js":
/*!******************************************!*\
  !*** ./packages/dialog-cl/src/Bottom.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools */ "./packages/dialog-cl/src/DOM/Tools.js");

/**
 * The bottom buttons section of the dialog box
 * @constructor
 */

var Bottom = function Bottom(dialog, parentDiv) {
  var options = dialog.options;

  var initialize = function initialize() {
    // let html = `<button class="cl-dialog-btn">Ok</button><button class="cl-dialog-btn">Cancel</button>`;
    var div = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__.default.createClassedDiv('cl-dialog-bottom');
    parentDiv.appendChild(div);

    if (options.buttons === null) {
      addOk(div);
    } else {
      options.buttons.forEach(function (item) {
        addButton(div, item);
      });
    }
  };

  function addOk(div, item) {
    var button = document.createElement('button');
    button.type = 'submit';
    div.appendChild(button);
    button.innerHTML = 'Ok';

    button.onclick = function (event) {
      event.preventDefault();

      if (item !== undefined && item.click !== undefined) {
        item.click(dialog);
      } else {
        dialog.close();
      }
    };

    button.focus();
  }

  function addButton(div, item) {
    var button = document.createElement('button');
    button.type = 'submit';
    div.appendChild(button);
    button.innerHTML = item.contents;

    button.onclick = function (event) {
      event.preventDefault();

      if (item !== undefined && item.click !== undefined) {
        item.click(dialog);
      }
    };

    if (item["class"] !== undefined) {
      button.classList.add(item["class"]);
    }

    if (item.focus === true) {
      button.focus();
    }
  }

  initialize();

  this["default"] = function () {
    options.buttons.forEach(function (item) {
      if (item["default"] === true && item.click !== undefined) {
        item.click(dialog);
      }
    });
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bottom);

/***/ }),

/***/ "./packages/dialog-cl/src/DOM/Tools.js":
/*!*********************************************!*\
  !*** ./packages/dialog-cl/src/DOM/Tools.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tools": () => (/* binding */ Tools),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");


/**
 * @file
 * Convenience functions for the DOM.
 * Tools that avoid having to have jQuery installed.
 */
var Tools = function Tools() {};
/**
 * Add a class to an element
 * @param element Element to add to
 * @param className Class to add
 */

Tools.addClass = function (element, className) {
  if (element.classList) element.classList.add(className);else element.className += ' ' + className;
};

Tools.addClasses = function (element, classes) {
  if (classes === undefined || classes === null) {
    return;
  }

  classes.split(' ').forEach(function (cls) {
    Tools.addClass(element, cls);
  });
};
/**
 * Create a DIV with a provided class name.
 * @param className Class to add to the div
 * @param content Content to place in the div. HTML or Element
 * @returns {Element} Created DOM Element
 */


Tools.createClassedDiv = function (className, content) {
  var div = document.createElement('div');
  Tools.addClass(div, className);
  Tools.addContent(div, content);
  return div;
};
/**
 * Add content to an element.
 * @param element Element to add to
 * @param content Content. Can be HTML or an Element.
 */


Tools.addContent = function (element, content) {
  if (Tools.isString(content)) {
    element.innerHTML += content;
  } else if (Tools.isElement(content)) {
    element.appendChild(content);
  }
};

Tools.isString = function (val) {
  return typeof val === 'string' || !!val && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(val) === 'object' && Object.prototype.toString.call(val) === '[object String]';
};

Tools.isElement = function (val) {
  return val !== undefined && val !== null && val.nodeValue !== undefined;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tools);

/***/ }),

/***/ "./packages/dialog-cl/src/Dialog.js":
/*!******************************************!*\
  !*** ./packages/dialog-cl/src/Dialog.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Options_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Options.js */ "./packages/dialog-cl/src/Options.js");
/* harmony import */ var _TitleBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleBar */ "./packages/dialog-cl/src/TitleBar.js");
/* harmony import */ var _Body_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Body.js */ "./packages/dialog-cl/src/Body.js");
/* harmony import */ var _Bottom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Bottom.js */ "./packages/dialog-cl/src/Bottom.js");
/* harmony import */ var _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM/Tools.js */ "./packages/dialog-cl/src/DOM/Tools.js");
/* harmony import */ var _Mask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Mask.js */ "./packages/dialog-cl/src/Mask.js");
/* harmony import */ var resizer_cl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! resizer-cl */ "./node_modules/resizer-cl/index.js");







/**
 * Flexible and configurable dialog box object
 * @constructor
 *
 * @version 1.0.4 Touch support for title bar dragging
 * @property {element} form Get the form DOM element (if used)
 */

var Dialog = function Dialog(options) {
  var _this = this;

  options = new _Options_js__WEBPACK_IMPORTED_MODULE_0__.Options(options);
  this.options = options;
  var body = null,
      mask = null,
      bottom = null;
  var form = null;
  Object.defineProperties(this, {
    form: {
      get: function get() {
        return form;
      }
    }
  });

  var initialize = function initialize() {
    Dialog.zIndex += 2;
    _this.zIndex = Dialog.zIndex;
    var div = _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_4__.default.createClassedDiv('dialog-cl');
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_4__.default.addClasses(div, options.addClass);
    _this.div = div;
    div.style.zIndex = _this.zIndex;
    var parent = document.querySelector('body');
    parent.appendChild(div);
    installResizable(div);
    var container = div;

    if (options.form) {
      // Create the optional surrounding form
      form = document.createElement('form');
      div.appendChild(form);
      container = form;
    }

    new _TitleBar__WEBPACK_IMPORTED_MODULE_1__.TitleBar(_this, container);
    body = new _Body_js__WEBPACK_IMPORTED_MODULE_2__.Body(_this, container);

    if (options.buttons !== false) {
      bottom = new _Bottom_js__WEBPACK_IMPORTED_MODULE_3__.default(_this, container);
    }

    mask = new _Mask_js__WEBPACK_IMPORTED_MODULE_5__.Mask(_this);
    place(div, options.parent);
    document.addEventListener('keydown', keydown, true);
  };

  var keydown = function keydown(event) {
    if (event.keyCode === 27) {
      event.preventDefault();
      event.stopPropagation();

      _this.close();
    }
  };

  var installResizable = function installResizable(div) {
    if (options.resize !== 'none') {
      var rsOptions = {
        'resize': options.resize,
        'handle': 'none',
        'grabSize': options.grabSize
      };
      new resizer_cl__WEBPACK_IMPORTED_MODULE_6__.default(div, rsOptions);
    }
  };

  function toPx(val) {
    return '' + val + 'px';
  }
  /**
   * Place the dialog box centered in the parent.
   * @param div Dialog box div
   * @param parent Parent div
   */


  var place = function place(div, parent) {
    var parentWid;
    var parentHit;

    if (parent === null) {
      parentWid = window.innerWidth;
      parentHit = window.innerHeight;
    } else {
      parentWid = parent.offsetWidth;
      parentHit = parent.offsetHeight;
    }

    var height = div.offsetHeight;
    var width = div.offsetWidth;
    var top = parentHit / 2 - height / 2;

    if (top < 10) {
      top = 10;
    }

    var left = parentWid / 2 - width / 2;

    if (left < 0) {
      left = 0;
    }

    div.style.left = toPx(left);
    div.style.top = toPx(top);
  };

  initialize();

  this.addContent = function (content) {
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_4__.default.addContent(body.div, content);
  };

  this.close = function () {
    mask.remove();
    this.div.parentNode.removeChild(this.div);
    document.removeEventListener('keydown', keydown, true);
  };
  /**
      * Calling is equivalent to pressing the first default button
   */


  this["default"] = function () {
    if (bottom !== null) {
      bottom["default"]();
    }
  };
};

Dialog.zIndex = 10000;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dialog);

/***/ }),

/***/ "./packages/dialog-cl/src/Mask.js":
/*!****************************************!*\
  !*** ./packages/dialog-cl/src/Mask.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mask": () => (/* binding */ Mask)
/* harmony export */ });
/* harmony import */ var _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools.js */ "./packages/dialog-cl/src/DOM/Tools.js");
/**
 * Mask that allows the dialog box to be modal.
 */

var Mask = function Mask(dialog) {
  var options = dialog.options;
  var mask = null;

  if (options.modal) {
    var body = document.querySelector('body');
    mask = _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__.default.createClassedDiv('mask'); // document.createElement('div');

    mask.style.position = 'fixed';
    mask.style.left = 0;
    mask.style.top = 0;
    mask.style.width = "100%";
    mask.style.height = '100%';
    mask.style.backgroundColor = 'transparent';
    mask.style.zIndex = dialog.zIndex - 1;
    body.appendChild(mask);
  }

  this.remove = function () {
    if (mask !== null) {
      var _body = document.querySelector('body');

      _body.removeChild(mask);

      mask = null;
    }
  };
};

/***/ }),

/***/ "./packages/dialog-cl/src/MessageBox.js":
/*!**********************************************!*\
  !*** ./packages/dialog-cl/src/MessageBox.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog.js */ "./packages/dialog-cl/src/Dialog.js");
/**
 * Handy Simple Message Box
 */


var MessageBox = function MessageBox(title, message, type, button1, button2) {
  // Default: OK
  var buttons = [{
    contents: 'Ok',
    click: function click(dialog) {
      if (button1 !== undefined) {
        button1();
      }

      dialog.close();
    },
    'focus': true
  }];

  if (type === MessageBox.OKCANCEL) {
    buttons = [{
      contents: 'Ok',
      click: function click(dialog) {
        if (button1 !== undefined) {
          button1();
        }

        dialog.close();
      },
      'focus': true
    }, {
      contents: 'Cancel',
      click: function click(dialog) {
        if (button2 !== undefined) {
          button2();
        }

        dialog.close();
      }
    }];
  }

  var dialog = new _Dialog_js__WEBPACK_IMPORTED_MODULE_0__.default({
    'title': title,
    'content': '<div class="message-cl"><p>' + message + '</p></div>',
    'buttons': buttons
  });
};

MessageBox.OK = 0;
MessageBox.OKCANCEL = 1;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageBox);

/***/ }),

/***/ "./packages/dialog-cl/src/Options.js":
/*!*******************************************!*\
  !*** ./packages/dialog-cl/src/Options.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Options": () => (/* binding */ Options)
/* harmony export */ });
/**
 * Various interface options we can select
 */

/**
 * Interface options.
 * @param options User provided options that override the default values.
 * @constructor
 */
var Options = function Options(options) {
  options = options ? options : {}; /// Title bar text

  this.title = 'Dialog Box'; /// Any added class or classes for the main dialog box div
  /// Can be a string or multiple strings space delimited

  this.addClass = null; /// Is this dialog box resizable?
  /// Options are: 'none', 'vertical', 'horizontal'

  this.resize = 'none'; /// Size of the border edge we can grab if resizable in pixels

  this.grabSize = 4; /// Array of title bar buttons to add.
  /// If null, a close button is added automatically.
  /// Otherwise, an array of objects, with these fields:
  ///   type: 'close' for a close  button, 'custom' for custom button contents
  ///   contents: HTML to place inside button tag
  ///   click: Click handler

  this.titleBarButtons = null; /// Any added class or classes for the title bar div
  /// Can be a string or multiple strings space delimited

  this.titleBarAddClass = null; /// Array of buttons for the bottom.
  /// If null, an Ok button is added automatically.
  /// Otherwise, an array of objects, with these fields:
  ///   contents: If provided, HTML to place inside button tag
  ///   click: Click handler
  ///   focus: true if we want to set focus on this button
  ///   default: true if this is the default button
  ///   class: Class to add to the button

  this.buttons = null; /// Content to add to the dialog box. If null, none is added on creation.

  this.content = null; /// Is this a modal dialog box? If true, controls underneath are disabled.

  this.modal = true; /// Specifies what element the dialog box should be centered in.

  this.parent = null; /// Should we add a form?

  this.form = true;

  for (var property in options) {
    if (options.hasOwnProperty(property)) {
      if (!this.hasOwnProperty(property)) {
        throw new Error("Invalid option " + property);
      }

      this[property] = options[property];
    }
  }
};

/***/ }),

/***/ "./packages/dialog-cl/src/TitleBar.js":
/*!********************************************!*\
  !*** ./packages/dialog-cl/src/TitleBar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleBar": () => (/* binding */ TitleBar)
/* harmony export */ });
/* harmony import */ var _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools.js */ "./packages/dialog-cl/src/DOM/Tools.js");
/**
 * @file
 * Title bar management
 */

function TitleBar(dialog, parentDiv) {
  var options = dialog.options; /// Mouse move event handlers installed flag

  var installedMoveHandlers = false; /// Touch move event handlers installed flag

  var installedTouchHandlers = false;
  var initialX, initialY;
  var initialPositionX, initialPositionY;

  var initialize = function initialize() {
    var html = "<h1>".concat(options.title, "</h1>");
    var div = _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__.default.createClassedDiv('dialog-cl-top', html);
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__.default.addClasses(div, options.titleBarAddClass);
    parentDiv.appendChild(div);

    if (options.titleBarButtons === null) {
      addClose(div);
    } else {
      options.titleBarButtons.forEach(function (item) {
        if (item.type === 'close') {
          addClose(div, item);
        } else if (item.type === 'custom') {
          addCustom(div, item); // addCustom(div, item);
        }
      });
    }

    var h1 = div.querySelector('h1');
    h1.addEventListener('mousedown', mouseDownListener);
    h1.addEventListener('touchstart', touchStartListener);
  };

  function addClose(div, item) {
    var button = document.createElement('button');
    div.appendChild(button);
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__.default.addClass(button, 'dialog-cl-tb-button');
    button.innerHTML = '<span class="icons-cl icons-cl-close">';

    button.onclick = function (event) {
      event.preventDefault();

      if (item !== undefined && item.click !== undefined) {
        item.click();
      } else {
        dialog.close();
      }
    };
  }

  function addCustom(div, item) {
    var button = document.createElement('button');
    div.appendChild(button);
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__.default.addClass(button, 'dialog-cl-tb-button');
    button.innerHTML = item.contents;

    button.onclick = function (event) {
      event.preventDefault();

      if (item !== undefined && item.click !== undefined) {
        item.click();
      } else {
        dialog.close();
      }
    };
  }

  function moveTo(x, y) {
    var dx = x - initialX;
    var dy = y - initialY;
    var newPositionX = initialPositionX + dx;
    var newPositionY = initialPositionY + dy;
    dialog.div.style.left = newPositionX + 'px';
    dialog.div.style.top = newPositionY + 'px';
  } //
  // Mouse handlers
  //


  function installMouseHandlers() {
    removeHandlers();
    installedMoveHandlers = true;
    document.addEventListener('mousemove', mouseMoveListener);
    document.addEventListener('mouseup', mouseUpListener);
  }

  function mouseDownListener(event) {
    initialX = event.pageX;
    initialY = event.pageY;
    var rect = dialog.div.getBoundingClientRect();
    initialPositionX = rect.left;
    initialPositionY = rect.top;
    installMouseHandlers();
  }

  function mouseMoveListener(e) {
    if (e.buttons !== 1) {
      removeHandlers();
      return;
    }

    moveTo(e.pageX, e.pageY);
  }

  function mouseUpListener(e) {
    removeHandlers();
  } //
  // Touch handlers
  //


  function installTouchHandlers() {
    removeHandlers();
    installedTouchHandlers = true;
    document.addEventListener('touchmove', touchMoveListener);
    document.addEventListener('touchend', touchEndListener);
    document.addEventListener('touchcancel', touchEndListener);
  }

  function touchStartListener(event) {
    event.stopPropagation();
    event.preventDefault();
    initialX = event.touches[0].pageX;
    initialY = event.touches[0].pageY;
    var rect = dialog.div.getBoundingClientRect();
    initialPositionX = rect.left;
    initialPositionY = rect.top;
    installTouchHandlers();
  }

  function touchMoveListener(e) {
    e.stopPropagation();
    moveTo(e.touches[0].pageX, e.touches[0].pageY);
  }

  function touchEndListener(e) {
    removeHandlers();
  }
  /**
   * Remove all installed temporary handlers
   */


  function removeHandlers() {
    if (installedMoveHandlers) {
      document.removeEventListener('mousemove', mouseMoveListener);
      document.removeEventListener('mouseup', mouseUpListener);
      installedMoveHandlers = false;
    }

    if (installedTouchHandlers) {
      document.removeEventListener('touchmove', touchMoveListener);
      document.removeEventListener('touchend', touchEndListener);
      document.removeEventListener('touchcancel', touchEndListener);
      installedTouchHandlers = false;
    }
  }

  initialize();
}

/***/ }),

/***/ "./packages/dialog-cl/src/polyfills/all.js":
/*!*************************************************!*\
  !*** ./packages/dialog-cl/src/polyfills/all.js ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./packages/dialog-cl/src/_dialog.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./packages/dialog-cl/src/_dialog.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div.dialog-cl {\n  box-sizing: border-box;\n  position: fixed;\n  border: 1px solid #444444;\n  background-color: white;\n  background-image: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  cursor: default;\n  top: 0;\n  width: 350px;\n  min-width: 150px;\n  max-width: 500px;\n  height: auto;\n  min-height: 150px;\n  max-height: 600px; }\n\ndiv.cl-dialog-bottom {\n  box-sizing: border-box;\n  flex: 0 0 44px;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  text-align: right;\n  border-top: 1px solid #cccccc;\n  cursor: default; }\n\ndiv.dialog-cl-body {\n  flex: 0 1 auto;\n  width: 100%;\n  overflow-y: auto;\n  padding: 0.5em; }\n  div.dialog-cl-body p:first-child, div.dialog-cl-body h1:first-child, div.dialog-cl-body h2:first-child {\n    margin-top: 0; }\n  div.dialog-cl-body p:last-child {\n    margin-bottom: 0; }\n\ndiv.cl-dialog-bottom button {\n  display: inline-block;\n  min-width: 7em;\n  margin: 10px 10px 10px 0;\n  padding: 3px 10px;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  font-size: 0.8em;\n  font-weight: bold;\n  border: 1px solid #999;\n  border-radius: 1px;\n  box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.1), inset 0 -10px 20px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  text-align: center;\n  color: #444;\n  background: #fff; }\n\ndiv.cl-dialog-bottom button:active {\n  box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.1), inset 0 10px 20px rgba(0, 0, 0, 0.1); }\n\ndiv.cl-dialog-bottom button:disabled,\ndiv.cl-dialog-bottom button[disabled] {\n  color: #ccc; }\n\ndiv.dialog-cl-top {\n  box-sizing: border-box;\n  background-color: #009688;\n  margin: 0;\n  padding: 0;\n  flex: 0 0 25px;\n  cursor: default;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap; }\n  div.dialog-cl-top h1 {\n    flex-grow: 1;\n    margin: 0;\n    padding: 4px 4px 0 10px;\n    font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n    font-size: 16px;\n    line-height: 16px;\n    user-select: none; }\n  div.dialog-cl-top button.dialog-cl-tb-button {\n    flex: 0 0 25px;\n    position: relative;\n    box-sizing: border-box;\n    height: 25px;\n    width: 25px;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: transparent;\n    outline: none; }\n    div.dialog-cl-top button.dialog-cl-tb-button span {\n      position: absolute;\n      left: 4px;\n      top: 4px; }\n  div.dialog-cl-top .dialog-cl-tb-button:hover {\n    background-color: #e81123;\n    cursor: pointer; }\n\ndiv.dialog-cl div.message-cl {\n  font-size: 1.25em;\n  padding: 1em; }\n\ndiv.dialog-cl-column {\n  text-align: center; }\n  div.dialog-cl-column > div {\n    display: inline-block;\n    padding: 1.5em 0 2.0em 0; }\n  div.dialog-cl-column select {\n    width: 100%; }\n", "",{"version":3,"sources":["webpack://./packages/dialog-cl/src/sass/partials/_dialog.scss","webpack://./packages/dialog-cl/src/sass/partials/_bottom.scss","webpack://./packages/dialog-cl/src/sass/partials/_body.scss","webpack://./packages/dialog-cl/src/sass/partials/_buttons.scss","webpack://./packages/dialog-cl/src/sass/partials/_titlebar.scss","webpack://./packages/dialog-cl/src/sass/partials/_messagebox.scss","webpack://./packages/dialog-cl/src/sass/partials/_column.scss"],"names":[],"mappings":"AAAA;EACI,sBAAsB;EACtB,eAAe;EACf,yBAAyB;EACzB,uBAAuB;EACvB,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,eAAe;EACf,MAAM;EAEN,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,iBAAiB,EAAA;;ACnBrB;EACE,sBAAsB;EACtB,cAAc;EACd,WAAW;EACX,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,6BAA6B;EAC7B,eAAe,EAAA;;ACRjB;EACE,cAAc;EACd,WAAW;EACX,gBAAgB;EAChB,cAAc,EAAA;EAJhB;IAOI,aAAa,EAAA;EAPjB;IAWI,gBAAgB,EAAA;;ACTpB;EAEI,qBAAqB;EACrB,cALc;EAMd,wBAAwB;EACxB,iBAAiB;EACjB,kDAAkD;EAClD,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;EACtB,kBAAkB;EAClB,wFAAgF;EAChF,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,gBAAgB,EAAA;;AAfpB;EAmBI,uFAA+E,EAAA;;AAnBnF;;EAwBI,WAAW,EAAA;;AC1Bf;EACE,sBAAsB;EACtB,yBAAyB;EACzB,SAAS;EACT,UAAU;EACV,cAAc;EACd,eAAe;EAEf,aAAa;EACb,mBAAmB;EACnB,iBAAiB,EAAA;EAVnB;IAaI,YAAY;IAEZ,SAAS;IACT,uBAAuB;IACvB,kDAAkD;IAClD,eAAe;IACf,iBAAiB;IACjB,iBAAiB,EAAA;EApBrB;IAyBI,cAAc;IAEd,kBAAkB;IAClB,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,SAAS;IACT,UAAU;IACV,SAAS;IACT,uBAAuB;IACvB,aAAa,EAAA;IAnCjB;MAsCM,kBAAkB;MAClB,SAAS;MACT,QAAQ,EAAA;EAxCd;IA6CI,yBAAyB;IACzB,eAAe,EAAA;;AC9CnB;EAEI,iBAAiB;EAEjB,YAAY,EAAA;;ACAhB;EACE,kBAAkB,EAAA;EADpB;IAII,qBAAqB;IACrB,wBAAwB,EAAA;EAL5B;IASI,WAAW,EAAA","sourcesContent":["div.dialog-cl {\r\n    box-sizing: border-box;\r\n    position: fixed;\r\n    border: 1px solid #444444;\r\n    background-color: white;\r\n    background-image: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    cursor: default;\r\n    top: 0;\r\n\r\n    width: 350px;\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    height: auto;\r\n    min-height: 150px;\r\n    max-height: 600px;\r\n}\r\n\r\n","div.cl-dialog-bottom {\r\n  box-sizing: border-box;\r\n  flex: 0 0 44px;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  text-align: right;\r\n  border-top: 1px solid #cccccc;\r\n  cursor: default;\r\n}\r\n","div.dialog-cl-body {\r\n  flex: 0 1 auto;\r\n  width: 100%;\r\n  overflow-y: auto;\r\n  padding: 0.5em;\r\n\r\n  p:first-child, h1:first-child, h2:first-child {\r\n    margin-top: 0;\r\n  }\r\n\r\n  p:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n","$button-width: 7em;\r\n\r\ndiv.cl-dialog-bottom {\r\n  button {\r\n    display: inline-block;\r\n    min-width: $button-width;\r\n    margin: 10px 10px 10px 0;\r\n    padding: 3px 10px;\r\n    font-family: \"Trebuchet MS\", Helvetica, sans-serif;\r\n    font-size: 0.8em;\r\n    font-weight: bold;\r\n    border: 1px solid #999;\r\n    border-radius: 1px;\r\n    box-shadow: inset 0 -1px 0 1px rgba(0,0,0,.1), inset 0 -10px 20px rgba(0,0,0,.1);\r\n    cursor: pointer;\r\n    text-align: center;\r\n    color: #444;\r\n    background: #fff;\r\n  }\r\n\r\n  button:active {\r\n    box-shadow: inset 0 -1px 0 1px rgba(0,0,0,.1), inset 0 10px 20px rgba(0,0,0,.1);\r\n  }\r\n\r\n  button:disabled,\r\n  button[disabled] {\r\n    color: #ccc;\r\n  }\r\n}\r\n\r\n","div.dialog-cl-top {\r\n  box-sizing: border-box;\r\n  background-color: #009688;\r\n  margin: 0;\r\n  padding: 0;\r\n  flex: 0 0 25px;\r\n  cursor: default;\r\n\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n\r\n  h1 {\r\n    flex-grow: 1;\r\n\r\n    margin: 0;\r\n    padding: 4px 4px 0 10px;\r\n    font-family: \"Trebuchet MS\", Helvetica, sans-serif;\r\n    font-size: 16px;\r\n    line-height: 16px;\r\n    user-select: none;\r\n  }\r\n\r\n  // Title bar buttons\r\n  button.dialog-cl-tb-button {\r\n    flex: 0 0 25px;\r\n\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    height: 25px;\r\n    width: 25px;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    background: transparent;\r\n    outline: none;\r\n\r\n    span {\r\n      position: absolute;\r\n      left: 4px;\r\n      top: 4px;\r\n    }\r\n  }\r\n\r\n  .dialog-cl-tb-button:hover {\r\n    background-color: #e81123;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n\r\n}\r\n\r\n","div.dialog-cl {\r\n  div.message-cl {\r\n    font-size: 1.25em;\r\n\r\n    padding: 1em;\r\n  }\r\n}","//\r\n// Standard dialog box style: single column of controls\r\n//\r\n\r\ndiv.dialog-cl-column {\r\n  text-align: center;\r\n\r\n  >div {\r\n    display: inline-block;\r\n    padding: 1.5em 0 2.0em 0;\r\n  }\r\n\r\n  select {\r\n    width: 100%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/dompurify/dist/purify.js":
/*!***********************************************!*\
  !*** ./node_modules/dompurify/dist/purify.js ***!
  \***********************************************/
/***/ (function(module) {

/*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.2.2/LICENSE */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, function () { 'use strict';

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  var hasOwnProperty = Object.hasOwnProperty,
      setPrototypeOf = Object.setPrototypeOf,
      isFrozen = Object.isFrozen,
      getPrototypeOf = Object.getPrototypeOf,
      getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var freeze = Object.freeze,
      seal = Object.seal,
      create = Object.create; // eslint-disable-line import/no-mutable-exports

  var _ref = typeof Reflect !== 'undefined' && Reflect,
      apply = _ref.apply,
      construct = _ref.construct;

  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }

  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }

  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }

  if (!construct) {
    construct = function construct(Func, args) {
      return new (Function.prototype.bind.apply(Func, [null].concat(_toConsumableArray(args))))();
    };
  }

  var arrayForEach = unapply(Array.prototype.forEach);
  var arrayPop = unapply(Array.prototype.pop);
  var arrayPush = unapply(Array.prototype.push);

  var stringToLowerCase = unapply(String.prototype.toLowerCase);
  var stringMatch = unapply(String.prototype.match);
  var stringReplace = unapply(String.prototype.replace);
  var stringIndexOf = unapply(String.prototype.indexOf);
  var stringTrim = unapply(String.prototype.trim);

  var regExpTest = unapply(RegExp.prototype.test);

  var typeErrorCreate = unconstruct(TypeError);

  function unapply(func) {
    return function (thisArg) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return apply(func, thisArg, args);
    };
  }

  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return construct(func, args);
    };
  }

  /* Add properties to a lookup table */
  function addToSet(set, array) {
    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }

    var l = array.length;
    while (l--) {
      var element = array[l];
      if (typeof element === 'string') {
        var lcElement = stringToLowerCase(element);
        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }

          element = lcElement;
        }
      }

      set[element] = true;
    }

    return set;
  }

  /* Shallow clone an object */
  function clone(object) {
    var newObject = create(null);

    var property = void 0;
    for (property in object) {
      if (apply(hasOwnProperty, object, [property])) {
        newObject[property] = object[property];
      }
    }

    return newObject;
  }

  /* IE10 doesn't support __lookupGetter__ so lets'
   * simulate it. It also automatically checks
   * if the prop is function or getter and behaves
   * accordingly. */
  function lookupGetter(object, prop) {
    while (object !== null) {
      var desc = getOwnPropertyDescriptor(object, prop);
      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }

        if (typeof desc.value === 'function') {
          return unapply(desc.value);
        }
      }

      object = getPrototypeOf(object);
    }

    function fallbackValue(element) {
      console.warn('fallback value for', element);
      return null;
    }

    return fallbackValue;
  }

  var html = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);

  // SVG
  var svg = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);

  var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);

  // List of SVG elements that are disallowed by default.
  // We still need to know them so that we can do namespace
  // checks properly in case one wants to add them to
  // allow-list.
  var svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'fedropshadow', 'feimage', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);

  var mathMl = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']);

  // Similarly to SVG, we want to know all MathML elements,
  // even those that we disallow by default.
  var mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);

  var text = freeze(['#text']);

  var html$1 = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);

  var svg$1 = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);

  var mathMl$1 = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);

  var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

  // eslint-disable-next-line unicorn/better-regex
  var MUSTACHE_EXPR = seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
  var ERB_EXPR = seal(/<%[\s\S]*|[\s\S]*%>/gm);
  var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
  var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
  var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );
  var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  function _toConsumableArray$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  var getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };

  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {Document} document The document object (to determine policy name suffix)
   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported).
   */
  var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
    if ((typeof trustedTypes === 'undefined' ? 'undefined' : _typeof(trustedTypes)) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    }

    // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.
    var suffix = null;
    var ATTR_NAME = 'data-tt-policy-suffix';
    if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
      suffix = document.currentScript.getAttribute(ATTR_NAME);
    }

    var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML: function createHTML(html$$1) {
          return html$$1;
        }
      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };

  function createDOMPurify() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

    var DOMPurify = function DOMPurify(root) {
      return createDOMPurify(root);
    };

    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */
    DOMPurify.version = '2.2.8';

    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */
    DOMPurify.removed = [];

    if (!window || !window.document || window.document.nodeType !== 9) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;

      return DOMPurify;
    }

    var originalDocument = window.document;

    var document = window.document;
    var DocumentFragment = window.DocumentFragment,
        HTMLTemplateElement = window.HTMLTemplateElement,
        Node = window.Node,
        Element = window.Element,
        NodeFilter = window.NodeFilter,
        _window$NamedNodeMap = window.NamedNodeMap,
        NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
        Text = window.Text,
        Comment = window.Comment,
        DOMParser = window.DOMParser,
        trustedTypes = window.trustedTypes;


    var ElementPrototype = Element.prototype;

    var cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    var getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    var getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    var getParentNode = lookupGetter(ElementPrototype, 'parentNode');

    // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.
    if (typeof HTMLTemplateElement === 'function') {
      var template = document.createElement('template');
      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }

    var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
    var emptyHTML = trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML('') : '';

    var _document = document,
        implementation = _document.implementation,
        createNodeIterator = _document.createNodeIterator,
        createDocumentFragment = _document.createDocumentFragment;
    var importNode = originalDocument.importNode;


    var documentMode = {};
    try {
      documentMode = clone(document).documentMode ? document.documentMode : {};
    } catch (_) {}

    var hooks = {};

    /**
     * Expose whether this browser supports running the full DOMPurify.
     */
    DOMPurify.isSupported = typeof getParentNode === 'function' && implementation && typeof implementation.createHTMLDocument !== 'undefined' && documentMode !== 9;

    var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR,
        ERB_EXPR$$1 = ERB_EXPR,
        DATA_ATTR$$1 = DATA_ATTR,
        ARIA_ATTR$$1 = ARIA_ATTR,
        IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA,
        ATTR_WHITESPACE$$1 = ATTR_WHITESPACE;
    var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;

    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */

    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(html), _toConsumableArray$1(svg), _toConsumableArray$1(svgFilters), _toConsumableArray$1(mathMl), _toConsumableArray$1(text)));

    /* Allowed attribute names */
    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray$1(html$1), _toConsumableArray$1(svg$1), _toConsumableArray$1(mathMl$1), _toConsumableArray$1(xml)));

    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
    var FORBID_TAGS = null;

    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
    var FORBID_ATTR = null;

    /* Decide if ARIA attributes are okay */
    var ALLOW_ARIA_ATTR = true;

    /* Decide if custom data attributes are okay */
    var ALLOW_DATA_ATTR = true;

    /* Decide if unknown protocols are okay */
    var ALLOW_UNKNOWN_PROTOCOLS = false;

    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */
    var SAFE_FOR_TEMPLATES = false;

    /* Decide if document with <html>... should be returned */
    var WHOLE_DOCUMENT = false;

    /* Track whether config is already set on this instance of DOMPurify. */
    var SET_CONFIG = false;

    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */
    var FORCE_BODY = false;

    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */
    var RETURN_DOM = false;

    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */
    var RETURN_DOM_FRAGMENT = false;

    /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
     * `Node` is imported into the current `Document`. If this flag is not enabled the
     * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
     * DOMPurify.
     *
     * This defaults to `true` starting DOMPurify 2.2.0. Note that setting it to `false`
     * might cause XSS from attacks hidden in closed shadowroots in case the browser
     * supports Declarative Shadow: DOM https://web.dev/declarative-shadow-dom/
     */
    var RETURN_DOM_IMPORT = true;

    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */
    var RETURN_TRUSTED_TYPE = false;

    /* Output should be free from DOM clobbering attacks? */
    var SANITIZE_DOM = true;

    /* Keep element content when removing element? */
    var KEEP_CONTENT = true;

    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */
    var IN_PLACE = false;

    /* Allow usage of profiles like html, svg and mathMl */
    var USE_PROFILES = {};

    /* Tags to ignore content of when KEEP_CONTENT is true */
    var FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);

    /* Tags that are safe for data: URIs */
    var DATA_URI_TAGS = null;
    var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);

    /* Attributes safe for values like "javascript:" */
    var URI_SAFE_ATTRIBUTES = null;
    var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'summary', 'title', 'value', 'style', 'xmlns']);

    var MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */
    var NAMESPACE = HTML_NAMESPACE;

    /* Keep a reference to config to pass to hooks */
    var CONFIG = null;

    /* Ideally, do not touch anything below this line */
    /* ______________________________________________ */

    var formElement = document.createElement('form');

    /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */
    // eslint-disable-next-line complexity
    var _parseConfig = function _parseConfig(cfg) {
      if (CONFIG && CONFIG === cfg) {
        return;
      }

      /* Shield configuration object from tampering */
      if (!cfg || (typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !== 'object') {
        cfg = {};
      }

      /* Shield configuration object from prototype pollution */
      cfg = clone(cfg);

      /* Set configuration parameters */
      ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
      URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR) : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS) : DEFAULT_DATA_URI_TAGS;
      FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
      FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
      USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
      RETURN_DOM = cfg.RETURN_DOM || false; // Default false
      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
      RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT !== false; // Default true
      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
      FORCE_BODY = cfg.FORCE_BODY || false; // Default false
      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
      IN_PLACE = cfg.IN_PLACE || false; // Default false
      IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;
      NAMESPACE = cfg.NAMESPACE || NAMESPACE;
      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }

      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }

      /* Parse profile info */
      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(text)));
        ALLOWED_ATTR = [];
        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html);
          addToSet(ALLOWED_ATTR, html$1);
        }

        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg);
          addToSet(ALLOWED_ATTR, svg$1);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg$1);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl);
          addToSet(ALLOWED_ATTR, mathMl$1);
          addToSet(ALLOWED_ATTR, xml);
        }
      }

      /* Merge configuration parameters */
      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }

        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
      }

      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }

        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
      }

      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
      }

      /* Add #text in case KEEP_CONTENT is set to true */
      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }

      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }

      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */
      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      }

      // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.
      if (freeze) {
        freeze(cfg);
      }

      CONFIG = cfg;
    };

    var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);

    var HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'desc', 'title', 'annotation-xml']);

    /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */
    var ALL_SVG_TAGS = addToSet({}, svg);
    addToSet(ALL_SVG_TAGS, svgFilters);
    addToSet(ALL_SVG_TAGS, svgDisallowed);

    var ALL_MATHML_TAGS = addToSet({}, mathMl);
    addToSet(ALL_MATHML_TAGS, mathMlDisallowed);

    /**
     *
     *
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */
    var _checkValidNamespace = function _checkValidNamespace(element) {
      var parent = getParentNode(element);

      // In JSDOM, if we're inside shadow DOM, then parentNode
      // can be null. We just simulate parent in this case.
      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: HTML_NAMESPACE,
          tagName: 'template'
        };
      }

      var tagName = stringToLowerCase(element.tagName);
      var parentTagName = stringToLowerCase(parent.tagName);

      if (element.namespaceURI === SVG_NAMESPACE) {
        // The only way to switch from HTML namespace to SVG
        // is via <svg>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'svg';
        }

        // The only way to switch from MathML to SVG is via
        // svg if parent is either <annotation-xml> or MathML
        // text integration points.
        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        }

        // We only allow elements that are defined in SVG
        // spec. All others are disallowed in SVG namespace.
        return Boolean(ALL_SVG_TAGS[tagName]);
      }

      if (element.namespaceURI === MATHML_NAMESPACE) {
        // The only way to switch from HTML namespace to MathML
        // is via <math>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'math';
        }

        // The only way to switch from SVG to MathML is via
        // <math> and HTML integration points
        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
        }

        // We only allow elements that are defined in MathML
        // spec. All others are disallowed in MathML namespace.
        return Boolean(ALL_MATHML_TAGS[tagName]);
      }

      if (element.namespaceURI === HTML_NAMESPACE) {
        // The only way to switch from SVG to HTML is via
        // HTML integration points, and from MathML to HTML
        // is via MathML text integration points
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }

        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }

        // Certain elements are allowed in both SVG and HTML
        // namespace. We need to specify them explicitly
        // so that they don't get erronously deleted from
        // HTML namespace.
        var commonSvgAndHTMLElements = addToSet({}, ['title', 'style', 'font', 'a', 'script']);

        // We disallow tags that are specific for MathML
        // or SVG and should never appear in HTML namespace
        return !ALL_MATHML_TAGS[tagName] && (commonSvgAndHTMLElements[tagName] || !ALL_SVG_TAGS[tagName]);
      }

      // The code should never reach this place (this means
      // that the element somehow got namespace that is not
      // HTML, SVG or MathML). Return false just in case.
      return false;
    };

    /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */
    var _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, { element: node });
      try {
        node.parentNode.removeChild(node);
      } catch (_) {
        try {
          node.outerHTML = emptyHTML;
        } catch (_) {
          node.remove();
        }
      }
    };

    /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */
    var _removeAttribute = function _removeAttribute(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }

      node.removeAttribute(name);

      // We void attribute values for unremovable "is"" attributes
      if (name === 'is' && !ALLOWED_ATTR[name]) {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(node);
          } catch (_) {}
        } else {
          try {
            node.setAttribute(name, '');
          } catch (_) {}
        }
      }
    };

    /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */
    var _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      var doc = void 0;
      var leadingWhitespace = void 0;

      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        var matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }

      var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */
      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, 'text/html');
        } catch (_) {}
      }

      /* Use createHTMLDocument in case DOMParser is not available */
      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, 'template', null);
        doc.documentElement.innerHTML = dirtyPayload;
      }

      var body = doc.body || doc.documentElement;

      if (dirty && leadingWhitespace) {
        body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }

      /* Work on whole document or just its body */
      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };

    /**
     * _createIterator
     *
     * @param  {Document} root document/fragment to create iterator for
     * @return {Iterator} iterator instance
     */
    var _createIterator = function _createIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, function () {
        return NodeFilter.FILTER_ACCEPT;
      }, false);
    };

    /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */
    var _isClobbered = function _isClobbered(elm) {
      if (elm instanceof Text || elm instanceof Comment) {
        return false;
      }

      if (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function') {
        return true;
      }

      return false;
    };

    /**
     * _isNode
     *
     * @param  {Node} obj object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */
    var _isNode = function _isNode(object) {
      return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? object instanceof Node : object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
    };

    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */
    var _executeHook = function _executeHook(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }

      arrayForEach(hooks[entryPoint], function (hook) {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };

    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */
    var _sanitizeElements = function _sanitizeElements(currentNode) {
      var content = void 0;

      /* Execute a hook if present */
      _executeHook('beforeSanitizeElements', currentNode, null);

      /* Check if element is clobbered or can clobber */
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Check if tagname contains Unicode */
      if (stringMatch(currentNode.nodeName, /[\u0080-\uFFFF]/)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Now let's check the element's type and name */
      var tagName = stringToLowerCase(currentNode.nodeName);

      /* Execute a hook if present */
      _executeHook('uponSanitizeElement', currentNode, {
        tagName: tagName,
        allowedTags: ALLOWED_TAGS
      });

      /* Detect mXSS attempts abusing namespace confusion */
      if (!_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Remove element if anything forbids its presence */
      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Keep content except for bad-listed elements */
        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          var parentNode = getParentNode(currentNode) || currentNode.parentNode;
          var childNodes = getChildNodes(currentNode) || currentNode.childNodes;

          if (childNodes && parentNode) {
            var childCount = childNodes.length;

            for (var i = childCount - 1; i >= 0; --i) {
              parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
            }
          }
        }

        _forceRemove(currentNode);
        return true;
      }

      /* Check whether element has a valid namespace */
      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }

      if ((tagName === 'noscript' || tagName === 'noembed') && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Sanitize element content to be template-safe */
      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
        /* Get the element's text content */
        content = currentNode.textContent;
        content = stringReplace(content, MUSTACHE_EXPR$$1, ' ');
        content = stringReplace(content, ERB_EXPR$$1, ' ');
        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
          currentNode.textContent = content;
        }
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeElements', currentNode, null);

      return false;
    };

    /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity
    var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }

      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */
      if (ALLOW_DATA_ATTR && regExpTest(DATA_ATTR$$1, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$$1, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        return false;

        /* Check value is safe. First, is attr inert? If so, is safe */
      } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$$1, stringReplace(value, ATTR_WHITESPACE$$1, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$$1, stringReplace(value, ATTR_WHITESPACE$$1, ''))) ; else if (!value) ; else {
        return false;
      }

      return true;
    };

    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */
    var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      var attr = void 0;
      var value = void 0;
      var lcName = void 0;
      var l = void 0;
      /* Execute a hook if present */
      _executeHook('beforeSanitizeAttributes', currentNode, null);

      var attributes = currentNode.attributes;

      /* Check if we have attributes; if not we might have a text node */

      if (!attributes) {
        return;
      }

      var hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      l = attributes.length;

      /* Go backwards over all attributes; safely remove bad ones */
      while (l--) {
        attr = attributes[l];
        var _attr = attr,
            name = _attr.name,
            namespaceURI = _attr.namespaceURI;

        value = stringTrim(attr.value);
        lcName = stringToLowerCase(name);

        /* Execute a hook if present */
        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
        value = hookEvent.attrValue;
        /* Did the hooks approve of the attribute? */
        if (hookEvent.forceKeepAttr) {
          continue;
        }

        /* Remove attribute */
        _removeAttribute(name, currentNode);

        /* Did the hooks approve of the attribute? */
        if (!hookEvent.keepAttr) {
          continue;
        }

        /* Work around a security issue in jQuery 3.0 */
        if (regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }

        /* Sanitize attribute content to be template-safe */
        if (SAFE_FOR_TEMPLATES) {
          value = stringReplace(value, MUSTACHE_EXPR$$1, ' ');
          value = stringReplace(value, ERB_EXPR$$1, ' ');
        }

        /* Is `value` valid for this attribute? */
        var lcTag = currentNode.nodeName.toLowerCase();
        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }

        /* Handle invalid data-* attribute set by try-catching it */
        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }

          arrayPop(DOMPurify.removed);
        } catch (_) {}
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeAttributes', currentNode, null);
    };

    /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */
    var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      var shadowNode = void 0;
      var shadowIterator = _createIterator(fragment);

      /* Execute a hook if present */
      _executeHook('beforeSanitizeShadowDOM', fragment, null);

      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHook('uponSanitizeShadowNode', shadowNode, null);

        /* Sanitize tags and elements */
        if (_sanitizeElements(shadowNode)) {
          continue;
        }

        /* Deep shadow DOM detected */
        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(shadowNode);
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeShadowDOM', fragment, null);
    };

    /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    // eslint-disable-next-line complexity
    DOMPurify.sanitize = function (dirty, cfg) {
      var body = void 0;
      var importedNode = void 0;
      var currentNode = void 0;
      var oldNode = void 0;
      var returnNode = void 0;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */
      if (!dirty) {
        dirty = '<!-->';
      }

      /* Stringify, in case dirty is an object */
      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        // eslint-disable-next-line no-negated-condition
        if (typeof dirty.toString !== 'function') {
          throw typeErrorCreate('toString is not a function');
        } else {
          dirty = dirty.toString();
          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        }
      }

      /* Check we can run. Otherwise fall back or ignore */
      if (!DOMPurify.isSupported) {
        if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
          if (typeof dirty === 'string') {
            return window.toStaticHTML(dirty);
          }

          if (_isNode(dirty)) {
            return window.toStaticHTML(dirty.outerHTML);
          }
        }

        return dirty;
      }

      /* Assign config vars */
      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }

      /* Clean up removed elements */
      DOMPurify.removed = [];

      /* Check if dirty is correctly typed for IN_PLACE */
      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }

      if (IN_PLACE) ; else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);
        if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT &&
        // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }

        /* Initialize the document to work on */
        body = _initDocument(dirty);

        /* Check we have a DOM node from the data */
        if (!body) {
          return RETURN_DOM ? null : emptyHTML;
        }
      }

      /* Remove first element node (ours) if FORCE_BODY is set */
      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }

      /* Get node iterator */
      var nodeIterator = _createIterator(IN_PLACE ? dirty : body);

      /* Now start iterating over the created document */
      while (currentNode = nodeIterator.nextNode()) {
        /* Fix IE's strange behavior with manipulated textNodes #89 */
        if (currentNode.nodeType === 3 && currentNode === oldNode) {
          continue;
        }

        /* Sanitize tags and elements */
        if (_sanitizeElements(currentNode)) {
          continue;
        }

        /* Shadow DOM detected, sanitize it */
        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(currentNode);

        oldNode = currentNode;
      }

      oldNode = null;

      /* If we sanitized `dirty` in-place, return it. */
      if (IN_PLACE) {
        return dirty;
      }

      /* Return sanitized string or DOM */
      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);

          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }

        if (RETURN_DOM_IMPORT) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }

        return returnNode;
      }

      var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;

      /* Sanitize final string template-safe */
      if (SAFE_FOR_TEMPLATES) {
        serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$$1, ' ');
        serializedHTML = stringReplace(serializedHTML, ERB_EXPR$$1, ' ');
      }

      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };

    /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */
    DOMPurify.setConfig = function (cfg) {
      _parseConfig(cfg);
      SET_CONFIG = true;
    };

    /**
     * Public method to remove the configuration
     * clearConfig
     *
     */
    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };

    /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */
    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }

      var lcTag = stringToLowerCase(tag);
      var lcName = stringToLowerCase(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };

    /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */
    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }

      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };

    /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     */
    DOMPurify.removeHook = function (entryPoint) {
      if (hooks[entryPoint]) {
        arrayPop(hooks[entryPoint]);
      }
    };

    /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */
    DOMPurify.removeHooks = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };

    /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */
    DOMPurify.removeAllHooks = function () {
      hooks = {};
    };

    return DOMPurify;
  }

  var purify = createDOMPurify();

  return purify;

}));
//# sourceMappingURL=purify.js.map


/***/ }),

/***/ "./node_modules/icons-cl/dist/icons.js":
/*!*********************************************!*\
  !*** ./node_modules/icons-cl/dist/icons.js ***!
  \*********************************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/icons.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/icons.scss ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __nested_webpack_require_1257__) => {

__nested_webpack_require_1257__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_1257__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_1257__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_1257__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_1257__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_1257__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_1257__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_1257__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_icons_png__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_1257__(/*! ./images/icons.png */ "./src/images/icons.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_icons_png__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".icons-cl {\n  display: inline-block;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  width: 16px;\n  height: 16px;\n  overflow: hidden;\n  color: transparent;\n  padding: 0; }\n  .icons-cl.icons-cl-caret-1-n {\n    background-position: 0 0; }\n  .icons-cl.icons-cl-caret-1-ne {\n    background-position: -16px 0; }\n  .icons-cl.icons-cl-caret-1-e {\n    background-position: -32px 0; }\n  .icons-cl.icons-cl-caret-1-se {\n    background-position: -48px 0; }\n  .icons-cl.icons-cl-caret-1-s {\n    background-position: -64px 0; }\n  .icons-cl.icons-cl-caret-1-sw {\n    background-position: -80px 0; }\n  .icons-cl.icons-cl-caret-1-w {\n    background-position: -96px 0; }\n  .icons-cl.icons-cl-caret-1-nw {\n    background-position: -112px 0; }\n  .icons-cl.icons-cl-caret-2-n-s {\n    background-position: -128px 0; }\n  .icons-cl.icons-cl-caret-2-e-w {\n    background-position: -144px 0; }\n  .icons-cl.icons-cl-triangle-1-n {\n    background-position: 0px -16px; }\n  .icons-cl.icons-cl-triangle-1-ne {\n    background-position: -16px -16px; }\n  .icons-cl.icons-cl-triangle-1-e {\n    background-position: -32px -16px; }\n  .icons-cl.icons-cl-triangle-1-se {\n    background-position: -48px -16px; }\n  .icons-cl.icons-cl-triangle-1-s {\n    background-position: -64px -16px; }\n  .icons-cl.icons-cl-triangle-1-sw {\n    background-position: -80px -16px; }\n  .icons-cl.icons-cl-triangle-1-w {\n    background-position: -96px -16px; }\n  .icons-cl.icons-cl-triangle-1-nw {\n    background-position: -112px -16px; }\n  .icons-cl.icons-cl-triangle-2-n-s {\n    background-position: -128px -16px; }\n  .icons-cl.icons-cl-triangle-2-e-w {\n    background-position: -144px -16px; }\n  .icons-cl.icons-cl-arrow-1-n {\n    background-position: 0px -32px; }\n  .icons-cl.icons-cl-arrow-1-ne {\n    background-position: -16px -32px; }\n  .icons-cl.icons-cl-arrow-1-e {\n    background-position: -32px -32px; }\n  .icons-cl.icons-cl-arrow-1-se {\n    background-position: -48px -32px; }\n  .icons-cl.icons-cl-arrow-1-s {\n    background-position: -64px -32px; }\n  .icons-cl.icons-cl-arrow-1-sw {\n    background-position: -80px -32px; }\n  .icons-cl.icons-cl-arrow-1-w {\n    background-position: -96px -32px; }\n  .icons-cl.icons-cl-arrow-1-nw {\n    background-position: -112px -32px; }\n  .icons-cl.icons-cl-arrow-2-n-s {\n    background-position: -128px -32px; }\n  .icons-cl.icons-cl-arrow-2-ne-sw {\n    background-position: -144px -32px; }\n  .icons-cl.icons-cl-arrow-2-e-w {\n    background-position: -160px -32px; }\n  .icons-cl.icons-cl-arrow-2-se-nw {\n    background-position: -176px -32px; }\n  .icons-cl.icons-cl-arrowstop-1-n {\n    background-position: -192px -32px; }\n  .icons-cl.icons-cl-arrowstop-1-e {\n    background-position: -208px -32px; }\n  .icons-cl.icons-cl-arrowstop-1-s {\n    background-position: -224px -32px; }\n  .icons-cl.icons-cl-arrowstop-1-w {\n    background-position: -240px -32px; }\n  .icons-cl.icons-cl-arrowthick-1-n {\n    background-position: 0px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-ne {\n    background-position: -16px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-e {\n    background-position: -32px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-se {\n    background-position: -48px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-s {\n    background-position: -64px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-sw {\n    background-position: -80px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-w {\n    background-position: -96px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-nw {\n    background-position: -112px -48px; }\n  .icons-cl.icons-cl-arrowthick-2-n-s {\n    background-position: -128px -48px; }\n  .icons-cl.icons-cl-arrowthick-2-ne-sw {\n    background-position: -144px -48px; }\n  .icons-cl.icons-cl-arrowthick-2-e-w {\n    background-position: -160px -48px; }\n  .icons-cl.icons-cl-arrowthick-2-se-nw {\n    background-position: -176px -48px; }\n  .icons-cl.icons-cl-arrowthickstop-1-n {\n    background-position: -192px -48px; }\n  .icons-cl.icons-cl-arrowthickstop-1-e {\n    background-position: -208px -48px; }\n  .icons-cl.icons-cl-arrowthickstop-1-s {\n    background-position: -224px -48px; }\n  .icons-cl.icons-cl-arrowthickstop-1-w {\n    background-position: -240px -48px; }\n  .icons-cl.icons-cl-arrowreturnthick-1-w {\n    background-position: 0px -64px; }\n  .icons-cl.icons-cl-arrowreturnthick-1-e {\n    background-position: -32px -64px; }\n  .icons-cl.icons-cl-folder-collapsed {\n    background-position: 0px -96px; }\n  .icons-cl.icons-cl-folder-open {\n    background-position: -16px -96px; }\n  .icons-cl.icons-cl-document {\n    background-position: -32px -96px; }\n  .icons-cl.icons-cl-document-b {\n    background-position: -48px -96px; }\n  .icons-cl.icons-cl-note {\n    background-position: -64px -96px; }\n  .icons-cl.icons-cl-mail-closed {\n    background-position: -80px -96px; }\n  .icons-cl.icons-cl-mail-open {\n    background-position: -96px -96px; }\n  .icons-cl.icons-cl-suitcase {\n    background-position: -112px -96px; }\n  .icons-cl.icons-cl-comment {\n    background-position: -128px -96px; }\n  .icons-cl.icons-cl-person {\n    background-position: -144px -96px; }\n  .icons-cl.icons-cl-print {\n    background-position: -160px -96px; }\n  .icons-cl.icons-cl-trash {\n    background-position: -176px -96px; }\n  .icons-cl.icons-cl-locked {\n    background-position: -192px -96px; }\n  .icons-cl.icons-cl-unlocked {\n    background-position: -208px -96px; }\n  .icons-cl.icons-cl-bookmark {\n    background-position: -224px -96px; }\n  .icons-cl.icons-cl-tag {\n    background-position: -240px -96px; }\n  .icons-cl.icons-cl-home {\n    background-position: 0px -112px; }\n  .icons-cl.icons-cl-flag {\n    background-position: -16px -112px; }\n  .icons-cl.icons-cl-calculator {\n    background-position: -32px -112px; }\n  .icons-cl.icons-cl-cart {\n    background-position: -48px -112px; }\n  .icons-cl.icons-cl-pencil {\n    background-position: -64px -112px; }\n  .icons-cl.icons-cl-clock {\n    background-position: -80px -112px; }\n  .icons-cl.icons-cl-disk {\n    background-position: -96px -112px; }\n  .icons-cl.icons-cl-calendar {\n    background-position: -112px -112px; }\n  .icons-cl.icons-cl-zoomin {\n    background-position: -128px -112px; }\n  .icons-cl.icons-cl-zoomout {\n    background-position: -144px -112px; }\n  .icons-cl.icons-cl-search {\n    background-position: -160px -112px; }\n  .icons-cl.icons-cl-wrench {\n    background-position: -176px -112px; }\n  .icons-cl.icons-cl-gear {\n    background-position: -192px -112px; }\n  .icons-cl.icons-cl-heart {\n    background-position: -208px -112px; }\n  .icons-cl.icons-cl-star {\n    background-position: -224px -112px; }\n  .icons-cl.icons-cl-link {\n    background-position: -240px -112px; }\n  .icons-cl.icons-cl-cancel {\n    background-position: 0px -128px; }\n  .icons-cl.icons-cl-plus {\n    background-position: -16px -128px; }\n  .icons-cl.icons-cl-plusthick {\n    background-position: -32px -128px; }\n  .icons-cl.icons-cl-minus {\n    background-position: -48px -128px; }\n  .icons-cl.icons-cl-minusthick {\n    background-position: -64px -128px; }\n  .icons-cl.icons-cl-key {\n    background-position: -80px -128px; }\n  .icons-cl.icons-cl-lightbulb {\n    background-position: -96px -128px; }\n  .icons-cl.icons-cl-scissors {\n    background-position: -112px -128px; }\n  .icons-cl.icons-cl-clipboard {\n    background-position: -128px -128px; }\n  .icons-cl.icons-cl-copy {\n    background-position: -144px -128px; }\n  .icons-cl.icons-cl-contact {\n    background-position: -160px -128px; }\n  .icons-cl.icons-cl-image {\n    background-position: -176px -128px; }\n  .icons-cl.icons-cl-video {\n    background-position: -192px -128px; }\n  .icons-cl.icons-cl-script {\n    background-position: -208px -128px; }\n  .icons-cl.icons-cl-close {\n    background-position: -80px -128px; }\n  .icons-cl.icons-cl-closethick {\n    background-position: -96px -128px; }\n  .icons-cl.icons-cl-alert {\n    background-position: 0px -144px; }\n  .icons-cl.icons-cl-info {\n    background-position: -16px -144px; }\n  .icons-cl.icons-cl-notice {\n    background-position: -32px -144px; }\n  .icons-cl.icons-cl-help {\n    background-position: -48px -144px; }\n  .icons-cl.icons-cl-check {\n    background-position: -64px -144px; }\n  .icons-cl.icons-cl-bullet {\n    background-position: -80px -144px; }\n  .icons-cl.icons-cl-radio-off {\n    background-position: -96px -144px; }\n  .icons-cl.icons-cl-radio-on {\n    background-position: -112px -144px; }\n  .icons-cl.icons-cl-pin-w {\n    background-position: -128px -144px; }\n  .icons-cl.icons-cl-pin-s {\n    background-position: -144px -144px; }\n  .icons-cl.icons-cl-play {\n    background-position: 0px -160px; }\n  .icons-cl.icons-cl-pause {\n    background-position: -16px -160px; }\n  .icons-cl.icons-cl-seek-next {\n    background-position: -32px -160px; }\n  .icons-cl.icons-cl-seek-prev {\n    background-position: -48px -160px; }\n  .icons-cl.icons-cl-seek-end {\n    background-position: -64px -160px; }\n  .icons-cl.icons-cl-seek-first {\n    background-position: -80px -160px; }\n  .icons-cl.icons-cl-stop {\n    background-position: -96px -160px; }\n  .icons-cl.icons-cl-eject {\n    background-position: -112px -160px; }\n  .icons-cl.icons-cl-volume-off {\n    background-position: -128px -160px; }\n  .icons-cl.icons-cl-volume-on {\n    background-position: -144px -160px; }\n", "",{"version":3,"sources":["webpack://./icons.scss"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,yDAAuC;EACvC,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,UAAU,EAAA;EAPZ;IAaI,wBAAwB,EAAA;EAb5B;IAiBI,4BAA4B,EAAA;EAjBhC;IAqBI,4BAAgC,EAAA;EArBpC;IAyBI,4BAAgC,EAAA;EAzBpC;IA6BI,4BAAgC,EAAA;EA7BpC;IAiCI,4BAAgC,EAAA;EAjCpC;IAqCI,4BAAgC,EAAA;EArCpC;IAyCI,6BAAgC,EAAA;EAzCpC;IA6CI,6BAAgC,EAAA;EA7CpC;IAiDI,6BAAgC,EAAA;EAjDpC;IAwDI,8BAAoC,EAAA;EAxDxC;IA4DI,gCAAoC,EAAA;EA5DxC;IAgEI,gCAAoC,EAAA;EAhExC;IAoEI,gCAAoC,EAAA;EApExC;IAyEI,gCAAoC,EAAA;EAzExC;IA8EI,gCAAoC,EAAA;EA9ExC;IAmFI,gCAAoC,EAAA;EAnFxC;IAwFI,iCAAoC,EAAA;EAxFxC;IA4FI,iCAAoC,EAAA;EA5FxC;IAgGI,iCAAoC,EAAA;EAhGxC;IAuGI,8BAAoC,EAAA;EAvGxC;IA2GI,gCAAoC,EAAA;EA3GxC;IA+GI,gCAAoC,EAAA;EA/GxC;IAmHI,gCAAoC,EAAA;EAnHxC;IAuHI,gCAAoC,EAAA;EAvHxC;IA2HI,gCAAoC,EAAA;EA3HxC;IA+HI,gCAAoC,EAAA;EA/HxC;IAmII,iCAAoC,EAAA;EAnIxC;IAwII,iCAAoC,EAAA;EAxIxC;IA4II,iCAAoC,EAAA;EA5IxC;IAgJI,iCAAqC,EAAA;EAhJzC;IAoJI,iCAAqC,EAAA;EApJzC;IAwJI,iCAAqC,EAAA;EAxJzC;IA6JI,iCAAqC,EAAA;EA7JzC;IAiKI,iCAAqC,EAAA;EAjKzC;IAqKI,iCAAqC,EAAA;EArKzC;IA4KI,8BAAoC,EAAA;EA5KxC;IAgLI,gCAAoC,EAAA;EAhLxC;IAoLI,gCAAoC,EAAA;EApLxC;IAwLI,gCAAoC,EAAA;EAxLxC;IA4LI,gCAAoC,EAAA;EA5LxC;IAgMI,gCAAoC,EAAA;EAhMxC;IAoMI,gCAAoC,EAAA;EApMxC;IAwMI,iCAAoC,EAAA;EAxMxC;IA4MI,iCAAoC,EAAA;EA5MxC;IAgNI,iCAAoC,EAAA;EAhNxC;IAoNI,iCAAqC,EAAA;EApNzC;IAwNI,iCAAqC,EAAA;EAxNzC;IA4NI,iCAAqC,EAAA;EA5NzC;IAgOI,iCAAqC,EAAA;EAhOzC;IAoOI,iCAAqC,EAAA;EApOzC;IAwOI,iCAAqC,EAAA;EAxOzC;IA8OI,8BAAoC,EAAA;EA9OxC;IAkPI,gCAAoC,EAAA;EAlPxC;IAgQM,8BAAqC,EAAA;EAhQ3C;IAgQM,gCAAqC,EAAA;EAhQ3C;IAgQM,gCAAqC,EAAA;EAhQ3C;IAgQM,gCAAqC,EAAA;EAhQ3C;IAgQM,gCAAqC,EAAA;EAhQ3C;IAgQM,gCAAqC,EAAA;EAhQ3C;IAgQM,gCAAqC,EAAA;EAhQ3C;IAgQM,iCAAqC,EAAA;EAhQ3C;IAgQM,iCAAqC,EAAA;EAhQ3C;IAgQM,iCAAqC,EAAA;EAhQ3C;IAgQM,iCAAqC,EAAA;EAhQ3C;IAgQM,iCAAqC,EAAA;EAhQ3C;IAgQM,iCAAqC,EAAA;EAhQ3C;IAgQM,iCAAqC,EAAA;EAhQ3C;IAgQM,iCAAqC,EAAA;EAhQ3C;IAgQM,iCAAqC,EAAA;EAhQ3C;IA8QM,+BAAsC,EAAA;EA9Q5C;IA8QM,iCAAsC,EAAA;EA9Q5C;IA8QM,iCAAsC,EAAA;EA9Q5C;IA8QM,iCAAsC,EAAA;EA9Q5C;IA8QM,iCAAsC,EAAA;EA9Q5C;IA8QM,iCAAsC,EAAA;EA9Q5C;IA8QM,iCAAsC,EAAA;EA9Q5C;IA8QM,kCAAsC,EAAA;EA9Q5C;IA8QM,kCAAsC,EAAA;EA9Q5C;IA8QM,kCAAsC,EAAA;EA9Q5C;IA8QM,kCAAsC,EAAA;EA9Q5C;IA8QM,kCAAsC,EAAA;EA9Q5C;IA8QM,kCAAsC,EAAA;EA9Q5C;IA8QM,kCAAsC,EAAA;EA9Q5C;IA8QM,kCAAsC,EAAA;EA9Q5C;IA8QM,kCAAsC,EAAA;EA9Q5C;IA4RM,+BAAsC,EAAA;EA5R5C;IA4RM,iCAAsC,EAAA;EA5R5C;IA4RM,iCAAsC,EAAA;EA5R5C;IA4RM,iCAAsC,EAAA;EA5R5C;IA4RM,iCAAsC,EAAA;EA5R5C;IA4RM,iCAAsC,EAAA;EA5R5C;IA4RM,iCAAsC,EAAA;EA5R5C;IA4RM,kCAAsC,EAAA;EA5R5C;IA4RM,kCAAsC,EAAA;EA5R5C;IA4RM,kCAAsC,EAAA;EA5R5C;IA4RM,kCAAsC,EAAA;EA5R5C;IA4RM,kCAAsC,EAAA;EA5R5C;IA4RM,kCAAsC,EAAA;EA5R5C;IA4RM,kCAAsC,EAAA;EA5R5C;IAmSI,iCAAiC,EAAA;EAnSrC;IAuSI,iCAAiC,EAAA;EAvSrC;IAiTM,+BAAyC,EAAA;EAjT/C;IAiTM,iCAAyC,EAAA;EAjT/C;IAiTM,iCAAyC,EAAA;EAjT/C;IAiTM,iCAAyC,EAAA;EAjT/C;IAiTM,iCAAyC,EAAA;EAjT/C;IAiTM,iCAAyC,EAAA;EAjT/C;IAiTM,iCAAyC,EAAA;EAjT/C;IAiTM,kCAAyC,EAAA;EAjT/C;IAiTM,kCAAyC,EAAA;EAjT/C;IAiTM,kCAAyC,EAAA;EAjT/C;IA6TM,+BAA0C,EAAA;EA7ThD;IA6TM,iCAA0C,EAAA;EA7ThD;IA6TM,iCAA0C,EAAA;EA7ThD;IA6TM,iCAA0C,EAAA;EA7ThD;IA6TM,iCAA0C,EAAA;EA7ThD;IA6TM,iCAA0C,EAAA;EA7ThD;IA6TM,iCAA0C,EAAA;EA7ThD;IA6TM,kCAA0C,EAAA;EA7ThD;IA6TM,kCAA0C,EAAA;EA7ThD;IA6TM,kCAA0C,EAAA","sourcesContent":[".icons-cl {\r\n  display: inline-block;\r\n  background-image: url(images/icons.png);\r\n  width: 16px;\r\n  height: 16px;\r\n  overflow: hidden;\r\n  color: transparent;\r\n  padding: 0;\r\n\r\n  //\r\n  // Row 1\r\n  //\r\n  &.icons-cl-caret-1-n {\r\n    background-position: 0 0;\r\n  }\r\n\r\n  &.icons-cl-caret-1-ne {\r\n    background-position: -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-1-e {\r\n    background-position: 2 * -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-1-se {\r\n    background-position: 3 * -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-1-s {\r\n    background-position: 4 * -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-1-sw {\r\n    background-position: 5 * -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-1-w {\r\n    background-position: 6 * -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-1-nw {\r\n    background-position: 7 * -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-2-n-s {\r\n    background-position: 8 * -16px 0;\r\n  }\r\n\r\n  &.icons-cl-caret-2-e-w {\r\n    background-position: 9 * -16px 0;\r\n  }\r\n\r\n  //\r\n  // Row 2\r\n  //\r\n  &.icons-cl-triangle-1-n {\r\n    background-position: 0 * -16px -16px;\r\n  }\r\n\r\n  &.icons-cl-triangle-1-ne {\r\n    background-position: 1 * -16px -16px;\r\n  }\r\n\r\n  &.icons-cl-triangle-1-e {\r\n    background-position: 2 * -16px -16px;\r\n  }\r\n\r\n  &.icons-cl-triangle-1-se {\r\n    background-position: 3 * -16px -16px;\r\n  }\r\n\r\n\r\n  &.icons-cl-triangle-1-s {\r\n    background-position: 4 * -16px -16px;\r\n  }\r\n\r\n\r\n  &.icons-cl-triangle-1-sw {\r\n    background-position: 5 * -16px -16px;\r\n  }\r\n\r\n\r\n  &.icons-cl-triangle-1-w {\r\n    background-position: 6 * -16px -16px;\r\n  }\r\n\r\n\r\n  &.icons-cl-triangle-1-nw {\r\n    background-position: 7 * -16px -16px;\r\n  }\r\n\r\n  &.icons-cl-triangle-2-n-s {\r\n    background-position: 8 * -16px -16px;\r\n  }\r\n\r\n  &.icons-cl-triangle-2-e-w {\r\n    background-position: 9 * -16px -16px;\r\n  }\r\n  \r\n  //\r\n  // Row 3\r\n  //\r\n  &.icons-cl-arrow-1-n {\r\n    background-position: 0 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-1-ne {\r\n    background-position: 1 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-1-e {\r\n    background-position: 2 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-1-se {\r\n    background-position: 3 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-1-s {\r\n    background-position: 4 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-1-sw {\r\n    background-position: 5 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-1-w {\r\n    background-position: 6 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-1-nw {\r\n    background-position: 7 * -16px -32px;\r\n  }\r\n\r\n\r\n  &.icons-cl-arrow-2-n-s {\r\n    background-position: 8 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-2-ne-sw {\r\n    background-position: 9 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-2-e-w {\r\n    background-position: 10 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrow-2-se-nw {\r\n    background-position: 11 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrowstop-1-n {\r\n    background-position: 12 * -16px -32px;\r\n  }\r\n\r\n\r\n  &.icons-cl-arrowstop-1-e {\r\n    background-position: 13 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrowstop-1-s {\r\n    background-position: 14 * -16px -32px;\r\n  }\r\n\r\n  &.icons-cl-arrowstop-1-w {\r\n    background-position: 15 * -16px -32px;\r\n  }\r\n\r\n  //\r\n  // Row 4\r\n  //\r\n  &.icons-cl-arrowthick-1-n {\r\n    background-position: 0 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-1-ne {\r\n    background-position: 1 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-1-e {\r\n    background-position: 2 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-1-se {\r\n    background-position: 3 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-1-s {\r\n    background-position: 4 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-1-sw {\r\n    background-position: 5 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-1-w {\r\n    background-position: 6 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-1-nw {\r\n    background-position: 7 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-2-n-s {\r\n    background-position: 8 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-2-ne-sw {\r\n    background-position: 9 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-2-e-w {\r\n    background-position: 10 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthick-2-se-nw {\r\n    background-position: 11 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthickstop-1-n {\r\n    background-position: 12 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthickstop-1-e {\r\n    background-position: 13 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthickstop-1-s {\r\n    background-position: 14 * -16px -48px;\r\n  }\r\n\r\n  &.icons-cl-arrowthickstop-1-w {\r\n    background-position: 15 * -16px -48px;\r\n  }\r\n\r\n  //\r\n  // Row 5\r\n  &.icons-cl-arrowreturnthick-1-w {\r\n    background-position: 0 * -16px -64px;\r\n  }\r\n\r\n  &.icons-cl-arrowreturnthick-1-e {\r\n    background-position: 2 * -16px -64px;\r\n  }\r\n\r\n  // ui-icon-arrowreturnthick-1-n  ui-icon-arrowreturnthick-1-s  ui-icon-arrowreturn-1-w  ui-icon-arrowreturn-1-n  ui-icon-arrowreturn-1-e  ui-icon-arrowreturn-1-s  ui-icon-arrowrefresh-1-w  ui-icon-arrowrefresh-1-n  ui-icon-arrowrefresh-1-e  ui-icon-arrowrefresh-1-s\r\n  // ui-icon-arrow-4  ui-icon-arrow-4-diag  ui-icon-extlink  ui-icon-newwin  ui-icon-refresh  ui-icon-shuffle  ui-icon-transfer-e-w  ui-icon-transferthick-e-w\r\n\r\n  //\r\n  // Row 6\r\n  //\r\n  $list: folder-collapsed folder-open document document-b note mail-closed mail-open suitcase comment person print trash locked unlocked bookmark tag;\r\n  $x: 0;\r\n\r\n  @each $item in $list {\r\n    &.icons-cl-#{$item} {\r\n      background-position: $x * -16px -96px\r\n    }\r\n\r\n    $x: $x+1;\r\n  }\r\n\r\n  //\r\n  // Row 7\r\n  //\r\n  $list: home flag calculator cart pencil clock disk calendar zoomin zoomout search wrench gear heart star link;\r\n  $x: 0;\r\n\r\n  @each $item in $list {\r\n    &.icons-cl-#{$item} {\r\n      background-position: $x * -16px -112px\r\n    }\r\n\r\n    $x: $x+1;\r\n  }\r\n\r\n  //\r\n  // Row 8\r\n  //\r\n  $list: cancel  plus  plusthick  minus  minusthick  key  lightbulb  scissors  clipboard  copy  contact  image  video  script;\r\n  $x: 0;\r\n\r\n  @each $item in $list {\r\n    &.icons-cl-#{$item} {\r\n      background-position: $x * -16px -128px\r\n    }\r\n\r\n    $x: $x+1;\r\n  }\r\n\r\n  &.icons-cl-close {\r\n    background-position: -80px -128px;\r\n  }\r\n\r\n  &.icons-cl-closethick {\r\n    background-position: -96px -128px;\r\n  }\r\n  // ui-icon-cancel  ui-icon-plus  ui-icon-plusthick  ui-icon-minus  ui-icon-minusthick  ui-icon-key  ui-icon-lightbulb  ui-icon-scissors  ui-icon-clipboard  ui-icon-copy  ui-icon-contact  ui-icon-image  ui-icon-video  ui-icon-script\r\n\r\n  // Row 9\r\n  $list: alert info  notice help check  bullet  radio-off  radio-on  pin-w  pin-s;\r\n  $x: 0;\r\n\r\n  @each $item in $list {\r\n    &.icons-cl-#{$item} {\r\n      background-position: $x * -16px 9 * -16px\r\n    }\r\n\r\n    $x: $x+1;\r\n  }\r\n\r\n  //  Row 10\r\n  $list: play pause seek-next  seek-prev  seek-end  seek-first  stop  eject  volume-off  volume-on;\r\n  $x: 0;\r\n\r\n  @each $item in $list {\r\n    &.icons-cl-#{$item} {\r\n      background-position: $x * -16px 10 * -16px\r\n    }\r\n\r\n    $x: $x+1;\r\n  }\r\n\r\n // ui-icon-power  ui-icon-signal-diag  ui-icon-signal  ui-icon-battery-0  ui-icon-battery-1  ui-icon-battery-2  ui-icon-battery-3\r\n  // ui-icon-circle-plus  ui-icon-circle-minus  ui-icon-circle-close  ui-icon-circle-triangle-e  ui-icon-circle-triangle-s  ui-icon-circle-triangle-w  ui-icon-circle-triangle-n  ui-icon-circle-arrow-e  ui-icon-circle-arrow-s  ui-icon-circle-arrow-w  ui-icon-circle-arrow-n  ui-icon-circle-zoomin  ui-icon-circle-zoomout  ui-icon-circle-check\r\n// ui-icon-circlesmall-plus  ui-icon-circlesmall-minus  ui-icon-circlesmall-close  ui-icon-squaresmall-plus  ui-icon-squaresmall-minus  ui-icon-squaresmall-close\r\n// ui-icon-grip-dotted-vertical  ui-icon-grip-dotted-horizontal  ui-icon-grip-solid-vertical  ui-icon-grip-solid-horizontal  ui-icon-gripsmall-diagonal-se  ui-icon-grip-diagonal-se\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \****************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/getUrl.js":
/*!************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/icons.scss":
/*!************************!*\
  !*** ./src/icons.scss ***!
  \************************/
/***/ ((module, __webpack_exports__, __nested_webpack_require_30417__) => {

__nested_webpack_require_30417__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_30417__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_30417__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_30417__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_30417__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./icons.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/icons.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./icons.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/icons.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_30417__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./icons.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/icons.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_icons_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_35785__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =   true ? __nested_webpack_require_35785__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/images/icons.png":
/*!******************************!*\
  !*** ./src/images/icons.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_42799__) => {

__nested_webpack_require_42799__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_42799__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_49463__) => {

__nested_webpack_require_49463__.r(__webpack_exports__);
/* harmony import */ var _icons_scss__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_49463__(/*! ./icons.scss */ "./src/icons.scss");



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_49896__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __nested_webpack_require_49896__ };
/******/ 		__nested_webpack_require_49896__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_49896__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_49896__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__nested_webpack_require_49896__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_49896__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nested_webpack_require_49896__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_49896__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_49896__.o(definition, key) && !__nested_webpack_require_49896__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__nested_webpack_require_49896__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __nested_webpack_require_49896__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__nested_webpack_require_49896__.hmrF = () => ("Icons." + __nested_webpack_require_49896__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__nested_webpack_require_49896__.h = () => ("e0ac1235ed53cfc1f268")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_49896__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "Icons:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__nested_webpack_require_49896__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__nested_webpack_require_49896__.nc) {
/******/ 					script.setAttribute("nonce", __nested_webpack_require_49896__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_49896__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __nested_webpack_require_49896__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__nested_webpack_require_49896__.hmrD = currentModuleData;
/******/ 		
/******/ 		__nested_webpack_require_49896__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__nested_webpack_require_49896__.hmrC = {};
/******/ 		__nested_webpack_require_49896__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__nested_webpack_require_49896__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__nested_webpack_require_49896__.hmrI).forEach(function (key) {
/******/ 								__nested_webpack_require_49896__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__nested_webpack_require_49896__.hmrI).forEach(function (key) {
/******/ 								__nested_webpack_require_49896__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __nested_webpack_require_49896__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__nested_webpack_require_49896__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__nested_webpack_require_49896__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__nested_webpack_require_49896__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__nested_webpack_require_49896__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__nested_webpack_require_49896__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"Icons": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __nested_webpack_require_49896__.p + __nested_webpack_require_49896__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__nested_webpack_require_49896__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateIcons"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__nested_webpack_require_49896__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__nested_webpack_require_49896__.f) delete __nested_webpack_require_49896__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __nested_webpack_require_49896__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __nested_webpack_require_49896__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__nested_webpack_require_49896__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__nested_webpack_require_49896__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__nested_webpack_require_49896__.c[outdatedModuleId] &&
/******/ 					__nested_webpack_require_49896__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__nested_webpack_require_49896__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __nested_webpack_require_49896__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __nested_webpack_require_49896__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __nested_webpack_require_49896__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__nested_webpack_require_49896__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __nested_webpack_require_49896__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __nested_webpack_require_49896__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__nested_webpack_require_49896__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __nested_webpack_require_49896__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__nested_webpack_require_49896__.o(appliedUpdate, updateModuleId)) {
/******/ 							__nested_webpack_require_49896__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__nested_webpack_require_49896__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__nested_webpack_require_49896__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __nested_webpack_require_49896__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__nested_webpack_require_49896__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__nested_webpack_require_49896__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __nested_webpack_require_49896__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__nested_webpack_require_49896__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__nested_webpack_require_49896__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__nested_webpack_require_49896__.f) {
/******/ 				__nested_webpack_require_49896__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__nested_webpack_require_49896__.o(currentUpdateChunks, chunkId) &&
/******/ 						__nested_webpack_require_49896__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__nested_webpack_require_49896__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__nested_webpack_require_49896__.p + __nested_webpack_require_49896__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// no jsonp function
/******/ 		
/******/ 		// no deferred startup
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __nested_webpack_require_49896__("./src/icons.js");
/******/ 	__webpack_exports__ = __webpack_exports__.default;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JY29ucy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSWNvbnMvLi9zcmMvaWNvbnMuc2NzcyIsIndlYnBhY2s6Ly9JY29ucy8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0ljb25zLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL0ljb25zLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vSWNvbnMvLi9zcmMvaWNvbnMuc2Nzcz81NmZiIiwid2VicGFjazovL0ljb25zLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9JY29ucy8uL3NyYy9pbWFnZXMvaWNvbnMucG5nIiwid2VicGFjazovL0ljb25zLy4vc3JjL2ljb25zLmpzIiwid2VicGFjazovL0ljb25zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0ljb25zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0ljb25zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9JY29ucy93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgdXBkYXRlIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL0ljb25zL3dlYnBhY2svcnVudGltZS9nZXQgdXBkYXRlIG1hbmlmZXN0IGZpbGVuYW1lIiwid2VicGFjazovL0ljb25zL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9JY29ucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0ljb25zL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9JY29ucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0ljb25zL3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovL0ljb25zL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL0ljb25zL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL0ljb25zL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDNEg7QUFDN0I7QUFDTztBQUN2QztBQUMvRCw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0IsQ0FBQyxzREFBNkI7QUFDdEc7QUFDQSxxREFBcUQsMEJBQTBCLHNFQUFzRSxnQkFBZ0IsaUJBQWlCLHFCQUFxQix1QkFBdUIsZUFBZSxFQUFFLGtDQUFrQywrQkFBK0IsRUFBRSxtQ0FBbUMsbUNBQW1DLEVBQUUsa0NBQWtDLG1DQUFtQyxFQUFFLG1DQUFtQyxtQ0FBbUMsRUFBRSxrQ0FBa0MsbUNBQW1DLEVBQUUsbUNBQW1DLG1DQUFtQyxFQUFFLGtDQUFrQyxtQ0FBbUMsRUFBRSxtQ0FBbUMsb0NBQW9DLEVBQUUsb0NBQW9DLG9DQUFvQyxFQUFFLG9DQUFvQyxvQ0FBb0MsRUFBRSxxQ0FBcUMscUNBQXFDLEVBQUUsc0NBQXNDLHVDQUF1QyxFQUFFLHFDQUFxQyx1Q0FBdUMsRUFBRSxzQ0FBc0MsdUNBQXVDLEVBQUUscUNBQXFDLHVDQUF1QyxFQUFFLHNDQUFzQyx1Q0FBdUMsRUFBRSxxQ0FBcUMsdUNBQXVD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QU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8saURBQWlELDRCQUE0Qiw4Q0FBOEMsa0JBQWtCLG1CQUFtQix1QkFBdUIseUJBQXlCLGlCQUFpQiw4REFBOEQsaUNBQWlDLE9BQU8saUNBQWlDLHFDQUFxQyxPQUFP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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0JBQWtCLDJCQUEyQjtXQUM3QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQSxpQkFBaUIsY0FBYztXQUMvQjtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0EsY0FBYyxLQUFLO1dBQ25CO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsY0FBYyxZQUFZO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsZ0JBQWdCLDRCQUE0QjtXQUM1QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0M7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHVDQUF1QztXQUN4RDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLGtCQUFrQixpQ0FBaUM7V0FDbkQ7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxxQkFBcUIsdUNBQXVDO1dBQzVEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHFCQUFxQixzQkFBc0I7V0FDM0M7V0FDQTtXQUNBLFFBQVE7V0FDUjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxVQUFVO1dBQ1Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0Esa0JBQWtCLHdDQUF3QztXQUMxRDtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxPQUFPO1dBQ1A7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsU0FBUztXQUNUO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsUUFBUTtXQUNSO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFLElBQUk7V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxxQ0FBcUM7V0FDckM7V0FDQTtXQUNBLEVBQUU7V0FDRjs7V0FFQTs7V0FFQTs7V0FFQSxzQjs7Ozs7VUNoZUE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaWNvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJJY29uc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJJY29uc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9pbWFnZXMvaWNvbnMucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmljb25zLWNsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1uZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1zZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1zdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1udyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMi1uLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTItZS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLW5lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtc2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1zdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLW53IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMi1uLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0yLWUtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtbmUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMS1zZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMS1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLXN3IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtbncge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0yLW4tcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTItbmUtc3cge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0yLWUtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTItc2Utbncge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3N0b3AtMS1uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3dzdG9wLTEtZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93c3RvcC0xLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3N0b3AtMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtbmUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtc2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtc3cge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtbncge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTItbi1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0yLW5lLXN3IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0yLWUtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMi1zZS1udyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2tzdG9wLTEtbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2tzdG9wLTEtZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2tzdG9wLTEtcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2tzdG9wLTEtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93cmV0dXJudGhpY2stMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC02NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3dyZXR1cm50aGljay0xLWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtNjRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWZvbGRlci1jb2xsYXBzZWQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1mb2xkZXItb3BlbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZG9jdW1lbnQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWRvY3VtZW50LWIge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLW5vdGUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLW1haWwtY2xvc2VkIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1tYWlsLW9wZW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXN1aXRjYXNlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY29tbWVudCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBlcnNvbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXByaW50IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJhc2gge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1sb2NrZWQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC11bmxvY2tlZCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWJvb2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdGFnIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtaG9tZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1mbGFnIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FsY3VsYXRvciB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcnQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1wZW5jaWwge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jbG9jayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWRpc2sge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYWxlbmRhciB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC16b29taW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtem9vbW91dCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zZWFyY2gge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtd3JlbmNoIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWdlYXIge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtaGVhcnQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc3RhciB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1saW5rIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1wbHVzIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGx1c3RoaWNrIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbWludXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1taW51c3RoaWNrIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wta2V5IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbGlnaHRidWxiIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc2Npc3NvcnMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2xpcGJvYXJkIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNvcHkge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY29udGFjdCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1pbWFnZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC12aWRlbyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zY3JpcHQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2xvc2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jbG9zZXRoaWNrIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYWxlcnQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtaW5mbyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLW5vdGljZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWhlbHAge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jaGVjayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWJ1bGxldCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXJhZGlvLW9mZiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXJhZGlvLW9uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBpbi13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBpbi1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBsYXkge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGF1c2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zZWVrLW5leHQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zZWVrLXByZXYge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zZWVrLWVuZCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXNlZWstZmlyc3Qge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zdG9wIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZWplY3Qge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdm9sdW1lLW9mZiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC12b2x1bWUtb24ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTE2MHB4OyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vaWNvbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQix5REFBdUM7RUFDdkMsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTtFQVBaO0lBYUksd0JBQXdCLEVBQUE7RUFiNUI7SUFpQkksNEJBQTRCLEVBQUE7RUFqQmhDO0lBcUJJLDRCQUFnQyxFQUFBO0VBckJwQztJQXlCSSw0QkFBZ0MsRUFBQTtFQXpCcEM7SUE2QkksNEJBQWdDLEVBQUE7RUE3QnBDO0lBaUNJLDRCQUFnQyxFQUFBO0VBakNwQztJQXFDSSw0QkFBZ0MsRUFBQTtFQXJDcEM7SUF5Q0ksNkJBQWdDLEVBQUE7RUF6Q3BDO0lBNkNJLDZCQUFnQyxFQUFBO0VBN0NwQztJQWlESSw2QkFBZ0MsRUFBQTtFQWpEcEM7SUF3REksOEJBQW9DLEVBQUE7RUF4RHhDO0lBNERJLGdDQUFvQyxF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QUFBO0VBN1RoRDtJQTZUTSxrQ0FBMEMsRUFBQTtFQTdUaEQ7SUE2VE0sa0NBQTBDLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmljb25zLWNsIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvaWNvbnMucG5nKTtcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuXFxyXFxuICAvL1xcclxcbiAgLy8gUm93IDFcXHJcXG4gIC8vXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTEtbiB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtY2FyZXQtMS1uZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTEtZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIgKiAtMTZweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jYXJldC0xLXNlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMyAqIC0xNnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTEtcyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQgKiAtMTZweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jYXJldC0xLXN3IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNSAqIC0xNnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTEtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDYgKiAtMTZweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jYXJldC0xLW53IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNyAqIC0xNnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTItbi1zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOCAqIC0xNnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTItZS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOSAqIC0xNnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvL1xcclxcbiAgLy8gUm93IDJcXHJcXG4gIC8vXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTEtbiB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgKiAtMTZweCAtMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtdHJpYW5nbGUtMS1uZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEgKiAtMTZweCAtMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtdHJpYW5nbGUtMS1lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMiAqIC0xNnB4IC0xNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC10cmlhbmdsZS0xLXNlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMyAqIC0xNnB4IC0xNnB4O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgJi5pY29ucy1jbC10cmlhbmdsZS0xLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0ICogLTE2cHggLTE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTEtc3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1ICogLTE2cHggLTE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTEtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDYgKiAtMTZweCAtMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtdHJpYW5nbGUtMS1udyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDcgKiAtMTZweCAtMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtdHJpYW5nbGUtMi1uLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA4ICogLTE2cHggLTE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTItZS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOSAqIC0xNnB4IC0xNnB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvL1xcclxcbiAgLy8gUm93IDNcXHJcXG4gIC8vXFxyXFxuICAmLmljb25zLWNsLWFycm93LTEtbiB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMS1uZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMS1lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMiAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvdy0xLXNlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMyAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvdy0xLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0ICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTEtc3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1ICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTEtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDYgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMS1udyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDcgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMi1uLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA4ICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTItbmUtc3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5ICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTItZS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMi1zZS1udyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDExICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93c3RvcC0xLW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMiAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3N0b3AtMS1lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTMgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3dzdG9wLTEtcyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE0ICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93c3RvcC0xLXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNSAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLy9cXHJcXG4gIC8vIFJvdyA0XFxyXFxuICAvL1xcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTEtbiB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0xLW5lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMSAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTEtZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0xLXNlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMyAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTEtcyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0xLXN3IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNSAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTEtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDYgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0xLW53IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNyAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTItbi1zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOCAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTItbmUtc3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5ICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2stMi1lLXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMCAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTItc2Utbncge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMSAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMiAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLWUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMyAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNCAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNSAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLy9cXHJcXG4gIC8vIFJvdyA1XFxyXFxuICAmLmljb25zLWNsLWFycm93cmV0dXJudGhpY2stMS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAqIC0xNnB4IC02NHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3JldHVybnRoaWNrLTEtZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIgKiAtMTZweCAtNjRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIHVpLWljb24tYXJyb3dyZXR1cm50aGljay0xLW4gIHVpLWljb24tYXJyb3dyZXR1cm50aGljay0xLXMgIHVpLWljb24tYXJyb3dyZXR1cm4tMS13ICB1aS1pY29uLWFycm93cmV0dXJuLTEtbiAgdWktaWNvbi1hcnJvd3JldHVybi0xLWUgIHVpLWljb24tYXJyb3dyZXR1cm4tMS1zICB1aS1pY29uLWFycm93cmVmcmVzaC0xLXcgIHVpLWljb24tYXJyb3dyZWZyZXNoLTEtbiAgdWktaWNvbi1hcnJvd3JlZnJlc2gtMS1lICB1aS1pY29uLWFycm93cmVmcmVzaC0xLXNcXHJcXG4gIC8vIHVpLWljb24tYXJyb3ctNCAgdWktaWNvbi1hcnJvdy00LWRpYWcgIHVpLWljb24tZXh0bGluayAgdWktaWNvbi1uZXd3aW4gIHVpLWljb24tcmVmcmVzaCAgdWktaWNvbi1zaHVmZmxlICB1aS1pY29uLXRyYW5zZmVyLWUtdyAgdWktaWNvbi10cmFuc2ZlcnRoaWNrLWUtd1xcclxcblxcclxcbiAgLy9cXHJcXG4gIC8vIFJvdyA2XFxyXFxuICAvL1xcclxcbiAgJGxpc3Q6IGZvbGRlci1jb2xsYXBzZWQgZm9sZGVyLW9wZW4gZG9jdW1lbnQgZG9jdW1lbnQtYiBub3RlIG1haWwtY2xvc2VkIG1haWwtb3BlbiBzdWl0Y2FzZSBjb21tZW50IHBlcnNvbiBwcmludCB0cmFzaCBsb2NrZWQgdW5sb2NrZWQgYm9va21hcmsgdGFnO1xcclxcbiAgJHg6IDA7XFxyXFxuXFxyXFxuICBAZWFjaCAkaXRlbSBpbiAkbGlzdCB7XFxyXFxuICAgICYuaWNvbnMtY2wtI3skaXRlbX0ge1xcclxcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR4ICogLTE2cHggLTk2cHhcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAkeDogJHgrMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vXFxyXFxuICAvLyBSb3cgN1xcclxcbiAgLy9cXHJcXG4gICRsaXN0OiBob21lIGZsYWcgY2FsY3VsYXRvciBjYXJ0IHBlbmNpbCBjbG9jayBkaXNrIGNhbGVuZGFyIHpvb21pbiB6b29tb3V0IHNlYXJjaCB3cmVuY2ggZ2VhciBoZWFydCBzdGFyIGxpbms7XFxyXFxuICAkeDogMDtcXHJcXG5cXHJcXG4gIEBlYWNoICRpdGVtIGluICRsaXN0IHtcXHJcXG4gICAgJi5pY29ucy1jbC0jeyRpdGVtfSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHggKiAtMTZweCAtMTEycHhcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAkeDogJHgrMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vXFxyXFxuICAvLyBSb3cgOFxcclxcbiAgLy9cXHJcXG4gICRsaXN0OiBjYW5jZWwgIHBsdXMgIHBsdXN0aGljayAgbWludXMgIG1pbnVzdGhpY2sgIGtleSAgbGlnaHRidWxiICBzY2lzc29ycyAgY2xpcGJvYXJkICBjb3B5ICBjb250YWN0ICBpbWFnZSAgdmlkZW8gIHNjcmlwdDtcXHJcXG4gICR4OiAwO1xcclxcblxcclxcbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xcclxcbiAgICAmLmljb25zLWNsLSN7JGl0ZW19IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkeCAqIC0xNnB4IC0xMjhweFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICR4OiAkeCsxO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jbG9zZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xMjhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtY2xvc2V0aGljayB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xMjhweDtcXHJcXG4gIH1cXHJcXG4gIC8vIHVpLWljb24tY2FuY2VsICB1aS1pY29uLXBsdXMgIHVpLWljb24tcGx1c3RoaWNrICB1aS1pY29uLW1pbnVzICB1aS1pY29uLW1pbnVzdGhpY2sgIHVpLWljb24ta2V5ICB1aS1pY29uLWxpZ2h0YnVsYiAgdWktaWNvbi1zY2lzc29ycyAgdWktaWNvbi1jbGlwYm9hcmQgIHVpLWljb24tY29weSAgdWktaWNvbi1jb250YWN0ICB1aS1pY29uLWltYWdlICB1aS1pY29uLXZpZGVvICB1aS1pY29uLXNjcmlwdFxcclxcblxcclxcbiAgLy8gUm93IDlcXHJcXG4gICRsaXN0OiBhbGVydCBpbmZvICBub3RpY2UgaGVscCBjaGVjayAgYnVsbGV0ICByYWRpby1vZmYgIHJhZGlvLW9uICBwaW4tdyAgcGluLXM7XFxyXFxuICAkeDogMDtcXHJcXG5cXHJcXG4gIEBlYWNoICRpdGVtIGluICRsaXN0IHtcXHJcXG4gICAgJi5pY29ucy1jbC0jeyRpdGVtfSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHggKiAtMTZweCA5ICogLTE2cHhcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAkeDogJHgrMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vICBSb3cgMTBcXHJcXG4gICRsaXN0OiBwbGF5IHBhdXNlIHNlZWstbmV4dCAgc2Vlay1wcmV2ICBzZWVrLWVuZCAgc2Vlay1maXJzdCAgc3RvcCAgZWplY3QgIHZvbHVtZS1vZmYgIHZvbHVtZS1vbjtcXHJcXG4gICR4OiAwO1xcclxcblxcclxcbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xcclxcbiAgICAmLmljb25zLWNsLSN7JGl0ZW19IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkeCAqIC0xNnB4IDEwICogLTE2cHhcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAkeDogJHgrMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gLy8gdWktaWNvbi1wb3dlciAgdWktaWNvbi1zaWduYWwtZGlhZyAgdWktaWNvbi1zaWduYWwgIHVpLWljb24tYmF0dGVyeS0wICB1aS1pY29uLWJhdHRlcnktMSAgdWktaWNvbi1iYXR0ZXJ5LTIgIHVpLWljb24tYmF0dGVyeS0zXFxyXFxuICAvLyB1aS1pY29uLWNpcmNsZS1wbHVzICB1aS1pY29uLWNpcmNsZS1taW51cyAgdWktaWNvbi1jaXJjbGUtY2xvc2UgIHVpLWljb24tY2lyY2xlLXRyaWFuZ2xlLWUgIHVpLWljb24tY2lyY2xlLXRyaWFuZ2xlLXMgIHVpLWljb24tY2lyY2xlLXRyaWFuZ2xlLXcgIHVpLWljb24tY2lyY2xlLXRyaWFuZ2xlLW4gIHVpLWljb24tY2lyY2xlLWFycm93LWUgIHVpLWljb24tY2lyY2xlLWFycm93LXMgIHVpLWljb24tY2lyY2xlLWFycm93LXcgIHVpLWljb24tY2lyY2xlLWFycm93LW4gIHVpLWljb24tY2lyY2xlLXpvb21pbiAgdWktaWNvbi1jaXJjbGUtem9vbW91dCAgdWktaWNvbi1jaXJjbGUtY2hlY2tcXHJcXG4vLyB1aS1pY29uLWNpcmNsZXNtYWxsLXBsdXMgIHVpLWljb24tY2lyY2xlc21hbGwtbWludXMgIHVpLWljb24tY2lyY2xlc21hbGwtY2xvc2UgIHVpLWljb24tc3F1YXJlc21hbGwtcGx1cyAgdWktaWNvbi1zcXVhcmVzbWFsbC1taW51cyAgdWktaWNvbi1zcXVhcmVzbWFsbC1jbG9zZVxcclxcbi8vIHVpLWljb24tZ3JpcC1kb3R0ZWQtdmVydGljYWwgIHVpLWljb24tZ3JpcC1kb3R0ZWQtaG9yaXpvbnRhbCAgdWktaWNvbi1ncmlwLXNvbGlkLXZlcnRpY2FsICB1aS1pY29uLWdyaXAtc29saWQtaG9yaXpvbnRhbCAgdWktaWNvbi1ncmlwc21hbGwtZGlhZ29uYWwtc2UgIHVpLWljb24tZ3JpcC1kaWFnb25hbC1zZVxcclxcblxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2ljb25zLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaWNvbnMuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscywgdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVFBQUFBRHdDQU1BQUFEWVNVcjVBQUFCUzJsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU0x2dTc4aUlHbGtQU0pYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUWlQejRLUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpUVdSdlltVWdXRTFRSUVOdmNtVWdOUzQyTFdNeE5ESWdOemt1TVRZd09USTBMQ0F5TURFM0x6QTNMekV6TFRBeE9qQTJPak01SUNBZ0lDQWdJQ0FpUGdvZ1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNEtJQ0E4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBpSWk4K0NpQThMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K25oeGc3d0FBQUFSblFVMUJBQUN4and2OFlRVUFBQUFCYzFKSFFnQ3V6aHpwQUFBQkRsQk1WRVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJ4VVlXOUFBQUFXWFJTVGxNQUwyWktDRUJnR1JBelVCcS9JbU9lUlkrVVAyMmduQ0FwekEweEFTd1dWU2Vad3hOeGdDTTBSOCt2YUVnS2hSdzRVKzhFSGt0L0gxcENnb3lvb3Ywa0FsRURJVEpxdGJqZllvY0drVzg4c3ExOHZzYXJ5THlxcFptS0M3QUFBQTdtU1VSQlZIamE3VjBKWTl1MkRxWmN5NVFjSjI2enJabmpyazF6ckUzWDEvYjEySDF2YisrK1Qvei9QL0pJeVJJQjhMSmlSM1ppZnM0RlVRZnhDU1FCa0ZLRVNFaEkyQUpJa0R1dVAydzVBeXRYVDBKWWY0a1owRHYzU3dpelFOQ2dCUEQ2a0hKZEt2RVdBRnZGd0FYWThkV2Z2Wm9FdDBDYkFNbnJROHI1SGJRSTRJZmJGN0IybGoweVlOWGZyVUtnM0daUUJBMElRZzFpc2JNTTdyVGVCczR0Mks0aXY4RzJoUVR2c0cwQmdRcjBid0Z1VWdLM01HakJ6aDJzUGlCa2d2MzNBWnNlQlhnVDZuOFVTSTVRUWtKQ1FrSkNRc0xHUE1FTiswSFNpdGFBTys4eW9CQUFEL0JscDN5QWxSQlNaKytWRWtjRkxBS3NIZmp1TkZ5VTFnVTRBVElZUFBZYURGbjFkOWM0VU96SXFNakE0U0tTQW9TS0FPaXZnWU16QmVTdnNWd21IeUNEZk1iU0I1c1BoeVZjWno1QXhwcmd0b1hEdDMwVVNFaElTRWhJU0VqWW9LZTF1ak8vMHZsaHN3cllvVTlRb1NzRVN0RHQramFoRURrYmhMZlk2ckZpc0hlaGg0T3Z6SDJCWUFVY3BlSHJ1ODRRSXNncXQwNEdNUUpKaFlEdEFZNFQydlVCcjRMZ3VsN28rbmE0RERFQ0lCaHZnNGp3NnpvOHNBdFZjTEUzZUFrQ1laMHd5Si9iaUVNbUZHeEFUZ3RoakRzT0Q1dG8vQXBkMUl1MmNjY2FJZ2lYUjg3SWJnZEViMGprQWhEczkwQkVtbkQvbzhBMUh4OGZKaE1TRWhJU0VoSjJGYXN2UzEzUnpaQ08xZWorVTdyODBPaFVWZVR5M1NxdzFBWEM4VHdzVVFGVUx2RGsxQkplbmQ0WkFxR0xhM28vbGlJSVh0OFIzM0lGSXVtSFFFYWlubGcwRk5tMWRTeDJsMEVDSW12RDNXWVdZaURJbndTSW1aY3JJUVE4SEFZY3pRWXN5QXFISGRHNDljaUdXS0lDN2xKM2RBd1FpT2ZCWVFQK3d5MENyQnJZMWFQbHZJbkZDWEJYd0hzTGx5b0dDTWJQNFM1Q3VHYm9neFpFbWdCckl0RW00RzdsMHJ1SHRKZTgyQW9FMm9qRHdGZ1RGOVlNZllRQUdja0h5SEFmQU81K05YU1B3c1hoc2NUUmh1UGpMc0RTd3h4c2ZUNUFRbG9oa1pDUWtKQ1FJRHBFb0dzZGhzTURNemdqNkxYcUI1MG04TmQ4ZGVsNjJoMUhmODRqSklROXh5NFpGRFpYQlE2RklWUytPdjJ1NStlQjZCSjZPaHhpdDlRMUcyN3hCL1JZQ1BLelZnYkFaa0R3OXh1SXdQc0JYUGtNT2w4dGxwaCtGY0NPQmQvaGF5ZWdDVGQ5QkVpSWhNL082ZXRndVd0Mkdyd1c0ZHdaMWtpQmROVFFmaUlFL0hjOE50OXNKMFJFckErd0NPQk5ZdTNobmVuVWRETEJpczdvOC8yT2NuOFRkNWhFOEJHaUpUckY2eGdZYVVaSGh2SUI4ZWcxdGdnb2xuOEk1NCtTbjVPUWtKQ1FrTEJWS0c3NFFPWndPeUEwWGNXOTRhdm92MDFUQWM1cEZ1cDlGZEhaUUNoRVIyOVBicXNGdFBHV29hZUFBZ1ZETkw0cm9MWUF3QVNHSHptQXJacXRBdmZ5YlZ5dTlDZlJHZEFBdm00RE5Od1RiRG9jME92aXRvc0FnRWgxdERLRkk5WURLNVBoalEzeE50azJNWGx6TE1EYW42N1lxQW55V0FCZnI5RFF2Vlh6b2VFK0lIUjdtK2k4TUZiQyt3QndXdHgyallMQlVjRFo1ZE1CQW9MTHhJSXZwN2doZmtEMEJNWHkrOHBiR1AxMzBUOGhJU0VoWWJkUWFqK2hYSDcvTjBPRk4zM1ZicXdxTnhtSDl2Z3k0cm5CNDlwVktrUDY0K0l5ek1jYmtRRms0ZzA3QVRwaVg0bjd3aVB6UXZGb0FYWkFveEtjNS9rWU9YdlYzMlBMMVIzNG42WWVMVFFjRVgzYkduUFptdG5hWDVRM3RSNW1NQnhDTm1SdUd2aWpOM3Zxa2pwMkE5Y1YyeUF0ei9PaUJpTmtRZ2hBRElBMjBTRndDeGkxbnZTZVF1dEtRMk1CdnZudStuVG1oRU1ZbnAzOURKaUEyV3dXZmdKREFEZ0ZKd0g3aEVEUXFxTU5paENKQ2FrclNBay8xdkJaQUl3Qi9kSVhYdlFCZ0NwSWFueGNIWDVzQ0RqN2FmOHZoSUNIRHg5YXkrUDlNdHZBQ2RENmY0RUpvQ1lGU24rd0tTcFEyZzhlYW5ndFlFK3JEdU05a3djb0svdHZDZERuUnltMituVG1oS29KUEgrT204Qk1xRnVnZnJZSGxOWG5pZ1JvL1IrOSs4SlBnR1FiMUJZcDl5UUtZZURvNk1qZkI4Q2VZa0Rwandtb3Zsb0NxazRRRWZCV0gvMzJiYlBock80RXo3eHQza0dBc0orbm9BUjhqdk1UZzlFajlUUDNFV0E5b3ZKeEJYVEJrNU1UTUNacVdVQzVOeDZySDZZSlZMS2ZnSk1haXcweWc1K3liQTZaSkFTVXFCZjhkZlhCK2c0NUFVTkdBQkFMR0JqOUF3UzBwL3VvQWpPNTRkQm5BZVZlaFJJOE11ZytkZ3lrVFdaWk93cGt6ZlV6cndYWUJNU2FBQzZ2KzhCY1dBU1U5SHJNRDRBdlkzN0Frc05nWFo4QnpjR1VadWdHVytGSXB6ZkNsN2MzY0FJcUJ2SjFPbnJscUVKNTlWTXcxMldwUE80S05kNWZxLzRKQ1FrSkNWdU9GeS9DNVFVRTg5cjFmMzZLWmozYVlmQkpOVXc5d1JrSEhHTVBGdktBaFdmN1M4dEMvSUhWSncrT2F5cmFPbWFiMUxDTjlTOUx3OEJFZTVFWDJSZ0ZPNnJLZzhkZy9HeFAxZ1BwTHhBRDZtQU5OdE5FUFp0TXU0Skx5L1g5YURYSXRUTlh0R043b2JrZDRIdDZDbkRLOU5lTzBwSFJYL3ZtYmZRcjNZNFlDdWZoTitwemppdFVxdnRjb3YzSjNLRDErUHUveGFYNEo0NXZNeVZrUkJaVVBoNGVJMW5YZnpUeVZSQVd6ajVRZzBNV3B5bzdLb3pyV0djczJ1aktKb0NGd3lCZXZiMzc4dDNiTWI3L1kxR0taUW40RC94V2ZmNkJGZFN1UDVOeDhLRmk0MkhHZlY5QUxSaXZVR0hYZTlHSXFCK1l3UGxJY1ZBTGo1dU16V01mQVl0ZUFGbkFPZndkWGdEV0g2WHM0aGJ3TC9HTCtKOUpLWjB3Q3poaEZuRENMR0JFWWcvVkF1cE9xbzF2MmZXK3FxV3YyZ3BXd1R5T0hVRDNBV2kxZkpTQVYyOC8vMWg5M1BvdlBIVk1RQUZWMXFtUi93dGZxOC9mMElvSjBzWXIrV2Ntby9LcS9TcDg3Q0dnaWU0SzJrU28vUVI2ZVJpT3hSR0pGeGtCSldPWTZkK3VpS0FFSVBtelh4NU9IdjcxdzRXOEJ6UXBHcE5IOU83WlRXQWhZL0gwMU1qYTl0dDhwNU1BYXhSVTV5Z0NTOXA1a3Z2Sm9zSlBNQUhXZWdPVGNGTE5uWjB1TEF1bXZ4M0FGMlROMnQxdlZmYzMrUFp1UzRCcS8wWGdlRXZSZ2RXSnNrZDhlSktmK1FFODdjMWsxeHRnUXZLSTY4K0hRVkV2NmpMRjFZekFvMXo0TElnaHU0bXVYdDRod0NjK1VFSkNRa0xDQmpER2lXbnR5c0dKdGM4RDZxbGNJekk4RGVIemRhNSsrZ0ttNnVjVUQ4MFhlR3JpQy9qaGgrKytndzlSZGM2MS9oWFVIL04zOE9vVnZKc1RUN1FVUE4zUTVCdGFtVzhZTThjSDZUOFpqMThUQmpxOTd0OGVhTlc1TWhSdGdtSmd5cjN4SStONS9VcmpqOFlWblk3VkNVWldjRU9pVThjNlZEcVhhL1pScm1PcGdoMHpPVmdYbU9CS084WlRlQTFySTBDN1d1Z0lyWHYxVFEzQUVQRDlqdzhlL1BpOXFjOVlRRDdDTXp1Y0FMSmtCS3BrRkZyd1VJZzZWVkVZWDd2VStSaEV3RXM5VjRjdk9OV3Mrd2lJcktlM3A3SXlvRzFxV3NsVEhyeTBGYXBzZmI4OS9KNWVuSUhjVlJpeUJSbjArR29lRk8wQU92QlU4WnpBRmpBWTRQWHEyWHl1dzB0RGdOSmZqUDBaSUVmR3hSWHVVeFBIN3VhVTZWK1M2Y212WVY4QjdpRy9saHdQeDJFQ3p0U2ZaL3FyS2I2b0psK1BrQVd3NlBYbHk3MlhjN2hvVC9oYTEyNnlQZ0s0Qlh4VHlhZFVmNk5nTnExd1JBODNoS2xiZW54OFRBZ2diZjVJNFRQMXhSWThUTDE5d0h5dUd3RHVCRitQeDVNMWRvS3NEL2htMFFlY21neGNUc0xSdWE3dmtUbDhlZzRYaUFGOW9qUFU3VFhKbTBhL2p6NWFmREVEOGZZQjQzSStuOE1jQXNQZ3VrZUJVNTJZTmZYaG9kdDBNUGdLWFN4WFg0VmhBS3d3WGYrNTMyemd3MkJsRVJVOGZRQ01OVEFCN3BtQU5mb0JwMVZxdXZDa0QvZ2pac3BhWGhlNnAzelFsUDcrbGFTdmRSRlZyN0dRaHFWTzZaVkRjVlUvWVBNNE96dzh3eFowcnJrcUhoU2VoSSs5Y2pJaElTRmh0ZWdVcjQ2Kzg0SHVZajY0czBQNlB3TjQxZ3J2TjczdSt6dWovM090N3ZQbS9rTXowd1RHQm1Zd3d3Zjh6clhRYm4wcnoyWVYvN00rRFVBNW1vMEozRGNFM1BjNVFpNC9JamVVV0ZNUGZBT1hZYWJIOUZudy9OZHJBUHFhejNsc0UzcmRkOEUzNU1Zb0lnczN0ZngwK0pUT3pnWWVnT2lsQjlBaDlETnljVnFIQVo0WXEvV2ZFTnZQOGVwamUrbnVxQmhoL1o2cUgwL0pEck1ORXBBMzl6djNFNUN6Smc5d1dlQ3luTXdtMndRVXhHU3FoZVpERWs0VEFrcVl6V2I5ZWJwR1lUOEI5akVGc1gzU0thNXNBZjEyZ3BVQjFBL05WRG9jR2dJT3ZSWmdXMUR1Yi9LZCs0QitvelhlNmQwMTRsMXZKMGpFbkErS0s0OEN2YjVmYjJZVXJtdHcwSWdISXRBSGVFYkF0ZDJXVGZwRjcrbTBMTng3YjVOMVNHOVlURWhJU0VqWUllUVFFcTk5MEoza3d2SnpydFVWZmZ6WWNxY0RZaC9lTUtXQUVGQ1ZGWGlIZkZMb0gwRDVhMTh3VUlmT3B0eU9ySExtTytkV01WUXpaSDNHZzRRQ1NrQmQxdGE1dWoxS1BiNERJUUNYMndTNG52UzFSZWlYQUx3WW1CTlFwVDhXbGF4K1RhejU4UWtoWUJMTThQZzBKaUwwVFVDUEZyQVVBVDFiUUw5OWdDdWxzTkUrb09kUndNNTNiSGdVMkhrL0lDRWhJU0ZodHdFNy9SeFY4V2NCbjM1V0VFZmxZb2ZlazZ1Zkk0VlBjL1E4UTViZmN6eEEwZmdtL1AwSFhlV3R3eFQrcEFnUWFIV3labVZpTVdDOVRMNjhtcng5Qm5BcHhLZTV1TVJQVzArUFZFUkxuNjgxaWd5UGgrcXJYYjROeDNROXU1YUJ5a1A5R1c2cGUxc3UxczFmbUR1VWpVQ3Z0ai8zRUZDOUdrM3V5Zlp0ZXlDbDN0REllL3BqM3Irbnk5VVd1UWRiYkFFS2wvaU82MzVoQ2xUOWxvQVBhN1FtM2xIZU9reXFNWENFMXJ5b1lIUU1SMk1QQWJldUU4d0FMaTh1Y2JkZnB5TnlvT3JmM2dnMWU2YnV6N05NSkNRa0pDVHNJdmp6QVRHWkw2THFLbmU5M3FweURQejVnSmpNbDlGMWxidGViMVU1ZXYvTk9zRTd5OGg4SVdWWHVldjFWcFdqNE04SDNEY25hT1FEN1JzZUxPVEQ5bDFwOVZMYVE3TS9rb1czL0w0cHYrKzl2b0JnK2F6TzJ1Qnl3ZXN2OFBNT3dXd1lXeHpObDg1V3Z3NE84T3h3YkgrNzNOcmZUSkc3eXZIc21mczNrUHFJVHo3NVJORDZWRThrTDBzQStjTWg2OVo3d0Nvc0lMQy9zQlFLNzg4SWlOWUh2ejdlSmM5ci9kZEh3QWk5Zzg1QmdPdDNGNFdpMTNkWVNNZ0M5TnRHNXRDQmdIZ1QwRy9mNm1MaXNTWUNNUUtEVFVxNExBcnZQNi8xWDQ0QS9ueUFvMU5yT3NGRGJ5Y0ZYUFozcXM1T2tsK2ZkN0swdk9ISEorczJRSjkzQ0tIdllXelZZYlNySEVmZmpzeXFqbFJYT1k2K1hkbFZYZW11Y2tKQ1FrSkNRa0lzSEFDNE5ubjdDYUJ2YTR2THQ1QUFDQk5RZlVnRUhTWkFnTGhaQkZUL25pMGdNNEpBa01YVXRnd2lXVURxQTI0U0FicytDaVFrSkNRa0pDU3NHL0xtZUFMUlZaQlFkbC9vS3RuL0I5cnFleVhreWdUdyszMlQ5RitIQlhCOWI1VCsxQUtxNWUzVngwT0E2LzhONlAyNS9yZTJEeWdiVVAybHBiL2NHUXVvOTcrNStxOXFBVGRlLzFWSEFZLyt1K29IR1AxdmtSL1FpVTFwdmhNU3Roei9CL2gxT1dpeU1wc3dBQUFBQUVsRlRrU3VRbUNDXCIiLCJpbXBvcnQgJy4vaWNvbnMuc2Nzcyc7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdHZhciBleGVjT3B0aW9ucyA9IHsgaWQ6IG1vZHVsZUlkLCBtb2R1bGU6IG1vZHVsZSwgZmFjdG9yeTogX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0sIHJlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18gfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5pLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikgeyBoYW5kbGVyKGV4ZWNPcHRpb25zKTsgfSk7XG5cdG1vZHVsZSA9IGV4ZWNPcHRpb25zLm1vZHVsZTtcblx0ZXhlY09wdGlvbnMuZmFjdG9yeS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBleGVjT3B0aW9ucy5yZXF1aXJlKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBleGVjdXRpb24gaW50ZXJjZXB0b3Jcbl9fd2VicGFja19yZXF1aXJlX18uaSA9IFtdO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uaHUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGID0gKCkgPT4gKFwiSWNvbnMuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNvblwiKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMGFjMTIzNWVkNTNjZmMxZjI2OFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJJY29uczpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHQ7XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBjdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xudmFyIGluc3RhbGxlZE1vZHVsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmM7XG5cbi8vIG1vZHVsZSBhbmQgcmVxdWlyZSBjcmVhdGlvblxudmFyIGN1cnJlbnRDaGlsZE1vZHVsZTtcbnZhciBjdXJyZW50UGFyZW50cyA9IFtdO1xuXG4vLyBzdGF0dXNcbnZhciByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMgPSBbXTtcbnZhciBjdXJyZW50U3RhdHVzID0gXCJpZGxlXCI7XG5cbi8vIHdoaWxlIGRvd25sb2FkaW5nXG52YXIgYmxvY2tpbmdQcm9taXNlcztcblxuLy8gVGhlIHVwZGF0ZSBpbmZvXG52YXIgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnM7XG52YXIgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbl9fd2VicGFja19yZXF1aXJlX18uaG1yRCA9IGN1cnJlbnRNb2R1bGVEYXRhO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkucHVzaChmdW5jdGlvbiAob3B0aW9ucykge1xuXHR2YXIgbW9kdWxlID0gb3B0aW9ucy5tb2R1bGU7XG5cdHZhciByZXF1aXJlID0gY3JlYXRlUmVxdWlyZShvcHRpb25zLnJlcXVpcmUsIG9wdGlvbnMuaWQpO1xuXHRtb2R1bGUuaG90ID0gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG9wdGlvbnMuaWQsIG1vZHVsZSk7XG5cdG1vZHVsZS5wYXJlbnRzID0gY3VycmVudFBhcmVudHM7XG5cdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRvcHRpb25zLnJlcXVpcmUgPSByZXF1aXJlO1xufSk7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yQyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJID0ge307XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlcXVpcmUocmVxdWlyZSwgbW9kdWxlSWQpIHtcblx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cdGlmICghbWUpIHJldHVybiByZXF1aXJlO1xuXHR2YXIgZm4gPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuXHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG5cdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuXHRcdFx0XHR2YXIgcGFyZW50cyA9IGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cztcblx0XHRcdFx0aWYgKHBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG5cdFx0XHRcdFx0cGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuXHRcdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG5cdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuXHRcdFx0XHRcdHJlcXVlc3QgK1xuXHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG5cdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdCk7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVxdWlyZShyZXF1ZXN0KTtcblx0fTtcblx0dmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHJlcXVpcmVbbmFtZV07XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmVxdWlyZVtuYW1lXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cdGZvciAodmFyIG5hbWUgaW4gcmVxdWlyZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVxdWlyZSwgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKG5hbWUpKTtcblx0XHR9XG5cdH1cblx0Zm4uZSA9IGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0cmV0dXJuIHRyYWNrQmxvY2tpbmdQcm9taXNlKHJlcXVpcmUuZShjaHVua0lkKSk7XG5cdH07XG5cdHJldHVybiBmbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG1vZHVsZUlkLCBtZSkge1xuXHR2YXIgaG90ID0ge1xuXHRcdC8vIHByaXZhdGUgc3R1ZmZcblx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG5cdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG5cdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG5cdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG5cdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG5cdFx0X21haW46IGN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cdFx0X3JlcXVpcmVTZWxmOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IG1lLnBhcmVudHMuc2xpY2UoKTtcblx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IG1vZHVsZUlkO1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG5cdFx0fSxcblxuXHRcdC8vIE1vZHVsZSBBUElcblx0XHRhY3RpdmU6IHRydWUsXG5cdFx0YWNjZXB0OiBmdW5jdGlvbiAoZGVwLCBjYWxsYmFjaykge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHR9LFxuXHRcdGRlY2xpbmU6IGZ1bmN0aW9uIChkZXApIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG5cdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG5cdFx0fSxcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cdFx0aW52YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5fc2VsZkludmFsaWRhdGVkID0gdHJ1ZTtcblx0XHRcdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdFx0XHRjYXNlIFwiaWRsZVwiOlxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcblx0XHRcdFx0Y2FzZSBcImFwcGx5XCI6XG5cdFx0XHRcdFx0KHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChcblx0XHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBpZ25vcmUgcmVxdWVzdHMgaW4gZXJyb3Igc3RhdGVzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIE1hbmFnZW1lbnQgQVBJXG5cdFx0Y2hlY2s6IGhvdENoZWNrLFxuXHRcdGFwcGx5OiBob3RBcHBseSxcblx0XHRzdGF0dXM6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRpZiAoIWwpIHJldHVybiBjdXJyZW50U3RhdHVzO1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0dmFyIGlkeCA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblxuXHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuXHRcdGRhdGE6IGN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuXHR9O1xuXHRjdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG5cdHJldHVybiBob3Q7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXR1cyhuZXdTdGF0dXMpIHtcblx0Y3VycmVudFN0YXR1cyA9IG5ld1N0YXR1cztcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG5cdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbn1cblxuZnVuY3Rpb24gdHJhY2tCbG9ja2luZ1Byb21pc2UocHJvbWlzZSkge1xuXHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdHNldFN0YXR1cyhcInByZXBhcmVcIik7XG5cdFx0XHRibG9ja2luZ1Byb21pc2VzLnB1c2gocHJvbWlzZSk7XG5cdFx0XHR3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNldFN0YXR1cyhcInJlYWR5XCIpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0YmxvY2tpbmdQcm9taXNlcy5wdXNoKHByb21pc2UpO1xuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKSB7XG5cdGlmIChibG9ja2luZ1Byb21pc2VzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZuKCk7XG5cdHZhciBibG9ja2VyID0gYmxvY2tpbmdQcm9taXNlcztcblx0YmxvY2tpbmdQcm9taXNlcyA9IFtdO1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoYmxvY2tlcikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5T25VcGRhdGUpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG5cdH1cblx0c2V0U3RhdHVzKFwiY2hlY2tcIik7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0oKS50aGVuKGZ1bmN0aW9uICh1cGRhdGUpIHtcblx0XHRpZiAoIXVwZGF0ZSkge1xuXHRcdFx0c2V0U3RhdHVzKGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIik7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRzZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuXG5cdFx0dmFyIHVwZGF0ZWRNb2R1bGVzID0gW107XG5cdFx0YmxvY2tpbmdQcm9taXNlcyA9IFtdO1xuXHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoXG5cdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMpLnJlZHVjZShmdW5jdGlvbiAoXG5cdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRrZXlcblx0XHRcdCkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckNba2V5XShcblx0XHRcdFx0XHR1cGRhdGUuYyxcblx0XHRcdFx0XHR1cGRhdGUucixcblx0XHRcdFx0XHR1cGRhdGUubSxcblx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyxcblx0XHRcdFx0XHR1cGRhdGVkTW9kdWxlc1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdFx0XHR9LFxuXHRcdFx0W10pXG5cdFx0KS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmIChhcHBseU9uVXBkYXRlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkoYXBwbHlPblVwZGF0ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG5cblx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZE1vZHVsZXM7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJyZWFkeVwiKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0YXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKTtcblxuXHR2YXIgcmVzdWx0cyA9IGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLm1hcChmdW5jdGlvbiAoaGFuZGxlcikge1xuXHRcdHJldHVybiBoYW5kbGVyKG9wdGlvbnMpO1xuXHR9KTtcblx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSB1bmRlZmluZWQ7XG5cblx0dmFyIGVycm9ycyA9IHJlc3VsdHNcblx0XHQubWFwKGZ1bmN0aW9uIChyKSB7XG5cdFx0XHRyZXR1cm4gci5lcnJvcjtcblx0XHR9KVxuXHRcdC5maWx0ZXIoQm9vbGVhbik7XG5cblx0aWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG5cdFx0c2V0U3RhdHVzKFwiYWJvcnRcIik7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgZXJyb3JzWzBdO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG5cdHNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG5cblx0cmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRpZiAocmVzdWx0LmRpc3Bvc2UpIHJlc3VsdC5kaXNwb3NlKCk7XG5cdH0pO1xuXG5cdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2Vcblx0c2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cblx0dmFyIGVycm9yO1xuXHR2YXIgcmVwb3J0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG5cdH07XG5cblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuYXBwbHkpIHtcblx0XHRcdHZhciBtb2R1bGVzID0gcmVzdWx0LmFwcGx5KHJlcG9ydEVycm9yKTtcblx0XHRcdGlmIChtb2R1bGVzKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKG1vZHVsZXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuXHRpZiAoZXJyb3IpIHtcblx0XHRzZXRTdGF0dXMoXCJmYWlsXCIpO1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH0pO1xuXHR9XG5cblx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGxpc3QpIHtcblx0XHRcdG91dGRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBsaXN0O1xuXHRcdH0pO1xuXHR9XG5cblx0c2V0U3RhdHVzKFwiaWRsZVwiKTtcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xufVxuXG5mdW5jdGlvbiBhcHBseUludmFsaWRhdGVkTW9kdWxlcygpIHtcblx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdGlmICghY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMpIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdW5kZWZpbmVkO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIkljb25zXCI6IDBcbn07XG5cblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbnZhciBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0O1xudmFyIHdhaXRpbmdVcGRhdGVSZXNvbHZlcyA9IHt9O1xuZnVuY3Rpb24gbG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSByZXNvbHZlO1xuXHRcdC8vIHN0YXJ0IHVwZGF0ZSBjaHVuayBsb2FkaW5nXG5cdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaHUoY2h1bmtJZCk7XG5cdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWRcblx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGhvdCB1cGRhdGUgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQpO1xuXHR9KTtcbn1cblxuc2VsZltcIndlYnBhY2tIb3RVcGRhdGVJY29uc1wiXSA9IChjaHVua0lkLCBtb3JlTW9kdWxlcywgcnVudGltZSkgPT4ge1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0aWYoY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCkgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgY3VycmVudFVwZGF0ZVJ1bnRpbWUucHVzaChydW50aW1lKTtcblx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKCk7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHR9XG59O1xuXG52YXIgY3VycmVudFVwZGF0ZUNodW5rcztcbnZhciBjdXJyZW50VXBkYXRlO1xudmFyIGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGVSdW50aW1lO1xuZnVuY3Rpb24gYXBwbHlIYW5kbGVyKG9wdGlvbnMpIHtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikgZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtcjtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHVuZGVmaW5lZDtcblx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKHVwZGF0ZU1vZHVsZUlkKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG5cdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cblx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hhaW46IFtpZF0sXG5cdFx0XHRcdGlkOiBpZFxuXHRcdFx0fTtcblx0XHR9KTtcblx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuXHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuXHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFtb2R1bGUgfHxcblx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuXHRcdFx0KVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG5cdFx0XHRcdHZhciBwYXJlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbcGFyZW50SWRdO1xuXHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG5cdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcblx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcblx0XHRcdFx0cXVldWUucHVzaCh7XG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRpZDogcGFyZW50SWRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcblx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcblx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuXHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gYltpXTtcblx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcblx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuXHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG5cdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUobW9kdWxlKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyBtb2R1bGUuaWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcblx0XHQpO1xuXHR9O1xuXG5cdGZvciAodmFyIG1vZHVsZUlkIGluIGN1cnJlbnRVcGRhdGUpIHtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdFx0dmFyIG5ld01vZHVsZUZhY3RvcnkgPSBjdXJyZW50VXBkYXRlW21vZHVsZUlkXTtcblx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cblx0XHRcdHZhciByZXN1bHQ7XG5cdFx0XHRpZiAobmV3TW9kdWxlRmFjdG9yeSkge1xuXHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHMobW9kdWxlSWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0ID0ge1xuXHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG5cdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcblx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcblx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuXHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuXHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGVycm9yOiBhYm9ydEVycm9yXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9BcHBseSkge1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IG5ld01vZHVsZUZhY3Rvcnk7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG5cdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcblx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjdXJyZW50VXBkYXRlID0gdW5kZWZpbmVkO1xuXG5cdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cblx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuXHRmb3IgKHZhciBqID0gMDsgaiA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGorKykge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2pdO1xuXHRcdGlmIChcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXSAmJlxuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkICYmXG5cdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG5cdFx0XHRhcHBsaWVkVXBkYXRlW291dGRhdGVkTW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcblx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG5cdFx0XHQhX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdLmhvdC5fc2VsZkludmFsaWRhdGVkXG5cdFx0KSB7XG5cdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG5cdFx0XHRcdG1vZHVsZTogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0cmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdLmhvdC5fcmVxdWlyZVNlbGYsXG5cdFx0XHRcdGVycm9ySGFuZGxlcjogX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG5cblx0cmV0dXJuIHtcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHR9KTtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gdW5kZWZpbmVkO1xuXG5cdFx0XHR2YXIgaWR4O1xuXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG5cdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuXHRcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG5cdFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuXHRcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0ZGlzcG9zZUhhbmRsZXJzW2pdLmNhbGwobnVsbCwgZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJEW21vZHVsZUlkXSA9IGRhdGE7XG5cblx0XHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcblx0XHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcblx0XHRcdFx0ZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcblx0XHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcblx0XHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuXHRcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuXHRcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cblx0XHRcdHZhciBkZXBlbmRlbmN5O1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXBwbHk6IGZ1bmN0aW9uIChyZXBvcnRFcnJvcikge1xuXHRcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG5cdFx0XHRmb3IgKHZhciB1cGRhdGVNb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oYXBwbGllZFVwZGF0ZSwgdXBkYXRlTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW3VwZGF0ZU1vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJ1biBuZXcgcnVudGltZSBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRVcGRhdGVSdW50aW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lW2ldKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0dmFyIGFjY2VwdENhbGxiYWNrID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0aWYgKGFjY2VwdENhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGFjY2VwdENhbGxiYWNrKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGFjY2VwdENhbGxiYWNrKTtcblx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MucHVzaChkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBjYWxsYmFja3MubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3Nba10uY2FsbChudWxsLCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgbyA9IDA7IG8gPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBvKyspIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbb107XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGl0ZW0ucmVxdWlyZShtb2R1bGVJZCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9XG5cdH07XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkuanNvbnAgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGFwcGx5SGFuZGxlcnMpIHtcblx0aWYgKCFjdXJyZW50VXBkYXRlKSB7XG5cdFx0Y3VycmVudFVwZGF0ZSA9IHt9O1xuXHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSBbXTtcblx0XHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0fVxuXHRpZiAoIV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF07XG5cdH1cbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMuanNvbnAgPSBmdW5jdGlvbiAoXG5cdGNodW5rSWRzLFxuXHRyZW1vdmVkQ2h1bmtzLFxuXHRyZW1vdmVkTW9kdWxlcyxcblx0cHJvbWlzZXMsXG5cdGFwcGx5SGFuZGxlcnMsXG5cdHVwZGF0ZWRNb2R1bGVzTGlzdFxuKSB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0ge307XG5cdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gcmVtb3ZlZENodW5rcztcblx0Y3VycmVudFVwZGF0ZSA9IHJlbW92ZWRNb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcblx0XHRvYmpba2V5XSA9IGZhbHNlO1xuXHRcdHJldHVybiBvYmo7XG5cdH0sIHt9KTtcblx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0Y2h1bmtJZHMuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdGlmIChcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuXHRcdCkge1xuXHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHR9XG5cdH0pO1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yID0gZnVuY3Rpb24gKGNodW5rSWQsIHByb21pc2VzKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3MgJiZcblx0XHRcdFx0IV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuXHRcdFx0KSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpKTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIGZldGNoID09PSBcInVuZGVmaW5lZFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnQ6IG5lZWQgZmV0Y2ggQVBJXCIpO1xuXHRyZXR1cm4gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGKCkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0aWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHJldHVybjsgLy8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuXHRcdGlmKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVwZGF0ZSBtYW5pZmVzdCBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuLy8gbm8gZGVmZXJyZWQgc3RhcnR1cFxuXG4vLyBubyBqc29ucCBmdW5jdGlvblxuXG4vLyBubyBkZWZlcnJlZCBzdGFydHVwIiwiLy8gbW9kdWxlIGNhY2hlIGFyZSB1c2VkIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2ljb25zLmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./node_modules/resizer-cl/index.js":
/*!******************************************!*\
  !*** ./node_modules/resizer-cl/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _src_resizer_js__WEBPACK_IMPORTED_MODULE_0__.Resizer)
/* harmony export */ });
/* harmony import */ var _src_resizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/resizer.js */ "./node_modules/resizer-cl/src/resizer.js");



//window.Resizer = Resizer;


/***/ }),

/***/ "./node_modules/resizer-cl/src/Options.js":
/*!************************************************!*\
  !*** ./node_modules/resizer-cl/src/Options.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Options": () => (/* binding */ Options)
/* harmony export */ });
/**
 * Various interface options we can select
 */

/**
 * Interface options.
 * @param options User provided options that override the default values.
 * @constructor
 */
function Options(options) {
    options = options ? options : {};

    /// Options: vertical, horizontal, both
    this.resize = 'vertical';

    /// The resizing handle
    this.handle = 'bar';

    /// Range for grabbing
    this.grabSize = 10;

    /// Maximum speed we can resize in pixels per second
    this.maxSpeed = 1000;

    /// Use a mask (useful for iframes
    this.useMask = true;

    for(var property in options) {
        if(options.hasOwnProperty(property)) {
            if(!this.hasOwnProperty(property)) {
                throw new Error("Invalid option " + property);
            }
            this[property] = options[property];
        }
    }

}



/***/ }),

/***/ "./node_modules/resizer-cl/src/resizer-actual.js":
/*!*******************************************************!*\
  !*** ./node_modules/resizer-cl/src/resizer-actual.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizerActual": () => (/* binding */ ResizerActual)
/* harmony export */ });

function ResizerActual(element, options) {
    element.classList.add('resizer');

    // Timeout period for animated resizing
    const timeoutPeriod = 20;

    //
    // Handle options
    //
    let grabSize = options.grabSize;

    let handle = options.handle;
    if(handle === 'bar') {
        element.style.resize = 'none';
        element.style.borderBottom = grabSize + 'px solid #18453B';
    } else if(handle === 'handle') {
        element.style.resize = 'vertical';
    } else if(handle === 'none') {

    } else {
        element.style.resize = 'none';
        element.style.borderBottom = handle;
    }

    /// Are mouse move event handlers installed?
    let installedMouseListeners = false;

    /// Are touch move event handlers installed?
    let installedTouchListeners = false;

    let mask = null;

    /// Get the minimum height and width properties
    const rect = element.getBoundingClientRect();
    let height = rect.height;
    let width = rect.width;

    let minHeight = getComputedStyle(element).minHeight;
    minHeight = minHeight.substr(0, minHeight.length - 2);
    let minWidth = getComputedStyle(element).minWidth;
    minWidth = minWidth.substr(0, minWidth.length - 2);

    let timer = null;

    let targetWidth = null;
    let targetHeight = null;

    function start() {
        // Install the mouse down and touch start listeners
        element.addEventListener('mousedown', mouseDownListener);
        element.addEventListener('touchstart', touchStartListener);

        // Install the cursor listener
        // This swaps the cursor when we hover the mouse over the grab bar
        element.addEventListener('mousemove', cursorListener);
    }

    function setTarget(tw, th) {
        targetWidth = tw;
        targetHeight = th;

        // If a timer is not active, create one.
        if(timer === null) {
            timerMover();
        }
    }

    function timerMover() {
        timer = null;

        const maxPixels = options.maxSpeed * timeoutPeriod / 1000;

        if(targetHeight !== null) {
            const currentHeight = +height;
            let diff = targetHeight - currentHeight;

            if(Math.abs(diff) > maxPixels) {
                diff = diff < 0 ? -maxPixels : maxPixels;
                height = currentHeight + diff;

                element.style.height = '' + height + 'px';
            } else {
                // Not rate limited
                height = targetHeight;
                element.style.height = '' + height + 'px';
                targetHeight = null;
            }
        }

        if(targetWidth !== null) {
            const currentWidth = +width;
            let diff = targetWidth - currentWidth;

            if(Math.abs(diff) > maxPixels) {
                diff = diff < 0 ? -maxPixels : maxPixels;
                width = currentWidth + diff;

                element.style.width = '' + width + 'px';
            } else {
                // Not rate limited
                width = targetWidth;
                element.style.width = '' + width + 'px';
                targetWidth = null;
            }
        }

        if(targetHeight !== null || targetWidth !== null) {
            timer = setTimeout(timerMover, timeoutPeriod);
        }

    }

    let initialX, initialY;
    let initialWidth, initialHeight;
    let grabType = null;

    /**
     * Start the resizing on a mouse down or touch
     * @param x Mouse or touch X in pixels
     * @param y Mouse or touch Y in pixels
     */
    function moveStart(x, y) {
        initialX = x;
        initialY = y;
        let rect = element.getBoundingClientRect();
        width = +element.clientWidth;
        initialWidth = width;
        height = +element.clientHeight;
        initialHeight = height;
        targetWidth = null;
        targetHeight = null;
    }

    /**
     * Handle a mouse or finger move to a new position,
     * resulting in a resize request.
     * @param x Mouse or touch X in pixels
     * @param y Mouse or touch Y in pixels
     */
    function moveTo(x, y) {
        let dx = x - initialX;
        let dy = y - initialY;

        let newWidth = null;
        let newHeight = null;

        if(grabType === 'horizontal' || grabType === 'both') {
            // Compute a desired new width
            newWidth = initialWidth + dx;
            if (newWidth < minWidth) {
                newWidth = minWidth;
            }

        }

        if(grabType === 'vertical' || grabType === 'both') {
            const wasHeight = element.offsetHeight;

            // Compute a desired new height
            newHeight = initialHeight + dy;
            if (newHeight < minHeight) {
                newHeight = minHeight;
            }

        }

        setTarget(newWidth, newHeight);
    }

    //
    // Mouse Handling
    //

    function mouseDownListener(e) {
        const x = e.pageX;
        const y = e.pageY;

        grabType = onHandle(x, y, false);
        if(grabType !== null) {
            e.stopPropagation();
            e.preventDefault();

            moveStart(x, y);

            installMask();
            installMouseHandlers();
        }
    }

    function mouseMoveListener(e) {
        e.stopPropagation();
        e.preventDefault();

        if (e.buttons !== 1) {
            removeAll();
            return;
        }

        moveTo(e.pageX, e.pageY);
    }

    function mouseUpListener(e) {
        removeAll();
    }

    function installMouseHandlers() {
        removeHandlers();

        installedMouseListeners = true;
        document.addEventListener('mousemove', mouseMoveListener, false);
        document.addEventListener('mouseup', mouseUpListener, false);
    }

    //
    // Touch Handling
    //

    function touchStartListener(e) {
        const x = e.touches[0].pageX;
        const y = e.touches[0].pageY;

        grabType = onHandle(x, y, true);
        if(grabType !== null) {
            e.stopPropagation();
            e.preventDefault();

            moveStart(x, y);

            installMask();
            installTouchHandlers();
        }
    }

    function touchMoveListener(e) {
        e.stopPropagation();
        //e.preventDefault();

        const x = e.touches[0].pageX;
        const y = e.touches[0].pageY;

        moveTo(x, y);
    }

    function touchEndListener(e) {
        removeAll();
    }

    function installTouchHandlers() {
        removeHandlers();

        installedTouchListeners = true;
        document.addEventListener('touchmove', touchMoveListener);
        document.addEventListener('touchend', touchEndListener);
        document.addEventListener('touchcancel', touchEndListener);
    }

    //
    // Mask
    //

    function installMask() {
        if(!options.useMask) {
            return;
        }

        // Ensure none currently exists
        removeMask();

        let body = document.querySelector('body');
        mask = document.createElement('div');

        mask.style.position = 'fixed';
        mask.style.left = 0;
        mask.style.top = 0;
        mask.style.width = "100%";
        mask.style.height = '100%';
        mask.style.backgroundColor = 'transparent';
        mask.style.zIndex = 10000;
        mask.style.opacity = 0.5;
        mask.style.cursor = 'pointer';

        body.appendChild(mask);
    }

    function removeAll() {
        if(timer !== null) {
            clearTimeout(timer);
            timer = null;
        }

        removeHandlers();
        removeMask();
    }

    function removeHandlers() {
        if(installedMouseListeners) {
            document.removeEventListener('mousemove', mouseMoveListener);
            document.removeEventListener('mouseup', mouseUpListener);
            installedMouseListeners = false;
        }

        if(installedTouchListeners) {
            document.removeEventListener('touchmove', touchMoveListener);
            document.removeEventListener('touchend', touchEndListener);
            document.removeEventListener('touchcancel', touchEndListener);
            installedTouchListeners = false;
        }
    }

    function removeMask() {
        if(mask !== null) {
            const body = document.querySelector('body');
            body.removeChild(mask);
            mask = null;
        }
    }

    /**
     * Determine if an x,y location is over a handle for manipulating
     * the resizeable object.
     * @param x location in pixels
     * @param y location in pixels
     * @returns string|null if not, 'horizontal', 'vertical', 'both' if over handle and mode available.
     */
    function onHandle(x, y, touch) {
        let rect = element.getBoundingClientRect();

        const slop = touch ? 10 : 0;

        let bottom = rect.bottom + window.pageYOffset;
        let vert = y >= bottom - grabSize - slop;

        let right = rect.right + window.pageXOffset;
        let horz = x >= right - grabSize - slop;

        if(options.resize === 'both') {
            if(vert && horz) {
                return 'both';
            }
            if(vert) {
                return 'vertical';
            }

            if(horz) {
                return 'horizontal';
            }
        }

        if((options.resize === 'both' || options.resize === 'vertical') && vert) {
            return 'vertical';
        }

        if((options.resize === 'both' || options.resize === 'horizontal') && horz) {
            return 'horizontal';
        }

        return null;
    }



    let cursor = 0;

    function cursorListener(event) {
        // Swap the cursor when we are over the handle
        if (onHandle(event.pageX, event.pageY, false) !== null) {
            if (cursor !== 2) {
                element.style.cursor = 'pointer';
                cursor = 2;
            }
        } else {
            if (cursor !== 1) {
                element.style.cursor = 'text';
                cursor = 1;
            }
        }
    }

    start();
}


/***/ }),

/***/ "./node_modules/resizer-cl/src/resizer.js":
/*!************************************************!*\
  !*** ./node_modules/resizer-cl/src/resizer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Resizer": () => (/* binding */ Resizer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resizer_actual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resizer-actual */ "./node_modules/resizer-cl/src/resizer-actual.js");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options */ "./node_modules/resizer-cl/src/Options.js");
/**
 * Vertical resize support for div, textarea, iframe, etc.
 *
 * A problem with the resize feature of textarea and iframe is that it does not work in all
 * browsers (especially Edge) and is often quite quirky. This small package allows you to
 * add vertical resize ability to just about anything.
 *
 * @version 2.4.0 Added touch support. Limited speed of resizing to avoid issue when scrolling.
 */





/**
 * Constructor for a Resizer object
 * @param sel Selector or DOM element
 * @param options Options object.
 * @constructor
 */
const Resizer = function(sel, options) {
    options = new _Options__WEBPACK_IMPORTED_MODULE_1__.Options(options);

    if(typeof sel === "string") {
        var elements = document.querySelectorAll(sel);
        for(var i=0; i<elements.length; i++) {
            new _resizer_actual__WEBPACK_IMPORTED_MODULE_0__.ResizerActual(elements[i], options);
        }
    } else if(sel.nodeType) {
        new _resizer_actual__WEBPACK_IMPORTED_MODULE_0__.ResizerActual(sel, options);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Resizer);


/***/ }),

/***/ "./packages/dialog-cl/src/_dialog.scss":
/*!*********************************************!*\
  !*** ./packages/dialog-cl/src/_dialog.scss ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./_dialog.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./packages/dialog-cl/src/_dialog.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./_dialog.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./packages/dialog-cl/src/_dialog.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./_dialog.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./packages/dialog-cl/src/_dialog.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_dialog_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi9wYWNrYWdlcy9kaWFsb2ctY2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vcGFja2FnZXMvZGlhbG9nLWNsL3NyYy9Cb2R5LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3BhY2thZ2VzL2RpYWxvZy1jbC9zcmMvQm90dG9tLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3BhY2thZ2VzL2RpYWxvZy1jbC9zcmMvRE9NL1Rvb2xzLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3BhY2thZ2VzL2RpYWxvZy1jbC9zcmMvRGlhbG9nLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3BhY2thZ2VzL2RpYWxvZy1jbC9zcmMvTWFzay5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi9wYWNrYWdlcy9kaWFsb2ctY2wvc3JjL01lc3NhZ2VCb3guanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vcGFja2FnZXMvZGlhbG9nLWNsL3NyYy9PcHRpb25zLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3BhY2thZ2VzL2RpYWxvZy1jbC9zcmMvVGl0bGVCYXIuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vcGFja2FnZXMvZGlhbG9nLWNsL3NyYy9fZGlhbG9nLnNjc3MiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vbm9kZV9tb2R1bGVzL2RvbXB1cmlmeS9kaXN0L3B1cmlmeS5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi9ub2RlX21vZHVsZXMvaWNvbnMtY2wvZGlzdC9pY29ucy5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi9ub2RlX21vZHVsZXMvcmVzaXplci1jbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi9ub2RlX21vZHVsZXMvcmVzaXplci1jbC9zcmMvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi9ub2RlX21vZHVsZXMvcmVzaXplci1jbC9zcmMvcmVzaXplci1hY3R1YWwuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vbm9kZV9tb2R1bGVzL3Jlc2l6ZXItY2wvc3JjL3Jlc2l6ZXIuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vcGFja2FnZXMvZGlhbG9nLWNsL3NyYy9fZGlhbG9nLnNjc3M/M2VlYiJdLCJuYW1lcyI6WyJEaWFsb2ciLCJNZXNzYWdlQm94IiwiQm9keSIsImRpYWxvZyIsInBhcmVudERpdiIsIm9wdGlvbnMiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJUb29scyIsImNvbnRlbnQiLCJhcHBlbmRDaGlsZCIsIkJvdHRvbSIsImluaXRpYWxpemUiLCJidXR0b25zIiwiYWRkT2siLCJmb3JFYWNoIiwiaXRlbSIsImFkZEJ1dHRvbiIsImJ1dHRvbiIsInR5cGUiLCJpbm5lckhUTUwiLCJvbmNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVuZGVmaW5lZCIsImNsaWNrIiwiY2xvc2UiLCJmb2N1cyIsImNvbnRlbnRzIiwiYWRkQ2xhc3MiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiYWRkQ2xhc3NlcyIsImNsYXNzZXMiLCJzcGxpdCIsImNscyIsImNyZWF0ZUNsYXNzZWREaXYiLCJhZGRDb250ZW50IiwiaXNTdHJpbmciLCJpc0VsZW1lbnQiLCJ2YWwiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJub2RlVmFsdWUiLCJPcHRpb25zIiwiYm9keSIsIm1hc2siLCJib3R0b20iLCJmb3JtIiwiZGVmaW5lUHJvcGVydGllcyIsImdldCIsInpJbmRleCIsInN0eWxlIiwicGFyZW50IiwicXVlcnlTZWxlY3RvciIsImluc3RhbGxSZXNpemFibGUiLCJjb250YWluZXIiLCJUaXRsZUJhciIsIk1hc2siLCJwbGFjZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlkb3duIiwia2V5Q29kZSIsInN0b3BQcm9wYWdhdGlvbiIsInJlc2l6ZSIsInJzT3B0aW9ucyIsImdyYWJTaXplIiwiUmVzaXplciIsInRvUHgiLCJwYXJlbnRXaWQiLCJwYXJlbnRIaXQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImhlaWdodCIsIndpZHRoIiwidG9wIiwibGVmdCIsInJlbW92ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtb2RhbCIsInBvc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwidGl0bGUiLCJtZXNzYWdlIiwiYnV0dG9uMSIsImJ1dHRvbjIiLCJPS0NBTkNFTCIsIk9LIiwidGl0bGVCYXJCdXR0b25zIiwidGl0bGVCYXJBZGRDbGFzcyIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJFcnJvciIsImluc3RhbGxlZE1vdmVIYW5kbGVycyIsImluc3RhbGxlZFRvdWNoSGFuZGxlcnMiLCJpbml0aWFsWCIsImluaXRpYWxZIiwiaW5pdGlhbFBvc2l0aW9uWCIsImluaXRpYWxQb3NpdGlvblkiLCJodG1sIiwiYWRkQ2xvc2UiLCJhZGRDdXN0b20iLCJoMSIsIm1vdXNlRG93bkxpc3RlbmVyIiwidG91Y2hTdGFydExpc3RlbmVyIiwibW92ZVRvIiwieCIsInkiLCJkeCIsImR5IiwibmV3UG9zaXRpb25YIiwibmV3UG9zaXRpb25ZIiwiaW5zdGFsbE1vdXNlSGFuZGxlcnMiLCJyZW1vdmVIYW5kbGVycyIsIm1vdXNlTW92ZUxpc3RlbmVyIiwibW91c2VVcExpc3RlbmVyIiwicGFnZVgiLCJwYWdlWSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlIiwiaW5zdGFsbFRvdWNoSGFuZGxlcnMiLCJ0b3VjaE1vdmVMaXN0ZW5lciIsInRvdWNoRW5kTGlzdGVuZXIiLCJ0b3VjaGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLDhEQUFBLEdBQW9CQyx1REFBcEI7QUFFQSxpRUFB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O0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7QUN0MENBO0FBQ0EsSUFBSSxJQUF5RDtB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RUFBNkUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsZ0JBQWdCLEtBQUssaUJBQWlCLE1BQU0sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8saURBQWlELDRCQUE0Qiw4Q0FBOEMsa0JBQWtCLG1CQUFtQix1QkFBdUIseUJBQXlCLGlCQUFpQiw4REFBOEQsaUNBQWlDLE9BQU8saUNBQWlDLHFDQUFxQyxPQUFPLGdDQUFnQyx5Q0FBeUMsT0FBTyxpQ0FBaUMseUNBQXlDLE9BQU8sZ0NBQWdDLHlDQUF5QyxPQUFPLGlDQUFpQyx5Q0FBeUMsT0FBTyxnQ0FBZ0MseUNBQXlDLE9BQU8saUNBQWlDLHlDQUF5QyxPQUFPLGtDQUFrQyx5Q0FBeUMsT0FBTyxrQ0FBa0MseUNBQXlDLE9BQU8saUVBQWlFLDZDQUE2QyxPQUFPLG9DQUFvQyw2Q0FBNkMsT0FBTyxtQ0FBbUMsNkNBQTZDLE9BQU8sb0NBQW9DLDZDQUE2QyxPQUFPLHVDQUF1Qyw2Q0FBNkMsT0FBTyx3Q0FBd0MsNkNBQTZDLE9BQU8sdUNBQXVDLDZDQUE2QyxPQUFPLHdDQUF3Qyw2Q0FBNkMsT0FBTyxxQ0FBcUMsNkNBQTZDLE9BQU8scUNBQXFDLDZDQUE2QyxPQUFPLGdFQUFnRSw2Q0FBNkMsT0FBTyxpQ0FBaUMsNkNBQTZDLE9BQU8sZ0NBQWdDLDZDQUE2QyxPQUFPLGlDQUFpQyw2Q0FBNkMsT0FBTyxnQ0FBZ0MsNkNBQTZDLE9BQU8saUNBQWlDLDZDQUE2QyxPQUFPLGdDQUFnQyw2Q0FBNkMsT0FBTyxpQ0FBaUMsNkNBQTZDLE9BQU8sc0NBQXNDLDZDQUE2QyxPQUFPLG9DQUFvQyw2Q0FBNkMsT0FBTyxrQ0FBa0MsOENBQThDLE9BQU8sb0NBQW9DLDhDQUE4QyxPQUFPLG9DQUFvQyw4Q0FBOEMsT0FBTyx3Q0FBd0MsOENBQThDLE9BQU8sb0NBQW9DLDhDQUE4QyxPQUFPLG9DQUFvQyw4Q0FBOEMsT0FBTyxtRUFBbUUsNkNBQTZDLE9BQU8sc0NBQXNDLDZDQUE2QyxPQUFPLHFDQUFxQyw2Q0FBNkMsT0FBTyxzQ0FBc0MsNkNBQTZDLE9BQU8scUNBQXFDLDZDQUE2QyxPQUFPLHNDQUFzQyw2Q0FBNkMsT0FBTyxxQ0FBcUMsNkNBQTZDLE9BQU8sc0NBQXNDLDZDQUE2QyxPQUFPLHVDQUF1Qyw2Q0FBNkMsT0FBTyx5Q0FBeUMsNkNBQTZDLE9BQU8sdUNBQXVDLDhDQUE4QyxPQUFPLHlDQUF5Qyw4Q0FBOEMsT0FBTyx5Q0FBeUMsOENBQThDLE9BQU8seUNBQXlDLDhDQUE4QyxPQUFPLHlDQUF5Qyw4Q0FBOEMsT0FBTyx5Q0FBeUMsOENBQThDLE9BQU8saUVBQWlFLDZDQUE2QyxPQUFPLDJDQUEyQyw2Q0FBNkMsT0FBTyxpbkJBQWluQixZQUFZLGdDQUFnQyxxQkFBcUIsTUFBTSxFQUFFLHdEQUF3RCxxQkFBcUIsT0FBTyxzSkFBc0osWUFBWSxnQ0FBZ0MscUJBQXFCLE1BQU0sRUFBRSx5REFBeUQscUJBQXFCLE9BQU8sb0tBQW9LLFlBQVksZ0NBQWdDLHFCQUFxQixNQUFNLEVBQUUseURBQXlELHFCQUFxQixPQUFPLDRCQUE0QiwwQ0FBMEMsT0FBTyxpQ0FBaUMsMENBQTBDLE9BQU8scVZBQXFWLFlBQVksZ0NBQWdDLHFCQUFxQixNQUFNLEVBQUUsNERBQTRELHFCQUFxQixPQUFPLDJIQUEySCxZQUFZLGdDQUFnQyxxQkFBcUIsTUFBTSxFQUFFLDZEQUE2RCxxQkFBcUIsT0FBTyx5MEJBQXkwQix1QkFBdUI7QUFDamhwQjtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsaUNBQWlDLDJIQUEySDs7QUFFNUosNkJBQTZCLGtLQUFrSzs7QUFFL0wsaURBQWlELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Qsa0hBQWtIOztBQUU5WixzQ0FBc0MsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sa0JBQWtCLEVBQUUsYUFBYTs7QUFFckwsd0NBQXdDLGdGQUFnRixlQUFlLGVBQWUsZ0JBQWdCLG9CQUFvQixNQUFNLDBDQUEwQywrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFdmUsK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsZ0NBQW1COztBQUV4RCxnQ0FBbUI7QUFDbkIscUJBQXFCLGdDQUFtQjtBQUN4QztBQUNBLHNCQUFzQjtBQUN0Qiw0SEFBNEgsZ0NBQW1CO0FBQy9JLGlKQUFpSixnQ0FBbUI7QUFDcEssOE1BQThNLGdDQUFtQjs7OztBQUlqTzs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQUk7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QywyTUFBMk0sZ0NBQW1CO0FBQzFRO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTyxxQ0FBcUM7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHdRQUF3UTs7QUFFeFEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxnQ0FBbUI7Ozs7QUFJN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixLQUFJLEdBQUcsZ0NBQW1CLE1BQU0sQ0FBQzs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsZ0NBQW1COztBQUV6RSxnQ0FBbUI7QUFDbkIscUJBQXFCLGdDQUFtQjtBQUN4QztBQUNBLHNCQUFzQjtBQUN0QixpRkFBaUY7O0FBRWpGLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsZ0NBQW1COztBQUV6RSxnQ0FBbUI7QUFDbkIsb0VBQW9FLGdDQUFtQjs7OztBQUl2RixPQUFPOztBQUVQLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdDQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsZ0ZBQWdGLGdDQUFtQjtBQUNqSSxXQUFXLGdDQUFtQiw4QkFBOEIsc0JBQXNCLEVBQUU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsZ0NBQW1CO0FBQzdCO0FBQ0E7QUFDQSxVQUFVLGdDQUFtQjtBQUM3QjtBQUNBO0FBQ0EsVUFBVSxnQ0FBbUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0NBQW1CO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0NBQW1CLFlBQVksWUFBWTtBQUN2RDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQ0FBbUI7QUFDOUI7QUFDQSxnQkFBZ0IsZ0NBQW1CLHdCQUF3QixnQ0FBbUI7QUFDOUUsbURBQW1ELHlDQUF5QztBQUM1RjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdDQUFtQjtBQUM5QjtBQUNBLHdDQUF3QyxnQ0FBbUI7QUFDM0Q7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQ0FBbUIsMEJBQTBCLGdDQUFtQjtBQUMzRSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQ0FBbUI7QUFDOUIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0NBQW1CO0FBQzlCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdDQUFtQjtBQUM5QixpQ0FBaUMsNEJBQTRCLFFBQVE7QUFDckU7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG9CQUFvQjtBQUMvQztBQUNBLDZHQUE2RyxZQUFZLE9BQU87QUFDaEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBbUI7QUFDcEMsMkNBQTJDLGdDQUFtQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSxrQ0FBa0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdDQUFtQjtBQUM5QjtBQUNBLGlFQUFpRSxrQkFBa0I7QUFDbkY7QUFDQSwwREFBMEQsY0FBYztBQUN4RTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxnQ0FBbUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0NBQW1CO0FBQzlCO0FBQ0EsV0FBVyxnQ0FBbUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxXQUFXLGdDQUFtQjtBQUM5QixXQUFXLGdDQUFtQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0NBQW1CO0FBQ2pDLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixnQkFBZ0I7QUFDOUM7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsZ0JBQWdCO0FBQzlDO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdDQUFtQjtBQUMvQyxpQkFBaUIsZ0NBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0NBQW1CO0FBQy9DLGlCQUFpQixnQ0FBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFDQUFxQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnQ0FBbUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQ0FBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGNBQWM7QUFDZCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixvQkFBb0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0NBQW1CO0FBQzVDO0FBQ0EsZUFBZSxnQ0FBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdDQUFtQjtBQUM5QixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0NBQW1CLEtBQUssZ0NBQW1CO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGdDQUFtQjtBQUNoQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0NBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGdDQUFtQixXQUFXLGdDQUFtQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnQ0FBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMkJBQTJCO0FBQ3hEO0FBQ0EsNEJBQTRCLGdDQUFtQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdDQUFtQjtBQUNwQztBQUNBLHlCQUF5QixLQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFlBQVk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0NBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDRCQUE0QjtBQUN2RDtBQUNBO0FBQ0EsY0FBYyxnQ0FBbUI7QUFDakMsY0FBYyxnQ0FBbUI7QUFDakM7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQ0FBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdDQUFtQjtBQUMzQyw2QkFBNkIsZ0NBQW1CO0FBQ2hELGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdDQUFtQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNEJBQTRCO0FBQ3REO0FBQ0E7QUFDQSxlQUFlLGdDQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdDQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRCQUE0QjtBQUN0RCw0QkFBNEIsZ0NBQW1CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQW1CO0FBQ3RDLHlCQUF5QixnQ0FBbUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVDQUF1QztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQW1CO0FBQ3RDLGdCQUFnQixnQ0FBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaUNBQWlDO0FBQzlELHVDQUF1QyxnQ0FBbUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQW1CO0FBQ3RDLDZCQUE2QixnQ0FBbUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1Q0FBdUM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHNCQUFzQjtBQUN0RDtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHdDQUF3QztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0NBQW1CO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBbUI7QUFDcEMsdUNBQXVDLGdDQUFtQjtBQUMxRDtBQUNBO0FBQ0EsV0FBVyxnQ0FBbUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLElBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQ0FBbUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixnQkFBZ0IsZ0NBQW1CO0FBQ25DLGFBQWEsZ0NBQW1CO0FBQ2hDO0FBQ0E7QUFDQSxnQkFBZ0IsZ0NBQW1CO0FBQ25DLGVBQWUsZ0NBQW1CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0NBQW1CO0FBQzlCO0FBQ0EseUJBQXlCLGdDQUFtQixLQUFLLGdDQUFtQjtBQUNwRSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0NBQW1CO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLENBQUM7QUFDRCwyQ0FBMkMsY0FBYyxtZ2xIOzs7Ozs7Ozs7Ozs7Ozs7O0FDbmtEaEI7O0FBRWI7QUFDNUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOztBQUVMLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1WEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQztBQUNiOzs7QUFHbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxrQkFBa0IsNkNBQU87O0FBRXpCO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDLGdCQUFnQiwwREFBYTtBQUM3QjtBQUNBLEtBQUs7QUFDTCxZQUFZLDBEQUFhO0FBQ3pCO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakN3RTtBQUMvRixZQUFvTzs7QUFFcE87O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsbU1BQU87OztBQUd4QixJQUFJLElBQVU7QUFDZCxPQUFPLDBNQUFjLElBQUksVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQiwwTUFBYzs7QUFFbEMsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSw0WUFBbU07QUFDek0sTUFBTTtBQUFBO0FBQ04sc0NBQXNDLDBNQUFjO0FBQ3BELGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBLDBCQUEwQiwwTUFBYzs7QUFFeEMscUJBQXFCLG1NQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLDBNQUFjLE1BQU0sRSIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3JjL3BvbHlmaWxscy9hbGwuanMnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJy4vc3JjL0RpYWxvZy5qcyc7XHJcbmltcG9ydCBNZXNzYWdlQm94IGZyb20gJy4vc3JjL01lc3NhZ2VCb3guanMnO1xyXG5pbXBvcnQgJy4vc3JjL19kaWFsb2cuc2Nzcyc7XHJcbmltcG9ydCAnaWNvbnMtY2wnO1xyXG5cclxuRGlhbG9nLk1lc3NhZ2VCb3ggPSBNZXNzYWdlQm94O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nO1xyXG5leHBvcnQge0RpYWxvZ307XHJcblxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogTWlkZGxlIHNlY3Rpb24gb2YgZGlhbG9nIGJveFxyXG4gKi9cclxuXHJcbmltcG9ydCBUb29scyBmcm9tICcuL0RPTS9Ub29scy5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEJvZHkgPSBmdW5jdGlvbihkaWFsb2csIHBhcmVudERpdikge1xyXG4gICAgbGV0IG9wdGlvbnMgPSBkaWFsb2cub3B0aW9ucztcclxuXHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLWNsLWJvZHknKTtcclxuXHJcbiAgICBUb29scy5hZGRDb250ZW50KGRpdiwgb3B0aW9ucy5jb250ZW50KTtcclxuXHJcbiAgICAvLyBkaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdkaWFsb2ctY2wtYm9keScsIG9wdGlvbnMuY29udGVudCk7XHJcbiAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICB0aGlzLmRpdiA9IGRpdjtcclxufVxyXG4iLCJpbXBvcnQgVG9vbHMgZnJvbSAnLi9ET00vVG9vbHMnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBib3R0b20gYnV0dG9ucyBzZWN0aW9uIG9mIHRoZSBkaWFsb2cgYm94XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxubGV0IEJvdHRvbSA9IGZ1bmN0aW9uKGRpYWxvZywgcGFyZW50RGl2KSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGRpYWxvZy5vcHRpb25zO1xyXG5cclxuICAgIGxldCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGxldCBodG1sID0gYDxidXR0b24gY2xhc3M9XCJjbC1kaWFsb2ctYnRuXCI+T2s8L2J1dHRvbj48YnV0dG9uIGNsYXNzPVwiY2wtZGlhbG9nLWJ0blwiPkNhbmNlbDwvYnV0dG9uPmA7XHJcbiAgICAgICAgbGV0IGRpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLWRpYWxvZy1ib3R0b20nKTtcclxuICAgICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy5idXR0b25zID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGFkZE9rKGRpdik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5idXR0b25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGFkZEJ1dHRvbihkaXYsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkT2soZGl2LCBpdGVtKSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdPayc7XHJcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYoaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uY2xpY2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGljayhkaWFsb2cpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbi5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRCdXR0b24oZGl2LCBpdGVtKSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGl0ZW0uY29udGVudHM7XHJcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYoaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uY2xpY2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGljayhkaWFsb2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpdGVtLmNsYXNzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoaXRlbS5jbGFzcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpdGVtLmZvY3VzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCk7XHJcblxyXG4gICAgdGhpcy5kZWZhdWx0ID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIG9wdGlvbnMuYnV0dG9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHQgICAgaWYoaXRlbS5kZWZhdWx0ID09PSB0cnVlICYmIGl0ZW0uY2xpY2sgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHQgICAgaXRlbS5jbGljayhkaWFsb2cpO1xyXG4gICAgICAgICAgICB9XHJcblx0ICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3R0b207XHJcblxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogQ29udmVuaWVuY2UgZnVuY3Rpb25zIGZvciB0aGUgRE9NLlxyXG4gKiBUb29scyB0aGF0IGF2b2lkIGhhdmluZyB0byBoYXZlIGpRdWVyeSBpbnN0YWxsZWQuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvb2xzID0gZnVuY3Rpb24oKSB7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQWRkIGEgY2xhc3MgdG8gYW4gZWxlbWVudFxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGFkZCB0b1xyXG4gKiBAcGFyYW0gY2xhc3NOYW1lIENsYXNzIHRvIGFkZFxyXG4gKi9cclxuVG9vbHMuYWRkQ2xhc3MgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdClcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIGVsc2VcclxuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XHJcbn1cclxuXHJcblRvb2xzLmFkZENsYXNzZXMgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzc2VzKSB7XHJcbiAgICBpZihjbGFzc2VzID09PSB1bmRlZmluZWQgfHwgY2xhc3NlcyA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaCgoY2xzKSA9PiB7XHJcbiAgICAgICAgVG9vbHMuYWRkQ2xhc3MoZWxlbWVudCwgY2xzKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgRElWIHdpdGggYSBwcm92aWRlZCBjbGFzcyBuYW1lLlxyXG4gKiBAcGFyYW0gY2xhc3NOYW1lIENsYXNzIHRvIGFkZCB0byB0aGUgZGl2XHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGRpdi4gSFRNTCBvciBFbGVtZW50XHJcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBDcmVhdGVkIERPTSBFbGVtZW50XHJcbiAqL1xyXG5Ub29scy5jcmVhdGVDbGFzc2VkRGl2ID0gZnVuY3Rpb24oY2xhc3NOYW1lLCBjb250ZW50KSB7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBUb29scy5hZGRDbGFzcyhkaXYsIGNsYXNzTmFtZSk7XHJcbiAgICBUb29scy5hZGRDb250ZW50KGRpdiwgY29udGVudCk7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG4vKipcclxuICogQWRkIGNvbnRlbnQgdG8gYW4gZWxlbWVudC5cclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0byBhZGQgdG9cclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudC4gQ2FuIGJlIEhUTUwgb3IgYW4gRWxlbWVudC5cclxuICovXHJcblRvb2xzLmFkZENvbnRlbnQgPSBmdW5jdGlvbihlbGVtZW50LCBjb250ZW50KSB7XHJcbiAgICBpZihUb29scy5pc1N0cmluZyhjb250ZW50KSkge1xyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XHJcbiAgICB9IGVsc2UgaWYoVG9vbHMuaXNFbGVtZW50KGNvbnRlbnQpKSB7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuVG9vbHMuaXNTdHJpbmcgPSBmdW5jdGlvbih2YWwpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCAoKCEhdmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpO1xyXG59XHJcblxyXG5Ub29scy5pc0VsZW1lbnQgPSBmdW5jdGlvbih2YWwpIHtcclxuICAgIHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwgJiYgdmFsLm5vZGVWYWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29scztcclxuXHJcbiIsImltcG9ydCB7T3B0aW9uc30gZnJvbSAnLi9PcHRpb25zLmpzJztcclxuaW1wb3J0IHtUaXRsZUJhcn0gZnJvbSAnLi9UaXRsZUJhcic7XHJcbmltcG9ydCB7Qm9keX0gZnJvbSAnLi9Cb2R5LmpzJztcclxuaW1wb3J0IEJvdHRvbSBmcm9tICcuL0JvdHRvbS5qcyc7XHJcbmltcG9ydCBUb29scyBmcm9tICcuL0RPTS9Ub29scy5qcyc7XHJcbmltcG9ydCB7TWFza30gZnJvbSAnLi9NYXNrLmpzJztcclxuXHJcbmltcG9ydCBSZXNpemVyIGZyb20gJ3Jlc2l6ZXItY2wnO1xyXG5cclxuLyoqXHJcbiAqIEZsZXhpYmxlIGFuZCBjb25maWd1cmFibGUgZGlhbG9nIGJveCBvYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqXHJcbiAqIEB2ZXJzaW9uIDEuMC40IFRvdWNoIHN1cHBvcnQgZm9yIHRpdGxlIGJhciBkcmFnZ2luZ1xyXG4gKiBAcHJvcGVydHkge2VsZW1lbnR9IGZvcm0gR2V0IHRoZSBmb3JtIERPTSBlbGVtZW50IChpZiB1c2VkKVxyXG4gKi9cclxubGV0IERpYWxvZyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblxyXG4gICAgbGV0IGJvZHkgPSBudWxsLCBtYXNrID0gbnVsbCwgYm90dG9tID0gbnVsbDtcclxuICAgIGxldCBmb3JtID0gbnVsbDtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgZm9ybToge2dldDogZnVuY3Rpb24oKSB7cmV0dXJuIGZvcm19fVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuICAgICAgICBEaWFsb2cuekluZGV4ICs9IDI7XHJcbiAgICAgICAgdGhpcy56SW5kZXggPSBEaWFsb2cuekluZGV4O1xyXG5cclxuICAgICAgICBsZXQgZGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignZGlhbG9nLWNsJyk7XHJcbiAgICAgICAgVG9vbHMuYWRkQ2xhc3NlcyhkaXYsIG9wdGlvbnMuYWRkQ2xhc3MpO1xyXG5cclxuICAgICAgICB0aGlzLmRpdiA9IGRpdjtcclxuICAgICAgICBkaXYuc3R5bGUuekluZGV4ID0gdGhpcy56SW5kZXg7XHJcblxyXG4gICAgICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgICAgIGluc3RhbGxSZXNpemFibGUoZGl2KTtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRpdjtcclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy5mb3JtKSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgb3B0aW9uYWwgc3Vycm91bmRpbmcgZm9ybVxyXG4gICAgICAgICAgICBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXIgPSBmb3JtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3IFRpdGxlQmFyKHRoaXMsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgYm9keSA9IG5ldyBCb2R5KHRoaXMsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgaWYob3B0aW9ucy5idXR0b25zICE9PSBmYWxzZSkge1xyXG5cdCAgICAgICAgYm90dG9tID0gbmV3IEJvdHRvbSh0aGlzLCBjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXNrID0gbmV3IE1hc2sodGhpcyk7XHJcblxyXG4gICAgICAgIHBsYWNlKGRpdiwgb3B0aW9ucy5wYXJlbnQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93biwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qga2V5ZG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGluc3RhbGxSZXNpemFibGUgPSAoZGl2KSA9PiB7XHJcbiAgICAgICAgaWYob3B0aW9ucy5yZXNpemUgIT09ICdub25lJykge1xyXG4gICAgICAgICAgICBsZXQgcnNPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgJ3Jlc2l6ZSc6IG9wdGlvbnMucmVzaXplLFxyXG4gICAgICAgICAgICAgICAgJ2hhbmRsZSc6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICdncmFiU2l6ZSc6IG9wdGlvbnMuZ3JhYlNpemVcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIG5ldyBSZXNpemVyKGRpdiwgcnNPcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHRvUHgodmFsKSB7XHJcbiAgICAgICAgcmV0dXJuICcnICsgdmFsICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBsYWNlIHRoZSBkaWFsb2cgYm94IGNlbnRlcmVkIGluIHRoZSBwYXJlbnQuXHJcbiAgICAgKiBAcGFyYW0gZGl2IERpYWxvZyBib3ggZGl2XHJcbiAgICAgKiBAcGFyYW0gcGFyZW50IFBhcmVudCBkaXZcclxuICAgICAqL1xyXG4gICAgY29uc3QgcGxhY2UgPSAoZGl2LCBwYXJlbnQpID0+IHtcclxuICAgICAgICBsZXQgcGFyZW50V2lkO1xyXG4gICAgICAgIGxldCBwYXJlbnRIaXQ7XHJcblxyXG4gICAgICAgIGlmKHBhcmVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBwYXJlbnRXaWQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICAgICAgcGFyZW50SGl0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBhcmVudFdpZCA9IHBhcmVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgcGFyZW50SGl0ID0gcGFyZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoZWlnaHQgPSBkaXYub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGRpdi5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgICAgbGV0IHRvcCA9IHBhcmVudEhpdC8yIC0gaGVpZ2h0LzI7XHJcbiAgICAgICAgaWYodG9wIDwgMTApIHtcclxuICAgICAgICAgICAgdG9wID0gMTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGVmdCA9IHBhcmVudFdpZC8yIC0gd2lkdGgvMjtcclxuICAgICAgICBpZihsZWZ0IDwgMCkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gdG9QeChsZWZ0KTtcclxuICAgICAgICBkaXYuc3R5bGUudG9wID0gdG9QeCh0b3ApO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKTtcclxuXHJcbiAgICB0aGlzLmFkZENvbnRlbnQgPSBmdW5jdGlvbihjb250ZW50KSB7XHJcbiAgICAgICAgVG9vbHMuYWRkQ29udGVudChib2R5LmRpdiwgY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jbG9zZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG1hc2sucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5kaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmRpdik7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWRvd24sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIENhbGxpbmcgaXMgZXF1aXZhbGVudCB0byBwcmVzc2luZyB0aGUgZmlyc3QgZGVmYXVsdCBidXR0b25cclxuXHQgKi9cclxuXHR0aGlzLmRlZmF1bHQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZihib3R0b20gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgYm90dG9tLmRlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkRpYWxvZy56SW5kZXggPSAxMDAwMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpYWxvZztcclxuXHJcbiIsIi8qKlxyXG4gKiBNYXNrIHRoYXQgYWxsb3dzIHRoZSBkaWFsb2cgYm94IHRvIGJlIG1vZGFsLlxyXG4gKi9cclxuXHJcbmltcG9ydCBUb29scyBmcm9tICcuL0RPTS9Ub29scy5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgTWFzayA9IGZ1bmN0aW9uKGRpYWxvZykge1xyXG4gICAgbGV0IG9wdGlvbnMgPSBkaWFsb2cub3B0aW9ucztcclxuXHJcbiAgICBsZXQgbWFzayA9IG51bGw7XHJcblxyXG4gICAgaWYob3B0aW9ucy5tb2RhbCkge1xyXG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIG1hc2sgPSAgVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignbWFzaycpOyAvLyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgbWFzay5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgbWFzay5zdHlsZS5sZWZ0ID0gMDtcclxuICAgICAgICBtYXNrLnN0eWxlLnRvcCA9IDA7XHJcbiAgICAgICAgbWFzay5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIG1hc2suc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgIG1hc2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICBtYXNrLnN0eWxlLnpJbmRleCA9IGRpYWxvZy56SW5kZXggLSAxO1xyXG5cclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1hc2spO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYobWFzayAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChtYXNrKTtcclxuICAgICAgICAgICAgbWFzayA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCIvKipcclxuICogSGFuZHkgU2ltcGxlIE1lc3NhZ2UgQm94XHJcbiAqL1xyXG5cclxuaW1wb3J0IERpYWxvZyBmcm9tICcuL0RpYWxvZy5qcyc7XHJcblxyXG5sZXQgTWVzc2FnZUJveCA9IGZ1bmN0aW9uKHRpdGxlLCBtZXNzYWdlLCB0eXBlLCBidXR0b24xLCBidXR0b24yKSB7XHJcbiAgICAvLyBEZWZhdWx0OiBPS1xyXG4gICAgbGV0IGJ1dHRvbnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb250ZW50czogJ09rJyxcclxuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKGRpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgaWYoYnV0dG9uMSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uMSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdmb2N1cyc6IHRydWVcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIGlmKHR5cGUgPT09IE1lc3NhZ2VCb3guT0tDQU5DRUwpIHtcclxuICAgICAgICBidXR0b25zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50czogJ09rJyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbihkaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihidXR0b24xICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uMSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnZm9jdXMnOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRzOiAnQ2FuY2VsJyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbihkaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihidXR0b24yICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uMigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICAgIGxldCBkaWFsb2cgPSBuZXcgRGlhbG9nKHtcclxuICAgICAgICAgICd0aXRsZSc6IHRpdGxlLFxyXG4gICAgICAgICAgJ2NvbnRlbnQnOiAnPGRpdiBjbGFzcz1cIm1lc3NhZ2UtY2xcIj48cD4nICsgbWVzc2FnZSArICc8L3A+PC9kaXY+JyxcclxuICAgICAgICAgICdidXR0b25zJzogYnV0dG9uc1xyXG4gICAgIH0pO1xyXG59XHJcblxyXG5NZXNzYWdlQm94Lk9LID0gMDtcclxuTWVzc2FnZUJveC5PS0NBTkNFTCA9IDE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQm94O1xyXG5cclxuIiwiLyoqXHJcbiAqIFZhcmlvdXMgaW50ZXJmYWNlIG9wdGlvbnMgd2UgY2FuIHNlbGVjdFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2Ugb3B0aW9ucy5cclxuICogQHBhcmFtIG9wdGlvbnMgVXNlciBwcm92aWRlZCBvcHRpb25zIHRoYXQgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgdmFsdWVzLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgPyBvcHRpb25zIDoge307XHJcblxyXG4gICAgLy8vIFRpdGxlIGJhciB0ZXh0XHJcbiAgICB0aGlzLnRpdGxlID0gJ0RpYWxvZyBCb3gnO1xyXG5cclxuICAgIC8vLyBBbnkgYWRkZWQgY2xhc3Mgb3IgY2xhc3NlcyBmb3IgdGhlIG1haW4gZGlhbG9nIGJveCBkaXZcclxuICAgIC8vLyBDYW4gYmUgYSBzdHJpbmcgb3IgbXVsdGlwbGUgc3RyaW5ncyBzcGFjZSBkZWxpbWl0ZWRcclxuICAgIHRoaXMuYWRkQ2xhc3MgPSBudWxsO1xyXG5cclxuICAgIC8vLyBJcyB0aGlzIGRpYWxvZyBib3ggcmVzaXphYmxlP1xyXG4gICAgLy8vIE9wdGlvbnMgYXJlOiAnbm9uZScsICd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJ1xyXG4gICAgdGhpcy5yZXNpemUgPSAnbm9uZSc7XHJcblxyXG4gICAgLy8vIFNpemUgb2YgdGhlIGJvcmRlciBlZGdlIHdlIGNhbiBncmFiIGlmIHJlc2l6YWJsZSBpbiBwaXhlbHNcclxuICAgIHRoaXMuZ3JhYlNpemUgPSA0O1xyXG5cclxuICAgIC8vLyBBcnJheSBvZiB0aXRsZSBiYXIgYnV0dG9ucyB0byBhZGQuXHJcbiAgICAvLy8gSWYgbnVsbCwgYSBjbG9zZSBidXR0b24gaXMgYWRkZWQgYXV0b21hdGljYWxseS5cclxuICAgIC8vLyBPdGhlcndpc2UsIGFuIGFycmF5IG9mIG9iamVjdHMsIHdpdGggdGhlc2UgZmllbGRzOlxyXG4gICAgLy8vICAgdHlwZTogJ2Nsb3NlJyBmb3IgYSBjbG9zZSAgYnV0dG9uLCAnY3VzdG9tJyBmb3IgY3VzdG9tIGJ1dHRvbiBjb250ZW50c1xyXG4gICAgLy8vICAgY29udGVudHM6IEhUTUwgdG8gcGxhY2UgaW5zaWRlIGJ1dHRvbiB0YWdcclxuICAgIC8vLyAgIGNsaWNrOiBDbGljayBoYW5kbGVyXHJcbiAgICB0aGlzLnRpdGxlQmFyQnV0dG9ucyA9IG51bGw7XHJcblxyXG4gICAgLy8vIEFueSBhZGRlZCBjbGFzcyBvciBjbGFzc2VzIGZvciB0aGUgdGl0bGUgYmFyIGRpdlxyXG4gICAgLy8vIENhbiBiZSBhIHN0cmluZyBvciBtdWx0aXBsZSBzdHJpbmdzIHNwYWNlIGRlbGltaXRlZFxyXG4gICAgdGhpcy50aXRsZUJhckFkZENsYXNzID0gbnVsbDtcclxuXHJcbiAgICAvLy8gQXJyYXkgb2YgYnV0dG9ucyBmb3IgdGhlIGJvdHRvbS5cclxuICAgIC8vLyBJZiBudWxsLCBhbiBPayBidXR0b24gaXMgYWRkZWQgYXV0b21hdGljYWxseS5cclxuICAgIC8vLyBPdGhlcndpc2UsIGFuIGFycmF5IG9mIG9iamVjdHMsIHdpdGggdGhlc2UgZmllbGRzOlxyXG4gICAgLy8vICAgY29udGVudHM6IElmIHByb3ZpZGVkLCBIVE1MIHRvIHBsYWNlIGluc2lkZSBidXR0b24gdGFnXHJcbiAgICAvLy8gICBjbGljazogQ2xpY2sgaGFuZGxlclxyXG4gICAgLy8vICAgZm9jdXM6IHRydWUgaWYgd2Ugd2FudCB0byBzZXQgZm9jdXMgb24gdGhpcyBidXR0b25cclxuICAgIC8vLyAgIGRlZmF1bHQ6IHRydWUgaWYgdGhpcyBpcyB0aGUgZGVmYXVsdCBidXR0b25cclxuICAgIC8vLyAgIGNsYXNzOiBDbGFzcyB0byBhZGQgdG8gdGhlIGJ1dHRvblxyXG4gICAgdGhpcy5idXR0b25zID0gbnVsbDtcclxuXHJcbiAgICAvLy8gQ29udGVudCB0byBhZGQgdG8gdGhlIGRpYWxvZyBib3guIElmIG51bGwsIG5vbmUgaXMgYWRkZWQgb24gY3JlYXRpb24uXHJcbiAgICB0aGlzLmNvbnRlbnQgPSBudWxsO1xyXG5cclxuICAgIC8vLyBJcyB0aGlzIGEgbW9kYWwgZGlhbG9nIGJveD8gSWYgdHJ1ZSwgY29udHJvbHMgdW5kZXJuZWF0aCBhcmUgZGlzYWJsZWQuXHJcbiAgICB0aGlzLm1vZGFsID0gdHJ1ZTtcclxuXHJcbiAgICAvLy8gU3BlY2lmaWVzIHdoYXQgZWxlbWVudCB0aGUgZGlhbG9nIGJveCBzaG91bGQgYmUgY2VudGVyZWQgaW4uXHJcbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XHJcblxyXG4gICAgLy8vIFNob3VsZCB3ZSBhZGQgYSBmb3JtP1xyXG4gICAgdGhpcy5mb3JtID0gdHJ1ZTtcclxuXHJcbiAgICBmb3IodmFyIHByb3BlcnR5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICBpZihvcHRpb25zLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uIFwiICsgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXNbcHJvcGVydHldID0gb3B0aW9uc1twcm9wZXJ0eV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogVGl0bGUgYmFyIG1hbmFnZW1lbnRcclxuICovXHJcblxyXG5pbXBvcnQgVG9vbHMgZnJvbSAnLi9ET00vVG9vbHMuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRpdGxlQmFyKGRpYWxvZywgcGFyZW50RGl2KSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGRpYWxvZy5vcHRpb25zO1xyXG5cclxuICAgIC8vLyBNb3VzZSBtb3ZlIGV2ZW50IGhhbmRsZXJzIGluc3RhbGxlZCBmbGFnXHJcbiAgICBsZXQgaW5zdGFsbGVkTW92ZUhhbmRsZXJzID0gZmFsc2U7XHJcblxyXG4gICAgLy8vIFRvdWNoIG1vdmUgZXZlbnQgaGFuZGxlcnMgaW5zdGFsbGVkIGZsYWdcclxuICAgIGxldCBpbnN0YWxsZWRUb3VjaEhhbmRsZXJzID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IGluaXRpYWxYLCBpbml0aWFsWTtcclxuICAgIGxldCBpbml0aWFsUG9zaXRpb25YLCBpbml0aWFsUG9zaXRpb25ZO1xyXG5cclxuICAgIGxldCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBodG1sID0gYDxoMT4ke29wdGlvbnMudGl0bGV9PC9oMT5gO1xyXG4gICAgICAgIGxldCBkaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdkaWFsb2ctY2wtdG9wJywgaHRtbCk7XHJcbiAgICAgICAgVG9vbHMuYWRkQ2xhc3NlcyhkaXYsIG9wdGlvbnMudGl0bGVCYXJBZGRDbGFzcyk7XHJcbiAgICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnMudGl0bGVCYXJCdXR0b25zID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGFkZENsb3NlKGRpdik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3B0aW9ucy50aXRsZUJhckJ1dHRvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS50eXBlID09PSAnY2xvc2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xvc2UoZGl2LCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihpdGVtLnR5cGUgPT09ICdjdXN0b20nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkQ3VzdG9tKGRpdiwgaXRlbSk7IC8vIGFkZEN1c3RvbShkaXYsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgaDEgPSBkaXYucXVlcnlTZWxlY3RvcignaDEnKTtcclxuXHJcbiAgICAgICAgaDEuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duTGlzdGVuZXIpO1xyXG4gICAgICAgIGgxLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0b3VjaFN0YXJ0TGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQ2xvc2UoZGl2LCBpdGVtKSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzKGJ1dHRvbiwgJ2RpYWxvZy1jbC10Yi1idXR0b24nKTtcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwiaWNvbnMtY2wgaWNvbnMtY2wtY2xvc2VcIj4nO1xyXG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0gIT09IHVuZGVmaW5lZCAmJiBpdGVtLmNsaWNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xpY2soKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRDdXN0b20oZGl2LCBpdGVtKSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzKGJ1dHRvbiwgJ2RpYWxvZy1jbC10Yi1idXR0b24nKTtcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gaXRlbS5jb250ZW50cztcclxuICAgICAgICBidXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZihpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbS5jbGljayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3ZlVG8oeCwgeSkge1xyXG4gICAgICAgIGxldCBkeCA9IHggLSBpbml0aWFsWDtcclxuICAgICAgICBsZXQgZHkgPSB5IC0gaW5pdGlhbFk7XHJcblxyXG4gICAgICAgIGxldCBuZXdQb3NpdGlvblggPSBpbml0aWFsUG9zaXRpb25YICsgZHg7XHJcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uWSA9IGluaXRpYWxQb3NpdGlvblkgKyBkeTtcclxuXHJcbiAgICAgICAgZGlhbG9nLmRpdi5zdHlsZS5sZWZ0ID0gbmV3UG9zaXRpb25YICsgJ3B4JztcclxuICAgICAgICBkaWFsb2cuZGl2LnN0eWxlLnRvcCA9IG5ld1Bvc2l0aW9uWSArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIE1vdXNlIGhhbmRsZXJzXHJcbiAgICAvL1xyXG5cclxuICAgIGZ1bmN0aW9uIGluc3RhbGxNb3VzZUhhbmRsZXJzKCkge1xyXG4gICAgICAgIHJlbW92ZUhhbmRsZXJzKCk7XHJcblxyXG4gICAgICAgIGluc3RhbGxlZE1vdmVIYW5kbGVycyA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZURvd25MaXN0ZW5lcihldmVudCkge1xyXG4gICAgICAgIGluaXRpYWxYID0gZXZlbnQucGFnZVg7XHJcbiAgICAgICAgaW5pdGlhbFkgPSBldmVudC5wYWdlWTtcclxuXHJcbiAgICAgICAgbGV0IHJlY3QgPSBkaWFsb2cuZGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGluaXRpYWxQb3NpdGlvblggPSByZWN0LmxlZnQ7XHJcbiAgICAgICAgaW5pdGlhbFBvc2l0aW9uWSA9IHJlY3QudG9wO1xyXG5cclxuICAgICAgICBpbnN0YWxsTW91c2VIYW5kbGVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlTW92ZUxpc3RlbmVyKGUpIHtcclxuICAgICAgICBpZihlLmJ1dHRvbnMgIT09IDEpIHtcclxuICAgICAgICAgICAgcmVtb3ZlSGFuZGxlcnMoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbW92ZVRvKGUucGFnZVgsIGUucGFnZVkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlVXBMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgcmVtb3ZlSGFuZGxlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gVG91Y2ggaGFuZGxlcnNcclxuICAgIC8vXHJcblxyXG4gICAgZnVuY3Rpb24gaW5zdGFsbFRvdWNoSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgcmVtb3ZlSGFuZGxlcnMoKTtcclxuXHJcbiAgICAgICAgaW5zdGFsbGVkVG91Y2hIYW5kbGVycyA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2hNb3ZlTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hFbmRMaXN0ZW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaEVuZExpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gdG91Y2hTdGFydExpc3RlbmVyKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaW5pdGlhbFggPSBldmVudC50b3VjaGVzWzBdLnBhZ2VYO1xyXG4gICAgICAgIGluaXRpYWxZID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWTtcclxuXHJcbiAgICAgICAgbGV0IHJlY3QgPSBkaWFsb2cuZGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGluaXRpYWxQb3NpdGlvblggPSByZWN0LmxlZnQ7XHJcbiAgICAgICAgaW5pdGlhbFBvc2l0aW9uWSA9IHJlY3QudG9wO1xyXG5cclxuICAgICAgICBpbnN0YWxsVG91Y2hIYW5kbGVycygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiB0b3VjaE1vdmVMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgbW92ZVRvKGUudG91Y2hlc1swXS5wYWdlWCwgZS50b3VjaGVzWzBdLnBhZ2VZKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b3VjaEVuZExpc3RlbmVyKGUpIHtcclxuICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGFsbCBpbnN0YWxsZWQgdGVtcG9yYXJ5IGhhbmRsZXJzXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUhhbmRsZXJzKCkge1xyXG4gICAgICAgIGlmKGluc3RhbGxlZE1vdmVIYW5kbGVycykge1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcExpc3RlbmVyKTtcclxuICAgICAgICAgICAgaW5zdGFsbGVkTW92ZUhhbmRsZXJzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpbnN0YWxsZWRUb3VjaEhhbmRsZXJzKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaEVuZExpc3RlbmVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0b3VjaEVuZExpc3RlbmVyKTtcclxuICAgICAgICAgICAgaW5zdGFsbGVkVG91Y2hIYW5kbGVycyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCk7XHJcbn1cclxuXHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmRpYWxvZy1jbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDQ0NDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgbWluLXdpZHRoOiAxNTBweDtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtaW4taGVpZ2h0OiAxNTBweDtcXG4gIG1heC1oZWlnaHQ6IDYwMHB4OyB9XFxuXFxuZGl2LmNsLWRpYWxvZy1ib3R0b20ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZsZXg6IDAgMCA0NHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2NjYztcXG4gIGN1cnNvcjogZGVmYXVsdDsgfVxcblxcbmRpdi5kaWFsb2ctY2wtYm9keSB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHBhZGRpbmc6IDAuNWVtOyB9XFxuICBkaXYuZGlhbG9nLWNsLWJvZHkgcDpmaXJzdC1jaGlsZCwgZGl2LmRpYWxvZy1jbC1ib2R5IGgxOmZpcnN0LWNoaWxkLCBkaXYuZGlhbG9nLWNsLWJvZHkgaDI6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAwOyB9XFxuICBkaXYuZGlhbG9nLWNsLWJvZHkgcDpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbmRpdi5jbC1kaWFsb2ctYm90dG9tIGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtaW4td2lkdGg6IDdlbTtcXG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMDtcXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAtMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjNDQ0O1xcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxcblxcbmRpdi5jbC1kaWFsb2ctYm90dG9tIGJ1dHRvbjphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XFxuXFxuZGl2LmNsLWRpYWxvZy1ib3R0b20gYnV0dG9uOmRpc2FibGVkLFxcbmRpdi5jbC1kaWFsb2ctYm90dG9tIGJ1dHRvbltkaXNhYmxlZF0ge1xcbiAgY29sb3I6ICNjY2M7IH1cXG5cXG5kaXYuZGlhbG9nLWNsLXRvcCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmbGV4OiAwIDAgMjVweDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiBub3dyYXA7IH1cXG4gIGRpdi5kaWFsb2ctY2wtdG9wIGgxIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDRweCA0cHggMCAxMHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMTZweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gIGRpdi5kaWFsb2ctY2wtdG9wIGJ1dHRvbi5kaWFsb2ctY2wtdGItYnV0dG9uIHtcXG4gICAgZmxleDogMCAwIDI1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIGRpdi5kaWFsb2ctY2wtdG9wIGJ1dHRvbi5kaWFsb2ctY2wtdGItYnV0dG9uIHNwYW4ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiA0cHg7XFxuICAgICAgdG9wOiA0cHg7IH1cXG4gIGRpdi5kaWFsb2ctY2wtdG9wIC5kaWFsb2ctY2wtdGItYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4MTEyMztcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuZGl2LmRpYWxvZy1jbCBkaXYubWVzc2FnZS1jbCB7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIHBhZGRpbmc6IDFlbTsgfVxcblxcbmRpdi5kaWFsb2ctY2wtY29sdW1uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgZGl2LmRpYWxvZy1jbC1jb2x1bW4gPiBkaXYge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDEuNWVtIDAgMi4wZW0gMDsgfVxcbiAgZGl2LmRpYWxvZy1jbC1jb2x1bW4gc2VsZWN0IHtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9wYWNrYWdlcy9kaWFsb2ctY2wvc3JjL3Nhc3MvcGFydGlhbHMvX2RpYWxvZy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9wYWNrYWdlcy9kaWFsb2ctY2wvc3JjL3Nhc3MvcGFydGlhbHMvX2JvdHRvbS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9wYWNrYWdlcy9kaWFsb2ctY2wvc3JjL3Nhc3MvcGFydGlhbHMvX2JvZHkuc2Nzc1wiLFwid2VicGFjazovLy4vcGFja2FnZXMvZGlhbG9nLWNsL3NyYy9zYXNzL3BhcnRpYWxzL19idXR0b25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3BhY2thZ2VzL2RpYWxvZy1jbC9zcmMvc2Fzcy9wYXJ0aWFscy9fdGl0bGViYXIuc2Nzc1wiLFwid2VicGFjazovLy4vcGFja2FnZXMvZGlhbG9nLWNsL3NyYy9zYXNzL3BhcnRpYWxzL19tZXNzYWdlYm94LnNjc3NcIixcIndlYnBhY2s6Ly8uL3BhY2thZ2VzL2RpYWxvZy1jbC9zcmMvc2Fzcy9wYXJ0aWFscy9fY29sdW1uLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLE1BQU07RUFFTixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQ25CckI7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZUFBZSxFQUFBOztBQ1JqQjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtFQUpoQjtJQU9JLGFBQWEsRUFBQTtFQVBqQjtJQVdJLGdCQUFnQixFQUFBOztBQ1RwQjtFQUVJLHFCQUFxQjtFQUNyQixjQUxjO0VBTWQsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixrREFBa0Q7RUFDbEQsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHdGQUFnRjtFQUNoRixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFmcEI7RUFtQkksdUZBQStFLEVBQUE7O0FBbkJuRjs7RUF3QkksV0FBVyxFQUFBOztBQzFCZjtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsU0FBUztFQUNULFVBQVU7RUFDVixjQUFjO0VBQ2QsZUFBZTtFQUVmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7RUFWbkI7SUFhSSxZQUFZO0lBRVosU0FBUztJQUNULHVCQUF1QjtJQUN2QixrREFBa0Q7SUFDbEQsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTtFQXBCckI7SUF5QkksY0FBYztJQUVkLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsYUFBYSxFQUFBO0lBbkNqQjtNQXNDTSxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFFBQVEsRUFBQTtFQXhDZDtJQTZDSSx5QkFBeUI7SUFDekIsZUFBZSxFQUFBOztBQzlDbkI7RUFFSSxpQkFBaUI7RUFFakIsWUFBWSxFQUFBOztBQ0FoQjtFQUNFLGtCQUFrQixFQUFBO0VBRHBCO0lBSUkscUJBQXFCO0lBQ3JCLHdCQUF3QixFQUFBO0VBTDVCO0lBU0ksV0FBVyxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpdi5kaWFsb2ctY2wge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NDQ0NDQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXCIsXCJkaXYuY2wtZGlhbG9nLWJvdHRvbSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZmxleDogMCAwIDQ0cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjY2NjO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cIixcImRpdi5kaWFsb2ctY2wtYm9keSB7XFxyXFxuICBmbGV4OiAwIDEgYXV0bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcblxcclxcbiAgcDpmaXJzdC1jaGlsZCwgaDE6Zmlyc3QtY2hpbGQsIGgyOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHA6bGFzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblwiLFwiJGJ1dHRvbi13aWR0aDogN2VtO1xcclxcblxcclxcbmRpdi5jbC1kaWFsb2ctYm90dG9tIHtcXHJcXG4gIGJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbWluLXdpZHRoOiAkYnV0dG9uLXdpZHRoO1xcclxcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDA7XFxyXFxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgMXB4IHJnYmEoMCwwLDAsLjEpLCBpbnNldCAwIC0xMHB4IDIwcHggcmdiYSgwLDAsMCwuMSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogIzQ0NDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGJ1dHRvbjphY3RpdmUge1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAxcHggcmdiYSgwLDAsMCwuMSksIGluc2V0IDAgMTBweCAyMHB4IHJnYmEoMCwwLDAsLjEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uOmRpc2FibGVkLFxcclxcbiAgYnV0dG9uW2Rpc2FibGVkXSB7XFxyXFxuICAgIGNvbG9yOiAjY2NjO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIixcImRpdi5kaWFsb2ctY2wtdG9wIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZsZXg6IDAgMCAyNXB4O1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG5cXHJcXG4gIGgxIHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcblxcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDRweCA0cHggMCAxMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTZweDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyBUaXRsZSBiYXIgYnV0dG9uc1xcclxcbiAgYnV0dG9uLmRpYWxvZy1jbC10Yi1idXR0b24ge1xcclxcbiAgICBmbGV4OiAwIDAgMjVweDtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuXFxyXFxuICAgIHNwYW4ge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBsZWZ0OiA0cHg7XFxyXFxuICAgICAgdG9wOiA0cHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kaWFsb2ctY2wtdGItYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4MTEyMztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cIixcImRpdi5kaWFsb2ctY2wge1xcclxcbiAgZGl2Lm1lc3NhZ2UtY2wge1xcclxcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgfVxcclxcbn1cIixcIi8vXFxyXFxuLy8gU3RhbmRhcmQgZGlhbG9nIGJveCBzdHlsZTogc2luZ2xlIGNvbHVtbiBvZiBjb250cm9sc1xcclxcbi8vXFxyXFxuXFxyXFxuZGl2LmRpYWxvZy1jbC1jb2x1bW4ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgPmRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcGFkZGluZzogMS41ZW0gMCAyLjBlbSAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgc2VsZWN0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvKiEgQGxpY2Vuc2UgRE9NUHVyaWZ5IHwgKGMpIEN1cmU1MyBhbmQgb3RoZXIgY29udHJpYnV0b3JzIHwgUmVsZWFzZWQgdW5kZXIgdGhlIEFwYWNoZSBsaWNlbnNlIDIuMCBhbmQgTW96aWxsYSBQdWJsaWMgTGljZW5zZSAyLjAgfCBnaXRodWIuY29tL2N1cmU1My9ET01QdXJpZnkvYmxvYi8yLjIuMi9MSUNFTlNFICovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuRE9NUHVyaWZ5ID0gZmFjdG9yeSgpKTtcbn0odGhpcywgZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbiAgdmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0Lmhhc093blByb3BlcnR5LFxuICAgICAgc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YsXG4gICAgICBpc0Zyb3plbiA9IE9iamVjdC5pc0Zyb3plbixcbiAgICAgIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICAgICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgdmFyIGZyZWV6ZSA9IE9iamVjdC5mcmVlemUsXG4gICAgICBzZWFsID0gT2JqZWN0LnNlYWwsXG4gICAgICBjcmVhdGUgPSBPYmplY3QuY3JlYXRlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcblxuICB2YXIgX3JlZiA9IHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBSZWZsZWN0LFxuICAgICAgYXBwbHkgPSBfcmVmLmFwcGx5LFxuICAgICAgY29uc3RydWN0ID0gX3JlZi5jb25zdHJ1Y3Q7XG5cbiAgaWYgKCFhcHBseSkge1xuICAgIGFwcGx5ID0gZnVuY3Rpb24gYXBwbHkoZnVuLCB0aGlzVmFsdWUsIGFyZ3MpIHtcbiAgICAgIHJldHVybiBmdW4uYXBwbHkodGhpc1ZhbHVlLCBhcmdzKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFmcmVlemUpIHtcbiAgICBmcmVlemUgPSBmdW5jdGlvbiBmcmVlemUoeCkge1xuICAgICAgcmV0dXJuIHg7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghc2VhbCkge1xuICAgIHNlYWwgPSBmdW5jdGlvbiBzZWFsKHgpIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH07XG4gIH1cblxuICBpZiAoIWNvbnN0cnVjdCkge1xuICAgIGNvbnN0cnVjdCA9IGZ1bmN0aW9uIGNvbnN0cnVjdChGdW5jLCBhcmdzKSB7XG4gICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShGdW5jLCBbbnVsbF0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhcmdzKSkpKSgpO1xuICAgIH07XG4gIH1cblxuICB2YXIgYXJyYXlGb3JFYWNoID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUuZm9yRWFjaCk7XG4gIHZhciBhcnJheVBvcCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLnBvcCk7XG4gIHZhciBhcnJheVB1c2ggPSB1bmFwcGx5KEFycmF5LnByb3RvdHlwZS5wdXNoKTtcblxuICB2YXIgc3RyaW5nVG9Mb3dlckNhc2UgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUudG9Mb3dlckNhc2UpO1xuICB2YXIgc3RyaW5nTWF0Y2ggPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUubWF0Y2gpO1xuICB2YXIgc3RyaW5nUmVwbGFjZSA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcbiAgdmFyIHN0cmluZ0luZGV4T2YgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUuaW5kZXhPZik7XG4gIHZhciBzdHJpbmdUcmltID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnRyaW0pO1xuXG4gIHZhciByZWdFeHBUZXN0ID0gdW5hcHBseShSZWdFeHAucHJvdG90eXBlLnRlc3QpO1xuXG4gIHZhciB0eXBlRXJyb3JDcmVhdGUgPSB1bmNvbnN0cnVjdChUeXBlRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIHVuYXBwbHkoZnVuYykge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGhpc0FyZykge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncyk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuY29uc3RydWN0KGZ1bmMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29uc3RydWN0KGZ1bmMsIGFyZ3MpO1xuICAgIH07XG4gIH1cblxuICAvKiBBZGQgcHJvcGVydGllcyB0byBhIGxvb2t1cCB0YWJsZSAqL1xuICBmdW5jdGlvbiBhZGRUb1NldChzZXQsIGFycmF5KSB7XG4gICAgaWYgKHNldFByb3RvdHlwZU9mKSB7XG4gICAgICAvLyBNYWtlICdpbicgYW5kIHRydXRoeSBjaGVja3MgbGlrZSBCb29sZWFuKHNldC5jb25zdHJ1Y3RvcilcbiAgICAgIC8vIGluZGVwZW5kZW50IG9mIGFueSBwcm9wZXJ0aWVzIGRlZmluZWQgb24gT2JqZWN0LnByb3RvdHlwZS5cbiAgICAgIC8vIFByZXZlbnQgcHJvdG90eXBlIHNldHRlcnMgZnJvbSBpbnRlcmNlcHRpbmcgc2V0IGFzIGEgdGhpcyB2YWx1ZS5cbiAgICAgIHNldFByb3RvdHlwZU9mKHNldCwgbnVsbCk7XG4gICAgfVxuXG4gICAgdmFyIGwgPSBhcnJheS5sZW5ndGg7XG4gICAgd2hpbGUgKGwtLSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBhcnJheVtsXTtcbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIGxjRWxlbWVudCA9IHN0cmluZ1RvTG93ZXJDYXNlKGVsZW1lbnQpO1xuICAgICAgICBpZiAobGNFbGVtZW50ICE9PSBlbGVtZW50KSB7XG4gICAgICAgICAgLy8gQ29uZmlnIHByZXNldHMgKGUuZy4gdGFncy5qcywgYXR0cnMuanMpIGFyZSBpbW11dGFibGUuXG4gICAgICAgICAgaWYgKCFpc0Zyb3plbihhcnJheSkpIHtcbiAgICAgICAgICAgIGFycmF5W2xdID0gbGNFbGVtZW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsZW1lbnQgPSBsY0VsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2V0W2VsZW1lbnRdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2V0O1xuICB9XG5cbiAgLyogU2hhbGxvdyBjbG9uZSBhbiBvYmplY3QgKi9cbiAgZnVuY3Rpb24gY2xvbmUob2JqZWN0KSB7XG4gICAgdmFyIG5ld09iamVjdCA9IGNyZWF0ZShudWxsKTtcblxuICAgIHZhciBwcm9wZXJ0eSA9IHZvaWQgMDtcbiAgICBmb3IgKHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgICAgaWYgKGFwcGx5KGhhc093blByb3BlcnR5LCBvYmplY3QsIFtwcm9wZXJ0eV0pKSB7XG4gICAgICAgIG5ld09iamVjdFtwcm9wZXJ0eV0gPSBvYmplY3RbcHJvcGVydHldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXdPYmplY3Q7XG4gIH1cblxuICAvKiBJRTEwIGRvZXNuJ3Qgc3VwcG9ydCBfX2xvb2t1cEdldHRlcl9fIHNvIGxldHMnXG4gICAqIHNpbXVsYXRlIGl0LiBJdCBhbHNvIGF1dG9tYXRpY2FsbHkgY2hlY2tzXG4gICAqIGlmIHRoZSBwcm9wIGlzIGZ1bmN0aW9uIG9yIGdldHRlciBhbmQgYmVoYXZlc1xuICAgKiBhY2NvcmRpbmdseS4gKi9cbiAgZnVuY3Rpb24gbG9va3VwR2V0dGVyKG9iamVjdCwgcHJvcCkge1xuICAgIHdoaWxlIChvYmplY3QgIT09IG51bGwpIHtcbiAgICAgIHZhciBkZXNjID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcCk7XG4gICAgICBpZiAoZGVzYykge1xuICAgICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgICByZXR1cm4gdW5hcHBseShkZXNjLmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGRlc2MudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gdW5hcHBseShkZXNjLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZhbGxiYWNrVmFsdWUoZWxlbWVudCkge1xuICAgICAgY29uc29sZS53YXJuKCdmYWxsYmFjayB2YWx1ZSBmb3InLCBlbGVtZW50KTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxsYmFja1ZhbHVlO1xuICB9XG5cbiAgdmFyIGh0bWwgPSBmcmVlemUoWydhJywgJ2FiYnInLCAnYWNyb255bScsICdhZGRyZXNzJywgJ2FyZWEnLCAnYXJ0aWNsZScsICdhc2lkZScsICdhdWRpbycsICdiJywgJ2JkaScsICdiZG8nLCAnYmlnJywgJ2JsaW5rJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdicicsICdidXR0b24nLCAnY2FudmFzJywgJ2NhcHRpb24nLCAnY2VudGVyJywgJ2NpdGUnLCAnY29kZScsICdjb2wnLCAnY29sZ3JvdXAnLCAnY29udGVudCcsICdkYXRhJywgJ2RhdGFsaXN0JywgJ2RkJywgJ2RlY29yYXRvcicsICdkZWwnLCAnZGV0YWlscycsICdkZm4nLCAnZGlhbG9nJywgJ2RpcicsICdkaXYnLCAnZGwnLCAnZHQnLCAnZWxlbWVudCcsICdlbScsICdmaWVsZHNldCcsICdmaWdjYXB0aW9uJywgJ2ZpZ3VyZScsICdmb250JywgJ2Zvb3RlcicsICdmb3JtJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWQnLCAnaGVhZGVyJywgJ2hncm91cCcsICdocicsICdodG1sJywgJ2knLCAnaW1nJywgJ2lucHV0JywgJ2lucycsICdrYmQnLCAnbGFiZWwnLCAnbGVnZW5kJywgJ2xpJywgJ21haW4nLCAnbWFwJywgJ21hcmsnLCAnbWFycXVlZScsICdtZW51JywgJ21lbnVpdGVtJywgJ21ldGVyJywgJ25hdicsICdub2JyJywgJ29sJywgJ29wdGdyb3VwJywgJ29wdGlvbicsICdvdXRwdXQnLCAncCcsICdwaWN0dXJlJywgJ3ByZScsICdwcm9ncmVzcycsICdxJywgJ3JwJywgJ3J0JywgJ3J1YnknLCAncycsICdzYW1wJywgJ3NlY3Rpb24nLCAnc2VsZWN0JywgJ3NoYWRvdycsICdzbWFsbCcsICdzb3VyY2UnLCAnc3BhY2VyJywgJ3NwYW4nLCAnc3RyaWtlJywgJ3N0cm9uZycsICdzdHlsZScsICdzdWInLCAnc3VtbWFyeScsICdzdXAnLCAndGFibGUnLCAndGJvZHknLCAndGQnLCAndGVtcGxhdGUnLCAndGV4dGFyZWEnLCAndGZvb3QnLCAndGgnLCAndGhlYWQnLCAndGltZScsICd0cicsICd0cmFjaycsICd0dCcsICd1JywgJ3VsJywgJ3ZhcicsICd2aWRlbycsICd3YnInXSk7XG5cbiAgLy8gU1ZHXG4gIHZhciBzdmcgPSBmcmVlemUoWydzdmcnLCAnYScsICdhbHRnbHlwaCcsICdhbHRnbHlwaGRlZicsICdhbHRnbHlwaGl0ZW0nLCAnYW5pbWF0ZWNvbG9yJywgJ2FuaW1hdGVtb3Rpb24nLCAnYW5pbWF0ZXRyYW5zZm9ybScsICdjaXJjbGUnLCAnY2xpcHBhdGgnLCAnZGVmcycsICdkZXNjJywgJ2VsbGlwc2UnLCAnZmlsdGVyJywgJ2ZvbnQnLCAnZycsICdnbHlwaCcsICdnbHlwaHJlZicsICdoa2VybicsICdpbWFnZScsICdsaW5lJywgJ2xpbmVhcmdyYWRpZW50JywgJ21hcmtlcicsICdtYXNrJywgJ21ldGFkYXRhJywgJ21wYXRoJywgJ3BhdGgnLCAncGF0dGVybicsICdwb2x5Z29uJywgJ3BvbHlsaW5lJywgJ3JhZGlhbGdyYWRpZW50JywgJ3JlY3QnLCAnc3RvcCcsICdzdHlsZScsICdzd2l0Y2gnLCAnc3ltYm9sJywgJ3RleHQnLCAndGV4dHBhdGgnLCAndGl0bGUnLCAndHJlZicsICd0c3BhbicsICd2aWV3JywgJ3ZrZXJuJ10pO1xuXG4gIHZhciBzdmdGaWx0ZXJzID0gZnJlZXplKFsnZmVCbGVuZCcsICdmZUNvbG9yTWF0cml4JywgJ2ZlQ29tcG9uZW50VHJhbnNmZXInLCAnZmVDb21wb3NpdGUnLCAnZmVDb252b2x2ZU1hdHJpeCcsICdmZURpZmZ1c2VMaWdodGluZycsICdmZURpc3BsYWNlbWVudE1hcCcsICdmZURpc3RhbnRMaWdodCcsICdmZUZsb29kJywgJ2ZlRnVuY0EnLCAnZmVGdW5jQicsICdmZUZ1bmNHJywgJ2ZlRnVuY1InLCAnZmVHYXVzc2lhbkJsdXInLCAnZmVNZXJnZScsICdmZU1lcmdlTm9kZScsICdmZU1vcnBob2xvZ3knLCAnZmVPZmZzZXQnLCAnZmVQb2ludExpZ2h0JywgJ2ZlU3BlY3VsYXJMaWdodGluZycsICdmZVNwb3RMaWdodCcsICdmZVRpbGUnLCAnZmVUdXJidWxlbmNlJ10pO1xuXG4gIC8vIExpc3Qgb2YgU1ZHIGVsZW1lbnRzIHRoYXQgYXJlIGRpc2FsbG93ZWQgYnkgZGVmYXVsdC5cbiAgLy8gV2Ugc3RpbGwgbmVlZCB0byBrbm93IHRoZW0gc28gdGhhdCB3ZSBjYW4gZG8gbmFtZXNwYWNlXG4gIC8vIGNoZWNrcyBwcm9wZXJseSBpbiBjYXNlIG9uZSB3YW50cyB0byBhZGQgdGhlbSB0b1xuICAvLyBhbGxvdy1saXN0LlxuICB2YXIgc3ZnRGlzYWxsb3dlZCA9IGZyZWV6ZShbJ2FuaW1hdGUnLCAnY29sb3ItcHJvZmlsZScsICdjdXJzb3InLCAnZGlzY2FyZCcsICdmZWRyb3BzaGFkb3cnLCAnZmVpbWFnZScsICdmb250LWZhY2UnLCAnZm9udC1mYWNlLWZvcm1hdCcsICdmb250LWZhY2UtbmFtZScsICdmb250LWZhY2Utc3JjJywgJ2ZvbnQtZmFjZS11cmknLCAnZm9yZWlnbm9iamVjdCcsICdoYXRjaCcsICdoYXRjaHBhdGgnLCAnbWVzaCcsICdtZXNoZ3JhZGllbnQnLCAnbWVzaHBhdGNoJywgJ21lc2hyb3cnLCAnbWlzc2luZy1nbHlwaCcsICdzY3JpcHQnLCAnc2V0JywgJ3NvbGlkY29sb3InLCAndW5rbm93bicsICd1c2UnXSk7XG5cbiAgdmFyIG1hdGhNbCA9IGZyZWV6ZShbJ21hdGgnLCAnbWVuY2xvc2UnLCAnbWVycm9yJywgJ21mZW5jZWQnLCAnbWZyYWMnLCAnbWdseXBoJywgJ21pJywgJ21sYWJlbGVkdHInLCAnbW11bHRpc2NyaXB0cycsICdtbicsICdtbycsICdtb3ZlcicsICdtcGFkZGVkJywgJ21waGFudG9tJywgJ21yb290JywgJ21yb3cnLCAnbXMnLCAnbXNwYWNlJywgJ21zcXJ0JywgJ21zdHlsZScsICdtc3ViJywgJ21zdXAnLCAnbXN1YnN1cCcsICdtdGFibGUnLCAnbXRkJywgJ210ZXh0JywgJ210cicsICdtdW5kZXInLCAnbXVuZGVyb3ZlciddKTtcblxuICAvLyBTaW1pbGFybHkgdG8gU1ZHLCB3ZSB3YW50IHRvIGtub3cgYWxsIE1hdGhNTCBlbGVtZW50cyxcbiAgLy8gZXZlbiB0aG9zZSB0aGF0IHdlIGRpc2FsbG93IGJ5IGRlZmF1bHQuXG4gIHZhciBtYXRoTWxEaXNhbGxvd2VkID0gZnJlZXplKFsnbWFjdGlvbicsICdtYWxpZ25ncm91cCcsICdtYWxpZ25tYXJrJywgJ21sb25nZGl2JywgJ21zY2FycmllcycsICdtc2NhcnJ5JywgJ21zZ3JvdXAnLCAnbXN0YWNrJywgJ21zbGluZScsICdtc3JvdycsICdzZW1hbnRpY3MnLCAnYW5ub3RhdGlvbicsICdhbm5vdGF0aW9uLXhtbCcsICdtcHJlc2NyaXB0cycsICdub25lJ10pO1xuXG4gIHZhciB0ZXh0ID0gZnJlZXplKFsnI3RleHQnXSk7XG5cbiAgdmFyIGh0bWwkMSA9IGZyZWV6ZShbJ2FjY2VwdCcsICdhY3Rpb24nLCAnYWxpZ24nLCAnYWx0JywgJ2F1dG9jYXBpdGFsaXplJywgJ2F1dG9jb21wbGV0ZScsICdhdXRvcGljdHVyZWlucGljdHVyZScsICdhdXRvcGxheScsICdiYWNrZ3JvdW5kJywgJ2JnY29sb3InLCAnYm9yZGVyJywgJ2NhcHR1cmUnLCAnY2VsbHBhZGRpbmcnLCAnY2VsbHNwYWNpbmcnLCAnY2hlY2tlZCcsICdjaXRlJywgJ2NsYXNzJywgJ2NsZWFyJywgJ2NvbG9yJywgJ2NvbHMnLCAnY29sc3BhbicsICdjb250cm9scycsICdjb250cm9sc2xpc3QnLCAnY29vcmRzJywgJ2Nyb3Nzb3JpZ2luJywgJ2RhdGV0aW1lJywgJ2RlY29kaW5nJywgJ2RlZmF1bHQnLCAnZGlyJywgJ2Rpc2FibGVkJywgJ2Rpc2FibGVwaWN0dXJlaW5waWN0dXJlJywgJ2Rpc2FibGVyZW1vdGVwbGF5YmFjaycsICdkb3dubG9hZCcsICdkcmFnZ2FibGUnLCAnZW5jdHlwZScsICdlbnRlcmtleWhpbnQnLCAnZmFjZScsICdmb3InLCAnaGVhZGVycycsICdoZWlnaHQnLCAnaGlkZGVuJywgJ2hpZ2gnLCAnaHJlZicsICdocmVmbGFuZycsICdpZCcsICdpbnB1dG1vZGUnLCAnaW50ZWdyaXR5JywgJ2lzbWFwJywgJ2tpbmQnLCAnbGFiZWwnLCAnbGFuZycsICdsaXN0JywgJ2xvYWRpbmcnLCAnbG9vcCcsICdsb3cnLCAnbWF4JywgJ21heGxlbmd0aCcsICdtZWRpYScsICdtZXRob2QnLCAnbWluJywgJ21pbmxlbmd0aCcsICdtdWx0aXBsZScsICdtdXRlZCcsICduYW1lJywgJ25vc2hhZGUnLCAnbm92YWxpZGF0ZScsICdub3dyYXAnLCAnb3BlbicsICdvcHRpbXVtJywgJ3BhdHRlcm4nLCAncGxhY2Vob2xkZXInLCAncGxheXNpbmxpbmUnLCAncG9zdGVyJywgJ3ByZWxvYWQnLCAncHViZGF0ZScsICdyYWRpb2dyb3VwJywgJ3JlYWRvbmx5JywgJ3JlbCcsICdyZXF1aXJlZCcsICdyZXYnLCAncmV2ZXJzZWQnLCAncm9sZScsICdyb3dzJywgJ3Jvd3NwYW4nLCAnc3BlbGxjaGVjaycsICdzY29wZScsICdzZWxlY3RlZCcsICdzaGFwZScsICdzaXplJywgJ3NpemVzJywgJ3NwYW4nLCAnc3JjbGFuZycsICdzdGFydCcsICdzcmMnLCAnc3Jjc2V0JywgJ3N0ZXAnLCAnc3R5bGUnLCAnc3VtbWFyeScsICd0YWJpbmRleCcsICd0aXRsZScsICd0cmFuc2xhdGUnLCAndHlwZScsICd1c2VtYXAnLCAndmFsaWduJywgJ3ZhbHVlJywgJ3dpZHRoJywgJ3htbG5zJywgJ3Nsb3QnXSk7XG5cbiAgdmFyIHN2ZyQxID0gZnJlZXplKFsnYWNjZW50LWhlaWdodCcsICdhY2N1bXVsYXRlJywgJ2FkZGl0aXZlJywgJ2FsaWdubWVudC1iYXNlbGluZScsICdhc2NlbnQnLCAnYXR0cmlidXRlbmFtZScsICdhdHRyaWJ1dGV0eXBlJywgJ2F6aW11dGgnLCAnYmFzZWZyZXF1ZW5jeScsICdiYXNlbGluZS1zaGlmdCcsICdiZWdpbicsICdiaWFzJywgJ2J5JywgJ2NsYXNzJywgJ2NsaXAnLCAnY2xpcHBhdGh1bml0cycsICdjbGlwLXBhdGgnLCAnY2xpcC1ydWxlJywgJ2NvbG9yJywgJ2NvbG9yLWludGVycG9sYXRpb24nLCAnY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzJywgJ2NvbG9yLXByb2ZpbGUnLCAnY29sb3ItcmVuZGVyaW5nJywgJ2N4JywgJ2N5JywgJ2QnLCAnZHgnLCAnZHknLCAnZGlmZnVzZWNvbnN0YW50JywgJ2RpcmVjdGlvbicsICdkaXNwbGF5JywgJ2Rpdmlzb3InLCAnZHVyJywgJ2VkZ2Vtb2RlJywgJ2VsZXZhdGlvbicsICdlbmQnLCAnZmlsbCcsICdmaWxsLW9wYWNpdHknLCAnZmlsbC1ydWxlJywgJ2ZpbHRlcicsICdmaWx0ZXJ1bml0cycsICdmbG9vZC1jb2xvcicsICdmbG9vZC1vcGFjaXR5JywgJ2ZvbnQtZmFtaWx5JywgJ2ZvbnQtc2l6ZScsICdmb250LXNpemUtYWRqdXN0JywgJ2ZvbnQtc3RyZXRjaCcsICdmb250LXN0eWxlJywgJ2ZvbnQtdmFyaWFudCcsICdmb250LXdlaWdodCcsICdmeCcsICdmeScsICdnMScsICdnMicsICdnbHlwaC1uYW1lJywgJ2dseXBocmVmJywgJ2dyYWRpZW50dW5pdHMnLCAnZ3JhZGllbnR0cmFuc2Zvcm0nLCAnaGVpZ2h0JywgJ2hyZWYnLCAnaWQnLCAnaW1hZ2UtcmVuZGVyaW5nJywgJ2luJywgJ2luMicsICdrJywgJ2sxJywgJ2syJywgJ2szJywgJ2s0JywgJ2tlcm5pbmcnLCAna2V5cG9pbnRzJywgJ2tleXNwbGluZXMnLCAna2V5dGltZXMnLCAnbGFuZycsICdsZW5ndGhhZGp1c3QnLCAnbGV0dGVyLXNwYWNpbmcnLCAna2VybmVsbWF0cml4JywgJ2tlcm5lbHVuaXRsZW5ndGgnLCAnbGlnaHRpbmctY29sb3InLCAnbG9jYWwnLCAnbWFya2VyLWVuZCcsICdtYXJrZXItbWlkJywgJ21hcmtlci1zdGFydCcsICdtYXJrZXJoZWlnaHQnLCAnbWFya2VydW5pdHMnLCAnbWFya2Vyd2lkdGgnLCAnbWFza2NvbnRlbnR1bml0cycsICdtYXNrdW5pdHMnLCAnbWF4JywgJ21hc2snLCAnbWVkaWEnLCAnbWV0aG9kJywgJ21vZGUnLCAnbWluJywgJ25hbWUnLCAnbnVtb2N0YXZlcycsICdvZmZzZXQnLCAnb3BlcmF0b3InLCAnb3BhY2l0eScsICdvcmRlcicsICdvcmllbnQnLCAnb3JpZW50YXRpb24nLCAnb3JpZ2luJywgJ292ZXJmbG93JywgJ3BhaW50LW9yZGVyJywgJ3BhdGgnLCAncGF0aGxlbmd0aCcsICdwYXR0ZXJuY29udGVudHVuaXRzJywgJ3BhdHRlcm50cmFuc2Zvcm0nLCAncGF0dGVybnVuaXRzJywgJ3BvaW50cycsICdwcmVzZXJ2ZWFscGhhJywgJ3ByZXNlcnZlYXNwZWN0cmF0aW8nLCAncHJpbWl0aXZldW5pdHMnLCAncicsICdyeCcsICdyeScsICdyYWRpdXMnLCAncmVmeCcsICdyZWZ5JywgJ3JlcGVhdGNvdW50JywgJ3JlcGVhdGR1cicsICdyZXN0YXJ0JywgJ3Jlc3VsdCcsICdyb3RhdGUnLCAnc2NhbGUnLCAnc2VlZCcsICdzaGFwZS1yZW5kZXJpbmcnLCAnc3BlY3VsYXJjb25zdGFudCcsICdzcGVjdWxhcmV4cG9uZW50JywgJ3NwcmVhZG1ldGhvZCcsICdzdGFydG9mZnNldCcsICdzdGRkZXZpYXRpb24nLCAnc3RpdGNodGlsZXMnLCAnc3RvcC1jb2xvcicsICdzdG9wLW9wYWNpdHknLCAnc3Ryb2tlLWRhc2hhcnJheScsICdzdHJva2UtZGFzaG9mZnNldCcsICdzdHJva2UtbGluZWNhcCcsICdzdHJva2UtbGluZWpvaW4nLCAnc3Ryb2tlLW1pdGVybGltaXQnLCAnc3Ryb2tlLW9wYWNpdHknLCAnc3Ryb2tlJywgJ3N0cm9rZS13aWR0aCcsICdzdHlsZScsICdzdXJmYWNlc2NhbGUnLCAnc3lzdGVtbGFuZ3VhZ2UnLCAndGFiaW5kZXgnLCAndGFyZ2V0eCcsICd0YXJnZXR5JywgJ3RyYW5zZm9ybScsICd0ZXh0LWFuY2hvcicsICd0ZXh0LWRlY29yYXRpb24nLCAndGV4dC1yZW5kZXJpbmcnLCAndGV4dGxlbmd0aCcsICd0eXBlJywgJ3UxJywgJ3UyJywgJ3VuaWNvZGUnLCAndmFsdWVzJywgJ3ZpZXdib3gnLCAndmlzaWJpbGl0eScsICd2ZXJzaW9uJywgJ3ZlcnQtYWR2LXknLCAndmVydC1vcmlnaW4teCcsICd2ZXJ0LW9yaWdpbi15JywgJ3dpZHRoJywgJ3dvcmQtc3BhY2luZycsICd3cmFwJywgJ3dyaXRpbmctbW9kZScsICd4Y2hhbm5lbHNlbGVjdG9yJywgJ3ljaGFubmVsc2VsZWN0b3InLCAneCcsICd4MScsICd4MicsICd4bWxucycsICd5JywgJ3kxJywgJ3kyJywgJ3onLCAnem9vbWFuZHBhbiddKTtcblxuICB2YXIgbWF0aE1sJDEgPSBmcmVlemUoWydhY2NlbnQnLCAnYWNjZW50dW5kZXInLCAnYWxpZ24nLCAnYmV2ZWxsZWQnLCAnY2xvc2UnLCAnY29sdW1uc2FsaWduJywgJ2NvbHVtbmxpbmVzJywgJ2NvbHVtbnNwYW4nLCAnZGVub21hbGlnbicsICdkZXB0aCcsICdkaXInLCAnZGlzcGxheScsICdkaXNwbGF5c3R5bGUnLCAnZW5jb2RpbmcnLCAnZmVuY2UnLCAnZnJhbWUnLCAnaGVpZ2h0JywgJ2hyZWYnLCAnaWQnLCAnbGFyZ2VvcCcsICdsZW5ndGgnLCAnbGluZXRoaWNrbmVzcycsICdsc3BhY2UnLCAnbHF1b3RlJywgJ21hdGhiYWNrZ3JvdW5kJywgJ21hdGhjb2xvcicsICdtYXRoc2l6ZScsICdtYXRodmFyaWFudCcsICdtYXhzaXplJywgJ21pbnNpemUnLCAnbW92YWJsZWxpbWl0cycsICdub3RhdGlvbicsICdudW1hbGlnbicsICdvcGVuJywgJ3Jvd2FsaWduJywgJ3Jvd2xpbmVzJywgJ3Jvd3NwYWNpbmcnLCAncm93c3BhbicsICdyc3BhY2UnLCAncnF1b3RlJywgJ3NjcmlwdGxldmVsJywgJ3NjcmlwdG1pbnNpemUnLCAnc2NyaXB0c2l6ZW11bHRpcGxpZXInLCAnc2VsZWN0aW9uJywgJ3NlcGFyYXRvcicsICdzZXBhcmF0b3JzJywgJ3N0cmV0Y2h5JywgJ3N1YnNjcmlwdHNoaWZ0JywgJ3N1cHNjcmlwdHNoaWZ0JywgJ3N5bW1ldHJpYycsICd2b2Zmc2V0JywgJ3dpZHRoJywgJ3htbG5zJ10pO1xuXG4gIHZhciB4bWwgPSBmcmVlemUoWyd4bGluazpocmVmJywgJ3htbDppZCcsICd4bGluazp0aXRsZScsICd4bWw6c3BhY2UnLCAneG1sbnM6eGxpbmsnXSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vYmV0dGVyLXJlZ2V4XG4gIHZhciBNVVNUQUNIRV9FWFBSID0gc2VhbCgvXFx7XFx7W1xcc1xcU10qfFtcXHNcXFNdKlxcfVxcfS9nbSk7IC8vIFNwZWNpZnkgdGVtcGxhdGUgZGV0ZWN0aW9uIHJlZ2V4IGZvciBTQUZFX0ZPUl9URU1QTEFURVMgbW9kZVxuICB2YXIgRVJCX0VYUFIgPSBzZWFsKC88JVtcXHNcXFNdKnxbXFxzXFxTXSolPi9nbSk7XG4gIHZhciBEQVRBX0FUVFIgPSBzZWFsKC9eZGF0YS1bXFwtXFx3LlxcdTAwQjctXFx1RkZGRl0vKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICB2YXIgQVJJQV9BVFRSID0gc2VhbCgvXmFyaWEtW1xcLVxcd10rJC8pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gIHZhciBJU19BTExPV0VEX1VSSSA9IHNlYWwoL14oPzooPzooPzpmfGh0KXRwcz98bWFpbHRvfHRlbHxjYWxsdG98Y2lkfHhtcHApOnxbXmEtel18W2EteisuXFwtXSsoPzpbXmEteisuXFwtOl18JCkpL2kgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICApO1xuICB2YXIgSVNfU0NSSVBUX09SX0RBVEEgPSBzZWFsKC9eKD86XFx3K3NjcmlwdHxkYXRhKTovaSk7XG4gIHZhciBBVFRSX1dISVRFU1BBQ0UgPSBzZWFsKC9bXFx1MDAwMC1cXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUxODBFXFx1MjAwMC1cXHUyMDI5XFx1MjA1RlxcdTMwMDBdL2cgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb250cm9sLXJlZ2V4XG4gICk7XG5cbiAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4gIGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheSQxKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbiAgdmFyIGdldEdsb2JhbCA9IGZ1bmN0aW9uIGdldEdsb2JhbCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93O1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbm8tb3AgcG9saWN5IGZvciBpbnRlcm5hbCB1c2Ugb25seS5cbiAgICogRG9uJ3QgZXhwb3J0IHRoaXMgZnVuY3Rpb24gb3V0c2lkZSB0aGlzIG1vZHVsZSFcbiAgICogQHBhcmFtIHs/VHJ1c3RlZFR5cGVQb2xpY3lGYWN0b3J5fSB0cnVzdGVkVHlwZXMgVGhlIHBvbGljeSBmYWN0b3J5LlxuICAgKiBAcGFyYW0ge0RvY3VtZW50fSBkb2N1bWVudCBUaGUgZG9jdW1lbnQgb2JqZWN0ICh0byBkZXRlcm1pbmUgcG9saWN5IG5hbWUgc3VmZml4KVxuICAgKiBAcmV0dXJuIHs/VHJ1c3RlZFR5cGVQb2xpY3l9IFRoZSBwb2xpY3kgY3JlYXRlZCAob3IgbnVsbCwgaWYgVHJ1c3RlZCBUeXBlc1xuICAgKiBhcmUgbm90IHN1cHBvcnRlZCkuXG4gICAqL1xuICB2YXIgX2NyZWF0ZVRydXN0ZWRUeXBlc1BvbGljeSA9IGZ1bmN0aW9uIF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kodHJ1c3RlZFR5cGVzLCBkb2N1bWVudCkge1xuICAgIGlmICgodHlwZW9mIHRydXN0ZWRUeXBlcyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodHJ1c3RlZFR5cGVzKSkgIT09ICdvYmplY3QnIHx8IHR5cGVvZiB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBBbGxvdyB0aGUgY2FsbGVycyB0byBjb250cm9sIHRoZSB1bmlxdWUgcG9saWN5IG5hbWVcbiAgICAvLyBieSBhZGRpbmcgYSBkYXRhLXR0LXBvbGljeS1zdWZmaXggdG8gdGhlIHNjcmlwdCBlbGVtZW50IHdpdGggdGhlIERPTVB1cmlmeS5cbiAgICAvLyBQb2xpY3kgY3JlYXRpb24gd2l0aCBkdXBsaWNhdGUgbmFtZXMgdGhyb3dzIGluIFRydXN0ZWQgVHlwZXMuXG4gICAgdmFyIHN1ZmZpeCA9IG51bGw7XG4gICAgdmFyIEFUVFJfTkFNRSA9ICdkYXRhLXR0LXBvbGljeS1zdWZmaXgnO1xuICAgIGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuaGFzQXR0cmlidXRlKEFUVFJfTkFNRSkpIHtcbiAgICAgIHN1ZmZpeCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuZ2V0QXR0cmlidXRlKEFUVFJfTkFNRSk7XG4gICAgfVxuXG4gICAgdmFyIHBvbGljeU5hbWUgPSAnZG9tcHVyaWZ5JyArIChzdWZmaXggPyAnIycgKyBzdWZmaXggOiAnJyk7XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3kocG9saWN5TmFtZSwge1xuICAgICAgICBjcmVhdGVIVE1MOiBmdW5jdGlvbiBjcmVhdGVIVE1MKGh0bWwkJDEpIHtcbiAgICAgICAgICByZXR1cm4gaHRtbCQkMTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgLy8gUG9saWN5IGNyZWF0aW9uIGZhaWxlZCAobW9zdCBsaWtlbHkgYW5vdGhlciBET01QdXJpZnkgc2NyaXB0IGhhc1xuICAgICAgLy8gYWxyZWFkeSBydW4pLiBTa2lwIGNyZWF0aW5nIHRoZSBwb2xpY3ksIGFzIHRoaXMgd2lsbCBvbmx5IGNhdXNlIGVycm9yc1xuICAgICAgLy8gaWYgVFQgYXJlIGVuZm9yY2VkLlxuICAgICAgY29uc29sZS53YXJuKCdUcnVzdGVkVHlwZXMgcG9saWN5ICcgKyBwb2xpY3lOYW1lICsgJyBjb3VsZCBub3QgYmUgY3JlYXRlZC4nKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVET01QdXJpZnkoKSB7XG4gICAgdmFyIHdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZ2V0R2xvYmFsKCk7XG5cbiAgICB2YXIgRE9NUHVyaWZ5ID0gZnVuY3Rpb24gRE9NUHVyaWZ5KHJvb3QpIHtcbiAgICAgIHJldHVybiBjcmVhdGVET01QdXJpZnkocm9vdCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFZlcnNpb24gbGFiZWwsIGV4cG9zZWQgZm9yIGVhc2llciBjaGVja3NcbiAgICAgKiBpZiBET01QdXJpZnkgaXMgdXAgdG8gZGF0ZSBvciBub3RcbiAgICAgKi9cbiAgICBET01QdXJpZnkudmVyc2lvbiA9ICcyLjIuOCc7XG5cbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiBlbGVtZW50cyB0aGF0IERPTVB1cmlmeSByZW1vdmVkIGR1cmluZyBzYW5pdGF0aW9uLlxuICAgICAqIEVtcHR5IGlmIG5vdGhpbmcgd2FzIHJlbW92ZWQuXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LnJlbW92ZWQgPSBbXTtcblxuICAgIGlmICghd2luZG93IHx8ICF3aW5kb3cuZG9jdW1lbnQgfHwgd2luZG93LmRvY3VtZW50Lm5vZGVUeXBlICE9PSA5KSB7XG4gICAgICAvLyBOb3QgcnVubmluZyBpbiBhIGJyb3dzZXIsIHByb3ZpZGUgYSBmYWN0b3J5IGZ1bmN0aW9uXG4gICAgICAvLyBzbyB0aGF0IHlvdSBjYW4gcGFzcyB5b3VyIG93biBXaW5kb3dcbiAgICAgIERPTVB1cmlmeS5pc1N1cHBvcnRlZCA9IGZhbHNlO1xuXG4gICAgICByZXR1cm4gRE9NUHVyaWZ5O1xuICAgIH1cblxuICAgIHZhciBvcmlnaW5hbERvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG4gICAgdmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuICAgIHZhciBEb2N1bWVudEZyYWdtZW50ID0gd2luZG93LkRvY3VtZW50RnJhZ21lbnQsXG4gICAgICAgIEhUTUxUZW1wbGF0ZUVsZW1lbnQgPSB3aW5kb3cuSFRNTFRlbXBsYXRlRWxlbWVudCxcbiAgICAgICAgTm9kZSA9IHdpbmRvdy5Ob2RlLFxuICAgICAgICBFbGVtZW50ID0gd2luZG93LkVsZW1lbnQsXG4gICAgICAgIE5vZGVGaWx0ZXIgPSB3aW5kb3cuTm9kZUZpbHRlcixcbiAgICAgICAgX3dpbmRvdyROYW1lZE5vZGVNYXAgPSB3aW5kb3cuTmFtZWROb2RlTWFwLFxuICAgICAgICBOYW1lZE5vZGVNYXAgPSBfd2luZG93JE5hbWVkTm9kZU1hcCA9PT0gdW5kZWZpbmVkID8gd2luZG93Lk5hbWVkTm9kZU1hcCB8fCB3aW5kb3cuTW96TmFtZWRBdHRyTWFwIDogX3dpbmRvdyROYW1lZE5vZGVNYXAsXG4gICAgICAgIFRleHQgPSB3aW5kb3cuVGV4dCxcbiAgICAgICAgQ29tbWVudCA9IHdpbmRvdy5Db21tZW50LFxuICAgICAgICBET01QYXJzZXIgPSB3aW5kb3cuRE9NUGFyc2VyLFxuICAgICAgICB0cnVzdGVkVHlwZXMgPSB3aW5kb3cudHJ1c3RlZFR5cGVzO1xuXG5cbiAgICB2YXIgRWxlbWVudFByb3RvdHlwZSA9IEVsZW1lbnQucHJvdG90eXBlO1xuXG4gICAgdmFyIGNsb25lTm9kZSA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAnY2xvbmVOb2RlJyk7XG4gICAgdmFyIGdldE5leHRTaWJsaW5nID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICduZXh0U2libGluZycpO1xuICAgIHZhciBnZXRDaGlsZE5vZGVzID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICdjaGlsZE5vZGVzJyk7XG4gICAgdmFyIGdldFBhcmVudE5vZGUgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ3BhcmVudE5vZGUnKTtcblxuICAgIC8vIEFzIHBlciBpc3N1ZSAjNDcsIHRoZSB3ZWItY29tcG9uZW50cyByZWdpc3RyeSBpcyBpbmhlcml0ZWQgYnkgYVxuICAgIC8vIG5ldyBkb2N1bWVudCBjcmVhdGVkIHZpYSBjcmVhdGVIVE1MRG9jdW1lbnQuIEFzIHBlciB0aGUgc3BlY1xuICAgIC8vIChodHRwOi8vdzNjLmdpdGh1Yi5pby93ZWJjb21wb25lbnRzL3NwZWMvY3VzdG9tLyNjcmVhdGluZy1hbmQtcGFzc2luZy1yZWdpc3RyaWVzKVxuICAgIC8vIGEgbmV3IGVtcHR5IHJlZ2lzdHJ5IGlzIHVzZWQgd2hlbiBjcmVhdGluZyBhIHRlbXBsYXRlIGNvbnRlbnRzIG93bmVyXG4gICAgLy8gZG9jdW1lbnQsIHNvIHdlIHVzZSB0aGF0IGFzIG91ciBwYXJlbnQgZG9jdW1lbnQgdG8gZW5zdXJlIG5vdGhpbmdcbiAgICAvLyBpcyBpbmhlcml0ZWQuXG4gICAgaWYgKHR5cGVvZiBIVE1MVGVtcGxhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgaWYgKHRlbXBsYXRlLmNvbnRlbnQgJiYgdGVtcGxhdGUuY29udGVudC5vd25lckRvY3VtZW50KSB7XG4gICAgICAgIGRvY3VtZW50ID0gdGVtcGxhdGUuY29udGVudC5vd25lckRvY3VtZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB0cnVzdGVkVHlwZXNQb2xpY3kgPSBfY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5KHRydXN0ZWRUeXBlcywgb3JpZ2luYWxEb2N1bWVudCk7XG4gICAgdmFyIGVtcHR5SFRNTCA9IHRydXN0ZWRUeXBlc1BvbGljeSAmJiBSRVRVUk5fVFJVU1RFRF9UWVBFID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoJycpIDogJyc7XG5cbiAgICB2YXIgX2RvY3VtZW50ID0gZG9jdW1lbnQsXG4gICAgICAgIGltcGxlbWVudGF0aW9uID0gX2RvY3VtZW50LmltcGxlbWVudGF0aW9uLFxuICAgICAgICBjcmVhdGVOb2RlSXRlcmF0b3IgPSBfZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yLFxuICAgICAgICBjcmVhdGVEb2N1bWVudEZyYWdtZW50ID0gX2RvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQ7XG4gICAgdmFyIGltcG9ydE5vZGUgPSBvcmlnaW5hbERvY3VtZW50LmltcG9ydE5vZGU7XG5cblxuICAgIHZhciBkb2N1bWVudE1vZGUgPSB7fTtcbiAgICB0cnkge1xuICAgICAgZG9jdW1lbnRNb2RlID0gY2xvbmUoZG9jdW1lbnQpLmRvY3VtZW50TW9kZSA/IGRvY3VtZW50LmRvY3VtZW50TW9kZSA6IHt9O1xuICAgIH0gY2F0Y2ggKF8pIHt9XG5cbiAgICB2YXIgaG9va3MgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIEV4cG9zZSB3aGV0aGVyIHRoaXMgYnJvd3NlciBzdXBwb3J0cyBydW5uaW5nIHRoZSBmdWxsIERPTVB1cmlmeS5cbiAgICAgKi9cbiAgICBET01QdXJpZnkuaXNTdXBwb3J0ZWQgPSB0eXBlb2YgZ2V0UGFyZW50Tm9kZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpbXBsZW1lbnRhdGlvbiAmJiB0eXBlb2YgaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudE1vZGUgIT09IDk7XG5cbiAgICB2YXIgTVVTVEFDSEVfRVhQUiQkMSA9IE1VU1RBQ0hFX0VYUFIsXG4gICAgICAgIEVSQl9FWFBSJCQxID0gRVJCX0VYUFIsXG4gICAgICAgIERBVEFfQVRUUiQkMSA9IERBVEFfQVRUUixcbiAgICAgICAgQVJJQV9BVFRSJCQxID0gQVJJQV9BVFRSLFxuICAgICAgICBJU19TQ1JJUFRfT1JfREFUQSQkMSA9IElTX1NDUklQVF9PUl9EQVRBLFxuICAgICAgICBBVFRSX1dISVRFU1BBQ0UkJDEgPSBBVFRSX1dISVRFU1BBQ0U7XG4gICAgdmFyIElTX0FMTE9XRURfVVJJJCQxID0gSVNfQUxMT1dFRF9VUkk7XG5cbiAgICAvKipcbiAgICAgKiBXZSBjb25zaWRlciB0aGUgZWxlbWVudHMgYW5kIGF0dHJpYnV0ZXMgYmVsb3cgdG8gYmUgc2FmZS4gSWRlYWxseVxuICAgICAqIGRvbid0IGFkZCBhbnkgbmV3IG9uZXMgYnV0IGZlZWwgZnJlZSB0byByZW1vdmUgdW53YW50ZWQgb25lcy5cbiAgICAgKi9cblxuICAgIC8qIGFsbG93ZWQgZWxlbWVudCBuYW1lcyAqL1xuXG4gICAgdmFyIEFMTE9XRURfVEFHUyA9IG51bGw7XG4gICAgdmFyIERFRkFVTFRfQUxMT1dFRF9UQUdTID0gYWRkVG9TZXQoe30sIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkkMShodG1sKSwgX3RvQ29uc3VtYWJsZUFycmF5JDEoc3ZnKSwgX3RvQ29uc3VtYWJsZUFycmF5JDEoc3ZnRmlsdGVycyksIF90b0NvbnN1bWFibGVBcnJheSQxKG1hdGhNbCksIF90b0NvbnN1bWFibGVBcnJheSQxKHRleHQpKSk7XG5cbiAgICAvKiBBbGxvd2VkIGF0dHJpYnV0ZSBuYW1lcyAqL1xuICAgIHZhciBBTExPV0VEX0FUVFIgPSBudWxsO1xuICAgIHZhciBERUZBVUxUX0FMTE9XRURfQVRUUiA9IGFkZFRvU2V0KHt9LCBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5JDEoaHRtbCQxKSwgX3RvQ29uc3VtYWJsZUFycmF5JDEoc3ZnJDEpLCBfdG9Db25zdW1hYmxlQXJyYXkkMShtYXRoTWwkMSksIF90b0NvbnN1bWFibGVBcnJheSQxKHhtbCkpKTtcblxuICAgIC8qIEV4cGxpY2l0bHkgZm9yYmlkZGVuIHRhZ3MgKG92ZXJyaWRlcyBBTExPV0VEX1RBR1MvQUREX1RBR1MpICovXG4gICAgdmFyIEZPUkJJRF9UQUdTID0gbnVsbDtcblxuICAgIC8qIEV4cGxpY2l0bHkgZm9yYmlkZGVuIGF0dHJpYnV0ZXMgKG92ZXJyaWRlcyBBTExPV0VEX0FUVFIvQUREX0FUVFIpICovXG4gICAgdmFyIEZPUkJJRF9BVFRSID0gbnVsbDtcblxuICAgIC8qIERlY2lkZSBpZiBBUklBIGF0dHJpYnV0ZXMgYXJlIG9rYXkgKi9cbiAgICB2YXIgQUxMT1dfQVJJQV9BVFRSID0gdHJ1ZTtcblxuICAgIC8qIERlY2lkZSBpZiBjdXN0b20gZGF0YSBhdHRyaWJ1dGVzIGFyZSBva2F5ICovXG4gICAgdmFyIEFMTE9XX0RBVEFfQVRUUiA9IHRydWU7XG5cbiAgICAvKiBEZWNpZGUgaWYgdW5rbm93biBwcm90b2NvbHMgYXJlIG9rYXkgKi9cbiAgICB2YXIgQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgPSBmYWxzZTtcblxuICAgIC8qIE91dHB1dCBzaG91bGQgYmUgc2FmZSBmb3IgY29tbW9uIHRlbXBsYXRlIGVuZ2luZXMuXG4gICAgICogVGhpcyBtZWFucywgRE9NUHVyaWZ5IHJlbW92ZXMgZGF0YSBhdHRyaWJ1dGVzLCBtdXN0YWNoZXMgYW5kIEVSQlxuICAgICAqL1xuICAgIHZhciBTQUZFX0ZPUl9URU1QTEFURVMgPSBmYWxzZTtcblxuICAgIC8qIERlY2lkZSBpZiBkb2N1bWVudCB3aXRoIDxodG1sPi4uLiBzaG91bGQgYmUgcmV0dXJuZWQgKi9cbiAgICB2YXIgV0hPTEVfRE9DVU1FTlQgPSBmYWxzZTtcblxuICAgIC8qIFRyYWNrIHdoZXRoZXIgY29uZmlnIGlzIGFscmVhZHkgc2V0IG9uIHRoaXMgaW5zdGFuY2Ugb2YgRE9NUHVyaWZ5LiAqL1xuICAgIHZhciBTRVRfQ09ORklHID0gZmFsc2U7XG5cbiAgICAvKiBEZWNpZGUgaWYgYWxsIGVsZW1lbnRzIChlLmcuIHN0eWxlLCBzY3JpcHQpIG11c3QgYmUgY2hpbGRyZW4gb2ZcbiAgICAgKiBkb2N1bWVudC5ib2R5LiBCeSBkZWZhdWx0LCBicm93c2VycyBtaWdodCBtb3ZlIHRoZW0gdG8gZG9jdW1lbnQuaGVhZCAqL1xuICAgIHZhciBGT1JDRV9CT0RZID0gZmFsc2U7XG5cbiAgICAvKiBEZWNpZGUgaWYgYSBET00gYEhUTUxCb2R5RWxlbWVudGAgc2hvdWxkIGJlIHJldHVybmVkLCBpbnN0ZWFkIG9mIGEgaHRtbFxuICAgICAqIHN0cmluZyAob3IgYSBUcnVzdGVkSFRNTCBvYmplY3QgaWYgVHJ1c3RlZCBUeXBlcyBhcmUgc3VwcG9ydGVkKS5cbiAgICAgKiBJZiBgV0hPTEVfRE9DVU1FTlRgIGlzIGVuYWJsZWQgYSBgSFRNTEh0bWxFbGVtZW50YCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWRcbiAgICAgKi9cbiAgICB2YXIgUkVUVVJOX0RPTSA9IGZhbHNlO1xuXG4gICAgLyogRGVjaWRlIGlmIGEgRE9NIGBEb2N1bWVudEZyYWdtZW50YCBzaG91bGQgYmUgcmV0dXJuZWQsIGluc3RlYWQgb2YgYSBodG1sXG4gICAgICogc3RyaW5nICAob3IgYSBUcnVzdGVkSFRNTCBvYmplY3QgaWYgVHJ1c3RlZCBUeXBlcyBhcmUgc3VwcG9ydGVkKSAqL1xuICAgIHZhciBSRVRVUk5fRE9NX0ZSQUdNRU5UID0gZmFsc2U7XG5cbiAgICAvKiBJZiBgUkVUVVJOX0RPTWAgb3IgYFJFVFVSTl9ET01fRlJBR01FTlRgIGlzIGVuYWJsZWQsIGRlY2lkZSBpZiB0aGUgcmV0dXJuZWQgRE9NXG4gICAgICogYE5vZGVgIGlzIGltcG9ydGVkIGludG8gdGhlIGN1cnJlbnQgYERvY3VtZW50YC4gSWYgdGhpcyBmbGFnIGlzIG5vdCBlbmFibGVkIHRoZVxuICAgICAqIGBOb2RlYCB3aWxsIGJlbG9uZyAoaXRzIG93bmVyRG9jdW1lbnQpIHRvIGEgZnJlc2ggYEhUTUxEb2N1bWVudGAsIGNyZWF0ZWQgYnlcbiAgICAgKiBET01QdXJpZnkuXG4gICAgICpcbiAgICAgKiBUaGlzIGRlZmF1bHRzIHRvIGB0cnVlYCBzdGFydGluZyBET01QdXJpZnkgMi4yLjAuIE5vdGUgdGhhdCBzZXR0aW5nIGl0IHRvIGBmYWxzZWBcbiAgICAgKiBtaWdodCBjYXVzZSBYU1MgZnJvbSBhdHRhY2tzIGhpZGRlbiBpbiBjbG9zZWQgc2hhZG93cm9vdHMgaW4gY2FzZSB0aGUgYnJvd3NlclxuICAgICAqIHN1cHBvcnRzIERlY2xhcmF0aXZlIFNoYWRvdzogRE9NIGh0dHBzOi8vd2ViLmRldi9kZWNsYXJhdGl2ZS1zaGFkb3ctZG9tL1xuICAgICAqL1xuICAgIHZhciBSRVRVUk5fRE9NX0lNUE9SVCA9IHRydWU7XG5cbiAgICAvKiBUcnkgdG8gcmV0dXJuIGEgVHJ1c3RlZCBUeXBlIG9iamVjdCBpbnN0ZWFkIG9mIGEgc3RyaW5nLCByZXR1cm4gYSBzdHJpbmcgaW5cbiAgICAgKiBjYXNlIFRydXN0ZWQgVHlwZXMgYXJlIG5vdCBzdXBwb3J0ZWQgICovXG4gICAgdmFyIFJFVFVSTl9UUlVTVEVEX1RZUEUgPSBmYWxzZTtcblxuICAgIC8qIE91dHB1dCBzaG91bGQgYmUgZnJlZSBmcm9tIERPTSBjbG9iYmVyaW5nIGF0dGFja3M/ICovXG4gICAgdmFyIFNBTklUSVpFX0RPTSA9IHRydWU7XG5cbiAgICAvKiBLZWVwIGVsZW1lbnQgY29udGVudCB3aGVuIHJlbW92aW5nIGVsZW1lbnQ/ICovXG4gICAgdmFyIEtFRVBfQ09OVEVOVCA9IHRydWU7XG5cbiAgICAvKiBJZiBhIGBOb2RlYCBpcyBwYXNzZWQgdG8gc2FuaXRpemUoKSwgdGhlbiBwZXJmb3JtcyBzYW5pdGl6YXRpb24gaW4tcGxhY2UgaW5zdGVhZFxuICAgICAqIG9mIGltcG9ydGluZyBpdCBpbnRvIGEgbmV3IERvY3VtZW50IGFuZCByZXR1cm5pbmcgYSBzYW5pdGl6ZWQgY29weSAqL1xuICAgIHZhciBJTl9QTEFDRSA9IGZhbHNlO1xuXG4gICAgLyogQWxsb3cgdXNhZ2Ugb2YgcHJvZmlsZXMgbGlrZSBodG1sLCBzdmcgYW5kIG1hdGhNbCAqL1xuICAgIHZhciBVU0VfUFJPRklMRVMgPSB7fTtcblxuICAgIC8qIFRhZ3MgdG8gaWdub3JlIGNvbnRlbnQgb2Ygd2hlbiBLRUVQX0NPTlRFTlQgaXMgdHJ1ZSAqL1xuICAgIHZhciBGT1JCSURfQ09OVEVOVFMgPSBhZGRUb1NldCh7fSwgWydhbm5vdGF0aW9uLXhtbCcsICdhdWRpbycsICdjb2xncm91cCcsICdkZXNjJywgJ2ZvcmVpZ25vYmplY3QnLCAnaGVhZCcsICdpZnJhbWUnLCAnbWF0aCcsICdtaScsICdtbicsICdtbycsICdtcycsICdtdGV4dCcsICdub2VtYmVkJywgJ25vZnJhbWVzJywgJ25vc2NyaXB0JywgJ3BsYWludGV4dCcsICdzY3JpcHQnLCAnc3R5bGUnLCAnc3ZnJywgJ3RlbXBsYXRlJywgJ3RoZWFkJywgJ3RpdGxlJywgJ3ZpZGVvJywgJ3htcCddKTtcblxuICAgIC8qIFRhZ3MgdGhhdCBhcmUgc2FmZSBmb3IgZGF0YTogVVJJcyAqL1xuICAgIHZhciBEQVRBX1VSSV9UQUdTID0gbnVsbDtcbiAgICB2YXIgREVGQVVMVF9EQVRBX1VSSV9UQUdTID0gYWRkVG9TZXQoe30sIFsnYXVkaW8nLCAndmlkZW8nLCAnaW1nJywgJ3NvdXJjZScsICdpbWFnZScsICd0cmFjayddKTtcblxuICAgIC8qIEF0dHJpYnV0ZXMgc2FmZSBmb3IgdmFsdWVzIGxpa2UgXCJqYXZhc2NyaXB0OlwiICovXG4gICAgdmFyIFVSSV9TQUZFX0FUVFJJQlVURVMgPSBudWxsO1xuICAgIHZhciBERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVMgPSBhZGRUb1NldCh7fSwgWydhbHQnLCAnY2xhc3MnLCAnZm9yJywgJ2lkJywgJ2xhYmVsJywgJ25hbWUnLCAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdzdW1tYXJ5JywgJ3RpdGxlJywgJ3ZhbHVlJywgJ3N0eWxlJywgJ3htbG5zJ10pO1xuXG4gICAgdmFyIE1BVEhNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCc7XG4gICAgdmFyIFNWR19OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuICAgIHZhciBIVE1MX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbiAgICAvKiBEb2N1bWVudCBuYW1lc3BhY2UgKi9cbiAgICB2YXIgTkFNRVNQQUNFID0gSFRNTF9OQU1FU1BBQ0U7XG5cbiAgICAvKiBLZWVwIGEgcmVmZXJlbmNlIHRvIGNvbmZpZyB0byBwYXNzIHRvIGhvb2tzICovXG4gICAgdmFyIENPTkZJRyA9IG51bGw7XG5cbiAgICAvKiBJZGVhbGx5LCBkbyBub3QgdG91Y2ggYW55dGhpbmcgYmVsb3cgdGhpcyBsaW5lICovXG4gICAgLyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xuXG4gICAgdmFyIGZvcm1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgLyoqXG4gICAgICogX3BhcnNlQ29uZmlnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGNmZyBvcHRpb25hbCBjb25maWcgbGl0ZXJhbFxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gICAgdmFyIF9wYXJzZUNvbmZpZyA9IGZ1bmN0aW9uIF9wYXJzZUNvbmZpZyhjZmcpIHtcbiAgICAgIGlmIChDT05GSUcgJiYgQ09ORklHID09PSBjZmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvKiBTaGllbGQgY29uZmlndXJhdGlvbiBvYmplY3QgZnJvbSB0YW1wZXJpbmcgKi9cbiAgICAgIGlmICghY2ZnIHx8ICh0eXBlb2YgY2ZnID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihjZmcpKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgY2ZnID0ge307XG4gICAgICB9XG5cbiAgICAgIC8qIFNoaWVsZCBjb25maWd1cmF0aW9uIG9iamVjdCBmcm9tIHByb3RvdHlwZSBwb2xsdXRpb24gKi9cbiAgICAgIGNmZyA9IGNsb25lKGNmZyk7XG5cbiAgICAgIC8qIFNldCBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgKi9cbiAgICAgIEFMTE9XRURfVEFHUyA9ICdBTExPV0VEX1RBR1MnIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9UQUdTKSA6IERFRkFVTFRfQUxMT1dFRF9UQUdTO1xuICAgICAgQUxMT1dFRF9BVFRSID0gJ0FMTE9XRURfQVRUUicgaW4gY2ZnID8gYWRkVG9TZXQoe30sIGNmZy5BTExPV0VEX0FUVFIpIDogREVGQVVMVF9BTExPV0VEX0FUVFI7XG4gICAgICBVUklfU0FGRV9BVFRSSUJVVEVTID0gJ0FERF9VUklfU0FGRV9BVFRSJyBpbiBjZmcgPyBhZGRUb1NldChjbG9uZShERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVMpLCBjZmcuQUREX1VSSV9TQUZFX0FUVFIpIDogREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTO1xuICAgICAgREFUQV9VUklfVEFHUyA9ICdBRERfREFUQV9VUklfVEFHUycgaW4gY2ZnID8gYWRkVG9TZXQoY2xvbmUoREVGQVVMVF9EQVRBX1VSSV9UQUdTKSwgY2ZnLkFERF9EQVRBX1VSSV9UQUdTKSA6IERFRkFVTFRfREFUQV9VUklfVEFHUztcbiAgICAgIEZPUkJJRF9UQUdTID0gJ0ZPUkJJRF9UQUdTJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9UQUdTKSA6IHt9O1xuICAgICAgRk9SQklEX0FUVFIgPSAnRk9SQklEX0FUVFInIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuRk9SQklEX0FUVFIpIDoge307XG4gICAgICBVU0VfUFJPRklMRVMgPSAnVVNFX1BST0ZJTEVTJyBpbiBjZmcgPyBjZmcuVVNFX1BST0ZJTEVTIDogZmFsc2U7XG4gICAgICBBTExPV19BUklBX0FUVFIgPSBjZmcuQUxMT1dfQVJJQV9BVFRSICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgICBBTExPV19EQVRBX0FUVFIgPSBjZmcuQUxMT1dfREFUQV9BVFRSICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgICBBTExPV19VTktOT1dOX1BST1RPQ09MUyA9IGNmZy5BTExPV19VTktOT1dOX1BST1RPQ09MUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgU0FGRV9GT1JfVEVNUExBVEVTID0gY2ZnLlNBRkVfRk9SX1RFTVBMQVRFUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgV0hPTEVfRE9DVU1FTlQgPSBjZmcuV0hPTEVfRE9DVU1FTlQgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgIFJFVFVSTl9ET00gPSBjZmcuUkVUVVJOX0RPTSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgUkVUVVJOX0RPTV9GUkFHTUVOVCA9IGNmZy5SRVRVUk5fRE9NX0ZSQUdNRU5UIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgICBSRVRVUk5fRE9NX0lNUE9SVCA9IGNmZy5SRVRVUk5fRE9NX0lNUE9SVCAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgICAgUkVUVVJOX1RSVVNURURfVFlQRSA9IGNmZy5SRVRVUk5fVFJVU1RFRF9UWVBFIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgICBGT1JDRV9CT0RZID0gY2ZnLkZPUkNFX0JPRFkgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgIFNBTklUSVpFX0RPTSA9IGNmZy5TQU5JVElaRV9ET00gIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcbiAgICAgIEtFRVBfQ09OVEVOVCA9IGNmZy5LRUVQX0NPTlRFTlQgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcbiAgICAgIElOX1BMQUNFID0gY2ZnLklOX1BMQUNFIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgICBJU19BTExPV0VEX1VSSSQkMSA9IGNmZy5BTExPV0VEX1VSSV9SRUdFWFAgfHwgSVNfQUxMT1dFRF9VUkkkJDE7XG4gICAgICBOQU1FU1BBQ0UgPSBjZmcuTkFNRVNQQUNFIHx8IE5BTUVTUEFDRTtcbiAgICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcbiAgICAgICAgQUxMT1dfREFUQV9BVFRSID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgIFJFVFVSTl9ET00gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBQYXJzZSBwcm9maWxlIGluZm8gKi9cbiAgICAgIGlmIChVU0VfUFJPRklMRVMpIHtcbiAgICAgICAgQUxMT1dFRF9UQUdTID0gYWRkVG9TZXQoe30sIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkkMSh0ZXh0KSkpO1xuICAgICAgICBBTExPV0VEX0FUVFIgPSBbXTtcbiAgICAgICAgaWYgKFVTRV9QUk9GSUxFUy5odG1sID09PSB0cnVlKSB7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBodG1sKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIGh0bWwkMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVVNFX1BST0ZJTEVTLnN2ZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgc3ZnKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHN2ZyQxKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHhtbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVVNFX1BST0ZJTEVTLnN2Z0ZpbHRlcnMgPT09IHRydWUpIHtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIHN2Z0ZpbHRlcnMpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgc3ZnJDEpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMubWF0aE1sID09PSB0cnVlKSB7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBtYXRoTWwpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgbWF0aE1sJDEpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBNZXJnZSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgKi9cbiAgICAgIGlmIChjZmcuQUREX1RBR1MpIHtcbiAgICAgICAgaWYgKEFMTE9XRURfVEFHUyA9PT0gREVGQVVMVF9BTExPV0VEX1RBR1MpIHtcbiAgICAgICAgICBBTExPV0VEX1RBR1MgPSBjbG9uZShBTExPV0VEX1RBR1MpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBjZmcuQUREX1RBR1MpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ZnLkFERF9BVFRSKSB7XG4gICAgICAgIGlmIChBTExPV0VEX0FUVFIgPT09IERFRkFVTFRfQUxMT1dFRF9BVFRSKSB7XG4gICAgICAgICAgQUxMT1dFRF9BVFRSID0gY2xvbmUoQUxMT1dFRF9BVFRSKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgY2ZnLkFERF9BVFRSKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNmZy5BRERfVVJJX1NBRkVfQVRUUikge1xuICAgICAgICBhZGRUb1NldChVUklfU0FGRV9BVFRSSUJVVEVTLCBjZmcuQUREX1VSSV9TQUZFX0FUVFIpO1xuICAgICAgfVxuXG4gICAgICAvKiBBZGQgI3RleHQgaW4gY2FzZSBLRUVQX0NPTlRFTlQgaXMgc2V0IHRvIHRydWUgKi9cbiAgICAgIGlmIChLRUVQX0NPTlRFTlQpIHtcbiAgICAgICAgQUxMT1dFRF9UQUdTWycjdGV4dCddID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogQWRkIGh0bWwsIGhlYWQgYW5kIGJvZHkgdG8gQUxMT1dFRF9UQUdTIGluIGNhc2UgV0hPTEVfRE9DVU1FTlQgaXMgdHJ1ZSAqL1xuICAgICAgaWYgKFdIT0xFX0RPQ1VNRU5UKSB7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgWydodG1sJywgJ2hlYWQnLCAnYm9keSddKTtcbiAgICAgIH1cblxuICAgICAgLyogQWRkIHRib2R5IHRvIEFMTE9XRURfVEFHUyBpbiBjYXNlIHRhYmxlcyBhcmUgcGVybWl0dGVkLCBzZWUgIzI4NiwgIzM2NSAqL1xuICAgICAgaWYgKEFMTE9XRURfVEFHUy50YWJsZSkge1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIFsndGJvZHknXSk7XG4gICAgICAgIGRlbGV0ZSBGT1JCSURfVEFHUy50Ym9keTtcbiAgICAgIH1cblxuICAgICAgLy8gUHJldmVudCBmdXJ0aGVyIG1hbmlwdWxhdGlvbiBvZiBjb25maWd1cmF0aW9uLlxuICAgICAgLy8gTm90IGF2YWlsYWJsZSBpbiBJRTgsIFNhZmFyaSA1LCBldGMuXG4gICAgICBpZiAoZnJlZXplKSB7XG4gICAgICAgIGZyZWV6ZShjZmcpO1xuICAgICAgfVxuXG4gICAgICBDT05GSUcgPSBjZmc7XG4gICAgfTtcblxuICAgIHZhciBNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFMgPSBhZGRUb1NldCh7fSwgWydtaScsICdtbycsICdtbicsICdtcycsICdtdGV4dCddKTtcblxuICAgIHZhciBIVE1MX0lOVEVHUkFUSU9OX1BPSU5UUyA9IGFkZFRvU2V0KHt9LCBbJ2ZvcmVpZ25vYmplY3QnLCAnZGVzYycsICd0aXRsZScsICdhbm5vdGF0aW9uLXhtbCddKTtcblxuICAgIC8qIEtlZXAgdHJhY2sgb2YgYWxsIHBvc3NpYmxlIFNWRyBhbmQgTWF0aE1MIHRhZ3NcbiAgICAgKiBzbyB0aGF0IHdlIGNhbiBwZXJmb3JtIHRoZSBuYW1lc3BhY2UgY2hlY2tzXG4gICAgICogY29ycmVjdGx5LiAqL1xuICAgIHZhciBBTExfU1ZHX1RBR1MgPSBhZGRUb1NldCh7fSwgc3ZnKTtcbiAgICBhZGRUb1NldChBTExfU1ZHX1RBR1MsIHN2Z0ZpbHRlcnMpO1xuICAgIGFkZFRvU2V0KEFMTF9TVkdfVEFHUywgc3ZnRGlzYWxsb3dlZCk7XG5cbiAgICB2YXIgQUxMX01BVEhNTF9UQUdTID0gYWRkVG9TZXQoe30sIG1hdGhNbCk7XG4gICAgYWRkVG9TZXQoQUxMX01BVEhNTF9UQUdTLCBtYXRoTWxEaXNhbGxvd2VkKTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50IGEgRE9NIGVsZW1lbnQgd2hvc2UgbmFtZXNwYWNlIGlzIGJlaW5nIGNoZWNrZWRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJuIGZhbHNlIGlmIHRoZSBlbGVtZW50IGhhcyBhXG4gICAgICogIG5hbWVzcGFjZSB0aGF0IGEgc3BlYy1jb21wbGlhbnQgcGFyc2VyIHdvdWxkIG5ldmVyXG4gICAgICogIHJldHVybi4gUmV0dXJuIHRydWUgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIHZhciBfY2hlY2tWYWxpZE5hbWVzcGFjZSA9IGZ1bmN0aW9uIF9jaGVja1ZhbGlkTmFtZXNwYWNlKGVsZW1lbnQpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gICAgICAvLyBJbiBKU0RPTSwgaWYgd2UncmUgaW5zaWRlIHNoYWRvdyBET00sIHRoZW4gcGFyZW50Tm9kZVxuICAgICAgLy8gY2FuIGJlIG51bGwuIFdlIGp1c3Qgc2ltdWxhdGUgcGFyZW50IGluIHRoaXMgY2FzZS5cbiAgICAgIGlmICghcGFyZW50IHx8ICFwYXJlbnQudGFnTmFtZSkge1xuICAgICAgICBwYXJlbnQgPSB7XG4gICAgICAgICAgbmFtZXNwYWNlVVJJOiBIVE1MX05BTUVTUEFDRSxcbiAgICAgICAgICB0YWdOYW1lOiAndGVtcGxhdGUnXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciB0YWdOYW1lID0gc3RyaW5nVG9Mb3dlckNhc2UoZWxlbWVudC50YWdOYW1lKTtcbiAgICAgIHZhciBwYXJlbnRUYWdOYW1lID0gc3RyaW5nVG9Mb3dlckNhc2UocGFyZW50LnRhZ05hbWUpO1xuXG4gICAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0UpIHtcbiAgICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIEhUTUwgbmFtZXNwYWNlIHRvIFNWR1xuICAgICAgICAvLyBpcyB2aWEgPHN2Zz4uIElmIGl0IGhhcHBlbnMgdmlhIGFueSBvdGhlciB0YWcsIHRoZW5cbiAgICAgICAgLy8gaXQgc2hvdWxkIGJlIGtpbGxlZC5cbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdzdmcnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIE1hdGhNTCB0byBTVkcgaXMgdmlhXG4gICAgICAgIC8vIHN2ZyBpZiBwYXJlbnQgaXMgZWl0aGVyIDxhbm5vdGF0aW9uLXhtbD4gb3IgTWF0aE1MXG4gICAgICAgIC8vIHRleHQgaW50ZWdyYXRpb24gcG9pbnRzLlxuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gTUFUSE1MX05BTUVTUEFDRSkge1xuICAgICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnc3ZnJyAmJiAocGFyZW50VGFnTmFtZSA9PT0gJ2Fubm90YXRpb24teG1sJyB8fCBNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2Ugb25seSBhbGxvdyBlbGVtZW50cyB0aGF0IGFyZSBkZWZpbmVkIGluIFNWR1xuICAgICAgICAvLyBzcGVjLiBBbGwgb3RoZXJzIGFyZSBkaXNhbGxvd2VkIGluIFNWRyBuYW1lc3BhY2UuXG4gICAgICAgIHJldHVybiBCb29sZWFuKEFMTF9TVkdfVEFHU1t0YWdOYW1lXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gTUFUSE1MX05BTUVTUEFDRSkge1xuICAgICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gSFRNTCBuYW1lc3BhY2UgdG8gTWF0aE1MXG4gICAgICAgIC8vIGlzIHZpYSA8bWF0aD4uIElmIGl0IGhhcHBlbnMgdmlhIGFueSBvdGhlciB0YWcsIHRoZW5cbiAgICAgICAgLy8gaXQgc2hvdWxkIGJlIGtpbGxlZC5cbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdtYXRoJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBTVkcgdG8gTWF0aE1MIGlzIHZpYVxuICAgICAgICAvLyA8bWF0aD4gYW5kIEhUTUwgaW50ZWdyYXRpb24gcG9pbnRzXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdtYXRoJyAmJiBIVE1MX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIG9ubHkgYWxsb3cgZWxlbWVudHMgdGhhdCBhcmUgZGVmaW5lZCBpbiBNYXRoTUxcbiAgICAgICAgLy8gc3BlYy4gQWxsIG90aGVycyBhcmUgZGlzYWxsb3dlZCBpbiBNYXRoTUwgbmFtZXNwYWNlLlxuICAgICAgICByZXR1cm4gQm9vbGVhbihBTExfTUFUSE1MX1RBR1NbdGFnTmFtZV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBTVkcgdG8gSFRNTCBpcyB2aWFcbiAgICAgICAgLy8gSFRNTCBpbnRlZ3JhdGlvbiBwb2ludHMsIGFuZCBmcm9tIE1hdGhNTCB0byBIVE1MXG4gICAgICAgIC8vIGlzIHZpYSBNYXRoTUwgdGV4dCBpbnRlZ3JhdGlvbiBwb2ludHNcbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0UgJiYgIUhUTUxfSU5URUdSQVRJT05fUE9JTlRTW3BhcmVudFRhZ05hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IE1BVEhNTF9OQU1FU1BBQ0UgJiYgIU1BVEhNTF9URVhUX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENlcnRhaW4gZWxlbWVudHMgYXJlIGFsbG93ZWQgaW4gYm90aCBTVkcgYW5kIEhUTUxcbiAgICAgICAgLy8gbmFtZXNwYWNlLiBXZSBuZWVkIHRvIHNwZWNpZnkgdGhlbSBleHBsaWNpdGx5XG4gICAgICAgIC8vIHNvIHRoYXQgdGhleSBkb24ndCBnZXQgZXJyb25vdXNseSBkZWxldGVkIGZyb21cbiAgICAgICAgLy8gSFRNTCBuYW1lc3BhY2UuXG4gICAgICAgIHZhciBjb21tb25TdmdBbmRIVE1MRWxlbWVudHMgPSBhZGRUb1NldCh7fSwgWyd0aXRsZScsICdzdHlsZScsICdmb250JywgJ2EnLCAnc2NyaXB0J10pO1xuXG4gICAgICAgIC8vIFdlIGRpc2FsbG93IHRhZ3MgdGhhdCBhcmUgc3BlY2lmaWMgZm9yIE1hdGhNTFxuICAgICAgICAvLyBvciBTVkcgYW5kIHNob3VsZCBuZXZlciBhcHBlYXIgaW4gSFRNTCBuYW1lc3BhY2VcbiAgICAgICAgcmV0dXJuICFBTExfTUFUSE1MX1RBR1NbdGFnTmFtZV0gJiYgKGNvbW1vblN2Z0FuZEhUTUxFbGVtZW50c1t0YWdOYW1lXSB8fCAhQUxMX1NWR19UQUdTW3RhZ05hbWVdKTtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvZGUgc2hvdWxkIG5ldmVyIHJlYWNoIHRoaXMgcGxhY2UgKHRoaXMgbWVhbnNcbiAgICAgIC8vIHRoYXQgdGhlIGVsZW1lbnQgc29tZWhvdyBnb3QgbmFtZXNwYWNlIHRoYXQgaXMgbm90XG4gICAgICAvLyBIVE1MLCBTVkcgb3IgTWF0aE1MKS4gUmV0dXJuIGZhbHNlIGp1c3QgaW4gY2FzZS5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2ZvcmNlUmVtb3ZlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBub2RlIGEgRE9NIG5vZGVcbiAgICAgKi9cbiAgICB2YXIgX2ZvcmNlUmVtb3ZlID0gZnVuY3Rpb24gX2ZvcmNlUmVtb3ZlKG5vZGUpIHtcbiAgICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwgeyBlbGVtZW50OiBub2RlIH0pO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG5vZGUub3V0ZXJIVE1MID0gZW1wdHlIVE1MO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfcmVtb3ZlQXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWUgYW4gQXR0cmlidXRlIG5hbWVcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBub2RlIGEgRE9NIG5vZGVcbiAgICAgKi9cbiAgICB2YXIgX3JlbW92ZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgbm9kZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgICAgYXR0cmlidXRlOiBub2RlLmdldEF0dHJpYnV0ZU5vZGUobmFtZSksXG4gICAgICAgICAgZnJvbTogbm9kZVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgICAgYXR0cmlidXRlOiBudWxsLFxuICAgICAgICAgIGZyb206IG5vZGVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXG4gICAgICAvLyBXZSB2b2lkIGF0dHJpYnV0ZSB2YWx1ZXMgZm9yIHVucmVtb3ZhYmxlIFwiaXNcIlwiIGF0dHJpYnV0ZXNcbiAgICAgIGlmIChuYW1lID09PSAnaXMnICYmICFBTExPV0VEX0FUVFJbbmFtZV0pIHtcbiAgICAgICAgaWYgKFJFVFVSTl9ET00gfHwgUkVUVVJOX0RPTV9GUkFHTUVOVCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBfZm9yY2VSZW1vdmUobm9kZSk7XG4gICAgICAgICAgfSBjYXRjaCAoXykge31cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgJycpO1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2luaXREb2N1bWVudFxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBkaXJ0eSBhIHN0cmluZyBvZiBkaXJ0eSBtYXJrdXBcbiAgICAgKiBAcmV0dXJuIHtEb2N1bWVudH0gYSBET00sIGZpbGxlZCB3aXRoIHRoZSBkaXJ0eSBtYXJrdXBcbiAgICAgKi9cbiAgICB2YXIgX2luaXREb2N1bWVudCA9IGZ1bmN0aW9uIF9pbml0RG9jdW1lbnQoZGlydHkpIHtcbiAgICAgIC8qIENyZWF0ZSBhIEhUTUwgZG9jdW1lbnQgKi9cbiAgICAgIHZhciBkb2MgPSB2b2lkIDA7XG4gICAgICB2YXIgbGVhZGluZ1doaXRlc3BhY2UgPSB2b2lkIDA7XG5cbiAgICAgIGlmIChGT1JDRV9CT0RZKSB7XG4gICAgICAgIGRpcnR5ID0gJzxyZW1vdmU+PC9yZW1vdmU+JyArIGRpcnR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogSWYgRk9SQ0VfQk9EWSBpc24ndCB1c2VkLCBsZWFkaW5nIHdoaXRlc3BhY2UgbmVlZHMgdG8gYmUgcHJlc2VydmVkIG1hbnVhbGx5ICovXG4gICAgICAgIHZhciBtYXRjaGVzID0gc3RyaW5nTWF0Y2goZGlydHksIC9eW1xcclxcblxcdCBdKy8pO1xuICAgICAgICBsZWFkaW5nV2hpdGVzcGFjZSA9IG1hdGNoZXMgJiYgbWF0Y2hlc1swXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGRpcnR5UGF5bG9hZCA9IHRydXN0ZWRUeXBlc1BvbGljeSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKGRpcnR5KSA6IGRpcnR5O1xuICAgICAgLypcbiAgICAgICAqIFVzZSB0aGUgRE9NUGFyc2VyIEFQSSBieSBkZWZhdWx0LCBmYWxsYmFjayBsYXRlciBpZiBuZWVkcyBiZVxuICAgICAgICogRE9NUGFyc2VyIG5vdCB3b3JrIGZvciBzdmcgd2hlbiBoYXMgbXVsdGlwbGUgcm9vdCBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBpZiAoTkFNRVNQQUNFID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZGlydHlQYXlsb2FkLCAndGV4dC9odG1sJyk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICB9XG5cbiAgICAgIC8qIFVzZSBjcmVhdGVIVE1MRG9jdW1lbnQgaW4gY2FzZSBET01QYXJzZXIgaXMgbm90IGF2YWlsYWJsZSAqL1xuICAgICAgaWYgKCFkb2MgfHwgIWRvYy5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgZG9jID0gaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnQoTkFNRVNQQUNFLCAndGVtcGxhdGUnLCBudWxsKTtcbiAgICAgICAgZG9jLmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwgPSBkaXJ0eVBheWxvYWQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBib2R5ID0gZG9jLmJvZHkgfHwgZG9jLmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgaWYgKGRpcnR5ICYmIGxlYWRpbmdXaGl0ZXNwYWNlKSB7XG4gICAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxlYWRpbmdXaGl0ZXNwYWNlKSwgYm9keS5jaGlsZE5vZGVzWzBdIHx8IG51bGwpO1xuICAgICAgfVxuXG4gICAgICAvKiBXb3JrIG9uIHdob2xlIGRvY3VtZW50IG9yIGp1c3QgaXRzIGJvZHkgKi9cbiAgICAgIHJldHVybiBXSE9MRV9ET0NVTUVOVCA/IGRvYy5kb2N1bWVudEVsZW1lbnQgOiBib2R5O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfY3JlYXRlSXRlcmF0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0RvY3VtZW50fSByb290IGRvY3VtZW50L2ZyYWdtZW50IHRvIGNyZWF0ZSBpdGVyYXRvciBmb3JcbiAgICAgKiBAcmV0dXJuIHtJdGVyYXRvcn0gaXRlcmF0b3IgaW5zdGFuY2VcbiAgICAgKi9cbiAgICB2YXIgX2NyZWF0ZUl0ZXJhdG9yID0gZnVuY3Rpb24gX2NyZWF0ZUl0ZXJhdG9yKHJvb3QpIHtcbiAgICAgIHJldHVybiBjcmVhdGVOb2RlSXRlcmF0b3IuY2FsbChyb290Lm93bmVyRG9jdW1lbnQgfHwgcm9vdCwgcm9vdCwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19URVhULCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQ7XG4gICAgICB9LCBmYWxzZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9pc0Nsb2JiZXJlZFxuICAgICAqXG4gICAgICogQHBhcmFtICB7Tm9kZX0gZWxtIGVsZW1lbnQgdG8gY2hlY2sgZm9yIGNsb2JiZXJpbmcgYXR0YWNrc1xuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY2xvYmJlcmVkLCBmYWxzZSBpZiBzYWZlXG4gICAgICovXG4gICAgdmFyIF9pc0Nsb2JiZXJlZCA9IGZ1bmN0aW9uIF9pc0Nsb2JiZXJlZChlbG0pIHtcbiAgICAgIGlmIChlbG0gaW5zdGFuY2VvZiBUZXh0IHx8IGVsbSBpbnN0YW5jZW9mIENvbW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGVsbS5ub2RlTmFtZSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGVsbS50ZXh0Q29udGVudCAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGVsbS5yZW1vdmVDaGlsZCAhPT0gJ2Z1bmN0aW9uJyB8fCAhKGVsbS5hdHRyaWJ1dGVzIGluc3RhbmNlb2YgTmFtZWROb2RlTWFwKSB8fCB0eXBlb2YgZWxtLnJlbW92ZUF0dHJpYnV0ZSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZWxtLnNldEF0dHJpYnV0ZSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZWxtLm5hbWVzcGFjZVVSSSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGVsbS5pbnNlcnRCZWZvcmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2lzTm9kZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7Tm9kZX0gb2JqIG9iamVjdCB0byBjaGVjayB3aGV0aGVyIGl0J3MgYSBET00gbm9kZVxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaXMgb2JqZWN0IGlzIGEgRE9NIG5vZGVcbiAgICAgKi9cbiAgICB2YXIgX2lzTm9kZSA9IGZ1bmN0aW9uIF9pc05vZGUob2JqZWN0KSB7XG4gICAgICByZXR1cm4gKHR5cGVvZiBOb2RlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihOb2RlKSkgPT09ICdvYmplY3QnID8gb2JqZWN0IGluc3RhbmNlb2YgTm9kZSA6IG9iamVjdCAmJiAodHlwZW9mIG9iamVjdCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqZWN0KSkgPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmplY3Qubm9kZVR5cGUgPT09ICdudW1iZXInICYmIHR5cGVvZiBvYmplY3Qubm9kZU5hbWUgPT09ICdzdHJpbmcnO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfZXhlY3V0ZUhvb2tcbiAgICAgKiBFeGVjdXRlIHVzZXIgY29uZmlndXJhYmxlIGhvb2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGVudHJ5UG9pbnQgIE5hbWUgb2YgdGhlIGhvb2sncyBlbnRyeSBwb2ludFxuICAgICAqIEBwYXJhbSAge05vZGV9IGN1cnJlbnROb2RlIG5vZGUgdG8gd29yayBvbiB3aXRoIHRoZSBob29rXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIGFkZGl0aW9uYWwgaG9vayBwYXJhbWV0ZXJzXG4gICAgICovXG4gICAgdmFyIF9leGVjdXRlSG9vayA9IGZ1bmN0aW9uIF9leGVjdXRlSG9vayhlbnRyeVBvaW50LCBjdXJyZW50Tm9kZSwgZGF0YSkge1xuICAgICAgaWYgKCFob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFycmF5Rm9yRWFjaChob29rc1tlbnRyeVBvaW50XSwgZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgICAgaG9vay5jYWxsKERPTVB1cmlmeSwgY3VycmVudE5vZGUsIGRhdGEsIENPTkZJRyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX3Nhbml0aXplRWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwcm90ZWN0IG5vZGVOYW1lXG4gICAgICogQHByb3RlY3QgdGV4dENvbnRlbnRcbiAgICAgKiBAcHJvdGVjdCByZW1vdmVDaGlsZFxuICAgICAqXG4gICAgICogQHBhcmFtICAge05vZGV9IGN1cnJlbnROb2RlIHRvIGNoZWNrIGZvciBwZXJtaXNzaW9uIHRvIGV4aXN0XG4gICAgICogQHJldHVybiAge0Jvb2xlYW59IHRydWUgaWYgbm9kZSB3YXMga2lsbGVkLCBmYWxzZSBpZiBsZWZ0IGFsaXZlXG4gICAgICovXG4gICAgdmFyIF9zYW5pdGl6ZUVsZW1lbnRzID0gZnVuY3Rpb24gX3Nhbml0aXplRWxlbWVudHMoY3VycmVudE5vZGUpIHtcbiAgICAgIHZhciBjb250ZW50ID0gdm9pZCAwO1xuXG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplRWxlbWVudHMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG5cbiAgICAgIC8qIENoZWNrIGlmIGVsZW1lbnQgaXMgY2xvYmJlcmVkIG9yIGNhbiBjbG9iYmVyICovXG4gICAgICBpZiAoX2lzQ2xvYmJlcmVkKGN1cnJlbnROb2RlKSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogQ2hlY2sgaWYgdGFnbmFtZSBjb250YWlucyBVbmljb2RlICovXG4gICAgICBpZiAoc3RyaW5nTWF0Y2goY3VycmVudE5vZGUubm9kZU5hbWUsIC9bXFx1MDA4MC1cXHVGRkZGXS8pKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBOb3cgbGV0J3MgY2hlY2sgdGhlIGVsZW1lbnQncyB0eXBlIGFuZCBuYW1lICovXG4gICAgICB2YXIgdGFnTmFtZSA9IHN0cmluZ1RvTG93ZXJDYXNlKGN1cnJlbnROb2RlLm5vZGVOYW1lKTtcblxuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVFbGVtZW50JywgY3VycmVudE5vZGUsIHtcbiAgICAgICAgdGFnTmFtZTogdGFnTmFtZSxcbiAgICAgICAgYWxsb3dlZFRhZ3M6IEFMTE9XRURfVEFHU1xuICAgICAgfSk7XG5cbiAgICAgIC8qIERldGVjdCBtWFNTIGF0dGVtcHRzIGFidXNpbmcgbmFtZXNwYWNlIGNvbmZ1c2lvbiAqL1xuICAgICAgaWYgKCFfaXNOb2RlKGN1cnJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkKSAmJiAoIV9pc05vZGUoY3VycmVudE5vZGUuY29udGVudCkgfHwgIV9pc05vZGUoY3VycmVudE5vZGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkpICYmIHJlZ0V4cFRlc3QoLzxbL1xcd10vZywgY3VycmVudE5vZGUuaW5uZXJIVE1MKSAmJiByZWdFeHBUZXN0KC88Wy9cXHddL2csIGN1cnJlbnROb2RlLnRleHRDb250ZW50KSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogUmVtb3ZlIGVsZW1lbnQgaWYgYW55dGhpbmcgZm9yYmlkcyBpdHMgcHJlc2VuY2UgKi9cbiAgICAgIGlmICghQUxMT1dFRF9UQUdTW3RhZ05hbWVdIHx8IEZPUkJJRF9UQUdTW3RhZ05hbWVdKSB7XG4gICAgICAgIC8qIEtlZXAgY29udGVudCBleGNlcHQgZm9yIGJhZC1saXN0ZWQgZWxlbWVudHMgKi9cbiAgICAgICAgaWYgKEtFRVBfQ09OVEVOVCAmJiAhRk9SQklEX0NPTlRFTlRTW3RhZ05hbWVdKSB7XG4gICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGN1cnJlbnROb2RlKSB8fCBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgIHZhciBjaGlsZE5vZGVzID0gZ2V0Q2hpbGROb2RlcyhjdXJyZW50Tm9kZSkgfHwgY3VycmVudE5vZGUuY2hpbGROb2RlcztcblxuICAgICAgICAgIGlmIChjaGlsZE5vZGVzICYmIHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZENvdW50ID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBjaGlsZENvdW50IC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2xvbmVOb2RlKGNoaWxkTm9kZXNbaV0sIHRydWUpLCBnZXROZXh0U2libGluZyhjdXJyZW50Tm9kZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBDaGVjayB3aGV0aGVyIGVsZW1lbnQgaGFzIGEgdmFsaWQgbmFtZXNwYWNlICovXG4gICAgICBpZiAoY3VycmVudE5vZGUgaW5zdGFuY2VvZiBFbGVtZW50ICYmICFfY2hlY2tWYWxpZE5hbWVzcGFjZShjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICgodGFnTmFtZSA9PT0gJ25vc2NyaXB0JyB8fCB0YWdOYW1lID09PSAnbm9lbWJlZCcpICYmIHJlZ0V4cFRlc3QoLzxcXC9ubyhzY3JpcHR8ZW1iZWQpL2ksIGN1cnJlbnROb2RlLmlubmVySFRNTCkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qIFNhbml0aXplIGVsZW1lbnQgY29udGVudCB0byBiZSB0ZW1wbGF0ZS1zYWZlICovXG4gICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTICYmIGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgIC8qIEdldCB0aGUgZWxlbWVudCdzIHRleHQgY29udGVudCAqL1xuICAgICAgICBjb250ZW50ID0gY3VycmVudE5vZGUudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnRlbnQgPSBzdHJpbmdSZXBsYWNlKGNvbnRlbnQsIE1VU1RBQ0hFX0VYUFIkJDEsICcgJyk7XG4gICAgICAgIGNvbnRlbnQgPSBzdHJpbmdSZXBsYWNlKGNvbnRlbnQsIEVSQl9FWFBSJCQxLCAnICcpO1xuICAgICAgICBpZiAoY3VycmVudE5vZGUudGV4dENvbnRlbnQgIT09IGNvbnRlbnQpIHtcbiAgICAgICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHsgZWxlbWVudDogY3VycmVudE5vZGUuY2xvbmVOb2RlKCkgfSk7XG4gICAgICAgICAgY3VycmVudE5vZGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZUVsZW1lbnRzJywgY3VycmVudE5vZGUsIG51bGwpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9pc1ZhbGlkQXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGxjVGFnIExvd2VyY2FzZSB0YWcgbmFtZSBvZiBjb250YWluaW5nIGVsZW1lbnQuXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBsY05hbWUgTG93ZXJjYXNlIGF0dHJpYnV0ZSBuYW1lLlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWUgQXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLCBvdGhlcndpc2UgZmFsc2UuXG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgICB2YXIgX2lzVmFsaWRBdHRyaWJ1dGUgPSBmdW5jdGlvbiBfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSkge1xuICAgICAgLyogTWFrZSBzdXJlIGF0dHJpYnV0ZSBjYW5ub3QgY2xvYmJlciAqL1xuICAgICAgaWYgKFNBTklUSVpFX0RPTSAmJiAobGNOYW1lID09PSAnaWQnIHx8IGxjTmFtZSA9PT0gJ25hbWUnKSAmJiAodmFsdWUgaW4gZG9jdW1lbnQgfHwgdmFsdWUgaW4gZm9ybUVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLyogQWxsb3cgdmFsaWQgZGF0YS0qIGF0dHJpYnV0ZXM6IEF0IGxlYXN0IG9uZSBjaGFyYWN0ZXIgYWZ0ZXIgXCItXCJcbiAgICAgICAgICAoaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZG9tLmh0bWwjZW1iZWRkaW5nLWN1c3RvbS1ub24tdmlzaWJsZS1kYXRhLXdpdGgtdGhlLWRhdGEtKi1hdHRyaWJ1dGVzKVxuICAgICAgICAgIFhNTC1jb21wYXRpYmxlIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmZyYXN0cnVjdHVyZS5odG1sI3htbC1jb21wYXRpYmxlIGFuZCBodHRwOi8vd3d3LnczLm9yZy9UUi94bWwvI2QwZTgwNClcbiAgICAgICAgICBXZSBkb24ndCBuZWVkIHRvIGNoZWNrIHRoZSB2YWx1ZTsgaXQncyBhbHdheXMgVVJJIHNhZmUuICovXG4gICAgICBpZiAoQUxMT1dfREFUQV9BVFRSICYmIHJlZ0V4cFRlc3QoREFUQV9BVFRSJCQxLCBsY05hbWUpKSA7IGVsc2UgaWYgKEFMTE9XX0FSSUFfQVRUUiAmJiByZWdFeHBUZXN0KEFSSUFfQVRUUiQkMSwgbGNOYW1lKSkgOyBlbHNlIGlmICghQUxMT1dFRF9BVFRSW2xjTmFtZV0gfHwgRk9SQklEX0FUVFJbbGNOYW1lXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgLyogQ2hlY2sgdmFsdWUgaXMgc2FmZS4gRmlyc3QsIGlzIGF0dHIgaW5lcnQ/IElmIHNvLCBpcyBzYWZlICovXG4gICAgICB9IGVsc2UgaWYgKFVSSV9TQUZFX0FUVFJJQlVURVNbbGNOYW1lXSkgOyBlbHNlIGlmIChyZWdFeHBUZXN0KElTX0FMTE9XRURfVVJJJCQxLCBzdHJpbmdSZXBsYWNlKHZhbHVlLCBBVFRSX1dISVRFU1BBQ0UkJDEsICcnKSkpIDsgZWxzZSBpZiAoKGxjTmFtZSA9PT0gJ3NyYycgfHwgbGNOYW1lID09PSAneGxpbms6aHJlZicgfHwgbGNOYW1lID09PSAnaHJlZicpICYmIGxjVGFnICE9PSAnc2NyaXB0JyAmJiBzdHJpbmdJbmRleE9mKHZhbHVlLCAnZGF0YTonKSA9PT0gMCAmJiBEQVRBX1VSSV9UQUdTW2xjVGFnXSkgOyBlbHNlIGlmIChBTExPV19VTktOT1dOX1BST1RPQ09MUyAmJiAhcmVnRXhwVGVzdChJU19TQ1JJUFRfT1JfREFUQSQkMSwgc3RyaW5nUmVwbGFjZSh2YWx1ZSwgQVRUUl9XSElURVNQQUNFJCQxLCAnJykpKSA7IGVsc2UgaWYgKCF2YWx1ZSkgOyBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX3Nhbml0aXplQXR0cmlidXRlc1xuICAgICAqXG4gICAgICogQHByb3RlY3QgYXR0cmlidXRlc1xuICAgICAqIEBwcm90ZWN0IG5vZGVOYW1lXG4gICAgICogQHByb3RlY3QgcmVtb3ZlQXR0cmlidXRlXG4gICAgICogQHByb3RlY3Qgc2V0QXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBjdXJyZW50Tm9kZSB0byBzYW5pdGl6ZVxuICAgICAqL1xuICAgIHZhciBfc2FuaXRpemVBdHRyaWJ1dGVzID0gZnVuY3Rpb24gX3Nhbml0aXplQXR0cmlidXRlcyhjdXJyZW50Tm9kZSkge1xuICAgICAgdmFyIGF0dHIgPSB2b2lkIDA7XG4gICAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG4gICAgICB2YXIgbGNOYW1lID0gdm9pZCAwO1xuICAgICAgdmFyIGwgPSB2b2lkIDA7XG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplQXR0cmlidXRlcycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBjdXJyZW50Tm9kZS5hdHRyaWJ1dGVzO1xuXG4gICAgICAvKiBDaGVjayBpZiB3ZSBoYXZlIGF0dHJpYnV0ZXM7IGlmIG5vdCB3ZSBtaWdodCBoYXZlIGEgdGV4dCBub2RlICovXG5cbiAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBob29rRXZlbnQgPSB7XG4gICAgICAgIGF0dHJOYW1lOiAnJyxcbiAgICAgICAgYXR0clZhbHVlOiAnJyxcbiAgICAgICAga2VlcEF0dHI6IHRydWUsXG4gICAgICAgIGFsbG93ZWRBdHRyaWJ1dGVzOiBBTExPV0VEX0FUVFJcbiAgICAgIH07XG4gICAgICBsID0gYXR0cmlidXRlcy5sZW5ndGg7XG5cbiAgICAgIC8qIEdvIGJhY2t3YXJkcyBvdmVyIGFsbCBhdHRyaWJ1dGVzOyBzYWZlbHkgcmVtb3ZlIGJhZCBvbmVzICovXG4gICAgICB3aGlsZSAobC0tKSB7XG4gICAgICAgIGF0dHIgPSBhdHRyaWJ1dGVzW2xdO1xuICAgICAgICB2YXIgX2F0dHIgPSBhdHRyLFxuICAgICAgICAgICAgbmFtZSA9IF9hdHRyLm5hbWUsXG4gICAgICAgICAgICBuYW1lc3BhY2VVUkkgPSBfYXR0ci5uYW1lc3BhY2VVUkk7XG5cbiAgICAgICAgdmFsdWUgPSBzdHJpbmdUcmltKGF0dHIudmFsdWUpO1xuICAgICAgICBsY05hbWUgPSBzdHJpbmdUb0xvd2VyQ2FzZShuYW1lKTtcblxuICAgICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICAgIGhvb2tFdmVudC5hdHRyTmFtZSA9IGxjTmFtZTtcbiAgICAgICAgaG9va0V2ZW50LmF0dHJWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBob29rRXZlbnQua2VlcEF0dHIgPSB0cnVlO1xuICAgICAgICBob29rRXZlbnQuZm9yY2VLZWVwQXR0ciA9IHVuZGVmaW5lZDsgLy8gQWxsb3dzIGRldmVsb3BlcnMgdG8gc2VlIHRoaXMgaXMgYSBwcm9wZXJ0eSB0aGV5IGNhbiBzZXRcbiAgICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVBdHRyaWJ1dGUnLCBjdXJyZW50Tm9kZSwgaG9va0V2ZW50KTtcbiAgICAgICAgdmFsdWUgPSBob29rRXZlbnQuYXR0clZhbHVlO1xuICAgICAgICAvKiBEaWQgdGhlIGhvb2tzIGFwcHJvdmUgb2YgdGhlIGF0dHJpYnV0ZT8gKi9cbiAgICAgICAgaWYgKGhvb2tFdmVudC5mb3JjZUtlZXBBdHRyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBSZW1vdmUgYXR0cmlidXRlICovXG4gICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuXG4gICAgICAgIC8qIERpZCB0aGUgaG9va3MgYXBwcm92ZSBvZiB0aGUgYXR0cmlidXRlPyAqL1xuICAgICAgICBpZiAoIWhvb2tFdmVudC5rZWVwQXR0cikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogV29yayBhcm91bmQgYSBzZWN1cml0eSBpc3N1ZSBpbiBqUXVlcnkgMy4wICovXG4gICAgICAgIGlmIChyZWdFeHBUZXN0KC9cXC8+L2ksIHZhbHVlKSkge1xuICAgICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogU2FuaXRpemUgYXR0cmlidXRlIGNvbnRlbnQgdG8gYmUgdGVtcGxhdGUtc2FmZSAqL1xuICAgICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICAgICAgdmFsdWUgPSBzdHJpbmdSZXBsYWNlKHZhbHVlLCBNVVNUQUNIRV9FWFBSJCQxLCAnICcpO1xuICAgICAgICAgIHZhbHVlID0gc3RyaW5nUmVwbGFjZSh2YWx1ZSwgRVJCX0VYUFIkJDEsICcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBJcyBgdmFsdWVgIHZhbGlkIGZvciB0aGlzIGF0dHJpYnV0ZT8gKi9cbiAgICAgICAgdmFyIGxjVGFnID0gY3VycmVudE5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKCFfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEhhbmRsZSBpbnZhbGlkIGRhdGEtKiBhdHRyaWJ1dGUgc2V0IGJ5IHRyeS1jYXRjaGluZyBpdCAqL1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChuYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnNldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgbmFtZSwgdmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKiBGYWxsYmFjayB0byBzZXRBdHRyaWJ1dGUoKSBmb3IgYnJvd3Nlci11bnJlY29nbml6ZWQgbmFtZXNwYWNlcyBlLmcuIFwieC1zY2hlbWFcIi4gKi9cbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXJyYXlQb3AoRE9NUHVyaWZ5LnJlbW92ZWQpO1xuICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgfVxuXG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVBdHRyaWJ1dGVzJywgY3VycmVudE5vZGUsIG51bGwpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfc2FuaXRpemVTaGFkb3dET01cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0RvY3VtZW50RnJhZ21lbnR9IGZyYWdtZW50IHRvIGl0ZXJhdGUgb3ZlciByZWN1cnNpdmVseVxuICAgICAqL1xuICAgIHZhciBfc2FuaXRpemVTaGFkb3dET00gPSBmdW5jdGlvbiBfc2FuaXRpemVTaGFkb3dET00oZnJhZ21lbnQpIHtcbiAgICAgIHZhciBzaGFkb3dOb2RlID0gdm9pZCAwO1xuICAgICAgdmFyIHNoYWRvd0l0ZXJhdG9yID0gX2NyZWF0ZUl0ZXJhdG9yKGZyYWdtZW50KTtcblxuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZVNoYWRvd0RPTScsIGZyYWdtZW50LCBudWxsKTtcblxuICAgICAgd2hpbGUgKHNoYWRvd05vZGUgPSBzaGFkb3dJdGVyYXRvci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVTaGFkb3dOb2RlJywgc2hhZG93Tm9kZSwgbnVsbCk7XG5cbiAgICAgICAgLyogU2FuaXRpemUgdGFncyBhbmQgZWxlbWVudHMgKi9cbiAgICAgICAgaWYgKF9zYW5pdGl6ZUVsZW1lbnRzKHNoYWRvd05vZGUpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBEZWVwIHNoYWRvdyBET00gZGV0ZWN0ZWQgKi9cbiAgICAgICAgaWYgKHNoYWRvd05vZGUuY29udGVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgICBfc2FuaXRpemVTaGFkb3dET00oc2hhZG93Tm9kZS5jb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIENoZWNrIGF0dHJpYnV0ZXMsIHNhbml0aXplIGlmIG5lY2Vzc2FyeSAqL1xuICAgICAgICBfc2FuaXRpemVBdHRyaWJ1dGVzKHNoYWRvd05vZGUpO1xuICAgICAgfVxuXG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVTaGFkb3dET00nLCBmcmFnbWVudCwgbnVsbCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNhbml0aXplXG4gICAgICogUHVibGljIG1ldGhvZCBwcm92aWRpbmcgY29yZSBzYW5pdGF0aW9uIGZ1bmN0aW9uYWxpdHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE5vZGV9IGRpcnR5IHN0cmluZyBvciBET00gbm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gICAgRE9NUHVyaWZ5LnNhbml0aXplID0gZnVuY3Rpb24gKGRpcnR5LCBjZmcpIHtcbiAgICAgIHZhciBib2R5ID0gdm9pZCAwO1xuICAgICAgdmFyIGltcG9ydGVkTm9kZSA9IHZvaWQgMDtcbiAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHZvaWQgMDtcbiAgICAgIHZhciBvbGROb2RlID0gdm9pZCAwO1xuICAgICAgdmFyIHJldHVybk5vZGUgPSB2b2lkIDA7XG4gICAgICAvKiBNYWtlIHN1cmUgd2UgaGF2ZSBhIHN0cmluZyB0byBzYW5pdGl6ZS5cbiAgICAgICAgRE8gTk9UIHJldHVybiBlYXJseSwgYXMgdGhpcyB3aWxsIHJldHVybiB0aGUgd3JvbmcgdHlwZSBpZlxuICAgICAgICB0aGUgdXNlciBoYXMgcmVxdWVzdGVkIGEgRE9NIG9iamVjdCByYXRoZXIgdGhhbiBhIHN0cmluZyAqL1xuICAgICAgaWYgKCFkaXJ0eSkge1xuICAgICAgICBkaXJ0eSA9ICc8IS0tPic7XG4gICAgICB9XG5cbiAgICAgIC8qIFN0cmluZ2lmeSwgaW4gY2FzZSBkaXJ0eSBpcyBhbiBvYmplY3QgKi9cbiAgICAgIGlmICh0eXBlb2YgZGlydHkgIT09ICdzdHJpbmcnICYmICFfaXNOb2RlKGRpcnR5KSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVnYXRlZC1jb25kaXRpb25cbiAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eS50b1N0cmluZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRocm93IHR5cGVFcnJvckNyZWF0ZSgndG9TdHJpbmcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXJ0eSA9IGRpcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IHR5cGVFcnJvckNyZWF0ZSgnZGlydHkgaXMgbm90IGEgc3RyaW5nLCBhYm9ydGluZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBDaGVjayB3ZSBjYW4gcnVuLiBPdGhlcndpc2UgZmFsbCBiYWNrIG9yIGlnbm9yZSAqL1xuICAgICAgaWYgKCFET01QdXJpZnkuaXNTdXBwb3J0ZWQpIHtcbiAgICAgICAgaWYgKF90eXBlb2Yod2luZG93LnRvU3RhdGljSFRNTCkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB3aW5kb3cudG9TdGF0aWNIVE1MID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cudG9TdGF0aWNIVE1MKGRpcnR5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX2lzTm9kZShkaXJ0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cudG9TdGF0aWNIVE1MKGRpcnR5Lm91dGVySFRNTCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpcnR5O1xuICAgICAgfVxuXG4gICAgICAvKiBBc3NpZ24gY29uZmlnIHZhcnMgKi9cbiAgICAgIGlmICghU0VUX0NPTkZJRykge1xuICAgICAgICBfcGFyc2VDb25maWcoY2ZnKTtcbiAgICAgIH1cblxuICAgICAgLyogQ2xlYW4gdXAgcmVtb3ZlZCBlbGVtZW50cyAqL1xuICAgICAgRE9NUHVyaWZ5LnJlbW92ZWQgPSBbXTtcblxuICAgICAgLyogQ2hlY2sgaWYgZGlydHkgaXMgY29ycmVjdGx5IHR5cGVkIGZvciBJTl9QTEFDRSAqL1xuICAgICAgaWYgKHR5cGVvZiBkaXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgSU5fUExBQ0UgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKElOX1BMQUNFKSA7IGVsc2UgaWYgKGRpcnR5IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAvKiBJZiBkaXJ0eSBpcyBhIERPTSBlbGVtZW50LCBhcHBlbmQgdG8gYW4gZW1wdHkgZG9jdW1lbnQgdG8gYXZvaWRcbiAgICAgICAgICAgZWxlbWVudHMgYmVpbmcgc3RyaXBwZWQgYnkgdGhlIHBhcnNlciAqL1xuICAgICAgICBib2R5ID0gX2luaXREb2N1bWVudCgnPCEtLS0tPicpO1xuICAgICAgICBpbXBvcnRlZE5vZGUgPSBib2R5Lm93bmVyRG9jdW1lbnQuaW1wb3J0Tm9kZShkaXJ0eSwgdHJ1ZSk7XG4gICAgICAgIGlmIChpbXBvcnRlZE5vZGUubm9kZVR5cGUgPT09IDEgJiYgaW1wb3J0ZWROb2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgICAvKiBOb2RlIGlzIGFscmVhZHkgYSBib2R5LCB1c2UgYXMgaXMgKi9cbiAgICAgICAgICBib2R5ID0gaW1wb3J0ZWROb2RlO1xuICAgICAgICB9IGVsc2UgaWYgKGltcG9ydGVkTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICAgICAgYm9keSA9IGltcG9ydGVkTm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItbm9kZS1hcHBlbmRcbiAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKGltcG9ydGVkTm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIEV4aXQgZGlyZWN0bHkgaWYgd2UgaGF2ZSBub3RoaW5nIHRvIGRvICovXG4gICAgICAgIGlmICghUkVUVVJOX0RPTSAmJiAhU0FGRV9GT1JfVEVNUExBVEVTICYmICFXSE9MRV9ET0NVTUVOVCAmJlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItaW5jbHVkZXNcbiAgICAgICAgZGlydHkuaW5kZXhPZignPCcpID09PSAtMSkge1xuICAgICAgICAgIHJldHVybiB0cnVzdGVkVHlwZXNQb2xpY3kgJiYgUkVUVVJOX1RSVVNURURfVFlQRSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKGRpcnR5KSA6IGRpcnR5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogSW5pdGlhbGl6ZSB0aGUgZG9jdW1lbnQgdG8gd29yayBvbiAqL1xuICAgICAgICBib2R5ID0gX2luaXREb2N1bWVudChkaXJ0eSk7XG5cbiAgICAgICAgLyogQ2hlY2sgd2UgaGF2ZSBhIERPTSBub2RlIGZyb20gdGhlIGRhdGEgKi9cbiAgICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgICAgcmV0dXJuIFJFVFVSTl9ET00gPyBudWxsIDogZW1wdHlIVE1MO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIFJlbW92ZSBmaXJzdCBlbGVtZW50IG5vZGUgKG91cnMpIGlmIEZPUkNFX0JPRFkgaXMgc2V0ICovXG4gICAgICBpZiAoYm9keSAmJiBGT1JDRV9CT0RZKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgICAvKiBHZXQgbm9kZSBpdGVyYXRvciAqL1xuICAgICAgdmFyIG5vZGVJdGVyYXRvciA9IF9jcmVhdGVJdGVyYXRvcihJTl9QTEFDRSA/IGRpcnR5IDogYm9keSk7XG5cbiAgICAgIC8qIE5vdyBzdGFydCBpdGVyYXRpbmcgb3ZlciB0aGUgY3JlYXRlZCBkb2N1bWVudCAqL1xuICAgICAgd2hpbGUgKGN1cnJlbnROb2RlID0gbm9kZUl0ZXJhdG9yLm5leHROb2RlKCkpIHtcbiAgICAgICAgLyogRml4IElFJ3Mgc3RyYW5nZSBiZWhhdmlvciB3aXRoIG1hbmlwdWxhdGVkIHRleHROb2RlcyAjODkgKi9cbiAgICAgICAgaWYgKGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSAzICYmIGN1cnJlbnROb2RlID09PSBvbGROb2RlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBTYW5pdGl6ZSB0YWdzIGFuZCBlbGVtZW50cyAqL1xuICAgICAgICBpZiAoX3Nhbml0aXplRWxlbWVudHMoY3VycmVudE5vZGUpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBTaGFkb3cgRE9NIGRldGVjdGVkLCBzYW5pdGl6ZSBpdCAqL1xuICAgICAgICBpZiAoY3VycmVudE5vZGUuY29udGVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgICBfc2FuaXRpemVTaGFkb3dET00oY3VycmVudE5vZGUuY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBDaGVjayBhdHRyaWJ1dGVzLCBzYW5pdGl6ZSBpZiBuZWNlc3NhcnkgKi9cbiAgICAgICAgX3Nhbml0aXplQXR0cmlidXRlcyhjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgb2xkTm9kZSA9IGN1cnJlbnROb2RlO1xuICAgICAgfVxuXG4gICAgICBvbGROb2RlID0gbnVsbDtcblxuICAgICAgLyogSWYgd2Ugc2FuaXRpemVkIGBkaXJ0eWAgaW4tcGxhY2UsIHJldHVybiBpdC4gKi9cbiAgICAgIGlmIChJTl9QTEFDRSkge1xuICAgICAgICByZXR1cm4gZGlydHk7XG4gICAgICB9XG5cbiAgICAgIC8qIFJldHVybiBzYW5pdGl6ZWQgc3RyaW5nIG9yIERPTSAqL1xuICAgICAgaWYgKFJFVFVSTl9ET00pIHtcbiAgICAgICAgaWYgKFJFVFVSTl9ET01fRlJBR01FTlQpIHtcbiAgICAgICAgICByZXR1cm5Ob2RlID0gY3JlYXRlRG9jdW1lbnRGcmFnbWVudC5jYWxsKGJvZHkub3duZXJEb2N1bWVudCk7XG5cbiAgICAgICAgICB3aGlsZSAoYm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItbm9kZS1hcHBlbmRcbiAgICAgICAgICAgIHJldHVybk5vZGUuYXBwZW5kQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuTm9kZSA9IGJvZHk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoUkVUVVJOX0RPTV9JTVBPUlQpIHtcbiAgICAgICAgICAvKlxuICAgICAgICAgICAgQWRvcHROb2RlKCkgaXMgbm90IHVzZWQgYmVjYXVzZSBpbnRlcm5hbCBzdGF0ZSBpcyBub3QgcmVzZXRcbiAgICAgICAgICAgIChlLmcuIHRoZSBwYXN0IG5hbWVzIG1hcCBvZiBhIEhUTUxGb3JtRWxlbWVudCksIHRoaXMgaXMgc2FmZVxuICAgICAgICAgICAgaW4gdGhlb3J5IGJ1dCB3ZSB3b3VsZCByYXRoZXIgbm90IHJpc2sgYW5vdGhlciBhdHRhY2sgdmVjdG9yLlxuICAgICAgICAgICAgVGhlIHN0YXRlIHRoYXQgaXMgY2xvbmVkIGJ5IGltcG9ydE5vZGUoKSBpcyBleHBsaWNpdGx5IGRlZmluZWRcbiAgICAgICAgICAgIGJ5IHRoZSBzcGVjcy5cbiAgICAgICAgICAqL1xuICAgICAgICAgIHJldHVybk5vZGUgPSBpbXBvcnROb2RlLmNhbGwob3JpZ2luYWxEb2N1bWVudCwgcmV0dXJuTm9kZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuTm9kZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlcmlhbGl6ZWRIVE1MID0gV0hPTEVfRE9DVU1FTlQgPyBib2R5Lm91dGVySFRNTCA6IGJvZHkuaW5uZXJIVE1MO1xuXG4gICAgICAvKiBTYW5pdGl6ZSBmaW5hbCBzdHJpbmcgdGVtcGxhdGUtc2FmZSAqL1xuICAgICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUykge1xuICAgICAgICBzZXJpYWxpemVkSFRNTCA9IHN0cmluZ1JlcGxhY2Uoc2VyaWFsaXplZEhUTUwsIE1VU1RBQ0hFX0VYUFIkJDEsICcgJyk7XG4gICAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc3RyaW5nUmVwbGFjZShzZXJpYWxpemVkSFRNTCwgRVJCX0VYUFIkJDEsICcgJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVzdGVkVHlwZXNQb2xpY3kgJiYgUkVUVVJOX1RSVVNURURfVFlQRSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKHNlcmlhbGl6ZWRIVE1MKSA6IHNlcmlhbGl6ZWRIVE1MO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIHNldCB0aGUgY29uZmlndXJhdGlvbiBvbmNlXG4gICAgICogc2V0Q29uZmlnXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICovXG4gICAgRE9NUHVyaWZ5LnNldENvbmZpZyA9IGZ1bmN0aW9uIChjZmcpIHtcbiAgICAgIF9wYXJzZUNvbmZpZyhjZmcpO1xuICAgICAgU0VUX0NPTkZJRyA9IHRydWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIHRoZSBjb25maWd1cmF0aW9uXG4gICAgICogY2xlYXJDb25maWdcbiAgICAgKlxuICAgICAqL1xuICAgIERPTVB1cmlmeS5jbGVhckNvbmZpZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIENPTkZJRyA9IG51bGw7XG4gICAgICBTRVRfQ09ORklHID0gZmFsc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gY2hlY2sgaWYgYW4gYXR0cmlidXRlIHZhbHVlIGlzIHZhbGlkLlxuICAgICAqIFVzZXMgbGFzdCBzZXQgY29uZmlnLCBpZiBhbnkuIE90aGVyd2lzZSwgdXNlcyBjb25maWcgZGVmYXVsdHMuXG4gICAgICogaXNWYWxpZEF0dHJpYnV0ZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB0YWcgVGFnIG5hbWUgb2YgY29udGFpbmluZyBlbGVtZW50LlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gYXR0ciBBdHRyaWJ1dGUgbmFtZS5cbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHZhbHVlIEF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC4gT3RoZXJ3aXNlLCByZXR1cm5zIGZhbHNlLlxuICAgICAqL1xuICAgIERPTVB1cmlmeS5pc1ZhbGlkQXR0cmlidXRlID0gZnVuY3Rpb24gKHRhZywgYXR0ciwgdmFsdWUpIHtcbiAgICAgIC8qIEluaXRpYWxpemUgc2hhcmVkIGNvbmZpZyB2YXJzIGlmIG5lY2Vzc2FyeS4gKi9cbiAgICAgIGlmICghQ09ORklHKSB7XG4gICAgICAgIF9wYXJzZUNvbmZpZyh7fSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBsY1RhZyA9IHN0cmluZ1RvTG93ZXJDYXNlKHRhZyk7XG4gICAgICB2YXIgbGNOYW1lID0gc3RyaW5nVG9Mb3dlckNhc2UoYXR0cik7XG4gICAgICByZXR1cm4gX2lzVmFsaWRBdHRyaWJ1dGUobGNUYWcsIGxjTmFtZSwgdmFsdWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRIb29rXG4gICAgICogUHVibGljIG1ldGhvZCB0byBhZGQgRE9NUHVyaWZ5IGhvb2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZW50cnlQb2ludCBlbnRyeSBwb2ludCBmb3IgdGhlIGhvb2sgdG8gYWRkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va0Z1bmN0aW9uIGZ1bmN0aW9uIHRvIGV4ZWN1dGVcbiAgICAgKi9cbiAgICBET01QdXJpZnkuYWRkSG9vayA9IGZ1bmN0aW9uIChlbnRyeVBvaW50LCBob29rRnVuY3Rpb24pIHtcbiAgICAgIGlmICh0eXBlb2YgaG9va0Z1bmN0aW9uICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaG9va3NbZW50cnlQb2ludF0gPSBob29rc1tlbnRyeVBvaW50XSB8fCBbXTtcbiAgICAgIGFycmF5UHVzaChob29rc1tlbnRyeVBvaW50XSwgaG9va0Z1bmN0aW9uKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlSG9va1xuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGEgRE9NUHVyaWZ5IGhvb2sgYXQgYSBnaXZlbiBlbnRyeVBvaW50XG4gICAgICogKHBvcHMgaXQgZnJvbSB0aGUgc3RhY2sgb2YgaG9va3MgaWYgbW9yZSBhcmUgcHJlc2VudClcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9vayB0byByZW1vdmVcbiAgICAgKi9cbiAgICBET01QdXJpZnkucmVtb3ZlSG9vayA9IGZ1bmN0aW9uIChlbnRyeVBvaW50KSB7XG4gICAgICBpZiAoaG9va3NbZW50cnlQb2ludF0pIHtcbiAgICAgICAgYXJyYXlQb3AoaG9va3NbZW50cnlQb2ludF0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVIb29rc1xuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGFsbCBET01QdXJpZnkgaG9va3MgYXQgYSBnaXZlbiBlbnRyeVBvaW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGVudHJ5UG9pbnQgZW50cnkgcG9pbnQgZm9yIHRoZSBob29rcyB0byByZW1vdmVcbiAgICAgKi9cbiAgICBET01QdXJpZnkucmVtb3ZlSG9va3MgPSBmdW5jdGlvbiAoZW50cnlQb2ludCkge1xuICAgICAgaWYgKGhvb2tzW2VudHJ5UG9pbnRdKSB7XG4gICAgICAgIGhvb2tzW2VudHJ5UG9pbnRdID0gW107XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZUFsbEhvb2tzXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYWxsIERPTVB1cmlmeSBob29rc1xuICAgICAqXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LnJlbW92ZUFsbEhvb2tzID0gZnVuY3Rpb24gKCkge1xuICAgICAgaG9va3MgPSB7fTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERPTVB1cmlmeTtcbiAgfVxuXG4gIHZhciBwdXJpZnkgPSBjcmVhdGVET01QdXJpZnkoKTtcblxuICByZXR1cm4gcHVyaWZ5O1xuXG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wdXJpZnkuanMubWFwXG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJJY29uc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJJY29uc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovICgoKSA9PiB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0XCJ1c2Ugc3RyaWN0XCI7XG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9zcmMvaWNvbnMuc2Nzc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9zcmMvaWNvbnMuc2NzcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovICgobW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG5cbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0ICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XG4vKiBoYXJtb255IGV4cG9ydCAqLyAgIFwiZGVmYXVsdFwiOiAoKSA9PiAoX19XRUJQQUNLX0RFRkFVTFRfRVhQT1JUX18pXG4vKiBoYXJtb255IGV4cG9ydCAqLyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9ydW50aW1lX2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmdfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfcnVudGltZV9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfcnVudGltZV9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X3J1bnRpbWVfYXBpX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9ydW50aW1lX2FwaV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X3J1bnRpbWVfYXBpX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X3J1bnRpbWVfZ2V0VXJsX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9ydW50aW1lX2dldFVybF9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X3J1bnRpbWVfZ2V0VXJsX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9pbWFnZXNfaWNvbnNfcG5nX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2ltYWdlcy9pY29ucy5wbmcgKi8gXCIuL3NyYy9pbWFnZXMvaWNvbnMucG5nXCIpO1xuLy8gSW1wb3J0c1xuXG5cblxuXG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9ydW50aW1lX2FwaV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQoKSgoX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfcnVudGltZV9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCgpKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X3J1bnRpbWVfZ2V0VXJsX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdCgpKF9pbWFnZXNfaWNvbnNfcG5nX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18uZGVmYXVsdCk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaWNvbnMtY2wge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLW5lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLXNlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLXN3IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLW53IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0yLW4tcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMi1lLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtbmUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1zZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLXN3IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtbncge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0yLW4tcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTItZS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMS1uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMS1uZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLXNlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtc3cge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMS1udyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTItbi1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMi1uZS1zdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93LTItZS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMi1zZS1udyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93c3RvcC0xLW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3N0b3AtMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3dzdG9wLTEtcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93c3RvcC0xLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1uZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1zZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1zdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1udyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMi1uLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTItbmUtc3cge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTItZS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0yLXNlLW53IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS1uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3dyZXR1cm50aGljay0xLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTY0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3JldHVybnRoaWNrLTEtZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC02NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZm9sZGVyLWNvbGxhcHNlZCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWZvbGRlci1vcGVuIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1kb2N1bWVudCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZG9jdW1lbnQtYiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbm90ZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbWFpbC1jbG9zZWQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLW1haWwtb3BlbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc3VpdGNhc2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jb21tZW50IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGVyc29uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcHJpbnQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmFzaCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWxvY2tlZCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXVubG9ja2VkIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYm9va21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10YWcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1ob21lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWZsYWcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYWxjdWxhdG9yIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FydCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBlbmNpbCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNsb2NrIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZGlzayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhbGVuZGFyIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXpvb21pbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC16b29tb3V0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXNlYXJjaCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC13cmVuY2gge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZ2VhciB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1oZWFydCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zdGFyIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWxpbmsge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBsdXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1wbHVzdGhpY2sge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1taW51cyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLW1pbnVzdGhpY2sge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1rZXkge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1saWdodGJ1bGIge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zY2lzc29ycyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jbGlwYm9hcmQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY29weSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jb250YWN0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWltYWdlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXZpZGVvIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXNjcmlwdCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jbG9zZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNsb3NldGhpY2sge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hbGVydCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1pbmZvIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbm90aWNlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtaGVscCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNoZWNrIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYnVsbGV0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcmFkaW8tb2ZmIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcmFkaW8tb24ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGluLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGluLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGxheSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1wYXVzZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXNlZWstbmV4dCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXNlZWstcHJldiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXNlZWstZW5kIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc2Vlay1maXJzdCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXN0b3Age1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1lamVjdCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC12b2x1bWUtb2ZmIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXZvbHVtZS1vbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTYwcHg7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9pY29ucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLHlEQUF1QztFQUN2QyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBO0VBUFo7SUFhSSx3QkFBd0IsRUFBQTtFQWI1QjtJQWlCSSw0QkFBNEIsRUFBQTtFQWpCaEM7SUFxQkksNEJBQWdDLEVBQUE7RUFyQnBDO0lBeUJJLDRCQUFnQyxFQUFBO0VBekJwQztJQTZCSSw0QkFBZ0MsRUFBQTtFQTdCcEM7SUFpQ0ksNEJBQWdDLEVBQUE7RUFqQ3BDO0lBcUNJLDRCQUFnQyxFQUFBO0VBckNwQztJQXlDSSw2QkFBZ0MsRUFBQTtFQXpDcEM7SUE2Q0ksNkJBQWdDLEVBQUE7RUE3Q3BDO0lBaURJLDZCQUFnQyxFQUFBO0VBakRwQztJQXdESSw4QkFBb0MsRUFBQTtFQXhEeEM7SUE0REksZ0NBQW9DLEVBQUE7RUE1RHhDO0lBZ0VJLGdDQUFvQyxFQUFBO0VBaEV4QztJQW9FSSxnQ0FBb0MsRUFBQTtFQXBFeEM7SUF5RUksZ0NBQW9DLEVBQUE7RUF6RXhDO0lBOEVJLGdDQUFvQyxFQUFBO0VBOUV4QztJQW1GSSxnQ0FBb0MsRUFBQTtFQW5GeEM7SUF3RkksaUNBQW9DLEVBQUE7RUF4RnhDO0lBNEZJLGlDQUFvQyxFQUFBO0VBNUZ4QztJQWdHSSxpQ0FBb0MsRUFBQTtFQWhHeEM7SUF1R0ksOEJBQW9DLEVBQUE7RUF2R3hDO0lBMkdJLGdDQUFvQyxFQUFBO0VBM0d4QztJQStHSSxnQ0FBb0MsRUFBQTtFQS9HeEM7SUFtSEks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a0NBQXNDLEVBQUE7RUE1UjVDO0lBNFJNLGtDQUFzQyxFQUFBO0VBNVI1QztJQTRSTSxrQ0FBc0MsRUFBQTtFQTVSNUM7SUE0Uk0sa0NBQXNDLEVBQUE7RUE1UjVDO0lBNFJNLGtDQUFzQyxFQUFBO0VBNVI1QztJQW1TSSxpQ0FBaUMsRUFBQTtFQW5TckM7SUF1U0ksaUNBQWlDLEVBQUE7RUF2U3JDO0lBaVRNLCtCQUF5QyxFQUFBO0VBalQvQztJQWlUTSxpQ0FBeUMsRUFBQTtFQWpUL0M7SUFpVE0saUNBQXlDLEVBQUE7RUFqVC9DO0lBaVRNLGlDQUF5QyxFQUFBO0VBalQvQztJQWlUTSxpQ0FBeUMsRUFBQTtFQWpUL0M7SUFpVE0saUNBQXlDLEVBQUE7RUFqVC9DO0lBaVRNLGlDQUF5QyxFQUFBO0VBalQvQztJQWlUTSxrQ0FBeUMsRUFBQTtFQWpUL0M7SUFpVE0sa0NBQXlDLEVBQUE7RUFqVC9DO0lBaVRNLGtDQUF5QyxFQUFBO0VBalQvQztJQTZUTSwrQkFBMEMsRUFBQTtFQTdUaEQ7SUE2VE0saUNBQTBDLEVBQUE7RUE3VGhEO0lBNlRNLGlDQUEwQyxFQUFBO0VBN1RoRDtJQTZUTSxpQ0FBMEMsRUFBQTtFQTdUaEQ7SUE2VE0saUNBQTBDLEVBQUE7RUE3VGhEO0lBNlRNLGlDQUEwQyxFQUFBO0VBN1RoRDtJQTZUTSxpQ0FBMEMsRUFBQTtFQTdUaEQ7SUE2VE0sa0NBQTBDLEVBQUE7RUE3VGhEO0lBNlRNLGtDQUEwQyxFQUFBO0VBN1RoRDtJQTZUTSxrQ0FBMEMsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaWNvbnMtY2wge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9pY29ucy5wbmcpO1xcclxcbiAgd2lkdGg6IDE2cHg7XFxyXFxuICBoZWlnaHQ6IDE2cHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHJcXG4gIC8vXFxyXFxuICAvLyBSb3cgMVxcclxcbiAgLy9cXHJcXG4gICYuaWNvbnMtY2wtY2FyZXQtMS1uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jYXJldC0xLW5lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtY2FyZXQtMS1lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMiAqIC0xNnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTEtc2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzICogLTE2cHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtY2FyZXQtMS1zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNCAqIC0xNnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTEtc3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1ICogLTE2cHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtY2FyZXQtMS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNiAqIC0xNnB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNhcmV0LTEtbncge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA3ICogLTE2cHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtY2FyZXQtMi1uLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA4ICogLTE2cHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtY2FyZXQtMi1lLXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5ICogLTE2cHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vXFxyXFxuICAvLyBSb3cgMlxcclxcbiAgLy9cXHJcXG4gICYuaWNvbnMtY2wtdHJpYW5nbGUtMS1uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAqIC0xNnB4IC0xNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC10cmlhbmdsZS0xLW5lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMSAqIC0xNnB4IC0xNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC10cmlhbmdsZS0xLWUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyICogLTE2cHggLTE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTEtc2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzICogLTE2cHggLTE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAmLmljb25zLWNsLXRyaWFuZ2xlLTEtcyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQgKiAtMTZweCAtMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtdHJpYW5nbGUtMS1zdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUgKiAtMTZweCAtMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtdHJpYW5nbGUtMS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNiAqIC0xNnB4IC0xNnB4O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgJi5pY29ucy1jbC10cmlhbmdsZS0xLW53IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNyAqIC0xNnB4IC0xNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC10cmlhbmdsZS0yLW4tcyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDggKiAtMTZweCAtMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtdHJpYW5nbGUtMi1lLXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5ICogLTE2cHggLTE2cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8vXFxyXFxuICAvLyBSb3cgM1xcclxcbiAgLy9cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMS1uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvdy0xLW5lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMSAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvdy0xLWUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTEtc2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93LTEtcyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMS1zdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNiAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvdy0xLW53IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNyAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvdy0yLW4tcyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDggKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMi1uZS1zdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDkgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3ctMi1lLXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMCAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvdy0yLXNlLW53IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTEgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3dzdG9wLTEtbiB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEyICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93c3RvcC0xLWUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMyAqIC0xNnB4IC0zMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3N0b3AtMS1zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTQgKiAtMTZweCAtMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3dzdG9wLTEtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE1ICogLTE2cHggLTMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvL1xcclxcbiAgLy8gUm93IDRcXHJcXG4gIC8vXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2stMS1uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTEtbmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2stMS1lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMiAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTEtc2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2stMS1zIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNCAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTEtc3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1ICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2stMS13IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNiAqIC0xNnB4IC00OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1hcnJvd3RoaWNrLTEtbncge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA3ICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2stMi1uLXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA4ICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2stMi1uZS1zdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDkgKiAtMTZweCAtNDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuaWNvbnMtY2wtYXJyb3d0aGljay0yLWUtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2stMi1zZS1udyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDExICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2tzdG9wLTEtbiB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEyICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2tzdG9wLTEtZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEzICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2tzdG9wLTEtcyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE0ICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93dGhpY2tzdG9wLTEtdyB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE1ICogLTE2cHggLTQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvL1xcclxcbiAgLy8gUm93IDVcXHJcXG4gICYuaWNvbnMtY2wtYXJyb3dyZXR1cm50aGljay0xLXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwICogLTE2cHggLTY0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWFycm93cmV0dXJudGhpY2stMS1lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMiAqIC0xNnB4IC02NHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gdWktaWNvbi1hcnJvd3JldHVybnRoaWNrLTEtbiAgdWktaWNvbi1hcnJvd3JldHVybnRoaWNrLTEtcyAgdWktaWNvbi1hcnJvd3JldHVybi0xLXcgIHVpLWljb24tYXJyb3dyZXR1cm4tMS1uICB1aS1pY29uLWFycm93cmV0dXJuLTEtZSAgdWktaWNvbi1hcnJvd3JldHVybi0xLXMgIHVpLWljb24tYXJyb3dyZWZyZXNoLTEtdyAgdWktaWNvbi1hcnJvd3JlZnJlc2gtMS1uICB1aS1pY29uLWFycm93cmVmcmVzaC0xLWUgIHVpLWljb24tYXJyb3dyZWZyZXNoLTEtc1xcclxcbiAgLy8gdWktaWNvbi1hcnJvdy00ICB1aS1pY29uLWFycm93LTQtZGlhZyAgdWktaWNvbi1leHRsaW5rICB1aS1pY29uLW5ld3dpbiAgdWktaWNvbi1yZWZyZXNoICB1aS1pY29uLXNodWZmbGUgIHVpLWljb24tdHJhbnNmZXItZS13ICB1aS1pY29uLXRyYW5zZmVydGhpY2stZS13XFxyXFxuXFxyXFxuICAvL1xcclxcbiAgLy8gUm93IDZcXHJcXG4gIC8vXFxyXFxuICAkbGlzdDogZm9sZGVyLWNvbGxhcHNlZCBmb2xkZXItb3BlbiBkb2N1bWVudCBkb2N1bWVudC1iIG5vdGUgbWFpbC1jbG9zZWQgbWFpbC1vcGVuIHN1aXRjYXNlIGNvbW1lbnQgcGVyc29uIHByaW50IHRyYXNoIGxvY2tlZCB1bmxvY2tlZCBib29rbWFyayB0YWc7XFxyXFxuICAkeDogMDtcXHJcXG5cXHJcXG4gIEBlYWNoICRpdGVtIGluICRsaXN0IHtcXHJcXG4gICAgJi5pY29ucy1jbC0jeyRpdGVtfSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHggKiAtMTZweCAtOTZweFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICR4OiAkeCsxO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy9cXHJcXG4gIC8vIFJvdyA3XFxyXFxuICAvL1xcclxcbiAgJGxpc3Q6IGhvbWUgZmxhZyBjYWxjdWxhdG9yIGNhcnQgcGVuY2lsIGNsb2NrIGRpc2sgY2FsZW5kYXIgem9vbWluIHpvb21vdXQgc2VhcmNoIHdyZW5jaCBnZWFyIGhlYXJ0IHN0YXIgbGluaztcXHJcXG4gICR4OiAwO1xcclxcblxcclxcbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xcclxcbiAgICAmLmljb25zLWNsLSN7JGl0ZW19IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkeCAqIC0xNnB4IC0xMTJweFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICR4OiAkeCsxO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy9cXHJcXG4gIC8vIFJvdyA4XFxyXFxuICAvL1xcclxcbiAgJGxpc3Q6IGNhbmNlbCAgcGx1cyAgcGx1c3RoaWNrICBtaW51cyAgbWludXN0aGljayAga2V5ICBsaWdodGJ1bGIgIHNjaXNzb3JzICBjbGlwYm9hcmQgIGNvcHkgIGNvbnRhY3QgIGltYWdlICB2aWRlbyAgc2NyaXB0O1xcclxcbiAgJHg6IDA7XFxyXFxuXFxyXFxuICBAZWFjaCAkaXRlbSBpbiAkbGlzdCB7XFxyXFxuICAgICYuaWNvbnMtY2wtI3skaXRlbX0ge1xcclxcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR4ICogLTE2cHggLTEyOHB4XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJHg6ICR4KzE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmljb25zLWNsLWNsb3NlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTEyOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pY29ucy1jbC1jbG9zZXRoaWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTEyOHB4O1xcclxcbiAgfVxcclxcbiAgLy8gdWktaWNvbi1jYW5jZWwgIHVpLWljb24tcGx1cyAgdWktaWNvbi1wbHVzdGhpY2sgIHVpLWljb24tbWludXMgIHVpLWljb24tbWludXN0aGljayAgdWktaWNvbi1rZXkgIHVpLWljb24tbGlnaHRidWxiICB1aS1pY29uLXNjaXNzb3JzICB1aS1pY29uLWNsaXBib2FyZCAgdWktaWNvbi1jb3B5ICB1aS1pY29uLWNvbnRhY3QgIHVpLWljb24taW1hZ2UgIHVpLWljb24tdmlkZW8gIHVpLWljb24tc2NyaXB0XFxyXFxuXFxyXFxuICAvLyBSb3cgOVxcclxcbiAgJGxpc3Q6IGFsZXJ0IGluZm8gIG5vdGljZSBoZWxwIGNoZWNrICBidWxsZXQgIHJhZGlvLW9mZiAgcmFkaW8tb24gIHBpbi13ICBwaW4tcztcXHJcXG4gICR4OiAwO1xcclxcblxcclxcbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xcclxcbiAgICAmLmljb25zLWNsLSN7JGl0ZW19IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkeCAqIC0xNnB4IDkgKiAtMTZweFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICR4OiAkeCsxO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gIFJvdyAxMFxcclxcbiAgJGxpc3Q6IHBsYXkgcGF1c2Ugc2Vlay1uZXh0ICBzZWVrLXByZXYgIHNlZWstZW5kICBzZWVrLWZpcnN0ICBzdG9wICBlamVjdCAgdm9sdW1lLW9mZiAgdm9sdW1lLW9uO1xcclxcbiAgJHg6IDA7XFxyXFxuXFxyXFxuICBAZWFjaCAkaXRlbSBpbiAkbGlzdCB7XFxyXFxuICAgICYuaWNvbnMtY2wtI3skaXRlbX0ge1xcclxcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR4ICogLTE2cHggMTAgKiAtMTZweFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICR4OiAkeCsxO1xcclxcbiAgfVxcclxcblxcclxcbiAvLyB1aS1pY29uLXBvd2VyICB1aS1pY29uLXNpZ25hbC1kaWFnICB1aS1pY29uLXNpZ25hbCAgdWktaWNvbi1iYXR0ZXJ5LTAgIHVpLWljb24tYmF0dGVyeS0xICB1aS1pY29uLWJhdHRlcnktMiAgdWktaWNvbi1iYXR0ZXJ5LTNcXHJcXG4gIC8vIHVpLWljb24tY2lyY2xlLXBsdXMgIHVpLWljb24tY2lyY2xlLW1pbnVzICB1aS1pY29uLWNpcmNsZS1jbG9zZSAgdWktaWNvbi1jaXJjbGUtdHJpYW5nbGUtZSAgdWktaWNvbi1jaXJjbGUtdHJpYW5nbGUtcyAgdWktaWNvbi1jaXJjbGUtdHJpYW5nbGUtdyAgdWktaWNvbi1jaXJjbGUtdHJpYW5nbGUtbiAgdWktaWNvbi1jaXJjbGUtYXJyb3ctZSAgdWktaWNvbi1jaXJjbGUtYXJyb3ctcyAgdWktaWNvbi1jaXJjbGUtYXJyb3ctdyAgdWktaWNvbi1jaXJjbGUtYXJyb3ctbiAgdWktaWNvbi1jaXJjbGUtem9vbWluICB1aS1pY29uLWNpcmNsZS16b29tb3V0ICB1aS1pY29uLWNpcmNsZS1jaGVja1xcclxcbi8vIHVpLWljb24tY2lyY2xlc21hbGwtcGx1cyAgdWktaWNvbi1jaXJjbGVzbWFsbC1taW51cyAgdWktaWNvbi1jaXJjbGVzbWFsbC1jbG9zZSAgdWktaWNvbi1zcXVhcmVzbWFsbC1wbHVzICB1aS1pY29uLXNxdWFyZXNtYWxsLW1pbnVzICB1aS1pY29uLXNxdWFyZXNtYWxsLWNsb3NlXFxyXFxuLy8gdWktaWNvbi1ncmlwLWRvdHRlZC12ZXJ0aWNhbCAgdWktaWNvbi1ncmlwLWRvdHRlZC1ob3Jpem9udGFsICB1aS1pY29uLWdyaXAtc29saWQtdmVydGljYWwgIHVpLWljb24tZ3JpcC1zb2xpZC1ob3Jpem9udGFsICB1aS1pY29uLWdyaXBzbWFsbC1kaWFnb25hbC1zZSAgdWktaWNvbi1ncmlwLWRpYWdvbmFsLXNlXFxyXFxuXFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBfX1dFQlBBQ0tfREVGQVVMVF9FWFBPUlRfXyA9IChfX19DU1NfTE9BREVSX0VYUE9SVF9fXyk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovICgobW9kdWxlKSA9PiB7XG5cblxuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKChtb2R1bGUpID0+IHtcblxuXG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKChtb2R1bGUpID0+IHtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9pY29ucy5zY3NzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaWNvbnMuc2NzcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKChtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pID0+IHtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIHtcbi8qIGhhcm1vbnkgZXhwb3J0ICovICAgXCJkZWZhdWx0XCI6ICgpID0+IChfX1dFQlBBQ0tfREVGQVVMVF9FWFBPUlRfXylcbi8qIGhhcm1vbnkgZXhwb3J0ICovIH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9ub2RlX21vZHVsZXNfc3R5bGVfbG9hZGVyX2Rpc3RfcnVudGltZV9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWdfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohICEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX25vZGVfbW9kdWxlc19zdHlsZV9sb2FkZXJfZGlzdF9ydW50aW1lX2luamVjdFN0eWxlc0ludG9TdHlsZVRhZ19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9ub2RlX21vZHVsZXNfc3R5bGVfbG9hZGVyX2Rpc3RfcnVudGltZV9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWdfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX25vZGVfbW9kdWxlc19yZXNvbHZlX3VybF9sb2FkZXJfaW5kZXhfanNfbm9kZV9tb2R1bGVzX3Nhc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX3J1bGVTZXRfMV9ydWxlc18xX3VzZV8zX2ljb25zX3Njc3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohICEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaWNvbnMuc2NzcyAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL3NyYy9pY29ucy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBfbm9kZV9tb2R1bGVzX3N0eWxlX2xvYWRlcl9kaXN0X3J1bnRpbWVfaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCgpKF9ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9kaXN0X2Nqc19qc19ub2RlX21vZHVsZXNfcmVzb2x2ZV91cmxfbG9hZGVyX2luZGV4X2pzX25vZGVfbW9kdWxlc19zYXNzX2xvYWRlcl9kaXN0X2Nqc19qc19ydWxlU2V0XzFfcnVsZXNfMV91c2VfM19pY29uc19zY3NzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18uZGVmYXVsdCwgb3B0aW9ucyk7XG5cblxuaWYgKHRydWUpIHtcbiAgaWYgKCFfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfbm9kZV9tb2R1bGVzX3Jlc29sdmVfdXJsX2xvYWRlcl9pbmRleF9qc19ub2RlX21vZHVsZXNfc2Fzc19sb2FkZXJfZGlzdF9janNfanNfcnVsZVNldF8xX3J1bGVzXzFfdXNlXzNfaWNvbnNfc2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fLmRlZmF1bHQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX25vZGVfbW9kdWxlc19yZXNvbHZlX3VybF9sb2FkZXJfaW5kZXhfanNfbm9kZV9tb2R1bGVzX3Nhc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX3J1bGVTZXRfMV9ydWxlc18xX3VzZV8zX2ljb25zX3Njc3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXy5kZWZhdWx0LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgLyohICEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaWNvbnMuc2NzcyAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL3NyYy9pY29ucy5zY3NzXCIsXG4gICAgICBfX1dFQlBBQ0tfT1VUREFURURfREVQRU5ERU5DSUVTX18gPT4geyAvKiBoYXJtb255IGltcG9ydCAqLyBfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfbm9kZV9tb2R1bGVzX3Jlc29sdmVfdXJsX2xvYWRlcl9pbmRleF9qc19ub2RlX21vZHVsZXNfc2Fzc19sb2FkZXJfZGlzdF9janNfanNfcnVsZVNldF8xX3J1bGVzXzFfdXNlXzNfaWNvbnNfc2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pY29ucy5zY3NzICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vc3JjL2ljb25zLnNjc3NcIik7XG4oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfbm9kZV9tb2R1bGVzX3Jlc29sdmVfdXJsX2xvYWRlcl9pbmRleF9qc19ub2RlX21vZHVsZXNfc2Fzc19sb2FkZXJfZGlzdF9janNfanNfcnVsZVNldF8xX3J1bGVzXzFfdXNlXzNfaWNvbnNfc2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fLmRlZmF1bHQubG9jYWxzLCB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfbm9kZV9tb2R1bGVzX3Jlc29sdmVfdXJsX2xvYWRlcl9pbmRleF9qc19ub2RlX21vZHVsZXNfc2Fzc19sb2FkZXJfZGlzdF9janNfanNfcnVsZVNldF8xX3J1bGVzXzFfdXNlXzNfaWNvbnNfc2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fLmRlZmF1bHQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfZGlzdF9janNfanNfbm9kZV9tb2R1bGVzX3Jlc29sdmVfdXJsX2xvYWRlcl9pbmRleF9qc19ub2RlX21vZHVsZXNfc2Fzc19sb2FkZXJfZGlzdF9janNfanNfcnVsZVNldF8xX3J1bGVzXzFfdXNlXzNfaWNvbnNfc2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fLmRlZmF1bHQpO1xuICAgICAgfSkoX19XRUJQQUNLX09VVERBVEVEX0RFUEVOREVOQ0lFU19fKTsgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gY29uc3QgX19XRUJQQUNLX0RFRkFVTFRfRVhQT1JUX18gPSAoX25vZGVfbW9kdWxlc19jc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX25vZGVfbW9kdWxlc19yZXNvbHZlX3VybF9sb2FkZXJfaW5kZXhfanNfbm9kZV9tb2R1bGVzX3Nhc3NfbG9hZGVyX2Rpc3RfY2pzX2pzX3J1bGVTZXRfMV9ydWxlc18xX3VzZV8zX2ljb25zX3Njc3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXy5kZWZhdWx0LmxvY2FscyB8fCB7fSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovICgobW9kdWxlLCBfX3VudXNlZF93ZWJwYWNrX2V4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pID0+IHtcblxuXG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9ICB0cnVlID8gX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA6IDA7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaW1hZ2VzL2ljb25zLnBuZ1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2ltYWdlcy9pY29ucy5wbmcgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovICgoX191bnVzZWRfd2VicGFja19tb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pID0+IHtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIHtcbi8qIGhhcm1vbnkgZXhwb3J0ICovICAgXCJkZWZhdWx0XCI6ICgpID0+IChfX1dFQlBBQ0tfREVGQVVMVF9FWFBPUlRfXylcbi8qIGhhcm1vbnkgZXhwb3J0ICovIH0pO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBfX1dFQlBBQ0tfREVGQVVMVF9FWFBPUlRfXyA9IChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBUUFBQUFEd0NBTUFBQURZU1VyNUFBQUJTMmxVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NEtQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlRV1J2WW1VZ1dFMVFJRU52Y21VZ05TNDJMV014TkRJZ056a3VNVFl3T1RJMExDQXlNREUzTHpBM0x6RXpMVEF4T2pBMk9qTTVJQ0FnSUNBZ0lDQWlQZ29nUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0S0lDQThjbVJtT2tSbGMyTnlhWEIwYVc5dUlISmtaanBoWW05MWREMGlJaTgrQ2lBOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ284UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrbmh4Zzd3QUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBQUJjMUpIUWdDdXpoenBBQUFCRGxCTVZFVUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQnhVWVc5QUFBQVdYUlNUbE1BTDJaS0NFQmdHUkF6VUJxL0ltT2VSWStVUDIyZ25DQXB6QTB4QVN3V1ZTZVp3eE54Z0NNMFI4K3ZhRWdLaFJ3NFUrOEVIa3QvSDFwQ2dveW9vdjBrQWxFRElUSnF0YmpmWW9jR2tXODhzcTE4dnNhcnlMeXFwWm1LQzdBQUFBN21TVVJCVkhqYTdWMEpZOXUyRHFaY3k1UWNKMjZ6clpuanJrMXpyRTNYMS9iMTJIMXZiKysrVC96L1AvSkl5UklCOExKaVIzWmlmczRGVVFmeENTUUJrRktFU0VoSTJBSklrRHV1UDJ3NUF5dFhUMEpZZjRrWjBEdjNTd2l6UU5DZ0JQRDZrSEpkS3ZFV0FGdkZ3QVhZOGRXZnZab0V0MENiQU1uclE4cjVIYlFJNElmYkY3QjJsajB5WU5YZnJVS2czR1pRQkEwSVFnMWlzYk1NN3JUZUJzNHQySzRpdjhHMmhRVHZzRzBCZ1FyMGJ3RnVVZ0szTUdqQnpoMnNQaUJrZ3YzM0Fac2VCWGdUNm44VVNJNVFRa0pDUWtKQ1FzTEdQTUVOKzBIU2l0YUFPKzh5b0JBQUQvQmxwM3lBbFJCU1orK1ZFa2NGTEFLc0hmanVORnlVMWdVNEFUSVlQUFlhREZuMWQ5YzRVT3pJcU1qQTRTS1NBb1NLQU9pdmdZTXpCZVN2c1Z3bUh5Q0RmTWJTQjVzUGh5VmNaejVBeHByZ3RvWER0MzBVU0VoSVNFaElTRWpZb0tlMXVqTy8wdmxoc3dyWW9VOVFvU3NFU3REdCtqYWhFRGtiaExmWTZyRmlzSGVoaDRPdnpIMkJZQVVjcGVIcnU4NFFJc2dxdDA0R01RSkpoWUR0QVk0VDJ2VUJyNExndWw3bytuYTREREVDSUJodmc0anc2em84c0F0VmNMRTNlQWtDWVowd3lKL2JpRU1tRkd4QVRndGhqRHNPRDV0by9BcGQxSXUyY2NjYUlnaVhSODdJYmdkRWIwamtBaERzOTBCRW1uRC9vOEExSHg4ZkpoTVNFaElTRWhKMkZhc3ZTMTNSelpDTzFlaitVN3I4ME9oVVZlVHkzU3F3MUFYQzhUd3NVUUZVTHZEazFCSmVuZDRaQXFHTGEzby9saUlJWHQ4UjMzSUZJdW1IUUVhaW5sZzBGTm0xZFN4MmwwRUNJbXZEM1dZV1lpRElud1NJbVpjcklRUThIQVljelFZc3lBcUhIZEc0OWNpR1dLSUM3bEozZEF3UWlPZkJZUVArd3kwQ3JCclkxYVBsdkluRkNYQlh3SHNMbHlvR0NNYlA0UzVDdUdib2d4WkVtZ0JySXRFbTRHN2wwcnVIdEplODJBb0Uyb2pEd0ZnVEY5WU1mWVFBR2NrSHlIQWZBTzUrTlhTUHdzWGhzY1RSaHVQakxzRFN3eHhzZlQ1QVFsb2hrWkNRa0pDUUlEcEVvR3NkaHNNRE16Z2o2TFhxQjUwbThOZDhkZWw2MmgxSGY4NGpKSVE5eHk0WkZEWlhCUTZGSVZTK092MnU1K2VCNkJKNk9oeGl0OVExRzI3eEIvUllDUEt6VmdiQVprRHc5eHVJd1BzQlhQa01PbDh0bHBoK0ZjQ09CZC9oYXllZ0NUZDlCRWlJaE0vTzZldGd1V3QyR3J3VzRkd1oxa2lCZE5UUWZpSUUvSGM4TnQ5c0owUkVyQSt3Q09CTll1M2huZW5VZERMQmlzN284LzJPY244VGQ1aEU4QkdpSlRyRjZ4Z1lhVVpIaHZJQjhlZzF0Z2dvbG44STU0K1NuNU9Ra0pDUWtMQlZLRzc0UU9ad095QTBYY1c5NGF2b3YwMVRBYzVwRnVwOUZkSFpRQ2hFUjI5UGJxc0Z0UEdXb2FlQUFnVkROTDRyb0xZQXdBU0dIem1BclpxdEF2ZnliVnl1OUNmUkdkQUF2bTRETk53VGJEb2MwT3ZpdG9zQWdFaDF0REtGSTlZREs1UGhqUTN4TnRrMk1YbHpMTURhbjY3WXFBbnlXQUJmcjlEUXZWWHpvZUUrSUhSN20raThNRmJDK3dCd1d0eDJqWUxCVWNEWjVkTUJBb0xMeElJdnA3Z2hma0QwQk1YeSs4cGJHUDEzMFQ4aElTRWhZYmRRYWoraFhINy9OME9GTjMzVmJxd3FOeG1IOXZneTRybkI0OXBWS2tQNjQrSXl6TWNia1FGazRnMDdBVHBpWDRuN3dpUHpRdkZvQVhaQW94S2M1L2tZT1h2VjMyUEwxUjM0bjZZZUxUUWNFWDNiR25QWm10bmFYNVEzdFI1bU1CeENObVJ1R3Zpak4zdnFranAyQTljVjJ5QXR6L09pQmlOa1FnaEFESUEyMFNGd0N4aTFudlNlUXV0S1EyTUJ2dm51K25UbWhFTVlucDM5REppQTJXd1dmZ0pEQURnRkp3SDdoRURRcXFNTmloQ0pDYWtyU0FrLzF2QlpBSXdCL2RJWFh2UUJnQ3BJYW54Y0hYNXNDRGo3YWY4dmhJQ0hEeDlheStQOU10dkFDZEQ2ZjRFSm9DWUZTbit3S1NwUTJnOGVhbmd0WUUrckR1TTlrd2NvSy90dkNkRG5SeW0yK25UbWhLb0pQSCtPbThCTXFGdWdmcllIbE5YbmlnUm8vUis5KzhKUGdHUWIxQllwOXlRS1llRG82TWpmQjhDZVlrRHBqd21vdmxvQ3FrNFFFZkJXSC8zMmJiUGhyTzRFejd4dDNrR0FzSitub0FSOGp2TVRnOUVqOVRQM0VXQTlvdkp4QlhUQms1TVRNQ1pxV1VDNU54NnJINllKVkxLZmdKTWFpdzB5ZzUreWJBNlpKQVNVcUJmOGRmWEIrZzQ1QVVOR0FCQUxHQmo5QXdTMHAvdW9Bak81NGRCbkFlVmVoUkk4TXVnK2RneWtUV1paT3dwa3pmVXpyd1hZQk1TYUFDNnYrOEJjV0FTVTlIck1ENEF2WTM3QWtzTmdYWjhCemNHVVp1Z0dXK0ZJcHpmQ2w3YzNjQUlxQnZKMU9ucmxxRUo1OVZNdzEyV3BQTzRLTmQ1ZnEvNEpDUWtKQ1Z1T0Z5L0M1UVVFODlyMWYzNktaajNhWWZCSk5Vdzl3UmtISEdNUEZ2S0FoV2Y3Uzh0Qy9JSFZKdytPYXlyYU9tYWIxTENOOVM5THc4QkVlNUVYMlJnRk82cktnOGRnL0d4UDFnUHBMeEFENm1BTk50TkVQWnRNdTRKTHkvWDlhRFhJdFROWHRHTjdvYmtkNEh0NkNuREs5TmVPMHBIUlgvdm1iZlFyM1k0WUN1ZmhOK3B6aml0VXF2dGNvdjNKM0tEMStQdS94YVg0SjQ1dk15VmtSQlpVUGg0ZUkxblhmelR5VlJBV3pqNVFnME1XcHlvN0tvenJXR2NzMnVqS0pvQ0Z3eUJldmIzNzh0M2JNYjcvWTFHS1pRbjREL3hXZmY2QkZkU3VQNU54OEtGaTQySEdmVjlBTFJpdlVHSFhlOUdJcUIrWXdQbEljVkFMajV1TXpXTWZBWXRlQUZuQU9md2RYZ0RXSDZYczRoYndML0dMK0o5SktaMHdDemhoRm5EQ0xHQkVZZy9WQXVwT3FvMXYyZlcrcXFXdjJncFd3VHlPSFVEM0FXaTFmSlNBVjI4Ly8xaDkzUG92UEhWTVFBRlYxcW1SL3d0ZnE4L2YwSW9KMHNZcitXY21vL0txL1NwODdDR2dpZTRLMmtTby9RUjZlUmlPeFJHSkZ4a0JKV09ZNmQrdWlLQUVJUG16WHg1T0h2NzF3NFc4QnpRcEdwTkg5TzdaVFdBaFkvSDAxTWphOXR0OHA1TUFheFJVNXlnQ1M5cDVrdnZKb3NKUE1BSFdlZ09UY0ZMTm5aMHVMQXVtdngzQUYyVE4ydDF2VmZjMytQWnVTNEJxLzBYZ2VFdlJnZFdKc2tkOGVKS2YrUUU4N2MxazF4dGdRdktJNjgrSFFWRXY2akxGMVl6QW8xejRMSWdodTRtdVh0NGh3Q2MrVUVKQ1FrTENCakRHaVdudHlzR0p0YzhENnFsY0l6SThEZUh6ZGE1KytnS202dWNVRDgwWGVHcmlDL2poaCsrK2d3OVJkYzYxL2hYVUgvTjM4T29WdkpzVFQ3UVVQTjNRNUJ0YW1XOFlNOGNINlQ4WmoxOFRCanE5N3Q4ZWFOVzVNaFJ0Z21KZ3lyM3hJK041L1Vyamo4WVZuWTdWQ1VaV2NFT2lVOGM2VkRxWGEvWlJybU9wZ2gwek9WZ1htT0JLTzhaVGVBMXJJMEM3V3VnSXJYdjFUUTNBRVBEOWp3OGUvUGk5cWM5WVFEN0NNenVjQUxKa0JLcGtGRnJ3VUlnNlZWRVlYN3ZVK1JoRXdFczlWNGN2T05Xcyt3aUlyS2UzcDdJeW9HMXFXc2xUSHJ5MEZhcHNmYjg5L0o1ZW5JSGNWUml5QlJuMCtHb2VGTzBBT3ZCVThaekFGakFZNFBYcTJYeXV3MHREZ05KZmpQMFpJRWZHeFJYdVV4UEg3dWFVNlYrUzZjbXZZVjhCN2lHL2xod1B4MkVDenRTZlovcXJLYjZvSmwrUGtBV3c2UFhseTcyWGM3aG9UL2hhMTI2eVBnSzRCWHhUeWFkVWY2TmdOcTF3UkE4M2hLbGJlbng4VEFnZ2JmNUk0VFAxeFJZOFRMMTl3SHl1R3dEdUJGK1B4NU0xZG9Lc0QvaG0wUWVjbWd4Y1RzTFJ1YTd2a1RsOGVnNFhpQUY5b2pQVTdUWEptMGEvano1YWZERUQ4ZllCNDNJK244TWNBc1BndWtlQlU1MllOZlhob2R0ME1QZ0tYU3hYWDRWaEFLd3dYZis1MzJ6Z3cyQmxFUlU4ZlFDTU5UQUI3cG1BTmZvQnAxVnF1dkNrRC9nalpzcGFYaGU2cDN6UWxQNytsYVN2ZFJGVnI3R1FocVZPNlpWRGNWVS9ZUE00T3p3OHd4WjBycmtxSGhTZWhJKzljakloSVNGaHRlZ1VyNDYrODRIdVlqNjRzMFA2UHdONDFncnZONzN1K3p1ai8zT3Q3dlBtL2tNejB3VEdCbVl3d3dmOHpyWFFibjByejJZVi83TStEVUE1bW8wSjNEY0UzUGM1UWk0L0lqZVVXRk1QZkFPWFlhYkg5Rm53L05kckFQcWF6M2xzRTNyZGQ4RTM1TVlvSWdzM3RmeDArSlRPemdZZWdPaWxCOUFoOUROeWNWcUhBWjRZcS9XZkVOdlA4ZXBqZStudXFCaGgvWjZxSDAvSkRyTU5FcEEzOXp2M0U1Q3pKZzl3V2VDeW5Nd20yd1FVeEdTcWhlWkRFazRUQWtxWXpXYjllYnBHWVQ4QjlqRUZzWDNTS2E1c0FmMTJncFVCMUEvTlZEb2NHZ0lPdlJaZ1cxRHViL0tkKzRCK296WGU2ZDAxNGwxdkowakVuQStLSzQ4Q3ZiNWZiMllVcm10dzBJZ0hJdEFIZUViQXRkMldUZnBGNyttMExOeDdiNU4xU0c5WVRFaElTRWpZSWVRUUVxOTkwSjNrd3ZKenJ0VVZmZnpZY3FjRFloL2VNS1dBRUZDVkZYaUhmRkxvSDBENWExOHdVSWZPcHR5T3JITG1PK2RXTVZRelpIM0dnNFFDU2tCZDF0YTV1ajFLUGI0RElRQ1gyd1M0bnZTMVJlaVhBTHdZbUJOUXBUOFdsYXgrVGF6NThRa2hZQkxNOFBnMEppTDBUVUNQRnJBVUFUMWJRTDk5Z0N1bHNORStvT2RSd001M2JIZ1UySGsvSUNFaElTRmh0d0U3L1J4VjhXY0JuMzVXRUVmbFlvZmVrNnVmSTRWUGMvUThRNWJmY3p4QTBmZ20vUDBIWGVXdHd4VCtwQWdRYUhXeVptVmlNV0M5VEw2OG1yeDlCbkFweEtlNXVNUlBXMCtQVkVSTG42ODFpZ3lQaCtxclhiNE54M1E5dTVhQnlrUDlHVzZwZTFzdTFzMWZtRHVValVDdnRqLzNFRkM5R2szdXlmWnRleUNsM3RESWUvcGozcitueTlVV3VRZGJiQUVLbC9pTzYzNWhDbFQ5bG9BUGE3UW0zbEhlT2t5cU1YQ0UxcnlvWUhRTVIyTVBBYmV1RTh3QUxpOHVjYmRmcHlOeW9PcmYzZ2cxZTZidXo3Tk1KQ1FrSkNUc0l2anpBVEdaTDZMcUtuZTkzcXB5RFB6NWdKak1sOUYxbGJ0ZWIxVTVldi9OT3NFN3k4aDhJV1ZYdWV2MVZwV2o0TThIM0RjbmFPUUQ3UnNlTE9URDlsMXA5VkxhUTdNL2tvVzMvTDRwdisrOXZvQmcrYXpPMnVCeXdlc3Y4UE1Pd1d3WVd4ek5sODVXdnc0TzhPeHdiSCs3M05yZlRKRzd5dkhzbWZzM2tQcUlUejc1Uk5ENlZFOGtMMHNBK2NNaDY5Wjd3Q29zSUxDL3NCUUs3ODhJaU5ZSHZ6N2VKYzlyL2RkSHdBaTlnODVCZ090M0Y0V2kxM2RZU01nQzlOdEc1dENCZ0hnVDBHL2Y2bUxpc1NZQ01RS0RUVXE0TEFydlA2LzFYNDRBL255QW8xTnJPc0ZEYnljRlhQWjNxczVPa2wrZmQ3SzB2T0hISitzMlFKOTNDS0h2WVd6VlliU3JIRWZmanN5cWpsUlhPWTYrWGRsVlhlbXVja0pDUWtKQ1FrSXNIQUM0Tm5uN0NhQnZhNHZMdDVBQUNCTlFmVWdFSFNaQWdMaFpCRlQvbmkwZ000SkFrTVhVdGd3aVdVRHFBMjRTQWJzK0NpUWtKQ1FrSkNTc0cvTG1lQUxSVlpCUWRsL29LdG4vQjlycWV5WGt5Z1R3KzMyVDlGK0hCWEI5YjVUKzFBS3E1ZTNWeDBPQTYvOE42UDI1L3JlMkR5Z2JVUDJscGIvY0dRdW85Nys1K3E5cUFUZGUvMVZIQVkvK3Urb0hHUDF2a1IvUWlVMXB2aE1TdGh6L0IvaDFPV2l5TXBzd0FBQUFBRWxGVGtTdVFtQ0NcIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2ljb25zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2ljb25zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKChfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykgPT4ge1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2ljb25zX3Njc3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaWNvbnMuc2NzcyAqLyBcIi4vc3JjL2ljb25zLnNjc3NcIik7XG5cclxuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0dmFyIGV4ZWNPcHRpb25zID0geyBpZDogbW9kdWxlSWQsIG1vZHVsZTogbW9kdWxlLCBmYWN0b3J5OiBfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSwgcmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uaS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHsgaGFuZGxlcihleGVjT3B0aW9ucyk7IH0pO1xuLyoqKioqKi8gXHRcdG1vZHVsZSA9IGV4ZWNPcHRpb25zLm1vZHVsZTtcbi8qKioqKiovIFx0XHRleGVjT3B0aW9ucy5mYWN0b3J5LmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGV4ZWNPcHRpb25zLnJlcXVpcmUpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGV4ZWN1dGlvbiBpbnRlcmNlcHRvclxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBbXTtcbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuLyoqKioqKi8gXHRcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuLyoqKioqKi8gXHRcdFx0XHQoKSA9PiAobW9kdWxlKTtcbi8qKioqKiovIFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG4vKioqKioqLyBcdFx0XHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IHVwZGF0ZSBjaHVuayBmaWxlbmFtZSAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdC8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmh1ID0gKGNodW5rSWQpID0+IHtcbi8qKioqKiovIFx0XHRcdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNcIjtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2dldCB1cGRhdGUgbWFuaWZlc3QgZmlsZW5hbWUgKi9cbi8qKioqKiovIFx0KCgpID0+IHtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYgPSAoKSA9PiAoXCJJY29ucy5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc29uXCIpO1xuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTBhYzEyMzVlZDUzY2ZjMWYyNjhcIilcbi8qKioqKiovIFx0fSkoKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQgKi9cbi8qKioqKiovIFx0KCgpID0+IHtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpXG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQgKi9cbi8qKioqKiovIFx0KCgpID0+IHtcbi8qKioqKiovIFx0XHR2YXIgaW5Qcm9ncmVzcyA9IHt9O1xuLyoqKioqKi8gXHRcdHZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwiSWNvbnM6XCI7XG4vKioqKioqLyBcdFx0Ly8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG4vKioqKioqLyBcdFx0XHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuLyoqKioqKi8gXHRcdFx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcbi8qKioqKiovIFx0XHRcdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG4vKioqKioqLyBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRpZighc2NyaXB0KSB7XG4vKioqKioqLyBcdFx0XHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuLyoqKioqKi8gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbi8qKioqKiovIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG4vKioqKioqLyBcdFx0XHRcdHNjcmlwdC5zcmMgPSB1cmw7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG4vKioqKioqLyBcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuLyoqKioqKi8gXHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4vKioqKioqLyBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4vKioqKioqLyBcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbi8qKioqKiovIFx0XHRcdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG4vKioqKioqLyBcdFx0XHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG4vKioqKioqLyBcdFx0XHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4vKioqKioqLyBcdFx0XHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuLyoqKioqKi8gXHRcdFx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHQ7XG4vKioqKioqLyBcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuLyoqKioqKi8gXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuLyoqKioqKi8gXHRcdFx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcbi8qKioqKiovIFx0XHRcdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0ICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG4vKioqKioqLyBcdFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvaG90IG1vZHVsZSByZXBsYWNlbWVudCAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdHZhciBjdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xuLyoqKioqKi8gXHRcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdC8vIG1vZHVsZSBhbmQgcmVxdWlyZSBjcmVhdGlvblxuLyoqKioqKi8gXHRcdHZhciBjdXJyZW50Q2hpbGRNb2R1bGU7XG4vKioqKioqLyBcdFx0dmFyIGN1cnJlbnRQYXJlbnRzID0gW107XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0Ly8gc3RhdHVzXG4vKioqKioqLyBcdFx0dmFyIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycyA9IFtdO1xuLyoqKioqKi8gXHRcdHZhciBjdXJyZW50U3RhdHVzID0gXCJpZGxlXCI7XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbi8qKioqKiovIFx0XHR2YXIgYmxvY2tpbmdQcm9taXNlcztcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHQvLyBUaGUgdXBkYXRlIGluZm9cbi8qKioqKiovIFx0XHR2YXIgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnM7XG4vKioqKioqLyBcdFx0dmFyIHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcztcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckQgPSBjdXJyZW50TW9kdWxlRGF0YTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkucHVzaChmdW5jdGlvbiAob3B0aW9ucykge1xuLyoqKioqKi8gXHRcdFx0dmFyIG1vZHVsZSA9IG9wdGlvbnMubW9kdWxlO1xuLyoqKioqKi8gXHRcdFx0dmFyIHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKG9wdGlvbnMucmVxdWlyZSwgb3B0aW9ucy5pZCk7XG4vKioqKioqLyBcdFx0XHRtb2R1bGUuaG90ID0gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG9wdGlvbnMuaWQsIG1vZHVsZSk7XG4vKioqKioqLyBcdFx0XHRtb2R1bGUucGFyZW50cyA9IGN1cnJlbnRQYXJlbnRzO1xuLyoqKioqKi8gXHRcdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XG4vKioqKioqLyBcdFx0XHRjdXJyZW50UGFyZW50cyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0b3B0aW9ucy5yZXF1aXJlID0gcmVxdWlyZTtcbi8qKioqKiovIFx0XHR9KTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMgPSB7fTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkgPSB7fTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRmdW5jdGlvbiBjcmVhdGVSZXF1aXJlKHJlcXVpcmUsIG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdGlmICghbWUpIHJldHVybiByZXF1aXJlO1xuLyoqKioqKi8gXHRcdFx0dmFyIGZuID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcbi8qKioqKiovIFx0XHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dmFyIHBhcmVudHMgPSBpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHM7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAocGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0cGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0fSBlbHNlIHtcbi8qKioqKiovIFx0XHRcdFx0XHRjb25zb2xlLndhcm4oXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuLyoqKioqKi8gXHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0Y3VycmVudFBhcmVudHMgPSBbXTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gcmVxdWlyZShyZXF1ZXN0KTtcbi8qKioqKiovIFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHR2YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG5hbWUpIHtcbi8qKioqKiovIFx0XHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJldHVybiByZXF1aXJlW25hbWVdO1xuLyoqKioqKi8gXHRcdFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJlcXVpcmVbbmFtZV0gPSB2YWx1ZTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHR9O1xuLyoqKioqKi8gXHRcdFx0Zm9yICh2YXIgbmFtZSBpbiByZXF1aXJlKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVxdWlyZSwgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcihuYW1lKSk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdGZuLmUgPSBmdW5jdGlvbiAoY2h1bmtJZCkge1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gdHJhY2tCbG9ja2luZ1Byb21pc2UocmVxdWlyZS5lKGNodW5rSWQpKTtcbi8qKioqKiovIFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gZm47XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdGZ1bmN0aW9uIGNyZWF0ZU1vZHVsZUhvdE9iamVjdChtb2R1bGVJZCwgbWUpIHtcbi8qKioqKiovIFx0XHRcdHZhciBob3QgPSB7XG4vKioqKioqLyBcdFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbi8qKioqKiovIFx0XHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbi8qKioqKiovIFx0XHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbi8qKioqKiovIFx0XHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4vKioqKioqLyBcdFx0XHRcdF9tYWluOiBjdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRfcmVxdWlyZVNlbGY6IGZ1bmN0aW9uICgpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRjdXJyZW50UGFyZW50cyA9IG1lLnBhcmVudHMuc2xpY2UoKTtcbi8qKioqKiovIFx0XHRcdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSBtb2R1bGVJZDtcbi8qKioqKiovIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbi8qKioqKiovIFx0XHRcdFx0fSxcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0Ly8gTW9kdWxlIEFQSVxuLyoqKioqKi8gXHRcdFx0XHRhY3RpdmU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGFjY2VwdDogZnVuY3Rpb24gKGRlcCwgY2FsbGJhY2spIHtcbi8qKioqKiovIFx0XHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuLyoqKioqKi8gXHRcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuLyoqKioqKi8gXHRcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG4vKioqKioqLyBcdFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uIChkZXApIHtcbi8qKioqKiovIFx0XHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcbi8qKioqKiovIFx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4vKioqKioqLyBcdFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbi8qKioqKiovIFx0XHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbi8qKioqKiovIFx0XHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuLyoqKioqKi8gXHRcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbi8qKioqKiovIFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuLyoqKioqKi8gXHRcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0dGhpcy5fc2VsZkludmFsaWRhdGVkID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHNldFN0YXR1cyhcInJlYWR5XCIpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRicmVhaztcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRicmVhaztcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0KHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRicmVhaztcbi8qKioqKiovIFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0YnJlYWs7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuLyoqKioqKi8gXHRcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4vKioqKioqLyBcdFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbi8qKioqKiovIFx0XHRcdFx0c3RhdHVzOiBmdW5jdGlvbiAobCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmICghbCkgcmV0dXJuIGN1cnJlbnRTdGF0dXM7XG4vKioqKioqLyBcdFx0XHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4vKioqKioqLyBcdFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4vKioqKioqLyBcdFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIGlkeCA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChpZHggPj0gMCkgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuLyoqKioqKi8gXHRcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcbi8qKioqKiovIFx0XHRcdFx0ZGF0YTogY3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4vKioqKioqLyBcdFx0XHR9O1xuLyoqKioqKi8gXHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGhvdDtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0ZnVuY3Rpb24gc2V0U3RhdHVzKG5ld1N0YXR1cykge1xuLyoqKioqKi8gXHRcdFx0Y3VycmVudFN0YXR1cyA9IG5ld1N0YXR1cztcbi8qKioqKiovIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuLyoqKioqKi8gXHRcdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRmdW5jdGlvbiB0cmFja0Jsb2NraW5nUHJvbWlzZShwcm9taXNlKSB7XG4vKioqKioqLyBcdFx0XHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcbi8qKioqKiovIFx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG4vKioqKioqLyBcdFx0XHRcdFx0c2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbi8qKioqKiovIFx0XHRcdFx0XHRibG9ja2luZ1Byb21pc2VzLnB1c2gocHJvbWlzZSk7XG4vKioqKioqLyBcdFx0XHRcdFx0d2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZnVuY3Rpb24gKCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG4vKioqKioqLyBcdFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIHByb21pc2U7XG4vKioqKioqLyBcdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0YmxvY2tpbmdQcm9taXNlcy5wdXNoKHByb21pc2UpO1xuLyoqKioqKi8gXHRcdFx0XHRcdHJldHVybiBwcm9taXNlO1xuLyoqKioqKi8gXHRcdFx0XHRkZWZhdWx0OlxuLyoqKioqKi8gXHRcdFx0XHRcdHJldHVybiBwcm9taXNlO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRmdW5jdGlvbiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmbikge1xuLyoqKioqKi8gXHRcdFx0aWYgKGJsb2NraW5nUHJvbWlzZXMubGVuZ3RoID09PSAwKSByZXR1cm4gZm4oKTtcbi8qKioqKiovIFx0XHRcdHZhciBibG9ja2VyID0gYmxvY2tpbmdQcm9taXNlcztcbi8qKioqKiovIFx0XHRcdGJsb2NraW5nUHJvbWlzZXMgPSBbXTtcbi8qKioqKiovIFx0XHRcdHJldHVybiBQcm9taXNlLmFsbChibG9ja2VyKS50aGVuKGZ1bmN0aW9uICgpIHtcbi8qKioqKiovIFx0XHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKTtcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRmdW5jdGlvbiBob3RDaGVjayhhcHBseU9uVXBkYXRlKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbi8qKioqKiovIFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRzZXRTdGF0dXMoXCJjaGVja1wiKTtcbi8qKioqKiovIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0oKS50aGVuKGZ1bmN0aW9uICh1cGRhdGUpIHtcbi8qKioqKiovIFx0XHRcdFx0aWYgKCF1cGRhdGUpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRzZXRTdGF0dXMoYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKTtcbi8qKioqKiovIFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHRzZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHR2YXIgdXBkYXRlZE1vZHVsZXMgPSBbXTtcbi8qKioqKiovIFx0XHRcdFx0YmxvY2tpbmdQcm9taXNlcyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoXG4vKioqKioqLyBcdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDKS5yZWR1Y2UoZnVuY3Rpb24gKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0cHJvbWlzZXMsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRrZXlcbi8qKioqKiovIFx0XHRcdFx0XHQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yQ1trZXldKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR1cGRhdGUuYyxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0dXBkYXRlLnIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHVwZGF0ZS5tLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRwcm9taXNlcyxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHVwZGF0ZWRNb2R1bGVzXG4vKioqKioqLyBcdFx0XHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0cmV0dXJuIHByb21pc2VzO1xuLyoqKioqKi8gXHRcdFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRcdFx0W10pXG4vKioqKioqLyBcdFx0XHRcdCkudGhlbihmdW5jdGlvbiAoKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChhcHBseU9uVXBkYXRlKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KGFwcGx5T25VcGRhdGUpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0fSBlbHNlIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHJldHVybiB1cGRhdGVkTW9kdWxlcztcbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuLyoqKioqKi8gXHRcdFx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwicmVhZHlcIikge1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuLyoqKioqKi8gXHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRmdW5jdGlvbiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpIHtcbi8qKioqKiovIFx0XHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0YXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4vKioqKioqLyBcdFx0XHRcdHJldHVybiBoYW5kbGVyKG9wdGlvbnMpO1xuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdHZhciBlcnJvcnMgPSByZXN1bHRzXG4vKioqKioqLyBcdFx0XHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRyZXR1cm4gci5lcnJvcjtcbi8qKioqKiovIFx0XHRcdFx0fSlcbi8qKioqKiovIFx0XHRcdFx0LmZpbHRlcihCb29sZWFuKTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuLyoqKioqKi8gXHRcdFx0XHRzZXRTdGF0dXMoXCJhYm9ydFwiKTtcbi8qKioqKiovIFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdHRocm93IGVycm9yc1swXTtcbi8qKioqKiovIFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcbi8qKioqKiovIFx0XHRcdHNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAocmVzdWx0LmRpc3Bvc2UpIHJlc3VsdC5kaXNwb3NlKCk7XG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2Vcbi8qKioqKiovIFx0XHRcdHNldFN0YXR1cyhcImFwcGx5XCIpO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0dmFyIGVycm9yO1xuLyoqKioqKi8gXHRcdFx0dmFyIHJlcG9ydEVycm9yID0gZnVuY3Rpb24gKGVycikge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbi8qKioqKiovIFx0XHRcdH07XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4vKioqKioqLyBcdFx0XHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAocmVzdWx0LmFwcGx5KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIG1vZHVsZXMgPSByZXN1bHQuYXBwbHkocmVwb3J0RXJyb3IpO1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChtb2R1bGVzKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gobW9kdWxlc1tpXSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4vKioqKioqLyBcdFx0XHRpZiAoZXJyb3IpIHtcbi8qKioqKiovIFx0XHRcdFx0c2V0U3RhdHVzKFwiZmFpbFwiKTtcbi8qKioqKiovIFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdHRocm93IGVycm9yO1xuLyoqKioqKi8gXHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcbi8qKioqKiovIFx0XHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKGxpc3QuaW5kZXhPZihtb2R1bGVJZCkgPCAwKSBsaXN0LnB1c2gobW9kdWxlSWQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0XHRcdHJldHVybiBsaXN0O1xuLyoqKioqKi8gXHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdHNldFN0YXR1cyhcImlkbGVcIik7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdGZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuLyoqKioqKi8gXHRcdFx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoIWN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzKSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHVuZGVmaW5lZDtcbi8qKioqKiovIFx0XHRcdFx0cmV0dXJuIHRydWU7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGggKi9cbi8qKioqKiovIFx0KCgpID0+IHtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmcgKi9cbi8qKioqKiovIFx0KCgpID0+IHtcbi8qKioqKiovIFx0XHQvLyBubyBiYXNlVVJJXG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8qKioqKiovIFx0XHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8qKioqKiovIFx0XHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuLyoqKioqKi8gXHRcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4vKioqKioqLyBcdFx0XHRcIkljb25zXCI6IDBcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdC8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0Ly8gbm8gcHJlZmV0Y2hpbmdcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHQvLyBubyBwcmVsb2FkZWRcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHR2YXIgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdDtcbi8qKioqKiovIFx0XHR2YXIgd2FpdGluZ1VwZGF0ZVJlc29sdmVzID0ge307XG4vKioqKioqLyBcdFx0ZnVuY3Rpb24gbG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4vKioqKioqLyBcdFx0XHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHJlc29sdmU7XG4vKioqKioqLyBcdFx0XHRcdC8vIHN0YXJ0IHVwZGF0ZSBjaHVuayBsb2FkaW5nXG4vKioqKioqLyBcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmh1KGNodW5rSWQpO1xuLyoqKioqKi8gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4vKioqKioqLyBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG4vKioqKioqLyBcdFx0XHRcdFx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWRcbi8qKioqKiovIFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGhvdCB1cGRhdGUgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkKTtcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRzZWxmW1wid2VicGFja0hvdFVwZGF0ZUljb25zXCJdID0gKGNodW5rSWQsIG1vcmVNb2R1bGVzLCBydW50aW1lKSA9PiB7XG4vKioqKioqLyBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0aWYoY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCkgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdC5wdXNoKG1vZHVsZUlkKTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0aWYocnVudGltZSkgY3VycmVudFVwZGF0ZVJ1bnRpbWUucHVzaChydW50aW1lKTtcbi8qKioqKiovIFx0XHRcdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuLyoqKioqKi8gXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0oKTtcbi8qKioqKiovIFx0XHRcdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0dmFyIGN1cnJlbnRVcGRhdGVDaHVua3M7XG4vKioqKioqLyBcdFx0dmFyIGN1cnJlbnRVcGRhdGU7XG4vKioqKioqLyBcdFx0dmFyIGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzO1xuLyoqKioqKi8gXHRcdHZhciBjdXJyZW50VXBkYXRlUnVudGltZTtcbi8qKioqKiovIFx0XHRmdW5jdGlvbiBhcHBseUhhbmRsZXIob3B0aW9ucykge1xuLyoqKioqKi8gXHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikgZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtcjtcbi8qKioqKiovIFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB1bmRlZmluZWQ7XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHModXBkYXRlTW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uIChpZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdHJldHVybiB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlkOiBpZFxuLyoqKioqKi8gXHRcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuLyoqKioqKi8gXHRcdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChcbi8qKioqKiovIFx0XHRcdFx0XHRcdCFtb2R1bGUgfHxcbi8qKioqKiovIFx0XHRcdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcbi8qKioqKiovIFx0XHRcdFx0XHQpXG4vKioqKioqLyBcdFx0XHRcdFx0XHRjb250aW51ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbi8qKioqKiovIFx0XHRcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbi8qKioqKiovIFx0XHRcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dmFyIHBhcmVudCA9IF9fd2VicGFja19yZXF1aXJlX18uY1twYXJlbnRJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHJldHVybiB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR9O1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0Y29udGludWU7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdHJldHVybiB7XG4vKioqKioqLyBcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcbi8qKioqKiovIFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbi8qKioqKiovIFx0XHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbi8qKioqKiovIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG4vKioqKioqLyBcdFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4vKioqKioqLyBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbi8qKioqKiovIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbi8qKioqKiovIFx0XHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4vKioqKioqLyBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyBtb2R1bGUuaWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbi8qKioqKiovIFx0XHRcdFx0KTtcbi8qKioqKiovIFx0XHRcdH07XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBjdXJyZW50VXBkYXRlKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIG5ld01vZHVsZUZhY3RvcnkgPSBjdXJyZW50VXBkYXRlW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIHJlc3VsdDtcbi8qKioqKiovIFx0XHRcdFx0XHRpZiAobmV3TW9kdWxlRmFjdG9yeSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKG1vZHVsZUlkKTtcbi8qKioqKiovIFx0XHRcdFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0cmVzdWx0ID0ge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGJyZWFrO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRicmVhaztcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGJyZWFrO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0YnJlYWs7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGJyZWFrO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZGVmYXVsdDpcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJldHVybiB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGVycm9yOiBhYm9ydEVycm9yXG4vKioqKioqLyBcdFx0XHRcdFx0XHR9O1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRpZiAoZG9BcHBseSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBuZXdNb2R1bGVGYWN0b3J5O1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdGN1cnJlbnRVcGRhdGUgPSB1bmRlZmluZWQ7XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4vKioqKioqLyBcdFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4vKioqKioqLyBcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGorKykge1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tqXTtcbi8qKioqKiovIFx0XHRcdFx0aWYgKFxuLyoqKioqKi8gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXSAmJlxuLyoqKioqKi8gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZCAmJlxuLyoqKioqKi8gXHRcdFx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcbi8qKioqKiovIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW291dGRhdGVkTW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcbi8qKioqKiovIFx0XHRcdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuLyoqKioqKi8gXHRcdFx0XHRcdCFfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF0uaG90Ll9zZWxmSW52YWxpZGF0ZWRcbi8qKioqKiovIFx0XHRcdFx0KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0bW9kdWxlOiBvdXRkYXRlZE1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0cmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdLmhvdC5fcmVxdWlyZVNlbGYsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuLyoqKioqKi8gXHRcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRyZXR1cm4ge1xuLyoqKioqKi8gXHRcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbi8qKioqKiovIFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHVuZGVmaW5lZDtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgaWR4O1xuLyoqKioqKi8gXHRcdFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuLyoqKioqKi8gXHRcdFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0dmFyIGRhdGEgPSB7fTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbi8qKioqKiovIFx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0ZGlzcG9zZUhhbmRsZXJzW2pdLmNhbGwobnVsbCwgZGF0YSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckRbbW9kdWxlSWRdID0gZGF0YTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4vKioqKioqLyBcdFx0XHRcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG4vKioqKioqLyBcdFx0XHRcdFx0XHRkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbi8qKioqKiovIFx0XHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuLyoqKioqKi8gXHRcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR2YXIgY2hpbGQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jeTtcbi8qKioqKiovIFx0XHRcdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFx0XHRhcHBseTogZnVuY3Rpb24gKHJlcG9ydEVycm9yKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4vKioqKioqLyBcdFx0XHRcdFx0Zm9yICh2YXIgdXBkYXRlTW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhhcHBsaWVkVXBkYXRlLCB1cGRhdGVNb2R1bGVJZCkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW3VwZGF0ZU1vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbdXBkYXRlTW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0XHQvLyBydW4gbmV3IHJ1bnRpbWUgbW9kdWxlc1xuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudFVwZGF0ZVJ1bnRpbWUubGVuZ3RoOyBpKyspIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lW2ldKF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHR2YXIgYWNjZXB0Q2FsbGJhY2sgPVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdGlmIChhY2NlcHRDYWxsYmFjaykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoYWNjZXB0Q2FsbGJhY2spICE9PSAtMSkgY29udGludWU7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGFjY2VwdENhbGxiYWNrKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzLnB1c2goZGVwZW5kZW5jeSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgY2FsbGJhY2tzLmxlbmd0aDsgaysrKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3Nba10uY2FsbChudWxsLCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbi8qKioqKiovIFx0XHRcdFx0XHRmb3IgKHZhciBvID0gMDsgbyA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IG8rKykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbb107XG4vKioqKioqLyBcdFx0XHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHRyeSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGl0ZW0ucmVxdWlyZShtb2R1bGVJZCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH07XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySS5qc29ucCA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgYXBwbHlIYW5kbGVycykge1xuLyoqKioqKi8gXHRcdFx0aWYgKCFjdXJyZW50VXBkYXRlKSB7XG4vKioqKioqLyBcdFx0XHRcdGN1cnJlbnRVcGRhdGUgPSB7fTtcbi8qKioqKiovIFx0XHRcdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcbi8qKioqKiovIFx0XHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSBbXTtcbi8qKioqKiovIFx0XHRcdFx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRpZiAoIV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcbi8qKioqKiovIFx0XHRcdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLmpzb25wID0gZnVuY3Rpb24gKFxuLyoqKioqKi8gXHRcdFx0Y2h1bmtJZHMsXG4vKioqKioqLyBcdFx0XHRyZW1vdmVkQ2h1bmtzLFxuLyoqKioqKi8gXHRcdFx0cmVtb3ZlZE1vZHVsZXMsXG4vKioqKioqLyBcdFx0XHRwcm9taXNlcyxcbi8qKioqKiovIFx0XHRcdGFwcGx5SGFuZGxlcnMsXG4vKioqKioqLyBcdFx0XHR1cGRhdGVkTW9kdWxlc0xpc3Rcbi8qKioqKiovIFx0XHQpIHtcbi8qKioqKiovIFx0XHRcdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuLyoqKioqKi8gXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHt9O1xuLyoqKioqKi8gXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSByZW1vdmVkQ2h1bmtzO1xuLyoqKioqKi8gXHRcdFx0Y3VycmVudFVwZGF0ZSA9IHJlbW92ZWRNb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcbi8qKioqKiovIFx0XHRcdFx0b2JqW2tleV0gPSBmYWxzZTtcbi8qKioqKiovIFx0XHRcdFx0cmV0dXJuIG9iajtcbi8qKioqKiovIFx0XHRcdH0sIHt9KTtcbi8qKioqKiovIFx0XHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG4vKioqKioqLyBcdFx0XHRjaHVua0lkcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmIChcbi8qKioqKiovIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuLyoqKioqKi8gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkXG4vKioqKioqLyBcdFx0XHRcdCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkpO1xuLyoqKioqKi8gXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIHtcbi8qKioqKiovIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yID0gZnVuY3Rpb24gKGNodW5rSWQsIHByb21pc2VzKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rcyAmJlxuLyoqKioqKi8gXHRcdFx0XHRcdFx0IV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlQ2h1bmtzLCBjaHVua0lkKSAmJlxuLyoqKioqKi8gXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcbi8qKioqKiovIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkXG4vKioqKioqLyBcdFx0XHRcdFx0KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0gPSAoKSA9PiB7XG4vKioqKioqLyBcdFx0XHRpZiAodHlwZW9mIGZldGNoID09PSBcInVuZGVmaW5lZFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnQ6IG5lZWQgZmV0Y2ggQVBJXCIpO1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGZldGNoKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaG1yRigpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuLyoqKioqKi8gXHRcdFx0XHRpZihyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkgcmV0dXJuOyAvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4vKioqKioqLyBcdFx0XHRcdGlmKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVwZGF0ZSBtYW5pZmVzdCBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHQvLyBubyBkZWZlcnJlZCBzdGFydHVwXG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0Ly8gbm8ganNvbnAgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHQvLyBubyBkZWZlcnJlZCBzdGFydHVwXG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLyoqKioqKi8gXHQvLyBzdGFydHVwXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pY29ucy5qc1wiKTtcbi8qKioqKiovIFx0X193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19leHBvcnRzX18uZGVmYXVsdDtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfZXhwb3J0c19fO1xuLyoqKioqKi8gfSkoKVxuO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlKWTI5dWN5OTNaV0p3WVdOckwzVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0aUxDSjNaV0p3WVdOck9pOHZTV052Ym5NdkxpOXpjbU12YVdOdmJuTXVjMk56Y3lJc0luZGxZbkJoWTJzNkx5OUpZMjl1Y3k4dUxpOXViMlJsWDIxdlpIVnNaWE12WTNOekxXeHZZV1JsY2k5a2FYTjBMM0oxYm5ScGJXVXZZWEJwTG1weklpd2lkMlZpY0dGamF6b3ZMMGxqYjI1ekx5NHVMMjV2WkdWZmJXOWtkV3hsY3k5amMzTXRiRzloWkdWeUwyUnBjM1F2Y25WdWRHbHRaUzlqYzNOWGFYUm9UV0Z3Y0dsdVoxUnZVM1J5YVc1bkxtcHpJaXdpZDJWaWNHRmphem92TDBsamIyNXpMeTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpjM010Ykc5aFpHVnlMMlJwYzNRdmNuVnVkR2x0WlM5blpYUlZjbXd1YW5NaUxDSjNaV0p3WVdOck9pOHZTV052Ym5NdkxpOXpjbU12YVdOdmJuTXVjMk56Y3o4MU5tWmlJaXdpZDJWaWNHRmphem92TDBsamIyNXpMeTR1TDI1dlpHVmZiVzlrZFd4bGN5OXpkSGxzWlMxc2IyRmtaWEl2WkdsemRDOXlkVzUwYVcxbEwybHVhbVZqZEZOMGVXeGxjMGx1ZEc5VGRIbHNaVlJoWnk1cWN5SXNJbmRsWW5CaFkyczZMeTlKWTI5dWN5OHVMM055WXk5cGJXRm5aWE12YVdOdmJuTXVjRzVuSWl3aWQyVmljR0ZqYXpvdkwwbGpiMjV6THk0dmMzSmpMMmxqYjI1ekxtcHpJaXdpZDJWaWNHRmphem92TDBsamIyNXpMM2RsWW5CaFkyc3ZZbTl2ZEhOMGNtRndJaXdpZDJWaWNHRmphem92TDBsamIyNXpMM2RsWW5CaFkyc3ZjblZ1ZEdsdFpTOWpiMjF3WVhRZ1oyVjBJR1JsWm1GMWJIUWdaWGh3YjNKMElpd2lkMlZpY0dGamF6b3ZMMGxqYjI1ekwzZGxZbkJoWTJzdmNuVnVkR2x0WlM5a1pXWnBibVVnY0hKdmNHVnlkSGtnWjJWMGRHVnljeUlzSW5kbFluQmhZMnM2THk5SlkyOXVjeTkzWldKd1lXTnJMM0oxYm5ScGJXVXZaMlYwSUdwaGRtRnpZM0pwY0hRZ2RYQmtZWFJsSUdOb2RXNXJJR1pwYkdWdVlXMWxJaXdpZDJWaWNHRmphem92TDBsamIyNXpMM2RsWW5CaFkyc3ZjblZ1ZEdsdFpTOW5aWFFnZFhCa1lYUmxJRzFoYm1sbVpYTjBJR1pwYkdWdVlXMWxJaXdpZDJWaWNHRmphem92TDBsamIyNXpMM2RsWW5CaFkyc3ZjblZ1ZEdsdFpTOW5aWFJHZFd4c1NHRnphQ0lzSW5kbFluQmhZMnM2THk5SlkyOXVjeTkzWldKd1lXTnJMM0oxYm5ScGJXVXZhR0Z6VDNkdVVISnZjR1Z5ZEhrZ2MyaHZjblJvWVc1a0lpd2lkMlZpY0dGamF6b3ZMMGxqYjI1ekwzZGxZbkJoWTJzdmNuVnVkR2x0WlM5c2IyRmtJSE5qY21sd2RDSXNJbmRsWW5CaFkyczZMeTlKWTI5dWN5OTNaV0p3WVdOckwzSjFiblJwYldVdmJXRnJaU0J1WVcxbGMzQmhZMlVnYjJKcVpXTjBJaXdpZDJWaWNHRmphem92TDBsamIyNXpMM2RsWW5CaFkyc3ZjblZ1ZEdsdFpTOW9iM1FnYlc5a2RXeGxJSEpsY0d4aFkyVnRaVzUwSWl3aWQyVmljR0ZqYXpvdkwwbGpiMjV6TDNkbFluQmhZMnN2Y25WdWRHbHRaUzl3ZFdKc2FXTlFZWFJvSWl3aWQyVmljR0ZqYXpvdkwwbGpiMjV6TDNkbFluQmhZMnN2Y25WdWRHbHRaUzlxYzI5dWNDQmphSFZ1YXlCc2IyRmthVzVuSWl3aWQyVmljR0ZqYXpvdkwwbGpiMjV6TDNkbFluQmhZMnN2YzNSaGNuUjFjQ0pkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPMEZCUTBRc1R6czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZEVmtFN1FVRkRORWc3UVVGRE4wSTdRVUZEVHp0QlFVTjJRenRCUVVNdlJDdzRRa0ZCT0VJc2JVWkJRVEpDTEVOQlFVTXNkMGRCUVhGRE8wRkJReTlHTEhsRFFVRjVReXh6UmtGQkswSXNRMEZCUXl4elJFRkJOa0k3UVVGRGRFYzdRVUZEUVN4eFJFRkJjVVFzTUVKQlFUQkNMSE5GUVVGelJTeG5Ra0ZCWjBJc2FVSkJRV2xDTEhGQ1FVRnhRaXgxUWtGQmRVSXNaVUZCWlN4RlFVRkZMR3REUVVGclF5d3JRa0ZCSzBJc1JVRkJSU3h0UTBGQmJVTXNiVU5CUVcxRExFVkJRVVVzYTBOQlFXdERMRzFEUVVGdFF5eEZRVUZGTEcxRFFVRnRReXh0UTBGQmJVTXNSVUZCUlN4clEwRkJhME1zYlVOQlFXMURMRVZCUVVVc2JVTkJRVzFETEcxRFFVRnRReXhGUVVGRkxHdERRVUZyUXl4dFEwRkJiVU1zUlVGQlJTeHRRMEZCYlVNc2IwTkJRVzlETEVWQlFVVXNiME5CUVc5RExHOURRVUZ2UXl4RlFVRkZMRzlEUVVGdlF5eHZRMEZCYjBNc1JVRkJSU3h4UTBGQmNVTXNjVU5CUVhGRExFVkJRVVVzYzBOQlFYTkRMSFZEUVVGMVF5eEZRVUZGTEhGRFFVRnhReXgxUTBGQmRVTXNSVUZCUlN4elEwRkJjME1zZFVOQlFYVkRMRVZCUVVVc2NVTkJRWEZETEhWRFFVRjFReXhGUVVGRkxITkRRVUZ6UXl4MVEwRkJkVU1zUlVGQlJTeHhRMEZCY1VNc2RVTkJRWFZETEVWQlFVVXNjME5CUVhORExIZERRVUYzUXl4RlFVRkZMSFZEUVVGMVF5eDNRMEZCZDBNc1JVRkJSU3gxUTBGQmRVTXNkME5CUVhkRExFVkJRVVVzYTBOQlFXdERMSEZEUVVGeFF5eEZRVUZGTEcxRFFVRnRReXgxUTBGQmRVTXNSVUZCUlN4clEwRkJhME1zZFVOQlFYVkRMRVZCUVVVc2JVTkJRVzFETEhWRFFVRjFReXhGUVVGRkxHdERRVUZyUXl4MVEwRkJkVU1zUlVGQlJTeHRRMEZCYlVNc2RVTkJRWFZETEVWQlFVVXNhME5CUVd0RExIVkRRVUYxUXl4RlFVRkZMRzFEUVVGdFF5eDNRMEZCZDBNc1JVRkJSU3h2UTBGQmIwTXNkME5CUVhkRExFVkJRVVVzYzBOQlFYTkRMSGREUVVGM1F5eEZRVUZGTEc5RFFVRnZReXgzUTBGQmQwTXNSVUZCUlN4elEwRkJjME1zZDBOQlFYZERMRVZCUVVVc2MwTkJRWE5ETEhkRFFVRjNReXhGUVVGRkxITkRRVUZ6UXl4M1EwRkJkME1zUlVGQlJTeHpRMEZCYzBNc2QwTkJRWGRETEVWQlFVVXNjME5CUVhORExIZERRVUYzUXl4RlFVRkZMSFZEUVVGMVF5eHhRMEZCY1VNc1JVRkJSU3gzUTBGQmQwTXNkVU5CUVhWRExFVkJRVVVzZFVOQlFYVkRMSFZEUVVGMVF5eEZRVUZGTEhkRFFVRjNReXgxUTBGQmRVTXNSVUZCUlN4MVEwRkJkVU1zZFVOQlFYVkRMRVZCUVVVc2QwTkJRWGRETEhWRFFVRjFReXhGUVVGRkxIVkRRVUYxUXl4MVEwRkJkVU1zUlVGQlJTeDNRMEZCZDBNc2QwTkJRWGRETEVWQlFVVXNlVU5CUVhsRExIZERRVUYzUXl4RlFVRkZMREpEUVVFeVF5eDNRMEZCZDBNc1JVRkJSU3g1UTBGQmVVTXNkME5CUVhkRExFVkJRVVVzTWtOQlFUSkRMSGREUVVGM1F5eEZRVUZGTERKRFFVRXlReXgzUTBGQmQwTXNSVUZCUlN3eVEwRkJNa01zZDBOQlFYZERMRVZCUVVVc01rTkJRVEpETEhkRFFVRjNReXhGUVVGRkxESkRRVUV5UXl4M1EwRkJkME1zUlVGQlJTdzJRMEZCTmtNc2NVTkJRWEZETEVWQlFVVXNOa05CUVRaRExIVkRRVUYxUXl4RlFVRkZMSGxEUVVGNVF5eHhRMEZCY1VNc1JVRkJSU3h2UTBGQmIwTXNkVU5CUVhWRExFVkJRVVVzYVVOQlFXbERMSFZEUVVGMVF5eEZRVUZGTEcxRFFVRnRReXgxUTBGQmRVTXNSVUZCUlN3MlFrRkJOa0lzZFVOQlFYVkRMRVZCUVVVc2IwTkJRVzlETEhWRFFVRjFReXhGUVVGRkxHdERRVUZyUXl4MVEwRkJkVU1zUlVGQlJTeHBRMEZCYVVNc2QwTkJRWGRETEVWQlFVVXNaME5CUVdkRExIZERRVUYzUXl4RlFVRkZMQ3RDUVVFclFpeDNRMEZCZDBNc1JVRkJSU3c0UWtGQk9FSXNkME5CUVhkRExFVkJRVVVzT0VKQlFUaENMSGREUVVGM1F5eEZRVUZGTEN0Q1FVRXJRaXgzUTBGQmQwTXNSVUZCUlN4cFEwRkJhVU1zZDBOQlFYZERMRVZCUVVVc2FVTkJRV2xETEhkRFFVRjNReXhGUVVGRkxEUkNRVUUwUWl4M1EwRkJkME1zUlVGQlJTdzJRa0ZCTmtJc2MwTkJRWE5ETEVWQlFVVXNOa0pCUVRaQ0xIZERRVUYzUXl4RlFVRkZMRzFEUVVGdFF5eDNRMEZCZDBNc1JVRkJSU3cyUWtGQk5rSXNkME5CUVhkRExFVkJRVVVzSzBKQlFTdENMSGREUVVGM1F5eEZRVUZGTERoQ1FVRTRRaXgzUTBGQmQwTXNSVUZCUlN3MlFrRkJOa0lzZDBOQlFYZERMRVZCUVVVc2FVTkJRV2xETEhsRFFVRjVReXhGUVVGRkxDdENRVUVyUWl4NVEwRkJlVU1zUlVGQlJTeG5RMEZCWjBNc2VVTkJRWGxETEVWQlFVVXNLMEpCUVN0Q0xIbERRVUY1UXl4RlFVRkZMQ3RDUVVFclFpeDVRMEZCZVVNc1JVRkJSU3cyUWtGQk5rSXNlVU5CUVhsRExFVkJRVVVzT0VKQlFUaENMSGxEUVVGNVF5eEZRVUZGTERaQ1FVRTJRaXg1UTBGQmVVTXNSVUZCUlN3MlFrRkJOa0lzZVVOQlFYbERMRVZCUVVVc0swSkJRU3RDTEhORFFVRnpReXhGUVVGRkxEWkNRVUUyUWl4M1EwRkJkME1zUlVGQlJTeHJRMEZCYTBNc2QwTkJRWGRETEVWQlFVVXNPRUpCUVRoQ0xIZERRVUYzUXl4RlFVRkZMRzFEUVVGdFF5eDNRMEZCZDBNc1JVRkJSU3cwUWtGQk5FSXNkME5CUVhkRExFVkJRVVVzYTBOQlFXdERMSGREUVVGM1F5eEZRVUZGTEdsRFFVRnBReXg1UTBGQmVVTXNSVUZCUlN4clEwRkJhME1zZVVOQlFYbERMRVZCUVVVc05rSkJRVFpDTEhsRFFVRjVReXhGUVVGRkxHZERRVUZuUXl4NVEwRkJlVU1zUlVGQlJTdzRRa0ZCT0VJc2VVTkJRWGxETEVWQlFVVXNPRUpCUVRoQ0xIbERRVUY1UXl4RlFVRkZMQ3RDUVVFclFpeDVRMEZCZVVNc1JVRkJSU3c0UWtGQk9FSXNkME5CUVhkRExFVkJRVVVzYlVOQlFXMURMSGREUVVGM1F5eEZRVUZGTERoQ1FVRTRRaXh6UTBGQmMwTXNSVUZCUlN3MlFrRkJOa0lzZDBOQlFYZERMRVZCUVVVc0swSkJRU3RDTEhkRFFVRjNReXhGUVVGRkxEWkNRVUUyUWl4M1EwRkJkME1zUlVGQlJTdzRRa0ZCT0VJc2QwTkJRWGRETEVWQlFVVXNLMEpCUVN0Q0xIZERRVUYzUXl4RlFVRkZMR3REUVVGclF5eDNRMEZCZDBNc1JVRkJSU3hwUTBGQmFVTXNlVU5CUVhsRExFVkJRVVVzT0VKQlFUaENMSGxEUVVGNVF5eEZRVUZGTERoQ1FVRTRRaXg1UTBGQmVVTXNSVUZCUlN3MlFrRkJOa0lzYzBOQlFYTkRMRVZCUVVVc09FSkJRVGhDTEhkRFFVRjNReXhGUVVGRkxHdERRVUZyUXl4M1EwRkJkME1zUlVGQlJTeHJRMEZCYTBNc2QwTkJRWGRETEVWQlFVVXNhVU5CUVdsRExIZERRVUYzUXl4RlFVRkZMRzFEUVVGdFF5eDNRMEZCZDBNc1JVRkJSU3cyUWtGQk5rSXNkME5CUVhkRExFVkJRVVVzT0VKQlFUaENMSGxEUVVGNVF5eEZRVUZGTEcxRFFVRnRReXg1UTBGQmVVTXNSVUZCUlN4clEwRkJhME1zZVVOQlFYbERMRVZCUVVVc1UwRkJVeXcyUlVGQk5rVXNXVUZCV1N4aFFVRmhMRmRCUVZjc1ZVRkJWU3haUVVGWkxHRkJRV0VzWjBKQlFXZENMRXRCUVVzc2FVSkJRV2xDTEUxQlFVMHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhMEpCUVd0Q0xFOUJRVThzYTBKQlFXdENMRTlCUVU4c2EwSkJRV3RDTEU5QlFVOHNhVVJCUVdsRUxEUkNRVUUwUWl3NFEwRkJPRU1zYTBKQlFXdENMRzFDUVVGdFFpeDFRa0ZCZFVJc2VVSkJRWGxDTEdsQ1FVRnBRaXc0UkVGQk9FUXNhVU5CUVdsRExFOUJRVThzYVVOQlFXbERMSEZEUVVGeFF5eFBRVUZQTEdkRFFVRm5ReXg1UTBGQmVVTXNUMEZCVHl4cFEwRkJhVU1zZVVOQlFYbERMRTlCUVU4c1owTkJRV2RETEhsRFFVRjVReXhQUVVGUExHbERRVUZwUXl4NVEwRkJlVU1zVDBGQlR5eG5RMEZCWjBNc2VVTkJRWGxETEU5QlFVOHNhVU5CUVdsRExIbERRVUY1UXl4UFFVRlBMR3REUVVGclF5eDVRMEZCZVVNc1QwRkJUeXhyUTBGQmEwTXNlVU5CUVhsRExFOUJRVThzYVVWQlFXbEZMRFpEUVVFMlF5eFBRVUZQTEc5RFFVRnZReXcyUTBGQk5rTXNUMEZCVHl4dFEwRkJiVU1zTmtOQlFUWkRMRTlCUVU4c2IwTkJRVzlETERaRFFVRTJReXhQUVVGUExIVkRRVUYxUXl3MlEwRkJOa01zVDBGQlR5eDNRMEZCZDBNc05rTkJRVFpETEU5QlFVOHNkVU5CUVhWRExEWkRRVUUyUXl4UFFVRlBMSGREUVVGM1F5dzJRMEZCTmtNc1QwRkJUeXh4UTBGQmNVTXNOa05CUVRaRExFOUJRVThzY1VOQlFYRkRMRFpEUVVFMlF5eFBRVUZQTEdkRlFVRm5SU3cyUTBGQk5rTXNUMEZCVHl4cFEwRkJhVU1zTmtOQlFUWkRMRTlCUVU4c1owTkJRV2RETERaRFFVRTJReXhQUVVGUExHbERRVUZwUXl3MlEwRkJOa01zVDBGQlR5eG5RMEZCWjBNc05rTkJRVFpETEU5QlFVOHNhVU5CUVdsRExEWkRRVUUyUXl4UFFVRlBMR2REUVVGblF5dzJRMEZCTmtNc1QwRkJUeXhwUTBGQmFVTXNOa05CUVRaRExFOUJRVThzYzBOQlFYTkRMRFpEUVVFMlF5eFBRVUZQTEc5RFFVRnZReXcyUTBGQk5rTXNUMEZCVHl4clEwRkJhME1zT0VOQlFUaERMRTlCUVU4c2IwTkJRVzlETERoRFFVRTRReXhQUVVGUExHOURRVUZ2UXl3NFEwRkJPRU1zVDBGQlR5eDNRMEZCZDBNc09FTkJRVGhETEU5QlFVOHNiME5CUVc5RExEaERRVUU0UXl4UFFVRlBMRzlEUVVGdlF5dzRRMEZCT0VNc1QwRkJUeXh0UlVGQmJVVXNOa05CUVRaRExFOUJRVThzYzBOQlFYTkRMRFpEUVVFMlF5eFBRVUZQTEhGRFFVRnhReXcyUTBGQk5rTXNUMEZCVHl4elEwRkJjME1zTmtOQlFUWkRMRTlCUVU4c2NVTkJRWEZETERaRFFVRTJReXhQUVVGUExITkRRVUZ6UXl3MlEwRkJOa01zVDBGQlR5eHhRMEZCY1VNc05rTkJRVFpETEU5QlFVOHNjME5CUVhORExEWkRRVUUyUXl4UFFVRlBMSFZEUVVGMVF5dzJRMEZCTmtNc1QwRkJUeXg1UTBGQmVVTXNOa05CUVRaRExFOUJRVThzZFVOQlFYVkRMRGhEUVVFNFF5eFBRVUZQTEhsRFFVRjVReXc0UTBGQk9FTXNUMEZCVHl4NVEwRkJlVU1zT0VOQlFUaERMRTlCUVU4c2VVTkJRWGxETERoRFFVRTRReXhQUVVGUExIbERRVUY1UXl3NFEwRkJPRU1zVDBGQlR5eDVRMEZCZVVNc09FTkJRVGhETEU5QlFVOHNhVVZCUVdsRkxEWkRRVUUyUXl4UFFVRlBMREpEUVVFeVF5dzJRMEZCTmtNc1QwRkJUeXhwYmtKQlFXbHVRaXhaUVVGWkxHZERRVUZuUXl4eFFrRkJjVUlzVFVGQlRTeEZRVUZGTEhkRVFVRjNSQ3h4UWtGQmNVSXNUMEZCVHl4elNrRkJjMG9zV1VGQldTeG5RMEZCWjBNc2NVSkJRWEZDTEUxQlFVMHNSVUZCUlN4NVJFRkJlVVFzY1VKQlFYRkNMRTlCUVU4c2IwdEJRVzlMTEZsQlFWa3NaME5CUVdkRExIRkNRVUZ4UWl4TlFVRk5MRVZCUVVVc2VVUkJRWGxFTEhGQ1FVRnhRaXhQUVVGUExEUkNRVUUwUWl3d1EwRkJNRU1zVDBGQlR5eHBRMEZCYVVNc01FTkJRVEJETEU5QlFVOHNjVlpCUVhGV0xGbEJRVmtzWjBOQlFXZERMSEZDUVVGeFFpeE5RVUZOTEVWQlFVVXNORVJCUVRSRUxIRkNRVUZ4UWl4UFFVRlBMREpJUVVFeVNDeFpRVUZaTEdkRFFVRm5ReXh4UWtGQmNVSXNUVUZCVFN4RlFVRkZMRFpFUVVFMlJDeHhRa0ZCY1VJc1QwRkJUeXg1TUVKQlFYa3dRaXgxUWtGQmRVSTdRVUZEYW1od1FqdEJRVU5CTEdsRlFVRmxMSFZDUVVGMVFpeEZRVUZET3pzN096czdPenM3T3p0QlExWXhRanM3UVVGRllqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHZENRVUZuUWpzN1FVRkZhRUk3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc05FTkJRVFJETEhGQ1FVRnhRanRCUVVOcVJUczdRVUZGUVR0QlFVTkJMRXRCUVVzN1FVRkRUQ3hKUVVGSk8wRkJRMG83T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRU3h4UWtGQmNVSXNhVUpCUVdsQ08wRkJRM1JETzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4dlFrRkJiMElzY1VKQlFYRkNPMEZCUTNwRE96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZOQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1JUczdPenM3T3pzN096dEJRMnBGWVRzN1FVRkZZaXhwUTBGQmFVTXNNa2hCUVRKSU96dEJRVVUxU2l3MlFrRkJOa0lzYTB0QlFXdExPenRCUVVVdlRDeHBSRUZCYVVRc1owSkJRV2RDTEdkRlFVRm5SU3gzUkVGQmQwUXNOa1JCUVRaRUxITkVRVUZ6UkN4clNFRkJhMGc3TzBGQlJUbGFMSE5EUVVGelF5eDFSRUZCZFVRc2RVTkJRWFZETEZOQlFWTXNUMEZCVHl4clFrRkJhMElzUlVGQlJTeGhRVUZoT3p0QlFVVnlUQ3gzUTBGQmQwTXNaMFpCUVdkR0xHVkJRV1VzWlVGQlpTeG5Ra0ZCWjBJc2IwSkJRVzlDTEUxQlFVMHNNRU5CUVRCRExDdENRVUVyUWl4aFFVRmhMSEZDUVVGeFFpeHRRMEZCYlVNc1JVRkJSU3hGUVVGRkxHTkJRV01zVjBGQlZ5eFZRVUZWTEVWQlFVVXNWVUZCVlN4TlFVRk5MR2xFUVVGcFJDeEZRVUZGTEZWQlFWVXNhMEpCUVd0Q0xFVkJRVVVzUlVGQlJTeGhRVUZoT3p0QlFVVjJaU3dyUWtGQkswSXNiME5CUVc5RE96dEJRVVZ1UlR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4MVJFRkJkVVFzWTBGQll6dEJRVU55UlR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUczdRVUZGUVR0QlFVTkJMRVU3T3pzN096czdPenM3UVVNdlFtRTdPMEZCUldJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZIT3pzN1FVRkhTRHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNSMEZCUnpzN08wRkJSMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4Rk96czdPenM3T3pzN096czdPenM3T3p0QlEycERLMFk3UVVGREwwWXNXVUZCTUU0N08wRkJSVEZPT3p0QlFVVkJPMEZCUTBFN08wRkJSVUVzWVVGQllTd3dSMEZCUnl4RFFVRkRMREJNUVVGUE96czdRVUZIZUVJc1NVRkJTU3hKUVVGVk8wRkJRMlFzVDBGQlR5eHBUVUZCWXl4SlFVRkpMRlZCUVZVN1FVRkRia003UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeHZRa0ZCYjBJc2FVMUJRV003TzBGQlJXeERMRWxCUVVrc2FVSkJRV2xDTzBGQlEzSkNMRTFCUVUwc2FWaEJRWGxNTzBGQlF5OU1MRTFCUVUwN1FVRkJRVHRCUVVOT0xITkRRVUZ6UXl4cFRVRkJZenRCUVVOd1JDeG5Ra0ZCWjBJc1ZVRkJWVHM3UVVGRk1VSTdRVUZEUVRzN1FVRkZRU3d3UWtGQk1FSXNhVTFCUVdNN08wRkJSWGhETEhGQ1FVRnhRaXd3VEVGQlR6dEJRVU0xUWl4UFFVRlBPMEZCUTFBN1FVRkRRVHM3UVVGRlFTeEZRVUZGTEZWQlFWVTdRVUZEV2p0QlFVTkJMRWRCUVVjN1FVRkRTRHM3UVVGRlFTeHBSVUZCWlN4cFRVRkJZeXhOUVVGTkxFVTdPenM3T3pzN096czdRVU51UlhSQ096dEJRVVZpTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFTkJRVU03TzBGQlJVUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3gxUkVGQmRVUTdPMEZCUlhaRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzUTBGQlF6czdRVUZGUkRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTEdsQ1FVRnBRaXgzUWtGQmQwSTdRVUZEZWtNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4cFFrRkJhVUlzYVVKQlFXbENPMEZCUTJ4RE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUMEZCVHp0QlFVTlFPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4blFrRkJaMElzUzBGQmQwTXNSMEZCUnl4elFrRkJhVUlzUjBGQlJ5eERRVUZKT3p0QlFVVnVSanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1IwRkJSenM3UVVGRlNEdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN08wRkJSVVE3UVVGRFFTeHhSVUZCY1VVc2NVSkJRWEZDTEdGQlFXRTdPMEZCUlhaSE96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4NVJFRkJlVVE3UVVGRGVrUXNSMEZCUnpzN1FVRkZTRHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxEQkNRVUV3UWp0QlFVTXhRanM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQkxHMUNRVUZ0UWl3MFFrRkJORUk3UVVGREwwTTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRXNiMEpCUVc5Q0xEWkNRVUUyUWp0QlFVTnFSRHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1JUczdPenM3T3pzN096czdPenM3UVVNMVVVRXNhVVZCUVdVc1owSkJRV2RDTEdkcFRUczdPenM3T3pzN096czdPMEZEUVZRN096czdPenM3VlVOQmRFSTdWVUZEUVRzN1ZVRkZRVHRWUVVOQk8xVkJRMEU3VlVGRFFUdFZRVU5CTzFWQlEwRTdWVUZEUVR0VlFVTkJPMVZCUTBFN1ZVRkRRVHRWUVVOQk8xVkJRMEU3TzFWQlJVRTdWVUZEUVN4dlFrRkJiMEk3VlVGRGNFSXNhMFJCUVd0RUxITkNRVUZ6UWl4RlFVRkZPMVZCUXpGRk8xVkJRMEU3TzFWQlJVRTdWVUZEUVR0VlFVTkJPenRWUVVWQk8xVkJRMEU3TzFWQlJVRTdWVUZEUVRzN1ZVRkZRVHRWUVVOQk96czdPenRYUTJwRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFc1owTkJRV2RETEZsQlFWazdWMEZETlVNN1YwRkRRU3hGT3pzN096dFhRMUJCTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFc2QwTkJRWGRETEhsRFFVRjVRenRYUVVOcVJqdFhRVU5CTzFkQlEwRXNSVHM3T3pzN1YwTlFRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTEVVN096czdPMWREU2tFc01rWTdPenM3TzFkRFFVRXNjMFE3T3pzN08xZERRVUVzZDBZN096czdPMWREUVVFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFTeHpRa0ZCYzBJc05FSkJRVFJDTEZGQlFWRTdWMEZETVVRN1YwRkRRVHRYUVVOQk8xZEJRMEVzWjBKQlFXZENMRzlDUVVGdlFqdFhRVU53UXp0WFFVTkJMR3RIUVVGclJ5eFpRVUZaTEU5QlFVODdWMEZEY2tnN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUczdWMEZGUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFc2EwVkJRV3RGTEd0RFFVRnJRenRYUVVOd1J6dFhRVU5CTzFkQlEwRTdWMEZEUVN4Rk96czdPenRYUTNwRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVN4elJFRkJjMFFzYTBKQlFXdENPMWRCUTNoRk8xZEJRMEVzSzBOQlFTdERMR05CUVdNN1YwRkROMFFzUlRzN096czdWME5PUVR0WFFVTkJPenRYUVVWQk8xZEJRMEU3VjBGRFFUczdWMEZGUVR0WFFVTkJPMWRCUTBFN08xZEJSVUU3VjBGRFFUczdWMEZGUVR0WFFVTkJPMWRCUTBFN08xZEJSVUU3VjBGRFFUczdWMEZGUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRXNRMEZCUXpzN1YwRkZSRHRYUVVOQk96dFhRVVZCTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRXNTVUZCU1R0WFFVTktPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTEVkQlFVYzdWMEZEU0R0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTEVsQlFVazdWMEZEU2p0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3TzFkQlJVRTdWMEZEUVR0WFFVTkJPMWRCUTBFc01rSkJRVEpDTzFkQlF6TkNMREpDUVVFeVFqdFhRVU16UWp0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVN4SFFVRkhPenRYUVVWSU8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJMRzFDUVVGdFFpeG5Ra0ZCWjBJN1YwRkRia003VjBGRFFUdFhRVU5CTEVkQlFVYzdWMEZEU0R0WFFVTkJPMWRCUTBFN1YwRkRRU3h0UWtGQmJVSXNaMEpCUVdkQ08xZEJRMjVETzFkQlEwRTdWMEZEUVN4SFFVRkhPMWRCUTBnN1YwRkRRVHRYUVVOQkxFZEJRVWM3VjBGRFNEdFhRVU5CTzFkQlEwRXNSMEZCUnp0WFFVTklPMWRCUTBFN1YwRkRRVHRYUVVOQkxFZEJRVWM3VjBGRFNEdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTEUxQlFVMDdWMEZEVGp0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRXNUVUZCVFR0WFFVTk9PMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEVzUjBGQlJ6czdWMEZGU0R0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFTeEhRVUZITzFkQlEwZzdWMEZEUVR0WFFVTkJMRWRCUVVjN1YwRkRTRHRYUVVOQk8xZEJRMEU3VjBGRFFTeEhRVUZIT3p0WFFVVklPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUczdWMEZGUVR0WFFVTkJPMWRCUTBFc1owSkJRV2RDTEhGRFFVRnhRenRYUVVOeVJEdFhRVU5CT3p0WFFVVkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRXNTVUZCU1R0WFFVTktPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdPMWRCUlVFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRXNSVUZCUlR0WFFVTkdPenRYUVVWQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk96dFhRVVZCT3p0WFFVVkJPMWRCUTBFN1YwRkRRVHM3VjBGRlFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFc1NVRkJTVHRYUVVOS08xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVN4TFFVRkxPMWRCUTB3N08xZEJSVUU3VjBGRFFUdFhRVU5CTEVsQlFVazdWMEZEU2l4SFFVRkhPMWRCUTBnc1JVRkJSVHRYUVVOR096dFhRVVZCTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFc1IwRkJSenRYUVVOSU8xZEJRMEU3VjBGRFFUczdWMEZGUVR0WFFVTkJPenRYUVVWQk96dFhRVVZCTzFkQlEwRTdWMEZEUVN4RlFVRkZPMWRCUTBZN08xZEJSVUU3VjBGRFFUdFhRVU5CTzFkQlEwRXNSMEZCUnp0WFFVTklPenRYUVVWQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRXNSMEZCUnp0WFFVTklPenRYUVVWQk8xZEJRMEU3TzFkQlJVRTdWMEZEUVR0WFFVTkJMRVZCUVVVN08xZEJSVVk3VjBGRFFUczdWMEZGUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHM3VjBGRlFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFc2JVSkJRVzFDTEc5Q1FVRnZRanRYUVVOMlF6dFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJMRVZCUVVVN08xZEJSVVk3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJMRWRCUVVjN1YwRkRTRHM3VjBGRlFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJMRWxCUVVrN1YwRkRTanRYUVVOQkxFZEJRVWM3VjBGRFNEczdWMEZGUVR0WFFVTkJPMWRCUTBFN08xZEJSVUU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEVzU1VGQlNUdFhRVU5LTEVkQlFVYzdWMEZEU0R0WFFVTkJPMWRCUTBFN1YwRkRRU3hET3pzN096dFhRM1JYUVN3eVFqczdPenM3VjBOQlFUczdWMEZGUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3T3p0WFFVZEJPenRYUVVWQk96dFhRVVZCT3p0WFFVVkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEVzUlVGQlJUdFhRVU5HT3p0WFFVVkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk96dFhRVVZCTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CT3p0WFFVVkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFTeEhRVUZITzFkQlEwZzdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEVzYTBKQlFXdENMREpDUVVFeVFqdFhRVU0zUXp0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEVzUzBGQlN6dFhRVU5NTzFkQlEwRTdPMWRCUlVFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdPMWRCUlVFN1YwRkRRU3hwUWtGQmFVSXNZMEZCWXp0WFFVTXZRanRYUVVOQk8xZEJRMEU3VjBGRFFUczdWMEZGUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk96dFhRVVZCTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN08xZEJSVUU3VjBGRFFUdFhRVU5CTzFkQlEwRXNZMEZCWXl4TFFVRkxPMWRCUTI1Q08xZEJRMEU3VjBGRFFUdFhRVU5CTEVsQlFVazdWMEZEU2p0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEVzWTBGQll5eFpRVUZaTzFkQlF6RkNPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVRzN1YwRkZRVHRYUVVOQk8xZEJRMEVzWjBKQlFXZENMRFJDUVVFMFFqdFhRVU0xUXp0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQkxFbEJRVWs3VjBGRFNqdFhRVU5CT3p0WFFVVkJPenRYUVVWQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRXNTVUZCU1R0WFFVTktPenRYUVVWQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVRzN1YwRkZRVHM3VjBGRlFUdFhRVU5CTzFkQlEwRXNaVUZCWlN3MFFrRkJORUk3VjBGRE0wTTdWMEZEUVR0WFFVTkJPenRYUVVWQk8xZEJRMEU3TzFkQlJVRTdWMEZEUVRzN1YwRkZRVHRYUVVOQk96dFhRVVZCTzFkQlEwRXNaVUZCWlN3MFFrRkJORUk3VjBGRE0wTTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUczdWMEZGUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRXNhVUpCUVdsQ0xIVkRRVUYxUXp0WFFVTjRSRHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJMRWRCUVVjN1YwRkRTRHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVRzN1YwRkZRVHRYUVVOQkxHdENRVUZyUWl4cFEwRkJhVU03VjBGRGJrUTdWMEZEUVRzN1YwRkZRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRU3h4UWtGQmNVSXNkVU5CUVhWRE8xZEJRelZFTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTEhGQ1FVRnhRaXh6UWtGQmMwSTdWMEZETTBNN1YwRkRRVHRYUVVOQkxGRkJRVkU3VjBGRFVqdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRU3hWUVVGVk8xZEJRMVk3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk96dFhRVVZCTzFkQlEwRXNhMEpCUVd0Q0xIZERRVUYzUXp0WFFVTXhSRHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTEV0QlFVczdWMEZEVER0WFFVTkJPMWRCUTBFN1YwRkRRU3hQUVVGUE8xZEJRMUE3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFc1UwRkJVenRYUVVOVU8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJMRTFCUVUwN1YwRkRUanRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRXNVVUZCVVR0WFFVTlNPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CT3p0WFFVVkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRU3hGUVVGRkxFbEJRVWs3VjBGRFRqdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFTeEZRVUZGTzFkQlEwWTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHRYUVVOQk8xZEJRMEU3VjBGRFFUdFhRVU5CTzFkQlEwRTdWMEZEUVR0WFFVTkJPMWRCUTBFN1YwRkRRVHM3VjBGRlFUdFhRVU5CTzFkQlEwRTdWMEZEUVN4eFEwRkJjVU03VjBGRGNrTTdWMEZEUVR0WFFVTkJMRVZCUVVVN1YwRkRSanM3VjBGRlFUczdWMEZGUVRzN1YwRkZRU3h6UWpzN096czdWVU5vWlVFN1ZVRkRRVHRWUVVOQk8xVkJRMEVpTENKbWFXeGxJam9pYVdOdmJuTXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0Z2QyVmljR0ZqYTFWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRvY205dmRDd2dabUZqZEc5eWVTa2dlMXh1WEhScFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY2dKaVlnZEhsd1pXOW1JRzF2WkhWc1pTQTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1ZV04wYjNKNUtDazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1JsWm1sdVpTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQmtaV1pwYm1VdVlXMWtLVnh1WEhSY2RHUmxabWx1WlNoYlhTd2dabUZqZEc5eWVTazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkR1Y0Y0c5eWRITmJYQ0pKWTI5dWMxd2lYU0E5SUdaaFkzUnZjbmtvS1R0Y2JseDBaV3h6WlZ4dVhIUmNkSEp2YjNSYlhDSkpZMjl1YzF3aVhTQTlJR1poWTNSdmNua29LVHRjYm4wcEtITmxiR1lzSUdaMWJtTjBhVzl1S0NrZ2UxeHVjbVYwZFhKdUlDSXNJaTh2SUVsdGNHOXlkSE5jYm1sdGNHOXlkQ0JmWDE5RFUxTmZURTlCUkVWU1gwRlFTVjlUVDFWU1EwVk5RVkJmU1UxUVQxSlVYMTlmSUdaeWIyMGdYQ0l1TGk4dUxpOHVMaTl1YjJSbFgyMXZaSFZzWlhNdlkzTnpMV3h2WVdSbGNpOWthWE4wTDNKMWJuUnBiV1V2WTNOelYybDBhRTFoY0hCcGJtZFViMU4wY21sdVp5NXFjMXdpTzF4dWFXMXdiM0owSUY5ZlgwTlRVMTlNVDBGRVJWSmZRVkJKWDBsTlVFOVNWRjlmWHlCbWNtOXRJRndpTGk0dkxpNHZMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnpjeTFzYjJGa1pYSXZaR2x6ZEM5eWRXNTBhVzFsTDJGd2FTNXFjMXdpTzF4dWFXMXdiM0owSUY5ZlgwTlRVMTlNVDBGRVJWSmZSMFZVWDFWU1RGOUpUVkJQVWxSZlgxOGdabkp2YlNCY0lpNHVMeTR1THk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYzNNdGJHOWhaR1Z5TDJScGMzUXZjblZ1ZEdsdFpTOW5aWFJWY213dWFuTmNJanRjYm1sdGNHOXlkQ0JmWDE5RFUxTmZURTlCUkVWU1gxVlNURjlKVFZCUFVsUmZNRjlmWHlCbWNtOXRJRndpTGk5cGJXRm5aWE12YVdOdmJuTXVjRzVuWENJN1hHNTJZWElnWDE5ZlExTlRYMHhQUVVSRlVsOUZXRkJQVWxSZlgxOGdQU0JmWDE5RFUxTmZURTlCUkVWU1gwRlFTVjlKVFZCUFVsUmZYMThvWDE5ZlExTlRYMHhQUVVSRlVsOUJVRWxmVTA5VlVrTkZUVUZRWDBsTlVFOVNWRjlmWHlrN1hHNTJZWElnWDE5ZlExTlRYMHhQUVVSRlVsOVZVa3hmVWtWUVRFRkRSVTFGVGxSZk1GOWZYeUE5SUY5ZlgwTlRVMTlNVDBGRVJWSmZSMFZVWDFWU1RGOUpUVkJQVWxSZlgxOG9YMTlmUTFOVFgweFBRVVJGVWw5VlVreGZTVTFRVDFKVVh6QmZYMThwTzF4dUx5OGdUVzlrZFd4bFhHNWZYMTlEVTFOZlRFOUJSRVZTWDBWWVVFOVNWRjlmWHk1d2RYTm9LRnR0YjJSMWJHVXVhV1FzSUZ3aUxtbGpiMjV6TFdOc0lIdGNYRzRnSUdScGMzQnNZWGs2SUdsdWJHbHVaUzFpYkc5amF6dGNYRzRnSUdKaFkydG5jbTkxYm1RdGFXMWhaMlU2SUhWeWJDaGNJaUFySUY5ZlgwTlRVMTlNVDBGRVJWSmZWVkpNWDFKRlVFeEJRMFZOUlU1VVh6QmZYMThnS3lCY0lpazdYRnh1SUNCM2FXUjBhRG9nTVRad2VEdGNYRzRnSUdobGFXZG9kRG9nTVRad2VEdGNYRzRnSUc5MlpYSm1iRzkzT2lCb2FXUmtaVzQ3WEZ4dUlDQmpiMnh2Y2pvZ2RISmhibk53WVhKbGJuUTdYRnh1SUNCd1lXUmthVzVuT2lBd095QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFkyRnlaWFF0TVMxdUlIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dNQ0F3T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WTJGeVpYUXRNUzF1WlNCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHhObkI0SURBN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxallYSmxkQzB4TFdVZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNekp3ZUNBd095QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFkyRnlaWFF0TVMxelpTQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzAwT0hCNElEQTdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWpZWEpsZEMweExYTWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TmpSd2VDQXdPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RZMkZ5WlhRdE1TMXpkeUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMwNE1IQjRJREE3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFqWVhKbGRDMHhMWGNnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE9UWndlQ0F3T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WTJGeVpYUXRNUzF1ZHlCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHhNVEp3ZUNBd095QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFkyRnlaWFF0TWkxdUxYTWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TVRJNGNIZ2dNRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV05oY21WMExUSXRaUzEzSUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xURTBOSEI0SURBN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxMGNtbGhibWRzWlMweExXNGdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF3Y0hnZ0xURTJjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzEwY21saGJtZHNaUzB4TFc1bElIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVEUyY0hnZ0xURTJjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzEwY21saGJtZHNaUzB4TFdVZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNekp3ZUNBdE1UWndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMWFJ5YVdGdVoyeGxMVEV0YzJVZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRORGh3ZUNBdE1UWndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMWFJ5YVdGdVoyeGxMVEV0Y3lCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMDJOSEI0SUMweE5uQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RkSEpwWVc1bmJHVXRNUzF6ZHlCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMDRNSEI0SUMweE5uQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RkSEpwWVc1bmJHVXRNUzEzSUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xUazJjSGdnTFRFMmNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMTBjbWxoYm1kc1pTMHhMVzUzSUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xURXhNbkI0SUMweE5uQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RkSEpwWVc1bmJHVXRNaTF1TFhNZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNVEk0Y0hnZ0xURTJjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzEwY21saGJtZHNaUzB5TFdVdGR5QjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB4TkRSd2VDQXRNVFp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdGeWNtOTNMVEV0YmlCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklEQndlQ0F0TXpKd2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXRnljbTkzTFRFdGJtVWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TVRad2VDQXRNekp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdGeWNtOTNMVEV0WlNCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHpNbkI0SUMwek1uQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RZWEp5YjNjdE1TMXpaU0I3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMwME9IQjRJQzB6TW5CNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFlYSnliM2N0TVMxeklIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVFkwY0hnZ0xUTXljSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFoY25KdmR5MHhMWE4zSUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xUZ3djSGdnTFRNeWNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWhjbkp2ZHkweExYY2dlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0T1Rad2VDQXRNekp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdGeWNtOTNMVEV0Ym5jZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNVEV5Y0hnZ0xUTXljSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFoY25KdmR5MHlMVzR0Y3lCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHhNamh3ZUNBdE16SndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV0Z5Y205M0xUSXRibVV0YzNjZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNVFEwY0hnZ0xUTXljSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFoY25KdmR5MHlMV1V0ZHlCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHhOakJ3ZUNBdE16SndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV0Z5Y205M0xUSXRjMlV0Ym5jZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNVGMyY0hnZ0xUTXljSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFoY25KdmQzTjBiM0F0TVMxdUlIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVEU1TW5CNElDMHpNbkI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WVhKeWIzZHpkRzl3TFRFdFpTQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB5TURod2VDQXRNekp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdGeWNtOTNjM1J2Y0MweExYTWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TWpJMGNIZ2dMVE15Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxaGNuSnZkM04wYjNBdE1TMTNJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRJME1IQjRJQzB6TW5CNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFlYSnliM2QwYUdsamF5MHhMVzRnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBd2NIZ2dMVFE0Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxaGNuSnZkM1JvYVdOckxURXRibVVnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1UWndlQ0F0TkRod2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXRnljbTkzZEdocFkyc3RNUzFsSUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xUTXljSGdnTFRRNGNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWhjbkp2ZDNSb2FXTnJMVEV0YzJVZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRORGh3ZUNBdE5EaHdlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV0Z5Y205M2RHaHBZMnN0TVMxeklIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVFkwY0hnZ0xUUTRjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFoY25KdmQzUm9hV05yTFRFdGMzY2dlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0T0RCd2VDQXRORGh3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdGeWNtOTNkR2hwWTJzdE1TMTNJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRrMmNIZ2dMVFE0Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxaGNuSnZkM1JvYVdOckxURXRibmNnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1URXljSGdnTFRRNGNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWhjbkp2ZDNSb2FXTnJMVEl0YmkxeklIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVEV5T0hCNElDMDBPSEI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WVhKeWIzZDBhR2xqYXkweUxXNWxMWE4zSUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xURTBOSEI0SUMwME9IQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RZWEp5YjNkMGFHbGpheTB5TFdVdGR5QjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB4TmpCd2VDQXRORGh3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdGeWNtOTNkR2hwWTJzdE1pMXpaUzF1ZHlCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHhOelp3ZUNBdE5EaHdlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV0Z5Y205M2RHaHBZMnR6ZEc5d0xURXRiaUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweE9USndlQ0F0TkRod2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXRnljbTkzZEdocFkydHpkRzl3TFRFdFpTQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB5TURod2VDQXRORGh3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdGeWNtOTNkR2hwWTJ0emRHOXdMVEV0Y3lCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHlNalJ3ZUNBdE5EaHdlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV0Z5Y205M2RHaHBZMnR6ZEc5d0xURXRkeUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweU5EQndlQ0F0TkRod2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXRnljbTkzY21WMGRYSnVkR2hwWTJzdE1TMTNJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTUhCNElDMDJOSEI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0WVhKeWIzZHlaWFIxY201MGFHbGpheTB4TFdVZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNekp3ZUNBdE5qUndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV1p2YkdSbGNpMWpiMnhzWVhCelpXUWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF3Y0hnZ0xUazJjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFtYjJ4a1pYSXRiM0JsYmlCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHhObkI0SUMwNU5uQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RaRzlqZFcxbGJuUWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TXpKd2VDQXRPVFp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdSdlkzVnRaVzUwTFdJZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRORGh3ZUNBdE9UWndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMVzV2ZEdVZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXROalJ3ZUNBdE9UWndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMVzFoYVd3dFkyeHZjMlZrSUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xUZ3djSGdnTFRrMmNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMXRZV2xzTFc5d1pXNGdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0T1Rad2VDQXRPVFp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFhOMWFYUmpZWE5sSUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xURXhNbkI0SUMwNU5uQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RZMjl0YldWdWRDQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB4TWpod2VDQXRPVFp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFhCbGNuTnZiaUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweE5EUndlQ0F0T1Rad2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xYQnlhVzUwSUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xURTJNSEI0SUMwNU5uQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RkSEpoYzJnZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNVGMyY0hnZ0xUazJjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFzYjJOclpXUWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TVRreWNIZ2dMVGsyY0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxMWJteHZZMnRsWkNCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHlNRGh3ZUNBdE9UWndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV0p2YjJ0dFlYSnJJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRJeU5IQjRJQzA1Tm5CNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dGRHRm5JSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRJME1IQjRJQzA1Tm5CNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dGFHOXRaU0I3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SURCd2VDQXRNVEV5Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxbWJHRm5JSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRFMmNIZ2dMVEV4TW5CNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFkyRnNZM1ZzWVhSdmNpQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB6TW5CNElDMHhNVEp3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdOaGNuUWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TkRod2VDQXRNVEV5Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxd1pXNWphV3dnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE5qUndlQ0F0TVRFeWNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWpiRzlqYXlCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMDRNSEI0SUMweE1USndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV1JwYzJzZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRPVFp3ZUNBdE1URXljSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFqWVd4bGJtUmhjaUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweE1USndlQ0F0TVRFeWNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMTZiMjl0YVc0Z2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNVEk0Y0hnZ0xURXhNbkI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0ZW05dmJXOTFkQ0I3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweE5EUndlQ0F0TVRFeWNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMXpaV0Z5WTJnZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNVFl3Y0hnZ0xURXhNbkI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0ZDNKbGJtTm9JSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRFM05uQjRJQzB4TVRKd2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXZGxZWElnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1Ua3ljSGdnTFRFeE1uQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RhR1ZoY25RZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRNakE0Y0hnZ0xURXhNbkI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0YzNSaGNpQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB5TWpSd2VDQXRNVEV5Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxc2FXNXJJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRJME1IQjRJQzB4TVRKd2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXTmhibU5sYkNCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklEQndlQ0F0TVRJNGNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMXdiSFZ6SUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xURTJjSGdnTFRFeU9IQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RjR3gxYzNSb2FXTnJJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRNeWNIZ2dMVEV5T0hCNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dGJXbHVkWE1nZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE5EaHdlQ0F0TVRJNGNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMXRhVzUxYzNSb2FXTnJJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRZMGNIZ2dMVEV5T0hCNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dGEyVjVJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRnd2NIZ2dMVEV5T0hCNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dGJHbG5hSFJpZFd4aUlIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVGsyY0hnZ0xURXlPSEI0T3lCOVhGeHVJQ0F1YVdOdmJuTXRZMnd1YVdOdmJuTXRZMnd0YzJOcGMzTnZjbk1nZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1URXljSGdnTFRFeU9IQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RZMnhwY0dKdllYSmtJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRFeU9IQjRJQzB4TWpod2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXTnZjSGtnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1UUTBjSGdnTFRFeU9IQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RZMjl1ZEdGamRDQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzB4TmpCd2VDQXRNVEk0Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxcGJXRm5aU0I3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweE56WndlQ0F0TVRJNGNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMTJhV1JsYnlCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHhPVEp3ZUNBdE1USTRjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzF6WTNKcGNIUWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TWpBNGNIZ2dMVEV5T0hCNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFkyeHZjMlVnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE9EQndlQ0F0TVRJNGNIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMWpiRzl6WlhSb2FXTnJJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRrMmNIZ2dMVEV5T0hCNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFlXeGxjblFnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBd2NIZ2dMVEUwTkhCNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dGFXNW1ieUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweE5uQjRJQzB4TkRSd2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xXNXZkR2xqWlNCN1hGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHpNbkI0SUMweE5EUndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMV2hsYkhBZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRORGh3ZUNBdE1UUTBjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzFqYUdWamF5QjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzAyTkhCNElDMHhORFJ3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFdKMWJHeGxkQ0I3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMwNE1IQjRJQzB4TkRSd2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xYSmhaR2x2TFc5bVppQjdYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJQzA1Tm5CNElDMHhORFJ3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFhKaFpHbHZMVzl1SUh0Y1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0xURXhNbkI0SUMweE5EUndlRHNnZlZ4Y2JpQWdMbWxqYjI1ekxXTnNMbWxqYjI1ekxXTnNMWEJwYmkxM0lIdGNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dMVEV5T0hCNElDMHhORFJ3ZURzZ2ZWeGNiaUFnTG1samIyNXpMV05zTG1samIyNXpMV05zTFhCcGJpMXpJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRFME5IQjRJQzB4TkRSd2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xYQnNZWGtnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBd2NIZ2dMVEUyTUhCNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dGNHRjFjMlVnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1UWndlQ0F0TVRZd2NIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMXpaV1ZyTFc1bGVIUWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TXpKd2VDQXRNVFl3Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxelpXVnJMWEJ5WlhZZ2UxeGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXRORGh3ZUNBdE1UWXdjSGc3SUgxY1hHNGdJQzVwWTI5dWN5MWpiQzVwWTI5dWN5MWpiQzF6WldWckxXVnVaQ0I3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMwMk5IQjRJQzB4TmpCd2VEc2dmVnhjYmlBZ0xtbGpiMjV6TFdOc0xtbGpiMjV6TFdOc0xYTmxaV3N0Wm1seWMzUWdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0T0RCd2VDQXRNVFl3Y0hnN0lIMWNYRzRnSUM1cFkyOXVjeTFqYkM1cFkyOXVjeTFqYkMxemRHOXdJSHRjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTFRrMmNIZ2dMVEUyTUhCNE95QjlYRnh1SUNBdWFXTnZibk10WTJ3dWFXTnZibk10WTJ3dFpXcGxZM1FnZTF4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBdE1URXljSGdnTFRFMk1IQjRPeUI5WEZ4dUlDQXVhV052Ym5NdFkyd3VhV052Ym5NdFkyd3RkbTlzZFcxbExXOW1aaUI3WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMweE1qaHdlQ0F0TVRZd2NIZzdJSDFjWEc0Z0lDNXBZMjl1Y3kxamJDNXBZMjl1Y3kxamJDMTJiMngxYldVdGIyNGdlMXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF0TVRRMGNIZ2dMVEUyTUhCNE95QjlYRnh1WENJc0lGd2lYQ0lzZTF3aWRtVnljMmx2Ymx3aU9qTXNYQ0p6YjNWeVkyVnpYQ0k2VzF3aWQyVmljR0ZqYXpvdkx5NHZhV052Ym5NdWMyTnpjMXdpWFN4Y0ltNWhiV1Z6WENJNlcxMHNYQ0p0WVhCd2FXNW5jMXdpT2x3aVFVRkJRVHRGUVVORkxIRkNRVUZ4UWp0RlFVTnlRaXg1UkVGQmRVTTdSVUZEZGtNc1YwRkJWenRGUVVOWUxGbEJRVms3UlVGRFdpeG5Ra0ZCWjBJN1JVRkRhRUlzYTBKQlFXdENPMFZCUTJ4Q0xGVkJRVlVzUlVGQlFUdEZRVkJhTzBsQllVa3NkMEpCUVhkQ0xFVkJRVUU3UlVGaU5VSTdTVUZwUWtrc05FSkJRVFJDTEVWQlFVRTdSVUZxUW1oRE8wbEJjVUpKTERSQ1FVRm5ReXhGUVVGQk8wVkJja0p3UXp0SlFYbENTU3cwUWtGQlowTXNSVUZCUVR0RlFYcENjRU03U1VFMlFra3NORUpCUVdkRExFVkJRVUU3UlVFM1FuQkRPMGxCYVVOSkxEUkNRVUZuUXl4RlFVRkJPMFZCYWtOd1F6dEpRWEZEU1N3MFFrRkJaME1zUlVGQlFUdEZRWEpEY0VNN1NVRjVRMGtzTmtKQlFXZERMRVZCUVVFN1JVRjZRM0JETzBsQk5rTkpMRFpDUVVGblF5eEZRVUZCTzBWQk4wTndRenRKUVdsRVNTdzJRa0ZCWjBNc1JVRkJRVHRGUVdwRWNFTTdTVUYzUkVrc09FSkJRVzlETEVWQlFVRTdSVUY0UkhoRE8wbEJORVJKTEdkRFFVRnZReXhGUVVGQk8wVkJOVVI0UXp0SlFXZEZTU3huUTBGQmIwTXNSVUZCUVR0RlFXaEZlRU03U1VGdlJVa3NaME5CUVc5RExFVkJRVUU3UlVGd1JYaERPMGxCZVVWSkxHZERRVUZ2UXl4RlFVRkJPMFZCZWtWNFF6dEpRVGhGU1N4blEwRkJiME1zUlVGQlFUdEZRVGxGZUVNN1NVRnRSa2tzWjBOQlFXOURMRVZCUVVFN1JVRnVSbmhETzBsQmQwWkpMR2xEUVVGdlF5eEZRVUZCTzBWQmVFWjRRenRKUVRSR1NTeHBRMEZCYjBNc1JVRkJRVHRGUVRWR2VFTTdTVUZuUjBrc2FVTkJRVzlETEVWQlFVRTdSVUZvUjNoRE8wbEJkVWRKTERoQ1FVRnZReXhGUVVGQk8wVkJka2Q0UXp0SlFUSkhTU3huUTBGQmIwTXNSVUZCUVR0RlFUTkhlRU03U1VFclIwa3NaME5CUVc5RExFVkJRVUU3UlVFdlIzaERPMGxCYlVoSkxHZERRVUZ2UXl4RlFVRkJPMFZCYmtoNFF6dEpRWFZJU1N4blEwRkJiME1zUlVGQlFUdEZRWFpJZUVNN1NVRXlTRWtzWjBOQlFXOURMRVZCUVVFN1JVRXpTSGhETzBsQkswaEpMR2REUVVGdlF5eEZRVUZCTzBWQkwwaDRRenRKUVcxSlNTeHBRMEZCYjBNc1JVRkJRVHRGUVc1SmVFTTdTVUYzU1Vrc2FVTkJRVzlETEVWQlFVRTdSVUY0U1hoRE8wbEJORWxKTEdsRFFVRnZReXhGUVVGQk8wVkJOVWw0UXp0SlFXZEtTU3hwUTBGQmNVTXNSVUZCUVR0RlFXaEtla003U1VGdlNra3NhVU5CUVhGRExFVkJRVUU3UlVGd1NucERPMGxCZDBwSkxHbERRVUZ4UXl4RlFVRkJPMFZCZUVwNlF6dEpRVFpLU1N4cFEwRkJjVU1zUlVGQlFUdEZRVGRLZWtNN1NVRnBTMGtzYVVOQlFYRkRMRVZCUVVFN1JVRnFTM3BETzBsQmNVdEpMR2xEUVVGeFF5eEZRVUZCTzBWQmNrdDZRenRKUVRSTFNTdzRRa0ZCYjBNc1JVRkJRVHRGUVRWTGVFTTdTVUZuVEVrc1owTkJRVzlETEVWQlFVRTdSVUZvVEhoRE8wbEJiMHhKTEdkRFFVRnZReXhGUVVGQk8wVkJjRXg0UXp0SlFYZE1TU3huUTBGQmIwTXNSVUZCUVR0RlFYaE1lRU03U1VFMFRFa3NaME5CUVc5RExFVkJRVUU3UlVFMVRIaERPMGxCWjAxSkxHZERRVUZ2UXl4RlFVRkJPMFZCYUUxNFF6dEpRVzlOU1N4blEwRkJiME1zUlVGQlFUdEZRWEJOZUVNN1NVRjNUVWtzYVVOQlFXOURMRVZCUVVFN1JVRjRUWGhETzBsQk5FMUpMR2xEUVVGdlF5eEZRVUZCTzBWQk5VMTRRenRKUVdkT1NTeHBRMEZCYjBNc1JVRkJRVHRGUVdoT2VFTTdTVUZ2VGtrc2FVTkJRWEZETEVWQlFVRTdSVUZ3VG5wRE8wbEJkMDVKTEdsRFFVRnhReXhGUVVGQk8wVkJlRTU2UXp0SlFUUk9TU3hwUTBGQmNVTXNSVUZCUVR0RlFUVk9la003U1VGblQwa3NhVU5CUVhGRExFVkJRVUU3UlVGb1QzcERPMGxCYjA5SkxHbERRVUZ4UXl4RlFVRkJPMFZCY0U5NlF6dEpRWGRQU1N4cFEwRkJjVU1zUlVGQlFUdEZRWGhQZWtNN1NVRTRUMGtzT0VKQlFXOURMRVZCUVVFN1JVRTVUM2hETzBsQmExQkpMR2REUVVGdlF5eEZRVUZCTzBWQmJGQjRRenRKUVdkUlRTdzRRa0ZCY1VNc1JVRkJRVHRGUVdoUk0wTTdTVUZuVVUwc1owTkJRWEZETEVWQlFVRTdSVUZvVVRORE8wbEJaMUZOTEdkRFFVRnhReXhGUVVGQk8wVkJhRkV6UXp0SlFXZFJUU3huUTBGQmNVTXNSVUZCUVR0RlFXaFJNME03U1VGblVVMHNaME5CUVhGRExFVkJRVUU3UlVGb1VUTkRPMGxCWjFGTkxHZERRVUZ4UXl4RlFVRkJPMFZCYUZFelF6dEpRV2RSVFN4blEwRkJjVU1zUlVGQlFUdEZRV2hSTTBNN1NVRm5VVTBzYVVOQlFYRkRMRVZCUVVFN1JVRm9VVE5ETzBsQloxRk5MR2xEUVVGeFF5eEZRVUZCTzBWQmFGRXpRenRKUVdkUlRTeHBRMEZCY1VNc1JVRkJRVHRGUVdoUk0wTTdTVUZuVVUwc2FVTkJRWEZETEVWQlFVRTdSVUZvVVRORE8wbEJaMUZOTEdsRFFVRnhReXhGUVVGQk8wVkJhRkV6UXp0SlFXZFJUU3hwUTBGQmNVTXNSVUZCUVR0RlFXaFJNME03U1VGblVVMHNhVU5CUVhGRExFVkJRVUU3UlVGb1VUTkRPMGxCWjFGTkxHbERRVUZ4UXl4RlFVRkJPMFZCYUZFelF6dEpRV2RSVFN4cFEwRkJjVU1zUlVGQlFUdEZRV2hSTTBNN1NVRTRVVTBzSzBKQlFYTkRMRVZCUVVFN1JVRTVVVFZETzBsQk9GRk5MR2xEUVVGelF5eEZRVUZCTzBWQk9WRTFRenRKUVRoUlRTeHBRMEZCYzBNc1JVRkJRVHRGUVRsUk5VTTdTVUU0VVUwc2FVTkJRWE5ETEVWQlFVRTdSVUU1VVRWRE8wbEJPRkZOTEdsRFFVRnpReXhGUVVGQk8wVkJPVkUxUXp0SlFUaFJUU3hwUTBGQmMwTXNSVUZCUVR0RlFUbFJOVU03U1VFNFVVMHNhVU5CUVhORExFVkJRVUU3UlVFNVVUVkRPMGxCT0ZGTkxHdERRVUZ6UXl4RlFVRkJPMFZCT1ZFMVF6dEpRVGhSVFN4clEwRkJjME1zUlVGQlFUdEZRVGxSTlVNN1NVRTRVVTBzYTBOQlFYTkRMRVZCUVVFN1JVRTVVVFZETzBsQk9GRk5MR3REUVVGelF5eEZRVUZCTzBWQk9WRTFRenRKUVRoUlRTeHJRMEZCYzBNc1JVRkJRVHRGUVRsUk5VTTdTVUU0VVUwc2EwTkJRWE5ETEVWQlFVRTdSVUU1VVRWRE8wbEJPRkZOTEd0RFFVRnpReXhGUVVGQk8wVkJPVkUxUXp0SlFUaFJUU3hyUTBGQmMwTXNSVUZCUVR0RlFUbFJOVU03U1VFNFVVMHNhME5CUVhORExFVkJRVUU3UlVFNVVUVkRPMGxCTkZKTkxDdENRVUZ6UXl4RlFVRkJPMFZCTlZJMVF6dEpRVFJTVFN4cFEwRkJjME1zUlVGQlFUdEZRVFZTTlVNN1NVRTBVazBzYVVOQlFYTkRMRVZCUVVFN1JVRTFValZETzBsQk5GSk5MR2xEUVVGelF5eEZRVUZCTzBWQk5WSTFRenRKUVRSU1RTeHBRMEZCYzBNc1JVRkJRVHRGUVRWU05VTTdTVUUwVWswc2FVTkJRWE5ETEVWQlFVRTdSVUUxVWpWRE8wbEJORkpOTEdsRFFVRnpReXhGUVVGQk8wVkJOVkkxUXp0SlFUUlNUU3hyUTBGQmMwTXNSVUZCUVR0RlFUVlNOVU03U1VFMFVrMHNhME5CUVhORExFVkJRVUU3UlVFMVVqVkRPMGxCTkZKTkxHdERRVUZ6UXl4RlFVRkJPMFZCTlZJMVF6dEpRVFJTVFN4clEwRkJjME1zUlVGQlFUdEZRVFZTTlVNN1NVRTBVazBzYTBOQlFYTkRMRVZCUVVFN1JVRTFValZETzBsQk5GSk5MR3REUVVGelF5eEZRVUZCTzBWQk5WSTFRenRKUVRSU1RTeHJRMEZCYzBNc1JVRkJRVHRGUVRWU05VTTdTVUZ0VTBrc2FVTkJRV2xETEVWQlFVRTdSVUZ1VTNKRE8wbEJkVk5KTEdsRFFVRnBReXhGUVVGQk8wVkJkbE55UXp0SlFXbFVUU3dyUWtGQmVVTXNSVUZCUVR0RlFXcFVMME03U1VGcFZFMHNhVU5CUVhsRExFVkJRVUU3UlVGcVZDOURPMGxCYVZSTkxHbERRVUY1UXl4RlFVRkJPMFZCYWxRdlF6dEpRV2xVVFN4cFEwRkJlVU1zUlVGQlFUdEZRV3BVTDBNN1NVRnBWRTBzYVVOQlFYbERMRVZCUVVFN1JVRnFWQzlETzBsQmFWUk5MR2xEUVVGNVF5eEZRVUZCTzBWQmFsUXZRenRKUVdsVVRTeHBRMEZCZVVNc1JVRkJRVHRGUVdwVUwwTTdTVUZwVkUwc2EwTkJRWGxETEVWQlFVRTdSVUZxVkM5RE8wbEJhVlJOTEd0RFFVRjVReXhGUVVGQk8wVkJhbFF2UXp0SlFXbFVUU3hyUTBGQmVVTXNSVUZCUVR0RlFXcFVMME03U1VFMlZFMHNLMEpCUVRCRExFVkJRVUU3UlVFM1ZHaEVPMGxCTmxSTkxHbERRVUV3UXl4RlFVRkJPMFZCTjFSb1JEdEpRVFpVVFN4cFEwRkJNRU1zUlVGQlFUdEZRVGRVYUVRN1NVRTJWRTBzYVVOQlFUQkRMRVZCUVVFN1JVRTNWR2hFTzBsQk5sUk5MR2xEUVVFd1F5eEZRVUZCTzBWQk4xUm9SRHRKUVRaVVRTeHBRMEZCTUVNc1JVRkJRVHRGUVRkVWFFUTdTVUUyVkUwc2FVTkJRVEJETEVWQlFVRTdSVUUzVkdoRU8wbEJObFJOTEd0RFFVRXdReXhGUVVGQk8wVkJOMVJvUkR0SlFUWlVUU3hyUTBGQk1FTXNSVUZCUVR0RlFUZFVhRVE3U1VFMlZFMHNhME5CUVRCRExFVkJRVUZjSWl4Y0luTnZkWEpqWlhORGIyNTBaVzUwWENJNlcxd2lMbWxqYjI1ekxXTnNJSHRjWEhKY1hHNGdJR1JwYzNCc1lYazZJR2x1YkdsdVpTMWliRzlqYXp0Y1hISmNYRzRnSUdKaFkydG5jbTkxYm1RdGFXMWhaMlU2SUhWeWJDaHBiV0ZuWlhNdmFXTnZibk11Y0c1bktUdGNYSEpjWEc0Z0lIZHBaSFJvT2lBeE5uQjRPMXhjY2x4Y2JpQWdhR1ZwWjJoME9pQXhObkI0TzF4Y2NseGNiaUFnYjNabGNtWnNiM2M2SUdocFpHUmxianRjWEhKY1hHNGdJR052Ykc5eU9pQjBjbUZ1YzNCaGNtVnVkRHRjWEhKY1hHNGdJSEJoWkdScGJtYzZJREE3WEZ4eVhGeHVYRnh5WEZ4dUlDQXZMMXhjY2x4Y2JpQWdMeThnVW05M0lERmNYSEpjWEc0Z0lDOHZYRnh5WEZ4dUlDQW1MbWxqYjI1ekxXTnNMV05oY21WMExURXRiaUI3WEZ4eVhGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklEQWdNRHRjWEhKY1hHNGdJSDFjWEhKY1hHNWNYSEpjWEc0Z0lDWXVhV052Ym5NdFkyd3RZMkZ5WlhRdE1TMXVaU0I3WEZ4eVhGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklDMHhObkI0SURBN1hGeHlYRnh1SUNCOVhGeHlYRnh1WEZ4eVhGeHVJQ0FtTG1samIyNXpMV05zTFdOaGNtVjBMVEV0WlNCN1hGeHlYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJRElnS2lBdE1UWndlQ0F3TzF4Y2NseGNiaUFnZlZ4Y2NseGNibHhjY2x4Y2JpQWdKaTVwWTI5dWN5MWpiQzFqWVhKbGRDMHhMWE5sSUh0Y1hISmNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dNeUFxSUMweE5uQjRJREE3WEZ4eVhGeHVJQ0I5WEZ4eVhGeHVYRnh5WEZ4dUlDQW1MbWxqYjI1ekxXTnNMV05oY21WMExURXRjeUI3WEZ4eVhGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklEUWdLaUF0TVRad2VDQXdPMXhjY2x4Y2JpQWdmVnhjY2x4Y2JseGNjbHhjYmlBZ0ppNXBZMjl1Y3kxamJDMWpZWEpsZEMweExYTjNJSHRjWEhKY1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ05TQXFJQzB4Tm5CNElEQTdYRnh5WEZ4dUlDQjlYRnh5WEZ4dVhGeHlYRnh1SUNBbUxtbGpiMjV6TFdOc0xXTmhjbVYwTFRFdGR5QjdYRnh5WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SURZZ0tpQXRNVFp3ZUNBd08xeGNjbHhjYmlBZ2ZWeGNjbHhjYmx4Y2NseGNiaUFnSmk1cFkyOXVjeTFqYkMxallYSmxkQzB4TFc1M0lIdGNYSEpjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTnlBcUlDMHhObkI0SURBN1hGeHlYRnh1SUNCOVhGeHlYRnh1WEZ4eVhGeHVJQ0FtTG1samIyNXpMV05zTFdOaGNtVjBMVEl0YmkxeklIdGNYSEpjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nT0NBcUlDMHhObkI0SURBN1hGeHlYRnh1SUNCOVhGeHlYRnh1WEZ4eVhGeHVJQ0FtTG1samIyNXpMV05zTFdOaGNtVjBMVEl0WlMxM0lIdGNYSEpjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nT1NBcUlDMHhObkI0SURBN1hGeHlYRnh1SUNCOVhGeHlYRnh1WEZ4eVhGeHVJQ0F2TDF4Y2NseGNiaUFnTHk4Z1VtOTNJREpjWEhKY1hHNGdJQzh2WEZ4eVhGeHVJQ0FtTG1samIyNXpMV05zTFhSeWFXRnVaMnhsTFRFdGJpQjdYRnh5WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SURBZ0tpQXRNVFp3ZUNBdE1UWndlRHRjWEhKY1hHNGdJSDFjWEhKY1hHNWNYSEpjWEc0Z0lDWXVhV052Ym5NdFkyd3RkSEpwWVc1bmJHVXRNUzF1WlNCN1hGeHlYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJREVnS2lBdE1UWndlQ0F0TVRad2VEdGNYSEpjWEc0Z0lIMWNYSEpjWEc1Y1hISmNYRzRnSUNZdWFXTnZibk10WTJ3dGRISnBZVzVuYkdVdE1TMWxJSHRjWEhKY1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ01pQXFJQzB4Tm5CNElDMHhObkI0TzF4Y2NseGNiaUFnZlZ4Y2NseGNibHhjY2x4Y2JpQWdKaTVwWTI5dWN5MWpiQzEwY21saGJtZHNaUzB4TFhObElIdGNYSEpjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTXlBcUlDMHhObkI0SUMweE5uQjRPMXhjY2x4Y2JpQWdmVnhjY2x4Y2JseGNjbHhjYmx4Y2NseGNiaUFnSmk1cFkyOXVjeTFqYkMxMGNtbGhibWRzWlMweExYTWdlMXhjY2x4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBMElDb2dMVEUyY0hnZ0xURTJjSGc3WEZ4eVhGeHVJQ0I5WEZ4eVhGeHVYRnh5WEZ4dVhGeHlYRnh1SUNBbUxtbGpiMjV6TFdOc0xYUnlhV0Z1WjJ4bExURXRjM2NnZTF4Y2NseGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQTFJQ29nTFRFMmNIZ2dMVEUyY0hnN1hGeHlYRnh1SUNCOVhGeHlYRnh1WEZ4eVhGeHVYRnh5WEZ4dUlDQW1MbWxqYjI1ekxXTnNMWFJ5YVdGdVoyeGxMVEV0ZHlCN1hGeHlYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJRFlnS2lBdE1UWndlQ0F0TVRad2VEdGNYSEpjWEc0Z0lIMWNYSEpjWEc1Y1hISmNYRzVjWEhKY1hHNGdJQ1l1YVdOdmJuTXRZMnd0ZEhKcFlXNW5iR1V0TVMxdWR5QjdYRnh5WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SURjZ0tpQXRNVFp3ZUNBdE1UWndlRHRjWEhKY1hHNGdJSDFjWEhKY1hHNWNYSEpjWEc0Z0lDWXVhV052Ym5NdFkyd3RkSEpwWVc1bmJHVXRNaTF1TFhNZ2UxeGNjbHhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUE0SUNvZ0xURTJjSGdnTFRFMmNIZzdYRnh5WEZ4dUlDQjlYRnh5WEZ4dVhGeHlYRnh1SUNBbUxtbGpiMjV6TFdOc0xYUnlhV0Z1WjJ4bExUSXRaUzEzSUh0Y1hISmNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dPU0FxSUMweE5uQjRJQzB4Tm5CNE8xeGNjbHhjYmlBZ2ZWeGNjbHhjYmlBZ1hGeHlYRnh1SUNBdkwxeGNjbHhjYmlBZ0x5OGdVbTkzSUROY1hISmNYRzRnSUM4dlhGeHlYRnh1SUNBbUxtbGpiMjV6TFdOc0xXRnljbTkzTFRFdGJpQjdYRnh5WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SURBZ0tpQXRNVFp3ZUNBdE16SndlRHRjWEhKY1hHNGdJSDFjWEhKY1hHNWNYSEpjWEc0Z0lDWXVhV052Ym5NdFkyd3RZWEp5YjNjdE1TMXVaU0I3WEZ4eVhGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklERWdLaUF0TVRad2VDQXRNekp3ZUR0Y1hISmNYRzRnSUgxY1hISmNYRzVjWEhKY1hHNGdJQ1l1YVdOdmJuTXRZMnd0WVhKeWIzY3RNUzFsSUh0Y1hISmNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dNaUFxSUMweE5uQjRJQzB6TW5CNE8xeGNjbHhjYmlBZ2ZWeGNjbHhjYmx4Y2NseGNiaUFnSmk1cFkyOXVjeTFqYkMxaGNuSnZkeTB4TFhObElIdGNYSEpjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTXlBcUlDMHhObkI0SUMwek1uQjRPMXhjY2x4Y2JpQWdmVnhjY2x4Y2JseGNjbHhjYmlBZ0ppNXBZMjl1Y3kxamJDMWhjbkp2ZHkweExYTWdlMXhjY2x4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBMElDb2dMVEUyY0hnZ0xUTXljSGc3WEZ4eVhGeHVJQ0I5WEZ4eVhGeHVYRnh5WEZ4dUlDQW1MbWxqYjI1ekxXTnNMV0Z5Y205M0xURXRjM2NnZTF4Y2NseGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQTFJQ29nTFRFMmNIZ2dMVE15Y0hnN1hGeHlYRnh1SUNCOVhGeHlYRnh1WEZ4eVhGeHVJQ0FtTG1samIyNXpMV05zTFdGeWNtOTNMVEV0ZHlCN1hGeHlYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJRFlnS2lBdE1UWndlQ0F0TXpKd2VEdGNYSEpjWEc0Z0lIMWNYSEpjWEc1Y1hISmNYRzRnSUNZdWFXTnZibk10WTJ3dFlYSnliM2N0TVMxdWR5QjdYRnh5WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SURjZ0tpQXRNVFp3ZUNBdE16SndlRHRjWEhKY1hHNGdJSDFjWEhKY1hHNWNYSEpjWEc1Y1hISmNYRzRnSUNZdWFXTnZibk10WTJ3dFlYSnliM2N0TWkxdUxYTWdlMXhjY2x4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBNElDb2dMVEUyY0hnZ0xUTXljSGc3WEZ4eVhGeHVJQ0I5WEZ4eVhGeHVYRnh5WEZ4dUlDQW1MbWxqYjI1ekxXTnNMV0Z5Y205M0xUSXRibVV0YzNjZ2UxeGNjbHhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUE1SUNvZ0xURTJjSGdnTFRNeWNIZzdYRnh5WEZ4dUlDQjlYRnh5WEZ4dVhGeHlYRnh1SUNBbUxtbGpiMjV6TFdOc0xXRnljbTkzTFRJdFpTMTNJSHRjWEhKY1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ01UQWdLaUF0TVRad2VDQXRNekp3ZUR0Y1hISmNYRzRnSUgxY1hISmNYRzVjWEhKY1hHNGdJQ1l1YVdOdmJuTXRZMnd0WVhKeWIzY3RNaTF6WlMxdWR5QjdYRnh5WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SURFeElDb2dMVEUyY0hnZ0xUTXljSGc3WEZ4eVhGeHVJQ0I5WEZ4eVhGeHVYRnh5WEZ4dUlDQW1MbWxqYjI1ekxXTnNMV0Z5Y205M2MzUnZjQzB4TFc0Z2UxeGNjbHhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF4TWlBcUlDMHhObkI0SUMwek1uQjRPMXhjY2x4Y2JpQWdmVnhjY2x4Y2JseGNjbHhjYmx4Y2NseGNiaUFnSmk1cFkyOXVjeTFqYkMxaGNuSnZkM04wYjNBdE1TMWxJSHRjWEhKY1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ01UTWdLaUF0TVRad2VDQXRNekp3ZUR0Y1hISmNYRzRnSUgxY1hISmNYRzVjWEhKY1hHNGdJQ1l1YVdOdmJuTXRZMnd0WVhKeWIzZHpkRzl3TFRFdGN5QjdYRnh5WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SURFMElDb2dMVEUyY0hnZ0xUTXljSGc3WEZ4eVhGeHVJQ0I5WEZ4eVhGeHVYRnh5WEZ4dUlDQW1MbWxqYjI1ekxXTnNMV0Z5Y205M2MzUnZjQzB4TFhjZ2UxeGNjbHhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF4TlNBcUlDMHhObkI0SUMwek1uQjRPMXhjY2x4Y2JpQWdmVnhjY2x4Y2JseGNjbHhjYmlBZ0x5OWNYSEpjWEc0Z0lDOHZJRkp2ZHlBMFhGeHlYRnh1SUNBdkwxeGNjbHhjYmlBZ0ppNXBZMjl1Y3kxamJDMWhjbkp2ZDNSb2FXTnJMVEV0YmlCN1hGeHlYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJREFnS2lBdE1UWndlQ0F0TkRod2VEdGNYSEpjWEc0Z0lIMWNYSEpjWEc1Y1hISmNYRzRnSUNZdWFXTnZibk10WTJ3dFlYSnliM2QwYUdsamF5MHhMVzVsSUh0Y1hISmNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dNU0FxSUMweE5uQjRJQzAwT0hCNE8xeGNjbHhjYmlBZ2ZWeGNjbHhjYmx4Y2NseGNiaUFnSmk1cFkyOXVjeTFqYkMxaGNuSnZkM1JvYVdOckxURXRaU0I3WEZ4eVhGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklESWdLaUF0TVRad2VDQXRORGh3ZUR0Y1hISmNYRzRnSUgxY1hISmNYRzVjWEhKY1hHNGdJQ1l1YVdOdmJuTXRZMnd0WVhKeWIzZDBhR2xqYXkweExYTmxJSHRjWEhKY1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ015QXFJQzB4Tm5CNElDMDBPSEI0TzF4Y2NseGNiaUFnZlZ4Y2NseGNibHhjY2x4Y2JpQWdKaTVwWTI5dWN5MWpiQzFoY25KdmQzUm9hV05yTFRFdGN5QjdYRnh5WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SURRZ0tpQXRNVFp3ZUNBdE5EaHdlRHRjWEhKY1hHNGdJSDFjWEhKY1hHNWNYSEpjWEc0Z0lDWXVhV052Ym5NdFkyd3RZWEp5YjNkMGFHbGpheTB4TFhOM0lIdGNYSEpjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTlNBcUlDMHhObkI0SUMwME9IQjRPMXhjY2x4Y2JpQWdmVnhjY2x4Y2JseGNjbHhjYmlBZ0ppNXBZMjl1Y3kxamJDMWhjbkp2ZDNSb2FXTnJMVEV0ZHlCN1hGeHlYRnh1SUNBZ0lHSmhZMnRuY205MWJtUXRjRzl6YVhScGIyNDZJRFlnS2lBdE1UWndlQ0F0TkRod2VEdGNYSEpjWEc0Z0lIMWNYSEpjWEc1Y1hISmNYRzRnSUNZdWFXTnZibk10WTJ3dFlYSnliM2QwYUdsamF5MHhMVzUzSUh0Y1hISmNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dOeUFxSUMweE5uQjRJQzAwT0hCNE8xeGNjbHhjYmlBZ2ZWeGNjbHhjYmx4Y2NseGNiaUFnSmk1cFkyOXVjeTFqYkMxaGNuSnZkM1JvYVdOckxUSXRiaTF6SUh0Y1hISmNYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMXdiM05wZEdsdmJqb2dPQ0FxSUMweE5uQjRJQzAwT0hCNE8xeGNjbHhjYmlBZ2ZWeGNjbHhjYmx4Y2NseGNiaUFnSmk1cFkyOXVjeTFqYkMxaGNuSnZkM1JvYVdOckxUSXRibVV0YzNjZ2UxeGNjbHhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUE1SUNvZ0xURTJjSGdnTFRRNGNIZzdYRnh5WEZ4dUlDQjlYRnh5WEZ4dVhGeHlYRnh1SUNBbUxtbGpiMjV6TFdOc0xXRnljbTkzZEdocFkyc3RNaTFsTFhjZ2UxeGNjbHhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF4TUNBcUlDMHhObkI0SUMwME9IQjRPMXhjY2x4Y2JpQWdmVnhjY2x4Y2JseGNjbHhjYmlBZ0ppNXBZMjl1Y3kxamJDMWhjbkp2ZDNSb2FXTnJMVEl0YzJVdGJuY2dlMXhjY2x4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBeE1TQXFJQzB4Tm5CNElDMDBPSEI0TzF4Y2NseGNiaUFnZlZ4Y2NseGNibHhjY2x4Y2JpQWdKaTVwWTI5dWN5MWpiQzFoY25KdmQzUm9hV05yYzNSdmNDMHhMVzRnZTF4Y2NseGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXhNaUFxSUMweE5uQjRJQzAwT0hCNE8xeGNjbHhjYmlBZ2ZWeGNjbHhjYmx4Y2NseGNiaUFnSmk1cFkyOXVjeTFqYkMxaGNuSnZkM1JvYVdOcmMzUnZjQzB4TFdVZ2UxeGNjbHhjYmlBZ0lDQmlZV05yWjNKdmRXNWtMWEJ2YzJsMGFXOXVPaUF4TXlBcUlDMHhObkI0SUMwME9IQjRPMXhjY2x4Y2JpQWdmVnhjY2x4Y2JseGNjbHhjYmlBZ0ppNXBZMjl1Y3kxamJDMWhjbkp2ZDNSb2FXTnJjM1J2Y0MweExYTWdlMXhjY2x4Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBeE5DQXFJQzB4Tm5CNElDMDBPSEI0TzF4Y2NseGNiaUFnZlZ4Y2NseGNibHhjY2x4Y2JpQWdKaTVwWTI5dWN5MWpiQzFoY25KdmQzUm9hV05yYzNSdmNDMHhMWGNnZTF4Y2NseGNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xYQnZjMmwwYVc5dU9pQXhOU0FxSUMweE5uQjRJQzAwT0hCNE8xeGNjbHhjYmlBZ2ZWeGNjbHhjYmx4Y2NseGNiaUFnTHk5Y1hISmNYRzRnSUM4dklGSnZkeUExWEZ4eVhGeHVJQ0FtTG1samIyNXpMV05zTFdGeWNtOTNjbVYwZFhKdWRHaHBZMnN0TVMxM0lIdGNYSEpjWEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nTUNBcUlDMHhObkI0SUMwMk5IQjRPMXhjY2x4Y2JpQWdmVnhjY2x4Y2JseGNjbHhjYmlBZ0ppNXBZMjl1Y3kxamJDMWhjbkp2ZDNKbGRIVnliblJvYVdOckxURXRaU0I3WEZ4eVhGeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGNHOXphWFJwYjI0NklESWdLaUF0TVRad2VDQXROalJ3ZUR0Y1hISmNYRzRnSUgxY1hISmNYRzVjWEhKY1hHNGdJQzh2SUhWcExXbGpiMjR0WVhKeWIzZHlaWFIxY201MGFHbGpheTB4TFc0Z0lIVnBMV2xqYjI0dFlYSnliM2R5WlhSMWNtNTBhR2xqYXkweExYTWdJSFZwTFdsamIyNHRZWEp5YjNkeVpYUjFjbTR0TVMxM0lDQjFhUzFwWTI5dUxXRnljbTkzY21WMGRYSnVMVEV0YmlBZ2RXa3RhV052YmkxaGNuSnZkM0psZEhWeWJpMHhMV1VnSUhWcExXbGpiMjR0WVhKeWIzZHlaWFIxY200dE1TMXpJQ0IxYVMxcFkyOXVMV0Z5Y205M2NtVm1jbVZ6YUMweExYY2dJSFZwTFdsamIyNHRZWEp5YjNkeVpXWnlaWE5vTFRFdGJpQWdkV2t0YVdOdmJpMWhjbkp2ZDNKbFpuSmxjMmd0TVMxbElDQjFhUzFwWTI5dUxXRnljbTkzY21WbWNtVnphQzB4TFhOY1hISmNYRzRnSUM4dklIVnBMV2xqYjI0dFlYSnliM2N0TkNBZ2RXa3RhV052YmkxaGNuSnZkeTAwTFdScFlXY2dJSFZwTFdsamIyNHRaWGgwYkdsdWF5QWdkV2t0YVdOdmJpMXVaWGQzYVc0Z0lIVnBMV2xqYjI0dGNtVm1jbVZ6YUNBZ2RXa3RhV052YmkxemFIVm1abXhsSUNCMWFTMXBZMjl1TFhSeVlXNXpabVZ5TFdVdGR5QWdkV2t0YVdOdmJpMTBjbUZ1YzJabGNuUm9hV05yTFdVdGQxeGNjbHhjYmx4Y2NseGNiaUFnTHk5Y1hISmNYRzRnSUM4dklGSnZkeUEyWEZ4eVhGeHVJQ0F2TDF4Y2NseGNiaUFnSkd4cGMzUTZJR1p2YkdSbGNpMWpiMnhzWVhCelpXUWdabTlzWkdWeUxXOXdaVzRnWkc5amRXMWxiblFnWkc5amRXMWxiblF0WWlCdWIzUmxJRzFoYVd3dFkyeHZjMlZrSUcxaGFXd3RiM0JsYmlCemRXbDBZMkZ6WlNCamIyMXRaVzUwSUhCbGNuTnZiaUJ3Y21sdWRDQjBjbUZ6YUNCc2IyTnJaV1FnZFc1c2IyTnJaV1FnWW05dmEyMWhjbXNnZEdGbk8xeGNjbHhjYmlBZ0pIZzZJREE3WEZ4eVhGeHVYRnh5WEZ4dUlDQkFaV0ZqYUNBa2FYUmxiU0JwYmlBa2JHbHpkQ0I3WEZ4eVhGeHVJQ0FnSUNZdWFXTnZibk10WTJ3dEkzc2thWFJsYlgwZ2UxeGNjbHhjYmlBZ0lDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUNSNElDb2dMVEUyY0hnZ0xUazJjSGhjWEhKY1hHNGdJQ0FnZlZ4Y2NseGNibHhjY2x4Y2JpQWdJQ0FrZURvZ0pIZ3JNVHRjWEhKY1hHNGdJSDFjWEhKY1hHNWNYSEpjWEc0Z0lDOHZYRnh5WEZ4dUlDQXZMeUJTYjNjZ04xeGNjbHhjYmlBZ0x5OWNYSEpjWEc0Z0lDUnNhWE4wT2lCb2IyMWxJR1pzWVdjZ1kyRnNZM1ZzWVhSdmNpQmpZWEowSUhCbGJtTnBiQ0JqYkc5amF5QmthWE5ySUdOaGJHVnVaR0Z5SUhwdmIyMXBiaUI2YjI5dGIzVjBJSE5sWVhKamFDQjNjbVZ1WTJnZ1oyVmhjaUJvWldGeWRDQnpkR0Z5SUd4cGJtczdYRnh5WEZ4dUlDQWtlRG9nTUR0Y1hISmNYRzVjWEhKY1hHNGdJRUJsWVdOb0lDUnBkR1Z0SUdsdUlDUnNhWE4wSUh0Y1hISmNYRzRnSUNBZ0ppNXBZMjl1Y3kxamJDMGpleVJwZEdWdGZTQjdYRnh5WEZ4dUlDQWdJQ0FnWW1GamEyZHliM1Z1WkMxd2IzTnBkR2x2YmpvZ0pIZ2dLaUF0TVRad2VDQXRNVEV5Y0hoY1hISmNYRzRnSUNBZ2ZWeGNjbHhjYmx4Y2NseGNiaUFnSUNBa2VEb2dKSGdyTVR0Y1hISmNYRzRnSUgxY1hISmNYRzVjWEhKY1hHNGdJQzh2WEZ4eVhGeHVJQ0F2THlCU2IzY2dPRnhjY2x4Y2JpQWdMeTljWEhKY1hHNGdJQ1JzYVhOME9pQmpZVzVqWld3Z0lIQnNkWE1nSUhCc2RYTjBhR2xqYXlBZ2JXbHVkWE1nSUcxcGJuVnpkR2hwWTJzZ0lHdGxlU0FnYkdsbmFIUmlkV3hpSUNCelkybHpjMjl5Y3lBZ1kyeHBjR0p2WVhKa0lDQmpiM0I1SUNCamIyNTBZV04wSUNCcGJXRm5aU0FnZG1sa1pXOGdJSE5qY21sd2REdGNYSEpjWEc0Z0lDUjRPaUF3TzF4Y2NseGNibHhjY2x4Y2JpQWdRR1ZoWTJnZ0pHbDBaVzBnYVc0Z0pHeHBjM1FnZTF4Y2NseGNiaUFnSUNBbUxtbGpiMjV6TFdOc0xTTjdKR2wwWlcxOUlIdGNYSEpjWEc0Z0lDQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBa2VDQXFJQzB4Tm5CNElDMHhNamh3ZUZ4Y2NseGNiaUFnSUNCOVhGeHlYRnh1WEZ4eVhGeHVJQ0FnSUNSNE9pQWtlQ3N4TzF4Y2NseGNiaUFnZlZ4Y2NseGNibHhjY2x4Y2JpQWdKaTVwWTI5dWN5MWpiQzFqYkc5elpTQjdYRnh5WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMwNE1IQjRJQzB4TWpod2VEdGNYSEpjWEc0Z0lIMWNYSEpjWEc1Y1hISmNYRzRnSUNZdWFXTnZibk10WTJ3dFkyeHZjMlYwYUdsamF5QjdYRnh5WEZ4dUlDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUMwNU5uQjRJQzB4TWpod2VEdGNYSEpjWEc0Z0lIMWNYSEpjWEc0Z0lDOHZJSFZwTFdsamIyNHRZMkZ1WTJWc0lDQjFhUzFwWTI5dUxYQnNkWE1nSUhWcExXbGpiMjR0Y0d4MWMzUm9hV05ySUNCMWFTMXBZMjl1TFcxcGJuVnpJQ0IxYVMxcFkyOXVMVzFwYm5WemRHaHBZMnNnSUhWcExXbGpiMjR0YTJWNUlDQjFhUzFwWTI5dUxXeHBaMmgwWW5Wc1lpQWdkV2t0YVdOdmJpMXpZMmx6YzI5eWN5QWdkV2t0YVdOdmJpMWpiR2x3WW05aGNtUWdJSFZwTFdsamIyNHRZMjl3ZVNBZ2RXa3RhV052YmkxamIyNTBZV04wSUNCMWFTMXBZMjl1TFdsdFlXZGxJQ0IxYVMxcFkyOXVMWFpwWkdWdklDQjFhUzFwWTI5dUxYTmpjbWx3ZEZ4Y2NseGNibHhjY2x4Y2JpQWdMeThnVW05M0lEbGNYSEpjWEc0Z0lDUnNhWE4wT2lCaGJHVnlkQ0JwYm1adklDQnViM1JwWTJVZ2FHVnNjQ0JqYUdWamF5QWdZblZzYkdWMElDQnlZV1JwYnkxdlptWWdJSEpoWkdsdkxXOXVJQ0J3YVc0dGR5QWdjR2x1TFhNN1hGeHlYRnh1SUNBa2VEb2dNRHRjWEhKY1hHNWNYSEpjWEc0Z0lFQmxZV05vSUNScGRHVnRJR2x1SUNSc2FYTjBJSHRjWEhKY1hHNGdJQ0FnSmk1cFkyOXVjeTFqYkMwamV5UnBkR1Z0ZlNCN1hGeHlYRnh1SUNBZ0lDQWdZbUZqYTJkeWIzVnVaQzF3YjNOcGRHbHZiam9nSkhnZ0tpQXRNVFp3ZUNBNUlDb2dMVEUyY0hoY1hISmNYRzRnSUNBZ2ZWeGNjbHhjYmx4Y2NseGNiaUFnSUNBa2VEb2dKSGdyTVR0Y1hISmNYRzRnSUgxY1hISmNYRzVjWEhKY1hHNGdJQzh2SUNCU2IzY2dNVEJjWEhKY1hHNGdJQ1JzYVhOME9pQndiR0Y1SUhCaGRYTmxJSE5sWldzdGJtVjRkQ0FnYzJWbGF5MXdjbVYySUNCelpXVnJMV1Z1WkNBZ2MyVmxheTFtYVhKemRDQWdjM1J2Y0NBZ1pXcGxZM1FnSUhadmJIVnRaUzF2Wm1ZZ0lIWnZiSFZ0WlMxdmJqdGNYSEpjWEc0Z0lDUjRPaUF3TzF4Y2NseGNibHhjY2x4Y2JpQWdRR1ZoWTJnZ0pHbDBaVzBnYVc0Z0pHeHBjM1FnZTF4Y2NseGNiaUFnSUNBbUxtbGpiMjV6TFdOc0xTTjdKR2wwWlcxOUlIdGNYSEpjWEc0Z0lDQWdJQ0JpWVdOclozSnZkVzVrTFhCdmMybDBhVzl1T2lBa2VDQXFJQzB4Tm5CNElERXdJQ29nTFRFMmNIaGNYSEpjWEc0Z0lDQWdmVnhjY2x4Y2JseGNjbHhjYmlBZ0lDQWtlRG9nSkhnck1UdGNYSEpjWEc0Z0lIMWNYSEpjWEc1Y1hISmNYRzRnTHk4Z2RXa3RhV052Ymkxd2IzZGxjaUFnZFdrdGFXTnZiaTF6YVdkdVlXd3RaR2xoWnlBZ2RXa3RhV052YmkxemFXZHVZV3dnSUhWcExXbGpiMjR0WW1GMGRHVnllUzB3SUNCMWFTMXBZMjl1TFdKaGRIUmxjbmt0TVNBZ2RXa3RhV052YmkxaVlYUjBaWEo1TFRJZ0lIVnBMV2xqYjI0dFltRjBkR1Z5ZVMwelhGeHlYRnh1SUNBdkx5QjFhUzFwWTI5dUxXTnBjbU5zWlMxd2JIVnpJQ0IxYVMxcFkyOXVMV05wY21Oc1pTMXRhVzUxY3lBZ2RXa3RhV052YmkxamFYSmpiR1V0WTJ4dmMyVWdJSFZwTFdsamIyNHRZMmx5WTJ4bExYUnlhV0Z1WjJ4bExXVWdJSFZwTFdsamIyNHRZMmx5WTJ4bExYUnlhV0Z1WjJ4bExYTWdJSFZwTFdsamIyNHRZMmx5WTJ4bExYUnlhV0Z1WjJ4bExYY2dJSFZwTFdsamIyNHRZMmx5WTJ4bExYUnlhV0Z1WjJ4bExXNGdJSFZwTFdsamIyNHRZMmx5WTJ4bExXRnljbTkzTFdVZ0lIVnBMV2xqYjI0dFkybHlZMnhsTFdGeWNtOTNMWE1nSUhWcExXbGpiMjR0WTJseVkyeGxMV0Z5Y205M0xYY2dJSFZwTFdsamIyNHRZMmx5WTJ4bExXRnljbTkzTFc0Z0lIVnBMV2xqYjI0dFkybHlZMnhsTFhwdmIyMXBiaUFnZFdrdGFXTnZiaTFqYVhKamJHVXRlbTl2Ylc5MWRDQWdkV2t0YVdOdmJpMWphWEpqYkdVdFkyaGxZMnRjWEhKY1hHNHZMeUIxYVMxcFkyOXVMV05wY21Oc1pYTnRZV3hzTFhCc2RYTWdJSFZwTFdsamIyNHRZMmx5WTJ4bGMyMWhiR3d0YldsdWRYTWdJSFZwTFdsamIyNHRZMmx5WTJ4bGMyMWhiR3d0WTJ4dmMyVWdJSFZwTFdsamIyNHRjM0YxWVhKbGMyMWhiR3d0Y0d4MWN5QWdkV2t0YVdOdmJpMXpjWFZoY21WemJXRnNiQzF0YVc1MWN5QWdkV2t0YVdOdmJpMXpjWFZoY21WemJXRnNiQzFqYkc5elpWeGNjbHhjYmk4dklIVnBMV2xqYjI0dFozSnBjQzFrYjNSMFpXUXRkbVZ5ZEdsallXd2dJSFZwTFdsamIyNHRaM0pwY0Mxa2IzUjBaV1F0YUc5eWFYcHZiblJoYkNBZ2RXa3RhV052YmkxbmNtbHdMWE52Ykdsa0xYWmxjblJwWTJGc0lDQjFhUzFwWTI5dUxXZHlhWEF0YzI5c2FXUXRhRzl5YVhwdmJuUmhiQ0FnZFdrdGFXTnZiaTFuY21sd2MyMWhiR3d0WkdsaFoyOXVZV3d0YzJVZ0lIVnBMV2xqYjI0dFozSnBjQzFrYVdGbmIyNWhiQzF6WlZ4Y2NseGNibHhjY2x4Y2JuMWNYSEpjWEc1Y0lsMHNYQ0p6YjNWeVkyVlNiMjkwWENJNlhDSmNJbjFkS1R0Y2JpOHZJRVY0Y0c5eWRITmNibVY0Y0c5eWRDQmtaV1poZFd4MElGOWZYME5UVTE5TVQwRkVSVkpmUlZoUVQxSlVYMTlmTzF4dUlpd2lYQ0oxYzJVZ2MzUnlhV04wWENJN1hHNWNiaThxWEc0Z0lFMUpWQ0JNYVdObGJuTmxJR2gwZEhBNkx5OTNkM2N1YjNCbGJuTnZkWEpqWlM1dmNtY3ZiR2xqWlc1elpYTXZiV2wwTFd4cFkyVnVjMlV1Y0dod1hHNGdJRUYxZEdodmNpQlViMkpwWVhNZ1MyOXdjR1Z5Y3lCQWMyOXJjbUZjYmlvdlhHNHZMeUJqYzNNZ1ltRnpaU0JqYjJSbExDQnBibXBsWTNSbFpDQmllU0IwYUdVZ1kzTnpMV3h2WVdSbGNseHVMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRibVY0ZEMxc2FXNWxJR1oxYm1NdGJtRnRaWE5jYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnS0dOemMxZHBkR2hOWVhCd2FXNW5WRzlUZEhKcGJtY3BJSHRjYmlBZ2RtRnlJR3hwYzNRZ1BTQmJYVHNnTHk4Z2NtVjBkWEp1SUhSb1pTQnNhWE4wSUc5bUlHMXZaSFZzWlhNZ1lYTWdZM056SUhOMGNtbHVaMXh1WEc0Z0lHeHBjM1F1ZEc5VGRISnBibWNnUFNCbWRXNWpkR2x2YmlCMGIxTjBjbWx1WnlncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXRZWEFvWm5WdVkzUnBiMjRnS0dsMFpXMHBJSHRjYmlBZ0lDQWdJSFpoY2lCamIyNTBaVzUwSUQwZ1kzTnpWMmwwYUUxaGNIQnBibWRVYjFOMGNtbHVaeWhwZEdWdEtUdGNibHh1SUNBZ0lDQWdhV1lnS0dsMFpXMWJNbDBwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUZ3aVFHMWxaR2xoSUZ3aUxtTnZibU5oZENocGRHVnRXekpkTENCY0lpQjdYQ0lwTG1OdmJtTmhkQ2hqYjI1MFpXNTBMQ0JjSW4xY0lpazdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQmpiMjUwWlc1ME8xeHVJQ0FnSUgwcExtcHZhVzRvWENKY0lpazdYRzRnSUgwN0lDOHZJR2x0Y0c5eWRDQmhJR3hwYzNRZ2IyWWdiVzlrZFd4bGN5QnBiblJ2SUhSb1pTQnNhWE4wWEc0Z0lDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXNWxlSFF0YkdsdVpTQm1kVzVqTFc1aGJXVnpYRzVjYmx4dUlDQnNhWE4wTG1rZ1BTQm1kVzVqZEdsdmJpQW9iVzlrZFd4bGN5d2diV1ZrYVdGUmRXVnllU3dnWkdWa2RYQmxLU0I3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJ0YjJSMWJHVnpJRDA5UFNCY0luTjBjbWx1WjF3aUtTQjdYRzRnSUNBZ0lDQXZMeUJsYzJ4cGJuUXRaR2x6WVdKc1pTMXVaWGgwTFd4cGJtVWdibTh0Y0dGeVlXMHRjbVZoYzNOcFoyNWNiaUFnSUNBZ0lHMXZaSFZzWlhNZ1BTQmJXMjUxYkd3c0lHMXZaSFZzWlhNc0lGd2lYQ0pkWFR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0IyWVhJZ1lXeHlaV0ZrZVVsdGNHOXlkR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnSUNBZ2FXWWdLR1JsWkhWd1pTa2dlMXh1SUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0IwYUdsekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUM4dklHVnpiR2x1ZEMxa2FYTmhZbXhsTFc1bGVIUXRiR2x1WlNCd2NtVm1aWEl0WkdWemRISjFZM1IxY21sdVoxeHVJQ0FnSUNBZ0lDQjJZWElnYVdRZ1BTQjBhR2x6VzJsZFd6QmRPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHBaQ0FoUFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ1lXeHlaV0ZrZVVsdGNHOXlkR1ZrVFc5a2RXeGxjMXRwWkYwZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWm05eUlDaDJZWElnWDJrZ1BTQXdPeUJmYVNBOElHMXZaSFZzWlhNdWJHVnVaM1JvT3lCZmFTc3JLU0I3WEc0Z0lDQWdJQ0IyWVhJZ2FYUmxiU0E5SUZ0ZExtTnZibU5oZENodGIyUjFiR1Z6VzE5cFhTazdYRzVjYmlBZ0lDQWdJR2xtSUNoa1pXUjFjR1VnSmlZZ1lXeHlaV0ZrZVVsdGNHOXlkR1ZrVFc5a2RXeGxjMXRwZEdWdFd6QmRYU2tnZTF4dUlDQWdJQ0FnSUNBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxdVpYaDBMV3hwYm1VZ2JtOHRZMjl1ZEdsdWRXVmNiaUFnSUNBZ0lDQWdZMjl1ZEdsdWRXVTdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR2xtSUNodFpXUnBZVkYxWlhKNUtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNnaGFYUmxiVnN5WFNrZ2UxeHVJQ0FnSUNBZ0lDQWdJR2wwWlcxYk1sMGdQU0J0WldScFlWRjFaWEo1TzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lHbDBaVzFiTWwwZ1BTQmNJbHdpTG1OdmJtTmhkQ2h0WldScFlWRjFaWEo1TENCY0lpQmhibVFnWENJcExtTnZibU5oZENocGRHVnRXekpkS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnNhWE4wTG5CMWMyZ29hWFJsYlNrN1hHNGdJQ0FnZlZ4dUlDQjlPMXh1WEc0Z0lISmxkSFZ5YmlCc2FYTjBPMXh1ZlRzaUxDSmNJblZ6WlNCemRISnBZM1JjSWp0Y2JseHVablZ1WTNScGIyNGdYM05zYVdObFpGUnZRWEp5WVhrb1lYSnlMQ0JwS1NCN0lISmxkSFZ5YmlCZllYSnlZWGxYYVhSb1NHOXNaWE1vWVhKeUtTQjhmQ0JmYVhSbGNtRmliR1ZVYjBGeWNtRjVUR2x0YVhRb1lYSnlMQ0JwS1NCOGZDQmZkVzV6ZFhCd2IzSjBaV1JKZEdWeVlXSnNaVlJ2UVhKeVlYa29ZWEp5TENCcEtTQjhmQ0JmYm05dVNYUmxjbUZpYkdWU1pYTjBLQ2s3SUgxY2JseHVablZ1WTNScGIyNGdYMjV2YmtsMFpYSmhZbXhsVW1WemRDZ3BJSHNnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2loY0lrbHVkbUZzYVdRZ1lYUjBaVzF3ZENCMGJ5QmtaWE4wY25WamRIVnlaU0J1YjI0dGFYUmxjbUZpYkdVZ2FXNXpkR0Z1WTJVdVhGeHVTVzRnYjNKa1pYSWdkRzhnWW1VZ2FYUmxjbUZpYkdVc0lHNXZiaTFoY25KaGVTQnZZbXBsWTNSeklHMTFjM1FnYUdGMlpTQmhJRnRUZVcxaWIyd3VhWFJsY21GMGIzSmRLQ2tnYldWMGFHOWtMbHdpS1RzZ2ZWeHVYRzVtZFc1amRHbHZiaUJmZFc1emRYQndiM0owWldSSmRHVnlZV0pzWlZSdlFYSnlZWGtvYnl3Z2JXbHVUR1Z1S1NCN0lHbG1JQ2doYnlrZ2NtVjBkWEp1T3lCcFppQW9kSGx3Wlc5bUlHOGdQVDA5SUZ3aWMzUnlhVzVuWENJcElISmxkSFZ5YmlCZllYSnlZWGxNYVd0bFZHOUJjbkpoZVNodkxDQnRhVzVNWlc0cE95QjJZWElnYmlBOUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWRHOVRkSEpwYm1jdVkyRnNiQ2h2S1M1emJHbGpaU2c0TENBdE1TazdJR2xtSUNodUlEMDlQU0JjSWs5aWFtVmpkRndpSUNZbUlHOHVZMjl1YzNSeWRXTjBiM0lwSUc0Z1BTQnZMbU52Ym5OMGNuVmpkRzl5TG01aGJXVTdJR2xtSUNodUlEMDlQU0JjSWsxaGNGd2lJSHg4SUc0Z1BUMDlJRndpVTJWMFhDSXBJSEpsZEhWeWJpQkJjbkpoZVM1bWNtOXRLRzhwT3lCcFppQW9iaUE5UFQwZ1hDSkJjbWQxYldWdWRITmNJaUI4ZkNBdlhpZy9PbFZwZkVrcGJuUW9Qem80ZkRFMmZETXlLU2cvT2tOc1lXMXdaV1FwUDBGeWNtRjVKQzh1ZEdWemRDaHVLU2tnY21WMGRYSnVJRjloY25KaGVVeHBhMlZVYjBGeWNtRjVLRzhzSUcxcGJreGxiaWs3SUgxY2JseHVablZ1WTNScGIyNGdYMkZ5Y21GNVRHbHJaVlJ2UVhKeVlYa29ZWEp5TENCc1pXNHBJSHNnYVdZZ0tHeGxiaUE5UFNCdWRXeHNJSHg4SUd4bGJpQStJR0Z5Y2k1c1pXNW5kR2dwSUd4bGJpQTlJR0Z5Y2k1c1pXNW5kR2c3SUdadmNpQW9kbUZ5SUdrZ1BTQXdMQ0JoY25JeUlEMGdibVYzSUVGeWNtRjVLR3hsYmlrN0lHa2dQQ0JzWlc0N0lHa3JLeWtnZXlCaGNuSXlXMmxkSUQwZ1lYSnlXMmxkT3lCOUlISmxkSFZ5YmlCaGNuSXlPeUI5WEc1Y2JtWjFibU4wYVc5dUlGOXBkR1Z5WVdKc1pWUnZRWEp5WVhsTWFXMXBkQ2hoY25Jc0lHa3BJSHNnYVdZZ0tIUjVjR1Z2WmlCVGVXMWliMndnUFQwOUlGd2lkVzVrWldacGJtVmtYQ0lnZkh3Z0lTaFRlVzFpYjJ3dWFYUmxjbUYwYjNJZ2FXNGdUMkpxWldOMEtHRnljaWtwS1NCeVpYUjFjbTQ3SUhaaGNpQmZZWEp5SUQwZ1cxMDdJSFpoY2lCZmJpQTlJSFJ5ZFdVN0lIWmhjaUJmWkNBOUlHWmhiSE5sT3lCMllYSWdYMlVnUFNCMWJtUmxabWx1WldRN0lIUnllU0I3SUdadmNpQW9kbUZ5SUY5cElEMGdZWEp5VzFONWJXSnZiQzVwZEdWeVlYUnZjbDBvS1N3Z1gzTTdJQ0VvWDI0Z1BTQW9YM01nUFNCZmFTNXVaWGgwS0NrcExtUnZibVVwT3lCZmJpQTlJSFJ5ZFdVcElIc2dYMkZ5Y2k1d2RYTm9LRjl6TG5aaGJIVmxLVHNnYVdZZ0tHa2dKaVlnWDJGeWNpNXNaVzVuZEdnZ1BUMDlJR2twSUdKeVpXRnJPeUI5SUgwZ1kyRjBZMmdnS0dWeWNpa2dleUJmWkNBOUlIUnlkV1U3SUY5bElEMGdaWEp5T3lCOUlHWnBibUZzYkhrZ2V5QjBjbmtnZXlCcFppQW9JVjl1SUNZbUlGOXBXMXdpY21WMGRYSnVYQ0pkSUNFOUlHNTFiR3dwSUY5cFcxd2ljbVYwZFhKdVhDSmRLQ2s3SUgwZ1ptbHVZV3hzZVNCN0lHbG1JQ2hmWkNrZ2RHaHliM2NnWDJVN0lIMGdmU0J5WlhSMWNtNGdYMkZ5Y2pzZ2ZWeHVYRzVtZFc1amRHbHZiaUJmWVhKeVlYbFhhWFJvU0c5c1pYTW9ZWEp5S1NCN0lHbG1JQ2hCY25KaGVTNXBjMEZ5Y21GNUtHRnljaWtwSUhKbGRIVnliaUJoY25JN0lIMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaUJqYzNOWGFYUm9UV0Z3Y0dsdVoxUnZVM1J5YVc1bktHbDBaVzBwSUh0Y2JpQWdkbUZ5SUY5cGRHVnRJRDBnWDNOc2FXTmxaRlJ2UVhKeVlYa29hWFJsYlN3Z05Da3NYRzRnSUNBZ0lDQmpiMjUwWlc1MElEMGdYMmwwWlcxYk1WMHNYRzRnSUNBZ0lDQmpjM05OWVhCd2FXNW5JRDBnWDJsMFpXMWJNMTA3WEc1Y2JpQWdhV1lnS0hSNWNHVnZaaUJpZEc5aElEMDlQU0JjSW1aMWJtTjBhVzl1WENJcElIdGNiaUFnSUNBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxdVpYaDBMV3hwYm1VZ2JtOHRkVzVrWldaY2JpQWdJQ0IyWVhJZ1ltRnpaVFkwSUQwZ1luUnZZU2gxYm1WelkyRndaU2hsYm1OdlpHVlZVa2xEYjIxd2IyNWxiblFvU2xOUFRpNXpkSEpwYm1kcFpua29ZM056VFdGd2NHbHVaeWtwS1NrN1hHNGdJQ0FnZG1GeUlHUmhkR0VnUFNCY0luTnZkWEpqWlUxaGNIQnBibWRWVWt3OVpHRjBZVHBoY0hCc2FXTmhkR2x2Ymk5cWMyOXVPMk5vWVhKelpYUTlkWFJtTFRnN1ltRnpaVFkwTEZ3aUxtTnZibU5oZENoaVlYTmxOalFwTzF4dUlDQWdJSFpoY2lCemIzVnlZMlZOWVhCd2FXNW5JRDBnWENJdktpTWdYQ0l1WTI5dVkyRjBLR1JoZEdFc0lGd2lJQ292WENJcE8xeHVJQ0FnSUhaaGNpQnpiM1Z5WTJWVlVreHpJRDBnWTNOelRXRndjR2x1Wnk1emIzVnlZMlZ6TG0xaGNDaG1kVzVqZEdsdmJpQW9jMjkxY21ObEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1hDSXZLaU1nYzI5MWNtTmxWVkpNUFZ3aUxtTnZibU5oZENoamMzTk5ZWEJ3YVc1bkxuTnZkWEpqWlZKdmIzUWdmSHdnWENKY0lpa3VZMjl1WTJGMEtITnZkWEpqWlN3Z1hDSWdLaTljSWlrN1hHNGdJQ0FnZlNrN1hHNGdJQ0FnY21WMGRYSnVJRnRqYjI1MFpXNTBYUzVqYjI1allYUW9jMjkxY21ObFZWSk1jeWt1WTI5dVkyRjBLRnR6YjNWeVkyVk5ZWEJ3YVc1blhTa3VhbTlwYmloY0lseGNibHdpS1R0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCYlkyOXVkR1Z1ZEYwdWFtOXBiaWhjSWx4Y2Jsd2lLVHRjYm4wN0lpd2lYQ0oxYzJVZ2MzUnlhV04wWENJN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdLSFZ5YkN3Z2IzQjBhVzl1Y3lrZ2UxeHVJQ0JwWmlBb0lXOXdkR2x2Ym5NcElIdGNiaUFnSUNBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxdVpYaDBMV3hwYm1VZ2JtOHRjR0Z5WVcwdGNtVmhjM05wWjI1Y2JpQWdJQ0J2Y0hScGIyNXpJRDBnZTMwN1hHNGdJSDBnTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0Ym1WNGRDMXNhVzVsSUc1dkxYVnVaR1Z5YzJOdmNtVXRaR0Z1WjJ4bExDQnVieTF3WVhKaGJTMXlaV0Z6YzJsbmJseHVYRzVjYmlBZ2RYSnNJRDBnZFhKc0lDWW1JSFZ5YkM1ZlgyVnpUVzlrZFd4bElEOGdkWEpzTG1SbFptRjFiSFFnT2lCMWNtdzdYRzVjYmlBZ2FXWWdLSFI1Y0dWdlppQjFjbXdnSVQwOUlGd2ljM1J5YVc1blhDSXBJSHRjYmlBZ0lDQnlaWFIxY200Z2RYSnNPMXh1SUNCOUlDOHZJRWxtSUhWeWJDQnBjeUJoYkhKbFlXUjVJSGR5WVhCd1pXUWdhVzRnY1hWdmRHVnpMQ0J5WlcxdmRtVWdkR2hsYlZ4dVhHNWNiaUFnYVdZZ0tDOWVXeWRjSWwwdUtsc25YQ0pkSkM4dWRHVnpkQ2gxY213cEtTQjdYRzRnSUNBZ0x5OGdaWE5zYVc1MExXUnBjMkZpYkdVdGJtVjRkQzFzYVc1bElHNXZMWEJoY21GdExYSmxZWE56YVdkdVhHNGdJQ0FnZFhKc0lEMGdkWEpzTG5Oc2FXTmxLREVzSUMweEtUdGNiaUFnZlZ4dVhHNGdJR2xtSUNodmNIUnBiMjV6TG1oaGMyZ3BJSHRjYmlBZ0lDQXZMeUJsYzJ4cGJuUXRaR2x6WVdKc1pTMXVaWGgwTFd4cGJtVWdibTh0Y0dGeVlXMHRjbVZoYzNOcFoyNWNiaUFnSUNCMWNtd2dLejBnYjNCMGFXOXVjeTVvWVhOb08xeHVJQ0I5SUM4dklGTm9iM1ZzWkNCMWNtd2dZbVVnZDNKaGNIQmxaRDljYmlBZ0x5OGdVMlZsSUdoMGRIQnpPaTh2WkhKaFpuUnpMbU56YzNkbkxtOXlaeTlqYzNNdGRtRnNkV1Z6TFRNdkkzVnliSE5jYmx4dVhHNGdJR2xtSUNndlcxd2lKeWdwSUZ4Y2RGeGNibDB2TG5SbGMzUW9kWEpzS1NCOGZDQnZjSFJwYjI1ekxtNWxaV1JSZFc5MFpYTXBJSHRjYmlBZ0lDQnlaWFIxY200Z1hDSmNYRndpWENJdVkyOXVZMkYwS0hWeWJDNXlaWEJzWVdObEtDOWNJaTluTENBblhGeGNYRndpSnlrdWNtVndiR0ZqWlNndlhGeHVMMmNzSUZ3aVhGeGNYRzVjSWlrc0lGd2lYRnhjSWx3aUtUdGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQjFjbXc3WEc1OU95SXNJbWx0Y0c5eWRDQmhjR2tnWm5KdmJTQmNJaUV1TGk4dUxpOHVMaTl1YjJSbFgyMXZaSFZzWlhNdmMzUjViR1V0Ykc5aFpHVnlMMlJwYzNRdmNuVnVkR2x0WlM5cGJtcGxZM1JUZEhsc1pYTkpiblJ2VTNSNWJHVlVZV2N1YW5OY0lqdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsdGNHOXlkQ0JqYjI1MFpXNTBJR1p5YjIwZ1hDSWhJUzR1THk0dUx5NHVMMjV2WkdWZmJXOWtkV3hsY3k5amMzTXRiRzloWkdWeUwyUnBjM1F2WTJwekxtcHpJUzR1THk0dUx5NHVMMjV2WkdWZmJXOWtkV3hsY3k5eVpYTnZiSFpsTFhWeWJDMXNiMkZrWlhJdmFXNWtaWGd1YW5NaExpNHZMaTR2TGk0dmJtOWtaVjl0YjJSMWJHVnpMM05oYzNNdGJHOWhaR1Z5TDJScGMzUXZZMnB6TG1welB6OXlkV3hsVTJWMFd6RmRMbkoxYkdWeld6RmRMblZ6WlZzelhTRXVMMmxqYjI1ekxuTmpjM05jSWp0Y2JseHVkbUZ5SUc5d2RHbHZibk1nUFNCN2ZUdGNibHh1YjNCMGFXOXVjeTVwYm5ObGNuUWdQU0JjSW1obFlXUmNJanRjYm05d2RHbHZibk11YzJsdVoyeGxkRzl1SUQwZ1ptRnNjMlU3WEc1Y2JuWmhjaUIxY0dSaGRHVWdQU0JoY0drb1kyOXVkR1Z1ZEN3Z2IzQjBhVzl1Y3lrN1hHNWNibHh1YVdZZ0tHMXZaSFZzWlM1b2IzUXBJSHRjYmlBZ2FXWWdLQ0ZqYjI1MFpXNTBMbXh2WTJGc2N5QjhmQ0J0YjJSMWJHVXVhRzkwTG1sdWRtRnNhV1JoZEdVcElIdGNiaUFnSUNCMllYSWdhWE5GY1hWaGJFeHZZMkZzY3lBOUlHWjFibU4wYVc5dUlHbHpSWEYxWVd4TWIyTmhiSE1vWVN3Z1lpd2dhWE5PWVcxbFpFVjRjRzl5ZENrZ2UxeHVJQ0JwWmlBb0lXRWdKaVlnWWlCOGZDQmhJQ1ltSUNGaUtTQjdYRzRnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNCOVhHNWNiaUFnZG1GeUlIQTdYRzVjYmlBZ1ptOXlJQ2h3SUdsdUlHRXBJSHRjYmlBZ0lDQnBaaUFvYVhOT1lXMWxaRVY0Y0c5eWRDQW1KaUJ3SUQwOVBTQW5aR1ZtWVhWc2RDY3BJSHRjYmlBZ0lDQWdJQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMVzVsZUhRdGJHbHVaU0J1YnkxamIyNTBhVzUxWlZ4dUlDQWdJQ0FnWTI5dWRHbHVkV1U3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0dGYmNGMGdJVDA5SUdKYmNGMHBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCbWIzSWdLSEFnYVc0Z1lpa2dlMXh1SUNBZ0lHbG1JQ2hwYzA1aGJXVmtSWGh3YjNKMElDWW1JSEFnUFQwOUlDZGtaV1poZFd4MEp5a2dlMXh1SUNBZ0lDQWdMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRibVY0ZEMxc2FXNWxJRzV2TFdOdmJuUnBiblZsWEc0Z0lDQWdJQ0JqYjI1MGFXNTFaVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvSVdGYmNGMHBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnZEhKMVpUdGNibjA3WEc0Z0lDQWdkbUZ5SUc5c1pFeHZZMkZzY3lBOUlHTnZiblJsYm5RdWJHOWpZV3h6TzF4dVhHNGdJQ0FnYlc5a2RXeGxMbWh2ZEM1aFkyTmxjSFFvWEc0Z0lDQWdJQ0JjSWlFaExpNHZMaTR2TGk0dmJtOWtaVjl0YjJSMWJHVnpMMk56Y3kxc2IyRmtaWEl2WkdsemRDOWphbk11YW5NaExpNHZMaTR2TGk0dmJtOWtaVjl0YjJSMWJHVnpMM0psYzI5c2RtVXRkWEpzTFd4dllXUmxjaTlwYm1SbGVDNXFjeUV1TGk4dUxpOHVMaTl1YjJSbFgyMXZaSFZzWlhNdmMyRnpjeTFzYjJGa1pYSXZaR2x6ZEM5amFuTXVhbk0vUDNKMWJHVlRaWFJiTVYwdWNuVnNaWE5iTVYwdWRYTmxXek5kSVM0dmFXTnZibk11YzJOemMxd2lMRnh1SUNBZ0lDQWdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9JV2x6UlhGMVlXeE1iMk5oYkhNb2IyeGtURzlqWVd4ekxDQmpiMjUwWlc1MExteHZZMkZzY3l3Z2RXNWtaV1pwYm1Wa0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzF2WkhWc1pTNW9iM1F1YVc1MllXeHBaR0YwWlNncE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2IyeGtURzlqWVd4eklEMGdZMjl1ZEdWdWRDNXNiMk5oYkhNN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RYQmtZWFJsS0dOdmJuUmxiblFwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ2xjYmlBZ2ZWeHVYRzRnSUcxdlpIVnNaUzVvYjNRdVpHbHpjRzl6WlNobWRXNWpkR2x2YmlncElIdGNiaUFnSUNCMWNHUmhkR1VvS1R0Y2JpQWdmU2s3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnZiblJsYm5RdWJHOWpZV3h6SUh4OElIdDlPeUlzSWx3aWRYTmxJSE4wY21samRGd2lPMXh1WEc1MllYSWdhWE5QYkdSSlJTQTlJR1oxYm1OMGFXOXVJR2x6VDJ4a1NVVW9LU0I3WEc0Z0lIWmhjaUJ0Wlcxdk8xeHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNGdiV1Z0YjNKcGVtVW9LU0I3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJ0WlcxdklEMDlQU0FuZFc1a1pXWnBibVZrSnlrZ2UxeHVJQ0FnSUNBZ0x5OGdWR1Z6ZENCbWIzSWdTVVVnUEQwZ09TQmhjeUJ3Y205d2IzTmxaQ0JpZVNCQ2NtOTNjMlZ5YUdGamEzTmNiaUFnSUNBZ0lDOHZJRUJ6WldVZ2FIUjBjRG92TDJKeWIzZHpaWEpvWVdOcmN5NWpiMjB2STJoaFkyc3RaVGN4WkRnMk9USm1OalV6TXpReE56Tm1aV1UzTVRWak1qSXlZMkk0TURWY2JpQWdJQ0FnSUM4dklGUmxjM1J6SUdadmNpQmxlR2x6ZEdWdVkyVWdiMllnYzNSaGJtUmhjbVFnWjJ4dlltRnNjeUJwY3lCMGJ5QmhiR3h2ZHlCemRIbHNaUzFzYjJGa1pYSmNiaUFnSUNBZ0lDOHZJSFJ2SUc5d1pYSmhkR1VnWTI5eWNtVmpkR3g1SUdsdWRHOGdibTl1TFhOMFlXNWtZWEprSUdWdWRtbHliMjV0Wlc1MGMxeHVJQ0FnSUNBZ0x5OGdRSE5sWlNCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdmQyVmljR0ZqYXkxamIyNTBjbWxpTDNOMGVXeGxMV3h2WVdSbGNpOXBjM04xWlhNdk1UYzNYRzRnSUNBZ0lDQnRaVzF2SUQwZ1FtOXZiR1ZoYmloM2FXNWtiM2NnSmlZZ1pHOWpkVzFsYm5RZ0ppWWdaRzlqZFcxbGJuUXVZV3hzSUNZbUlDRjNhVzVrYjNjdVlYUnZZaWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlHMWxiVzg3WEc0Z0lIMDdYRzU5S0NrN1hHNWNiblpoY2lCblpYUlVZWEpuWlhRZ1BTQm1kVzVqZEdsdmJpQm5aWFJVWVhKblpYUW9LU0I3WEc0Z0lIWmhjaUJ0WlcxdklEMGdlMzA3WEc0Z0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlCdFpXMXZjbWw2WlNoMFlYSm5aWFFwSUh0Y2JpQWdJQ0JwWmlBb2RIbHdaVzltSUcxbGJXOWJkR0Z5WjJWMFhTQTlQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnSUNBZ0lIWmhjaUJ6ZEhsc1pWUmhjbWRsZENBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvZEdGeVoyVjBLVHNnTHk4Z1UzQmxZMmxoYkNCallYTmxJSFJ2SUhKbGRIVnliaUJvWldGa0lHOW1JR2xtY21GdFpTQnBibk4wWldGa0lHOW1JR2xtY21GdFpTQnBkSE5sYkdaY2JseHVJQ0FnSUNBZ2FXWWdLSGRwYm1SdmR5NUlWRTFNU1VaeVlXMWxSV3hsYldWdWRDQW1KaUJ6ZEhsc1pWUmhjbWRsZENCcGJuTjBZVzVqWlc5bUlIZHBibVJ2ZHk1SVZFMU1TVVp5WVcxbFJXeGxiV1Z1ZENrZ2UxeHVJQ0FnSUNBZ0lDQjBjbmtnZTF4dUlDQWdJQ0FnSUNBZ0lDOHZJRlJvYVhNZ2QybHNiQ0IwYUhKdmR5QmhiaUJsZUdObGNIUnBiMjRnYVdZZ1lXTmpaWE56SUhSdklHbG1jbUZ0WlNCcGN5QmliRzlqYTJWa1hHNGdJQ0FnSUNBZ0lDQWdMeThnWkhWbElIUnZJR055YjNOekxXOXlhV2RwYmlCeVpYTjBjbWxqZEdsdmJuTmNiaUFnSUNBZ0lDQWdJQ0J6ZEhsc1pWUmhjbWRsZENBOUlITjBlV3hsVkdGeVoyVjBMbU52Ym5SbGJuUkViMk4xYldWdWRDNW9aV0ZrTzF4dUlDQWdJQ0FnSUNCOUlHTmhkR05vSUNobEtTQjdYRzRnSUNBZ0lDQWdJQ0FnTHk4Z2FYTjBZVzVpZFd3Z2FXZHViM0psSUc1bGVIUmNiaUFnSUNBZ0lDQWdJQ0J6ZEhsc1pWUmhjbWRsZENBOUlHNTFiR3c3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2JXVnRiMXQwWVhKblpYUmRJRDBnYzNSNWJHVlVZWEpuWlhRN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJRzFsYlc5YmRHRnlaMlYwWFR0Y2JpQWdmVHRjYm4wb0tUdGNibHh1ZG1GeUlITjBlV3hsYzBsdVJHOXRJRDBnVzEwN1hHNWNibVoxYm1OMGFXOXVJR2RsZEVsdVpHVjRRbmxKWkdWdWRHbG1hV1Z5S0dsa1pXNTBhV1pwWlhJcElIdGNiaUFnZG1GeUlISmxjM1ZzZENBOUlDMHhPMXh1WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2djM1I1YkdWelNXNUViMjB1YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNCcFppQW9jM1I1YkdWelNXNUViMjFiYVYwdWFXUmxiblJwWm1sbGNpQTlQVDBnYVdSbGJuUnBabWxsY2lrZ2UxeHVJQ0FnSUNBZ2NtVnpkV3gwSUQwZ2FUdGNiaUFnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ5WlhOMWJIUTdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHMXZaSFZzWlhOVWIwUnZiU2hzYVhOMExDQnZjSFJwYjI1ektTQjdYRzRnSUhaaGNpQnBaRU52ZFc1MFRXRndJRDBnZTMwN1hHNGdJSFpoY2lCcFpHVnVkR2xtYVdWeWN5QTlJRnRkTzF4dVhHNGdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYkdsemRDNXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJSFpoY2lCcGRHVnRJRDBnYkdsemRGdHBYVHRjYmlBZ0lDQjJZWElnYVdRZ1BTQnZjSFJwYjI1ekxtSmhjMlVnUHlCcGRHVnRXekJkSUNzZ2IzQjBhVzl1Y3k1aVlYTmxJRG9nYVhSbGJWc3dYVHRjYmlBZ0lDQjJZWElnWTI5MWJuUWdQU0JwWkVOdmRXNTBUV0Z3VzJsa1hTQjhmQ0F3TzF4dUlDQWdJSFpoY2lCcFpHVnVkR2xtYVdWeUlEMGdYQ0pjSWk1amIyNWpZWFFvYVdRc0lGd2lJRndpS1M1amIyNWpZWFFvWTI5MWJuUXBPMXh1SUNBZ0lHbGtRMjkxYm5STllYQmJhV1JkSUQwZ1kyOTFiblFnS3lBeE8xeHVJQ0FnSUhaaGNpQnBibVJsZUNBOUlHZGxkRWx1WkdWNFFubEpaR1Z1ZEdsbWFXVnlLR2xrWlc1MGFXWnBaWElwTzF4dUlDQWdJSFpoY2lCdlltb2dQU0I3WEc0Z0lDQWdJQ0JqYzNNNklHbDBaVzFiTVYwc1hHNGdJQ0FnSUNCdFpXUnBZVG9nYVhSbGJWc3lYU3hjYmlBZ0lDQWdJSE52ZFhKalpVMWhjRG9nYVhSbGJWc3pYVnh1SUNBZ0lIMDdYRzVjYmlBZ0lDQnBaaUFvYVc1a1pYZ2dJVDA5SUMweEtTQjdYRzRnSUNBZ0lDQnpkSGxzWlhOSmJrUnZiVnRwYm1SbGVGMHVjbVZtWlhKbGJtTmxjeXNyTzF4dUlDQWdJQ0FnYzNSNWJHVnpTVzVFYjIxYmFXNWtaWGhkTG5Wd1pHRjBaWElvYjJKcUtUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnYzNSNWJHVnpTVzVFYjIwdWNIVnphQ2g3WEc0Z0lDQWdJQ0FnSUdsa1pXNTBhV1pwWlhJNklHbGtaVzUwYVdacFpYSXNYRzRnSUNBZ0lDQWdJSFZ3WkdGMFpYSTZJR0ZrWkZOMGVXeGxLRzlpYWl3Z2IzQjBhVzl1Y3lrc1hHNGdJQ0FnSUNBZ0lISmxabVZ5Wlc1alpYTTZJREZjYmlBZ0lDQWdJSDBwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xrWlc1MGFXWnBaWEp6TG5CMWMyZ29hV1JsYm5ScFptbGxjaWs3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnYVdSbGJuUnBabWxsY25NN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUdsdWMyVnlkRk4wZVd4bFJXeGxiV1Z1ZENodmNIUnBiMjV6S1NCN1hHNGdJSFpoY2lCemRIbHNaU0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KM04wZVd4bEp5azdYRzRnSUhaaGNpQmhkSFJ5YVdKMWRHVnpJRDBnYjNCMGFXOXVjeTVoZEhSeWFXSjFkR1Z6SUh4OElIdDlPMXh1WEc0Z0lHbG1JQ2gwZVhCbGIyWWdZWFIwY21saWRYUmxjeTV1YjI1alpTQTlQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnSUNCMllYSWdibTl1WTJVZ1BTQjBlWEJsYjJZZ1gxOTNaV0p3WVdOclgyNXZibU5sWDE4Z0lUMDlJQ2QxYm1SbFptbHVaV1FuSUQ4Z1gxOTNaV0p3WVdOclgyNXZibU5sWDE4Z09pQnVkV3hzTzF4dVhHNGdJQ0FnYVdZZ0tHNXZibU5sS1NCN1hHNGdJQ0FnSUNCaGRIUnlhV0oxZEdWekxtNXZibU5sSUQwZ2JtOXVZMlU3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnVDJKcVpXTjBMbXRsZVhNb1lYUjBjbWxpZFhSbGN5a3VabTl5UldGamFDaG1kVzVqZEdsdmJpQW9hMlY1S1NCN1hHNGdJQ0FnYzNSNWJHVXVjMlYwUVhSMGNtbGlkWFJsS0d0bGVTd2dZWFIwY21saWRYUmxjMXRyWlhsZEtUdGNiaUFnZlNrN1hHNWNiaUFnYVdZZ0tIUjVjR1Z2WmlCdmNIUnBiMjV6TG1sdWMyVnlkQ0E5UFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1SUNBZ0lHOXdkR2x2Ym5NdWFXNXpaWEowS0hOMGVXeGxLVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0IyWVhJZ2RHRnlaMlYwSUQwZ1oyVjBWR0Z5WjJWMEtHOXdkR2x2Ym5NdWFXNXpaWEowSUh4OElDZG9aV0ZrSnlrN1hHNWNiaUFnSUNCcFppQW9JWFJoY21kbGRDa2dlMXh1SUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtGd2lRMjkxYkdSdUozUWdabWx1WkNCaElITjBlV3hsSUhSaGNtZGxkQzRnVkdocGN5QndjbTlpWVdKc2VTQnRaV0Z1Y3lCMGFHRjBJSFJvWlNCMllXeDFaU0JtYjNJZ2RHaGxJQ2RwYm5ObGNuUW5JSEJoY21GdFpYUmxjaUJwY3lCcGJuWmhiR2xrTGx3aUtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCMFlYSm5aWFF1WVhCd1pXNWtRMmhwYkdRb2MzUjViR1VwTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUhOMGVXeGxPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnlaVzF2ZG1WVGRIbHNaVVZzWlcxbGJuUW9jM1I1YkdVcElIdGNiaUFnTHk4Z2FYTjBZVzVpZFd3Z2FXZHViM0psSUdsbVhHNGdJR2xtSUNoemRIbHNaUzV3WVhKbGJuUk9iMlJsSUQwOVBTQnVkV3hzS1NCN1hHNGdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0I5WEc1Y2JpQWdjM1I1YkdVdWNHRnlaVzUwVG05a1pTNXlaVzF2ZG1WRGFHbHNaQ2h6ZEhsc1pTazdYRzU5WEc0dktpQnBjM1JoYm1KMWJDQnBaMjV2Y21VZ2JtVjRkQ0FnS2k5Y2JseHVYRzUyWVhJZ2NtVndiR0ZqWlZSbGVIUWdQU0JtZFc1amRHbHZiaUJ5WlhCc1lXTmxWR1Y0ZENncElIdGNiaUFnZG1GeUlIUmxlSFJUZEc5eVpTQTlJRnRkTzF4dUlDQnlaWFIxY200Z1puVnVZM1JwYjI0Z2NtVndiR0ZqWlNocGJtUmxlQ3dnY21Wd2JHRmpaVzFsYm5RcElIdGNiaUFnSUNCMFpYaDBVM1J2Y21WYmFXNWtaWGhkSUQwZ2NtVndiR0ZqWlcxbGJuUTdYRzRnSUNBZ2NtVjBkWEp1SUhSbGVIUlRkRzl5WlM1bWFXeDBaWElvUW05dmJHVmhiaWt1YW05cGJpZ25YRnh1SnlrN1hHNGdJSDA3WEc1OUtDazdYRzVjYm1aMWJtTjBhVzl1SUdGd2NHeDVWRzlUYVc1bmJHVjBiMjVVWVdjb2MzUjViR1VzSUdsdVpHVjRMQ0J5WlcxdmRtVXNJRzlpYWlrZ2UxeHVJQ0IyWVhJZ1kzTnpJRDBnY21WdGIzWmxJRDhnSnljZ09pQnZZbW91YldWa2FXRWdQeUJjSWtCdFpXUnBZU0JjSWk1amIyNWpZWFFvYjJKcUxtMWxaR2xoTENCY0lpQjdYQ0lwTG1OdmJtTmhkQ2h2WW1vdVkzTnpMQ0JjSW4xY0lpa2dPaUJ2WW1vdVkzTnpPeUF2THlCR2IzSWdiMnhrSUVsRlhHNWNiaUFnTHlvZ2FYTjBZVzVpZFd3Z2FXZHViM0psSUdsbUlDQXFMMXh1WEc0Z0lHbG1JQ2h6ZEhsc1pTNXpkSGxzWlZOb1pXVjBLU0I3WEc0Z0lDQWdjM1I1YkdVdWMzUjViR1ZUYUdWbGRDNWpjM05VWlhoMElEMGdjbVZ3YkdGalpWUmxlSFFvYVc1a1pYZ3NJR056Y3lrN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2RtRnlJR056YzA1dlpHVWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVlVaWGgwVG05a1pTaGpjM01wTzF4dUlDQWdJSFpoY2lCamFHbHNaRTV2WkdWeklEMGdjM1I1YkdVdVkyaHBiR1JPYjJSbGN6dGNibHh1SUNBZ0lHbG1JQ2hqYUdsc1pFNXZaR1Z6VzJsdVpHVjRYU2tnZTF4dUlDQWdJQ0FnYzNSNWJHVXVjbVZ0YjNabFEyaHBiR1FvWTJocGJHUk9iMlJsYzF0cGJtUmxlRjBwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoamFHbHNaRTV2WkdWekxteGxibWQwYUNrZ2UxeHVJQ0FnSUNBZ2MzUjViR1V1YVc1elpYSjBRbVZtYjNKbEtHTnpjMDV2WkdVc0lHTm9hV3hrVG05a1pYTmJhVzVrWlhoZEtUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnYzNSNWJHVXVZWEJ3Wlc1a1EyaHBiR1FvWTNOelRtOWtaU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNTlYRzVjYm1aMWJtTjBhVzl1SUdGd2NHeDVWRzlVWVdjb2MzUjViR1VzSUc5d2RHbHZibk1zSUc5aWFpa2dlMXh1SUNCMllYSWdZM056SUQwZ2IySnFMbU56Y3p0Y2JpQWdkbUZ5SUcxbFpHbGhJRDBnYjJKcUxtMWxaR2xoTzF4dUlDQjJZWElnYzI5MWNtTmxUV0Z3SUQwZ2IySnFMbk52ZFhKalpVMWhjRHRjYmx4dUlDQnBaaUFvYldWa2FXRXBJSHRjYmlBZ0lDQnpkSGxzWlM1elpYUkJkSFJ5YVdKMWRHVW9KMjFsWkdsaEp5d2diV1ZrYVdFcE8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lITjBlV3hsTG5KbGJXOTJaVUYwZEhKcFluVjBaU2duYldWa2FXRW5LVHRjYmlBZ2ZWeHVYRzRnSUdsbUlDaHpiM1Z5WTJWTllYQWdKaVlnZEhsd1pXOW1JR0owYjJFZ0lUMDlJQ2QxYm1SbFptbHVaV1FuS1NCN1hHNGdJQ0FnWTNOeklDczlJRndpWEZ4dUx5b2pJSE52ZFhKalpVMWhjSEJwYm1kVlVrdzlaR0YwWVRwaGNIQnNhV05oZEdsdmJpOXFjMjl1TzJKaGMyVTJOQ3hjSWk1amIyNWpZWFFvWW5SdllTaDFibVZ6WTJGd1pTaGxibU52WkdWVlVrbERiMjF3YjI1bGJuUW9TbE5QVGk1emRISnBibWRwWm5rb2MyOTFjbU5sVFdGd0tTa3BLU3dnWENJZ0tpOWNJaWs3WEc0Z0lIMGdMeThnUm05eUlHOXNaQ0JKUlZ4dVhHNGdJQzhxSUdsemRHRnVZblZzSUdsbmJtOXlaU0JwWmlBZ0tpOWNibHh1WEc0Z0lHbG1JQ2h6ZEhsc1pTNXpkSGxzWlZOb1pXVjBLU0I3WEc0Z0lDQWdjM1I1YkdVdWMzUjViR1ZUYUdWbGRDNWpjM05VWlhoMElEMGdZM056TzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhkb2FXeGxJQ2h6ZEhsc1pTNW1hWEp6ZEVOb2FXeGtLU0I3WEc0Z0lDQWdJQ0J6ZEhsc1pTNXlaVzF2ZG1WRGFHbHNaQ2h6ZEhsc1pTNW1hWEp6ZEVOb2FXeGtLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpkSGxzWlM1aGNIQmxibVJEYUdsc1pDaGtiMk4xYldWdWRDNWpjbVZoZEdWVVpYaDBUbTlrWlNoamMzTXBLVHRjYmlBZ2ZWeHVmVnh1WEc1MllYSWdjMmx1WjJ4bGRHOXVJRDBnYm5Wc2JEdGNiblpoY2lCemFXNW5iR1YwYjI1RGIzVnVkR1Z5SUQwZ01EdGNibHh1Wm5WdVkzUnBiMjRnWVdSa1UzUjViR1VvYjJKcUxDQnZjSFJwYjI1ektTQjdYRzRnSUhaaGNpQnpkSGxzWlR0Y2JpQWdkbUZ5SUhWd1pHRjBaVHRjYmlBZ2RtRnlJSEpsYlc5MlpUdGNibHh1SUNCcFppQW9iM0IwYVc5dWN5NXphVzVuYkdWMGIyNHBJSHRjYmlBZ0lDQjJZWElnYzNSNWJHVkpibVJsZUNBOUlITnBibWRzWlhSdmJrTnZkVzUwWlhJckt6dGNiaUFnSUNCemRIbHNaU0E5SUhOcGJtZHNaWFJ2YmlCOGZDQW9jMmx1WjJ4bGRHOXVJRDBnYVc1elpYSjBVM1I1YkdWRmJHVnRaVzUwS0c5d2RHbHZibk1wS1R0Y2JpQWdJQ0IxY0dSaGRHVWdQU0JoY0hCc2VWUnZVMmx1WjJ4bGRHOXVWR0ZuTG1KcGJtUW9iblZzYkN3Z2MzUjViR1VzSUhOMGVXeGxTVzVrWlhnc0lHWmhiSE5sS1R0Y2JpQWdJQ0J5WlcxdmRtVWdQU0JoY0hCc2VWUnZVMmx1WjJ4bGRHOXVWR0ZuTG1KcGJtUW9iblZzYkN3Z2MzUjViR1VzSUhOMGVXeGxTVzVrWlhnc0lIUnlkV1VwTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhOMGVXeGxJRDBnYVc1elpYSjBVM1I1YkdWRmJHVnRaVzUwS0c5d2RHbHZibk1wTzF4dUlDQWdJSFZ3WkdGMFpTQTlJR0Z3Y0d4NVZHOVVZV2N1WW1sdVpDaHVkV3hzTENCemRIbHNaU3dnYjNCMGFXOXVjeWs3WEc1Y2JpQWdJQ0J5WlcxdmRtVWdQU0JtZFc1amRHbHZiaUJ5WlcxdmRtVW9LU0I3WEc0Z0lDQWdJQ0J5WlcxdmRtVlRkSGxzWlVWc1pXMWxiblFvYzNSNWJHVXBPMXh1SUNBZ0lIMDdYRzRnSUgxY2JseHVJQ0IxY0dSaGRHVW9iMkpxS1R0Y2JpQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlIVndaR0YwWlZOMGVXeGxLRzVsZDA5aWFpa2dlMXh1SUNBZ0lHbG1JQ2h1WlhkUFltb3BJSHRjYmlBZ0lDQWdJR2xtSUNodVpYZFBZbW91WTNOeklEMDlQU0J2WW1vdVkzTnpJQ1ltSUc1bGQwOWlhaTV0WldScFlTQTlQVDBnYjJKcUxtMWxaR2xoSUNZbUlHNWxkMDlpYWk1emIzVnlZMlZOWVhBZ1BUMDlJRzlpYWk1emIzVnlZMlZOWVhBcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQjFjR1JoZEdVb2IySnFJRDBnYm1WM1QySnFLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2NtVnRiM1psS0NrN1hHNGdJQ0FnZlZ4dUlDQjlPMXh1ZlZ4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlDaHNhWE4wTENCdmNIUnBiMjV6S1NCN1hHNGdJRzl3ZEdsdmJuTWdQU0J2Y0hScGIyNXpJSHg4SUh0OU95QXZMeUJHYjNKalpTQnphVzVuYkdVdGRHRm5JSE52YkhWMGFXOXVJRzl1SUVsRk5pMDVMQ0IzYUdsamFDQm9ZWE1nWVNCb1lYSmtJR3hwYldsMElHOXVJSFJvWlNBaklHOW1JRHh6ZEhsc1pUNWNiaUFnTHk4Z2RHRm5jeUJwZENCM2FXeHNJR0ZzYkc5M0lHOXVJR0VnY0dGblpWeHVYRzRnSUdsbUlDZ2hiM0IwYVc5dWN5NXphVzVuYkdWMGIyNGdKaVlnZEhsd1pXOW1JRzl3ZEdsdmJuTXVjMmx1WjJ4bGRHOXVJQ0U5UFNBblltOXZiR1ZoYmljcElIdGNiaUFnSUNCdmNIUnBiMjV6TG5OcGJtZHNaWFJ2YmlBOUlHbHpUMnhrU1VVb0tUdGNiaUFnZlZ4dVhHNGdJR3hwYzNRZ1BTQnNhWE4wSUh4OElGdGRPMXh1SUNCMllYSWdiR0Z6ZEVsa1pXNTBhV1pwWlhKeklEMGdiVzlrZFd4bGMxUnZSRzl0S0d4cGMzUXNJRzl3ZEdsdmJuTXBPMXh1SUNCeVpYUjFjbTRnWm5WdVkzUnBiMjRnZFhCa1lYUmxLRzVsZDB4cGMzUXBJSHRjYmlBZ0lDQnVaWGRNYVhOMElEMGdibVYzVEdsemRDQjhmQ0JiWFR0Y2JseHVJQ0FnSUdsbUlDaFBZbXBsWTNRdWNISnZkRzkwZVhCbExuUnZVM1J5YVc1bkxtTmhiR3dvYm1WM1RHbHpkQ2tnSVQwOUlDZGJiMkpxWldOMElFRnljbUY1WFNjcElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUd4aGMzUkpaR1Z1ZEdsbWFXVnljeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2RtRnlJR2xrWlc1MGFXWnBaWElnUFNCc1lYTjBTV1JsYm5ScFptbGxjbk5iYVYwN1hHNGdJQ0FnSUNCMllYSWdhVzVrWlhnZ1BTQm5aWFJKYm1SbGVFSjVTV1JsYm5ScFptbGxjaWhwWkdWdWRHbG1hV1Z5S1R0Y2JpQWdJQ0FnSUhOMGVXeGxjMGx1Ukc5dFcybHVaR1Y0WFM1eVpXWmxjbVZ1WTJWekxTMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RtRnlJRzVsZDB4aGMzUkpaR1Z1ZEdsbWFXVnljeUE5SUcxdlpIVnNaWE5VYjBSdmJTaHVaWGRNYVhOMExDQnZjSFJwYjI1ektUdGNibHh1SUNBZ0lHWnZjaUFvZG1GeUlGOXBJRDBnTURzZ1gya2dQQ0JzWVhOMFNXUmxiblJwWm1sbGNuTXViR1Z1WjNSb095QmZhU3NyS1NCN1hHNGdJQ0FnSUNCMllYSWdYMmxrWlc1MGFXWnBaWElnUFNCc1lYTjBTV1JsYm5ScFptbGxjbk5iWDJsZE8xeHVYRzRnSUNBZ0lDQjJZWElnWDJsdVpHVjRJRDBnWjJWMFNXNWtaWGhDZVVsa1pXNTBhV1pwWlhJb1gybGtaVzUwYVdacFpYSXBPMXh1WEc0Z0lDQWdJQ0JwWmlBb2MzUjViR1Z6U1c1RWIyMWJYMmx1WkdWNFhTNXlaV1psY21WdVkyVnpJRDA5UFNBd0tTQjdYRzRnSUNBZ0lDQWdJSE4wZVd4bGMwbHVSRzl0VzE5cGJtUmxlRjB1ZFhCa1lYUmxjaWdwTzF4dVhHNGdJQ0FnSUNBZ0lITjBlV3hsYzBsdVJHOXRMbk53YkdsalpTaGZhVzVrWlhnc0lERXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHeGhjM1JKWkdWdWRHbG1hV1Z5Y3lBOUlHNWxkMHhoYzNSSlpHVnVkR2xtYVdWeWN6dGNiaUFnZlR0Y2JuMDdJaXdpWlhod2IzSjBJR1JsWm1GMWJIUWdYQ0prWVhSaE9tbHRZV2RsTDNCdVp6dGlZWE5sTmpRc2FWWkNUMUozTUV0SFoyOUJRVUZCVGxOVmFFVlZaMEZCUVZGQlFVRkJSSGREUVUxQlFVRkVXVk5WY2pWQlFVRkNVekpzVlZkSVVsbFVWWGMyV1RJNWRFeHRSbXRpTWtwc1RHNW9kR05CUVVGQlFVRkJVRVE1TkdOSFJtcGhNbFl3U1VkS2JGb3liSFZRVTB4MmRUYzRhVWxIYkd0UVUwcFlUbFV3ZDFSWVFrUmFWMmh3VTBod2VWcFdUalpVYkZKcVpXMTBhazlYVVdsUWVqUkxVRWhuTm1WSE1YZGlWMVl3V1ZOQ05HSlhlSFZqZW5BMFVGTkthRnBIT1dsYVZIQjFZM3B3ZEZwWVVtaE1lVWxuWlVSd05HSllRakJoZWpCcFVWZFNkbGx0VldkWFJURlJTVVZPZG1OdFZXZE9VelF5VEZkTmVFNUVTV2RPZW10MVRWUlpkMDlVU1RCTVEwRjVUVVJGTTB4NlFUTk1la1Y2VEZSQmVFOXFRVEpQYWswMVNVTkJaMGxEUVdkSlEwRnBVR2R2WjFCSVNtdGFhbkJUVWtWWloyVkhNWE5pYmswMlkyMVNiVkJUU205a1NGSjNUMms0ZG1RelpETk1ibU42VEcwNWVWcDVPSGhQVkdzMVRIcEJlVXg2U1hsTVdFcHJXbWt4ZW1WWE5UQlpXR2QwWW01TmFrbHFORXRKUTBFNFkyMVNiVTlyVW14ak1rNTVZVmhDTUdGWE9YVkpTRXByV21wd2FGbHRPVEZrUkRCcFNXazRLME5wUVRoTU0wcHJXbXB3VTFKRldTdERhbmQyWlVSd05HSllRblJhV0ZKb1VHZHZPRkF6YUhkWlYwNXlXbGhSWjFwWE5XdFFVMHA1U1dvNEsyNW9lR2MzZDBGQlFVRlNibEZWTVVKQlFVTjRhbmQyT0ZsUlZVRkJRVUZDWXpGS1NGRm5RM1Y2YUhwd1FVRkJRa1JzUWsxV1JWVkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVSjRWVmxYT1VGQlFVRlhXRkpUVkd4TlFVd3lXa3REUlVKblIxSkJlbFZDY1M5SmJVOWxVbGtyVlZBeU1tZHVRMEZ3ZWtFd2VFRlRkMWRXVTJWYWQzaE9lR2REVFRCU09DdDJZVVZuUzJoU2R6UlZLemhGU0d0MEwwZ3hjRU5uYjNsdmIzWXdhMEZzUlVSSlZFcHhkR0pxWmxsdlkwZHJWemc0YzNFeE9IWnpZWEo1VEhseGNGcHRTME0zUVVGQlFUZHRVMVZTUWxaSWFtRTNWakJLV1RsMU1rUnhXbU41TlZGalNqSTJlbkphYm1weWF6RjZja1V6V0RFdllqRXlTREYyWWlzcksxUXZlaTlRTDBwSmVWSkpRamhNU21sU00xcHBabk0wUmxWUlpuaERVMUZDYTBaTFJWTkZhRWt5UVVwSmEwUjFkVkF5ZHpWQmVYUllWREJLV1dZMGExb3dSSFl6VTNkcGVsRk9RMmRDVUVRMmEwaEtaRXQyUlZkQlJuWkdkMEZZV1Roa1YyWjJXbTlGZERCRFlrRk5ibkpST0hJMVNHSlJTVFJKWm1KR04wSXliR293ZVZsT1dHWnlWVXRuTTBkYVVVSkJNRWxSWnpGcGMySk5UVGR5VkdWQ2N6UjBNa3MwYVhZNFJ6Sm9VVlIyYzBjd1FtZFJjakJpZDBaMVZXZExNMDFIYWtKNmFESnpVR2xDYTJkMk16TkJXbk5sUWxoblZEWnVPRlZUU1RWUlVXdEtRMUZyU2tOUmMweEhVRTFGVGlzd1NGTnBkR0ZCVHlzNGVXOUNRVUZFTDBKc2NETjVRV3hTUWxOYUt5dFdSV3RqUmt4QlMzTklabXAxVGtaNVZURm5WVFJCVkVsWlVGQlpZVVJHYmpGa09XTTBWVTk2U1hGTmFrRTBVMHRUUVc5VFMwRlBhWFpuV1UxNlFtVlRkbk5XZDIxSWVVTkVaazFpVTBJMWMxQm9lVlpqV25vMVFYaHdjbWQwYjFoRWRETXdWVk5GYUVsVFJXaEpVMFZxV1c5TFpURjFhazh2TUhac2FITjNjbGx2VlRsUmIxTnpSVk4wUkhRcmFtRm9SVVJyWW1oTVpsazJja1pwYzBobGFHZzBUM1o2U0RKQ1dVRlZZM0JsU0hKMU9EUlJTWE5uY1hRd05FZE5VVXBLYUZsRWRFRlpORlF5ZGxWQ2NqUk1aM1ZzTjI4cmJtRTBSRVJGUTBsQ2FIWm5OR3AzTm5wdk9ITkJkRlpqVEVVelpVRnJRMWxhTUhkNVNpOWlhVVZOYlVaSGVFRlVaM1JvYWtSelQwUTFkRzh2UVhCa01VbDFNbU5qWTJGSloybFlVamczU1dKblpFVmlNR3ByUVdoRWN6a3dRa1Z0YmtRdmJ6aEJNVWg0T0daS2FFMVRSV2hKVTBWb1NqSkdZWE4yVXpFelVucGFRMDh4WldvclZUZHlPREJQYUZWV1pWUjVNMU54ZHpGQldFTTRWSGR6VlZGR1ZVeDJSR3N4UWtwbGJtUTBXa0Z4UjB4aE0yOHZiR2xKU1ZoME9GSXpNMGxHU1hWdFNGRkZZV2x1Ykdjd1JrNXRNV1JUZURKc01FVkRTVzEyUkROWFdWZFphVVJKYm5kVFNXMWFZM0pKVVZFNFNFRlpZM3BSV1hONVFYRklTR1JITkRsamFVZFhTMGxETjJ4S00yUkJkMUZwVDJaQ1dWRlFLM2Q1TUVOeVFuSlpNV0ZRYkhaSmJrWkRXRUpZZDBoelRHeDViMGREVFdKUU5GTTFRM1ZIWW05bmVGcEZiV2RDY2tsMFJXMDBSemRzTUhKMVNIUktaVGd5UVc5Rk1tOXFSSGRHWjFSR09WbE5abGxSUVVkamEwaDVTRUZtUVU4MUswNVlVMUIzYzFob2MyTlVVbWgxVUdwTWMwUlRkM2g0YzJaVU5VRlJiRzlvYTFwRFVXdEtRMUZKUkhCRmIwZHpaR2h6VFVSTmVtZHFOa3hZY1VJMU1HMDRUbVE0WkdWc05qSm9NVWhtT0RScVNrbFJPWGg1TkZwR1JGcFlRbEUyUmtsV1V5dFBkakoxTlN0bFFqWkNTalpQYUhocGREbFJNVWN5TjNoQ0wxSlpRMUJMZWxabllrRmFhMFIzT1hoMVNYZFFjMEpZVUd0TlQydzRkR3h3YUN0R1kwTlBRbVF2YUdGNVpXZERWR1E1UWtWcFNXaE5MMDgyWlhSbmRWZDBNa2R5ZDFjMFpIZGFNV3RwUW1ST1ZGRm1hVWxGTDBoak9FNTBPWE5LTUZKRmNrRXJkME5QUWs1WmRUTm9ibVZ1VldSRVRFSnBjemR2T0M4eVQyTnVPRlJrTldoRk9FSkhhVXBVY2tZMmVHZFpZVlZhU0doMlNVSTRaV2N4ZEdkbmIyeHVPRWsxTkN0VGJqVlBVV3RLUTFGclRFSldTMGMzTkZGUFduZFBlVUV3V0dOWE9UUmhkbTkyTURGVVFXTTFjRVoxY0RsR1pFaGFVVU5vUlZJeU9WQmljWE5HZEZCSFYyOWhaVUZCWjFaRVRrdzBjbTlNV1VGM1FWTkhTSHB0UVhKYWNYUkJkbVo1WWxaNWRUbERabEpIWkVGQmRtMDBSRTVPZDFSaVJHOWpNRTkyYVhSdmMwRm5SV2d4ZEVSTFJrazVXVVJMTlZCb2FsRXplRTUwYXpKTldHeDZURTFFWVc0Mk4xbHhRVzU1VjBGQ1puSTVSRkYyVmxoNmIyVkZLMGxJVWpkdEsyazRUVVppUXl0M1FuZFhkSGd5YWxsTVFsVmpSRm8xWkUxQ1FXOU1USGhKU1had04yZG9abXRFTUVKTldIa3JPSEJpUjFBeE16QlVPR2hKVTBWb1dXSmtVV0ZxSzJoWVNEY3ZUakJQUms0ek0xWmljWGR4VG5odFNEbDJaM2swY201Q05EbHdWa3RyVURZMEswbDVlazFqWW10UlJtczBaekEzUVZSd2FWZzBiamQzYVZCNlVYWkdiMEZZV2tGdmVFdGpOUzlyV1U5WWRsWXpNbEJNTVZJek5HNDJXV1ZNVkZGalJWZ3pZa2R1VUZwdGRHNWhXRFZSTTNSU05XMU5RbmhEVG0xU2RVZDJhV3BPTTNaeGEycHdNa0U1WTFZeWVVRjBlaTlQYVVKcFRtdFJaMmhCUkVsQk1qQlRSbmREZUdreGJuWlRaVkYxZEV0Uk1rMUNkblp1ZFN0dVZHMW9SVTFaYm5Bek9VUkthVUV5VjNkWFptZEtSRUZFWjBaS2QwZzNhRVZFVVhGeFRVNXBhRU5LUTJGcmNsTkJheTh4ZGtKYVFVbDNRaTlrU1ZoWWRsRkNaME53U1dGdWVHTklXRFZ6UTBScU4yRm1PSFpvU1VOSVJIZzVZWGtyVURsTmRIWkJRMlJFTm1ZMFJVcHZRMWxHVTI0cmQwdFRjRkV5WnpobFlXNW5kRmxGSzNKRWRVMDVhM2RqYjBzdmRIWkRaRVJ1VW5sdE1pdHVWRzFvUzI5S1VFZ3JUMjA0UWsxeFJuVm5abkpaU0d4T1dHNXBaMUp2TDFJck9TczRTbEJuUjFGaU1VSlpjRGw1VVV0WlpVUnZOazFxWmtJNFEyVlphMFJ3YW5kdGIzWnNiME54YXpSUlJXWkNWMGd2TXpKaVlsQm9jazgwUlhvM2VIUXphMGRCYzBvcmJtOUJVamhxZGsxVVp6bEZhamxVVURORlYwRTViM1pLZUVKWVZFSnJOVTFVVFVOYWNWZFZRelZPZURaeVNEWlpTbFpNUzJablNrMWhhWGN3ZVdjMUszbGlRVFphU2tGVFZYRkNaamhrWmxoQ0syYzBOVUZWVGtkQlFrRk1SMEpxT1VGM1V6QndMM1Z2UVdwUE5UUmtRbTVCWlZabGFGSkpPRTExWnl0a1ozbHJWRmRhV2s5M2NHdDZabFY2Y25kWVdVSk5VMkZCUXpaMkt6aENZMWRCVTFVNVNISk5SRFJCZGxrek4wRnJjMDVuV0ZvNFFucGpSMVZhZFdkSFZ5dEdTWEI2WmtOc04yTXpZMEZKY1VKMlNqRlBibkpzY1VWS05UbFdUWGN4TWxkd1VFODBTMDVrTldaeEx6UktRMUZyU2tOV2RVOUdlUzlETlZGVlJUZzVjakZtTXpaTFdtb3pZVmxtUWtwT1ZYYzVkMUpyU0VoSFRWQkdka3RCYUZkbU4xTTRkRU12U1VoV1NuY3JUMkY1Y21GUGJXRmlNVXhEVGpsVE9VeDNPRUpGWlRWRldESlNaMFpQTm5KTFp6aGtaeTlIZUZBeFoxQndUSGhCUkRadFFVNU9kRTVGVUZwMFRYVTBTa3g1TDFnNVlVUllTWFJVVGxoMFIwNDNiMkpyWkRSSWREWkRia1JMT1U1bFR6QndTRkpZTDNadFltWlJjak5aTkZsRGRXWm9UaXR3ZW1wcGRGVnhkblJqYjNZelNqTkxSREVyVUhVdmVHRllORW8wTlhaTmVWWnJVa0phVlZCb05HVkpNVzVZWm5wVWVWWlNRVmQ2YWpWUlp6Qk5WM0I1YnpkTGIzcHlWMGRqY3pKMWFrdEtiME5HZDNsQ1pYWmlNemM0ZEROaVRXSTNMMWt4UjB0YVVXNDBSQzk0VjJabU5rSkdaRk4xVURWT2VEaExSbWswTWtoSFpsWTVRVXhTYVhaVlIwaFlaVGxIU1hGQ0sxbDNVR3hKWTFaQlRHbzFkVTE2VjAxbVFWbDBaVUZHYmtGUFpuZGtXR2RFVjBnMldITTBhR0ozVEM5SFRDdEtPVXBMV2pCM1EzcG9hRVp1UkVOTVIwSkZXV2N2VmtGMWNFOXhiekYyTW1aWEszRnhWM1l5WjNCWGQxUjVUMGhWUkROQlYya3haa3BUUVZZeU9DOHZNV2c1TTFCdmRsQklWazFSUVVaV01YRnRVaTkzZEdaeE9DOW1NRWx2U2pCeldYSXJWMk50Ynk5TGNTOVRjRGczUTBkbmFXVTBTekpyVTI4dlVWSTJaVkpwVDNoU1IwcEdlR3RDU2xkUFdUWmtLM1ZwUzBGRlNWQnRlbGg0TlU5SWRqY3hkelJYT0VKNlVYQkhjRTVJT1U4M1dsUlhRV2haTDBnd01VMXFZVGwwZERod05VMUJZWGhTVlRWNVowTlRPWEExYTNaMlNtOXpTbEJOUVVoWFpXZFBWR05HVEU1dVdqQjFURUYxYlhaNE0wRkdNbFJPTW5ReGRsWm1Zek1yVUZwMVV6UkNjUzh3V0dkbFJYWlNaMlJYU25OclpEaGxTa3RtSzFGRk9EZGpNV3N4ZUhSblVYWkxTVFk0SzBoUlZrVjJObXBNUmpGWmVrRnZNWG8wVEVsbmFIVTBiWFZZZERSb2QwTmpLMVZGU2tOUmEweERRbXBFUjJsWGJuUjVjMGRLZEdNNFJEWnhiR05KZWtrNFJHVkllbVJoTlNzclowdHROblZqVlVRNE1GaGxSM0pwUXk5cWFHZ3JLeXRuZHpsU1pHTTJNUzlvV0ZWSUwwNHpPRTl2Vm5aS2MxUlVOMUZWVUU0elVUVkNkR0Z0VnpoWlRUaGpTRFpVT0ZwcU1UaFVRbXB4T1RkME9HVmhUbGMxVFdoU2RHZHRTbWQ1Y2pONFNTdE9OUzlWY21wcU9GbFdibGszVmtOVldsZGpSVTlwVlRoak5sWkVjVmhoTDFwU2NtMVBjR2RvTUhwUFZtZFliVTlDUzA4NFdsUmxRVEZ5U1RCRE4xZDFaMGx5V0hZeFZGRXpRVVZRUkRscWR6aGxMMUJwT1hGak9WbFJSRGREVFhwMVkwRk1TbXRDUzNCclJrWnlkMVZKWnpaV1ZrVlpXRGQyVlN0U2FFVjNSWE01VmpSamRrOU9WM01yZDJsSmNrdGxNM0EzU1hsdlJ6RnhWM05zVkVoeWVUQkdZWEJ6Wm1JNE9TOUtOV1Z1U1VoalZsSnBlVUpTYmpBclIyOWxSazh3UVU5MlFsVTRXbnBCUm1wQldUUlFXSEV5V0hsMWR6QjBSR2RPU21acVVEQmFTVVZtUjNoU1dIVlZlRkJJTjNWaFZUWldLMU0yWTIxMldWWTRRamRwUnk5c2FIZFFlREpGUTNwMFUyWmFMM0Z5UzJJMmIwcHNLMUJyUVZkM05sQlliSGszTWxoak4yaHZWQzlvWVRFeU5ubFFaMHMwUWxoNFZIbGhaRlZtTms1blRuRXhkMUpCT0ROb1MyeGlaVzU0T0ZSQloyZGlaalZKTkZSUU1YaFNXVGhVVERFNWQwaDVkVWQzUkhWQ1JpdFFlRFZOTVdSdlMzTkVMMmh0TUZGbFkyMW5lR05VYzB4U2RXRTNkbXRVYkRobFp6UllhVUZHT1c5cVVGVTNWRmhLYlRCaEwycDZOV0ZtUkVWRU9HWlpRalF6U1N0dU9FMWpRWE5RWjNWclpVSlZOVEpaVG1aWWFHOWtkREJOVUdkTFdGTjRXRmcwVm1oQlMzZDNXR1lyTlRNeWVtZDNNa0pzUlZKVk9HWlJRMDFPVkVGQ04zQnRRVTVtYjBKd01WWnhkWFpEYTBRdloycGFjM0JoV0dobE5uQXplbEZzVURjcmJHRlRkbVJTUmxaeU4wZFJhSEZXVHpaYVZrUmpWbFV2V1ZCTk5FOTZkemgzZUZvd2NuSnJjVWhvVTJWb1NTczVZMnBKYUVsVFJtaDBaV2RWY2pRMkt6ZzBTSFZaYWpZMGN6QlFObEIzVGpReFozSjJUamN6ZFN0NmRXb3ZNMDkwTjNaUWJTOXJUWG93ZDFSSFFtMVpkM2QzWmpoNmNsaFJZbTR3Y25veVdWWXZOMDByUkZWQk5XMXZNRW96UkdORk0xQmpOVkZwTkM5SmFtVlZWMFpOVUdaQlQxaFpZV0pJT1VadWR5OU9aSEpCVUhGaGVqTnNjMFV6Y21Sa09FVXpOVTFaYjBsbmN6TjBabmd3SzBwVVQzcG5XV1ZuVDJsc1FqbEJhRGxFVG5salZuRklRVm8wV1hFdlYyWkZUblpRT0dWd2FtVXJiblZ4UW1ob0wxbzJjVWd3TDBwRWNrMU9SWEJCTXpsNmRqTkZOVU42U21jNWQxZGxRM2x1VFhkdE1uZFJWWGhIVTNGb1pWcEVSV3MwVkVGcmNWbDZWMkk1WldKd1IxbFVPRUk1YWtWR2MxZ3pVMHRoTlhOQlpqRXlaM0JWUWpGQkwwNVdSRzlqUjJkSlQzWlNXbWRYTVVSMVlpOUxaQ3MwUWl0dmVsaGxObVF3TVRSc01YWktNR3BGYmtFclMwczBPRU4yWWpWbVlqSlpWWEp0ZEhjd1NXZElTWFJCU0dWRllrRjBaREpYVkdad1JqY3JiVEJNVG5nM1lqVk9NVk5IT1ZsVVJXaEpVMFZxV1VsbFVWRkZjVGs1TUVvemEzZDJTbnB5ZEZWV1ptWjZXV054WTBSWmFDOWxUVXRYUVVWR1ExWkdXR2xJWmtaTWIwZ3dSRFZoTVRoM1ZVbG1UM0IwZVU5eVNFeHRUeXRrVjAxV1VYcGFTRE5IWnpSUlExTnJRbVF4ZEdFMWRXb3hTMUJpTkVSSlVVTllNbmRUTkc1MlV6RlNaV2xZUVV4M1dXMUNUbEZ3VkRoWGJHRjRLMVJoZWpVNFVXdG9XVUpNVFRoUVp6QkthVXd3VkZWRFVFWnlRVlZCVkRGaVVVdzVPV2REZFd4elRrVXJiMDlrVW5kTk5UTmlTR2RWTWtockwwbERSV2hKVTBab2RIZEZOeTlTZUZZNFYyTkNiak0xVjBWRlpteFpiMlpsYXpaMVprazBWbEJqTDFFNFVUVmlabU42ZUVFd1ptZHRMMUF3U0ZobFYzUjNlRlFyY0VGblVXRklWM2xhYlZacFRWZERPVlJNTmpodGNuZzVRbTVCY0hoTFpUVjFUVkpRVnpBclVGWkZVa3h1TmpneGFXZDVVR2dyY1hKWVlqUk9lRE5ST1hVMVlVSjVhMUE1UjFjMmNHVXhjM1V4Y3pGbWJVUjFWV3BWUTNaMGFpOHpSVVpET1Vkck0zVjVabHAwWlhsRGJETjBSRWxsTDNCcU0zSXJibms1VlZkMVVXUmlZa0ZGUzJ3dmFVODJNelZvUTJ4VU9XeHZRVkJoTjFGdE0yeElaVTlyZVhGTldFTkZNWEo1YjFsSVVVMVNNazFRUVdKbGRVVTRkMEZNYVRoMVkySmtabkI1VG5sdlQzSm1NMmRuTVdVMlluVjZOMDVOU2tOUmEwcERWSE5KZG1wNlFWUkhXa3cyVEhGTGJtVTVNM0Z3ZVVSUWVqVm5TbXBOYkRsR01XeGlkR1ZpTVZVMVpYWXZUazl6UlRkNU9HZzRTVmRXV0hWbGRqRldjRmRxTkUwNFNETkVZMjVoVDFGRU4xSnpaVXhQVkVRNWJERndPVlpNWVZFM1RTOXJiMWN6TDB3MGNIWXJLemwyYjBKbksyRjZUekoxUW5sM1pYTjJPRkJOVDNkWGQxbFhlSHBPYkRnMVYzWjNORTg0VDNoM1lrZ3JOek5PY21aVVNrYzNlWFpJYzIxbWN6TnJVSEZKVkhvM05WSk9SRFpXUlRoclREQnpRU3RqVFdnMk9WbzNkME52YzBsTVF5OXpRbEZMTnpnNFNXbE9XVWgyZWpkbFNtTTVjaTlrWkVoM1FXazVaemcxUW1kUGRETkdORmRwTVROa1dWTk5aME01VG5SSE5YUkRRbWRJWjFRd1J5OW1ObTFNYVhOVFdVTk5VVXRFVkZWeE5FeEJjblpRTmk4eFdEUTBRUzl1ZVVGdk1VNXlUM05HUkdKNVkwWllVRm96Y1hNMVQydHNLMlprTjBzd2RrOUlTRW9yY3pKUlNqa3pRMHRJZGxsWGVsWlpZbE55U0VWbVptcHplWEZxYkZKWVQxazJLMWhrYkZaWVpXMTFZMnRLUTFGclNrTlJhMGx6U0VGRE5FNXViamREWVVKMllUUjJUSFExUVVGRFFrNVJabFZuUlVoVFdrRm5UR2hhUWtaVUwyNXBNR2ROTkVwQmEwMVlWWFJuZDJsWFZVUnhRVEkwVTBGaWN5dERhVkZyU2tOUmEwcERVM05ITDB4dFpVRk1VbFphUWxGa2JDOXZTM1J1TDBJNWNuRmxlVmhyZVdkVWR5c3pNbFE1Uml0SVFsaENPV0kxVkNzeFFVdHhOV1V6Vm5nd1QwRTJMemhPTmxBeU5TOXlaVEpFZVdkaVZWQXliSEJpTDJOSFVYVnZPVGNyTlN0eE9YRkJWR1JsTHpGV1NFRlpMeXQxSzI5SVIxQXhkbXRTTDFGcFZURndkbWhOVTNSb2VpOUNMMmd4VDFkcGVVMXdjM2RCUVVGQlFVVnNSbFJyVTNWUmJVTkRYQ0lpTENKcGJYQnZjblFnSnk0dmFXTnZibk11YzJOemN5YzdYSEpjYmlJc0lpOHZJRlJvWlNCdGIyUjFiR1VnWTJGamFHVmNiblpoY2lCZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsWDJOaFkyaGxYMThnUFNCN2ZUdGNibHh1THk4Z1ZHaGxJSEpsY1hWcGNtVWdablZ1WTNScGIyNWNibVoxYm1OMGFXOXVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvYlc5a2RXeGxTV1FwSUh0Y2JseDBMeThnUTJobFkyc2dhV1lnYlc5a2RXeGxJR2x6SUdsdUlHTmhZMmhsWEc1Y2RHbG1LRjlmZDJWaWNHRmphMTl0YjJSMWJHVmZZMkZqYUdWZlgxdHRiMlIxYkdWSlpGMHBJSHRjYmx4MFhIUnlaWFIxY200Z1gxOTNaV0p3WVdOclgyMXZaSFZzWlY5allXTm9aVjlmVzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dVhIUjlYRzVjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzVjZEhaaGNpQnRiMlIxYkdVZ1BTQmZYM2RsWW5CaFkydGZiVzlrZFd4bFgyTmhZMmhsWDE5YmJXOWtkV3hsU1dSZElEMGdlMXh1WEhSY2RHbGtPaUJ0YjJSMWJHVkpaQ3hjYmx4MFhIUXZMeUJ1YnlCdGIyUjFiR1V1Ykc5aFpHVmtJRzVsWldSbFpGeHVYSFJjZEdWNGNHOXlkSE02SUh0OVhHNWNkSDA3WEc1Y2JseDBMeThnUlhobFkzVjBaU0IwYUdVZ2JXOWtkV3hsSUdaMWJtTjBhVzl1WEc1Y2RIWmhjaUJsZUdWalQzQjBhVzl1Y3lBOUlIc2dhV1E2SUcxdlpIVnNaVWxrTENCdGIyUjFiR1U2SUcxdlpIVnNaU3dnWm1GamRHOXllVG9nWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWDF0dGIyUjFiR1ZKWkYwc0lISmxjWFZwY21VNklGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOGdmVHRjYmx4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXBMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNG9hR0Z1Wkd4bGNpa2dleUJvWVc1a2JHVnlLR1Y0WldOUGNIUnBiMjV6S1RzZ2ZTazdYRzVjZEcxdlpIVnNaU0E5SUdWNFpXTlBjSFJwYjI1ekxtMXZaSFZzWlR0Y2JseDBaWGhsWTA5d2RHbHZibk11Wm1GamRHOXllUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JsZUdWalQzQjBhVzl1Y3k1eVpYRjFhWEpsS1R0Y2JseHVYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1WEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzU5WEc1Y2JpOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxjeUJ2WW1wbFkzUWdLRjlmZDJWaWNHRmphMTl0YjJSMWJHVnpYMThwWEc1ZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtMGdQU0JmWDNkbFluQmhZMnRmYlc5a2RXeGxjMTlmTzF4dVhHNHZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVqSUQwZ1gxOTNaV0p3WVdOclgyMXZaSFZzWlY5allXTm9aVjlmTzF4dVhHNHZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaU0JsZUdWamRYUnBiMjRnYVc1MFpYSmpaWEIwYjNKY2JsOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVhU0E5SUZ0ZE8xeHVYRzRpTENJdkx5Qm5aWFJFWldaaGRXeDBSWGh3YjNKMElHWjFibU4wYVc5dUlHWnZjaUJqYjIxd1lYUnBZbWxzYVhSNUlIZHBkR2dnYm05dUxXaGhjbTF2Ym5rZ2JXOWtkV3hsYzF4dVgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXVJRDBnS0cxdlpIVnNaU2tnUFQ0Z2UxeHVYSFIyWVhJZ1oyVjBkR1Z5SUQwZ2JXOWtkV3hsSUNZbUlHMXZaSFZzWlM1ZlgyVnpUVzlrZFd4bElEOWNibHgwWEhRb0tTQTlQaUFvYlc5a2RXeGxXeWRrWldaaGRXeDBKMTBwSURwY2JseDBYSFFvS1NBOVBpQW9iVzlrZFd4bEtUdGNibHgwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z2V5QmhPaUJuWlhSMFpYSWdmU2s3WEc1Y2RISmxkSFZ5YmlCblpYUjBaWEk3WEc1OU95SXNJaTh2SUdSbFptbHVaU0JuWlhSMFpYSWdablZ1WTNScGIyNXpJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmw5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJQ2hsZUhCdmNuUnpMQ0JrWldacGJtbDBhVzl1S1NBOVBpQjdYRzVjZEdadmNpaDJZWElnYTJWNUlHbHVJR1JsWm1sdWFYUnBiMjRwSUh0Y2JseDBYSFJwWmloZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOG9aR1ZtYVc1cGRHbHZiaXdnYTJWNUtTQW1KaUFoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHdGxlU2twSUh0Y2JseDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQnJaWGtzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z1oyVjBPaUJrWldacGJtbDBhVzl1VzJ0bGVWMGdmU2s3WEc1Y2RGeDBmVnh1WEhSOVhHNTlPeUlzSWk4dklGUm9hWE1nWm5WdVkzUnBiMjRnWVd4c2IzY2dkRzhnY21WbVpYSmxibU5sSUdGc2JDQmphSFZ1YTNOY2JsOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVhSFVnUFNBb1kyaDFibXRKWkNrZ1BUNGdlMXh1WEhRdkx5QnlaWFIxY200Z2RYSnNJR1p2Y2lCbWFXeGxibUZ0WlhNZ1ltRnpaV1FnYjI0Z2RHVnRjR3hoZEdWY2JseDBjbVYwZFhKdUlGd2lYQ0lnS3lCamFIVnVhMGxrSUNzZ1hDSXVYQ0lnS3lCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtZ29LU0FySUZ3aUxtaHZkQzExY0dSaGRHVXVhbk5jSWp0Y2JuMDdJaXdpWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1b2JYSkdJRDBnS0NrZ1BUNGdLRndpU1dOdmJuTXVYQ0lnS3lCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtZ29LU0FySUZ3aUxtaHZkQzExY0dSaGRHVXVhbk52Ymx3aUtUc2lMQ0pmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1nZ1BTQW9LU0E5UGlBb1hDSmxNR0ZqTVRJek5XVmtOVE5qWm1NeFpqSTJPRndpS1NJc0lsOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieUE5SUNodlltb3NJSEJ5YjNBcElEMCtJQ2hQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYjJKcUxDQndjbTl3S1NraUxDSjJZWElnYVc1UWNtOW5jbVZ6Y3lBOUlIdDlPMXh1ZG1GeUlHUmhkR0ZYWldKd1lXTnJVSEpsWm1sNElEMGdYQ0pKWTI5dWN6cGNJanRjYmk4dklHeHZZV1JUWTNKcGNIUWdablZ1WTNScGIyNGdkRzhnYkc5aFpDQmhJSE5qY21sd2RDQjJhV0VnYzJOeWFYQjBJSFJoWjF4dVgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXNJRDBnS0hWeWJDd2daRzl1WlN3Z2EyVjVMQ0JqYUhWdWEwbGtLU0E5UGlCN1hHNWNkR2xtS0dsdVVISnZaM0psYzNOYmRYSnNYU2tnZXlCcGJsQnliMmR5WlhOelczVnliRjB1Y0hWemFDaGtiMjVsS1RzZ2NtVjBkWEp1T3lCOVhHNWNkSFpoY2lCelkzSnBjSFFzSUc1bFpXUkJkSFJoWTJnN1hHNWNkR2xtS0d0bGVTQWhQVDBnZFc1a1pXWnBibVZrS1NCN1hHNWNkRngwZG1GeUlITmpjbWx3ZEhNZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBjMEo1VkdGblRtRnRaU2hjSW5OamNtbHdkRndpS1R0Y2JseDBYSFJtYjNJb2RtRnlJR2tnUFNBd095QnBJRHdnYzJOeWFYQjBjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVYSFJjZEZ4MGRtRnlJSE1nUFNCelkzSnBjSFJ6VzJsZE8xeHVYSFJjZEZ4MGFXWW9jeTVuWlhSQmRIUnlhV0oxZEdVb1hDSnpjbU5jSWlrZ1BUMGdkWEpzSUh4OElITXVaMlYwUVhSMGNtbGlkWFJsS0Z3aVpHRjBZUzEzWldKd1lXTnJYQ0lwSUQwOUlHUmhkR0ZYWldKd1lXTnJVSEpsWm1sNElDc2dhMlY1S1NCN0lITmpjbWx3ZENBOUlITTdJR0p5WldGck95QjlYRzVjZEZ4MGZWeHVYSFI5WEc1Y2RHbG1LQ0Z6WTNKcGNIUXBJSHRjYmx4MFhIUnVaV1ZrUVhSMFlXTm9JRDBnZEhKMVpUdGNibHgwWEhSelkzSnBjSFFnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLQ2R6WTNKcGNIUW5LVHRjYmx4dVhIUmNkSE5qY21sd2RDNWphR0Z5YzJWMElEMGdKM1YwWmkwNEp6dGNibHgwWEhSelkzSnBjSFF1ZEdsdFpXOTFkQ0E5SURFeU1EdGNibHgwWEhScFppQW9YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV1WXlrZ2UxeHVYSFJjZEZ4MGMyTnlhWEIwTG5ObGRFRjBkSEpwWW5WMFpTaGNJbTV2Ym1ObFhDSXNJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Ym1NcE8xeHVYSFJjZEgxY2JseDBYSFJ6WTNKcGNIUXVjMlYwUVhSMGNtbGlkWFJsS0Z3aVpHRjBZUzEzWldKd1lXTnJYQ0lzSUdSaGRHRlhaV0p3WVdOclVISmxabWw0SUNzZ2EyVjVLVHRjYmx4MFhIUnpZM0pwY0hRdWMzSmpJRDBnZFhKc08xeHVYSFI5WEc1Y2RHbHVVSEp2WjNKbGMzTmJkWEpzWFNBOUlGdGtiMjVsWFR0Y2JseDBkbUZ5SUc5dVUyTnlhWEIwUTI5dGNHeGxkR1VnUFNBb2NISmxkaXdnWlhabGJuUXBJRDArSUh0Y2JseDBYSFF2THlCaGRtOXBaQ0J0WlcwZ2JHVmhhM01nYVc0Z1NVVXVYRzVjZEZ4MGMyTnlhWEIwTG05dVpYSnliM0lnUFNCelkzSnBjSFF1YjI1c2IyRmtJRDBnYm5Wc2JEdGNibHgwWEhSamJHVmhjbFJwYldWdmRYUW9kR2x0Wlc5MWRDazdYRzVjZEZ4MGRtRnlJR1J2Ym1WR2JuTWdQU0JwYmxCeWIyZHlaWE56VzNWeWJGMDdYRzVjZEZ4MFpHVnNaWFJsSUdsdVVISnZaM0psYzNOYmRYSnNYVHRjYmx4MFhIUnpZM0pwY0hRdWNHRnlaVzUwVG05a1pTQW1KaUJ6WTNKcGNIUXVjR0Z5Wlc1MFRtOWtaUzV5WlcxdmRtVkRhR2xzWkNoelkzSnBjSFFwTzF4dVhIUmNkR1J2Ym1WR2JuTWdKaVlnWkc5dVpVWnVjeTVtYjNKRllXTm9LQ2htYmlrZ1BUNGdLR1p1S0dWMlpXNTBLU2twTzF4dVhIUmNkR2xtS0hCeVpYWXBJSEpsZEhWeWJpQndjbVYyS0dWMlpXNTBLVHRjYmx4MGZWeHVYSFE3WEc1Y2RIWmhjaUIwYVcxbGIzVjBJRDBnYzJWMFZHbHRaVzkxZENodmJsTmpjbWx3ZEVOdmJYQnNaWFJsTG1KcGJtUW9iblZzYkN3Z2RXNWtaV1pwYm1Wa0xDQjdJSFI1Y0dVNklDZDBhVzFsYjNWMEp5d2dkR0Z5WjJWME9pQnpZM0pwY0hRZ2ZTa3NJREV5TURBd01DazdYRzVjZEhOamNtbHdkQzV2Ym1WeWNtOXlJRDBnYjI1VFkzSnBjSFJEYjIxd2JHVjBaUzVpYVc1a0tHNTFiR3dzSUhOamNtbHdkQzV2Ym1WeWNtOXlLVHRjYmx4MGMyTnlhWEIwTG05dWJHOWhaQ0E5SUc5dVUyTnlhWEIwUTI5dGNHeGxkR1V1WW1sdVpDaHVkV3hzTENCelkzSnBjSFF1YjI1c2IyRmtLVHRjYmx4MGJtVmxaRUYwZEdGamFDQW1KaUJrYjJOMWJXVnVkQzVvWldGa0xtRndjR1Z1WkVOb2FXeGtLSE5qY21sd2RDazdYRzU5T3lJc0lpOHZJR1JsWm1sdVpTQmZYMlZ6VFc5a2RXeGxJRzl1SUdWNGNHOXlkSE5jYmw5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpQTlJQ2hsZUhCdmNuUnpLU0E5UGlCN1hHNWNkR2xtS0hSNWNHVnZaaUJUZVcxaWIyd2dJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeWtnZTF4dVhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCVGVXMWliMnd1ZEc5VGRISnBibWRVWVdjc0lIc2dkbUZzZFdVNklDZE5iMlIxYkdVbklIMHBPMXh1WEhSOVhHNWNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENBblgxOWxjMDF2WkhWc1pTY3NJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzU5T3lJc0luWmhjaUJqZFhKeVpXNTBUVzlrZFd4bFJHRjBZU0E5SUh0OU8xeHVkbUZ5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE1nUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTTdYRzVjYmk4dklHMXZaSFZzWlNCaGJtUWdjbVZ4ZFdseVpTQmpjbVZoZEdsdmJseHVkbUZ5SUdOMWNuSmxiblJEYUdsc1pFMXZaSFZzWlR0Y2JuWmhjaUJqZFhKeVpXNTBVR0Z5Wlc1MGN5QTlJRnRkTzF4dVhHNHZMeUJ6ZEdGMGRYTmNiblpoY2lCeVpXZHBjM1JsY21Wa1UzUmhkSFZ6U0dGdVpHeGxjbk1nUFNCYlhUdGNiblpoY2lCamRYSnlaVzUwVTNSaGRIVnpJRDBnWENKcFpHeGxYQ0k3WEc1Y2JpOHZJSGRvYVd4bElHUnZkMjVzYjJGa2FXNW5YRzUyWVhJZ1lteHZZMnRwYm1kUWNtOXRhWE5sY3p0Y2JseHVMeThnVkdobElIVndaR0YwWlNCcGJtWnZYRzUyWVhJZ1kzVnljbVZ1ZEZWd1pHRjBaVUZ3Y0d4NVNHRnVaR3hsY25NN1hHNTJZWElnY1hWbGRXVmtTVzUyWVd4cFpHRjBaV1JOYjJSMWJHVnpPMXh1WEc0dkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxdVpYaDBMV3hwYm1VZ2JtOHRkVzUxYzJWa0xYWmhjbk5jYmw5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWFHMXlSQ0E5SUdOMWNuSmxiblJOYjJSMWJHVkVZWFJoTzF4dVhHNWZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbWt1Y0hWemFDaG1kVzVqZEdsdmJpQW9iM0IwYVc5dWN5a2dlMXh1WEhSMllYSWdiVzlrZFd4bElEMGdiM0IwYVc5dWN5NXRiMlIxYkdVN1hHNWNkSFpoY2lCeVpYRjFhWEpsSUQwZ1kzSmxZWFJsVW1WeGRXbHlaU2h2Y0hScGIyNXpMbkpsY1hWcGNtVXNJRzl3ZEdsdmJuTXVhV1FwTzF4dVhIUnRiMlIxYkdVdWFHOTBJRDBnWTNKbFlYUmxUVzlrZFd4bFNHOTBUMkpxWldOMEtHOXdkR2x2Ym5NdWFXUXNJRzF2WkhWc1pTazdYRzVjZEcxdlpIVnNaUzV3WVhKbGJuUnpJRDBnWTNWeWNtVnVkRkJoY21WdWRITTdYRzVjZEcxdlpIVnNaUzVqYUdsc1pISmxiaUE5SUZ0ZE8xeHVYSFJqZFhKeVpXNTBVR0Z5Wlc1MGN5QTlJRnRkTzF4dVhIUnZjSFJwYjI1ekxuSmxjWFZwY21VZ1BTQnlaWEYxYVhKbE8xeHVmU2s3WEc1Y2JsOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVhRzF5UXlBOUlIdDlPMXh1WDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1b2JYSkpJRDBnZTMwN1hHNWNibVoxYm1OMGFXOXVJR055WldGMFpWSmxjWFZwY21Vb2NtVnhkV2x5WlN3Z2JXOWtkV3hsU1dRcElIdGNibHgwZG1GeUlHMWxJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjA3WEc1Y2RHbG1JQ2doYldVcElISmxkSFZ5YmlCeVpYRjFhWEpsTzF4dVhIUjJZWElnWm00Z1BTQm1kVzVqZEdsdmJpQW9jbVZ4ZFdWemRDa2dlMXh1WEhSY2RHbG1JQ2h0WlM1b2IzUXVZV04wYVhabEtTQjdYRzVjZEZ4MFhIUnBaaUFvYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR5WlhGMVpYTjBYU2tnZTF4dVhIUmNkRngwWEhSMllYSWdjR0Z5Wlc1MGN5QTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJjbVZ4ZFdWemRGMHVjR0Z5Wlc1MGN6dGNibHgwWEhSY2RGeDBhV1lnS0hCaGNtVnVkSE11YVc1a1pYaFBaaWh0YjJSMWJHVkpaQ2tnUFQwOUlDMHhLU0I3WEc1Y2RGeDBYSFJjZEZ4MGNHRnlaVzUwY3k1d2RYTm9LRzF2WkhWc1pVbGtLVHRjYmx4MFhIUmNkRngwZlZ4dVhIUmNkRngwZlNCbGJITmxJSHRjYmx4MFhIUmNkRngwWTNWeWNtVnVkRkJoY21WdWRITWdQU0JiYlc5a2RXeGxTV1JkTzF4dVhIUmNkRngwWEhSamRYSnlaVzUwUTJocGJHUk5iMlIxYkdVZ1BTQnlaWEYxWlhOME8xeHVYSFJjZEZ4MGZWeHVYSFJjZEZ4MGFXWWdLRzFsTG1Ob2FXeGtjbVZ1TG1sdVpHVjRUMllvY21WeGRXVnpkQ2tnUFQwOUlDMHhLU0I3WEc1Y2RGeDBYSFJjZEcxbExtTm9hV3hrY21WdUxuQjFjMmdvY21WeGRXVnpkQ2s3WEc1Y2RGeDBYSFI5WEc1Y2RGeDBmU0JsYkhObElIdGNibHgwWEhSY2RHTnZibk52YkdVdWQyRnliaWhjYmx4MFhIUmNkRngwWENKYlNFMVNYU0IxYm1WNGNHVmpkR1ZrSUhKbGNYVnBjbVVvWENJZ0sxeHVYSFJjZEZ4MFhIUmNkSEpsY1hWbGMzUWdLMXh1WEhSY2RGeDBYSFJjZEZ3aUtTQm1jbTl0SUdScGMzQnZjMlZrSUcxdlpIVnNaU0JjSWlBclhHNWNkRngwWEhSY2RGeDBiVzlrZFd4bFNXUmNibHgwWEhSY2RDazdYRzVjZEZ4MFhIUmpkWEp5Wlc1MFVHRnlaVzUwY3lBOUlGdGRPMXh1WEhSY2RIMWNibHgwWEhSeVpYUjFjbTRnY21WeGRXbHlaU2h5WlhGMVpYTjBLVHRjYmx4MGZUdGNibHgwZG1GeUlHTnlaV0YwWlZCeWIzQmxjblI1UkdWelkzSnBjSFJ2Y2lBOUlHWjFibU4wYVc5dUlDaHVZVzFsS1NCN1hHNWNkRngwY21WMGRYSnVJSHRjYmx4MFhIUmNkR052Ym1acFozVnlZV0pzWlRvZ2RISjFaU3hjYmx4MFhIUmNkR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNYRzVjZEZ4MFhIUm5aWFE2SUdaMWJtTjBhVzl1SUNncElIdGNibHgwWEhSY2RGeDBjbVYwZFhKdUlISmxjWFZwY21WYmJtRnRaVjA3WEc1Y2RGeDBYSFI5TEZ4dVhIUmNkRngwYzJWME9pQm1kVzVqZEdsdmJpQW9kbUZzZFdVcElIdGNibHgwWEhSY2RGeDBjbVZ4ZFdseVpWdHVZVzFsWFNBOUlIWmhiSFZsTzF4dVhIUmNkRngwZlZ4dVhIUmNkSDA3WEc1Y2RIMDdYRzVjZEdadmNpQW9kbUZ5SUc1aGJXVWdhVzRnY21WeGRXbHlaU2tnZTF4dVhIUmNkR2xtSUNoUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2NtVnhkV2x5WlN3Z2JtRnRaU2tnSmlZZ2JtRnRaU0FoUFQwZ1hDSmxYQ0lwSUh0Y2JseDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaG1iaXdnYm1GdFpTd2dZM0psWVhSbFVISnZjR1Z5ZEhsRVpYTmpjbWx3ZEc5eUtHNWhiV1VwS1R0Y2JseDBYSFI5WEc1Y2RIMWNibHgwWm00dVpTQTlJR1oxYm1OMGFXOXVJQ2hqYUhWdWEwbGtLU0I3WEc1Y2RGeDBjbVYwZFhKdUlIUnlZV05yUW14dlkydHBibWRRY205dGFYTmxLSEpsY1hWcGNtVXVaU2hqYUhWdWEwbGtLU2s3WEc1Y2RIMDdYRzVjZEhKbGRIVnliaUJtYmp0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnWTNKbFlYUmxUVzlrZFd4bFNHOTBUMkpxWldOMEtHMXZaSFZzWlVsa0xDQnRaU2tnZTF4dVhIUjJZWElnYUc5MElEMGdlMXh1WEhSY2RDOHZJSEJ5YVhaaGRHVWdjM1IxWm1aY2JseDBYSFJmWVdOalpYQjBaV1JFWlhCbGJtUmxibU5wWlhNNklIdDlMRnh1WEhSY2RGOWtaV05zYVc1bFpFUmxjR1Z1WkdWdVkybGxjem9nZTMwc1hHNWNkRngwWDNObGJHWkJZMk5sY0hSbFpEb2dabUZzYzJVc1hHNWNkRngwWDNObGJHWkVaV05zYVc1bFpEb2dabUZzYzJVc1hHNWNkRngwWDNObGJHWkpiblpoYkdsa1lYUmxaRG9nWm1Gc2MyVXNYRzVjZEZ4MFgyUnBjM0J2YzJWSVlXNWtiR1Z5Y3pvZ1cxMHNYRzVjZEZ4MFgyMWhhVzQ2SUdOMWNuSmxiblJEYUdsc1pFMXZaSFZzWlNBaFBUMGdiVzlrZFd4bFNXUXNYRzVjZEZ4MFgzSmxjWFZwY21WVFpXeG1PaUJtZFc1amRHbHZiaUFvS1NCN1hHNWNkRngwWEhSamRYSnlaVzUwVUdGeVpXNTBjeUE5SUcxbExuQmhjbVZ1ZEhNdWMyeHBZMlVvS1R0Y2JseDBYSFJjZEdOMWNuSmxiblJEYUdsc1pFMXZaSFZzWlNBOUlHMXZaSFZzWlVsa08xeHVYSFJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDazdYRzVjZEZ4MGZTeGNibHh1WEhSY2RDOHZJRTF2WkhWc1pTQkJVRWxjYmx4MFhIUmhZM1JwZG1VNklIUnlkV1VzWEc1Y2RGeDBZV05qWlhCME9pQm1kVzVqZEdsdmJpQW9aR1Z3TENCallXeHNZbUZqYXlrZ2UxeHVYSFJjZEZ4MGFXWWdLR1JsY0NBOVBUMGdkVzVrWldacGJtVmtLU0JvYjNRdVgzTmxiR1pCWTJObGNIUmxaQ0E5SUhSeWRXVTdYRzVjZEZ4MFhIUmxiSE5sSUdsbUlDaDBlWEJsYjJZZ1pHVndJRDA5UFNCY0ltWjFibU4wYVc5dVhDSXBJR2h2ZEM1ZmMyVnNaa0ZqWTJWd2RHVmtJRDBnWkdWd08xeHVYSFJjZEZ4MFpXeHpaU0JwWmlBb2RIbHdaVzltSUdSbGNDQTlQVDBnWENKdlltcGxZM1JjSWlBbUppQmtaWEFnSVQwOUlHNTFiR3dwWEc1Y2RGeDBYSFJjZEdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z1pHVndMbXhsYm1kMGFEc2dhU3NyS1Z4dVhIUmNkRngwWEhSY2RHaHZkQzVmWVdOalpYQjBaV1JFWlhCbGJtUmxibU5wWlhOYlpHVndXMmxkWFNBOUlHTmhiR3hpWVdOcklIeDhJR1oxYm1OMGFXOXVJQ2dwSUh0OU8xeHVYSFJjZEZ4MFpXeHpaU0JvYjNRdVgyRmpZMlZ3ZEdWa1JHVndaVzVrWlc1amFXVnpXMlJsY0YwZ1BTQmpZV3hzWW1GamF5QjhmQ0JtZFc1amRHbHZiaUFvS1NCN2ZUdGNibHgwWEhSOUxGeHVYSFJjZEdSbFkyeHBibVU2SUdaMWJtTjBhVzl1SUNoa1pYQXBJSHRjYmx4MFhIUmNkR2xtSUNoa1pYQWdQVDA5SUhWdVpHVm1hVzVsWkNrZ2FHOTBMbDl6Wld4bVJHVmpiR2x1WldRZ1BTQjBjblZsTzF4dVhIUmNkRngwWld4elpTQnBaaUFvZEhsd1pXOW1JR1JsY0NBOVBUMGdYQ0p2WW1wbFkzUmNJaUFtSmlCa1pYQWdJVDA5SUc1MWJHd3BYRzVjZEZ4MFhIUmNkR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnWkdWd0xteGxibWQwYURzZ2FTc3JLVnh1WEhSY2RGeDBYSFJjZEdodmRDNWZaR1ZqYkdsdVpXUkVaWEJsYm1SbGJtTnBaWE5iWkdWd1cybGRYU0E5SUhSeWRXVTdYRzVjZEZ4MFhIUmxiSE5sSUdodmRDNWZaR1ZqYkdsdVpXUkVaWEJsYm1SbGJtTnBaWE5iWkdWd1hTQTlJSFJ5ZFdVN1hHNWNkRngwZlN4Y2JseDBYSFJrYVhOd2IzTmxPaUJtZFc1amRHbHZiaUFvWTJGc2JHSmhZMnNwSUh0Y2JseDBYSFJjZEdodmRDNWZaR2x6Y0c5elpVaGhibVJzWlhKekxuQjFjMmdvWTJGc2JHSmhZMnNwTzF4dVhIUmNkSDBzWEc1Y2RGeDBZV1JrUkdsemNHOXpaVWhoYm1Sc1pYSTZJR1oxYm1OMGFXOXVJQ2hqWVd4c1ltRmpheWtnZTF4dVhIUmNkRngwYUc5MExsOWthWE53YjNObFNHRnVaR3hsY25NdWNIVnphQ2hqWVd4c1ltRmpheWs3WEc1Y2RGeDBmU3hjYmx4MFhIUnlaVzF2ZG1WRWFYTndiM05sU0dGdVpHeGxjam9nWm5WdVkzUnBiMjRnS0dOaGJHeGlZV05yS1NCN1hHNWNkRngwWEhSMllYSWdhV1I0SUQwZ2FHOTBMbDlrYVhOd2IzTmxTR0Z1Wkd4bGNuTXVhVzVrWlhoUFppaGpZV3hzWW1GamF5azdYRzVjZEZ4MFhIUnBaaUFvYVdSNElENDlJREFwSUdodmRDNWZaR2x6Y0c5elpVaGhibVJzWlhKekxuTndiR2xqWlNocFpIZ3NJREVwTzF4dVhIUmNkSDBzWEc1Y2RGeDBhVzUyWVd4cFpHRjBaVG9nWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFJjZEZ4MGRHaHBjeTVmYzJWc1prbHVkbUZzYVdSaGRHVmtJRDBnZEhKMVpUdGNibHgwWEhSY2RITjNhWFJqYUNBb1kzVnljbVZ1ZEZOMFlYUjFjeWtnZTF4dVhIUmNkRngwWEhSallYTmxJRndpYVdSc1pWd2lPbHh1WEhSY2RGeDBYSFJjZEdOMWNuSmxiblJWY0dSaGRHVkJjSEJzZVVoaGJtUnNaWEp6SUQwZ1cxMDdYRzVjZEZ4MFhIUmNkRngwVDJKcVpXTjBMbXRsZVhNb1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NW9iWEpKS1M1bWIzSkZZV05vS0daMWJtTjBhVzl1SUNoclpYa3BJSHRjYmx4MFhIUmNkRngwWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVhRzF5U1Z0clpYbGRLRnh1WEhSY2RGeDBYSFJjZEZ4MFhIUnRiMlIxYkdWSlpDeGNibHgwWEhSY2RGeDBYSFJjZEZ4MFkzVnljbVZ1ZEZWd1pHRjBaVUZ3Y0d4NVNHRnVaR3hsY25OY2JseDBYSFJjZEZ4MFhIUmNkQ2s3WEc1Y2RGeDBYSFJjZEZ4MGZTazdYRzVjZEZ4MFhIUmNkRngwYzJWMFUzUmhkSFZ6S0Z3aWNtVmhaSGxjSWlrN1hHNWNkRngwWEhSY2RGeDBZbkpsWVdzN1hHNWNkRngwWEhSY2RHTmhjMlVnWENKeVpXRmtlVndpT2x4dVhIUmNkRngwWEhSY2RFOWlhbVZqZEM1clpYbHpLRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YUcxeVNTa3VabTl5UldGamFDaG1kVzVqZEdsdmJpQW9hMlY1S1NCN1hHNWNkRngwWEhSY2RGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1odGNrbGJhMlY1WFNoY2JseDBYSFJjZEZ4MFhIUmNkRngwYlc5a2RXeGxTV1FzWEc1Y2RGeDBYSFJjZEZ4MFhIUmNkR04xY25KbGJuUlZjR1JoZEdWQmNIQnNlVWhoYm1Sc1pYSnpYRzVjZEZ4MFhIUmNkRngwWEhRcE8xeHVYSFJjZEZ4MFhIUmNkSDBwTzF4dVhIUmNkRngwWEhSY2RHSnlaV0ZyTzF4dVhIUmNkRngwWEhSallYTmxJRndpY0hKbGNHRnlaVndpT2x4dVhIUmNkRngwWEhSallYTmxJRndpWTJobFkydGNJanBjYmx4MFhIUmNkRngwWTJGelpTQmNJbVJwYzNCdmMyVmNJanBjYmx4MFhIUmNkRngwWTJGelpTQmNJbUZ3Y0d4NVhDSTZYRzVjZEZ4MFhIUmNkRngwS0hGMVpYVmxaRWx1ZG1Gc2FXUmhkR1ZrVFc5a2RXeGxjeUE5SUhGMVpYVmxaRWx1ZG1Gc2FXUmhkR1ZrVFc5a2RXeGxjeUI4ZkNCYlhTa3VjSFZ6YUNoY2JseDBYSFJjZEZ4MFhIUmNkRzF2WkhWc1pVbGtYRzVjZEZ4MFhIUmNkRngwS1R0Y2JseDBYSFJjZEZ4MFhIUmljbVZoYXp0Y2JseDBYSFJjZEZ4MFpHVm1ZWFZzZERwY2JseDBYSFJjZEZ4MFhIUXZMeUJwWjI1dmNtVWdjbVZ4ZFdWemRITWdhVzRnWlhKeWIzSWdjM1JoZEdWelhHNWNkRngwWEhSY2RGeDBZbkpsWVdzN1hHNWNkRngwWEhSOVhHNWNkRngwZlN4Y2JseHVYSFJjZEM4dklFMWhibUZuWlcxbGJuUWdRVkJKWEc1Y2RGeDBZMmhsWTJzNklHaHZkRU5vWldOckxGeHVYSFJjZEdGd2NHeDVPaUJvYjNSQmNIQnNlU3hjYmx4MFhIUnpkR0YwZFhNNklHWjFibU4wYVc5dUlDaHNLU0I3WEc1Y2RGeDBYSFJwWmlBb0lXd3BJSEpsZEhWeWJpQmpkWEp5Wlc1MFUzUmhkSFZ6TzF4dVhIUmNkRngwY21WbmFYTjBaWEpsWkZOMFlYUjFjMGhoYm1Sc1pYSnpMbkIxYzJnb2JDazdYRzVjZEZ4MGZTeGNibHgwWEhSaFpHUlRkR0YwZFhOSVlXNWtiR1Z5T2lCbWRXNWpkR2x2YmlBb2JDa2dlMXh1WEhSY2RGeDBjbVZuYVhOMFpYSmxaRk4wWVhSMWMwaGhibVJzWlhKekxuQjFjMmdvYkNrN1hHNWNkRngwZlN4Y2JseDBYSFJ5WlcxdmRtVlRkR0YwZFhOSVlXNWtiR1Z5T2lCbWRXNWpkR2x2YmlBb2JDa2dlMXh1WEhSY2RGeDBkbUZ5SUdsa2VDQTlJSEpsWjJsemRHVnlaV1JUZEdGMGRYTklZVzVrYkdWeWN5NXBibVJsZUU5bUtHd3BPMXh1WEhSY2RGeDBhV1lnS0dsa2VDQStQU0F3S1NCeVpXZHBjM1JsY21Wa1UzUmhkSFZ6U0dGdVpHeGxjbk11YzNCc2FXTmxLR2xrZUN3Z01TazdYRzVjZEZ4MGZTeGNibHh1WEhSY2RDOHZhVzVvWlhKcGRDQm1jbTl0SUhCeVpYWnBiM1Z6SUdScGMzQnZjMlVnWTJGc2JGeHVYSFJjZEdSaGRHRTZJR04xY25KbGJuUk5iMlIxYkdWRVlYUmhXMjF2WkhWc1pVbGtYVnh1WEhSOU8xeHVYSFJqZFhKeVpXNTBRMmhwYkdSTmIyUjFiR1VnUFNCMWJtUmxabWx1WldRN1hHNWNkSEpsZEhWeWJpQm9iM1E3WEc1OVhHNWNibVoxYm1OMGFXOXVJSE5sZEZOMFlYUjFjeWh1WlhkVGRHRjBkWE1wSUh0Y2JseDBZM1Z5Y21WdWRGTjBZWFIxY3lBOUlHNWxkMU4wWVhSMWN6dGNibHgwWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCeVpXZHBjM1JsY21Wa1UzUmhkSFZ6U0dGdVpHeGxjbk11YkdWdVozUm9PeUJwS3lzcFhHNWNkRngwY21WbmFYTjBaWEpsWkZOMFlYUjFjMGhoYm1Sc1pYSnpXMmxkTG1OaGJHd29iblZzYkN3Z2JtVjNVM1JoZEhWektUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2RISmhZMnRDYkc5amEybHVaMUJ5YjIxcGMyVW9jSEp2YldselpTa2dlMXh1WEhSemQybDBZMmdnS0dOMWNuSmxiblJUZEdGMGRYTXBJSHRjYmx4MFhIUmpZWE5sSUZ3aWNtVmhaSGxjSWpwY2JseDBYSFJjZEhObGRGTjBZWFIxY3loY0luQnlaWEJoY21WY0lpazdYRzVjZEZ4MFhIUmliRzlqYTJsdVoxQnliMjFwYzJWekxuQjFjMmdvY0hKdmJXbHpaU2s3WEc1Y2RGeDBYSFIzWVdsMFJtOXlRbXh2WTJ0cGJtZFFjbTl0YVhObGN5aG1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RGeDBYSFJjZEhObGRGTjBZWFIxY3loY0luSmxZV1I1WENJcE8xeHVYSFJjZEZ4MGZTazdYRzVjZEZ4MFhIUnlaWFIxY200Z2NISnZiV2x6WlR0Y2JseDBYSFJqWVhObElGd2ljSEpsY0dGeVpWd2lPbHh1WEhSY2RGeDBZbXh2WTJ0cGJtZFFjbTl0YVhObGN5NXdkWE5vS0hCeWIyMXBjMlVwTzF4dVhIUmNkRngwY21WMGRYSnVJSEJ5YjIxcGMyVTdYRzVjZEZ4MFpHVm1ZWFZzZERwY2JseDBYSFJjZEhKbGRIVnliaUJ3Y205dGFYTmxPMXh1WEhSOVhHNTlYRzVjYm1aMWJtTjBhVzl1SUhkaGFYUkdiM0pDYkc5amEybHVaMUJ5YjIxcGMyVnpLR1p1S1NCN1hHNWNkR2xtSUNoaWJHOWphMmx1WjFCeWIyMXBjMlZ6TG14bGJtZDBhQ0E5UFQwZ01Da2djbVYwZFhKdUlHWnVLQ2s3WEc1Y2RIWmhjaUJpYkc5amEyVnlJRDBnWW14dlkydHBibWRRY205dGFYTmxjenRjYmx4MFlteHZZMnRwYm1kUWNtOXRhWE5sY3lBOUlGdGRPMXh1WEhSeVpYUjFjbTRnVUhKdmJXbHpaUzVoYkd3b1lteHZZMnRsY2lrdWRHaGxiaWhtZFc1amRHbHZiaUFvS1NCN1hHNWNkRngwY21WMGRYSnVJSGRoYVhSR2IzSkNiRzlqYTJsdVoxQnliMjFwYzJWektHWnVLVHRjYmx4MGZTazdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHaHZkRU5vWldOcktHRndjR3g1VDI1VmNHUmhkR1VwSUh0Y2JseDBhV1lnS0dOMWNuSmxiblJUZEdGMGRYTWdJVDA5SUZ3aWFXUnNaVndpS1NCN1hHNWNkRngwZEdoeWIzY2dibVYzSUVWeWNtOXlLRndpWTJobFkyc29LU0JwY3lCdmJteDVJR0ZzYkc5M1pXUWdhVzRnYVdSc1pTQnpkR0YwZFhOY0lpazdYRzVjZEgxY2JseDBjMlYwVTNSaGRIVnpLRndpWTJobFkydGNJaWs3WEc1Y2RISmxkSFZ5YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtaHRjazBvS1M1MGFHVnVLR1oxYm1OMGFXOXVJQ2gxY0dSaGRHVXBJSHRjYmx4MFhIUnBaaUFvSVhWd1pHRjBaU2tnZTF4dVhIUmNkRngwYzJWMFUzUmhkSFZ6S0dGd2NHeDVTVzUyWVd4cFpHRjBaV1JOYjJSMWJHVnpLQ2tnUHlCY0luSmxZV1I1WENJZ09pQmNJbWxrYkdWY0lpazdYRzVjZEZ4MFhIUnlaWFIxY200Z2JuVnNiRHRjYmx4MFhIUjlYRzVjYmx4MFhIUnpaWFJUZEdGMGRYTW9YQ0p3Y21Wd1lYSmxYQ0lwTzF4dVhHNWNkRngwZG1GeUlIVndaR0YwWldSTmIyUjFiR1Z6SUQwZ1cxMDdYRzVjZEZ4MFlteHZZMnRwYm1kUWNtOXRhWE5sY3lBOUlGdGRPMXh1WEhSY2RHTjFjbkpsYm5SVmNHUmhkR1ZCY0hCc2VVaGhibVJzWlhKeklEMGdXMTA3WEc1Y2JseDBYSFJ5WlhSMWNtNGdVSEp2YldselpTNWhiR3dvWEc1Y2RGeDBYSFJQWW1wbFkzUXVhMlY1Y3loZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtaHRja01wTG5KbFpIVmpaU2htZFc1amRHbHZiaUFvWEc1Y2RGeDBYSFJjZEhCeWIyMXBjMlZ6TEZ4dVhIUmNkRngwWEhSclpYbGNibHgwWEhSY2RDa2dlMXh1WEhSY2RGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1odGNrTmJhMlY1WFNoY2JseDBYSFJjZEZ4MFhIUjFjR1JoZEdVdVl5eGNibHgwWEhSY2RGeDBYSFIxY0dSaGRHVXVjaXhjYmx4MFhIUmNkRngwWEhSMWNHUmhkR1V1YlN4Y2JseDBYSFJjZEZ4MFhIUndjbTl0YVhObGN5eGNibHgwWEhSY2RGeDBYSFJqZFhKeVpXNTBWWEJrWVhSbFFYQndiSGxJWVc1a2JHVnljeXhjYmx4MFhIUmNkRngwWEhSMWNHUmhkR1ZrVFc5a2RXeGxjMXh1WEhSY2RGeDBYSFFwTzF4dVhIUmNkRngwWEhSeVpYUjFjbTRnY0hKdmJXbHpaWE03WEc1Y2RGeDBYSFI5TEZ4dVhIUmNkRngwVzEwcFhHNWNkRngwS1M1MGFHVnVLR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUIzWVdsMFJtOXlRbXh2WTJ0cGJtZFFjbTl0YVhObGN5aG1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RGeDBYSFJjZEdsbUlDaGhjSEJzZVU5dVZYQmtZWFJsS1NCN1hHNWNkRngwWEhSY2RGeDBjbVYwZFhKdUlHbHVkR1Z5Ym1Gc1FYQndiSGtvWVhCd2JIbFBibFZ3WkdGMFpTazdYRzVjZEZ4MFhIUmNkSDBnWld4elpTQjdYRzVjZEZ4MFhIUmNkRngwYzJWMFUzUmhkSFZ6S0Z3aWNtVmhaSGxjSWlrN1hHNWNibHgwWEhSY2RGeDBYSFJ5WlhSMWNtNGdkWEJrWVhSbFpFMXZaSFZzWlhNN1hHNWNkRngwWEhSY2RIMWNibHgwWEhSY2RIMHBPMXh1WEhSY2RIMHBPMXh1WEhSOUtUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2FHOTBRWEJ3Ykhrb2IzQjBhVzl1Y3lrZ2UxeHVYSFJwWmlBb1kzVnljbVZ1ZEZOMFlYUjFjeUFoUFQwZ1hDSnlaV0ZrZVZ3aUtTQjdYRzVjZEZ4MGNtVjBkWEp1SUZCeWIyMXBjMlV1Y21WemIyeDJaU2dwTG5Sb1pXNG9ablZ1WTNScGIyNGdLQ2tnZTF4dVhIUmNkRngwZEdoeWIzY2dibVYzSUVWeWNtOXlLRndpWVhCd2JIa29LU0JwY3lCdmJteDVJR0ZzYkc5M1pXUWdhVzRnY21WaFpIa2djM1JoZEhWelhDSXBPMXh1WEhSY2RIMHBPMXh1WEhSOVhHNWNkSEpsZEhWeWJpQnBiblJsY201aGJFRndjR3g1S0c5d2RHbHZibk1wTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJwYm5SbGNtNWhiRUZ3Y0d4NUtHOXdkR2x2Ym5NcElIdGNibHgwYjNCMGFXOXVjeUE5SUc5d2RHbHZibk1nZkh3Z2UzMDdYRzVjYmx4MFlYQndiSGxKYm5aaGJHbGtZWFJsWkUxdlpIVnNaWE1vS1R0Y2JseHVYSFIyWVhJZ2NtVnpkV3gwY3lBOUlHTjFjbkpsYm5SVmNHUmhkR1ZCY0hCc2VVaGhibVJzWlhKekxtMWhjQ2htZFc1amRHbHZiaUFvYUdGdVpHeGxjaWtnZTF4dVhIUmNkSEpsZEhWeWJpQm9ZVzVrYkdWeUtHOXdkR2x2Ym5NcE8xeHVYSFI5S1R0Y2JseDBZM1Z5Y21WdWRGVndaR0YwWlVGd2NHeDVTR0Z1Wkd4bGNuTWdQU0IxYm1SbFptbHVaV1E3WEc1Y2JseDBkbUZ5SUdWeWNtOXljeUE5SUhKbGMzVnNkSE5jYmx4MFhIUXViV0Z3S0daMWJtTjBhVzl1SUNoeUtTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z2NpNWxjbkp2Y2p0Y2JseDBYSFI5S1Z4dVhIUmNkQzVtYVd4MFpYSW9RbTl2YkdWaGJpazdYRzVjYmx4MGFXWWdLR1Z5Y205eWN5NXNaVzVuZEdnZ1BpQXdLU0I3WEc1Y2RGeDBjMlYwVTNSaGRIVnpLRndpWVdKdmNuUmNJaWs3WEc1Y2RGeDBjbVYwZFhKdUlGQnliMjFwYzJVdWNtVnpiMngyWlNncExuUm9aVzRvWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFJjZEZ4MGRHaHliM2NnWlhKeWIzSnpXekJkTzF4dVhIUmNkSDBwTzF4dVhIUjlYRzVjYmx4MEx5OGdUbTkzSUdsdUlGd2laR2x6Y0c5elpWd2lJSEJvWVhObFhHNWNkSE5sZEZOMFlYUjFjeWhjSW1ScGMzQnZjMlZjSWlrN1hHNWNibHgwY21WemRXeDBjeTVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2h5WlhOMWJIUXBJSHRjYmx4MFhIUnBaaUFvY21WemRXeDBMbVJwYzNCdmMyVXBJSEpsYzNWc2RDNWthWE53YjNObEtDazdYRzVjZEgwcE8xeHVYRzVjZEM4dklFNXZkeUJwYmlCY0ltRndjR3g1WENJZ2NHaGhjMlZjYmx4MGMyVjBVM1JoZEhWektGd2lZWEJ3YkhsY0lpazdYRzVjYmx4MGRtRnlJR1Z5Y205eU8xeHVYSFIyWVhJZ2NtVndiM0owUlhKeWIzSWdQU0JtZFc1amRHbHZiaUFvWlhKeUtTQjdYRzVjZEZ4MGFXWWdLQ0ZsY25KdmNpa2daWEp5YjNJZ1BTQmxjbkk3WEc1Y2RIMDdYRzVjYmx4MGRtRnlJRzkxZEdSaGRHVmtUVzlrZFd4bGN5QTlJRnRkTzF4dVhIUnlaWE4xYkhSekxtWnZja1ZoWTJnb1puVnVZM1JwYjI0Z0tISmxjM1ZzZENrZ2UxeHVYSFJjZEdsbUlDaHlaWE4xYkhRdVlYQndiSGtwSUh0Y2JseDBYSFJjZEhaaGNpQnRiMlIxYkdWeklEMGdjbVZ6ZFd4MExtRndjR3g1S0hKbGNHOXlkRVZ5Y205eUtUdGNibHgwWEhSY2RHbG1JQ2h0YjJSMWJHVnpLU0I3WEc1Y2RGeDBYSFJjZEdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2JXOWtkV3hsY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1WEhSY2RGeDBYSFJjZEc5MWRHUmhkR1ZrVFc5a2RXeGxjeTV3ZFhOb0tHMXZaSFZzWlhOYmFWMHBPMXh1WEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFI5WEc1Y2RGeDBmVnh1WEhSOUtUdGNibHh1WEhRdkx5Qm9ZVzVrYkdVZ1pYSnliM0p6SUdsdUlHRmpZMlZ3ZENCb1lXNWtiR1Z5Y3lCaGJtUWdjMlZzWmlCaFkyTmxjSFJsWkNCdGIyUjFiR1VnYkc5aFpGeHVYSFJwWmlBb1pYSnliM0lwSUh0Y2JseDBYSFJ6WlhSVGRHRjBkWE1vWENKbVlXbHNYQ0lwTzF4dVhIUmNkSEpsZEhWeWJpQlFjbTl0YVhObExuSmxjMjlzZG1Vb0tTNTBhR1Z1S0daMWJtTjBhVzl1SUNncElIdGNibHgwWEhSY2RIUm9jbTkzSUdWeWNtOXlPMXh1WEhSY2RIMHBPMXh1WEhSOVhHNWNibHgwYVdZZ0tIRjFaWFZsWkVsdWRtRnNhV1JoZEdWa1RXOWtkV3hsY3lrZ2UxeHVYSFJjZEhKbGRIVnliaUJwYm5SbGNtNWhiRUZ3Y0d4NUtHOXdkR2x2Ym5NcExuUm9aVzRvWm5WdVkzUnBiMjRnS0d4cGMzUXBJSHRjYmx4MFhIUmNkRzkxZEdSaGRHVmtUVzlrZFd4bGN5NW1iM0pGWVdOb0tHWjFibU4wYVc5dUlDaHRiMlIxYkdWSlpDa2dlMXh1WEhSY2RGeDBYSFJwWmlBb2JHbHpkQzVwYm1SbGVFOW1LRzF2WkhWc1pVbGtLU0E4SURBcElHeHBjM1F1Y0hWemFDaHRiMlIxYkdWSlpDazdYRzVjZEZ4MFhIUjlLVHRjYmx4MFhIUmNkSEpsZEhWeWJpQnNhWE4wTzF4dVhIUmNkSDBwTzF4dVhIUjlYRzVjYmx4MGMyVjBVM1JoZEhWektGd2lhV1JzWlZ3aUtUdGNibHgwY21WMGRYSnVJRkJ5YjIxcGMyVXVjbVZ6YjJ4MlpTaHZkWFJrWVhSbFpFMXZaSFZzWlhNcE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCaGNIQnNlVWx1ZG1Gc2FXUmhkR1ZrVFc5a2RXeGxjeWdwSUh0Y2JseDBhV1lnS0hGMVpYVmxaRWx1ZG1Gc2FXUmhkR1ZrVFc5a2RXeGxjeWtnZTF4dVhIUmNkR2xtSUNnaFkzVnljbVZ1ZEZWd1pHRjBaVUZ3Y0d4NVNHRnVaR3hsY25NcElHTjFjbkpsYm5SVmNHUmhkR1ZCY0hCc2VVaGhibVJzWlhKeklEMGdXMTA3WEc1Y2RGeDBUMkpxWldOMExtdGxlWE1vWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1b2JYSkpLUzVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2hyWlhrcElIdGNibHgwWEhSY2RIRjFaWFZsWkVsdWRtRnNhV1JoZEdWa1RXOWtkV3hsY3k1bWIzSkZZV05vS0daMWJtTjBhVzl1SUNodGIyUjFiR1ZKWkNrZ2UxeHVYSFJjZEZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbWh0Y2tsYmEyVjVYU2hjYmx4MFhIUmNkRngwWEhSdGIyUjFiR1ZKWkN4Y2JseDBYSFJjZEZ4MFhIUmpkWEp5Wlc1MFZYQmtZWFJsUVhCd2JIbElZVzVrYkdWeWMxeHVYSFJjZEZ4MFhIUXBPMXh1WEhSY2RGeDBmU2s3WEc1Y2RGeDBmU2s3WEc1Y2RGeDBjWFZsZFdWa1NXNTJZV3hwWkdGMFpXUk5iMlIxYkdWeklEMGdkVzVrWldacGJtVmtPMXh1WEhSY2RISmxkSFZ5YmlCMGNuVmxPMXh1WEhSOVhHNTlJaXdpWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1d0lEMGdYQ0pjSWpzaUxDSXZMeUJ1YnlCaVlYTmxWVkpKWEc1Y2JpOHZJRzlpYW1WamRDQjBieUJ6ZEc5eVpTQnNiMkZrWldRZ1lXNWtJR3h2WVdScGJtY2dZMmgxYm10elhHNHZMeUIxYm1SbFptbHVaV1FnUFNCamFIVnVheUJ1YjNRZ2JHOWhaR1ZrTENCdWRXeHNJRDBnWTJoMWJtc2djSEpsYkc5aFpHVmtMM0J5WldabGRHTm9aV1JjYmk4dklGQnliMjFwYzJVZ1BTQmphSFZ1YXlCc2IyRmthVzVuTENBd0lEMGdZMmgxYm1zZ2JHOWhaR1ZrWEc1MllYSWdhVzV6ZEdGc2JHVmtRMmgxYm10eklEMGdlMXh1WEhSY0lrbGpiMjV6WENJNklEQmNibjA3WEc1Y2JseHVMeThnYm04Z1kyaDFibXNnYjI0Z1pHVnRZVzVrSUd4dllXUnBibWRjYmx4dUx5OGdibThnY0hKbFptVjBZMmhwYm1kY2JseHVMeThnYm04Z2NISmxiRzloWkdWa1hHNWNiblpoY2lCamRYSnlaVzUwVlhCa1lYUmxaRTF2WkhWc1pYTk1hWE4wTzF4dWRtRnlJSGRoYVhScGJtZFZjR1JoZEdWU1pYTnZiSFpsY3lBOUlIdDlPMXh1Wm5WdVkzUnBiMjRnYkc5aFpGVndaR0YwWlVOb2RXNXJLR05vZFc1clNXUXBJSHRjYmx4MGNtVjBkWEp1SUc1bGR5QlFjbTl0YVhObEtDaHlaWE52YkhabExDQnlaV3BsWTNRcElEMCtJSHRjYmx4MFhIUjNZV2wwYVc1blZYQmtZWFJsVW1WemIyeDJaWE5iWTJoMWJtdEpaRjBnUFNCeVpYTnZiSFpsTzF4dVhIUmNkQzh2SUhOMFlYSjBJSFZ3WkdGMFpTQmphSFZ1YXlCc2IyRmthVzVuWEc1Y2RGeDBkbUZ5SUhWeWJDQTlJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y0NBcklGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVhSFVvWTJoMWJtdEpaQ2s3WEc1Y2RGeDBMeThnWTNKbFlYUmxJR1Z5Y205eUlHSmxabTl5WlNCemRHRmpheUIxYm5kdmRXNWtJSFJ2SUdkbGRDQjFjMlZtZFd3Z2MzUmhZMnQwY21GalpTQnNZWFJsY2x4dVhIUmNkSFpoY2lCbGNuSnZjaUE5SUc1bGR5QkZjbkp2Y2lncE8xeHVYSFJjZEhaaGNpQnNiMkZrYVc1blJXNWtaV1FnUFNBb1pYWmxiblFwSUQwK0lIdGNibHgwWEhSY2RHbG1LSGRoYVhScGJtZFZjR1JoZEdWU1pYTnZiSFpsYzF0amFIVnVhMGxrWFNrZ2UxeHVYSFJjZEZ4MFhIUjNZV2wwYVc1blZYQmtZWFJsVW1WemIyeDJaWE5iWTJoMWJtdEpaRjBnUFNCMWJtUmxabWx1WldSY2JseDBYSFJjZEZ4MGRtRnlJR1Z5Y205eVZIbHdaU0E5SUdWMlpXNTBJQ1ltSUNobGRtVnVkQzUwZVhCbElEMDlQU0FuYkc5aFpDY2dQeUFuYldsemMybHVaeWNnT2lCbGRtVnVkQzUwZVhCbEtUdGNibHgwWEhSY2RGeDBkbUZ5SUhKbFlXeFRjbU1nUFNCbGRtVnVkQ0FtSmlCbGRtVnVkQzUwWVhKblpYUWdKaVlnWlhabGJuUXVkR0Z5WjJWMExuTnlZenRjYmx4MFhIUmNkRngwWlhKeWIzSXViV1Z6YzJGblpTQTlJQ2RNYjJGa2FXNW5JR2h2ZENCMWNHUmhkR1VnWTJoMWJtc2dKeUFySUdOb2RXNXJTV1FnS3lBbklHWmhhV3hsWkM1Y1hHNG9KeUFySUdWeWNtOXlWSGx3WlNBcklDYzZJQ2NnS3lCeVpXRnNVM0pqSUNzZ0p5a25PMXh1WEhSY2RGeDBYSFJsY25KdmNpNXVZVzFsSUQwZ0owTm9kVzVyVEc5aFpFVnljbTl5Snp0Y2JseDBYSFJjZEZ4MFpYSnliM0l1ZEhsd1pTQTlJR1Z5Y205eVZIbHdaVHRjYmx4MFhIUmNkRngwWlhKeWIzSXVjbVZ4ZFdWemRDQTlJSEpsWVd4VGNtTTdYRzVjZEZ4MFhIUmNkSEpsYW1WamRDaGxjbkp2Y2lrN1hHNWNkRngwWEhSOVhHNWNkRngwZlR0Y2JseDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG13b2RYSnNMQ0JzYjJGa2FXNW5SVzVrWldRcE8xeHVYSFI5S1R0Y2JuMWNibHh1YzJWc1psdGNJbmRsWW5CaFkydEliM1JWY0dSaGRHVkpZMjl1YzF3aVhTQTlJQ2hqYUhWdWEwbGtMQ0J0YjNKbFRXOWtkV3hsY3l3Z2NuVnVkR2x0WlNrZ1BUNGdlMXh1WEhSbWIzSW9kbUZ5SUcxdlpIVnNaVWxrSUdsdUlHMXZjbVZOYjJSMWJHVnpLU0I3WEc1Y2RGeDBhV1lvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHMXZjbVZOYjJSMWJHVnpMQ0J0YjJSMWJHVkpaQ2twSUh0Y2JseDBYSFJjZEdOMWNuSmxiblJWY0dSaGRHVmJiVzlrZFd4bFNXUmRJRDBnYlc5eVpVMXZaSFZzWlhOYmJXOWtkV3hsU1dSZE8xeHVYSFJjZEZ4MGFXWW9ZM1Z5Y21WdWRGVndaR0YwWldSTmIyUjFiR1Z6VEdsemRDa2dZM1Z5Y21WdWRGVndaR0YwWldSTmIyUjFiR1Z6VEdsemRDNXdkWE5vS0cxdlpIVnNaVWxrS1R0Y2JseDBYSFI5WEc1Y2RIMWNibHgwYVdZb2NuVnVkR2x0WlNrZ1kzVnljbVZ1ZEZWd1pHRjBaVkoxYm5ScGJXVXVjSFZ6YUNoeWRXNTBhVzFsS1R0Y2JseDBhV1lvZDJGcGRHbHVaMVZ3WkdGMFpWSmxjMjlzZG1WelcyTm9kVzVyU1dSZEtTQjdYRzVjZEZ4MGQyRnBkR2x1WjFWd1pHRjBaVkpsYzI5c2RtVnpXMk5vZFc1clNXUmRLQ2s3WEc1Y2RGeDBkMkZwZEdsdVoxVndaR0YwWlZKbGMyOXNkbVZ6VzJOb2RXNXJTV1JkSUQwZ2RXNWtaV1pwYm1Wa08xeHVYSFI5WEc1OU8xeHVYRzUyWVhJZ1kzVnljbVZ1ZEZWd1pHRjBaVU5vZFc1cmN6dGNiblpoY2lCamRYSnlaVzUwVlhCa1lYUmxPMXh1ZG1GeUlHTjFjbkpsYm5SVmNHUmhkR1ZTWlcxdmRtVmtRMmgxYm10ek8xeHVkbUZ5SUdOMWNuSmxiblJWY0dSaGRHVlNkVzUwYVcxbE8xeHVablZ1WTNScGIyNGdZWEJ3YkhsSVlXNWtiR1Z5S0c5d2RHbHZibk1wSUh0Y2JseDBhV1lnS0Y5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVppa2daR1ZzWlhSbElGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaaTVxYzI5dWNFaHRjanRjYmx4MFkzVnljbVZ1ZEZWd1pHRjBaVU5vZFc1cmN5QTlJSFZ1WkdWbWFXNWxaRHRjYmx4MFpuVnVZM1JwYjI0Z1oyVjBRV1ptWldOMFpXUk5iMlIxYkdWRlptWmxZM1J6S0hWd1pHRjBaVTF2WkhWc1pVbGtLU0I3WEc1Y2RGeDBkbUZ5SUc5MWRHUmhkR1ZrVFc5a2RXeGxjeUE5SUZ0MWNHUmhkR1ZOYjJSMWJHVkpaRjA3WEc1Y2RGeDBkbUZ5SUc5MWRHUmhkR1ZrUkdWd1pXNWtaVzVqYVdWeklEMGdlMzA3WEc1Y2JseDBYSFIyWVhJZ2NYVmxkV1VnUFNCdmRYUmtZWFJsWkUxdlpIVnNaWE11YldGd0tHWjFibU4wYVc5dUlDaHBaQ2tnZTF4dVhIUmNkRngwY21WMGRYSnVJSHRjYmx4MFhIUmNkRngwWTJoaGFXNDZJRnRwWkYwc1hHNWNkRngwWEhSY2RHbGtPaUJwWkZ4dVhIUmNkRngwZlR0Y2JseDBYSFI5S1R0Y2JseDBYSFIzYUdsc1pTQW9jWFZsZFdVdWJHVnVaM1JvSUQ0Z01Da2dlMXh1WEhSY2RGeDBkbUZ5SUhGMVpYVmxTWFJsYlNBOUlIRjFaWFZsTG5CdmNDZ3BPMXh1WEhSY2RGeDBkbUZ5SUcxdlpIVnNaVWxrSUQwZ2NYVmxkV1ZKZEdWdExtbGtPMXh1WEhSY2RGeDBkbUZ5SUdOb1lXbHVJRDBnY1hWbGRXVkpkR1Z0TG1Ob1lXbHVPMXh1WEhSY2RGeDBkbUZ5SUcxdlpIVnNaU0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVkxdHRiMlIxYkdWSlpGMDdYRzVjZEZ4MFhIUnBaaUFvWEc1Y2RGeDBYSFJjZENGdGIyUjFiR1VnZkh4Y2JseDBYSFJjZEZ4MEtHMXZaSFZzWlM1b2IzUXVYM05sYkdaQlkyTmxjSFJsWkNBbUppQWhiVzlrZFd4bExtaHZkQzVmYzJWc1prbHVkbUZzYVdSaGRHVmtLVnh1WEhSY2RGeDBLVnh1WEhSY2RGeDBYSFJqYjI1MGFXNTFaVHRjYmx4MFhIUmNkR2xtSUNodGIyUjFiR1V1YUc5MExsOXpaV3htUkdWamJHbHVaV1FwSUh0Y2JseDBYSFJjZEZ4MGNtVjBkWEp1SUh0Y2JseDBYSFJjZEZ4MFhIUjBlWEJsT2lCY0luTmxiR1l0WkdWamJHbHVaV1JjSWl4Y2JseDBYSFJjZEZ4MFhIUmphR0ZwYmpvZ1kyaGhhVzRzWEc1Y2RGeDBYSFJjZEZ4MGJXOWtkV3hsU1dRNklHMXZaSFZzWlVsa1hHNWNkRngwWEhSY2RIMDdYRzVjZEZ4MFhIUjlYRzVjZEZ4MFhIUnBaaUFvYlc5a2RXeGxMbWh2ZEM1ZmJXRnBiaWtnZTF4dVhIUmNkRngwWEhSeVpYUjFjbTRnZTF4dVhIUmNkRngwWEhSY2RIUjVjR1U2SUZ3aWRXNWhZMk5sY0hSbFpGd2lMRnh1WEhSY2RGeDBYSFJjZEdOb1lXbHVPaUJqYUdGcGJpeGNibHgwWEhSY2RGeDBYSFJ0YjJSMWJHVkpaRG9nYlc5a2RXeGxTV1JjYmx4MFhIUmNkRngwZlR0Y2JseDBYSFJjZEgxY2JseDBYSFJjZEdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2JXOWtkV3hsTG5CaGNtVnVkSE11YkdWdVozUm9PeUJwS3lzcElIdGNibHgwWEhSY2RGeDBkbUZ5SUhCaGNtVnVkRWxrSUQwZ2JXOWtkV3hsTG5CaGNtVnVkSE5iYVYwN1hHNWNkRngwWEhSY2RIWmhjaUJ3WVhKbGJuUWdQU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1OYmNHRnlaVzUwU1dSZE8xeHVYSFJjZEZ4MFhIUnBaaUFvSVhCaGNtVnVkQ2tnWTI5dWRHbHVkV1U3WEc1Y2RGeDBYSFJjZEdsbUlDaHdZWEpsYm5RdWFHOTBMbDlrWldOc2FXNWxaRVJsY0dWdVpHVnVZMmxsYzF0dGIyUjFiR1ZKWkYwcElIdGNibHgwWEhSY2RGeDBYSFJ5WlhSMWNtNGdlMXh1WEhSY2RGeDBYSFJjZEZ4MGRIbHdaVG9nWENKa1pXTnNhVzVsWkZ3aUxGeHVYSFJjZEZ4MFhIUmNkRngwWTJoaGFXNDZJR05vWVdsdUxtTnZibU5oZENoYmNHRnlaVzUwU1dSZEtTeGNibHgwWEhSY2RGeDBYSFJjZEcxdlpIVnNaVWxrT2lCdGIyUjFiR1ZKWkN4Y2JseDBYSFJjZEZ4MFhIUmNkSEJoY21WdWRFbGtPaUJ3WVhKbGJuUkpaRnh1WEhSY2RGeDBYSFJjZEgwN1hHNWNkRngwWEhSY2RIMWNibHgwWEhSY2RGeDBhV1lnS0c5MWRHUmhkR1ZrVFc5a2RXeGxjeTVwYm1SbGVFOW1LSEJoY21WdWRFbGtLU0FoUFQwZ0xURXBJR052Ym5ScGJuVmxPMXh1WEhSY2RGeDBYSFJwWmlBb2NHRnlaVzUwTG1odmRDNWZZV05qWlhCMFpXUkVaWEJsYm1SbGJtTnBaWE5iYlc5a2RXeGxTV1JkS1NCN1hHNWNkRngwWEhSY2RGeDBhV1lnS0NGdmRYUmtZWFJsWkVSbGNHVnVaR1Z1WTJsbGMxdHdZWEpsYm5SSlpGMHBYRzVjZEZ4MFhIUmNkRngwWEhSdmRYUmtZWFJsWkVSbGNHVnVaR1Z1WTJsbGMxdHdZWEpsYm5SSlpGMGdQU0JiWFR0Y2JseDBYSFJjZEZ4MFhIUmhaR1JCYkd4VWIxTmxkQ2h2ZFhSa1lYUmxaRVJsY0dWdVpHVnVZMmxsYzF0d1lYSmxiblJKWkYwc0lGdHRiMlIxYkdWSlpGMHBPMXh1WEhSY2RGeDBYSFJjZEdOdmJuUnBiblZsTzF4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSY2RHUmxiR1YwWlNCdmRYUmtZWFJsWkVSbGNHVnVaR1Z1WTJsbGMxdHdZWEpsYm5SSlpGMDdYRzVjZEZ4MFhIUmNkRzkxZEdSaGRHVmtUVzlrZFd4bGN5NXdkWE5vS0hCaGNtVnVkRWxrS1R0Y2JseDBYSFJjZEZ4MGNYVmxkV1V1Y0hWemFDaDdYRzVjZEZ4MFhIUmNkRngwWTJoaGFXNDZJR05vWVdsdUxtTnZibU5oZENoYmNHRnlaVzUwU1dSZEtTeGNibHgwWEhSY2RGeDBYSFJwWkRvZ2NHRnlaVzUwU1dSY2JseDBYSFJjZEZ4MGZTazdYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZWeHVYRzVjZEZ4MGNtVjBkWEp1SUh0Y2JseDBYSFJjZEhSNWNHVTZJRndpWVdOalpYQjBaV1JjSWl4Y2JseDBYSFJjZEcxdlpIVnNaVWxrT2lCMWNHUmhkR1ZOYjJSMWJHVkpaQ3hjYmx4MFhIUmNkRzkxZEdSaGRHVmtUVzlrZFd4bGN6b2diM1YwWkdGMFpXUk5iMlIxYkdWekxGeHVYSFJjZEZ4MGIzVjBaR0YwWldSRVpYQmxibVJsYm1OcFpYTTZJRzkxZEdSaGRHVmtSR1Z3Wlc1a1pXNWphV1Z6WEc1Y2RGeDBmVHRjYmx4MGZWeHVYRzVjZEdaMWJtTjBhVzl1SUdGa1pFRnNiRlJ2VTJWMEtHRXNJR0lwSUh0Y2JseDBYSFJtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUdJdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmx4MFhIUmNkSFpoY2lCcGRHVnRJRDBnWWx0cFhUdGNibHgwWEhSY2RHbG1JQ2hoTG1sdVpHVjRUMllvYVhSbGJTa2dQVDA5SUMweEtTQmhMbkIxYzJnb2FYUmxiU2s3WEc1Y2RGeDBmVnh1WEhSOVhHNWNibHgwTHk4Z1lYUWdZbVZuYVc0Z1lXeHNJSFZ3WkdGMFpYTWdiVzlrZFd4bGN5QmhjbVVnYjNWMFpHRjBaV1JjYmx4MEx5OGdkR2hsSUZ3aWIzVjBaR0YwWldSY0lpQnpkR0YwZFhNZ1kyRnVJSEJ5YjNCaFoyRjBaU0IwYnlCd1lYSmxiblJ6SUdsbUlIUm9aWGtnWkc5dUozUWdZV05qWlhCMElIUm9aU0JqYUdsc1pISmxibHh1WEhSMllYSWdiM1YwWkdGMFpXUkVaWEJsYm1SbGJtTnBaWE1nUFNCN2ZUdGNibHgwZG1GeUlHOTFkR1JoZEdWa1RXOWtkV3hsY3lBOUlGdGRPMXh1WEhSMllYSWdZWEJ3YkdsbFpGVndaR0YwWlNBOUlIdDlPMXh1WEc1Y2RIWmhjaUIzWVhKdVZXNWxlSEJsWTNSbFpGSmxjWFZwY21VZ1BTQm1kVzVqZEdsdmJpQjNZWEp1Vlc1bGVIQmxZM1JsWkZKbGNYVnBjbVVvYlc5a2RXeGxLU0I3WEc1Y2RGeDBZMjl1YzI5c1pTNTNZWEp1S0Z4dVhIUmNkRngwWENKYlNFMVNYU0IxYm1WNGNHVmpkR1ZrSUhKbGNYVnBjbVVvWENJZ0t5QnRiMlIxYkdVdWFXUWdLeUJjSWlrZ2RHOGdaR2x6Y0c5elpXUWdiVzlrZFd4bFhDSmNibHgwWEhRcE8xeHVYSFI5TzF4dVhHNWNkR1p2Y2lBb2RtRnlJRzF2WkhWc1pVbGtJR2x1SUdOMWNuSmxiblJWY0dSaGRHVXBJSHRjYmx4MFhIUnBaaUFvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHTjFjbkpsYm5SVmNHUmhkR1VzSUcxdlpIVnNaVWxrS1NrZ2UxeHVYSFJjZEZ4MGRtRnlJRzVsZDAxdlpIVnNaVVpoWTNSdmNua2dQU0JqZFhKeVpXNTBWWEJrWVhSbFcyMXZaSFZzWlVsa1hUdGNibHgwWEhSY2RDOHFLaUJBZEhsd1pTQjdWRTlFVDMwZ0tpOWNibHgwWEhSY2RIWmhjaUJ5WlhOMWJIUTdYRzVjZEZ4MFhIUnBaaUFvYm1WM1RXOWtkV3hsUm1GamRHOXllU2tnZTF4dVhIUmNkRngwWEhSeVpYTjFiSFFnUFNCblpYUkJabVpsWTNSbFpFMXZaSFZzWlVWbVptVmpkSE1vYlc5a2RXeGxTV1FwTzF4dVhIUmNkRngwZlNCbGJITmxJSHRjYmx4MFhIUmNkRngwY21WemRXeDBJRDBnZTF4dVhIUmNkRngwWEhSY2RIUjVjR1U2SUZ3aVpHbHpjRzl6WldSY0lpeGNibHgwWEhSY2RGeDBYSFJ0YjJSMWJHVkpaRG9nYlc5a2RXeGxTV1JjYmx4MFhIUmNkRngwZlR0Y2JseDBYSFJjZEgxY2JseDBYSFJjZEM4cUtpQkFkSGx3WlNCN1JYSnliM0o4Wm1Gc2MyVjlJQ292WEc1Y2RGeDBYSFIyWVhJZ1lXSnZjblJGY25KdmNpQTlJR1poYkhObE8xeHVYSFJjZEZ4MGRtRnlJR1J2UVhCd2JIa2dQU0JtWVd4elpUdGNibHgwWEhSY2RIWmhjaUJrYjBScGMzQnZjMlVnUFNCbVlXeHpaVHRjYmx4MFhIUmNkSFpoY2lCamFHRnBia2x1Wm04Z1BTQmNJbHdpTzF4dVhIUmNkRngwYVdZZ0tISmxjM1ZzZEM1amFHRnBiaWtnZTF4dVhIUmNkRngwWEhSamFHRnBia2x1Wm04Z1BTQmNJbHhjYmxWd1pHRjBaU0J3Y205d1lXZGhkR2x2YmpvZ1hDSWdLeUJ5WlhOMWJIUXVZMmhoYVc0dWFtOXBiaWhjSWlBdFBpQmNJaWs3WEc1Y2RGeDBYSFI5WEc1Y2RGeDBYSFJ6ZDJsMFkyZ2dLSEpsYzNWc2RDNTBlWEJsS1NCN1hHNWNkRngwWEhSY2RHTmhjMlVnWENKelpXeG1MV1JsWTJ4cGJtVmtYQ0k2WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLRzl3ZEdsdmJuTXViMjVFWldOc2FXNWxaQ2tnYjNCMGFXOXVjeTV2YmtSbFkyeHBibVZrS0hKbGMzVnNkQ2s3WEc1Y2RGeDBYSFJjZEZ4MGFXWWdLQ0Z2Y0hScGIyNXpMbWxuYm05eVpVUmxZMnhwYm1Wa0tWeHVYSFJjZEZ4MFhIUmNkRngwWVdKdmNuUkZjbkp2Y2lBOUlHNWxkeUJGY25KdmNpaGNibHgwWEhSY2RGeDBYSFJjZEZ4MFhDSkJZbTl5ZEdWa0lHSmxZMkYxYzJVZ2IyWWdjMlZzWmlCa1pXTnNhVzVsT2lCY0lpQXJYRzVjZEZ4MFhIUmNkRngwWEhSY2RGeDBjbVZ6ZFd4MExtMXZaSFZzWlVsa0lDdGNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmphR0ZwYmtsdVptOWNibHgwWEhSY2RGeDBYSFJjZENrN1hHNWNkRngwWEhSY2RGeDBZbkpsWVdzN1hHNWNkRngwWEhSY2RHTmhjMlVnWENKa1pXTnNhVzVsWkZ3aU9seHVYSFJjZEZ4MFhIUmNkR2xtSUNodmNIUnBiMjV6TG05dVJHVmpiR2x1WldRcElHOXdkR2x2Ym5NdWIyNUVaV05zYVc1bFpDaHlaWE4xYkhRcE8xeHVYSFJjZEZ4MFhIUmNkR2xtSUNnaGIzQjBhVzl1Y3k1cFoyNXZjbVZFWldOc2FXNWxaQ2xjYmx4MFhIUmNkRngwWEhSY2RHRmliM0owUlhKeWIzSWdQU0J1WlhjZ1JYSnliM0lvWEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRndpUVdKdmNuUmxaQ0JpWldOaGRYTmxJRzltSUdSbFkyeHBibVZrSUdSbGNHVnVaR1Z1WTNrNklGd2lJQ3RjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJ5WlhOMWJIUXViVzlrZFd4bFNXUWdLMXh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRndpSUdsdUlGd2lJQ3RjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJ5WlhOMWJIUXVjR0Z5Wlc1MFNXUWdLMXh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkR05vWVdsdVNXNW1iMXh1WEhSY2RGeDBYSFJjZEZ4MEtUdGNibHgwWEhSY2RGeDBYSFJpY21WaGF6dGNibHgwWEhSY2RGeDBZMkZ6WlNCY0luVnVZV05qWlhCMFpXUmNJanBjYmx4MFhIUmNkRngwWEhScFppQW9iM0IwYVc5dWN5NXZibFZ1WVdOalpYQjBaV1FwSUc5d2RHbHZibk11YjI1VmJtRmpZMlZ3ZEdWa0tISmxjM1ZzZENrN1hHNWNkRngwWEhSY2RGeDBhV1lnS0NGdmNIUnBiMjV6TG1sbmJtOXlaVlZ1WVdOalpYQjBaV1FwWEc1Y2RGeDBYSFJjZEZ4MFhIUmhZbTl5ZEVWeWNtOXlJRDBnYm1WM0lFVnljbTl5S0Z4dVhIUmNkRngwWEhSY2RGeDBYSFJjSWtGaWIzSjBaV1FnWW1WallYVnpaU0JjSWlBcklHMXZaSFZzWlVsa0lDc2dYQ0lnYVhNZ2JtOTBJR0ZqWTJWd2RHVmtYQ0lnS3lCamFHRnBia2x1Wm05Y2JseDBYSFJjZEZ4MFhIUmNkQ2s3WEc1Y2RGeDBYSFJjZEZ4MFluSmxZV3M3WEc1Y2RGeDBYSFJjZEdOaGMyVWdYQ0poWTJObGNIUmxaRndpT2x4dVhIUmNkRngwWEhSY2RHbG1JQ2h2Y0hScGIyNXpMbTl1UVdOalpYQjBaV1FwSUc5d2RHbHZibk11YjI1QlkyTmxjSFJsWkNoeVpYTjFiSFFwTzF4dVhIUmNkRngwWEhSY2RHUnZRWEJ3YkhrZ1BTQjBjblZsTzF4dVhIUmNkRngwWEhSY2RHSnlaV0ZyTzF4dVhIUmNkRngwWEhSallYTmxJRndpWkdsemNHOXpaV1JjSWpwY2JseDBYSFJjZEZ4MFhIUnBaaUFvYjNCMGFXOXVjeTV2YmtScGMzQnZjMlZrS1NCdmNIUnBiMjV6TG05dVJHbHpjRzl6WldRb2NtVnpkV3gwS1R0Y2JseDBYSFJjZEZ4MFhIUmtiMFJwYzNCdmMyVWdQU0IwY25WbE8xeHVYSFJjZEZ4MFhIUmNkR0p5WldGck8xeHVYSFJjZEZ4MFhIUmtaV1poZFd4ME9seHVYSFJjZEZ4MFhIUmNkSFJvY205M0lHNWxkeUJGY25KdmNpaGNJbFZ1WlhoalpYQjBhVzl1SUhSNWNHVWdYQ0lnS3lCeVpYTjFiSFF1ZEhsd1pTazdYRzVjZEZ4MFhIUjlYRzVjZEZ4MFhIUnBaaUFvWVdKdmNuUkZjbkp2Y2lrZ2UxeHVYSFJjZEZ4MFhIUnlaWFIxY200Z2UxeHVYSFJjZEZ4MFhIUmNkR1Z5Y205eU9pQmhZbTl5ZEVWeWNtOXlYRzVjZEZ4MFhIUmNkSDA3WEc1Y2RGeDBYSFI5WEc1Y2RGeDBYSFJwWmlBb1pHOUJjSEJzZVNrZ2UxeHVYSFJjZEZ4MFhIUmhjSEJzYVdWa1ZYQmtZWFJsVzIxdlpIVnNaVWxrWFNBOUlHNWxkMDF2WkhWc1pVWmhZM1J2Y25rN1hHNWNkRngwWEhSY2RHRmtaRUZzYkZSdlUyVjBLRzkxZEdSaGRHVmtUVzlrZFd4bGN5d2djbVZ6ZFd4MExtOTFkR1JoZEdWa1RXOWtkV3hsY3lrN1hHNWNkRngwWEhSY2RHWnZjaUFvYlc5a2RXeGxTV1FnYVc0Z2NtVnpkV3gwTG05MWRHUmhkR1ZrUkdWd1pXNWtaVzVqYVdWektTQjdYRzVjZEZ4MFhIUmNkRngwYVdZZ0tGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWh5WlhOMWJIUXViM1YwWkdGMFpXUkVaWEJsYm1SbGJtTnBaWE1zSUcxdlpIVnNaVWxrS1NrZ2UxeHVYSFJjZEZ4MFhIUmNkRngwYVdZZ0tDRnZkWFJrWVhSbFpFUmxjR1Z1WkdWdVkybGxjMXR0YjJSMWJHVkpaRjBwWEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRzkxZEdSaGRHVmtSR1Z3Wlc1a1pXNWphV1Z6VzIxdlpIVnNaVWxrWFNBOUlGdGRPMXh1WEhSY2RGeDBYSFJjZEZ4MFlXUmtRV3hzVkc5VFpYUW9YRzVjZEZ4MFhIUmNkRngwWEhSY2RHOTFkR1JoZEdWa1JHVndaVzVrWlc1amFXVnpXMjF2WkhWc1pVbGtYU3hjYmx4MFhIUmNkRngwWEhSY2RGeDBjbVZ6ZFd4MExtOTFkR1JoZEdWa1JHVndaVzVrWlc1amFXVnpXMjF2WkhWc1pVbGtYVnh1WEhSY2RGeDBYSFJjZEZ4MEtUdGNibHgwWEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFJjZEgxY2JseDBYSFJjZEgxY2JseDBYSFJjZEdsbUlDaGtiMFJwYzNCdmMyVXBJSHRjYmx4MFhIUmNkRngwWVdSa1FXeHNWRzlUWlhRb2IzVjBaR0YwWldSTmIyUjFiR1Z6TENCYmNtVnpkV3gwTG0xdlpIVnNaVWxrWFNrN1hHNWNkRngwWEhSY2RHRndjR3hwWldSVmNHUmhkR1ZiYlc5a2RXeGxTV1JkSUQwZ2QyRnlibFZ1Wlhod1pXTjBaV1JTWlhGMWFYSmxPMXh1WEhSY2RGeDBmVnh1WEhSY2RIMWNibHgwZlZ4dVhIUmpkWEp5Wlc1MFZYQmtZWFJsSUQwZ2RXNWtaV1pwYm1Wa08xeHVYRzVjZEM4dklGTjBiM0psSUhObGJHWWdZV05qWlhCMFpXUWdiM1YwWkdGMFpXUWdiVzlrZFd4bGN5QjBieUJ5WlhGMWFYSmxJSFJvWlcwZ2JHRjBaWElnWW5rZ2RHaGxJRzF2WkhWc1pTQnplWE4wWlcxY2JseDBkbUZ5SUc5MWRHUmhkR1ZrVTJWc1prRmpZMlZ3ZEdWa1RXOWtkV3hsY3lBOUlGdGRPMXh1WEhSbWIzSWdLSFpoY2lCcUlEMGdNRHNnYWlBOElHOTFkR1JoZEdWa1RXOWtkV3hsY3k1c1pXNW5kR2c3SUdvckt5a2dlMXh1WEhSY2RIWmhjaUJ2ZFhSa1lYUmxaRTF2WkhWc1pVbGtJRDBnYjNWMFpHRjBaV1JOYjJSMWJHVnpXMnBkTzF4dVhIUmNkR2xtSUNoY2JseDBYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVkxdHZkWFJrWVhSbFpFMXZaSFZzWlVsa1hTQW1KbHh1WEhSY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVqVzI5MWRHUmhkR1ZrVFc5a2RXeGxTV1JkTG1odmRDNWZjMlZzWmtGalkyVndkR1ZrSUNZbVhHNWNkRngwWEhRdkx5QnlaVzF2ZG1Wa0lITmxiR1l0WVdOalpYQjBaV1FnYlc5a2RXeGxjeUJ6YUc5MWJHUWdibTkwSUdKbElISmxjWFZwY21Wa1hHNWNkRngwWEhSaGNIQnNhV1ZrVlhCa1lYUmxXMjkxZEdSaGRHVmtUVzlrZFd4bFNXUmRJQ0U5UFNCM1lYSnVWVzVsZUhCbFkzUmxaRkpsY1hWcGNtVWdKaVpjYmx4MFhIUmNkQzh2SUhkb1pXNGdZMkZzYkdWa0lHbHVkbUZzYVdSaGRHVWdjMlZzWmkxaFkyTmxjSFJwYm1jZ2FYTWdibTkwSUhCdmMzTnBZbXhsWEc1Y2RGeDBYSFFoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1alcyOTFkR1JoZEdWa1RXOWtkV3hsU1dSZExtaHZkQzVmYzJWc1prbHVkbUZzYVdSaGRHVmtYRzVjZEZ4MEtTQjdYRzVjZEZ4MFhIUnZkWFJrWVhSbFpGTmxiR1pCWTJObGNIUmxaRTF2WkhWc1pYTXVjSFZ6YUNoN1hHNWNkRngwWEhSY2RHMXZaSFZzWlRvZ2IzVjBaR0YwWldSTmIyUjFiR1ZKWkN4Y2JseDBYSFJjZEZ4MGNtVnhkV2x5WlRvZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpXMjkxZEdSaGRHVmtUVzlrZFd4bFNXUmRMbWh2ZEM1ZmNtVnhkV2x5WlZObGJHWXNYRzVjZEZ4MFhIUmNkR1Z5Y205eVNHRnVaR3hsY2pvZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpXMjkxZEdSaGRHVmtUVzlrZFd4bFNXUmRMbWh2ZEM1ZmMyVnNaa0ZqWTJWd2RHVmtYRzVjZEZ4MFhIUjlLVHRjYmx4MFhIUjlYRzVjZEgxY2JseHVYSFIyWVhJZ2JXOWtkV3hsVDNWMFpHRjBaV1JFWlhCbGJtUmxibU5wWlhNN1hHNWNibHgwY21WMGRYSnVJSHRjYmx4MFhIUmthWE53YjNObE9pQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RGeDBYSFJqZFhKeVpXNTBWWEJrWVhSbFVtVnRiM1psWkVOb2RXNXJjeTVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2hqYUhWdWEwbGtLU0I3WEc1Y2RGeDBYSFJjZEdSbGJHVjBaU0JwYm5OMFlXeHNaV1JEYUhWdWEzTmJZMmgxYm10SlpGMDdYRzVjZEZ4MFhIUjlLVHRjYmx4MFhIUmNkR04xY25KbGJuUlZjR1JoZEdWU1pXMXZkbVZrUTJoMWJtdHpJRDBnZFc1a1pXWnBibVZrTzF4dVhHNWNkRngwWEhSMllYSWdhV1I0TzF4dVhIUmNkRngwZG1GeUlIRjFaWFZsSUQwZ2IzVjBaR0YwWldSTmIyUjFiR1Z6TG5Oc2FXTmxLQ2s3WEc1Y2RGeDBYSFIzYUdsc1pTQW9jWFZsZFdVdWJHVnVaM1JvSUQ0Z01Da2dlMXh1WEhSY2RGeDBYSFIyWVhJZ2JXOWtkV3hsU1dRZ1BTQnhkV1YxWlM1d2IzQW9LVHRjYmx4MFhIUmNkRngwZG1GeUlHMXZaSFZzWlNBOUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVZMXR0YjJSMWJHVkpaRjA3WEc1Y2RGeDBYSFJjZEdsbUlDZ2hiVzlrZFd4bEtTQmpiMjUwYVc1MVpUdGNibHh1WEhSY2RGeDBYSFIyWVhJZ1pHRjBZU0E5SUh0OU8xeHVYRzVjZEZ4MFhIUmNkQzh2SUVOaGJHd2daR2x6Y0c5elpTQm9ZVzVrYkdWeWMxeHVYSFJjZEZ4MFhIUjJZWElnWkdsemNHOXpaVWhoYm1Sc1pYSnpJRDBnYlc5a2RXeGxMbWh2ZEM1ZlpHbHpjRzl6WlVoaGJtUnNaWEp6TzF4dVhIUmNkRngwWEhSbWIzSWdLR29nUFNBd095QnFJRHdnWkdsemNHOXpaVWhoYm1Sc1pYSnpMbXhsYm1kMGFEc2dhaXNyS1NCN1hHNWNkRngwWEhSY2RGeDBaR2x6Y0c5elpVaGhibVJzWlhKelcycGRMbU5oYkd3b2JuVnNiQ3dnWkdGMFlTazdYRzVjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1b2JYSkVXMjF2WkhWc1pVbGtYU0E5SUdSaGRHRTdYRzVjYmx4MFhIUmNkRngwTHk4Z1pHbHpZV0pzWlNCdGIyUjFiR1VnS0hSb2FYTWdaR2x6WVdKc1pYTWdjbVZ4ZFdseVpYTWdabkp2YlNCMGFHbHpJRzF2WkhWc1pTbGNibHgwWEhSY2RGeDBiVzlrZFd4bExtaHZkQzVoWTNScGRtVWdQU0JtWVd4elpUdGNibHh1WEhSY2RGeDBYSFF2THlCeVpXMXZkbVVnYlc5a2RXeGxJR1p5YjIwZ1kyRmphR1ZjYmx4MFhIUmNkRngwWkdWc1pYUmxJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WTF0dGIyUjFiR1ZKWkYwN1hHNWNibHgwWEhSY2RGeDBMeThnZDJobGJpQmthWE53YjNOcGJtY2dkR2hsY21VZ2FYTWdibThnYm1WbFpDQjBieUJqWVd4c0lHUnBjM0J2YzJVZ2FHRnVaR3hsY2x4dVhIUmNkRngwWEhSa1pXeGxkR1VnYjNWMFpHRjBaV1JFWlhCbGJtUmxibU5wWlhOYmJXOWtkV3hsU1dSZE8xeHVYRzVjZEZ4MFhIUmNkQzh2SUhKbGJXOTJaU0JjSW5CaGNtVnVkSE5jSWlCeVpXWmxjbVZ1WTJWeklHWnliMjBnWVd4c0lHTm9hV3hrY21WdVhHNWNkRngwWEhSY2RHWnZjaUFvYWlBOUlEQTdJR29nUENCdGIyUjFiR1V1WTJocGJHUnlaVzR1YkdWdVozUm9PeUJxS3lzcElIdGNibHgwWEhSY2RGeDBYSFIyWVhJZ1kyaHBiR1FnUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTmJiVzlrZFd4bExtTm9hV3hrY21WdVcycGRYVHRjYmx4MFhIUmNkRngwWEhScFppQW9JV05vYVd4a0tTQmpiMjUwYVc1MVpUdGNibHgwWEhSY2RGeDBYSFJwWkhnZ1BTQmphR2xzWkM1d1lYSmxiblJ6TG1sdVpHVjRUMllvYlc5a2RXeGxTV1FwTzF4dVhIUmNkRngwWEhSY2RHbG1JQ2hwWkhnZ1BqMGdNQ2tnZTF4dVhIUmNkRngwWEhSY2RGeDBZMmhwYkdRdWNHRnlaVzUwY3k1emNHeHBZMlVvYVdSNExDQXhLVHRjYmx4MFhIUmNkRngwWEhSOVhHNWNkRngwWEhSY2RIMWNibHgwWEhSY2RIMWNibHh1WEhSY2RGeDBMeThnY21WdGIzWmxJRzkxZEdSaGRHVmtJR1JsY0dWdVpHVnVZM2tnWm5KdmJTQnRiMlIxYkdVZ1kyaHBiR1J5Wlc1Y2JseDBYSFJjZEhaaGNpQmtaWEJsYm1SbGJtTjVPMXh1WEhSY2RGeDBabTl5SUNoMllYSWdiM1YwWkdGMFpXUk5iMlIxYkdWSlpDQnBiaUJ2ZFhSa1lYUmxaRVJsY0dWdVpHVnVZMmxsY3lrZ2UxeHVYSFJjZEZ4MFhIUnBaaUFvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHOTFkR1JoZEdWa1JHVndaVzVrWlc1amFXVnpMQ0J2ZFhSa1lYUmxaRTF2WkhWc1pVbGtLU2tnZTF4dVhIUmNkRngwWEhSY2RHMXZaSFZzWlNBOUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVZMXR2ZFhSa1lYUmxaRTF2WkhWc1pVbGtYVHRjYmx4MFhIUmNkRngwWEhScFppQW9iVzlrZFd4bEtTQjdYRzVjZEZ4MFhIUmNkRngwWEhSdGIyUjFiR1ZQZFhSa1lYUmxaRVJsY0dWdVpHVnVZMmxsY3lBOVhHNWNkRngwWEhSY2RGeDBYSFJjZEc5MWRHUmhkR1ZrUkdWd1pXNWtaVzVqYVdWelcyOTFkR1JoZEdWa1RXOWtkV3hsU1dSZE8xeHVYSFJjZEZ4MFhIUmNkRngwWm05eUlDaHFJRDBnTURzZ2FpQThJRzF2WkhWc1pVOTFkR1JoZEdWa1JHVndaVzVrWlc1amFXVnpMbXhsYm1kMGFEc2dhaXNyS1NCN1hHNWNkRngwWEhSY2RGeDBYSFJjZEdSbGNHVnVaR1Z1WTNrZ1BTQnRiMlIxYkdWUGRYUmtZWFJsWkVSbGNHVnVaR1Z1WTJsbGMxdHFYVHRjYmx4MFhIUmNkRngwWEhSY2RGeDBhV1I0SUQwZ2JXOWtkV3hsTG1Ob2FXeGtjbVZ1TG1sdVpHVjRUMllvWkdWd1pXNWtaVzVqZVNrN1hHNWNkRngwWEhSY2RGeDBYSFJjZEdsbUlDaHBaSGdnUGowZ01Da2diVzlrZFd4bExtTm9hV3hrY21WdUxuTndiR2xqWlNocFpIZ3NJREVwTzF4dVhIUmNkRngwWEhSY2RGeDBmVnh1WEhSY2RGeDBYSFJjZEgxY2JseDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MGZWeHVYSFJjZEgwc1hHNWNkRngwWVhCd2JIazZJR1oxYm1OMGFXOXVJQ2h5WlhCdmNuUkZjbkp2Y2lrZ2UxeHVYSFJjZEZ4MEx5OGdhVzV6WlhKMElHNWxkeUJqYjJSbFhHNWNkRngwWEhSbWIzSWdLSFpoY2lCMWNHUmhkR1ZOYjJSMWJHVkpaQ0JwYmlCaGNIQnNhV1ZrVlhCa1lYUmxLU0I3WEc1Y2RGeDBYSFJjZEdsbUlDaGZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThvWVhCd2JHbGxaRlZ3WkdGMFpTd2dkWEJrWVhSbFRXOWtkV3hsU1dRcEtTQjdYRzVjZEZ4MFhIUmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dFczVndaR0YwWlUxdlpIVnNaVWxrWFNBOUlHRndjR3hwWldSVmNHUmhkR1ZiZFhCa1lYUmxUVzlrZFd4bFNXUmRPMXh1WEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFI5WEc1Y2JseDBYSFJjZEM4dklISjFiaUJ1WlhjZ2NuVnVkR2x0WlNCdGIyUjFiR1Z6WEc1Y2RGeDBYSFJtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUdOMWNuSmxiblJWY0dSaGRHVlNkVzUwYVcxbExteGxibWQwYURzZ2FTc3JLU0I3WEc1Y2RGeDBYSFJjZEdOMWNuSmxiblJWY0dSaGRHVlNkVzUwYVcxbFcybGRLRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThwTzF4dVhIUmNkRngwZlZ4dVhHNWNkRngwWEhRdkx5QmpZV3hzSUdGalkyVndkQ0JvWVc1a2JHVnljMXh1WEhSY2RGeDBabTl5SUNoMllYSWdiM1YwWkdGMFpXUk5iMlIxYkdWSlpDQnBiaUJ2ZFhSa1lYUmxaRVJsY0dWdVpHVnVZMmxsY3lrZ2UxeHVYSFJjZEZ4MFhIUnBaaUFvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHOTFkR1JoZEdWa1JHVndaVzVrWlc1amFXVnpMQ0J2ZFhSa1lYUmxaRTF2WkhWc1pVbGtLU2tnZTF4dVhIUmNkRngwWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1OYmIzVjBaR0YwWldSTmIyUjFiR1ZKWkYwN1hHNWNkRngwWEhSY2RGeDBhV1lnS0cxdlpIVnNaU2tnZTF4dVhIUmNkRngwWEhSY2RGeDBiVzlrZFd4bFQzVjBaR0YwWldSRVpYQmxibVJsYm1OcFpYTWdQVnh1WEhSY2RGeDBYSFJjZEZ4MFhIUnZkWFJrWVhSbFpFUmxjR1Z1WkdWdVkybGxjMXR2ZFhSa1lYUmxaRTF2WkhWc1pVbGtYVHRjYmx4MFhIUmNkRngwWEhSY2RIWmhjaUJqWVd4c1ltRmphM01nUFNCYlhUdGNibHgwWEhSY2RGeDBYSFJjZEhaaGNpQmtaWEJsYm1SbGJtTnBaWE5HYjNKRFlXeHNZbUZqYTNNZ1BTQmJYVHRjYmx4MFhIUmNkRngwWEhSY2RHWnZjaUFvZG1GeUlHb2dQU0F3T3lCcUlEd2diVzlrZFd4bFQzVjBaR0YwWldSRVpYQmxibVJsYm1OcFpYTXViR1Z1WjNSb095QnFLeXNwSUh0Y2JseDBYSFJjZEZ4MFhIUmNkRngwZG1GeUlHUmxjR1Z1WkdWdVkza2dQU0J0YjJSMWJHVlBkWFJrWVhSbFpFUmxjR1Z1WkdWdVkybGxjMXRxWFR0Y2JseDBYSFJjZEZ4MFhIUmNkRngwZG1GeUlHRmpZMlZ3ZEVOaGJHeGlZV05ySUQxY2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSdGIyUjFiR1V1YUc5MExsOWhZMk5sY0hSbFpFUmxjR1Z1WkdWdVkybGxjMXRrWlhCbGJtUmxibU41WFR0Y2JseDBYSFJjZEZ4MFhIUmNkRngwYVdZZ0tHRmpZMlZ3ZEVOaGJHeGlZV05yS1NCN1hHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MGFXWWdLR05oYkd4aVlXTnJjeTVwYm1SbGVFOW1LR0ZqWTJWd2RFTmhiR3hpWVdOcktTQWhQVDBnTFRFcElHTnZiblJwYm5WbE8xeHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RHTmhiR3hpWVdOcmN5NXdkWE5vS0dGalkyVndkRU5oYkd4aVlXTnJLVHRjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJrWlhCbGJtUmxibU5wWlhOR2IzSkRZV3hzWW1GamEzTXVjSFZ6YUNoa1pYQmxibVJsYm1ONUtUdGNibHgwWEhSY2RGeDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MFhIUmNkRngwZlZ4dVhIUmNkRngwWEhSY2RGeDBabTl5SUNoMllYSWdheUE5SURBN0lHc2dQQ0JqWVd4c1ltRmphM011YkdWdVozUm9PeUJyS3lzcElIdGNibHgwWEhSY2RGeDBYSFJjZEZ4MGRISjVJSHRjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJqWVd4c1ltRmphM05iYTEwdVkyRnNiQ2h1ZFd4c0xDQnRiMlIxYkdWUGRYUmtZWFJsWkVSbGNHVnVaR1Z1WTJsbGN5azdYRzVjZEZ4MFhIUmNkRngwWEhSY2RIMGdZMkYwWTJnZ0tHVnljaWtnZTF4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEdsbUlDaHZjSFJwYjI1ekxtOXVSWEp5YjNKbFpDa2dlMXh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwYjNCMGFXOXVjeTV2YmtWeWNtOXlaV1FvZTF4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUjBlWEJsT2lCY0ltRmpZMlZ3ZEMxbGNuSnZjbVZrWENJc1hHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkRzF2WkhWc1pVbGtPaUJ2ZFhSa1lYUmxaRTF2WkhWc1pVbGtMRnh1WEhSY2RGeDBYSFJjZEZ4MFhIUmNkRngwWEhSa1pYQmxibVJsYm1ONVNXUTZJR1JsY0dWdVpHVnVZMmxsYzBadmNrTmhiR3hpWVdOcmMxdHJYU3hjYmx4MFhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MFpYSnliM0k2SUdWeWNseHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RGeDBmU2s3WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwZlZ4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEdsbUlDZ2hiM0IwYVc5dWN5NXBaMjV2Y21WRmNuSnZjbVZrS1NCN1hHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MFhIUnlaWEJ2Y25SRmNuSnZjaWhsY25JcE8xeHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RIMWNibHgwWEhSY2RGeDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MFhIUmNkRngwZlZ4dVhIUmNkRngwWEhSY2RIMWNibHgwWEhSY2RGeDBmVnh1WEhSY2RGeDBmVnh1WEc1Y2RGeDBYSFF2THlCTWIyRmtJSE5sYkdZZ1lXTmpaWEIwWldRZ2JXOWtkV3hsYzF4dVhIUmNkRngwWm05eUlDaDJZWElnYnlBOUlEQTdJRzhnUENCdmRYUmtZWFJsWkZObGJHWkJZMk5sY0hSbFpFMXZaSFZzWlhNdWJHVnVaM1JvT3lCdkt5c3BJSHRjYmx4MFhIUmNkRngwZG1GeUlHbDBaVzBnUFNCdmRYUmtZWFJsWkZObGJHWkJZMk5sY0hSbFpFMXZaSFZzWlhOYmIxMDdYRzVjZEZ4MFhIUmNkSFpoY2lCdGIyUjFiR1ZKWkNBOUlHbDBaVzB1Ylc5a2RXeGxPMXh1WEhSY2RGeDBYSFIwY25rZ2UxeHVYSFJjZEZ4MFhIUmNkR2wwWlcwdWNtVnhkV2x5WlNodGIyUjFiR1ZKWkNrN1hHNWNkRngwWEhSY2RIMGdZMkYwWTJnZ0tHVnljaWtnZTF4dVhIUmNkRngwWEhSY2RHbG1JQ2gwZVhCbGIyWWdhWFJsYlM1bGNuSnZja2hoYm1Sc1pYSWdQVDA5SUZ3aVpuVnVZM1JwYjI1Y0lpa2dlMXh1WEhSY2RGeDBYSFJjZEZ4MGRISjVJSHRjYmx4MFhIUmNkRngwWEhSY2RGeDBhWFJsYlM1bGNuSnZja2hoYm1Sc1pYSW9aWEp5S1R0Y2JseDBYSFJjZEZ4MFhIUmNkSDBnWTJGMFkyZ2dLR1Z5Y2pJcElIdGNibHgwWEhSY2RGeDBYSFJjZEZ4MGFXWWdLRzl3ZEdsdmJuTXViMjVGY25KdmNtVmtLU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUmNkRngwYjNCMGFXOXVjeTV2YmtWeWNtOXlaV1FvZTF4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MGRIbHdaVG9nWENKelpXeG1MV0ZqWTJWd2RDMWxjbkp2Y2kxb1lXNWtiR1Z5TFdWeWNtOXlaV1JjSWl4Y2JseDBYSFJjZEZ4MFhIUmNkRngwWEhSY2RHMXZaSFZzWlVsa09pQnRiMlIxYkdWSlpDeGNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmNkR1Z5Y205eU9pQmxjbkl5TEZ4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEZ4MGIzSnBaMmx1WVd4RmNuSnZjam9nWlhKeVhHNWNkRngwWEhSY2RGeDBYSFJjZEZ4MGZTazdYRzVjZEZ4MFhIUmNkRngwWEhSY2RIMWNibHgwWEhSY2RGeDBYSFJjZEZ4MGFXWWdLQ0Z2Y0hScGIyNXpMbWxuYm05eVpVVnljbTl5WldRcElIdGNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUnlaWEJ2Y25SRmNuSnZjaWhsY25JeUtUdGNibHgwWEhSY2RGeDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MFhIUmNkRngwWEhSeVpYQnZjblJGY25KdmNpaGxjbklwTzF4dVhIUmNkRngwWEhSY2RGeDBmVnh1WEhSY2RGeDBYSFJjZEgwZ1pXeHpaU0I3WEc1Y2RGeDBYSFJjZEZ4MFhIUnBaaUFvYjNCMGFXOXVjeTV2YmtWeWNtOXlaV1FwSUh0Y2JseDBYSFJjZEZ4MFhIUmNkRngwYjNCMGFXOXVjeTV2YmtWeWNtOXlaV1FvZTF4dVhIUmNkRngwWEhSY2RGeDBYSFJjZEhSNWNHVTZJRndpYzJWc1ppMWhZMk5sY0hRdFpYSnliM0psWkZ3aUxGeHVYSFJjZEZ4MFhIUmNkRngwWEhSY2RHMXZaSFZzWlVsa09pQnRiMlIxYkdWSlpDeGNibHgwWEhSY2RGeDBYSFJjZEZ4MFhIUmxjbkp2Y2pvZ1pYSnlYRzVjZEZ4MFhIUmNkRngwWEhSY2RIMHBPMXh1WEhSY2RGeDBYSFJjZEZ4MGZWeHVYSFJjZEZ4MFhIUmNkRngwYVdZZ0tDRnZjSFJwYjI1ekxtbG5ibTl5WlVWeWNtOXlaV1FwSUh0Y2JseDBYSFJjZEZ4MFhIUmNkRngwY21Wd2IzSjBSWEp5YjNJb1pYSnlLVHRjYmx4MFhIUmNkRngwWEhSY2RIMWNibHgwWEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFJjZEgxY2JseDBYSFJjZEgxY2JseHVYSFJjZEZ4MGNtVjBkWEp1SUc5MWRHUmhkR1ZrVFc5a2RXeGxjenRjYmx4MFhIUjlYRzVjZEgwN1hHNTlYRzVmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1odGNra3Vhbk52Ym5BZ1BTQm1kVzVqZEdsdmJpQW9iVzlrZFd4bFNXUXNJR0Z3Y0d4NVNHRnVaR3hsY25NcElIdGNibHgwYVdZZ0tDRmpkWEp5Wlc1MFZYQmtZWFJsS1NCN1hHNWNkRngwWTNWeWNtVnVkRlZ3WkdGMFpTQTlJSHQ5TzF4dVhIUmNkR04xY25KbGJuUlZjR1JoZEdWU2RXNTBhVzFsSUQwZ1cxMDdYRzVjZEZ4MFkzVnljbVZ1ZEZWd1pHRjBaVkpsYlc5MlpXUkRhSFZ1YTNNZ1BTQmJYVHRjYmx4MFhIUmhjSEJzZVVoaGJtUnNaWEp6TG5CMWMyZ29ZWEJ3YkhsSVlXNWtiR1Z5S1R0Y2JseDBmVnh1WEhScFppQW9JVjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnloamRYSnlaVzUwVlhCa1lYUmxMQ0J0YjJSMWJHVkpaQ2twSUh0Y2JseDBYSFJqZFhKeVpXNTBWWEJrWVhSbFcyMXZaSFZzWlVsa1hTQTlJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlZ0dGIyUjFiR1ZKWkYwN1hHNWNkSDFjYm4wN1hHNWZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbWh0Y2tNdWFuTnZibkFnUFNCbWRXNWpkR2x2YmlBb1hHNWNkR05vZFc1clNXUnpMRnh1WEhSeVpXMXZkbVZrUTJoMWJtdHpMRnh1WEhSeVpXMXZkbVZrVFc5a2RXeGxjeXhjYmx4MGNISnZiV2x6WlhNc1hHNWNkR0Z3Y0d4NVNHRnVaR3hsY25Nc1hHNWNkSFZ3WkdGMFpXUk5iMlIxYkdWelRHbHpkRnh1S1NCN1hHNWNkR0Z3Y0d4NVNHRnVaR3hsY25NdWNIVnphQ2hoY0hCc2VVaGhibVJzWlhJcE8xeHVYSFJqZFhKeVpXNTBWWEJrWVhSbFEyaDFibXR6SUQwZ2UzMDdYRzVjZEdOMWNuSmxiblJWY0dSaGRHVlNaVzF2ZG1Wa1EyaDFibXR6SUQwZ2NtVnRiM1psWkVOb2RXNXJjenRjYmx4MFkzVnljbVZ1ZEZWd1pHRjBaU0E5SUhKbGJXOTJaV1JOYjJSMWJHVnpMbkpsWkhWalpTaG1kVzVqZEdsdmJpQW9iMkpxTENCclpYa3BJSHRjYmx4MFhIUnZZbXBiYTJWNVhTQTlJR1poYkhObE8xeHVYSFJjZEhKbGRIVnliaUJ2WW1vN1hHNWNkSDBzSUh0OUtUdGNibHgwWTNWeWNtVnVkRlZ3WkdGMFpWSjFiblJwYldVZ1BTQmJYVHRjYmx4MFkyaDFibXRKWkhNdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb1kyaDFibXRKWkNrZ2UxeHVYSFJjZEdsbUlDaGNibHgwWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhwYm5OMFlXeHNaV1JEYUhWdWEzTXNJR05vZFc1clNXUXBJQ1ltWEc1Y2RGeDBYSFJwYm5OMFlXeHNaV1JEYUhWdWEzTmJZMmgxYm10SlpGMGdJVDA5SUhWdVpHVm1hVzVsWkZ4dVhIUmNkQ2tnZTF4dVhIUmNkRngwY0hKdmJXbHpaWE11Y0hWemFDaHNiMkZrVlhCa1lYUmxRMmgxYm1zb1kyaDFibXRKWkN3Z2RYQmtZWFJsWkUxdlpIVnNaWE5NYVhOMEtTazdYRzVjZEZ4MFhIUmpkWEp5Wlc1MFZYQmtZWFJsUTJoMWJtdHpXMk5vZFc1clNXUmRJRDBnZEhKMVpUdGNibHgwWEhSOVhHNWNkSDBwTzF4dVhIUnBaaUFvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1bUtTQjdYRzVjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NW1MbXB6YjI1d1NHMXlJRDBnWm5WdVkzUnBiMjRnS0dOb2RXNXJTV1FzSUhCeWIyMXBjMlZ6S1NCN1hHNWNkRngwWEhScFppQW9YRzVjZEZ4MFhIUmNkR04xY25KbGJuUlZjR1JoZEdWRGFIVnVhM01nSmlaY2JseDBYSFJjZEZ4MElWOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhqZFhKeVpXNTBWWEJrWVhSbFEyaDFibXR6TENCamFIVnVhMGxrS1NBbUpseHVYSFJjZEZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThvYVc1emRHRnNiR1ZrUTJoMWJtdHpMQ0JqYUhWdWEwbGtLU0FtSmx4dVhIUmNkRngwWEhScGJuTjBZV3hzWldSRGFIVnVhM05iWTJoMWJtdEpaRjBnSVQwOUlIVnVaR1ZtYVc1bFpGeHVYSFJjZEZ4MEtTQjdYRzVjZEZ4MFhIUmNkSEJ5YjIxcGMyVnpMbkIxYzJnb2JHOWhaRlZ3WkdGMFpVTm9kVzVyS0dOb2RXNXJTV1FwS1R0Y2JseDBYSFJjZEZ4MFkzVnljbVZ1ZEZWd1pHRjBaVU5vZFc1cmMxdGphSFZ1YTBsa1hTQTlJSFJ5ZFdVN1hHNWNkRngwWEhSOVhHNWNkRngwZlR0Y2JseDBmVnh1ZlR0Y2JseHVYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVvYlhKTklEMGdLQ2tnUFQ0Z2UxeHVYSFJwWmlBb2RIbHdaVzltSUdabGRHTm9JRDA5UFNCY0luVnVaR1ZtYVc1bFpGd2lLU0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9YQ0pPYnlCaWNtOTNjMlZ5SUhOMWNIQnZjblE2SUc1bFpXUWdabVYwWTJnZ1FWQkpYQ0lwTzF4dVhIUnlaWFIxY200Z1ptVjBZMmdvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1d0lDc2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVvYlhKR0tDa3BMblJvWlc0b0tISmxjM0J2Ym5ObEtTQTlQaUI3WEc1Y2RGeDBhV1lvY21WemNHOXVjMlV1YzNSaGRIVnpJRDA5UFNBME1EUXBJSEpsZEhWeWJqc2dMeThnYm04Z2RYQmtZWFJsSUdGMllXbHNZV0pzWlZ4dVhIUmNkR2xtS0NGeVpYTndiMjV6WlM1dmF5a2dkR2h5YjNjZ2JtVjNJRVZ5Y205eUtGd2lSbUZwYkdWa0lIUnZJR1psZEdOb0lIVndaR0YwWlNCdFlXNXBabVZ6ZENCY0lpQXJJSEpsYzNCdmJuTmxMbk4wWVhSMWMxUmxlSFFwTzF4dVhIUmNkSEpsZEhWeWJpQnlaWE53YjI1elpTNXFjMjl1S0NrN1hHNWNkSDBwTzF4dWZUdGNibHh1THk4Z2JtOGdaR1ZtWlhKeVpXUWdjM1JoY25SMWNGeHVYRzR2THlCdWJ5QnFjMjl1Y0NCbWRXNWpkR2x2Ymx4dVhHNHZMeUJ1YnlCa1pXWmxjbkpsWkNCemRHRnlkSFZ3SWl3aUx5OGdiVzlrZFd4bElHTmhZMmhsSUdGeVpTQjFjMlZrSUhOdklHVnVkSEo1SUdsdWJHbHVhVzVuSUdseklHUnBjMkZpYkdWa1hHNHZMeUJ6ZEdGeWRIVndYRzR2THlCTWIyRmtJR1Z1ZEhKNUlHMXZaSFZzWlNCaGJtUWdjbVYwZFhKdUlHVjRjRzl5ZEhOY2JuWmhjaUJmWDNkbFluQmhZMnRmWlhod2IzSjBjMTlmSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGNJaTR2YzNKakwybGpiMjV6TG1welhDSXBPMXh1SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PSIsImltcG9ydCB7UmVzaXplcn0gZnJvbSAnLi9zcmMvcmVzaXplci5qcyc7XHJcblxyXG5leHBvcnQge1Jlc2l6ZXIgYXMgZGVmYXVsdH07XHJcbi8vd2luZG93LlJlc2l6ZXIgPSBSZXNpemVyO1xyXG4iLCIvKipcclxuICogVmFyaW91cyBpbnRlcmZhY2Ugb3B0aW9ucyB3ZSBjYW4gc2VsZWN0XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBvcHRpb25zLlxyXG4gKiBAcGFyYW0gb3B0aW9ucyBVc2VyIHByb3ZpZGVkIG9wdGlvbnMgdGhhdCBvdmVycmlkZSB0aGUgZGVmYXVsdCB2YWx1ZXMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIE9wdGlvbnMob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgPyBvcHRpb25zIDoge307XHJcblxyXG4gICAgLy8vIE9wdGlvbnM6IHZlcnRpY2FsLCBob3Jpem9udGFsLCBib3RoXHJcbiAgICB0aGlzLnJlc2l6ZSA9ICd2ZXJ0aWNhbCc7XHJcblxyXG4gICAgLy8vIFRoZSByZXNpemluZyBoYW5kbGVcclxuICAgIHRoaXMuaGFuZGxlID0gJ2Jhcic7XHJcblxyXG4gICAgLy8vIFJhbmdlIGZvciBncmFiYmluZ1xyXG4gICAgdGhpcy5ncmFiU2l6ZSA9IDEwO1xyXG5cclxuICAgIC8vLyBNYXhpbXVtIHNwZWVkIHdlIGNhbiByZXNpemUgaW4gcGl4ZWxzIHBlciBzZWNvbmRcclxuICAgIHRoaXMubWF4U3BlZWQgPSAxMDAwO1xyXG5cclxuICAgIC8vLyBVc2UgYSBtYXNrICh1c2VmdWwgZm9yIGlmcmFtZXNcclxuICAgIHRoaXMudXNlTWFzayA9IHRydWU7XHJcblxyXG4gICAgZm9yKHZhciBwcm9wZXJ0eSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbiBcIiArIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IG9wdGlvbnNbcHJvcGVydHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsIlxyXG5leHBvcnQgZnVuY3Rpb24gUmVzaXplckFjdHVhbChlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Jlc2l6ZXInKTtcclxuXHJcbiAgICAvLyBUaW1lb3V0IHBlcmlvZCBmb3IgYW5pbWF0ZWQgcmVzaXppbmdcclxuICAgIGNvbnN0IHRpbWVvdXRQZXJpb2QgPSAyMDtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gSGFuZGxlIG9wdGlvbnNcclxuICAgIC8vXHJcbiAgICBsZXQgZ3JhYlNpemUgPSBvcHRpb25zLmdyYWJTaXplO1xyXG5cclxuICAgIGxldCBoYW5kbGUgPSBvcHRpb25zLmhhbmRsZTtcclxuICAgIGlmKGhhbmRsZSA9PT0gJ2JhcicpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlc2l6ZSA9ICdub25lJztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmJvcmRlckJvdHRvbSA9IGdyYWJTaXplICsgJ3B4IHNvbGlkICMxODQ1M0InO1xyXG4gICAgfSBlbHNlIGlmKGhhbmRsZSA9PT0gJ2hhbmRsZScpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlc2l6ZSA9ICd2ZXJ0aWNhbCc7XHJcbiAgICB9IGVsc2UgaWYoaGFuZGxlID09PSAnbm9uZScpIHtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVzaXplID0gJ25vbmUnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyQm90dG9tID0gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLyBBcmUgbW91c2UgbW92ZSBldmVudCBoYW5kbGVycyBpbnN0YWxsZWQ/XHJcbiAgICBsZXQgaW5zdGFsbGVkTW91c2VMaXN0ZW5lcnMgPSBmYWxzZTtcclxuXHJcbiAgICAvLy8gQXJlIHRvdWNoIG1vdmUgZXZlbnQgaGFuZGxlcnMgaW5zdGFsbGVkP1xyXG4gICAgbGV0IGluc3RhbGxlZFRvdWNoTGlzdGVuZXJzID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IG1hc2sgPSBudWxsO1xyXG5cclxuICAgIC8vLyBHZXQgdGhlIG1pbmltdW0gaGVpZ2h0IGFuZCB3aWR0aCBwcm9wZXJ0aWVzXHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGxldCBoZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgIGxldCB3aWR0aCA9IHJlY3Qud2lkdGg7XHJcblxyXG4gICAgbGV0IG1pbkhlaWdodCA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkubWluSGVpZ2h0O1xyXG4gICAgbWluSGVpZ2h0ID0gbWluSGVpZ2h0LnN1YnN0cigwLCBtaW5IZWlnaHQubGVuZ3RoIC0gMik7XHJcbiAgICBsZXQgbWluV2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLm1pbldpZHRoO1xyXG4gICAgbWluV2lkdGggPSBtaW5XaWR0aC5zdWJzdHIoMCwgbWluV2lkdGgubGVuZ3RoIC0gMik7XHJcblxyXG4gICAgbGV0IHRpbWVyID0gbnVsbDtcclxuXHJcbiAgICBsZXQgdGFyZ2V0V2lkdGggPSBudWxsO1xyXG4gICAgbGV0IHRhcmdldEhlaWdodCA9IG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gSW5zdGFsbCB0aGUgbW91c2UgZG93biBhbmQgdG91Y2ggc3RhcnQgbGlzdGVuZXJzXHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25MaXN0ZW5lcik7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG91Y2hTdGFydExpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgLy8gSW5zdGFsbCB0aGUgY3Vyc29yIGxpc3RlbmVyXHJcbiAgICAgICAgLy8gVGhpcyBzd2FwcyB0aGUgY3Vyc29yIHdoZW4gd2UgaG92ZXIgdGhlIG1vdXNlIG92ZXIgdGhlIGdyYWIgYmFyXHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBjdXJzb3JMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0VGFyZ2V0KHR3LCB0aCkge1xyXG4gICAgICAgIHRhcmdldFdpZHRoID0gdHc7XHJcbiAgICAgICAgdGFyZ2V0SGVpZ2h0ID0gdGg7XHJcblxyXG4gICAgICAgIC8vIElmIGEgdGltZXIgaXMgbm90IGFjdGl2ZSwgY3JlYXRlIG9uZS5cclxuICAgICAgICBpZih0aW1lciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aW1lck1vdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRpbWVyTW92ZXIoKSB7XHJcbiAgICAgICAgdGltZXIgPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBtYXhQaXhlbHMgPSBvcHRpb25zLm1heFNwZWVkICogdGltZW91dFBlcmlvZCAvIDEwMDA7XHJcblxyXG4gICAgICAgIGlmKHRhcmdldEhlaWdodCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SGVpZ2h0ID0gK2hlaWdodDtcclxuICAgICAgICAgICAgbGV0IGRpZmYgPSB0YXJnZXRIZWlnaHQgLSBjdXJyZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgaWYoTWF0aC5hYnMoZGlmZikgPiBtYXhQaXhlbHMpIHtcclxuICAgICAgICAgICAgICAgIGRpZmYgPSBkaWZmIDwgMCA/IC1tYXhQaXhlbHMgOiBtYXhQaXhlbHM7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBjdXJyZW50SGVpZ2h0ICsgZGlmZjtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcnICsgaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vdCByYXRlIGxpbWl0ZWRcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IHRhcmdldEhlaWdodDtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJycgKyBoZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0SGVpZ2h0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGFyZ2V0V2lkdGggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFdpZHRoID0gK3dpZHRoO1xyXG4gICAgICAgICAgICBsZXQgZGlmZiA9IHRhcmdldFdpZHRoIC0gY3VycmVudFdpZHRoO1xyXG5cclxuICAgICAgICAgICAgaWYoTWF0aC5hYnMoZGlmZikgPiBtYXhQaXhlbHMpIHtcclxuICAgICAgICAgICAgICAgIGRpZmYgPSBkaWZmIDwgMCA/IC1tYXhQaXhlbHMgOiBtYXhQaXhlbHM7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IGN1cnJlbnRXaWR0aCArIGRpZmY7XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcnICsgd2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gTm90IHJhdGUgbGltaXRlZFxyXG4gICAgICAgICAgICAgICAgd2lkdGggPSB0YXJnZXRXaWR0aDtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnJyArIHdpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIHRhcmdldFdpZHRoID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGFyZ2V0SGVpZ2h0ICE9PSBudWxsIHx8IHRhcmdldFdpZHRoICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dCh0aW1lck1vdmVyLCB0aW1lb3V0UGVyaW9kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxldCBpbml0aWFsWCwgaW5pdGlhbFk7XHJcbiAgICBsZXQgaW5pdGlhbFdpZHRoLCBpbml0aWFsSGVpZ2h0O1xyXG4gICAgbGV0IGdyYWJUeXBlID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0IHRoZSByZXNpemluZyBvbiBhIG1vdXNlIGRvd24gb3IgdG91Y2hcclxuICAgICAqIEBwYXJhbSB4IE1vdXNlIG9yIHRvdWNoIFggaW4gcGl4ZWxzXHJcbiAgICAgKiBAcGFyYW0geSBNb3VzZSBvciB0b3VjaCBZIGluIHBpeGVsc1xyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBtb3ZlU3RhcnQoeCwgeSkge1xyXG4gICAgICAgIGluaXRpYWxYID0geDtcclxuICAgICAgICBpbml0aWFsWSA9IHk7XHJcbiAgICAgICAgbGV0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHdpZHRoID0gK2VsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgaW5pdGlhbFdpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgaGVpZ2h0ID0gK2VsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGluaXRpYWxIZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGFyZ2V0V2lkdGggPSBudWxsO1xyXG4gICAgICAgIHRhcmdldEhlaWdodCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgYSBtb3VzZSBvciBmaW5nZXIgbW92ZSB0byBhIG5ldyBwb3NpdGlvbixcclxuICAgICAqIHJlc3VsdGluZyBpbiBhIHJlc2l6ZSByZXF1ZXN0LlxyXG4gICAgICogQHBhcmFtIHggTW91c2Ugb3IgdG91Y2ggWCBpbiBwaXhlbHNcclxuICAgICAqIEBwYXJhbSB5IE1vdXNlIG9yIHRvdWNoIFkgaW4gcGl4ZWxzXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIG1vdmVUbyh4LCB5KSB7XHJcbiAgICAgICAgbGV0IGR4ID0geCAtIGluaXRpYWxYO1xyXG4gICAgICAgIGxldCBkeSA9IHkgLSBpbml0aWFsWTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1dpZHRoID0gbnVsbDtcclxuICAgICAgICBsZXQgbmV3SGVpZ2h0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYoZ3JhYlR5cGUgPT09ICdob3Jpem9udGFsJyB8fCBncmFiVHlwZSA9PT0gJ2JvdGgnKSB7XHJcbiAgICAgICAgICAgIC8vIENvbXB1dGUgYSBkZXNpcmVkIG5ldyB3aWR0aFxyXG4gICAgICAgICAgICBuZXdXaWR0aCA9IGluaXRpYWxXaWR0aCArIGR4O1xyXG4gICAgICAgICAgICBpZiAobmV3V2lkdGggPCBtaW5XaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSBtaW5XaWR0aDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGdyYWJUeXBlID09PSAndmVydGljYWwnIHx8IGdyYWJUeXBlID09PSAnYm90aCcpIHtcclxuICAgICAgICAgICAgY29uc3Qgd2FzSGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBDb21wdXRlIGEgZGVzaXJlZCBuZXcgaGVpZ2h0XHJcbiAgICAgICAgICAgIG5ld0hlaWdodCA9IGluaXRpYWxIZWlnaHQgKyBkeTtcclxuICAgICAgICAgICAgaWYgKG5ld0hlaWdodCA8IG1pbkhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gbWluSGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGFyZ2V0KG5ld1dpZHRoLCBuZXdIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBNb3VzZSBIYW5kbGluZ1xyXG4gICAgLy9cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZURvd25MaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGUucGFnZVg7XHJcbiAgICAgICAgY29uc3QgeSA9IGUucGFnZVk7XHJcblxyXG4gICAgICAgIGdyYWJUeXBlID0gb25IYW5kbGUoeCwgeSwgZmFsc2UpO1xyXG4gICAgICAgIGlmKGdyYWJUeXBlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIG1vdmVTdGFydCh4LCB5KTtcclxuXHJcbiAgICAgICAgICAgIGluc3RhbGxNYXNrKCk7XHJcbiAgICAgICAgICAgIGluc3RhbGxNb3VzZUhhbmRsZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlTW92ZUxpc3RlbmVyKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKGUuYnV0dG9ucyAhPT0gMSkge1xyXG4gICAgICAgICAgICByZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbW92ZVRvKGUucGFnZVgsIGUucGFnZVkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlVXBMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgcmVtb3ZlQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1vdXNlSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgcmVtb3ZlSGFuZGxlcnMoKTtcclxuXHJcbiAgICAgICAgaW5zdGFsbGVkTW91c2VMaXN0ZW5lcnMgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUxpc3RlbmVyLCBmYWxzZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBMaXN0ZW5lciwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBUb3VjaCBIYW5kbGluZ1xyXG4gICAgLy9cclxuXHJcbiAgICBmdW5jdGlvbiB0b3VjaFN0YXJ0TGlzdGVuZXIoZSkge1xyXG4gICAgICAgIGNvbnN0IHggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XHJcbiAgICAgICAgY29uc3QgeSA9IGUudG91Y2hlc1swXS5wYWdlWTtcclxuXHJcbiAgICAgICAgZ3JhYlR5cGUgPSBvbkhhbmRsZSh4LCB5LCB0cnVlKTtcclxuICAgICAgICBpZihncmFiVHlwZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBtb3ZlU3RhcnQoeCwgeSk7XHJcblxyXG4gICAgICAgICAgICBpbnN0YWxsTWFzaygpO1xyXG4gICAgICAgICAgICBpbnN0YWxsVG91Y2hIYW5kbGVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b3VjaE1vdmVMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAvL2UucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgeCA9IGUudG91Y2hlc1swXS5wYWdlWDtcclxuICAgICAgICBjb25zdCB5ID0gZS50b3VjaGVzWzBdLnBhZ2VZO1xyXG5cclxuICAgICAgICBtb3ZlVG8oeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG91Y2hFbmRMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgcmVtb3ZlQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5zdGFsbFRvdWNoSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgcmVtb3ZlSGFuZGxlcnMoKTtcclxuXHJcbiAgICAgICAgaW5zdGFsbGVkVG91Y2hMaXN0ZW5lcnMgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hFbmRMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIE1hc2tcclxuICAgIC8vXHJcblxyXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1hc2soKSB7XHJcbiAgICAgICAgaWYoIW9wdGlvbnMudXNlTWFzaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBFbnN1cmUgbm9uZSBjdXJyZW50bHkgZXhpc3RzXHJcbiAgICAgICAgcmVtb3ZlTWFzaygpO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIG1hc2suc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgIG1hc2suc3R5bGUubGVmdCA9IDA7XHJcbiAgICAgICAgbWFzay5zdHlsZS50b3AgPSAwO1xyXG4gICAgICAgIG1hc2suc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICBtYXNrLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICBtYXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgbWFzay5zdHlsZS56SW5kZXggPSAxMDAwMDtcclxuICAgICAgICBtYXNrLnN0eWxlLm9wYWNpdHkgPSAwLjU7XHJcbiAgICAgICAgbWFzay5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcblxyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsKCkge1xyXG4gICAgICAgIGlmKHRpbWVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgICAgIHRpbWVyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbW92ZUhhbmRsZXJzKCk7XHJcbiAgICAgICAgcmVtb3ZlTWFzaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUhhbmRsZXJzKCkge1xyXG4gICAgICAgIGlmKGluc3RhbGxlZE1vdXNlTGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGluc3RhbGxlZE1vdXNlTGlzdGVuZXJzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpbnN0YWxsZWRUb3VjaExpc3RlbmVycykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaE1vdmVMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hFbmRMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hFbmRMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGluc3RhbGxlZFRvdWNoTGlzdGVuZXJzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZU1hc2soKSB7XHJcbiAgICAgICAgaWYobWFzayAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1hc2spO1xyXG4gICAgICAgICAgICBtYXNrID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgYW4geCx5IGxvY2F0aW9uIGlzIG92ZXIgYSBoYW5kbGUgZm9yIG1hbmlwdWxhdGluZ1xyXG4gICAgICogdGhlIHJlc2l6ZWFibGUgb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHggbG9jYXRpb24gaW4gcGl4ZWxzXHJcbiAgICAgKiBAcGFyYW0geSBsb2NhdGlvbiBpbiBwaXhlbHNcclxuICAgICAqIEByZXR1cm5zIHN0cmluZ3xudWxsIGlmIG5vdCwgJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnYm90aCcgaWYgb3ZlciBoYW5kbGUgYW5kIG1vZGUgYXZhaWxhYmxlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBvbkhhbmRsZSh4LCB5LCB0b3VjaCkge1xyXG4gICAgICAgIGxldCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2xvcCA9IHRvdWNoID8gMTAgOiAwO1xyXG5cclxuICAgICAgICBsZXQgYm90dG9tID0gcmVjdC5ib3R0b20gKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgbGV0IHZlcnQgPSB5ID49IGJvdHRvbSAtIGdyYWJTaXplIC0gc2xvcDtcclxuXHJcbiAgICAgICAgbGV0IHJpZ2h0ID0gcmVjdC5yaWdodCArIHdpbmRvdy5wYWdlWE9mZnNldDtcclxuICAgICAgICBsZXQgaG9yeiA9IHggPj0gcmlnaHQgLSBncmFiU2l6ZSAtIHNsb3A7XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnMucmVzaXplID09PSAnYm90aCcpIHtcclxuICAgICAgICAgICAgaWYodmVydCAmJiBob3J6KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2JvdGgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHZlcnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAndmVydGljYWwnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihob3J6KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hvcml6b250YWwnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZigob3B0aW9ucy5yZXNpemUgPT09ICdib3RoJyB8fCBvcHRpb25zLnJlc2l6ZSA9PT0gJ3ZlcnRpY2FsJykgJiYgdmVydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKChvcHRpb25zLnJlc2l6ZSA9PT0gJ2JvdGgnIHx8IG9wdGlvbnMucmVzaXplID09PSAnaG9yaXpvbnRhbCcpICYmIGhvcnopIHtcclxuICAgICAgICAgICAgcmV0dXJuICdob3Jpem9udGFsJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgbGV0IGN1cnNvciA9IDA7XHJcblxyXG4gICAgZnVuY3Rpb24gY3Vyc29yTGlzdGVuZXIoZXZlbnQpIHtcclxuICAgICAgICAvLyBTd2FwIHRoZSBjdXJzb3Igd2hlbiB3ZSBhcmUgb3ZlciB0aGUgaGFuZGxlXHJcbiAgICAgICAgaWYgKG9uSGFuZGxlKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSwgZmFsc2UpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJzb3IgIT09IDIpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yID0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJzb3IgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ3RleHQnO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBWZXJ0aWNhbCByZXNpemUgc3VwcG9ydCBmb3IgZGl2LCB0ZXh0YXJlYSwgaWZyYW1lLCBldGMuXHJcbiAqXHJcbiAqIEEgcHJvYmxlbSB3aXRoIHRoZSByZXNpemUgZmVhdHVyZSBvZiB0ZXh0YXJlYSBhbmQgaWZyYW1lIGlzIHRoYXQgaXQgZG9lcyBub3Qgd29yayBpbiBhbGxcclxuICogYnJvd3NlcnMgKGVzcGVjaWFsbHkgRWRnZSkgYW5kIGlzIG9mdGVuIHF1aXRlIHF1aXJreS4gVGhpcyBzbWFsbCBwYWNrYWdlIGFsbG93cyB5b3UgdG9cclxuICogYWRkIHZlcnRpY2FsIHJlc2l6ZSBhYmlsaXR5IHRvIGp1c3QgYWJvdXQgYW55dGhpbmcuXHJcbiAqXHJcbiAqIEB2ZXJzaW9uIDIuNC4wIEFkZGVkIHRvdWNoIHN1cHBvcnQuIExpbWl0ZWQgc3BlZWQgb2YgcmVzaXppbmcgdG8gYXZvaWQgaXNzdWUgd2hlbiBzY3JvbGxpbmcuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtSZXNpemVyQWN0dWFsfSBmcm9tICcuL3Jlc2l6ZXItYWN0dWFsJztcclxuaW1wb3J0IHtPcHRpb25zfSBmcm9tICcuL09wdGlvbnMnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDb25zdHJ1Y3RvciBmb3IgYSBSZXNpemVyIG9iamVjdFxyXG4gKiBAcGFyYW0gc2VsIFNlbGVjdG9yIG9yIERPTSBlbGVtZW50XHJcbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgb2JqZWN0LlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBSZXNpemVyID0gZnVuY3Rpb24oc2VsLCBvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gbmV3IE9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG4gICAgaWYodHlwZW9mIHNlbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBuZXcgUmVzaXplckFjdHVhbChlbGVtZW50c1tpXSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmKHNlbC5ub2RlVHlwZSkge1xyXG4gICAgICAgIG5ldyBSZXNpemVyQWN0dWFsKHNlbCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2l6ZXI7XHJcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0udXNlWzNdIS4vX2RpYWxvZy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0udXNlWzNdIS4vX2RpYWxvZy5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzLCB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==