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

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsdUdBQTZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJpb3dpbmRvd3MvLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/NjZlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./components/Shared/GoTop.js":
/*!************************************!*\
  !*** ./components/Shared/GoTop.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GoTop)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass GoTop extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            is_visible: false\n        };\n    }\n    componentDidMount() {\n        var scrollComponent = this;\n        document.addEventListener(\"scroll\", function(e) {\n            scrollComponent.toggleVisibility();\n        });\n    }\n    toggleVisibility() {\n        if (window.pageYOffset > 300) {\n            this.setState({\n                is_visible: true\n            });\n        } else {\n            this.setState({\n                is_visible: false\n            });\n        }\n    }\n    scrollToTop() {\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    }\n    render() {\n        const { is_visible  } = this.state;\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"scroll-to-top\",\n                children: is_visible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"pe-7s-angle-up\",\n                    onClick: ()=>this.scrollToTop()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mugen\\\\Desktop\\\\pungentreact-17\\\\pungentreact-17\\\\pungent-react-multipurpose-startup-digital-agency-template\\\\with-dynamic-contact-form\\\\pungent\\\\components\\\\Shared\\\\GoTop.js\",\n                    lineNumber: 43,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mugen\\\\Desktop\\\\pungentreact-17\\\\pungentreact-17\\\\pungent-react-multipurpose-startup-digital-agency-template\\\\with-dynamic-contact-form\\\\pungent\\\\components\\\\Shared\\\\GoTop.js\",\n                lineNumber: 41,\n                columnNumber: 17\n            }, this)\n        }, void 0, false));\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NoYXJlZC9Hb1RvcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFFekIsTUFBTUUsS0FBSyxTQUFTRCw0Q0FBUztnQkFDNUJFLEtBQUssQ0FBRSxDQUFDO1FBQ2hCLEtBQUssQ0FBQ0EsS0FBSztRQUNYLElBQUksQ0FBQ0MsS0FBSyxHQUFHLENBQUM7WUFDVkMsVUFBVSxFQUFFLEtBQUs7UUFDckIsQ0FBQztJQUNMLENBQUM7SUFFREMsaUJBQWlCLEdBQUcsQ0FBQztRQUNqQixHQUFHLENBQUNDLGVBQWUsR0FBRyxJQUFJO1FBQzFCQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLENBQVEsU0FBRSxRQUFRLENBQUNDLENBQUMsRUFBRSxDQUFDO1lBQzdDSCxlQUFlLENBQUNJLGdCQUFnQjtRQUNwQyxDQUFDO0lBQ0wsQ0FBQztJQUVEQSxnQkFBZ0IsR0FBRyxDQUFDO1FBQ2hCLEVBQUUsRUFBRUMsTUFBTSxDQUFDQyxXQUFXLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQztnQkFDWFQsVUFBVSxFQUFFLElBQUk7WUFDcEIsQ0FBQztRQUNMLENBQUMsTUFBTSxDQUFDO1lBQ0osSUFBSSxDQUFDUyxRQUFRLENBQUMsQ0FBQztnQkFDWFQsVUFBVSxFQUFFLEtBQUs7WUFDckIsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRURVLFdBQVcsR0FBRyxDQUFDO1FBQ1hILE1BQU0sQ0FBQ0ksUUFBUSxDQUFDLENBQUM7WUFDYkMsR0FBRyxFQUFFLENBQUM7WUFDTkMsUUFBUSxFQUFFLENBQVE7UUFDdEIsQ0FBQztJQUNMLENBQUM7SUFFREMsTUFBTSxHQUFHLENBQUM7UUFDTixLQUFLLENBQUMsQ0FBQyxDQUFDZCxVQUFVLEVBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ0QsS0FBSztRQUNqQyxNQUFNO2tHQUVHZ0IsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWU7MEJBQ3pCaEIsVUFBVSxnRkFDTmlCLENBQUM7b0JBQUNELFNBQVMsRUFBQyxDQUFnQjtvQkFBQ0UsT0FBTyxNQUFRLElBQUksQ0FBQ1IsV0FBVzs7Ozs7Ozs7Ozs7O0lBS2pGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmlvd2luZG93cy8uL2NvbXBvbmVudHMvU2hhcmVkL0dvVG9wLmpzP2UwNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb1RvcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNfdmlzaWJsZTogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdmFyIHNjcm9sbENvbXBvbmVudCA9IHRoaXM7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgc2Nyb2xsQ29tcG9uZW50LnRvZ2dsZVZpc2liaWxpdHkoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlVmlzaWJpbGl0eSgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDMwMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNfdmlzaWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc192aXNpYmxlOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxUb1RvcCgpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpc192aXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbC10by10b3BcIj5cbiAgICAgICAgICAgICAgICAgICAge2lzX3Zpc2libGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGUtN3MtYW5nbGUtdXBcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNjcm9sbFRvVG9wKCl9PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkdvVG9wIiwicHJvcHMiLCJzdGF0ZSIsImlzX3Zpc2libGUiLCJjb21wb25lbnREaWRNb3VudCIsInNjcm9sbENvbXBvbmVudCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0b2dnbGVWaXNpYmlsaXR5Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJzZXRTdGF0ZSIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInJlbmRlciIsImRpdiIsImNsYXNzTmFtZSIsImkiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Shared/GoTop.js\n");

/***/ }),

/***/ "./components/Shared/Loader.js":
/*!*************************************!*\
  !*** ./components/Shared/Loader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Loader extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `preloader ${this.props.loading ? '' : 'preloader-deactivate'}`,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"spinner\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mugen\\\\Desktop\\\\pungentreact-17\\\\pungentreact-17\\\\pungent-react-multipurpose-startup-digital-agency-template\\\\with-dynamic-contact-form\\\\pungent\\\\components\\\\Shared\\\\Loader.js\",\n                    lineNumber: 8,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mugen\\\\Desktop\\\\pungentreact-17\\\\pungentreact-17\\\\pungent-react-multipurpose-startup-digital-agency-template\\\\with-dynamic-contact-form\\\\pungent\\\\components\\\\Shared\\\\Loader.js\",\n                lineNumber: 7,\n                columnNumber: 17\n            }, this)\n        }, void 0, false));\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NoYXJlZC9Mb2FkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO01BRWxDRSxNQUFNLFNBQVNELDRDQUFTO0lBQzFCRSxNQUFNLEdBQUcsQ0FBQztRQUNOLE1BQU07a0dBRUdDLENBQUc7Z0JBQUNDLFNBQVMsR0FBRyxVQUFVLEVBQUUsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxDQUFFLElBQUcsQ0FBc0I7c0dBQ3hFSCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBUzs7Ozs7Ozs7Ozs7O0lBSXhDLENBQUM7O0FBR0wsaUVBQWVILE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyaW93aW5kb3dzLy4vY29tcG9uZW50cy9TaGFyZWQvTG9hZGVyLmpzPzYzNWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJlbG9hZGVyICR7dGhpcy5wcm9wcy5sb2FkaW5nID8gJycgOiAncHJlbG9hZGVyLWRlYWN0aXZhdGUnfWB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxvYWRlciIsInJlbmRlciIsImRpdiIsImNsYXNzTmFtZSIsInByb3BzIiwibG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Shared/Loader.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"AppInitialProps\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.AppInitialProps;\n    }\n}));\nObject.defineProperty(exports, \"NextWebVitalsMetric\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.NextWebVitalsMetric;\n    }\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _utils = __webpack_require__(/*! ../shared/lib/utils */ \"../shared/lib/utils\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nfunction _appGetInitialProps() {\n    _appGetInitialProps = /**\n * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n * This allows for keeping state between navigation, custom error handling, injecting additional data.\n */ _asyncToGenerator(function*({ Component , ctx  }) {\n        const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);\n        return {\n            pageProps\n        };\n    });\n    return _appGetInitialProps.apply(this, arguments);\n}\nfunction appGetInitialProps(_) {\n    return _appGetInitialProps.apply(this, arguments);\n}\nclass App extends _react.default.Component {\n    render() {\n        const { Component , pageProps  } = this.props;\n        return(/*#__PURE__*/ _react.default.createElement(Component, Object.assign({}, pageProps)));\n    }\n}\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nexports[\"default\"] = App; //# sourceMappingURL=_app.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQVk7QUFDWkEsOENBQTZDLENBQUM7SUFDMUNHLEtBQUssRUFBRSxJQUFJO0FBQ2YsQ0FBQyxFQUFDO0FBQ0ZILG1EQUFrRCxDQUFDO0lBQy9DSSxVQUFVLEVBQUUsSUFBSTtJQUNoQkMsR0FBRyxFQUFFLFFBQVEsR0FBRyxDQUFDO1FBQ2IsTUFBTSxDQUFDQyxNQUFNLENBQUNDLGVBQWU7SUFDakMsQ0FBQztBQUNMLENBQUMsRUFBQztBQUNGUCx1REFBc0QsQ0FBQztJQUNuREksVUFBVSxFQUFFLElBQUk7SUFDaEJDLEdBQUcsRUFBRSxRQUFRLEdBQUcsQ0FBQztRQUNiLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDRSxtQkFBbUI7SUFDckMsQ0FBQztBQUNMLENBQUMsRUFBQztBQUNGTixrQkFBZSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQ1EsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBTztBQUNuRCxHQUFHLENBQUNOLE1BQU0sR0FBR00sbUJBQU8sQ0FBQyxnREFBcUI7U0FDakNDLGtCQUFrQixDQUFDQyxHQUFHLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUN4RSxHQUFHLENBQUMsQ0FBQztRQUNELEdBQUcsQ0FBQ0MsSUFBSSxHQUFHUCxHQUFHLENBQUNLLEdBQUcsRUFBRUMsR0FBRztRQUN2QixHQUFHLENBQUNqQixLQUFLLEdBQUdrQixJQUFJLENBQUNsQixLQUFLO0lBQzFCLENBQUMsQ0FBQyxLQUFLLEVBQUVtQixLQUFLLEVBQUUsQ0FBQztRQUNiTixNQUFNLENBQUNNLEtBQUs7UUFDWixNQUFNO0lBQ1YsQ0FBQztJQUNELEVBQUUsRUFBRUQsSUFBSSxDQUFDRSxJQUFJLEVBQUUsQ0FBQztRQUNaUixPQUFPLENBQUNaLEtBQUs7SUFDakIsQ0FBQyxNQUFNLENBQUM7UUFDSnFCLE9BQU8sQ0FBQ1QsT0FBTyxDQUFDWixLQUFLLEVBQUVzQixJQUFJLENBQUNSLEtBQUssRUFBRUMsTUFBTTtJQUM3QyxDQUFDO0FBQ0wsQ0FBQztTQUNRUSxpQkFBaUIsQ0FBQ0MsRUFBRSxFQUFFLENBQUM7SUFDNUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDO1FBQ2YsR0FBRyxDQUFDQyxJQUFJLEdBQUcsSUFBSSxFQUFFQyxJQUFJLEdBQUdDLFNBQVM7UUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQ04sT0FBTyxDQUFDLFFBQVEsQ0FBQ1QsT0FBTyxFQUFFQyxNQUFNLEVBQUUsQ0FBQztZQUMxQyxHQUFHLENBQUNGLEdBQUcsR0FBR2EsRUFBRSxDQUFDSSxLQUFLLENBQUNILElBQUksRUFBRUMsSUFBSTtxQkFDcEJaLEtBQUssQ0FBQ2QsS0FBSyxFQUFFLENBQUM7Z0JBQ25CVSxrQkFBa0IsQ0FBQ0MsR0FBRyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsQ0FBTSxPQUFFZixLQUFLO1lBQ3pFLENBQUM7cUJBQ1FlLE1BQU0sQ0FBQ2MsR0FBRyxFQUFFLENBQUM7Z0JBQ2xCbkIsa0JBQWtCLENBQUNDLEdBQUcsRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFLENBQU8sUUFBRWMsR0FBRztZQUN4RSxDQUFDO1lBQ0RmLEtBQUssQ0FBQ2dCLFNBQVM7UUFDbkIsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDO1NBQ1F0QixzQkFBc0IsQ0FBQ3VCLEdBQUcsRUFBRSxDQUFDO0lBQ2xDLE1BQU0sQ0FBQ0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVUsR0FBR0QsR0FBRyxHQUFHLENBQUM7UUFDbEN6QixPQUFPLEVBQUV5QixHQUFHO0lBQ2hCLENBQUM7QUFDTCxDQUFDO1NBQ1FFLG1CQUFtQixHQUFHLENBQUM7SUFDNUJBLG1CQUFtQixHQUFHLEVBR3ZCOzs7Q0FBQSxHQUFDVixpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDVyxTQUFTLEdBQUdDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUMvQyxLQUFLLENBQUNDLFNBQVMsVUFBVSxDQUFDLEVBQUVqQyxNQUFNLEVBQUVrQyxtQkFBbUIsQ0FBQ0gsU0FBUyxFQUFFQyxHQUFHO1FBQ3RFLE1BQU0sQ0FBQyxDQUFDO1lBQ0pDLFNBQVM7UUFDYixDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sQ0FBQ0gsbUJBQW1CLENBQUNMLEtBQUssQ0FBQyxJQUFJLEVBQUVELFNBQVM7QUFDcEQsQ0FBQztTQUNRVyxrQkFBa0IsQ0FBQ0MsQ0FBQyxFQUFFLENBQUM7SUFDNUIsTUFBTSxDQUFDTixtQkFBbUIsQ0FBQ0wsS0FBSyxDQUFDLElBQUksRUFBRUQsU0FBUztBQUNwRCxDQUFDO01BQ0thLEdBQUcsU0FBU2pDLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDNEIsU0FBUztJQUN0Q08sTUFBTSxHQUFHLENBQUM7UUFDTixLQUFLLENBQUMsQ0FBQyxDQUFDUCxTQUFTLEdBQUdFLFNBQVMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDTSxLQUFLO1FBQzdDLE1BQU0sQ0FBQyxFQUFhLFlBQUNuQyxNQUFNLENBQUNELE9BQU8sQ0FBQ3FDLGFBQWEsQ0FBQ1QsU0FBUyxFQUFFckMsTUFBTSxDQUFDK0MsTUFBTSxDQUFDLENBQUMsQ0FDM0UsRUFBRVIsU0FBUztJQUNoQixDQUFDOztBQUVMSSxHQUFHLENBQUNLLG1CQUFtQixHQUFHUCxrQkFBa0I7QUFDNUNFLEdBQUcsQ0FBQ00sZUFBZSxHQUFHUixrQkFBa0I7QUFDeEN2QyxrQkFBZSxHQUFHeUMsR0FBRyxDQUVyQixDQUFnQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyaW93aW5kb3dzLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzPzk2MWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBcHBJbml0aWFsUHJvcHNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5BcHBJbml0aWFsUHJvcHM7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOZXh0V2ViVml0YWxzTWV0cmljXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYztcbiAgICB9XG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdXRpbHNcIik7XG5mdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gICAgfVxufVxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX2FwcEdldEluaXRpYWxQcm9wcygpIHtcbiAgICBfYXBwR2V0SW5pdGlhbFByb3BzID0gLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqLyBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiooeyBDb21wb25lbnQgLCBjdHggIH0pIHtcbiAgICAgICAgY29uc3QgcGFnZVByb3BzID0geWllbGQgKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYWdlUHJvcHNcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKF8pIHtcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuY2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50ICwgcGFnZVByb3BzICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICB9LCBwYWdlUHJvcHMpKSk7XG4gICAgfVxufVxuQXBwLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHM7XG5BcHAuZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1fYXBwLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJnZXQiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJOZXh0V2ViVml0YWxzTWV0cmljIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVzb2x2ZSIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiYXJnIiwiaW5mbyIsImVycm9yIiwiZG9uZSIsIlByb21pc2UiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2FwcEdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCIsImN0eCIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfIiwiQXBwIiwicmVuZGVyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiYXNzaWduIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/bootstrap.min.css */ \"./styles/bootstrap.min.css\");\n/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_icofont_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/icofont.min.css */ \"./styles/icofont.min.css\");\n/* harmony import */ var _styles_icofont_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_icofont_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_pe_icon_7_stroke_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pe-icon-7-stroke.css */ \"./styles/pe-icon-7-stroke.css\");\n/* harmony import */ var _styles_pe_icon_7_stroke_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pe_icon_7_stroke_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/react-modal-video/css/modal-video.min.css */ \"./node_modules/react-modal-video/css/modal-video.min.css\");\n/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ \"./node_modules/react-accessible-accordion/dist/fancy-example.css\");\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-image-lightbox/style.css */ \"./node_modules/react-image-lightbox/style.css\");\n/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/responsive.css */ \"./styles/responsive.css\");\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_Shared_Loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Shared/Loader */ \"./components/Shared/Loader.js\");\n/* harmony import */ var _components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Shared/GoTop */ \"./components/Shared/GoTop.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_10___default()) {\n    // Preloader\n    state = {\n        loading: true\n    };\n    componentDidMount() {\n        this.timerHandle = setTimeout(()=>this.setState({\n                loading: false\n            })\n        , 2000);\n    }\n    componentWillUnmount() {\n        if (this.timerHandle) {\n            clearTimeout(this.timerHandle);\n            this.timerHandle = 0;\n        }\n    }\n    render() {\n        const { Component , pageProps  } = this.props;\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_11___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"width=device-width, initial-scale=1, shrink-to-fit=no\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mugen\\\\Desktop\\\\pungentreact-17\\\\pungentreact-17\\\\pungent-react-multipurpose-startup-digital-agency-template\\\\with-dynamic-contact-form\\\\pungent\\\\pages\\\\_app.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Briowindows - Where Luxury is now Affordable\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mugen\\\\Desktop\\\\pungentreact-17\\\\pungentreact-17\\\\pungent-react-multipurpose-startup-digital-agency-template\\\\with-dynamic-contact-form\\\\pungent\\\\pages\\\\_app.js\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Mugen\\\\Desktop\\\\pungentreact-17\\\\pungentreact-17\\\\pungent-react-multipurpose-startup-digital-agency-template\\\\with-dynamic-contact-form\\\\pungent\\\\pages\\\\_app.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mugen\\\\Desktop\\\\pungentreact-17\\\\pungentreact-17\\\\pungent-react-multipurpose-startup-digital-agency-template\\\\with-dynamic-contact-form\\\\pungent\\\\pages\\\\_app.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shared_Loader__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                    loading: this.state.loading\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mugen\\\\Desktop\\\\pungentreact-17\\\\pungentreact-17\\\\pungent-react-multipurpose-startup-digital-agency-template\\\\with-dynamic-contact-form\\\\pungent\\\\pages\\\\_app.js\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mugen\\\\Desktop\\\\pungentreact-17\\\\pungentreact-17\\\\pungent-react-multipurpose-startup-digital-agency-template\\\\with-dynamic-contact-form\\\\pungent\\\\pages\\\\_app.js\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true));\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDaEI7QUFDYztBQUNLO0FBQzJCO0FBQ1I7QUFDbkI7QUFDWDtBQUNLO0FBRVA7QUFDRTtBQUNvQjtBQUNGO0FBRS9CLE1BQU1JLEtBQUssU0FBU0osa0RBQUc7SUFDbEMsRUFBWTtJQUNaSyxLQUFLLEdBQUcsQ0FBQztRQUNMQyxPQUFPLEVBQUUsSUFBSTtJQUNqQixDQUFDO0lBQ0RDLGlCQUFpQixHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDQyxXQUFXLEdBQUdDLFVBQVUsS0FBTyxJQUFJLENBQUNDLFFBQVEsQ0FBQyxDQUFDO2dCQUFDSixPQUFPLEVBQUUsS0FBSztZQUFDLENBQUM7VUFBRyxJQUFJO0lBQy9FLENBQUM7SUFDREssb0JBQW9CLEdBQUcsQ0FBQztRQUNwQixFQUFFLEVBQUUsSUFBSSxDQUFDSCxXQUFXLEVBQUUsQ0FBQztZQUNuQkksWUFBWSxDQUFDLElBQUksQ0FBQ0osV0FBVztZQUM3QixJQUFJLENBQUNBLFdBQVcsR0FBRyxDQUFDO1FBQ3hCLENBQUM7SUFDTCxDQUFDO0lBRURLLE1BQU0sR0FBSSxDQUFDO1FBQ1AsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ0MsS0FBSztRQUUzQyxNQUFNOzs0RkFFR2YsbURBQUk7O29HQUNBZ0IsQ0FBSTs0QkFBQ0MsSUFBSSxFQUFDLENBQVU7NEJBQUNDLE9BQU8sRUFBQyxDQUF1RDs7Ozs7O29HQUNwRkMsQ0FBSztzQ0FBQyxDQUE0Qzs7Ozs7Ozs7Ozs7OzRGQUd0RE4sU0FBUzt1QkFBS0MsU0FBUzs7Ozs7OzRGQUd2QmIsa0VBQU07b0JBQUNJLE9BQU8sRUFBRSxJQUFJLENBQUNELEtBQUssQ0FBQ0MsT0FBTzs7Ozs7OzRGQUdsQ0gsaUVBQUs7Ozs7Ozs7SUFHbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyaW93aW5kb3dzLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCAnYW5pbWF0ZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvaWNvZm9udC5taW4uY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3BlLWljb24tNy1zdHJva2UuY3NzJztcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsLXZpZGVvL2Nzcy9tb2RhbC12aWRlby5taW4uY3NzJztcbmltcG9ydCAncmVhY3QtYWNjZXNzaWJsZS1hY2NvcmRpb24vZGlzdC9mYW5jeS1leGFtcGxlLmNzcyc7XG5pbXBvcnQgJ3JlYWN0LWltYWdlLWxpZ2h0Ym94L3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvcmVzcG9uc2l2ZS5jc3MnO1xuXG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvU2hhcmVkL0xvYWRlcic7XG5pbXBvcnQgR29Ub3AgZnJvbSAnLi4vY29tcG9uZW50cy9TaGFyZWQvR29Ub3AnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gICAgLy8gUHJlbG9hZGVyXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICB9O1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnRpbWVySGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSksIDIwMDApOyBcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVySGFuZGxlKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lckhhbmRsZSk7XG4gICAgICAgICAgICB0aGlzLnRpbWVySGFuZGxlID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZW5kZXIgKCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5Ccmlvd2luZG93cyAtIFdoZXJlIEx1eHVyeSBpcyBub3cgQWZmb3JkYWJsZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHsvKiBQcmVsb2FkZXIgKi99XG4gICAgICAgICAgICAgICAgPExvYWRlciBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IC8+XG5cbiAgICAgICAgICAgICAgICB7LyogR28gVG9wIEJ1dHRvbiAqL31cbiAgICAgICAgICAgICAgICA8R29Ub3AgLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiQXBwIiwiSGVhZCIsIkxvYWRlciIsIkdvVG9wIiwiTXlBcHAiLCJzdGF0ZSIsImxvYWRpbmciLCJjb21wb25lbnREaWRNb3VudCIsInRpbWVySGFuZGxlIiwic2V0VGltZW91dCIsInNldFN0YXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjbGVhclRpbWVvdXQiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwcm9wcyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-image-lightbox/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-image-lightbox/style.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-modal-video/css/modal-video.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-modal-video/css/modal-video.min.css ***!
  \****************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/bootstrap.min.css":
/*!**********************************!*\
  !*** ./styles/bootstrap.min.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/icofont.min.css":
/*!********************************!*\
  !*** ./styles/icofont.min.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/pe-icon-7-stroke.css":
/*!*************************************!*\
  !*** ./styles/pe-icon-7-stroke.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/responsive.css":
/*!*******************************!*\
  !*** ./styles/responsive.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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