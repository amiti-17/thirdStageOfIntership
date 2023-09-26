"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/functions/auth/index.ts":
/*!*************************************!*\
  !*** ./src/functions/auth/index.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   login: function() { return /* binding */ login; },\n/* harmony export */   useLogin: function() { return /* binding */ useLogin; }\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _fetch_fetchPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch/fetchPost */ \"./src/functions/fetch/fetchPost.ts\");\n/* harmony import */ var _Apollo_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Apollo/auth */ \"./Apollo/auth.ts\");\n\n\n\nasync function login(loginData) {\n    const response = await (0,_fetch_fetchPost__WEBPACK_IMPORTED_MODULE_0__.fetchPost)(\"auth/login\", loginData);\n    return response;\n}\nasync function useLogin(loginData) {\n    const response = await (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_Apollo_auth__WEBPACK_IMPORTED_MODULE_1__.auth.login, {\n        variables: {\n            loginData\n        },\n        pollInterval: 5000\n    });\n    if (response.error) {\n        console.log(\"useLogin error: \", response.error);\n    }\n    return response;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2F1dGgvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEM7QUFFSztBQUNIO0FBRXJDLGVBQWVHLE1BQU1DLFNBQW9CO0lBQzlDLE1BQU1DLFdBQVcsTUFBTUosMkRBQVNBLENBQUMsY0FBY0c7SUFFL0MsT0FBT0M7QUFDVDtBQUVPLGVBQWVDLFNBQVNGLFNBQW9CO0lBQ2pELE1BQU1DLFdBQVcsTUFBTUwsd0RBQVFBLENBQUNFLDhDQUFJQSxDQUFDQyxLQUFLLEVBQUU7UUFDMUNJLFdBQVc7WUFBQ0g7UUFBUztRQUNyQkksY0FBYztJQUNoQjtJQUVBLElBQUlILFNBQVNJLEtBQUssRUFBRTtRQUNsQkMsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQk4sU0FBU0ksS0FBSztJQUNoRDtJQUVBLE9BQU9KO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Z1bmN0aW9ucy9hdXRoL2luZGV4LnRzPzViYzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IExvZ2luVHlwZSB9IGZyb20gXCIuLi8uLi9jb25maWcvc3lzdGVtL3R5cGVzL2xvZ2luXCI7XG5pbXBvcnQgeyBmZXRjaFBvc3QgfSBmcm9tIFwiLi4vZmV0Y2gvZmV0Y2hQb3N0XCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uLy4uLy4uL0Fwb2xsby9hdXRoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbihsb2dpbkRhdGE6IExvZ2luVHlwZSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoUG9zdCgnYXV0aC9sb2dpbicsIGxvZ2luRGF0YSk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXNlTG9naW4obG9naW5EYXRhOiBMb2dpblR5cGUpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB1c2VRdWVyeShhdXRoLmxvZ2luLCB7XG4gICAgdmFyaWFibGVzOiB7bG9naW5EYXRhfSxcbiAgICBwb2xsSW50ZXJ2YWw6IDUwMDAsXG4gIH0pXG5cbiAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJ1c2VMb2dpbiBlcnJvcjogXCIsIHJlc3BvbnNlLmVycm9yKVxuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlO1xufSJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsImZldGNoUG9zdCIsImF1dGgiLCJsb2dpbiIsImxvZ2luRGF0YSIsInJlc3BvbnNlIiwidXNlTG9naW4iLCJ2YXJpYWJsZXMiLCJwb2xsSW50ZXJ2YWwiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/auth/index.ts\n"));

/***/ })

});