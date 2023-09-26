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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_RequiredTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/RequiredTextField */ \"./components/loginPage/Form/components/RequiredTextField.tsx\");\n/* harmony import */ var _components_SubmitOutlinedButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SubmitOutlinedButton */ \"./components/loginPage/Form/components/SubmitOutlinedButton.tsx\");\n/* harmony import */ var _src_functions_validations_loginInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/functions/validations/loginInput */ \"./src/functions/validations/loginInput/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! zod */ \"./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _src_Contexts_userAccessTokenContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/Contexts/userAccessTokenContext */ \"./src/Contexts/userAccessTokenContext.ts\");\n/* harmony import */ var _src_CustomError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/CustomError */ \"./src/CustomError/index.ts\");\n/* harmony import */ var _src_functions_getCryptPassword__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/functions/getCryptPassword */ \"./src/functions/getCryptPassword.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _Apollo_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Apollo/auth */ \"./Apollo/auth.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n// import { useQuery } from \"@apollo/client\";\n// import { auth } from \"../../../Apollo/auth\";\nfunction LoginForm() {\n    _s();\n    const defaultErrorValidation = {\n        status: false,\n        message: \"\"\n    };\n    const { userAccessToken, setUserAccessToken } = react__WEBPACK_IMPORTED_MODULE_4___default().useContext(_src_Contexts_userAccessTokenContext__WEBPACK_IMPORTED_MODULE_6__.UserAccessTokenContext);\n    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);\n    const [emailValidationError, setEmailValidationError] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(defaultErrorValidation);\n    const [passwordValidationError, setPasswordValidationError] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(defaultErrorValidation);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [getToken, { error, loading, data }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useLazyQuery)(_Apollo_auth__WEBPACK_IMPORTED_MODULE_9__.auth.login);\n    if (error) {\n        console.log(\"useLogin error: \", error);\n    }\n    const handleSubmit = async (event)=>{\n        // it is here, because I don`t wanna save sensitive data...\n        event.preventDefault();\n        setIsLoading(true);\n        const formData = new FormData(event.currentTarget);\n        const myFormData = {\n            email: formData.get(\"email\"),\n            password: formData.get(\"password\")\n        };\n        try {\n            var _data, _data1;\n            const getValidatedFormData = (0,_src_functions_validations_loginInput__WEBPACK_IMPORTED_MODULE_3__.validateInputValue)(myFormData);\n            getValidatedFormData.password = (0,_src_functions_getCryptPassword__WEBPACK_IMPORTED_MODULE_8__.getCryptPassword)(getValidatedFormData.password);\n            console.log(\"sha hash: \", getValidatedFormData.password);\n            await getToken({\n                variables: {\n                    getValidatedFormData\n                },\n                pollInterval: 5000\n            });\n            setUserAccessToken((_data = data) === null || _data === void 0 ? void 0 : _data.token);\n            console.log({\n                userAccessToken\n            });\n            if ((_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.token) {\n                router.replace(\"/weather\");\n            } else {\n                console.log({\n                    data\n                });\n                throw new _src_CustomError__WEBPACK_IMPORTED_MODULE_7__[\"default\"](\"Access token is false.\");\n            }\n        } catch (error) {\n            if (error instanceof zod__WEBPACK_IMPORTED_MODULE_11__.z.ZodError) {\n                if (error.issues[0].path[0] === \"email\") {\n                    setEmailValidationError({\n                        status: true,\n                        message: error.issues[0].message\n                    });\n                } else {\n                    setEmailValidationError(defaultErrorValidation);\n                }\n                if (error.issues[0].path[0] === \"password\") {\n                    setPasswordValidationError({\n                        status: true,\n                        message: error.issues[0].message\n                    });\n                } else {\n                    setPasswordValidationError(defaultErrorValidation);\n                }\n            } else if (error instanceof _src_CustomError__WEBPACK_IMPORTED_MODULE_7__[\"default\"]) {\n                //ToDo: make some error box, where display this error...\n                console.log(error.message);\n            } else {\n                // console.log(\"cached in loginForm\", error.message, error.name, error);\n                // console.warn(Object.keys(error));\n                throw error;\n            }\n        } finally{\n            setIsLoading(false);\n        }\n        console.log();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {\n        component: \"form\",\n        onSubmit: async (e)=>await handleSubmit(e),\n        noValidate: true,\n        sx: {\n            mt: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequiredTextField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: \"email\",\n                label: \"Email Address\",\n                autoComplete: \"email\",\n                type: \"email\",\n                error: emailValidationError.status,\n                errorText: emailValidationError.message,\n                autoFocus: true\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequiredTextField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: \"password\",\n                label: \"Password\",\n                type: \"password\",\n                autoComplete: \"current-password\",\n                error: passwordValidationError.status,\n                errorText: passwordValidationError.message\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubmitOutlinedButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                sx: {\n                    mt: 3,\n                    mb: 2\n                },\n                isLoading: isLoading\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginForm, \"DWcd2efvKTqx0qXOBH53Yy48Ads=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_10__.useLazyQuery\n    ];\n});\n_c = LoginForm;\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNMLE1BQU1iLE9BQU87WUFDM0IsT0FBTztnQkFDTCx3RUFBd0U7Z0JBQ3hFLG9DQUFvQztnQkFDcEMsTUFBTWE7WUFDUjtRQUNGLFNBQVU7WUFDUlIsYUFBYTtRQUNmO1FBRUFZLFFBQVFDLEdBQUc7SUFDYjtJQUVBLHFCQUNFLDhEQUFDakMsK0NBQUdBO1FBQUNvRCxXQUFVO1FBQU9DLFVBQVUsT0FBT0MsSUFBTSxNQUFNcEIsYUFBYW9CO1FBQUlDLFVBQVU7UUFBQ0MsSUFBSTtZQUFFQyxJQUFJO1FBQUU7OzBCQUN6Riw4REFBQ3hELHFFQUFpQkE7Z0JBQ2hCeUQsSUFBRztnQkFDSEMsT0FBTTtnQkFDTkMsY0FBYTtnQkFDYkMsTUFBSztnQkFDTGpDLE9BQU9OLHFCQUFxQlIsTUFBTTtnQkFDbENnRCxXQUFXeEMscUJBQXFCUCxPQUFPO2dCQUN2Q2dELFNBQVM7Ozs7OzswQkFFWCw4REFBQzlELHFFQUFpQkE7Z0JBQ2hCeUQsSUFBRztnQkFDSEMsT0FBTTtnQkFDTkUsTUFBSztnQkFDTEQsY0FBYTtnQkFDYmhDLE9BQU9KLHdCQUF3QlYsTUFBTTtnQkFDckNnRCxXQUFXdEMsd0JBQXdCVCxPQUFPOzs7Ozs7MEJBRzVDLDhEQUFDYix3RUFBb0JBO2dCQUFDc0QsSUFBSTtvQkFBQ0MsSUFBSTtvQkFBR08sSUFBSTtnQkFBQztnQkFBRzdDLFdBQVdBOzs7Ozs7Ozs7Ozs7QUFHM0Q7R0FySHdCUDs7UUE0QlBQLHNEQUFTQTtRQUNtQksseURBQVlBOzs7S0E3QmpDRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xvZ2luUGFnZS9Gb3JtL2luZGV4LnRzeD82NzM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgUmVxdWlyZWRUZXh0RmllbGQgZnJvbSBcIi4vY29tcG9uZW50cy9SZXF1aXJlZFRleHRGaWVsZFwiO1xuaW1wb3J0IFN1Ym1pdE91dGxpbmVkQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvU3VibWl0T3V0bGluZWRCdXR0b25cIjtcbmltcG9ydCB7IHZhbGlkYXRlSW5wdXRWYWx1ZSB9IGZyb20gXCIuLi8uLi8uLi9zcmMvZnVuY3Rpb25zL3ZhbGlkYXRpb25zL2xvZ2luSW5wdXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgTG9naW5UeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9jb25maWcvc3lzdGVtL3R5cGVzL2xvZ2luXCI7XG5pbXBvcnQgeyBVc2VyQWNjZXNzVG9rZW5Db250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9Db250ZXh0cy91c2VyQWNjZXNzVG9rZW5Db250ZXh0XCI7XG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSBcIi4uLy4uLy4uL3NyYy9DdXN0b21FcnJvclwiO1xuaW1wb3J0IHsgZ2V0Q3J5cHRQYXNzd29yZCB9IGZyb20gXCIuLi8uLi8uLi9zcmMvZnVuY3Rpb25zL2dldENyeXB0UGFzc3dvcmRcIjtcbmltcG9ydCB7IHVzZUxvZ2luIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9mdW5jdGlvbnMvYXV0aFwiO1xuaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uLy4uLy4uL0Fwb2xsby9hdXRoXCI7XG4vLyBpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuLy8gaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi8uLi8uLi9BcG9sbG8vYXV0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkZvcm0oKSB7XG5cbiAgLy8gYXN5bmMgZnVuY3Rpb24gdXNlTG9naW4obG9naW5EYXRhOiBMb2dpblR5cGUpIHtcbiAgLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHVzZVF1ZXJ5KGF1dGgubG9naW4sIHtcbiAgLy8gICAgIHZhcmlhYmxlczogbG9naW5EYXRhLFxuICAvLyAgICAgcG9sbEludGVydmFsOiA1MDAwLFxuICAvLyAgIH0pXG4gIFxuICAvLyAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAvLyAgICAgY29uc29sZS5sb2coXCJ1c2VMb2dpbiBlcnJvcjogXCIsIHJlc3BvbnNlLmVycm9yKVxuICAvLyAgIH1cbiAgXG4gIC8vICAgcmV0dXJuIHJlc3BvbnNlO1xuICAvLyB9XG5cbiAgdHlwZSBlcnJvclZhbGlkYXRpb24gPSB7XG4gICAgc3RhdHVzOiBib29sZWFuLCBcbiAgICBtZXNzYWdlOiBzdHJpbmdcbiAgfVxuICBjb25zdCBkZWZhdWx0RXJyb3JWYWxpZGF0aW9uID0ge1xuICAgIHN0YXR1czogZmFsc2UsXG4gICAgbWVzc2FnZTogJycsXG4gIH1cblxuICBjb25zdCB7IHVzZXJBY2Nlc3NUb2tlbiwgc2V0VXNlckFjY2Vzc1Rva2VuIH0gPSBSZWFjdC51c2VDb250ZXh0KFVzZXJBY2Nlc3NUb2tlbkNvbnRleHQpO1xuICBjb25zdCBbIGlzTG9hZGluZywgc2V0SXNMb2FkaW5nIF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFsgZW1haWxWYWxpZGF0aW9uRXJyb3IsIHNldEVtYWlsVmFsaWRhdGlvbkVycm9yIF0gPSBSZWFjdC51c2VTdGF0ZTxlcnJvclZhbGlkYXRpb24+KGRlZmF1bHRFcnJvclZhbGlkYXRpb24pO1xuICBjb25zdCBbIHBhc3N3b3JkVmFsaWRhdGlvbkVycm9yLCBzZXRQYXNzd29yZFZhbGlkYXRpb25FcnJvciBdID0gUmVhY3QudXNlU3RhdGU8ZXJyb3JWYWxpZGF0aW9uPihkZWZhdWx0RXJyb3JWYWxpZGF0aW9uKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtnZXRUb2tlbiwge2Vycm9yLCBsb2FkaW5nLCBkYXRhfV0gPSB1c2VMYXp5UXVlcnkoYXV0aC5sb2dpbik7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJ1c2VMb2dpbiBlcnJvcjogXCIsIGVycm9yKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICAvLyBpdCBpcyBoZXJlLCBiZWNhdXNlIEkgZG9uYHQgd2FubmEgc2F2ZSBzZW5zaXRpdmUgZGF0YS4uLlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnN0IG15Rm9ybURhdGEgPSB7XG4gICAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgICAgcGFzc3dvcmQ6IGZvcm1EYXRhLmdldCgncGFzc3dvcmQnKSxcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZ2V0VmFsaWRhdGVkRm9ybURhdGE6IExvZ2luVHlwZSA9IHZhbGlkYXRlSW5wdXRWYWx1ZShteUZvcm1EYXRhKTtcbiAgICAgIGdldFZhbGlkYXRlZEZvcm1EYXRhLnBhc3N3b3JkID0gZ2V0Q3J5cHRQYXNzd29yZChnZXRWYWxpZGF0ZWRGb3JtRGF0YS5wYXNzd29yZCk7XG4gICAgICBjb25zb2xlLmxvZyhcInNoYSBoYXNoOiBcIiwgZ2V0VmFsaWRhdGVkRm9ybURhdGEucGFzc3dvcmQpO1xuICAgICAgYXdhaXQgZ2V0VG9rZW4oe1xuICAgICAgICB2YXJpYWJsZXM6IHtnZXRWYWxpZGF0ZWRGb3JtRGF0YX0sXG4gICAgICAgIHBvbGxJbnRlcnZhbDogNTAwMCxcbiAgICAgIH0pO1xuICAgICAgc2V0VXNlckFjY2Vzc1Rva2VuKGRhdGE/LnRva2VuKTtcbiAgICAgIGNvbnNvbGUubG9nKHt1c2VyQWNjZXNzVG9rZW59KTtcbiAgICAgIGlmIChkYXRhPy50b2tlbikge1xuICAgICAgICByb3V0ZXIucmVwbGFjZSgnL3dlYXRoZXInKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHtkYXRhfSlcbiAgICAgICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdBY2Nlc3MgdG9rZW4gaXMgZmFsc2UuJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yLmlzc3Vlc1swXS5wYXRoWzBdID09PSAnZW1haWwnKSB7XG4gICAgICAgICAgc2V0RW1haWxWYWxpZGF0aW9uRXJyb3Ioe1xuICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IuaXNzdWVzWzBdLm1lc3NhZ2UsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRFbWFpbFZhbGlkYXRpb25FcnJvcihkZWZhdWx0RXJyb3JWYWxpZGF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IuaXNzdWVzWzBdLnBhdGhbMF0gPT09ICdwYXNzd29yZCcpIHtcbiAgICAgICAgICBzZXRQYXNzd29yZFZhbGlkYXRpb25FcnJvcih7XG4gICAgICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5pc3N1ZXNbMF0ubWVzc2FnZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFBhc3N3b3JkVmFsaWRhdGlvbkVycm9yKGRlZmF1bHRFcnJvclZhbGlkYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgQ3VzdG9tRXJyb3IpIHtcbiAgICAgICAgLy9Ub0RvOiBtYWtlIHNvbWUgZXJyb3IgYm94LCB3aGVyZSBkaXNwbGF5IHRoaXMgZXJyb3IuLi5cbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNhY2hlZCBpbiBsb2dpbkZvcm1cIiwgZXJyb3IubWVzc2FnZSwgZXJyb3IubmFtZSwgZXJyb3IpO1xuICAgICAgICAvLyBjb25zb2xlLndhcm4oT2JqZWN0LmtleXMoZXJyb3IpKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNvbXBvbmVudD1cImZvcm1cIiBvblN1Ym1pdD17YXN5bmMgKGUpID0+IGF3YWl0IGhhbmRsZVN1Ym1pdChlKX0gbm9WYWxpZGF0ZSBzeD17eyBtdDogMSB9fT5cbiAgICAgIDxSZXF1aXJlZFRleHRGaWVsZFxuICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICBlcnJvcj17ZW1haWxWYWxpZGF0aW9uRXJyb3Iuc3RhdHVzfVxuICAgICAgICBlcnJvclRleHQ9e2VtYWlsVmFsaWRhdGlvbkVycm9yLm1lc3NhZ2V9XG4gICAgICAgIGF1dG9Gb2N1c1xuICAgICAgLz5cbiAgICAgIDxSZXF1aXJlZFRleHRGaWVsZFxuICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICBlcnJvcj17cGFzc3dvcmRWYWxpZGF0aW9uRXJyb3Iuc3RhdHVzfVxuICAgICAgICBlcnJvclRleHQ9e3Bhc3N3b3JkVmFsaWRhdGlvbkVycm9yLm1lc3NhZ2V9XG4gICAgICAvPlxuXG4gICAgICA8U3VibWl0T3V0bGluZWRCdXR0b24gc3g9e3ttdDogMywgbWI6IDJ9fSBpc0xvYWRpbmc9e2lzTG9hZGluZ30gLz5cbiAgICA8L0JveD5cbiAgKVxufSJdLCJuYW1lcyI6WyJCb3giLCJSZXF1aXJlZFRleHRGaWVsZCIsIlN1Ym1pdE91dGxpbmVkQnV0dG9uIiwidmFsaWRhdGVJbnB1dFZhbHVlIiwiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJ6IiwiVXNlckFjY2Vzc1Rva2VuQ29udGV4dCIsIkN1c3RvbUVycm9yIiwiZ2V0Q3J5cHRQYXNzd29yZCIsInVzZUxhenlRdWVyeSIsImF1dGgiLCJMb2dpbkZvcm0iLCJkZWZhdWx0RXJyb3JWYWxpZGF0aW9uIiwic3RhdHVzIiwibWVzc2FnZSIsInVzZXJBY2Nlc3NUb2tlbiIsInNldFVzZXJBY2Nlc3NUb2tlbiIsInVzZUNvbnRleHQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsImVtYWlsVmFsaWRhdGlvbkVycm9yIiwic2V0RW1haWxWYWxpZGF0aW9uRXJyb3IiLCJwYXNzd29yZFZhbGlkYXRpb25FcnJvciIsInNldFBhc3N3b3JkVmFsaWRhdGlvbkVycm9yIiwicm91dGVyIiwiZ2V0VG9rZW4iLCJlcnJvciIsImxvYWRpbmciLCJkYXRhIiwibG9naW4iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJjdXJyZW50VGFyZ2V0IiwibXlGb3JtRGF0YSIsImVtYWlsIiwiZ2V0IiwicGFzc3dvcmQiLCJnZXRWYWxpZGF0ZWRGb3JtRGF0YSIsInZhcmlhYmxlcyIsInBvbGxJbnRlcnZhbCIsInRva2VuIiwicmVwbGFjZSIsIlpvZEVycm9yIiwiaXNzdWVzIiwicGF0aCIsImNvbXBvbmVudCIsIm9uU3VibWl0IiwiZSIsIm5vVmFsaWRhdGUiLCJzeCIsIm10IiwiaWQiLCJsYWJlbCIsImF1dG9Db21wbGV0ZSIsInR5cGUiLCJlcnJvclRleHQiLCJhdXRvRm9jdXMiLCJtYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/loginPage/Form/index.tsx\n"));

/***/ })

});