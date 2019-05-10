webpackHotUpdate("static\\development\\pages\\InitialData.js",{

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

/***/ })

})
//# sourceMappingURL=InitialData.js.092c1bbfd1e6634fb28b.hot-update.js.map