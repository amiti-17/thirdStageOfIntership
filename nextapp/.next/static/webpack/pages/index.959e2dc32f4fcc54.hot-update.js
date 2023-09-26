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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_RequiredTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/RequiredTextField */ \"./components/loginPage/Form/components/RequiredTextField.tsx\");\n/* harmony import */ var _components_SubmitOutlinedButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SubmitOutlinedButton */ \"./components/loginPage/Form/components/SubmitOutlinedButton.tsx\");\n/* harmony import */ var _src_functions_validations_loginInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/functions/validations/loginInput */ \"./src/functions/validations/loginInput/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! zod */ \"./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _src_Contexts_userAccessTokenContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/Contexts/userAccessTokenContext */ \"./src/Contexts/userAccessTokenContext.ts\");\n/* harmony import */ var _src_CustomError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/CustomError */ \"./src/CustomError/index.ts\");\n/* harmony import */ var _src_functions_getCryptPassword__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/functions/getCryptPassword */ \"./src/functions/getCryptPassword.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _Apollo_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Apollo/auth */ \"./Apollo/auth.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n// import { useQuery } from \"@apollo/client\";\n// import { auth } from \"../../../Apollo/auth\";\nfunction LoginForm() {\n    _s();\n    const defaultErrorValidation = {\n        status: false,\n        message: \"\"\n    };\n    const { userAccessToken, setUserAccessToken } = react__WEBPACK_IMPORTED_MODULE_4___default().useContext(_src_Contexts_userAccessTokenContext__WEBPACK_IMPORTED_MODULE_6__.UserAccessTokenContext);\n    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);\n    const [emailValidationError, setEmailValidationError] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(defaultErrorValidation);\n    const [passwordValidationError, setPasswordValidationError] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(defaultErrorValidation);\n    const [getToken, { error, loading, data }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useLazyQuery)(_Apollo_auth__WEBPACK_IMPORTED_MODULE_9__.auth.login);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    // if (error) return `Error! ${error}`;\n    // if (loading) return `Loading ...`;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (data) {\n            var _data_login, _data;\n            console.log(data.login);\n            if ((_data = data) === null || _data === void 0 ? void 0 : (_data_login = _data.login) === null || _data_login === void 0 ? void 0 : _data_login.token) {\n                setUserAccessToken(data.login.token);\n                router.replace(\"/weather\");\n            } else {\n                throw new _src_CustomError__WEBPACK_IMPORTED_MODULE_7__[\"default\"](\"Access token is false.\");\n            }\n        }\n    }, [\n        loading,\n        data\n    ]);\n    // if (error) {\n    //   console.log(\"useLogin error: \", error);\n    // }\n    const handleSubmit = (event)=>{\n        // it is here, because I don`t wanna save sensitive data...\n        event.preventDefault();\n        setIsLoading(true);\n        const formData = new FormData(event.currentTarget);\n        const myFormData = {\n            email: formData.get(\"email\"),\n            password: formData.get(\"password\")\n        };\n        try {\n            const getValidatedFormData = (0,_src_functions_validations_loginInput__WEBPACK_IMPORTED_MODULE_3__.validateInputValue)(myFormData);\n            getValidatedFormData.password = (0,_src_functions_getCryptPassword__WEBPACK_IMPORTED_MODULE_8__.getCryptPassword)(getValidatedFormData.password);\n            console.log(\"sha hash: \", getValidatedFormData.password);\n            getToken({\n                variables: {\n                    authLoginInput: getValidatedFormData\n                }\n            });\n            if (error.message) Object.keys(error).forEach((key)=>{\n                console.log(key, error[key]);\n            });\n        } catch (error) {\n            if (error instanceof zod__WEBPACK_IMPORTED_MODULE_11__.z.ZodError) {\n                if (error.issues[0].path[0] === \"email\") {\n                    setEmailValidationError({\n                        status: true,\n                        message: error.issues[0].message\n                    });\n                } else {\n                    setEmailValidationError(defaultErrorValidation);\n                }\n                if (error.issues[0].path[0] === \"password\") {\n                    setPasswordValidationError({\n                        status: true,\n                        message: error.issues[0].message\n                    });\n                } else {\n                    setPasswordValidationError(defaultErrorValidation);\n                }\n            } else if (error instanceof _src_CustomError__WEBPACK_IMPORTED_MODULE_7__[\"default\"]) {\n                //ToDo: make some error box, where display this error...\n                console.log(error.message);\n            } else {\n                // console.log(\"cached in loginForm\", error.message, error.name, error);\n                // console.warn(Object.keys(error));\n                throw error;\n            }\n        } finally{\n            setIsLoading(false);\n        }\n        console.log();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {\n        component: \"form\",\n        onSubmit: async (e)=>await handleSubmit(e),\n        noValidate: true,\n        sx: {\n            mt: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequiredTextField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: \"email\",\n                label: \"Email Address\",\n                autoComplete: \"email\",\n                type: \"email\",\n                error: emailValidationError.status,\n                errorText: emailValidationError.message,\n                autoFocus: true\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequiredTextField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: \"password\",\n                label: \"Password\",\n                type: \"password\",\n                autoComplete: \"current-password\",\n                error: passwordValidationError.status,\n                errorText: passwordValidationError.message\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubmitOutlinedButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                sx: {\n                    mt: 3,\n                    mb: 2\n                },\n                isLoading: isLoading\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n                lineNumber: 143,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n        lineNumber: 124,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginForm, \"lRcgVpsRuckz6ApH//JwHC5993U=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_10__.useLazyQuery,\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = LoginForm;\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBSZXF1aXJlZFRleHRGaWVsZCBmcm9tIFwiLi9jb21wb25lbnRzL1JlcXVpcmVkVGV4dEZpZWxkXCI7XG5pbXBvcnQgU3VibWl0T3V0bGluZWRCdXR0b24gZnJvbSBcIi4vY29tcG9uZW50cy9TdWJtaXRPdXRsaW5lZEJ1dHRvblwiO1xuaW1wb3J0IHsgdmFsaWRhdGVJbnB1dFZhbHVlIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9mdW5jdGlvbnMvdmFsaWRhdGlvbnMvbG9naW5JbnB1dFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgeyBMb2dpblR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2NvbmZpZy9zeXN0ZW0vdHlwZXMvbG9naW5cIjtcbmltcG9ydCB7IFVzZXJBY2Nlc3NUb2tlbkNvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL0NvbnRleHRzL3VzZXJBY2Nlc3NUb2tlbkNvbnRleHRcIjtcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tIFwiLi4vLi4vLi4vc3JjL0N1c3RvbUVycm9yXCI7XG5pbXBvcnQgeyBnZXRDcnlwdFBhc3N3b3JkIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9mdW5jdGlvbnMvZ2V0Q3J5cHRQYXNzd29yZFwiO1xuaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uLy4uLy4uL0Fwb2xsby9hdXRoXCI7XG4vLyBpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuLy8gaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi8uLi8uLi9BcG9sbG8vYXV0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkZvcm0oKSB7XG5cbiAgLy8gYXN5bmMgZnVuY3Rpb24gdXNlTG9naW4obG9naW5EYXRhOiBMb2dpblR5cGUpIHtcbiAgLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHVzZVF1ZXJ5KGF1dGgubG9naW4sIHtcbiAgLy8gICAgIHZhcmlhYmxlczogbG9naW5EYXRhLFxuICAvLyAgICAgcG9sbEludGVydmFsOiA1MDAwLFxuICAvLyAgIH0pXG4gIFxuICAvLyAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAvLyAgICAgY29uc29sZS5sb2coXCJ1c2VMb2dpbiBlcnJvcjogXCIsIHJlc3BvbnNlLmVycm9yKVxuICAvLyAgIH1cbiAgXG4gIC8vICAgcmV0dXJuIHJlc3BvbnNlO1xuICAvLyB9XG5cbiAgdHlwZSBlcnJvclZhbGlkYXRpb24gPSB7XG4gICAgc3RhdHVzOiBib29sZWFuLCBcbiAgICBtZXNzYWdlOiBzdHJpbmdcbiAgfVxuICBjb25zdCBkZWZhdWx0RXJyb3JWYWxpZGF0aW9uID0ge1xuICAgIHN0YXR1czogZmFsc2UsXG4gICAgbWVzc2FnZTogJycsXG4gIH1cblxuICBjb25zdCB7IHVzZXJBY2Nlc3NUb2tlbiwgc2V0VXNlckFjY2Vzc1Rva2VuIH0gPSBSZWFjdC51c2VDb250ZXh0KFVzZXJBY2Nlc3NUb2tlbkNvbnRleHQpO1xuICBjb25zdCBbIGlzTG9hZGluZywgc2V0SXNMb2FkaW5nIF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFsgZW1haWxWYWxpZGF0aW9uRXJyb3IsIHNldEVtYWlsVmFsaWRhdGlvbkVycm9yIF0gPSBSZWFjdC51c2VTdGF0ZTxlcnJvclZhbGlkYXRpb24+KGRlZmF1bHRFcnJvclZhbGlkYXRpb24pO1xuICBjb25zdCBbIHBhc3N3b3JkVmFsaWRhdGlvbkVycm9yLCBzZXRQYXNzd29yZFZhbGlkYXRpb25FcnJvciBdID0gUmVhY3QudXNlU3RhdGU8ZXJyb3JWYWxpZGF0aW9uPihkZWZhdWx0RXJyb3JWYWxpZGF0aW9uKTtcbiAgY29uc3QgW2dldFRva2VuLCB7ZXJyb3IsIGxvYWRpbmcsIGRhdGF9XSA9IHVzZUxhenlRdWVyeShhdXRoLmxvZ2luKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gaWYgKGVycm9yKSByZXR1cm4gYEVycm9yISAke2Vycm9yfWA7XG4gIC8vIGlmIChsb2FkaW5nKSByZXR1cm4gYExvYWRpbmcgLi4uYDtcbiAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YS5sb2dpbik7XG4gICAgICBpZiAoZGF0YT8ubG9naW4/LnRva2VuKSB7XG4gICAgICAgIHNldFVzZXJBY2Nlc3NUb2tlbihkYXRhLmxvZ2luLnRva2VuKTtcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoJy93ZWF0aGVyJyk7IFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdBY2Nlc3MgdG9rZW4gaXMgZmFsc2UuJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbbG9hZGluZywgZGF0YV0pXG5cbiAgLy8gaWYgKGVycm9yKSB7XG4gIC8vICAgY29uc29sZS5sb2coXCJ1c2VMb2dpbiBlcnJvcjogXCIsIGVycm9yKTtcbiAgLy8gfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICAvLyBpdCBpcyBoZXJlLCBiZWNhdXNlIEkgZG9uYHQgd2FubmEgc2F2ZSBzZW5zaXRpdmUgZGF0YS4uLlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnN0IG15Rm9ybURhdGEgPSB7XG4gICAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgICAgcGFzc3dvcmQ6IGZvcm1EYXRhLmdldCgncGFzc3dvcmQnKSxcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZ2V0VmFsaWRhdGVkRm9ybURhdGE6IExvZ2luVHlwZSA9IHZhbGlkYXRlSW5wdXRWYWx1ZShteUZvcm1EYXRhKTtcbiAgICAgIGdldFZhbGlkYXRlZEZvcm1EYXRhLnBhc3N3b3JkID0gZ2V0Q3J5cHRQYXNzd29yZChnZXRWYWxpZGF0ZWRGb3JtRGF0YS5wYXNzd29yZCk7XG4gICAgICBjb25zb2xlLmxvZyhcInNoYSBoYXNoOiBcIiwgZ2V0VmFsaWRhdGVkRm9ybURhdGEucGFzc3dvcmQpO1xuICAgICAgZ2V0VG9rZW4oe1xuICAgICAgICB2YXJpYWJsZXM6IHthdXRoTG9naW5JbnB1dDogZ2V0VmFsaWRhdGVkRm9ybURhdGF9LFxuICAgICAgfSk7XG4gICAgICBpZiAoZXJyb3IubWVzc2FnZSlcbiAgICAgIE9iamVjdC5rZXlzKGVycm9yKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGtleSwgZXJyb3Jba2V5XSlcbiAgICAgIH0pXG4gICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2Ygei5ab2RFcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IuaXNzdWVzWzBdLnBhdGhbMF0gPT09ICdlbWFpbCcpIHtcbiAgICAgICAgICBzZXRFbWFpbFZhbGlkYXRpb25FcnJvcih7XG4gICAgICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5pc3N1ZXNbMF0ubWVzc2FnZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEVtYWlsVmFsaWRhdGlvbkVycm9yKGRlZmF1bHRFcnJvclZhbGlkYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvci5pc3N1ZXNbMF0ucGF0aFswXSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgICAgIHNldFBhc3N3b3JkVmFsaWRhdGlvbkVycm9yKHtcbiAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLmlzc3Vlc1swXS5tZXNzYWdlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0UGFzc3dvcmRWYWxpZGF0aW9uRXJyb3IoZGVmYXVsdEVycm9yVmFsaWRhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBDdXN0b21FcnJvcikge1xuICAgICAgICAvL1RvRG86IG1ha2Ugc29tZSBlcnJvciBib3gsIHdoZXJlIGRpc3BsYXkgdGhpcyBlcnJvci4uLlxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2FjaGVkIGluIGxvZ2luRm9ybVwiLCBlcnJvci5tZXNzYWdlLCBlcnJvci5uYW1lLCBlcnJvcik7XG4gICAgICAgIC8vIGNvbnNvbGUud2FybihPYmplY3Qua2V5cyhlcnJvcikpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gICAgXG4gICAgY29uc29sZS5sb2coKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY29tcG9uZW50PVwiZm9ybVwiIG9uU3VibWl0PXthc3luYyAoZSkgPT4gYXdhaXQgaGFuZGxlU3VibWl0KGUpfSBub1ZhbGlkYXRlIHN4PXt7IG10OiAxIH19PlxuICAgICAgPFJlcXVpcmVkVGV4dEZpZWxkXG4gICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgIGVycm9yPXtlbWFpbFZhbGlkYXRpb25FcnJvci5zdGF0dXN9XG4gICAgICAgIGVycm9yVGV4dD17ZW1haWxWYWxpZGF0aW9uRXJyb3IubWVzc2FnZX1cbiAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAvPlxuICAgICAgPFJlcXVpcmVkVGV4dEZpZWxkXG4gICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgIGVycm9yPXtwYXNzd29yZFZhbGlkYXRpb25FcnJvci5zdGF0dXN9XG4gICAgICAgIGVycm9yVGV4dD17cGFzc3dvcmRWYWxpZGF0aW9uRXJyb3IubWVzc2FnZX1cbiAgICAgIC8+XG5cbiAgICAgIDxTdWJtaXRPdXRsaW5lZEJ1dHRvbiBzeD17e210OiAzLCBtYjogMn19IGlzTG9hZGluZz17aXNMb2FkaW5nfSAvPlxuICAgIDwvQm94PlxuICApXG59Il0sIm5hbWVzIjpbIkJveCIsIlJlcXVpcmVkVGV4dEZpZWxkIiwiU3VibWl0T3V0bGluZWRCdXR0b24iLCJ2YWxpZGF0ZUlucHV0VmFsdWUiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInoiLCJVc2VyQWNjZXNzVG9rZW5Db250ZXh0IiwiQ3VzdG9tRXJyb3IiLCJnZXRDcnlwdFBhc3N3b3JkIiwidXNlTGF6eVF1ZXJ5IiwiYXV0aCIsIkxvZ2luRm9ybSIsImRlZmF1bHRFcnJvclZhbGlkYXRpb24iLCJzdGF0dXMiLCJtZXNzYWdlIiwidXNlckFjY2Vzc1Rva2VuIiwic2V0VXNlckFjY2Vzc1Rva2VuIiwidXNlQ29udGV4dCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZVN0YXRlIiwiZW1haWxWYWxpZGF0aW9uRXJyb3IiLCJzZXRFbWFpbFZhbGlkYXRpb25FcnJvciIsInBhc3N3b3JkVmFsaWRhdGlvbkVycm9yIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uRXJyb3IiLCJnZXRUb2tlbiIsImVycm9yIiwibG9hZGluZyIsImRhdGEiLCJsb2dpbiIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsInJlcGxhY2UiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImN1cnJlbnRUYXJnZXQiLCJteUZvcm1EYXRhIiwiZW1haWwiLCJnZXQiLCJwYXNzd29yZCIsImdldFZhbGlkYXRlZEZvcm1EYXRhIiwidmFyaWFibGVzIiwiYXV0aExvZ2luSW5wdXQiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIlpvZEVycm9yIiwiaXNzdWVzIiwicGF0aCIsImNvbXBvbmVudCIsIm9uU3VibWl0IiwiZSIsIm5vVmFsaWRhdGUiLCJzeCIsIm10IiwiaWQiLCJsYWJlbCIsImF1dG9Db21wbGV0ZSIsInR5cGUiLCJlcnJvclRleHQiLCJhdXRvRm9jdXMiLCJtYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/loginPage/Form/index.tsx\n"));

/***/ })

});