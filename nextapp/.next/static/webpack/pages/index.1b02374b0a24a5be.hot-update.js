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

/***/ "./components/loginPage/Form/index.tsx":
/*!*********************************************!*\
  !*** ./components/loginPage/Form/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_RequiredTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/RequiredTextField */ \"./components/loginPage/Form/components/RequiredTextField.tsx\");\n/* harmony import */ var _components_SubmitOutlinedButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SubmitOutlinedButton */ \"./components/loginPage/Form/components/SubmitOutlinedButton.tsx\");\n/* harmony import */ var _src_functions_validations_loginInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/functions/validations/loginInput */ \"./src/functions/validations/loginInput/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! zod */ \"./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _src_Contexts_userAccessTokenContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/Contexts/userAccessTokenContext */ \"./src/Contexts/userAccessTokenContext.ts\");\n/* harmony import */ var _src_functions_getCryptPassword__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/functions/getCryptPassword */ \"./src/functions/getCryptPassword.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _Apollo_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Apollo/auth */ \"./Apollo/auth.ts\");\n/* harmony import */ var _src_CustomError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../src/CustomError */ \"./src/CustomError/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction LoginForm() {\n    _s();\n    const defaultErrorValidation = {\n        status: false,\n        message: \"\"\n    };\n    const { userAccessToken, setUserAccessToken } = react__WEBPACK_IMPORTED_MODULE_4___default().useContext(_src_Contexts_userAccessTokenContext__WEBPACK_IMPORTED_MODULE_6__.UserAccessTokenContext);\n    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);\n    const [emailValidationError, setEmailValidationError] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(defaultErrorValidation);\n    const [passwordValidationError, setPasswordValidationError] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(defaultErrorValidation);\n    const [getTokenMutation, { error, loading, data }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useMutation)(_Apollo_auth__WEBPACK_IMPORTED_MODULE_8__.auth.login);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const customError = new _src_CustomError__WEBPACK_IMPORTED_MODULE_9__[\"default\"](\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (data) {\n            var _data_login, _data;\n            console.log(data.login);\n            if ((_data = data) === null || _data === void 0 ? void 0 : (_data_login = _data.login) === null || _data_login === void 0 ? void 0 : _data_login.token) {\n                setUserAccessToken(data.login.access_token);\n                router.replace(\"/weather\");\n            } else {\n                throw new _src_CustomError__WEBPACK_IMPORTED_MODULE_9__[\"default\"](\"Access token is false.\");\n            }\n        }\n    }, [\n        loading,\n        data\n    ]);\n    const handleSubmit = (event)=>{\n        // it is here, because I don`t wanna save sensitive data...\n        event.preventDefault();\n        setIsLoading(true);\n        const formData = new FormData(event.currentTarget);\n        const myFormData = {\n            email: formData.get(\"email\"),\n            password: formData.get(\"password\")\n        };\n        try {\n            var _error, _error1, _error2;\n            const getValidatedFormData = (0,_src_functions_validations_loginInput__WEBPACK_IMPORTED_MODULE_3__.validateInputValue)(myFormData);\n            getValidatedFormData.password = (0,_src_functions_getCryptPassword__WEBPACK_IMPORTED_MODULE_7__.getCryptPassword)(getValidatedFormData.password);\n            console.log(\"sha hash: \", getValidatedFormData.password, getValidatedFormData);\n            getTokenMutation({\n                variables: {\n                    input: getValidatedFormData\n                }\n            });\n            console.log((_error = error) === null || _error === void 0 ? void 0 : _error.message, customError.unauthorized);\n            if (((_error1 = error) === null || _error1 === void 0 ? void 0 : _error1.message) === customError.unauthorized && ((_error2 = error) === null || _error2 === void 0 ? void 0 : _error2.graphQLErrors.find((el)=>el.message === customError.unauthorized))) {\n                throw new _src_CustomError__WEBPACK_IMPORTED_MODULE_9__[\"default\"](_src_CustomError__WEBPACK_IMPORTED_MODULE_9__[\"default\"].unauthorizedMsg);\n            }\n        // Object.keys(error).forEach(key => {\n        //   console.log(key, error[key])\n        // })\n        } catch (error) {\n            if (error instanceof zod__WEBPACK_IMPORTED_MODULE_11__.z.ZodError) {\n                if (error.issues[0].path[0] === \"email\") {\n                    setEmailValidationError({\n                        status: true,\n                        message: error.issues[0].message\n                    });\n                } else {\n                    setEmailValidationError(defaultErrorValidation);\n                }\n                if (error.issues[0].path[0] === \"password\") {\n                    setPasswordValidationError({\n                        status: true,\n                        message: error.issues[0].message\n                    });\n                } else {\n                    setPasswordValidationError(defaultErrorValidation);\n                }\n            } else if (error instanceof _src_CustomError__WEBPACK_IMPORTED_MODULE_9__[\"default\"]) {\n                //ToDo: make some error box, where display this error...\n                console.warn(error.message);\n            } else {\n                // console.log(\"cached in loginForm\", error.message, error.name, error);\n                // console.warn(Object.keys(error));\n                throw error;\n            }\n        } finally{\n            setIsLoading(false);\n        }\n        console.log();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {\n        component: \"form\",\n        onSubmit: async (e)=>await handleSubmit(e),\n        noValidate: true,\n        sx: {\n            mt: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequiredTextField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: \"email\",\n                label: \"Email Address\",\n                autoComplete: \"email\",\n                type: \"email\",\n                error: emailValidationError.status,\n                errorText: emailValidationError.message,\n                autoFocus: true\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequiredTextField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: \"password\",\n                label: \"Password\",\n                type: \"password\",\n                autoComplete: \"current-password\",\n                error: passwordValidationError.status,\n                errorText: passwordValidationError.message\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubmitOutlinedButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                sx: {\n                    mt: 3,\n                    mb: 2\n                },\n                isLoading: isLoading\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginForm, \"WQEFDQH2W12H6aJ2zz/lhblxthE=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_10__.useMutation,\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = LoginForm;\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7b0JBQUNDLElBQUk7b0JBQUdPLElBQUk7Z0JBQUM7Z0JBQUdyRCxXQUFXQTs7Ozs7Ozs7Ozs7O0FBRzNEO0dBakh3QlA7O1FBZTZCSCx3REFBV0E7UUFDL0NKLHNEQUFTQTs7O0tBaEJGTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xvZ2luUGFnZS9Gb3JtL2luZGV4LnRzeD82NzM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgUmVxdWlyZWRUZXh0RmllbGQgZnJvbSBcIi4vY29tcG9uZW50cy9SZXF1aXJlZFRleHRGaWVsZFwiO1xuaW1wb3J0IFN1Ym1pdE91dGxpbmVkQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvU3VibWl0T3V0bGluZWRCdXR0b25cIjtcbmltcG9ydCB7IHZhbGlkYXRlSW5wdXRWYWx1ZSB9IGZyb20gXCIuLi8uLi8uLi9zcmMvZnVuY3Rpb25zL3ZhbGlkYXRpb25zL2xvZ2luSW5wdXRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgTG9naW5UeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9jb25maWcvc3lzdGVtL3R5cGVzL2xvZ2luXCI7XG5pbXBvcnQgeyBVc2VyQWNjZXNzVG9rZW5Db250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9Db250ZXh0cy91c2VyQWNjZXNzVG9rZW5Db250ZXh0XCI7XG5pbXBvcnQgeyBnZXRDcnlwdFBhc3N3b3JkIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9mdW5jdGlvbnMvZ2V0Q3J5cHRQYXNzd29yZFwiO1xuaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5LCB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi8uLi8uLi9BcG9sbG8vYXV0aFwiO1xuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gXCIuLi8uLi8uLi9zcmMvQ3VzdG9tRXJyb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5Gb3JtKCkge1xuXG4gIHR5cGUgZXJyb3JWYWxpZGF0aW9uID0ge1xuICAgIHN0YXR1czogYm9vbGVhbiwgXG4gICAgbWVzc2FnZTogc3RyaW5nXG4gIH1cbiAgY29uc3QgZGVmYXVsdEVycm9yVmFsaWRhdGlvbiA9IHtcbiAgICBzdGF0dXM6IGZhbHNlLFxuICAgIG1lc3NhZ2U6ICcnLFxuICB9XG5cbiAgY29uc3QgeyB1c2VyQWNjZXNzVG9rZW4sIHNldFVzZXJBY2Nlc3NUb2tlbiB9ID0gUmVhY3QudXNlQ29udGV4dChVc2VyQWNjZXNzVG9rZW5Db250ZXh0KTtcbiAgY29uc3QgWyBpc0xvYWRpbmcsIHNldElzTG9hZGluZyBdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbIGVtYWlsVmFsaWRhdGlvbkVycm9yLCBzZXRFbWFpbFZhbGlkYXRpb25FcnJvciBdID0gUmVhY3QudXNlU3RhdGU8ZXJyb3JWYWxpZGF0aW9uPihkZWZhdWx0RXJyb3JWYWxpZGF0aW9uKTtcbiAgY29uc3QgWyBwYXNzd29yZFZhbGlkYXRpb25FcnJvciwgc2V0UGFzc3dvcmRWYWxpZGF0aW9uRXJyb3IgXSA9IFJlYWN0LnVzZVN0YXRlPGVycm9yVmFsaWRhdGlvbj4oZGVmYXVsdEVycm9yVmFsaWRhdGlvbik7XG4gIGNvbnN0IFtnZXRUb2tlbk11dGF0aW9uLCB7ZXJyb3IsIGxvYWRpbmcsIGRhdGF9XSA9IHVzZU11dGF0aW9uKGF1dGgubG9naW4pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgY3VzdG9tRXJyb3IgPSBuZXcgQ3VzdG9tRXJyb3IoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEubG9naW4pO1xuICAgICAgaWYgKGRhdGE/LmxvZ2luPy50b2tlbikge1xuICAgICAgICBzZXRVc2VyQWNjZXNzVG9rZW4oZGF0YS5sb2dpbi5hY2Nlc3NfdG9rZW4pO1xuICAgICAgICByb3V0ZXIucmVwbGFjZSgnL3dlYXRoZXInKTsgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0FjY2VzcyB0b2tlbiBpcyBmYWxzZS4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtsb2FkaW5nLCBkYXRhXSlcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgLy8gaXQgaXMgaGVyZSwgYmVjYXVzZSBJIGRvbmB0IHdhbm5hIHNhdmUgc2Vuc2l0aXZlIGRhdGEuLi5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zdCBteUZvcm1EYXRhID0ge1xuICAgICAgZW1haWw6IGZvcm1EYXRhLmdldCgnZW1haWwnKSxcbiAgICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGdldFZhbGlkYXRlZEZvcm1EYXRhOiBMb2dpblR5cGUgPSB2YWxpZGF0ZUlucHV0VmFsdWUobXlGb3JtRGF0YSk7XG4gICAgICBnZXRWYWxpZGF0ZWRGb3JtRGF0YS5wYXNzd29yZCA9IGdldENyeXB0UGFzc3dvcmQoZ2V0VmFsaWRhdGVkRm9ybURhdGEucGFzc3dvcmQpO1xuICAgICAgY29uc29sZS5sb2coXCJzaGEgaGFzaDogXCIsIGdldFZhbGlkYXRlZEZvcm1EYXRhLnBhc3N3b3JkLCBnZXRWYWxpZGF0ZWRGb3JtRGF0YSk7XG4gICAgICBnZXRUb2tlbk11dGF0aW9uKHtcbiAgICAgICAgdmFyaWFibGVzOiB7IGlucHV0OiBnZXRWYWxpZGF0ZWRGb3JtRGF0YSB9LFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcj8ubWVzc2FnZSwgY3VzdG9tRXJyb3IudW5hdXRob3JpemVkKVxuICAgICAgaWYgKGVycm9yPy5tZXNzYWdlID09PSBjdXN0b21FcnJvci51bmF1dGhvcml6ZWQgJiYgZXJyb3I/LmdyYXBoUUxFcnJvcnMuZmluZChlbCA9PiBlbC5tZXNzYWdlID09PSBjdXN0b21FcnJvci51bmF1dGhvcml6ZWQpKSB7XG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcihDdXN0b21FcnJvci51bmF1dGhvcml6ZWRNc2cpO1xuICAgICAgfVxuXG4gICAgICAvLyBPYmplY3Qua2V5cyhlcnJvcikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhrZXksIGVycm9yW2tleV0pXG4gICAgICAvLyB9KVxuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yLmlzc3Vlc1swXS5wYXRoWzBdID09PSAnZW1haWwnKSB7XG4gICAgICAgICAgc2V0RW1haWxWYWxpZGF0aW9uRXJyb3Ioe1xuICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IuaXNzdWVzWzBdLm1lc3NhZ2UsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRFbWFpbFZhbGlkYXRpb25FcnJvcihkZWZhdWx0RXJyb3JWYWxpZGF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IuaXNzdWVzWzBdLnBhdGhbMF0gPT09ICdwYXNzd29yZCcpIHtcbiAgICAgICAgICBzZXRQYXNzd29yZFZhbGlkYXRpb25FcnJvcih7XG4gICAgICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5pc3N1ZXNbMF0ubWVzc2FnZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFBhc3N3b3JkVmFsaWRhdGlvbkVycm9yKGRlZmF1bHRFcnJvclZhbGlkYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgQ3VzdG9tRXJyb3IpIHtcbiAgICAgICAgLy9Ub0RvOiBtYWtlIHNvbWUgZXJyb3IgYm94LCB3aGVyZSBkaXNwbGF5IHRoaXMgZXJyb3IuLi5cbiAgICAgICAgY29uc29sZS53YXJuKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjYWNoZWQgaW4gbG9naW5Gb3JtXCIsIGVycm9yLm1lc3NhZ2UsIGVycm9yLm5hbWUsIGVycm9yKTtcbiAgICAgICAgLy8gY29uc29sZS53YXJuKE9iamVjdC5rZXlzKGVycm9yKSk7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZygpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjb21wb25lbnQ9XCJmb3JtXCIgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiBhd2FpdCBoYW5kbGVTdWJtaXQoZSl9IG5vVmFsaWRhdGUgc3g9e3sgbXQ6IDEgfX0+XG4gICAgICA8UmVxdWlyZWRUZXh0RmllbGRcbiAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgZXJyb3I9e2VtYWlsVmFsaWRhdGlvbkVycm9yLnN0YXR1c31cbiAgICAgICAgZXJyb3JUZXh0PXtlbWFpbFZhbGlkYXRpb25FcnJvci5tZXNzYWdlfVxuICAgICAgICBhdXRvRm9jdXNcbiAgICAgIC8+XG4gICAgICA8UmVxdWlyZWRUZXh0RmllbGRcbiAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgZXJyb3I9e3Bhc3N3b3JkVmFsaWRhdGlvbkVycm9yLnN0YXR1c31cbiAgICAgICAgZXJyb3JUZXh0PXtwYXNzd29yZFZhbGlkYXRpb25FcnJvci5tZXNzYWdlfVxuICAgICAgLz5cblxuICAgICAgPFN1Ym1pdE91dGxpbmVkQnV0dG9uIHN4PXt7bXQ6IDMsIG1iOiAyfX0gaXNMb2FkaW5nPXtpc0xvYWRpbmd9IC8+XG4gICAgPC9Cb3g+XG4gIClcbn0iXSwibmFtZXMiOlsiQm94IiwiUmVxdWlyZWRUZXh0RmllbGQiLCJTdWJtaXRPdXRsaW5lZEJ1dHRvbiIsInZhbGlkYXRlSW5wdXRWYWx1ZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwieiIsIlVzZXJBY2Nlc3NUb2tlbkNvbnRleHQiLCJnZXRDcnlwdFBhc3N3b3JkIiwidXNlTXV0YXRpb24iLCJhdXRoIiwiQ3VzdG9tRXJyb3IiLCJMb2dpbkZvcm0iLCJkZWZhdWx0RXJyb3JWYWxpZGF0aW9uIiwic3RhdHVzIiwibWVzc2FnZSIsInVzZXJBY2Nlc3NUb2tlbiIsInNldFVzZXJBY2Nlc3NUb2tlbiIsInVzZUNvbnRleHQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsImVtYWlsVmFsaWRhdGlvbkVycm9yIiwic2V0RW1haWxWYWxpZGF0aW9uRXJyb3IiLCJwYXNzd29yZFZhbGlkYXRpb25FcnJvciIsInNldFBhc3N3b3JkVmFsaWRhdGlvbkVycm9yIiwiZ2V0VG9rZW5NdXRhdGlvbiIsImVycm9yIiwibG9hZGluZyIsImRhdGEiLCJsb2dpbiIsInJvdXRlciIsImN1c3RvbUVycm9yIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwiYWNjZXNzX3Rva2VuIiwicmVwbGFjZSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiY3VycmVudFRhcmdldCIsIm15Rm9ybURhdGEiLCJlbWFpbCIsImdldCIsInBhc3N3b3JkIiwiZ2V0VmFsaWRhdGVkRm9ybURhdGEiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsInVuYXV0aG9yaXplZCIsImdyYXBoUUxFcnJvcnMiLCJmaW5kIiwiZWwiLCJ1bmF1dGhvcml6ZWRNc2ciLCJab2RFcnJvciIsImlzc3VlcyIsInBhdGgiLCJ3YXJuIiwiY29tcG9uZW50Iiwib25TdWJtaXQiLCJlIiwibm9WYWxpZGF0ZSIsInN4IiwibXQiLCJpZCIsImxhYmVsIiwiYXV0b0NvbXBsZXRlIiwidHlwZSIsImVycm9yVGV4dCIsImF1dG9Gb2N1cyIsIm1iIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/loginPage/Form/index.tsx\n"));

/***/ })

});