/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/public/style/main.css\");\n\n//# sourceURL=webpack:///./src/style/main.scss?");

/***/ }),

/***/ "./src/js/algorithms/comb.js":
/*!***********************************!*\
  !*** ./src/js/algorithms/comb.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_js_array_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/js/array/array.js */ \"./src/js/array/array.js\");\n/* harmony import */ var _src_js_draw_draw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/js/draw/draw.js */ \"./src/js/draw/draw.js\");\n\r\n\r\n\r\nconst canvas = document.getElementById('sorting_comb');\r\nlet buttonStartOne = document.querySelector('.button_start_one');\r\nlet intervalId;\r\n//sorting items when the button is clicked\r\nbuttonStartOne.onclick = function () {\r\n    if (intervalId) {\r\n        clearInterval(intervalId);\r\n    }\r\n    let steps = [];\r\n\r\n    function combSort(arr) {\r\n        for (let i = 1; i < arr.length; i++) {\r\n            for (let j = i - 1; j > -1; j--) {\r\n                if (arr[j + 1] < arr[j]) {\r\n                    [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];\r\n                    steps.push([...arr]);\r\n                }\r\n            }\r\n        }\r\n        return arr;\r\n    }\r\n\r\n    let randomNumbers = [..._src_js_array_array_js__WEBPACK_IMPORTED_MODULE_0__.initRandomNumbers];\r\n    combSort(randomNumbers);\r\n\r\n    let increment = 0;\r\n    intervalId = setInterval(function () {\r\n        (0,_src_js_draw_draw_js__WEBPACK_IMPORTED_MODULE_1__.drawArray)(canvas, steps[increment]);\r\n        increment++;\r\n\r\n        if (steps.length === increment) {\r\n            clearInterval(intervalId);\r\n        }\r\n    }, 10);\r\n}\n\n//# sourceURL=webpack:///./src/js/algorithms/comb.js?");

/***/ }),

/***/ "./src/js/algorithms/shake.js":
/*!************************************!*\
  !*** ./src/js/algorithms/shake.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_js_array_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/js/array/array.js */ \"./src/js/array/array.js\");\n/* harmony import */ var _src_js_draw_draw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/js/draw/draw.js */ \"./src/js/draw/draw.js\");\n\r\n\r\n\r\nconst canvas = document.getElementById('sorting_shake');\r\nlet buttonStartTwo = document.querySelector('.button_start_two');\r\nlet intervalId;\r\n//sorting items when the button is clicked\r\nbuttonStartTwo.onclick = function (e) {\r\n    if (intervalId) {\r\n        clearInterval(intervalId);\r\n    }\r\n    let steps = [];\r\n\r\n    function swap(arr, i, j) {\r\n        [arr[i], arr[j]] = [arr[j], arr[i]];\r\n        steps.push([...arr]);\r\n    }\r\n\r\n    function shakeSort(arr) {\r\n\r\n        let left = 0;\r\n        let right = arr.length - 1;\r\n        while (right > left) {\r\n            for (let i = left; i < right; i++) {\r\n                if (arr[i] > arr[i + 1]) {\r\n                    swap(arr, i, i + 1);\r\n                }\r\n            }\r\n            right--;\r\n            for (let j = right; j > left; j--) {\r\n                if (arr[j] < arr[j - 1]) {\r\n                    swap(arr, j, j - 1)\r\n                }\r\n            }\r\n            left++;\r\n        }\r\n        return arr;\r\n    }\r\n\r\n    let randomNumbers = [..._src_js_array_array_js__WEBPACK_IMPORTED_MODULE_0__.initRandomNumbers];\r\n    shakeSort(randomNumbers);\r\n\r\n    let increment = 0;\r\n    intervalId = setInterval(function () {\r\n        (0,_src_js_draw_draw_js__WEBPACK_IMPORTED_MODULE_1__.drawArray)(canvas, steps[increment]);\r\n        increment++;\r\n\r\n        if (steps.length === increment) {\r\n            clearInterval(intervalId);\r\n        }\r\n    }, 10);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/algorithms/shake.js?");

/***/ }),

/***/ "./src/js/array/array.js":
/*!*******************************!*\
  !*** ./src/js/array/array.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initRandomNumbers\": () => (/* binding */ initRandomNumbers)\n/* harmony export */ });\n//random element from 1 to 300\r\n\r\nlet initRandomNumbers = [...Array(50)].map(() => Math.floor(Math.random() * 200));\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/array/array.js?");

/***/ }),

/***/ "./src/js/color/config.json":
/*!**********************************!*\
  !*** ./src/js/color/config.json ***!
  \**********************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"chartColor\":\"#b5b5b5\"}');\n\n//# sourceURL=webpack:///./src/js/color/config.json?");

/***/ }),

/***/ "./src/js/draw/draw.js":
/*!*****************************!*\
  !*** ./src/js/draw/draw.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawArray\": () => (/* binding */ drawArray)\n/* harmony export */ });\n/* harmony import */ var _src_js_color_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/js/color/config.json */ \"./src/js/color/config.json\");\n\r\n\r\nfunction drawArray(canvas, numbers) {\r\n    let ctx = canvas.getContext('2d');\r\n    //clearing the canvas\r\n    ctx.clearRect(0, 0, 1000, 520);\r\n    for (let i = 0; i < numbers.length; i++) {\r\n        let number = numbers[i];\r\n        ctx.fillStyle = _src_js_color_config_json__WEBPACK_IMPORTED_MODULE_0__.chartColor;\r\n        //width of a single array\r\n        let width = 10;\r\n        //drawing a sort element\r\n        ctx.fillRect(i * width, 0, width, number);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/draw/draw.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _algorithms_shake_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./algorithms/shake.js */ \"./src/js/algorithms/shake.js\");\n/* harmony import */ var _algorithms_comb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./algorithms/comb.js */ \"./src/js/algorithms/comb.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/style/main.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;