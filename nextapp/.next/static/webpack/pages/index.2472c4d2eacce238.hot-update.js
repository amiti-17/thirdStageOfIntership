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

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var _components_loginPage_LoginLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/loginPage/LoginLayout */ \"./components/loginPage/LoginLayout.tsx\");\n/* harmony import */ var _components_loginPage_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/loginPage/Form */ \"./components/loginPage/Form/index.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _Apollo_locations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Apollo/locations */ \"./Apollo/locations.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Login() {\n    _s();\n    const { loading, error, data } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(_Apollo_locations__WEBPACK_IMPORTED_MODULE_4__.locations.listAll, {\n        variables: {\n            input: 2\n        }\n    });\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        console.log({\n            loading\n        }, {\n            error\n        }, data);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        component: \"main\",\n        maxWidth: \"xs\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/pages/login.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loginPage_LoginLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loginPage_Form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/pages/login.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/pages/login.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/pages/login.tsx\",\n        lineNumber: 20,\n        columnNumber: 7\n    }, this);\n}\n_s(Login, \"MIyWK+WDGXozRNXYyIBuaVd7f4g=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQjtBQUN5QjtBQUNKO0FBQ2M7QUFDVDtBQUNXO0FBQ2hCO0FBR2pDLFNBQVNPOztJQUV0QixNQUFNLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUUsR0FBR0wsd0RBQVFBLENBQUNDLHdEQUFTQSxDQUFDSyxPQUFPLEVBQUU7UUFBQ0MsV0FBVztZQUFFQyxPQUFPO1FBQUU7SUFBQztJQUVyRmIsc0RBQWUsQ0FBQztRQUVkZSxRQUFRQyxHQUFHLENBQUM7WUFBQ1I7UUFBTyxHQUFHO1lBQUNDO1FBQUssR0FBR0M7SUFDbEMsR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNSLCtEQUFTQTtRQUFDZSxXQUFVO1FBQU9DLFVBQVM7OzBCQUNuQyw4REFBQ2pCLGlFQUFXQTs7Ozs7MEJBQ1osOERBQUNFLHlFQUFXQTswQkFDViw0RUFBQ0Msa0VBQVNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBbEJ3Qkc7O1FBRVdGLG9EQUFRQTs7O0tBRm5CRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi50c3g/NzI0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xuaW1wb3J0IExvZ2luTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbG9naW5QYWdlL0xvZ2luTGF5b3V0JztcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9sb2dpblBhZ2UvRm9ybSc7XG5pbXBvcnQgeyBncWwsIHVzZUFwb2xsb0NsaWVudCwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBsb2NhdGlvbnMgfSBmcm9tICcuLi9BcG9sbG8vbG9jYXRpb25zJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KGxvY2F0aW9ucy5saXN0QWxsLCB7dmFyaWFibGVzOiB7IGlucHV0OiAyIH19KTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIFxuICAgIGNvbnNvbGUubG9nKHtsb2FkaW5nfSwge2Vycm9yfSwgZGF0YSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIj5cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxMb2dpbkxheW91dD5cbiAgICAgICAgICA8TG9naW5Gb3JtIC8+XG4gICAgICAgICAgXG4gICAgICAgIDwvTG9naW5MYXlvdXQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNzc0Jhc2VsaW5lIiwiQ29udGFpbmVyIiwiTG9naW5MYXlvdXQiLCJMb2dpbkZvcm0iLCJ1c2VRdWVyeSIsImxvY2F0aW9ucyIsIkxvZ2luIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImxpc3RBbGwiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiLCJtYXhXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.tsx\n"));

/***/ })

});