/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/@next/font/local/target.css?{\"path\":\"pages/_app.js\",\"import\":\"\",\"arguments\":[{\"src\":\"../fonts/GingerPro-Bold.woff2\",\"variable\":\"--font-ginger\"}],\"variableName\":\"GingerPro\"}":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@next/font/local/target.css?{"path":"pages/_app.js","import":"","arguments":[{"src":"../fonts/GingerPro-Bold.woff2","variable":"--font-ginger"}],"variableName":"GingerPro"} ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"style\": {\"fontFamily\":\"'__GingerPro_8bdc53', '__GingerPro_Fallback_8bdc53'\"},\n\t\"className\": \"__className_8bdc53\",\n\t\"variable\": \"__variable_8bdc53\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG5leHQvZm9udC9sb2NhbC90YXJnZXQuY3NzP3tcInBhdGhcIjpcInBhZ2VzL19hcHAuanNcIixcImltcG9ydFwiOlwiXCIsXCJhcmd1bWVudHNcIjpbe1wic3JjXCI6XCIuLi9mb250cy9HaW5nZXJQcm8tQm9sZC53b2ZmMlwiLFwidmFyaWFibGVcIjpcIi0tZm9udC1naW5nZXJcIn1dLFwidmFyaWFibGVOYW1lXCI6XCJHaW5nZXJQcm9cIn0uanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBLFdBQVcsbUVBQW1FO0FBQzlFO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlZ2FsYnVsbGV0Ly4vbm9kZV9tb2R1bGVzL0BuZXh0L2ZvbnQvbG9jYWwvdGFyZ2V0LmNzcz80OGEwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN0eWxlXCI6IHtcImZvbnRGYW1pbHlcIjpcIidfX0dpbmdlclByb184YmRjNTMnLCAnX19HaW5nZXJQcm9fRmFsbGJhY2tfOGJkYzUzJ1wifSxcblx0XCJjbGFzc05hbWVcIjogXCJfX2NsYXNzTmFtZV84YmRjNTNcIixcblx0XCJ2YXJpYWJsZVwiOiBcIl9fdmFyaWFibGVfOGJkYzUzXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@next/font/local/target.css?{\"path\":\"pages/_app.js\",\"import\":\"\",\"arguments\":[{\"src\":\"../fonts/GingerPro-Bold.woff2\",\"variable\":\"--font-ginger\"}],\"variableName\":\"GingerPro\"}\n");

/***/ }),

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FormContext\": () => (/* binding */ FormContext),\n/* harmony export */   \"default\": () => (/* binding */ FormProvider),\n/* harmony export */   \"useFormData\": () => (/* binding */ useFormData)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst FormContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction FormProvider({ children  }) {\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const setFormValues = (values)=>{\n        setData((prevValues)=>({\n                ...prevValues,\n                ...values\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormContext.Provider, {\n        value: {\n            data,\n            setFormValues\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/matthewasir/Documents/tlbform/context/index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\nconst useFormData = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FormContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTREO0FBRXJELE1BQU1HLDRCQUFjRixvREFBYUEsR0FBRztBQUU1QixTQUFTRyxhQUFhLEVBQUVDLFNBQVEsRUFBRSxFQUFFO0lBQ2pELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQyxDQUFDO0lBRWxDLE1BQU1RLGdCQUFnQixDQUFDQyxTQUFXO1FBQ2hDRixRQUFRLENBQUNHLGFBQWdCO2dCQUN2QixHQUFHQSxVQUFVO2dCQUNiLEdBQUdELE1BQU07WUFDWDtJQUNGO0lBRUEscUJBQ0UsOERBQUNOLFlBQVlRLFFBQVE7UUFBQ0MsT0FBTztZQUFFTjtZQUFNRTtRQUFjO2tCQUNoREg7Ozs7OztBQUdQLENBQUM7QUFFTSxNQUFNUSxjQUFjLElBQU1YLGlEQUFVQSxDQUFDQyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVnYWxidWxsZXQvLi9jb250ZXh0L2luZGV4LmpzPzVkMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IEZvcm1Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBzZXRGb3JtVmFsdWVzID0gKHZhbHVlcykgPT4ge1xuICAgIHNldERhdGEoKHByZXZWYWx1ZXMpID0+ICh7XG4gICAgICAuLi5wcmV2VmFsdWVzLFxuICAgICAgLi4udmFsdWVzLFxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBkYXRhLCBzZXRGb3JtVmFsdWVzIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRm9ybUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VGb3JtRGF0YSA9ICgpID0+IHVzZUNvbnRleHQoRm9ybUNvbnRleHQpO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJGb3JtQ29udGV4dCIsIkZvcm1Qcm92aWRlciIsImNoaWxkcmVuIiwiZGF0YSIsInNldERhdGEiLCJzZXRGb3JtVmFsdWVzIiwidmFsdWVzIiwicHJldlZhbHVlcyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VGb3JtRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GingerPro\": () => (/* reexport default from dynamic */ _next_font_local_target_css_path_pages_app_js_import_arguments_src_fonts_GingerPro_Bold_woff2_variable_font_ginger_variableName_GingerPro___WEBPACK_IMPORTED_MODULE_4___default.a),\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_font_local_target_css_path_pages_app_js_import_arguments_src_fonts_GingerPro_Bold_woff2_variable_font_ginger_variableName_GingerPro___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @next/font/local/target.css?{\"path\":\"pages/_app.js\",\"import\":\"\",\"arguments\":[{\"src\":\"../fonts/GingerPro-Bold.woff2\",\"variable\":\"--font-ginger\"}],\"variableName\":\"GingerPro\"} */ \"./node_modules/@next/font/local/target.css?{\\\"path\\\":\\\"pages/_app.js\\\",\\\"import\\\":\\\"\\\",\\\"arguments\\\":[{\\\"src\\\":\\\"../fonts/GingerPro-Bold.woff2\\\",\\\"variable\\\":\\\"--font-ginger\\\"}],\\\"variableName\\\":\\\"GingerPro\\\"}\");\n/* harmony import */ var _next_font_local_target_css_path_pages_app_js_import_arguments_src_fonts_GingerPro_Bold_woff2_variable_font_ginger_variableName_GingerPro___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_font_local_target_css_path_pages_app_js_import_arguments_src_fonts_GingerPro_Bold_woff2_variable_font_ginger_variableName_GingerPro___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context */ \"./context/index.js\");\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"45fb36b8d79e09d9\",\n                dynamic: [\n                    (_next_font_local_target_css_path_pages_app_js_import_arguments_src_fonts_GingerPro_Bold_woff2_variable_font_ginger_variableName_GingerPro___WEBPACK_IMPORTED_MODULE_4___default().style.fontFamily)\n                ],\n                children: `:root{--font-ginger:${(_next_font_local_target_css_path_pages_app_js_import_arguments_src_fonts_GingerPro_Bold_woff2_variable_font_ginger_variableName_GingerPro___WEBPACK_IMPORTED_MODULE_4___default().style.fontFamily)}}`\n            }, void 0, false, void 0, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"45fb36b8d79e09d9\",\n                        [\n                            (_next_font_local_target_css_path_pages_app_js_import_arguments_src_fonts_GingerPro_Bold_woff2_variable_font_ginger_variableName_GingerPro___WEBPACK_IMPORTED_MODULE_4___default().style.fontFamily)\n                        ]\n                    ]\n                ]) + \" \" + (pageProps && pageProps.className != null && pageProps.className || \"\")\n            }, void 0, false, {\n                fileName: \"/Users/matthewasir/Documents/tlbform/pages/_app.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/matthewasir/Documents/tlbform/pages/_app.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUlhQTs7QUFKaUI7QUFFTztBQU90QixTQUFTRSxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDcEQscUJBQ0UsOERBQUNILGdEQUFZQTs7Ozs7b0JBSVlELG9NQUEwQjs7aURBQTFCQSxvTUFBMEI7OzBCQUlqRCw4REFBQ0c7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7NEJBSkRKLG9NQUEwQjs7OzRCQUlsQ0ksYUFBQUEsK0JBQUFBOzs7Ozs7Ozs7Ozs7QUFHckIsQ0FBQztBQWxCWUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWdhbGJ1bGxldC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IGxvY2FsRm9udCBmcm9tIFwiQG5leHQvZm9udC9sb2NhbFwiO1xuaW1wb3J0IEZvcm1Qcm92aWRlciBmcm9tIFwiQC9jb250ZXh0XCI7XG5cbmV4cG9ydCBjb25zdCBHaW5nZXJQcm8gPSBsb2NhbEZvbnQoe1xuICBzcmM6IFwiLi4vZm9udHMvR2luZ2VyUHJvLUJvbGQud29mZjJcIixcbiAgdmFyaWFibGU6IFwiLS1mb250LWdpbmdlclwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybVByb3ZpZGVyPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgOnJvb3Qge1xuICAgICAgICAgICAgLS1mb250LWdpbmdlcjogJHtHaW5nZXJQcm8uc3R5bGUuZm9udEZhbWlseX07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0Zvcm1Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJHaW5nZXJQcm8iLCJGb3JtUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdHlsZSIsImZvbnRGYW1pbHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();