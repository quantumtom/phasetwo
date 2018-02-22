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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "39bf14b53603613d541475f3f36e3eb6.otf";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e2a1876e68b3885d03062214bc6016e9.otf";

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_main_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_fonts_Druk_Wide_Bold_otf__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_fonts_Druk_Wide_Bold_otf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_fonts_Druk_Wide_Bold_otf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_fonts_Graphik_Regular_otf__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_fonts_Graphik_Regular_otf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_fonts_Graphik_Regular_otf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__raw_html__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__raw_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__raw_html__);





function component() {
    let element = document.createElement('div');

    element.innerHTML = __WEBPACK_IMPORTED_MODULE_3__raw_html___default.a;

    return element;
}

document.body.appendChild(component());


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(4);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./main.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./main.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(5);
exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@font-face {\n    font-family: DrukWideBold;\n    font-weight: bold;\n    src: url(" + escape(__webpack_require__(0)) + ") format(\"opentype\");\n}\n\n@font-face {\n    font-family: GraphikRegular;\n    src: url(" + escape(__webpack_require__(1)) + ") format(\"opentype\");\n}\n\nbody {\n\tpadding: 0;\n\tmargin: 0;\n\tbackground-color: #000000;\n\tfont-family: GraphikRegular, sans-serif;\n\t/*overflow: hidden;*/\n}\n\nbody.no-scroll {\n\toverflow: hidden;\n}\n\n.hide-simple {\n\tdisplay: none;\n\topacity: 0;\n}\n\np {\n\tcolor: #000000;\n\tpadding: 0;\n\tmargin: 0;\n\tfont-size: 14px;\n}\n\nh1,h2,h3 {\n\tfont-family: DrukWideBold, sans-serif;\n}\n\nh2 {\n\tfont-size: 30px;\n}\n\n@media screen and (min-width: 768px) {\n\th2 {\n\t\tfont-size: 44px;\n\t}\n}\n\nh4 {\n\ttext-transform: uppercase;\n    padding-bottom: 0;\n    margin-bottom: 5px;\n}\n\ntr {\n\tline-height: 1.1em;\n}\n\n#header {\n\tposition: fixed;\n    width: 100%;\n    height: 90px;\n    top: 0;\n    background-color: #000;\n    z-index: 5;\n    border-bottom: 1px solid #fff;\n}\n\n.roxrite-image, .roxrite-image-dark {\n\twidth: 160px;\n\tposition: fixed;\n\tleft: 50%;\n\ttop: 33px;\n\tmargin-left: -80px;\n\tbox-shadow: none;\n}\n\n@media screen and (min-width: 768px) {\n\t.roxrite-image {\n\t\twidth: 300px;\n\t\ttop: 45px;\n\t\tmargin-left: -150px;\n\t}\n}\n\n@media screen and (min-width: 768px) {\n\t#header {\n\t\tposition: absolute;\n\t\tborder: 0;\n\t}\n}\n\n.arrow-up {\n\tposition: fixed;\n\theight: 33px;\n\twidth: 32px;\n\tdisplay: inline-block;\n\ttop: 31px;\n\tright: 5%;\n   \t-webkit-transition: all 0.4s;\n\t-moz-transition: all 0.4s;\n\t-o-transition: all 0.4s;\n\ttransition: all 0.4s;\n}\n\n@media screen and (min-width: 768px) {\n\t.arrow-up {\n\t\theight: 36px;\n\t\twidth: 34px;\n\t\tbottom: 28px;\n\t\ttop: unset;\n\t\tright: 40px;\n\t\tleft: unset;\n\t}\n}\n\n.arrow-up .arrow-up-v {\n\tborder-top: 1px solid #ffffff;\n\tborder-right: 1px solid #ffffff;\n\tdisplay: inline-block;\n\twidth: 50%;\n\theight: 50%;\n\t-webkit-transform: rotate(-45deg);\n\t-moz-transform: rotate(-45deg);\n\t-o-transform: rotate(-45deg);\n\t transform: rotate(-45deg);\n\tposition: absolute;\n\ttop: 4px;\n\tleft: 9px;\n}\n\n.arrow-up .arrow-up-t {\n\twidth: 1px;\n\tdisplay: inline-block;\n\tposition: absolute;\n\tbackground-color: #ffffff;\n\tleft: 17px;\n\ttop: -3px;\n\theight: 82%;\n\ttop: 2px;\n}\n\n/*iframe {\n  pointer-events: none;\n}*/\n\n.gallery-swipper {\n\tposition: absolute;\n    z-index: 4;\n    width: 100%;\n    height: 100%;\n}\n\n.header {\n\tposition: fixed;\n\theight: 80px;\n\twidth: 100%;\n\ttop: 0;\n\t/*background-color: rgba(0,0,0,0.5);*/\n\tz-index: 3;\n}\n\n/* Side filtering menu */\n.filter-items {\n\tposition: fixed;\n\tright: 40px;\n\ttop: 40px;\n\tcolor: #ffffff;\n\tz-index: 4;\n}\n\n#btn-filter, #btn-about, #btn-previous, #btn-next, #overlay-close, #btn-about-mobile {\n\tdisplay: inline-block;\n/*\ttext-decoration: none;*/\n/*\ttext-align: center;*/\n}\n\n#btn-filter:hover, #btn-previous:hover, #btn-next:hover, #overlay-close:hover, #btn-about-mobile:hover, .arrow-up:hover {\n\t-webkit-transform: scale(1.1);\n\t-moz-transform: scale(1.1);\n\t-o-transform: scale(1.1);\n\ttransform: scale(1.1);\n}\n\n\n/*#btn-filter {\n\tdisplay: inline;\n\tcolor: #ffffff;\n}*/\n\n\n#btn-previous, #btn-next, #overlay-close {\n    color: inherit;\n}\n\n#btn-previous span, #btn-previous-mobile span  {\n\tborder: solid black;\n\tborder-width: 0 1px 1px 0;\n\tdisplay: inline-block;\n\tpadding: 8px;\n\t-webkit-transform: rotate(135deg);\n\t-moz-transform: rotate(135deg);\n\t-o-transform: rotate(135deg);\n\ttransform: rotate(135deg);\n}\n\n#btn-next span, #btn-next-mobile span  {\n\tborder: solid black;\n\tborder-width: 0 1px 1px 0;\n\tdisplay: inline-block;\n\tpadding: 8px;\n\t-webkit-transform: rotate(-45deg);\n\t-moz-transform: rotate(-45deg);\n\t-o-transform: rotate(-45deg);\n\ttransform: rotate(-45deg);\n}\n\n#btn-previous-mobile span, #btn-next-mobile span  {\n\tpadding: 7px;\n\tborder-width: 0 1px 1px 0;\n}\n\n/* About close button START */\n.btn-about-close, #btn-about-mobile, .btn-overlay-close-desktop, .btn-overlay-close, .btn-overlay-close-mobile  {\n\twidth: 35px;\n\theight: 27px;\n\tposition: fixed;\n\tleft: 40px;\n\ttop: 35px;\n\tcursor: pointer;\n\tz-index: 5;\n}\n\n.btn-about-close {\n\topacity: 0;\n\t-webkit-transition: opacity 0.5s;\n\t-moz-transition: opacity 0.5s;\n\t-o-transition: opacity 0.5s;\n\ttransition: opacity 0.5s;\n\ttransition-delay: 0.2s;\n\t-webkit-transition-delay: 0.2s;\n\t-moz-transition-delay: 0.2s;\n\t-o-transition-delay: 0.2s;\n}\n\n#info-circle {\n    width: 31px;\n    height: 31px;\n    -moz-border-radius: 50px;\n    -webkit-border-radius: 50px;\n    border-radius: 50px;\n    border: 1px solid white;\n    display: inline-block;\n    color: white;\n    font-weight: bold;\n    text-align: center;\n    /*padding-top: 9px;*/\n}\n\n#info-circle:before {\n\tcontent: \" \";\n\twidth: 1.5px;\n\theight: 1.5px;\n\tbackground-color: white;\n\tdisplay: inline-block;\n\tposition: absolute;\n\ttop: 8px;\n\tleft: 16px;\n}\n\n#info-circle:after {\n\tcontent: \" \";\n\twidth: 1.5px;\n\theight: 11px;\n\tbackground-color: white;\n\tdisplay: inline-block;\n\tposition: absolute;\n\ttop: 13px;\n\tleft: 16px;\n}\n\n@media screen and (min-width: 768px) {\n\t#info-circle {\n\t\twidth: 31px;\n\t\theight: 31px;\n\t}\n}\n\n#info-circle span{\n\theight: 0 !important;\n\tposition: absolute !important;\n\ttop: 7px !important;\n    font-family: sans-serif;\n}\n\n@media screen and (min-width: 768px) {\n\t#info-circle span{\n\t\ttop: 7px !important;\n\t}\n}\n\n@media screen and (min-width: 768px) {\n\t.btn-about-close, #btn-about-mobile, .btn-overlay-close-desktop, .btn-overlay-close, .btn-overlay-close-mobile {\n\t\tleft: 36px;\n\t\ttop: 53px;\n\t}\n}\n\n.btn-overlay-close-mobile {\n\tleft: 5%;\n}\n\n#btn-about {\n\tcolor: #fff;\n\tleft: 5%;\n\ttop: 31px;\n/*\twidth: 33px;\n\theight: 33px;*/\n\tposition: fixed;\n\tcursor: pointer;\n\tz-index: 5;\n\tfont-size: 14px;\n\ttext-transform: uppercase;\n\t/*background: url('../images/about-icon.png');*/\n\tbackground-size: 100%;\n\ttext-transform: none;\n\t-webkit-transition: all 0.3s;\n\t-moz-transition: all 0.3s;\n\t-o-transition: all 0.3s;\n\ttransition: all 0.3s;\n}\n\n@media screen and (min-width: 768px) {\n\t#btn-about {\n\t\ttop: 51px;\n\t\tleft: 40px;\n\t\tfont-size: 14px;\n/*\t\twidth: 32px;\n\t\theight: 32px;*/\n\t}\n}\n\n.btn-about-close:hover, #btn-about-mobile:hover, .btn-overlay-close-desktop:hover, .btn-overlay-close:hover, .btn-overlay-close-mobile:hover, #btn-about:hover {\n\t-webkit-transform: scale(1.1);\n\t-moz-transform: scale(1.1);\n\t-o-transform: scale(1.1);\n\ttransform: scale(1.1);\n}\n\n#btn-about:hover {\n\ttext-decoration: underline;\n}\n\n.btn-about-close, .btn-overlay-close {\n\tposition: relative;\n\tz-index: 10;\n\tdisplay: inline-block;\n\ttop: 6px;\n\tleft: 0px;\n}\n\n@media screen and (min-width: 768px) {\n\t.btn-about-close, .btn-overlay-close{\n\t\ttop: 23px;\n\t\tleft: -4px;\n\t}\n}\n\n.btn-overlay-close-desktop {\n\tposition: absolute;\n    z-index: 10;\n    display: none;\n}\n\n\n@media screen and (min-width: 768px) {\n\t.btn-overlay-close-desktop {\n\t\t/*position: fixed;*/\n\t\tdisplay: inline-block;\n\t}\n}\n\n.btn-overlay-close-mobile {\n\tposition: relative;\n\tz-index: 10;\n\tdisplay: inline-block;\n}\n\n@media screen and (min-width: 768px) {\n\t.btn-overlay-close-mobile {\n\t\t/*position: fixed;*/\n\t\tdisplay: none;\n\t}\n}\n\n#btn-about span, .btn-about-close span, #btn-about-mobile span, .btn-overlay-close-desktop span, .btn-overlay-close span, .btn-overlay-close-mobile span {\n  display: block;\n  position: absolute;\n  height: 1px;\n  width: 100%;\n  background-color: #ffffff;\n  opacity: 1;\n/*  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: .25s ease-in-out;\n  -moz-transition: .25s ease-in-out;\n  -o-transition: .25s ease-in-out;\n  transition: .25s ease-in-out;*/\n}\n\n#btn-about-mobile span {\n\tbackground: inherit;\n}\n\n.btn-overlay-close-desktop span, .btn-overlay-close-mobile span {\n\tbackground-color: #000000;\n}\n\n.btn-about-close span {\n\tbackground: #000000;\n}\n\n#btn-about {\n\tdisplay: inline;\n}\n\n#btn-about.overlay-open span{\n\tbackground: #000000;\n}\n\n.btn-overlay-close-mobile span:nth-child(even), .btn-overlay-close-desktop span:nth-child(even), #btn-about span:nth-child(even), .btn-about-close span:nth-child(even), #btn-about-mobile span:nth-child(even) {\n  border-radius: 0 9px 9px 0;\n}\n\n.btn-overlay-close-mobile span:nth-child(even), .btn-overlay-close-desktop span:nth-child(even), .btn-about-close span:nth-child(even), .btn-overlay-close span:nth-child(even) {\n\t-webkit-transform: rotate(45deg);\n\t-moz-transform: rotate(45deg);\n\t-o-transform: rotate(45deg);\n\ttransform: rotate(45deg);\n\ttop: 13px;\n}\n\n.btn-overlay-close-mobile span:nth-child(odd), .btn-overlay-close-desktop span:nth-child(odd), #btn-about span:nth-child(odd), .btn-about-close span:nth-child(odd), #btn-about-mobile span:nth-child(odd), .btn-overlay-close span:nth-child(odd) {\n  left: 0px;\n  border-radius: 9px 0 0 9px;\n}\n\n.btn-overlay-close-mobile span:nth-child(odd), .btn-overlay-close-desktop span:nth-child(odd), .btn-about-close span:nth-child(odd), .btn-overlay-close span:nth-child(odd) {\n\t-webkit-transform: rotate(-45deg);\n\t-moz-transform: rotate(-45deg);\n\t-o-transform: rotate(-45deg);\n\ttransform: rotate(-45deg);\n\ttop: 13px;\n}\n\n#btn-about span:nth-child(1), #btn-about-mobile span:nth-child(1){\n  top: 0px;\n}\n\n#btn-about span:nth-child(2), #btn-about-mobile span:nth-child(2) {\n  top: 10px;\n}\n\n/*.btn-about-close span:nth-child(1), .btn-about-close span:nth-child(2) {\n\ttop: 2px;\n}*/\n\n#btn-about.open span{\n\tbackground-color: #000000;\n}\n\n/*#btn-about.open span:nth-child(1),#btn-about.open span:nth-child(4) {\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n#btn-about.open span:nth-child(2),#btn-about.open span:nth-child(3) {\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n\n#btn-about.open span:nth-child(1) {\n  left: 0px;\n  top: 2px;\n  background-color: #000;\n}\n\n#btn-about.open span:nth-child(2) {\n  left: calc(50% - 2px);\n  top: 2px;\n  background-color: #000;\n}\n\n#btn-about.open span:nth-child(3) {\n  top: 10px;\n  background-color: #000;\n}\n\n#btn-about.open span:nth-child(4) {\n  left: calc(50% - 2px);\n  top: 10px;\n  background-color: #000;\n}*/\n\n/* About close button END */\n\n/*#btn-about {\n\tposition: fixed;\n\tleft: 20px;\n\ttop: 20px;\n    width: 30px;\n    height: 30px;\n}\n\n#btn-about span {\n\tbackground-color: #fff;\n    width: 100%;\n    height: 5px;\n    display: block;\n    margin-bottom: 5px;\n    border-radius: 5px;\n}\n\n#btn-about span:nth-child(1) {\n\tmargin-bottom: 5px;\n}*/\n\n#btn-filter:hover {\n\tbackground-color: #919191;\n}\n\n.filter-fields {\n\t/*position: fixed;*/\n\tlist-style: none;\n    padding: 0;\n    margin: 0;\n    height: 0;\n    overflow: hidden;\n \t-webkit-transition: all 200ms ease-in-out;\n\t-moz-transition: all 200ms ease-in-out;\n\t-o-transition: all 200ms ease-in-out;\n\ttransition: all 200ms ease-in-out;\n}\n\n.filter-visible {\n\theight: 62px;\n}\n\n.filter-fields ul li {\n\tdisplay: inline-block;\n\tposition: relative;\n}\n\n.filter-fields label{\n\tcolor: #fff;\n\twidth: 80px;\n\tdisplay: block;\n\tpadding: none;\n\ttext-align: center;\n\tcursor: pointer;\n\tfont-family: 'Acme', sans-serif;\n}\n\n.filter-fields input{\n\tdisplay: none;\n\tposition: absolute;\n}\n\n.filter-fields input[type=\"radio\"]:checked + label{\n  background: #919191;\n  color: #ffffff;\n}\n\n.grid {\n\tmargin: 0 auto;\n\toverflow: hidden;\n\tmargin-top: 130px;\n\t/*max-width: 1200px;*/\n\tmin-width: 250px;\n}\n\n@media screen and (min-width: 768px) {\n\t.grid {\n\t\twidth: 90%;\n\t\tmargin-top: 100px;\n\t}\n}\n\n.grid-hide {\n\topacity: 0;\n}\n\n.grid-current-item {\n\topacity: 1;\n}\n\n.grid-width-4 {\n\t/*width: 1000px;*/\n\twidth: 96%;\n\tmargin-left: 4%;\n}\n\n.grid-width-3 {\n\t/*width: 1000px;*/\n\twidth: 96%;\n\tmargin-left: 4%;\n}\n\n.grid-width-2 {\n\t/*width: 900px;*/\n\twidth: 96%;\n\tmargin-left: 4%;\n}\n\n.grid-width-1 {\n\t/*width: 800px;*/\n\twidth: 80%;\n\t/*margin-left: 4%;*/\n}\n\n.grid-width-0 {\n\t/*width: 600px;*/\n\twidth: 60%;\n\t/*margin-left: 4%;*/\n}\n\n@media screen and (min-width: 768px) {\n\t.grid-width-4, .grid-width-3, .grid-width-2, .grid-width-1, .grid-width-0  {\n\t\tmargin: 0 auto;\n\t}\n}\n\n.grid div {\n\tcursor: pointer;\n}\n\n.grid-item {\n\tmargin-bottom: 30%;\n\tposition: relative;\n \t-webkit-transition: all 200ms ease-in-out;\n\t-moz-transition: all 200ms ease-in-out;\n\t-o-transition: all 200ms ease-in-out;\n\ttransition: all 200ms ease-in-out;\n}\n\n.artwork-number {\n\tposition: absolute;\n    display: block;\n    bottom: 0;\n    z-index: 1;\n    color: white;\n    /* right: 0; */\n    /* background-color: rgba(255,255,255,0.2); */\n    /*padding-top: 4px;*/\n    /* text-align: center; */\n    display: inline-block;\n    opacity: 0;\n    /*left: 50%;*/ /* small square */\n    /*top: 50%;*/ /* small square */\n    /*width: 42%;*/ /* small square */\n    /*height: 20%;*/ /* small square */\n    top: -1px;\n    height: 100%;\n    /*width: 100%;*/\n    width: 0;\n\tfont-size: 30px;\n\tletter-spacing: 3px;\n\t/*margin-left: -21%;*/ /* small square */\n    /*margin-top: -10%;*/ /* small square */\n    -webkit-transition: all 200ms;\n    -moz-transition: all 200ms;\n    -o-transition: all 200ms;\n    transition: all 200ms;\n    text-align: center;\n    /*border-radius: 20%;*/ /* small square */\n/*\t-webkit-transform: translateX(100%);\n\t-moz-transform: translateX(100%);\n\t-o-transform: translateX(100%);\n    transform: translateX(100%);*/\n    font-family: DrukWideBold, sans-serif;\n}\n\n@media screen and (min-width: 768px) {\n\t.artwork-number {\n\t\tfont-size: 2.5vw;\n    \theight: 99%;\n    \t/*width: 100%;*/\n    \twidth: 0;\n\t}\n}\n.artwork-number-span {\n\tposition: absolute;\n    top: 50%;\n    -webkit-transition: all 400ms;\n    -moz-transition: all 400ms;\n    -o-transition: all 400ms;\n    transition: all 400ms;\n\t-webkit-transform: translate(-50%, -50%);\n\t-moz-transform: translate(-50%, -50%);\n\t-o-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n \ttransition-delay: 0.2s;\n\t-webkit-transition-delay: 0.2s;\n\t-moz-transition-delay: 0.2s;\n\t-o-transition-delay: 0.2s;\n\topacity: 0;\n\t/*text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;*/\n}\n\n.artwork-number-hover {\n/*\t-webkit-transform: translateX(0);\n\t-moz-transform: translateX(0);\n\t-o-transform: translateX(0);\n    transform: translateX(0);*/\n    opacity: 1;\n    width: 100%;\n}\n\n.artwork-number-hover .artwork-number-span {\n\topacity: 1;\n\t-webkit-transform: translate(-50%, -50%);\n\t-moz-transform: translate(-50%, -50%);\n\t-o-transform: translate(-50%, -50%);\n\t transform: translate(-50%, -50%);\n}\n\n#artwork-description {\n\tline-height: 1.5em;\n\tfont-size: 14px;\n}\n\n#artwork-description p{\n\tmargin-bottom: 15px;\n\tfont-size: 14px;\n}\n\n.artwork-number-visible {\n\topacity: 1;\n/*\t-webkit-transform: scale(1) translate(0%);\n    -moz-transform: scale(1) translate(0%);\n    -o-transform: scale(1) translate(0%);\n     transform: scale(1) translate(0%); */\n}\n\n.grid-item-4 {\n\tmin-height: 50px;\n\t/*width: 19%;*/\n\twidth: 18%;\n\tmargin: 0.25%;\n\toverflow: hidden;\n}\n\n.grid-item-3 {\n\tmin-height: 100px;\n\t/*width: 24%;*/\n\twidth: 18.9%;\n\tmargin: 3%;\n/*\tmargin: 2%;*/\n\t/*overflow: hidden;*/\n\tfloat: left;\n \t-webkit-transition: all 200ms;\n\t-moz-transition: all 200ms;\n\t-o-transition: all 200ms;\n\ttransition: all 200ms;\n}\n\n.grid-item-2 {\n\tmin-height: 100px;\n\t/*width: 32.33%;*/\n\twidth: 29%;\n\tmargin: 1%;\n\toverflow: hidden;\n}\n\n.grid-item-1 {\n\tmin-height: 180px;\n\t/*width: 49%;*/\n\twidth: 47%;\n\tmargin: 1%;\n\toverflow: hidden;\n}\n\n.grid-item-0 {\n\t/*width: 99%;*/\n\twidth: 89%;\n/*\tmargin: 1%;*/\n\t/*overflow: hidden;*/\n\tmargin: 0 auto;\n\tmargin-bottom: 40px;\n\tposition: relative;\n}\n\n/*.grid-container-0 {\n\tmargin-left: 20%;\n\tmargin-right: 20%;\n}\n\n.grid-container-1 {\n\tmargin-left: 20%;\n\tmargin-right: 20%;\n}\n\n.grid-container-2 {\n\tmargin-left: 20%;\n\tmargin-right: 20%;\n}\n\n.grid-container-3 {\n\tmargin-left: 20%;\n\tmargin-right: 20%;\n}\n\n.grid-container-4 {\n\tmargin-left: 20%;\n\tmargin-right: 20%;\n}*/\n\n.grid-sizer-container {\n\tposition: fixed;\n    right: 20px;\n    bottom: 20px;\n    width: 40px;\n}\n\n#btn_plus, #btn_minus {\n\twidth: 40px;\n    height: 40px;\n    float: left;\n    font-size: 30px;\n    text-align: center;\n    color: white;\n    text-decoration: none;\n    background-color: #000;\n    border-radius: 50%;\n}\n\n#btn_plus:hover, #btn_minus:hover {\n\tcolor: #000;\n\tbackground-color: #fff;\n}\n\n#btn_plus {\n\tmargin-bottom: 10px;\n}\n\nimg {\n\twidth: 100%;\n    height: auto;\n    box-shadow: 8px 9px 40px 0px rgba(0, 0, 0, .13);\n\t/*visibility: hidden;*/\n\t/*opacity: 0;*/\n\t/*transition: all 0.2s;*/\n}\n\n/* Overlay Start */\n.overlay, .overlay-about {\n\tbackground-color: #ffffff;\n\theight: 0;\n\twidth: 100%;\n\t-webkit-transition: all 500ms cubic-bezier(0.77,0.1,0.61,0.61);\n\t-moz-transition: all 500ms cubic-bezier(0.77,0.1,0.61,0.61);\n\t-o-transition: all 500ms cubic-bezier(0.77,0.1,0.61,0.61);\n\ttransition: all 500ms cubic-bezier(0.77,0.1,0.61,0.61);\n\toverflow: hidden;\n\tposition: fixed;\n\topacity: 1;\n    z-index: 1000;\n    top: 0;\n}\n\n.overlay {\n    transform: translate(-100%);\n    -webkit-transform: translate(-100%);\n    -moz-transform: translate(-100%);\n    -o-transform: translate(-100%);\n    height: 100%;\n}\n\n.overlay, .overlay-about {\n\toverflow-y: scroll;\n\t-webkit-overflow-scrolling: touch;\n}\n\n@media screen and (min-width: 768px) {\n\t.overlay {\n\t\toverflow-y: visible;\n\t}\n}\n\n.overlay-about {\n\tbackground-color: #ffffff;\n\tz-index: 7;\n\ttop: 0;\n\tleft: 0;\n\tcolor: #000000;\n}\n\n.overlay-about-left {\n\tfloat: none;\n\twidth: 100%;\n\tpadding-bottom: 0px;\n\tpadding-right: 0px;\n}\n\n@media screen and (min-width: 768px) {\n\t.overlay-about-left {\n\t\tfloat: left;\n\t\twidth: 60%;\n\t\t/*overflow: hidden;*/\n\t\tpadding-bottom: 100px;\n\t\tpadding-right: 10%;\n\t}\n}\n\n.about-roxrite {\n\tpadding-top: 50px;\n}\n\n@media screen and (min-width: 768px) {\n\t.about-roxrite {\n\t\tfont-size: 66px;\n\t}\n}\n\n\n.about-sub, .about-contributors {\n\ttext-transform: uppercase;\n    color: #9d9a9a;\n    font-size: 14px;\n    margin-top: 40px;\n    position: relative;\n}\n\n.about-contributors{\n\tmargin-top: 30px;\n\tmargin-bottom: 15px;\n}\n\n@media screen and (min-width: 768px) {\n\t.about-contributors{\n\t\tmargin-top: 254px;\n\t\tmargin-bottom: 33px;\n\t}\n}\n\n.about-sub:after {\n\tcontent: \" \";\n\theight: 1px;\n\tbackground-color: #9d9a9a;\n\twidth: 80px;\n\tposition: absolute;\n\ttop: 8px;\n\tmargin-left: 10px;\n}\n\n.scroll-container {\n\tmargin: 30px 5%;\n\theight: 100%;\n\toverflow: hidden;\n}\n\n@media screen and (min-width: 768px) {\n\t.scroll-container {\n\t\tmargin: 30px 40px;\n\t\twidth: 94%;\n\t}\n}\n\n.overlay-about-left p {\n\tmargin-bottom: 30px;\n    line-height: 1.5em;\n}\n\n.about-animate-initial {\n\topacity: 0;\n   \t-webkit-transition: all 0.4s;\n\t-moz-transition: all 0.4s;\n\t-o-transition: all 0.4s;\n\ttransition: all 0.4s;\n\t-webkit-transform: translate(0, -80px);\n\t-moz-transform: translate(0, -80px);\n\t-o-transform: translate(0, -80px);\n\ttransform: translate(0, -80px);\n}\n\n.about-animation-0,\n.about-animation-1,\n.about-animation-2,\n.about-animation-3,\n.about-animation-4,\n.about-animation-5,\n.about-animation-6,\n.about-animation-7 {\n\t-webkit-transform: translate(0);\n\t-moz-transform: translate(0);\n\t-o-transform: translate(0);\n\ttransform: translate(0);\n\topacity: 1;\n}\n\n.about-animation-0 {\n\ttransition-delay: 0.1s;\n\t-webkit-transition-delay: 0.1s;\n\t-moz-transition-delay: 0.1s;\n\t-o-transition-delay: 0.1s;\n}\n\n.about-animation-1 {\n\ttransition-delay: 0.2s;\n\t-webkit-transition-delay: 0.2s;\n\t-moz-transition-delay: 0.2s;\n\t-o-transition-delay: 0.2s;\n}\n\n.about-animation-2, .about-animation-7 {\n\ttransition-delay: 0.3s;\n\t-webkit-transition-delay: 0.3s;\n\t-moz-transition-delay: 0.3s;\n\t-o-transition-delay: 0.3s;\n}\n\n.about-animation-3 {\n\ttransition-delay: 0.4s;\n\t-webkit-transition-delay: 0.4s;\n\t-moz-transition-delay: 0.4s;\n\t-o-transition-delay: 0.4s;\n}\n\n.about-animation-4 {\n\ttransition-delay: 0.5s;\n\t-webkit-transition-delay: 0.5s;\n\t-moz-transition-delay: 0.5s;\n\t-o-transition-delay: 0.5s;\n}\n\n.about-animation-5 {\n\ttransition-delay: 0.6s;\n\t-webkit-transition-delay: 0.6s;\n\t-moz-transition-delay: 0.6s;\n\t-o-transition-delay: 0.6s;\n}\n\n.about-animation-6 {\n\ttransition-delay: 0.7s;\n\t-webkit-transition-delay: 0.7s;\n\t-moz-transition-delay: 0.7s;\n\t-o-transition-delay: 0.7s;\n}\n\n.overlay-about-right {\n\tfloat: left;\n\twidth: 100%;\n}\n\n.overlay-about-right td {\n\twidth: 200px;\n    font-size: 13px;\n}\n\n.overlay-about-right td a {\n    text-decoration: none;\n    color: #000;\n}\n\n@media screen and (min-width: 768px) {\n\t.overlay-about-right {\n\t\twidth: 30%;\n\t}\n}\n\n.overlay-inside-top {\n\twidth: 100%;\n\tbackground-color: white;\n\tposition: absolute;\n\t/*overflow-y: scroll;*/\n}\n\n@media screen and (min-width: 768px) {\n\t.overlay-inside-top {\n\t\theight: 100%; /* white-space bug */\n\t\toverflow: hidden;\n\t}\n}\n\n.wrapper {\n\twidth: 90%;\n\theight: 100%;\n\t/*overflow-y: scroll;*/\n\tmargin: 0 auto;\n\tmargin-top: -30px;\n}\n\n.opacity-zero {\n\t/*opacity: 0;*/\n\toverflow: hidden;\n\t/*height: 0*/\n}\n\n@media screen and (min-width: 768px) {\n\t.wrapper {\n\t\tmargin-right: 10%;\n\t\tmargin-top: 0;\n\t\twidth: 100%;\n\t\toverflow: hidden;\n\t}\n}\n\n.after-bar {\n\tbackground-color: #000000;\n    position: relative;\n\twidth: 100%;\n\theight: 115px;\n    right: 0;\n    top: 0;\n\t-webkit-transition: 0.2s all cubic-bezier(0.6,0.11,0.42,0.88);\n\t-moz-transition: 0.2s all cubic-bezier(0.6,0.11,0.42,0.88);\n\t-o-transition: 0.2s all cubic-bezier(0.6,0.11,0.42,0.88);\n\ttransition: 0.2s all cubic-bezier(0.6,0.11,0.42,0.88);\n\tscroll-behavior: unset;\n\ttransition-delay: 0.4s;\n\t-webkit-transition-delay: 0.4s;\n\t-moz-transition-delay: 0.4s;\n\t-o-transition-delay: 0.4s;\n}\n\n.after-bar-full {\n    height: 1000px;\n    z-index: 100000000;\n    position: absolute;\n    overflow: hidden;\n\n}\n\n@media screen and (min-width: 768px) {\n\t.after-bar {\n\t    width: 30%;\n    \theight: 100%;\n    \tposition: absolute;\n    \tz-index: 2;\n\t\t-webkit-transition: 0.4s all cubic-bezier(0.6,0.11,0.42,0.88);\n\t\t-moz-transition: 0.4s all cubic-bezier(0.6,0.11,0.42,0.88);\n\t\t-o-transition: 0.4s all cubic-bezier(0.6,0.11,0.42,0.88);\n\t\ttransition: 0.4s all cubic-bezier(0.6,0.11,0.42,0.88);\n\t\ttransition-delay: 0.4s;\n\t\t-webkit-transition-delay: 0.4s;\n\t\t-moz-transition-delay: 0.4s;\n\t\t-o-transition-delay: 0.4s;\n\t}\n\n\t.after-bar-full {\n\t\twidth: 100%;\n\t\tz-index: 100000000;\n\t}\n}\n\n.overlay-inside-content, .overlay-inside-about-content {\n\tdisplay: block;\n\theight: 100%;\n\tposition: relative;\n\ttop: 0px;\n\twidth: 100%;\n}\n\n@media screen and (min-width: 768px) {\n\t.overlay-inside-content {\n\t\ttop: 0;\n\t\toverflow-y: scroll;\n\t\tmargin-right: 10%;\n\t\tpadding-right: 17px;\n\t\tpadding-left: 10px;\n\t}\n}\n\n.overlay-inside-about-content {\n\theight: 90%;\n}\n\n@media screen and ( min-width: 768px) {\n\t.overlay-inside-content {\n\t\toverflow-y: scroll;\n    \toverflow-x: hidden;\n\t\tpadding-right: 17px;\n\t}\n\n\t.overlay-inside-about-content {\n\t\theight: 100%;\n\t}\n}\n\n.overlay-inside-about-content {\n    width: 100%;\n    overflow-y: scroll;\n    padding-right: 20px;\n    -webkit-overflow-scrolling: touch;\n}\n\n.overlay-media {\n    position: relative;\n\tfloat: none;\n\twidth: 100%;\n\tmargin: 0 auto;\n\tz-index: 1000000;\n\toverflow: visible;\n\tmin-height: 320px;\n\t-webkit-transition: 0.15s all ease-in-out;\n\t-moz-transition: 0.15s all ease-in-out;\n\t-o-transition: 0.15s all ease-in-out;\n\ttransition: 0.15s all ease-in-out;\n/*\ttransition-delay: 0.3s;\n\t-webkit-transition-delay: 0.3s;\n\t-moz-transition-delay: 0.3s;\n\t-o-transition-delay: 0.3s;*/\n\topacity: 1;\n}\n\n@media screen and ( min-width: 768px ) {\n\t.overlay-media {\n\t\t-webkit-transition: 0.3s all ease-in-out;\n\t\t-moz-transition: 0.3s all ease-in-out;\n\t\t-o-transition: 0.3s all ease-in-out;\n\t\ttransition: 0.3s all ease-in-out;\n\t}\n}\n\n.overlay-media-hidden {\n/*\t-webkit-transform: translate(1000px);\n\t-moz-transform: translate(1000px);\n\t-o-transform: translate(1000px);\n\ttransform: translate(1000px); */\n\topacity: 0;\n}\n\n.opacity-null {\n\topacity: 0;\n}\n\n@media screen and ( min-width: 768px) {\n\t.overlay-media {\n\t\t/*width: 40%;*/\n\t\twidth: 45%;\n\t\t/*height: auto;*/\n\t\tfloat: right;\n\t\theight: 100%; /* vertical alignment */\n\t\tmin-height: 489px;\n\t\tmargin-right: 4%;\n\t}\n}\n\n.overlay-info {\n\tmargin-top: 33px;\n\t/*margin-bottom: 40px;*/\n\tposition: relative;\n\twidth: 100%;\n\tdisplay: inline-block;\n\theight: 80%; /* white-space bug */\n\tfloat: left;\n\toverflow: visible;\n}\n\n@media screen and ( min-width: 768px) {\n\t.overlay-info {\n\t\twidth: 50%;\n\t}\n}\n\n#image-holder {\n\tmargin-top: 0px;\n\tposition: relative;\n\tright: 0;\n\t/*width: 40%;*/\n\t/*margin-bottom: 40px;*/\n\tz-index: 5;\n/*\tpadding-right: 20px;*/\n/*\tfloat: right;*/\n}\n\n@media screen and ( min-width: 768px) {\n\t#image-holder {\n\t\tright: 15px;\n\t\t/*margin-top: 5%;*/\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\n\t\t-webkit-transform: translateY(-50%);\n\t\t-moz-transform: translateY(-50%);\n\t\t-o-transform: translateY(-50%);\n\t}\n}\n\n.overlay-inside-top-padder {\n\tpadding-top: 115px;\n}\n\n@media screen and ( min-width: 768px) {\n\t.overlay-inside-top-padder {\n\t\tpadding-top: 0;\n\t}\n}\n\n.overlay-inside-top img {\n\theight: auto;\n\t/*width: 100%;*/\n\tposition: relative;\n\tz-index: 2;\n\ttop: 0;\n\tleft: 0;\n/*\t-webkit-transition: 0.5s all ease-in;\n\t-moz-transition: 0.5s all ease-in;\n\t-o-transition: 0.5s all ease-in;\n\ttransition: 0.5s all ease-in;*/\n}\n\n.info-overlay-open, .about-overlay-open {\n\t/*overflow-y: scroll;*/\n\twidth: 100%;\n\theight: 100%;\n\tposition: fixed;\n\tleft: 0;\n\ttop: 0;\n\topacity: 1;\n\tbackground-color: #ffffff;\n}\n\n.info-overlay-open {\n\ttransform: translate(0%);\n\t-webkit-transform: translate(0%);\n\t-moz-transform: translate(0%);\n\t-o-transform: translate(0%);\n}\n\n.info-overlay-open-index {\n\tz-index: 7;\n}\n\n.overflow {\n\toverflow: hidden;\n}\n\n.overlay-controls-mobile, .overlay-controls {\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n\tright: 44px;\n\tz-index: 1;\n\tcolor: #ffffff;\n\ttop: 38px;\n\t-webkit-transition: all 200ms ease-in-out;\n\t-moz-transition: all 200ms ease-in-out;\n\t-o-transition: all 200ms ease-in-out;\n\ttransition: all 200ms ease-in-out;\n}\n\n.overlay-controls-mobile {\n    display: block;\n    position: absolute;\n    right: 5%;\n}\n\n.overlay-controls {\n    display: none;\n    position: fixed;\n}\n\n@media screen and ( min-width: 768px) {\n\t.overlay-controls {\n\t\tposition: absolute;\n\t\ttop: 24px;\n\t\tright: 60px;\n\t\tdisplay: block;\n\t}\n\n\t.overlay-controls-mobile {\n\t\tdisplay: none;\n\t}\n}\n\n.overlay-controls li, .overlay-controls-mobile li {\n\tdisplay: inline-block;\n\tmargin-right: 10px;\n}\n\n.overlay-controls li:first-child, .overlay-controls-mobile li:first-child{\n\tmargin-right: 30px;\n}\n\n.artwork-content {\n\tfloat: none;\n\tpadding-top: 0px;\n\tposition: relative;\n\ttop: 0px;\n\tleft: 0px;\n\topacity: 1;\n\t-webkit-transition: 0.5s all ease-in;\n\t-moz-transition: 0.5s all ease-in;\n\t-o-transition: 0.5s all ease-in;\n\ttransition: 0.5s all ease-in;\n\ttransition-delay: 0.5s;\n\t-webkit-transition-delay: 0.5s;\n\t-moz-transition-delay: 0.5s;\n\t-o-transition-delay: 0.5s;\n\twidth: 100%;\n}\n\n@media screen and ( min-width: 768px) {\n\t.artwork-content {\n\t\tpadding-top: 150px;\n\t\tfloat: left;\n\t\tposition: relative;\n\t\tpadding-left: 38px;\n\t\twidth: 80%;\n\t}\n}\n\n.container_id-year-line {\n\tdisplay: inline;\n    padding: 0;\n}\n\n#artwork-id, #artwork-year{\n\tdisplay: inline;\n}\n\n.divider {\n\twidth: 100px;\n    height: 2px;\n    background-color: #000;\n    margin-bottom: 4px;\n    display: inline-block;\n}\n\n#artwork-title {\n\ttext-transform: uppercase;\n}\n\n.slide-content-left {\n/*\t-webkit-transform: translate(0, 50px);\n\t-moz-transform: translate(0, 50px);\n\t-o-transform: translate(0, 50px);\n\ttransform: translate(0, 50px);*/\n\topacity: 0;\n}\n\n.social-artwork {\n\tlist-style: none;\n\tpadding: 24px 0 0 0;\n}\n\n@media screen and ( min-width: 768px) {\n\t.social-artwork {\n\t\twidth: 100%;\n\t\tpadding: 0;\n\t\tfloat: right;\n\t}\n}\n\n@media screen and ( min-width: 768px) {\n\t.social-artwork {\n\t\tpadding: 84px 0 0 0;\n\t}\n}\n\n.artist-info {\n    margin-top: 30px;\n}\n\n@media screen and ( min-width: 768px) {\n\t.artist-info {\n\t\tmargin-top: 45px;\n\t}\n}\n\n.artist-info h4 {\n\tmargin: 0;\n\tfont-size: 12px;\n\tmargin-right: 5px;\n\ttext-transform: none;\n\tdisplay: inline-block;\n}\n\n@media screen and ( min-width: 768px) {\n\t.artist-info h4 {\n\t\tmargin-left: 40px;\n\t}\n}\n\n#artwork-artist {\n\tpadding-bottom: 5px;\n\tborder-bottom: 2px solid black;\n\tdisplay: inline;\n\tdisplay: inline-block;\n\tfont-size: 12px;\n}\n\n@media screen and ( min-width: 768px) {\n\t#artwork-artist {\n\t\tmargin-bottom: 0;\n\t}\n\n\t.social-artwork {\n\t\tpadding: 84px 0 0 0;\n\t}\n}\n\n#artwork-original-post {\n\tcolor: #000;\n    text-decoration: none;\n    padding-bottom: 5px;\n    border-bottom: 2px solid black;\n\tfont-size: 12px;\n\tdisplay: inline-block;\n\tmargin-bottom: 30px;\n}\n\n@media screen and ( min-width: 768px) {\n\t.artist-info h4 {\n\t\tfloat: left;\n\t}\n\n\t#artwork-artist {\n\t\tfloat: left;\n\t}\n\n\t#artwork-original-post {\n\t\tfloat: left;\n\t\tmargin-bottom: 0;\n\t}\n}\n\n.social-artwork li.social-links{\n\t/*float: right;*/\n\tmargin-top: 2px;\n}\n\n.social-artwork li.roxrite-bottom {\n\twidth: 220px;\n\tborder: 0;\n}\n\n.roxrite-image-dark {\n\tposition: relative;\n\tmargin: 0;\n\twidth: 160px;\n\tdisplay: none;\n}\n\n@media screen and ( min-width: 768px) {\n\t.social-artwork {\n\t\tpadding: 32px 0 0 0;\n\t}\n\n\t.roxrite-image-dark {\n\t\tdisplay: inline-block;\n\t}\n}\n\n.social-about, .social-about-mobile {\n\tpadding: 0;\n\tposition: relative;\n/*\ttop: -11px;\n\tright: 20px;*/\n}\n\n.social-about {\n\tposition: fixed;\n\tright: 30px;\n\ttop: 30px;\n}\n\n.social-about {\n\tdisplay: none;\n}\n\n.social-about-mobile {\n\tdisplay: inline-block;\n\tpadding-top: 30px;\n}\n\n@media screen and ( min-width: 768px) {\n\t.social-about {\n\t\tdisplay: inline-block;\n\t}\n\n\t.social-about-mobile {\n\t\tdisplay: none;\n\t}\n}\n\n/*@media screen and ( min-width: 768px) {\n\t.social-about {\n\t\tright: 10px;\n\t}\n}*/\n.social-artwork li, .social-about li, .social-about-mobile li {\n    display: inline;\n    border-bottom: 2px solid black;\n    color: #000000;\n    padding-bottom: 3px;\n    margin-right: 20px;\n}\n.social-artwork li a, .social-about li a, .social-about-mobile li a{\n\tcolor: inherit;\n\ttext-decoration: none;\n\tfont-size: 12px;\n}\n\n#link-home {\n\ttext-decoration: none;\n\tmargin-top: 17px;\n\ttext-transform: uppercase;\n\tfont-size: 13px;\n\tcolor: #000;\n\tposition: relative;\n\theight: 21px;\n\twidth: 44px;\n\tdisplay: inline-block;\n\ttop: 8px;\n\tpadding-left: 39px;\n\tpadding-top: 9px;\n\tpadding-bottom: 49px;\n}\n\n#link-home .arrow-back-v {\n    border-top: 2px solid #000000;\n    border-right: 2px solid #000000;\n    display: inline-block;\n    width: 8px;\n    height: 8px;\n    -webkit-transform: rotate(-135deg);\n    -moz-transform: rotate(-135deg);\n    -o-transform: rotate(-135deg);\n    transform: rotate(-135deg);\n    position: absolute;\n    top: 10px;\n    left: 5px;\n}\n\n#link-home .arrow-back-t {\n\twidth: 2px;\n\tdisplay: inline-block;\n\tposition: absolute;\n\tbackground-color: #000000;\n\tleft: 13px;\n\theight: 18px;\n\t-webkit-transform: rotate(-135deg);\n\t-moz-transform: rotate(-135deg);\n\t-o-transform: rotate(-135deg);\n\ttransform: rotate(90deg);\n\ttop: 6px;\n}\n\n@media screen and ( min-width: 768px) {\n\t#link-home {\n\t\tdisplay: none;\n\t}\n}\n\n/*.slide-content-right {\n\t-webkit-transform: translate(0, -100%);\n\t-moz-transform: translate(0, -100%);\n\t-o-transform: translate(0, -100%);\n    transform: translate(0, -100%);\n    opacity: 0;\n}*/\n\n@media screen and ( min-width: 768px) { /* Slide Test */\n\t.slide-content-left {\n/*\t\t-webkit-transform: translate(-100%, 0);\n\t\t-moz-transform: translate(-100%, 0);\n\t\t-o-transform: translate(-100%, 0);\n\t\ttransform: translate(-100%, 0);*/\n\t}\n}\n\n#loader {\n\tposition: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n    -moz-transform: translate(-50%, 0);\n    -o-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    width: 100%;\n    /*height: 100%;*/\n    text-align: center;\n    padding-top: 50%;\n}\n\n/* Overlay End */\n\n.b-lazy {\n\t-webkit-transition: all 500ms ease-in-out;\n\t-moz-transition: all 500ms ease-in-out;\n\t-o-transition: all 500ms ease-in-out;\n\ttransition: all 500ms ease-in-out;\n\topacity: 0;\n    -webkit-transform: scale(0) translate(0%, -100%);\n    -moz-transform: scale(0) translate(0%, -100%);\n    -o-transform: scale(0) translate(0%, -100%);\n\ttransform: scale(0) translate(0%, -100%);\n}\n\n.b-lazy.b-loaded {\n\topacity:1;\n    -webkit-transform: scale(1) translate(0%);\n    -moz-transform: scale(1) translate(0%);\n    -o-transform: scale(1) translate(0%);\n\ttransform: scale(1) translate(0%);\n}\n\n.hide {\n\theight: 0;\n\twidth: 0;\n\tmargin: 0;\n\tpadding: 0;\n\tmin-height: 0;\n}\n\n#video-holder {\n    margin-bottom: 30px;\n    position: relative;\n    padding-top: 75%;\n    cursor: pointer;\n    background-color: #000;\n    margin-top: 0;\n    right: 0px;\n    width: 100%;\n    /*margin-bottom: 40px;*/\n    z-index: 4;\n}\n\n@media screen and ( min-width: 768px) {\n\t#video-holder {\n\t\tright: 15px;\n\t\t/*margin-top: 5%;*/\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\n\t\t-webkit-transform: translateY(-50%);\n\t\t-moz-transform: translateY(-50%);\n\t\t-o-transform: translateY(-50%);\n\t}\n}\n\n#video-holder img {\n    top: 0;\n    left: 0;\n    width: 100%;\n    opacity: 0.7;\n    position: relative;\n}\n\n#video-holder  .plybtn {\n    box-shadow: 0 0 30px rgba( 0, 0, 0, 0.6);\n    width: 90px;\n    height: 60px;\n    background-color: #333;\n    z-index: 1;\n    opacity: 0.8;\n    border-radius: 6px;\n}\n\n#video-holder .plybtn:before {\n    content: \"\";\n    border-style: solid;\n    border-width: 15px 0 15px 26.0px;\n    border-color: transparent transparent transparent #fff;\n}\n#video-holder img,\n#video-holder .plybtn {\n    cursor: pointer;\n}\n#video-holder img,\n#video-holder iframe,\n#video-holder .plybtn,\n#video-holder .plybtn:before {\n    position: absolute;\n    z-index: 10;\n}\n#video-holder .plybtn,\n#video-holder .plybtn:before {\n    top: 50%;\n    left: 50%;\n    transform: translate3d( -50%, -50%, 0);\n}\n#video-holder iframe {\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n\tbox-shadow: 8px 9px 40px 0px rgba(0, 0, 0, .13);\n}\n\n.grid-icon {\n\tdisplay: inline-block;\n}\n\n.grid-icon:hover > span > span {\n\topacity: .8;\n}\n\n.grid-icon > .layer {\n\twidth: 100%;\n\tposition: absolute;\n\tleft: 0;\n}\n\n.grid-icon--line2 {\n\tposition: relative;\n\twidth: 21px;\n\theight: 24px;\n\ttop: 2px;\n}\n\n.grid-icon--line2 > .layer {\n\theight: 9px;\n}\n\n.grid-icon--line2 > .layer--primary {\n\ttop: -2px;\n}\n\n.grid-icon--line2 > .layer--secondary {\n\tbottom: -2px;\n}\n\n.grid-icon--line2 > .layer > span {\n\tposition: absolute;\n\tdisplay: block;\n\twidth: 7px;\n\theight: 100%;\n\tbackground-color: #000000;\n\tborder-radius: 2px;\n}\n\n.grid-icon--line2 > .layer > span:first-child {\n\tleft: 0;\n}\n\n.grid-icon--line2 > .layer > span:nth-child(2) {\n\tright: 0;\n}\n\n.hoveroony {\n/*\t-webkit-transform: scale(1.1) !important;\n\t-moz-transform: scale(1.1) !important;\n\t-o-transform: scale(1.1) !important;\n\ttransform: scale(1.1) !important;*/\n}\n\n@media screen and ( min-width: 768px) {\n\t.js-hover-image:hover{\n/*\t\t-webkit-transform: scale(1.1);\n\t\t-moz-transform: scale(1.1);\n\t\t-o-transform: scale(1.1);\n\t\ttransform: scale(1.1);*/\n\t}\n}\n", ""]);

// exports


/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
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

var	fixUrls = __webpack_require__(8);

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

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=content style=display:none>\n\t<div class=overlay>\n\t\t<div class=overlay-inside-top>\n\t\t\t<div class=\"after-bar after-bar-full\">\n\t\t\t\t<a class=btn-overlay-close-mobile>\n\t\t\t\t\t<span></span>\n\t\t\t\t\t<span></span>\n\t\t\t\t</a>\n\t\t\t\t<ul class=overlay-controls-mobile>\n\t\t\t\t\t<li><a id=btn-previous-mobile href=#><span class=js-span-border></span></a></li>\n\t\t\t\t\t<li><a id=btn-next-mobile href=#><span class=js-span-border></span></a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"wrapper opacity-zero\">\n\t\t\t\t<div class=overlay-inside-content>\n\t\t\t\t\t<div class=\"overlay-media overlay-media-hidden\">\n\t\t\t\t\t\t<div class=gallery-swipper></div>\n\t\t\t\t\t\t<div id=image-holder>\n\t\t\t\t\t\t\t<div id=loader></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=video-holder>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a class=btn-overlay-close-desktop>\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=overlay-info>\n\t\t\t\t\t\t<ul class=overlay-controls>\n\t\t\t\t\t\t\t<li><a id=btn-previous href=#><span class=js-span-border></span></a></li>\n\t\t\t\t\t\t\t<li><a id=btn-next href=#><span class=js-span-border></span></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<div class=\"artwork-content slide-content-left\">\n\t\t\t\t\t\t\t<ul class=container_id-year-line>\n\t\t\t\t\t\t\t\t<li id=artwork-id></li>\n\t\t\t\t\t\t\t\t<li class=divider></li>\n\t\t\t\t\t\t\t\t<li id=artwork-year></li>\n\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t<h2 id=artwork-title></h2>\n\t\t\t\t\t\t\t<div id=artwork-description></div>\n\n\t\t\t\t\t\t\t<div class=artist-info>\n\t\t\t\t\t\t\t\t<div class=artinfo-alignment><a id=artwork-original-post href=# target=_blank>Original Post</a></div>\n\t\t\t\t\t\t\t\t<div class=artinfo-alignment><h4>Artist:</h4></div>\n\t\t\t\t\t\t\t\t<div class=artinfo-alignment><div id=artwork-artist></div></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ul class=social-artwork>\n\t\t\t\t\t\t\t\t<li class=social-links><a id=tw-social href=# target=_blank>TW</a></li>\n\t\t\t\t\t\t\t\t<li class=social-links><a id=ig-social href=# target=_blank>IG</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div><a id=link-home href=#>\n\t\t\t\t\t\t\t<span class=arrow-back-v></span>\n\t\t\t\t\t\t\t<span class=arrow-back-t></span>Home\n\t\t\t\t\t\t</a></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t</div>\n\n\t\t</div>\n\t</div>\n\n\t<div class=overlay-about>\n\t\t<div class=scroll-container>\n\t\t<div class=overlay-inside-about-content>\n\t\t\t<div class=overlay-about-left>\n\t\t\t\t<a class=btn-about-close>\n\t\t\t\t\t<span></span>\n\t\t\t\t\t<span></span>\n\t\t\t\t</a>\n\t\t\t\t\t<div id=artist-content>\n\t\t\t\t\t\t<h1 class=\"about-roxrite about-animate-initial\">Roxrite</h1>\n\t\t\t\t\t\t<p class=\"about-sub about-animate-initial\">About Roxrite</p>\n\t\t\t\t\t\t<ul class=\"social-about about-animate-initial\">\n\t\t\t\t\t\t\t<li><a id=tw-social-about href=# target=_blank>TW</a></li>\n\t\t\t\t\t\t\t<li><a id=in-social-about href=# target=_blank>IN</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<p class=about-animate-initial>Roxrite, born Omar Delgado,\n\t\t\t\t\t\t\temigrated to the United States\n\t\t\t\t\t\t\tfrom Mexico at the age of six.\n\t\t\t\t\t\t\tSeven years later, at the tender\n\t\t\t\t\t\t\tage of 12, Omar started dancing\n\t\t\t\t\t\t\tafter being influenced by local\n\t\t\t\t\t\t\tbboys. His first crew, Sub 4, soon\n\t\t\t\t\t\t\tbecame a heavy focus on Omar's life.\n\t\t\t\t\t\t\tHis dedication to the dance and his\n\t\t\t\t\t\t\tstyle of bboying gave way to his new\n\t\t\t\t\t\t\tname, \"Roxrite,\" a term referring to\n\t\t\t\t\t\t\thow he always \"rocked right.\"</p>\n\n\t\t\t\t\t\t<p class=about-animate-initial>Citing notable names in the bboying\n\t\t\t\t\t\t\tculture such as Ken Swift, Remind,\n\t\t\t\t\t\t\tThunder and Ground Level, Roxrite\n\t\t\t\t\t\t\thas taken their influence to shape\n\t\t\t\t\t\t\this own. Now, at age 31, Roxrite is\n\t\t\t\t\t\t\tan avid competitor on national and\n\t\t\t\t\t\t\tinternational levels. In ten years\n\t\t\t\t\t\t\tof competing, Roxrite has won first\n\t\t\t\t\t\t\tplace in 80 different competitions.\n\t\t\t\t\t\t\tAs a fierce and determined dancer,\n\t\t\t\t\t\t\the has won nine consecutive tournaments.</p>\n\n\t\t\t\t\t\t<p class=about-animate-initial>Roxrite's technical ability as a\n\t\t\t\t\t\t\tdancer is demonstrated in his\n\t\t\t\t\t\t\tstick freeze combinations. His\n\t\t\t\t\t\t\tstyle is extremely strategic.\n\t\t\t\t\t\t\tJudges for past tournaments have\n\t\t\t\t\t\t\tdescribed him as very well-rounded\n\t\t\t\t\t\t\tand complex with his moves. His\n\t\t\t\t\t\t\tquick thinking is displayed on\n\t\t\t\t\t\t\tbattle floors and he highly regards\n\t\t\t\t\t\t\trepetition as a symptom of failure.</p>\n\n\t\t\t\t\t\t<p class=about-animate-initial>His affiliations include the crews\n\t\t\t\t\t\t\tRenegades, Squadron, and The Break\n\t\t\t\t\t\t\tDisciples. His crews have all\n\t\t\t\t\t\t\tbecome heavy support systems as he\n\t\t\t\t\t\t\tcompetes as a solo dancer. While\n\t\t\t\t\t\t\tnot defined by his West Coast\n\t\t\t\t\t\t\tstatus, Roxrite does take great\n\t\t\t\t\t\t\tpride from the dance education he\n\t\t\t\t\t\t\tobtains while living in California.\n\t\t\t\t\t\t\tHis motto, \"Skills talk, no hype\n\t\t\t\t\t\t\tneeded\" defines his desire to\n\t\t\t\t\t\t\tcontinually represent the bboy\n\t\t\t\t\t\t\tmovement the right way. He has no\n\t\t\t\t\t\t\ttime to pause now.</p>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"overlay-about-right about-animate-initial\">\n\t\t\t\t<p class=about-contributors>contributors</p>\n\t\t\t\t<table>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><a href=# target=_blank alt=\"Ali Graham\">Ali Graham</a></td>\n\t\t\t\t\t\t<td><a href=# target=_blank alt=\"Jonny Negron\">Jonny Negron</a></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t\t<td><a href=# target=_blank alt=\"Ben Kopp\">Ben Kopp</a></td>\n\t\t\t\t\t\t<td><a href=# target=_blank alt=\"Josh Freydkis\">Josh Freydkis</a></td>\n\t\t\t\t\t\n\t\t\t\t\t\t<td><a href=# target=_blank alt=\"Ben Marra\">Ben Marra</a></td>\n\t\t\t\t\t\t<td><a href=# target=_blank alt=\"Kyle Platts\">Kyle Platts</a></td>\n\t\t\t\t\t\n\t\t\t\t\t\t<td><a href=# target=_blank alt=\"Bryan Woodland\">Bryan Woodland</a></td>\n\t\t\t\t\t\t<td><a href=# target=_blank alt=\"Priscilla Witte\">Priscilla Witte</a></td>\n\t\t\t\t\t\n\t\t\t\t\t\t<td><a href=# target=_blank alt=\"Carolyn Figel\">Carolyn Figel</a></td>\n\t\t\t\t\t\t<td><a href=# target=_blank alt=\"Ryan Humphrey\">Ryan Humphrey</a></td>\n\t\t\t\t\t\n\t\t\t\t\t\t<td><a href=# target=_blank alt=\"Dan Lish\">Dan Lish</a></td>\n\t\t\t\t\t\t<td><a href=# target=_blank alt=\"Ryan Putnam\">Ryan Putnam</a></td>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t<td><a href=# target=_blank alt=\"Elena Gumeniuk\">Elena Gumeniuk</a></td>\n\t\t\t\t\t\t<td><a href=# target=_blank alt=\"Yue Wu\">Yue Wu</a></td>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t<td><a href=# target=_blank alt=\"Gerald Leung\">Gerald Leung</a></td>\n\t\t\t\t\t\t<td><a href=# target=_blank alt=\"Zhang Liang\">Zhang Liang</a></td>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t<td><a href=# target=_blank alt=\"James Callahan\">James Callahan</a></td>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\n\t\t\t\t</table>\n\t\t\t\t<ul class=social-about-mobile>\n\t\t\t\t\t<li><a id=tw-social-about href=# target=_blank>TW</a></li>\n\t\t\t\t\t<li><a id=in-social-about href=# target=_blank>IN</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div id=main-content>\n\t\t<div id=header>\n\t\t\t<a class=\"arrow-up opacity-null\" href=index.html>\n\t\t\t\t<span class=arrow-up-v></span>\n\t\t\t\t<span class=arrow-up-t></span>\n\t\t\t</a>\n\t\t\t<a href=index.html><img class=roxrite-image src=" + __webpack_require__(10) + "></a>\n\t\t\t<a id=btn-about><div id=info-circle></div></a>\n\t\t</div>\n\t\t<div class=\"grid img-container\">\n\t\t</div>\n\t</div>\n\t<!-- <div id=\"hidden\"></div> -->\n</div>\n";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "14566ddc6261926359eb320b7b30724d.png";

/***/ })
/******/ ]);