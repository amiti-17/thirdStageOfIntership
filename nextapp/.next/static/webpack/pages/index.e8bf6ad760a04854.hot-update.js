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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_RequiredTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/RequiredTextField */ \"./components/loginPage/Form/components/RequiredTextField.tsx\");\n/* harmony import */ var _components_SubmitOutlinedButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SubmitOutlinedButton */ \"./components/loginPage/Form/components/SubmitOutlinedButton.tsx\");\n/* harmony import */ var _src_functions_validations_loginInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/functions/validations/loginInput */ \"./src/functions/validations/loginInput/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! zod */ \"./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _src_Contexts_userAccessTokenContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/Contexts/userAccessTokenContext */ \"./src/Contexts/userAccessTokenContext.ts\");\n/* harmony import */ var _src_CustomError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/CustomError */ \"./src/CustomError/index.ts\");\n/* harmony import */ var _src_functions_getCryptPassword__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/functions/getCryptPassword */ \"./src/functions/getCryptPassword.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _Apollo_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Apollo/auth */ \"./Apollo/auth.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n// import { useQuery } from \"@apollo/client\";\n// import { auth } from \"../../../Apollo/auth\";\nfunction LoginForm() {\n    _s();\n    const defaultErrorValidation = {\n        status: false,\n        message: \"\"\n    };\n    const { userAccessToken, setUserAccessToken } = react__WEBPACK_IMPORTED_MODULE_4___default().useContext(_src_Contexts_userAccessTokenContext__WEBPACK_IMPORTED_MODULE_6__.UserAccessTokenContext);\n    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);\n    const [emailValidationError, setEmailValidationError] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(defaultErrorValidation);\n    const [passwordValidationError, setPasswordValidationError] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(defaultErrorValidation);\n    const [getToken, { error, loading, data }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useLazyQuery)(_Apollo_auth__WEBPACK_IMPORTED_MODULE_9__.auth.login);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    // if (error) return `Error! ${error}`;\n    // if (loading) return `Loading ...`;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (data) {\n            var _data_login, _data;\n            console.log(data.login);\n            if ((_data = data) === null || _data === void 0 ? void 0 : (_data_login = _data.login) === null || _data_login === void 0 ? void 0 : _data_login.token) {\n                setUserAccessToken(data.login.token);\n                router.replace(\"/weather\");\n            } else {\n                throw new _src_CustomError__WEBPACK_IMPORTED_MODULE_7__[\"default\"](\"Access token is false.\");\n            }\n        }\n    }, [\n        loading,\n        data\n    ]);\n    // if (error) {\n    //   console.log(\"useLogin error: \", error);\n    // }\n    const handleSubmit = (event)=>{\n        // it is here, because I don`t wanna save sensitive data...\n        event.preventDefault();\n        setIsLoading(true);\n        const formData = new FormData(event.currentTarget);\n        const myFormData = {\n            email: formData.get(\"email\"),\n            password: formData.get(\"password\")\n        };\n        try {\n            const getValidatedFormData = (0,_src_functions_validations_loginInput__WEBPACK_IMPORTED_MODULE_3__.validateInputValue)(myFormData);\n            getValidatedFormData.password = (0,_src_functions_getCryptPassword__WEBPACK_IMPORTED_MODULE_8__.getCryptPassword)(getValidatedFormData.password);\n            console.log(\"sha hash: \", getValidatedFormData.password);\n            getToken({\n                variables: {\n                    authLoginInput: getValidatedFormData\n                }\n            });\n            if (error.message === _src_CustomError__WEBPACK_IMPORTED_MODULE_7__[\"default\"].unauthorized && error.graphQLErrors.find((el)=>el.message === _src_CustomError__WEBPACK_IMPORTED_MODULE_7__[\"default\"].unauthorized)) {\n                throw new _src_CustomError__WEBPACK_IMPORTED_MODULE_7__[\"default\"](_src_CustomError__WEBPACK_IMPORTED_MODULE_7__[\"default\"].unauthorizedMsg);\n            }\n        // Object.keys(error).forEach(key => {\n        //   console.log(key, error[key])\n        // })\n        } catch (error) {\n            if (error instanceof zod__WEBPACK_IMPORTED_MODULE_11__.z.ZodError) {\n                if (error.issues[0].path[0] === \"email\") {\n                    setEmailValidationError({\n                        status: true,\n                        message: error.issues[0].message\n                    });\n                } else {\n                    setEmailValidationError(defaultErrorValidation);\n                }\n                if (error.issues[0].path[0] === \"password\") {\n                    setPasswordValidationError({\n                        status: true,\n                        message: error.issues[0].message\n                    });\n                } else {\n                    setPasswordValidationError(defaultErrorValidation);\n                }\n            } else if (error instanceof _src_CustomError__WEBPACK_IMPORTED_MODULE_7__[\"default\"]) {\n                //ToDo: make some error box, where display this error...\n                console.log(error.message);\n            } else {\n                // console.log(\"cached in loginForm\", error.message, error.name, error);\n                // console.warn(Object.keys(error));\n                throw error;\n            }\n        } finally{\n            setIsLoading(false);\n        }\n        console.log();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {\n        component: \"form\",\n        onSubmit: async (e)=>await handleSubmit(e),\n        noValidate: true,\n        sx: {\n            mt: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequiredTextField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: \"email\",\n                label: \"Email Address\",\n                autoComplete: \"email\",\n                type: \"email\",\n                error: emailValidationError.status,\n                errorText: emailValidationError.message,\n                autoFocus: true\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequiredTextField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: \"password\",\n                label: \"Password\",\n                type: \"password\",\n                autoComplete: \"current-password\",\n                error: passwordValidationError.status,\n                errorText: passwordValidationError.message\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubmitOutlinedButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                sx: {\n                    mt: 3,\n                    mb: 2\n                },\n                isLoading: isLoading\n            }, void 0, false, {\n                fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n                lineNumber: 147,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sysgears/project/Tims/thirdStageOfIntership/nextapp/components/loginPage/Form/index.tsx\",\n        lineNumber: 128,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginForm, \"lRcgVpsRuckz6ApH//JwHC5993U=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_10__.useLazyQuery,\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = LoginForm;\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xvZ2luUGFnZS9Gb3JtL2luZGV4LnRzeD82NzM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgUmVxdWlyZWRUZXh0RmllbGQgZnJvbSBcIi4vY29tcG9uZW50cy9SZXF1aXJlZFRleHRGaWVsZFwiO1xuaW1wb3J0IFN1Ym1pdE91dGxpbmVkQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvU3VibWl0T3V0bGluZWRCdXR0b25cIjtcbmltcG9ydCB7IHZhbGlkYXRlSW5wdXRWYWx1ZSB9IGZyb20gXCIuLi8uLi8uLi9zcmMvZnVuY3Rpb25zL3ZhbGlkYXRpb25zL2xvZ2luSW5wdXRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgTG9naW5UeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9jb25maWcvc3lzdGVtL3R5cGVzL2xvZ2luXCI7XG5pbXBvcnQgeyBVc2VyQWNjZXNzVG9rZW5Db250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9Db250ZXh0cy91c2VyQWNjZXNzVG9rZW5Db250ZXh0XCI7XG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSBcIi4uLy4uLy4uL3NyYy9DdXN0b21FcnJvclwiO1xuaW1wb3J0IHsgZ2V0Q3J5cHRQYXNzd29yZCB9IGZyb20gXCIuLi8uLi8uLi9zcmMvZnVuY3Rpb25zL2dldENyeXB0UGFzc3dvcmRcIjtcbmltcG9ydCB7IHVzZUxhenlRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi8uLi8uLi9BcG9sbG8vYXV0aFwiO1xuaW1wb3J0IHsgZ3JhcGhRTFJlc3VsdEhhc0Vycm9yIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50L3V0aWxpdGllc1wiO1xuLy8gaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbi8vIGltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vLi4vLi4vQXBvbGxvL2F1dGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5Gb3JtKCkge1xuXG4gIC8vIGFzeW5jIGZ1bmN0aW9uIHVzZUxvZ2luKGxvZ2luRGF0YTogTG9naW5UeXBlKSB7XG4gIC8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB1c2VRdWVyeShhdXRoLmxvZ2luLCB7XG4gIC8vICAgICB2YXJpYWJsZXM6IGxvZ2luRGF0YSxcbiAgLy8gICAgIHBvbGxJbnRlcnZhbDogNTAwMCxcbiAgLy8gICB9KVxuICBcbiAgLy8gICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwidXNlTG9naW4gZXJyb3I6IFwiLCByZXNwb25zZS5lcnJvcilcbiAgLy8gICB9XG4gIFxuICAvLyAgIHJldHVybiByZXNwb25zZTtcbiAgLy8gfVxuXG4gIHR5cGUgZXJyb3JWYWxpZGF0aW9uID0ge1xuICAgIHN0YXR1czogYm9vbGVhbiwgXG4gICAgbWVzc2FnZTogc3RyaW5nXG4gIH1cbiAgY29uc3QgZGVmYXVsdEVycm9yVmFsaWRhdGlvbiA9IHtcbiAgICBzdGF0dXM6IGZhbHNlLFxuICAgIG1lc3NhZ2U6ICcnLFxuICB9XG5cbiAgY29uc3QgeyB1c2VyQWNjZXNzVG9rZW4sIHNldFVzZXJBY2Nlc3NUb2tlbiB9ID0gUmVhY3QudXNlQ29udGV4dChVc2VyQWNjZXNzVG9rZW5Db250ZXh0KTtcbiAgY29uc3QgWyBpc0xvYWRpbmcsIHNldElzTG9hZGluZyBdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbIGVtYWlsVmFsaWRhdGlvbkVycm9yLCBzZXRFbWFpbFZhbGlkYXRpb25FcnJvciBdID0gUmVhY3QudXNlU3RhdGU8ZXJyb3JWYWxpZGF0aW9uPihkZWZhdWx0RXJyb3JWYWxpZGF0aW9uKTtcbiAgY29uc3QgWyBwYXNzd29yZFZhbGlkYXRpb25FcnJvciwgc2V0UGFzc3dvcmRWYWxpZGF0aW9uRXJyb3IgXSA9IFJlYWN0LnVzZVN0YXRlPGVycm9yVmFsaWRhdGlvbj4oZGVmYXVsdEVycm9yVmFsaWRhdGlvbik7XG4gIGNvbnN0IFtnZXRUb2tlbiwge2Vycm9yLCBsb2FkaW5nLCBkYXRhfV0gPSB1c2VMYXp5UXVlcnkoYXV0aC5sb2dpbik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIGlmIChlcnJvcikgcmV0dXJuIGBFcnJvciEgJHtlcnJvcn1gO1xuICAvLyBpZiAobG9hZGluZykgcmV0dXJuIGBMb2FkaW5nIC4uLmA7XG4gIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEubG9naW4pO1xuICAgICAgaWYgKGRhdGE/LmxvZ2luPy50b2tlbikge1xuICAgICAgICBzZXRVc2VyQWNjZXNzVG9rZW4oZGF0YS5sb2dpbi50b2tlbik7XG4gICAgICAgIHJvdXRlci5yZXBsYWNlKCcvd2VhdGhlcicpOyBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBDdXN0b21FcnJvcignQWNjZXNzIHRva2VuIGlzIGZhbHNlLicpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2xvYWRpbmcsIGRhdGFdKVxuXG4gIC8vIGlmIChlcnJvcikge1xuICAvLyAgIGNvbnNvbGUubG9nKFwidXNlTG9naW4gZXJyb3I6IFwiLCBlcnJvcik7XG4gIC8vIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgLy8gaXQgaXMgaGVyZSwgYmVjYXVzZSBJIGRvbmB0IHdhbm5hIHNhdmUgc2Vuc2l0aXZlIGRhdGEuLi5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zdCBteUZvcm1EYXRhID0ge1xuICAgICAgZW1haWw6IGZvcm1EYXRhLmdldCgnZW1haWwnKSxcbiAgICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyksXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGdldFZhbGlkYXRlZEZvcm1EYXRhOiBMb2dpblR5cGUgPSB2YWxpZGF0ZUlucHV0VmFsdWUobXlGb3JtRGF0YSk7XG4gICAgICBnZXRWYWxpZGF0ZWRGb3JtRGF0YS5wYXNzd29yZCA9IGdldENyeXB0UGFzc3dvcmQoZ2V0VmFsaWRhdGVkRm9ybURhdGEucGFzc3dvcmQpO1xuICAgICAgY29uc29sZS5sb2coXCJzaGEgaGFzaDogXCIsIGdldFZhbGlkYXRlZEZvcm1EYXRhLnBhc3N3b3JkKTtcbiAgICAgIGdldFRva2VuKHtcbiAgICAgICAgdmFyaWFibGVzOiB7YXV0aExvZ2luSW5wdXQ6IGdldFZhbGlkYXRlZEZvcm1EYXRhfSxcbiAgICAgIH0pO1xuICAgICAgaWYgKGVycm9yLm1lc3NhZ2UgPT09IEN1c3RvbUVycm9yLnVuYXV0aG9yaXplZCAmJiBlcnJvci5ncmFwaFFMRXJyb3JzLmZpbmQoZWwgPT4gZWwubWVzc2FnZSA9PT0gQ3VzdG9tRXJyb3IudW5hdXRob3JpemVkKSkge1xuICAgICAgICB0aHJvdyBuZXcgQ3VzdG9tRXJyb3IoQ3VzdG9tRXJyb3IudW5hdXRob3JpemVkTXNnKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gT2JqZWN0LmtleXMoZXJyb3IpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coa2V5LCBlcnJvcltrZXldKVxuICAgICAgLy8gfSlcbiAgICAgIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiB6LlpvZEVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvci5pc3N1ZXNbMF0ucGF0aFswXSA9PT0gJ2VtYWlsJykge1xuICAgICAgICAgIHNldEVtYWlsVmFsaWRhdGlvbkVycm9yKHtcbiAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLmlzc3Vlc1swXS5tZXNzYWdlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0RW1haWxWYWxpZGF0aW9uRXJyb3IoZGVmYXVsdEVycm9yVmFsaWRhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yLmlzc3Vlc1swXS5wYXRoWzBdID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgICAgc2V0UGFzc3dvcmRWYWxpZGF0aW9uRXJyb3Ioe1xuICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IuaXNzdWVzWzBdLm1lc3NhZ2UsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRQYXNzd29yZFZhbGlkYXRpb25FcnJvcihkZWZhdWx0RXJyb3JWYWxpZGF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlcnJvciBpbnN0YW5jZW9mIEN1c3RvbUVycm9yKSB7XG4gICAgICAgIC8vVG9EbzogbWFrZSBzb21lIGVycm9yIGJveCwgd2hlcmUgZGlzcGxheSB0aGlzIGVycm9yLi4uXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjYWNoZWQgaW4gbG9naW5Gb3JtXCIsIGVycm9yLm1lc3NhZ2UsIGVycm9yLm5hbWUsIGVycm9yKTtcbiAgICAgICAgLy8gY29uc29sZS53YXJuKE9iamVjdC5rZXlzKGVycm9yKSk7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZygpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjb21wb25lbnQ9XCJmb3JtXCIgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiBhd2FpdCBoYW5kbGVTdWJtaXQoZSl9IG5vVmFsaWRhdGUgc3g9e3sgbXQ6IDEgfX0+XG4gICAgICA8UmVxdWlyZWRUZXh0RmllbGRcbiAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgZXJyb3I9e2VtYWlsVmFsaWRhdGlvbkVycm9yLnN0YXR1c31cbiAgICAgICAgZXJyb3JUZXh0PXtlbWFpbFZhbGlkYXRpb25FcnJvci5tZXNzYWdlfVxuICAgICAgICBhdXRvRm9jdXNcbiAgICAgIC8+XG4gICAgICA8UmVxdWlyZWRUZXh0RmllbGRcbiAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgZXJyb3I9e3Bhc3N3b3JkVmFsaWRhdGlvbkVycm9yLnN0YXR1c31cbiAgICAgICAgZXJyb3JUZXh0PXtwYXNzd29yZFZhbGlkYXRpb25FcnJvci5tZXNzYWdlfVxuICAgICAgLz5cblxuICAgICAgPFN1Ym1pdE91dGxpbmVkQnV0dG9uIHN4PXt7bXQ6IDMsIG1iOiAyfX0gaXNMb2FkaW5nPXtpc0xvYWRpbmd9IC8+XG4gICAgPC9Cb3g+XG4gIClcbn0iXSwibmFtZXMiOlsiQm94IiwiUmVxdWlyZWRUZXh0RmllbGQiLCJTdWJtaXRPdXRsaW5lZEJ1dHRvbiIsInZhbGlkYXRlSW5wdXRWYWx1ZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwieiIsIlVzZXJBY2Nlc3NUb2tlbkNvbnRleHQiLCJDdXN0b21FcnJvciIsImdldENyeXB0UGFzc3dvcmQiLCJ1c2VMYXp5UXVlcnkiLCJhdXRoIiwiTG9naW5Gb3JtIiwiZGVmYXVsdEVycm9yVmFsaWRhdGlvbiIsInN0YXR1cyIsIm1lc3NhZ2UiLCJ1c2VyQWNjZXNzVG9rZW4iLCJzZXRVc2VyQWNjZXNzVG9rZW4iLCJ1c2VDb250ZXh0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlU3RhdGUiLCJlbWFpbFZhbGlkYXRpb25FcnJvciIsInNldEVtYWlsVmFsaWRhdGlvbkVycm9yIiwicGFzc3dvcmRWYWxpZGF0aW9uRXJyb3IiLCJzZXRQYXNzd29yZFZhbGlkYXRpb25FcnJvciIsImdldFRva2VuIiwiZXJyb3IiLCJsb2FkaW5nIiwiZGF0YSIsImxvZ2luIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwicmVwbGFjZSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiY3VycmVudFRhcmdldCIsIm15Rm9ybURhdGEiLCJlbWFpbCIsImdldCIsInBhc3N3b3JkIiwiZ2V0VmFsaWRhdGVkRm9ybURhdGEiLCJ2YXJpYWJsZXMiLCJhdXRoTG9naW5JbnB1dCIsInVuYXV0aG9yaXplZCIsImdyYXBoUUxFcnJvcnMiLCJmaW5kIiwiZWwiLCJ1bmF1dGhvcml6ZWRNc2ciLCJab2RFcnJvciIsImlzc3VlcyIsInBhdGgiLCJjb21wb25lbnQiLCJvblN1Ym1pdCIsImUiLCJub1ZhbGlkYXRlIiwic3giLCJtdCIsImlkIiwibGFiZWwiLCJhdXRvQ29tcGxldGUiLCJ0eXBlIiwiZXJyb3JUZXh0IiwiYXV0b0ZvY3VzIiwibWIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/loginPage/Form/index.tsx\n"));

/***/ })

});