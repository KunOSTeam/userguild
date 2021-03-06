/******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");
/* harmony import */ var osjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! osjs */ "osjs");
/* harmony import */ var osjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(osjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _metadata_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata.json */ "./metadata.json");
var _metadata_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./metadata.json */ "./metadata.json", 1);
/* harmony import */ var _osjs_gui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osjs/gui */ "./node_modules/@osjs/gui/dist/esm.js");





const register = (core, args, options, metadata) => {
  options.settings = {
    ran: false
  };
  const proc = core.make('osjs/application', {
    args,
    options,
    metadata
  });

  if (proc.settings.ran) {
    proc.destroy();
    return proc;
  }

  const {
    translatable
  } = core.make('osjs/locale');

  const _ = translatable(__webpack_require__(/*! ./locales.js */ "./locales.js"));

  const getLocales = () => core.config('languages', {
    en_EN: 'English'
  });

  const views = {
    'lang': (state, actions) => Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      grow: 1,
      padding: false
    }, [Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      grow: 1,
      shrink: 1
    }, [Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])('h3', {}, [_('LANG_TITLE')]), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_3__["BoxContainer"], {}, [_('LANG_DESC')]), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_3__["SelectField"], {
      choices: getLocales(),
      value: state.language,
      oninput: (ev, value) => {
        actions.setOption({
          key: 'language',
          value
        });
        core.make('osjs/locale').setLocale(value);
      }
    }, [])]), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {
      justify: 'flex-end'
    }, [Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      label: _('NEXT'),
      onclick: () => actions.setOption({
        key: 'view',
        value: 'about'
      })
    }, [])])]),
    'about': (state, actions) => Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      grow: 1,
      padding: false
    }, [Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      grow: 1,
      shrink: 1
    }, [Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])('h3', {}, [_('ABOUT_TITLE')]), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_3__["BoxContainer"], {}, [_('ABOUT_DESC')])]), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {
      justify: 'flex-end'
    }, [Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      label: _('PREV'),
      onclick: () => actions.setOption({
        key: 'view',
        value: 'lang'
      })
    }, []), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      label: _('NEXT'),
      onclick: () => actions.setOption({
        key: 'view',
        value: 'tutorial-panel'
      })
    }, [])])]),
    'tutorial-panel': (state, actions) => Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      grow: 1,
      padding: false
    }, [Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      grow: 1,
      shrink: 1
    }, [Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])('h3', {}, [_('TUTORIAL_PANEL_TITLE')]), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_3__["BoxContainer"], {}, [_('TUTORIAL_PANEL_DESC')]), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_3__["Image"], {
      src: proc.resource('/images/panel.png')
    })]), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {
      justify: 'flex-end'
    }, [Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      label: _('PREV'),
      onclick: () => actions.setOption({
        key: 'view',
        value: 'about'
      })
    }, []), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      label: _('NEXT'),
      onclick: () => {
        proc.settings.ran = true;
        proc.saveSettings().then(() => {
          proc.destroy();
        }).catch(err => core.make('osjs/dialog', 'alert', {
          title: err.name,
          message: err.message
        }, (btn, value) => {}));
      }
    }, [])])])
  };
  proc.createWindow({
    id: 'FirstBootWindow',
    title: _('WIN_TITLE'),
    dimension: {
      width: 400,
      height: 250
    },
    position: 'center'
  }).on('destroy', () => proc.destroy()).render(($content, win) => {
    let hyperapp = Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["app"])({
      view: 'lang',
      language: 'en_EN'
    }, {
      setOption: ({
        key,
        value
      }) => state => Object.assign({}, state, {
        [key]: value
      })
    }, (state, actions) => views[state.view], $content);
  });
  return proc;
};

osjs__WEBPACK_IMPORTED_MODULE_1___default.a.register(_metadata_json__WEBPACK_IMPORTED_MODULE_2__["name"], register);

/***/ }),

/***/ "./locales.js":
/*!********************!*\
  !*** ./locales.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

const en_US = {
  WIN_TITLE: 'Welcome to BlueLight',
  LANG_TITLE: 'Language',
  LANG_DESC: 'Before you begin, please set your language.',
  ABOUT_TITLE: 'About BlueLight',
  ABOUT_DESC: 'BlueLight, formerly called OS.js Linux, is a lightweight web-based Linux distro powered by OS.js. It uses the power of Electron to run a web-based desktop environment, OS.js, to provide the user with a more web-based experience.',
  TUTORIAL_PANEL_TITLE: 'Panel Tutorial',
  TUTORIAL_PANEL_DESC: 'The panel is a bar that can display on either the top or bottom of the screen. It displays the opened windows, the applications menu, and icons to manage sound, volume, and other applications which add an icon.',
  NEXT: 'Next',
  PREV: 'Previous'
};
module.exports = {
  en_US,
  en_EN: en_US
};

/***/ }),

/***/ "./metadata.json":
/*!***********************!*\
  !*** ./metadata.json ***!
  \***********************/
/*! exports provided: type, name, category, autostart, singleton, hidden, title, description, files, default */
/***/ (function(module) {

module.exports = {"type":"application","name":"FirstBoot","category":null,"autostart":true,"singleton":true,"hidden":true,"title":{"en_EN":"First Boot"},"description":{"en_EN":"First Boot"},"files":["main.js"]};

/***/ }),

/***/ "./node_modules/@osjs/gui/dist/esm.js":
/*!********************************************!*\
  !*** ./node_modules/@osjs/gui/dist/esm.js ***!
  \********************************************/
/*! exports provided: Element, Box, BoxContainer, BoxStyled, Button, Progressbar, Menu, Toolbar, Statusbar, MenubarItem, Menubar, Panes, ListView, listView, IconViewEntry, IconView, iconView, Image, Video, Tabs, Iframe, TextField, TextareaField, SelectField, ToggleField, RangeField, Icon, Expander, GUIServiceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxContainer", function() { return BoxContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxStyled", function() { return BoxStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progressbar", function() { return Progressbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return Toolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Statusbar", function() { return Statusbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenubarItem", function() { return MenubarItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menubar", function() { return Menubar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panes", function() { return Panes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListView", function() { return ListView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listView", function() { return listView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconViewEntry", function() { return IconViewEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconView", function() { return IconView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconView", function() { return iconView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iframe", function() { return Iframe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return TextField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaField", function() { return TextareaField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectField", function() { return SelectField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleField", function() { return ToggleField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeField", function() { return RangeField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expander", function() { return Expander; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUIServiceProvider", function() { return GUIServiceProvider; });
function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}}var arrayWithoutHoles=_arrayWithoutHoles;function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}var iterableToArray=_iterableToArray;function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var nonIterableSpread=_nonIterableSpread;function _toConsumableArray(e){return arrayWithoutHoles(e)||iterableToArray(e)||nonIterableSpread()}var toConsumableArray=_toConsumableArray;function h(e,t){for(var n=[],o=[],a=arguments.length;2<a--;)n.push(arguments[a]);for(;n.length;){var s=n.pop();if(s&&s.pop)for(a=s.length;a--;)n.push(s[a]);else null!=s&&!0!==s&&!1!==s&&o.push(s)}return"function"==typeof e?e(t||{},o):{nodeName:e,attributes:t||{},children:o,key:t&&t.key}}function app(e,t,n,o){function a(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:k.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:a(e)})}}function s(e){return"function"==typeof e?s(e(I,S)):null==e?"":e}function i(){b=!b;var e=s(n);for(o&&!b&&(w=f(o,w,j,j=e)),L=!1;_.length;)_.pop()()}function r(){b||(b=!0,setTimeout(i))}function l(e,t){var n={};for(var o in e)n[o]=e[o];for(var o in t)n[o]=t[o];return n}function c(e,t,n){var o={};return e.length?(o[e[0]]=1<e.length?c(e.slice(1),t,n[e[0]]):t,l(n,o)):t}function d(e,t){for(var n=0;n<e.length;)t=t[e[n++]];return t}function p(e,t,n){for(var o in n)"function"==typeof n[o]?function(o,a){n[o]=function(o){var s=a(o);return"function"==typeof s&&(s=s(d(e,I),n)),s&&s!==(t=d(e,I))&&!s.then&&r(I=c(e,l(t,s),I)),s}}(o,n[o]):p(e.concat(o),t[o]=l(t[o]),n[o]=l(n[o]));return n}function u(e){return e?e.key:null}function g(e){return e.currentTarget.events[e.type](e)}function h(e,t,n,o,a){if("key"===t);else if("style"!==t)"o"===t[0]&&"n"===t[1]?(t=t.slice(2),e.events?!o&&(o=e.events[t]):e.events={},e.events[t]=n,n?!o&&e.addEventListener(t,g):e.removeEventListener(t,g)):t in e&&"list"!==t&&"type"!==t&&"draggable"!==t&&"spellcheck"!==t&&"translate"!==t&&!a?e[t]=null==n?"":n:null!=n&&!1!==n&&e.setAttribute(t,n),(null==n||!1===n)&&e.removeAttribute(t);else if("string"==typeof n)e.style.cssText=n;else for(var s in"string"==typeof o&&(o=e.style.cssText=""),l(o,n)){var i=null==n||null==n[s]?"":n[s];"-"===s[0]?e.style.setProperty(s,i):e.style[s]=i}}function m(e,t){var n="string"==typeof e||"number"==typeof e?document.createTextNode(e):(t=t||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),o=e.attributes;if(o){o.oncreate&&_.push(function(){o.oncreate(n)});for(var a=0;a<e.children.length;a++)n.appendChild(m(e.children[a]=s(e.children[a]),t));for(var r in o)h(n,r,o[r],null,t)}return n}function v(e,t,n,o){for(var a in l(t,n))n[a]!==("value"==a||"checked"==a?e[a]:t[a])&&h(e,a,n[a],t[a],o);var s=L?n.oncreate:n.onupdate;s&&_.push(function(){s(e,t)})}function y(e,t){var n=t.attributes;if(n){for(var o=0;o<t.children.length;o++)y(e.childNodes[o],t.children[o]);n.ondestroy&&n.ondestroy(e)}return e}function x(e,t,n){function o(){e.removeChild(y(t,n))}var a=n.attributes&&n.attributes.onremove;a?a(t,o):o()}function f(e,t,n,o,a){if(o===n);else if(null==n||n.nodeName!==o.nodeName){var r=m(o,a);e.insertBefore(r,t),null!=n&&x(e,t,n),t=r}else if(null==n.nodeName)t.nodeValue=o;else{v(t,n.attributes,o.attributes,a=a||"svg"===o.nodeName);for(var l={},c={},d=[],p=n.children,g=o.children,h=0;h<p.length;h++){d[h]=t.childNodes[h];var y=u(p[h]);null!=y&&(l[y]=[d[h],p[h]])}for(var h=0,b=0;b<g.length;){var y=u(p[h]),w=u(g[b]=s(g[b]));if(c[y]){h++;continue}if(null!=w&&w===u(p[h+1])){null==y&&x(t,d[h],p[h]),h++;continue}if(null==w||L)null==y&&(f(t,d[h],p[h],g[b],a),b++),h++;else{var j=l[w]||[];y===w?(f(t,j[0],j[1],g[b],a),h++):j[0]?f(t,t.insertBefore(j[0],d[h]),j[1],g[b],a):f(t,d[h],null,g[b],a),c[w]=g[b],b++}}for(;h<p.length;)null==u(p[h])&&x(t,d[h],p[h]),h++;for(var h in l)c[h]||x(t,l[h][0],l[h][1])}return t}var b,k=[].map,w=o&&o.children[0]||null,j=w&&a(w),_=[],L=!0,I=l(e),S=p([],I,l(t));return r(),S}var unitValue=function(e,t){return"number"==typeof e?"".concat(e,"px"):!1===e?t:e},boxPropNames={grow:function(e){return{flexGrow:e}},shrink:function(e){return{flexShrink:e}},basis:function(e){return{flexBasis:unitValue(e,"auto")}},align:function(e){return{alignItems:e}},justify:function(e){return{justifyContent:e}},padding:function(e){return{margin:unitValue(e,"0")}},margin:function(e){return{margin:unitValue(e,"0")}}},Element$1=function(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],n=e.class instanceof Array?e.class:[e.class],o=["osjs-gui"].concat(toConsumableArray(n));e.orientation&&o.push("osjs-gui-"+e.orientation);var a="string"==typeof e.style?{}:Object.assign({},e.style||{}),s=Object.keys(e).reduce(function(t,n){var o=boxPropNames[n]?boxPropNames[n](e[n]):void 0;return Object.assign({},t,o)},a);return h("div",{oncreate:e.oncreate,ondestroy:e.ondestroy,class:o.filter(function(e){return!!e}).join(" "),style:s},t)},Box=function(e,t){return h(Element$1,Object.assign({orientation:"horizontal"},e,{class:["osjs-gui-box",e.class]}),t)},BoxContainer=function(e,t){return h(Element$1,Object.assign({},e,{class:["osjs-gui-box-container",e.class]}),t)},BoxStyled=function(e,t){return h(Element$1,Object.assign({},e,{class:["osjs-gui-box-styled",e.class]}),t)};function createCommonjsModule(e,t){return t={exports:{}},e(t,t.exports),t.exports}var _typeof_1=createCommonjsModule(function(e){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(o){return e.exports="function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?n=function(e){return t(e)}:n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},n(o)}e.exports=n}),Icon=function(e){var t=e&&"object"===_typeof_1(e)?e.src:e,o=e&&"object"===_typeof_1(e)?e.name:void 0;return h("i",{"data-icon":o,class:"osjs-icon",style:{backgroundImage:"string"==typeof e?"url(".concat(t,")"):void 0}})};function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var defineProperty=_defineProperty,filteredProps=function(e,t){var n=Object.keys(e);return n.filter(function(e){return-1===t.indexOf(e)}).reduce(function(t,n){return Object.assign(defineProperty({},n,e[n]),t)},{})},doubleTap=function(){var e,t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:250,n=!1;return function(o,a){return(e=clearTimeout(e),e=setTimeout(function(){return n=!1},t),n)?(o.preventDefault(),a(o)):(n=!0,!1)}},createField=function(e,t,n,o,a){var s=t.oninput||function(){},i=t.onchange||function(){},r=t.onkeydown||function(){},l=a||function(e){return[e.target.value]},c=Object.assign({oninput:function(e){return s.apply(void 0,[e].concat(toConsumableArray(l(e))))},onchange:function(e){return i.apply(void 0,[e].concat(toConsumableArray(l(e))))},onkeydown:function(e){13===e.keyCode&&t.onenter&&t.onenter.apply(t,[e].concat(toConsumableArray(l(e)))),r(e)}},n,filteredProps(t,["choices","label","box","oninput","onchange"]));return h(Element$1,Object.assign({},t.box||{},{class:"osjs-gui-field osjs-gui-"+e}),o(c))},Button=function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return createField("button",e,{},function(n){var o=[];return e.icon&&o.push(h(Icon,e.icon)),"string"==typeof e.label&&o.push(h("span",{class:"osjs-label"},e.label)),h("button",n,[].concat(o,toConsumableArray(t)))})},Progressbar=function(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],n="number"==typeof e.value?Math.max(0,Math.abs(e.value))%100:0,o=h("div",{class:"osjs-gui-progressbar-wrapper"},[h("div",{className:"osjs-gui-progressbar-value",style:{width:n+""+"%"}}),h("div",{className:"osjs-gui-progressbar-label"},[h("span",{},[n+""+"%"])])]);return h(Element$1,Object.assign({},e.box||{},{class:["osjs-gui-progressbar",e.class]}),[o].concat(toConsumableArray(t)))},ul=function e(t){var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:0,a=function(e){var t=[];return"checkbox"===e.type||"boolean"==typeof e.checked?t.push(h("span",{class:"osjs-gui-menu-checkbox "+(e.checked?"active":"")})):e.icon&&t.push(h(Icon,e.icon)),t.push(h("span",{},e.label)),t},s=function(t,n){if("function"==typeof n.element)return n.element();var s="separator"===n.type?"osjs-gui-menu-separator":"osjs-gui-menu-label "+(n.disabled?"osjs__disabled":""),i=[h("span",{class:s},a(n))];return n.items&&i.push(e(t,n.items,o+1)),i};return h("ul",{class:""},n.map(function(e){return h("li",{class:"osjs-gui-menu-entry"},[h("div",{class:"osjs-gui-menu-container","data-has-image":!!e.icon||void 0,"data-has-children":!!e.items||void 0,onmouseover:e.items?t.onshow:void 0,ontouchend:e.items?t.onshow:void 0,onclick:function(n){e.items||(e.onclick&&e.onclick(e,n),t.onclick&&t.onclick(e,n,e))}},s(t,e))])}))},Menu=function(e){return h("div",{id:"osjs-context-menu",className:"osjs-gui osjs-gui-menu",oncreate:e.oncreate,onupdate:e.onupdate,style:{display:!1===e.visible?"none":"block",top:e.position?e.position.top+""+"px":0,left:e.position?e.position.left+""+"px":0}},ul(e,e.menu))},Toolbar=function(e,t){return h(Element$1,Object.assign({orientation:"vertical"},e,{class:["osjs-gui-toolbar",e.class]}),t)},Statusbar=function(e,t){return h(Element$1,Object.assign({},e.box||{},{class:["osjs-gui-statusbar",e.class]}),t)},MenubarItem=function(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],n=e.onclick,o=e.data;return h("div",{onclick:function(e){if("function"==typeof n){var t=e.target.parentNode,a=Array.prototype.indexOf.call(t.children,e.target);n(e,o||{},a)}}},h("span",{},t))},Menubar=function(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return h(Element$1,Object.assign({},e,{class:["osjs-gui-menubar",e.class]}),[].concat(toConsumableArray((e.items||[]).map(function(t){return h(MenubarItem,{data:t.data,onclick:t.onclick||e.onclick},t.label)})),toConsumableArray(t)))};function nestable(e,t,n,o){return t._$r=function(){return{}},function(a,s){return h(o||"x-",{key:a.key,id:a.id,class:a.class,oncreate:function(o){var i=app(e,t,function(e,t){var a=n(e,t);return"function"==typeof a&&(a=a(o._$p,o._$c)),a},o);o._$p=a,o._$c=s,o._$r=i._$r,o._$u=i.uninit,i.init&&i.init(a),a.oncreate&&a.oncreate(o)},onupdate:function(e){e._$p=a,e._$c=s,e._$r(),a.onupdate&&a.onupdate(e)},ondestroy:function(e){e._$u&&e._$u()},onremove:function(e,t){return a.onremove?void a.onremove(e,t):t()}})}}var _onmousedown=function(e,t,n){var o=e.target,a=e.clientX,s=e.clientY,i=o.previousSibling,r=i.offsetWidth,l=i.offsetHeight,c=Array.from(o.parentNode.children).indexOf(i),d=.8*i.parentNode.offsetWidth,p=.8*i.parentNode.offsetHeight;if(!(0>c)){var u=function(e){var o=Math.min;e.preventDefault();var i="vertical"===n?r:l;if("vertical"===n){var u=e.clientX-a;i=o(d,i+u)}else{var g=e.clientY-s;i=o(p,i+g)}t.setSize({index:c,size:i})},g=function e(t){t.preventDefault(),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",e)};e.preventDefault(),document.addEventListener("mousemove",u),document.addEventListener("mouseup",g)}},panes=function(e,t,n,o){var a=Array(Math.ceil(n.length/2)).fill(null).map(function(){return h("div",{class:"osjs-gui-panes-spacer",onmousedown:function(e){return _onmousedown(e,t,o)}})});return n.map(function(t,n){var o=e.sizes[n]?e.sizes[n]+""+"px":void 0;return h("div",{class:"osjs-gui-panes-pane",style:{flex:o?"0 0 ".concat(o):o}},t)}).map(function(e,t){return[e,a[t]]}).reduce(function(e,t){return e.concat(t)}).filter(function(e){return"undefined"!=typeof e})},view=function(e,t){return function(n,o){var a=n.orientation||"vertical";return h(Element$1,{orientation:a,class:"osjs-gui-panes-inner"},panes(e,t,o,a))}},inner=nestable({sizes:[]},{init:function(e){return{sizes:e.sizes||[150]}},setSize:function(e){var t=e.index,n=e.size;return function(e){var o=[].concat(e.sizes);return o[t]=n,{sizes:o}}}},view,"div"),Panes=function(e,t){return h(inner,{class:"osjs-gui-panes"},t)},tapper=doubleTap(),createView=function(e){var t=function(t){return function(n,o){var a=n.columns[t]||{},s=e.selectedIndex===o,i=a.icon?h(Icon,a.icon):null,r=[h("span",{},["object"===_typeof_1(a)?a.label:a])];return i&&r.unshift(i),h("div",{"data-has-icon":!!a.icon||void 0,class:"osjs-gui-list-view-cell"+(s?" osjs__active":""),ontouchstart:function(t){return tapper(t,function(){return e.onactivate({data:n.data,index:o,ev:t})})},ondblclick:function(t){return e.onactivate({data:n.data,index:o,ev:t})},onclick:function(t){return e.onselect({data:n.data,index:o,ev:t})},oncontextmenu:function(t){return e.oncontextmenu({data:n.data,index:o,ev:t})},oncreate:function(t){return e.oncreate({data:n.data,index:o,el:t})}},r)}},n=function(n,o){return h("div",{class:"osjs-gui-list-view-pane",style:o.style||{}},[h("div",{class:"osjs-gui-list-view-header",style:{display:e.hideColumns?"none":void 0}},h("span",{},"object"===_typeof_1(o)?o.label:o)),h("div",{class:"rows","data-zebra":e.zebra+""},e.rows.map(t(n)))])};return h("div",{class:"osjs-gui-list-view-wrapper",oncreate:function(t){return t.scrollTop=e.scrollTop},onupdate:function(t){0>e.selectedIndex&&(t.scrollTop=e.scrollTop)}},e.columns.map(function(e,t){return n(t,e)}))},ListView=function(e){return h(Element$1,Object.assign({class:"osjs-gui-list-view"},e.box||{}),createView(filteredProps(e,["box"])))},listView={component:function(e,t){var n=Object.assign({zebra:!0,columns:[],rows:[],onselect:function(e){var n=e.data,o=e.index,a=e.ev;t.select({data:n,index:o,ev:a}),t.setSelectedIndex(o)},onactivate:function(e){var n=e.data,o=e.index,a=e.ev;t.activate({data:n,index:o,ev:a}),t.setSelectedIndex(-1)},oncontextmenu:function(e){var n=e.data,o=e.index,a=e.ev;t.select({data:n,index:o,ev:a}),t.contextmenu({data:n,index:o,ev:a}),t.setSelectedIndex(o)},oncreate:function(e){t.created(e)}},e);return function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return ListView(Object.assign(n,e))}},state:function(e){return Object.assign({selectedIndex:-1,scrollTop:0},e)},actions:function(e){return Object.assign({select:function(){return function(){return{}}},activate:function(){return function(){return{}}},contextmenu:function(){return function(){return{}}},created:function(){return function(){return{}}},setRows:function(e){return{rows:e}},setColumns:function(e){return{columns:e}},setScrollTop:function(e){return function(){return{scrollTop:e}}},setSelectedIndex:function(e){return function(){return{selectedIndex:e}}}},e||{})}},tapper$1=doubleTap(),IconViewEntry=function(e,t,n){return function(){var o=e.icon||{name:"application-x-executable"},a=n.selectedIndex===t;return h("div",{class:"osjs-gui-icon-view-entry"+(a?" osjs__active":""),ontouchstart:function(o){return tapper$1(o,function(){return n.onactivate({data:e.data,index:t,ev:o})})},ondblclick:function(o){return n.onactivate({data:e.data,index:t,ev:o})},onclick:function(o){return n.onselect({data:e.data,index:t,ev:o})},oncontextmenu:function(o){return n.oncontextmenu({data:e.data,index:t,ev:o})},oncreate:function(o){return n.oncreate({data:e.data,index:t,el:o})}},[h("div",{class:"osjs__container"},[h("div",{class:"osjs__image"},[h(Icon,o)]),h("div",{class:"osjs__label"},[h("span",{},e.label)])])])}},IconView=function(e){var t=h("div",{class:"osjs-gui-icon-view-wrapper",oncreate:function(t){return t.scrollTop=e.scrollTop},onupdate:function(t){0>e.selectedIndex&&(t.scrollTop=e.scrollTop)}},e.entries.map(function(t,n){return h(IconViewEntry(t,n,e))}));return h(Element$1,Object.assign({class:"osjs-gui-icon-view"},e.box||{}),t)},iconView={component:function(e,t){var n=Object.assign({entries:[],onselect:function(e){var n=e.data,o=e.index,a=e.ev;t.select({data:n,index:o,ev:a}),t.setSelectedIndex(o)},onactivate:function(e){var n=e.data,o=e.index,a=e.ev;t.activate({data:n,index:o,ev:a}),t.setSelectedIndex(-1)},oncontextmenu:function(e){var n=e.data,o=e.index,a=e.ev;t.select({data:n,index:o,ev:a}),t.contextmenu({data:n,index:o,ev:a}),t.setSelectedIndex(o)},oncreate:function(e){t.created(e)}},e);return function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return IconView(Object.assign(n,e))}},state:function(e){return Object.assign({selectedIndex:-1,scrollTop:0},e)},actions:function(e){return Object.assign({select:function(){return function(){return{}}},activate:function(){return function(){return{}}},contextmenu:function(){return function(){return{}}},created:function(){return function(){return{}}},setEntries:function(e){return function(){return{entries:e}}},setScrollTop:function(e){return function(){return{scrollTop:e}}},setSelectedIndex:function(e){return function(){return{selectedIndex:e}}}},e||{})}},Image=function(e){return h("div",{class:"osjs-gui osjs-gui-image",style:{width:e.width?e.width+""+"px":void 0,height:e.height?e.height+""+"px":void 0}},h("img",e))},sources=function(e){return e.map(function(e){return h("source",e)})},isTrue=function(e){return"undefined"==typeof e||!0===e},Video=function(e){return h("div",{class:"osjs-gui osjs-gui-video",style:{width:e.width?e.width+""+"px":void 0,height:e.height?e.height+""+"px":void 0}},[h("video",{src:e.src,width:e.width,height:e.height,poster:e.poster,loop:e.loop?"loop":void 0,muted:e.muted?"muted":void 0,controls:isTrue(e.controls)?"controls":void 0,autoplay:isTrue(e.autoplay)?"autoplay":void 0,onloadeddata:e.onload,oncreate:e.oncreate,onupdate:e.onupdate,ondestroy:e.ondestroy},sources(e.sources||[]))])},headers=function(e,t,n){var o=e.labels,a=e.onchange,s=e.oncontextmenu;return(o||[]).map(function(e,o){return h("div",{class:t.selectedIndex===o?"osjs__active":"",oncontextmenu:function(t){(s||function(){})(t,o,e)},onclick:function(t){n.setSelectedIndex(o),(a||function(){})(t,o,e)}},h("span",{},e))})},panes$1=function(e,t){return t.map(function(t,n){return h("div",{class:e.selectedIndex===n?"osjs__active":""},t)})},view$1=nestable({selectedIndex:0},{init:function(e){return{selectedIndex:e.selectedIndex||0}},setSelectedIndex:function(e){return function(){return{selectedIndex:e}}}},function(e,t){return function(n,o){return h("div",{class:"osjs-gui-tabs-wrapper"},[h("div",{class:"osjs-gui-tabs-header"},headers(n,e,t)),h("div",{class:"osjs-gui-tabs-panes"},panes$1(e,o))])}},"div"),Tabs=function(e,t){return h(view$1,Object.assign({class:"osjs-gui osjs-gui-tabs "+(e.class||"")},e),t)},Iframe=function(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return h(Element$1,Object.assign({},e.box||{},{class:["osjs-gui-iframe",e.class]}),[h("iframe",Object.assign({frameborder:0},filteredProps(e,["box"])))].concat(toConsumableArray(t)))},TextField=function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return createField("text-field",e,{autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",type:"text"},function(e){return h("input",e)})},TextareaField=function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return createField("textarea-field",e,{rows:4},function(e){return h("textarea",e,t)})},SelectField=function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],n=function(t){return t instanceof Array?t.map(function(e){return"object"===_typeof_1(e)?e:{value:e,label:e}}):Object.keys(e.choices||{}).map(function(t){return{value:t,label:e.choices[t]}})}(e.choices).map(function(t){var n=t.value,o=t.label;return h("option",{value:n,selected:e.value===n},o)});return createField("select-field",e,{selectedIndex:void 0},function(e){return h("div",{},h("select",e,[].concat(toConsumableArray(n),toConsumableArray(t))))},function(e){return[e.target.value,e.target.textContent]})},ToggleField=function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return createField("toggle-field",e,{type:"checkbox",checked:!1},function(n){return h("label",{},[h("input",n),h("span",{class:"osjs-toggle-input"}),h("span",{class:"osjs-toggle-label"},[e.label||""].concat(toConsumableArray(t)))])},function(t){return["radio"===e.type?JSON.parse(t.target.value):!!t.target.checked]})},RangeField=function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return createField("range-field",e,{type:"range"},function(e){return h("input",e)})},view$2=function(e,t){return function(n,o){return h(Element$1,Object.assign({},n.box||{},{class:["osjs-gui-expander-wrapper"]}),[h("div",{class:"osjs-gui-expander-header",onclick:function(o){return t.ontoggle({ev:o,active:!e.active,ontoggle:n.ontoggle})}},[h("div",{class:"osjs-gui-expander-header-icon","data-active":e.active+""}),h("div",{class:"osjs-gui-expander-header-label"},n.label)]),h("div",{class:"osjs-gui-expander-content",style:{display:!1===e.active?"none":void 0}},o)])}},inner$1=nestable({active:!0},{init:function(e){return{ative:!1!==e.active}},ontoggle:function(e){var t=e.ev,n=e.active,o=e.ontoggle;return(o||function(){})(t,n),{active:n}}},view$2,"div"),Expander=function(e,t){return h(inner$1,Object.assign({},e,{class:"osjs-gui osjs-gui-expander"}),t)},runtime=createCommonjsModule(function(e){!function(t){function n(e,t,n,o){var s=t&&t.prototype instanceof a?t:a,i=Object.create(s.prototype),r=new g(o||[]);return i._invoke=c(e,n,r),i}function o(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function a(){}function s(){}function i(){}function r(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function l(e){function t(n,a,s,i){var r=o(e[n],e,a);if("throw"===r.type)i(r.arg);else{var l=r.arg,c=l.value;return c&&"object"==typeof c&&y.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,s,i)},function(e){t("throw",e,s,i)}):Promise.resolve(c).then(function(e){l.value=e,s(l)},function(e){return t("throw",e,s,i)})}}function n(e,n){function o(){return new Promise(function(o,a){t(e,n,o,a)})}return a=a?a.then(o,o):o()}var a;this._invoke=n}function c(e,t,n){var a="suspendedStart";return function(s,i){if(a==="executing")throw new Error("Generator is already running");if("completed"===a){if("throw"===s)throw i;return m()}for(n.method=s,n.arg=i;;){var r=n.delegate;if(r){var l=d(r,n);if(l){if(l===j)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var c=o(e,t,n);if("normal"===c.type){if(a=n.done?"completed":"suspendedYield",c.arg===j)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a="completed",n.method="throw",n.arg=c.arg)}}}function d(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,d(e,t),"throw"===t.method))return j;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return j}var a=o(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,j;var s=a.arg;if(!s)return t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,j;if(s.done)t[e.resultName]=s.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0);else return s;return t.delegate=null,j}function p(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function u(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function g(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(p,this),this.reset(!0)}function h(e){if(e){var t=e[f];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(y.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:m}}function m(){return{value:void 0,done:!0}}var v=Object.prototype,y=v.hasOwnProperty,x="function"==typeof Symbol?Symbol:{},f=x.iterator||"@@iterator",b=x.asyncIterator||"@@asyncIterator",k=x.toStringTag||"@@toStringTag",w=t.regeneratorRuntime;if(w)return void(e.exports=w);w=t.regeneratorRuntime=e.exports,w.wrap=n;var j={},_={};_[f]=function(){return this};var L=Object.getPrototypeOf,I=L&&L(L(h([])));I&&I!==v&&y.call(I,f)&&(_=I);var S=i.prototype=a.prototype=Object.create(_);s.prototype=S.constructor=i,i.constructor=s,i[k]=s.displayName="GeneratorFunction",w.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===s||"GeneratorFunction"===(t.displayName||t.name))},w.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,i):(e.__proto__=i,!(k in e)&&(e[k]="GeneratorFunction")),e.prototype=Object.create(S),e},w.awrap=function(e){return{__await:e}},r(l.prototype),l.prototype[b]=function(){return this},w.AsyncIterator=l,w.async=function(e,t,o,a){var s=new l(n(e,t,o,a));return w.isGeneratorFunction(t)?s:s.next().then(function(e){return e.done?e.value:s.next()})},r(S),S[k]="Generator",S[f]=function(){return this},S.toString=function(){return"[object Generator]"},w.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var o=t.pop();if(o in e)return n.value=o,n.done=!1,n}return n.done=!0,n}},w.values=h,g.prototype={constructor:g,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(u),!e)for(var t in this)"t"===t.charAt(0)&&y.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,o){return s.type="throw",s.arg=e,n.next=t,o&&(n.method="next",n.arg=void 0),!!o}if(this.done)throw e;for(var n=this,o=this.tryEntries.length-1;0<=o;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return t("end");if(a.tryLoc<=this.prev){var r=y.call(a,"catchLoc"),l=y.call(a,"finallyLoc");if(r&&l){if(this.prev<a.catchLoc)return t(a.catchLoc,!0);if(this.prev<a.finallyLoc)return t(a.finallyLoc)}else if(r){if(this.prev<a.catchLoc)return t(a.catchLoc,!0);}else if(!l)throw new Error("try statement without catch or finally");else if(this.prev<a.finallyLoc)return t(a.finallyLoc)}}},abrupt:function(e,t){for(var n,o=this.tryEntries.length-1;0<=o;--o)if(n=this.tryEntries[o],n.tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=e,s.arg=t,a?(this.method="next",this.next=a.finallyLoc,j):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),j},finish:function(e){for(var t,n=this.tryEntries.length-1;0<=n;--n)if(t=this.tryEntries[n],t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),u(t),j},catch:function(e){for(var t,n=this.tryEntries.length-1;0<=n;--n)if(t=this.tryEntries[n],t.tryLoc===e){var o=t.completion;if("throw"===o.type){var a=o.arg;u(t)}return a}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:h(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),j}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())}),g=function(){return this||"object"==typeof self&&self}()||Function("return this")(),hadRuntime=g.regeneratorRuntime&&0<=Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime"),oldRuntime=hadRuntime&&g.regeneratorRuntime;g.regeneratorRuntime=void 0;var runtimeModule=runtime;if(hadRuntime)g.regeneratorRuntime=oldRuntime;else try{delete g.regeneratorRuntime}catch(t){g.regeneratorRuntime=void 0}var regenerator=runtimeModule;function asyncGeneratorStep(e,t,n,o,a,s,i){try{var r=e[s](i),l=r.value}catch(e){return void n(e)}r.done?t(l):Promise.resolve(l).then(o,a)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise(function(o,a){function s(e){asyncGeneratorStep(r,o,a,s,i,"next",e)}function i(e){asyncGeneratorStep(r,o,a,s,i,"throw",e)}var r=e.apply(t,n);s(void 0)})}}var asyncToGenerator=_asyncToGenerator;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var classCallCheck=_classCallCheck;function _defineProperties(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var createClass=_createClass,clampSubMenu=function(e,t){var n=t.target.querySelector("ul");if(n&&(n.classList.contains("osjs-gui-menu-container")&&(n=n.parentNode.parentNode),n&&n.offsetParent)){n.classList.remove("clamp-right");var o=n.getBoundingClientRect();o.right>e.offsetWidth&&n.classList.add("clamp-right")}},clampMenu=function(e,t,n){var o={},a=n.top+t.offsetHeight,s=n.left+t.offsetWidth,i=e.offsetHeight-n.top,r=e.offsetWidth-n.left,l=s>e.offsetWidth,c=a>e.offsetHeight;return c&&(o.top=e.offsetHeight-t.offsetHeight-i),l&&(o.left=e.offsetWidth-t.offsetWidth-r),c||l?o:null},view$3=function(e){return function(t,n){return h(Menu,{position:t.position,visible:t.visible,menu:t.menu,onclick:e,onshow:n.onshow})}},timeout=function(e){return e(),setTimeout(e,100)},ContextMenu=function(){function e(t){classCallCheck(this,e),this.core=t,this.callback=function(){},this.actions=null}return createClass(e,[{key:"destroy",value:function(){this.callback=null,this.actions=null}},{key:"init",value:function(){var e,t=this;this.actions=app({visible:!1,menu:[],position:{top:0,left:0}},{clamp:function(n){return function(o){if(n=n||document.querySelector("#osjs-context-menu"),clearTimeout(e),n){var a=t.core.$root,s=clampMenu(a,n,o.position);if(s)return{position:s}}return{}}},onshow:function(n){return function(){e=timeout(function(){return clampSubMenu(t.core.$root,n)})}},show:function(e){return function(n,o){var a=e.menu,s=e.position;if(s instanceof Event)s={left:s.clientX,top:s.clientY};else if(s instanceof Element){var i=s.getBoundingClientRect();s={left:i.left,top:i.top+i.height}}return t.callback=function(n,o,a){e.callback&&e.callback(n,o),!1!==a.closeable&&t.actions.hide()},timeout(function(){return o.clamp()}),{visible:!0,menu:a||[],position:s||{top:0,left:0}}}},hide:function(){return function(){return t.callback=null,{visible:!1}}}},view$3(function(){!t.core.destroyed&&t.callback&&t.callback.apply(t,arguments)}),this.core.$root)}},{key:"show",value:function(){var e;return this.actions?(e=this.actions).show.apply(e,arguments):null}},{key:"hide",value:function(){var e;return this.actions?(e=this.actions).hide.apply(e,arguments):null}}]),e}(),validContextMenuTarget=function(e){var t=e.target,n="TEXTAREA"===t.tagName;return n||"INPUT"!==t.tagName||(n=-1!==["text","password","number","email"].indexOf(t.type)),n},GUIServiceProvider=function(){function e(t){classCallCheck(this,e),this.core=t,this.contextmenu=new ContextMenu(t)}return createClass(e,[{key:"destroy",value:function(){var e=document.getElementById("osjs-context-menu");e&&e.remove(),this.contextmenu.destroy()}},{key:"init",value:function(){var e=asyncToGenerator(regenerator.mark(function e(){var t,n=this;return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t={show:function(){var e;return(e=n.contextmenu).show.apply(e,arguments)},hide:function(){var e;return(e=n.contextmenu).hide.apply(e,arguments)}},this.core.instance("osjs/contextmenu",function(){return arguments.length?t.show.apply(t,arguments):t}),this.core.$root.addEventListener("contextmenu",function(e){validContextMenuTarget(e)||(e.stopPropagation(),e.preventDefault())});case 3:case"end":return e.stop();}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"start",value:function(){var e=this;this.core.$root.addEventListener("click",function(t){var n=document.getElementById("osjs-context-menu"),o=n.contains(t.target);!o&&e.contextmenu&&e.contextmenu.hide()},!0),this.contextmenu.init()}}]),e}();
//# sourceMappingURL=esm.js.map


/***/ }),

/***/ "./node_modules/hyperapp/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/hyperapp/src/index.js ***!
  \********************************************/
/*! exports provided: h, app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
function h(name, attributes) {
  var rest = []
  var children = []
  var length = arguments.length

  while (length-- > 2) rest.push(arguments[length])

  while (rest.length) {
    var node = rest.pop()
    if (node && node.pop) {
      for (length = node.length; length--; ) {
        rest.push(node[length])
      }
    } else if (node != null && node !== true && node !== false) {
      children.push(node)
    }
  }

  return typeof name === "function"
    ? name(attributes || {}, children)
    : {
        nodeName: name,
        attributes: attributes || {},
        children: children,
        key: attributes && attributes.key
      }
}

function app(state, actions, view, container) {
  var map = [].map
  var rootElement = (container && container.children[0]) || null
  var oldNode = rootElement && recycleElement(rootElement)
  var lifecycle = []
  var skipRender
  var isRecycling = true
  var globalState = clone(state)
  var wiredActions = wireStateToActions([], globalState, clone(actions))

  scheduleRender()

  return wiredActions

  function recycleElement(element) {
    return {
      nodeName: element.nodeName.toLowerCase(),
      attributes: {},
      children: map.call(element.childNodes, function(element) {
        return element.nodeType === 3 // Node.TEXT_NODE
          ? element.nodeValue
          : recycleElement(element)
      })
    }
  }

  function resolveNode(node) {
    return typeof node === "function"
      ? resolveNode(node(globalState, wiredActions))
      : node != null
        ? node
        : ""
  }

  function render() {
    skipRender = !skipRender

    var node = resolveNode(view)

    if (container && !skipRender) {
      rootElement = patch(container, rootElement, oldNode, (oldNode = node))
    }

    isRecycling = false

    while (lifecycle.length) lifecycle.pop()()
  }

  function scheduleRender() {
    if (!skipRender) {
      skipRender = true
      setTimeout(render)
    }
  }

  function clone(target, source) {
    var out = {}

    for (var i in target) out[i] = target[i]
    for (var i in source) out[i] = source[i]

    return out
  }

  function setPartialState(path, value, source) {
    var target = {}
    if (path.length) {
      target[path[0]] =
        path.length > 1
          ? setPartialState(path.slice(1), value, source[path[0]])
          : value
      return clone(source, target)
    }
    return value
  }

  function getPartialState(path, source) {
    var i = 0
    while (i < path.length) {
      source = source[path[i++]]
    }
    return source
  }

  function wireStateToActions(path, state, actions) {
    for (var key in actions) {
      typeof actions[key] === "function"
        ? (function(key, action) {
            actions[key] = function(data) {
              var result = action(data)

              if (typeof result === "function") {
                result = result(getPartialState(path, globalState), actions)
              }

              if (
                result &&
                result !== (state = getPartialState(path, globalState)) &&
                !result.then // !isPromise
              ) {
                scheduleRender(
                  (globalState = setPartialState(
                    path,
                    clone(state, result),
                    globalState
                  ))
                )
              }

              return result
            }
          })(key, actions[key])
        : wireStateToActions(
            path.concat(key),
            (state[key] = clone(state[key])),
            (actions[key] = clone(actions[key]))
          )
    }

    return actions
  }

  function getKey(node) {
    return node ? node.key : null
  }

  function eventListener(event) {
    return event.currentTarget.events[event.type](event)
  }

  function updateAttribute(element, name, value, oldValue, isSvg) {
    if (name === "key") {
    } else if (name === "style") {
      if (typeof value === "string") {
        element.style.cssText = value
      } else {
        if (typeof oldValue === "string") oldValue = element.style.cssText = ""
        for (var i in clone(oldValue, value)) {
          var style = value == null || value[i] == null ? "" : value[i]
          if (i[0] === "-") {
            element.style.setProperty(i, style)
          } else {
            element.style[i] = style
          }
        }
      }
    } else {
      if (name[0] === "o" && name[1] === "n") {
        name = name.slice(2)

        if (element.events) {
          if (!oldValue) oldValue = element.events[name]
        } else {
          element.events = {}
        }

        element.events[name] = value

        if (value) {
          if (!oldValue) {
            element.addEventListener(name, eventListener)
          }
        } else {
          element.removeEventListener(name, eventListener)
        }
      } else if (
        name in element &&
        name !== "list" &&
        name !== "type" &&
        name !== "draggable" &&
        name !== "spellcheck" &&
        name !== "translate" &&
        !isSvg
      ) {
        element[name] = value == null ? "" : value
      } else if (value != null && value !== false) {
        element.setAttribute(name, value)
      }

      if (value == null || value === false) {
        element.removeAttribute(name)
      }
    }
  }

  function createElement(node, isSvg) {
    var element =
      typeof node === "string" || typeof node === "number"
        ? document.createTextNode(node)
        : (isSvg = isSvg || node.nodeName === "svg")
          ? document.createElementNS(
              "http://www.w3.org/2000/svg",
              node.nodeName
            )
          : document.createElement(node.nodeName)

    var attributes = node.attributes
    if (attributes) {
      if (attributes.oncreate) {
        lifecycle.push(function() {
          attributes.oncreate(element)
        })
      }

      for (var i = 0; i < node.children.length; i++) {
        element.appendChild(
          createElement(
            (node.children[i] = resolveNode(node.children[i])),
            isSvg
          )
        )
      }

      for (var name in attributes) {
        updateAttribute(element, name, attributes[name], null, isSvg)
      }
    }

    return element
  }

  function updateElement(element, oldAttributes, attributes, isSvg) {
    for (var name in clone(oldAttributes, attributes)) {
      if (
        attributes[name] !==
        (name === "value" || name === "checked"
          ? element[name]
          : oldAttributes[name])
      ) {
        updateAttribute(
          element,
          name,
          attributes[name],
          oldAttributes[name],
          isSvg
        )
      }
    }

    var cb = isRecycling ? attributes.oncreate : attributes.onupdate
    if (cb) {
      lifecycle.push(function() {
        cb(element, oldAttributes)
      })
    }
  }

  function removeChildren(element, node) {
    var attributes = node.attributes
    if (attributes) {
      for (var i = 0; i < node.children.length; i++) {
        removeChildren(element.childNodes[i], node.children[i])
      }

      if (attributes.ondestroy) {
        attributes.ondestroy(element)
      }
    }
    return element
  }

  function removeElement(parent, element, node) {
    function done() {
      parent.removeChild(removeChildren(element, node))
    }

    var cb = node.attributes && node.attributes.onremove
    if (cb) {
      cb(element, done)
    } else {
      done()
    }
  }

  function patch(parent, element, oldNode, node, isSvg) {
    if (node === oldNode) {
    } else if (oldNode == null || oldNode.nodeName !== node.nodeName) {
      var newElement = createElement(node, isSvg)
      parent.insertBefore(newElement, element)

      if (oldNode != null) {
        removeElement(parent, element, oldNode)
      }

      element = newElement
    } else if (oldNode.nodeName == null) {
      element.nodeValue = node
    } else {
      updateElement(
        element,
        oldNode.attributes,
        node.attributes,
        (isSvg = isSvg || node.nodeName === "svg")
      )

      var oldKeyed = {}
      var newKeyed = {}
      var oldElements = []
      var oldChildren = oldNode.children
      var children = node.children

      for (var i = 0; i < oldChildren.length; i++) {
        oldElements[i] = element.childNodes[i]

        var oldKey = getKey(oldChildren[i])
        if (oldKey != null) {
          oldKeyed[oldKey] = [oldElements[i], oldChildren[i]]
        }
      }

      var i = 0
      var k = 0

      while (k < children.length) {
        var oldKey = getKey(oldChildren[i])
        var newKey = getKey((children[k] = resolveNode(children[k])))

        if (newKeyed[oldKey]) {
          i++
          continue
        }

        if (newKey != null && newKey === getKey(oldChildren[i + 1])) {
          if (oldKey == null) {
            removeElement(element, oldElements[i], oldChildren[i])
          }
          i++
          continue
        }

        if (newKey == null || isRecycling) {
          if (oldKey == null) {
            patch(element, oldElements[i], oldChildren[i], children[k], isSvg)
            k++
          }
          i++
        } else {
          var keyedNode = oldKeyed[newKey] || []

          if (oldKey === newKey) {
            patch(element, keyedNode[0], keyedNode[1], children[k], isSvg)
            i++
          } else if (keyedNode[0]) {
            patch(
              element,
              element.insertBefore(keyedNode[0], oldElements[i]),
              keyedNode[1],
              children[k],
              isSvg
            )
          } else {
            patch(element, oldElements[i], null, children[k], isSvg)
          }

          newKeyed[newKey] = children[k]
          k++
        }
      }

      while (i < oldChildren.length) {
        if (getKey(oldChildren[i]) == null) {
          removeElement(element, oldElements[i], oldChildren[i])
        }
        i++
      }

      for (var i in oldKeyed) {
        if (!newKeyed[i]) {
          removeElement(element, oldKeyed[i][0], oldKeyed[i][1])
        }
      }
    }
    return element
  }
}


/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/spaceboyross/Projects/bluelight-firstboot-application/index.js */"./index.js");


/***/ }),

/***/ "osjs":
/*!***********************!*\
  !*** external "OSjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = OSjs;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map