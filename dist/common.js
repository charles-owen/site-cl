(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["common"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./packages/dialog-cl/src/_dialog.scss":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./packages/dialog-cl/src/_dialog.scss ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.dialog-cl {\n  box-sizing: border-box;\n  position: fixed;\n  border: 1px solid #444444;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  cursor: default;\n  top: 0;\n  width: 350px;\n  min-width: 150px;\n  max-width: 500px;\n  height: auto;\n  min-height: 150px;\n  max-height: 600px;\n}\n\ndiv.cl-dialog-bottom {\n  box-sizing: border-box;\n  flex: 0 0 44px;\n  width: 100%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n  text-align: right;\n  border-top: 1px solid #cccccc;\n  cursor: default;\n}\n\ndiv.dialog-cl-body {\n  flex: 0 1 auto;\n  width: 100%;\n  overflow-y: auto;\n  background-color: white;\n  padding: 0;\n}\n\ndiv.dialog-cl-body p:first-child,\ndiv.dialog-cl-body h1:first-child,\ndiv.dialog-cl-body h2:first-child {\n  margin-top: 0;\n}\n\ndiv.dialog-cl-body p:last-child {\n  margin-bottom: 0;\n}\n\ndiv.cl-dialog-bottom button {\n  display: inline-block;\n  min-width: 7em;\n  margin: 10px 10px 10px 0;\n  padding: 3px 10px;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  font-size: 0.8em;\n  font-weight: bold;\n  border: 1px solid #999;\n  border-radius: 1px;\n  box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.1), inset 0 -10px 20px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  color: #444;\n  background: #fff;\n}\n\ndiv.cl-dialog-bottom button:active {\n  box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.1), inset 0 10px 20px rgba(0, 0, 0, 0.1);\n}\n\ndiv.cl-dialog-bottom button:disabled,\ndiv.cl-dialog-bottom button[disabled] {\n  color: #ccc;\n}\n\ndiv.dialog-cl-top {\n  box-sizing: border-box;\n  background-color: #009688;\n  margin: 0;\n  padding: 0;\n  flex: 0 0 25px;\n  cursor: default;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n\ndiv.dialog-cl-top h1 {\n  flex-grow: 1;\n  margin: 0;\n  padding: 4px 4px 0 10px;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  font-size: 16px;\n  line-height: 16px;\n  user-select: none;\n}\n\ndiv.dialog-cl-top button.dialog-cl-tb-button {\n  flex: 0 0 25px;\n  position: relative;\n  box-sizing: border-box;\n  height: 25px;\n  width: 25px;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  outline: none;\n}\n\ndiv.dialog-cl-top button.dialog-cl-tb-button span {\n  position: absolute;\n  left: 4px;\n  top: 4px;\n}\n\ndiv.dialog-cl-top .dialog-cl-tb-button:hover {\n  background-color: #e81123;\n  cursor: pointer;\n}\n\ndiv.dialog-cl div.message-cl {\n  font-size: 1.25em;\n  padding: 1em;\n}\n\ndiv.dialog-cl-column {\n  text-align: center;\n}\n\ndiv.dialog-cl-column > div {\n  display: inline-block;\n  padding: 1.5em 0 2.0em 0;\n}\n\ndiv.dialog-cl-column select {\n  width: 100%;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/dompurify/dist/purify.js":
/*!***********************************************!*\
  !*** ./node_modules/dompurify/dist/purify.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var freeze$1 = Object.freeze || function (x) {
  return x;
};

var html = freeze$1(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);

// SVG
var svg = freeze$1(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'audio', 'canvas', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'video', 'view', 'vkern']);

var svgFilters = freeze$1(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);

var mathMl = freeze$1(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']);

var text = freeze$1(['#text']);

var freeze$2 = Object.freeze || function (x) {
  return x;
};

var html$1 = freeze$2(['accept', 'action', 'align', 'alt', 'autocomplete', 'background', 'bgcolor', 'border', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'coords', 'crossorigin', 'datetime', 'default', 'dir', 'disabled', 'download', 'enctype', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'integrity', 'ismap', 'label', 'lang', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'multiple', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns']);

var svg$1 = freeze$2(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);

var mathMl$1 = freeze$2(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);

var xml = freeze$2(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

var hasOwnProperty = Object.hasOwnProperty;
var setPrototypeOf = Object.setPrototypeOf;

var _ref$1 = typeof Reflect !== 'undefined' && Reflect;
var apply$1 = _ref$1.apply;

if (!apply$1) {
  apply$1 = function apply(fun, thisValue, args) {
    return fun.apply(thisValue, args);
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
      var lcElement = element.toLowerCase();
      if (lcElement !== element) {
        // Config presets (e.g. tags.js, attrs.js) are immutable.
        if (!Object.isFrozen(array)) {
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
  var newObject = {};

  var property = void 0;
  for (property in object) {
    if (apply$1(hasOwnProperty, object, [property])) {
      newObject[property] = object[property];
    }
  }

  return newObject;
}

var seal = Object.seal || function (x) {
  return x;
};

var MUSTACHE_EXPR = seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
var ERB_EXPR = seal(/<%[\s\S]*|[\s\S]*%>/gm);
var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
);
var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g // eslint-disable-line no-control-regex
);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _ref = typeof Reflect !== 'undefined' && Reflect;
var apply = _ref.apply;

var arraySlice = Array.prototype.slice;
var freeze = Object.freeze;

var getGlobal = function getGlobal() {
  return typeof window === 'undefined' ? null : window;
};

if (!apply) {
  apply = function apply(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}

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
  } catch (error) {
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
  DOMPurify.version = '1.0.11';

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
  var useDOMParser = false;
  var removeTitle = false;

  var document = window.document;
  var DocumentFragment = window.DocumentFragment,
      HTMLTemplateElement = window.HTMLTemplateElement,
      Node = window.Node,
      NodeFilter = window.NodeFilter,
      _window$NamedNodeMap = window.NamedNodeMap,
      NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
      Text = window.Text,
      Comment = window.Comment,
      DOMParser = window.DOMParser,
      TrustedTypes = window.TrustedTypes;

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

  var trustedTypesPolicy = _createTrustedTypesPolicy(TrustedTypes, originalDocument);
  var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML('') : '';

  var _document = document,
      implementation = _document.implementation,
      createNodeIterator = _document.createNodeIterator,
      getElementsByTagName = _document.getElementsByTagName,
      createDocumentFragment = _document.createDocumentFragment;
  var importNode = originalDocument.importNode;


  var hooks = {};

  /**
   * Expose whether this browser supports running the full DOMPurify.
   */
  DOMPurify.isSupported = implementation && typeof implementation.createHTMLDocument !== 'undefined' && document.documentMode !== 9;

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
  var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(svgFilters), _toConsumableArray(mathMl), _toConsumableArray(text)));

  /* Allowed attribute names */
  var ALLOWED_ATTR = null;
  var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(mathMl$1), _toConsumableArray(xml)));

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

  /* Output should be safe for jQuery's $() factory? */
  var SAFE_FOR_JQUERY = false;

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
   * DOMPurify. */
  var RETURN_DOM_IMPORT = false;

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
  var FORBID_CONTENTS = addToSet({}, ['audio', 'head', 'math', 'script', 'style', 'template', 'svg', 'video']);

  /* Tags that are safe for data: URIs */
  var DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image']);

  /* Attributes safe for values like "javascript:" */
  var URI_SAFE_ATTRIBUTES = null;
  var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'summary', 'title', 'value', 'style', 'xmlns']);

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

    /* Set configuration parameters */
    ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
    URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet({}, cfg.ADD_URI_SAFE_ATTR) : DEFAULT_URI_SAFE_ATTRIBUTES;
    FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
    FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
    USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
    SAFE_FOR_JQUERY = cfg.SAFE_FOR_JQUERY || false; // Default false
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
    RETURN_DOM = cfg.RETURN_DOM || false; // Default false
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
    RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT || false; // Default false
    FORCE_BODY = cfg.FORCE_BODY || false; // Default false
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
    IN_PLACE = cfg.IN_PLACE || false; // Default false

    IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;

    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }

    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }

    /* Parse profile info */
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(text)));
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

    /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286 */
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ['tbody']);
    }

    // Prevent further manipulation of configuration.
    // Not available in IE8, Safari 5, etc.
    if (freeze) {
      freeze(cfg);
    }

    CONFIG = cfg;
  };

  /**
   * _forceRemove
   *
   * @param  {Node} node a DOM node
   */
  var _forceRemove = function _forceRemove(node) {
    DOMPurify.removed.push({ element: node });
    try {
      node.parentNode.removeChild(node);
    } catch (error) {
      node.outerHTML = emptyHTML;
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
      DOMPurify.removed.push({
        attribute: node.getAttributeNode(name),
        from: node
      });
    } catch (error) {
      DOMPurify.removed.push({
        attribute: null,
        from: node
      });
    }

    node.removeAttribute(name);
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
      var matches = dirty.match(/^[\s]+/);
      leadingWhitespace = matches && matches[0];
      if (leadingWhitespace) {
        dirty = dirty.slice(leadingWhitespace.length);
      }
    }

    /* Use DOMParser to workaround Firefox bug (see comment below) */
    if (useDOMParser) {
      try {
        doc = new DOMParser().parseFromString(dirty, 'text/html');
      } catch (error) {}
    }

    /* Remove title to fix a mXSS bug in older MS Edge */
    if (removeTitle) {
      addToSet(FORBID_TAGS, ['title']);
    }

    /* Otherwise use createHTMLDocument, because DOMParser is unsafe in
    Safari (see comment below) */
    if (!doc || !doc.documentElement) {
      doc = implementation.createHTMLDocument('');
      var _doc = doc,
          body = _doc.body;

      body.parentNode.removeChild(body.parentNode.firstElementChild);
      body.outerHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
    }

    if (leadingWhitespace) {
      doc.body.insertBefore(document.createTextNode(leadingWhitespace), doc.body.childNodes[0] || null);
    }

    /* Work on whole document or just its body */
    return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
  };

  // Firefox uses a different parser for innerHTML rather than
  // DOMParser (see https://bugzilla.mozilla.org/show_bug.cgi?id=1205631)
  // which means that you *must* use DOMParser, otherwise the output may
  // not be safe if used in a document.write context later.
  //
  // So we feature detect the Firefox bug and use the DOMParser if necessary.
  //
  // MS Edge, in older versions, is affected by an mXSS behavior. The second
  // check tests for the behavior and fixes it if necessary.
  if (DOMPurify.isSupported) {
    (function () {
      try {
        var doc = _initDocument('<svg><p><style><img src="</style><img src=x onerror=1//">');
        if (doc.querySelector('svg img')) {
          useDOMParser = true;
        }
      } catch (error) {}
    })();

    (function () {
      try {
        var doc = _initDocument('<x/><title>&lt;/title&gt;&lt;img&gt;');
        if (doc.querySelector('title').innerHTML.match(/<\/title/)) {
          removeTitle = true;
        }
      } catch (error) {}
    })();
  }

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

    if (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function') {
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
  var _isNode = function _isNode(obj) {
    return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? obj instanceof Node : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string';
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

    hooks[entryPoint].forEach(function (hook) {
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
  // eslint-disable-next-line complexity
  var _sanitizeElements = function _sanitizeElements(currentNode) {
    var content = void 0;

    /* Execute a hook if present */
    _executeHook('beforeSanitizeElements', currentNode, null);

    /* Check if element is clobbered or can clobber */
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }

    /* Now let's check the element's type and name */
    var tagName = currentNode.nodeName.toLowerCase();

    /* Execute a hook if present */
    _executeHook('uponSanitizeElement', currentNode, {
      tagName: tagName,
      allowedTags: ALLOWED_TAGS
    });

    /* Remove element if anything forbids its presence */
    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      /* Keep content except for black-listed elements */
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName] && typeof currentNode.insertAdjacentHTML === 'function') {
        try {
          var htmlToInsert = currentNode.innerHTML;
          currentNode.insertAdjacentHTML('AfterEnd', trustedTypesPolicy ? trustedTypesPolicy.createHTML(htmlToInsert) : htmlToInsert);
        } catch (error) {}
      }

      _forceRemove(currentNode);
      return true;
    }

    /* Remove in case a noscript/noembed XSS is suspected */
    if (tagName === 'noscript' && currentNode.innerHTML.match(/<\/noscript/i)) {
      _forceRemove(currentNode);
      return true;
    }

    if (tagName === 'noembed' && currentNode.innerHTML.match(/<\/noembed/i)) {
      _forceRemove(currentNode);
      return true;
    }

    /* Convert markup to cover jQuery behavior */
    if (SAFE_FOR_JQUERY && !currentNode.firstElementChild && (!currentNode.content || !currentNode.content.firstElementChild) && /</g.test(currentNode.textContent)) {
      DOMPurify.removed.push({ element: currentNode.cloneNode() });
      if (currentNode.innerHTML) {
        currentNode.innerHTML = currentNode.innerHTML.replace(/</g, '&lt;');
      } else {
        currentNode.innerHTML = currentNode.textContent.replace(/</g, '&lt;');
      }
    }

    /* Sanitize element content to be template-safe */
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
      /* Get the element's text content */
      content = currentNode.textContent;
      content = content.replace(MUSTACHE_EXPR$$1, ' ');
      content = content.replace(ERB_EXPR$$1, ' ');
      if (currentNode.textContent !== content) {
        DOMPurify.removed.push({ element: currentNode.cloneNode() });
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
    if (ALLOW_DATA_ATTR && DATA_ATTR$$1.test(lcName)) {
      // This attribute is safe
    } else if (ALLOW_ARIA_ATTR && ARIA_ATTR$$1.test(lcName)) {
      // This attribute is safe
      /* Otherwise, check the name is permitted */
    } else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      return false;

      /* Check value is safe. First, is attr inert? If so, is safe */
    } else if (URI_SAFE_ATTRIBUTES[lcName]) {
      // This attribute is safe
      /* Check no script, data or unknown possibly unsafe URI
        unless we know URI values are safe for that attribute */
    } else if (IS_ALLOWED_URI$$1.test(value.replace(ATTR_WHITESPACE$$1, ''))) {
      // This attribute is safe
      /* Keep image data URIs alive if src/xlink:href is allowed */
      /* Further prevent gadget XSS for dynamically built script tags */
    } else if ((lcName === 'src' || lcName === 'xlink:href') && lcTag !== 'script' && value.indexOf('data:') === 0 && DATA_URI_TAGS[lcTag]) {
      // This attribute is safe
      /* Allow unknown protocols: This provides support for links that
        are handled by protocol handlers which may be unknown ahead of
        time, e.g. fb:, spotify: */
    } else if (ALLOW_UNKNOWN_PROTOCOLS && !IS_SCRIPT_OR_DATA$$1.test(value.replace(ATTR_WHITESPACE$$1, ''))) {
      // This attribute is safe
      /* Check for binary attributes */
      // eslint-disable-next-line no-negated-condition
    } else if (!value) {
      // Binary attributes are safe at this point
      /* Anything else, presume unsafe, do not add it back */
    } else {
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
    var idAttr = void 0;
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

      value = attr.value.trim();
      lcName = name.toLowerCase();

      /* Execute a hook if present */
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
      value = hookEvent.attrValue;

      /* Remove attribute */
      // Safari (iOS + Mac), last tested v8.0.5, crashes if you try to
      // remove a "name" attribute from an <img> tag that has an "id"
      // attribute at the time.
      if (lcName === 'name' && currentNode.nodeName === 'IMG' && attributes.id) {
        idAttr = attributes.id;
        attributes = apply(arraySlice, attributes, []);
        _removeAttribute('id', currentNode);
        _removeAttribute(name, currentNode);
        if (attributes.indexOf(idAttr) > l) {
          currentNode.setAttribute('id', idAttr.value);
        }
      } else if (
      // This works around a bug in Safari, where input[type=file]
      // cannot be dynamically set after type has been removed
      currentNode.nodeName === 'INPUT' && lcName === 'type' && value === 'file' && hookEvent.keepAttr && (ALLOWED_ATTR[lcName] || !FORBID_ATTR[lcName])) {
        continue;
      } else {
        // This avoids a crash in Safari v9.0 with double-ids.
        // The trick is to first set the id to be empty and then to
        // remove the attribute
        if (name === 'id') {
          currentNode.setAttribute(name, '');
        }

        _removeAttribute(name, currentNode);
      }

      /* Did the hooks approve of the attribute? */
      if (!hookEvent.keepAttr) {
        continue;
      }

      /* Sanitize attribute content to be template-safe */
      if (SAFE_FOR_TEMPLATES) {
        value = value.replace(MUSTACHE_EXPR$$1, ' ');
        value = value.replace(ERB_EXPR$$1, ' ');
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

        DOMPurify.removed.pop();
      } catch (error) {}
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
        throw new TypeError('toString is not a function');
      } else {
        dirty = dirty.toString();
        if (typeof dirty !== 'string') {
          throw new TypeError('dirty is not a string, aborting');
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

    if (IN_PLACE) {
      /* No special handling necessary for in-place sanitization */
    } else if (dirty instanceof Node) {
      /* If dirty is a DOM element, append to an empty document to avoid
         elements being stripped by the parser */
      body = _initDocument('<!-->');
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
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf('<') === -1) {
        return trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
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
        /* AdoptNode() is not used because internal state is not reset
               (e.g. the past names map of a HTMLFormElement), this is safe
               in theory but we would rather not risk another attack vector.
               The state that is cloned by importNode() is explicitly defined
               by the specs. */
        returnNode = importNode.call(originalDocument, returnNode, true);
      }

      return returnNode;
    }

    var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;

    /* Sanitize final string template-safe */
    if (SAFE_FOR_TEMPLATES) {
      serializedHTML = serializedHTML.replace(MUSTACHE_EXPR$$1, ' ');
      serializedHTML = serializedHTML.replace(ERB_EXPR$$1, ' ');
    }

    return trustedTypesPolicy ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
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

    var lcTag = tag.toLowerCase();
    var lcName = attr.toLowerCase();
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
    hooks[entryPoint].push(hookFunction);
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
      hooks[entryPoint].pop();
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

})));
//# sourceMappingURL=purify.js.map


/***/ }),

/***/ "./node_modules/icons-cl/dist/icons.js":
/*!*********************************************!*\
  !*** ./node_modules/icons-cl/dist/icons.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdateIcons"];
/******/ 	window["webpackHotUpdateIcons"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) {}
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "bf9e57a8299e3dbaf01c";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "Dialog";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/icons.js")(__webpack_require__.s = "./src/icons.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./src/icons.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./src/icons.scss ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ./images/icons.png */ "./src/images/icons.png"));
// Module
exports.push([module.i, ".icons-cl {\n  display: inline-block;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  width: 16px;\n  height: 16px;\n  overflow: hidden;\n  color: transparent;\n  padding: 0; }\n  .icons-cl.icons-cl-caret-1-n {\n    background-position: 0 0; }\n  .icons-cl.icons-cl-caret-1-ne {\n    background-position: -16px 0; }\n  .icons-cl.icons-cl-caret-1-e {\n    background-position: -32px 0; }\n  .icons-cl.icons-cl-caret-1-se {\n    background-position: -48px 0; }\n  .icons-cl.icons-cl-caret-1-s {\n    background-position: -64px 0; }\n  .icons-cl.icons-cl-caret-1-sw {\n    background-position: -80px 0; }\n  .icons-cl.icons-cl-caret-1-w {\n    background-position: -96px 0; }\n  .icons-cl.icons-cl-caret-1-nw {\n    background-position: -112px 0; }\n  .icons-cl.icons-cl-caret-2-n-s {\n    background-position: -128px 0; }\n  .icons-cl.icons-cl-caret-2-e-w {\n    background-position: -144px 0; }\n  .icons-cl.icons-cl-triangle-1-n {\n    background-position: 0px -16px; }\n  .icons-cl.icons-cl-triangle-1-ne {\n    background-position: -16px -16px; }\n  .icons-cl.icons-cl-triangle-1-e {\n    background-position: -32px -16px; }\n  .icons-cl.icons-cl-triangle-1-se {\n    background-position: -48px -16px; }\n  .icons-cl.icons-cl-triangle-1-s {\n    background-position: -64px -16px; }\n  .icons-cl.icons-cl-triangle-1-sw {\n    background-position: -80px -16px; }\n  .icons-cl.icons-cl-triangle-1-w {\n    background-position: -96px -16px; }\n  .icons-cl.icons-cl-triangle-1-nw {\n    background-position: -112px -16px; }\n  .icons-cl.icons-cl-triangle-2-n-s {\n    background-position: -128px -16px; }\n  .icons-cl.icons-cl-triangle-2-e-w {\n    background-position: -144px -16px; }\n  .icons-cl.icons-cl-arrow-1-n {\n    background-position: 0px -32px; }\n  .icons-cl.icons-cl-arrow-1-w {\n    background-position: -96px -32px; }\n  .icons-cl.icons-cl-arrowstop-1-n {\n    background-position: -192px -32px; }\n  .icons-cl.icons-cl-arrowstop-1-e {\n    background-position: -208px -32px; }\n  .icons-cl.icons-cl-arrowstop-1-s {\n    background-position: -224px -32px; }\n  .icons-cl.icons-cl-arrowstop-1-w {\n    background-position: -240px -32px; }\n  .icons-cl.icons-cl-arrowthick-1-n {\n    background-position: 0px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-ne {\n    background-position: -16px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-e {\n    background-position: -32px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-se {\n    background-position: -48px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-s {\n    background-position: -64px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-sw {\n    background-position: -80px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-w {\n    background-position: -96px -48px; }\n  .icons-cl.icons-cl-arrowthick-1-nw {\n    background-position: -112px -48px; }\n  .icons-cl.icons-cl-arrowthick-2-n-s {\n    background-position: -128px -48px; }\n  .icons-cl.icons-cl-arrowthick-2-ne-sw {\n    background-position: -144px -48px; }\n  .icons-cl.icons-cl-arrowthick-2-e-w {\n    background-position: -160px -48px; }\n  .icons-cl.icons-cl-arrowthick-2-se-nw {\n    background-position: -176px -48px; }\n  .icons-cl.icons-cl-arrowthickstop-1-n {\n    background-position: -192px -48px; }\n  .icons-cl.icons-cl-arrowthickstop-1-e {\n    background-position: -208px -48px; }\n  .icons-cl.icons-cl-arrowthickstop-1-s {\n    background-position: -224px -48px; }\n  .icons-cl.icons-cl-arrowthickstop-1-w {\n    background-position: -240px -48px; }\n  .icons-cl.icons-cl-arrowreturnthick-1-w {\n    background-position: 0px -64px; }\n  .icons-cl.icons-cl-arrowreturnthick-1-e {\n    background-position: -32px -64px; }\n  .icons-cl.icons-cl-folder-collapsed {\n    background-position: 0px -96px; }\n  .icons-cl.icons-cl-folder-open {\n    background-position: -16px -96px; }\n  .icons-cl.icons-cl-document {\n    background-position: -32px -96px; }\n  .icons-cl.icons-cl-document-b {\n    background-position: -48px -96px; }\n  .icons-cl.icons-cl-note {\n    background-position: -64px -96px; }\n  .icons-cl.icons-cl-mail-closed {\n    background-position: -80px -96px; }\n  .icons-cl.icons-cl-mail-open {\n    background-position: -96px -96px; }\n  .icons-cl.icons-cl-suitcase {\n    background-position: -112px -96px; }\n  .icons-cl.icons-cl-comment {\n    background-position: -128px -96px; }\n  .icons-cl.icons-cl-person {\n    background-position: -144px -96px; }\n  .icons-cl.icons-cl-print {\n    background-position: -160px -96px; }\n  .icons-cl.icons-cl-trash {\n    background-position: -176px -96px; }\n  .icons-cl.icons-cl-locked {\n    background-position: -192px -96px; }\n  .icons-cl.icons-cl-unlocked {\n    background-position: -208px -96px; }\n  .icons-cl.icons-cl-bookmark {\n    background-position: -224px -96px; }\n  .icons-cl.icons-cl-tag {\n    background-position: -240px -96px; }\n  .icons-cl.icons-cl-home {\n    background-position: 0px -112px; }\n  .icons-cl.icons-cl-flag {\n    background-position: -16px -112px; }\n  .icons-cl.icons-cl-calculator {\n    background-position: -32px -112px; }\n  .icons-cl.icons-cl-cart {\n    background-position: -48px -112px; }\n  .icons-cl.icons-cl-pencil {\n    background-position: -64px -112px; }\n  .icons-cl.icons-cl-clock {\n    background-position: -80px -112px; }\n  .icons-cl.icons-cl-disk {\n    background-position: -96px -112px; }\n  .icons-cl.icons-cl-calendar {\n    background-position: -112px -112px; }\n  .icons-cl.icons-cl-zoomin {\n    background-position: -128px -112px; }\n  .icons-cl.icons-cl-zoomout {\n    background-position: -144px -112px; }\n  .icons-cl.icons-cl-search {\n    background-position: -160px -112px; }\n  .icons-cl.icons-cl-wrench {\n    background-position: -176px -112px; }\n  .icons-cl.icons-cl-gear {\n    background-position: -192px -112px; }\n  .icons-cl.icons-cl-heart {\n    background-position: -208px -112px; }\n  .icons-cl.icons-cl-star {\n    background-position: -224px -112px; }\n  .icons-cl.icons-cl-link {\n    background-position: -240px -112px; }\n  .icons-cl.icons-cl-cancel {\n    background-position: 0px -128px; }\n  .icons-cl.icons-cl-plus {\n    background-position: -16px -128px; }\n  .icons-cl.icons-cl-plusthick {\n    background-position: -32px -128px; }\n  .icons-cl.icons-cl-minus {\n    background-position: -48px -128px; }\n  .icons-cl.icons-cl-minusthick {\n    background-position: -64px -128px; }\n  .icons-cl.icons-cl-key {\n    background-position: -80px -128px; }\n  .icons-cl.icons-cl-lightbulb {\n    background-position: -96px -128px; }\n  .icons-cl.icons-cl-scissors {\n    background-position: -112px -128px; }\n  .icons-cl.icons-cl-clipboard {\n    background-position: -128px -128px; }\n  .icons-cl.icons-cl-copy {\n    background-position: -144px -128px; }\n  .icons-cl.icons-cl-contact {\n    background-position: -160px -128px; }\n  .icons-cl.icons-cl-image {\n    background-position: -176px -128px; }\n  .icons-cl.icons-cl-video {\n    background-position: -192px -128px; }\n  .icons-cl.icons-cl-script {\n    background-position: -208px -128px; }\n  .icons-cl.icons-cl-close {\n    background-position: -80px -128px; }\n  .icons-cl.icons-cl-closethick {\n    background-position: -96px -128px; }\n  .icons-cl.icons-cl-alert {\n    background-position: 0px -144px; }\n  .icons-cl.icons-cl-info {\n    background-position: -16px -144px; }\n  .icons-cl.icons-cl-notice {\n    background-position: -32px -144px; }\n  .icons-cl.icons-cl-help {\n    background-position: -48px -144px; }\n  .icons-cl.icons-cl-check {\n    background-position: -64px -144px; }\n  .icons-cl.icons-cl-bullet {\n    background-position: -80px -144px; }\n  .icons-cl.icons-cl-radio-off {\n    background-position: -96px -144px; }\n  .icons-cl.icons-cl-radio-on {\n    background-position: -112px -144px; }\n  .icons-cl.icons-cl-pin-w {\n    background-position: -128px -144px; }\n  .icons-cl.icons-cl-pin-s {\n    background-position: -144px -144px; }\n  .icons-cl.icons-cl-play {\n    background-position: 0px -160px; }\n  .icons-cl.icons-cl-pause {\n    background-position: -16px -160px; }\n  .icons-cl.icons-cl-seek-next {\n    background-position: -32px -160px; }\n  .icons-cl.icons-cl-seek-prev {\n    background-position: -48px -160px; }\n  .icons-cl.icons-cl-seek-end {\n    background-position: -64px -160px; }\n  .icons-cl.icons-cl-seek-first {\n    background-position: -80px -160px; }\n  .icons-cl.icons-cl-stop {\n    background-position: -96px -160px; }\n  .icons-cl.icons-cl-eject {\n    background-position: -112px -160px; }\n  .icons-cl.icons-cl-volume-off {\n    background-position: -128px -160px; }\n  .icons-cl.icons-cl-volume-on {\n    background-position: -144px -160px; }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

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

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
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
  var css = remove ? '' : obj.css; // For old IE

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
  }

  if (sourceMap && btoa) {
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
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons.scss */ "./src/icons.scss");
/* harmony import */ var _icons_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_icons_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/icons.scss":
/*!************************!*\
  !*** ./src/icons.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/resolve-url-loader!../node_modules/sass-loader/dist/cjs.js?sourceMap!./icons.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./src/icons.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js!../node_modules/resolve-url-loader!../node_modules/sass-loader/dist/cjs.js?sourceMap!./icons.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./src/icons.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/resolve-url-loader!../node_modules/sass-loader/dist/cjs.js?sourceMap!./icons.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./src/icons.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/images/icons.png":
/*!******************************!*\
  !*** ./src/images/icons.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=icons.js.map

/***/ }),

/***/ "./node_modules/resizer-cl/src/Options.js":
/*!************************************************!*\
  !*** ./node_modules/resizer-cl/src/Options.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Various interface options we can select
 */

/**
 * Interface options.
 * @param options User provided options that override the default values.
 * @constructor
 */
var Options = function(options) {
    options = options ? options : {};

    /// Options: vertical, horizontal, both
    this.resize = 'vertical';

    /// The resizing handle
    this.handle = 'bar';

    /// Range for grabing
    this.grabSize = 10;

    for(var property in options) {
        if(options.hasOwnProperty(property)) {
            if(!this.hasOwnProperty(property)) {
                throw new Error("Invalid option " + property);
            }
            this[property] = options[property];
        }
    }

}



/* harmony default export */ __webpack_exports__["default"] = (Options);


/***/ }),

/***/ "./node_modules/resizer-cl/src/app.modules.js":
/*!****************************************************!*\
  !*** ./node_modules/resizer-cl/src/app.modules.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resizer.js */ "./node_modules/resizer-cl/src/resizer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _resizer_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });






/***/ }),

/***/ "./node_modules/resizer-cl/src/resizer-actual.js":
/*!*******************************************************!*\
  !*** ./node_modules/resizer-cl/src/resizer-actual.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

function ResizerActual(element, options) {
    element.classList.add('resizer');

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

    /// Mouse move event handler
    let installedMoveListener = null;
    let mask = null;

    /// Get the minimum height and width properties
    var rect = element.getBoundingClientRect();
    var height = rect.height;
    var width = rect.width;

    let minHeight = getComputedStyle(element).minHeight;
    minHeight = minHeight.substr(0, minHeight.length - 2);
    let minWidth = getComputedStyle(element).minWidth;
    minWidth = minWidth.substr(0, minWidth.length - 2);

    function start() {
        // Install the mouse down listener
        element.addEventListener('mousedown', mouseDownListener);

        // Install the cursor listener
        element.addEventListener('mousemove', cursorListener);
    }

    let initialX, initialY;
    let initialWidth, initialHeight;
    let grabType = null;

    function mouseDownListener(e) {
        grabType = onHandle(e.pageX, e.pageY);
        if(grabType !== null) {
            initialX = e.pageX;
            initialY = e.pageY;
            let rect = element.getBoundingClientRect();
            initialWidth = rect.width;
            initialHeight = rect.height;

            installHandlers();
            installMask();
        }
    }

    function mouseMoveListener(e) {
        if(e.buttons !== 1) {
            removeAll();
            return;
        }

        let dx = e.pageX - initialX;
        let dy = e.pageY - initialY;

        if(grabType === 'horizontal' || grabType === 'both') {
            // Compute a desired new width
            let newWidth = initialWidth + dx;
            if (newWidth < minWidth) {
                newWidth = minWidth;
            }

            // Set it
            element.style.width = '' + newWidth + 'px';
        }

        if(grabType === 'vertical' || grabType === 'both') {
            // Compute a desired new height
            let newHeight = initialHeight + dy;
            if (newHeight < minHeight) {
                newHeight = minHeight;
            }

            // Set it
            element.style.height = '' + newHeight + 'px';
        }
    }

    function mouseUpListener(e) {
        removeAll();
    }

    function installHandlers() {
        removeHandlers();

        installedMoveListener = mouseMoveListener;
        document.addEventListener('mousemove', installedMoveListener);
        document.addEventListener('mouseup', mouseUpListener);
    }

    function installMask() {
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

        body.appendChild(mask);
    }

    function removeAll() {
        removeHandlers();
        removeMask();
    }

    function removeHandlers() {
        if(installedMoveListener === null) {
            return;
        }

        document.removeEventListener('mousemove', installedMoveListener);
        document.removeEventListener('mouseup', mouseUpListener);
        installedMoveListener = null;


    }

    function removeMask() {
        if(mask !== null) {
            var body = document.querySelector('body');
            body.removeChild(mask);
            mask = null;
        }
    }

    /**
     * Determine if an x,y location is over a handle for manipulating
     * the resizeable object.
     * @param x location in pixels
     * @param y location in pixels
     * @returns null if not, 'horizontal', 'vertical', 'both' if over handle and mode available.
     */
    function onHandle(x, y) {
        let rect = element.getBoundingClientRect();

        let bottom = rect.bottom + window.pageYOffset;
        let vert = y >= bottom - grabSize;

        let right = rect.right + window.pageXOffset;
        let horz = x >= right - grabSize;

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
        if (onHandle(event.pageX, event.pageY) !== null) {
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

/* harmony default export */ __webpack_exports__["default"] = (ResizerActual);


/***/ }),

/***/ "./node_modules/resizer-cl/src/resizer.js":
/*!************************************************!*\
  !*** ./node_modules/resizer-cl/src/resizer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resizer_actual_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resizer-actual.js */ "./node_modules/resizer-cl/src/resizer-actual.js");
/* harmony import */ var _Options_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options.js */ "./node_modules/resizer-cl/src/Options.js");
/**
 * Vertical resize support for div, textarea, iframe, etc.
 *
 * A problem with the resize feature of textarea and iframe is that it does not work in all
 * browsers (especially Edge) and is often quite quirky. This small package allows you to
 * add vertical resize ability to just about anything.
 *
 */





/**
 * Constructor for a Resizer object
 * @param sel Selector or DOM element
 * @param options Options object.
 * @constructor
 */
function Resizer(sel, options) {
    options = new _Options_js__WEBPACK_IMPORTED_MODULE_1__["default"](options);

    if(typeof sel === "string") {
        var elements = document.querySelectorAll(sel);
        for(var i=0; i<elements.length; i++) {
            new _resizer_actual_js__WEBPACK_IMPORTED_MODULE_0__["default"](elements[i], options);
        }
    } else if(sel.nodeType) {
        new _resizer_actual_js__WEBPACK_IMPORTED_MODULE_0__["default"](sel, options);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Resizer);


/***/ }),

/***/ "./packages/dialog-cl/src/Body.js":
/*!****************************************!*\
  !*** ./packages/dialog-cl/src/Body.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools.js */ "./packages/dialog-cl/src/DOM/Tools.js");
/**
 * @file
 * Middle section of dialog box
 */


var Body = function Body(dialog, parentDiv) {
  var options = dialog.options;
  var div = _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].createClassedDiv('dialog-cl-body', options.content);
  parentDiv.appendChild(div);
  this.div = div;
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ }),

/***/ "./packages/dialog-cl/src/Bottom.js":
/*!******************************************!*\
  !*** ./packages/dialog-cl/src/Bottom.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools */ "./packages/dialog-cl/src/DOM/Tools.js");

/**
 * The bottom buttons section of the dialog box
 * @constructor
 */

var Bottom = function Bottom(dialog, parentDiv) {
  var options = dialog.options;

  var initialize = function initialize() {
    // let html = `<button class="cl-dialog-btn">Ok</button><button class="cl-dialog-btn">Cancel</button>`;
    var div = _DOM_Tools__WEBPACK_IMPORTED_MODULE_0__["default"].createClassedDiv('cl-dialog-bottom');
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

/* harmony default export */ __webpack_exports__["default"] = (Bottom);

/***/ }),

/***/ "./packages/dialog-cl/src/DOM/Tools.js":
/*!*********************************************!*\
  !*** ./packages/dialog-cl/src/DOM/Tools.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


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
  return typeof val === 'string' || !!val && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(val) === 'object' && Object.prototype.toString.call(val) === '[object String]';
};

Tools.isElement = function (val) {
  return val !== undefined && val !== null && val.nodeValue !== undefined;
};

/* harmony default export */ __webpack_exports__["default"] = (Tools);

/***/ }),

/***/ "./packages/dialog-cl/src/Dialog.js":
/*!******************************************!*\
  !*** ./packages/dialog-cl/src/Dialog.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Options_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Options.js */ "./packages/dialog-cl/src/Options.js");
/* harmony import */ var _TitleBar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleBar.js */ "./packages/dialog-cl/src/TitleBar.js");
/* harmony import */ var _Body_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Body.js */ "./packages/dialog-cl/src/Body.js");
/* harmony import */ var _Bottom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Bottom.js */ "./packages/dialog-cl/src/Bottom.js");
/* harmony import */ var _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM/Tools.js */ "./packages/dialog-cl/src/DOM/Tools.js");
/* harmony import */ var resizer_cl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! resizer-cl */ "./node_modules/resizer-cl/src/app.modules.js");
/* harmony import */ var _Mask_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Mask.js */ "./packages/dialog-cl/src/Mask.js");







/**
 * Flexible and configurable dialog box object
 * @constructor
 */

var Dialog = function Dialog(options) {
  var _this = this;

  options = new _Options_js__WEBPACK_IMPORTED_MODULE_0__["default"](options);
  this.options = options;
  var body = null,
      mask = null,
      bottom = null;

  var initialize = function initialize() {
    Dialog.zIndex += 2;
    _this.zIndex = Dialog.zIndex;
    var div = _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_4__["default"].createClassedDiv('dialog-cl');
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_4__["default"].addClasses(div, options.addClass);
    _this.div = div;
    div.style.zIndex = _this.zIndex;
    var parent = document.querySelector('body');
    parent.appendChild(div);
    installResizable(div);
    new _TitleBar_js__WEBPACK_IMPORTED_MODULE_1__["default"](_this, div);
    body = new _Body_js__WEBPACK_IMPORTED_MODULE_2__["default"](_this, div);

    if (options.buttons !== false) {
      bottom = new _Bottom_js__WEBPACK_IMPORTED_MODULE_3__["default"](_this, div);
    }

    mask = new _Mask_js__WEBPACK_IMPORTED_MODULE_6__["default"](_this);
    place(div, parent);
    div.addEventListener('keydown', function (event) {
      if (event.keyCode === 27) {
        event.preventDefault();

        _this.close();
      }
    });
  };

  var installResizable = function installResizable(div) {
    if (options.resize !== 'none') {
      var rsOptions = {
        'resize': options.resize,
        'handle': 'none',
        'grabSize': options.grabSize
      };
      new resizer_cl__WEBPACK_IMPORTED_MODULE_5__["default"](div, rsOptions);
    }
  };

  function toPx(val) {
    return '' + val + 'px';
  }

  var place = function place(div, parent) {
    //let parentWid = parent.offsetWidth;
    //let parentHit = parent.offsetHeight;
    var parentWid = window.innerWidth;
    var parentHit = window.innerHeight;
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
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_4__["default"].addContent(body.div, content);
  };

  this.close = function () {
    mask.remove();
    this.div.parentNode.removeChild(this.div);
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
/* harmony default export */ __webpack_exports__["default"] = (Dialog);

/***/ }),

/***/ "./packages/dialog-cl/src/Mask.js":
/*!****************************************!*\
  !*** ./packages/dialog-cl/src/Mask.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools.js */ "./packages/dialog-cl/src/DOM/Tools.js");
/**
 * Mask that allows the dialog box to be modal.
 */


var Mask = function Mask(dialog) {
  var options = dialog.options;
  var mask = null;

  if (options.modal) {
    var body = document.querySelector('body');
    mask = _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].createClassedDiv('mask'); // document.createElement('div');

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

/* harmony default export */ __webpack_exports__["default"] = (Mask);

/***/ }),

/***/ "./packages/dialog-cl/src/MessageBox.js":
/*!**********************************************!*\
  !*** ./packages/dialog-cl/src/MessageBox.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

  var dialog = new _Dialog_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
    'title': title,
    'content': '<div class="message-cl"><p>' + message + '</p></div>',
    'buttons': buttons
  });
};

MessageBox.OK = 0;
MessageBox.OKCANCEL = 1;
/* harmony default export */ __webpack_exports__["default"] = (MessageBox);

/***/ }),

/***/ "./packages/dialog-cl/src/Options.js":
/*!*******************************************!*\
  !*** ./packages/dialog-cl/src/Options.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

  this.modal = true;

  for (var property in options) {
    if (options.hasOwnProperty(property)) {
      if (!this.hasOwnProperty(property)) {
        throw new Error("Invalid option " + property);
      }

      this[property] = options[property];
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Options);

/***/ }),

/***/ "./packages/dialog-cl/src/TitleBar.js":
/*!********************************************!*\
  !*** ./packages/dialog-cl/src/TitleBar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools.js */ "./packages/dialog-cl/src/DOM/Tools.js");
/**
 * @file
 * Title bar management
 */


var TitleBar = function TitleBar(dialog, parentDiv) {
  var options = dialog.options; /// Mouse move event handler

  var installedMoveListener = null;
  var initialX, initialY;
  var initialPositionX, initialPositionY;

  var initialize = function initialize() {
    var html = "<h1>".concat(options.title, "</h1>");
    var div = _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].createClassedDiv('dialog-cl-top', html);
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].addClasses(div, options.titleBarAddClass);
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
    h1.addEventListener('mousedown', function (event) {
      initialX = event.pageX;
      initialY = event.pageY;
      var rect = dialog.div.getBoundingClientRect();
      initialPositionX = rect.left;
      initialPositionY = rect.top;
      installHandlers();
    });
  };

  function addClose(div, item) {
    var button = document.createElement('button');
    div.appendChild(button);
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(button, 'dialog-cl-tb-button');
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
    _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(button, 'dialog-cl-tb-button');
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

  function mouseMoveListener(e) {
    if (e.buttons !== 1) {
      removeHandlers();
      return;
    }

    var dx = e.pageX - initialX;
    var dy = e.pageY - initialY;
    var newPositionX = initialPositionX + dx;
    var newPositionY = initialPositionY + dy;
    dialog.div.style.left = newPositionX + 'px';
    dialog.div.style.top = newPositionY + 'px';
  }

  function mouseUpListener(e) {
    removeHandlers();
  }

  function installHandlers() {
    removeHandlers();
    installedMoveListener = mouseMoveListener;
    document.addEventListener('mousemove', installedMoveListener);
    document.addEventListener('mouseup', mouseUpListener);
  }

  function removeHandlers() {
    if (installedMoveListener === null) {
      return;
    }

    document.removeEventListener('mousemove', installedMoveListener);
    document.removeEventListener('mouseup', mouseUpListener);
    installedMoveListener = null;
  }

  initialize();
};

/* harmony default export */ __webpack_exports__["default"] = (TitleBar);

/***/ }),

/***/ "./packages/dialog-cl/src/_dialog.scss":
/*!*********************************************!*\
  !*** ./packages/dialog-cl/src/_dialog.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js?sourceMap!./_dialog.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./packages/dialog-cl/src/_dialog.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("735ed6ab", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js?sourceMap!./_dialog.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./packages/dialog-cl/src/_dialog.scss", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js?sourceMap!./_dialog.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./packages/dialog-cl/src/_dialog.scss");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./packages/dialog-cl/src/app.modules.js":
/*!***********************************************!*\
  !*** ./packages/dialog-cl/src/app.modules.js ***!
  \***********************************************/
/*! exports provided: default, Dialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills/all.js */ "./packages/dialog-cl/src/polyfills/all.js");
/* harmony import */ var _polyfills_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfills_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dialog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialog.js */ "./packages/dialog-cl/src/Dialog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return _Dialog_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _MessageBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageBox.js */ "./packages/dialog-cl/src/MessageBox.js");
/* harmony import */ var _dialog_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_dialog.scss */ "./packages/dialog-cl/src/_dialog.scss");
/* harmony import */ var _dialog_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dialog_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var icons_cl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons-cl */ "./node_modules/icons-cl/dist/icons.js");
/* harmony import */ var icons_cl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_cl__WEBPACK_IMPORTED_MODULE_4__);
// The public-path module must be imported first!
//import './public-path.js';





_Dialog_js__WEBPACK_IMPORTED_MODULE_1__["default"].MessageBox = _MessageBox_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_Dialog_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./packages/dialog-cl/src/polyfills/all.js":
/*!*************************************************!*\
  !*** ./packages/dialog-cl/src/polyfills/all.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9kaWFsb2ctY2wvc3JjL19kaWFsb2cuc2NzcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvZG9tcHVyaWZ5L2Rpc3QvcHVyaWZ5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9pY29ucy1jbC9kaXN0L2ljb25zLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9yZXNpemVyLWNsL3NyYy9PcHRpb25zLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9yZXNpemVyLWNsL3NyYy9hcHAubW9kdWxlcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvcmVzaXplci1jbC9zcmMvcmVzaXplci1hY3R1YWwuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3Jlc2l6ZXItY2wvc3JjL3Jlc2l6ZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvZGlhbG9nLWNsL3NyYy9Cb2R5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2RpYWxvZy1jbC9zcmMvQm90dG9tLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2RpYWxvZy1jbC9zcmMvRE9NL1Rvb2xzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2RpYWxvZy1jbC9zcmMvRGlhbG9nLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2RpYWxvZy1jbC9zcmMvTWFzay5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9kaWFsb2ctY2wvc3JjL01lc3NhZ2VCb3guanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvZGlhbG9nLWNsL3NyYy9PcHRpb25zLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2RpYWxvZy1jbC9zcmMvVGl0bGVCYXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvZGlhbG9nLWNsL3NyYy9fZGlhbG9nLnNjc3M/OGVmMiIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9kaWFsb2ctY2wvc3JjL2FwcC5tb2R1bGVzLmpzIl0sIm5hbWVzIjpbIkJvZHkiLCJkaWFsb2ciLCJwYXJlbnREaXYiLCJvcHRpb25zIiwiZGl2IiwiVG9vbHMiLCJjcmVhdGVDbGFzc2VkRGl2IiwiY29udGVudCIsImFwcGVuZENoaWxkIiwiQm90dG9tIiwiaW5pdGlhbGl6ZSIsImJ1dHRvbnMiLCJhZGRPayIsImZvckVhY2giLCJpdGVtIiwiYWRkQnV0dG9uIiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImlubmVySFRNTCIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidW5kZWZpbmVkIiwiY2xpY2siLCJjbG9zZSIsImZvY3VzIiwiY29udGVudHMiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRDbGFzcyIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJhZGRDbGFzc2VzIiwiY2xhc3NlcyIsInNwbGl0IiwiY2xzIiwiYWRkQ29udGVudCIsImlzU3RyaW5nIiwiaXNFbGVtZW50IiwidmFsIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwibm9kZVZhbHVlIiwiRGlhbG9nIiwiT3B0aW9ucyIsImJvZHkiLCJtYXNrIiwiYm90dG9tIiwiekluZGV4Iiwic3R5bGUiLCJwYXJlbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5zdGFsbFJlc2l6YWJsZSIsIlRpdGxlQmFyIiwiTWFzayIsInBsYWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleUNvZGUiLCJyZXNpemUiLCJyc09wdGlvbnMiLCJncmFiU2l6ZSIsIlJlc2l6ZXIiLCJ0b1B4IiwicGFyZW50V2lkIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInBhcmVudEhpdCIsImlubmVySGVpZ2h0IiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsInRvcCIsImxlZnQiLCJyZW1vdmUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJtb2RhbCIsInBvc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiTWVzc2FnZUJveCIsInRpdGxlIiwibWVzc2FnZSIsImJ1dHRvbjEiLCJidXR0b24yIiwiT0tDQU5DRUwiLCJPSyIsInRpdGxlQmFyQnV0dG9ucyIsInRpdGxlQmFyQWRkQ2xhc3MiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiRXJyb3IiLCJpbnN0YWxsZWRNb3ZlTGlzdGVuZXIiLCJpbml0aWFsWCIsImluaXRpYWxZIiwiaW5pdGlhbFBvc2l0aW9uWCIsImluaXRpYWxQb3NpdGlvblkiLCJodG1sIiwiYWRkQ2xvc2UiLCJhZGRDdXN0b20iLCJoMSIsInBhZ2VYIiwicGFnZVkiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaW5zdGFsbEhhbmRsZXJzIiwibW91c2VNb3ZlTGlzdGVuZXIiLCJlIiwicmVtb3ZlSGFuZGxlcnMiLCJkeCIsImR5IiwibmV3UG9zaXRpb25YIiwibmV3UG9zaXRpb25ZIiwibW91c2VVcExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxrQkFBa0IsMkJBQTJCLG9CQUFvQiw4QkFBOEIsNEJBQTRCLGNBQWMsZUFBZSxrQkFBa0IsMkJBQTJCLHNCQUFzQixvQkFBb0IsV0FBVyxpQkFBaUIscUJBQXFCLHFCQUFxQixpQkFBaUIsc0JBQXNCLHNCQUFzQixHQUFHLDBCQUEwQiwyQkFBMkIsbUJBQW1CLGdCQUFnQiw0QkFBNEIsY0FBYyxlQUFlLHNCQUFzQixrQ0FBa0Msb0JBQW9CLEdBQUcsd0JBQXdCLG1CQUFtQixnQkFBZ0IscUJBQXFCLDRCQUE0QixlQUFlLEdBQUcsOEdBQThHLGtCQUFrQixHQUFHLHFDQUFxQyxxQkFBcUIs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QUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLEtBQUs7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGlCQUFpQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7OztBQ2hxQ0E7QUFDQSxJQUFJLElBQXlEO0FBQzdEO0FBQ0EsTUFBTSxFQUtzQjtBQUM1QixDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLEVBQTBCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixnQkFBZ0I7QUFDN0M7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZ0JBQWdCO0FBQzdDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4QkFBOEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJCQUEyQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsS0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUllLHNFQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNsQ3ZCO0FBQUE7QUFBQTtBQUFBO0FBQW1DOztBQUVQOzs7Ozs7Ozs7Ozs7Ozs7QUNENUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7O0FBRUwsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFWLGtEQUFNLENBQUNxQyxVQUFQLEdBQW9CQSxzREFBcEI7QUFFZXJDLGlIQUFmIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuZGlhbG9nLWNsIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDQ0NDQ0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIG1pbi13aWR0aDogMTUwcHg7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWluLWhlaWdodDogMTUwcHg7XFxuICBtYXgtaGVpZ2h0OiA2MDBweDtcXG59XFxuXFxuZGl2LmNsLWRpYWxvZy1ib3R0b20ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZsZXg6IDAgMCA0NHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjY2NjO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG5kaXYuZGlhbG9nLWNsLWJvZHkge1xcbiAgZmxleDogMCAxIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmRpdi5kaWFsb2ctY2wtYm9keSBwOmZpcnN0LWNoaWxkLFxcbmRpdi5kaWFsb2ctY2wtYm9keSBoMTpmaXJzdC1jaGlsZCxcXG5kaXYuZGlhbG9nLWNsLWJvZHkgaDI6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuZGl2LmRpYWxvZy1jbC1ib2R5IHA6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG5kaXYuY2wtZGlhbG9nLWJvdHRvbSBidXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWluLXdpZHRoOiA3ZW07XFxuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDA7XFxuICBwYWRkaW5nOiAzcHggMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgLTEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6ICM0NDQ7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG5cXG5kaXYuY2wtZGlhbG9nLWJvdHRvbSBidXR0b246YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuZGl2LmNsLWRpYWxvZy1ib3R0b20gYnV0dG9uOmRpc2FibGVkLFxcbmRpdi5jbC1kaWFsb2ctYm90dG9tIGJ1dHRvbltkaXNhYmxlZF0ge1xcbiAgY29sb3I6ICNjY2M7XFxufVxcblxcbmRpdi5kaWFsb2ctY2wtdG9wIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZsZXg6IDAgMCAyNXB4O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuXFxuZGl2LmRpYWxvZy1jbC10b3AgaDEge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNHB4IDRweCAwIDEwcHg7XFxuICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmRpdi5kaWFsb2ctY2wtdG9wIGJ1dHRvbi5kaWFsb2ctY2wtdGItYnV0dG9uIHtcXG4gIGZsZXg6IDAgMCAyNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuZGl2LmRpYWxvZy1jbC10b3AgYnV0dG9uLmRpYWxvZy1jbC10Yi1idXR0b24gc3BhbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA0cHg7XFxuICB0b3A6IDRweDtcXG59XFxuXFxuZGl2LmRpYWxvZy1jbC10b3AgLmRpYWxvZy1jbC10Yi1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4MTEyMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2LmRpYWxvZy1jbCBkaXYubWVzc2FnZS1jbCB7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuZGl2LmRpYWxvZy1jbC1jb2x1bW4ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5kaXYuZGlhbG9nLWNsLWNvbHVtbiA+IGRpdiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAxLjVlbSAwIDIuMGVtIDA7XFxufVxcblxcbmRpdi5kaWFsb2ctY2wtY29sdW1uIHNlbGVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbC5ET01QdXJpZnkgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbnZhciBmcmVlemUkMSA9IE9iamVjdC5mcmVlemUgfHwgZnVuY3Rpb24gKHgpIHtcbiAgcmV0dXJuIHg7XG59O1xuXG52YXIgaHRtbCA9IGZyZWV6ZSQxKFsnYScsICdhYmJyJywgJ2Fjcm9ueW0nLCAnYWRkcmVzcycsICdhcmVhJywgJ2FydGljbGUnLCAnYXNpZGUnLCAnYXVkaW8nLCAnYicsICdiZGknLCAnYmRvJywgJ2JpZycsICdibGluaycsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnYnInLCAnYnV0dG9uJywgJ2NhbnZhcycsICdjYXB0aW9uJywgJ2NlbnRlcicsICdjaXRlJywgJ2NvZGUnLCAnY29sJywgJ2NvbGdyb3VwJywgJ2NvbnRlbnQnLCAnZGF0YScsICdkYXRhbGlzdCcsICdkZCcsICdkZWNvcmF0b3InLCAnZGVsJywgJ2RldGFpbHMnLCAnZGZuJywgJ2RpcicsICdkaXYnLCAnZGwnLCAnZHQnLCAnZWxlbWVudCcsICdlbScsICdmaWVsZHNldCcsICdmaWdjYXB0aW9uJywgJ2ZpZ3VyZScsICdmb250JywgJ2Zvb3RlcicsICdmb3JtJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWQnLCAnaGVhZGVyJywgJ2hncm91cCcsICdocicsICdodG1sJywgJ2knLCAnaW1nJywgJ2lucHV0JywgJ2lucycsICdrYmQnLCAnbGFiZWwnLCAnbGVnZW5kJywgJ2xpJywgJ21haW4nLCAnbWFwJywgJ21hcmsnLCAnbWFycXVlZScsICdtZW51JywgJ21lbnVpdGVtJywgJ21ldGVyJywgJ25hdicsICdub2JyJywgJ29sJywgJ29wdGdyb3VwJywgJ29wdGlvbicsICdvdXRwdXQnLCAncCcsICdwcmUnLCAncHJvZ3Jlc3MnLCAncScsICdycCcsICdydCcsICdydWJ5JywgJ3MnLCAnc2FtcCcsICdzZWN0aW9uJywgJ3NlbGVjdCcsICdzaGFkb3cnLCAnc21hbGwnLCAnc291cmNlJywgJ3NwYWNlcicsICdzcGFuJywgJ3N0cmlrZScsICdzdHJvbmcnLCAnc3R5bGUnLCAnc3ViJywgJ3N1bW1hcnknLCAnc3VwJywgJ3RhYmxlJywgJ3Rib2R5JywgJ3RkJywgJ3RlbXBsYXRlJywgJ3RleHRhcmVhJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpbWUnLCAndHInLCAndHJhY2snLCAndHQnLCAndScsICd1bCcsICd2YXInLCAndmlkZW8nLCAnd2JyJ10pO1xuXG4vLyBTVkdcbnZhciBzdmcgPSBmcmVlemUkMShbJ3N2ZycsICdhJywgJ2FsdGdseXBoJywgJ2FsdGdseXBoZGVmJywgJ2FsdGdseXBoaXRlbScsICdhbmltYXRlY29sb3InLCAnYW5pbWF0ZW1vdGlvbicsICdhbmltYXRldHJhbnNmb3JtJywgJ2F1ZGlvJywgJ2NhbnZhcycsICdjaXJjbGUnLCAnY2xpcHBhdGgnLCAnZGVmcycsICdkZXNjJywgJ2VsbGlwc2UnLCAnZmlsdGVyJywgJ2ZvbnQnLCAnZycsICdnbHlwaCcsICdnbHlwaHJlZicsICdoa2VybicsICdpbWFnZScsICdsaW5lJywgJ2xpbmVhcmdyYWRpZW50JywgJ21hcmtlcicsICdtYXNrJywgJ21ldGFkYXRhJywgJ21wYXRoJywgJ3BhdGgnLCAncGF0dGVybicsICdwb2x5Z29uJywgJ3BvbHlsaW5lJywgJ3JhZGlhbGdyYWRpZW50JywgJ3JlY3QnLCAnc3RvcCcsICdzdHlsZScsICdzd2l0Y2gnLCAnc3ltYm9sJywgJ3RleHQnLCAndGV4dHBhdGgnLCAndGl0bGUnLCAndHJlZicsICd0c3BhbicsICd2aWRlbycsICd2aWV3JywgJ3ZrZXJuJ10pO1xuXG52YXIgc3ZnRmlsdGVycyA9IGZyZWV6ZSQxKFsnZmVCbGVuZCcsICdmZUNvbG9yTWF0cml4JywgJ2ZlQ29tcG9uZW50VHJhbnNmZXInLCAnZmVDb21wb3NpdGUnLCAnZmVDb252b2x2ZU1hdHJpeCcsICdmZURpZmZ1c2VMaWdodGluZycsICdmZURpc3BsYWNlbWVudE1hcCcsICdmZURpc3RhbnRMaWdodCcsICdmZUZsb29kJywgJ2ZlRnVuY0EnLCAnZmVGdW5jQicsICdmZUZ1bmNHJywgJ2ZlRnVuY1InLCAnZmVHYXVzc2lhbkJsdXInLCAnZmVNZXJnZScsICdmZU1lcmdlTm9kZScsICdmZU1vcnBob2xvZ3knLCAnZmVPZmZzZXQnLCAnZmVQb2ludExpZ2h0JywgJ2ZlU3BlY3VsYXJMaWdodGluZycsICdmZVNwb3RMaWdodCcsICdmZVRpbGUnLCAnZmVUdXJidWxlbmNlJ10pO1xuXG52YXIgbWF0aE1sID0gZnJlZXplJDEoWydtYXRoJywgJ21lbmNsb3NlJywgJ21lcnJvcicsICdtZmVuY2VkJywgJ21mcmFjJywgJ21nbHlwaCcsICdtaScsICdtbGFiZWxlZHRyJywgJ21tdWx0aXNjcmlwdHMnLCAnbW4nLCAnbW8nLCAnbW92ZXInLCAnbXBhZGRlZCcsICdtcGhhbnRvbScsICdtcm9vdCcsICdtcm93JywgJ21zJywgJ21zcGFjZScsICdtc3FydCcsICdtc3R5bGUnLCAnbXN1YicsICdtc3VwJywgJ21zdWJzdXAnLCAnbXRhYmxlJywgJ210ZCcsICdtdGV4dCcsICdtdHInLCAnbXVuZGVyJywgJ211bmRlcm92ZXInXSk7XG5cbnZhciB0ZXh0ID0gZnJlZXplJDEoWycjdGV4dCddKTtcblxudmFyIGZyZWV6ZSQyID0gT2JqZWN0LmZyZWV6ZSB8fCBmdW5jdGlvbiAoeCkge1xuICByZXR1cm4geDtcbn07XG5cbnZhciBodG1sJDEgPSBmcmVlemUkMihbJ2FjY2VwdCcsICdhY3Rpb24nLCAnYWxpZ24nLCAnYWx0JywgJ2F1dG9jb21wbGV0ZScsICdiYWNrZ3JvdW5kJywgJ2JnY29sb3InLCAnYm9yZGVyJywgJ2NlbGxwYWRkaW5nJywgJ2NlbGxzcGFjaW5nJywgJ2NoZWNrZWQnLCAnY2l0ZScsICdjbGFzcycsICdjbGVhcicsICdjb2xvcicsICdjb2xzJywgJ2NvbHNwYW4nLCAnY29udHJvbHMnLCAnY29vcmRzJywgJ2Nyb3Nzb3JpZ2luJywgJ2RhdGV0aW1lJywgJ2RlZmF1bHQnLCAnZGlyJywgJ2Rpc2FibGVkJywgJ2Rvd25sb2FkJywgJ2VuY3R5cGUnLCAnZmFjZScsICdmb3InLCAnaGVhZGVycycsICdoZWlnaHQnLCAnaGlkZGVuJywgJ2hpZ2gnLCAnaHJlZicsICdocmVmbGFuZycsICdpZCcsICdpbnRlZ3JpdHknLCAnaXNtYXAnLCAnbGFiZWwnLCAnbGFuZycsICdsaXN0JywgJ2xvb3AnLCAnbG93JywgJ21heCcsICdtYXhsZW5ndGgnLCAnbWVkaWEnLCAnbWV0aG9kJywgJ21pbicsICdtdWx0aXBsZScsICduYW1lJywgJ25vc2hhZGUnLCAnbm92YWxpZGF0ZScsICdub3dyYXAnLCAnb3BlbicsICdvcHRpbXVtJywgJ3BhdHRlcm4nLCAncGxhY2Vob2xkZXInLCAncG9zdGVyJywgJ3ByZWxvYWQnLCAncHViZGF0ZScsICdyYWRpb2dyb3VwJywgJ3JlYWRvbmx5JywgJ3JlbCcsICdyZXF1aXJlZCcsICdyZXYnLCAncmV2ZXJzZWQnLCAncm9sZScsICdyb3dzJywgJ3Jvd3NwYW4nLCAnc3BlbGxjaGVjaycsICdzY29wZScsICdzZWxlY3RlZCcsICdzaGFwZScsICdzaXplJywgJ3NpemVzJywgJ3NwYW4nLCAnc3JjbGFuZycsICdzdGFydCcsICdzcmMnLCAnc3Jjc2V0JywgJ3N0ZXAnLCAnc3R5bGUnLCAnc3VtbWFyeScsICd0YWJpbmRleCcsICd0aXRsZScsICd0eXBlJywgJ3VzZW1hcCcsICd2YWxpZ24nLCAndmFsdWUnLCAnd2lkdGgnLCAneG1sbnMnXSk7XG5cbnZhciBzdmckMSA9IGZyZWV6ZSQyKFsnYWNjZW50LWhlaWdodCcsICdhY2N1bXVsYXRlJywgJ2FkZGl0aXZlJywgJ2FsaWdubWVudC1iYXNlbGluZScsICdhc2NlbnQnLCAnYXR0cmlidXRlbmFtZScsICdhdHRyaWJ1dGV0eXBlJywgJ2F6aW11dGgnLCAnYmFzZWZyZXF1ZW5jeScsICdiYXNlbGluZS1zaGlmdCcsICdiZWdpbicsICdiaWFzJywgJ2J5JywgJ2NsYXNzJywgJ2NsaXAnLCAnY2xpcC1wYXRoJywgJ2NsaXAtcnVsZScsICdjb2xvcicsICdjb2xvci1pbnRlcnBvbGF0aW9uJywgJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycycsICdjb2xvci1wcm9maWxlJywgJ2NvbG9yLXJlbmRlcmluZycsICdjeCcsICdjeScsICdkJywgJ2R4JywgJ2R5JywgJ2RpZmZ1c2Vjb25zdGFudCcsICdkaXJlY3Rpb24nLCAnZGlzcGxheScsICdkaXZpc29yJywgJ2R1cicsICdlZGdlbW9kZScsICdlbGV2YXRpb24nLCAnZW5kJywgJ2ZpbGwnLCAnZmlsbC1vcGFjaXR5JywgJ2ZpbGwtcnVsZScsICdmaWx0ZXInLCAnZmlsdGVydW5pdHMnLCAnZmxvb2QtY29sb3InLCAnZmxvb2Qtb3BhY2l0eScsICdmb250LWZhbWlseScsICdmb250LXNpemUnLCAnZm9udC1zaXplLWFkanVzdCcsICdmb250LXN0cmV0Y2gnLCAnZm9udC1zdHlsZScsICdmb250LXZhcmlhbnQnLCAnZm9udC13ZWlnaHQnLCAnZngnLCAnZnknLCAnZzEnLCAnZzInLCAnZ2x5cGgtbmFtZScsICdnbHlwaHJlZicsICdncmFkaWVudHVuaXRzJywgJ2dyYWRpZW50dHJhbnNmb3JtJywgJ2hlaWdodCcsICdocmVmJywgJ2lkJywgJ2ltYWdlLXJlbmRlcmluZycsICdpbicsICdpbjInLCAnaycsICdrMScsICdrMicsICdrMycsICdrNCcsICdrZXJuaW5nJywgJ2tleXBvaW50cycsICdrZXlzcGxpbmVzJywgJ2tleXRpbWVzJywgJ2xhbmcnLCAnbGVuZ3RoYWRqdXN0JywgJ2xldHRlci1zcGFjaW5nJywgJ2tlcm5lbG1hdHJpeCcsICdrZXJuZWx1bml0bGVuZ3RoJywgJ2xpZ2h0aW5nLWNvbG9yJywgJ2xvY2FsJywgJ21hcmtlci1lbmQnLCAnbWFya2VyLW1pZCcsICdtYXJrZXItc3RhcnQnLCAnbWFya2VyaGVpZ2h0JywgJ21hcmtlcnVuaXRzJywgJ21hcmtlcndpZHRoJywgJ21hc2tjb250ZW50dW5pdHMnLCAnbWFza3VuaXRzJywgJ21heCcsICdtYXNrJywgJ21lZGlhJywgJ21ldGhvZCcsICdtb2RlJywgJ21pbicsICduYW1lJywgJ251bW9jdGF2ZXMnLCAnb2Zmc2V0JywgJ29wZXJhdG9yJywgJ29wYWNpdHknLCAnb3JkZXInLCAnb3JpZW50JywgJ29yaWVudGF0aW9uJywgJ29yaWdpbicsICdvdmVyZmxvdycsICdwYWludC1vcmRlcicsICdwYXRoJywgJ3BhdGhsZW5ndGgnLCAncGF0dGVybmNvbnRlbnR1bml0cycsICdwYXR0ZXJudHJhbnNmb3JtJywgJ3BhdHRlcm51bml0cycsICdwb2ludHMnLCAncHJlc2VydmVhbHBoYScsICdwcmVzZXJ2ZWFzcGVjdHJhdGlvJywgJ3ByaW1pdGl2ZXVuaXRzJywgJ3InLCAncngnLCAncnknLCAncmFkaXVzJywgJ3JlZngnLCAncmVmeScsICdyZXBlYXRjb3VudCcsICdyZXBlYXRkdXInLCAncmVzdGFydCcsICdyZXN1bHQnLCAncm90YXRlJywgJ3NjYWxlJywgJ3NlZWQnLCAnc2hhcGUtcmVuZGVyaW5nJywgJ3NwZWN1bGFyY29uc3RhbnQnLCAnc3BlY3VsYXJleHBvbmVudCcsICdzcHJlYWRtZXRob2QnLCAnc3RkZGV2aWF0aW9uJywgJ3N0aXRjaHRpbGVzJywgJ3N0b3AtY29sb3InLCAnc3RvcC1vcGFjaXR5JywgJ3N0cm9rZS1kYXNoYXJyYXknLCAnc3Ryb2tlLWRhc2hvZmZzZXQnLCAnc3Ryb2tlLWxpbmVjYXAnLCAnc3Ryb2tlLWxpbmVqb2luJywgJ3N0cm9rZS1taXRlcmxpbWl0JywgJ3N0cm9rZS1vcGFjaXR5JywgJ3N0cm9rZScsICdzdHJva2Utd2lkdGgnLCAnc3R5bGUnLCAnc3VyZmFjZXNjYWxlJywgJ3RhYmluZGV4JywgJ3RhcmdldHgnLCAndGFyZ2V0eScsICd0cmFuc2Zvcm0nLCAndGV4dC1hbmNob3InLCAndGV4dC1kZWNvcmF0aW9uJywgJ3RleHQtcmVuZGVyaW5nJywgJ3RleHRsZW5ndGgnLCAndHlwZScsICd1MScsICd1MicsICd1bmljb2RlJywgJ3ZhbHVlcycsICd2aWV3Ym94JywgJ3Zpc2liaWxpdHknLCAndmVyc2lvbicsICd2ZXJ0LWFkdi15JywgJ3ZlcnQtb3JpZ2luLXgnLCAndmVydC1vcmlnaW4teScsICd3aWR0aCcsICd3b3JkLXNwYWNpbmcnLCAnd3JhcCcsICd3cml0aW5nLW1vZGUnLCAneGNoYW5uZWxzZWxlY3RvcicsICd5Y2hhbm5lbHNlbGVjdG9yJywgJ3gnLCAneDEnLCAneDInLCAneG1sbnMnLCAneScsICd5MScsICd5MicsICd6JywgJ3pvb21hbmRwYW4nXSk7XG5cbnZhciBtYXRoTWwkMSA9IGZyZWV6ZSQyKFsnYWNjZW50JywgJ2FjY2VudHVuZGVyJywgJ2FsaWduJywgJ2JldmVsbGVkJywgJ2Nsb3NlJywgJ2NvbHVtbnNhbGlnbicsICdjb2x1bW5saW5lcycsICdjb2x1bW5zcGFuJywgJ2Rlbm9tYWxpZ24nLCAnZGVwdGgnLCAnZGlyJywgJ2Rpc3BsYXknLCAnZGlzcGxheXN0eWxlJywgJ2ZlbmNlJywgJ2ZyYW1lJywgJ2hlaWdodCcsICdocmVmJywgJ2lkJywgJ2xhcmdlb3AnLCAnbGVuZ3RoJywgJ2xpbmV0aGlja25lc3MnLCAnbHNwYWNlJywgJ2xxdW90ZScsICdtYXRoYmFja2dyb3VuZCcsICdtYXRoY29sb3InLCAnbWF0aHNpemUnLCAnbWF0aHZhcmlhbnQnLCAnbWF4c2l6ZScsICdtaW5zaXplJywgJ21vdmFibGVsaW1pdHMnLCAnbm90YXRpb24nLCAnbnVtYWxpZ24nLCAnb3BlbicsICdyb3dhbGlnbicsICdyb3dsaW5lcycsICdyb3dzcGFjaW5nJywgJ3Jvd3NwYW4nLCAncnNwYWNlJywgJ3JxdW90ZScsICdzY3JpcHRsZXZlbCcsICdzY3JpcHRtaW5zaXplJywgJ3NjcmlwdHNpemVtdWx0aXBsaWVyJywgJ3NlbGVjdGlvbicsICdzZXBhcmF0b3InLCAnc2VwYXJhdG9ycycsICdzdHJldGNoeScsICdzdWJzY3JpcHRzaGlmdCcsICdzdXBzY3JpcHRzaGlmdCcsICdzeW1tZXRyaWMnLCAndm9mZnNldCcsICd3aWR0aCcsICd4bWxucyddKTtcblxudmFyIHhtbCA9IGZyZWV6ZSQyKFsneGxpbms6aHJlZicsICd4bWw6aWQnLCAneGxpbms6dGl0bGUnLCAneG1sOnNwYWNlJywgJ3htbG5zOnhsaW5rJ10pO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QuaGFzT3duUHJvcGVydHk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2Y7XG5cbnZhciBfcmVmJDEgPSB0eXBlb2YgUmVmbGVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgUmVmbGVjdDtcbnZhciBhcHBseSQxID0gX3JlZiQxLmFwcGx5O1xuXG5pZiAoIWFwcGx5JDEpIHtcbiAgYXBwbHkkMSA9IGZ1bmN0aW9uIGFwcGx5KGZ1biwgdGhpc1ZhbHVlLCBhcmdzKSB7XG4gICAgcmV0dXJuIGZ1bi5hcHBseSh0aGlzVmFsdWUsIGFyZ3MpO1xuICB9O1xufVxuXG4vKiBBZGQgcHJvcGVydGllcyB0byBhIGxvb2t1cCB0YWJsZSAqL1xuZnVuY3Rpb24gYWRkVG9TZXQoc2V0LCBhcnJheSkge1xuICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICAvLyBNYWtlICdpbicgYW5kIHRydXRoeSBjaGVja3MgbGlrZSBCb29sZWFuKHNldC5jb25zdHJ1Y3RvcilcbiAgICAvLyBpbmRlcGVuZGVudCBvZiBhbnkgcHJvcGVydGllcyBkZWZpbmVkIG9uIE9iamVjdC5wcm90b3R5cGUuXG4gICAgLy8gUHJldmVudCBwcm90b3R5cGUgc2V0dGVycyBmcm9tIGludGVyY2VwdGluZyBzZXQgYXMgYSB0aGlzIHZhbHVlLlxuICAgIHNldFByb3RvdHlwZU9mKHNldCwgbnVsbCk7XG4gIH1cblxuICB2YXIgbCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGwtLSkge1xuICAgIHZhciBlbGVtZW50ID0gYXJyYXlbbF07XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGxjRWxlbWVudCA9IGVsZW1lbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmIChsY0VsZW1lbnQgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgLy8gQ29uZmlnIHByZXNldHMgKGUuZy4gdGFncy5qcywgYXR0cnMuanMpIGFyZSBpbW11dGFibGUuXG4gICAgICAgIGlmICghT2JqZWN0LmlzRnJvemVuKGFycmF5KSkge1xuICAgICAgICAgIGFycmF5W2xdID0gbGNFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudCA9IGxjRWxlbWVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRbZWxlbWVudF0gPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHNldDtcbn1cblxuLyogU2hhbGxvdyBjbG9uZSBhbiBvYmplY3QgKi9cbmZ1bmN0aW9uIGNsb25lKG9iamVjdCkge1xuICB2YXIgbmV3T2JqZWN0ID0ge307XG5cbiAgdmFyIHByb3BlcnR5ID0gdm9pZCAwO1xuICBmb3IgKHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgIGlmIChhcHBseSQxKGhhc093blByb3BlcnR5LCBvYmplY3QsIFtwcm9wZXJ0eV0pKSB7XG4gICAgICBuZXdPYmplY3RbcHJvcGVydHldID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqZWN0O1xufVxuXG52YXIgc2VhbCA9IE9iamVjdC5zZWFsIHx8IGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiB4O1xufTtcblxudmFyIE1VU1RBQ0hFX0VYUFIgPSBzZWFsKC9cXHtcXHtbXFxzXFxTXSp8W1xcc1xcU10qXFx9XFx9L2dtKTsgLy8gU3BlY2lmeSB0ZW1wbGF0ZSBkZXRlY3Rpb24gcmVnZXggZm9yIFNBRkVfRk9SX1RFTVBMQVRFUyBtb2RlXG52YXIgRVJCX0VYUFIgPSBzZWFsKC88JVtcXHNcXFNdKnxbXFxzXFxTXSolPi9nbSk7XG52YXIgREFUQV9BVFRSID0gc2VhbCgvXmRhdGEtW1xcLVxcdy5cXHUwMEI3LVxcdUZGRkZdLyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbnZhciBBUklBX0FUVFIgPSBzZWFsKC9eYXJpYS1bXFwtXFx3XSskLyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbnZhciBJU19BTExPV0VEX1VSSSA9IHNlYWwoL14oPzooPzooPzpmfGh0KXRwcz98bWFpbHRvfHRlbHxjYWxsdG98Y2lkfHhtcHApOnxbXmEtel18W2EteisuXFwtXSsoPzpbXmEteisuXFwtOl18JCkpL2kgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuKTtcbnZhciBJU19TQ1JJUFRfT1JfREFUQSA9IHNlYWwoL14oPzpcXHcrc2NyaXB0fGRhdGEpOi9pKTtcbnZhciBBVFRSX1dISVRFU1BBQ0UgPSBzZWFsKC9bXFx1MDAwMC1cXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUxODBFXFx1MjAwMC1cXHUyMDI5XFx1MjA1ZlxcdTMwMDBdL2cgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb250cm9sLXJlZ2V4XG4pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG52YXIgX3JlZiA9IHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBSZWZsZWN0O1xudmFyIGFwcGx5ID0gX3JlZi5hcHBseTtcblxudmFyIGFycmF5U2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgZnJlZXplID0gT2JqZWN0LmZyZWV6ZTtcblxudmFyIGdldEdsb2JhbCA9IGZ1bmN0aW9uIGdldEdsb2JhbCgpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdztcbn07XG5cbmlmICghYXBwbHkpIHtcbiAgYXBwbHkgPSBmdW5jdGlvbiBhcHBseShmdW4sIHRoaXNWYWx1ZSwgYXJncykge1xuICAgIHJldHVybiBmdW4uYXBwbHkodGhpc1ZhbHVlLCBhcmdzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbm8tb3AgcG9saWN5IGZvciBpbnRlcm5hbCB1c2Ugb25seS5cbiAqIERvbid0IGV4cG9ydCB0aGlzIGZ1bmN0aW9uIG91dHNpZGUgdGhpcyBtb2R1bGUhXG4gKiBAcGFyYW0gez9UcnVzdGVkVHlwZVBvbGljeUZhY3Rvcnl9IHRydXN0ZWRUeXBlcyBUaGUgcG9saWN5IGZhY3RvcnkuXG4gKiBAcGFyYW0ge0RvY3VtZW50fSBkb2N1bWVudCBUaGUgZG9jdW1lbnQgb2JqZWN0ICh0byBkZXRlcm1pbmUgcG9saWN5IG5hbWUgc3VmZml4KVxuICogQHJldHVybiB7P1RydXN0ZWRUeXBlUG9saWN5fSBUaGUgcG9saWN5IGNyZWF0ZWQgKG9yIG51bGwsIGlmIFRydXN0ZWQgVHlwZXNcbiAqIGFyZSBub3Qgc3VwcG9ydGVkKS5cbiAqL1xudmFyIF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kgPSBmdW5jdGlvbiBfY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5KHRydXN0ZWRUeXBlcywgZG9jdW1lbnQpIHtcbiAgaWYgKCh0eXBlb2YgdHJ1c3RlZFR5cGVzID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0cnVzdGVkVHlwZXMpKSAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3kgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIEFsbG93IHRoZSBjYWxsZXJzIHRvIGNvbnRyb2wgdGhlIHVuaXF1ZSBwb2xpY3kgbmFtZVxuICAvLyBieSBhZGRpbmcgYSBkYXRhLXR0LXBvbGljeS1zdWZmaXggdG8gdGhlIHNjcmlwdCBlbGVtZW50IHdpdGggdGhlIERPTVB1cmlmeS5cbiAgLy8gUG9saWN5IGNyZWF0aW9uIHdpdGggZHVwbGljYXRlIG5hbWVzIHRocm93cyBpbiBUcnVzdGVkIFR5cGVzLlxuICB2YXIgc3VmZml4ID0gbnVsbDtcbiAgdmFyIEFUVFJfTkFNRSA9ICdkYXRhLXR0LXBvbGljeS1zdWZmaXgnO1xuICBpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0Lmhhc0F0dHJpYnV0ZShBVFRSX05BTUUpKSB7XG4gICAgc3VmZml4ID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5nZXRBdHRyaWJ1dGUoQVRUUl9OQU1FKTtcbiAgfVxuXG4gIHZhciBwb2xpY3lOYW1lID0gJ2RvbXB1cmlmeScgKyAoc3VmZml4ID8gJyMnICsgc3VmZml4IDogJycpO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3kocG9saWN5TmFtZSwge1xuICAgICAgY3JlYXRlSFRNTDogZnVuY3Rpb24gY3JlYXRlSFRNTChodG1sJCQxKSB7XG4gICAgICAgIHJldHVybiBodG1sJCQxO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIFBvbGljeSBjcmVhdGlvbiBmYWlsZWQgKG1vc3QgbGlrZWx5IGFub3RoZXIgRE9NUHVyaWZ5IHNjcmlwdCBoYXNcbiAgICAvLyBhbHJlYWR5IHJ1bikuIFNraXAgY3JlYXRpbmcgdGhlIHBvbGljeSwgYXMgdGhpcyB3aWxsIG9ubHkgY2F1c2UgZXJyb3JzXG4gICAgLy8gaWYgVFQgYXJlIGVuZm9yY2VkLlxuICAgIGNvbnNvbGUud2FybignVHJ1c3RlZFR5cGVzIHBvbGljeSAnICsgcG9saWN5TmFtZSArICcgY291bGQgbm90IGJlIGNyZWF0ZWQuJyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZURPTVB1cmlmeSgpIHtcbiAgdmFyIHdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZ2V0R2xvYmFsKCk7XG5cbiAgdmFyIERPTVB1cmlmeSA9IGZ1bmN0aW9uIERPTVB1cmlmeShyb290KSB7XG4gICAgcmV0dXJuIGNyZWF0ZURPTVB1cmlmeShyb290KTtcbiAgfTtcblxuICAvKipcbiAgICogVmVyc2lvbiBsYWJlbCwgZXhwb3NlZCBmb3IgZWFzaWVyIGNoZWNrc1xuICAgKiBpZiBET01QdXJpZnkgaXMgdXAgdG8gZGF0ZSBvciBub3RcbiAgICovXG4gIERPTVB1cmlmeS52ZXJzaW9uID0gJzEuMC4xMSc7XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIGVsZW1lbnRzIHRoYXQgRE9NUHVyaWZ5IHJlbW92ZWQgZHVyaW5nIHNhbml0YXRpb24uXG4gICAqIEVtcHR5IGlmIG5vdGhpbmcgd2FzIHJlbW92ZWQuXG4gICAqL1xuICBET01QdXJpZnkucmVtb3ZlZCA9IFtdO1xuXG4gIGlmICghd2luZG93IHx8ICF3aW5kb3cuZG9jdW1lbnQgfHwgd2luZG93LmRvY3VtZW50Lm5vZGVUeXBlICE9PSA5KSB7XG4gICAgLy8gTm90IHJ1bm5pbmcgaW4gYSBicm93c2VyLCBwcm92aWRlIGEgZmFjdG9yeSBmdW5jdGlvblxuICAgIC8vIHNvIHRoYXQgeW91IGNhbiBwYXNzIHlvdXIgb3duIFdpbmRvd1xuICAgIERPTVB1cmlmeS5pc1N1cHBvcnRlZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIERPTVB1cmlmeTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuICB2YXIgdXNlRE9NUGFyc2VyID0gZmFsc2U7XG4gIHZhciByZW1vdmVUaXRsZSA9IGZhbHNlO1xuXG4gIHZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbiAgdmFyIERvY3VtZW50RnJhZ21lbnQgPSB3aW5kb3cuRG9jdW1lbnRGcmFnbWVudCxcbiAgICAgIEhUTUxUZW1wbGF0ZUVsZW1lbnQgPSB3aW5kb3cuSFRNTFRlbXBsYXRlRWxlbWVudCxcbiAgICAgIE5vZGUgPSB3aW5kb3cuTm9kZSxcbiAgICAgIE5vZGVGaWx0ZXIgPSB3aW5kb3cuTm9kZUZpbHRlcixcbiAgICAgIF93aW5kb3ckTmFtZWROb2RlTWFwID0gd2luZG93Lk5hbWVkTm9kZU1hcCxcbiAgICAgIE5hbWVkTm9kZU1hcCA9IF93aW5kb3ckTmFtZWROb2RlTWFwID09PSB1bmRlZmluZWQgPyB3aW5kb3cuTmFtZWROb2RlTWFwIHx8IHdpbmRvdy5Nb3pOYW1lZEF0dHJNYXAgOiBfd2luZG93JE5hbWVkTm9kZU1hcCxcbiAgICAgIFRleHQgPSB3aW5kb3cuVGV4dCxcbiAgICAgIENvbW1lbnQgPSB3aW5kb3cuQ29tbWVudCxcbiAgICAgIERPTVBhcnNlciA9IHdpbmRvdy5ET01QYXJzZXIsXG4gICAgICBUcnVzdGVkVHlwZXMgPSB3aW5kb3cuVHJ1c3RlZFR5cGVzO1xuXG4gIC8vIEFzIHBlciBpc3N1ZSAjNDcsIHRoZSB3ZWItY29tcG9uZW50cyByZWdpc3RyeSBpcyBpbmhlcml0ZWQgYnkgYVxuICAvLyBuZXcgZG9jdW1lbnQgY3JlYXRlZCB2aWEgY3JlYXRlSFRNTERvY3VtZW50LiBBcyBwZXIgdGhlIHNwZWNcbiAgLy8gKGh0dHA6Ly93M2MuZ2l0aHViLmlvL3dlYmNvbXBvbmVudHMvc3BlYy9jdXN0b20vI2NyZWF0aW5nLWFuZC1wYXNzaW5nLXJlZ2lzdHJpZXMpXG4gIC8vIGEgbmV3IGVtcHR5IHJlZ2lzdHJ5IGlzIHVzZWQgd2hlbiBjcmVhdGluZyBhIHRlbXBsYXRlIGNvbnRlbnRzIG93bmVyXG4gIC8vIGRvY3VtZW50LCBzbyB3ZSB1c2UgdGhhdCBhcyBvdXIgcGFyZW50IGRvY3VtZW50IHRvIGVuc3VyZSBub3RoaW5nXG4gIC8vIGlzIGluaGVyaXRlZC5cblxuICBpZiAodHlwZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGlmICh0ZW1wbGF0ZS5jb250ZW50ICYmIHRlbXBsYXRlLmNvbnRlbnQub3duZXJEb2N1bWVudCkge1xuICAgICAgZG9jdW1lbnQgPSB0ZW1wbGF0ZS5jb250ZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgdmFyIHRydXN0ZWRUeXBlc1BvbGljeSA9IF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3koVHJ1c3RlZFR5cGVzLCBvcmlnaW5hbERvY3VtZW50KTtcbiAgdmFyIGVtcHR5SFRNTCA9IHRydXN0ZWRUeXBlc1BvbGljeSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKCcnKSA6ICcnO1xuXG4gIHZhciBfZG9jdW1lbnQgPSBkb2N1bWVudCxcbiAgICAgIGltcGxlbWVudGF0aW9uID0gX2RvY3VtZW50LmltcGxlbWVudGF0aW9uLFxuICAgICAgY3JlYXRlTm9kZUl0ZXJhdG9yID0gX2RvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcixcbiAgICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lID0gX2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lLFxuICAgICAgY3JlYXRlRG9jdW1lbnRGcmFnbWVudCA9IF9kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50O1xuICB2YXIgaW1wb3J0Tm9kZSA9IG9yaWdpbmFsRG9jdW1lbnQuaW1wb3J0Tm9kZTtcblxuXG4gIHZhciBob29rcyA9IHt9O1xuXG4gIC8qKlxuICAgKiBFeHBvc2Ugd2hldGhlciB0aGlzIGJyb3dzZXIgc3VwcG9ydHMgcnVubmluZyB0aGUgZnVsbCBET01QdXJpZnkuXG4gICAqL1xuICBET01QdXJpZnkuaXNTdXBwb3J0ZWQgPSBpbXBsZW1lbnRhdGlvbiAmJiB0eXBlb2YgaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudE1vZGUgIT09IDk7XG5cbiAgdmFyIE1VU1RBQ0hFX0VYUFIkJDEgPSBNVVNUQUNIRV9FWFBSLFxuICAgICAgRVJCX0VYUFIkJDEgPSBFUkJfRVhQUixcbiAgICAgIERBVEFfQVRUUiQkMSA9IERBVEFfQVRUUixcbiAgICAgIEFSSUFfQVRUUiQkMSA9IEFSSUFfQVRUUixcbiAgICAgIElTX1NDUklQVF9PUl9EQVRBJCQxID0gSVNfU0NSSVBUX09SX0RBVEEsXG4gICAgICBBVFRSX1dISVRFU1BBQ0UkJDEgPSBBVFRSX1dISVRFU1BBQ0U7XG4gIHZhciBJU19BTExPV0VEX1VSSSQkMSA9IElTX0FMTE9XRURfVVJJO1xuICAvKipcbiAgICogV2UgY29uc2lkZXIgdGhlIGVsZW1lbnRzIGFuZCBhdHRyaWJ1dGVzIGJlbG93IHRvIGJlIHNhZmUuIElkZWFsbHlcbiAgICogZG9uJ3QgYWRkIGFueSBuZXcgb25lcyBidXQgZmVlbCBmcmVlIHRvIHJlbW92ZSB1bndhbnRlZCBvbmVzLlxuICAgKi9cblxuICAvKiBhbGxvd2VkIGVsZW1lbnQgbmFtZXMgKi9cblxuICB2YXIgQUxMT1dFRF9UQUdTID0gbnVsbDtcbiAgdmFyIERFRkFVTFRfQUxMT1dFRF9UQUdTID0gYWRkVG9TZXQoe30sIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoaHRtbCksIF90b0NvbnN1bWFibGVBcnJheShzdmcpLCBfdG9Db25zdW1hYmxlQXJyYXkoc3ZnRmlsdGVycyksIF90b0NvbnN1bWFibGVBcnJheShtYXRoTWwpLCBfdG9Db25zdW1hYmxlQXJyYXkodGV4dCkpKTtcblxuICAvKiBBbGxvd2VkIGF0dHJpYnV0ZSBuYW1lcyAqL1xuICB2YXIgQUxMT1dFRF9BVFRSID0gbnVsbDtcbiAgdmFyIERFRkFVTFRfQUxMT1dFRF9BVFRSID0gYWRkVG9TZXQoe30sIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoaHRtbCQxKSwgX3RvQ29uc3VtYWJsZUFycmF5KHN2ZyQxKSwgX3RvQ29uc3VtYWJsZUFycmF5KG1hdGhNbCQxKSwgX3RvQ29uc3VtYWJsZUFycmF5KHhtbCkpKTtcblxuICAvKiBFeHBsaWNpdGx5IGZvcmJpZGRlbiB0YWdzIChvdmVycmlkZXMgQUxMT1dFRF9UQUdTL0FERF9UQUdTKSAqL1xuICB2YXIgRk9SQklEX1RBR1MgPSBudWxsO1xuXG4gIC8qIEV4cGxpY2l0bHkgZm9yYmlkZGVuIGF0dHJpYnV0ZXMgKG92ZXJyaWRlcyBBTExPV0VEX0FUVFIvQUREX0FUVFIpICovXG4gIHZhciBGT1JCSURfQVRUUiA9IG51bGw7XG5cbiAgLyogRGVjaWRlIGlmIEFSSUEgYXR0cmlidXRlcyBhcmUgb2theSAqL1xuICB2YXIgQUxMT1dfQVJJQV9BVFRSID0gdHJ1ZTtcblxuICAvKiBEZWNpZGUgaWYgY3VzdG9tIGRhdGEgYXR0cmlidXRlcyBhcmUgb2theSAqL1xuICB2YXIgQUxMT1dfREFUQV9BVFRSID0gdHJ1ZTtcblxuICAvKiBEZWNpZGUgaWYgdW5rbm93biBwcm90b2NvbHMgYXJlIG9rYXkgKi9cbiAgdmFyIEFMTE9XX1VOS05PV05fUFJPVE9DT0xTID0gZmFsc2U7XG5cbiAgLyogT3V0cHV0IHNob3VsZCBiZSBzYWZlIGZvciBqUXVlcnkncyAkKCkgZmFjdG9yeT8gKi9cbiAgdmFyIFNBRkVfRk9SX0pRVUVSWSA9IGZhbHNlO1xuXG4gIC8qIE91dHB1dCBzaG91bGQgYmUgc2FmZSBmb3IgY29tbW9uIHRlbXBsYXRlIGVuZ2luZXMuXG4gICAqIFRoaXMgbWVhbnMsIERPTVB1cmlmeSByZW1vdmVzIGRhdGEgYXR0cmlidXRlcywgbXVzdGFjaGVzIGFuZCBFUkJcbiAgICovXG4gIHZhciBTQUZFX0ZPUl9URU1QTEFURVMgPSBmYWxzZTtcblxuICAvKiBEZWNpZGUgaWYgZG9jdW1lbnQgd2l0aCA8aHRtbD4uLi4gc2hvdWxkIGJlIHJldHVybmVkICovXG4gIHZhciBXSE9MRV9ET0NVTUVOVCA9IGZhbHNlO1xuXG4gIC8qIFRyYWNrIHdoZXRoZXIgY29uZmlnIGlzIGFscmVhZHkgc2V0IG9uIHRoaXMgaW5zdGFuY2Ugb2YgRE9NUHVyaWZ5LiAqL1xuICB2YXIgU0VUX0NPTkZJRyA9IGZhbHNlO1xuXG4gIC8qIERlY2lkZSBpZiBhbGwgZWxlbWVudHMgKGUuZy4gc3R5bGUsIHNjcmlwdCkgbXVzdCBiZSBjaGlsZHJlbiBvZlxuICAgKiBkb2N1bWVudC5ib2R5LiBCeSBkZWZhdWx0LCBicm93c2VycyBtaWdodCBtb3ZlIHRoZW0gdG8gZG9jdW1lbnQuaGVhZCAqL1xuICB2YXIgRk9SQ0VfQk9EWSA9IGZhbHNlO1xuXG4gIC8qIERlY2lkZSBpZiBhIERPTSBgSFRNTEJvZHlFbGVtZW50YCBzaG91bGQgYmUgcmV0dXJuZWQsIGluc3RlYWQgb2YgYSBodG1sXG4gICAqIHN0cmluZyAob3IgYSBUcnVzdGVkSFRNTCBvYmplY3QgaWYgVHJ1c3RlZCBUeXBlcyBhcmUgc3VwcG9ydGVkKS5cbiAgICogSWYgYFdIT0xFX0RPQ1VNRU5UYCBpcyBlbmFibGVkIGEgYEhUTUxIdG1sRWxlbWVudGAgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkXG4gICAqL1xuICB2YXIgUkVUVVJOX0RPTSA9IGZhbHNlO1xuXG4gIC8qIERlY2lkZSBpZiBhIERPTSBgRG9jdW1lbnRGcmFnbWVudGAgc2hvdWxkIGJlIHJldHVybmVkLCBpbnN0ZWFkIG9mIGEgaHRtbFxuICAgKiBzdHJpbmcgIChvciBhIFRydXN0ZWRIVE1MIG9iamVjdCBpZiBUcnVzdGVkIFR5cGVzIGFyZSBzdXBwb3J0ZWQpICovXG4gIHZhciBSRVRVUk5fRE9NX0ZSQUdNRU5UID0gZmFsc2U7XG5cbiAgLyogSWYgYFJFVFVSTl9ET01gIG9yIGBSRVRVUk5fRE9NX0ZSQUdNRU5UYCBpcyBlbmFibGVkLCBkZWNpZGUgaWYgdGhlIHJldHVybmVkIERPTVxuICAgKiBgTm9kZWAgaXMgaW1wb3J0ZWQgaW50byB0aGUgY3VycmVudCBgRG9jdW1lbnRgLiBJZiB0aGlzIGZsYWcgaXMgbm90IGVuYWJsZWQgdGhlXG4gICAqIGBOb2RlYCB3aWxsIGJlbG9uZyAoaXRzIG93bmVyRG9jdW1lbnQpIHRvIGEgZnJlc2ggYEhUTUxEb2N1bWVudGAsIGNyZWF0ZWQgYnlcbiAgICogRE9NUHVyaWZ5LiAqL1xuICB2YXIgUkVUVVJOX0RPTV9JTVBPUlQgPSBmYWxzZTtcblxuICAvKiBPdXRwdXQgc2hvdWxkIGJlIGZyZWUgZnJvbSBET00gY2xvYmJlcmluZyBhdHRhY2tzPyAqL1xuICB2YXIgU0FOSVRJWkVfRE9NID0gdHJ1ZTtcblxuICAvKiBLZWVwIGVsZW1lbnQgY29udGVudCB3aGVuIHJlbW92aW5nIGVsZW1lbnQ/ICovXG4gIHZhciBLRUVQX0NPTlRFTlQgPSB0cnVlO1xuXG4gIC8qIElmIGEgYE5vZGVgIGlzIHBhc3NlZCB0byBzYW5pdGl6ZSgpLCB0aGVuIHBlcmZvcm1zIHNhbml0aXphdGlvbiBpbi1wbGFjZSBpbnN0ZWFkXG4gICAqIG9mIGltcG9ydGluZyBpdCBpbnRvIGEgbmV3IERvY3VtZW50IGFuZCByZXR1cm5pbmcgYSBzYW5pdGl6ZWQgY29weSAqL1xuICB2YXIgSU5fUExBQ0UgPSBmYWxzZTtcblxuICAvKiBBbGxvdyB1c2FnZSBvZiBwcm9maWxlcyBsaWtlIGh0bWwsIHN2ZyBhbmQgbWF0aE1sICovXG4gIHZhciBVU0VfUFJPRklMRVMgPSB7fTtcblxuICAvKiBUYWdzIHRvIGlnbm9yZSBjb250ZW50IG9mIHdoZW4gS0VFUF9DT05URU5UIGlzIHRydWUgKi9cbiAgdmFyIEZPUkJJRF9DT05URU5UUyA9IGFkZFRvU2V0KHt9LCBbJ2F1ZGlvJywgJ2hlYWQnLCAnbWF0aCcsICdzY3JpcHQnLCAnc3R5bGUnLCAndGVtcGxhdGUnLCAnc3ZnJywgJ3ZpZGVvJ10pO1xuXG4gIC8qIFRhZ3MgdGhhdCBhcmUgc2FmZSBmb3IgZGF0YTogVVJJcyAqL1xuICB2YXIgREFUQV9VUklfVEFHUyA9IGFkZFRvU2V0KHt9LCBbJ2F1ZGlvJywgJ3ZpZGVvJywgJ2ltZycsICdzb3VyY2UnLCAnaW1hZ2UnXSk7XG5cbiAgLyogQXR0cmlidXRlcyBzYWZlIGZvciB2YWx1ZXMgbGlrZSBcImphdmFzY3JpcHQ6XCIgKi9cbiAgdmFyIFVSSV9TQUZFX0FUVFJJQlVURVMgPSBudWxsO1xuICB2YXIgREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTID0gYWRkVG9TZXQoe30sIFsnYWx0JywgJ2NsYXNzJywgJ2ZvcicsICdpZCcsICdsYWJlbCcsICduYW1lJywgJ3BhdHRlcm4nLCAncGxhY2Vob2xkZXInLCAnc3VtbWFyeScsICd0aXRsZScsICd2YWx1ZScsICdzdHlsZScsICd4bWxucyddKTtcblxuICAvKiBLZWVwIGEgcmVmZXJlbmNlIHRvIGNvbmZpZyB0byBwYXNzIHRvIGhvb2tzICovXG4gIHZhciBDT05GSUcgPSBudWxsO1xuXG4gIC8qIElkZWFsbHksIGRvIG5vdCB0b3VjaCBhbnl0aGluZyBiZWxvdyB0aGlzIGxpbmUgKi9cbiAgLyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xuXG4gIHZhciBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAvKipcbiAgICogX3BhcnNlQ29uZmlnXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gY2ZnIG9wdGlvbmFsIGNvbmZpZyBsaXRlcmFsXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICB2YXIgX3BhcnNlQ29uZmlnID0gZnVuY3Rpb24gX3BhcnNlQ29uZmlnKGNmZykge1xuICAgIGlmIChDT05GSUcgJiYgQ09ORklHID09PSBjZmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiBTaGllbGQgY29uZmlndXJhdGlvbiBvYmplY3QgZnJvbSB0YW1wZXJpbmcgKi9cbiAgICBpZiAoIWNmZyB8fCAodHlwZW9mIGNmZyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoY2ZnKSkgIT09ICdvYmplY3QnKSB7XG4gICAgICBjZmcgPSB7fTtcbiAgICB9XG5cbiAgICAvKiBTZXQgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzICovXG4gICAgQUxMT1dFRF9UQUdTID0gJ0FMTE9XRURfVEFHUycgaW4gY2ZnID8gYWRkVG9TZXQoe30sIGNmZy5BTExPV0VEX1RBR1MpIDogREVGQVVMVF9BTExPV0VEX1RBR1M7XG4gICAgQUxMT1dFRF9BVFRSID0gJ0FMTE9XRURfQVRUUicgaW4gY2ZnID8gYWRkVG9TZXQoe30sIGNmZy5BTExPV0VEX0FUVFIpIDogREVGQVVMVF9BTExPV0VEX0FUVFI7XG4gICAgVVJJX1NBRkVfQVRUUklCVVRFUyA9ICdBRERfVVJJX1NBRkVfQVRUUicgaW4gY2ZnID8gYWRkVG9TZXQoe30sIGNmZy5BRERfVVJJX1NBRkVfQVRUUikgOiBERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVM7XG4gICAgRk9SQklEX1RBR1MgPSAnRk9SQklEX1RBR1MnIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuRk9SQklEX1RBR1MpIDoge307XG4gICAgRk9SQklEX0FUVFIgPSAnRk9SQklEX0FUVFInIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuRk9SQklEX0FUVFIpIDoge307XG4gICAgVVNFX1BST0ZJTEVTID0gJ1VTRV9QUk9GSUxFUycgaW4gY2ZnID8gY2ZnLlVTRV9QUk9GSUxFUyA6IGZhbHNlO1xuICAgIEFMTE9XX0FSSUFfQVRUUiA9IGNmZy5BTExPV19BUklBX0FUVFIgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcbiAgICBBTExPV19EQVRBX0FUVFIgPSBjZmcuQUxMT1dfREFUQV9BVFRSICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgPSBjZmcuQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICBTQUZFX0ZPUl9KUVVFUlkgPSBjZmcuU0FGRV9GT1JfSlFVRVJZIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgU0FGRV9GT1JfVEVNUExBVEVTID0gY2ZnLlNBRkVfRk9SX1RFTVBMQVRFUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgIFdIT0xFX0RPQ1VNRU5UID0gY2ZnLldIT0xFX0RPQ1VNRU5UIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgUkVUVVJOX0RPTSA9IGNmZy5SRVRVUk5fRE9NIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgUkVUVVJOX0RPTV9GUkFHTUVOVCA9IGNmZy5SRVRVUk5fRE9NX0ZSQUdNRU5UIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgUkVUVVJOX0RPTV9JTVBPUlQgPSBjZmcuUkVUVVJOX0RPTV9JTVBPUlQgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICBGT1JDRV9CT0RZID0gY2ZnLkZPUkNFX0JPRFkgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICBTQU5JVElaRV9ET00gPSBjZmcuU0FOSVRJWkVfRE9NICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgS0VFUF9DT05URU5UID0gY2ZnLktFRVBfQ09OVEVOVCAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgIElOX1BMQUNFID0gY2ZnLklOX1BMQUNFIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG5cbiAgICBJU19BTExPV0VEX1VSSSQkMSA9IGNmZy5BTExPV0VEX1VSSV9SRUdFWFAgfHwgSVNfQUxMT1dFRF9VUkkkJDE7XG5cbiAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICBBTExPV19EQVRBX0FUVFIgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoUkVUVVJOX0RPTV9GUkFHTUVOVCkge1xuICAgICAgUkVUVVJOX0RPTSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyogUGFyc2UgcHJvZmlsZSBpbmZvICovXG4gICAgaWYgKFVTRV9QUk9GSUxFUykge1xuICAgICAgQUxMT1dFRF9UQUdTID0gYWRkVG9TZXQoe30sIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkodGV4dCkpKTtcbiAgICAgIEFMTE9XRURfQVRUUiA9IFtdO1xuICAgICAgaWYgKFVTRV9QUk9GSUxFUy5odG1sID09PSB0cnVlKSB7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgaHRtbCk7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgaHRtbCQxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFVTRV9QUk9GSUxFUy5zdmcgPT09IHRydWUpIHtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBzdmcpO1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHN2ZyQxKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCB4bWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoVVNFX1BST0ZJTEVTLnN2Z0ZpbHRlcnMgPT09IHRydWUpIHtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBzdmdGaWx0ZXJzKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBzdmckMSk7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFVTRV9QUk9GSUxFUy5tYXRoTWwgPT09IHRydWUpIHtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBtYXRoTWwpO1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIG1hdGhNbCQxKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCB4bWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIE1lcmdlIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyAqL1xuICAgIGlmIChjZmcuQUREX1RBR1MpIHtcbiAgICAgIGlmIChBTExPV0VEX1RBR1MgPT09IERFRkFVTFRfQUxMT1dFRF9UQUdTKSB7XG4gICAgICAgIEFMTE9XRURfVEFHUyA9IGNsb25lKEFMTE9XRURfVEFHUyk7XG4gICAgICB9XG5cbiAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgY2ZnLkFERF9UQUdTKTtcbiAgICB9XG5cbiAgICBpZiAoY2ZnLkFERF9BVFRSKSB7XG4gICAgICBpZiAoQUxMT1dFRF9BVFRSID09PSBERUZBVUxUX0FMTE9XRURfQVRUUikge1xuICAgICAgICBBTExPV0VEX0FUVFIgPSBjbG9uZShBTExPV0VEX0FUVFIpO1xuICAgICAgfVxuXG4gICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIGNmZy5BRERfQVRUUik7XG4gICAgfVxuXG4gICAgaWYgKGNmZy5BRERfVVJJX1NBRkVfQVRUUikge1xuICAgICAgYWRkVG9TZXQoVVJJX1NBRkVfQVRUUklCVVRFUywgY2ZnLkFERF9VUklfU0FGRV9BVFRSKTtcbiAgICB9XG5cbiAgICAvKiBBZGQgI3RleHQgaW4gY2FzZSBLRUVQX0NPTlRFTlQgaXMgc2V0IHRvIHRydWUgKi9cbiAgICBpZiAoS0VFUF9DT05URU5UKSB7XG4gICAgICBBTExPV0VEX1RBR1NbJyN0ZXh0J10gPSB0cnVlO1xuICAgIH1cblxuICAgIC8qIEFkZCBodG1sLCBoZWFkIGFuZCBib2R5IHRvIEFMTE9XRURfVEFHUyBpbiBjYXNlIFdIT0xFX0RPQ1VNRU5UIGlzIHRydWUgKi9cbiAgICBpZiAoV0hPTEVfRE9DVU1FTlQpIHtcbiAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgWydodG1sJywgJ2hlYWQnLCAnYm9keSddKTtcbiAgICB9XG5cbiAgICAvKiBBZGQgdGJvZHkgdG8gQUxMT1dFRF9UQUdTIGluIGNhc2UgdGFibGVzIGFyZSBwZXJtaXR0ZWQsIHNlZSAjMjg2ICovXG4gICAgaWYgKEFMTE9XRURfVEFHUy50YWJsZSkge1xuICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBbJ3Rib2R5J10pO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgZnVydGhlciBtYW5pcHVsYXRpb24gb2YgY29uZmlndXJhdGlvbi5cbiAgICAvLyBOb3QgYXZhaWxhYmxlIGluIElFOCwgU2FmYXJpIDUsIGV0Yy5cbiAgICBpZiAoZnJlZXplKSB7XG4gICAgICBmcmVlemUoY2ZnKTtcbiAgICB9XG5cbiAgICBDT05GSUcgPSBjZmc7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9mb3JjZVJlbW92ZVxuICAgKlxuICAgKiBAcGFyYW0gIHtOb2RlfSBub2RlIGEgRE9NIG5vZGVcbiAgICovXG4gIHZhciBfZm9yY2VSZW1vdmUgPSBmdW5jdGlvbiBfZm9yY2VSZW1vdmUobm9kZSkge1xuICAgIERPTVB1cmlmeS5yZW1vdmVkLnB1c2goeyBlbGVtZW50OiBub2RlIH0pO1xuICAgIHRyeSB7XG4gICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIG5vZGUub3V0ZXJIVE1MID0gZW1wdHlIVE1MO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogX3JlbW92ZUF0dHJpYnV0ZVxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWUgYW4gQXR0cmlidXRlIG5hbWVcbiAgICogQHBhcmFtICB7Tm9kZX0gbm9kZSBhIERPTSBub2RlXG4gICAqL1xuICB2YXIgX3JlbW92ZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgbm9kZSkge1xuICAgIHRyeSB7XG4gICAgICBET01QdXJpZnkucmVtb3ZlZC5wdXNoKHtcbiAgICAgICAgYXR0cmlidXRlOiBub2RlLmdldEF0dHJpYnV0ZU5vZGUobmFtZSksXG4gICAgICAgIGZyb206IG5vZGVcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBET01QdXJpZnkucmVtb3ZlZC5wdXNoKHtcbiAgICAgICAgYXR0cmlidXRlOiBudWxsLFxuICAgICAgICBmcm9tOiBub2RlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfTtcblxuICAvKipcbiAgICogX2luaXREb2N1bWVudFxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGRpcnR5IGEgc3RyaW5nIG9mIGRpcnR5IG1hcmt1cFxuICAgKiBAcmV0dXJuIHtEb2N1bWVudH0gYSBET00sIGZpbGxlZCB3aXRoIHRoZSBkaXJ0eSBtYXJrdXBcbiAgICovXG4gIHZhciBfaW5pdERvY3VtZW50ID0gZnVuY3Rpb24gX2luaXREb2N1bWVudChkaXJ0eSkge1xuICAgIC8qIENyZWF0ZSBhIEhUTUwgZG9jdW1lbnQgKi9cbiAgICB2YXIgZG9jID0gdm9pZCAwO1xuICAgIHZhciBsZWFkaW5nV2hpdGVzcGFjZSA9IHZvaWQgMDtcblxuICAgIGlmIChGT1JDRV9CT0RZKSB7XG4gICAgICBkaXJ0eSA9ICc8cmVtb3ZlPjwvcmVtb3ZlPicgKyBkaXJ0eTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyogSWYgRk9SQ0VfQk9EWSBpc24ndCB1c2VkLCBsZWFkaW5nIHdoaXRlc3BhY2UgbmVlZHMgdG8gYmUgcHJlc2VydmVkIG1hbnVhbGx5ICovXG4gICAgICB2YXIgbWF0Y2hlcyA9IGRpcnR5Lm1hdGNoKC9eW1xcc10rLyk7XG4gICAgICBsZWFkaW5nV2hpdGVzcGFjZSA9IG1hdGNoZXMgJiYgbWF0Y2hlc1swXTtcbiAgICAgIGlmIChsZWFkaW5nV2hpdGVzcGFjZSkge1xuICAgICAgICBkaXJ0eSA9IGRpcnR5LnNsaWNlKGxlYWRpbmdXaGl0ZXNwYWNlLmxlbmd0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogVXNlIERPTVBhcnNlciB0byB3b3JrYXJvdW5kIEZpcmVmb3ggYnVnIChzZWUgY29tbWVudCBiZWxvdykgKi9cbiAgICBpZiAodXNlRE9NUGFyc2VyKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGRpcnR5LCAndGV4dC9odG1sJyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICB9XG5cbiAgICAvKiBSZW1vdmUgdGl0bGUgdG8gZml4IGEgbVhTUyBidWcgaW4gb2xkZXIgTVMgRWRnZSAqL1xuICAgIGlmIChyZW1vdmVUaXRsZSkge1xuICAgICAgYWRkVG9TZXQoRk9SQklEX1RBR1MsIFsndGl0bGUnXSk7XG4gICAgfVxuXG4gICAgLyogT3RoZXJ3aXNlIHVzZSBjcmVhdGVIVE1MRG9jdW1lbnQsIGJlY2F1c2UgRE9NUGFyc2VyIGlzIHVuc2FmZSBpblxuICAgIFNhZmFyaSAoc2VlIGNvbW1lbnQgYmVsb3cpICovXG4gICAgaWYgKCFkb2MgfHwgIWRvYy5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGRvYyA9IGltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCgnJyk7XG4gICAgICB2YXIgX2RvYyA9IGRvYyxcbiAgICAgICAgICBib2R5ID0gX2RvYy5ib2R5O1xuXG4gICAgICBib2R5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYm9keS5wYXJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgIGJvZHkub3V0ZXJIVE1MID0gdHJ1c3RlZFR5cGVzUG9saWN5ID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoZGlydHkpIDogZGlydHk7XG4gICAgfVxuXG4gICAgaWYgKGxlYWRpbmdXaGl0ZXNwYWNlKSB7XG4gICAgICBkb2MuYm9keS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGVhZGluZ1doaXRlc3BhY2UpLCBkb2MuYm9keS5jaGlsZE5vZGVzWzBdIHx8IG51bGwpO1xuICAgIH1cblxuICAgIC8qIFdvcmsgb24gd2hvbGUgZG9jdW1lbnQgb3IganVzdCBpdHMgYm9keSAqL1xuICAgIHJldHVybiBnZXRFbGVtZW50c0J5VGFnTmFtZS5jYWxsKGRvYywgV0hPTEVfRE9DVU1FTlQgPyAnaHRtbCcgOiAnYm9keScpWzBdO1xuICB9O1xuXG4gIC8vIEZpcmVmb3ggdXNlcyBhIGRpZmZlcmVudCBwYXJzZXIgZm9yIGlubmVySFRNTCByYXRoZXIgdGhhblxuICAvLyBET01QYXJzZXIgKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMjA1NjMxKVxuICAvLyB3aGljaCBtZWFucyB0aGF0IHlvdSAqbXVzdCogdXNlIERPTVBhcnNlciwgb3RoZXJ3aXNlIHRoZSBvdXRwdXQgbWF5XG4gIC8vIG5vdCBiZSBzYWZlIGlmIHVzZWQgaW4gYSBkb2N1bWVudC53cml0ZSBjb250ZXh0IGxhdGVyLlxuICAvL1xuICAvLyBTbyB3ZSBmZWF0dXJlIGRldGVjdCB0aGUgRmlyZWZveCBidWcgYW5kIHVzZSB0aGUgRE9NUGFyc2VyIGlmIG5lY2Vzc2FyeS5cbiAgLy9cbiAgLy8gTVMgRWRnZSwgaW4gb2xkZXIgdmVyc2lvbnMsIGlzIGFmZmVjdGVkIGJ5IGFuIG1YU1MgYmVoYXZpb3IuIFRoZSBzZWNvbmRcbiAgLy8gY2hlY2sgdGVzdHMgZm9yIHRoZSBiZWhhdmlvciBhbmQgZml4ZXMgaXQgaWYgbmVjZXNzYXJ5LlxuICBpZiAoRE9NUHVyaWZ5LmlzU3VwcG9ydGVkKSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBkb2MgPSBfaW5pdERvY3VtZW50KCc8c3ZnPjxwPjxzdHlsZT48aW1nIHNyYz1cIjwvc3R5bGU+PGltZyBzcmM9eCBvbmVycm9yPTEvL1wiPicpO1xuICAgICAgICBpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoJ3N2ZyBpbWcnKSkge1xuICAgICAgICAgIHVzZURPTVBhcnNlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIH0pKCk7XG5cbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIGRvYyA9IF9pbml0RG9jdW1lbnQoJzx4Lz48dGl0bGU+Jmx0Oy90aXRsZSZndDsmbHQ7aW1nJmd0OycpO1xuICAgICAgICBpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJykuaW5uZXJIVE1MLm1hdGNoKC88XFwvdGl0bGUvKSkge1xuICAgICAgICAgIHJlbW92ZVRpdGxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgfSkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBfY3JlYXRlSXRlcmF0b3JcbiAgICpcbiAgICogQHBhcmFtICB7RG9jdW1lbnR9IHJvb3QgZG9jdW1lbnQvZnJhZ21lbnQgdG8gY3JlYXRlIGl0ZXJhdG9yIGZvclxuICAgKiBAcmV0dXJuIHtJdGVyYXRvcn0gaXRlcmF0b3IgaW5zdGFuY2VcbiAgICovXG4gIHZhciBfY3JlYXRlSXRlcmF0b3IgPSBmdW5jdGlvbiBfY3JlYXRlSXRlcmF0b3Iocm9vdCkge1xuICAgIHJldHVybiBjcmVhdGVOb2RlSXRlcmF0b3IuY2FsbChyb290Lm93bmVyRG9jdW1lbnQgfHwgcm9vdCwgcm9vdCwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19URVhULCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUO1xuICAgIH0sIGZhbHNlKTtcbiAgfTtcblxuICAvKipcbiAgICogX2lzQ2xvYmJlcmVkXG4gICAqXG4gICAqIEBwYXJhbSAge05vZGV9IGVsbSBlbGVtZW50IHRvIGNoZWNrIGZvciBjbG9iYmVyaW5nIGF0dGFja3NcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBjbG9iYmVyZWQsIGZhbHNlIGlmIHNhZmVcbiAgICovXG4gIHZhciBfaXNDbG9iYmVyZWQgPSBmdW5jdGlvbiBfaXNDbG9iYmVyZWQoZWxtKSB7XG4gICAgaWYgKGVsbSBpbnN0YW5jZW9mIFRleHQgfHwgZWxtIGluc3RhbmNlb2YgQ29tbWVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZWxtLm5vZGVOYW1lICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxtLnRleHRDb250ZW50ICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxtLnJlbW92ZUNoaWxkICE9PSAnZnVuY3Rpb24nIHx8ICEoZWxtLmF0dHJpYnV0ZXMgaW5zdGFuY2VvZiBOYW1lZE5vZGVNYXApIHx8IHR5cGVvZiBlbG0ucmVtb3ZlQXR0cmlidXRlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbG0uc2V0QXR0cmlidXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9pc05vZGVcbiAgICpcbiAgICogQHBhcmFtICB7Tm9kZX0gb2JqIG9iamVjdCB0byBjaGVjayB3aGV0aGVyIGl0J3MgYSBET00gbm9kZVxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlzIG9iamVjdCBpcyBhIERPTSBub2RlXG4gICAqL1xuICB2YXIgX2lzTm9kZSA9IGZ1bmN0aW9uIF9pc05vZGUob2JqKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgTm9kZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoTm9kZSkpID09PSAnb2JqZWN0JyA/IG9iaiBpbnN0YW5jZW9mIE5vZGUgOiBvYmogJiYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9iaikpID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqLm5vZGVUeXBlID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygb2JqLm5vZGVOYW1lID09PSAnc3RyaW5nJztcbiAgfTtcblxuICAvKipcbiAgICogX2V4ZWN1dGVIb29rXG4gICAqIEV4ZWN1dGUgdXNlciBjb25maWd1cmFibGUgaG9va3NcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBlbnRyeVBvaW50ICBOYW1lIG9mIHRoZSBob29rJ3MgZW50cnkgcG9pbnRcbiAgICogQHBhcmFtICB7Tm9kZX0gY3VycmVudE5vZGUgbm9kZSB0byB3b3JrIG9uIHdpdGggdGhlIGhvb2tcbiAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIGFkZGl0aW9uYWwgaG9vayBwYXJhbWV0ZXJzXG4gICAqL1xuICB2YXIgX2V4ZWN1dGVIb29rID0gZnVuY3Rpb24gX2V4ZWN1dGVIb29rKGVudHJ5UG9pbnQsIGN1cnJlbnROb2RlLCBkYXRhKSB7XG4gICAgaWYgKCFob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhvb2tzW2VudHJ5UG9pbnRdLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgIGhvb2suY2FsbChET01QdXJpZnksIGN1cnJlbnROb2RlLCBkYXRhLCBDT05GSUcpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBfc2FuaXRpemVFbGVtZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdCBub2RlTmFtZVxuICAgKiBAcHJvdGVjdCB0ZXh0Q29udGVudFxuICAgKiBAcHJvdGVjdCByZW1vdmVDaGlsZFxuICAgKlxuICAgKiBAcGFyYW0gICB7Tm9kZX0gY3VycmVudE5vZGUgdG8gY2hlY2sgZm9yIHBlcm1pc3Npb24gdG8gZXhpc3RcbiAgICogQHJldHVybiAge0Jvb2xlYW59IHRydWUgaWYgbm9kZSB3YXMga2lsbGVkLCBmYWxzZSBpZiBsZWZ0IGFsaXZlXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICB2YXIgX3Nhbml0aXplRWxlbWVudHMgPSBmdW5jdGlvbiBfc2FuaXRpemVFbGVtZW50cyhjdXJyZW50Tm9kZSkge1xuICAgIHZhciBjb250ZW50ID0gdm9pZCAwO1xuXG4gICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgIF9leGVjdXRlSG9vaygnYmVmb3JlU2FuaXRpemVFbGVtZW50cycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgIC8qIENoZWNrIGlmIGVsZW1lbnQgaXMgY2xvYmJlcmVkIG9yIGNhbiBjbG9iYmVyICovXG4gICAgaWYgKF9pc0Nsb2JiZXJlZChjdXJyZW50Tm9kZSkpIHtcbiAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiBOb3cgbGV0J3MgY2hlY2sgdGhlIGVsZW1lbnQncyB0eXBlIGFuZCBuYW1lICovXG4gICAgdmFyIHRhZ05hbWUgPSBjdXJyZW50Tm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgIF9leGVjdXRlSG9vaygndXBvblNhbml0aXplRWxlbWVudCcsIGN1cnJlbnROb2RlLCB7XG4gICAgICB0YWdOYW1lOiB0YWdOYW1lLFxuICAgICAgYWxsb3dlZFRhZ3M6IEFMTE9XRURfVEFHU1xuICAgIH0pO1xuXG4gICAgLyogUmVtb3ZlIGVsZW1lbnQgaWYgYW55dGhpbmcgZm9yYmlkcyBpdHMgcHJlc2VuY2UgKi9cbiAgICBpZiAoIUFMTE9XRURfVEFHU1t0YWdOYW1lXSB8fCBGT1JCSURfVEFHU1t0YWdOYW1lXSkge1xuICAgICAgLyogS2VlcCBjb250ZW50IGV4Y2VwdCBmb3IgYmxhY2stbGlzdGVkIGVsZW1lbnRzICovXG4gICAgICBpZiAoS0VFUF9DT05URU5UICYmICFGT1JCSURfQ09OVEVOVFNbdGFnTmFtZV0gJiYgdHlwZW9mIGN1cnJlbnROb2RlLmluc2VydEFkamFjZW50SFRNTCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBodG1sVG9JbnNlcnQgPSBjdXJyZW50Tm9kZS5pbm5lckhUTUw7XG4gICAgICAgICAgY3VycmVudE5vZGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdBZnRlckVuZCcsIHRydXN0ZWRUeXBlc1BvbGljeSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKGh0bWxUb0luc2VydCkgOiBodG1sVG9JbnNlcnQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICAgIH1cblxuICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qIFJlbW92ZSBpbiBjYXNlIGEgbm9zY3JpcHQvbm9lbWJlZCBYU1MgaXMgc3VzcGVjdGVkICovXG4gICAgaWYgKHRhZ05hbWUgPT09ICdub3NjcmlwdCcgJiYgY3VycmVudE5vZGUuaW5uZXJIVE1MLm1hdGNoKC88XFwvbm9zY3JpcHQvaSkpIHtcbiAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGFnTmFtZSA9PT0gJ25vZW1iZWQnICYmIGN1cnJlbnROb2RlLmlubmVySFRNTC5tYXRjaCgvPFxcL25vZW1iZWQvaSkpIHtcbiAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiBDb252ZXJ0IG1hcmt1cCB0byBjb3ZlciBqUXVlcnkgYmVoYXZpb3IgKi9cbiAgICBpZiAoU0FGRV9GT1JfSlFVRVJZICYmICFjdXJyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZCAmJiAoIWN1cnJlbnROb2RlLmNvbnRlbnQgfHwgIWN1cnJlbnROb2RlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQpICYmIC88L2cudGVzdChjdXJyZW50Tm9kZS50ZXh0Q29udGVudCkpIHtcbiAgICAgIERPTVB1cmlmeS5yZW1vdmVkLnB1c2goeyBlbGVtZW50OiBjdXJyZW50Tm9kZS5jbG9uZU5vZGUoKSB9KTtcbiAgICAgIGlmIChjdXJyZW50Tm9kZS5pbm5lckhUTUwpIHtcbiAgICAgICAgY3VycmVudE5vZGUuaW5uZXJIVE1MID0gY3VycmVudE5vZGUuaW5uZXJIVE1MLnJlcGxhY2UoLzwvZywgJyZsdDsnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnROb2RlLmlubmVySFRNTCA9IGN1cnJlbnROb2RlLnRleHRDb250ZW50LnJlcGxhY2UoLzwvZywgJyZsdDsnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBTYW5pdGl6ZSBlbGVtZW50IGNvbnRlbnQgdG8gYmUgdGVtcGxhdGUtc2FmZSAqL1xuICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMgJiYgY3VycmVudE5vZGUubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgIC8qIEdldCB0aGUgZWxlbWVudCdzIHRleHQgY29udGVudCAqL1xuICAgICAgY29udGVudCA9IGN1cnJlbnROb2RlLnRleHRDb250ZW50O1xuICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShNVVNUQUNIRV9FWFBSJCQxLCAnICcpO1xuICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShFUkJfRVhQUiQkMSwgJyAnKTtcbiAgICAgIGlmIChjdXJyZW50Tm9kZS50ZXh0Q29udGVudCAhPT0gY29udGVudCkge1xuICAgICAgICBET01QdXJpZnkucmVtb3ZlZC5wdXNoKHsgZWxlbWVudDogY3VycmVudE5vZGUuY2xvbmVOb2RlKCkgfSk7XG4gICAgICAgIGN1cnJlbnROb2RlLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgX2V4ZWN1dGVIb29rKCdhZnRlclNhbml0aXplRWxlbWVudHMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9pc1ZhbGlkQXR0cmlidXRlXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gbGNUYWcgTG93ZXJjYXNlIHRhZyBuYW1lIG9mIGNvbnRhaW5pbmcgZWxlbWVudC5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBsY05hbWUgTG93ZXJjYXNlIGF0dHJpYnV0ZSBuYW1lLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHZhbHVlIEF0dHJpYnV0ZSB2YWx1ZS5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gIHZhciBfaXNWYWxpZEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIF9pc1ZhbGlkQXR0cmlidXRlKGxjVGFnLCBsY05hbWUsIHZhbHVlKSB7XG4gICAgLyogTWFrZSBzdXJlIGF0dHJpYnV0ZSBjYW5ub3QgY2xvYmJlciAqL1xuICAgIGlmIChTQU5JVElaRV9ET00gJiYgKGxjTmFtZSA9PT0gJ2lkJyB8fCBsY05hbWUgPT09ICduYW1lJykgJiYgKHZhbHVlIGluIGRvY3VtZW50IHx8IHZhbHVlIGluIGZvcm1FbGVtZW50KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qIEFsbG93IHZhbGlkIGRhdGEtKiBhdHRyaWJ1dGVzOiBBdCBsZWFzdCBvbmUgY2hhcmFjdGVyIGFmdGVyIFwiLVwiXG4gICAgICAgIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9kb20uaHRtbCNlbWJlZGRpbmctY3VzdG9tLW5vbi12aXNpYmxlLWRhdGEtd2l0aC10aGUtZGF0YS0qLWF0dHJpYnV0ZXMpXG4gICAgICAgIFhNTC1jb21wYXRpYmxlIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmZyYXN0cnVjdHVyZS5odG1sI3htbC1jb21wYXRpYmxlIGFuZCBodHRwOi8vd3d3LnczLm9yZy9UUi94bWwvI2QwZTgwNClcbiAgICAgICAgV2UgZG9uJ3QgbmVlZCB0byBjaGVjayB0aGUgdmFsdWU7IGl0J3MgYWx3YXlzIFVSSSBzYWZlLiAqL1xuICAgIGlmIChBTExPV19EQVRBX0FUVFIgJiYgREFUQV9BVFRSJCQxLnRlc3QobGNOYW1lKSkge1xuICAgICAgLy8gVGhpcyBhdHRyaWJ1dGUgaXMgc2FmZVxuICAgIH0gZWxzZSBpZiAoQUxMT1dfQVJJQV9BVFRSICYmIEFSSUFfQVRUUiQkMS50ZXN0KGxjTmFtZSkpIHtcbiAgICAgIC8vIFRoaXMgYXR0cmlidXRlIGlzIHNhZmVcbiAgICAgIC8qIE90aGVyd2lzZSwgY2hlY2sgdGhlIG5hbWUgaXMgcGVybWl0dGVkICovXG4gICAgfSBlbHNlIGlmICghQUxMT1dFRF9BVFRSW2xjTmFtZV0gfHwgRk9SQklEX0FUVFJbbGNOYW1lXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAvKiBDaGVjayB2YWx1ZSBpcyBzYWZlLiBGaXJzdCwgaXMgYXR0ciBpbmVydD8gSWYgc28sIGlzIHNhZmUgKi9cbiAgICB9IGVsc2UgaWYgKFVSSV9TQUZFX0FUVFJJQlVURVNbbGNOYW1lXSkge1xuICAgICAgLy8gVGhpcyBhdHRyaWJ1dGUgaXMgc2FmZVxuICAgICAgLyogQ2hlY2sgbm8gc2NyaXB0LCBkYXRhIG9yIHVua25vd24gcG9zc2libHkgdW5zYWZlIFVSSVxuICAgICAgICB1bmxlc3Mgd2Uga25vdyBVUkkgdmFsdWVzIGFyZSBzYWZlIGZvciB0aGF0IGF0dHJpYnV0ZSAqL1xuICAgIH0gZWxzZSBpZiAoSVNfQUxMT1dFRF9VUkkkJDEudGVzdCh2YWx1ZS5yZXBsYWNlKEFUVFJfV0hJVEVTUEFDRSQkMSwgJycpKSkge1xuICAgICAgLy8gVGhpcyBhdHRyaWJ1dGUgaXMgc2FmZVxuICAgICAgLyogS2VlcCBpbWFnZSBkYXRhIFVSSXMgYWxpdmUgaWYgc3JjL3hsaW5rOmhyZWYgaXMgYWxsb3dlZCAqL1xuICAgICAgLyogRnVydGhlciBwcmV2ZW50IGdhZGdldCBYU1MgZm9yIGR5bmFtaWNhbGx5IGJ1aWx0IHNjcmlwdCB0YWdzICovXG4gICAgfSBlbHNlIGlmICgobGNOYW1lID09PSAnc3JjJyB8fCBsY05hbWUgPT09ICd4bGluazpocmVmJykgJiYgbGNUYWcgIT09ICdzY3JpcHQnICYmIHZhbHVlLmluZGV4T2YoJ2RhdGE6JykgPT09IDAgJiYgREFUQV9VUklfVEFHU1tsY1RhZ10pIHtcbiAgICAgIC8vIFRoaXMgYXR0cmlidXRlIGlzIHNhZmVcbiAgICAgIC8qIEFsbG93IHVua25vd24gcHJvdG9jb2xzOiBUaGlzIHByb3ZpZGVzIHN1cHBvcnQgZm9yIGxpbmtzIHRoYXRcbiAgICAgICAgYXJlIGhhbmRsZWQgYnkgcHJvdG9jb2wgaGFuZGxlcnMgd2hpY2ggbWF5IGJlIHVua25vd24gYWhlYWQgb2ZcbiAgICAgICAgdGltZSwgZS5nLiBmYjosIHNwb3RpZnk6ICovXG4gICAgfSBlbHNlIGlmIChBTExPV19VTktOT1dOX1BST1RPQ09MUyAmJiAhSVNfU0NSSVBUX09SX0RBVEEkJDEudGVzdCh2YWx1ZS5yZXBsYWNlKEFUVFJfV0hJVEVTUEFDRSQkMSwgJycpKSkge1xuICAgICAgLy8gVGhpcyBhdHRyaWJ1dGUgaXMgc2FmZVxuICAgICAgLyogQ2hlY2sgZm9yIGJpbmFyeSBhdHRyaWJ1dGVzICovXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVnYXRlZC1jb25kaXRpb25cbiAgICB9IGVsc2UgaWYgKCF2YWx1ZSkge1xuICAgICAgLy8gQmluYXJ5IGF0dHJpYnV0ZXMgYXJlIHNhZmUgYXQgdGhpcyBwb2ludFxuICAgICAgLyogQW55dGhpbmcgZWxzZSwgcHJlc3VtZSB1bnNhZmUsIGRvIG5vdCBhZGQgaXQgYmFjayAqL1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9zYW5pdGl6ZUF0dHJpYnV0ZXNcbiAgICpcbiAgICogQHByb3RlY3QgYXR0cmlidXRlc1xuICAgKiBAcHJvdGVjdCBub2RlTmFtZVxuICAgKiBAcHJvdGVjdCByZW1vdmVBdHRyaWJ1dGVcbiAgICogQHByb3RlY3Qgc2V0QXR0cmlidXRlXG4gICAqXG4gICAqIEBwYXJhbSAge05vZGV9IGN1cnJlbnROb2RlIHRvIHNhbml0aXplXG4gICAqL1xuICB2YXIgX3Nhbml0aXplQXR0cmlidXRlcyA9IGZ1bmN0aW9uIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoY3VycmVudE5vZGUpIHtcbiAgICB2YXIgYXR0ciA9IHZvaWQgMDtcbiAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG4gICAgdmFyIGxjTmFtZSA9IHZvaWQgMDtcbiAgICB2YXIgaWRBdHRyID0gdm9pZCAwO1xuICAgIHZhciBsID0gdm9pZCAwO1xuICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplQXR0cmlidXRlcycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgIHZhciBhdHRyaWJ1dGVzID0gY3VycmVudE5vZGUuYXR0cmlidXRlcztcblxuICAgIC8qIENoZWNrIGlmIHdlIGhhdmUgYXR0cmlidXRlczsgaWYgbm90IHdlIG1pZ2h0IGhhdmUgYSB0ZXh0IG5vZGUgKi9cblxuICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBob29rRXZlbnQgPSB7XG4gICAgICBhdHRyTmFtZTogJycsXG4gICAgICBhdHRyVmFsdWU6ICcnLFxuICAgICAga2VlcEF0dHI6IHRydWUsXG4gICAgICBhbGxvd2VkQXR0cmlidXRlczogQUxMT1dFRF9BVFRSXG4gICAgfTtcbiAgICBsID0gYXR0cmlidXRlcy5sZW5ndGg7XG5cbiAgICAvKiBHbyBiYWNrd2FyZHMgb3ZlciBhbGwgYXR0cmlidXRlczsgc2FmZWx5IHJlbW92ZSBiYWQgb25lcyAqL1xuICAgIHdoaWxlIChsLS0pIHtcbiAgICAgIGF0dHIgPSBhdHRyaWJ1dGVzW2xdO1xuICAgICAgdmFyIF9hdHRyID0gYXR0cixcbiAgICAgICAgICBuYW1lID0gX2F0dHIubmFtZSxcbiAgICAgICAgICBuYW1lc3BhY2VVUkkgPSBfYXR0ci5uYW1lc3BhY2VVUkk7XG5cbiAgICAgIHZhbHVlID0gYXR0ci52YWx1ZS50cmltKCk7XG4gICAgICBsY05hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIGhvb2tFdmVudC5hdHRyTmFtZSA9IGxjTmFtZTtcbiAgICAgIGhvb2tFdmVudC5hdHRyVmFsdWUgPSB2YWx1ZTtcbiAgICAgIGhvb2tFdmVudC5rZWVwQXR0ciA9IHRydWU7XG4gICAgICBfZXhlY3V0ZUhvb2soJ3Vwb25TYW5pdGl6ZUF0dHJpYnV0ZScsIGN1cnJlbnROb2RlLCBob29rRXZlbnQpO1xuICAgICAgdmFsdWUgPSBob29rRXZlbnQuYXR0clZhbHVlO1xuXG4gICAgICAvKiBSZW1vdmUgYXR0cmlidXRlICovXG4gICAgICAvLyBTYWZhcmkgKGlPUyArIE1hYyksIGxhc3QgdGVzdGVkIHY4LjAuNSwgY3Jhc2hlcyBpZiB5b3UgdHJ5IHRvXG4gICAgICAvLyByZW1vdmUgYSBcIm5hbWVcIiBhdHRyaWJ1dGUgZnJvbSBhbiA8aW1nPiB0YWcgdGhhdCBoYXMgYW4gXCJpZFwiXG4gICAgICAvLyBhdHRyaWJ1dGUgYXQgdGhlIHRpbWUuXG4gICAgICBpZiAobGNOYW1lID09PSAnbmFtZScgJiYgY3VycmVudE5vZGUubm9kZU5hbWUgPT09ICdJTUcnICYmIGF0dHJpYnV0ZXMuaWQpIHtcbiAgICAgICAgaWRBdHRyID0gYXR0cmlidXRlcy5pZDtcbiAgICAgICAgYXR0cmlidXRlcyA9IGFwcGx5KGFycmF5U2xpY2UsIGF0dHJpYnV0ZXMsIFtdKTtcbiAgICAgICAgX3JlbW92ZUF0dHJpYnV0ZSgnaWQnLCBjdXJyZW50Tm9kZSk7XG4gICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuICAgICAgICBpZiAoYXR0cmlidXRlcy5pbmRleE9mKGlkQXR0cikgPiBsKSB7XG4gICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGlkQXR0ci52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBUaGlzIHdvcmtzIGFyb3VuZCBhIGJ1ZyBpbiBTYWZhcmksIHdoZXJlIGlucHV0W3R5cGU9ZmlsZV1cbiAgICAgIC8vIGNhbm5vdCBiZSBkeW5hbWljYWxseSBzZXQgYWZ0ZXIgdHlwZSBoYXMgYmVlbiByZW1vdmVkXG4gICAgICBjdXJyZW50Tm9kZS5ub2RlTmFtZSA9PT0gJ0lOUFVUJyAmJiBsY05hbWUgPT09ICd0eXBlJyAmJiB2YWx1ZSA9PT0gJ2ZpbGUnICYmIGhvb2tFdmVudC5rZWVwQXR0ciAmJiAoQUxMT1dFRF9BVFRSW2xjTmFtZV0gfHwgIUZPUkJJRF9BVFRSW2xjTmFtZV0pKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVGhpcyBhdm9pZHMgYSBjcmFzaCBpbiBTYWZhcmkgdjkuMCB3aXRoIGRvdWJsZS1pZHMuXG4gICAgICAgIC8vIFRoZSB0cmljayBpcyB0byBmaXJzdCBzZXQgdGhlIGlkIHRvIGJlIGVtcHR5IGFuZCB0aGVuIHRvXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgYXR0cmlidXRlXG4gICAgICAgIGlmIChuYW1lID09PSAnaWQnKSB7XG4gICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlKG5hbWUsICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuICAgICAgfVxuXG4gICAgICAvKiBEaWQgdGhlIGhvb2tzIGFwcHJvdmUgb2YgdGhlIGF0dHJpYnV0ZT8gKi9cbiAgICAgIGlmICghaG9va0V2ZW50LmtlZXBBdHRyKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBTYW5pdGl6ZSBhdHRyaWJ1dGUgY29udGVudCB0byBiZSB0ZW1wbGF0ZS1zYWZlICovXG4gICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShNVVNUQUNIRV9FWFBSJCQxLCAnICcpO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoRVJCX0VYUFIkJDEsICcgJyk7XG4gICAgICB9XG5cbiAgICAgIC8qIElzIGB2YWx1ZWAgdmFsaWQgZm9yIHRoaXMgYXR0cmlidXRlPyAqL1xuICAgICAgdmFyIGxjVGFnID0gY3VycmVudE5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmICghX2lzVmFsaWRBdHRyaWJ1dGUobGNUYWcsIGxjTmFtZSwgdmFsdWUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBIYW5kbGUgaW52YWxpZCBkYXRhLSogYXR0cmlidXRlIHNldCBieSB0cnktY2F0Y2hpbmcgaXQgKi9cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChuYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgICBjdXJyZW50Tm9kZS5zZXRBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvKiBGYWxsYmFjayB0byBzZXRBdHRyaWJ1dGUoKSBmb3IgYnJvd3Nlci11bnJlY29nbml6ZWQgbmFtZXNwYWNlcyBlLmcuIFwieC1zY2hlbWFcIi4gKi9cbiAgICAgICAgICBjdXJyZW50Tm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgRE9NUHVyaWZ5LnJlbW92ZWQucG9wKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICB9XG5cbiAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgX2V4ZWN1dGVIb29rKCdhZnRlclNhbml0aXplQXR0cmlidXRlcycsIGN1cnJlbnROb2RlLCBudWxsKTtcbiAgfTtcblxuICAvKipcbiAgICogX3Nhbml0aXplU2hhZG93RE9NXG4gICAqXG4gICAqIEBwYXJhbSAge0RvY3VtZW50RnJhZ21lbnR9IGZyYWdtZW50IHRvIGl0ZXJhdGUgb3ZlciByZWN1cnNpdmVseVxuICAgKi9cbiAgdmFyIF9zYW5pdGl6ZVNoYWRvd0RPTSA9IGZ1bmN0aW9uIF9zYW5pdGl6ZVNoYWRvd0RPTShmcmFnbWVudCkge1xuICAgIHZhciBzaGFkb3dOb2RlID0gdm9pZCAwO1xuICAgIHZhciBzaGFkb3dJdGVyYXRvciA9IF9jcmVhdGVJdGVyYXRvcihmcmFnbWVudCk7XG5cbiAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZVNoYWRvd0RPTScsIGZyYWdtZW50LCBudWxsKTtcblxuICAgIHdoaWxlIChzaGFkb3dOb2RlID0gc2hhZG93SXRlcmF0b3IubmV4dE5vZGUoKSkge1xuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVTaGFkb3dOb2RlJywgc2hhZG93Tm9kZSwgbnVsbCk7XG5cbiAgICAgIC8qIFNhbml0aXplIHRhZ3MgYW5kIGVsZW1lbnRzICovXG4gICAgICBpZiAoX3Nhbml0aXplRWxlbWVudHMoc2hhZG93Tm9kZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8qIERlZXAgc2hhZG93IERPTSBkZXRlY3RlZCAqL1xuICAgICAgaWYgKHNoYWRvd05vZGUuY29udGVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgX3Nhbml0aXplU2hhZG93RE9NKHNoYWRvd05vZGUuY29udGVudCk7XG4gICAgICB9XG5cbiAgICAgIC8qIENoZWNrIGF0dHJpYnV0ZXMsIHNhbml0aXplIGlmIG5lY2Vzc2FyeSAqL1xuICAgICAgX3Nhbml0aXplQXR0cmlidXRlcyhzaGFkb3dOb2RlKTtcbiAgICB9XG5cbiAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgX2V4ZWN1dGVIb29rKCdhZnRlclNhbml0aXplU2hhZG93RE9NJywgZnJhZ21lbnQsIG51bGwpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTYW5pdGl6ZVxuICAgKiBQdWJsaWMgbWV0aG9kIHByb3ZpZGluZyBjb3JlIHNhbml0YXRpb24gZnVuY3Rpb25hbGl0eVxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xOb2RlfSBkaXJ0eSBzdHJpbmcgb3IgRE9NIG5vZGVcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICBET01QdXJpZnkuc2FuaXRpemUgPSBmdW5jdGlvbiAoZGlydHksIGNmZykge1xuICAgIHZhciBib2R5ID0gdm9pZCAwO1xuICAgIHZhciBpbXBvcnRlZE5vZGUgPSB2b2lkIDA7XG4gICAgdmFyIGN1cnJlbnROb2RlID0gdm9pZCAwO1xuICAgIHZhciBvbGROb2RlID0gdm9pZCAwO1xuICAgIHZhciByZXR1cm5Ob2RlID0gdm9pZCAwO1xuICAgIC8qIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgc3RyaW5nIHRvIHNhbml0aXplLlxuICAgICAgRE8gTk9UIHJldHVybiBlYXJseSwgYXMgdGhpcyB3aWxsIHJldHVybiB0aGUgd3JvbmcgdHlwZSBpZlxuICAgICAgdGhlIHVzZXIgaGFzIHJlcXVlc3RlZCBhIERPTSBvYmplY3QgcmF0aGVyIHRoYW4gYSBzdHJpbmcgKi9cbiAgICBpZiAoIWRpcnR5KSB7XG4gICAgICBkaXJ0eSA9ICc8IS0tPic7XG4gICAgfVxuXG4gICAgLyogU3RyaW5naWZ5LCBpbiBjYXNlIGRpcnR5IGlzIGFuIG9iamVjdCAqL1xuICAgIGlmICh0eXBlb2YgZGlydHkgIT09ICdzdHJpbmcnICYmICFfaXNOb2RlKGRpcnR5KSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lZ2F0ZWQtY29uZGl0aW9uXG4gICAgICBpZiAodHlwZW9mIGRpcnR5LnRvU3RyaW5nICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RvU3RyaW5nIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXJ0eSA9IGRpcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgIGlmICh0eXBlb2YgZGlydHkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZGlydHkgaXMgbm90IGEgc3RyaW5nLCBhYm9ydGluZycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogQ2hlY2sgd2UgY2FuIHJ1bi4gT3RoZXJ3aXNlIGZhbGwgYmFjayBvciBpZ25vcmUgKi9cbiAgICBpZiAoIURPTVB1cmlmeS5pc1N1cHBvcnRlZCkge1xuICAgICAgaWYgKF90eXBlb2Yod2luZG93LnRvU3RhdGljSFRNTCkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB3aW5kb3cudG9TdGF0aWNIVE1MID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGlydHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy50b1N0YXRpY0hUTUwoZGlydHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9pc05vZGUoZGlydHkpKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy50b1N0YXRpY0hUTUwoZGlydHkub3V0ZXJIVE1MKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGlydHk7XG4gICAgfVxuXG4gICAgLyogQXNzaWduIGNvbmZpZyB2YXJzICovXG4gICAgaWYgKCFTRVRfQ09ORklHKSB7XG4gICAgICBfcGFyc2VDb25maWcoY2ZnKTtcbiAgICB9XG5cbiAgICAvKiBDbGVhbiB1cCByZW1vdmVkIGVsZW1lbnRzICovXG4gICAgRE9NUHVyaWZ5LnJlbW92ZWQgPSBbXTtcblxuICAgIGlmIChJTl9QTEFDRSkge1xuICAgICAgLyogTm8gc3BlY2lhbCBoYW5kbGluZyBuZWNlc3NhcnkgZm9yIGluLXBsYWNlIHNhbml0aXphdGlvbiAqL1xuICAgIH0gZWxzZSBpZiAoZGlydHkgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAvKiBJZiBkaXJ0eSBpcyBhIERPTSBlbGVtZW50LCBhcHBlbmQgdG8gYW4gZW1wdHkgZG9jdW1lbnQgdG8gYXZvaWRcbiAgICAgICAgIGVsZW1lbnRzIGJlaW5nIHN0cmlwcGVkIGJ5IHRoZSBwYXJzZXIgKi9cbiAgICAgIGJvZHkgPSBfaW5pdERvY3VtZW50KCc8IS0tPicpO1xuICAgICAgaW1wb3J0ZWROb2RlID0gYm9keS5vd25lckRvY3VtZW50LmltcG9ydE5vZGUoZGlydHksIHRydWUpO1xuICAgICAgaWYgKGltcG9ydGVkTm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBpbXBvcnRlZE5vZGUubm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgICAgICAvKiBOb2RlIGlzIGFscmVhZHkgYSBib2R5LCB1c2UgYXMgaXMgKi9cbiAgICAgICAgYm9keSA9IGltcG9ydGVkTm9kZTtcbiAgICAgIH0gZWxzZSBpZiAoaW1wb3J0ZWROb2RlLm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgICAgYm9keSA9IGltcG9ydGVkTm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1ub2RlLWFwcGVuZFxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGltcG9ydGVkTm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIEV4aXQgZGlyZWN0bHkgaWYgd2UgaGF2ZSBub3RoaW5nIHRvIGRvICovXG4gICAgICBpZiAoIVJFVFVSTl9ET00gJiYgIVNBRkVfRk9SX1RFTVBMQVRFUyAmJiAhV0hPTEVfRE9DVU1FTlQgJiYgZGlydHkuaW5kZXhPZignPCcpID09PSAtMSkge1xuICAgICAgICByZXR1cm4gdHJ1c3RlZFR5cGVzUG9saWN5ID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoZGlydHkpIDogZGlydHk7XG4gICAgICB9XG5cbiAgICAgIC8qIEluaXRpYWxpemUgdGhlIGRvY3VtZW50IHRvIHdvcmsgb24gKi9cbiAgICAgIGJvZHkgPSBfaW5pdERvY3VtZW50KGRpcnR5KTtcblxuICAgICAgLyogQ2hlY2sgd2UgaGF2ZSBhIERPTSBub2RlIGZyb20gdGhlIGRhdGEgKi9cbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICByZXR1cm4gUkVUVVJOX0RPTSA/IG51bGwgOiBlbXB0eUhUTUw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogUmVtb3ZlIGZpcnN0IGVsZW1lbnQgbm9kZSAob3VycykgaWYgRk9SQ0VfQk9EWSBpcyBzZXQgKi9cbiAgICBpZiAoYm9keSAmJiBGT1JDRV9CT0RZKSB7XG4gICAgICBfZm9yY2VSZW1vdmUoYm9keS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICAvKiBHZXQgbm9kZSBpdGVyYXRvciAqL1xuICAgIHZhciBub2RlSXRlcmF0b3IgPSBfY3JlYXRlSXRlcmF0b3IoSU5fUExBQ0UgPyBkaXJ0eSA6IGJvZHkpO1xuXG4gICAgLyogTm93IHN0YXJ0IGl0ZXJhdGluZyBvdmVyIHRoZSBjcmVhdGVkIGRvY3VtZW50ICovXG4gICAgd2hpbGUgKGN1cnJlbnROb2RlID0gbm9kZUl0ZXJhdG9yLm5leHROb2RlKCkpIHtcbiAgICAgIC8qIEZpeCBJRSdzIHN0cmFuZ2UgYmVoYXZpb3Igd2l0aCBtYW5pcHVsYXRlZCB0ZXh0Tm9kZXMgIzg5ICovXG4gICAgICBpZiAoY3VycmVudE5vZGUubm9kZVR5cGUgPT09IDMgJiYgY3VycmVudE5vZGUgPT09IG9sZE5vZGUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8qIFNhbml0aXplIHRhZ3MgYW5kIGVsZW1lbnRzICovXG4gICAgICBpZiAoX3Nhbml0aXplRWxlbWVudHMoY3VycmVudE5vZGUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBTaGFkb3cgRE9NIGRldGVjdGVkLCBzYW5pdGl6ZSBpdCAqL1xuICAgICAgaWYgKGN1cnJlbnROb2RlLmNvbnRlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgIF9zYW5pdGl6ZVNoYWRvd0RPTShjdXJyZW50Tm9kZS5jb250ZW50KTtcbiAgICAgIH1cblxuICAgICAgLyogQ2hlY2sgYXR0cmlidXRlcywgc2FuaXRpemUgaWYgbmVjZXNzYXJ5ICovXG4gICAgICBfc2FuaXRpemVBdHRyaWJ1dGVzKGN1cnJlbnROb2RlKTtcblxuICAgICAgb2xkTm9kZSA9IGN1cnJlbnROb2RlO1xuICAgIH1cblxuICAgIG9sZE5vZGUgPSBudWxsO1xuXG4gICAgLyogSWYgd2Ugc2FuaXRpemVkIGBkaXJ0eWAgaW4tcGxhY2UsIHJldHVybiBpdC4gKi9cbiAgICBpZiAoSU5fUExBQ0UpIHtcbiAgICAgIHJldHVybiBkaXJ0eTtcbiAgICB9XG5cbiAgICAvKiBSZXR1cm4gc2FuaXRpemVkIHN0cmluZyBvciBET00gKi9cbiAgICBpZiAoUkVUVVJOX0RPTSkge1xuICAgICAgaWYgKFJFVFVSTl9ET01fRlJBR01FTlQpIHtcbiAgICAgICAgcmV0dXJuTm9kZSA9IGNyZWF0ZURvY3VtZW50RnJhZ21lbnQuY2FsbChib2R5Lm93bmVyRG9jdW1lbnQpO1xuXG4gICAgICAgIHdoaWxlIChib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItbm9kZS1hcHBlbmRcbiAgICAgICAgICByZXR1cm5Ob2RlLmFwcGVuZENoaWxkKGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybk5vZGUgPSBib2R5O1xuICAgICAgfVxuXG4gICAgICBpZiAoUkVUVVJOX0RPTV9JTVBPUlQpIHtcbiAgICAgICAgLyogQWRvcHROb2RlKCkgaXMgbm90IHVzZWQgYmVjYXVzZSBpbnRlcm5hbCBzdGF0ZSBpcyBub3QgcmVzZXRcbiAgICAgICAgICAgICAgIChlLmcuIHRoZSBwYXN0IG5hbWVzIG1hcCBvZiBhIEhUTUxGb3JtRWxlbWVudCksIHRoaXMgaXMgc2FmZVxuICAgICAgICAgICAgICAgaW4gdGhlb3J5IGJ1dCB3ZSB3b3VsZCByYXRoZXIgbm90IHJpc2sgYW5vdGhlciBhdHRhY2sgdmVjdG9yLlxuICAgICAgICAgICAgICAgVGhlIHN0YXRlIHRoYXQgaXMgY2xvbmVkIGJ5IGltcG9ydE5vZGUoKSBpcyBleHBsaWNpdGx5IGRlZmluZWRcbiAgICAgICAgICAgICAgIGJ5IHRoZSBzcGVjcy4gKi9cbiAgICAgICAgcmV0dXJuTm9kZSA9IGltcG9ydE5vZGUuY2FsbChvcmlnaW5hbERvY3VtZW50LCByZXR1cm5Ob2RlLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldHVybk5vZGU7XG4gICAgfVxuXG4gICAgdmFyIHNlcmlhbGl6ZWRIVE1MID0gV0hPTEVfRE9DVU1FTlQgPyBib2R5Lm91dGVySFRNTCA6IGJvZHkuaW5uZXJIVE1MO1xuXG4gICAgLyogU2FuaXRpemUgZmluYWwgc3RyaW5nIHRlbXBsYXRlLXNhZmUgKi9cbiAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICBzZXJpYWxpemVkSFRNTCA9IHNlcmlhbGl6ZWRIVE1MLnJlcGxhY2UoTVVTVEFDSEVfRVhQUiQkMSwgJyAnKTtcbiAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc2VyaWFsaXplZEhUTUwucmVwbGFjZShFUkJfRVhQUiQkMSwgJyAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1c3RlZFR5cGVzUG9saWN5ID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoc2VyaWFsaXplZEhUTUwpIDogc2VyaWFsaXplZEhUTUw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBtZXRob2QgdG8gc2V0IHRoZSBjb25maWd1cmF0aW9uIG9uY2VcbiAgICogc2V0Q29uZmlnXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICovXG4gIERPTVB1cmlmeS5zZXRDb25maWcgPSBmdW5jdGlvbiAoY2ZnKSB7XG4gICAgX3BhcnNlQ29uZmlnKGNmZyk7XG4gICAgU0VUX0NPTkZJRyA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIHRoZSBjb25maWd1cmF0aW9uXG4gICAqIGNsZWFyQ29uZmlnXG4gICAqXG4gICAqL1xuICBET01QdXJpZnkuY2xlYXJDb25maWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgQ09ORklHID0gbnVsbDtcbiAgICBTRVRfQ09ORklHID0gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBtZXRob2QgdG8gY2hlY2sgaWYgYW4gYXR0cmlidXRlIHZhbHVlIGlzIHZhbGlkLlxuICAgKiBVc2VzIGxhc3Qgc2V0IGNvbmZpZywgaWYgYW55LiBPdGhlcndpc2UsIHVzZXMgY29uZmlnIGRlZmF1bHRzLlxuICAgKiBpc1ZhbGlkQXR0cmlidXRlXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdGFnIFRhZyBuYW1lIG9mIGNvbnRhaW5pbmcgZWxlbWVudC5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBhdHRyIEF0dHJpYnV0ZSBuYW1lLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHZhbHVlIEF0dHJpYnV0ZSB2YWx1ZS5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQuIE90aGVyd2lzZSwgcmV0dXJucyBmYWxzZS5cbiAgICovXG4gIERPTVB1cmlmeS5pc1ZhbGlkQXR0cmlidXRlID0gZnVuY3Rpb24gKHRhZywgYXR0ciwgdmFsdWUpIHtcbiAgICAvKiBJbml0aWFsaXplIHNoYXJlZCBjb25maWcgdmFycyBpZiBuZWNlc3NhcnkuICovXG4gICAgaWYgKCFDT05GSUcpIHtcbiAgICAgIF9wYXJzZUNvbmZpZyh7fSk7XG4gICAgfVxuXG4gICAgdmFyIGxjVGFnID0gdGFnLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIGxjTmFtZSA9IGF0dHIudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gX2lzVmFsaWRBdHRyaWJ1dGUobGNUYWcsIGxjTmFtZSwgdmFsdWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGRIb29rXG4gICAqIFB1YmxpYyBtZXRob2QgdG8gYWRkIERPTVB1cmlmeSBob29rc1xuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZW50cnlQb2ludCBlbnRyeSBwb2ludCBmb3IgdGhlIGhvb2sgdG8gYWRkXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhvb2tGdW5jdGlvbiBmdW5jdGlvbiB0byBleGVjdXRlXG4gICAqL1xuICBET01QdXJpZnkuYWRkSG9vayA9IGZ1bmN0aW9uIChlbnRyeVBvaW50LCBob29rRnVuY3Rpb24pIHtcbiAgICBpZiAodHlwZW9mIGhvb2tGdW5jdGlvbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhvb2tzW2VudHJ5UG9pbnRdID0gaG9va3NbZW50cnlQb2ludF0gfHwgW107XG4gICAgaG9va3NbZW50cnlQb2ludF0ucHVzaChob29rRnVuY3Rpb24pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVIb29rXG4gICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGEgRE9NUHVyaWZ5IGhvb2sgYXQgYSBnaXZlbiBlbnRyeVBvaW50XG4gICAqIChwb3BzIGl0IGZyb20gdGhlIHN0YWNrIG9mIGhvb2tzIGlmIG1vcmUgYXJlIHByZXNlbnQpXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9vayB0byByZW1vdmVcbiAgICovXG4gIERPTVB1cmlmeS5yZW1vdmVIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQpIHtcbiAgICBpZiAoaG9va3NbZW50cnlQb2ludF0pIHtcbiAgICAgIGhvb2tzW2VudHJ5UG9pbnRdLnBvcCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlSG9va3NcbiAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYWxsIERPTVB1cmlmeSBob29rcyBhdCBhIGdpdmVuIGVudHJ5UG9pbnRcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9va3MgdG8gcmVtb3ZlXG4gICAqL1xuICBET01QdXJpZnkucmVtb3ZlSG9va3MgPSBmdW5jdGlvbiAoZW50cnlQb2ludCkge1xuICAgIGlmIChob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgaG9va3NbZW50cnlQb2ludF0gPSBbXTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZUFsbEhvb2tzXG4gICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGFsbCBET01QdXJpZnkgaG9va3NcbiAgICpcbiAgICovXG4gIERPTVB1cmlmeS5yZW1vdmVBbGxIb29rcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBob29rcyA9IHt9O1xuICB9O1xuXG4gIHJldHVybiBET01QdXJpZnk7XG59XG5cbnZhciBwdXJpZnkgPSBjcmVhdGVET01QdXJpZnkoKTtcblxucmV0dXJuIHB1cmlmeTtcblxufSkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXB1cmlmeS5qcy5tYXBcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkljb25zXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkljb25zXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4vKioqKioqLyBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlSWNvbnNcIl07XG4vKioqKioqLyBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVJY29uc1wiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLyoqKioqKi8gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbi8qKioqKiovIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4vKioqKioqLyBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4vKioqKioqLyBcdH0gO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuLyoqKioqKi8gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuLyoqKioqKi8gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuLyoqKioqKi8gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4vKioqKioqLyBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4vKioqKioqLyBcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuLyoqKioqKi8gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuLyoqKioqKi8gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbi8qKioqKiovIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbi8qKioqKiovIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4vKioqKioqLyBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbi8qKioqKiovIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4vKioqKioqLyBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbi8qKioqKiovIFx0XHRcdFx0XHRyZWplY3QoXG4vKioqKioqLyBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4vKioqKioqLyBcdFx0XHRcdFx0KTtcbi8qKioqKiovIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuLyoqKioqKi8gXHRcdFx0XHRcdHJlc29sdmUoKTtcbi8qKioqKiovIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4vKioqKioqLyBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuLyoqKioqKi8gXHRcdFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0XHRcdC8vIHN1Y2Nlc3Ncbi8qKioqKiovIFx0XHRcdFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJldHVybjtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9O1xuLyoqKioqKi8gXHRcdH0pO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4vKioqKioqLyBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLyoqKioqKi8gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcImJmOWU1N2E4Mjk5ZTNkYmFmMDFjXCI7XG4vKioqKioqLyBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuLyoqKioqKi8gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbi8qKioqKiovIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbi8qKioqKiovIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vKioqKioqLyBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuLyoqKioqKi8gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8qKioqKiovIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbi8qKioqKiovIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4vKioqKioqLyBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH0gZWxzZSB7XG4vKioqKioqLyBcdFx0XHRcdGNvbnNvbGUud2Fybihcbi8qKioqKiovIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuLyoqKioqKi8gXHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuLyoqKioqKi8gXHRcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9O1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoXG4vKioqKioqLyBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuLyoqKioqKi8gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuLyoqKioqKi8gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuLyoqKioqKi8gXHRcdFx0KSB7XG4vKioqKioqLyBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4vKioqKioqLyBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbi8qKioqKiovIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4vKioqKioqLyBcdFx0XHRcdHRocm93IGVycjtcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbi8qKioqKiovIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFx0cmV0dXJuIGZuO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0dmFyIGhvdCA9IHtcbi8qKioqKiovIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbi8qKioqKiovIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4vKioqKioqLyBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuLyoqKioqKi8gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuLyoqKioqKi8gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG4vKioqKioqL1xuLyoqKioqKi8gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuLyoqKioqKi8gXHRcdFx0YWN0aXZlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuLyoqKioqKi8gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbi8qKioqKiovIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuLyoqKioqKi8gXHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbi8qKioqKiovIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbi8qKioqKiovIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4vKioqKioqLyBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuLyoqKioqKi8gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbi8qKioqKiovIFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbi8qKioqKiovIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4vKioqKioqLyBcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4vKioqKioqLyBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbi8qKioqKiovIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbi8qKioqKiovIFx0XHRcdH0sXG4vKioqKioqL1xuLyoqKioqKi8gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbi8qKioqKiovIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbi8qKioqKiovIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbi8qKioqKiovIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4vKioqKioqLyBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4vKioqKioqLyBcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuLyoqKioqKi8gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuLyoqKioqKi8gXHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbi8qKioqKiovIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG4vKioqKioqLyBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4vKioqKioqLyBcdFx0XHR9LFxuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuLyoqKioqKi8gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4vKioqKioqLyBcdFx0cmV0dXJuIGhvdDtcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4vKioqKioqLyBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbi8qKioqKiovIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XG4vKioqKioqLyBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbi8qKioqKiovIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbi8qKioqKiovIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XG4vKioqKioqLyBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbi8qKioqKiovIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuLyoqKioqKi8gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbi8qKioqKiovIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4vKioqKioqLyBcdHZhciBob3REZWZlcnJlZDtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuLyoqKioqKi8gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoO1xuLyoqKioqKi9cbi8qKioqKiovIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuLyoqKioqKi8gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuLyoqKioqKi8gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuLyoqKioqKi8gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4vKioqKioqLyBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuLyoqKioqKi8gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuLyoqKioqKi8gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbi8qKioqKiovIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbi8qKioqKiovIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuLyoqKioqKi8gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4vKioqKioqLyBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuLyoqKioqKi8gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4vKioqKioqLyBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuLyoqKioqKi8gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcbi8qKioqKiovIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuLyoqKioqKi8gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4vKioqKioqLyBcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuLyoqKioqKi8gXHRcdFx0dmFyIGNodW5rSWQgPSBcIkRpYWxvZ1wiO1xuLyoqKioqKi8gXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG4vKioqKioqLyBcdFx0XHR7XG4vKioqKioqLyBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXG4vKioqKioqLyBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0aWYgKFxuLyoqKioqKi8gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4vKioqKioqLyBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbi8qKioqKiovIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4vKioqKioqLyBcdFx0XHQpIHtcbi8qKioqKiovIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4vKioqKioqLyBcdFx0fSk7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLyoqKioqKi8gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuLyoqKioqKi8gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuO1xuLyoqKioqKi8gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4vKioqKioqLyBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbi8qKioqKiovIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuLyoqKioqKi8gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuLyoqKioqKi8gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuLyoqKioqKi8gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbi8qKioqKiovIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4vKioqKioqLyBcdFx0fSBlbHNlIHtcbi8qKioqKiovIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuLyoqKioqKi8gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4vKioqKioqLyBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4vKioqKioqLyBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4vKioqKioqLyBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuLyoqKioqKi8gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbi8qKioqKiovIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuLyoqKioqKi8gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbi8qKioqKiovIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuLyoqKioqKi8gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuLyoqKioqKi8gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbi8qKioqKiovIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuLyoqKioqKi8gXHRcdFx0XHR9KVxuLyoqKioqKi8gXHRcdFx0XHQudGhlbihcbi8qKioqKiovIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdH0gZWxzZSB7XG4vKioqKioqLyBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4vKioqKioqLyBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbi8qKioqKiovIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuLyoqKioqKi8gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbi8qKioqKiovIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbi8qKioqKiovIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0dmFyIGNiO1xuLyoqKioqKi8gXHRcdHZhciBpO1xuLyoqKioqKi8gXHRcdHZhciBqO1xuLyoqKioqKi8gXHRcdHZhciBtb2R1bGU7XG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZUlkO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24oaWQpIHtcbi8qKioqKiovIFx0XHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbi8qKioqKiovIFx0XHRcdFx0XHRpZDogaWRcbi8qKioqKiovIFx0XHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbi8qKioqKiovIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4vKioqKioqLyBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcbi8qKioqKiovIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHRcdGlmICghbW9kdWxlIHx8IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCkgY29udGludWU7XG4vKioqKioqLyBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRyZXR1cm4ge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4vKioqKioqLyBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbi8qKioqKiovIFx0XHRcdFx0XHR9O1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4vKioqKioqLyBcdFx0XHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4vKioqKioqLyBcdFx0XHRcdFx0XHR9O1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbi8qKioqKiovIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbi8qKioqKiovIFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdHJldHVybiB7XG4vKioqKioqLyBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbi8qKioqKiovIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcbi8qKioqKiovIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4vKioqKioqLyBcdFx0XHR9O1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuLyoqKioqKi8gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4vKioqKioqLyBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbi8qKioqKiovIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG4vKioqKioqLyBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuLyoqKioqKi8gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuLyoqKioqKi8gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbi8qKioqKiovIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xuLyoqKioqKi8gXHRcdFx0Y29uc29sZS53YXJuKFxuLyoqKioqKi8gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuLyoqKioqKi8gXHRcdFx0KTtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbi8qKioqKiovIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbi8qKioqKiovIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbi8qKioqKiovIFx0XHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgcmVzdWx0O1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xuLyoqKioqKi8gXHRcdFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcbi8qKioqKiovIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuLyoqKioqKi8gXHRcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbi8qKioqKiovIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbi8qKioqKiovIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcbi8qKioqKiovIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbi8qKioqKiovIFx0XHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuLyoqKioqKi8gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0YnJlYWs7XG4vKioqKioqLyBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0YnJlYWs7XG4vKioqKioqLyBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0YnJlYWs7XG4vKioqKioqLyBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0YnJlYWs7XG4vKioqKioqLyBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRicmVhaztcbi8qKioqKiovIFx0XHRcdFx0XHRkZWZhdWx0OlxuLyoqKioqKi8gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuLyoqKioqKi8gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuLyoqKioqKi8gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAoXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0KVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4vKioqKioqLyBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cbi8qKioqKiovIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4vKioqKioqLyBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuLyoqKioqKi8gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XG4vKioqKioqLyBcdFx0XHRpZiAoXG4vKioqKioqLyBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4vKioqKioqLyBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkICYmXG4vKioqKioqLyBcdFx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcbi8qKioqKiovIFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZVxuLyoqKioqKi8gXHRcdFx0KSB7XG4vKioqKioqLyBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbi8qKioqKiovIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbi8qKioqKiovIFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcbi8qKioqKiovIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbi8qKioqKiovIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbi8qKioqKiovIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH0pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHR2YXIgaWR4O1xuLyoqKioqKi8gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuLyoqKioqKi8gXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4vKioqKioqLyBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuLyoqKioqKi8gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdFx0dmFyIGRhdGEgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbi8qKioqKiovIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4vKioqKioqLyBcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4vKioqKioqLyBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuLyoqKioqKi8gXHRcdFx0XHRjYihkYXRhKTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcbi8qKioqKiovIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG4vKioqKioqLyBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuLyoqKioqKi8gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuLyoqKioqKi8gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4vKioqKioqLyBcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuLyoqKioqKi8gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbi8qKioqKiovIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuLyoqKioqKi8gXHRcdHZhciBkZXBlbmRlbmN5O1xuLyoqKioqKi8gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbi8qKioqKiovIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoXG4vKioqKioqLyBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4vKioqKioqLyBcdFx0XHQpIHtcbi8qKioqKiovIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG4vKioqKioqLyBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4vKioqKioqLyBcdFx0Zm9yIChtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuLyoqKioqKi8gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcbi8qKioqKiovIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuLyoqKioqKi8gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbi8qKioqKiovIFx0XHRcdGlmIChcbi8qKioqKiovIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbi8qKioqKiovIFx0XHRcdCkge1xuLyoqKioqKi8gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcbi8qKioqKiovIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dHJ5IHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbi8qKioqKiovIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4vKioqKioqLyBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcbi8qKioqKiovIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4vKioqKioqLyBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbi8qKioqKiovIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbi8qKioqKiovIFx0XHRcdFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbi8qKioqKiovIFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0fSBlbHNlIHtcbi8qKioqKiovIFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuLyoqKioqKi8gXHRcdFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4vKioqKioqLyBcdFx0aWYgKGVycm9yKSB7XG4vKioqKioqLyBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbi8qKioqKiovIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbi8qKioqKiovIFx0XHR9KTtcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuLyoqKioqKi8gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuLyoqKioqKi8gXHRcdFx0Y2hpbGRyZW46IFtdXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBob3RDcmVhdGVSZXF1aXJlKFwiLi9zcmMvaWNvbnMuanNcIikoX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pY29ucy5qc1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi9zcmMvaWNvbnMuc2Nzc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi9zcmMvaWNvbnMuc2NzcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzICovIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbnZhciBnZXRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzICovIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IGdldFVybChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2ltYWdlcy9pY29ucy5wbmcgKi8gXCIuL3NyYy9pbWFnZXMvaWNvbnMucG5nXCIpKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaSwgXCIuaWNvbnMtY2wge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fICsgXCIpO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtbmUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtc2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtc3cge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtbncge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggMDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTItbi1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IDA7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0yLWUtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAwOyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1uZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLXNlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtc3cge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTEtdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1udyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXRyaWFuZ2xlLTItbi1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xNnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMi1lLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTE2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvdy0xLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93c3RvcC0xLW4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3N0b3AtMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC0zMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3dzdG9wLTEtcyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtMzJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93c3RvcC0xLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTMycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1uZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLWUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1zZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1zdyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1udyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtNDhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMi1uLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTItbmUtc3cge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTQ4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTItZS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0yLXNlLW53IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS1uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS1lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS1zIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS13IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC00OHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3dyZXR1cm50aGljay0xLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTY0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3JldHVybnRoaWNrLTEtZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC02NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZm9sZGVyLWNvbGxhcHNlZCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWZvbGRlci1vcGVuIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1kb2N1bWVudCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZG9jdW1lbnQtYiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbm90ZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbWFpbC1jbG9zZWQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLW1haWwtb3BlbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc3VpdGNhc2Uge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jb21tZW50IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGVyc29uIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcHJpbnQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10cmFzaCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWxvY2tlZCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtOTZweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXVubG9ja2VkIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC05NnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYm9va21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC10YWcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTk2cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1ob21lIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWZsYWcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jYWxjdWxhdG9yIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FydCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBlbmNpbCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNsb2NrIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZGlzayB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNhbGVuZGFyIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXpvb21pbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC16b29tb3V0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXNlYXJjaCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC13cmVuY2gge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtZ2VhciB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1oZWFydCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtMTEycHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zdGFyIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC0xMTJweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWxpbmsge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTExMnB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXBsdXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1wbHVzdGhpY2sge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1taW51cyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLW1pbnVzdGhpY2sge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1rZXkge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1saWdodGJ1bGIge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1zY2lzc29ycyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jbGlwYm9hcmQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTEyOHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtY29weSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jb250YWN0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWltYWdlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXZpZGVvIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXNjcmlwdCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1jbG9zZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xMjhweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNsb3NldGhpY2sge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTI4cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1hbGVydCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMTQ0cHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1pbmZvIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtbm90aWNlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtaGVscCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xNDRweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLWNoZWNrIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtYnVsbGV0IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcmFkaW8tb2ZmIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcmFkaW8tb24ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGluLXcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGluLXMge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTE0NHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtcGxheSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1wYXVzZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXNlZWstbmV4dCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXNlZWstcHJldiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXNlZWstZW5kIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTE2MHB4OyB9XFxuICAuaWNvbnMtY2wuaWNvbnMtY2wtc2Vlay1maXJzdCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXN0b3Age1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC1lamVjdCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTYwcHg7IH1cXG4gIC5pY29ucy1jbC5pY29ucy1jbC12b2x1bWUtb2ZmIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xNjBweDsgfVxcbiAgLmljb25zLWNsLmljb25zLWNsLXZvbHVtZS1vbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTYwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG5lZWRRdW90ZXMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuICB1cmwgPSB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBuZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IFtdO1xuICB2YXIgbmV3U3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjc3MgPSBpdGVtWzFdO1xuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfTtcblxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXJ0czogW3BhcnRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgIHZhciBqID0gMDtcblxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrO1xuXG4gICAgICBmb3IgKDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcmVmczogMSxcbiAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9ICB0cnVlID8gX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaWNvbnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaWNvbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gZXhwb3J0cyBwcm92aWRlZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfaWNvbnNfc2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9pY29ucy5zY3NzICovIFwiLi9zcmMvaWNvbnMuc2Nzc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfaWNvbnNfc2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9pY29uc19zY3NzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2ljb25zLnNjc3NcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pY29ucy5zY3NzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGNvbnRlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlciEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4vaWNvbnMuc2NzcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL3NyYy9pY29ucy5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzICovIFwiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuXG5pZiAodHJ1ZSkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICAvKiEgIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL2ljb25zLnNjc3MgKi8gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi9zcmMvaWNvbnMuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmV3Q29udGVudCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohICEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi9pY29ucy5zY3NzICovIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4vc3JjL2ljb25zLnNjc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyBcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2ltYWdlcy9pY29ucy5wbmdcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pbWFnZXMvaWNvbnMucG5nICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBUUFBQUFEd0NBTUFBQURZU1VyNUFBQUJTMmxVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NEtQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlRV1J2WW1VZ1dFMVFJRU52Y21VZ05TNDJMV014TkRJZ056a3VNVFl3T1RJMExDQXlNREUzTHpBM0x6RXpMVEF4T2pBMk9qTTVJQ0FnSUNBZ0lDQWlQZ29nUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0S0lDQThjbVJtT2tSbGMyTnlhWEIwYVc5dUlISmtaanBoWW05MWREMGlJaTgrQ2lBOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ284UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrbmh4Zzd3QUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBQUJjMUpIUWdDdXpoenBBQUFCRGxCTVZFVUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQnhVWVc5QUFBQVdYUlNUbE1BTDJaS0NFQmdHUkF6VUJxL0ltT2VSWStVUDIyZ25DQXB6QTB4QVN3V1ZTZVp3eE54Z0NNMFI4K3ZhRWdLaFJ3NFUrOEVIa3QvSDFwQ2dveW9vdjBrQWxFRElUSnF0YmpmWW9jR2tXODhzcTE4dnNhcnlMeXFwWm1LQzdBQUFBN21TVVJCVkhqYTdWMEpZOXUyRHFaY3k1UWNKMjZ6clpuanJrMXpyRTNYMS9iMTJIMXZiKysrVC96L1AvSkl5UklCOExKaVIzWmlmczRGVVFmeENTUUJrRktFU0VoSTJBSklrRHV1UDJ3NUF5dFhUMEpZZjRrWjBEdjNTd2l6UU5DZ0JQRDZrSEpkS3ZFV0FGdkZ3QVhZOGRXZnZab0V0MENiQU1uclE4cjVIYlFJNElmYkY3QjJsajB5WU5YZnJVS2czR1pRQkEwSVFnMWlzYk1NN3JUZUJzNHQySzRpdjhHMmhRVHZzRzBCZ1FyMGJ3RnVVZ0szTUdqQnpoMnNQaUJrZ3YzM0Fac2VCWGdUNm44VVNJNVFRa0pDUWtKQ1FzTEdQTUVOKzBIU2l0YUFPKzh5b0JBQUQvQmxwM3lBbFJCU1orK1ZFa2NGTEFLc0hmanVORnlVMWdVNEFUSVlQUFlhREZuMWQ5YzRVT3pJcU1qQTRTS1NBb1NLQU9pdmdZTXpCZVN2c1Z3bUh5Q0RmTWJTQjVzUGh5VmNaejVBeHByZ3RvWER0MzBVU0VoSVNFaElTRWpZb0tlMXVqTy8wdmxoc3dyWW9VOVFvU3NFU3REdCtqYWhFRGtiaExmWTZyRmlzSGVoaDRPdnpIMkJZQVVjcGVIcnU4NFFJc2dxdDA0R01RSkpoWUR0QVk0VDJ2VUJyNExndWw3bytuYTREREVDSUJodmc0anc2em84c0F0VmNMRTNlQWtDWVowd3lKL2JpRU1tRkd4QVRndGhqRHNPRDV0by9BcGQxSXUyY2NjYUlnaVhSODdJYmdkRWIwamtBaERzOTBCRW1uRC9vOEExSHg4ZkpoTVNFaElTRWhKMkZhc3ZTMTNSelpDTzFlaitVN3I4ME9oVVZlVHkzU3F3MUFYQzhUd3NVUUZVTHZEazFCSmVuZDRaQXFHTGEzby9saUlJWHQ4UjMzSUZJdW1IUUVhaW5sZzBGTm0xZFN4MmwwRUNJbXZEM1dZV1lpRElud1NJbVpjcklRUThIQVljelFZc3lBcUhIZEc0OWNpR1dLSUM3bEozZEF3UWlPZkJZUVArd3kwQ3JCclkxYVBsdkluRkNYQlh3SHNMbHlvR0NNYlA0UzVDdUdib2d4WkVtZ0JySXRFbTRHN2wwcnVIdEplODJBb0Uyb2pEd0ZnVEY5WU1mWVFBR2NrSHlIQWZBTzUrTlhTUHdzWGhzY1RSaHVQakxzRFN3eHhzZlQ1QVFsb2hrWkNRa0pDUUlEcEVvR3NkaHNNRE16Z2o2TFhxQjUwbThOZDhkZWw2MmgxSGY4NGpKSVE5eHk0WkZEWlhCUTZGSVZTK092MnU1K2VCNkJKNk9oeGl0OVExRzI3eEIvUllDUEt6VmdiQVprRHc5eHVJd1BzQlhQa01PbDh0bHBoK0ZjQ09CZC9oYXllZ0NUZDlCRWlJaE0vTzZldGd1V3QyR3J3VzRkd1oxa2lCZE5UUWZpSUUvSGM4TnQ5c0owUkVyQSt3Q09CTll1M2huZW5VZERMQmlzN284LzJPY244VGQ1aEU4QkdpSlRyRjZ4Z1lhVVpIaHZJQjhlZzF0Z2dvbG44STU0K1NuNU9Ra0pDUWtMQlZLRzc0UU9ad095QTBYY1c5NGF2b3YwMVRBYzVwRnVwOUZkSFpRQ2hFUjI5UGJxc0Z0UEdXb2FlQUFnVkROTDRyb0xZQXdBU0dIem1BclpxdEF2ZnliVnl1OUNmUkdkQUF2bTRETk53VGJEb2MwT3ZpdG9zQWdFaDF0REtGSTlZREs1UGhqUTN4TnRrMk1YbHpMTURhbjY3WXFBbnlXQUJmcjlEUXZWWHpvZUUrSUhSN20raThNRmJDK3dCd1d0eDJqWUxCVWNEWjVkTUJBb0xMeElJdnA3Z2hma0QwQk1YeSs4cGJHUDEzMFQ4aElTRWhZYmRRYWoraFhINy9OME9GTjMzVmJxd3FOeG1IOXZneTRybkI0OXBWS2tQNjQrSXl6TWNia1FGazRnMDdBVHBpWDRuN3dpUHpRdkZvQVhaQW94S2M1L2tZT1h2VjMyUEwxUjM0bjZZZUxUUWNFWDNiR25QWm10bmFYNVEzdFI1bU1CeENObVJ1R3Zpak4zdnFranAyQTljVjJ5QXR6L09pQmlOa1FnaEFESUEyMFNGd0N4aTFudlNlUXV0S1EyTUJ2dm51K25UbWhFTVlucDM5REppQTJXd1dmZ0pEQURnRkp3SDdoRURRcXFNTmloQ0pDYWtyU0FrLzF2QlpBSXdCL2RJWFh2UUJnQ3BJYW54Y0hYNXNDRGo3YWY4dmhJQ0hEeDlheStQOU10dkFDZEQ2ZjRFSm9DWUZTbit3S1NwUTJnOGVhbmd0WUUrckR1TTlrd2NvSy90dkNkRG5SeW0yK25UbWhLb0pQSCtPbThCTXFGdWdmcllIbE5YbmlnUm8vUis5KzhKUGdHUWIxQllwOXlRS1llRG82TWpmQjhDZVlrRHBqd21vdmxvQ3FrNFFFZkJXSC8zMmJiUGhyTzRFejd4dDNrR0FzSitub0FSOGp2TVRnOUVqOVRQM0VXQTlvdkp4QlhUQms1TVRNQ1pxV1VDNU54NnJINllKVkxLZmdKTWFpdzB5ZzUreWJBNlpKQVNVcUJmOGRmWEIrZzQ1QVVOR0FCQUxHQmo5QXdTMHAvdW9Bak81NGRCbkFlVmVoUkk4TXVnK2RneWtUV1paT3dwa3pmVXpyd1hZQk1TYUFDNnYrOEJjV0FTVTlIck1ENEF2WTM3QWtzTmdYWjhCemNHVVp1Z0dXK0ZJcHpmQ2w3YzNjQUlxQnZKMU9ucmxxRUo1OVZNdzEyV3BQTzRLTmQ1ZnEvNEpDUWtKQ1Z1T0Z5L0M1UVVFODlyMWYzNktaajNhWWZCSk5Vdzl3UmtISEdNUEZ2S0FoV2Y3Uzh0Qy9JSFZKdytPYXlyYU9tYWIxTENOOVM5THc4QkVlNUVYMlJnRk82cktnOGRnL0d4UDFnUHBMeEFENm1BTk50TkVQWnRNdTRKTHkvWDlhRFhJdFROWHRHTjdvYmtkNEh0NkNuREs5TmVPMHBIUlgvdm1iZlFyM1k0WUN1ZmhOK3B6aml0VXF2dGNvdjNKM0tEMStQdS94YVg0SjQ1dk15VmtSQlpVUGg0ZUkxblhmelR5VlJBV3pqNVFnME1XcHlvN0tvenJXR2NzMnVqS0pvQ0Z3eUJldmIzNzh0M2JNYjcvWTFHS1pRbjREL3hXZmY2QkZkU3VQNU54OEtGaTQySEdmVjlBTFJpdlVHSFhlOUdJcUIrWXdQbEljVkFMajV1TXpXTWZBWXRlQUZuQU9md2RYZ0RXSDZYczRoYndML0dMK0o5SktaMHdDemhoRm5EQ0xHQkVZZy9WQXVwT3FvMXYyZlcrcXFXdjJncFd3VHlPSFVEM0FXaTFmSlNBVjI4Ly8xaDkzUG92UEhWTVFBRlYxcW1SL3d0ZnE4L2YwSW9KMHNZcitXY21vL0txL1NwODdDR2dpZTRLMmtTby9RUjZlUmlPeFJHSkZ4a0JKV09ZNmQrdWlLQUVJUG16WHg1T0h2NzF3NFc4QnpRcEdwTkg5TzdaVFdBaFkvSDAxTWphOXR0OHA1TUFheFJVNXlnQ1M5cDVrdnZKb3NKUE1BSFdlZ09UY0ZMTm5aMHVMQXVtdngzQUYyVE4ydDF2VmZjMytQWnVTNEJxLzBYZ2VFdlJnZFdKc2tkOGVKS2YrUUU4N2MxazF4dGdRdktJNjgrSFFWRXY2akxGMVl6QW8xejRMSWdodTRtdVh0NGh3Q2MrVUVKQ1FrTENCakRHaVdudHlzR0p0YzhENnFsY0l6SThEZUh6ZGE1KytnS202dWNVRDgwWGVHcmlDL2poaCsrK2d3OVJkYzYxL2hYVUgvTjM4T29WdkpzVFQ3UVVQTjNRNUJ0YW1XOFlNOGNINlQ4WmoxOFRCanE5N3Q4ZWFOVzVNaFJ0Z21KZ3lyM3hJK041L1Vyamo4WVZuWTdWQ1VaV2NFT2lVOGM2VkRxWGEvWlJybU9wZ2gwek9WZ1htT0JLTzhaVGVBMXJJMEM3V3VnSXJYdjFUUTNBRVBEOWp3OGUvUGk5cWM5WVFEN0NNenVjQUxKa0JLcGtGRnJ3VUlnNlZWRVlYN3ZVK1JoRXdFczlWNGN2T05Xcyt3aUlyS2UzcDdJeW9HMXFXc2xUSHJ5MEZhcHNmYjg5L0o1ZW5JSGNWUml5QlJuMCtHb2VGTzBBT3ZCVThaekFGakFZNFBYcTJYeXV3MHREZ05KZmpQMFpJRWZHeFJYdVV4UEg3dWFVNlYrUzZjbXZZVjhCN2lHL2xod1B4MkVDenRTZlovcXJLYjZvSmwrUGtBV3c2UFhseTcyWGM3aG9UL2hhMTI2eVBnSzRCWHhUeWFkVWY2TmdOcTF3UkE4M2hLbGJlbng4VEFnZ2JmNUk0VFAxeFJZOFRMMTl3SHl1R3dEdUJGK1B4NU0xZG9Lc0QvaG0wUWVjbWd4Y1RzTFJ1YTd2a1RsOGVnNFhpQUY5b2pQVTdUWEptMGEvano1YWZERUQ4ZllCNDNJK244TWNBc1BndWtlQlU1MllOZlhob2R0ME1QZ0tYU3hYWDRWaEFLd3dYZis1MzJ6Z3cyQmxFUlU4ZlFDTU5UQUI3cG1BTmZvQnAxVnF1dkNrRC9nalpzcGFYaGU2cDN6UWxQNytsYVN2ZFJGVnI3R1FocVZPNlpWRGNWVS9ZUE00T3p3OHd4WjBycmtxSGhTZWhJKzljakloSVNGaHRlZ1VyNDYrODRIdVlqNjRzMFA2UHdONDFncnZONzN1K3p1ai8zT3Q3dlBtL2tNejB3VEdCbVl3d3dmOHpyWFFibjByejJZVi83TStEVUE1bW8wSjNEY0UzUGM1UWk0L0lqZVVXRk1QZkFPWFlhYkg5Rm53L05kckFQcWF6M2xzRTNyZGQ4RTM1TVlvSWdzM3RmeDArSlRPemdZZWdPaWxCOUFoOUROeWNWcUhBWjRZcS9XZkVOdlA4ZXBqZStudXFCaGgvWjZxSDAvSkRyTU5FcEEzOXp2M0U1Q3pKZzl3V2VDeW5Nd20yd1FVeEdTcWhlWkRFazRUQWtxWXpXYjllYnBHWVQ4QjlqRUZzWDNTS2E1c0FmMTJncFVCMUEvTlZEb2NHZ0lPdlJaZ1cxRHViL0tkKzRCK296WGU2ZDAxNGwxdkowakVuQStLSzQ4Q3ZiNWZiMllVcm10dzBJZ0hJdEFIZUViQXRkMldUZnBGNyttMExOeDdiNU4xU0c5WVRFaElTRWpZSWVRUUVxOTkwSjNrd3ZKenJ0VVZmZnpZY3FjRFloL2VNS1dBRUZDVkZYaUhmRkxvSDBENWExOHdVSWZPcHR5T3JITG1PK2RXTVZRelpIM0dnNFFDU2tCZDF0YTV1ajFLUGI0RElRQ1gyd1M0bnZTMVJlaVhBTHdZbUJOUXBUOFdsYXgrVGF6NThRa2hZQkxNOFBnMEppTDBUVUNQRnJBVUFUMWJRTDk5Z0N1bHNORStvT2RSd001M2JIZ1UySGsvSUNFaElTRmh0d0U3L1J4VjhXY0JuMzVXRUVmbFlvZmVrNnVmSTRWUGMvUThRNWJmY3p4QTBmZ20vUDBIWGVXdHd4VCtwQWdRYUhXeVptVmlNV0M5VEw2OG1yeDlCbkFweEtlNXVNUlBXMCtQVkVSTG42ODFpZ3lQaCtxclhiNE54M1E5dTVhQnlrUDlHVzZwZTFzdTFzMWZtRHVValVDdnRqLzNFRkM5R2szdXlmWnRleUNsM3RESWUvcGozcitueTlVV3VRZGJiQUVLbC9pTzYzNWhDbFQ5bG9BUGE3UW0zbEhlT2t5cU1YQ0UxcnlvWUhRTVIyTVBBYmV1RTh3QUxpOHVjYmRmcHlOeW9PcmYzZ2cxZTZidXo3Tk1KQ1FrSkNUc0l2anpBVEdaTDZMcUtuZTkzcXB5RFB6NWdKak1sOUYxbGJ0ZWIxVTVldi9OT3NFN3k4aDhJV1ZYdWV2MVZwV2o0TThIM0RjbmFPUUQ3UnNlTE9URDlsMXA5VkxhUTdNL2tvVzMvTDRwdisrOXZvQmcrYXpPMnVCeXdlc3Y4UE1Pd1d3WVd4ek5sODVXdnc0TzhPeHdiSCs3M05yZlRKRzd5dkhzbWZzM2tQcUlUejc1Uk5ENlZFOGtMMHNBK2NNaDY5Wjd3Q29zSUxDL3NCUUs3ODhJaU5ZSHZ6N2VKYzlyL2RkSHdBaTlnODVCZ090M0Y0V2kxM2RZU01nQzlOdEc1dENCZ0hnVDBHL2Y2bUxpc1NZQ01RS0RUVXE0TEFydlA2LzFYNDRBL255QW8xTnJPc0ZEYnljRlhQWjNxczVPa2wrZmQ3SzB2T0hISitzMlFKOTNDS0h2WVd6VlliU3JIRWZmanN5cWpsUlhPWTYrWGRsVlhlbXVja0pDUWtKQ1FrSXNIQUM0Tm5uN0NhQnZhNHZMdDVBQUNCTlFmVWdFSFNaQWdMaFpCRlQvbmkwZ000SkFrTVhVdGd3aVdVRHFBMjRTQWJzK0NpUWtKQ1FrSkNTc0cvTG1lQUxSVlpCUWRsL29LdG4vQjlycWV5WGt5Z1R3KzMyVDlGK0hCWEI5YjVUKzFBS3E1ZTNWeDBPQTYvOE42UDI1L3JlMkR5Z2JVUDJscGIvY0dRdW85Nys1K3E5cUFUZGUvMVZIQVkvK3Urb0hHUDF2a1IvUWlVMXB2aE1TdGh6L0IvaDFPV2l5TXBzd0FBQUFBRWxGVGtTdVFtQ0NcIlxuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KVtcImRlZmF1bHRcIl07XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWljb25zLmpzLm1hcCIsIi8qKlxyXG4gKiBWYXJpb3VzIGludGVyZmFjZSBvcHRpb25zIHdlIGNhbiBzZWxlY3RcclxuICovXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIG9wdGlvbnMuXHJcbiAqIEBwYXJhbSBvcHRpb25zIFVzZXIgcHJvdmlkZWQgb3B0aW9ucyB0aGF0IG92ZXJyaWRlIHRoZSBkZWZhdWx0IHZhbHVlcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG52YXIgT3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zID8gb3B0aW9ucyA6IHt9O1xyXG5cclxuICAgIC8vLyBPcHRpb25zOiB2ZXJ0aWNhbCwgaG9yaXpvbnRhbCwgYm90aFxyXG4gICAgdGhpcy5yZXNpemUgPSAndmVydGljYWwnO1xyXG5cclxuICAgIC8vLyBUaGUgcmVzaXppbmcgaGFuZGxlXHJcbiAgICB0aGlzLmhhbmRsZSA9ICdiYXInO1xyXG5cclxuICAgIC8vLyBSYW5nZSBmb3IgZ3JhYmluZ1xyXG4gICAgdGhpcy5ncmFiU2l6ZSA9IDEwO1xyXG5cclxuICAgIGZvcih2YXIgcHJvcGVydHkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIGlmKG9wdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb24gXCIgKyBwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBvcHRpb25zW3Byb3BlcnR5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wdGlvbnM7XHJcbiIsImltcG9ydCBSZXNpemVyIGZyb20gJy4vcmVzaXplci5qcyc7XHJcblxyXG5leHBvcnQge1Jlc2l6ZXIgYXMgZGVmYXVsdH07XHJcbiIsIlxyXG5mdW5jdGlvbiBSZXNpemVyQWN0dWFsKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncmVzaXplcicpO1xyXG5cclxuICAgIGxldCBncmFiU2l6ZSA9IG9wdGlvbnMuZ3JhYlNpemU7XHJcblxyXG4gICAgbGV0IGhhbmRsZSA9IG9wdGlvbnMuaGFuZGxlO1xyXG4gICAgaWYoaGFuZGxlID09PSAnYmFyJykge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVzaXplID0gJ25vbmUnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyQm90dG9tID0gZ3JhYlNpemUgKyAncHggc29saWQgIzE4NDUzQic7XHJcbiAgICB9IGVsc2UgaWYoaGFuZGxlID09PSAnaGFuZGxlJykge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVzaXplID0gJ3ZlcnRpY2FsJztcclxuICAgIH0gZWxzZSBpZihoYW5kbGUgPT09ICdub25lJykge1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZXNpemUgPSAnbm9uZSc7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3JkZXJCb3R0b20gPSBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIE1vdXNlIG1vdmUgZXZlbnQgaGFuZGxlclxyXG4gICAgbGV0IGluc3RhbGxlZE1vdmVMaXN0ZW5lciA9IG51bGw7XHJcbiAgICBsZXQgbWFzayA9IG51bGw7XHJcblxyXG4gICAgLy8vIEdldCB0aGUgbWluaW11bSBoZWlnaHQgYW5kIHdpZHRoIHByb3BlcnRpZXNcclxuICAgIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHZhciBoZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgIHZhciB3aWR0aCA9IHJlY3Qud2lkdGg7XHJcblxyXG4gICAgbGV0IG1pbkhlaWdodCA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkubWluSGVpZ2h0O1xyXG4gICAgbWluSGVpZ2h0ID0gbWluSGVpZ2h0LnN1YnN0cigwLCBtaW5IZWlnaHQubGVuZ3RoIC0gMik7XHJcbiAgICBsZXQgbWluV2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLm1pbldpZHRoO1xyXG4gICAgbWluV2lkdGggPSBtaW5XaWR0aC5zdWJzdHIoMCwgbWluV2lkdGgubGVuZ3RoIC0gMik7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gSW5zdGFsbCB0aGUgbW91c2UgZG93biBsaXN0ZW5lclxyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duTGlzdGVuZXIpO1xyXG5cclxuICAgICAgICAvLyBJbnN0YWxsIHRoZSBjdXJzb3IgbGlzdGVuZXJcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGN1cnNvckxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaW5pdGlhbFgsIGluaXRpYWxZO1xyXG4gICAgbGV0IGluaXRpYWxXaWR0aCwgaW5pdGlhbEhlaWdodDtcclxuICAgIGxldCBncmFiVHlwZSA9IG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VEb3duTGlzdGVuZXIoZSkge1xyXG4gICAgICAgIGdyYWJUeXBlID0gb25IYW5kbGUoZS5wYWdlWCwgZS5wYWdlWSk7XHJcbiAgICAgICAgaWYoZ3JhYlR5cGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaW5pdGlhbFggPSBlLnBhZ2VYO1xyXG4gICAgICAgICAgICBpbml0aWFsWSA9IGUucGFnZVk7XHJcbiAgICAgICAgICAgIGxldCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgaW5pdGlhbFdpZHRoID0gcmVjdC53aWR0aDtcclxuICAgICAgICAgICAgaW5pdGlhbEhlaWdodCA9IHJlY3QuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgaW5zdGFsbEhhbmRsZXJzKCk7XHJcbiAgICAgICAgICAgIGluc3RhbGxNYXNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlTW92ZUxpc3RlbmVyKGUpIHtcclxuICAgICAgICBpZihlLmJ1dHRvbnMgIT09IDEpIHtcclxuICAgICAgICAgICAgcmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkeCA9IGUucGFnZVggLSBpbml0aWFsWDtcclxuICAgICAgICBsZXQgZHkgPSBlLnBhZ2VZIC0gaW5pdGlhbFk7XHJcblxyXG4gICAgICAgIGlmKGdyYWJUeXBlID09PSAnaG9yaXpvbnRhbCcgfHwgZ3JhYlR5cGUgPT09ICdib3RoJykge1xyXG4gICAgICAgICAgICAvLyBDb21wdXRlIGEgZGVzaXJlZCBuZXcgd2lkdGhcclxuICAgICAgICAgICAgbGV0IG5ld1dpZHRoID0gaW5pdGlhbFdpZHRoICsgZHg7XHJcbiAgICAgICAgICAgIGlmIChuZXdXaWR0aCA8IG1pbldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IG1pbldpZHRoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgaXRcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcnICsgbmV3V2lkdGggKyAncHgnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoZ3JhYlR5cGUgPT09ICd2ZXJ0aWNhbCcgfHwgZ3JhYlR5cGUgPT09ICdib3RoJykge1xyXG4gICAgICAgICAgICAvLyBDb21wdXRlIGEgZGVzaXJlZCBuZXcgaGVpZ2h0XHJcbiAgICAgICAgICAgIGxldCBuZXdIZWlnaHQgPSBpbml0aWFsSGVpZ2h0ICsgZHk7XHJcbiAgICAgICAgICAgIGlmIChuZXdIZWlnaHQgPCBtaW5IZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IG1pbkhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2V0IGl0XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJycgKyBuZXdIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZVVwTGlzdGVuZXIoZSkge1xyXG4gICAgICAgIHJlbW92ZUFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluc3RhbGxIYW5kbGVycygpIHtcclxuICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG5cclxuICAgICAgICBpbnN0YWxsZWRNb3ZlTGlzdGVuZXIgPSBtb3VzZU1vdmVMaXN0ZW5lcjtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBpbnN0YWxsZWRNb3ZlTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluc3RhbGxNYXNrKCkge1xyXG4gICAgICAgIC8vIEVuc3VyZSBub25lIGN1cnJlbnRseSBleGlzdHNcclxuICAgICAgICByZW1vdmVNYXNrKCk7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgbWFzay5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgbWFzay5zdHlsZS5sZWZ0ID0gMDtcclxuICAgICAgICBtYXNrLnN0eWxlLnRvcCA9IDA7XHJcbiAgICAgICAgbWFzay5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIG1hc2suc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgIG1hc2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICBtYXNrLnN0eWxlLnpJbmRleCA9IDEwMDAwO1xyXG4gICAgICAgIG1hc2suc3R5bGUub3BhY2l0eSA9IDAuNTtcclxuXHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtYXNrKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVBbGwoKSB7XHJcbiAgICAgICAgcmVtb3ZlSGFuZGxlcnMoKTtcclxuICAgICAgICByZW1vdmVNYXNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgaWYoaW5zdGFsbGVkTW92ZUxpc3RlbmVyID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGluc3RhbGxlZE1vdmVMaXN0ZW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBMaXN0ZW5lcik7XHJcbiAgICAgICAgaW5zdGFsbGVkTW92ZUxpc3RlbmVyID0gbnVsbDtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZU1hc2soKSB7XHJcbiAgICAgICAgaWYobWFzayAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChtYXNrKTtcclxuICAgICAgICAgICAgbWFzayA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lIGlmIGFuIHgseSBsb2NhdGlvbiBpcyBvdmVyIGEgaGFuZGxlIGZvciBtYW5pcHVsYXRpbmdcclxuICAgICAqIHRoZSByZXNpemVhYmxlIG9iamVjdC5cclxuICAgICAqIEBwYXJhbSB4IGxvY2F0aW9uIGluIHBpeGVsc1xyXG4gICAgICogQHBhcmFtIHkgbG9jYXRpb24gaW4gcGl4ZWxzXHJcbiAgICAgKiBAcmV0dXJucyBudWxsIGlmIG5vdCwgJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnYm90aCcgaWYgb3ZlciBoYW5kbGUgYW5kIG1vZGUgYXZhaWxhYmxlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBvbkhhbmRsZSh4LCB5KSB7XHJcbiAgICAgICAgbGV0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICBsZXQgYm90dG9tID0gcmVjdC5ib3R0b20gKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgbGV0IHZlcnQgPSB5ID49IGJvdHRvbSAtIGdyYWJTaXplO1xyXG5cclxuICAgICAgICBsZXQgcmlnaHQgPSByZWN0LnJpZ2h0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG4gICAgICAgIGxldCBob3J6ID0geCA+PSByaWdodCAtIGdyYWJTaXplO1xyXG5cclxuICAgICAgICBpZihvcHRpb25zLnJlc2l6ZSA9PT0gJ2JvdGgnKSB7XHJcbiAgICAgICAgICAgIGlmKHZlcnQgJiYgaG9yeikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdib3RoJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih2ZXJ0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoaG9yeikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdob3Jpem9udGFsJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoKG9wdGlvbnMucmVzaXplID09PSAnYm90aCcgfHwgb3B0aW9ucy5yZXNpemUgPT09ICd2ZXJ0aWNhbCcpICYmIHZlcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZigob3B0aW9ucy5yZXNpemUgPT09ICdib3RoJyB8fCBvcHRpb25zLnJlc2l6ZSA9PT0gJ2hvcml6b250YWwnKSAmJiBob3J6KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGxldCBjdXJzb3IgPSAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIGN1cnNvckxpc3RlbmVyKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gU3dhcCB0aGUgY3Vyc29yIHdoZW4gd2UgYXJlIG92ZXIgdGhlIGhhbmRsZVxyXG4gICAgICAgIGlmIChvbkhhbmRsZShldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJzb3IgIT09IDIpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yID0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJzb3IgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ3RleHQnO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNpemVyQWN0dWFsO1xyXG4iLCIvKipcclxuICogVmVydGljYWwgcmVzaXplIHN1cHBvcnQgZm9yIGRpdiwgdGV4dGFyZWEsIGlmcmFtZSwgZXRjLlxyXG4gKlxyXG4gKiBBIHByb2JsZW0gd2l0aCB0aGUgcmVzaXplIGZlYXR1cmUgb2YgdGV4dGFyZWEgYW5kIGlmcmFtZSBpcyB0aGF0IGl0IGRvZXMgbm90IHdvcmsgaW4gYWxsXHJcbiAqIGJyb3dzZXJzIChlc3BlY2lhbGx5IEVkZ2UpIGFuZCBpcyBvZnRlbiBxdWl0ZSBxdWlya3kuIFRoaXMgc21hbGwgcGFja2FnZSBhbGxvd3MgeW91IHRvXHJcbiAqIGFkZCB2ZXJ0aWNhbCByZXNpemUgYWJpbGl0eSB0byBqdXN0IGFib3V0IGFueXRoaW5nLlxyXG4gKlxyXG4gKi9cclxuXHJcbmltcG9ydCBSZXNpemVyQWN0dWFsIGZyb20gJy4vcmVzaXplci1hY3R1YWwuanMnO1xyXG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL09wdGlvbnMuanMnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDb25zdHJ1Y3RvciBmb3IgYSBSZXNpemVyIG9iamVjdFxyXG4gKiBAcGFyYW0gc2VsIFNlbGVjdG9yIG9yIERPTSBlbGVtZW50XHJcbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgb2JqZWN0LlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIFJlc2l6ZXIoc2VsLCBvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gbmV3IE9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG4gICAgaWYodHlwZW9mIHNlbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBuZXcgUmVzaXplckFjdHVhbChlbGVtZW50c1tpXSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmKHNlbC5ub2RlVHlwZSkge1xyXG4gICAgICAgIG5ldyBSZXNpemVyQWN0dWFsKHNlbCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2l6ZXI7XHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBNaWRkbGUgc2VjdGlvbiBvZiBkaWFsb2cgYm94XHJcbiAqL1xyXG5cclxuaW1wb3J0IFRvb2xzIGZyb20gJy4vRE9NL1Rvb2xzLmpzJztcclxuXHJcblxyXG5sZXQgQm9keSA9IGZ1bmN0aW9uKGRpYWxvZywgcGFyZW50RGl2KSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGRpYWxvZy5vcHRpb25zO1xyXG5cclxuICAgIGxldCBkaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdkaWFsb2ctY2wtYm9keScsIG9wdGlvbnMuY29udGVudCk7XHJcbiAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICB0aGlzLmRpdiA9IGRpdjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvZHk7XHJcblxyXG4iLCJpbXBvcnQgVG9vbHMgZnJvbSAnLi9ET00vVG9vbHMnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBib3R0b20gYnV0dG9ucyBzZWN0aW9uIG9mIHRoZSBkaWFsb2cgYm94XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxubGV0IEJvdHRvbSA9IGZ1bmN0aW9uKGRpYWxvZywgcGFyZW50RGl2KSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGRpYWxvZy5vcHRpb25zO1xyXG5cclxuICAgIGxldCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGxldCBodG1sID0gYDxidXR0b24gY2xhc3M9XCJjbC1kaWFsb2ctYnRuXCI+T2s8L2J1dHRvbj48YnV0dG9uIGNsYXNzPVwiY2wtZGlhbG9nLWJ0blwiPkNhbmNlbDwvYnV0dG9uPmA7XHJcbiAgICAgICAgbGV0IGRpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2NsLWRpYWxvZy1ib3R0b20nKTtcclxuICAgICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy5idXR0b25zID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGFkZE9rKGRpdik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5idXR0b25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGFkZEJ1dHRvbihkaXYsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkT2soZGl2LCBpdGVtKSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdPayc7XHJcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYoaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uY2xpY2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGljayhkaWFsb2cpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbi5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRCdXR0b24oZGl2LCBpdGVtKSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGl0ZW0uY29udGVudHM7XHJcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYoaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uY2xpY2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGljayhkaWFsb2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpdGVtLmNsYXNzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoaXRlbS5jbGFzcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpdGVtLmZvY3VzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCk7XHJcblxyXG4gICAgdGhpcy5kZWZhdWx0ID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIG9wdGlvbnMuYnV0dG9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHQgICAgaWYoaXRlbS5kZWZhdWx0ID09PSB0cnVlICYmIGl0ZW0uY2xpY2sgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHQgICAgaXRlbS5jbGljayhkaWFsb2cpO1xyXG4gICAgICAgICAgICB9XHJcblx0ICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3R0b207XHJcblxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogQ29udmVuaWVuY2UgZnVuY3Rpb25zIGZvciB0aGUgRE9NLlxyXG4gKiBUb29scyB0aGF0IGF2b2lkIGhhdmluZyB0byBoYXZlIGpRdWVyeSBpbnN0YWxsZWQuXHJcbiAqL1xyXG5cclxubGV0IFRvb2xzID0gZnVuY3Rpb24oKSB7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQWRkIGEgY2xhc3MgdG8gYW4gZWxlbWVudFxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGFkZCB0b1xyXG4gKiBAcGFyYW0gY2xhc3NOYW1lIENsYXNzIHRvIGFkZFxyXG4gKi9cclxuVG9vbHMuYWRkQ2xhc3MgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdClcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIGVsc2VcclxuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XHJcbn1cclxuXHJcblRvb2xzLmFkZENsYXNzZXMgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzc2VzKSB7XHJcbiAgICBpZihjbGFzc2VzID09PSB1bmRlZmluZWQgfHwgY2xhc3NlcyA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaCgoY2xzKSA9PiB7XHJcbiAgICAgICAgVG9vbHMuYWRkQ2xhc3MoZWxlbWVudCwgY2xzKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgRElWIHdpdGggYSBwcm92aWRlZCBjbGFzcyBuYW1lLlxyXG4gKiBAcGFyYW0gY2xhc3NOYW1lIENsYXNzIHRvIGFkZCB0byB0aGUgZGl2XHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGRpdi4gSFRNTCBvciBFbGVtZW50XHJcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBDcmVhdGVkIERPTSBFbGVtZW50XHJcbiAqL1xyXG5Ub29scy5jcmVhdGVDbGFzc2VkRGl2ID0gZnVuY3Rpb24oY2xhc3NOYW1lLCBjb250ZW50KSB7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBUb29scy5hZGRDbGFzcyhkaXYsIGNsYXNzTmFtZSk7XHJcbiAgICBUb29scy5hZGRDb250ZW50KGRpdiwgY29udGVudCk7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG4vKipcclxuICogQWRkIGNvbnRlbnQgdG8gYW4gZWxlbWVudC5cclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0byBhZGQgdG9cclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudC4gQ2FuIGJlIEhUTUwgb3IgYW4gRWxlbWVudC5cclxuICovXHJcblRvb2xzLmFkZENvbnRlbnQgPSBmdW5jdGlvbihlbGVtZW50LCBjb250ZW50KSB7XHJcbiAgICBpZihUb29scy5pc1N0cmluZyhjb250ZW50KSkge1xyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XHJcbiAgICB9IGVsc2UgaWYoVG9vbHMuaXNFbGVtZW50KGNvbnRlbnQpKSB7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuVG9vbHMuaXNTdHJpbmcgPSBmdW5jdGlvbih2YWwpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCAoKCEhdmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpO1xyXG59XHJcblxyXG5Ub29scy5pc0VsZW1lbnQgPSBmdW5jdGlvbih2YWwpIHtcclxuICAgIHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwgJiYgdmFsLm5vZGVWYWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29scztcclxuXHJcbiIsImltcG9ydCBPcHRpb25zIGZyb20gJy4vT3B0aW9ucy5qcyc7XHJcbmltcG9ydCBUaXRsZUJhciBmcm9tICcuL1RpdGxlQmFyLmpzJztcclxuaW1wb3J0IEJvZHkgZnJvbSAnLi9Cb2R5LmpzJztcclxuaW1wb3J0IEJvdHRvbSBmcm9tICcuL0JvdHRvbS5qcyc7XHJcbmltcG9ydCBUb29scyBmcm9tICcuL0RPTS9Ub29scy5qcyc7XHJcbmltcG9ydCBSZXNpemVyIGZyb20gJ3Jlc2l6ZXItY2wnO1xyXG5pbXBvcnQgTWFzayBmcm9tICcuL01hc2suanMnO1xyXG5cclxuLyoqXHJcbiAqIEZsZXhpYmxlIGFuZCBjb25maWd1cmFibGUgZGlhbG9nIGJveCBvYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5sZXQgRGlhbG9nID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IG5ldyBPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHJcbiAgICBsZXQgYm9keSA9IG51bGwsIG1hc2sgPSBudWxsLCBib3R0b20gPSBudWxsO1xyXG5cclxuICAgIGxldCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIERpYWxvZy56SW5kZXggKz0gMjtcclxuICAgICAgICB0aGlzLnpJbmRleCA9IERpYWxvZy56SW5kZXg7XHJcblxyXG4gICAgICAgIGxldCBkaXYgPSBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdkaWFsb2ctY2wnKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzc2VzKGRpdiwgb3B0aW9ucy5hZGRDbGFzcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZGl2ID0gZGl2O1xyXG4gICAgICAgIGRpdi5zdHlsZS56SW5kZXggPSB0aGlzLnpJbmRleDtcclxuXHJcbiAgICAgICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgaW5zdGFsbFJlc2l6YWJsZShkaXYpO1xyXG5cclxuICAgICAgICBuZXcgVGl0bGVCYXIodGhpcywgZGl2KTtcclxuICAgICAgICBib2R5ID0gbmV3IEJvZHkodGhpcywgZGl2KTtcclxuICAgICAgICBpZihvcHRpb25zLmJ1dHRvbnMgIT09IGZhbHNlKSB7XHJcblx0ICAgICAgICBib3R0b20gPSBuZXcgQm90dG9tKHRoaXMsIGRpdik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hc2sgPSBuZXcgTWFzayh0aGlzKTtcclxuXHJcbiAgICAgICAgcGxhY2UoZGl2LCBwYXJlbnQpO1xyXG5cclxuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaW5zdGFsbFJlc2l6YWJsZSA9IChkaXYpID0+IHtcclxuICAgICAgICBpZihvcHRpb25zLnJlc2l6ZSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIGxldCByc09wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAncmVzaXplJzogb3B0aW9ucy5yZXNpemUsXHJcbiAgICAgICAgICAgICAgICAnaGFuZGxlJzogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgJ2dyYWJTaXplJzogb3B0aW9ucy5ncmFiU2l6ZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbmV3IFJlc2l6ZXIoZGl2LCByc09wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gdG9QeCh2YWwpIHtcclxuICAgICAgICByZXR1cm4gJycgKyB2YWwgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwbGFjZSA9IChkaXYsIHBhcmVudCkgPT4ge1xyXG4gICAgICAgIC8vbGV0IHBhcmVudFdpZCA9IHBhcmVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAvL2xldCBwYXJlbnRIaXQgPSBwYXJlbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGxldCBwYXJlbnRXaWQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICBsZXQgcGFyZW50SGl0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgICAgICBsZXQgaGVpZ2h0ID0gZGl2Lm9mZnNldEhlaWdodDtcclxuICAgICAgICBsZXQgd2lkdGggPSBkaXYub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICAgIGxldCB0b3AgPSBwYXJlbnRIaXQvMiAtIGhlaWdodC8yO1xyXG4gICAgICAgIGlmKHRvcCA8IDEwKSB7XHJcbiAgICAgICAgICAgIHRvcCA9IDEwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxlZnQgPSBwYXJlbnRXaWQvMiAtIHdpZHRoLzI7XHJcbiAgICAgICAgaWYobGVmdCA8IDApIHtcclxuICAgICAgICAgICAgbGVmdCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYuc3R5bGUubGVmdCA9IHRvUHgobGVmdCk7XHJcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IHRvUHgodG9wKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCk7XHJcblxyXG4gICAgdGhpcy5hZGRDb250ZW50ID0gZnVuY3Rpb24oY29udGVudCkge1xyXG4gICAgICAgIFRvb2xzLmFkZENvbnRlbnQoYm9keS5kaXYsIGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2xvc2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBtYXNrLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kaXYpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIENhbGxpbmcgaXMgZXF1aXZhbGVudCB0byBwcmVzc2luZyB0aGUgZmlyc3QgZGVmYXVsdCBidXR0b25cclxuXHQgKi9cclxuXHR0aGlzLmRlZmF1bHQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZihib3R0b20gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgYm90dG9tLmRlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkRpYWxvZy56SW5kZXggPSAxMDAwMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpYWxvZztcclxuXHJcbiIsIi8qKlxyXG4gKiBNYXNrIHRoYXQgYWxsb3dzIHRoZSBkaWFsb2cgYm94IHRvIGJlIG1vZGFsLlxyXG4gKi9cclxuXHJcbmltcG9ydCBUb29scyBmcm9tICcuL0RPTS9Ub29scy5qcyc7XHJcblxyXG5sZXQgTWFzayA9IGZ1bmN0aW9uKGRpYWxvZykge1xyXG4gICAgbGV0IG9wdGlvbnMgPSBkaWFsb2cub3B0aW9ucztcclxuXHJcbiAgICBsZXQgbWFzayA9IG51bGw7XHJcblxyXG4gICAgaWYob3B0aW9ucy5tb2RhbCkge1xyXG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIG1hc2sgPSAgVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignbWFzaycpOyAvLyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgbWFzay5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgbWFzay5zdHlsZS5sZWZ0ID0gMDtcclxuICAgICAgICBtYXNrLnN0eWxlLnRvcCA9IDA7XHJcbiAgICAgICAgbWFzay5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIG1hc2suc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgIG1hc2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICBtYXNrLnN0eWxlLnpJbmRleCA9IGRpYWxvZy56SW5kZXggLSAxO1xyXG5cclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1hc2spO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYobWFzayAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChtYXNrKTtcclxuICAgICAgICAgICAgbWFzayA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXNrO1xyXG5cclxuIiwiLyoqXHJcbiAqIEhhbmR5IFNpbXBsZSBNZXNzYWdlIEJveFxyXG4gKi9cclxuXHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9EaWFsb2cuanMnO1xyXG5cclxubGV0IE1lc3NhZ2VCb3ggPSBmdW5jdGlvbih0aXRsZSwgbWVzc2FnZSwgdHlwZSwgYnV0dG9uMSwgYnV0dG9uMikge1xyXG4gICAgLy8gRGVmYXVsdDogT0tcclxuICAgIGxldCBidXR0b25zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29udGVudHM6ICdPaycsXHJcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbihkaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgIGlmKGJ1dHRvbjEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjEoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnZm9jdXMnOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICBpZih0eXBlID09PSBNZXNzYWdlQm94Lk9LQ0FOQ0VMKSB7XHJcbiAgICAgICAgYnV0dG9ucyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGVudHM6ICdPaycsXHJcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oZGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYnV0dG9uMSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjEoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJ2ZvY3VzJzogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50czogJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oZGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYnV0dG9uMiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgICBsZXQgZGlhbG9nID0gbmV3IERpYWxvZyh7XHJcbiAgICAgICAgICAndGl0bGUnOiB0aXRsZSxcclxuICAgICAgICAgICdjb250ZW50JzogJzxkaXYgY2xhc3M9XCJtZXNzYWdlLWNsXCI+PHA+JyArIG1lc3NhZ2UgKyAnPC9wPjwvZGl2PicsXHJcbiAgICAgICAgICAnYnV0dG9ucyc6IGJ1dHRvbnNcclxuICAgICB9KTtcclxufVxyXG5cclxuTWVzc2FnZUJveC5PSyA9IDA7XHJcbk1lc3NhZ2VCb3guT0tDQU5DRUwgPSAxO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUJveDtcclxuXHJcbiIsIi8qKlxyXG4gKiBWYXJpb3VzIGludGVyZmFjZSBvcHRpb25zIHdlIGNhbiBzZWxlY3RcclxuICovXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIG9wdGlvbnMuXHJcbiAqIEBwYXJhbSBvcHRpb25zIFVzZXIgcHJvdmlkZWQgb3B0aW9ucyB0aGF0IG92ZXJyaWRlIHRoZSBkZWZhdWx0IHZhbHVlcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG52YXIgT3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zID8gb3B0aW9ucyA6IHt9O1xyXG5cclxuICAgIC8vLyBUaXRsZSBiYXIgdGV4dFxyXG4gICAgdGhpcy50aXRsZSA9ICdEaWFsb2cgQm94JztcclxuXHJcbiAgICAvLy8gQW55IGFkZGVkIGNsYXNzIG9yIGNsYXNzZXMgZm9yIHRoZSBtYWluIGRpYWxvZyBib3ggZGl2XHJcbiAgICAvLy8gQ2FuIGJlIGEgc3RyaW5nIG9yIG11bHRpcGxlIHN0cmluZ3Mgc3BhY2UgZGVsaW1pdGVkXHJcbiAgICB0aGlzLmFkZENsYXNzID0gbnVsbDtcclxuXHJcbiAgICAvLy8gSXMgdGhpcyBkaWFsb2cgYm94IHJlc2l6YWJsZT9cclxuICAgIC8vLyBPcHRpb25zIGFyZTogJ25vbmUnLCAndmVydGljYWwnLCAnaG9yaXpvbnRhbCdcclxuICAgIHRoaXMucmVzaXplID0gJ25vbmUnO1xyXG5cclxuICAgIC8vLyBTaXplIG9mIHRoZSBib3JkZXIgZWRnZSB3ZSBjYW4gZ3JhYiBpZiByZXNpemFibGUgaW4gcGl4ZWxzXHJcbiAgICB0aGlzLmdyYWJTaXplID0gNDtcclxuXHJcbiAgICAvLy8gQXJyYXkgb2YgdGl0bGUgYmFyIGJ1dHRvbnMgdG8gYWRkLlxyXG4gICAgLy8vIElmIG51bGwsIGEgY2xvc2UgYnV0dG9uIGlzIGFkZGVkIGF1dG9tYXRpY2FsbHkuXHJcbiAgICAvLy8gT3RoZXJ3aXNlLCBhbiBhcnJheSBvZiBvYmplY3RzLCB3aXRoIHRoZXNlIGZpZWxkczpcclxuICAgIC8vLyAgIHR5cGU6ICdjbG9zZScgZm9yIGEgY2xvc2UgIGJ1dHRvbiwgJ2N1c3RvbScgZm9yIGN1c3RvbSBidXR0b24gY29udGVudHNcclxuICAgIC8vLyAgIGNvbnRlbnRzOiBIVE1MIHRvIHBsYWNlIGluc2lkZSBidXR0b24gdGFnXHJcbiAgICAvLy8gICBjbGljazogQ2xpY2sgaGFuZGxlclxyXG4gICAgdGhpcy50aXRsZUJhckJ1dHRvbnMgPSBudWxsO1xyXG5cclxuICAgIC8vLyBBbnkgYWRkZWQgY2xhc3Mgb3IgY2xhc3NlcyBmb3IgdGhlIHRpdGxlIGJhciBkaXZcclxuICAgIC8vLyBDYW4gYmUgYSBzdHJpbmcgb3IgbXVsdGlwbGUgc3RyaW5ncyBzcGFjZSBkZWxpbWl0ZWRcclxuICAgIHRoaXMudGl0bGVCYXJBZGRDbGFzcyA9IG51bGw7XHJcblxyXG4gICAgLy8vIEFycmF5IG9mIGJ1dHRvbnMgZm9yIHRoZSBib3R0b20uXHJcbiAgICAvLy8gSWYgbnVsbCwgYW4gT2sgYnV0dG9uIGlzIGFkZGVkIGF1dG9tYXRpY2FsbHkuXHJcbiAgICAvLy8gT3RoZXJ3aXNlLCBhbiBhcnJheSBvZiBvYmplY3RzLCB3aXRoIHRoZXNlIGZpZWxkczpcclxuICAgIC8vLyAgIGNvbnRlbnRzOiBJZiBwcm92aWRlZCwgSFRNTCB0byBwbGFjZSBpbnNpZGUgYnV0dG9uIHRhZ1xyXG4gICAgLy8vICAgY2xpY2s6IENsaWNrIGhhbmRsZXJcclxuICAgIC8vLyAgIGZvY3VzOiB0cnVlIGlmIHdlIHdhbnQgdG8gc2V0IGZvY3VzIG9uIHRoaXMgYnV0dG9uXHJcbiAgICAvLy8gICBkZWZhdWx0OiB0cnVlIGlmIHRoaXMgaXMgdGhlIGRlZmF1bHQgYnV0dG9uXHJcbiAgICAvLy8gICBjbGFzczogQ2xhc3MgdG8gYWRkIHRvIHRoZSBidXR0b25cclxuICAgIHRoaXMuYnV0dG9ucyA9IG51bGw7XHJcblxyXG4gICAgLy8vIENvbnRlbnQgdG8gYWRkIHRvIHRoZSBkaWFsb2cgYm94LiBJZiBudWxsLCBub25lIGlzIGFkZGVkIG9uIGNyZWF0aW9uLlxyXG4gICAgdGhpcy5jb250ZW50ID0gbnVsbDtcclxuXHJcbiAgICAvLy8gSXMgdGhpcyBhIG1vZGFsIGRpYWxvZyBib3g/IElmIHRydWUsIGNvbnRyb2xzIHVuZGVybmVhdGggYXJlIGRpc2FibGVkLlxyXG4gICAgdGhpcy5tb2RhbCA9IHRydWU7XHJcblxyXG4gICAgZm9yKHZhciBwcm9wZXJ0eSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbiBcIiArIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IG9wdGlvbnNbcHJvcGVydHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3B0aW9ucztcclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFRpdGxlIGJhciBtYW5hZ2VtZW50XHJcbiAqL1xyXG5cclxuaW1wb3J0IFRvb2xzIGZyb20gJy4vRE9NL1Rvb2xzLmpzJztcclxuXHJcblxyXG5sZXQgVGl0bGVCYXIgPSBmdW5jdGlvbihkaWFsb2csIHBhcmVudERpdikge1xyXG4gICAgbGV0IG9wdGlvbnMgPSBkaWFsb2cub3B0aW9ucztcclxuXHJcbiAgICAvLy8gTW91c2UgbW92ZSBldmVudCBoYW5kbGVyXHJcbiAgICBsZXQgaW5zdGFsbGVkTW92ZUxpc3RlbmVyID0gbnVsbDtcclxuXHJcbiAgICBsZXQgaW5pdGlhbFgsIGluaXRpYWxZO1xyXG4gICAgbGV0IGluaXRpYWxQb3NpdGlvblgsIGluaXRpYWxQb3NpdGlvblk7XHJcblxyXG4gICAgbGV0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGh0bWwgPSBgPGgxPiR7b3B0aW9ucy50aXRsZX08L2gxPmA7XHJcbiAgICAgICAgbGV0IGRpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2RpYWxvZy1jbC10b3AnLCBodG1sKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzc2VzKGRpdiwgb3B0aW9ucy50aXRsZUJhckFkZENsYXNzKTtcclxuICAgICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy50aXRsZUJhckJ1dHRvbnMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgYWRkQ2xvc2UoZGl2KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcHRpb25zLnRpdGxlQmFyQnV0dG9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihpdGVtLnR5cGUgPT09ICdjbG9zZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRDbG9zZShkaXYsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGl0ZW0udHlwZSA9PT0gJ2N1c3RvbScpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRDdXN0b20oZGl2LCBpdGVtKTsgLy8gYWRkQ3VzdG9tKGRpdiwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBoMSA9IGRpdi5xdWVyeVNlbGVjdG9yKCdoMScpO1xyXG5cclxuICAgICAgICBoMS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaW5pdGlhbFggPSBldmVudC5wYWdlWDtcclxuICAgICAgICAgICAgaW5pdGlhbFkgPSBldmVudC5wYWdlWTtcclxuXHJcbiAgICAgICAgICAgIGxldCByZWN0ID0gZGlhbG9nLmRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgaW5pdGlhbFBvc2l0aW9uWCA9IHJlY3QubGVmdDtcclxuICAgICAgICAgICAgaW5pdGlhbFBvc2l0aW9uWSA9IHJlY3QudG9wO1xyXG5cclxuICAgICAgICAgICAgaW5zdGFsbEhhbmRsZXJzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZENsb3NlKGRpdiwgaXRlbSkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyhidXR0b24sICdkaWFsb2ctY2wtdGItYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cImljb25zLWNsIGljb25zLWNsLWNsb3NlXCI+JztcclxuICAgICAgICBidXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZihpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbS5jbGljayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQ3VzdG9tKGRpdiwgaXRlbSkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyhidXR0b24sICdkaWFsb2ctY2wtdGItYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGl0ZW0uY29udGVudHM7XHJcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYoaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uY2xpY2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGljaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VNb3ZlTGlzdGVuZXIoZSkge1xyXG4gICAgICAgIGlmKGUuYnV0dG9ucyAhPT0gMSkge1xyXG4gICAgICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZHggPSBlLnBhZ2VYIC0gaW5pdGlhbFg7XHJcbiAgICAgICAgbGV0IGR5ID0gZS5wYWdlWSAtIGluaXRpYWxZO1xyXG5cclxuICAgICAgICBsZXQgbmV3UG9zaXRpb25YID0gaW5pdGlhbFBvc2l0aW9uWCArIGR4O1xyXG4gICAgICAgIGxldCBuZXdQb3NpdGlvblkgPSBpbml0aWFsUG9zaXRpb25ZICsgZHk7XHJcblxyXG4gICAgICAgIGRpYWxvZy5kaXYuc3R5bGUubGVmdCA9IG5ld1Bvc2l0aW9uWCArICdweCc7XHJcbiAgICAgICAgZGlhbG9nLmRpdi5zdHlsZS50b3AgPSBuZXdQb3NpdGlvblkgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlVXBMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgcmVtb3ZlSGFuZGxlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbnN0YWxsSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgcmVtb3ZlSGFuZGxlcnMoKTtcclxuXHJcbiAgICAgICAgaW5zdGFsbGVkTW92ZUxpc3RlbmVyID0gbW91c2VNb3ZlTGlzdGVuZXI7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaW5zdGFsbGVkTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcExpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVIYW5kbGVycygpIHtcclxuICAgICAgICBpZihpbnN0YWxsZWRNb3ZlTGlzdGVuZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaW5zdGFsbGVkTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcExpc3RlbmVyKTtcclxuICAgICAgICBpbnN0YWxsZWRNb3ZlTGlzdGVuZXIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGl0bGVCYXI7XHJcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi9fZGlhbG9nLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNzM1ZWQ2YWJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL19kaWFsb2cuc2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi9fZGlhbG9nLnNjc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIFRoZSBwdWJsaWMtcGF0aCBtb2R1bGUgbXVzdCBiZSBpbXBvcnRlZCBmaXJzdCFcclxuLy9pbXBvcnQgJy4vcHVibGljLXBhdGguanMnO1xyXG5cclxuaW1wb3J0ICcuL3BvbHlmaWxscy9hbGwuanMnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJy4vRGlhbG9nLmpzJztcclxuaW1wb3J0IE1lc3NhZ2VCb3ggZnJvbSAnLi9NZXNzYWdlQm94LmpzJztcclxuaW1wb3J0ICcuL19kaWFsb2cuc2Nzcyc7XHJcbmltcG9ydCAnaWNvbnMtY2wnO1xyXG5cclxuRGlhbG9nLk1lc3NhZ2VCb3ggPSBNZXNzYWdlQm94O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nO1xyXG5leHBvcnQge0RpYWxvZ307XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9