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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_RequiredTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/RequiredTextField */ \"./components/loginPage/Form/components/RequiredTextField.tsx\");\n/* harmony import */ var _components_SubmitOutlinedButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SubmitOutlinedButton */ \"./components/loginPage/Form/components/SubmitOutlinedButton.tsx\");\n/* harmony import */ var _src_functions_validations_loginInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/functions/validations/loginInput */ \"./src/functions/validations/loginInput/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! zod */ \"./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _src_Contexts_userAccessTokenContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/Contexts/userAccessTokenContext */ \"./src/Contexts/userAccessTokenContext.ts\");\n/* harmony import */ var _src_CustomError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/CustomError */ \"./src/CustomError/index.ts\");\n/* harmony import */ var _src_functions_getCryptPassword__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/functions/getCryptPassword */ \"./src/functions/getCryptPassword.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _Apollo_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Apollo/auth */ \"./Apollo/auth.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n// import { useQuery } from \"@apollo/client\";\n// import { auth } from \"../../../Apollo/auth\";\nfunction LoginForm() {\n    _s();\n    const defaultErrorValidation = {\n        status: false,\n        message: \"\"\n    };\n    const { userAccessToken, setUserAccessToken } = react__WEBPACK_IMPORTED_MODULE_4___default().useContext(_src_Contexts_userAccessTokenContext__WEBPACK_IMPORTED_MODULE_6__.UserAccessTokenContext);\n    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);\n    const [emailValidationError, setEmailValidationError] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(defaultErrorValidation);\n    const [passwordValidationError, setPasswordValidationError] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(defaultErrorValidation);\n    const [getToken, { error, loading, data }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useLazyQuery)(_Apollo_auth__WEBPACK_IMPORTED_MODULE_9__.auth.login);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    if (error) return \"Error! \".concat(error);\n    if (loading) return \"Loading ...\";\n    if (data) return data;\n    // if (error) {\n    //   console.log(\"useLogin error: \", error);\n    // }\n    const handleSubmit = async (event)=>{\n        // it is here, because I don`t wanna save sensitive data...\n        event.preventDefault();\n        setIsLoading(true);\n        const formData = new FormData(event.currentTarget);\n        const myFormData = {\n            email: formData.get(\"email\"),\n            password: formData.get(\"password\")\n        };\n        try {\n            const getValidatedFormData = (0,_src_functions_validations_loginInput__WEBPACK_IMPORTED_MODULE_3__.validateInputValue)(myFormData);\n            getValidatedFormData.password = (0,_src_functions_getCryptPassword__WEBPACK_IMPORTED_MODULE_8__.getCryptPassword)(getValidatedFormData.password);\n            console.log(\"sha hash: \", getValidatedFormData.password);\n            await getToken({\n                variables: {\n                    authLoginInput: getValidatedFormData\n                }\n            });\n        // setUserAccessToken(data?.token);\n        // console.log({userAccessToken});\n        // if (data?.token) {\n        //   // router.replace('/weather');   //Redirect!!!\n        // } else {\n        //   console.log(data)\n        //   throw new CustomError('Access token is false.');\n        // }\n        } catch (error) {\n            if (error instanceof zod__WEBPACK_IMPORTED_MODULE_11__.z.ZodError) {\n                if (error.issues[0].path[0] === \"email\") {\n                    setEmailValidationError({\n                        status: true,\n                        message: error.issues[0].message\n                    });\n                } else {\n                    setEmailValidationError(defaultErrorValidation);\n                }\n                if (error.issues[0].path[0] === \"password\") {\n                    setPasswordValidationError({\n                        status: true,\n                        message: error.issues[0].message\n                    });\n                } else {\n                    setPasswordValidationError(defaultErrorValidation);\n                }\n            } else if (error instanceof _src_CustomError__WEBPACK_IMPORTED_MODULE_7__[\"default\"]) {\n                //ToDo: make some error box, where display this error...\n                console.log(error.message);\n            } else {\n                // console.log(\"cached in loginForm\", error.message, error.name, error);\n                // console.warn(Object.keys(error));\n                throw error;\n            }\n        } finally{\n            setIsLoading(false);\n        }\n        console.log();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {\n        component: \"form\",\n        onSubmit: async (e)=>await handleSubmit(e),\n        noValidate: true,\n        sx: {\n            mt: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequiredTextField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: \"email\",\n                label: \"Email Address\",\n                autoComplete: \"email\",\n                type: \"email\",\n                error: emailValidationError.status,\n                errorText: emailValidationError.message,\n                autoFocus: true\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequiredTextField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: \"password\",\n                label: \"Password\",\n                type: \"password\",\n                autoComplete: \"current-password\",\n                error: passwordValidationError.status,\n                errorText: passwordValidationError.message\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubmitOutlinedButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                sx: {\n                    mt: 3,\n                    mb: 2\n                },\n                isLoading: isLoading\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginForm, \"jxwhWmE0djhlhvA3ZgdyVUral/8=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_10__.useLazyQuery,\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = LoginForm;\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVFDLEdBQUc7SUFDYjtJQUVBLHFCQUNFLDhEQUFDNUMsK0NBQUdBO1FBQUNrRCxXQUFVO1FBQU9DLFVBQVUsT0FBT0MsSUFBTSxNQUFNcEIsYUFBYW9CO1FBQUlDLFVBQVU7UUFBQ0MsSUFBSTtZQUFFQyxJQUFJO1FBQUU7OzBCQUN6Riw4REFBQ3RELHFFQUFpQkE7Z0JBQ2hCdUQsSUFBRztnQkFDSEMsT0FBTTtnQkFDTkMsY0FBYTtnQkFDYkMsTUFBSztnQkFDTGhDLE9BQU9MLHFCQUFxQlIsTUFBTTtnQkFDbEM4QyxXQUFXdEMscUJBQXFCUCxPQUFPO2dCQUN2QzhDLFNBQVM7Ozs7OzswQkFFWCw4REFBQzVELHFFQUFpQkE7Z0JBQ2hCdUQsSUFBRztnQkFDSEMsT0FBTTtnQkFDTkUsTUFBSztnQkFDTEQsY0FBYTtnQkFDYi9CLE9BQU9ILHdCQUF3QlYsTUFBTTtnQkFDckM4QyxXQUFXcEMsd0JBQXdCVCxPQUFPOzs7Ozs7MEJBRzVDLDhEQUFDYix3RUFBb0JBO2dCQUFDb0QsSUFBSTtvQkFBQ0MsSUFBSTtvQkFBR08sSUFBSTtnQkFBQztnQkFBRzNDLFdBQVdBOzs7Ozs7Ozs7Ozs7QUFHM0Q7R0F4SHdCUDs7UUE0QnFCRix5REFBWUE7UUFDeENMLHNEQUFTQTs7O0tBN0JGTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xvZ2luUGFnZS9Gb3JtL2luZGV4LnRzeD82NzM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgUmVxdWlyZWRUZXh0RmllbGQgZnJvbSBcIi4vY29tcG9uZW50cy9SZXF1aXJlZFRleHRGaWVsZFwiO1xuaW1wb3J0IFN1Ym1pdE91dGxpbmVkQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvU3VibWl0T3V0bGluZWRCdXR0b25cIjtcbmltcG9ydCB7IHZhbGlkYXRlSW5wdXRWYWx1ZSB9IGZyb20gXCIuLi8uLi8uLi9zcmMvZnVuY3Rpb25zL3ZhbGlkYXRpb25zL2xvZ2luSW5wdXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgTG9naW5UeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9jb25maWcvc3lzdGVtL3R5cGVzL2xvZ2luXCI7XG5pbXBvcnQgeyBVc2VyQWNjZXNzVG9rZW5Db250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9Db250ZXh0cy91c2VyQWNjZXNzVG9rZW5Db250ZXh0XCI7XG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSBcIi4uLy4uLy4uL3NyYy9DdXN0b21FcnJvclwiO1xuaW1wb3J0IHsgZ2V0Q3J5cHRQYXNzd29yZCB9IGZyb20gXCIuLi8uLi8uLi9zcmMvZnVuY3Rpb25zL2dldENyeXB0UGFzc3dvcmRcIjtcbmltcG9ydCB7IHVzZUxhenlRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi8uLi8uLi9BcG9sbG8vYXV0aFwiO1xuLy8gaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbi8vIGltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vLi4vLi4vQXBvbGxvL2F1dGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5Gb3JtKCkge1xuXG4gIC8vIGFzeW5jIGZ1bmN0aW9uIHVzZUxvZ2luKGxvZ2luRGF0YTogTG9naW5UeXBlKSB7XG4gIC8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB1c2VRdWVyeShhdXRoLmxvZ2luLCB7XG4gIC8vICAgICB2YXJpYWJsZXM6IGxvZ2luRGF0YSxcbiAgLy8gICAgIHBvbGxJbnRlcnZhbDogNTAwMCxcbiAgLy8gICB9KVxuICBcbiAgLy8gICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwidXNlTG9naW4gZXJyb3I6IFwiLCByZXNwb25zZS5lcnJvcilcbiAgLy8gICB9XG4gIFxuICAvLyAgIHJldHVybiByZXNwb25zZTtcbiAgLy8gfVxuXG4gIHR5cGUgZXJyb3JWYWxpZGF0aW9uID0ge1xuICAgIHN0YXR1czogYm9vbGVhbiwgXG4gICAgbWVzc2FnZTogc3RyaW5nXG4gIH1cbiAgY29uc3QgZGVmYXVsdEVycm9yVmFsaWRhdGlvbiA9IHtcbiAgICBzdGF0dXM6IGZhbHNlLFxuICAgIG1lc3NhZ2U6ICcnLFxuICB9XG5cbiAgY29uc3QgeyB1c2VyQWNjZXNzVG9rZW4sIHNldFVzZXJBY2Nlc3NUb2tlbiB9ID0gUmVhY3QudXNlQ29udGV4dChVc2VyQWNjZXNzVG9rZW5Db250ZXh0KTtcbiAgY29uc3QgWyBpc0xvYWRpbmcsIHNldElzTG9hZGluZyBdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbIGVtYWlsVmFsaWRhdGlvbkVycm9yLCBzZXRFbWFpbFZhbGlkYXRpb25FcnJvciBdID0gUmVhY3QudXNlU3RhdGU8ZXJyb3JWYWxpZGF0aW9uPihkZWZhdWx0RXJyb3JWYWxpZGF0aW9uKTtcbiAgY29uc3QgWyBwYXNzd29yZFZhbGlkYXRpb25FcnJvciwgc2V0UGFzc3dvcmRWYWxpZGF0aW9uRXJyb3IgXSA9IFJlYWN0LnVzZVN0YXRlPGVycm9yVmFsaWRhdGlvbj4oZGVmYXVsdEVycm9yVmFsaWRhdGlvbik7XG4gIGNvbnN0IFtnZXRUb2tlbiwge2Vycm9yLCBsb2FkaW5nLCBkYXRhfV0gPSB1c2VMYXp5UXVlcnkoYXV0aC5sb2dpbik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGlmIChlcnJvcikgcmV0dXJuIGBFcnJvciEgJHtlcnJvcn1gO1xuICBpZiAobG9hZGluZykgcmV0dXJuIGBMb2FkaW5nIC4uLmA7XG4gIGlmIChkYXRhKSByZXR1cm4gZGF0YTtcblxuICAvLyBpZiAoZXJyb3IpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhcInVzZUxvZ2luIGVycm9yOiBcIiwgZXJyb3IpO1xuICAvLyB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIC8vIGl0IGlzIGhlcmUsIGJlY2F1c2UgSSBkb25gdCB3YW5uYSBzYXZlIHNlbnNpdGl2ZSBkYXRhLi4uXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgY29uc3QgbXlGb3JtRGF0YSA9IHtcbiAgICAgIGVtYWlsOiBmb3JtRGF0YS5nZXQoJ2VtYWlsJyksXG4gICAgICBwYXNzd29yZDogZm9ybURhdGEuZ2V0KCdwYXNzd29yZCcpLFxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBnZXRWYWxpZGF0ZWRGb3JtRGF0YTogTG9naW5UeXBlID0gdmFsaWRhdGVJbnB1dFZhbHVlKG15Rm9ybURhdGEpO1xuICAgICAgZ2V0VmFsaWRhdGVkRm9ybURhdGEucGFzc3dvcmQgPSBnZXRDcnlwdFBhc3N3b3JkKGdldFZhbGlkYXRlZEZvcm1EYXRhLnBhc3N3b3JkKTtcbiAgICAgIGNvbnNvbGUubG9nKFwic2hhIGhhc2g6IFwiLCBnZXRWYWxpZGF0ZWRGb3JtRGF0YS5wYXNzd29yZCk7XG4gICAgICBhd2FpdCBnZXRUb2tlbih7XG4gICAgICAgIHZhcmlhYmxlczoge2F1dGhMb2dpbklucHV0OiBnZXRWYWxpZGF0ZWRGb3JtRGF0YX0sXG4gICAgICB9KTtcbiAgICAgIC8vIHNldFVzZXJBY2Nlc3NUb2tlbihkYXRhPy50b2tlbik7XG4gICAgICAvLyBjb25zb2xlLmxvZyh7dXNlckFjY2Vzc1Rva2VufSk7XG4gICAgICAvLyBpZiAoZGF0YT8udG9rZW4pIHtcbiAgICAgIC8vICAgLy8gcm91dGVyLnJlcGxhY2UoJy93ZWF0aGVyJyk7ICAgLy9SZWRpcmVjdCEhIVxuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIC8vICAgdGhyb3cgbmV3IEN1c3RvbUVycm9yKCdBY2Nlc3MgdG9rZW4gaXMgZmFsc2UuJyk7XG4gICAgICAvLyB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yLmlzc3Vlc1swXS5wYXRoWzBdID09PSAnZW1haWwnKSB7XG4gICAgICAgICAgc2V0RW1haWxWYWxpZGF0aW9uRXJyb3Ioe1xuICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IuaXNzdWVzWzBdLm1lc3NhZ2UsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRFbWFpbFZhbGlkYXRpb25FcnJvcihkZWZhdWx0RXJyb3JWYWxpZGF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IuaXNzdWVzWzBdLnBhdGhbMF0gPT09ICdwYXNzd29yZCcpIHtcbiAgICAgICAgICBzZXRQYXNzd29yZFZhbGlkYXRpb25FcnJvcih7XG4gICAgICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5pc3N1ZXNbMF0ubWVzc2FnZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFBhc3N3b3JkVmFsaWRhdGlvbkVycm9yKGRlZmF1bHRFcnJvclZhbGlkYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgQ3VzdG9tRXJyb3IpIHtcbiAgICAgICAgLy9Ub0RvOiBtYWtlIHNvbWUgZXJyb3IgYm94LCB3aGVyZSBkaXNwbGF5IHRoaXMgZXJyb3IuLi5cbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNhY2hlZCBpbiBsb2dpbkZvcm1cIiwgZXJyb3IubWVzc2FnZSwgZXJyb3IubmFtZSwgZXJyb3IpO1xuICAgICAgICAvLyBjb25zb2xlLndhcm4oT2JqZWN0LmtleXMoZXJyb3IpKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNvbXBvbmVudD1cImZvcm1cIiBvblN1Ym1pdD17YXN5bmMgKGUpID0+IGF3YWl0IGhhbmRsZVN1Ym1pdChlKX0gbm9WYWxpZGF0ZSBzeD17eyBtdDogMSB9fT5cbiAgICAgIDxSZXF1aXJlZFRleHRGaWVsZFxuICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICBlcnJvcj17ZW1haWxWYWxpZGF0aW9uRXJyb3Iuc3RhdHVzfVxuICAgICAgICBlcnJvclRleHQ9e2VtYWlsVmFsaWRhdGlvbkVycm9yLm1lc3NhZ2V9XG4gICAgICAgIGF1dG9Gb2N1c1xuICAgICAgLz5cbiAgICAgIDxSZXF1aXJlZFRleHRGaWVsZFxuICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICBlcnJvcj17cGFzc3dvcmRWYWxpZGF0aW9uRXJyb3Iuc3RhdHVzfVxuICAgICAgICBlcnJvclRleHQ9e3Bhc3N3b3JkVmFsaWRhdGlvbkVycm9yLm1lc3NhZ2V9XG4gICAgICAvPlxuXG4gICAgICA8U3VibWl0T3V0bGluZWRCdXR0b24gc3g9e3ttdDogMywgbWI6IDJ9fSBpc0xvYWRpbmc9e2lzTG9hZGluZ30gLz5cbiAgICA8L0JveD5cbiAgKVxufSJdLCJuYW1lcyI6WyJCb3giLCJSZXF1aXJlZFRleHRGaWVsZCIsIlN1Ym1pdE91dGxpbmVkQnV0dG9uIiwidmFsaWRhdGVJbnB1dFZhbHVlIiwiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJ6IiwiVXNlckFjY2Vzc1Rva2VuQ29udGV4dCIsIkN1c3RvbUVycm9yIiwiZ2V0Q3J5cHRQYXNzd29yZCIsInVzZUxhenlRdWVyeSIsImF1dGgiLCJMb2dpbkZvcm0iLCJkZWZhdWx0RXJyb3JWYWxpZGF0aW9uIiwic3RhdHVzIiwibWVzc2FnZSIsInVzZXJBY2Nlc3NUb2tlbiIsInNldFVzZXJBY2Nlc3NUb2tlbiIsInVzZUNvbnRleHQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsImVtYWlsVmFsaWRhdGlvbkVycm9yIiwic2V0RW1haWxWYWxpZGF0aW9uRXJyb3IiLCJwYXNzd29yZFZhbGlkYXRpb25FcnJvciIsInNldFBhc3N3b3JkVmFsaWRhdGlvbkVycm9yIiwiZ2V0VG9rZW4iLCJlcnJvciIsImxvYWRpbmciLCJkYXRhIiwibG9naW4iLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImN1cnJlbnRUYXJnZXQiLCJteUZvcm1EYXRhIiwiZW1haWwiLCJnZXQiLCJwYXNzd29yZCIsImdldFZhbGlkYXRlZEZvcm1EYXRhIiwiY29uc29sZSIsImxvZyIsInZhcmlhYmxlcyIsImF1dGhMb2dpbklucHV0IiwiWm9kRXJyb3IiLCJpc3N1ZXMiLCJwYXRoIiwiY29tcG9uZW50Iiwib25TdWJtaXQiLCJlIiwibm9WYWxpZGF0ZSIsInN4IiwibXQiLCJpZCIsImxhYmVsIiwiYXV0b0NvbXBsZXRlIiwidHlwZSIsImVycm9yVGV4dCIsImF1dG9Gb2N1cyIsIm1iIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/loginPage/Form/index.tsx\n"));

/***/ })

});