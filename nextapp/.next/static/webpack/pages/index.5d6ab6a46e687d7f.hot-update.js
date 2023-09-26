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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_RequiredTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/RequiredTextField */ \"./components/loginPage/Form/components/RequiredTextField.tsx\");\n/* harmony import */ var _components_SubmitOutlinedButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SubmitOutlinedButton */ \"./components/loginPage/Form/components/SubmitOutlinedButton.tsx\");\n/* harmony import */ var _src_functions_validations_loginInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/functions/validations/loginInput */ \"./src/functions/validations/loginInput/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! zod */ \"./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _src_Contexts_userAccessTokenContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/Contexts/userAccessTokenContext */ \"./src/Contexts/userAccessTokenContext.ts\");\n/* harmony import */ var _src_functions_getCryptPassword__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/functions/getCryptPassword */ \"./src/functions/getCryptPassword.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _Apollo_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Apollo/auth */ \"./Apollo/auth.ts\");\n/* harmony import */ var _src_CustomError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../src/CustomError */ \"./src/CustomError/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n// import { useQuery } from \"@apollo/client\";\n// import { auth } from \"../../../Apollo/auth\";\nfunction LoginForm() {\n    _s();\n    const defaultErrorValidation = {\n        status: false,\n        message: \"\"\n    };\n    const { userAccessToken, setUserAccessToken } = react__WEBPACK_IMPORTED_MODULE_4___default().useContext(_src_Contexts_userAccessTokenContext__WEBPACK_IMPORTED_MODULE_6__.UserAccessTokenContext);\n    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);\n    const [emailValidationError, setEmailValidationError] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(defaultErrorValidation);\n    const [passwordValidationError, setPasswordValidationError] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(defaultErrorValidation);\n    const [getToken, { error, loading, data }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useLazyQuery)(_Apollo_auth__WEBPACK_IMPORTED_MODULE_8__.auth.login);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const customError = new _src_CustomError__WEBPACK_IMPORTED_MODULE_9__[\"default\"](\"\");\n    // if (error) return `Error! ${error}`;\n    // if (loading) return `Loading ...`;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (data) {\n            var _data_login, _data;\n            console.log(data.login);\n            if ((_data = data) === null || _data === void 0 ? void 0 : (_data_login = _data.login) === null || _data_login === void 0 ? void 0 : _data_login.token) {\n                setUserAccessToken(data.login.token);\n                router.replace(\"/weather\");\n            } else {\n                throw new _src_CustomError__WEBPACK_IMPORTED_MODULE_9__[\"default\"](\"Access token is false.\");\n            }\n        }\n    }, [\n        loading,\n        data\n    ]);\n    // if (error) {\n    //   console.log(\"useLogin error: \", error);\n    // }\n    const handleSubmit = (event)=>{\n        // it is here, because I don`t wanna save sensitive data...\n        event.preventDefault();\n        setIsLoading(true);\n        const formData = new FormData(event.currentTarget);\n        const myFormData = {\n            email: formData.get(\"email\"),\n            password: formData.get(\"password\")\n        };\n        try {\n            const getValidatedFormData = (0,_src_functions_validations_loginInput__WEBPACK_IMPORTED_MODULE_3__.validateInputValue)(myFormData);\n            getValidatedFormData.password = (0,_src_functions_getCryptPassword__WEBPACK_IMPORTED_MODULE_7__.getCryptPassword)(getValidatedFormData.password);\n            console.log(\"sha hash: \", getValidatedFormData.password);\n            getToken({\n                variables: {\n                    authLoginInput: getValidatedFormData\n                }\n            });\n            console.log(error.message, customError.unauthorized);\n            if (error.message === customError.unauthorized && error.graphQLErrors.find((el)=>el.message === customError.unauthorized)) {\n                throw new _src_CustomError__WEBPACK_IMPORTED_MODULE_9__[\"default\"](_src_CustomError__WEBPACK_IMPORTED_MODULE_9__[\"default\"].unauthorizedMsg);\n            }\n        // Object.keys(error).forEach(key => {\n        //   console.log(key, error[key])\n        // })\n        } catch (error) {\n            if (error instanceof zod__WEBPACK_IMPORTED_MODULE_11__.z.ZodError) {\n                if (error.issues[0].path[0] === \"email\") {\n                    setEmailValidationError({\n                        status: true,\n                        message: error.issues[0].message\n                    });\n                } else {\n                    setEmailValidationError(defaultErrorValidation);\n                }\n                if (error.issues[0].path[0] === \"password\") {\n                    setPasswordValidationError({\n                        status: true,\n                        message: error.issues[0].message\n                    });\n                } else {\n                    setPasswordValidationError(defaultErrorValidation);\n                }\n            } else if (error instanceof _src_CustomError__WEBPACK_IMPORTED_MODULE_9__[\"default\"]) {\n                //ToDo: make some error box, where display this error...\n                console.warning(error.message);\n            } else {\n                // console.log(\"cached in loginForm\", error.message, error.name, error);\n                // console.warn(Object.keys(error));\n                throw error;\n            }\n        } finally{\n            setIsLoading(false);\n        }\n        console.log();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {\n        component: \"form\",\n        onSubmit: async (e)=>await handleSubmit(e),\n        noValidate: true,\n        sx: {\n            mt: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequiredTextField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: \"email\",\n                label: \"Email Address\",\n                autoComplete: \"email\",\n                type: \"email\",\n                error: emailValidationError.status,\n                errorText: emailValidationError.message,\n                autoFocus: true\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequiredTextField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: \"password\",\n                label: \"Password\",\n                type: \"password\",\n                autoComplete: \"current-password\",\n                error: passwordValidationError.status,\n                errorText: passwordValidationError.message\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubmitOutlinedButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                sx: {\n                    mt: 3,\n                    mb: 2\n                },\n                isLoading: isLoading\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n                lineNumber: 148,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n        lineNumber: 129,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginForm, \"lRcgVpsRuckz6ApH//JwHC5993U=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_10__.useLazyQuery,\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = LoginForm;\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJO29CQUFHTyxJQUFJO2dCQUFDO2dCQUFHcEQsV0FBV0E7Ozs7Ozs7Ozs7OztBQUczRDtHQXRJd0JQOztRQTRCcUJILHlEQUFZQTtRQUN4Q0osc0RBQVNBOzs7S0E3QkZPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbG9naW5QYWdlL0Zvcm0vaW5kZXgudHN4PzY3MzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBSZXF1aXJlZFRleHRGaWVsZCBmcm9tIFwiLi9jb21wb25lbnRzL1JlcXVpcmVkVGV4dEZpZWxkXCI7XG5pbXBvcnQgU3VibWl0T3V0bGluZWRCdXR0b24gZnJvbSBcIi4vY29tcG9uZW50cy9TdWJtaXRPdXRsaW5lZEJ1dHRvblwiO1xuaW1wb3J0IHsgdmFsaWRhdGVJbnB1dFZhbHVlIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9mdW5jdGlvbnMvdmFsaWRhdGlvbnMvbG9naW5JbnB1dFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgeyBMb2dpblR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2NvbmZpZy9zeXN0ZW0vdHlwZXMvbG9naW5cIjtcbmltcG9ydCB7IFVzZXJBY2Nlc3NUb2tlbkNvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL0NvbnRleHRzL3VzZXJBY2Nlc3NUb2tlbkNvbnRleHRcIjtcbmltcG9ydCB7IGdldENyeXB0UGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2Z1bmN0aW9ucy9nZXRDcnlwdFBhc3N3b3JkXCI7XG5pbXBvcnQgeyB1c2VMYXp5UXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vLi4vLi4vQXBvbGxvL2F1dGhcIjtcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tIFwiLi4vLi4vLi4vc3JjL0N1c3RvbUVycm9yXCI7XG4vLyBpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuLy8gaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi8uLi8uLi9BcG9sbG8vYXV0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkZvcm0oKSB7XG5cbiAgLy8gYXN5bmMgZnVuY3Rpb24gdXNlTG9naW4obG9naW5EYXRhOiBMb2dpblR5cGUpIHtcbiAgLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHVzZVF1ZXJ5KGF1dGgubG9naW4sIHtcbiAgLy8gICAgIHZhcmlhYmxlczogbG9naW5EYXRhLFxuICAvLyAgICAgcG9sbEludGVydmFsOiA1MDAwLFxuICAvLyAgIH0pXG4gIFxuICAvLyAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAvLyAgICAgY29uc29sZS5sb2coXCJ1c2VMb2dpbiBlcnJvcjogXCIsIHJlc3BvbnNlLmVycm9yKVxuICAvLyAgIH1cbiAgXG4gIC8vICAgcmV0dXJuIHJlc3BvbnNlO1xuICAvLyB9XG5cbiAgdHlwZSBlcnJvclZhbGlkYXRpb24gPSB7XG4gICAgc3RhdHVzOiBib29sZWFuLCBcbiAgICBtZXNzYWdlOiBzdHJpbmdcbiAgfVxuICBjb25zdCBkZWZhdWx0RXJyb3JWYWxpZGF0aW9uID0ge1xuICAgIHN0YXR1czogZmFsc2UsXG4gICAgbWVzc2FnZTogJycsXG4gIH1cblxuICBjb25zdCB7IHVzZXJBY2Nlc3NUb2tlbiwgc2V0VXNlckFjY2Vzc1Rva2VuIH0gPSBSZWFjdC51c2VDb250ZXh0KFVzZXJBY2Nlc3NUb2tlbkNvbnRleHQpO1xuICBjb25zdCBbIGlzTG9hZGluZywgc2V0SXNMb2FkaW5nIF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFsgZW1haWxWYWxpZGF0aW9uRXJyb3IsIHNldEVtYWlsVmFsaWRhdGlvbkVycm9yIF0gPSBSZWFjdC51c2VTdGF0ZTxlcnJvclZhbGlkYXRpb24+KGRlZmF1bHRFcnJvclZhbGlkYXRpb24pO1xuICBjb25zdCBbIHBhc3N3b3JkVmFsaWRhdGlvbkVycm9yLCBzZXRQYXNzd29yZFZhbGlkYXRpb25FcnJvciBdID0gUmVhY3QudXNlU3RhdGU8ZXJyb3JWYWxpZGF0aW9uPihkZWZhdWx0RXJyb3JWYWxpZGF0aW9uKTtcbiAgY29uc3QgW2dldFRva2VuLCB7ZXJyb3IsIGxvYWRpbmcsIGRhdGF9XSA9IHVzZUxhenlRdWVyeShhdXRoLmxvZ2luKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGN1c3RvbUVycm9yID0gbmV3IEN1c3RvbUVycm9yKCcnKTtcblxuICAvLyBpZiAoZXJyb3IpIHJldHVybiBgRXJyb3IhICR7ZXJyb3J9YDtcbiAgLy8gaWYgKGxvYWRpbmcpIHJldHVybiBgTG9hZGluZyAuLi5gO1xuICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmxvZ2luKTtcbiAgICAgIGlmIChkYXRhPy5sb2dpbj8udG9rZW4pIHtcbiAgICAgICAgc2V0VXNlckFjY2Vzc1Rva2VuKGRhdGEubG9naW4udG9rZW4pO1xuICAgICAgICByb3V0ZXIucmVwbGFjZSgnL3dlYXRoZXInKTsgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoJ0FjY2VzcyB0b2tlbiBpcyBmYWxzZS4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtsb2FkaW5nLCBkYXRhXSlcblxuICAvLyBpZiAoZXJyb3IpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhcInVzZUxvZ2luIGVycm9yOiBcIiwgZXJyb3IpO1xuICAvLyB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIC8vIGl0IGlzIGhlcmUsIGJlY2F1c2UgSSBkb25gdCB3YW5uYSBzYXZlIHNlbnNpdGl2ZSBkYXRhLi4uXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgY29uc3QgbXlGb3JtRGF0YSA9IHtcbiAgICAgIGVtYWlsOiBmb3JtRGF0YS5nZXQoJ2VtYWlsJyksXG4gICAgICBwYXNzd29yZDogZm9ybURhdGEuZ2V0KCdwYXNzd29yZCcpLFxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBnZXRWYWxpZGF0ZWRGb3JtRGF0YTogTG9naW5UeXBlID0gdmFsaWRhdGVJbnB1dFZhbHVlKG15Rm9ybURhdGEpO1xuICAgICAgZ2V0VmFsaWRhdGVkRm9ybURhdGEucGFzc3dvcmQgPSBnZXRDcnlwdFBhc3N3b3JkKGdldFZhbGlkYXRlZEZvcm1EYXRhLnBhc3N3b3JkKTtcbiAgICAgIGNvbnNvbGUubG9nKFwic2hhIGhhc2g6IFwiLCBnZXRWYWxpZGF0ZWRGb3JtRGF0YS5wYXNzd29yZCk7XG4gICAgICBnZXRUb2tlbih7XG4gICAgICAgIHZhcmlhYmxlczoge2F1dGhMb2dpbklucHV0OiBnZXRWYWxpZGF0ZWRGb3JtRGF0YX0sXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UsIGN1c3RvbUVycm9yLnVuYXV0aG9yaXplZClcbiAgICAgIGlmIChlcnJvci5tZXNzYWdlID09PSBjdXN0b21FcnJvci51bmF1dGhvcml6ZWQgJiYgZXJyb3IuZ3JhcGhRTEVycm9ycy5maW5kKGVsID0+IGVsLm1lc3NhZ2UgPT09IGN1c3RvbUVycm9yLnVuYXV0aG9yaXplZCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKEN1c3RvbUVycm9yLnVuYXV0aG9yaXplZE1zZyk7XG4gICAgICB9XG5cbiAgICAgIC8vIE9iamVjdC5rZXlzKGVycm9yKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGtleSwgZXJyb3Jba2V5XSlcbiAgICAgIC8vIH0pXG4gICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2Ygei5ab2RFcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IuaXNzdWVzWzBdLnBhdGhbMF0gPT09ICdlbWFpbCcpIHtcbiAgICAgICAgICBzZXRFbWFpbFZhbGlkYXRpb25FcnJvcih7XG4gICAgICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5pc3N1ZXNbMF0ubWVzc2FnZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEVtYWlsVmFsaWRhdGlvbkVycm9yKGRlZmF1bHRFcnJvclZhbGlkYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvci5pc3N1ZXNbMF0ucGF0aFswXSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgICAgIHNldFBhc3N3b3JkVmFsaWRhdGlvbkVycm9yKHtcbiAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLmlzc3Vlc1swXS5tZXNzYWdlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0UGFzc3dvcmRWYWxpZGF0aW9uRXJyb3IoZGVmYXVsdEVycm9yVmFsaWRhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBDdXN0b21FcnJvcikge1xuICAgICAgICAvL1RvRG86IG1ha2Ugc29tZSBlcnJvciBib3gsIHdoZXJlIGRpc3BsYXkgdGhpcyBlcnJvci4uLlxuICAgICAgICBjb25zb2xlLndhcm5pbmcoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNhY2hlZCBpbiBsb2dpbkZvcm1cIiwgZXJyb3IubWVzc2FnZSwgZXJyb3IubmFtZSwgZXJyb3IpO1xuICAgICAgICAvLyBjb25zb2xlLndhcm4oT2JqZWN0LmtleXMoZXJyb3IpKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNvbXBvbmVudD1cImZvcm1cIiBvblN1Ym1pdD17YXN5bmMgKGUpID0+IGF3YWl0IGhhbmRsZVN1Ym1pdChlKX0gbm9WYWxpZGF0ZSBzeD17eyBtdDogMSB9fT5cbiAgICAgIDxSZXF1aXJlZFRleHRGaWVsZFxuICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICBlcnJvcj17ZW1haWxWYWxpZGF0aW9uRXJyb3Iuc3RhdHVzfVxuICAgICAgICBlcnJvclRleHQ9e2VtYWlsVmFsaWRhdGlvbkVycm9yLm1lc3NhZ2V9XG4gICAgICAgIGF1dG9Gb2N1c1xuICAgICAgLz5cbiAgICAgIDxSZXF1aXJlZFRleHRGaWVsZFxuICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICBlcnJvcj17cGFzc3dvcmRWYWxpZGF0aW9uRXJyb3Iuc3RhdHVzfVxuICAgICAgICBlcnJvclRleHQ9e3Bhc3N3b3JkVmFsaWRhdGlvbkVycm9yLm1lc3NhZ2V9XG4gICAgICAvPlxuXG4gICAgICA8U3VibWl0T3V0bGluZWRCdXR0b24gc3g9e3ttdDogMywgbWI6IDJ9fSBpc0xvYWRpbmc9e2lzTG9hZGluZ30gLz5cbiAgICA8L0JveD5cbiAgKVxufSJdLCJuYW1lcyI6WyJCb3giLCJSZXF1aXJlZFRleHRGaWVsZCIsIlN1Ym1pdE91dGxpbmVkQnV0dG9uIiwidmFsaWRhdGVJbnB1dFZhbHVlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJ6IiwiVXNlckFjY2Vzc1Rva2VuQ29udGV4dCIsImdldENyeXB0UGFzc3dvcmQiLCJ1c2VMYXp5UXVlcnkiLCJhdXRoIiwiQ3VzdG9tRXJyb3IiLCJMb2dpbkZvcm0iLCJkZWZhdWx0RXJyb3JWYWxpZGF0aW9uIiwic3RhdHVzIiwibWVzc2FnZSIsInVzZXJBY2Nlc3NUb2tlbiIsInNldFVzZXJBY2Nlc3NUb2tlbiIsInVzZUNvbnRleHQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsImVtYWlsVmFsaWRhdGlvbkVycm9yIiwic2V0RW1haWxWYWxpZGF0aW9uRXJyb3IiLCJwYXNzd29yZFZhbGlkYXRpb25FcnJvciIsInNldFBhc3N3b3JkVmFsaWRhdGlvbkVycm9yIiwiZ2V0VG9rZW4iLCJlcnJvciIsImxvYWRpbmciLCJkYXRhIiwibG9naW4iLCJyb3V0ZXIiLCJjdXN0b21FcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsInJlcGxhY2UiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImN1cnJlbnRUYXJnZXQiLCJteUZvcm1EYXRhIiwiZW1haWwiLCJnZXQiLCJwYXNzd29yZCIsImdldFZhbGlkYXRlZEZvcm1EYXRhIiwidmFyaWFibGVzIiwiYXV0aExvZ2luSW5wdXQiLCJ1bmF1dGhvcml6ZWQiLCJncmFwaFFMRXJyb3JzIiwiZmluZCIsImVsIiwidW5hdXRob3JpemVkTXNnIiwiWm9kRXJyb3IiLCJpc3N1ZXMiLCJwYXRoIiwid2FybmluZyIsImNvbXBvbmVudCIsIm9uU3VibWl0IiwiZSIsIm5vVmFsaWRhdGUiLCJzeCIsIm10IiwiaWQiLCJsYWJlbCIsImF1dG9Db21wbGV0ZSIsInR5cGUiLCJlcnJvclRleHQiLCJhdXRvRm9jdXMiLCJtYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/loginPage/Form/index.tsx\n"));

/***/ })

});