/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./.quasar/ssr-middlewares.js":
/*!************************************!*\
  !*** ./.quasar/ssr-middlewares.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * THIS FILE IS GENERATED AUTOMATICALLY.\n * DO NOT EDIT.\n **/\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((opts) => {\n  return Promise.all([\n    \n    Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! src-ssr/middlewares/render */ \"./src-ssr/middlewares/render.js\"))\n    \n  ]).then(async rawMiddlewares => {\n    const middlewares = rawMiddlewares\n      .map(entry => entry.default)\n      // .filter(entry => typeof entry === 'function')\n\n    for (let i = 0; i < middlewares.length; i++) {\n      try {\n        await middlewares[i](opts)\n      }\n      catch (err) {\n        console.error('[Quasar SSR] middleware error:', err)\n        return\n      }\n    }\n  })\n});\n\n\n//# sourceURL=webpack://pokedex_vue/./.quasar/ssr-middlewares.js?");

/***/ }),

/***/ "./node_modules/quasar/wrappers/index.js":
/*!***********************************************!*\
  !*** ./node_modules/quasar/wrappers/index.js ***!
  \***********************************************/
/***/ ((module) => {

eval("// Functions in this file are no-op,\n//  they just take a callback function and return it\n// They're used to apply typings to the callback\n//  parameters and return value when using Quasar with TypeScript\n// We need these in `ui` folder to make `quasar/wrapper` import work,\n//  but they are useful only for Quasar CLI projects\n// They are typed via module augmentation by `@quasar/app`\n\nmodule.exports.boot = function (callback) {\n  return callback\n}\n\nmodule.exports.ssrMiddleware = function (callback) {\n  return callback\n}\n\nmodule.exports.configure = function (callback) {\n  return callback\n}\n\nmodule.exports.preFetch = function (callback) {\n  return callback\n}\n\nmodule.exports.route = function (callback) {\n  return callback\n}\n\nmodule.exports.store = function (callback) {\n  return callback\n}\n\n\n//# sourceURL=webpack://pokedex_vue/./node_modules/quasar/wrappers/index.js?");

/***/ }),

/***/ "./src-ssr/middlewares/render.js":
/*!***************************************!*\
  !*** ./src-ssr/middlewares/render.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var quasar_wrappers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quasar/wrappers */ \"./node_modules/quasar/wrappers/index.js\");\n\n\n// This middleware should execute as last one\n// since it captures everything and tries to\n// render the page with Vue\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,quasar_wrappers__WEBPACK_IMPORTED_MODULE_0__.ssrMiddleware)(({ app, resolve, render, serve }) => {\n  // we capture any other Express route and hand it\n  // over to Vue and Vue Router to render our page\n  app.get(resolve.urlPath('*'), (req, res) => {\n    res.setHeader('Content-Type', 'text/html')\n\n    render(/* the ssrContext: */ { req, res })\n      .then(html => {\n        // now let's send the rendered html to the client\n        res.send(html)\n      })\n      .catch(err => {\n        // oops, we had an error while rendering the page\n\n        // we were told to redirect to another URL\n        if (err.url) {\n          if (err.code) {\n            res.redirect(err.code, err.url)\n          } else {\n            res.redirect(err.url)\n          }\n        } else if (err.code === 404) {\n          // hmm, Vue Router could not find the requested route\n\n          // Should reach here only if no \"catch-all\" route\n          // is defined in /src/routes\n          res.status(404).send('404 | Page Not Found')\n        } else if (true) {\n          // well, we treat any other code as error;\n          // if we're in dev mode, then we can use Quasar CLI\n          // to display a nice error page that contains the stack\n          // and other useful information\n\n          // serve.error is available on dev only\n          serve.error({ err, req, res })\n        } else {}\n      })\n  })\n}));\n\n\n//# sourceURL=webpack://pokedex_vue/./src-ssr/middlewares/render.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./.quasar/ssr-middlewares.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;