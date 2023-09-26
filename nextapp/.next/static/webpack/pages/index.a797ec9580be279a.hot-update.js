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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_RequiredTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/RequiredTextField */ \"./components/loginPage/Form/components/RequiredTextField.tsx\");\n/* harmony import */ var _components_SubmitOutlinedButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SubmitOutlinedButton */ \"./components/loginPage/Form/components/SubmitOutlinedButton.tsx\");\n/* harmony import */ var _src_functions_validations_loginInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/functions/validations/loginInput */ \"./src/functions/validations/loginInput/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! zod */ \"./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _src_Contexts_userAccessTokenContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/Contexts/userAccessTokenContext */ \"./src/Contexts/userAccessTokenContext.ts\");\n/* harmony import */ var _src_CustomError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/CustomError */ \"./src/CustomError/index.ts\");\n/* harmony import */ var _src_functions_getCryptPassword__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/functions/getCryptPassword */ \"./src/functions/getCryptPassword.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _Apollo_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Apollo/auth */ \"./Apollo/auth.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n// import { useQuery } from \"@apollo/client\";\n// import { auth } from \"../../../Apollo/auth\";\nfunction LoginForm() {\n    _s();\n    const defaultErrorValidation = {\n        status: false,\n        message: \"\"\n    };\n    const { userAccessToken, setUserAccessToken } = react__WEBPACK_IMPORTED_MODULE_4___default().useContext(_src_Contexts_userAccessTokenContext__WEBPACK_IMPORTED_MODULE_6__.UserAccessTokenContext);\n    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);\n    const [emailValidationError, setEmailValidationError] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(defaultErrorValidation);\n    const [passwordValidationError, setPasswordValidationError] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(defaultErrorValidation);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [getToken, { error, loading, data }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useLazyQuery)(_Apollo_auth__WEBPACK_IMPORTED_MODULE_9__.auth.login);\n    if (error) {\n        console.log(\"useLogin error: \", error);\n    }\n    const handleSubmit = async (event)=>{\n        // it is here, because I don`t wanna save sensitive data...\n        event.preventDefault();\n        setIsLoading(true);\n        const formData = new FormData(event.currentTarget);\n        const myFormData = {\n            email: formData.get(\"email\"),\n            password: formData.get(\"password\")\n        };\n        try {\n            var _data, _data1;\n            const getValidatedFormData = (0,_src_functions_validations_loginInput__WEBPACK_IMPORTED_MODULE_3__.validateInputValue)(myFormData);\n            getValidatedFormData.password = (0,_src_functions_getCryptPassword__WEBPACK_IMPORTED_MODULE_8__.getCryptPassword)(getValidatedFormData.password);\n            console.log(\"sha hash: \", getValidatedFormData.password);\n            await getToken({\n                variables: getValidatedFormData,\n                pollInterval: 5000\n            });\n            setUserAccessToken((_data = data) === null || _data === void 0 ? void 0 : _data.token);\n            console.log({\n                userAccessToken\n            });\n            if ((_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.token) {\n                router.replace(\"/weather\");\n            } else {\n                console.log({\n                    data\n                });\n                throw new _src_CustomError__WEBPACK_IMPORTED_MODULE_7__[\"default\"](\"Access token is false.\");\n            }\n        } catch (error) {\n            if (error instanceof zod__WEBPACK_IMPORTED_MODULE_11__.z.ZodError) {\n                if (error.issues[0].path[0] === \"email\") {\n                    setEmailValidationError({\n                        status: true,\n                        message: error.issues[0].message\n                    });\n                } else {\n                    setEmailValidationError(defaultErrorValidation);\n                }\n                if (error.issues[0].path[0] === \"password\") {\n                    setPasswordValidationError({\n                        status: true,\n                        message: error.issues[0].message\n                    });\n                } else {\n                    setPasswordValidationError(defaultErrorValidation);\n                }\n            } else if (error instanceof _src_CustomError__WEBPACK_IMPORTED_MODULE_7__[\"default\"]) {\n                //ToDo: make some error box, where display this error...\n                console.log(error.message);\n            } else {\n                // console.log(\"cached in loginForm\", error.message, error.name, error);\n                // console.warn(Object.keys(error));\n                throw error;\n            }\n        } finally{\n            setIsLoading(false);\n        }\n        console.log();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {\n        component: \"form\",\n        onSubmit: async (e)=>await handleSubmit(e),\n        noValidate: true,\n        sx: {\n            mt: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequiredTextField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: \"email\",\n                label: \"Email Address\",\n                autoComplete: \"email\",\n                type: \"email\",\n                error: emailValidationError.status,\n                errorText: emailValidationError.message,\n                autoFocus: true\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequiredTextField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: \"password\",\n                label: \"Password\",\n                type: \"password\",\n                autoComplete: \"current-password\",\n                error: passwordValidationError.status,\n                errorText: passwordValidationError.message\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubmitOutlinedButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                sx: {\n                    mt: 3,\n                    mb: 2\n                },\n                isLoading: isLoading\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginForm, \"DWcd2efvKTqx0qXOBH53Yy48Ads=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_10__.useLazyQuery\n    ];\n});\n_c = LoginForm;\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPO1lBQzNCLE9BQU87Z0JBQ0wsd0VBQXdFO2dCQUN4RSxvQ0FBb0M7Z0JBQ3BDLE1BQU1hO1lBQ1I7UUFDRixTQUFVO1lBQ1JSLGFBQWE7UUFDZjtRQUVBWSxRQUFRQyxHQUFHO0lBQ2I7SUFFQSxxQkFDRSw4REFBQ2pDLCtDQUFHQTtRQUFDb0QsV0FBVTtRQUFPQyxVQUFVLE9BQU9DLElBQU0sTUFBTXBCLGFBQWFvQjtRQUFJQyxVQUFVO1FBQUNDLElBQUk7WUFBRUMsSUFBSTtRQUFFOzswQkFDekYsOERBQUN4RCxxRUFBaUJBO2dCQUNoQnlELElBQUc7Z0JBQ0hDLE9BQU07Z0JBQ05DLGNBQWE7Z0JBQ2JDLE1BQUs7Z0JBQ0xqQyxPQUFPTixxQkFBcUJSLE1BQU07Z0JBQ2xDZ0QsV0FBV3hDLHFCQUFxQlAsT0FBTztnQkFDdkNnRCxTQUFTOzs7Ozs7MEJBRVgsOERBQUM5RCxxRUFBaUJBO2dCQUNoQnlELElBQUc7Z0JBQ0hDLE9BQU07Z0JBQ05FLE1BQUs7Z0JBQ0xELGNBQWE7Z0JBQ2JoQyxPQUFPSix3QkFBd0JWLE1BQU07Z0JBQ3JDZ0QsV0FBV3RDLHdCQUF3QlQsT0FBTzs7Ozs7OzBCQUc1Qyw4REFBQ2Isd0VBQW9CQTtnQkFBQ3NELElBQUk7b0JBQUNDLElBQUk7b0JBQUdPLElBQUk7Z0JBQUM7Z0JBQUc3QyxXQUFXQTs7Ozs7Ozs7Ozs7O0FBRzNEO0dBckh3QlA7O1FBNEJQUCxzREFBU0E7UUFDbUJLLHlEQUFZQTs7O0tBN0JqQ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpblBhZ2UvRm9ybS9pbmRleC50c3g/NjczNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFJlcXVpcmVkVGV4dEZpZWxkIGZyb20gXCIuL2NvbXBvbmVudHMvUmVxdWlyZWRUZXh0RmllbGRcIjtcbmltcG9ydCBTdWJtaXRPdXRsaW5lZEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL1N1Ym1pdE91dGxpbmVkQnV0dG9uXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUlucHV0VmFsdWUgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2Z1bmN0aW9ucy92YWxpZGF0aW9ucy9sb2dpbklucHV0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcbmltcG9ydCB7IExvZ2luVHlwZSB9IGZyb20gXCIuLi8uLi8uLi9zcmMvY29uZmlnL3N5c3RlbS90eXBlcy9sb2dpblwiO1xuaW1wb3J0IHsgVXNlckFjY2Vzc1Rva2VuQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9zcmMvQ29udGV4dHMvdXNlckFjY2Vzc1Rva2VuQ29udGV4dFwiO1xuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gXCIuLi8uLi8uLi9zcmMvQ3VzdG9tRXJyb3JcIjtcbmltcG9ydCB7IGdldENyeXB0UGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2Z1bmN0aW9ucy9nZXRDcnlwdFBhc3N3b3JkXCI7XG5pbXBvcnQgeyB1c2VMb2dpbiB9IGZyb20gXCIuLi8uLi8uLi9zcmMvZnVuY3Rpb25zL2F1dGhcIjtcbmltcG9ydCB7IHVzZUxhenlRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi8uLi8uLi9BcG9sbG8vYXV0aFwiO1xuLy8gaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbi8vIGltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vLi4vLi4vQXBvbGxvL2F1dGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5Gb3JtKCkge1xuXG4gIC8vIGFzeW5jIGZ1bmN0aW9uIHVzZUxvZ2luKGxvZ2luRGF0YTogTG9naW5UeXBlKSB7XG4gIC8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB1c2VRdWVyeShhdXRoLmxvZ2luLCB7XG4gIC8vICAgICB2YXJpYWJsZXM6IGxvZ2luRGF0YSxcbiAgLy8gICAgIHBvbGxJbnRlcnZhbDogNTAwMCxcbiAgLy8gICB9KVxuICBcbiAgLy8gICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwidXNlTG9naW4gZXJyb3I6IFwiLCByZXNwb25zZS5lcnJvcilcbiAgLy8gICB9XG4gIFxuICAvLyAgIHJldHVybiByZXNwb25zZTtcbiAgLy8gfVxuXG4gIHR5cGUgZXJyb3JWYWxpZGF0aW9uID0ge1xuICAgIHN0YXR1czogYm9vbGVhbiwgXG4gICAgbWVzc2FnZTogc3RyaW5nXG4gIH1cbiAgY29uc3QgZGVmYXVsdEVycm9yVmFsaWRhdGlvbiA9IHtcbiAgICBzdGF0dXM6IGZhbHNlLFxuICAgIG1lc3NhZ2U6ICcnLFxuICB9XG5cbiAgY29uc3QgeyB1c2VyQWNjZXNzVG9rZW4sIHNldFVzZXJBY2Nlc3NUb2tlbiB9ID0gUmVhY3QudXNlQ29udGV4dChVc2VyQWNjZXNzVG9rZW5Db250ZXh0KTtcbiAgY29uc3QgWyBpc0xvYWRpbmcsIHNldElzTG9hZGluZyBdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbIGVtYWlsVmFsaWRhdGlvbkVycm9yLCBzZXRFbWFpbFZhbGlkYXRpb25FcnJvciBdID0gUmVhY3QudXNlU3RhdGU8ZXJyb3JWYWxpZGF0aW9uPihkZWZhdWx0RXJyb3JWYWxpZGF0aW9uKTtcbiAgY29uc3QgWyBwYXNzd29yZFZhbGlkYXRpb25FcnJvciwgc2V0UGFzc3dvcmRWYWxpZGF0aW9uRXJyb3IgXSA9IFJlYWN0LnVzZVN0YXRlPGVycm9yVmFsaWRhdGlvbj4oZGVmYXVsdEVycm9yVmFsaWRhdGlvbik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbZ2V0VG9rZW4sIHtlcnJvciwgbG9hZGluZywgZGF0YX1dID0gdXNlTGF6eVF1ZXJ5KGF1dGgubG9naW4pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwidXNlTG9naW4gZXJyb3I6IFwiLCBlcnJvcik7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgLy8gaXQgaXMgaGVyZSwgYmVjYXVzZSBJIGRvbmB0IHdhbm5hIHNhdmUgc2Vuc2l0aXZlIGRhdGEuLi5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zdCBteUZvcm1EYXRhID0ge1xuICAgICAgZW1haWw6IGZvcm1EYXRhLmdldCgnZW1haWwnKSxcbiAgICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGdldFZhbGlkYXRlZEZvcm1EYXRhOiBMb2dpblR5cGUgPSB2YWxpZGF0ZUlucHV0VmFsdWUobXlGb3JtRGF0YSk7XG4gICAgICBnZXRWYWxpZGF0ZWRGb3JtRGF0YS5wYXNzd29yZCA9IGdldENyeXB0UGFzc3dvcmQoZ2V0VmFsaWRhdGVkRm9ybURhdGEucGFzc3dvcmQpO1xuICAgICAgY29uc29sZS5sb2coXCJzaGEgaGFzaDogXCIsIGdldFZhbGlkYXRlZEZvcm1EYXRhLnBhc3N3b3JkKTtcbiAgICAgIGF3YWl0IGdldFRva2VuKHtcbiAgICAgICAgdmFyaWFibGVzOiBnZXRWYWxpZGF0ZWRGb3JtRGF0YSxcbiAgICAgICAgcG9sbEludGVydmFsOiA1MDAwLFxuICAgICAgfSk7XG4gICAgICBzZXRVc2VyQWNjZXNzVG9rZW4oZGF0YT8udG9rZW4pO1xuICAgICAgY29uc29sZS5sb2coe3VzZXJBY2Nlc3NUb2tlbn0pO1xuICAgICAgaWYgKGRhdGE/LnRva2VuKSB7XG4gICAgICAgIHJvdXRlci5yZXBsYWNlKCcvd2VhdGhlcicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coe2RhdGF9KVxuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0FjY2VzcyB0b2tlbiBpcyBmYWxzZS4nKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2Ygei5ab2RFcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IuaXNzdWVzWzBdLnBhdGhbMF0gPT09ICdlbWFpbCcpIHtcbiAgICAgICAgICBzZXRFbWFpbFZhbGlkYXRpb25FcnJvcih7XG4gICAgICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5pc3N1ZXNbMF0ubWVzc2FnZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEVtYWlsVmFsaWRhdGlvbkVycm9yKGRlZmF1bHRFcnJvclZhbGlkYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvci5pc3N1ZXNbMF0ucGF0aFswXSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgICAgIHNldFBhc3N3b3JkVmFsaWRhdGlvbkVycm9yKHtcbiAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLmlzc3Vlc1swXS5tZXNzYWdlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0UGFzc3dvcmRWYWxpZGF0aW9uRXJyb3IoZGVmYXVsdEVycm9yVmFsaWRhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBDdXN0b21FcnJvcikge1xuICAgICAgICAvL1RvRG86IG1ha2Ugc29tZSBlcnJvciBib3gsIHdoZXJlIGRpc3BsYXkgdGhpcyBlcnJvci4uLlxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2FjaGVkIGluIGxvZ2luRm9ybVwiLCBlcnJvci5tZXNzYWdlLCBlcnJvci5uYW1lLCBlcnJvcik7XG4gICAgICAgIC8vIGNvbnNvbGUud2FybihPYmplY3Qua2V5cyhlcnJvcikpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gICAgXG4gICAgY29uc29sZS5sb2coKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY29tcG9uZW50PVwiZm9ybVwiIG9uU3VibWl0PXthc3luYyAoZSkgPT4gYXdhaXQgaGFuZGxlU3VibWl0KGUpfSBub1ZhbGlkYXRlIHN4PXt7IG10OiAxIH19PlxuICAgICAgPFJlcXVpcmVkVGV4dEZpZWxkXG4gICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgIGVycm9yPXtlbWFpbFZhbGlkYXRpb25FcnJvci5zdGF0dXN9XG4gICAgICAgIGVycm9yVGV4dD17ZW1haWxWYWxpZGF0aW9uRXJyb3IubWVzc2FnZX1cbiAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAvPlxuICAgICAgPFJlcXVpcmVkVGV4dEZpZWxkXG4gICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgIGVycm9yPXtwYXNzd29yZFZhbGlkYXRpb25FcnJvci5zdGF0dXN9XG4gICAgICAgIGVycm9yVGV4dD17cGFzc3dvcmRWYWxpZGF0aW9uRXJyb3IubWVzc2FnZX1cbiAgICAgIC8+XG5cbiAgICAgIDxTdWJtaXRPdXRsaW5lZEJ1dHRvbiBzeD17e210OiAzLCBtYjogMn19IGlzTG9hZGluZz17aXNMb2FkaW5nfSAvPlxuICAgIDwvQm94PlxuICApXG59Il0sIm5hbWVzIjpbIkJveCIsIlJlcXVpcmVkVGV4dEZpZWxkIiwiU3VibWl0T3V0bGluZWRCdXR0b24iLCJ2YWxpZGF0ZUlucHV0VmFsdWUiLCJSZWFjdCIsInVzZVJvdXRlciIsInoiLCJVc2VyQWNjZXNzVG9rZW5Db250ZXh0IiwiQ3VzdG9tRXJyb3IiLCJnZXRDcnlwdFBhc3N3b3JkIiwidXNlTGF6eVF1ZXJ5IiwiYXV0aCIsIkxvZ2luRm9ybSIsImRlZmF1bHRFcnJvclZhbGlkYXRpb24iLCJzdGF0dXMiLCJtZXNzYWdlIiwidXNlckFjY2Vzc1Rva2VuIiwic2V0VXNlckFjY2Vzc1Rva2VuIiwidXNlQ29udGV4dCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZVN0YXRlIiwiZW1haWxWYWxpZGF0aW9uRXJyb3IiLCJzZXRFbWFpbFZhbGlkYXRpb25FcnJvciIsInBhc3N3b3JkVmFsaWRhdGlvbkVycm9yIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uRXJyb3IiLCJyb3V0ZXIiLCJnZXRUb2tlbiIsImVycm9yIiwibG9hZGluZyIsImRhdGEiLCJsb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImN1cnJlbnRUYXJnZXQiLCJteUZvcm1EYXRhIiwiZW1haWwiLCJnZXQiLCJwYXNzd29yZCIsImdldFZhbGlkYXRlZEZvcm1EYXRhIiwidmFyaWFibGVzIiwicG9sbEludGVydmFsIiwidG9rZW4iLCJyZXBsYWNlIiwiWm9kRXJyb3IiLCJpc3N1ZXMiLCJwYXRoIiwiY29tcG9uZW50Iiwib25TdWJtaXQiLCJlIiwibm9WYWxpZGF0ZSIsInN4IiwibXQiLCJpZCIsImxhYmVsIiwiYXV0b0NvbXBsZXRlIiwidHlwZSIsImVycm9yVGV4dCIsImF1dG9Gb2N1cyIsIm1iIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/loginPage/Form/index.tsx\n"));

/***/ })

});