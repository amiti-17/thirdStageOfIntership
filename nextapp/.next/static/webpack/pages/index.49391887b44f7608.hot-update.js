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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   login: function() { return /* binding */ login; }\n/* harmony export */ });\n/* harmony import */ var _fetch_fetchPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch/fetchPost */ \"./src/functions/fetch/fetchPost.ts\");\n\nasync function login(loginData) {\n    const response = await (0,_fetch_fetchPost__WEBPACK_IMPORTED_MODULE_0__.fetchPost)(\"auth/login\", loginData);\n    return response;\n} // export async function useLogin(loginData: LoginType) {\n //   return {\n //     getToken: getToken.bind(null, loginData), \n //     error, \n //     loading, \n //     data\n //   };\n // }\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2F1dGgvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFK0M7QUFHeEMsZUFBZUMsTUFBTUMsU0FBb0I7SUFDOUMsTUFBTUMsV0FBVyxNQUFNSCwyREFBU0EsQ0FBQyxjQUFjRTtJQUUvQyxPQUFPQztBQUNULEVBRUEseURBQXlEO0NBR3pELGFBQWE7Q0FDYixpREFBaUQ7Q0FDakQsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixXQUFXO0NBQ1gsT0FBTztDQUNQLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Z1bmN0aW9ucy9hdXRoL2luZGV4LnRzPzViYzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5LCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgTG9naW5UeXBlIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9zeXN0ZW0vdHlwZXMvbG9naW5cIjtcbmltcG9ydCB7IGZldGNoUG9zdCB9IGZyb20gXCIuLi9mZXRjaC9mZXRjaFBvc3RcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vLi4vLi4vQXBvbGxvL2F1dGhcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKGxvZ2luRGF0YTogTG9naW5UeXBlKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hQb3N0KCdhdXRoL2xvZ2luJywgbG9naW5EYXRhKTtcblxuICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiB1c2VMb2dpbihsb2dpbkRhdGE6IExvZ2luVHlwZSkge1xuICBcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIGdldFRva2VuOiBnZXRUb2tlbi5iaW5kKG51bGwsIGxvZ2luRGF0YSksIFxuLy8gICAgIGVycm9yLCBcbi8vICAgICBsb2FkaW5nLCBcbi8vICAgICBkYXRhXG4vLyAgIH07XG4vLyB9Il0sIm5hbWVzIjpbImZldGNoUG9zdCIsImxvZ2luIiwibG9naW5EYXRhIiwicmVzcG9uc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/auth/index.ts\n"));

/***/ })

});