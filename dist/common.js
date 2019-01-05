(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["common"],{

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./packages/dialog-cl/src/_dialog.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./packages/dialog-cl/src/_dialog.scss ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.dialog-cl {\n  box-sizing: border-box;\n  position: fixed;\n  border: 1px solid #444444;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  cursor: default;\n  top: 0;\n  width: 350px;\n  min-width: 150px;\n  max-width: 500px;\n  height: auto;\n  min-height: 150px;\n  max-height: 600px;\n}\n\ndiv.cl-dialog-bottom {\n  box-sizing: border-box;\n  flex: 0 0 44px;\n  width: 100%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n  text-align: right;\n  border-top: 1px solid #cccccc;\n  cursor: default;\n}\n\ndiv.dialog-cl-body {\n  flex: 0 1 auto;\n  width: 100%;\n  overflow-y: auto;\n  background-color: white;\n  padding: 0;\n}\n\ndiv.dialog-cl-body p:first-child,\ndiv.dialog-cl-body h1:first-child,\ndiv.dialog-cl-body h2:first-child {\n  margin-top: 0;\n}\n\ndiv.dialog-cl-body p:last-child {\n  margin-bottom: 0;\n}\n\ndiv.cl-dialog-bottom button {\n  display: inline-block;\n  min-width: 7em;\n  margin: 10px 10px 10px 0;\n  padding: 3px 10px;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  font-size: 0.8em;\n  font-weight: bold;\n  border: 1px solid #999;\n  border-radius: 1px;\n  box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.1), inset 0 -10px 20px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  color: #444;\n  background: #fff;\n}\n\ndiv.cl-dialog-bottom button:active {\n  box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.1), inset 0 10px 20px rgba(0, 0, 0, 0.1);\n}\n\ndiv.dialog-cl-top {\n  box-sizing: border-box;\n  background-color: #009688;\n  margin: 0;\n  padding: 0;\n  flex: 0 0 25px;\n  cursor: default;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n\ndiv.dialog-cl-top h1 {\n  flex-grow: 1;\n  margin: 0;\n  padding: 4px 4px 0 10px;\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n  font-size: 16px;\n  line-height: 16px;\n  user-select: none;\n}\n\ndiv.dialog-cl-top button.dialog-cl-tb-button {\n  flex: 0 0 25px;\n  position: relative;\n  box-sizing: border-box;\n  height: 25px;\n  width: 25px;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  outline: none;\n}\n\ndiv.dialog-cl-top button.dialog-cl-tb-button span {\n  position: absolute;\n  left: 4px;\n  top: 4px;\n}\n\ndiv.dialog-cl-top .dialog-cl-tb-button:hover {\n  background-color: #e81123;\n  cursor: pointer;\n}\n\ndiv.dialog-cl div.message-cl {\n  font-size: 1.25em;\n  padding: 1em;\n}\n\ndiv.dialog-cl-column {\n  text-align: center;\n}\n\ndiv.dialog-cl-column > div {\n  display: inline-block;\n  padding: 1.5em 0 2.0em 0;\n}\n\ndiv.dialog-cl-column select {\n  width: 100%;\n}\n\n", ""]);

// exports


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

var html = ['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr'];

// SVG
var svg = ['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'audio', 'canvas', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'video', 'view', 'vkern'];

var svgFilters = ['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence'];

var mathMl = ['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmuliscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mpspace', 'msqrt', 'mystyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover'];

var text = ['#text'];

var html$1 = ['accept', 'action', 'align', 'alt', 'autocomplete', 'background', 'bgcolor', 'border', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'coords', 'crossorigin', 'datetime', 'default', 'dir', 'disabled', 'download', 'enctype', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'integrity', 'ismap', 'label', 'lang', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'multiple', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns'];

var svg$1 = ['accent-height', 'accumulate', 'additivive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan'];

var mathMl$1 = ['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns'];

var xml = ['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink'];

/* Add properties to a lookup table */
function addToSet(set, array) {
  var l = array.length;
  while (l--) {
    if (typeof array[l] === 'string') {
      array[l] = array[l].toLowerCase();
    }
    set[array[l]] = true;
  }
  return set;
}

/* Shallow clone an object */
function clone(object) {
  var newObject = {};
  var property = void 0;
  for (property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      newObject[property] = object[property];
    }
  }
  return newObject;
}

var MUSTACHE_EXPR = /\{\{[\s\S]*|[\s\S]*\}\}/gm; // Specify template detection regex for SAFE_FOR_TEMPLATES mode
var ERB_EXPR = /<%[\s\S]*|[\s\S]*%>/gm;
var DATA_ATTR = /^data-[\-\w.\u00B7-\uFFFF]/; // eslint-disable-line no-useless-escape
var ARIA_ATTR = /^aria-[\-\w]+$/; // eslint-disable-line no-useless-escape
var IS_ALLOWED_URI = /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i; // eslint-disable-line no-useless-escape
var IS_SCRIPT_OR_DATA = /^(?:\w+script|data):/i;
var ATTR_WHITESPACE = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g; // eslint-disable-line no-control-regex

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getGlobal = function getGlobal() {
  return typeof window === 'undefined' ? null : window;
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
  DOMPurify.version = '1.0.8';

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
  var useDOMParser = false; // See comment below
  var removeTitle = false; // See comment below

  var document = window.document;
  var DocumentFragment = window.DocumentFragment,
      HTMLTemplateElement = window.HTMLTemplateElement,
      Node = window.Node,
      NodeFilter = window.NodeFilter,
      _window$NamedNodeMap = window.NamedNodeMap,
      NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
      Text = window.Text,
      Comment = window.Comment,
      DOMParser = window.DOMParser;

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

  /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html string.
   * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
   */
  var RETURN_DOM = false;

  /* Decide if a DOM `DocumentFragment` should be returned, instead of a html string */
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
  var URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'summary', 'title', 'value', 'style', 'xmlns']);

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
    /* Shield configuration object from tampering */
    if ((typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !== 'object') {
      cfg = {};
    }
    /* Set configuration parameters */
    ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
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
    if (Object && 'freeze' in Object) {
      Object.freeze(cfg);
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
    } catch (err) {
      node.outerHTML = '';
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
    } catch (err) {
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

    if (FORCE_BODY) {
      dirty = '<remove></remove>' + dirty;
    }

    /* Use DOMParser to workaround Firefox bug (see comment below) */
    if (useDOMParser) {
      try {
        doc = new DOMParser().parseFromString(dirty, 'text/html');
      } catch (err) {}
    }

    /* Remove title to fix an mXSS bug in older MS Edge */
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
      body.outerHTML = dirty;
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
        var doc = _initDocument('<svg><p><style><img src="</style><img src=x onerror=alert(1)//">');
        if (doc.querySelector('svg img')) {
          useDOMParser = true;
        }
      } catch (err) {}
    })();
    (function () {
      try {
        var doc = _initDocument('<x/><title>&lt;/title&gt;&lt;img&gt;');
        if (doc.querySelector('title').textContent.match(/<\/title/)) {
          removeTitle = true;
        }
      } catch (err) {}
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
          currentNode.insertAdjacentHTML('AfterEnd', currentNode.innerHTML);
        } catch (err) {}
      }
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
  var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
    /* Make sure attribute cannot clobber */
    if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
      return false;
    }

    /* Sanitize attribute content to be template-safe */
    if (SAFE_FOR_TEMPLATES) {
      value = value.replace(MUSTACHE_EXPR$$1, ' ');
      value = value.replace(ERB_EXPR$$1, ' ');
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
   * @param  {Node} node to sanitize
   */
  // eslint-disable-next-line complexity
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
        attributes = Array.prototype.slice.apply(attributes);
        _removeAttribute('id', currentNode);
        _removeAttribute(name, currentNode);
        if (attributes.indexOf(idAttr) > l) {
          currentNode.setAttribute('id', idAttr.value);
        }
      } else if (
      // This works around a bug in Safari, where input[type=file]
      // cannot be dynamically set after type has been removed
      currentNode.nodeName === 'INPUT' && lcName === 'type' && value === 'file' && (ALLOWED_ATTR[lcName] || !FORBID_ATTR[lcName])) {
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
      } catch (err) {}
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
      } else {
        body.appendChild(importedNode);
      }
    } else {
      /* Exit directly if we have nothing to do */
      if (!RETURN_DOM && !WHOLE_DOCUMENT && dirty.indexOf('<') === -1) {
        return dirty;
      }

      /* Initialize the document to work on */
      body = _initDocument(dirty);

      /* Check we have a DOM node from the data */
      if (!body) {
        return RETURN_DOM ? null : '';
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

    /* If we sanitized `dirty` in-place, return it. */
    if (IN_PLACE) {
      return dirty;
    }

    /* Return sanitized string or DOM */
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);

        while (body.firstChild) {
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

    return WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
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
/******/ 	var hotCurrentHash = "bf1893c730a5c7033119";
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
/******/ 			var queue = outdatedModules.slice().map(function(id) {
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
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
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
/******/ 		// Not in "apply" phase
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

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./src/icons.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./src/icons.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icons-cl {\n  display: inline-block;\n  background-image: url(" + escape(__webpack_require__(/*! ./images/icons.png */ "./src/images/icons.png")) + ");\n  width: 16px;\n  height: 16px;\n  overflow: hidden;\n  color: transparent;\n  padding: 0;\n}\n\n.icons-cl.icons-cl-caret-1-n {\n  background-position: 0 0;\n}\n\n.icons-cl.icons-cl-caret-1-ne {\n  background-position: -16px 0;\n}\n\n.icons-cl.icons-cl-caret-1-e {\n  background-position: -32px 0;\n}\n\n.icons-cl.icons-cl-caret-1-se {\n  background-position: -48px 0;\n}\n\n.icons-cl.icons-cl-caret-1-s {\n  background-position: -64px 0;\n}\n\n.icons-cl.icons-cl-caret-1-sw {\n  background-position: -80px 0;\n}\n\n.icons-cl.icons-cl-caret-1-w {\n  background-position: -96px 0;\n}\n\n.icons-cl.icons-cl-caret-1-nw {\n  background-position: -112px 0;\n}\n\n.icons-cl.icons-cl-caret-2-n-s {\n  background-position: -128px 0;\n}\n\n.icons-cl.icons-cl-caret-2-e-w {\n  background-position: -144px 0;\n}\n\n.icons-cl.icons-cl-triangle-1-n {\n  background-position: 0px -16px;\n}\n\n.icons-cl.icons-cl-triangle-1-e {\n  background-position: -32px -16px;\n}\n\n.icons-cl.icons-cl-arrow-1-n {\n  background-position: 0px -32px;\n}\n\n.icons-cl.icons-cl-arrow-1-w {\n  background-position: -96px -32px;\n}\n\n.icons-cl.icons-cl-arrowstop-1-n {\n  background-position: -192px -32px;\n}\n\n.icons-cl.icons-cl-arrowstop-1-s {\n  background-position: -224px -32px;\n}\n\n.icons-cl.icons-cl-arrowthick-1-n {\n  background-position: 0px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-1-ne {\n  background-position: -16px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-1-e {\n  background-position: -32px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-1-se {\n  background-position: -48px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-1-s {\n  background-position: -64px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-1-sw {\n  background-position: -80px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-1-w {\n  background-position: -96px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-1-nw {\n  background-position: -112px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-2-n-s {\n  background-position: -128px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-2-ne-sw {\n  background-position: -144px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-2-e-w {\n  background-position: -160px -48px;\n}\n\n.icons-cl.icons-cl-arrowthick-2-se-nw {\n  background-position: -176px -48px;\n}\n\n.icons-cl.icons-cl-arrowthickstop-1-n {\n  background-position: -192px -48px;\n}\n\n.icons-cl.icons-cl-arrowthickstop-1-e {\n  background-position: -208px -48px;\n}\n\n.icons-cl.icons-cl-arrowthickstop-1-s {\n  background-position: -224px -48px;\n}\n\n.icons-cl.icons-cl-arrowthickstop-1-w {\n  background-position: -240px -48px;\n}\n\n.icons-cl.icons-cl-arrowreturnthick-1-w {\n  background-position: 0px -64px;\n}\n\n.icons-cl.icons-cl-arrowreturnthick-1-e {\n  background-position: -32px -64px;\n}\n\n.icons-cl.icons-cl-folder-collapsed {\n  background-position: 0px -96px;\n}\n\n.icons-cl.icons-cl-folder-open {\n  background-position: -16px -96px;\n}\n\n.icons-cl.icons-cl-document {\n  background-position: -32px -96px;\n}\n\n.icons-cl.icons-cl-document-b {\n  background-position: -48px -96px;\n}\n\n.icons-cl.icons-cl-note {\n  background-position: -64px -96px;\n}\n\n.icons-cl.icons-cl-mail-closed {\n  background-position: -80px -96px;\n}\n\n.icons-cl.icons-cl-mail-open {\n  background-position: -96px -96px;\n}\n\n.icons-cl.icons-cl-suitcase {\n  background-position: -112px -96px;\n}\n\n.icons-cl.icons-cl-comment {\n  background-position: -128px -96px;\n}\n\n.icons-cl.icons-cl-person {\n  background-position: -144px -96px;\n}\n\n.icons-cl.icons-cl-print {\n  background-position: -160px -96px;\n}\n\n.icons-cl.icons-cl-trash {\n  background-position: -176px -96px;\n}\n\n.icons-cl.icons-cl-locked {\n  background-position: -192px -96px;\n}\n\n.icons-cl.icons-cl-unlocked {\n  background-position: -208px -96px;\n}\n\n.icons-cl.icons-cl-bookmark {\n  background-position: -224px -96px;\n}\n\n.icons-cl.icons-cl-tag {\n  background-position: -240px -96px;\n}\n\n.icons-cl.icons-cl-home {\n  background-position: 0px -112px;\n}\n\n.icons-cl.icons-cl-flag {\n  background-position: -16px -112px;\n}\n\n.icons-cl.icons-cl-calculator {\n  background-position: -32px -112px;\n}\n\n.icons-cl.icons-cl-cart {\n  background-position: -48px -112px;\n}\n\n.icons-cl.icons-cl-pencil {\n  background-position: -64px -112px;\n}\n\n.icons-cl.icons-cl-clock {\n  background-position: -80px -112px;\n}\n\n.icons-cl.icons-cl-disk {\n  background-position: -96px -112px;\n}\n\n.icons-cl.icons-cl-calendar {\n  background-position: -112px -112px;\n}\n\n.icons-cl.icons-cl-zoomin {\n  background-position: -128px -112px;\n}\n\n.icons-cl.icons-cl-zoomout {\n  background-position: -144px -112px;\n}\n\n.icons-cl.icons-cl-search {\n  background-position: -160px -112px;\n}\n\n.icons-cl.icons-cl-wrench {\n  background-position: -176px -112px;\n}\n\n.icons-cl.icons-cl-gear {\n  background-position: -192px -112px;\n}\n\n.icons-cl.icons-cl-heart {\n  background-position: -208px -112px;\n}\n\n.icons-cl.icons-cl-star {\n  background-position: -224px -112px;\n}\n\n.icons-cl.icons-cl-link {\n  background-position: -240px -112px;\n}\n\n.icons-cl.icons-cl-close {\n  background-position: -80px -128px;\n}\n\n.icons-cl.icons-cl-closethick {\n  background-position: -96px -128px;\n}\n\n.icons-cl.icons-cl-alert {\n  background-position: 0px -144px;\n}\n\n.icons-cl.icons-cl-help {\n  background-position: -48px -144px;\n}\n\n.icons-cl.icons-cl-check {\n  background-position: -64px -144px;\n}\n\n.icons-cl.icons-cl-play {\n  background-position: 0px -160px;\n}\n\n.icons-cl.icons-cl-pause {\n  background-position: -16px -160px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
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


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/resolve-url-loader!../node_modules/sass-loader/lib/loader.js?sourceMap!./icons.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./src/icons.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader!../node_modules/resolve-url-loader!../node_modules/sass-loader/lib/loader.js?sourceMap!./icons.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./src/icons.scss", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/resolve-url-loader!../node_modules/sass-loader/lib/loader.js?sourceMap!./icons.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./src/icons.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
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
/* harmony import */ var _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/Tools.js */ "./packages/dialog-cl/src/DOM/Tools.js");
/**
 * @file
 * The bottom buttons section of the dialog box
 */


var Bottom = function Bottom(dialog, parentDiv) {
  var options = dialog.options;

  var initialize = function initialize() {
    // let html = `<button class="cl-dialog-btn">Ok</button><button class="cl-dialog-btn">Cancel</button>`;
    var div = _DOM_Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].createClassedDiv('cl-dialog-bottom');
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

    if (item.focus === true) {
      button.focus();
    }
  }

  initialize();

  this.default = function () {
    options.buttons.forEach(function (item) {
      if (item.default === true && item.click !== undefined) {
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
 * @file
 * Flexible and configurable dialog box object
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


  this.default = function () {
    if (bottom !== null) {
      bottom.default();
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
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_dialog.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./packages/dialog-cl/src/_dialog.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0797a998", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_dialog.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./packages/dialog-cl/src/_dialog.scss", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_dialog.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./packages/dialog-cl/src/_dialog.scss");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9kaWFsb2ctY2wvc3JjL19kaWFsb2cuc2NzcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvZG9tcHVyaWZ5L2Rpc3QvcHVyaWZ5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9pY29ucy1jbC9kaXN0L2ljb25zLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9yZXNpemVyLWNsL3NyYy9PcHRpb25zLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9yZXNpemVyLWNsL3NyYy9hcHAubW9kdWxlcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvcmVzaXplci1jbC9zcmMvcmVzaXplci1hY3R1YWwuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3Jlc2l6ZXItY2wvc3JjL3Jlc2l6ZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvZGlhbG9nLWNsL3NyYy9Cb2R5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2RpYWxvZy1jbC9zcmMvQm90dG9tLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2RpYWxvZy1jbC9zcmMvRE9NL1Rvb2xzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2RpYWxvZy1jbC9zcmMvRGlhbG9nLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2RpYWxvZy1jbC9zcmMvTWFzay5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9kaWFsb2ctY2wvc3JjL01lc3NhZ2VCb3guanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvZGlhbG9nLWNsL3NyYy9PcHRpb25zLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2RpYWxvZy1jbC9zcmMvVGl0bGVCYXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvZGlhbG9nLWNsL3NyYy9fZGlhbG9nLnNjc3M/NGY4NCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9kaWFsb2ctY2wvc3JjL2FwcC5tb2R1bGVzLmpzIl0sIm5hbWVzIjpbIkJvZHkiLCJkaWFsb2ciLCJwYXJlbnREaXYiLCJvcHRpb25zIiwiZGl2IiwiVG9vbHMiLCJjcmVhdGVDbGFzc2VkRGl2IiwiY29udGVudCIsImFwcGVuZENoaWxkIiwiQm90dG9tIiwiaW5pdGlhbGl6ZSIsImJ1dHRvbnMiLCJhZGRPayIsImZvckVhY2giLCJpdGVtIiwiYWRkQnV0dG9uIiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImlubmVySFRNTCIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidW5kZWZpbmVkIiwiY2xpY2siLCJjbG9zZSIsImZvY3VzIiwiY29udGVudHMiLCJkZWZhdWx0IiwiYWRkQ2xhc3MiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkQ2xhc3NlcyIsImNsYXNzZXMiLCJzcGxpdCIsImNscyIsImFkZENvbnRlbnQiLCJpc1N0cmluZyIsImlzRWxlbWVudCIsInZhbCIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsIm5vZGVWYWx1ZSIsIkRpYWxvZyIsIk9wdGlvbnMiLCJib2R5IiwibWFzayIsImJvdHRvbSIsInpJbmRleCIsInN0eWxlIiwicGFyZW50IiwicXVlcnlTZWxlY3RvciIsImluc3RhbGxSZXNpemFibGUiLCJUaXRsZUJhciIsIk1hc2siLCJwbGFjZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlDb2RlIiwicmVzaXplIiwicnNPcHRpb25zIiwiZ3JhYlNpemUiLCJSZXNpemVyIiwidG9QeCIsInBhcmVudFdpZCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJwYXJlbnRIaXQiLCJpbm5lckhlaWdodCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJ0b3AiLCJsZWZ0IiwicmVtb3ZlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwibW9kYWwiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsIk1lc3NhZ2VCb3giLCJ0aXRsZSIsIm1lc3NhZ2UiLCJidXR0b24xIiwiYnV0dG9uMiIsIk9LQ0FOQ0VMIiwiT0siLCJ0aXRsZUJhckJ1dHRvbnMiLCJ0aXRsZUJhckFkZENsYXNzIiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkVycm9yIiwiaW5zdGFsbGVkTW92ZUxpc3RlbmVyIiwiaW5pdGlhbFgiLCJpbml0aWFsWSIsImluaXRpYWxQb3NpdGlvblgiLCJpbml0aWFsUG9zaXRpb25ZIiwiaHRtbCIsImFkZENsb3NlIiwiYWRkQ3VzdG9tIiwiaDEiLCJwYWdlWCIsInBhZ2VZIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImluc3RhbGxIYW5kbGVycyIsIm1vdXNlTW92ZUxpc3RlbmVyIiwiZSIsInJlbW92ZUhhbmRsZXJzIiwiZHgiLCJkeSIsIm5ld1Bvc2l0aW9uWCIsIm5ld1Bvc2l0aW9uWSIsIm1vdXNlVXBMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLG1HQUFrRDtBQUNyRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsa0JBQWtCLDJCQUEyQixvQkFBb0IsOEJBQThCLDRCQUE0QixjQUFjLGVBQWUsa0JBQWtCLDJCQUEyQixzQkFBc0Isb0JBQW9CLFdBQVcsaUJBQWlCLHFCQUFxQixxQkFBcUIsaUJBQWlCLHNCQUFzQixzQkFBc0IsR0FBRywwQkFBMEIsMkJBQTJCLG1CQUFtQixnQkFBZ0IsNEJBQTRCLGNBQWMsZUFBZSxzQkFBc0Isa0NBQWtDLG9CQUFvQixHQUFHLHdCQUF3QixtQkFBbUIsZ0JBQWdCLHFCQUFxQiw0QkFBNEIsZUFBZSxHQUFHLDhHQUE4RyxrQkFBa0IsR0FBRyxxQ0FBcUMs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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsaUJBQWlCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7QUN4L0JBO0FBQ0EsSUFBSSxJQUF5RDtBQUM3RDtBQUNBLE1BQU0sRUFLc0I7QUFDNUIsQ0FBQztBQUNELG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixFQUEwQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZ0JBQWdCO0FBQzdDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGdCQUFnQjtBQUM3QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOEJBQThCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyQkFBMkI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLEtBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QWpIRDs7QUFtSGVnRCx1RUFBZixFOzs7Ozs7Ozs7OztBQzNIQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxtVUFBd0s7QUFDOUwsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyw2SEFBZ0U7QUFDbEYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxJQUFVO0FBQ2I7QUFDQTtBQUNBLHFCQUFxQixtVUFBd0s7QUFDN0wsc0JBQXNCLG1CQUFPLENBQUMsbVVBQXdLO0FBQ3RNLHVEQUF1RCxRQUFTO0FBQ2hFO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQVYsa0RBQU0sQ0FBQ3FDLFVBQVAsR0FBb0JBLHNEQUFwQjtBQUVlckMsaUhBQWYiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuZGlhbG9nLWNsIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDQ0NDQ0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIG1pbi13aWR0aDogMTUwcHg7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWluLWhlaWdodDogMTUwcHg7XFxuICBtYXgtaGVpZ2h0OiA2MDBweDtcXG59XFxuXFxuZGl2LmNsLWRpYWxvZy1ib3R0b20ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZsZXg6IDAgMCA0NHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjY2NjO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG5kaXYuZGlhbG9nLWNsLWJvZHkge1xcbiAgZmxleDogMCAxIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmRpdi5kaWFsb2ctY2wtYm9keSBwOmZpcnN0LWNoaWxkLFxcbmRpdi5kaWFsb2ctY2wtYm9keSBoMTpmaXJzdC1jaGlsZCxcXG5kaXYuZGlhbG9nLWNsLWJvZHkgaDI6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuZGl2LmRpYWxvZy1jbC1ib2R5IHA6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG5kaXYuY2wtZGlhbG9nLWJvdHRvbSBidXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWluLXdpZHRoOiA3ZW07XFxuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDA7XFxuICBwYWRkaW5nOiAzcHggMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgLTEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6ICM0NDQ7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG5cXG5kaXYuY2wtZGlhbG9nLWJvdHRvbSBidXR0b246YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuZGl2LmRpYWxvZy1jbC10b3Age1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZmxleDogMCAwIDI1cHg7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbn1cXG5cXG5kaXYuZGlhbG9nLWNsLXRvcCBoMSB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA0cHggNHB4IDAgMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuZGl2LmRpYWxvZy1jbC10b3AgYnV0dG9uLmRpYWxvZy1jbC10Yi1idXR0b24ge1xcbiAgZmxleDogMCAwIDI1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5kaXYuZGlhbG9nLWNsLXRvcCBidXR0b24uZGlhbG9nLWNsLXRiLWJ1dHRvbiBzcGFuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDRweDtcXG4gIHRvcDogNHB4O1xcbn1cXG5cXG5kaXYuZGlhbG9nLWNsLXRvcCAuZGlhbG9nLWNsLXRiLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTgxMTIzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5kaXYuZGlhbG9nLWNsIGRpdi5tZXNzYWdlLWNsIHtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG5kaXYuZGlhbG9nLWNsLWNvbHVtbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmRpdi5kaWFsb2ctY2wtY29sdW1uID4gZGl2IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDEuNWVtIDAgMi4wZW0gMDtcXG59XFxuXFxuZGl2LmRpYWxvZy1jbC1jb2x1bW4gc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuRE9NUHVyaWZ5ID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbCA9IFsnYScsICdhYmJyJywgJ2Fjcm9ueW0nLCAnYWRkcmVzcycsICdhcmVhJywgJ2FydGljbGUnLCAnYXNpZGUnLCAnYXVkaW8nLCAnYicsICdiZGknLCAnYmRvJywgJ2JpZycsICdibGluaycsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnYnInLCAnYnV0dG9uJywgJ2NhbnZhcycsICdjYXB0aW9uJywgJ2NlbnRlcicsICdjaXRlJywgJ2NvZGUnLCAnY29sJywgJ2NvbGdyb3VwJywgJ2NvbnRlbnQnLCAnZGF0YScsICdkYXRhbGlzdCcsICdkZCcsICdkZWNvcmF0b3InLCAnZGVsJywgJ2RldGFpbHMnLCAnZGZuJywgJ2RpcicsICdkaXYnLCAnZGwnLCAnZHQnLCAnZWxlbWVudCcsICdlbScsICdmaWVsZHNldCcsICdmaWdjYXB0aW9uJywgJ2ZpZ3VyZScsICdmb250JywgJ2Zvb3RlcicsICdmb3JtJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWQnLCAnaGVhZGVyJywgJ2hncm91cCcsICdocicsICdodG1sJywgJ2knLCAnaW1nJywgJ2lucHV0JywgJ2lucycsICdrYmQnLCAnbGFiZWwnLCAnbGVnZW5kJywgJ2xpJywgJ21haW4nLCAnbWFwJywgJ21hcmsnLCAnbWFycXVlZScsICdtZW51JywgJ21lbnVpdGVtJywgJ21ldGVyJywgJ25hdicsICdub2JyJywgJ29sJywgJ29wdGdyb3VwJywgJ29wdGlvbicsICdvdXRwdXQnLCAncCcsICdwcmUnLCAncHJvZ3Jlc3MnLCAncScsICdycCcsICdydCcsICdydWJ5JywgJ3MnLCAnc2FtcCcsICdzZWN0aW9uJywgJ3NlbGVjdCcsICdzaGFkb3cnLCAnc21hbGwnLCAnc291cmNlJywgJ3NwYWNlcicsICdzcGFuJywgJ3N0cmlrZScsICdzdHJvbmcnLCAnc3R5bGUnLCAnc3ViJywgJ3N1bW1hcnknLCAnc3VwJywgJ3RhYmxlJywgJ3Rib2R5JywgJ3RkJywgJ3RlbXBsYXRlJywgJ3RleHRhcmVhJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpbWUnLCAndHInLCAndHJhY2snLCAndHQnLCAndScsICd1bCcsICd2YXInLCAndmlkZW8nLCAnd2JyJ107XG5cbi8vIFNWR1xudmFyIHN2ZyA9IFsnc3ZnJywgJ2EnLCAnYWx0Z2x5cGgnLCAnYWx0Z2x5cGhkZWYnLCAnYWx0Z2x5cGhpdGVtJywgJ2FuaW1hdGVjb2xvcicsICdhbmltYXRlbW90aW9uJywgJ2FuaW1hdGV0cmFuc2Zvcm0nLCAnYXVkaW8nLCAnY2FudmFzJywgJ2NpcmNsZScsICdjbGlwcGF0aCcsICdkZWZzJywgJ2Rlc2MnLCAnZWxsaXBzZScsICdmaWx0ZXInLCAnZm9udCcsICdnJywgJ2dseXBoJywgJ2dseXBocmVmJywgJ2hrZXJuJywgJ2ltYWdlJywgJ2xpbmUnLCAnbGluZWFyZ3JhZGllbnQnLCAnbWFya2VyJywgJ21hc2snLCAnbWV0YWRhdGEnLCAnbXBhdGgnLCAncGF0aCcsICdwYXR0ZXJuJywgJ3BvbHlnb24nLCAncG9seWxpbmUnLCAncmFkaWFsZ3JhZGllbnQnLCAncmVjdCcsICdzdG9wJywgJ3N0eWxlJywgJ3N3aXRjaCcsICdzeW1ib2wnLCAndGV4dCcsICd0ZXh0cGF0aCcsICd0aXRsZScsICd0cmVmJywgJ3RzcGFuJywgJ3ZpZGVvJywgJ3ZpZXcnLCAndmtlcm4nXTtcblxudmFyIHN2Z0ZpbHRlcnMgPSBbJ2ZlQmxlbmQnLCAnZmVDb2xvck1hdHJpeCcsICdmZUNvbXBvbmVudFRyYW5zZmVyJywgJ2ZlQ29tcG9zaXRlJywgJ2ZlQ29udm9sdmVNYXRyaXgnLCAnZmVEaWZmdXNlTGlnaHRpbmcnLCAnZmVEaXNwbGFjZW1lbnRNYXAnLCAnZmVEaXN0YW50TGlnaHQnLCAnZmVGbG9vZCcsICdmZUZ1bmNBJywgJ2ZlRnVuY0InLCAnZmVGdW5jRycsICdmZUZ1bmNSJywgJ2ZlR2F1c3NpYW5CbHVyJywgJ2ZlTWVyZ2UnLCAnZmVNZXJnZU5vZGUnLCAnZmVNb3JwaG9sb2d5JywgJ2ZlT2Zmc2V0JywgJ2ZlUG9pbnRMaWdodCcsICdmZVNwZWN1bGFyTGlnaHRpbmcnLCAnZmVTcG90TGlnaHQnLCAnZmVUaWxlJywgJ2ZlVHVyYnVsZW5jZSddO1xuXG52YXIgbWF0aE1sID0gWydtYXRoJywgJ21lbmNsb3NlJywgJ21lcnJvcicsICdtZmVuY2VkJywgJ21mcmFjJywgJ21nbHlwaCcsICdtaScsICdtbGFiZWxlZHRyJywgJ21tdWxpc2NyaXB0cycsICdtbicsICdtbycsICdtb3ZlcicsICdtcGFkZGVkJywgJ21waGFudG9tJywgJ21yb290JywgJ21yb3cnLCAnbXMnLCAnbXBzcGFjZScsICdtc3FydCcsICdteXN0eWxlJywgJ21zdWInLCAnbXN1cCcsICdtc3Vic3VwJywgJ210YWJsZScsICdtdGQnLCAnbXRleHQnLCAnbXRyJywgJ211bmRlcicsICdtdW5kZXJvdmVyJ107XG5cbnZhciB0ZXh0ID0gWycjdGV4dCddO1xuXG52YXIgaHRtbCQxID0gWydhY2NlcHQnLCAnYWN0aW9uJywgJ2FsaWduJywgJ2FsdCcsICdhdXRvY29tcGxldGUnLCAnYmFja2dyb3VuZCcsICdiZ2NvbG9yJywgJ2JvcmRlcicsICdjZWxscGFkZGluZycsICdjZWxsc3BhY2luZycsICdjaGVja2VkJywgJ2NpdGUnLCAnY2xhc3MnLCAnY2xlYXInLCAnY29sb3InLCAnY29scycsICdjb2xzcGFuJywgJ2Nvb3JkcycsICdjcm9zc29yaWdpbicsICdkYXRldGltZScsICdkZWZhdWx0JywgJ2RpcicsICdkaXNhYmxlZCcsICdkb3dubG9hZCcsICdlbmN0eXBlJywgJ2ZhY2UnLCAnZm9yJywgJ2hlYWRlcnMnLCAnaGVpZ2h0JywgJ2hpZGRlbicsICdoaWdoJywgJ2hyZWYnLCAnaHJlZmxhbmcnLCAnaWQnLCAnaW50ZWdyaXR5JywgJ2lzbWFwJywgJ2xhYmVsJywgJ2xhbmcnLCAnbGlzdCcsICdsb29wJywgJ2xvdycsICdtYXgnLCAnbWF4bGVuZ3RoJywgJ21lZGlhJywgJ21ldGhvZCcsICdtaW4nLCAnbXVsdGlwbGUnLCAnbmFtZScsICdub3NoYWRlJywgJ25vdmFsaWRhdGUnLCAnbm93cmFwJywgJ29wZW4nLCAnb3B0aW11bScsICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3Bvc3RlcicsICdwcmVsb2FkJywgJ3B1YmRhdGUnLCAncmFkaW9ncm91cCcsICdyZWFkb25seScsICdyZWwnLCAncmVxdWlyZWQnLCAncmV2JywgJ3JldmVyc2VkJywgJ3JvbGUnLCAncm93cycsICdyb3dzcGFuJywgJ3NwZWxsY2hlY2snLCAnc2NvcGUnLCAnc2VsZWN0ZWQnLCAnc2hhcGUnLCAnc2l6ZScsICdzaXplcycsICdzcGFuJywgJ3NyY2xhbmcnLCAnc3RhcnQnLCAnc3JjJywgJ3NyY3NldCcsICdzdGVwJywgJ3N0eWxlJywgJ3N1bW1hcnknLCAndGFiaW5kZXgnLCAndGl0bGUnLCAndHlwZScsICd1c2VtYXAnLCAndmFsaWduJywgJ3ZhbHVlJywgJ3dpZHRoJywgJ3htbG5zJ107XG5cbnZhciBzdmckMSA9IFsnYWNjZW50LWhlaWdodCcsICdhY2N1bXVsYXRlJywgJ2FkZGl0aXZpdmUnLCAnYWxpZ25tZW50LWJhc2VsaW5lJywgJ2FzY2VudCcsICdhdHRyaWJ1dGVuYW1lJywgJ2F0dHJpYnV0ZXR5cGUnLCAnYXppbXV0aCcsICdiYXNlZnJlcXVlbmN5JywgJ2Jhc2VsaW5lLXNoaWZ0JywgJ2JlZ2luJywgJ2JpYXMnLCAnYnknLCAnY2xhc3MnLCAnY2xpcCcsICdjbGlwLXBhdGgnLCAnY2xpcC1ydWxlJywgJ2NvbG9yJywgJ2NvbG9yLWludGVycG9sYXRpb24nLCAnY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzJywgJ2NvbG9yLXByb2ZpbGUnLCAnY29sb3ItcmVuZGVyaW5nJywgJ2N4JywgJ2N5JywgJ2QnLCAnZHgnLCAnZHknLCAnZGlmZnVzZWNvbnN0YW50JywgJ2RpcmVjdGlvbicsICdkaXNwbGF5JywgJ2Rpdmlzb3InLCAnZHVyJywgJ2VkZ2Vtb2RlJywgJ2VsZXZhdGlvbicsICdlbmQnLCAnZmlsbCcsICdmaWxsLW9wYWNpdHknLCAnZmlsbC1ydWxlJywgJ2ZpbHRlcicsICdmbG9vZC1jb2xvcicsICdmbG9vZC1vcGFjaXR5JywgJ2ZvbnQtZmFtaWx5JywgJ2ZvbnQtc2l6ZScsICdmb250LXNpemUtYWRqdXN0JywgJ2ZvbnQtc3RyZXRjaCcsICdmb250LXN0eWxlJywgJ2ZvbnQtdmFyaWFudCcsICdmb250LXdlaWdodCcsICdmeCcsICdmeScsICdnMScsICdnMicsICdnbHlwaC1uYW1lJywgJ2dseXBocmVmJywgJ2dyYWRpZW50dW5pdHMnLCAnZ3JhZGllbnR0cmFuc2Zvcm0nLCAnaGVpZ2h0JywgJ2hyZWYnLCAnaWQnLCAnaW1hZ2UtcmVuZGVyaW5nJywgJ2luJywgJ2luMicsICdrJywgJ2sxJywgJ2syJywgJ2szJywgJ2s0JywgJ2tlcm5pbmcnLCAna2V5cG9pbnRzJywgJ2tleXNwbGluZXMnLCAna2V5dGltZXMnLCAnbGFuZycsICdsZW5ndGhhZGp1c3QnLCAnbGV0dGVyLXNwYWNpbmcnLCAna2VybmVsbWF0cml4JywgJ2tlcm5lbHVuaXRsZW5ndGgnLCAnbGlnaHRpbmctY29sb3InLCAnbG9jYWwnLCAnbWFya2VyLWVuZCcsICdtYXJrZXItbWlkJywgJ21hcmtlci1zdGFydCcsICdtYXJrZXJoZWlnaHQnLCAnbWFya2VydW5pdHMnLCAnbWFya2Vyd2lkdGgnLCAnbWFza2NvbnRlbnR1bml0cycsICdtYXNrdW5pdHMnLCAnbWF4JywgJ21hc2snLCAnbWVkaWEnLCAnbWV0aG9kJywgJ21vZGUnLCAnbWluJywgJ25hbWUnLCAnbnVtb2N0YXZlcycsICdvZmZzZXQnLCAnb3BlcmF0b3InLCAnb3BhY2l0eScsICdvcmRlcicsICdvcmllbnQnLCAnb3JpZW50YXRpb24nLCAnb3JpZ2luJywgJ292ZXJmbG93JywgJ3BhaW50LW9yZGVyJywgJ3BhdGgnLCAncGF0aGxlbmd0aCcsICdwYXR0ZXJuY29udGVudHVuaXRzJywgJ3BhdHRlcm50cmFuc2Zvcm0nLCAncGF0dGVybnVuaXRzJywgJ3BvaW50cycsICdwcmVzZXJ2ZWFscGhhJywgJ3ByZXNlcnZlYXNwZWN0cmF0aW8nLCAncicsICdyeCcsICdyeScsICdyYWRpdXMnLCAncmVmeCcsICdyZWZ5JywgJ3JlcGVhdGNvdW50JywgJ3JlcGVhdGR1cicsICdyZXN0YXJ0JywgJ3Jlc3VsdCcsICdyb3RhdGUnLCAnc2NhbGUnLCAnc2VlZCcsICdzaGFwZS1yZW5kZXJpbmcnLCAnc3BlY3VsYXJjb25zdGFudCcsICdzcGVjdWxhcmV4cG9uZW50JywgJ3NwcmVhZG1ldGhvZCcsICdzdGRkZXZpYXRpb24nLCAnc3RpdGNodGlsZXMnLCAnc3RvcC1jb2xvcicsICdzdG9wLW9wYWNpdHknLCAnc3Ryb2tlLWRhc2hhcnJheScsICdzdHJva2UtZGFzaG9mZnNldCcsICdzdHJva2UtbGluZWNhcCcsICdzdHJva2UtbGluZWpvaW4nLCAnc3Ryb2tlLW1pdGVybGltaXQnLCAnc3Ryb2tlLW9wYWNpdHknLCAnc3Ryb2tlJywgJ3N0cm9rZS13aWR0aCcsICdzdHlsZScsICdzdXJmYWNlc2NhbGUnLCAndGFiaW5kZXgnLCAndGFyZ2V0eCcsICd0YXJnZXR5JywgJ3RyYW5zZm9ybScsICd0ZXh0LWFuY2hvcicsICd0ZXh0LWRlY29yYXRpb24nLCAndGV4dC1yZW5kZXJpbmcnLCAndGV4dGxlbmd0aCcsICd0eXBlJywgJ3UxJywgJ3UyJywgJ3VuaWNvZGUnLCAndmFsdWVzJywgJ3ZpZXdib3gnLCAndmlzaWJpbGl0eScsICd2ZXJ0LWFkdi15JywgJ3ZlcnQtb3JpZ2luLXgnLCAndmVydC1vcmlnaW4teScsICd3aWR0aCcsICd3b3JkLXNwYWNpbmcnLCAnd3JhcCcsICd3cml0aW5nLW1vZGUnLCAneGNoYW5uZWxzZWxlY3RvcicsICd5Y2hhbm5lbHNlbGVjdG9yJywgJ3gnLCAneDEnLCAneDInLCAneG1sbnMnLCAneScsICd5MScsICd5MicsICd6JywgJ3pvb21hbmRwYW4nXTtcblxudmFyIG1hdGhNbCQxID0gWydhY2NlbnQnLCAnYWNjZW50dW5kZXInLCAnYWxpZ24nLCAnYmV2ZWxsZWQnLCAnY2xvc2UnLCAnY29sdW1uc2FsaWduJywgJ2NvbHVtbmxpbmVzJywgJ2NvbHVtbnNwYW4nLCAnZGVub21hbGlnbicsICdkZXB0aCcsICdkaXInLCAnZGlzcGxheScsICdkaXNwbGF5c3R5bGUnLCAnZmVuY2UnLCAnZnJhbWUnLCAnaGVpZ2h0JywgJ2hyZWYnLCAnaWQnLCAnbGFyZ2VvcCcsICdsZW5ndGgnLCAnbGluZXRoaWNrbmVzcycsICdsc3BhY2UnLCAnbHF1b3RlJywgJ21hdGhiYWNrZ3JvdW5kJywgJ21hdGhjb2xvcicsICdtYXRoc2l6ZScsICdtYXRodmFyaWFudCcsICdtYXhzaXplJywgJ21pbnNpemUnLCAnbW92YWJsZWxpbWl0cycsICdub3RhdGlvbicsICdudW1hbGlnbicsICdvcGVuJywgJ3Jvd2FsaWduJywgJ3Jvd2xpbmVzJywgJ3Jvd3NwYWNpbmcnLCAncm93c3BhbicsICdyc3BhY2UnLCAncnF1b3RlJywgJ3NjcmlwdGxldmVsJywgJ3NjcmlwdG1pbnNpemUnLCAnc2NyaXB0c2l6ZW11bHRpcGxpZXInLCAnc2VsZWN0aW9uJywgJ3NlcGFyYXRvcicsICdzZXBhcmF0b3JzJywgJ3N0cmV0Y2h5JywgJ3N1YnNjcmlwdHNoaWZ0JywgJ3N1cHNjcmlwdHNoaWZ0JywgJ3N5bW1ldHJpYycsICd2b2Zmc2V0JywgJ3dpZHRoJywgJ3htbG5zJ107XG5cbnZhciB4bWwgPSBbJ3hsaW5rOmhyZWYnLCAneG1sOmlkJywgJ3hsaW5rOnRpdGxlJywgJ3htbDpzcGFjZScsICd4bWxuczp4bGluayddO1xuXG4vKiBBZGQgcHJvcGVydGllcyB0byBhIGxvb2t1cCB0YWJsZSAqL1xuZnVuY3Rpb24gYWRkVG9TZXQoc2V0LCBhcnJheSkge1xuICB2YXIgbCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGwtLSkge1xuICAgIGlmICh0eXBlb2YgYXJyYXlbbF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICBhcnJheVtsXSA9IGFycmF5W2xdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIHNldFthcnJheVtsXV0gPSB0cnVlO1xuICB9XG4gIHJldHVybiBzZXQ7XG59XG5cbi8qIFNoYWxsb3cgY2xvbmUgYW4gb2JqZWN0ICovXG5mdW5jdGlvbiBjbG9uZShvYmplY3QpIHtcbiAgdmFyIG5ld09iamVjdCA9IHt9O1xuICB2YXIgcHJvcGVydHkgPSB2b2lkIDA7XG4gIGZvciAocHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgICAgbmV3T2JqZWN0W3Byb3BlcnR5XSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdPYmplY3Q7XG59XG5cbnZhciBNVVNUQUNIRV9FWFBSID0gL1xce1xce1tcXHNcXFNdKnxbXFxzXFxTXSpcXH1cXH0vZ207IC8vIFNwZWNpZnkgdGVtcGxhdGUgZGV0ZWN0aW9uIHJlZ2V4IGZvciBTQUZFX0ZPUl9URU1QTEFURVMgbW9kZVxudmFyIEVSQl9FWFBSID0gLzwlW1xcc1xcU10qfFtcXHNcXFNdKiU+L2dtO1xudmFyIERBVEFfQVRUUiA9IC9eZGF0YS1bXFwtXFx3LlxcdTAwQjctXFx1RkZGRl0vOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG52YXIgQVJJQV9BVFRSID0gL15hcmlhLVtcXC1cXHddKyQvOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG52YXIgSVNfQUxMT1dFRF9VUkkgPSAvXig/Oig/Oig/OmZ8aHQpdHBzP3xtYWlsdG98dGVsfGNhbGx0b3xjaWR8eG1wcCk6fFteYS16XXxbYS16Ky5cXC1dKyg/OlteYS16Ky5cXC06XXwkKSkvaTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxudmFyIElTX1NDUklQVF9PUl9EQVRBID0gL14oPzpcXHcrc2NyaXB0fGRhdGEpOi9pO1xudmFyIEFUVFJfV0hJVEVTUEFDRSA9IC9bXFx1MDAwMC1cXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUxODBFXFx1MjAwMC1cXHUyMDI5XFx1MjA1ZlxcdTMwMDBdL2c7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29udHJvbC1yZWdleFxuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG52YXIgZ2V0R2xvYmFsID0gZnVuY3Rpb24gZ2V0R2xvYmFsKCkge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRE9NUHVyaWZ5KCkge1xuICB2YXIgd2luZG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBnZXRHbG9iYWwoKTtcblxuICB2YXIgRE9NUHVyaWZ5ID0gZnVuY3Rpb24gRE9NUHVyaWZ5KHJvb3QpIHtcbiAgICByZXR1cm4gY3JlYXRlRE9NUHVyaWZ5KHJvb3QpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBWZXJzaW9uIGxhYmVsLCBleHBvc2VkIGZvciBlYXNpZXIgY2hlY2tzXG4gICAqIGlmIERPTVB1cmlmeSBpcyB1cCB0byBkYXRlIG9yIG5vdFxuICAgKi9cbiAgRE9NUHVyaWZ5LnZlcnNpb24gPSAnMS4wLjgnO1xuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBlbGVtZW50cyB0aGF0IERPTVB1cmlmeSByZW1vdmVkIGR1cmluZyBzYW5pdGF0aW9uLlxuICAgKiBFbXB0eSBpZiBub3RoaW5nIHdhcyByZW1vdmVkLlxuICAgKi9cbiAgRE9NUHVyaWZ5LnJlbW92ZWQgPSBbXTtcblxuICBpZiAoIXdpbmRvdyB8fCAhd2luZG93LmRvY3VtZW50IHx8IHdpbmRvdy5kb2N1bWVudC5ub2RlVHlwZSAhPT0gOSkge1xuICAgIC8vIE5vdCBydW5uaW5nIGluIGEgYnJvd3NlciwgcHJvdmlkZSBhIGZhY3RvcnkgZnVuY3Rpb25cbiAgICAvLyBzbyB0aGF0IHlvdSBjYW4gcGFzcyB5b3VyIG93biBXaW5kb3dcbiAgICBET01QdXJpZnkuaXNTdXBwb3J0ZWQgPSBmYWxzZTtcblxuICAgIHJldHVybiBET01QdXJpZnk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbiAgdmFyIHVzZURPTVBhcnNlciA9IGZhbHNlOyAvLyBTZWUgY29tbWVudCBiZWxvd1xuICB2YXIgcmVtb3ZlVGl0bGUgPSBmYWxzZTsgLy8gU2VlIGNvbW1lbnQgYmVsb3dcblxuICB2YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG4gIHZhciBEb2N1bWVudEZyYWdtZW50ID0gd2luZG93LkRvY3VtZW50RnJhZ21lbnQsXG4gICAgICBIVE1MVGVtcGxhdGVFbGVtZW50ID0gd2luZG93LkhUTUxUZW1wbGF0ZUVsZW1lbnQsXG4gICAgICBOb2RlID0gd2luZG93Lk5vZGUsXG4gICAgICBOb2RlRmlsdGVyID0gd2luZG93Lk5vZGVGaWx0ZXIsXG4gICAgICBfd2luZG93JE5hbWVkTm9kZU1hcCA9IHdpbmRvdy5OYW1lZE5vZGVNYXAsXG4gICAgICBOYW1lZE5vZGVNYXAgPSBfd2luZG93JE5hbWVkTm9kZU1hcCA9PT0gdW5kZWZpbmVkID8gd2luZG93Lk5hbWVkTm9kZU1hcCB8fCB3aW5kb3cuTW96TmFtZWRBdHRyTWFwIDogX3dpbmRvdyROYW1lZE5vZGVNYXAsXG4gICAgICBUZXh0ID0gd2luZG93LlRleHQsXG4gICAgICBDb21tZW50ID0gd2luZG93LkNvbW1lbnQsXG4gICAgICBET01QYXJzZXIgPSB3aW5kb3cuRE9NUGFyc2VyO1xuXG4gIC8vIEFzIHBlciBpc3N1ZSAjNDcsIHRoZSB3ZWItY29tcG9uZW50cyByZWdpc3RyeSBpcyBpbmhlcml0ZWQgYnkgYVxuICAvLyBuZXcgZG9jdW1lbnQgY3JlYXRlZCB2aWEgY3JlYXRlSFRNTERvY3VtZW50LiBBcyBwZXIgdGhlIHNwZWNcbiAgLy8gKGh0dHA6Ly93M2MuZ2l0aHViLmlvL3dlYmNvbXBvbmVudHMvc3BlYy9jdXN0b20vI2NyZWF0aW5nLWFuZC1wYXNzaW5nLXJlZ2lzdHJpZXMpXG4gIC8vIGEgbmV3IGVtcHR5IHJlZ2lzdHJ5IGlzIHVzZWQgd2hlbiBjcmVhdGluZyBhIHRlbXBsYXRlIGNvbnRlbnRzIG93bmVyXG4gIC8vIGRvY3VtZW50LCBzbyB3ZSB1c2UgdGhhdCBhcyBvdXIgcGFyZW50IGRvY3VtZW50IHRvIGVuc3VyZSBub3RoaW5nXG4gIC8vIGlzIGluaGVyaXRlZC5cblxuICBpZiAodHlwZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGlmICh0ZW1wbGF0ZS5jb250ZW50ICYmIHRlbXBsYXRlLmNvbnRlbnQub3duZXJEb2N1bWVudCkge1xuICAgICAgZG9jdW1lbnQgPSB0ZW1wbGF0ZS5jb250ZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9kb2N1bWVudCA9IGRvY3VtZW50LFxuICAgICAgaW1wbGVtZW50YXRpb24gPSBfZG9jdW1lbnQuaW1wbGVtZW50YXRpb24sXG4gICAgICBjcmVhdGVOb2RlSXRlcmF0b3IgPSBfZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yLFxuICAgICAgZ2V0RWxlbWVudHNCeVRhZ05hbWUgPSBfZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUsXG4gICAgICBjcmVhdGVEb2N1bWVudEZyYWdtZW50ID0gX2RvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQ7XG4gIHZhciBpbXBvcnROb2RlID0gb3JpZ2luYWxEb2N1bWVudC5pbXBvcnROb2RlO1xuXG5cbiAgdmFyIGhvb2tzID0ge307XG5cbiAgLyoqXG4gICAqIEV4cG9zZSB3aGV0aGVyIHRoaXMgYnJvd3NlciBzdXBwb3J0cyBydW5uaW5nIHRoZSBmdWxsIERPTVB1cmlmeS5cbiAgICovXG4gIERPTVB1cmlmeS5pc1N1cHBvcnRlZCA9IGltcGxlbWVudGF0aW9uICYmIHR5cGVvZiBpbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50TW9kZSAhPT0gOTtcblxuICB2YXIgTVVTVEFDSEVfRVhQUiQkMSA9IE1VU1RBQ0hFX0VYUFIsXG4gICAgICBFUkJfRVhQUiQkMSA9IEVSQl9FWFBSLFxuICAgICAgREFUQV9BVFRSJCQxID0gREFUQV9BVFRSLFxuICAgICAgQVJJQV9BVFRSJCQxID0gQVJJQV9BVFRSLFxuICAgICAgSVNfU0NSSVBUX09SX0RBVEEkJDEgPSBJU19TQ1JJUFRfT1JfREFUQSxcbiAgICAgIEFUVFJfV0hJVEVTUEFDRSQkMSA9IEFUVFJfV0hJVEVTUEFDRTtcbiAgdmFyIElTX0FMTE9XRURfVVJJJCQxID0gSVNfQUxMT1dFRF9VUkk7XG4gIC8qKlxuICAgKiBXZSBjb25zaWRlciB0aGUgZWxlbWVudHMgYW5kIGF0dHJpYnV0ZXMgYmVsb3cgdG8gYmUgc2FmZS4gSWRlYWxseVxuICAgKiBkb24ndCBhZGQgYW55IG5ldyBvbmVzIGJ1dCBmZWVsIGZyZWUgdG8gcmVtb3ZlIHVud2FudGVkIG9uZXMuXG4gICAqL1xuXG4gIC8qIGFsbG93ZWQgZWxlbWVudCBuYW1lcyAqL1xuXG4gIHZhciBBTExPV0VEX1RBR1MgPSBudWxsO1xuICB2YXIgREVGQVVMVF9BTExPV0VEX1RBR1MgPSBhZGRUb1NldCh7fSwgW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShodG1sKSwgX3RvQ29uc3VtYWJsZUFycmF5KHN2ZyksIF90b0NvbnN1bWFibGVBcnJheShzdmdGaWx0ZXJzKSwgX3RvQ29uc3VtYWJsZUFycmF5KG1hdGhNbCksIF90b0NvbnN1bWFibGVBcnJheSh0ZXh0KSkpO1xuXG4gIC8qIEFsbG93ZWQgYXR0cmlidXRlIG5hbWVzICovXG4gIHZhciBBTExPV0VEX0FUVFIgPSBudWxsO1xuICB2YXIgREVGQVVMVF9BTExPV0VEX0FUVFIgPSBhZGRUb1NldCh7fSwgW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShodG1sJDEpLCBfdG9Db25zdW1hYmxlQXJyYXkoc3ZnJDEpLCBfdG9Db25zdW1hYmxlQXJyYXkobWF0aE1sJDEpLCBfdG9Db25zdW1hYmxlQXJyYXkoeG1sKSkpO1xuXG4gIC8qIEV4cGxpY2l0bHkgZm9yYmlkZGVuIHRhZ3MgKG92ZXJyaWRlcyBBTExPV0VEX1RBR1MvQUREX1RBR1MpICovXG4gIHZhciBGT1JCSURfVEFHUyA9IG51bGw7XG5cbiAgLyogRXhwbGljaXRseSBmb3JiaWRkZW4gYXR0cmlidXRlcyAob3ZlcnJpZGVzIEFMTE9XRURfQVRUUi9BRERfQVRUUikgKi9cbiAgdmFyIEZPUkJJRF9BVFRSID0gbnVsbDtcblxuICAvKiBEZWNpZGUgaWYgQVJJQSBhdHRyaWJ1dGVzIGFyZSBva2F5ICovXG4gIHZhciBBTExPV19BUklBX0FUVFIgPSB0cnVlO1xuXG4gIC8qIERlY2lkZSBpZiBjdXN0b20gZGF0YSBhdHRyaWJ1dGVzIGFyZSBva2F5ICovXG4gIHZhciBBTExPV19EQVRBX0FUVFIgPSB0cnVlO1xuXG4gIC8qIERlY2lkZSBpZiB1bmtub3duIHByb3RvY29scyBhcmUgb2theSAqL1xuICB2YXIgQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgPSBmYWxzZTtcblxuICAvKiBPdXRwdXQgc2hvdWxkIGJlIHNhZmUgZm9yIGpRdWVyeSdzICQoKSBmYWN0b3J5PyAqL1xuICB2YXIgU0FGRV9GT1JfSlFVRVJZID0gZmFsc2U7XG5cbiAgLyogT3V0cHV0IHNob3VsZCBiZSBzYWZlIGZvciBjb21tb24gdGVtcGxhdGUgZW5naW5lcy5cbiAgICogVGhpcyBtZWFucywgRE9NUHVyaWZ5IHJlbW92ZXMgZGF0YSBhdHRyaWJ1dGVzLCBtdXN0YWNoZXMgYW5kIEVSQlxuICAgKi9cbiAgdmFyIFNBRkVfRk9SX1RFTVBMQVRFUyA9IGZhbHNlO1xuXG4gIC8qIERlY2lkZSBpZiBkb2N1bWVudCB3aXRoIDxodG1sPi4uLiBzaG91bGQgYmUgcmV0dXJuZWQgKi9cbiAgdmFyIFdIT0xFX0RPQ1VNRU5UID0gZmFsc2U7XG5cbiAgLyogVHJhY2sgd2hldGhlciBjb25maWcgaXMgYWxyZWFkeSBzZXQgb24gdGhpcyBpbnN0YW5jZSBvZiBET01QdXJpZnkuICovXG4gIHZhciBTRVRfQ09ORklHID0gZmFsc2U7XG5cbiAgLyogRGVjaWRlIGlmIGFsbCBlbGVtZW50cyAoZS5nLiBzdHlsZSwgc2NyaXB0KSBtdXN0IGJlIGNoaWxkcmVuIG9mXG4gICAqIGRvY3VtZW50LmJvZHkuIEJ5IGRlZmF1bHQsIGJyb3dzZXJzIG1pZ2h0IG1vdmUgdGhlbSB0byBkb2N1bWVudC5oZWFkICovXG4gIHZhciBGT1JDRV9CT0RZID0gZmFsc2U7XG5cbiAgLyogRGVjaWRlIGlmIGEgRE9NIGBIVE1MQm9keUVsZW1lbnRgIHNob3VsZCBiZSByZXR1cm5lZCwgaW5zdGVhZCBvZiBhIGh0bWwgc3RyaW5nLlxuICAgKiBJZiBgV0hPTEVfRE9DVU1FTlRgIGlzIGVuYWJsZWQgYSBgSFRNTEh0bWxFbGVtZW50YCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWRcbiAgICovXG4gIHZhciBSRVRVUk5fRE9NID0gZmFsc2U7XG5cbiAgLyogRGVjaWRlIGlmIGEgRE9NIGBEb2N1bWVudEZyYWdtZW50YCBzaG91bGQgYmUgcmV0dXJuZWQsIGluc3RlYWQgb2YgYSBodG1sIHN0cmluZyAqL1xuICB2YXIgUkVUVVJOX0RPTV9GUkFHTUVOVCA9IGZhbHNlO1xuXG4gIC8qIElmIGBSRVRVUk5fRE9NYCBvciBgUkVUVVJOX0RPTV9GUkFHTUVOVGAgaXMgZW5hYmxlZCwgZGVjaWRlIGlmIHRoZSByZXR1cm5lZCBET01cbiAgICogYE5vZGVgIGlzIGltcG9ydGVkIGludG8gdGhlIGN1cnJlbnQgYERvY3VtZW50YC4gSWYgdGhpcyBmbGFnIGlzIG5vdCBlbmFibGVkIHRoZVxuICAgKiBgTm9kZWAgd2lsbCBiZWxvbmcgKGl0cyBvd25lckRvY3VtZW50KSB0byBhIGZyZXNoIGBIVE1MRG9jdW1lbnRgLCBjcmVhdGVkIGJ5XG4gICAqIERPTVB1cmlmeS4gKi9cbiAgdmFyIFJFVFVSTl9ET01fSU1QT1JUID0gZmFsc2U7XG5cbiAgLyogT3V0cHV0IHNob3VsZCBiZSBmcmVlIGZyb20gRE9NIGNsb2JiZXJpbmcgYXR0YWNrcz8gKi9cbiAgdmFyIFNBTklUSVpFX0RPTSA9IHRydWU7XG5cbiAgLyogS2VlcCBlbGVtZW50IGNvbnRlbnQgd2hlbiByZW1vdmluZyBlbGVtZW50PyAqL1xuICB2YXIgS0VFUF9DT05URU5UID0gdHJ1ZTtcblxuICAvKiBJZiBhIGBOb2RlYCBpcyBwYXNzZWQgdG8gc2FuaXRpemUoKSwgdGhlbiBwZXJmb3JtcyBzYW5pdGl6YXRpb24gaW4tcGxhY2UgaW5zdGVhZFxuICAgKiBvZiBpbXBvcnRpbmcgaXQgaW50byBhIG5ldyBEb2N1bWVudCBhbmQgcmV0dXJuaW5nIGEgc2FuaXRpemVkIGNvcHkgKi9cbiAgdmFyIElOX1BMQUNFID0gZmFsc2U7XG5cbiAgLyogQWxsb3cgdXNhZ2Ugb2YgcHJvZmlsZXMgbGlrZSBodG1sLCBzdmcgYW5kIG1hdGhNbCAqL1xuICB2YXIgVVNFX1BST0ZJTEVTID0ge307XG5cbiAgLyogVGFncyB0byBpZ25vcmUgY29udGVudCBvZiB3aGVuIEtFRVBfQ09OVEVOVCBpcyB0cnVlICovXG4gIHZhciBGT1JCSURfQ09OVEVOVFMgPSBhZGRUb1NldCh7fSwgWydhdWRpbycsICdoZWFkJywgJ21hdGgnLCAnc2NyaXB0JywgJ3N0eWxlJywgJ3RlbXBsYXRlJywgJ3N2ZycsICd2aWRlbyddKTtcblxuICAvKiBUYWdzIHRoYXQgYXJlIHNhZmUgZm9yIGRhdGE6IFVSSXMgKi9cbiAgdmFyIERBVEFfVVJJX1RBR1MgPSBhZGRUb1NldCh7fSwgWydhdWRpbycsICd2aWRlbycsICdpbWcnLCAnc291cmNlJywgJ2ltYWdlJ10pO1xuXG4gIC8qIEF0dHJpYnV0ZXMgc2FmZSBmb3IgdmFsdWVzIGxpa2UgXCJqYXZhc2NyaXB0OlwiICovXG4gIHZhciBVUklfU0FGRV9BVFRSSUJVVEVTID0gYWRkVG9TZXQoe30sIFsnYWx0JywgJ2NsYXNzJywgJ2ZvcicsICdpZCcsICdsYWJlbCcsICduYW1lJywgJ3BhdHRlcm4nLCAncGxhY2Vob2xkZXInLCAnc3VtbWFyeScsICd0aXRsZScsICd2YWx1ZScsICdzdHlsZScsICd4bWxucyddKTtcblxuICAvKiBLZWVwIGEgcmVmZXJlbmNlIHRvIGNvbmZpZyB0byBwYXNzIHRvIGhvb2tzICovXG4gIHZhciBDT05GSUcgPSBudWxsO1xuXG4gIC8qIElkZWFsbHksIGRvIG5vdCB0b3VjaCBhbnl0aGluZyBiZWxvdyB0aGlzIGxpbmUgKi9cbiAgLyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xuXG4gIHZhciBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAvKipcbiAgICogX3BhcnNlQ29uZmlnXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gY2ZnIG9wdGlvbmFsIGNvbmZpZyBsaXRlcmFsXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICB2YXIgX3BhcnNlQ29uZmlnID0gZnVuY3Rpb24gX3BhcnNlQ29uZmlnKGNmZykge1xuICAgIC8qIFNoaWVsZCBjb25maWd1cmF0aW9uIG9iamVjdCBmcm9tIHRhbXBlcmluZyAqL1xuICAgIGlmICgodHlwZW9mIGNmZyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoY2ZnKSkgIT09ICdvYmplY3QnKSB7XG4gICAgICBjZmcgPSB7fTtcbiAgICB9XG4gICAgLyogU2V0IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyAqL1xuICAgIEFMTE9XRURfVEFHUyA9ICdBTExPV0VEX1RBR1MnIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9UQUdTKSA6IERFRkFVTFRfQUxMT1dFRF9UQUdTO1xuICAgIEFMTE9XRURfQVRUUiA9ICdBTExPV0VEX0FUVFInIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9BVFRSKSA6IERFRkFVTFRfQUxMT1dFRF9BVFRSO1xuICAgIEZPUkJJRF9UQUdTID0gJ0ZPUkJJRF9UQUdTJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9UQUdTKSA6IHt9O1xuICAgIEZPUkJJRF9BVFRSID0gJ0ZPUkJJRF9BVFRSJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9BVFRSKSA6IHt9O1xuICAgIFVTRV9QUk9GSUxFUyA9ICdVU0VfUFJPRklMRVMnIGluIGNmZyA/IGNmZy5VU0VfUFJPRklMRVMgOiBmYWxzZTtcbiAgICBBTExPV19BUklBX0FUVFIgPSBjZmcuQUxMT1dfQVJJQV9BVFRSICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgQUxMT1dfREFUQV9BVFRSID0gY2ZnLkFMTE9XX0RBVEFfQVRUUiAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgIEFMTE9XX1VOS05PV05fUFJPVE9DT0xTID0gY2ZnLkFMTE9XX1VOS05PV05fUFJPVE9DT0xTIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgU0FGRV9GT1JfSlFVRVJZID0gY2ZnLlNBRkVfRk9SX0pRVUVSWSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgIFNBRkVfRk9SX1RFTVBMQVRFUyA9IGNmZy5TQUZFX0ZPUl9URU1QTEFURVMgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICBXSE9MRV9ET0NVTUVOVCA9IGNmZy5XSE9MRV9ET0NVTUVOVCB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgIFJFVFVSTl9ET00gPSBjZmcuUkVUVVJOX0RPTSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgIFJFVFVSTl9ET01fRlJBR01FTlQgPSBjZmcuUkVUVVJOX0RPTV9GUkFHTUVOVCB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgIFJFVFVSTl9ET01fSU1QT1JUID0gY2ZnLlJFVFVSTl9ET01fSU1QT1JUIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgRk9SQ0VfQk9EWSA9IGNmZy5GT1JDRV9CT0RZIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgU0FOSVRJWkVfRE9NID0gY2ZnLlNBTklUSVpFX0RPTSAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgIEtFRVBfQ09OVEVOVCA9IGNmZy5LRUVQX0NPTlRFTlQgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcbiAgICBJTl9QTEFDRSA9IGNmZy5JTl9QTEFDRSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuXG4gICAgSVNfQUxMT1dFRF9VUkkkJDEgPSBjZmcuQUxMT1dFRF9VUklfUkVHRVhQIHx8IElTX0FMTE9XRURfVVJJJCQxO1xuXG4gICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUykge1xuICAgICAgQUxMT1dfREFUQV9BVFRSID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKFJFVFVSTl9ET01fRlJBR01FTlQpIHtcbiAgICAgIFJFVFVSTl9ET00gPSB0cnVlO1xuICAgIH1cblxuICAgIC8qIFBhcnNlIHByb2ZpbGUgaW5mbyAqL1xuICAgIGlmIChVU0VfUFJPRklMRVMpIHtcbiAgICAgIEFMTE9XRURfVEFHUyA9IGFkZFRvU2V0KHt9LCBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHRleHQpKSk7XG4gICAgICBBTExPV0VEX0FUVFIgPSBbXTtcbiAgICAgIGlmIChVU0VfUFJPRklMRVMuaHRtbCA9PT0gdHJ1ZSkge1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIGh0bWwpO1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIGh0bWwkMSk7XG4gICAgICB9XG4gICAgICBpZiAoVVNFX1BST0ZJTEVTLnN2ZyA9PT0gdHJ1ZSkge1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIHN2Zyk7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgc3ZnJDEpO1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHhtbCk7XG4gICAgICB9XG4gICAgICBpZiAoVVNFX1BST0ZJTEVTLnN2Z0ZpbHRlcnMgPT09IHRydWUpIHtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBzdmdGaWx0ZXJzKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBzdmckMSk7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgIH1cbiAgICAgIGlmIChVU0VfUFJPRklMRVMubWF0aE1sID09PSB0cnVlKSB7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgbWF0aE1sKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBtYXRoTWwkMSk7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBNZXJnZSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgKi9cbiAgICBpZiAoY2ZnLkFERF9UQUdTKSB7XG4gICAgICBpZiAoQUxMT1dFRF9UQUdTID09PSBERUZBVUxUX0FMTE9XRURfVEFHUykge1xuICAgICAgICBBTExPV0VEX1RBR1MgPSBjbG9uZShBTExPV0VEX1RBR1MpO1xuICAgICAgfVxuICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBjZmcuQUREX1RBR1MpO1xuICAgIH1cbiAgICBpZiAoY2ZnLkFERF9BVFRSKSB7XG4gICAgICBpZiAoQUxMT1dFRF9BVFRSID09PSBERUZBVUxUX0FMTE9XRURfQVRUUikge1xuICAgICAgICBBTExPV0VEX0FUVFIgPSBjbG9uZShBTExPV0VEX0FUVFIpO1xuICAgICAgfVxuICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBjZmcuQUREX0FUVFIpO1xuICAgIH1cbiAgICBpZiAoY2ZnLkFERF9VUklfU0FGRV9BVFRSKSB7XG4gICAgICBhZGRUb1NldChVUklfU0FGRV9BVFRSSUJVVEVTLCBjZmcuQUREX1VSSV9TQUZFX0FUVFIpO1xuICAgIH1cblxuICAgIC8qIEFkZCAjdGV4dCBpbiBjYXNlIEtFRVBfQ09OVEVOVCBpcyBzZXQgdG8gdHJ1ZSAqL1xuICAgIGlmIChLRUVQX0NPTlRFTlQpIHtcbiAgICAgIEFMTE9XRURfVEFHU1snI3RleHQnXSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyogQWRkIGh0bWwsIGhlYWQgYW5kIGJvZHkgdG8gQUxMT1dFRF9UQUdTIGluIGNhc2UgV0hPTEVfRE9DVU1FTlQgaXMgdHJ1ZSAqL1xuICAgIGlmIChXSE9MRV9ET0NVTUVOVCkge1xuICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBbJ2h0bWwnLCAnaGVhZCcsICdib2R5J10pO1xuICAgIH1cblxuICAgIC8qIEFkZCB0Ym9keSB0byBBTExPV0VEX1RBR1MgaW4gY2FzZSB0YWJsZXMgYXJlIHBlcm1pdHRlZCwgc2VlICMyODYgKi9cbiAgICBpZiAoQUxMT1dFRF9UQUdTLnRhYmxlKSB7XG4gICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIFsndGJvZHknXSk7XG4gICAgfVxuXG4gICAgLy8gUHJldmVudCBmdXJ0aGVyIG1hbmlwdWxhdGlvbiBvZiBjb25maWd1cmF0aW9uLlxuICAgIC8vIE5vdCBhdmFpbGFibGUgaW4gSUU4LCBTYWZhcmkgNSwgZXRjLlxuICAgIGlmIChPYmplY3QgJiYgJ2ZyZWV6ZScgaW4gT2JqZWN0KSB7XG4gICAgICBPYmplY3QuZnJlZXplKGNmZyk7XG4gICAgfVxuXG4gICAgQ09ORklHID0gY2ZnO1xuICB9O1xuXG4gIC8qKlxuICAgKiBfZm9yY2VSZW1vdmVcbiAgICpcbiAgICogQHBhcmFtICB7Tm9kZX0gbm9kZSBhIERPTSBub2RlXG4gICAqL1xuICB2YXIgX2ZvcmNlUmVtb3ZlID0gZnVuY3Rpb24gX2ZvcmNlUmVtb3ZlKG5vZGUpIHtcbiAgICBET01QdXJpZnkucmVtb3ZlZC5wdXNoKHsgZWxlbWVudDogbm9kZSB9KTtcbiAgICB0cnkge1xuICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgbm9kZS5vdXRlckhUTUwgPSAnJztcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIF9yZW1vdmVBdHRyaWJ1dGVcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lIGFuIEF0dHJpYnV0ZSBuYW1lXG4gICAqIEBwYXJhbSAge05vZGV9IG5vZGUgYSBET00gbm9kZVxuICAgKi9cbiAgdmFyIF9yZW1vdmVBdHRyaWJ1dGUgPSBmdW5jdGlvbiBfcmVtb3ZlQXR0cmlidXRlKG5hbWUsIG5vZGUpIHtcbiAgICB0cnkge1xuICAgICAgRE9NUHVyaWZ5LnJlbW92ZWQucHVzaCh7XG4gICAgICAgIGF0dHJpYnV0ZTogbm9kZS5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpLFxuICAgICAgICBmcm9tOiBub2RlXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIERPTVB1cmlmeS5yZW1vdmVkLnB1c2goe1xuICAgICAgICBhdHRyaWJ1dGU6IG51bGwsXG4gICAgICAgIGZyb206IG5vZGVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfTtcblxuICAvKipcbiAgICogX2luaXREb2N1bWVudFxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGRpcnR5IGEgc3RyaW5nIG9mIGRpcnR5IG1hcmt1cFxuICAgKiBAcmV0dXJuIHtEb2N1bWVudH0gYSBET00sIGZpbGxlZCB3aXRoIHRoZSBkaXJ0eSBtYXJrdXBcbiAgICovXG4gIHZhciBfaW5pdERvY3VtZW50ID0gZnVuY3Rpb24gX2luaXREb2N1bWVudChkaXJ0eSkge1xuICAgIC8qIENyZWF0ZSBhIEhUTUwgZG9jdW1lbnQgKi9cbiAgICB2YXIgZG9jID0gdm9pZCAwO1xuXG4gICAgaWYgKEZPUkNFX0JPRFkpIHtcbiAgICAgIGRpcnR5ID0gJzxyZW1vdmU+PC9yZW1vdmU+JyArIGRpcnR5O1xuICAgIH1cblxuICAgIC8qIFVzZSBET01QYXJzZXIgdG8gd29ya2Fyb3VuZCBGaXJlZm94IGJ1ZyAoc2VlIGNvbW1lbnQgYmVsb3cpICovXG4gICAgaWYgKHVzZURPTVBhcnNlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhkaXJ0eSwgJ3RleHQvaHRtbCcpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgIH1cblxuICAgIC8qIFJlbW92ZSB0aXRsZSB0byBmaXggYW4gbVhTUyBidWcgaW4gb2xkZXIgTVMgRWRnZSAqL1xuICAgIGlmIChyZW1vdmVUaXRsZSkge1xuICAgICAgYWRkVG9TZXQoRk9SQklEX1RBR1MsIFsndGl0bGUnXSk7XG4gICAgfVxuXG4gICAgLyogT3RoZXJ3aXNlIHVzZSBjcmVhdGVIVE1MRG9jdW1lbnQsIGJlY2F1c2UgRE9NUGFyc2VyIGlzIHVuc2FmZSBpblxuICAgIFNhZmFyaSAoc2VlIGNvbW1lbnQgYmVsb3cpICovXG4gICAgaWYgKCFkb2MgfHwgIWRvYy5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGRvYyA9IGltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCgnJyk7XG4gICAgICB2YXIgX2RvYyA9IGRvYyxcbiAgICAgICAgICBib2R5ID0gX2RvYy5ib2R5O1xuXG4gICAgICBib2R5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYm9keS5wYXJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgIGJvZHkub3V0ZXJIVE1MID0gZGlydHk7XG4gICAgfVxuXG4gICAgLyogV29yayBvbiB3aG9sZSBkb2N1bWVudCBvciBqdXN0IGl0cyBib2R5ICovXG4gICAgcmV0dXJuIGdldEVsZW1lbnRzQnlUYWdOYW1lLmNhbGwoZG9jLCBXSE9MRV9ET0NVTUVOVCA/ICdodG1sJyA6ICdib2R5JylbMF07XG4gIH07XG5cbiAgLy8gRmlyZWZveCB1c2VzIGEgZGlmZmVyZW50IHBhcnNlciBmb3IgaW5uZXJIVE1MIHJhdGhlciB0aGFuXG4gIC8vIERPTVBhcnNlciAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyMDU2MzEpXG4gIC8vIHdoaWNoIG1lYW5zIHRoYXQgeW91ICptdXN0KiB1c2UgRE9NUGFyc2VyLCBvdGhlcndpc2UgdGhlIG91dHB1dCBtYXlcbiAgLy8gbm90IGJlIHNhZmUgaWYgdXNlZCBpbiBhIGRvY3VtZW50LndyaXRlIGNvbnRleHQgbGF0ZXIuXG4gIC8vXG4gIC8vIFNvIHdlIGZlYXR1cmUgZGV0ZWN0IHRoZSBGaXJlZm94IGJ1ZyBhbmQgdXNlIHRoZSBET01QYXJzZXIgaWYgbmVjZXNzYXJ5LlxuICAvL1xuICAvLyBNUyBFZGdlLCBpbiBvbGRlciB2ZXJzaW9ucywgaXMgYWZmZWN0ZWQgYnkgYW4gbVhTUyBiZWhhdmlvci4gVGhlIHNlY29uZFxuICAvLyBjaGVjayB0ZXN0cyBmb3IgdGhlIGJlaGF2aW9yIGFuZCBmaXhlcyBpdCBpZiBuZWNlc3NhcnkuXG4gIGlmIChET01QdXJpZnkuaXNTdXBwb3J0ZWQpIHtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIGRvYyA9IF9pbml0RG9jdW1lbnQoJzxzdmc+PHA+PHN0eWxlPjxpbWcgc3JjPVwiPC9zdHlsZT48aW1nIHNyYz14IG9uZXJyb3I9YWxlcnQoMSkvL1wiPicpO1xuICAgICAgICBpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoJ3N2ZyBpbWcnKSkge1xuICAgICAgICAgIHVzZURPTVBhcnNlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICB9KSgpO1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgZG9jID0gX2luaXREb2N1bWVudCgnPHgvPjx0aXRsZT4mbHQ7L3RpdGxlJmd0OyZsdDtpbWcmZ3Q7Jyk7XG4gICAgICAgIGlmIChkb2MucXVlcnlTZWxlY3RvcigndGl0bGUnKS50ZXh0Q29udGVudC5tYXRjaCgvPFxcL3RpdGxlLykpIHtcbiAgICAgICAgICByZW1vdmVUaXRsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICB9KSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIF9jcmVhdGVJdGVyYXRvclxuICAgKlxuICAgKiBAcGFyYW0gIHtEb2N1bWVudH0gcm9vdCBkb2N1bWVudC9mcmFnbWVudCB0byBjcmVhdGUgaXRlcmF0b3IgZm9yXG4gICAqIEByZXR1cm4ge0l0ZXJhdG9yfSBpdGVyYXRvciBpbnN0YW5jZVxuICAgKi9cbiAgdmFyIF9jcmVhdGVJdGVyYXRvciA9IGZ1bmN0aW9uIF9jcmVhdGVJdGVyYXRvcihyb290KSB7XG4gICAgcmV0dXJuIGNyZWF0ZU5vZGVJdGVyYXRvci5jYWxsKHJvb3Qub3duZXJEb2N1bWVudCB8fCByb290LCByb290LCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19DT01NRU5UIHwgTm9kZUZpbHRlci5TSE9XX1RFWFQsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQ7XG4gICAgfSwgZmFsc2UpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBfaXNDbG9iYmVyZWRcbiAgICpcbiAgICogQHBhcmFtICB7Tm9kZX0gZWxtIGVsZW1lbnQgdG8gY2hlY2sgZm9yIGNsb2JiZXJpbmcgYXR0YWNrc1xuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNsb2JiZXJlZCwgZmFsc2UgaWYgc2FmZVxuICAgKi9cbiAgdmFyIF9pc0Nsb2JiZXJlZCA9IGZ1bmN0aW9uIF9pc0Nsb2JiZXJlZChlbG0pIHtcbiAgICBpZiAoZWxtIGluc3RhbmNlb2YgVGV4dCB8fCBlbG0gaW5zdGFuY2VvZiBDb21tZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZWxtLm5vZGVOYW1lICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxtLnRleHRDb250ZW50ICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxtLnJlbW92ZUNoaWxkICE9PSAnZnVuY3Rpb24nIHx8ICEoZWxtLmF0dHJpYnV0ZXMgaW5zdGFuY2VvZiBOYW1lZE5vZGVNYXApIHx8IHR5cGVvZiBlbG0ucmVtb3ZlQXR0cmlidXRlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbG0uc2V0QXR0cmlidXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBfaXNOb2RlXG4gICAqXG4gICAqIEBwYXJhbSAge05vZGV9IG9iaiBvYmplY3QgdG8gY2hlY2sgd2hldGhlciBpdCdzIGEgRE9NIG5vZGVcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpcyBvYmplY3QgaXMgYSBET00gbm9kZVxuICAgKi9cbiAgdmFyIF9pc05vZGUgPSBmdW5jdGlvbiBfaXNOb2RlKG9iaikge1xuICAgIHJldHVybiAodHlwZW9mIE5vZGUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKE5vZGUpKSA9PT0gJ29iamVjdCcgPyBvYmogaW5zdGFuY2VvZiBOb2RlIDogb2JqICYmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvYmopKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iai5ub2RlVHlwZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIG9iai5ub2RlTmFtZSA9PT0gJ3N0cmluZyc7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9leGVjdXRlSG9va1xuICAgKiBFeGVjdXRlIHVzZXIgY29uZmlndXJhYmxlIGhvb2tzXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gZW50cnlQb2ludCAgTmFtZSBvZiB0aGUgaG9vaydzIGVudHJ5IHBvaW50XG4gICAqIEBwYXJhbSAge05vZGV9IGN1cnJlbnROb2RlIG5vZGUgdG8gd29yayBvbiB3aXRoIHRoZSBob29rXG4gICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBhZGRpdGlvbmFsIGhvb2sgcGFyYW1ldGVyc1xuICAgKi9cbiAgdmFyIF9leGVjdXRlSG9vayA9IGZ1bmN0aW9uIF9leGVjdXRlSG9vayhlbnRyeVBvaW50LCBjdXJyZW50Tm9kZSwgZGF0YSkge1xuICAgIGlmICghaG9va3NbZW50cnlQb2ludF0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBob29rc1tlbnRyeVBvaW50XS5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgICBob29rLmNhbGwoRE9NUHVyaWZ5LCBjdXJyZW50Tm9kZSwgZGF0YSwgQ09ORklHKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogX3Nhbml0aXplRWxlbWVudHNcbiAgICpcbiAgICogQHByb3RlY3Qgbm9kZU5hbWVcbiAgICogQHByb3RlY3QgdGV4dENvbnRlbnRcbiAgICogQHByb3RlY3QgcmVtb3ZlQ2hpbGRcbiAgICpcbiAgICogQHBhcmFtICAge05vZGV9IGN1cnJlbnROb2RlIHRvIGNoZWNrIGZvciBwZXJtaXNzaW9uIHRvIGV4aXN0XG4gICAqIEByZXR1cm4gIHtCb29sZWFufSB0cnVlIGlmIG5vZGUgd2FzIGtpbGxlZCwgZmFsc2UgaWYgbGVmdCBhbGl2ZVxuICAgKi9cbiAgdmFyIF9zYW5pdGl6ZUVsZW1lbnRzID0gZnVuY3Rpb24gX3Nhbml0aXplRWxlbWVudHMoY3VycmVudE5vZGUpIHtcbiAgICB2YXIgY29udGVudCA9IHZvaWQgMDtcblxuICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplRWxlbWVudHMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG5cbiAgICAvKiBDaGVjayBpZiBlbGVtZW50IGlzIGNsb2JiZXJlZCBvciBjYW4gY2xvYmJlciAqL1xuICAgIGlmIChfaXNDbG9iYmVyZWQoY3VycmVudE5vZGUpKSB7XG4gICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyogTm93IGxldCdzIGNoZWNrIHRoZSBlbGVtZW50J3MgdHlwZSBhbmQgbmFtZSAqL1xuICAgIHZhciB0YWdOYW1lID0gY3VycmVudE5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICBfZXhlY3V0ZUhvb2soJ3Vwb25TYW5pdGl6ZUVsZW1lbnQnLCBjdXJyZW50Tm9kZSwge1xuICAgICAgdGFnTmFtZTogdGFnTmFtZSxcbiAgICAgIGFsbG93ZWRUYWdzOiBBTExPV0VEX1RBR1NcbiAgICB9KTtcblxuICAgIC8qIFJlbW92ZSBlbGVtZW50IGlmIGFueXRoaW5nIGZvcmJpZHMgaXRzIHByZXNlbmNlICovXG4gICAgaWYgKCFBTExPV0VEX1RBR1NbdGFnTmFtZV0gfHwgRk9SQklEX1RBR1NbdGFnTmFtZV0pIHtcbiAgICAgIC8qIEtlZXAgY29udGVudCBleGNlcHQgZm9yIGJsYWNrLWxpc3RlZCBlbGVtZW50cyAqL1xuICAgICAgaWYgKEtFRVBfQ09OVEVOVCAmJiAhRk9SQklEX0NPTlRFTlRTW3RhZ05hbWVdICYmIHR5cGVvZiBjdXJyZW50Tm9kZS5pbnNlcnRBZGphY2VudEhUTUwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjdXJyZW50Tm9kZS5pbnNlcnRBZGphY2VudEhUTUwoJ0FmdGVyRW5kJywgY3VycmVudE5vZGUuaW5uZXJIVE1MKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgfVxuICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qIENvbnZlcnQgbWFya3VwIHRvIGNvdmVyIGpRdWVyeSBiZWhhdmlvciAqL1xuICAgIGlmIChTQUZFX0ZPUl9KUVVFUlkgJiYgIWN1cnJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkICYmICghY3VycmVudE5vZGUuY29udGVudCB8fCAhY3VycmVudE5vZGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkgJiYgLzwvZy50ZXN0KGN1cnJlbnROb2RlLnRleHRDb250ZW50KSkge1xuICAgICAgRE9NUHVyaWZ5LnJlbW92ZWQucHVzaCh7IGVsZW1lbnQ6IGN1cnJlbnROb2RlLmNsb25lTm9kZSgpIH0pO1xuICAgICAgaWYgKGN1cnJlbnROb2RlLmlubmVySFRNTCkge1xuICAgICAgICBjdXJyZW50Tm9kZS5pbm5lckhUTUwgPSBjdXJyZW50Tm9kZS5pbm5lckhUTUwucmVwbGFjZSgvPC9nLCAnJmx0OycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudE5vZGUuaW5uZXJIVE1MID0gY3VycmVudE5vZGUudGV4dENvbnRlbnQucmVwbGFjZSgvPC9nLCAnJmx0OycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIFNhbml0aXplIGVsZW1lbnQgY29udGVudCB0byBiZSB0ZW1wbGF0ZS1zYWZlICovXG4gICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUyAmJiBjdXJyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgLyogR2V0IHRoZSBlbGVtZW50J3MgdGV4dCBjb250ZW50ICovXG4gICAgICBjb250ZW50ID0gY3VycmVudE5vZGUudGV4dENvbnRlbnQ7XG4gICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKE1VU1RBQ0hFX0VYUFIkJDEsICcgJyk7XG4gICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKEVSQl9FWFBSJCQxLCAnICcpO1xuICAgICAgaWYgKGN1cnJlbnROb2RlLnRleHRDb250ZW50ICE9PSBjb250ZW50KSB7XG4gICAgICAgIERPTVB1cmlmeS5yZW1vdmVkLnB1c2goeyBlbGVtZW50OiBjdXJyZW50Tm9kZS5jbG9uZU5vZGUoKSB9KTtcbiAgICAgICAgY3VycmVudE5vZGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVFbGVtZW50cycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogX2lzVmFsaWRBdHRyaWJ1dGVcbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSBsY1RhZyBMb3dlcmNhc2UgdGFnIG5hbWUgb2YgY29udGFpbmluZyBlbGVtZW50LlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGxjTmFtZSBMb3dlcmNhc2UgYXR0cmlidXRlIG5hbWUuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWUgQXR0cmlidXRlIHZhbHVlLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgdmFyIF9pc1ZhbGlkQXR0cmlidXRlID0gZnVuY3Rpb24gX2lzVmFsaWRBdHRyaWJ1dGUobGNUYWcsIGxjTmFtZSwgdmFsdWUpIHtcbiAgICAvKiBNYWtlIHN1cmUgYXR0cmlidXRlIGNhbm5vdCBjbG9iYmVyICovXG4gICAgaWYgKFNBTklUSVpFX0RPTSAmJiAobGNOYW1lID09PSAnaWQnIHx8IGxjTmFtZSA9PT0gJ25hbWUnKSAmJiAodmFsdWUgaW4gZG9jdW1lbnQgfHwgdmFsdWUgaW4gZm9ybUVsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyogU2FuaXRpemUgYXR0cmlidXRlIGNvbnRlbnQgdG8gYmUgdGVtcGxhdGUtc2FmZSAqL1xuICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShNVVNUQUNIRV9FWFBSJCQxLCAnICcpO1xuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKEVSQl9FWFBSJCQxLCAnICcpO1xuICAgIH1cblxuICAgIC8qIEFsbG93IHZhbGlkIGRhdGEtKiBhdHRyaWJ1dGVzOiBBdCBsZWFzdCBvbmUgY2hhcmFjdGVyIGFmdGVyIFwiLVwiXG4gICAgICAgIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9kb20uaHRtbCNlbWJlZGRpbmctY3VzdG9tLW5vbi12aXNpYmxlLWRhdGEtd2l0aC10aGUtZGF0YS0qLWF0dHJpYnV0ZXMpXG4gICAgICAgIFhNTC1jb21wYXRpYmxlIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmZyYXN0cnVjdHVyZS5odG1sI3htbC1jb21wYXRpYmxlIGFuZCBodHRwOi8vd3d3LnczLm9yZy9UUi94bWwvI2QwZTgwNClcbiAgICAgICAgV2UgZG9uJ3QgbmVlZCB0byBjaGVjayB0aGUgdmFsdWU7IGl0J3MgYWx3YXlzIFVSSSBzYWZlLiAqL1xuICAgIGlmIChBTExPV19EQVRBX0FUVFIgJiYgREFUQV9BVFRSJCQxLnRlc3QobGNOYW1lKSkge1xuICAgICAgLy8gVGhpcyBhdHRyaWJ1dGUgaXMgc2FmZVxuICAgIH0gZWxzZSBpZiAoQUxMT1dfQVJJQV9BVFRSICYmIEFSSUFfQVRUUiQkMS50ZXN0KGxjTmFtZSkpIHtcbiAgICAgIC8vIFRoaXMgYXR0cmlidXRlIGlzIHNhZmVcbiAgICAgIC8qIE90aGVyd2lzZSwgY2hlY2sgdGhlIG5hbWUgaXMgcGVybWl0dGVkICovXG4gICAgfSBlbHNlIGlmICghQUxMT1dFRF9BVFRSW2xjTmFtZV0gfHwgRk9SQklEX0FUVFJbbGNOYW1lXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAvKiBDaGVjayB2YWx1ZSBpcyBzYWZlLiBGaXJzdCwgaXMgYXR0ciBpbmVydD8gSWYgc28sIGlzIHNhZmUgKi9cbiAgICB9IGVsc2UgaWYgKFVSSV9TQUZFX0FUVFJJQlVURVNbbGNOYW1lXSkge1xuICAgICAgLy8gVGhpcyBhdHRyaWJ1dGUgaXMgc2FmZVxuICAgICAgLyogQ2hlY2sgbm8gc2NyaXB0LCBkYXRhIG9yIHVua25vd24gcG9zc2libHkgdW5zYWZlIFVSSVxuICAgICAgICB1bmxlc3Mgd2Uga25vdyBVUkkgdmFsdWVzIGFyZSBzYWZlIGZvciB0aGF0IGF0dHJpYnV0ZSAqL1xuICAgIH0gZWxzZSBpZiAoSVNfQUxMT1dFRF9VUkkkJDEudGVzdCh2YWx1ZS5yZXBsYWNlKEFUVFJfV0hJVEVTUEFDRSQkMSwgJycpKSkge1xuICAgICAgLy8gVGhpcyBhdHRyaWJ1dGUgaXMgc2FmZVxuICAgICAgLyogS2VlcCBpbWFnZSBkYXRhIFVSSXMgYWxpdmUgaWYgc3JjL3hsaW5rOmhyZWYgaXMgYWxsb3dlZCAqL1xuICAgICAgLyogRnVydGhlciBwcmV2ZW50IGdhZGdldCBYU1MgZm9yIGR5bmFtaWNhbGx5IGJ1aWx0IHNjcmlwdCB0YWdzICovXG4gICAgfSBlbHNlIGlmICgobGNOYW1lID09PSAnc3JjJyB8fCBsY05hbWUgPT09ICd4bGluazpocmVmJykgJiYgbGNUYWcgIT09ICdzY3JpcHQnICYmIHZhbHVlLmluZGV4T2YoJ2RhdGE6JykgPT09IDAgJiYgREFUQV9VUklfVEFHU1tsY1RhZ10pIHtcbiAgICAgIC8vIFRoaXMgYXR0cmlidXRlIGlzIHNhZmVcbiAgICAgIC8qIEFsbG93IHVua25vd24gcHJvdG9jb2xzOiBUaGlzIHByb3ZpZGVzIHN1cHBvcnQgZm9yIGxpbmtzIHRoYXRcbiAgICAgICAgYXJlIGhhbmRsZWQgYnkgcHJvdG9jb2wgaGFuZGxlcnMgd2hpY2ggbWF5IGJlIHVua25vd24gYWhlYWQgb2ZcbiAgICAgICAgdGltZSwgZS5nLiBmYjosIHNwb3RpZnk6ICovXG4gICAgfSBlbHNlIGlmIChBTExPV19VTktOT1dOX1BST1RPQ09MUyAmJiAhSVNfU0NSSVBUX09SX0RBVEEkJDEudGVzdCh2YWx1ZS5yZXBsYWNlKEFUVFJfV0hJVEVTUEFDRSQkMSwgJycpKSkge1xuICAgICAgLy8gVGhpcyBhdHRyaWJ1dGUgaXMgc2FmZVxuICAgICAgLyogQ2hlY2sgZm9yIGJpbmFyeSBhdHRyaWJ1dGVzICovXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVnYXRlZC1jb25kaXRpb25cbiAgICB9IGVsc2UgaWYgKCF2YWx1ZSkge1xuICAgICAgLy8gQmluYXJ5IGF0dHJpYnV0ZXMgYXJlIHNhZmUgYXQgdGhpcyBwb2ludFxuICAgICAgLyogQW55dGhpbmcgZWxzZSwgcHJlc3VtZSB1bnNhZmUsIGRvIG5vdCBhZGQgaXQgYmFjayAqL1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBfc2FuaXRpemVBdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwcm90ZWN0IGF0dHJpYnV0ZXNcbiAgICogQHByb3RlY3Qgbm9kZU5hbWVcbiAgICogQHByb3RlY3QgcmVtb3ZlQXR0cmlidXRlXG4gICAqIEBwcm90ZWN0IHNldEF0dHJpYnV0ZVxuICAgKlxuICAgKiBAcGFyYW0gIHtOb2RlfSBub2RlIHRvIHNhbml0aXplXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICB2YXIgX3Nhbml0aXplQXR0cmlidXRlcyA9IGZ1bmN0aW9uIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoY3VycmVudE5vZGUpIHtcbiAgICB2YXIgYXR0ciA9IHZvaWQgMDtcbiAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG4gICAgdmFyIGxjTmFtZSA9IHZvaWQgMDtcbiAgICB2YXIgaWRBdHRyID0gdm9pZCAwO1xuICAgIHZhciBsID0gdm9pZCAwO1xuICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplQXR0cmlidXRlcycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgIHZhciBhdHRyaWJ1dGVzID0gY3VycmVudE5vZGUuYXR0cmlidXRlcztcblxuICAgIC8qIENoZWNrIGlmIHdlIGhhdmUgYXR0cmlidXRlczsgaWYgbm90IHdlIG1pZ2h0IGhhdmUgYSB0ZXh0IG5vZGUgKi9cblxuICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBob29rRXZlbnQgPSB7XG4gICAgICBhdHRyTmFtZTogJycsXG4gICAgICBhdHRyVmFsdWU6ICcnLFxuICAgICAga2VlcEF0dHI6IHRydWUsXG4gICAgICBhbGxvd2VkQXR0cmlidXRlczogQUxMT1dFRF9BVFRSXG4gICAgfTtcbiAgICBsID0gYXR0cmlidXRlcy5sZW5ndGg7XG5cbiAgICAvKiBHbyBiYWNrd2FyZHMgb3ZlciBhbGwgYXR0cmlidXRlczsgc2FmZWx5IHJlbW92ZSBiYWQgb25lcyAqL1xuICAgIHdoaWxlIChsLS0pIHtcbiAgICAgIGF0dHIgPSBhdHRyaWJ1dGVzW2xdO1xuICAgICAgdmFyIF9hdHRyID0gYXR0cixcbiAgICAgICAgICBuYW1lID0gX2F0dHIubmFtZSxcbiAgICAgICAgICBuYW1lc3BhY2VVUkkgPSBfYXR0ci5uYW1lc3BhY2VVUkk7XG5cbiAgICAgIHZhbHVlID0gYXR0ci52YWx1ZS50cmltKCk7XG4gICAgICBsY05hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIGhvb2tFdmVudC5hdHRyTmFtZSA9IGxjTmFtZTtcbiAgICAgIGhvb2tFdmVudC5hdHRyVmFsdWUgPSB2YWx1ZTtcbiAgICAgIGhvb2tFdmVudC5rZWVwQXR0ciA9IHRydWU7XG4gICAgICBfZXhlY3V0ZUhvb2soJ3Vwb25TYW5pdGl6ZUF0dHJpYnV0ZScsIGN1cnJlbnROb2RlLCBob29rRXZlbnQpO1xuICAgICAgdmFsdWUgPSBob29rRXZlbnQuYXR0clZhbHVlO1xuXG4gICAgICAvKiBSZW1vdmUgYXR0cmlidXRlICovXG4gICAgICAvLyBTYWZhcmkgKGlPUyArIE1hYyksIGxhc3QgdGVzdGVkIHY4LjAuNSwgY3Jhc2hlcyBpZiB5b3UgdHJ5IHRvXG4gICAgICAvLyByZW1vdmUgYSBcIm5hbWVcIiBhdHRyaWJ1dGUgZnJvbSBhbiA8aW1nPiB0YWcgdGhhdCBoYXMgYW4gXCJpZFwiXG4gICAgICAvLyBhdHRyaWJ1dGUgYXQgdGhlIHRpbWUuXG4gICAgICBpZiAobGNOYW1lID09PSAnbmFtZScgJiYgY3VycmVudE5vZGUubm9kZU5hbWUgPT09ICdJTUcnICYmIGF0dHJpYnV0ZXMuaWQpIHtcbiAgICAgICAgaWRBdHRyID0gYXR0cmlidXRlcy5pZDtcbiAgICAgICAgYXR0cmlidXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShhdHRyaWJ1dGVzKTtcbiAgICAgICAgX3JlbW92ZUF0dHJpYnV0ZSgnaWQnLCBjdXJyZW50Tm9kZSk7XG4gICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuICAgICAgICBpZiAoYXR0cmlidXRlcy5pbmRleE9mKGlkQXR0cikgPiBsKSB7XG4gICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGlkQXR0ci52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBUaGlzIHdvcmtzIGFyb3VuZCBhIGJ1ZyBpbiBTYWZhcmksIHdoZXJlIGlucHV0W3R5cGU9ZmlsZV1cbiAgICAgIC8vIGNhbm5vdCBiZSBkeW5hbWljYWxseSBzZXQgYWZ0ZXIgdHlwZSBoYXMgYmVlbiByZW1vdmVkXG4gICAgICBjdXJyZW50Tm9kZS5ub2RlTmFtZSA9PT0gJ0lOUFVUJyAmJiBsY05hbWUgPT09ICd0eXBlJyAmJiB2YWx1ZSA9PT0gJ2ZpbGUnICYmIChBTExPV0VEX0FUVFJbbGNOYW1lXSB8fCAhRk9SQklEX0FUVFJbbGNOYW1lXSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUaGlzIGF2b2lkcyBhIGNyYXNoIGluIFNhZmFyaSB2OS4wIHdpdGggZG91YmxlLWlkcy5cbiAgICAgICAgLy8gVGhlIHRyaWNrIGlzIHRvIGZpcnN0IHNldCB0aGUgaWQgdG8gYmUgZW1wdHkgYW5kIHRoZW4gdG9cbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBhdHRyaWJ1dGVcbiAgICAgICAgaWYgKG5hbWUgPT09ICdpZCcpIHtcbiAgICAgICAgICBjdXJyZW50Tm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgJycpO1xuICAgICAgICB9XG4gICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuICAgICAgfVxuXG4gICAgICAvKiBEaWQgdGhlIGhvb2tzIGFwcHJvdmUgb2YgdGhlIGF0dHJpYnV0ZT8gKi9cbiAgICAgIGlmICghaG9va0V2ZW50LmtlZXBBdHRyKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBJcyBgdmFsdWVgIHZhbGlkIGZvciB0aGlzIGF0dHJpYnV0ZT8gKi9cbiAgICAgIHZhciBsY1RhZyA9IGN1cnJlbnROb2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoIV9pc1ZhbGlkQXR0cmlidXRlKGxjVGFnLCBsY05hbWUsIHZhbHVlKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLyogSGFuZGxlIGludmFsaWQgZGF0YS0qIGF0dHJpYnV0ZSBzZXQgYnkgdHJ5LWNhdGNoaW5nIGl0ICovXG4gICAgICB0cnkge1xuICAgICAgICBpZiAobmFtZXNwYWNlVVJJKSB7XG4gICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyogRmFsbGJhY2sgdG8gc2V0QXR0cmlidXRlKCkgZm9yIGJyb3dzZXItdW5yZWNvZ25pemVkIG5hbWVzcGFjZXMgZS5nLiBcIngtc2NoZW1hXCIuICovXG4gICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBET01QdXJpZnkucmVtb3ZlZC5wb3AoKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICB9XG5cbiAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgX2V4ZWN1dGVIb29rKCdhZnRlclNhbml0aXplQXR0cmlidXRlcycsIGN1cnJlbnROb2RlLCBudWxsKTtcbiAgfTtcblxuICAvKipcbiAgICogX3Nhbml0aXplU2hhZG93RE9NXG4gICAqXG4gICAqIEBwYXJhbSAge0RvY3VtZW50RnJhZ21lbnR9IGZyYWdtZW50IHRvIGl0ZXJhdGUgb3ZlciByZWN1cnNpdmVseVxuICAgKi9cbiAgdmFyIF9zYW5pdGl6ZVNoYWRvd0RPTSA9IGZ1bmN0aW9uIF9zYW5pdGl6ZVNoYWRvd0RPTShmcmFnbWVudCkge1xuICAgIHZhciBzaGFkb3dOb2RlID0gdm9pZCAwO1xuICAgIHZhciBzaGFkb3dJdGVyYXRvciA9IF9jcmVhdGVJdGVyYXRvcihmcmFnbWVudCk7XG5cbiAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZVNoYWRvd0RPTScsIGZyYWdtZW50LCBudWxsKTtcblxuICAgIHdoaWxlIChzaGFkb3dOb2RlID0gc2hhZG93SXRlcmF0b3IubmV4dE5vZGUoKSkge1xuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVTaGFkb3dOb2RlJywgc2hhZG93Tm9kZSwgbnVsbCk7XG5cbiAgICAgIC8qIFNhbml0aXplIHRhZ3MgYW5kIGVsZW1lbnRzICovXG4gICAgICBpZiAoX3Nhbml0aXplRWxlbWVudHMoc2hhZG93Tm9kZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8qIERlZXAgc2hhZG93IERPTSBkZXRlY3RlZCAqL1xuICAgICAgaWYgKHNoYWRvd05vZGUuY29udGVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgX3Nhbml0aXplU2hhZG93RE9NKHNoYWRvd05vZGUuY29udGVudCk7XG4gICAgICB9XG5cbiAgICAgIC8qIENoZWNrIGF0dHJpYnV0ZXMsIHNhbml0aXplIGlmIG5lY2Vzc2FyeSAqL1xuICAgICAgX3Nhbml0aXplQXR0cmlidXRlcyhzaGFkb3dOb2RlKTtcbiAgICB9XG5cbiAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgX2V4ZWN1dGVIb29rKCdhZnRlclNhbml0aXplU2hhZG93RE9NJywgZnJhZ21lbnQsIG51bGwpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTYW5pdGl6ZVxuICAgKiBQdWJsaWMgbWV0aG9kIHByb3ZpZGluZyBjb3JlIHNhbml0YXRpb24gZnVuY3Rpb25hbGl0eVxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xOb2RlfSBkaXJ0eSBzdHJpbmcgb3IgRE9NIG5vZGVcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICBET01QdXJpZnkuc2FuaXRpemUgPSBmdW5jdGlvbiAoZGlydHksIGNmZykge1xuICAgIHZhciBib2R5ID0gdm9pZCAwO1xuICAgIHZhciBpbXBvcnRlZE5vZGUgPSB2b2lkIDA7XG4gICAgdmFyIGN1cnJlbnROb2RlID0gdm9pZCAwO1xuICAgIHZhciBvbGROb2RlID0gdm9pZCAwO1xuICAgIHZhciByZXR1cm5Ob2RlID0gdm9pZCAwO1xuICAgIC8qIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgc3RyaW5nIHRvIHNhbml0aXplLlxuICAgICAgRE8gTk9UIHJldHVybiBlYXJseSwgYXMgdGhpcyB3aWxsIHJldHVybiB0aGUgd3JvbmcgdHlwZSBpZlxuICAgICAgdGhlIHVzZXIgaGFzIHJlcXVlc3RlZCBhIERPTSBvYmplY3QgcmF0aGVyIHRoYW4gYSBzdHJpbmcgKi9cbiAgICBpZiAoIWRpcnR5KSB7XG4gICAgICBkaXJ0eSA9ICc8IS0tPic7XG4gICAgfVxuXG4gICAgLyogU3RyaW5naWZ5LCBpbiBjYXNlIGRpcnR5IGlzIGFuIG9iamVjdCAqL1xuICAgIGlmICh0eXBlb2YgZGlydHkgIT09ICdzdHJpbmcnICYmICFfaXNOb2RlKGRpcnR5KSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lZ2F0ZWQtY29uZGl0aW9uXG4gICAgICBpZiAodHlwZW9mIGRpcnR5LnRvU3RyaW5nICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RvU3RyaW5nIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXJ0eSA9IGRpcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgIGlmICh0eXBlb2YgZGlydHkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZGlydHkgaXMgbm90IGEgc3RyaW5nLCBhYm9ydGluZycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogQ2hlY2sgd2UgY2FuIHJ1bi4gT3RoZXJ3aXNlIGZhbGwgYmFjayBvciBpZ25vcmUgKi9cbiAgICBpZiAoIURPTVB1cmlmeS5pc1N1cHBvcnRlZCkge1xuICAgICAgaWYgKF90eXBlb2Yod2luZG93LnRvU3RhdGljSFRNTCkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB3aW5kb3cudG9TdGF0aWNIVE1MID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGlydHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy50b1N0YXRpY0hUTUwoZGlydHkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfaXNOb2RlKGRpcnR5KSkge1xuICAgICAgICAgIHJldHVybiB3aW5kb3cudG9TdGF0aWNIVE1MKGRpcnR5Lm91dGVySFRNTCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBkaXJ0eTtcbiAgICB9XG5cbiAgICAvKiBBc3NpZ24gY29uZmlnIHZhcnMgKi9cbiAgICBpZiAoIVNFVF9DT05GSUcpIHtcbiAgICAgIF9wYXJzZUNvbmZpZyhjZmcpO1xuICAgIH1cblxuICAgIC8qIENsZWFuIHVwIHJlbW92ZWQgZWxlbWVudHMgKi9cbiAgICBET01QdXJpZnkucmVtb3ZlZCA9IFtdO1xuXG4gICAgaWYgKElOX1BMQUNFKSB7XG4gICAgICAvKiBObyBzcGVjaWFsIGhhbmRsaW5nIG5lY2Vzc2FyeSBmb3IgaW4tcGxhY2Ugc2FuaXRpemF0aW9uICovXG4gICAgfSBlbHNlIGlmIChkaXJ0eSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIC8qIElmIGRpcnR5IGlzIGEgRE9NIGVsZW1lbnQsIGFwcGVuZCB0byBhbiBlbXB0eSBkb2N1bWVudCB0byBhdm9pZFxuICAgICAgICAgZWxlbWVudHMgYmVpbmcgc3RyaXBwZWQgYnkgdGhlIHBhcnNlciAqL1xuICAgICAgYm9keSA9IF9pbml0RG9jdW1lbnQoJzwhLS0+Jyk7XG4gICAgICBpbXBvcnRlZE5vZGUgPSBib2R5Lm93bmVyRG9jdW1lbnQuaW1wb3J0Tm9kZShkaXJ0eSwgdHJ1ZSk7XG4gICAgICBpZiAoaW1wb3J0ZWROb2RlLm5vZGVUeXBlID09PSAxICYmIGltcG9ydGVkTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgIC8qIE5vZGUgaXMgYWxyZWFkeSBhIGJvZHksIHVzZSBhcyBpcyAqL1xuICAgICAgICBib2R5ID0gaW1wb3J0ZWROb2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChpbXBvcnRlZE5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvKiBFeGl0IGRpcmVjdGx5IGlmIHdlIGhhdmUgbm90aGluZyB0byBkbyAqL1xuICAgICAgaWYgKCFSRVRVUk5fRE9NICYmICFXSE9MRV9ET0NVTUVOVCAmJiBkaXJ0eS5pbmRleE9mKCc8JykgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBkaXJ0eTtcbiAgICAgIH1cblxuICAgICAgLyogSW5pdGlhbGl6ZSB0aGUgZG9jdW1lbnQgdG8gd29yayBvbiAqL1xuICAgICAgYm9keSA9IF9pbml0RG9jdW1lbnQoZGlydHkpO1xuXG4gICAgICAvKiBDaGVjayB3ZSBoYXZlIGEgRE9NIG5vZGUgZnJvbSB0aGUgZGF0YSAqL1xuICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgIHJldHVybiBSRVRVUk5fRE9NID8gbnVsbCA6ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIFJlbW92ZSBmaXJzdCBlbGVtZW50IG5vZGUgKG91cnMpIGlmIEZPUkNFX0JPRFkgaXMgc2V0ICovXG4gICAgaWYgKGJvZHkgJiYgRk9SQ0VfQk9EWSkge1xuICAgICAgX2ZvcmNlUmVtb3ZlKGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgLyogR2V0IG5vZGUgaXRlcmF0b3IgKi9cbiAgICB2YXIgbm9kZUl0ZXJhdG9yID0gX2NyZWF0ZUl0ZXJhdG9yKElOX1BMQUNFID8gZGlydHkgOiBib2R5KTtcblxuICAgIC8qIE5vdyBzdGFydCBpdGVyYXRpbmcgb3ZlciB0aGUgY3JlYXRlZCBkb2N1bWVudCAqL1xuICAgIHdoaWxlIChjdXJyZW50Tm9kZSA9IG5vZGVJdGVyYXRvci5uZXh0Tm9kZSgpKSB7XG4gICAgICAvKiBGaXggSUUncyBzdHJhbmdlIGJlaGF2aW9yIHdpdGggbWFuaXB1bGF0ZWQgdGV4dE5vZGVzICM4OSAqL1xuICAgICAgaWYgKGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSAzICYmIGN1cnJlbnROb2RlID09PSBvbGROb2RlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBTYW5pdGl6ZSB0YWdzIGFuZCBlbGVtZW50cyAqL1xuICAgICAgaWYgKF9zYW5pdGl6ZUVsZW1lbnRzKGN1cnJlbnROb2RlKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLyogU2hhZG93IERPTSBkZXRlY3RlZCwgc2FuaXRpemUgaXQgKi9cbiAgICAgIGlmIChjdXJyZW50Tm9kZS5jb250ZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICBfc2FuaXRpemVTaGFkb3dET00oY3VycmVudE5vZGUuY29udGVudCk7XG4gICAgICB9XG5cbiAgICAgIC8qIENoZWNrIGF0dHJpYnV0ZXMsIHNhbml0aXplIGlmIG5lY2Vzc2FyeSAqL1xuICAgICAgX3Nhbml0aXplQXR0cmlidXRlcyhjdXJyZW50Tm9kZSk7XG5cbiAgICAgIG9sZE5vZGUgPSBjdXJyZW50Tm9kZTtcbiAgICB9XG5cbiAgICAvKiBJZiB3ZSBzYW5pdGl6ZWQgYGRpcnR5YCBpbi1wbGFjZSwgcmV0dXJuIGl0LiAqL1xuICAgIGlmIChJTl9QTEFDRSkge1xuICAgICAgcmV0dXJuIGRpcnR5O1xuICAgIH1cblxuICAgIC8qIFJldHVybiBzYW5pdGl6ZWQgc3RyaW5nIG9yIERPTSAqL1xuICAgIGlmIChSRVRVUk5fRE9NKSB7XG4gICAgICBpZiAoUkVUVVJOX0RPTV9GUkFHTUVOVCkge1xuICAgICAgICByZXR1cm5Ob2RlID0gY3JlYXRlRG9jdW1lbnRGcmFnbWVudC5jYWxsKGJvZHkub3duZXJEb2N1bWVudCk7XG5cbiAgICAgICAgd2hpbGUgKGJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgICAgIHJldHVybk5vZGUuYXBwZW5kQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuTm9kZSA9IGJvZHk7XG4gICAgICB9XG5cbiAgICAgIGlmIChSRVRVUk5fRE9NX0lNUE9SVCkge1xuICAgICAgICAvKiBBZG9wdE5vZGUoKSBpcyBub3QgdXNlZCBiZWNhdXNlIGludGVybmFsIHN0YXRlIGlzIG5vdCByZXNldFxuICAgICAgICAgICAgICAgKGUuZy4gdGhlIHBhc3QgbmFtZXMgbWFwIG9mIGEgSFRNTEZvcm1FbGVtZW50KSwgdGhpcyBpcyBzYWZlXG4gICAgICAgICAgICAgICBpbiB0aGVvcnkgYnV0IHdlIHdvdWxkIHJhdGhlciBub3QgcmlzayBhbm90aGVyIGF0dGFjayB2ZWN0b3IuXG4gICAgICAgICAgICAgICBUaGUgc3RhdGUgdGhhdCBpcyBjbG9uZWQgYnkgaW1wb3J0Tm9kZSgpIGlzIGV4cGxpY2l0bHkgZGVmaW5lZFxuICAgICAgICAgICAgICAgYnkgdGhlIHNwZWNzLiAqL1xuICAgICAgICByZXR1cm5Ob2RlID0gaW1wb3J0Tm9kZS5jYWxsKG9yaWdpbmFsRG9jdW1lbnQsIHJldHVybk5vZGUsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmV0dXJuTm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gV0hPTEVfRE9DVU1FTlQgPyBib2R5Lm91dGVySFRNTCA6IGJvZHkuaW5uZXJIVE1MO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQdWJsaWMgbWV0aG9kIHRvIHNldCB0aGUgY29uZmlndXJhdGlvbiBvbmNlXG4gICAqIHNldENvbmZpZ1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAqL1xuICBET01QdXJpZnkuc2V0Q29uZmlnID0gZnVuY3Rpb24gKGNmZykge1xuICAgIF9wYXJzZUNvbmZpZyhjZmcpO1xuICAgIFNFVF9DT05GSUcgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQdWJsaWMgbWV0aG9kIHRvIHJlbW92ZSB0aGUgY29uZmlndXJhdGlvblxuICAgKiBjbGVhckNvbmZpZ1xuICAgKlxuICAgKi9cbiAgRE9NUHVyaWZ5LmNsZWFyQ29uZmlnID0gZnVuY3Rpb24gKCkge1xuICAgIENPTkZJRyA9IG51bGw7XG4gICAgU0VUX0NPTkZJRyA9IGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQdWJsaWMgbWV0aG9kIHRvIGNoZWNrIGlmIGFuIGF0dHJpYnV0ZSB2YWx1ZSBpcyB2YWxpZC5cbiAgICogVXNlcyBsYXN0IHNldCBjb25maWcsIGlmIGFueS4gT3RoZXJ3aXNlLCB1c2VzIGNvbmZpZyBkZWZhdWx0cy5cbiAgICogaXNWYWxpZEF0dHJpYnV0ZVxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRhZyBUYWcgbmFtZSBvZiBjb250YWluaW5nIGVsZW1lbnQuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gYXR0ciBBdHRyaWJ1dGUgbmFtZS5cbiAgICogQHBhcmFtICB7c3RyaW5nfSB2YWx1ZSBBdHRyaWJ1dGUgdmFsdWUuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLiBPdGhlcndpc2UsIHJldHVybnMgZmFsc2UuXG4gICAqL1xuICBET01QdXJpZnkuaXNWYWxpZEF0dHJpYnV0ZSA9IGZ1bmN0aW9uICh0YWcsIGF0dHIsIHZhbHVlKSB7XG4gICAgLyogSW5pdGlhbGl6ZSBzaGFyZWQgY29uZmlnIHZhcnMgaWYgbmVjZXNzYXJ5LiAqL1xuICAgIGlmICghQ09ORklHKSB7XG4gICAgICBfcGFyc2VDb25maWcoe30pO1xuICAgIH1cbiAgICB2YXIgbGNUYWcgPSB0YWcudG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgbGNOYW1lID0gYXR0ci50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZEhvb2tcbiAgICogUHVibGljIG1ldGhvZCB0byBhZGQgRE9NUHVyaWZ5IGhvb2tzXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9vayB0byBhZGRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va0Z1bmN0aW9uIGZ1bmN0aW9uIHRvIGV4ZWN1dGVcbiAgICovXG4gIERPTVB1cmlmeS5hZGRIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQsIGhvb2tGdW5jdGlvbikge1xuICAgIGlmICh0eXBlb2YgaG9va0Z1bmN0aW9uICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhvb2tzW2VudHJ5UG9pbnRdID0gaG9va3NbZW50cnlQb2ludF0gfHwgW107XG4gICAgaG9va3NbZW50cnlQb2ludF0ucHVzaChob29rRnVuY3Rpb24pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVIb29rXG4gICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGEgRE9NUHVyaWZ5IGhvb2sgYXQgYSBnaXZlbiBlbnRyeVBvaW50XG4gICAqIChwb3BzIGl0IGZyb20gdGhlIHN0YWNrIG9mIGhvb2tzIGlmIG1vcmUgYXJlIHByZXNlbnQpXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9vayB0byByZW1vdmVcbiAgICovXG4gIERPTVB1cmlmeS5yZW1vdmVIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQpIHtcbiAgICBpZiAoaG9va3NbZW50cnlQb2ludF0pIHtcbiAgICAgIGhvb2tzW2VudHJ5UG9pbnRdLnBvcCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlSG9va3NcbiAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYWxsIERPTVB1cmlmeSBob29rcyBhdCBhIGdpdmVuIGVudHJ5UG9pbnRcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9va3MgdG8gcmVtb3ZlXG4gICAqL1xuICBET01QdXJpZnkucmVtb3ZlSG9va3MgPSBmdW5jdGlvbiAoZW50cnlQb2ludCkge1xuICAgIGlmIChob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgaG9va3NbZW50cnlQb2ludF0gPSBbXTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZUFsbEhvb2tzXG4gICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGFsbCBET01QdXJpZnkgaG9va3NcbiAgICpcbiAgICovXG4gIERPTVB1cmlmeS5yZW1vdmVBbGxIb29rcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBob29rcyA9IHt9O1xuICB9O1xuXG4gIHJldHVybiBET01QdXJpZnk7XG59XG5cbnZhciBwdXJpZnkgPSBjcmVhdGVET01QdXJpZnkoKTtcblxucmV0dXJuIHB1cmlmeTtcblxufSkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXB1cmlmeS5qcy5tYXBcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkljb25zXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkljb25zXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4vKioqKioqLyBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlSWNvbnNcIl07XG4vKioqKioqLyBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVJY29uc1wiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLyoqKioqKi8gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbi8qKioqKiovIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4vKioqKioqLyBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4vKioqKioqLyBcdH0gO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuLyoqKioqKi8gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuLyoqKioqKi8gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuLyoqKioqKi8gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4vKioqKioqLyBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4vKioqKioqLyBcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuLyoqKioqKi8gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuLyoqKioqKi8gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbi8qKioqKiovIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbi8qKioqKiovIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4vKioqKioqLyBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbi8qKioqKiovIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4vKioqKioqLyBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbi8qKioqKiovIFx0XHRcdFx0XHRyZWplY3QoXG4vKioqKioqLyBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4vKioqKioqLyBcdFx0XHRcdFx0KTtcbi8qKioqKiovIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuLyoqKioqKi8gXHRcdFx0XHRcdHJlc29sdmUoKTtcbi8qKioqKiovIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4vKioqKioqLyBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuLyoqKioqKi8gXHRcdFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0XHRcdC8vIHN1Y2Nlc3Ncbi8qKioqKiovIFx0XHRcdFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJldHVybjtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9O1xuLyoqKioqKi8gXHRcdH0pO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4vKioqKioqLyBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLyoqKioqKi8gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcImJmMTg5M2M3MzBhNWM3MDMzMTE5XCI7XG4vKioqKioqLyBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuLyoqKioqKi8gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbi8qKioqKiovIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbi8qKioqKiovIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vKioqKioqLyBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuLyoqKioqKi8gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8qKioqKiovIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbi8qKioqKiovIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4vKioqKioqLyBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH0gZWxzZSB7XG4vKioqKioqLyBcdFx0XHRcdGNvbnNvbGUud2Fybihcbi8qKioqKiovIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuLyoqKioqKi8gXHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuLyoqKioqKi8gXHRcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9O1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoXG4vKioqKioqLyBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuLyoqKioqKi8gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuLyoqKioqKi8gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuLyoqKioqKi8gXHRcdFx0KSB7XG4vKioqKioqLyBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4vKioqKioqLyBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbi8qKioqKiovIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4vKioqKioqLyBcdFx0XHRcdHRocm93IGVycjtcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbi8qKioqKiovIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFx0cmV0dXJuIGZuO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0dmFyIGhvdCA9IHtcbi8qKioqKiovIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbi8qKioqKiovIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4vKioqKioqLyBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuLyoqKioqKi8gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuLyoqKioqKi8gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG4vKioqKioqL1xuLyoqKioqKi8gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuLyoqKioqKi8gXHRcdFx0YWN0aXZlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuLyoqKioqKi8gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbi8qKioqKiovIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuLyoqKioqKi8gXHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbi8qKioqKiovIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbi8qKioqKiovIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4vKioqKioqLyBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuLyoqKioqKi8gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbi8qKioqKiovIFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbi8qKioqKiovIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4vKioqKioqLyBcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4vKioqKioqLyBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbi8qKioqKiovIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbi8qKioqKiovIFx0XHRcdH0sXG4vKioqKioqL1xuLyoqKioqKi8gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbi8qKioqKiovIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbi8qKioqKiovIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbi8qKioqKiovIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4vKioqKioqLyBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4vKioqKioqLyBcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuLyoqKioqKi8gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuLyoqKioqKi8gXHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbi8qKioqKiovIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG4vKioqKioqLyBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4vKioqKioqLyBcdFx0XHR9LFxuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuLyoqKioqKi8gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4vKioqKioqLyBcdFx0cmV0dXJuIGhvdDtcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4vKioqKioqLyBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbi8qKioqKiovIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XG4vKioqKioqLyBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbi8qKioqKiovIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbi8qKioqKiovIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XG4vKioqKioqLyBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbi8qKioqKiovIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuLyoqKioqKi8gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbi8qKioqKiovIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4vKioqKioqLyBcdHZhciBob3REZWZlcnJlZDtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuLyoqKioqKi8gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoO1xuLyoqKioqKi9cbi8qKioqKiovIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuLyoqKioqKi8gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuLyoqKioqKi8gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuLyoqKioqKi8gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4vKioqKioqLyBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuLyoqKioqKi8gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuLyoqKioqKi8gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbi8qKioqKiovIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbi8qKioqKiovIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuLyoqKioqKi8gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4vKioqKioqLyBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuLyoqKioqKi8gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4vKioqKioqLyBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuLyoqKioqKi8gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcbi8qKioqKiovIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuLyoqKioqKi8gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4vKioqKioqLyBcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuLyoqKioqKi8gXHRcdFx0dmFyIGNodW5rSWQgPSBcIkRpYWxvZ1wiO1xuLyoqKioqKi8gXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG4vKioqKioqLyBcdFx0XHR7XG4vKioqKioqLyBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXG4vKioqKioqLyBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0aWYgKFxuLyoqKioqKi8gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4vKioqKioqLyBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbi8qKioqKiovIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4vKioqKioqLyBcdFx0XHQpIHtcbi8qKioqKiovIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4vKioqKioqLyBcdFx0fSk7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLyoqKioqKi8gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuLyoqKioqKi8gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuO1xuLyoqKioqKi8gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4vKioqKioqLyBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbi8qKioqKiovIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuLyoqKioqKi8gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuLyoqKioqKi8gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuLyoqKioqKi8gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbi8qKioqKiovIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4vKioqKioqLyBcdFx0fSBlbHNlIHtcbi8qKioqKiovIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuLyoqKioqKi8gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4vKioqKioqLyBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4vKioqKioqLyBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4vKioqKioqLyBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuLyoqKioqKi8gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbi8qKioqKiovIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuLyoqKioqKi8gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbi8qKioqKiovIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuLyoqKioqKi8gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuLyoqKioqKi8gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbi8qKioqKiovIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuLyoqKioqKi8gXHRcdFx0XHR9KVxuLyoqKioqKi8gXHRcdFx0XHQudGhlbihcbi8qKioqKiovIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdH0gZWxzZSB7XG4vKioqKioqLyBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4vKioqKioqLyBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbi8qKioqKiovIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuLyoqKioqKi8gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbi8qKioqKiovIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbi8qKioqKiovIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0dmFyIGNiO1xuLyoqKioqKi8gXHRcdHZhciBpO1xuLyoqKioqKi8gXHRcdHZhciBqO1xuLyoqKioqKi8gXHRcdHZhciBtb2R1bGU7XG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZUlkO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpLm1hcChmdW5jdGlvbihpZCkge1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4ge1xuLyoqKioqKi8gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxuLyoqKioqKi8gXHRcdFx0XHRcdGlkOiBpZFxuLyoqKioqKi8gXHRcdFx0XHR9O1xuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4vKioqKioqLyBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcbi8qKioqKiovIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuLyoqKioqKi8gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0aWYgKCFtb2R1bGUgfHwgbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkKSBjb250aW51ZTtcbi8qKioqKiovIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdHJldHVybiB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbi8qKioqKiovIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuLyoqKioqKi8gXHRcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbi8qKioqKiovIFx0XHRcdFx0XHRyZXR1cm4ge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4vKioqKioqLyBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbi8qKioqKiovIFx0XHRcdFx0XHR9O1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJldHVybiB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcbi8qKioqKiovIFx0XHRcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG4vKioqKioqLyBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y29udGludWU7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuLyoqKioqKi8gXHRcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuLyoqKioqKi8gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbi8qKioqKiovIFx0XHRcdH07XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG4vKioqKioqLyBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbi8qKioqKiovIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbi8qKioqKiovIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4vKioqKioqLyBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4vKioqKioqLyBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuLyoqKioqKi8gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4vKioqKioqLyBcdFx0XHRjb25zb2xlLndhcm4oXG4vKioqKioqLyBcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG4vKioqKioqLyBcdFx0XHQpO1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuLyoqKioqKi8gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuLyoqKioqKi8gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xuLyoqKioqKi8gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4vKioqKioqLyBcdFx0XHRcdHZhciByZXN1bHQ7XG4vKioqKioqLyBcdFx0XHRcdGlmIChob3RVcGRhdGVbaWRdKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4vKioqKioqLyBcdFx0XHRcdH0gZWxzZSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmVzdWx0ID0ge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4vKioqKioqLyBcdFx0XHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4vKioqKioqLyBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuLyoqKioqKi8gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRicmVhaztcbi8qKioqKiovIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRicmVhaztcbi8qKioqKiovIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRicmVhaztcbi8qKioqKiovIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRicmVhaztcbi8qKioqKiovIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGJyZWFrO1xuLyoqKioqKi8gXHRcdFx0XHRcdGRlZmF1bHQ6XG4vKioqKioqLyBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4vKioqKioqLyBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHQpXG4vKioqKioqLyBcdFx0XHRcdFx0XHQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbi8qKioqKiovIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuLyoqKioqKi8gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbi8qKioqKiovIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4vKioqKioqLyBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbi8qKioqKiovIFx0XHRcdGlmIChcbi8qKioqKiovIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiZcbi8qKioqKiovIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbi8qKioqKiovIFx0XHRcdClcbi8qKioqKiovIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuLyoqKioqKi8gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuLyoqKioqKi8gXHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuLyoqKioqKi8gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4vKioqKioqLyBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuLyoqKioqKi8gXHRcdFx0aWYgKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xuLyoqKioqKi8gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fSk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdHZhciBpZHg7XG4vKioqKioqLyBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4vKioqKioqLyBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbi8qKioqKiovIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4vKioqKioqLyBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0XHR2YXIgZGF0YSA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuLyoqKioqKi8gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbi8qKioqKiovIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbi8qKioqKiovIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4vKioqKioqLyBcdFx0XHRcdGNiKGRhdGEpO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuLyoqKioqKi8gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbi8qKioqKiovIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4vKioqKioqLyBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4vKioqKioqLyBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4vKioqKioqLyBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbi8qKioqKiovIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4vKioqKioqLyBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4vKioqKioqLyBcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4vKioqKioqLyBcdFx0dmFyIGRlcGVuZGVuY3k7XG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuLyoqKioqKi8gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbi8qKioqKiovIFx0XHRcdGlmIChcbi8qKioqKiovIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbi8qKioqKiovIFx0XHRcdCkge1xuLyoqKioqKi8gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIE5vdCBpbiBcImFwcGx5XCIgcGhhc2Vcbi8qKioqKiovIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbi8qKioqKiovIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbi8qKioqKiovIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4vKioqKioqLyBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuLyoqKioqKi8gXHRcdHZhciBlcnJvciA9IG51bGw7XG4vKioqKioqLyBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuLyoqKioqKi8gXHRcdFx0aWYgKFxuLyoqKioqKi8gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuLyoqKioqKi8gXHRcdFx0KSB7XG4vKioqKioqLyBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChjYikge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoY2IpICE9PSAtMSkgY29udGludWU7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4vKioqKioqLyBcdFx0XHRcdFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuLyoqKioqKi8gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbi8qKioqKiovIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuLyoqKioqKi8gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbi8qKioqKiovIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdHRyeSB7XG4vKioqKioqLyBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuLyoqKioqKi8gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuLyoqKioqKi8gXHRcdFx0XHRcdHRyeSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4vKioqKioqLyBcdFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbi8qKioqKiovIFx0XHRpZiAoZXJyb3IpIHtcbi8qKioqKiovIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovXG4vKioqKioqLyBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuLyoqKioqKi8gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuLyoqKioqKi8gXHRcdH0pO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4vKioqKioqLyBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4vKioqKioqLyBcdFx0XHRjaGlsZHJlbjogW11cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19oYXNoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIGhvdENyZWF0ZVJlcXVpcmUoXCIuL3NyYy9pY29ucy5qc1wiKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2ljb25zLmpzXCIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4vc3JjL2ljb25zLnNjc3NcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL3NyYy9pY29ucy5zY3NzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGVzY2FwZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzICovIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmksIFwiLmljb25zLWNsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2ltYWdlcy9pY29ucy5wbmcgKi8gXCIuL3NyYy9pbWFnZXMvaWNvbnMucG5nXCIpKSArIFwiKTtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1uZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAwO1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IDA7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLXNlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IDA7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1jYXJldC0xLXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggMDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtc3cge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggMDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTEtdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAwO1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMS1udyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggMDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWNhcmV0LTItbi1zIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAwO1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtY2FyZXQtMi1lLXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IDA7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC10cmlhbmdsZS0xLW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0xNnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtdHJpYW5nbGUtMS1lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xNnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3ctMS1uIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMzJweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWFycm93LTEtdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMzJweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWFycm93c3RvcC0xLW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC0zMnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3dzdG9wLTEtcyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTMycHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTQ4cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtbmUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTQ4cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtNDhweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1zZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtNDhweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2stMS1zIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC00OHB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLXN3IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC00OHB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0xLXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTQ4cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTEtbncge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC00OHB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0yLW4tcyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTQ4cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTItbmUtc3cge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC00OHB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGljay0yLWUtdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTQ4cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrLTItc2Utbncge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC00OHB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS1uIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtNDhweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWFycm93dGhpY2tzdG9wLTEtZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTQ4cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1hcnJvd3RoaWNrc3RvcC0xLXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC00OHB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtYXJyb3d0aGlja3N0b3AtMS13IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtNDhweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWFycm93cmV0dXJudGhpY2stMS13IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtNjRweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWFycm93cmV0dXJudGhpY2stMS1lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC02NHB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtZm9sZGVyLWNvbGxhcHNlZCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTk2cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1mb2xkZXItb3BlbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtOTZweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWRvY3VtZW50IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC05NnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtZG9jdW1lbnQtYiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtOTZweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLW5vdGUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTk2cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1tYWlsLWNsb3NlZCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtOTZweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLW1haWwtb3BlbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtOTZweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLXN1aXRjYXNlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtOTZweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWNvbW1lbnQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC05NnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtcGVyc29uIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtOTZweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLXByaW50IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtOTZweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLXRyYXNoIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtOTZweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWxvY2tlZCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTk2cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC11bmxvY2tlZCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTk2cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1ib29rbWFyayB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTk2cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC10YWcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC05NnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtaG9tZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTExMnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtZmxhZyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTEycHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1jYWxjdWxhdG9yIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xMTJweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWNhcnQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTExMnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtcGVuY2lsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xMTJweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWNsb2NrIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xMTJweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWRpc2sge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTExMnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtY2FsZW5kYXIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xMTJweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLXpvb21pbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTExMnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtem9vbW91dCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTExMnB4O1xcbn1cXG5cXG4uaWNvbnMtY2wuaWNvbnMtY2wtc2VhcmNoIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMTEycHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC13cmVuY2gge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC0xMTJweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWdlYXIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC0xMTJweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWhlYXJ0IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtMTEycHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1zdGFyIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtMTEycHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1saW5rIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtMTEycHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1jbG9zZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTI4cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1jbG9zZXRoaWNrIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xMjhweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWFsZXJ0IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMTQ0cHg7XFxufVxcblxcbi5pY29ucy1jbC5pY29ucy1jbC1oZWxwIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xNDRweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLWNoZWNrIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xNDRweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLXBsYXkge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0xNjBweDtcXG59XFxuXFxuLmljb25zLWNsLmljb25zLWNsLXBhdXNlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xNjBweDtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHVybCkge1xuICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdXJsXG4gICAgfVxuICAgIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICAgIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgICAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICAgIH1cbiAgICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gICAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkpIHtcbiAgICAgICAgcmV0dXJuICdcIicgKyB1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSArICdcIidcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsXG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi91cmxzICovIFwiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaWNvbnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaWNvbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gZXhwb3J0cyBwcm92aWRlZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfaWNvbnNfc2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9pY29ucy5zY3NzICovIFwiLi9zcmMvaWNvbnMuc2Nzc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfaWNvbnNfc2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9pY29uc19zY3NzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2ljb25zLnNjc3NcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pY29ucy5zY3NzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXG52YXIgY29udGVudCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohICEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL2ljb25zLnNjc3MgKi8gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL3NyYy9pY29ucy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKHRydWUpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoLyohICEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL2ljb25zLnNjc3MgKi8gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL3NyYy9pY29ucy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4vaWNvbnMuc2NzcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4vc3JjL2ljb25zLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9pbWFnZXMvaWNvbnMucG5nXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW1hZ2VzL2ljb25zLnBuZyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVFBQUFBRHdDQU1BQUFEWVNVcjVBQUFCUzJsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU0x2dTc4aUlHbGtQU0pYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUWlQejRLUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpUVdSdlltVWdXRTFRSUVOdmNtVWdOUzQyTFdNeE5ESWdOemt1TVRZd09USTBMQ0F5TURFM0x6QTNMekV6TFRBeE9qQTJPak01SUNBZ0lDQWdJQ0FpUGdvZ1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNEtJQ0E4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBpSWk4K0NpQThMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K25oeGc3d0FBQUFSblFVMUJBQUN4and2OFlRVUFBQUFCYzFKSFFnQ3V6aHpwQUFBQkRsQk1WRVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJ4VVlXOUFBQUFXWFJTVGxNQUwyWktDRUJnR1JBelVCcS9JbU9lUlkrVVAyMmduQ0FwekEweEFTd1dWU2Vad3hOeGdDTTBSOCt2YUVnS2hSdzRVKzhFSGt0L0gxcENnb3lvb3Ywa0FsRURJVEpxdGJqZllvY0drVzg4c3ExOHZzYXJ5THlxcFptS0M3QUFBQTdtU1VSQlZIamE3VjBKWTl1MkRxWmN5NVFjSjI2enJabmpyazF6ckUzWDEvYjEySDF2YisrK1Qvei9QL0pJeVJJQjhMSmlSM1ppZnM0RlVRZnhDU1FCa0ZLRVNFaEkyQUpJa0R1dVAydzVBeXRYVDBKWWY0a1owRHYzU3dpelFOQ2dCUEQ2a0hKZEt2RVdBRnZGd0FYWThkV2Z2Wm9FdDBDYkFNbnJROHI1SGJRSTRJZmJGN0IybGoweVlOWGZyVUtnM0daUUJBMElRZzFpc2JNTTdyVGVCczR0Mks0aXY4RzJoUVR2c0cwQmdRcjBid0Z1VWdLM01HakJ6aDJzUGlCa2d2MzNBWnNlQlhnVDZuOFVTSTVRUWtKQ1FrSkNRc0xHUE1FTiswSFNpdGFBTys4eW9CQUFEL0JscDN5QWxSQlNaKytWRWtjRkxBS3NIZmp1TkZ5VTFnVTRBVElZUFBZYURGbjFkOWM0VU96SXFNakE0U0tTQW9TS0FPaXZnWU16QmVTdnNWd21IeUNEZk1iU0I1c1BoeVZjWno1QXhwcmd0b1hEdDMwVVNFaElTRWhJU0VqWW9LZTF1ak8vMHZsaHN3cllvVTlRb1NzRVN0RHQramFoRURrYmhMZlk2ckZpc0hlaGg0T3Z6SDJCWUFVY3BlSHJ1ODRRSXNncXQwNEdNUUpKaFlEdEFZNFQydlVCcjRMZ3VsN28rbmE0RERFQ0lCaHZnNGp3NnpvOHNBdFZjTEUzZUFrQ1laMHd5Si9iaUVNbUZHeEFUZ3RoakRzT0Q1dG8vQXBkMUl1MmNjY2FJZ2lYUjg3SWJnZEViMGprQWhEczkwQkVtbkQvbzhBMUh4OGZKaE1TRWhJU0VoSjJGYXN2UzEzUnpaQ08xZWorVTdyODBPaFVWZVR5M1NxdzFBWEM4VHdzVVFGVUx2RGsxQkplbmQ0WkFxR0xhM28vbGlJSVh0OFIzM0lGSXVtSFFFYWlubGcwRk5tMWRTeDJsMEVDSW12RDNXWVdZaURJbndTSW1aY3JJUVE4SEFZY3pRWXN5QXFISGRHNDljaUdXS0lDN2xKM2RBd1FpT2ZCWVFQK3d5MENyQnJZMWFQbHZJbkZDWEJYd0hzTGx5b0dDTWJQNFM1Q3VHYm9neFpFbWdCckl0RW00RzdsMHJ1SHRKZTgyQW9FMm9qRHdGZ1RGOVlNZllRQUdja0h5SEFmQU81K05YU1B3c1hoc2NUUmh1UGpMc0RTd3h4c2ZUNUFRbG9oa1pDUWtKQ1FJRHBFb0dzZGhzTURNemdqNkxYcUI1MG04TmQ4ZGVsNjJoMUhmODRqSklROXh5NFpGRFpYQlE2RklWUytPdjJ1NStlQjZCSjZPaHhpdDlRMUcyN3hCL1JZQ1BLelZnYkFaa0R3OXh1SXdQc0JYUGtNT2w4dGxwaCtGY0NPQmQvaGF5ZWdDVGQ5QkVpSWhNL082ZXRndVd0Mkdyd1c0ZHdaMWtpQmROVFFmaUlFL0hjOE50OXNKMFJFckErd0NPQk5ZdTNobmVuVWRETEJpczdvOC8yT2NuOFRkNWhFOEJHaUpUckY2eGdZYVVaSGh2SUI4ZWcxdGdnb2xuOEk1NCtTbjVPUWtKQ1FrTEJWS0c3NFFPWndPeUEwWGNXOTRhdm92MDFUQWM1cEZ1cDlGZEhaUUNoRVIyOVBicXNGdFBHV29hZUFBZ1ZETkw0cm9MWUF3QVNHSHptQXJacXRBdmZ5YlZ5dTlDZlJHZEFBdm00RE5Od1RiRG9jME92aXRvc0FnRWgxdERLRkk5WURLNVBoalEzeE50azJNWGx6TE1EYW42N1lxQW55V0FCZnI5RFF2Vlh6b2VFK0lIUjdtK2k4TUZiQyt3QndXdHgyallMQlVjRFo1ZE1CQW9MTHhJSXZwN2doZmtEMEJNWHkrOHBiR1AxMzBUOGhJU0VoWWJkUWFqK2hYSDcvTjBPRk4zM1ZicXdxTnhtSDl2Z3k0cm5CNDlwVktrUDY0K0l5ek1jYmtRRms0ZzA3QVRwaVg0bjd3aVB6UXZGb0FYWkFveEtjNS9rWU9YdlYzMlBMMVIzNG42WWVMVFFjRVgzYkduUFptdG5hWDVRM3RSNW1NQnhDTm1SdUd2aWpOM3Zxa2pwMkE5Y1YyeUF0ei9PaUJpTmtRZ2hBRElBMjBTRndDeGkxbnZTZVF1dEtRMk1CdnZudStuVG1oRU1ZbnAzOURKaUEyV3dXZmdKREFEZ0ZKd0g3aEVEUXFxTU5paENKQ2FrclNBay8xdkJaQUl3Qi9kSVhYdlFCZ0NwSWFueGNIWDVzQ0RqN2FmOHZoSUNIRHg5YXkrUDlNdHZBQ2RENmY0RUpvQ1lGU24rd0tTcFEyZzhlYW5ndFlFK3JEdU05a3djb0svdHZDZERuUnltMituVG1oS29KUEgrT204Qk1xRnVnZnJZSGxOWG5pZ1JvL1IrOSs4SlBnR1FiMUJZcDl5UUtZZURvNk1qZkI4Q2VZa0Rwandtb3Zsb0NxazRRRWZCV0gvMzJiYlBock80RXo3eHQza0dBc0orbm9BUjhqdk1UZzlFajlUUDNFV0E5b3ZKeEJYVEJrNU1UTUNacVdVQzVOeDZySDZZSlZMS2ZnSk1haXcweWc1K3liQTZaSkFTVXFCZjhkZlhCK2c0NUFVTkdBQkFMR0JqOUF3UzBwL3VvQWpPNTRkQm5BZVZlaFJJOE11ZytkZ3lrVFdaWk93cGt6ZlV6cndYWUJNU2FBQzZ2KzhCY1dBU1U5SHJNRDRBdlkzN0Frc05nWFo4QnpjR1VadWdHVytGSXB6ZkNsN2MzY0FJcUJ2SjFPbnJscUVKNTlWTXcxMldwUE80S05kNWZxLzRKQ1FrSkNWdU9GeS9DNVFVRTg5cjFmMzZLWmozYVlmQkpOVXc5d1JrSEhHTVBGdktBaFdmN1M4dEMvSUhWSncrT2F5cmFPbWFiMUxDTjlTOUx3OEJFZTVFWDJSZ0ZPNnJLZzhkZy9HeFAxZ1BwTHhBRDZtQU5OdE5FUFp0TXU0Skx5L1g5YURYSXRUTlh0R043b2JrZDRIdDZDbkRLOU5lTzBwSFJYL3ZtYmZRcjNZNFlDdWZoTitwemppdFVxdnRjb3YzSjNLRDErUHUveGFYNEo0NXZNeVZrUkJaVVBoNGVJMW5YZnpUeVZSQVd6ajVRZzBNV3B5bzdLb3pyV0djczJ1aktKb0NGd3lCZXZiMzc4dDNiTWI3L1kxR0taUW40RC94V2ZmNkJGZFN1UDVOeDhLRmk0MkhHZlY5QUxSaXZVR0hYZTlHSXFCK1l3UGxJY1ZBTGo1dU16V01mQVl0ZUFGbkFPZndkWGdEV0g2WHM0aGJ3TC9HTCtKOUpLWjB3Q3poaEZuRENMR0JFWWcvVkF1cE9xbzF2MmZXK3FxV3YyZ3BXd1R5T0hVRDNBV2kxZkpTQVYyOC8vMWg5M1BvdlBIVk1RQUZWMXFtUi93dGZxOC9mMElvSjBzWXIrV2Ntby9LcS9TcDg3Q0dnaWU0SzJrU28vUVI2ZVJpT3hSR0pGeGtCSldPWTZkK3VpS0FFSVBtelh4NU9IdjcxdzRXOEJ6UXBHcE5IOU83WlRXQWhZL0gwMU1qYTl0dDhwNU1BYXhSVTV5Z0NTOXA1a3Z2Sm9zSlBNQUhXZWdPVGNGTE5uWjB1TEF1bXZ4M0FGMlROMnQxdlZmYzMrUFp1UzRCcS8wWGdlRXZSZ2RXSnNrZDhlSktmK1FFODdjMWsxeHRnUXZLSTY4K0hRVkV2NmpMRjFZekFvMXo0TElnaHU0bXVYdDRod0NjK1VFSkNRa0xDQmpER2lXbnR5c0dKdGM4RDZxbGNJekk4RGVIemRhNSsrZ0ttNnVjVUQ4MFhlR3JpQy9qaGgrKytndzlSZGM2MS9oWFVIL04zOE9vVnZKc1RUN1FVUE4zUTVCdGFtVzhZTThjSDZUOFpqMThUQmpxOTd0OGVhTlc1TWhSdGdtSmd5cjN4SStONS9VcmpqOFlWblk3VkNVWldjRU9pVThjNlZEcVhhL1pScm1PcGdoMHpPVmdYbU9CS084WlRlQTFySTBDN1d1Z0lyWHYxVFEzQUVQRDlqdzhlL1BpOXFjOVlRRDdDTXp1Y0FMSmtCS3BrRkZyd1VJZzZWVkVZWDd2VStSaEV3RXM5VjRjdk9OV3Mrd2lJcktlM3A3SXlvRzFxV3NsVEhyeTBGYXBzZmI4OS9KNWVuSUhjVlJpeUJSbjArR29lRk8wQU92QlU4WnpBRmpBWTRQWHEyWHl1dzB0RGdOSmZqUDBaSUVmR3hSWHVVeFBIN3VhVTZWK1M2Y212WVY4QjdpRy9saHdQeDJFQ3p0U2ZaL3FyS2I2b0psK1BrQVd3NlBYbHk3MlhjN2hvVC9oYTEyNnlQZ0s0Qlh4VHlhZFVmNk5nTnExd1JBODNoS2xiZW54OFRBZ2diZjVJNFRQMXhSWThUTDE5d0h5dUd3RHVCRitQeDVNMWRvS3NEL2htMFFlY21neGNUc0xSdWE3dmtUbDhlZzRYaUFGOW9qUFU3VFhKbTBhL2p6NWFmREVEOGZZQjQzSStuOE1jQXNQZ3VrZUJVNTJZTmZYaG9kdDBNUGdLWFN4WFg0VmhBS3d3WGYrNTMyemd3MkJsRVJVOGZRQ01OVEFCN3BtQU5mb0JwMVZxdXZDa0QvZ2pac3BhWGhlNnAzelFsUDcrbGFTdmRSRlZyN0dRaHFWTzZaVkRjVlUvWVBNNE96dzh3eFowcnJrcUhoU2VoSSs5Y2pJaElTRmh0ZWdVcjQ2Kzg0SHVZajY0czBQNlB3TjQxZ3J2TjczdSt6dWovM090N3ZQbS9rTXowd1RHQm1Zd3d3Zjh6clhRYm4wcnoyWVYvN00rRFVBNW1vMEozRGNFM1BjNVFpNC9JamVVV0ZNUGZBT1hZYWJIOUZudy9OZHJBUHFhejNsc0UzcmRkOEUzNU1Zb0lnczN0ZngwK0pUT3pnWWVnT2lsQjlBaDlETnljVnFIQVo0WXEvV2ZFTnZQOGVwamUrbnVxQmhoL1o2cUgwL0pEck1ORXBBMzl6djNFNUN6Smc5d1dlQ3luTXdtMndRVXhHU3FoZVpERWs0VEFrcVl6V2I5ZWJwR1lUOEI5akVGc1gzU0thNXNBZjEyZ3BVQjFBL05WRG9jR2dJT3ZSWmdXMUR1Yi9LZCs0QitvelhlNmQwMTRsMXZKMGpFbkErS0s0OEN2YjVmYjJZVXJtdHcwSWdISXRBSGVFYkF0ZDJXVGZwRjcrbTBMTng3YjVOMVNHOVlURWhJU0VqWUllUVFFcTk5MEoza3d2SnpydFVWZmZ6WWNxY0RZaC9lTUtXQUVGQ1ZGWGlIZkZMb0gwRDVhMTh3VUlmT3B0eU9ySExtTytkV01WUXpaSDNHZzRRQ1NrQmQxdGE1dWoxS1BiNERJUUNYMndTNG52UzFSZWlYQUx3WW1CTlFwVDhXbGF4K1RhejU4UWtoWUJMTThQZzBKaUwwVFVDUEZyQVVBVDFiUUw5OWdDdWxzTkUrb09kUndNNTNiSGdVMkhrL0lDRWhJU0ZodHdFNy9SeFY4V2NCbjM1V0VFZmxZb2ZlazZ1Zkk0VlBjL1E4UTViZmN6eEEwZmdtL1AwSFhlV3R3eFQrcEFnUWFIV3labVZpTVdDOVRMNjhtcng5Qm5BcHhLZTV1TVJQVzArUFZFUkxuNjgxaWd5UGgrcXJYYjROeDNROXU1YUJ5a1A5R1c2cGUxc3UxczFmbUR1VWpVQ3Z0ai8zRUZDOUdrM3V5Zlp0ZXlDbDN0REllL3BqM3Irbnk5VVd1UWRiYkFFS2wvaU82MzVoQ2xUOWxvQVBhN1FtM2xIZU9reXFNWENFMXJ5b1lIUU1SMk1QQWJldUU4d0FMaTh1Y2JkZnB5TnlvT3JmM2dnMWU2YnV6N05NSkNRa0pDVHNJdmp6QVRHWkw2THFLbmU5M3FweURQejVnSmpNbDlGMWxidGViMVU1ZXYvTk9zRTd5OGg4SVdWWHVldjFWcFdqNE04SDNEY25hT1FEN1JzZUxPVEQ5bDFwOVZMYVE3TS9rb1czL0w0cHYrKzl2b0JnK2F6TzJ1Qnl3ZXN2OFBNT3dXd1lXeHpObDg1V3Z3NE84T3h3YkgrNzNOcmZUSkc3eXZIc21mczNrUHFJVHo3NVJORDZWRThrTDBzQStjTWg2OVo3d0Nvc0lMQy9zQlFLNzg4SWlOWUh2ejdlSmM5ci9kZEh3QWk5Zzg1QmdPdDNGNFdpMTNkWVNNZ0M5TnRHNXRDQmdIZ1QwRy9mNm1MaXNTWUNNUUtEVFVxNExBcnZQNi8xWDQ0QS9ueUFvMU5yT3NGRGJ5Y0ZYUFozcXM1T2tsK2ZkN0swdk9ISEorczJRSjkzQ0tIdllXelZZYlNySEVmZmpzeXFqbFJYT1k2K1hkbFZYZW11Y2tKQ1FrSkNRa0lzSEFDNE5ubjdDYUJ2YTR2THQ1QUFDQk5RZlVnRUhTWkFnTGhaQkZUL25pMGdNNEpBa01YVXRnd2lXVURxQTI0U0FicytDaVFrSkNRa0pDU3NHL0xtZUFMUlZaQlFkbC9vS3RuL0I5cnFleVhreWdUdyszMlQ5RitIQlhCOWI1VCsxQUtxNWUzVngwT0E2LzhONlAyNS9yZTJEeWdiVVAybHBiL2NHUXVvOTcrNStxOXFBVGRlLzFWSEFZLyt1K29IR1AxdmtSL1FpVTFwdmhNU3Roei9CL2gxT1dpeU1wc3dBQUFBQUVsRlRrU3VRbUNDXCJcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSlbXCJkZWZhdWx0XCJdO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pY29ucy5qcy5tYXAiLCIvKipcclxuICogVmFyaW91cyBpbnRlcmZhY2Ugb3B0aW9ucyB3ZSBjYW4gc2VsZWN0XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBvcHRpb25zLlxyXG4gKiBAcGFyYW0gb3B0aW9ucyBVc2VyIHByb3ZpZGVkIG9wdGlvbnMgdGhhdCBvdmVycmlkZSB0aGUgZGVmYXVsdCB2YWx1ZXMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxudmFyIE9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyA/IG9wdGlvbnMgOiB7fTtcclxuXHJcbiAgICAvLy8gT3B0aW9uczogdmVydGljYWwsIGhvcml6b250YWwsIGJvdGhcclxuICAgIHRoaXMucmVzaXplID0gJ3ZlcnRpY2FsJztcclxuXHJcbiAgICAvLy8gVGhlIHJlc2l6aW5nIGhhbmRsZVxyXG4gICAgdGhpcy5oYW5kbGUgPSAnYmFyJztcclxuXHJcbiAgICAvLy8gUmFuZ2UgZm9yIGdyYWJpbmdcclxuICAgIHRoaXMuZ3JhYlNpemUgPSAxMDtcclxuXHJcbiAgICBmb3IodmFyIHByb3BlcnR5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICBpZihvcHRpb25zLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uIFwiICsgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXNbcHJvcGVydHldID0gb3B0aW9uc1twcm9wZXJ0eV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcHRpb25zO1xyXG4iLCJpbXBvcnQgUmVzaXplciBmcm9tICcuL3Jlc2l6ZXIuanMnO1xyXG5cclxuZXhwb3J0IHtSZXNpemVyIGFzIGRlZmF1bHR9O1xyXG4iLCJcclxuZnVuY3Rpb24gUmVzaXplckFjdHVhbChlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Jlc2l6ZXInKTtcclxuXHJcbiAgICBsZXQgZ3JhYlNpemUgPSBvcHRpb25zLmdyYWJTaXplO1xyXG5cclxuICAgIGxldCBoYW5kbGUgPSBvcHRpb25zLmhhbmRsZTtcclxuICAgIGlmKGhhbmRsZSA9PT0gJ2JhcicpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlc2l6ZSA9ICdub25lJztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmJvcmRlckJvdHRvbSA9IGdyYWJTaXplICsgJ3B4IHNvbGlkICMxODQ1M0InO1xyXG4gICAgfSBlbHNlIGlmKGhhbmRsZSA9PT0gJ2hhbmRsZScpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlc2l6ZSA9ICd2ZXJ0aWNhbCc7XHJcbiAgICB9IGVsc2UgaWYoaGFuZGxlID09PSAnbm9uZScpIHtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVzaXplID0gJ25vbmUnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyQm90dG9tID0gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLyBNb3VzZSBtb3ZlIGV2ZW50IGhhbmRsZXJcclxuICAgIGxldCBpbnN0YWxsZWRNb3ZlTGlzdGVuZXIgPSBudWxsO1xyXG4gICAgbGV0IG1hc2sgPSBudWxsO1xyXG5cclxuICAgIC8vLyBHZXQgdGhlIG1pbmltdW0gaGVpZ2h0IGFuZCB3aWR0aCBwcm9wZXJ0aWVzXHJcbiAgICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICB2YXIgaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XHJcbiAgICB2YXIgd2lkdGggPSByZWN0LndpZHRoO1xyXG5cclxuICAgIGxldCBtaW5IZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLm1pbkhlaWdodDtcclxuICAgIG1pbkhlaWdodCA9IG1pbkhlaWdodC5zdWJzdHIoMCwgbWluSGVpZ2h0Lmxlbmd0aCAtIDIpO1xyXG4gICAgbGV0IG1pbldpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5taW5XaWR0aDtcclxuICAgIG1pbldpZHRoID0gbWluV2lkdGguc3Vic3RyKDAsIG1pbldpZHRoLmxlbmd0aCAtIDIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIEluc3RhbGwgdGhlIG1vdXNlIGRvd24gbGlzdGVuZXJcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bkxpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgLy8gSW5zdGFsbCB0aGUgY3Vyc29yIGxpc3RlbmVyXHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBjdXJzb3JMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGluaXRpYWxYLCBpbml0aWFsWTtcclxuICAgIGxldCBpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQ7XHJcbiAgICBsZXQgZ3JhYlR5cGUgPSBudWxsO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlRG93bkxpc3RlbmVyKGUpIHtcclxuICAgICAgICBncmFiVHlwZSA9IG9uSGFuZGxlKGUucGFnZVgsIGUucGFnZVkpO1xyXG4gICAgICAgIGlmKGdyYWJUeXBlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGluaXRpYWxYID0gZS5wYWdlWDtcclxuICAgICAgICAgICAgaW5pdGlhbFkgPSBlLnBhZ2VZO1xyXG4gICAgICAgICAgICBsZXQgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGluaXRpYWxXaWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICAgICAgICAgIGluaXRpYWxIZWlnaHQgPSByZWN0LmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGluc3RhbGxIYW5kbGVycygpO1xyXG4gICAgICAgICAgICBpbnN0YWxsTWFzaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZU1vdmVMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgaWYoZS5idXR0b25zICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUFsbCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZHggPSBlLnBhZ2VYIC0gaW5pdGlhbFg7XHJcbiAgICAgICAgbGV0IGR5ID0gZS5wYWdlWSAtIGluaXRpYWxZO1xyXG5cclxuICAgICAgICBpZihncmFiVHlwZSA9PT0gJ2hvcml6b250YWwnIHx8IGdyYWJUeXBlID09PSAnYm90aCcpIHtcclxuICAgICAgICAgICAgLy8gQ29tcHV0ZSBhIGRlc2lyZWQgbmV3IHdpZHRoXHJcbiAgICAgICAgICAgIGxldCBuZXdXaWR0aCA9IGluaXRpYWxXaWR0aCArIGR4O1xyXG4gICAgICAgICAgICBpZiAobmV3V2lkdGggPCBtaW5XaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSBtaW5XaWR0aDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2V0IGl0XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnJyArIG5ld1dpZHRoICsgJ3B4JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGdyYWJUeXBlID09PSAndmVydGljYWwnIHx8IGdyYWJUeXBlID09PSAnYm90aCcpIHtcclxuICAgICAgICAgICAgLy8gQ29tcHV0ZSBhIGRlc2lyZWQgbmV3IGhlaWdodFxyXG4gICAgICAgICAgICBsZXQgbmV3SGVpZ2h0ID0gaW5pdGlhbEhlaWdodCArIGR5O1xyXG4gICAgICAgICAgICBpZiAobmV3SGVpZ2h0IDwgbWluSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSBtaW5IZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFNldCBpdFxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcnICsgbmV3SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VVcExpc3RlbmVyKGUpIHtcclxuICAgICAgICByZW1vdmVBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbnN0YWxsSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgcmVtb3ZlSGFuZGxlcnMoKTtcclxuXHJcbiAgICAgICAgaW5zdGFsbGVkTW92ZUxpc3RlbmVyID0gbW91c2VNb3ZlTGlzdGVuZXI7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaW5zdGFsbGVkTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcExpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbnN0YWxsTWFzaygpIHtcclxuICAgICAgICAvLyBFbnN1cmUgbm9uZSBjdXJyZW50bHkgZXhpc3RzXHJcbiAgICAgICAgcmVtb3ZlTWFzaygpO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIG1hc2suc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgIG1hc2suc3R5bGUubGVmdCA9IDA7XHJcbiAgICAgICAgbWFzay5zdHlsZS50b3AgPSAwO1xyXG4gICAgICAgIG1hc2suc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICBtYXNrLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICBtYXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgbWFzay5zdHlsZS56SW5kZXggPSAxMDAwMDtcclxuICAgICAgICBtYXNrLnN0eWxlLm9wYWNpdHkgPSAwLjU7XHJcblxyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsKCkge1xyXG4gICAgICAgIHJlbW92ZUhhbmRsZXJzKCk7XHJcbiAgICAgICAgcmVtb3ZlTWFzaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUhhbmRsZXJzKCkge1xyXG4gICAgICAgIGlmKGluc3RhbGxlZE1vdmVMaXN0ZW5lciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBpbnN0YWxsZWRNb3ZlTGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwTGlzdGVuZXIpO1xyXG4gICAgICAgIGluc3RhbGxlZE1vdmVMaXN0ZW5lciA9IG51bGw7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVNYXNrKCkge1xyXG4gICAgICAgIGlmKG1hc2sgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobWFzayk7XHJcbiAgICAgICAgICAgIG1hc2sgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZSBpZiBhbiB4LHkgbG9jYXRpb24gaXMgb3ZlciBhIGhhbmRsZSBmb3IgbWFuaXB1bGF0aW5nXHJcbiAgICAgKiB0aGUgcmVzaXplYWJsZSBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0geCBsb2NhdGlvbiBpbiBwaXhlbHNcclxuICAgICAqIEBwYXJhbSB5IGxvY2F0aW9uIGluIHBpeGVsc1xyXG4gICAgICogQHJldHVybnMgbnVsbCBpZiBub3QsICdob3Jpem9udGFsJywgJ3ZlcnRpY2FsJywgJ2JvdGgnIGlmIG92ZXIgaGFuZGxlIGFuZCBtb2RlIGF2YWlsYWJsZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gb25IYW5kbGUoeCwgeSkge1xyXG4gICAgICAgIGxldCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgbGV0IGJvdHRvbSA9IHJlY3QuYm90dG9tICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIGxldCB2ZXJ0ID0geSA+PSBib3R0b20gLSBncmFiU2l6ZTtcclxuXHJcbiAgICAgICAgbGV0IHJpZ2h0ID0gcmVjdC5yaWdodCArIHdpbmRvdy5wYWdlWE9mZnNldDtcclxuICAgICAgICBsZXQgaG9yeiA9IHggPj0gcmlnaHQgLSBncmFiU2l6ZTtcclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy5yZXNpemUgPT09ICdib3RoJykge1xyXG4gICAgICAgICAgICBpZih2ZXJ0ICYmIGhvcnopIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnYm90aCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodmVydCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGhvcnopIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKChvcHRpb25zLnJlc2l6ZSA9PT0gJ2JvdGgnIHx8IG9wdGlvbnMucmVzaXplID09PSAndmVydGljYWwnKSAmJiB2ZXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAndmVydGljYWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoKG9wdGlvbnMucmVzaXplID09PSAnYm90aCcgfHwgb3B0aW9ucy5yZXNpemUgPT09ICdob3Jpem9udGFsJykgJiYgaG9yeikge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2hvcml6b250YWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBsZXQgY3Vyc29yID0gMDtcclxuXHJcbiAgICBmdW5jdGlvbiBjdXJzb3JMaXN0ZW5lcihldmVudCkge1xyXG4gICAgICAgIC8vIFN3YXAgdGhlIGN1cnNvciB3aGVuIHdlIGFyZSBvdmVyIHRoZSBoYW5kbGVcclxuICAgICAgICBpZiAob25IYW5kbGUoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoY3Vyc29yICE9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgICAgICAgICAgICAgIGN1cnNvciA9IDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoY3Vyc29yICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmN1cnNvciA9ICd0ZXh0JztcclxuICAgICAgICAgICAgICAgIGN1cnNvciA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzaXplckFjdHVhbDtcclxuIiwiLyoqXHJcbiAqIFZlcnRpY2FsIHJlc2l6ZSBzdXBwb3J0IGZvciBkaXYsIHRleHRhcmVhLCBpZnJhbWUsIGV0Yy5cclxuICpcclxuICogQSBwcm9ibGVtIHdpdGggdGhlIHJlc2l6ZSBmZWF0dXJlIG9mIHRleHRhcmVhIGFuZCBpZnJhbWUgaXMgdGhhdCBpdCBkb2VzIG5vdCB3b3JrIGluIGFsbFxyXG4gKiBicm93c2VycyAoZXNwZWNpYWxseSBFZGdlKSBhbmQgaXMgb2Z0ZW4gcXVpdGUgcXVpcmt5LiBUaGlzIHNtYWxsIHBhY2thZ2UgYWxsb3dzIHlvdSB0b1xyXG4gKiBhZGQgdmVydGljYWwgcmVzaXplIGFiaWxpdHkgdG8ganVzdCBhYm91dCBhbnl0aGluZy5cclxuICpcclxuICovXHJcblxyXG5pbXBvcnQgUmVzaXplckFjdHVhbCBmcm9tICcuL3Jlc2l6ZXItYWN0dWFsLmpzJztcclxuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9PcHRpb25zLmpzJztcclxuXHJcblxyXG4vKipcclxuICogQ29uc3RydWN0b3IgZm9yIGEgUmVzaXplciBvYmplY3RcclxuICogQHBhcmFtIHNlbCBTZWxlY3RvciBvciBET00gZWxlbWVudFxyXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIG9iamVjdC5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBSZXNpemVyKHNlbCwgb3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IG5ldyBPcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuICAgIGlmKHR5cGVvZiBzZWwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbCk7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbmV3IFJlc2l6ZXJBY3R1YWwoZWxlbWVudHNbaV0sIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZihzZWwubm9kZVR5cGUpIHtcclxuICAgICAgICBuZXcgUmVzaXplckFjdHVhbChzZWwsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNpemVyO1xyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogTWlkZGxlIHNlY3Rpb24gb2YgZGlhbG9nIGJveFxyXG4gKi9cclxuXHJcbmltcG9ydCBUb29scyBmcm9tICcuL0RPTS9Ub29scy5qcyc7XHJcblxyXG5cclxubGV0IEJvZHkgPSBmdW5jdGlvbihkaWFsb2csIHBhcmVudERpdikge1xyXG4gICAgbGV0IG9wdGlvbnMgPSBkaWFsb2cub3B0aW9ucztcclxuXHJcbiAgICBsZXQgZGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignZGlhbG9nLWNsLWJvZHknLCBvcHRpb25zLmNvbnRlbnQpO1xyXG4gICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgdGhpcy5kaXYgPSBkaXY7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2R5O1xyXG5cclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFRoZSBib3R0b20gYnV0dG9ucyBzZWN0aW9uIG9mIHRoZSBkaWFsb2cgYm94XHJcbiAqL1xyXG5cclxuaW1wb3J0IFRvb2xzIGZyb20gJy4vRE9NL1Rvb2xzLmpzJztcclxuXHJcblxyXG5sZXQgQm90dG9tID0gZnVuY3Rpb24oZGlhbG9nLCBwYXJlbnREaXYpIHtcclxuICAgIGxldCBvcHRpb25zID0gZGlhbG9nLm9wdGlvbnM7XHJcblxyXG4gICAgbGV0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gbGV0IGh0bWwgPSBgPGJ1dHRvbiBjbGFzcz1cImNsLWRpYWxvZy1idG5cIj5PazwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJjbC1kaWFsb2ctYnRuXCI+Q2FuY2VsPC9idXR0b24+YDtcclxuICAgICAgICBsZXQgZGl2ID0gVG9vbHMuY3JlYXRlQ2xhc3NlZERpdignY2wtZGlhbG9nLWJvdHRvbScpO1xyXG4gICAgICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICBpZihvcHRpb25zLmJ1dHRvbnMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgYWRkT2soZGl2KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcHRpb25zLmJ1dHRvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWRkQnV0dG9uKGRpdiwgaXRlbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRPayhkaXYsIGl0ZW0pIHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLnR5cGUgPSAnc3VibWl0JztcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ09rJztcclxuICAgICAgICBidXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZihpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbS5jbGljayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsaWNrKGRpYWxvZyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uLmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEJ1dHRvbihkaXYsIGl0ZW0pIHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLnR5cGUgPSAnc3VibWl0JztcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gaXRlbS5jb250ZW50cztcclxuICAgICAgICBidXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZihpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbS5jbGljayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsaWNrKGRpYWxvZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGl0ZW0uZm9jdXMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgYnV0dG9uLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKTtcclxuXHJcbiAgICB0aGlzLmRlZmF1bHQgPSBmdW5jdGlvbigpIHtcclxuXHQgICAgb3B0aW9ucy5idXR0b25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdCAgICBpZihpdGVtLmRlZmF1bHQgPT09IHRydWUgJiYgaXRlbS5jbGljayAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdCAgICBpdGVtLmNsaWNrKGRpYWxvZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHQgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvdHRvbTtcclxuXHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBDb252ZW5pZW5jZSBmdW5jdGlvbnMgZm9yIHRoZSBET00uXHJcbiAqIFRvb2xzIHRoYXQgYXZvaWQgaGF2aW5nIHRvIGhhdmUgalF1ZXJ5IGluc3RhbGxlZC5cclxuICovXHJcblxyXG5sZXQgVG9vbHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgYSBjbGFzcyB0byBhbiBlbGVtZW50XHJcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdG8gYWRkIHRvXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUgQ2xhc3MgdG8gYWRkXHJcbiAqL1xyXG5Ub29scy5hZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcclxufVxyXG5cclxuVG9vbHMuYWRkQ2xhc3NlcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzZXMpIHtcclxuICAgIGlmKGNsYXNzZXMgPT09IHVuZGVmaW5lZCB8fCBjbGFzc2VzID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKChjbHMpID0+IHtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyhlbGVtZW50LCBjbHMpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBESVYgd2l0aCBhIHByb3ZpZGVkIGNsYXNzIG5hbWUuXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUgQ2xhc3MgdG8gYWRkIHRvIHRoZSBkaXZcclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudCB0byBwbGFjZSBpbiB0aGUgZGl2LiBIVE1MIG9yIEVsZW1lbnRcclxuICogQHJldHVybnMge0VsZW1lbnR9IENyZWF0ZWQgRE9NIEVsZW1lbnRcclxuICovXHJcblRvb2xzLmNyZWF0ZUNsYXNzZWREaXYgPSBmdW5jdGlvbihjbGFzc05hbWUsIGNvbnRlbnQpIHtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIFRvb2xzLmFkZENsYXNzKGRpdiwgY2xhc3NOYW1lKTtcclxuICAgIFRvb2xzLmFkZENvbnRlbnQoZGl2LCBjb250ZW50KTtcclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgY29udGVudCB0byBhbiBlbGVtZW50LlxyXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGFkZCB0b1xyXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50LiBDYW4gYmUgSFRNTCBvciBhbiBFbGVtZW50LlxyXG4gKi9cclxuVG9vbHMuYWRkQ29udGVudCA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNvbnRlbnQpIHtcclxuICAgIGlmKFRvb2xzLmlzU3RyaW5nKGNvbnRlbnQpKSB7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gY29udGVudDtcclxuICAgIH0gZWxzZSBpZihUb29scy5pc0VsZW1lbnQoY29udGVudCkpIHtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Ub29scy5pc1N0cmluZyA9IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8ICgoISF2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBTdHJpbmddJyk7XHJcbn1cclxuXHJcblRvb2xzLmlzRWxlbWVudCA9IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgcmV0dXJuIHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCAmJiB2YWwubm9kZVZhbHVlICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xzO1xyXG5cclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIEZsZXhpYmxlIGFuZCBjb25maWd1cmFibGUgZGlhbG9nIGJveCBvYmplY3RcclxuICovXHJcblxyXG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL09wdGlvbnMuanMnO1xyXG5pbXBvcnQgVGl0bGVCYXIgZnJvbSAnLi9UaXRsZUJhci5qcyc7XHJcbmltcG9ydCBCb2R5IGZyb20gJy4vQm9keS5qcyc7XHJcbmltcG9ydCBCb3R0b20gZnJvbSAnLi9Cb3R0b20uanMnO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSAnLi9ET00vVG9vbHMuanMnO1xyXG5pbXBvcnQgUmVzaXplciBmcm9tICdyZXNpemVyLWNsJztcclxuaW1wb3J0IE1hc2sgZnJvbSAnLi9NYXNrLmpzJztcclxuXHJcbmxldCBEaWFsb2cgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gbmV3IE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cclxuICAgIGxldCBib2R5ID0gbnVsbCwgbWFzayA9IG51bGwsIGJvdHRvbSA9IG51bGw7XHJcblxyXG4gICAgbGV0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgRGlhbG9nLnpJbmRleCArPSAyO1xyXG4gICAgICAgIHRoaXMuekluZGV4ID0gRGlhbG9nLnpJbmRleDtcclxuXHJcbiAgICAgICAgbGV0IGRpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2RpYWxvZy1jbCcpO1xyXG4gICAgICAgIFRvb2xzLmFkZENsYXNzZXMoZGl2LCBvcHRpb25zLmFkZENsYXNzKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXYgPSBkaXY7XHJcbiAgICAgICAgZGl2LnN0eWxlLnpJbmRleCA9IHRoaXMuekluZGV4O1xyXG5cclxuICAgICAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICBpbnN0YWxsUmVzaXphYmxlKGRpdik7XHJcblxyXG4gICAgICAgIG5ldyBUaXRsZUJhcih0aGlzLCBkaXYpO1xyXG4gICAgICAgIGJvZHkgPSBuZXcgQm9keSh0aGlzLCBkaXYpO1xyXG4gICAgICAgIGlmKG9wdGlvbnMuYnV0dG9ucyAhPT0gZmFsc2UpIHtcclxuXHQgICAgICAgIGJvdHRvbSA9IG5ldyBCb3R0b20odGhpcywgZGl2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFzayA9IG5ldyBNYXNrKHRoaXMpO1xyXG5cclxuICAgICAgICBwbGFjZShkaXYsIHBhcmVudCk7XHJcblxyXG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpbnN0YWxsUmVzaXphYmxlID0gKGRpdikgPT4ge1xyXG4gICAgICAgIGlmKG9wdGlvbnMucmVzaXplICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgbGV0IHJzT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICdyZXNpemUnOiBvcHRpb25zLnJlc2l6ZSxcclxuICAgICAgICAgICAgICAgICdoYW5kbGUnOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAnZ3JhYlNpemUnOiBvcHRpb25zLmdyYWJTaXplXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBuZXcgUmVzaXplcihkaXYsIHJzT3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiB0b1B4KHZhbCkge1xyXG4gICAgICAgIHJldHVybiAnJyArIHZhbCArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHBsYWNlID0gKGRpdiwgcGFyZW50KSA9PiB7XHJcbiAgICAgICAgLy9sZXQgcGFyZW50V2lkID0gcGFyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIC8vbGV0IHBhcmVudEhpdCA9IHBhcmVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgbGV0IHBhcmVudFdpZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGxldCBwYXJlbnRIaXQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgICAgIGxldCBoZWlnaHQgPSBkaXYub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGRpdi5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgICAgbGV0IHRvcCA9IHBhcmVudEhpdC8yIC0gaGVpZ2h0LzI7XHJcbiAgICAgICAgaWYodG9wIDwgMTApIHtcclxuICAgICAgICAgICAgdG9wID0gMTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGVmdCA9IHBhcmVudFdpZC8yIC0gd2lkdGgvMjtcclxuICAgICAgICBpZihsZWZ0IDwgMCkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gdG9QeChsZWZ0KTtcclxuICAgICAgICBkaXYuc3R5bGUudG9wID0gdG9QeCh0b3ApO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKTtcclxuXHJcbiAgICB0aGlzLmFkZENvbnRlbnQgPSBmdW5jdGlvbihjb250ZW50KSB7XHJcbiAgICAgICAgVG9vbHMuYWRkQ29udGVudChib2R5LmRpdiwgY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jbG9zZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG1hc2sucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5kaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmRpdik7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG4gICAgICogQ2FsbGluZyBpcyBlcXVpdmFsZW50IHRvIHByZXNzaW5nIHRoZSBmaXJzdCBkZWZhdWx0IGJ1dHRvblxyXG5cdCAqL1xyXG5cdHRoaXMuZGVmYXVsdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKGJvdHRvbSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBib3R0b20uZGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuRGlhbG9nLnpJbmRleCA9IDEwMDAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nO1xyXG5cclxuIiwiLyoqXHJcbiAqIE1hc2sgdGhhdCBhbGxvd3MgdGhlIGRpYWxvZyBib3ggdG8gYmUgbW9kYWwuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFRvb2xzIGZyb20gJy4vRE9NL1Rvb2xzLmpzJztcclxuXHJcbmxldCBNYXNrID0gZnVuY3Rpb24oZGlhbG9nKSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGRpYWxvZy5vcHRpb25zO1xyXG5cclxuICAgIGxldCBtYXNrID0gbnVsbDtcclxuXHJcbiAgICBpZihvcHRpb25zLm1vZGFsKSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgbWFzayA9ICBUb29scy5jcmVhdGVDbGFzc2VkRGl2KCdtYXNrJyk7IC8vIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBtYXNrLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICBtYXNrLnN0eWxlLmxlZnQgPSAwO1xyXG4gICAgICAgIG1hc2suc3R5bGUudG9wID0gMDtcclxuICAgICAgICBtYXNrLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgbWFzay5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgbWFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgIG1hc2suc3R5bGUuekluZGV4ID0gZGlhbG9nLnpJbmRleCAtIDE7XHJcblxyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZihtYXNrICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1hc2spO1xyXG4gICAgICAgICAgICBtYXNrID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hc2s7XHJcblxyXG4iLCIvKipcclxuICogSGFuZHkgU2ltcGxlIE1lc3NhZ2UgQm94XHJcbiAqL1xyXG5cclxuaW1wb3J0IERpYWxvZyBmcm9tICcuL0RpYWxvZy5qcyc7XHJcblxyXG5sZXQgTWVzc2FnZUJveCA9IGZ1bmN0aW9uKHRpdGxlLCBtZXNzYWdlLCB0eXBlLCBidXR0b24xLCBidXR0b24yKSB7XHJcbiAgICAvLyBEZWZhdWx0OiBPS1xyXG4gICAgbGV0IGJ1dHRvbnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb250ZW50czogJ09rJyxcclxuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKGRpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgaWYoYnV0dG9uMSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uMSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdmb2N1cyc6IHRydWVcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIGlmKHR5cGUgPT09IE1lc3NhZ2VCb3guT0tDQU5DRUwpIHtcclxuICAgICAgICBidXR0b25zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50czogJ09rJyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbihkaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihidXR0b24xICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uMSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnZm9jdXMnOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRzOiAnQ2FuY2VsJyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbihkaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihidXR0b24yICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uMigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICAgIGxldCBkaWFsb2cgPSBuZXcgRGlhbG9nKHtcclxuICAgICAgICAgICd0aXRsZSc6IHRpdGxlLFxyXG4gICAgICAgICAgJ2NvbnRlbnQnOiAnPGRpdiBjbGFzcz1cIm1lc3NhZ2UtY2xcIj48cD4nICsgbWVzc2FnZSArICc8L3A+PC9kaXY+JyxcclxuICAgICAgICAgICdidXR0b25zJzogYnV0dG9uc1xyXG4gICAgIH0pO1xyXG59XHJcblxyXG5NZXNzYWdlQm94Lk9LID0gMDtcclxuTWVzc2FnZUJveC5PS0NBTkNFTCA9IDE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQm94O1xyXG5cclxuIiwiLyoqXHJcbiAqIFZhcmlvdXMgaW50ZXJmYWNlIG9wdGlvbnMgd2UgY2FuIHNlbGVjdFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2Ugb3B0aW9ucy5cclxuICogQHBhcmFtIG9wdGlvbnMgVXNlciBwcm92aWRlZCBvcHRpb25zIHRoYXQgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgdmFsdWVzLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbnZhciBPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgPyBvcHRpb25zIDoge307XHJcblxyXG4gICAgLy8vIFRpdGxlIGJhciB0ZXh0XHJcbiAgICB0aGlzLnRpdGxlID0gJ0RpYWxvZyBCb3gnO1xyXG5cclxuICAgIC8vLyBBbnkgYWRkZWQgY2xhc3Mgb3IgY2xhc3NlcyBmb3IgdGhlIG1haW4gZGlhbG9nIGJveCBkaXZcclxuICAgIC8vLyBDYW4gYmUgYSBzdHJpbmcgb3IgbXVsdGlwbGUgc3RyaW5ncyBzcGFjZSBkZWxpbWl0ZWRcclxuICAgIHRoaXMuYWRkQ2xhc3MgPSBudWxsO1xyXG5cclxuICAgIC8vLyBJcyB0aGlzIGRpYWxvZyBib3ggcmVzaXphYmxlP1xyXG4gICAgLy8vIE9wdGlvbnMgYXJlOiAnbm9uZScsICd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJ1xyXG4gICAgdGhpcy5yZXNpemUgPSAnbm9uZSc7XHJcblxyXG4gICAgLy8vIFNpemUgb2YgdGhlIGJvcmRlciBlZGdlIHdlIGNhbiBncmFiIGlmIHJlc2l6YWJsZSBpbiBwaXhlbHNcclxuICAgIHRoaXMuZ3JhYlNpemUgPSA0O1xyXG5cclxuICAgIC8vLyBBcnJheSBvZiB0aXRsZSBiYXIgYnV0dG9ucyB0byBhZGQuXHJcbiAgICAvLy8gSWYgbnVsbCwgYSBjbG9zZSBidXR0b24gaXMgYWRkZWQgYXV0b21hdGljYWxseS5cclxuICAgIC8vLyBPdGhlcndpc2UsIGFuIGFycmF5IG9mIG9iamVjdHMsIHdpdGggdGhlc2UgZmllbGRzOlxyXG4gICAgLy8vICAgdHlwZTogJ2Nsb3NlJyBmb3IgYSBjbG9zZSAgYnV0dG9uLCAnY3VzdG9tJyBmb3IgY3VzdG9tIGJ1dHRvbiBjb250ZW50c1xyXG4gICAgLy8vICAgY29udGVudHM6IEhUTUwgdG8gcGxhY2UgaW5zaWRlIGJ1dHRvbiB0YWdcclxuICAgIC8vLyAgIGNsaWNrOiBDbGljayBoYW5kbGVyXHJcbiAgICB0aGlzLnRpdGxlQmFyQnV0dG9ucyA9IG51bGw7XHJcblxyXG4gICAgLy8vIEFueSBhZGRlZCBjbGFzcyBvciBjbGFzc2VzIGZvciB0aGUgdGl0bGUgYmFyIGRpdlxyXG4gICAgLy8vIENhbiBiZSBhIHN0cmluZyBvciBtdWx0aXBsZSBzdHJpbmdzIHNwYWNlIGRlbGltaXRlZFxyXG4gICAgdGhpcy50aXRsZUJhckFkZENsYXNzID0gbnVsbDtcclxuXHJcbiAgICAvLy8gQXJyYXkgb2YgYnV0dG9ucyBmb3IgdGhlIGJvdHRvbS5cclxuICAgIC8vLyBJZiBudWxsLCBhbiBPayBidXR0b24gaXMgYWRkZWQgYXV0b21hdGljYWxseS5cclxuICAgIC8vLyBPdGhlcndpc2UsIGFuIGFycmF5IG9mIG9iamVjdHMsIHdpdGggdGhlc2UgZmllbGRzOlxyXG4gICAgLy8vICAgY29udGVudHM6IElmIHByb3ZpZGVkLCBIVE1MIHRvIHBsYWNlIGluc2lkZSBidXR0b24gdGFnXHJcbiAgICAvLy8gICBjbGljazogQ2xpY2sgaGFuZGxlclxyXG4gICAgLy8vICAgZm9jdXM6IHRydWUgaWYgd2Ugd2FudCB0byBzZXQgZm9jdXMgb24gdGhpcyBidXR0b25cclxuICAgIC8vLyAgIGRlZmF1bHQ6IHRydWUgaWYgdGhpcyBpcyB0aGUgZGVmYXVsdCBidXR0b25cclxuICAgIHRoaXMuYnV0dG9ucyA9IG51bGw7XHJcblxyXG4gICAgLy8vIENvbnRlbnQgdG8gYWRkIHRvIHRoZSBkaWFsb2cgYm94LiBJZiBudWxsLCBub25lIGlzIGFkZGVkIG9uIGNyZWF0aW9uLlxyXG4gICAgdGhpcy5jb250ZW50ID0gbnVsbDtcclxuXHJcbiAgICAvLy8gSXMgdGhpcyBhIG1vZGFsIGRpYWxvZyBib3g/IElmIHRydWUsIGNvbnRyb2xzIHVuZGVybmVhdGggYXJlIGRpc2FibGVkLlxyXG4gICAgdGhpcy5tb2RhbCA9IHRydWU7XHJcblxyXG4gICAgZm9yKHZhciBwcm9wZXJ0eSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbiBcIiArIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IG9wdGlvbnNbcHJvcGVydHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3B0aW9ucztcclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFRpdGxlIGJhciBtYW5hZ2VtZW50XHJcbiAqL1xyXG5cclxuaW1wb3J0IFRvb2xzIGZyb20gJy4vRE9NL1Rvb2xzLmpzJztcclxuXHJcblxyXG5sZXQgVGl0bGVCYXIgPSBmdW5jdGlvbihkaWFsb2csIHBhcmVudERpdikge1xyXG4gICAgbGV0IG9wdGlvbnMgPSBkaWFsb2cub3B0aW9ucztcclxuXHJcbiAgICAvLy8gTW91c2UgbW92ZSBldmVudCBoYW5kbGVyXHJcbiAgICBsZXQgaW5zdGFsbGVkTW92ZUxpc3RlbmVyID0gbnVsbDtcclxuXHJcbiAgICBsZXQgaW5pdGlhbFgsIGluaXRpYWxZO1xyXG4gICAgbGV0IGluaXRpYWxQb3NpdGlvblgsIGluaXRpYWxQb3NpdGlvblk7XHJcblxyXG4gICAgbGV0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGh0bWwgPSBgPGgxPiR7b3B0aW9ucy50aXRsZX08L2gxPmA7XHJcbiAgICAgICAgbGV0IGRpdiA9IFRvb2xzLmNyZWF0ZUNsYXNzZWREaXYoJ2RpYWxvZy1jbC10b3AnLCBodG1sKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzc2VzKGRpdiwgb3B0aW9ucy50aXRsZUJhckFkZENsYXNzKTtcclxuICAgICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy50aXRsZUJhckJ1dHRvbnMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgYWRkQ2xvc2UoZGl2KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcHRpb25zLnRpdGxlQmFyQnV0dG9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihpdGVtLnR5cGUgPT09ICdjbG9zZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRDbG9zZShkaXYsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGl0ZW0udHlwZSA9PT0gJ2N1c3RvbScpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRDdXN0b20oZGl2LCBpdGVtKTsgLy8gYWRkQ3VzdG9tKGRpdiwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBoMSA9IGRpdi5xdWVyeVNlbGVjdG9yKCdoMScpO1xyXG5cclxuICAgICAgICBoMS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaW5pdGlhbFggPSBldmVudC5wYWdlWDtcclxuICAgICAgICAgICAgaW5pdGlhbFkgPSBldmVudC5wYWdlWTtcclxuXHJcbiAgICAgICAgICAgIGxldCByZWN0ID0gZGlhbG9nLmRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgaW5pdGlhbFBvc2l0aW9uWCA9IHJlY3QubGVmdDtcclxuICAgICAgICAgICAgaW5pdGlhbFBvc2l0aW9uWSA9IHJlY3QudG9wO1xyXG5cclxuICAgICAgICAgICAgaW5zdGFsbEhhbmRsZXJzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZENsb3NlKGRpdiwgaXRlbSkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyhidXR0b24sICdkaWFsb2ctY2wtdGItYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cImljb25zLWNsIGljb25zLWNsLWNsb3NlXCI+JztcclxuICAgICAgICBidXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZihpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbS5jbGljayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQ3VzdG9tKGRpdiwgaXRlbSkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBUb29scy5hZGRDbGFzcyhidXR0b24sICdkaWFsb2ctY2wtdGItYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGl0ZW0uY29udGVudHM7XHJcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYoaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uY2xpY2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGljaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VNb3ZlTGlzdGVuZXIoZSkge1xyXG4gICAgICAgIGlmKGUuYnV0dG9ucyAhPT0gMSkge1xyXG4gICAgICAgICAgICByZW1vdmVIYW5kbGVycygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZHggPSBlLnBhZ2VYIC0gaW5pdGlhbFg7XHJcbiAgICAgICAgbGV0IGR5ID0gZS5wYWdlWSAtIGluaXRpYWxZO1xyXG5cclxuICAgICAgICBsZXQgbmV3UG9zaXRpb25YID0gaW5pdGlhbFBvc2l0aW9uWCArIGR4O1xyXG4gICAgICAgIGxldCBuZXdQb3NpdGlvblkgPSBpbml0aWFsUG9zaXRpb25ZICsgZHk7XHJcblxyXG4gICAgICAgIGRpYWxvZy5kaXYuc3R5bGUubGVmdCA9IG5ld1Bvc2l0aW9uWCArICdweCc7XHJcbiAgICAgICAgZGlhbG9nLmRpdi5zdHlsZS50b3AgPSBuZXdQb3NpdGlvblkgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlVXBMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgcmVtb3ZlSGFuZGxlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbnN0YWxsSGFuZGxlcnMoKSB7XHJcbiAgICAgICAgcmVtb3ZlSGFuZGxlcnMoKTtcclxuXHJcbiAgICAgICAgaW5zdGFsbGVkTW92ZUxpc3RlbmVyID0gbW91c2VNb3ZlTGlzdGVuZXI7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaW5zdGFsbGVkTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcExpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVIYW5kbGVycygpIHtcclxuICAgICAgICBpZihpbnN0YWxsZWRNb3ZlTGlzdGVuZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaW5zdGFsbGVkTW92ZUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcExpc3RlbmVyKTtcclxuICAgICAgICBpbnN0YWxsZWRNb3ZlTGlzdGVuZXIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGl0bGVCYXI7XHJcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL19kaWFsb2cuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwNzk3YTk5OFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9fZGlhbG9nLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9fZGlhbG9nLnNjc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIFRoZSBwdWJsaWMtcGF0aCBtb2R1bGUgbXVzdCBiZSBpbXBvcnRlZCBmaXJzdCFcclxuLy9pbXBvcnQgJy4vcHVibGljLXBhdGguanMnO1xyXG5cclxuaW1wb3J0ICcuL3BvbHlmaWxscy9hbGwuanMnO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJy4vRGlhbG9nLmpzJztcclxuaW1wb3J0IE1lc3NhZ2VCb3ggZnJvbSAnLi9NZXNzYWdlQm94LmpzJztcclxuaW1wb3J0ICcuL19kaWFsb2cuc2Nzcyc7XHJcbmltcG9ydCAnaWNvbnMtY2wnO1xyXG5cclxuRGlhbG9nLk1lc3NhZ2VCb3ggPSBNZXNzYWdlQm94O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nO1xyXG5leHBvcnQge0RpYWxvZ307XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9