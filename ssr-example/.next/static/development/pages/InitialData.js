(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\InitialData.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FInitialData&absolutePagePath=E%3A%5CTraining%5CTrainingWorkSpaces%5CVDSI_React_May_Batch_01%5Cssr-example%5Cpages%5CInitialData.js!./":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FInitialData&absolutePagePath=E%3A%5CTraining%5CTrainingWorkSpaces%5CVDSI_React_May_Batch_01%5Cssr-example%5Cpages%5CInitialData.js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/InitialData", function() {
      var page = __webpack_require__(/*! ./pages/InitialData.js */ "./pages/InitialData.js")
      if(true) {
        module.hot.accept(/*! ./pages/InitialData.js */ "./pages/InitialData.js", function() {
          if(!next.router.components["/InitialData"]) return
          var updatedPage = __webpack_require__(/*! ./pages/InitialData.js */ "./pages/InitialData.js")
          next.router.update("/InitialData", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_7aff549c98b978433226 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_7aff549c98b978433226 */ "dll-reference dll_7aff549c98b978433226"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/InitialData.js":
/*!******************************!*\
  !*** ./pages/InitialData.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Training\\TrainingWorkSpaces\\VDSI_React_May_Batch_01\\ssr-example\\pages\\InitialData.js";


const InitialData = () => {
  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(data => setData(data));
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Loading Data"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, data.map(el => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: el.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, el.name))));
};

/* harmony default export */ __webpack_exports__["default"] = (InitialData);

/***/ }),

/***/ 2:
/*!*********************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2FInitialData&absolutePagePath=E%3A%5CTraining%5CTrainingWorkSpaces%5CVDSI_React_May_Batch_01%5Cssr-example%5Cpages%5CInitialData.js ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2FInitialData&absolutePagePath=E%3A%5CTraining%5CTrainingWorkSpaces%5CVDSI_React_May_Batch_01%5Cssr-example%5Cpages%5CInitialData.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FInitialData&absolutePagePath=E%3A%5CTraining%5CTrainingWorkSpaces%5CVDSI_React_May_Batch_01%5Cssr-example%5Cpages%5CInitialData.js!./");


/***/ }),

/***/ "dll-reference dll_7aff549c98b978433226":
/*!*******************************************!*\
  !*** external "dll_7aff549c98b978433226" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_7aff549c98b978433226;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=InitialData.js.map