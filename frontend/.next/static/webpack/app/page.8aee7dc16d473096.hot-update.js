"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/hooks/useSearchBooks.ts":
/*!*************************************!*\
  !*** ./src/hooks/useSearchBooks.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useSearchBooks = (searchTerm, setBooks, books)=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if ((books === null || books === void 0 ? void 0 : books.length) > 0) {\n            const findBooksByTitle = (searchTerm)=>{\n                const lowerCaseTerm = searchTerm === null || searchTerm === void 0 ? void 0 : searchTerm.toLowerCase();\n                return books.filter((book)=>{\n                    var _book_title_toLowerCase, _book_title;\n                    return book === null || book === void 0 ? void 0 : (_book_title = book.title) === null || _book_title === void 0 ? void 0 : (_book_title_toLowerCase = _book_title.toLowerCase()) === null || _book_title_toLowerCase === void 0 ? void 0 : _book_title_toLowerCase.includes(lowerCaseTerm);\n                });\n            };\n            const filteredBooks = findBooksByTitle(searchTerm);\n            console.log(filteredBooks);\n            setBooks(filteredBooks);\n        }\n    }, [\n        searchTerm\n    ]);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSearchBooks);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2VTZWFyY2hCb29rcy50cyIsIm1hcHBpbmdzIjoiOzs7QUFBa0M7QUFLbEMsTUFBTUMsaUJBQWlCLENBQUNDLFlBQW1CQyxVQUFtQ0M7SUFDNUVKLGdEQUFTQSxDQUFDO1FBRVIsSUFBR0ksQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPQyxNQUFNLElBQUMsR0FBRTtZQUNqQixNQUFNQyxtQkFBbUIsQ0FBQ0o7Z0JBQ3hCLE1BQU1LLGdCQUFnQkwsdUJBQUFBLGlDQUFBQSxXQUFZTSxXQUFXO2dCQUM3QyxPQUFPSixNQUFNSyxNQUFNLENBQUNDLENBQUFBO3dCQUFRQSx5QkFBQUE7MkJBQUFBLGlCQUFBQSw0QkFBQUEsY0FBQUEsS0FBTUMsS0FBSyxjQUFYRCxtQ0FBQUEsMEJBQUFBLFlBQWFGLFdBQVcsZ0JBQXhCRSw4Q0FBQUEsd0JBQTRCRSxRQUFRLENBQUNMOztZQUNuRTtZQUNBLE1BQU1NLGdCQUFnQlAsaUJBQWlCSjtZQUN2Q1ksUUFBUUMsR0FBRyxDQUFDRjtZQUVaVixTQUFTVTtRQUNYO0lBRUYsR0FBRztRQUFDWDtLQUFXO0FBQ2pCO0FBRUEsK0RBQWVELGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVNlYXJjaEJvb2tzLnRzPzQ4M2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm9va1R5cGUsIFNldFN0YXRlVHlwZSB9IGZyb20gJ0AvdXRpbHMvdHlwZXMnO1xuXG5cblxuY29uc3QgdXNlU2VhcmNoQm9va3MgPSAoc2VhcmNoVGVybTpzdHJpbmcsIHNldEJvb2tzOlNldFN0YXRlVHlwZTxCb29rVHlwZVtdPiwgYm9va3M6Qm9va1R5cGVbXSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgaWYoYm9va3M/Lmxlbmd0aD4wKXtcbiAgICAgIGNvbnN0IGZpbmRCb29rc0J5VGl0bGUgPSAoc2VhcmNoVGVybTpzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgbG93ZXJDYXNlVGVybSA9IHNlYXJjaFRlcm0/LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBib29rcy5maWx0ZXIoYm9vayA9PiBib29rPy50aXRsZT8udG9Mb3dlckNhc2UoKT8uaW5jbHVkZXMobG93ZXJDYXNlVGVybSkpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkQm9va3MgPSBmaW5kQm9va3NCeVRpdGxlKHNlYXJjaFRlcm0pO1xuICAgICAgY29uc29sZS5sb2coZmlsdGVyZWRCb29rcyk7XG4gICAgICBcbiAgICAgIHNldEJvb2tzKGZpbHRlcmVkQm9va3MpO1xuICAgIH1cbiAgXG4gIH0sIFtzZWFyY2hUZXJtXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VTZWFyY2hCb29rcztcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTZWFyY2hCb29rcyIsInNlYXJjaFRlcm0iLCJzZXRCb29rcyIsImJvb2tzIiwibGVuZ3RoIiwiZmluZEJvb2tzQnlUaXRsZSIsImxvd2VyQ2FzZVRlcm0iLCJ0b0xvd2VyQ2FzZSIsImZpbHRlciIsImJvb2siLCJ0aXRsZSIsImluY2x1ZGVzIiwiZmlsdGVyZWRCb29rcyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/useSearchBooks.ts\n"));

/***/ })

});