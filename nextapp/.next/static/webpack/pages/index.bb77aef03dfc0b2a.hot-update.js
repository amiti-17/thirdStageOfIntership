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

/***/ "./components/Copyright.tsx":
/*!**********************************!*\
  !*** ./components/Copyright.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Copyright; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Copyright(props) {\n    _s();\n    const [currentUrl, setCurrentUrl] = react__WEBPACK_IMPORTED_MODULE_1__.useState(\"\");\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function() {\n        const currentUrl = window.location.href.match(/(.*?)(?=\\/?$)/);\n        const formattedCurrentUrl = Array.from(currentUrl || [\n            \"(this site)\"\n        ])[1];\n        setCurrentUrl(formattedCurrentUrl);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        variant: \"body2\",\n        color: \"text.secondary\",\n        align: \"center\",\n        ...props,\n        children: [\n            \"Copyright \\xa9 \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                href: currentUrl,\n                LinkComponent: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                sx: {\n                    textTransform: \"lowercase\",\n                    m: \"2\"\n                },\n                children: [\n                    currentUrl,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/Copyright.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            new Date().getFullYear(),\n            \".\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/Copyright.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Copyright, \"ghC5GLINE7rzlahkZLNNPqNvch0=\");\n_c = Copyright;\nvar _c;\n$RefreshReg$(_c, \"Copyright\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvcHlyaWdodC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDbUI7QUFDckI7QUFDUztBQUV2QixTQUFTSSxVQUFVQyxLQUFxQzs7SUFFckUsTUFBTSxDQUFFQyxZQUFZQyxjQUFlLEdBQUdQLDJDQUFjLENBQVM7SUFFN0RBLDRDQUFlLENBQUM7UUFDZCxNQUFNTSxhQUFhSSxPQUFPQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO1FBQzlDLE1BQU1DLHNCQUFzQkMsTUFBTUMsSUFBSSxDQUFDVixjQUFjO1lBQUM7U0FBYyxDQUFDLENBQUMsRUFBRTtRQUN4RUMsY0FBY087SUFDaEIsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNiLGdFQUFVQTtRQUFDZ0IsU0FBUTtRQUFRQyxPQUFNO1FBQWlCQyxPQUFNO1FBQVUsR0FBR2QsS0FBSzs7WUFDeEU7MEJBQ0QsOERBQUNGLGlEQUFNQTtnQkFDTFMsTUFBTU47Z0JBQ05jLGVBQWVsQixrREFBSUE7Z0JBQ25CbUIsSUFBSTtvQkFBQ0MsZUFBZTtvQkFBYUMsR0FBRTtnQkFBRzs7b0JBRXJDakI7b0JBQ0E7Ozs7Ozs7WUFFRixJQUFJa0IsT0FBT0MsV0FBVztZQUN0Qjs7Ozs7OztBQUdQO0dBekJ3QnJCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29weXJpZ2h0LnRzeD9kNTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgQnV0dG9uIH1mcm9tICdAbXVpL21hdGVyaWFsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29weXJpZ2h0KHByb3BzOiB7c3g6IHttdDogbnVtYmVyLCBtYjogbnVtYmVyfX0pIHtcblxuICBjb25zdCBbIGN1cnJlbnRVcmwsIHNldEN1cnJlbnRVcmwgXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjdXJyZW50VXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYubWF0Y2goLyguKj8pKD89XFwvPyQpLyk7XG4gICAgY29uc3QgZm9ybWF0dGVkQ3VycmVudFVybCA9IEFycmF5LmZyb20oY3VycmVudFVybCB8fCBbJyh0aGlzIHNpdGUpJ10pWzFdO1xuICAgIHNldEN1cnJlbnRVcmwoZm9ybWF0dGVkQ3VycmVudFVybCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBhbGlnbj1cImNlbnRlclwiIHsuLi5wcm9wc30+XG4gICAgICB7J0NvcHlyaWdodCDCqSAnfVxuICAgICAgPEJ1dHRvblxuICAgICAgICBocmVmPXtjdXJyZW50VXJsfVxuICAgICAgICBMaW5rQ29tcG9uZW50PXtMaW5rfVxuICAgICAgICBzeD17e3RleHRUcmFuc2Zvcm06ICdsb3dlcmNhc2UnLCBtOicyJ319XG4gICAgICA+XG4gICAgICAgIHtjdXJyZW50VXJsfVxuICAgICAgICB7JyAnfVxuICAgICAgPC9CdXR0b24+XG4gICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxuICAgICAgeycuJ31cbiAgICA8L1R5cG9ncmFwaHk+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiVHlwb2dyYXBoeSIsIkxpbmsiLCJCdXR0b24iLCJDb3B5cmlnaHQiLCJwcm9wcyIsImN1cnJlbnRVcmwiLCJzZXRDdXJyZW50VXJsIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJtYXRjaCIsImZvcm1hdHRlZEN1cnJlbnRVcmwiLCJBcnJheSIsImZyb20iLCJ2YXJpYW50IiwiY29sb3IiLCJhbGlnbiIsIkxpbmtDb21wb25lbnQiLCJzeCIsInRleHRUcmFuc2Zvcm0iLCJtIiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Copyright.tsx\n"));

/***/ })

});