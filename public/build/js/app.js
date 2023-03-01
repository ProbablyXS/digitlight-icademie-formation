(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./assets/react/controllers sync recursive \\.(j%7Ct)sx?$":
/*!******************************************************!*\
  !*** ./assets/react/controllers/ sync \.(j%7Ct)sx?$ ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./accueil.jsx": "./assets/react/controllers/accueil.jsx",
	"./login.jsx": "./assets/react/controllers/login.jsx",
	"./materiel/desktop.jsx": "./assets/react/controllers/materiel/desktop.jsx",
	"./materiel/materiel_details.jsx": "./assets/react/controllers/materiel/materiel_details.jsx",
	"./materiel/reseau.jsx": "./assets/react/controllers/materiel/reseau.jsx",
	"./materiel/reunion.jsx": "./assets/react/controllers/materiel/reunion.jsx",
	"./materiel/telephonique.jsx": "./assets/react/controllers/materiel/telephonique.jsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/react/controllers sync recursive \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-react--react': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-react/dist/render_controller.js */ "./vendor/symfony/ux-react/assets/dist/render_controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/components/copyright.jsx":
/*!*****************************************!*\
  !*** ./assets/components/copyright.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footer)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    style: {
      fontWeight: "bold",
      textDecoration: "none",
      display: "flex",
      height: "70px",
      opacity: "0.5",
      color: "#000000",
      transition: "background-color 1s ease 0s",
      fontFamily: "system-ui",
      fontSize: "x-small",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffffff75"
    }
  }, " DigitLight \xA9 ", new Date().getFullYear(), ". Tous droits r\xE9serv\xE9s.");
}

/***/ }),

/***/ "./assets/components/header.jsx":
/*!**************************************!*\
  !*** ./assets/components/header.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace-all.js */ "./node_modules/core-js/modules/es.string.replace-all.js");
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








function capitalizeWords(str) {
  return str.toLowerCase().split(' ').map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ').normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll('-', " ").toLowerCase();
}
;
function header(_ref) {
  var title = _ref.title,
    item = _ref.item;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("header", {
    className: "panelHeader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("ul", {
    className: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "/accueil"
  }, "Accueil")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "/accueil"
  }, "Materiel")), item.length <= 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", null, title) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "/materiel/".concat(capitalizeWords(title))
  }, title)), item.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("span", null, capitalizeWords(item).charAt(0).toUpperCase() + capitalizeWords(item.slice(1)))) : null)));
}

/***/ }),

/***/ "./assets/components/itemStats.jsx":
/*!*****************************************!*\
  !*** ./assets/components/itemStats.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ itemStats)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/data */ "./assets/constants/data.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





var total = function total(Category) {
  if (Category == null || Category == '') {
    {
      return _constants_data__WEBPACK_IMPORTED_MODULE_3__.ITEMS.filter(function (item) {
        return item;
      }).length;
    }
  } else {
    {
      return _constants_data__WEBPACK_IMPORTED_MODULE_3__.ITEMS.filter(function (item) {
        return item.category == Category;
      }).length;
    }
  }
};
var available = function available(Category) {
  if (Category == null || Category == '') {
    {
      return _constants_data__WEBPACK_IMPORTED_MODULE_3__.ITEMS.filter(function (item) {
        return item.available;
      }).map(function (item) {
        return item;
      }).length;
    }
  } else {
    {
      return _constants_data__WEBPACK_IMPORTED_MODULE_3__.ITEMS.filter(function (item) {
        return item.category == Category;
      }).filter(function (item) {
        return item.available;
      }).length;
    }
  }
};
var unavailable = function unavailable(Category) {
  if (Category == null || Category == '') {
    {
      return _constants_data__WEBPACK_IMPORTED_MODULE_3__.ITEMS.filter(function (item) {
        return item.unavailable;
      }).map(function (item) {
        return item;
      }).length;
    }
  } else {
    {
      return _constants_data__WEBPACK_IMPORTED_MODULE_3__.ITEMS.filter(function (item) {
        return item.category == Category;
      }).filter(function (item) {
        return item.unavailable;
      }).length;
    }
  }
};
function itemStats(_ref) {
  var Category = _ref.Category;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "statsItems"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, "Total: ", total(Category)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, "Disponible: ", available(Category)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, "Indisponible: ", unavailable(Category)));
}

/***/ }),

/***/ "./assets/components/loading.jsx":
/*!***************************************!*\
  !*** ./assets/components/loading.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadingComp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/esm/index.js");


function loadingComp() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "loading",
    style: {
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      margin: 'auto',
      width: '100px',
      height: '100px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__.Rings, {
    height: "100",
    width: "100",
    color: "var(--defaut-header-color)",
    secondaryColor: "black",
    radius: "12.5",
    ariaLabel: "mutating-dots-loading",
    wrapperStyle: {},
    wrapperClass: "",
    visible: true
  }));
}

/***/ }),

/***/ "./assets/components/materiel.jsx":
/*!****************************************!*\
  !*** ./assets/components/materiel.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





function Item(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "panelItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    id: "entry-pic",
    className: "panelImage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: item.href
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("img", {
    src: item.img,
    alt: item.alt,
    style: {
      objectFit: "cover"
    },
    width: 500,
    height: 500
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "itemInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "itemInfoTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Nom du produit : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, item.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "itemInfoTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/materiel/".concat(item.category.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Cat\xE9gorie : ", item.category))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "itemInfoTitle"
  }, item.available ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Statut : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    style: {
      color: "darkgreen"
    }
  }, "Disponible")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Statut : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    style: {
      color: "red"
    }
  }, "R\xE9serv\xE9")))));
}

/***/ }),

/***/ "./assets/components/materiel_details.jsx":
/*!************************************************!*\
  !*** ./assets/components/materiel_details.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);











function Item(_ref) {
  var item = _ref.item;
  function capitalizeWords(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }
  ;
  function zoom(e) {
    var zoomer = e.currentTarget;
    var offsetX;
    var offsetY;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.pageX;
    e.offsetY ? offsetY = e.offsetY : offsetY = e.pageY;
    var x = offsetX / zoomer.offsetWidth * 50;
    var y = offsetY / zoomer.offsetHeight * 80;
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "panelInfoItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "panelImage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("figure", {
    className: "zoom",
    onMouseMove: zoom,
    style: {
      backgroundImage: "url(".concat(item.img, ")")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("img", {
    src: item.img,
    alt: item.alt,
    style: {
      objectFit: "cover"
    },
    width: 500,
    height: 500
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "itemInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "itemInfoTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h1", null, item.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "itemInfoCat"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
    href: "/materiel/".concat(item.category.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
  }, "Cat\xE9gorie : ", capitalizeWords(item.category))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "itemInfoAvailable"
  }, item.available ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("span", null, "Statut : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", {
    style: {
      color: "darkgreen"
    }
  }, "Disponible")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("span", null, "Statut : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", {
    style: {
      color: "red"
    }
  }, "R\xE9serv\xE9"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "itemInfoEmpl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "Emplacement : ", item.emplacement, " N\xBA ", item.id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "itemInfoDesc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h3", null, "Description : "), " ", item.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "itemInfoCar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h3", null, "Caract\xE9ristiques : "), " ", item.caracteristiques)), item.available ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "agendaGoogle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("iframe", {
    src: "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FParis&showDate=1&showNav=1&showTitle=0&showPrint=1&showTabs=1&showCalendars=0&src=MjNhZTVhOGFiZWFkNmNiZmUyNWQxMjJjYjMyZmM3YjZkMzllYWY0ODZkYmMwOTc2MGZmMWI4YWQ4N2U5ZGFiYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23616161",
    style: {
      border: 0
    }
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "boutonReserver"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "btnReserver",
    size: "large",
    sx: {
      borderColor: "white",
      color: "white"
    },
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "textReserver"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "RESERVER CE MATERIEL"))))));
}

/***/ }),

/***/ "./assets/components/navbar.jsx":
/*!**************************************!*\
  !*** ./assets/components/navbar.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navbar)
/* harmony export */ });
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



function navbar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "leftNav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    id: "bgImg",
    src: "/build/images/digitlight.svg",
    alt: "digilight picture",
    width: 500,
    height: 500
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/accueil"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "btn",
    size: "large",
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/build/images/navbar/material.png",
    alt: "material picture",
    width: 500,
    height: 500
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Mat\xE9riel")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subPanelMateriel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/materiel/reseau"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "subBtn",
    size: "large",
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/build/images/navbar/reseau.png",
    alt: "reseau picture",
    width: 500,
    height: 500
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "R\xE9seau")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/materiel/telephonique"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "subBtn",
    size: "large",
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/build/images/navbar/telephone.png",
    alt: "telephone picture",
    width: 500,
    height: 500
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "T\xE9l\xE9phonique")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/materiel/desktop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "subBtn",
    size: "large",
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/build/images/navbar/desktop.png",
    alt: "desktop picture",
    width: 500,
    height: 500
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Desktop")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/materiel/reunion"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "subBtn",
    size: "large",
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/build/images/navbar/reunion.png",
    alt: "reunion picture",
    width: 500,
    height: 500
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "R\xE9union"))))));
}

/***/ }),

/***/ "./assets/components/skeleton/materiel.jsx":
/*!*************************************************!*\
  !*** ./assets/components/skeleton/materiel.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Skelette)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Skeleton */ "./node_modules/@mui/material/Skeleton/Skeleton.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _itemStats__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../itemStats */ "./assets/components/itemStats.jsx");
/* harmony import */ var _materiel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../materiel */ "./assets/components/materiel.jsx");
/* harmony import */ var _constants_data__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../constants/data */ "./assets/constants/data.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

























var items = function items(Category) {
  if (Category == null || Category == '') {
    {
      return _constants_data__WEBPACK_IMPORTED_MODULE_22__.ITEMS.filter(function (item) {
        return item.available;
      }).map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_materiel__WEBPACK_IMPORTED_MODULE_21__["default"], {
          key: item.id,
          item: item
        });
      });
    }
  } else {
    {
      return _constants_data__WEBPACK_IMPORTED_MODULE_22__.ITEMS.filter(function (item) {
        return item.category == Category;
      }).map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_materiel__WEBPACK_IMPORTED_MODULE_21__["default"], {
          key: item.id,
          item: item
        });
      });
    }
  }
};
var SkeletonBreadcrumb = function SkeletonBreadcrumb() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("span", {
    style: {
      height: '4%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_23__["default"], {
    variant: "text",
    width: "30%",
    height: "80%",
    sx: {
      marginLeft: '5%',
      marginTop: '1.5%'
    }
  }));
};
var SkeletonItem = function SkeletonItem() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_23__["default"], {
    variant: "rounded",
    width: "45%",
    height: "15%",
    sx: {
      marginLeft: '1%',
      marginTop: '3%'
    }
  });
};
function randomTime(min, max) {
  // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function Skelette(_ref) {
  var page = _ref.page;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(function () {
    setTimeout(function () {
      setLoading(false);
    }, randomTime(500, 1000));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement((react__WEBPACK_IMPORTED_MODULE_19___default().Fragment), null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement((react__WEBPACK_IMPORTED_MODULE_19___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(SkeletonBreadcrumb, null), _toConsumableArray(Array(8).keys()).map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(SkeletonItem, {
      key: item
    });
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement((react__WEBPACK_IMPORTED_MODULE_19___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_itemStats__WEBPACK_IMPORTED_MODULE_20__["default"], {
    Category: page
  }), " ", items(page)));
}

/***/ }),

/***/ "./assets/components/skeleton/materiel_details.jsx":
/*!*********************************************************!*\
  !*** ./assets/components/skeleton/materiel_details.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Skelette)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace-all.js */ "./node_modules/core-js/modules/es.string.replace-all.js");
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/Skeleton */ "./node_modules/@mui/material/Skeleton/Skeleton.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _materiel_details__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../materiel_details */ "./assets/components/materiel_details.jsx");
/* harmony import */ var _constants_data__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../constants/data */ "./assets/constants/data.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



























var capitalizeWords = function capitalizeWords(str) {
  return str.toLowerCase().split(' ').map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ').normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll('-', " ").toLowerCase();
};
var items = function items(itemName) {
  return _constants_data__WEBPACK_IMPORTED_MODULE_24__.ITEMS.filter(function (item) {
    return capitalizeWords(item.name) == capitalizeWords(itemName);
  }).map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_materiel_details__WEBPACK_IMPORTED_MODULE_23__["default"], {
      key: item.id,
      item: item
    });
  });
};
function randomTime(min, max) {
  // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function Skelette(_ref) {
  var itemName = _ref.itemName;
  var ItemImage = function ItemImage() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_25__["default"], {
      animation: "wave",
      variant: "rounded",
      width: "80%",
      height: "55%",
      sx: {
        marginLeft: '10%'
      }
    });
  };
  var TextTitle = function TextTitle() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_25__["default"], {
      variant: "rounded",
      width: "50%",
      height: "3%",
      sx: {
        marginLeft: '10%',
        marginTop: '1%'
      }
    });
  };
  var TextDescription = function TextDescription() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_25__["default"], {
      variant: "rounded",
      width: "80%",
      height: "2%",
      sx: {
        marginLeft: '10%',
        marginTop: '3%'
      }
    });
  };
  var Button = function Button() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_25__["default"], {
      animation: "wave",
      variant: "rounded",
      width: "50%",
      height: "3%",
      sx: {
        marginLeft: '10%',
        marginTop: '8%'
      }
    });
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_22__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_22__.useEffect)(function () {
    setTimeout(function () {
      setLoading(false);
    }, randomTime(500, 1000));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement((react__WEBPACK_IMPORTED_MODULE_22___default().Fragment), null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement((react__WEBPACK_IMPORTED_MODULE_22___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(ItemImage, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(TextTitle, null), _toConsumableArray(Array(8).keys()).map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(TextDescription, {
      key: item
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(Button, null)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement((react__WEBPACK_IMPORTED_MODULE_22___default().Fragment), null, items(itemName)));
}

/***/ }),

/***/ "./assets/constants/data.js":
/*!**********************************!*\
  !*** ./assets/constants/data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ITEMS": () => (/* binding */ ITEMS)
/* harmony export */ });
var ITEMS = [{
  id: 1,
  name: "Commutateur Cisco 250",
  alt: "Commutateur",
  category: "réseau",
  emplacement: "Salle de stockage 1",
  description: "Les commutateurs Cisco 250 sont conçus pour être faciles à déployer et utiliser par les petites entreprises et leurs partenaires. Des interfaces graphiques avancées et conviviales réduisent le temps de déploiement, de dépannage et de gestion du réseau. Des assistants de configuration simplifient les tâches de configuration courantes et constituent l'outil idéal pour paramétrer et gérer le réseau.",
  caracteristiques: "Contrôle du flux, prise en charge de BOOTP, IGMP snooping, prise en charge de Syslog, protection contre les attaques de Déni de Service, mise en miroir des ports, prise en charge DiffServ, mise en file d'attente Weighted Round Robin (WRR), contrôle de la tempête de Broadcast, prise en charge d'IPv6, Multicast Storm Control, Unicast Storm Control, prise en charge du protocole SNTP, prise en charge du protocole STP (Spanning Tree Protocol), prise en charge du protocole RSTP (Rapid Spanning Tree Protocol), prise en charge du protocole Multiple Spanning Tree Protocol (MSTP), qualité de service (QDS), serveur DHCP, snooping MLD, bouton de réinitialisation, sans ventilateur, prise en charge LLDP, relais DHCP, Link Aggregation Control Protocol (LACP), Port Security, client DHCP, Energy Efficient Ethernet, base d'information de gestion (MIB), tampon 12 MB, Class of Service (CoS), authentification 802.1x, Duplicated Address Detection, Type of Service (ToS), prise en charge DiffServ Code Point (DSCP), test de câble, technologie SmartPort, système de prévention du blocage en tête, Internet Control Message Protocol (ICMP), Cisco Discovery Protocol, miroir VLAN.",
  img: "/build/images/item/commutateur.jpg",
  href: "/materiel/reseau/commutateur-cisco-250",
  available: true
}, {
  id: 2,
  name: "Routeur Cisco 1921",
  alt: "Routeur",
  category: "réseau",
  emplacement: "Salle de stockage 1",
  description: "Le Cisco 1921 s'appuie sur le meilleur de sa catégorie. Tous les routeurs à services intégrés de la gamme Cisco 1900 offrent une accélération du cryptage matériel intégré et des services de sécurité avancés. En outre, les plates-formes prennent en charge la plus large gamme d'options de connectivité filaire et sans fil du secteur, telles que les connexions série, T1/E1, xDSL, Gigabit Ethernet et sans fil de troisième génération (3G). Le Cisco 1921 est conçu pour répondre aux exigences des applications des succursales d'aujourd'hui, avec une flexibilité de conception pour les applications futures. Vous pouvez facilement interchanger les modules utilisés sur le Cisco 1921 avec d'autres routeurs Cisco pour assurer une protection maximale de votre investissement. L'utilisation de cartes d'interface communes à l'ensemble du réseau réduit considérablement la complexité de la gestion des stocks, de la mise en œuvre de grands déploiements de réseau et de la maintenance des configurations pour des succursales de tailles diverses.",
  caracteristiques: "	Protection par firewall, Prise en charge VPN, prise en charge de MPLS, prise en charge du réseau local (LAN) virtuel, prise en charge de Syslog, prise en charge d'IPv6, Class-Based Weighted Fair Queuing (CBWFQ), Weighted Random Early Detection (WRED), qualité de service (QDS), Web Services Management Agent (WSMA), TR-069 Agent, NetFlow",
  img: "/build/images/item/routeur.jpg",
  href: "/materiel/reseau/routeur-cisco-1921",
  available: true
}, {
  id: 3,
  name: "Cpl AV2000",
  alt: "Cpl",
  category: "réseau",
  emplacement: "Salle de stockage 1",
  description: "Tout comme le D-Link DHP-701AV, le TL-PA9020 embarque donc une puce communicante signée Broadcom. Plus véloce que son homologue Qualcomm QCA7500 (1,2 Gb/s), elle permet d'afficher des débits théoriques plus élevés, bien que fonctionnant également sur la norme HomePlug AV2. Le constructeur parle ainsi d'un débit théorique de 2 Gb/s, soit 100 Mb/s de plus que sur la version française du bloc D-Link et 800 Mb/s de plus que sur les blocs utilisant une puce Qualcomm. Pour profiter de tels débits —  bruts on le rappelle — il est toutefois nécessaire de pouvoir utiliser la fonction MiMo et donc de disposer de trois câbles électriques sur chaque prise de courant.",
  caracteristiques: "Débit théorique	2 Gbit/s Ports	2x Gigabit Ethernet Norme	HomePlug AV2 ; IEEE1901 ; HomePlug AV Sécurité	AES 128 bits Garantie	3 Wi-Fi	Non Switch réseau	Oui Prise femelle	Oui",
  img: "/build/images/item/cpl.jpg",
  href: "/materiel/reseau/cpl-AV2000",
  available: true
}, {
  id: 4,
  name: "Yealink T54W",
  alt: "Téléphone fixe",
  category: "téléphonique",
  emplacement: "Salle de stockage 2",
  description: "Avec son modèle T54W, Yealink propose un poste IP haut de gamme pour les entreprises et le monde professionnel. Doté d'un écran couleur LCD 4,3 pouces tactile et offrant plusieurs positions pour une visibilité optimale, il permet une navigation fluide et aisée. Grâce aux différents témoins lumineux bicolores (rouge et vert) d'informations d'état de ligne, de messages ou d'appels en attente, voyez d'un seul coup d'oeil votre activité en cours. Niveau interface utilisateur, le Yealink T54W est pensé pour être intuitif et ne poser aucun problèmes aux professionnels, peu importe qu'ils soient à l'aise avec la téléphonie ou non. Les icônes ainsi que les différentes touches programmables permettent une navigation et une utilisation simplifiée. Enfin, le téléphone est évidemment capable d'afficher le nom et le numéro de l'appelant, permettant de connaître qui essaie de vous joindre.",
  caracteristiques: "Les caractéristiques audio du téléphone IP Yealink T54W sont issues de la dernière génération. Prenant en charge le Codec OPUS, le  T54W propose une qualité de voix HD grâce au combiné et au haut-parleur.  Compatible avec les prothèses auditives (HAC), le téléphone SIP T54W permet, d'une part, d'offrir un bouclier accoustique contre les bruits trop aigüe provenant de votre interlocuteur, et d'autre part, offre un filtrage intelligent du bruit. Le T54W est capable de filtrer en partie les bruits nuisibles autour de vous et de les traiter pour ne récupérer que la voix.",
  img: "/build/images/item/telephone-fixe.png",
  href: "/materiel/telephonique/yealink-t54w",
  available: true
}, {
  id: 5,
  name: "Iphone 12",
  alt: "Téléphone portable",
  category: "téléphonique",
  emplacement: "Salle de stockage 2",
  description: "Tout en s’inspirant du design des nouveaux iPad, l’iPhone 12 renoue également avec le passé en arborant un style qui n’est pas sans rappeler les anciennes générations de smartphones Apple ; notamment les 4ème et 5ème. Le téléphone se veut plus compact que son prédécesseur et affiche de surcroît une finition plus élégante, qu’il doit à des bordures nettement plus fines. Le smartphone de 14ème génération partage par ailleurs les mêmes dimensions que l’iPhone 12 Pro et justifie d’une très bonne ergonomie, puisqu’il se manipule aisément d'une seule main.",
  caracteristiques: "Processeur	Apple A13 Bionic	Apple A14 Bionic Mémoire vive (RAM)	4 Go	4 Go Capacité de stockage	64 Go, 128 Go ou 256 Go	64 Go, 128 Go ou 256 Go Appareil photo	Double caméra de 12 Mpx, Caméra frontale de 12 Mpx	Double caméra de 12 Mpx, Caméra frontale de 12 Mpx Écran	LCD 6,1 pouces avec 1 792 x 828 pixels à 326 ppi6	OLED de 6,1 pouces avec 2 532 x 1 170 pixels à 460 ppi Batterie	Batterie Li-Ion de 3 110 mAh	Batterie Li-Ion de 2 815 mAh Autonomie	15 h	12 h Connectique	LTE, UMTS, GMS	5G, LTE, GMS, UMTS",
  img: "/build/images/item/telephone-portable.png",
  href: "/materiel/telephonique/iphone-12",
  available: true
}, {
  id: 6,
  name: "Casque Superlux hmd685a",
  alt: "Casque audio",
  category: "desktop",
  emplacement: "Salle de stockage 3",
  description: "Comme son nom l'indique, ces écouteurs sont de haute définition. Ils peuvent reproduire des basses épaisses ainsi que des médiums et des aigus clairs. Avec ces écouteurs, vous pouvez profiter de votre musique préférée partout ou vous allez. Les écouteurs peuvent etre pliés pour ne pas prendre trop de place dans vos bagages. Le câble est doté d'un microphone a bouton-poussoir, qui vous permet de répondre aux appels et d'y répondre (fonctionne avec les appareils Apple).",
  caracteristiques: "Directivité: cardioïde Réponse en fréquence: 50 - 15000 Hz Impédance: 200 Ohm Sensibilité: -64 dBV / Pa (0,6 mV / Pa) à 1 kHz Longueur de câble de 1,5 m avec connecteur XLR 4 broches femelle",
  img: "/build/images/item/casque.jpg",
  href: "/materiel/desktop/casque-superlux-hmd685a",
  available: true
}, {
  id: 7,
  name: "Ordinateur Acer veriton s2680g",
  alt: "Ordinateur de bureau",
  category: "desktop",
  emplacement: "Salle de stockage 3",
  description: "L'ordinateur Acer Veriton S2680G est une solution professionnelle performante, compacte, fiable et sécurisée à prix abordable. Faites l'achat de ce PC de bureau pour toutes vos tâches professionnelles courantes et profitez de bonnes performances, y compris en multitâches.",
  caracteristiques: "Informations générales Désignation Acer Veriton S2680G (DT.VV2EF.00H) - Windows 10 Pro Marque Acer Modèle DT.VV2EF.00H Système d'exploitation Système d'exploitation Windows 10 Professionnel 64 bits Système d'exploitation fourni Oui Processeur et chipset Plateforme (Proc.) Intel Comet Lake Type de processeur Intel Core i3-10105 (Quad-Core 3.7 GHz / 4.4 GHz Turbo - 8 Threads - Cache 6 Mo) Processeur Intel Core i3 Fréquence CPU 3.7 GHz Mémoire Taille de la mémoire 8 Go Type de mémoire DDR4 Fréquence(s) Mémoire DDR4 2666 MHz Stockage Configuration disque(s) SSD 256 Go Disque dur SSD 256 Go Disque secondaire Sans disque secondaire Type de Disque Système SSD (Solid State Drive) Interface avec l'ordinateur disque dur système M.2 - PCI-E NVMe Lecteur Optique Graveur DVD Super Multi Lecteur de disquettes Non Affichage Chipset graphique Intel UHD Graphics 630 NVIDIA Studio Non Type de multi-GPU Aucun VR Ready (réalité virtuelle) Non Réseau Sans-fil Non Nombre de ports/Contrôleur Ethernet 1 X Intégré Norme(s) réseau 10/100/1000 Mbps Connectique Connecteurs panneau avant 2 X USB 3.1 2 X USB 3.0 1 X Micro (Jack 3.5mm Femelle) 1 X Casque (Jack 3.5mm Femelle) Connecteurs panneau arrière 1 X VGA (D-sub 15 Femelle) 1 X HDMI Femelle 1 X DisplayPort Femelle 4 X USB 2.0 1 X RJ45 Femelle 2 X MiniDin 6 Femelle (PS/2) 1 X Série (RS-232) 3 X Jack 3,5mm Femelle Stéréo Equipement Clavier et souris fournis Oui Caractéristiques physiques Format de PC Tour Format du boitier Mini Tour Conception boîtier Boitier non vitré Largeur 160 mm Hauteur 350 mm Profondeur 309.25 mm Poids 6.84 kg Puissance 180 W Spécifications techniques Monté Oui Usage Professionnel Technologie Intel vPro Non Garanties Garantie commerciale 2 années vendeur Garanties légales Voir les modalités Informations légales Reprise des produits usagés Voir les modalités",
  img: "/build/images/item/ordinateur.png",
  href: "/materiel/desktop/ordinateur-acer-veriton-s2680g",
  available: true
}, {
  id: 8,
  name: "Ordinateur ACER aspire 3",
  alt: "Ordinateur portable",
  category: "desktop",
  emplacement: "Salle de stockage 3",
  description: "Profitez de bonnes performances pour un prix abordable avec le PC portable Acer Aspire 3 A315-24P. À la fois compact, élégant et efficace, c'est un parfait compagnon mobile. Il sera adapté pour les applications de bureautique, la navigation web et le divertissement multimédia occasionnel.",
  caracteristiques: "Processeur AMD Ryzen 5 7520U (Quad-Core 2.8 GHz / 4.3 GHz Turbo - 8 Threads - Cache 4 Mo) 16 Go de mémoire LPDDR5 (mémoire intégrée) Écran IPS de 15.6 pouces avec résolution Full HD (1920 x 1080) SSD M.2 PCIe de 512 Go Meilleur confort oculaire avec la technologie Acer Bluelight Shield Communication sans fil Wi-Fi 6 + Bluetooth 5.2 Webcam HP 720p intégrée Windows 11 Famille Garantie constructeur 2 ans",
  img: "/build/images/item/ordinateur-portable.jpg",
  href: "/materiel/desktop/ordinateur-acer-aspire-3",
  available: true
}, {
  id: 9,
  name: "Tablette tactile et56",
  alt: "Tablette tactile",
  category: "desktop",
  emplacement: "Salle de stockage 3",
  description: "Zebra a pour vous la solution avec la tablette professionnelle ET56. Sous Android, avec scanner intégré, et dotée des technologies Wi-Fi, cellulaires et Bluetooth les plus rapides, l'ET56 est le modèle le plus robuste, mince et léger de la gamme Zebra.",
  caracteristiques: "Processeur : Qualcomm Snapdragon 660 huit cœurs, 2,2 GHz Système : Android 8.1 Oreo Ecran : 8.4 po, capacitif, tactile 10 points, résolution maximale 2 560 x 1 600 ; verre Corning Gorilla Glass ; lisible en plein jour RAM : 4 Go de RAM LPDDR4 (extensible jusqu'à 8 Go) APN : 8 MP, caméra frontale 2 MP Stockage : 32 Go de mémoire flash eMMC ; fente pour carte micro SDXC accessible par l’utilisateur (jusqu’à 200 Go pris en charge en standard) Connectivité : 4G LTE (données uniquement), Bluetooth 5.0, GPS, A-GPS, NFC, Wi-Fi ac/b/g/n, USB Type C Capteurs : Accéléromètre, capteur de luminosité, boussoule, gyroscope Batterie de 9 660 mAh Li-Ion, remplaçable par l’utilisateur Certifié IP65 Dimensions (L x H x P) : 228 x 150 x 12,7 mm Poids : 527 g",
  img: "/build/images/item/tablette-tactile.png",
  href: "/materiel/desktop/tablette-tactile-et56",
  available: true
}, {
  id: 10,
  name: "Imprimante Brother",
  alt: "Imprimante",
  category: "desktop",
  emplacement: "Salle de stockage 3",
  description: "La MFC-L3710CW de Brother est une imprimante multifonction 4-en-1 qui possède de nombreux atouts qui vont améliorer votre rendement. Cette imprimante silencieuse et compacte possède de nombreuses fonctionnalités, des vitesses d'impression élevées et d'une connexion réseau sans fil intégré.",
  caracteristiques: "Vitesse d’impression jusqu’à 18 pages par minute Technologie LED Taille maximale du papier : A4 Écran tactile couleur de 9.3 cm afin de faciliter vos impressions Bac papier de 250 feuilles et chargeur automatique de documents de 50 feuilles Connectivités USB et réseau Wi-Fi Connectivité mobile : AirPrint, Cortado Cloud Print, Google Cloud Print 2.0, iPrint&Scan, Brother Print Service Plugin, Mopria Impressions silencieuses : moins de 45dB Mémoire de 512 Mo Matériaux robustes et durables",
  img: "/build/images/item/imprimante.png",
  href: "/materiel/desktop/imprimante-brother",
  available: true
}, {
  id: 11,
  name: "Clef usb Kingston",
  alt: "Clef usb",
  category: "desktop",
  emplacement: "Salle de stockage 3",
  description: "La clé DataTraveler Max de Kingston est une clé USB qui est dotée d'une interface USB 3.1 Type C afin d'offrir des débits de lecture pouvant atteindre 1000 Mo/s et d'écriture de 900 Mo/s.",
  caracteristiques: "Capacité de 256 Go Interface USB 3.1 Type C Débit en lecture : jusqu'à 1000 Mo/s Débit en écriture : jusqu'à 900 Mo/s Compatibilité : Windows 11/10/8.1, Mac OS (v.10.14.x +), Linux (v. 2.6.x +), Chrome OS",
  img: "/build/images/item/clef-usb.png",
  href: "/materiel/desktop/clef-usb-kingston",
  available: true
}, {
  id: 12,
  name: "SSD externe samsung",
  alt: "Disque dur externe",
  category: "desktop",
  emplacement: "Salle de stockage 3",
  description: "Le Samsung T7 Shield est un SSD externe ultra-rapide et ultra-résistant. Il offre des vitesses fulgurantes pour le transfert de données et bénéficie d'une protection avancée (IP65) contre l'eau, la poussière et les chutes (jusqu'à 3 m). Il est compatible PC, Mac, Android, consoles de jeux et plus.",
  caracteristiques: "Désignation Samsung SSD Externe T7 Shield 1 To Bleu MarqueSamsung ModèleMU-PE1T0R/EU Garantie3 ans (constructeur) PRINCIPALES CARACTÉRISTIQUES Capacité1 To Format de disque externeUltra-portable Type de Disque SystèmeSSD (Solid State Drive) Interface avec l'ordinateurUSB 3.1 Format de Disque2 1/2 OS supporté(s)Microsoft Windows 7 , Microsoft Windows 10 , Mac OS X 10.10 ou supérieur , Microsoft Windows 11 , Android SPÉCIFICATIONS DISQUE Type de DisqueSSD (Solid State Drive) RAID supporténon FONCTIONS SPÉCIALES Résistant aux chocsoui Stockage en lignenon Cryptage des donnéesoui CARACTÉRISTIQUES PHYSIQUES MatériauABS/Aluminium , Elastomère CouleurBleu Largeur88 mm Epaisseur13 mm Profondeur59 mm Poids98 g",
  img: "/build/images/item/disque-dur-externe.png",
  href: "/materiel/desktop/ssd-externe-samsung",
  available: true
}, {
  id: 13,
  name: "Videoprojecteur Epson EB-W49",
  alt: "Videoprojecteur",
  category: "réunion",
  emplacement: "Salle de stockage 4",
  description: "Ce vidéoprojecteur mobile proposé par la marque EPSON vous offre la liberté de l’installer presque partout. C’est un outil de projection durable qui garantit plusieurs années de performances pour toutes vos réunions et présentations. Le design élégant et compact de ce vidéoprojecteur, ainsi que ses faibles dimensions vous permettent d’utiliser sa résolution WXGA partout. De plus, ce vidéoprojecteur à lampe présente une durée d’utilisation en mode éco de près de 17 000 heures.",
  caracteristiques: "Technologie de projection 3LCD + Obturateur RVB à cristaux liquides Luminosité couleur et lumière blanche Jusqu’à 3800 lumens Résolution WXGA, 1280 x 800, 16:10 Reproduction des couleurs Jusqu’à 1,07 milliards de couleurs Taille de l’image Entre 33 et 320 pouces Contraste 16000:1 Distance focale 16,9 mm - 20,28 mm Offset 10:1 Dimensions nettes 302‎ x 249 x 87 mm (Largeur x Profondeur x Hauteur) Poids 2,7 Kg",
  img: "/build/images/item/videoprojecteur.png",
  href: "/materiel/reunion/videoprojecteur-epson-eb-w49",
  available: true
}, {
  id: 14,
  name: "Écran Samsung QMB",
  alt: "Écran",
  category: "réunion",
  emplacement: "Salle de stockage 4",
  description: "Upscaling et Dynamic Crystal Colors sont les technologies de la marque SAMSUNG qui garantissent à cet écran professionnel une colorimétrie incroyable pour des contenus toujours plus réalistes dans tous vos environnements intérieurs. Cette gamme d’écrans professionnels SAMSUNG QMB vous offre une visibilité parfaite à tout moment de la journée car elle est dotée d’une haute luminosité, d’une dalle mate anti-reflets et d’un grand angle de vision de 178°.",
  caracteristiques: "Type Edge LED BLU Taille en centimètre 967.5x557.7x48.3 Luminosité 500 cd/m2 Type de dalle VA Poids net 10 kg Consommation en veille 0.5W VESA 200x200 Technologie Upscalling Système d’exploitation Tizen 6.5",
  img: "/build/images/item/ecran.png",
  href: "/materiel/reunion/ecran-samsung-qmb",
  available: true
}, {
  id: 15,
  name: "Paperboard digital Samsung Flip 4",
  alt: "Paperboard digital",
  category: "réunion",
  emplacement: "Salle de stockage 4",
  description: "Le Paperboard digital Samsung Flip 4 est un écran tactile de 75 ou 85 pouces doté d’une résolution 4K. Il donne la possibilité de prendre des notes, d’importer des fichiers, de partager du contenu et bien plus encore ! C’est l’outil incontournable en salle de réunion pour collaborer efficacement.",
  caracteristiques: "Taille 55'', 65'', 75” et 85” Résolution 3 840 x 2 160 (paysage) Luminosité 350 cd/m2 Angle de vision 178:178 Haut-parleurs intégrés (10 W x 4) Signal d’entrée 2 x HDMI (1 avant, 1 arrière), 1 x DP, USB-C (avant), 3 x USB (2 SoC, 1 External) 1 x Slot OPS I/F Signal de sortie 1 x HDMI Out (Partage d’écran), 1 x Touch out 2 (USB Upstream), Stereo Mini Jack Points de contact simultanés 4 sur SoC, 20 sur source externe Dimensions Nettes / Brutes (mm) : 55 pouces : 1297.4 x 768.2 x 59.9 65 pouces : 1522.4 x 897.6 x 62.9 75 pouces : 1724 x 1026.3 x 89 85 pouces : 1945.8 x 1151.1 x 89 Mémoire de stockage 32GB (2.65GB occupé par l'O/S, 29.35GB disponible) VESA 400*400",
  img: "/build/images/item/paperboard-digital.png",
  href: "/materiel/reunion/paperboard-digital-samsung-flip-4",
  available: true
}];

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/global.css */ "./assets/styles/global.css");
/* harmony import */ var _js_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/bootstrap */ "./assets/js/bootstrap.js");
/* harmony import */ var _symfony_ux_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @symfony/ux-react */ "./vendor/symfony/ux-react/assets/dist/register_controller.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application


(0,_symfony_ux_react__WEBPACK_IMPORTED_MODULE_2__.registerReactControllerComponents)(__webpack_require__("./assets/react/controllers sync recursive \\.(j%7Ct)sx?$"));

/***/ }),

/***/ "./assets/js/bootstrap.js":
/*!********************************!*\
  !*** ./assets/js/bootstrap.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/react/controllers/accueil.jsx":
/*!**********************************************!*\
  !*** ./assets/react/controllers/accueil.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Accueil)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/navbar */ "./assets/components/navbar.jsx");
/* harmony import */ var _components_copyright__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/copyright */ "./assets/components/copyright.jsx");
/* harmony import */ var _components_skeleton_materiel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/skeleton/materiel */ "./assets/components/skeleton/materiel.jsx");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/loading */ "./assets/components/loading.jsx");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function randomTime(min, max) {
  // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function Accueil() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(function () {
    setTimeout(function () {
      setLoading(false);
    }, randomTime(800, 1000));
  }, []);
  function removeOpacity() {
    var elem = document.getElementById("main");
    if (elem) {
      elem.style.opacity = 1;
    }
    elem = document.getElementById("loading");
    if (elem) {
      elem.style.opacity = 0;
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement((react__WEBPACK_IMPORTED_MODULE_17___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_components_loading__WEBPACK_IMPORTED_MODULE_21__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("main", {
    id: "main",
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("header", {
    className: "panelHeader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("ul", {
    className: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_22__["default"], {
    href: "/accueil"
  }, "Accueil")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("li", null, "Materiel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_18__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("section", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_components_skeleton_materiel__WEBPACK_IMPORTED_MODULE_20__["default"], {
    page: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_components_copyright__WEBPACK_IMPORTED_MODULE_19__["default"], null)))), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement((react__WEBPACK_IMPORTED_MODULE_17___default().Fragment), null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement((react__WEBPACK_IMPORTED_MODULE_17___default().Fragment), null, removeOpacity()));
}

/***/ }),

/***/ "./assets/react/controllers/login.jsx":
/*!********************************************!*\
  !*** ./assets/react/controllers/login.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");



function Login() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panelLeft"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "leftForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "leftFormControl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/build/images/digitlight.svg",
    alt: "DigitLight",
    width: "500",
    height: "500"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Le gestionnaire de r\xE9servation et de pr\xE8s de mat\xE9riels centralis\xE9s")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panelRight"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "rightForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panelRightTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Connexion")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    margin: "dense",
    id: "login",
    color: "primary",
    label: "Identifiant",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    margin: "dense",
    id: "password",
    color: "primary",
    label: "Mot de passe",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: "large",
    variant: "outlined"
  }, "Se connecter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panelRightControl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", null, "Vous avez besoin d'aide ?\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "mailto:corantin.berger@hotmail.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Contactez-nous")))))));
}

/***/ }),

/***/ "./assets/react/controllers/materiel/desktop.jsx":
/*!*******************************************************!*\
  !*** ./assets/react/controllers/materiel/desktop.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Telephonique)
/* harmony export */ });
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/navbar */ "./assets/components/navbar.jsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/header */ "./assets/components/header.jsx");
/* harmony import */ var _components_copyright__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/copyright */ "./assets/components/copyright.jsx");
/* harmony import */ var _components_skeleton_materiel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/skeleton/materiel */ "./assets/components/skeleton/materiel.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





function Telephonique() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Desktop",
    item: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("section", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_skeleton_materiel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    page: "desktop"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_copyright__WEBPACK_IMPORTED_MODULE_2__["default"], null)))));
}

/***/ }),

/***/ "./assets/react/controllers/materiel/materiel_details.jsx":
/*!****************************************************************!*\
  !*** ./assets/react/controllers/materiel/materiel_details.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/navbar */ "./assets/components/navbar.jsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/header */ "./assets/components/header.jsx");
/* harmony import */ var _components_copyright__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/copyright */ "./assets/components/copyright.jsx");
/* harmony import */ var _components_skeleton_materiel_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/skeleton/materiel_details */ "./assets/components/skeleton/materiel_details.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





function Item(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: props.cat,
    item: props.item
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("section", {
    className: "InfoItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_skeleton_materiel_details__WEBPACK_IMPORTED_MODULE_3__["default"], {
    itemName: props.item
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_copyright__WEBPACK_IMPORTED_MODULE_2__["default"], null)))));
}

/***/ }),

/***/ "./assets/react/controllers/materiel/reseau.jsx":
/*!******************************************************!*\
  !*** ./assets/react/controllers/materiel/reseau.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Reseau)
/* harmony export */ });
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/navbar */ "./assets/components/navbar.jsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/header */ "./assets/components/header.jsx");
/* harmony import */ var _components_copyright__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/copyright */ "./assets/components/copyright.jsx");
/* harmony import */ var _components_skeleton_materiel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/skeleton/materiel */ "./assets/components/skeleton/materiel.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





function Reseau() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "R\xE9seau",
    item: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("section", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_skeleton_materiel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    page: "r\xE9seau"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_copyright__WEBPACK_IMPORTED_MODULE_2__["default"], null)))));
}

/***/ }),

/***/ "./assets/react/controllers/materiel/reunion.jsx":
/*!*******************************************************!*\
  !*** ./assets/react/controllers/materiel/reunion.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Telephonique)
/* harmony export */ });
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/navbar */ "./assets/components/navbar.jsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/header */ "./assets/components/header.jsx");
/* harmony import */ var _components_copyright__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/copyright */ "./assets/components/copyright.jsx");
/* harmony import */ var _components_skeleton_materiel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/skeleton/materiel */ "./assets/components/skeleton/materiel.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





function Telephonique() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "R\xE9union",
    item: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("section", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_skeleton_materiel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    page: "r\xE9union"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_copyright__WEBPACK_IMPORTED_MODULE_2__["default"], null)))));
}

/***/ }),

/***/ "./assets/react/controllers/materiel/telephonique.jsx":
/*!************************************************************!*\
  !*** ./assets/react/controllers/materiel/telephonique.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Telephonique)
/* harmony export */ });
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/navbar */ "./assets/components/navbar.jsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/header */ "./assets/components/header.jsx");
/* harmony import */ var _components_copyright__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/copyright */ "./assets/components/copyright.jsx");
/* harmony import */ var _components_skeleton_materiel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/skeleton/materiel */ "./assets/components/skeleton/materiel.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





function Telephonique() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "T\xE9l\xE9phonique",
    item: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("section", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_skeleton_materiel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    page: "t\xE9l\xE9phonique"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_copyright__WEBPACK_IMPORTED_MODULE_2__["default"], null)))));
}

/***/ }),

/***/ "./vendor/symfony/ux-react/assets/dist/register_controller.js":
/*!********************************************************************!*\
  !*** ./vendor/symfony/ux-react/assets/dist/register_controller.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerReactControllerComponents": () => (/* binding */ registerReactControllerComponents)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6__);







function registerReactControllerComponents(context) {
  var reactControllers = {};
  var importAllReactComponents = function importAllReactComponents(r) {
    r.keys().forEach(function (key) {
      return reactControllers[key] = r(key)["default"];
    });
  };
  importAllReactComponents(context);
  window.resolveReactComponent = function (name) {
    var component = reactControllers["./".concat(name, ".jsx")] || reactControllers["./".concat(name, ".tsx")];
    if (typeof component === 'undefined') {
      throw new Error('React controller "' + name + '" does not exist');
    }
    return component;
  };
}


/***/ }),

/***/ "./vendor/symfony/ux-react/assets/dist/render_controller.js":
/*!******************************************************************!*\
  !*** ./vendor/symfony/ux-react/assets/dist/render_controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var createRoot;
var m = react_dom__WEBPACK_IMPORTED_MODULE_20__;
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  createRoot = function createRoot(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}
var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    _classCallCheck(this, default_1);
    return _super.apply(this, arguments);
  }
  _createClass(default_1, [{
    key: "connect",
    value: function connect() {
      var props = this.propsValue ? this.propsValue : null;
      this.dispatchEvent('connect', {
        component: this.componentValue,
        props: props
      });
      if (!this.componentValue) {
        throw new Error('No component specified.');
      }
      var component = window.resolveReactComponent(this.componentValue);
      this._renderReactElement(react__WEBPACK_IMPORTED_MODULE_19___default().createElement(component, props, null));
      this.dispatchEvent('mount', {
        componentName: this.componentValue,
        component: component,
        props: props
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.element.root.unmount();
      this.dispatchEvent('unmount', {
        component: this.componentValue,
        props: this.propsValue ? this.propsValue : null
      });
    }
  }, {
    key: "_renderReactElement",
    value: function _renderReactElement(reactElement) {
      var element = this.element;
      if (!element.root) {
        element.root = createRoot(this.element);
      }
      element.root.render(reactElement);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: 'react'
      });
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_21__.Controller);
default_1.values = {
  component: String,
  props: Object
};


/***/ }),

/***/ "./assets/styles/global.css":
/*!**********************************!*\
  !*** ./assets/styles/global.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_Link_Link_js-nod-3086e7"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVCQSxpRUFBZTtBQUNmLDhCQUE4QiwyTUFBZ0Y7QUFDOUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGK0M7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0VBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBLE9BVUksbUJBQVU7TUFDTixJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxHQUFHLG1FQUFtRTtJQUNsRztFQUFDO0VBQUE7QUFBQSxFQUh3QkYsMkRBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hiO0FBRVgsU0FBU0ksTUFBTSxHQUFHO0VBQzdCLG9CQUNJO0lBQUssS0FBSyxFQUFFO01BQ1JDLFVBQVUsRUFBRSxNQUFNO01BQ2xCQyxjQUFjLEVBQUUsTUFBTTtNQUN0QkMsT0FBTyxFQUFFLE1BQU07TUFDZkMsTUFBTSxFQUFFLE1BQU07TUFDZEMsT0FBTyxFQUFFLEtBQUs7TUFDZEMsS0FBSyxFQUFFLFNBQVM7TUFDaEJDLFVBQVUsRUFBRSw2QkFBNkI7TUFDekNDLFVBQVUsRUFBRSxXQUFXO01BQ3ZCQyxRQUFRLEVBQUUsU0FBUztNQUNuQkMsY0FBYyxFQUFFLFFBQVE7TUFDeEJDLFVBQVUsRUFBRSxRQUFRO01BQ3BCQyxlQUFlLEVBQUU7SUFDckI7RUFBRSxHQUFDLG1CQUFjLEVBQUMsSUFBSUMsSUFBSSxFQUFFLENBQUNDLFdBQVcsRUFBRSxFQUFDLCtCQUF1QixDQUFNO0FBRWhGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnNDO0FBQ1o7QUFFMUIsU0FBU0UsZUFBZSxDQUFDQyxHQUFHLEVBQUU7RUFDMUIsT0FBT0EsR0FBRyxDQUNQQyxXQUFXLEVBQUUsQ0FDYkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUNWQyxHQUFHLENBQUMsVUFBQ0MsSUFBSTtJQUFBLE9BQUtBLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxXQUFXLEVBQUUsR0FBR0YsSUFBSSxDQUFDRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0VBQUEsRUFBQyxDQUMzREMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQ0MsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQ1YsV0FBVyxFQUFFO0FBQ2xHO0FBQUM7QUFFWSxTQUFTVyxNQUFNLE9BQWtCO0VBQUEsSUFBZkMsS0FBSyxRQUFMQSxLQUFLO0lBQUVDLElBQUksUUFBSkEsSUFBSTtFQUN4QyxvQkFDSSx1SUFDSTtJQUFRLFNBQVMsRUFBQztFQUFhLGdCQUMzQjtJQUFJLFNBQVMsRUFBQztFQUFZLGdCQUN0QixvRkFDSSwyREFBQywwREFBSTtJQUFDLElBQUksRUFBQztFQUFVLEdBQUMsU0FFdEIsQ0FBTyxDQUNOLGVBQ0wsb0ZBQ0ksMkRBQUMsMERBQUk7SUFBQyxJQUFJLEVBQUM7RUFBVSxHQUFDLFVBRXRCLENBQU8sQ0FDTixFQUVKQSxJQUFJLENBQUNDLE1BQU0sSUFBSSxDQUFDLGdCQUViLHVFQUNLRixLQUFLLENBQ0wsZ0JBQ0wsb0ZBQ0ksMkRBQUMsMERBQUk7SUFBQyxJQUFJLHNCQUFlZCxlQUFlLENBQUNjLEtBQUssQ0FBQztFQUFHLEdBQzdDQSxLQUFLLENBQ0gsQ0FDTixFQUdSQyxJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDLGdCQUVaLG9GQUNJLHlFQUFPaEIsZUFBZSxDQUFDZSxJQUFJLENBQUMsQ0FBQ1QsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxXQUFXLEVBQUUsR0FBR1AsZUFBZSxDQUFDZSxJQUFJLENBQUNQLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFRLENBQzVGLEdBR0wsSUFBSSxDQUdQLENBQ0EsQ0FDVjtBQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRHlDO0FBQ2Y7QUFFMUIsSUFBTVUsS0FBSyxHQUFHLFNBQVJBLEtBQUssQ0FBYUMsUUFBUSxFQUFFO0VBQ2hDLElBQUlBLFFBQVEsSUFBSSxJQUFJLElBQUlBLFFBQVEsSUFBSSxFQUFFLEVBQUU7SUFDdEM7TUFBRSxPQUFPRix5REFBWSxDQUFDLFVBQUFGLElBQUk7UUFBQSxPQUFJQSxJQUFJO01BQUEsRUFBQyxDQUFDQyxNQUFNO0lBQUM7RUFDN0MsQ0FBQyxNQUNJO0lBQ0g7TUFBRSxPQUFPQyx5REFBWSxDQUFDLFVBQUFGLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUNNLFFBQVEsSUFBSUYsUUFBUTtNQUFBLEVBQUMsQ0FBQ0gsTUFBTTtJQUFDO0VBQ2xFO0FBQ0YsQ0FBQztBQUVELElBQU1NLFNBQVMsR0FBRyxTQUFaQSxTQUFTLENBQWFILFFBQVEsRUFBRTtFQUNwQyxJQUFJQSxRQUFRLElBQUksSUFBSSxJQUFJQSxRQUFRLElBQUksRUFBRSxFQUFFO0lBQ3RDO01BQ0UsT0FBT0YseURBQVksQ0FBQyxVQUFBRixJQUFJO1FBQUEsT0FBSUEsSUFBSSxDQUFDTyxTQUFTO01BQUEsRUFBQyxDQUN4Q2xCLEdBQUcsQ0FBQyxVQUFDVyxJQUFJO1FBQUEsT0FDUEEsSUFBSTtNQUFBLENBQUMsQ0FBQyxDQUFDQyxNQUFNO0lBQ3BCO0VBQ0YsQ0FBQyxNQUNJO0lBQ0g7TUFDRSxPQUFPQyx5REFBWSxDQUFDLFVBQUFGLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUNNLFFBQVEsSUFBSUYsUUFBUTtNQUFBLEVBQUMsQ0FDbkRDLE1BQU0sQ0FBQyxVQUFBTCxJQUFJO1FBQUEsT0FBSUEsSUFBSSxDQUFDTyxTQUFTO01BQUEsRUFBQyxDQUFDTixNQUFNO0lBQzFDO0VBQ0Y7QUFDRixDQUFDO0FBRUQsSUFBTU8sV0FBVyxHQUFHLFNBQWRBLFdBQVcsQ0FBYUosUUFBUSxFQUFFO0VBQ3RDLElBQUlBLFFBQVEsSUFBSSxJQUFJLElBQUlBLFFBQVEsSUFBSSxFQUFFLEVBQUU7SUFDdEM7TUFDRSxPQUFPRix5REFBWSxDQUFDLFVBQUFGLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUNRLFdBQVc7TUFBQSxFQUFDLENBQzFDbkIsR0FBRyxDQUFDLFVBQUNXLElBQUk7UUFBQSxPQUNQQSxJQUFJO01BQUEsQ0FBQyxDQUFDLENBQUNDLE1BQU07SUFDcEI7RUFDRixDQUFDLE1BQ0k7SUFDSDtNQUNFLE9BQU9DLHlEQUFZLENBQUMsVUFBQUYsSUFBSTtRQUFBLE9BQUlBLElBQUksQ0FBQ00sUUFBUSxJQUFJRixRQUFRO01BQUEsRUFBQyxDQUNuREMsTUFBTSxDQUFDLFVBQUFMLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUNRLFdBQVc7TUFBQSxFQUFDLENBQUNQLE1BQU07SUFDNUM7RUFDRjtBQUNGLENBQUM7QUFFYyxTQUFTUSxTQUFTLE9BQWU7RUFBQSxJQUFaTCxRQUFRLFFBQVJBLFFBQVE7RUFDMUMsb0JBQVE7SUFBSyxTQUFTLEVBQUM7RUFBWSxnQkFDakMseUVBQU0sU0FDRyxFQUFDRCxLQUFLLENBQUNDLFFBQVEsQ0FBQyxDQUNsQixlQUNQLHlFQUFNLGNBQ1EsRUFBQ0csU0FBUyxDQUFDSCxRQUFRLENBQUMsQ0FDM0IsZUFDUCx5RUFBTSxnQkFDVSxFQUFDSSxXQUFXLENBQUNKLFFBQVEsQ0FBQyxDQUMvQixDQUNIO0FBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEMEI7QUFDbUI7QUFFOUIsU0FBU08sV0FBVyxHQUFHO0VBQ2xDLG9CQUNJO0lBQUssRUFBRSxFQUFDLFNBQVM7SUFBQyxLQUFLLEVBQUU7TUFDckJDLFFBQVEsRUFBRSxVQUFVO01BQ3BCQyxHQUFHLEVBQUUsR0FBRztNQUNSQyxNQUFNLEVBQUUsR0FBRztNQUNYQyxJQUFJLEVBQUUsR0FBRztNQUNUQyxLQUFLLEVBQUUsR0FBRztNQUNWQyxNQUFNLEVBQUUsTUFBTTtNQUNkQyxLQUFLLEVBQUUsT0FBTztNQUNkN0MsTUFBTSxFQUFFO0lBQ1o7RUFBRSxnQkFBQywyREFBQyx1REFBSztJQUNELE1BQU0sRUFBQyxLQUFLO0lBQ1osS0FBSyxFQUFDLEtBQUs7SUFDWCxLQUFLLEVBQUMsNEJBQTRCO0lBQ2xDLGNBQWMsRUFBQyxPQUFPO0lBQ3RCLE1BQU0sRUFBQyxNQUFNO0lBQ2IsU0FBUyxFQUFDLHVCQUF1QjtJQUNqQyxZQUFZLEVBQUUsQ0FBQyxDQUFFO0lBQ2pCLFlBQVksRUFBQyxFQUFFO0lBQ2YsT0FBTyxFQUFFO0VBQUssRUFDaEIsQ0FBTTtBQUVwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJxQztBQUNYO0FBRVgsU0FBUzhDLElBQUksT0FBVztFQUFBLElBQVJuQixJQUFJLFFBQUpBLElBQUk7RUFDakMsb0JBQVE7SUFBSyxTQUFTLEVBQUM7RUFBVyxnQkFDaEM7SUFBSyxFQUFFLEVBQUMsV0FBVztJQUFDLFNBQVMsRUFBQztFQUFZLGdCQUN4QywyREFBQywwREFBSTtJQUFDLElBQUksRUFBRUEsSUFBSSxDQUFDb0I7RUFBSyxnQkFDcEI7SUFDRSxHQUFHLEVBQUVwQixJQUFJLENBQUNxQixHQUFJO0lBQ2QsR0FBRyxFQUFFckIsSUFBSSxDQUFDc0IsR0FBSTtJQUNkLEtBQUssRUFBRTtNQUFFQyxTQUFTLEVBQUU7SUFBUSxDQUFFO0lBQzlCLEtBQUssRUFBRSxHQUFJO0lBQ1gsTUFBTSxFQUFFO0VBQUksRUFDWixDQUNHLENBQ0gsZUFDTjtJQUFLLFNBQVMsRUFBQztFQUFVLGdCQUN2QjtJQUFLLFNBQVMsRUFBQztFQUFlLGdCQUM1Qix5RUFBTSxtQkFBaUIsQ0FBTyxlQUM5Qix5RUFBT3ZCLElBQUksQ0FBQ3dCLElBQUksQ0FBUSxDQUNwQixlQUNOO0lBQUssU0FBUyxFQUFDO0VBQWUsZ0JBQzVCLDJEQUFDLDBEQUFJO0lBQUMsSUFBSSxzQkFBZXhCLElBQUksQ0FBQ00sUUFBUSxDQUFDWCxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUM7RUFBRyxnQkFDeEYseUVBQU0saUJBQVksRUFBQ0ksSUFBSSxDQUFDTSxRQUFRLENBQVEsQ0FDbkMsQ0FDSCxlQUNOO0lBQUssU0FBUyxFQUFDO0VBQWUsR0FDM0JOLElBQUksQ0FBQ08sU0FBUyxnQkFDYix5RUFBTSxXQUFTO0lBQU0sS0FBSyxFQUFFO01BQUVoQyxLQUFLLEVBQUU7SUFBWTtFQUFFLEdBQUMsWUFBVSxDQUFPLENBQU8sZ0JBRTVFLHlFQUFNLFdBQVM7SUFBTSxLQUFLLEVBQUU7TUFBRUEsS0FBSyxFQUFFO0lBQU07RUFBRSxHQUFDLGVBQU8sQ0FBTyxDQUFPLENBRWpFLENBQ0YsQ0FDRjtBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNzQztBQUNJO0FBQ2hCO0FBRVgsU0FBUzRDLElBQUksT0FBVztFQUFBLElBQVJuQixJQUFJLFFBQUpBLElBQUk7RUFFakMsU0FBU2YsZUFBZSxDQUFDQyxHQUFHLEVBQUU7SUFDNUIsT0FBT0EsR0FBRyxDQUNQQyxXQUFXLEVBQUUsQ0FDYkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUNWQyxHQUFHLENBQUMsVUFBQ0MsSUFBSTtNQUFBLE9BQUtBLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxXQUFXLEVBQUUsR0FBR0YsSUFBSSxDQUFDRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQUEsRUFBQyxDQUMzREMsSUFBSSxDQUFDLEdBQUcsQ0FBQztFQUNkO0VBQUM7RUFFRCxTQUFTZ0MsSUFBSSxDQUFDQyxDQUFDLEVBQUU7SUFFZixJQUFJQyxNQUFNLEdBQUdELENBQUMsQ0FBQ0UsYUFBYTtJQUU1QixJQUFJQyxPQUFPO0lBQ1gsSUFBSUMsT0FBTztJQUVYSixDQUFDLENBQUNHLE9BQU8sR0FBR0EsT0FBTyxHQUFHSCxDQUFDLENBQUNHLE9BQU8sR0FBR0EsT0FBTyxHQUFHSCxDQUFDLENBQUNLLEtBQUs7SUFDbkRMLENBQUMsQ0FBQ0ksT0FBTyxHQUFHQSxPQUFPLEdBQUdKLENBQUMsQ0FBQ0ksT0FBTyxHQUFHQSxPQUFPLEdBQUdKLENBQUMsQ0FBQ00sS0FBSztJQUVuRCxJQUFJQyxDQUFDLEdBQUdKLE9BQU8sR0FBQ0YsTUFBTSxDQUFDTyxXQUFXLEdBQUMsRUFBRTtJQUNyQyxJQUFJQyxDQUFDLEdBQUdMLE9BQU8sR0FBQ0gsTUFBTSxDQUFDUyxZQUFZLEdBQUMsRUFBRTtJQUV0Q1QsTUFBTSxDQUFDVSxLQUFLLENBQUNDLGtCQUFrQixHQUFHTCxDQUFDLEdBQUcsSUFBSSxHQUFHRSxDQUFDLEdBQUcsR0FBRztFQUN0RDtFQUVBLG9CQUFRO0lBQUssU0FBUyxFQUFDO0VBQWUsZ0JBQ3BDO0lBQUssU0FBUyxFQUFDO0VBQVksZ0JBQ3pCO0lBQVEsU0FBUyxFQUFDLE1BQU07SUFBQyxXQUFXLEVBQUVWLElBQUs7SUFBQyxLQUFLLEVBQUU7TUFBQ2MsZUFBZSxnQkFBU3hDLElBQUksQ0FBQ3FCLEdBQUc7SUFBSTtFQUFFLGdCQUN4RjtJQUNFLEdBQUcsRUFBRXJCLElBQUksQ0FBQ3FCLEdBQUk7SUFDZCxHQUFHLEVBQUVyQixJQUFJLENBQUNzQixHQUFJO0lBQ2QsS0FBSyxFQUFFO01BQUVDLFNBQVMsRUFBRTtJQUFRLENBQUU7SUFDOUIsS0FBSyxFQUFFLEdBQUk7SUFDWCxNQUFNLEVBQUU7RUFBSSxFQUNaLENBQ0ssQ0FDTCxlQUNOO0lBQUssU0FBUyxFQUFDO0VBQVUsZ0JBQ3ZCO0lBQUssU0FBUyxFQUFDO0VBQWUsZ0JBQzVCLHVFQUFLdkIsSUFBSSxDQUFDd0IsSUFBSSxDQUFNLENBQ2hCLGVBQ047SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDMUIsMkRBQUMsMERBQUk7SUFBQyxJQUFJLHNCQUFleEIsSUFBSSxDQUFDTSxRQUFRLENBQUNYLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQztFQUFHLEdBQUMsaUJBQzdFLEVBQUNYLGVBQWUsQ0FBQ2UsSUFBSSxDQUFDTSxRQUFRLENBQUMsQ0FDdEMsQ0FDSCxlQUNOO0lBQUssU0FBUyxFQUFFO0VBQW9CLEdBQ2pDTixJQUFJLENBQUNPLFNBQVMsZ0JBQ2IseUVBQU0sV0FBUztJQUFHLEtBQUssRUFBRTtNQUFFaEMsS0FBSyxFQUFFO0lBQVk7RUFBRSxHQUFDLFlBQVUsQ0FBSSxDQUFPLGdCQUV0RSx5RUFBTSxXQUFTO0lBQUcsS0FBSyxFQUFFO01BQUVBLEtBQUssRUFBRTtJQUFNO0VBQUUsR0FBQyxlQUFPLENBQUksQ0FBTyxDQUUzRCxlQUNOO0lBQUssU0FBUyxFQUFDO0VBQWMsZ0JBQzNCLHNFQUFHLGdCQUFjLEVBQUN5QixJQUFJLENBQUN5QyxXQUFXLEVBQUMsU0FBSSxFQUFDekMsSUFBSSxDQUFDMEMsRUFBRSxDQUFLLENBQ2hELGVBQ047SUFBSyxTQUFTLEVBQUM7RUFBYyxnQkFDM0Isc0ZBQU0sdUVBQUksZ0JBQWMsQ0FBSyxLQUFDLEVBQUMxQyxJQUFJLENBQUMyQyxXQUFXLENBQVEsQ0FDbkQsZUFDTjtJQUFLLFNBQVMsRUFBQztFQUFhLGdCQUMxQixzRkFBTSx1RUFBSSx3QkFBbUIsQ0FBSyxLQUFDLEVBQUMzQyxJQUFJLENBQUM0QyxnQkFBZ0IsQ0FBUSxDQUM3RCxFQUNMNUMsSUFBSSxDQUFDTyxTQUFTLGdCQUNiO0lBQUssU0FBUyxFQUFDO0VBQWMsZ0JBQzNCO0lBQ0UsR0FBRyxFQUFDLHdUQUF3VDtJQUM1VCxLQUFLLEVBQUU7TUFBRXNDLE1BQU0sRUFBRTtJQUFFO0VBQUUsRUFDZCxDQUNMLEdBQUcsSUFBSSxlQUVmO0lBQUssU0FBUyxFQUFDO0VBQWdCLGdCQUM3QiwyREFBQyw2REFBTTtJQUNMLFNBQVMsRUFBQyxhQUFhO0lBQ3ZCLElBQUksRUFBQyxPQUFPO0lBQ1osRUFBRSxFQUFFO01BQUVDLFdBQVcsRUFBRSxPQUFPO01BQUV2RSxLQUFLLEVBQUU7SUFBUSxDQUFFO0lBQzdDLE9BQU8sRUFBQztFQUFVLGdCQUNsQjtJQUFLLFNBQVMsRUFBQztFQUFjLGdCQUMzQixzRUFBRyxzQkFBb0IsQ0FBSSxDQUN2QixDQUNDLENBQ0wsQ0FDRixDQUNGO0FBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RjBDO0FBQ0o7QUFDRztBQUUxQixTQUFTeUUsTUFBTSxHQUFHO0VBRTdCLG9CQUNRO0lBQUssU0FBUyxFQUFDO0VBQVMsZ0JBQ3BCO0lBQ0ksRUFBRSxFQUFDLE9BQU87SUFDVixHQUFHLEVBQUMsOEJBQThCO0lBQ2xDLEdBQUcsRUFBQyxtQkFBbUI7SUFDdkIsS0FBSyxFQUFFLEdBQUk7SUFDWCxNQUFNLEVBQUU7RUFBSSxFQUNkLGVBQ0YsMkRBQUMsMERBQUk7SUFBQyxJQUFJLEVBQUM7RUFBVSxnQkFDakIsMkRBQUMsNERBQU07SUFDSCxTQUFTLEVBQUMsS0FBSztJQUNmLElBQUksRUFBQyxPQUFPO0lBQ1osT0FBTyxFQUFDO0VBQVUsZ0JBQ2xCO0lBQUssU0FBUyxFQUFDO0VBQVMsZ0JBQ3BCO0lBQ0ksR0FBRyxFQUFDLG1DQUFtQztJQUN2QyxHQUFHLEVBQUMsa0JBQWtCO0lBQ3RCLEtBQUssRUFBRSxHQUFJO0lBQ1gsTUFBTSxFQUFFO0VBQUksRUFDZCxlQUNGLHNFQUFHLGFBQVEsQ0FBSSxDQUNiLENBQ0QsQ0FDTixlQUVQO0lBQUssU0FBUyxFQUFDO0VBQWtCLGdCQUM3QiwyREFBQywwREFBSTtJQUFDLElBQUksRUFBQztFQUFrQixnQkFDekIsMkRBQUMsNERBQU07SUFDSCxTQUFTLEVBQUMsUUFBUTtJQUNsQixJQUFJLEVBQUMsT0FBTztJQUNaLE9BQU8sRUFBQztFQUFVLGdCQUNsQjtJQUFLLFNBQVMsRUFBQztFQUFTLGdCQUNwQjtJQUNJLEdBQUcsRUFBQyxpQ0FBaUM7SUFDckMsR0FBRyxFQUFDLGdCQUFnQjtJQUNwQixLQUFLLEVBQUUsR0FBSTtJQUNYLE1BQU0sRUFBRTtFQUFJLEVBQ2QsZUFDRixzRUFBRyxXQUFNLENBQUksQ0FDWCxDQUNELENBQ04sZUFFUCwyREFBQywwREFBSTtJQUFDLElBQUksRUFBQztFQUF3QixnQkFDL0IsMkRBQUMsNERBQU07SUFDSCxTQUFTLEVBQUMsUUFBUTtJQUNsQixJQUFJLEVBQUMsT0FBTztJQUNaLE9BQU8sRUFBQztFQUFVLGdCQUNsQjtJQUFLLFNBQVMsRUFBQztFQUFTLGdCQUNwQjtJQUNJLEdBQUcsRUFBQyxvQ0FBb0M7SUFDeEMsR0FBRyxFQUFDLG1CQUFtQjtJQUN2QixLQUFLLEVBQUUsR0FBSTtJQUNYLE1BQU0sRUFBRTtFQUFJLEVBQ2QsZUFDRixzRUFBRyxvQkFBWSxDQUFJLENBQ2pCLENBQ0QsQ0FDTixlQUVQLDJEQUFDLDBEQUFJO0lBQUMsSUFBSSxFQUFDO0VBQW1CLGdCQUMxQiwyREFBQyw0REFBTTtJQUNILFNBQVMsRUFBQyxRQUFRO0lBQ2xCLElBQUksRUFBQyxPQUFPO0lBQ1osT0FBTyxFQUFDO0VBQVUsZ0JBQ2xCO0lBQUssU0FBUyxFQUFDO0VBQVMsZ0JBQ3BCO0lBQ0ksR0FBRyxFQUFDLGtDQUFrQztJQUN0QyxHQUFHLEVBQUMsaUJBQWlCO0lBQ3JCLEtBQUssRUFBRSxHQUFJO0lBQ1gsTUFBTSxFQUFFO0VBQUksRUFDZCxlQUNGLHNFQUFHLFNBQU8sQ0FBSSxDQUNaLENBQ0QsQ0FDTixlQUVQLDJEQUFDLDBEQUFJO0lBQUMsSUFBSSxFQUFDO0VBQW1CLGdCQUMxQiwyREFBQyw0REFBTTtJQUNILFNBQVMsRUFBQyxRQUFRO0lBQ2xCLElBQUksRUFBQyxPQUFPO0lBQ1osT0FBTyxFQUFDO0VBQVUsZ0JBQ2xCO0lBQUssU0FBUyxFQUFDO0VBQVMsZ0JBQ3BCO0lBQ0ksR0FBRyxFQUFDLGtDQUFrQztJQUN0QyxHQUFHLEVBQUMsaUJBQWlCO0lBQ3JCLEtBQUssRUFBRSxHQUFJO0lBQ1gsTUFBTSxFQUFFO0VBQUksRUFDZCxlQUNGLHNFQUFHLFlBQU8sQ0FBSSxDQUNaLENBQ0QsQ0FDTixDQUNMLENBQ0o7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RzZDO0FBQ0Q7QUFDUjtBQUNOO0FBQ2M7QUFDbEI7QUFFMUIsSUFBTUksS0FBSyxHQUFHLFNBQVJBLEtBQUssQ0FBYWhELFFBQVEsRUFBRTtFQUM5QixJQUFJQSxRQUFRLElBQUksSUFBSSxJQUFJQSxRQUFRLElBQUksRUFBRSxFQUFFO0lBQ3BDO01BQ0ksT0FBT0YsMERBQ0ksQ0FBQyxVQUFBRixJQUFJO1FBQUEsT0FBSUEsSUFBSSxDQUFDTyxTQUFTO01BQUEsRUFBQyxDQUM5QmxCLEdBQUcsQ0FBQyxVQUFBVyxJQUFJO1FBQUEsb0JBQ0wsNERBQUMsa0RBQUk7VUFDRCxHQUFHLEVBQUVBLElBQUksQ0FBQzBDLEVBQUc7VUFDYixJQUFJLEVBQUUxQztRQUFLLEVBQ2I7TUFBQSxDQUFDLENBQUM7SUFDaEI7RUFDSixDQUFDLE1BQ0k7SUFDRDtNQUNJLE9BQU9FLDBEQUNJLENBQUMsVUFBQUYsSUFBSTtRQUFBLE9BQUlBLElBQUksQ0FBQ00sUUFBUSxJQUFJRixRQUFRO01BQUEsRUFBQyxDQUN6Q2YsR0FBRyxDQUFDLFVBQUNXLElBQUk7UUFBQSxvQkFDVCw0REFBQyxrREFBSTtVQUNGLEdBQUcsRUFBRUEsSUFBSSxDQUFDMEMsRUFBRztVQUNiLElBQUksRUFBRTFDO1FBQUssRUFDYjtNQUFBLENBQ0QsQ0FBQztJQUNWO0VBQ0o7QUFDSixDQUFDO0FBRUQsSUFBTXFELGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0I7RUFBQSxvQkFDcEI7SUFBTSxLQUFLLEVBQUU7TUFDVGhGLE1BQU0sRUFBRTtJQUNaO0VBQUUsZ0JBQ0UsNERBQUMsK0RBQVE7SUFBQyxPQUFPLEVBQUMsTUFBTTtJQUNwQixLQUFLLEVBQUMsS0FBSztJQUNYLE1BQU0sRUFBQyxLQUFLO0lBQ1osRUFBRSxFQUFFO01BQ0FpRixVQUFVLEVBQUUsSUFBSTtNQUNoQkMsU0FBUyxFQUFFO0lBQ2Y7RUFBRSxFQUFHLENBQ047QUFBQSxDQUFDO0FBRVosSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVk7RUFBQSxvQkFDZCw0REFBQywrREFBUTtJQUFDLE9BQU8sRUFBQyxTQUFTO0lBQ3ZCLEtBQUssRUFBQyxLQUFLO0lBQ1gsTUFBTSxFQUFDLEtBQUs7SUFDWixFQUFFLEVBQUU7TUFDQUYsVUFBVSxFQUFFLElBQUk7TUFDaEJDLFNBQVMsRUFBRTtJQUNmO0VBQUUsRUFBRztBQUFBLENBQUM7QUFFZCxTQUFTRSxVQUFVLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0VBQUU7RUFDNUIsT0FBT0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLElBQUlILEdBQUcsR0FBR0QsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHQSxHQUFHLENBQUM7QUFDNUQ7QUFFZSxTQUFTSyxRQUFRLE9BQVc7RUFBQSxJQUFSQyxJQUFJLFFBQUpBLElBQUk7RUFFbkMsZ0JBQThCZCxnREFBUSxDQUFDLElBQUksQ0FBQztJQUFBO0lBQXJDZSxPQUFPO0lBQUVDLFVBQVU7RUFFMUJuQixpREFBUyxDQUFDLFlBQU07SUFDWm9CLFVBQVUsQ0FBQyxZQUFNO01BQ2JELFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQyxFQUFFVCxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQzdCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDSSw0SEFDS1EsT0FBTyxnQkFBSSx5SUFFUiw0REFBQyxrQkFBa0IsT0FBRyxFQUNyQixtQkFBSUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEVBQUUsRUFBRWhGLEdBQUcsQ0FBQyxVQUFDVyxJQUFJO0lBQUEsb0JBQU0sNERBQUMsWUFBWTtNQUFDLEdBQUcsRUFBRUE7SUFBSyxFQUFHO0VBQUEsQ0FBQyxDQUFDLENBRW5FLGdCQUFLLHlJQUFFLDREQUFDLG1EQUFTO0lBQUMsUUFBUSxFQUFFZ0U7RUFBSyxFQUFHLEtBQUMsRUFBQ1osS0FBSyxDQUFDWSxJQUFJLENBQUMsQ0FDaEQsQ0FDTDtBQUVYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRjhDO0FBQ0Y7QUFDTDtBQUNNO0FBQ25CO0FBRTFCLElBQU0vRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWUsQ0FBSUMsR0FBRyxFQUFLO0VBQzdCLE9BQU9BLEdBQUcsQ0FDUEMsV0FBVyxFQUFFLENBQ2JDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FDVkMsR0FBRyxDQUFDLFVBQUNDLElBQUk7SUFBQSxPQUFLQSxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxFQUFFLEdBQUdGLElBQUksQ0FBQ0csS0FBSyxDQUFDLENBQUMsQ0FBQztFQUFBLEVBQUMsQ0FDM0RDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUNDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUNWLFdBQVcsRUFBRTtBQUNsRyxDQUFDO0FBRUgsSUFBTWlFLEtBQUssR0FBRyxTQUFSQSxLQUFLLENBQWFrQixRQUFRLEVBQUU7RUFDOUIsT0FBT3BFLDBEQUNJLENBQUMsVUFBQUYsSUFBSTtJQUFBLE9BQUlmLGVBQWUsQ0FBQ2UsSUFBSSxDQUFDd0IsSUFBSSxDQUFDLElBQUl2QyxlQUFlLENBQUNxRixRQUFRLENBQUM7RUFBQSxFQUFDLENBQ3ZFakYsR0FBRyxDQUFDLFVBQUNXLElBQUk7SUFBQSxvQkFDVCw0REFBQywwREFBSTtNQUNGLEdBQUcsRUFBRUEsSUFBSSxDQUFDMEMsRUFBRztNQUNiLElBQUksRUFBRTFDO0lBQUssRUFDYjtFQUFBLENBQ0QsQ0FBQztBQUNWLENBQUM7QUFFRCxTQUFTeUQsVUFBVSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtFQUFFO0VBQzVCLE9BQU9DLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxJQUFJSCxHQUFHLEdBQUdELEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBR0EsR0FBRyxDQUFDO0FBQzVEO0FBRWUsU0FBU0ssUUFBUSxPQUFlO0VBQUEsSUFBWk8sUUFBUSxRQUFSQSxRQUFRO0VBRXZDLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFTO0lBQUEsb0JBQ1gsNERBQUMsK0RBQVE7TUFDTCxTQUFTLEVBQUMsTUFBTTtNQUNoQixPQUFPLEVBQUMsU0FBUztNQUNqQixLQUFLLEVBQUMsS0FBSztNQUNYLE1BQU0sRUFBQyxLQUFLO01BQ1osRUFBRSxFQUFFO1FBQ0FqQixVQUFVLEVBQUU7TUFDaEI7SUFBRSxFQUFHO0VBQUEsQ0FBQztFQUVkLElBQU1rQixTQUFTLEdBQUcsU0FBWkEsU0FBUztJQUFBLG9CQUNYLDREQUFDLCtEQUFRO01BQ0wsT0FBTyxFQUFDLFNBQVM7TUFDakIsS0FBSyxFQUFDLEtBQUs7TUFDWCxNQUFNLEVBQUMsSUFBSTtNQUNYLEVBQUUsRUFBRTtRQUNBbEIsVUFBVSxFQUFFLEtBQUs7UUFDakJDLFNBQVMsRUFBRTtNQUNmO0lBQUUsRUFBRztFQUFBLENBQUM7RUFFZCxJQUFNa0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFlO0lBQUEsb0JBQ2pCLDREQUFDLCtEQUFRO01BQ0wsT0FBTyxFQUFDLFNBQVM7TUFDakIsS0FBSyxFQUFDLEtBQUs7TUFDWCxNQUFNLEVBQUMsSUFBSTtNQUNYLEVBQUUsRUFBRTtRQUNBbkIsVUFBVSxFQUFFLEtBQUs7UUFDakJDLFNBQVMsRUFBRTtNQUNmO0lBQUUsRUFBRztFQUFBLENBQUM7RUFFZCxJQUFNOUIsTUFBTSxHQUFHLFNBQVRBLE1BQU07SUFBQSxvQkFDUiw0REFBQywrREFBUTtNQUNMLFNBQVMsRUFBQyxNQUFNO01BQ2hCLE9BQU8sRUFBQyxTQUFTO01BQ2pCLEtBQUssRUFBQyxLQUFLO01BQ1gsTUFBTSxFQUFDLElBQUk7TUFDWCxFQUFFLEVBQUU7UUFDQTZCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCQyxTQUFTLEVBQUU7TUFDZjtJQUFFLEVBQUc7RUFBQSxDQUFDO0VBRWQsZ0JBQThCTCxnREFBUSxDQUFDLElBQUksQ0FBQztJQUFBO0lBQXJDZSxPQUFPO0lBQUVDLFVBQVU7RUFFMUJuQixpREFBUyxDQUFDLFlBQU07SUFDWm9CLFVBQVUsQ0FBQyxZQUFNO01BQ2JELFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQyxFQUFFVCxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQzdCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDSSw0SEFDS1EsT0FBTyxnQkFBSSx5SUFFUjtJQUFLLEtBQUssRUFBRTtNQUFFN0YsT0FBTyxFQUFFLE1BQU07TUFBRU8sY0FBYyxFQUFFLFFBQVE7TUFBRUMsVUFBVSxFQUFFLFFBQVE7TUFBRThGLFlBQVksRUFBRTtJQUFTO0VBQUUsZ0JBRXBHO0lBQU0sS0FBSyxFQUFFO01BQUV0RyxPQUFPLEVBQUUsTUFBTTtNQUFFdUcsYUFBYSxFQUFFLFFBQVE7TUFBRWhHLGNBQWMsRUFBRTtJQUFTO0VBQUUsZ0JBQUMsNERBQUMsU0FBUyxPQUFHLENBQU8sZUFFekc7SUFBTSxLQUFLLEVBQUU7TUFBRVAsT0FBTyxFQUFFLE1BQU07TUFBRXVHLGFBQWEsRUFBRSxRQUFRO01BQUVoRyxjQUFjLEVBQUU7SUFBUztFQUFFLGdCQUNoRiw0REFBQyxTQUFTLE9BQUcsRUFDWixtQkFBSXlGLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFFLEVBQUVoRixHQUFHLENBQUMsVUFBQ1csSUFBSTtJQUFBLG9CQUFNLDREQUFDLGVBQWU7TUFBQyxHQUFHLEVBQUVBO0lBQUssRUFBRztFQUFBLENBQUMsQ0FBQyxlQUNyRSw0REFBQyxNQUFNLE9BQUcsQ0FDUCxDQUNMLENBRVAsZ0JBQUssNEhBQUdvRCxLQUFLLENBQUNrQixRQUFRLENBQUMsQ0FDdEIsQ0FDTDtBQUVYOzs7Ozs7Ozs7Ozs7Ozs7QUNuR08sSUFBTXBFLEtBQUssR0FBRyxDQUNqQjtFQUNJd0MsRUFBRSxFQUFFLENBQUM7RUFDTGxCLElBQUksRUFBRSx1QkFBdUI7RUFDN0JGLEdBQUcsRUFBRSxhQUFhO0VBQ2xCaEIsUUFBUSxFQUFFLFFBQVE7RUFDbEJtQyxXQUFXLEVBQUUscUJBQXFCO0VBQ2xDRSxXQUFXLEVBQUUsaVpBQWlaO0VBQzlaQyxnQkFBZ0IsRUFBRSxpcENBQWlwQztFQUNucUN2QixHQUFHLEVBQUUsb0NBQW9DO0VBQ3pDRCxJQUFJLEVBQUUsd0NBQXdDO0VBQzlDYixTQUFTLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDSW1DLEVBQUUsRUFBRSxDQUFDO0VBQ0xsQixJQUFJLEVBQUUsb0JBQW9CO0VBQzFCRixHQUFHLEVBQUUsU0FBUztFQUNkaEIsUUFBUSxFQUFFLFFBQVE7RUFDbEJtQyxXQUFXLEVBQUUscUJBQXFCO0VBQ2xDRSxXQUFXLEVBQUUsOGdDQUE4Z0M7RUFDM2hDQyxnQkFBZ0IsRUFBRSxvVkFBb1Y7RUFDdFd2QixHQUFHLEVBQUUsZ0NBQWdDO0VBQ3JDRCxJQUFJLEVBQUUscUNBQXFDO0VBQzNDYixTQUFTLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDSW1DLEVBQUUsRUFBRSxDQUFDO0VBQ0xsQixJQUFJLEVBQUUsWUFBWTtFQUNsQkYsR0FBRyxFQUFFLEtBQUs7RUFDVmhCLFFBQVEsRUFBRSxRQUFRO0VBQ2xCbUMsV0FBVyxFQUFFLHFCQUFxQjtFQUNsQ0UsV0FBVyxFQUFFLHlwQkFBeXBCO0VBQ3RxQkMsZ0JBQWdCLEVBQUUsK0tBQStLO0VBQ2pNdkIsR0FBRyxFQUFFLDRCQUE0QjtFQUNqQ0QsSUFBSSxFQUFFLDZCQUE2QjtFQUNuQ2IsU0FBUyxFQUFFO0FBQ2YsQ0FBQyxFQUNEO0VBQ0ltQyxFQUFFLEVBQUUsQ0FBQztFQUNMbEIsSUFBSSxFQUFFLGNBQWM7RUFDcEJGLEdBQUcsRUFBRSxnQkFBZ0I7RUFDckJoQixRQUFRLEVBQUUsY0FBYztFQUN4Qm1DLFdBQVcsRUFBRSxxQkFBcUI7RUFDbENFLFdBQVcsRUFBRSwwM0JBQTAzQjtFQUN2NEJDLGdCQUFnQixFQUFFLCtqQkFBK2pCO0VBQ2psQnZCLEdBQUcsRUFBRSx1Q0FBdUM7RUFDNUNELElBQUksRUFBRSxxQ0FBcUM7RUFDM0NiLFNBQVMsRUFBRTtBQUNmLENBQUMsRUFDRDtFQUNJbUMsRUFBRSxFQUFFLENBQUM7RUFDTGxCLElBQUksRUFBRSxXQUFXO0VBQ2pCRixHQUFHLEVBQUUsb0JBQW9CO0VBQ3pCaEIsUUFBUSxFQUFFLGNBQWM7RUFDeEJtQyxXQUFXLEVBQUUscUJBQXFCO0VBQ2xDRSxXQUFXLEVBQUUsOGlCQUE4aUI7RUFDM2pCQyxnQkFBZ0IsRUFBRSx5ZkFBeWY7RUFDM2dCdkIsR0FBRyxFQUFFLDJDQUEyQztFQUNoREQsSUFBSSxFQUFFLGtDQUFrQztFQUN4Q2IsU0FBUyxFQUFFO0FBQ2YsQ0FBQyxFQUNEO0VBQ0ltQyxFQUFFLEVBQUUsQ0FBQztFQUNMbEIsSUFBSSxFQUFFLHlCQUF5QjtFQUMvQkYsR0FBRyxFQUFFLGNBQWM7RUFDbkJoQixRQUFRLEVBQUUsU0FBUztFQUNuQm1DLFdBQVcsRUFBRSxxQkFBcUI7RUFDbENFLFdBQVcsRUFBRSwwZEFBMGQ7RUFDdmVDLGdCQUFnQixFQUFFLGdNQUFnTTtFQUNsTnZCLEdBQUcsRUFBRSwrQkFBK0I7RUFDcENELElBQUksRUFBRSwyQ0FBMkM7RUFDakRiLFNBQVMsRUFBRTtBQUNmLENBQUMsRUFDRDtFQUNJbUMsRUFBRSxFQUFFLENBQUM7RUFDTGxCLElBQUksRUFBRSxnQ0FBZ0M7RUFDdENGLEdBQUcsRUFBRSxzQkFBc0I7RUFDM0JoQixRQUFRLEVBQUUsU0FBUztFQUNuQm1DLFdBQVcsRUFBRSxxQkFBcUI7RUFDbENFLFdBQVcsRUFBRSxrUkFBa1I7RUFDL1JDLGdCQUFnQixFQUFFLDJ5REFBMnlEO0VBQzd6RHZCLEdBQUcsRUFBRSxtQ0FBbUM7RUFDeENELElBQUksRUFBRSxrREFBa0Q7RUFDeERiLFNBQVMsRUFBRTtBQUNmLENBQUMsRUFDRDtFQUNJbUMsRUFBRSxFQUFFLENBQUM7RUFDTGxCLElBQUksRUFBRSwwQkFBMEI7RUFDaENGLEdBQUcsRUFBRSxxQkFBcUI7RUFDMUJoQixRQUFRLEVBQUUsU0FBUztFQUNuQm1DLFdBQVcsRUFBRSxxQkFBcUI7RUFDbENFLFdBQVcsRUFBRSxtU0FBbVM7RUFDaFRDLGdCQUFnQixFQUFFLHNaQUFzWjtFQUN4YXZCLEdBQUcsRUFBRSw0Q0FBNEM7RUFDakRELElBQUksRUFBRSw0Q0FBNEM7RUFDbERiLFNBQVMsRUFBRTtBQUNmLENBQUMsRUFDRDtFQUNJbUMsRUFBRSxFQUFFLENBQUM7RUFDTGxCLElBQUksRUFBRSx1QkFBdUI7RUFDN0JGLEdBQUcsRUFBRSxrQkFBa0I7RUFDdkJoQixRQUFRLEVBQUUsU0FBUztFQUNuQm1DLFdBQVcsRUFBRSxxQkFBcUI7RUFDbENFLFdBQVcsRUFBRSw4UEFBOFA7RUFDM1FDLGdCQUFnQixFQUFFLCt1QkFBK3VCO0VBQ2p3QnZCLEdBQUcsRUFBRSx5Q0FBeUM7RUFDOUNELElBQUksRUFBRSx5Q0FBeUM7RUFDL0NiLFNBQVMsRUFBRTtBQUNmLENBQUMsRUFDRDtFQUNJbUMsRUFBRSxFQUFFLEVBQUU7RUFDTmxCLElBQUksRUFBRSxvQkFBb0I7RUFDMUJGLEdBQUcsRUFBRSxZQUFZO0VBQ2pCaEIsUUFBUSxFQUFFLFNBQVM7RUFDbkJtQyxXQUFXLEVBQUUscUJBQXFCO0VBQ2xDRSxXQUFXLEVBQUUsb1NBQW9TO0VBQ2pUQyxnQkFBZ0IsRUFBRSw2ZUFBNmU7RUFDL2Z2QixHQUFHLEVBQUUsbUNBQW1DO0VBQ3hDRCxJQUFJLEVBQUUsc0NBQXNDO0VBQzVDYixTQUFTLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDSW1DLEVBQUUsRUFBRSxFQUFFO0VBQ05sQixJQUFJLEVBQUUsbUJBQW1CO0VBQ3pCRixHQUFHLEVBQUUsVUFBVTtFQUNmaEIsUUFBUSxFQUFFLFNBQVM7RUFDbkJtQyxXQUFXLEVBQUUscUJBQXFCO0VBQ2xDRSxXQUFXLEVBQUUsNkxBQTZMO0VBQzFNQyxnQkFBZ0IsRUFBRSw4TUFBOE07RUFDaE92QixHQUFHLEVBQUUsaUNBQWlDO0VBQ3RDRCxJQUFJLEVBQUUscUNBQXFDO0VBQzNDYixTQUFTLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDSW1DLEVBQUUsRUFBRSxFQUFFO0VBQ05sQixJQUFJLEVBQUUscUJBQXFCO0VBQzNCRixHQUFHLEVBQUUsb0JBQW9CO0VBQ3pCaEIsUUFBUSxFQUFFLFNBQVM7RUFDbkJtQyxXQUFXLEVBQUUscUJBQXFCO0VBQ2xDRSxXQUFXLEVBQUUsNFNBQTRTO0VBQ3pUQyxnQkFBZ0IsRUFBRSx3c0JBQXdzQjtFQUMxdEJ2QixHQUFHLEVBQUUsMkNBQTJDO0VBQ2hERCxJQUFJLEVBQUUsdUNBQXVDO0VBQzdDYixTQUFTLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDSW1DLEVBQUUsRUFBRSxFQUFFO0VBQ05sQixJQUFJLEVBQUUsOEJBQThCO0VBQ3BDRixHQUFHLEVBQUUsaUJBQWlCO0VBQ3RCaEIsUUFBUSxFQUFFLFNBQVM7RUFDbkJtQyxXQUFXLEVBQUUscUJBQXFCO0VBQ2xDRSxXQUFXLEVBQUUsa2VBQWtlO0VBQy9lQyxnQkFBZ0IsRUFBRSw0WkFBNFo7RUFDOWF2QixHQUFHLEVBQUUsd0NBQXdDO0VBQzdDRCxJQUFJLEVBQUUsZ0RBQWdEO0VBQ3REYixTQUFTLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDSW1DLEVBQUUsRUFBRSxFQUFFO0VBQ05sQixJQUFJLEVBQUUsbUJBQW1CO0VBQ3pCRixHQUFHLEVBQUUsT0FBTztFQUNaaEIsUUFBUSxFQUFFLFNBQVM7RUFDbkJtQyxXQUFXLEVBQUUscUJBQXFCO0VBQ2xDRSxXQUFXLEVBQUUseWNBQXljO0VBQ3RkQyxnQkFBZ0IsRUFBRSxnTkFBZ047RUFDbE92QixHQUFHLEVBQUUsOEJBQThCO0VBQ25DRCxJQUFJLEVBQUUscUNBQXFDO0VBQzNDYixTQUFTLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDSW1DLEVBQUUsRUFBRSxFQUFFO0VBQ05sQixJQUFJLEVBQUUsbUNBQW1DO0VBQ3pDRixHQUFHLEVBQUUsb0JBQW9CO0VBQ3pCaEIsUUFBUSxFQUFFLFNBQVM7RUFDbkJtQyxXQUFXLEVBQUUscUJBQXFCO0VBQ2xDRSxXQUFXLEVBQUUsMlNBQTJTO0VBQ3hUQyxnQkFBZ0IsRUFBRSxncUJBQWdxQjtFQUNsckJ2QixHQUFHLEVBQUUsMkNBQTJDO0VBQ2hERCxJQUFJLEVBQUUscURBQXFEO0VBQzNEYixTQUFTLEVBQUU7QUFDZixDQUFDLENBQ0o7Ozs7Ozs7Ozs7Ozs7OztBQ3JMRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDOEI7O0FBRTlCO0FBQ3lCO0FBRTZDO0FBQ3RFcUUsb0ZBQWlDLENBQUNDLCtFQUE0RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZG5DOztBQUU1RDtBQUNPLElBQU1HLEdBQUcsR0FBR0QsMEVBQWdCLENBQUNGLHlJQUluQyxDQUFDOztBQUVGO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWMEI7QUFDWTtBQUNNO0FBQ0c7QUFDYztBQUNUO0FBQ0Y7QUFFbEQsU0FBU3BCLFVBQVUsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFBRTtFQUM5QixPQUFPQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsSUFBSUgsR0FBRyxHQUFHRCxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUdBLEdBQUcsQ0FBQztBQUMxRDtBQUVlLFNBQVM0QixPQUFPLEdBQUc7RUFFaEMsZ0JBQThCcEMsZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQTtJQUFyQ2UsT0FBTztJQUFFQyxVQUFVO0VBRTFCbkIsaURBQVMsQ0FBQyxZQUFNO0lBQ2RvQixVQUFVLENBQUMsWUFBTTtNQUNmRCxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUMsRUFBRVQsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztFQUMzQixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sU0FBUzhCLGFBQWEsR0FBRztJQUV2QixJQUFJQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUMxQyxJQUFJRixJQUFJLEVBQUU7TUFDUkEsSUFBSSxDQUFDbEQsS0FBSyxDQUFDaEUsT0FBTyxHQUFHLENBQUM7SUFDeEI7SUFFQWtILElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQ3pDLElBQUlGLElBQUksRUFBRTtNQUNSQSxJQUFJLENBQUNsRCxLQUFLLENBQUNoRSxPQUFPLEdBQUcsQ0FBQztJQUN4QjtFQUNGO0VBRUEsb0JBQ0UseUlBQ0UsNERBQUMsNERBQVcsT0FBRyxlQUNmO0lBQU0sRUFBRSxFQUFDLE1BQU07SUFBQyxTQUFTLEVBQUM7RUFBTSxnQkFDOUI7SUFBSyxTQUFTLEVBQUM7RUFBTSxnQkFDbkI7SUFBUSxTQUFTLEVBQUM7RUFBYSxnQkFDN0I7SUFBSSxTQUFTLEVBQUM7RUFBWSxnQkFDeEIscUZBQ0UsNERBQUMsMkRBQUk7SUFBQyxJQUFJLEVBQUM7RUFBVSxHQUFDLFNBRXRCLENBQU8sQ0FDSixlQUNMLHdFQUFJLFVBRUosQ0FBSyxDQUNGLENBQ0UsZUFDVCw0REFBQywyREFBTSxPQUFHLGVBQ1Y7SUFBUyxTQUFTLEVBQUM7RUFBVyxnQkFDNUIsNERBQUMsc0VBQVk7SUFBQyxJQUFJLEVBQUM7RUFBRSxFQUFHLGVBQ3hCLDREQUFDLDhEQUFNLE9BQUcsQ0FDRixDQUNOLENBQ0QsRUFFTjJGLE9BQU8sZ0JBQUksMkhBQUssZ0JBQ2QsNEhBQUdzQixhQUFhLEVBQUUsQ0FBSyxDQUN6QjtBQUVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEUwQjtBQUNnQjtBQUNNO0FBRWpDLFNBQVNLLEtBQUssR0FBRztFQUM5QixvQkFDRSx1SUFDRTtJQUFNLFNBQVMsRUFBQztFQUFNLGdCQUNwQjtJQUFLLFNBQVMsRUFBQztFQUFXLGdCQUN4QjtJQUFLLFNBQVMsRUFBQztFQUFVLGdCQUN2QjtJQUFLLFNBQVMsRUFBQztFQUFpQixnQkFDOUI7SUFBSyxHQUFHLEVBQUMsOEJBQThCO0lBQUMsR0FBRyxFQUFDLFlBQVk7SUFBQyxLQUFLLEVBQUMsS0FBSztJQUFDLE1BQU0sRUFBQztFQUFLLEVBQUcsZUFDcEYsdUVBQUksZ0ZBQWtFLENBQUssQ0FDdkUsQ0FDRixDQUNGLGVBQ047SUFBSyxTQUFTLEVBQUM7RUFBWSxnQkFDekI7SUFBSyxTQUFTLEVBQUM7RUFBVyxnQkFDeEIsc0ZBQ0U7SUFBSyxTQUFTLEVBQUM7RUFBaUIsZ0JBQzlCLHVFQUFJLFdBQVMsQ0FBSyxDQUNkLGVBQ04sMkRBQUMsK0RBQVM7SUFDUixNQUFNLEVBQUMsT0FBTztJQUNkLEVBQUUsRUFBQyxPQUFPO0lBQ1YsS0FBSyxFQUFDLFNBQVM7SUFDZixLQUFLLEVBQUMsYUFBYTtJQUNuQixPQUFPLEVBQUM7RUFBVSxFQUNsQixlQUNGLDJEQUFDLCtEQUFTO0lBQ1IsTUFBTSxFQUFDLE9BQU87SUFDZCxFQUFFLEVBQUMsVUFBVTtJQUNiLEtBQUssRUFBQyxTQUFTO0lBQ2YsS0FBSyxFQUFDLGNBQWM7SUFDcEIsT0FBTyxFQUFDO0VBQVUsRUFDbEIsZUFDRiwyREFBQyw0REFBTTtJQUNMLElBQUksRUFBQyxPQUFPO0lBQ1osT0FBTyxFQUFDO0VBQVUsR0FBQyxjQUNyQixDQUFTLGVBQ1Q7SUFBSyxTQUFTLEVBQUM7RUFBbUIsZ0JBQ2hDLHNFQUFHLCtCQUErQixDQUFJLGVBQ3RDO0lBQ0UsSUFBSSxFQUFDLG9DQUFvQztJQUN6QyxNQUFNLEVBQUMsUUFBUTtJQUNmLEdBQUcsRUFBQztFQUFxQixHQUMxQixnQkFBYyxDQUFJLENBQ2YsQ0FDRCxDQUNILENBQ0YsQ0FDRCxDQUNOO0FBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REZ0Q7QUFDQTtBQUNHO0FBQ2M7QUFDdkM7QUFFWCxTQUFTRSxZQUFZLEdBQUc7RUFFckMsb0JBQ0UsdUlBQ0U7SUFBTSxTQUFTLEVBQUM7RUFBTSxnQkFDcEI7SUFBSyxTQUFTLEVBQUM7RUFBTSxnQkFFbkIsMkRBQUMsMERBQU07SUFBQyxLQUFLLEVBQUMsU0FBUztJQUFDLElBQUksRUFBQztFQUFFLEVBQUcsZUFDbEMsMkRBQUMsMERBQU0sT0FBRyxlQUVWO0lBQVMsU0FBUyxFQUFDO0VBQVcsZ0JBQzFCLDJEQUFDLHFFQUFZO0lBQUMsSUFBSSxFQUFDO0VBQVMsRUFBRSxlQUM5QiwyREFBQyw2REFBTSxPQUFHLENBQ0osQ0FDTixDQUNELENBQ047QUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJnRDtBQUNBO0FBQ0c7QUFDc0I7QUFDL0M7QUFFWCxTQUFTM0UsSUFBSSxDQUFDNEUsS0FBSyxFQUFFO0VBRWxDLG9CQUNFLHVJQUNFO0lBQU0sU0FBUyxFQUFDO0VBQU0sZ0JBQ3BCO0lBQUssU0FBUyxFQUFDO0VBQU0sZ0JBRW5CLDJEQUFDLDBEQUFNO0lBQUMsS0FBSyxFQUFFQSxLQUFLLENBQUNDLEdBQUk7SUFBQyxJQUFJLEVBQUVELEtBQUssQ0FBQy9GO0VBQUssRUFBRyxlQUM5QywyREFBQywwREFBTSxPQUFHLGVBRVY7SUFBUyxTQUFTLEVBQUM7RUFBVSxnQkFDekIsMkRBQUMsNkVBQVk7SUFBQyxRQUFRLEVBQUUrRixLQUFLLENBQUMvRjtFQUFLLEVBQUUsZUFDckMsMkRBQUMsNkRBQU0sT0FBRyxDQUNKLENBQ04sQ0FDRCxDQUNOO0FBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCZ0Q7QUFDQTtBQUNHO0FBQ2M7QUFDdkM7QUFFWCxTQUFTaUcsTUFBTSxHQUFHO0VBRS9CLG9CQUNFLHVJQUNFO0lBQU0sU0FBUyxFQUFDO0VBQU0sZ0JBQ3BCO0lBQUssU0FBUyxFQUFDO0VBQU0sZ0JBRW5CLDJEQUFDLDBEQUFNO0lBQUMsS0FBSyxFQUFDLFdBQVE7SUFBRSxJQUFJLEVBQUM7RUFBRSxFQUFHLGVBQ2xDLDJEQUFDLDBEQUFNLE9BQUcsZUFFVjtJQUFTLFNBQVMsRUFBQztFQUFXLGdCQUMxQiwyREFBQyxxRUFBWTtJQUFDLElBQUksRUFBQztFQUFRLEVBQUUsZUFDN0IsMkRBQUMsNkRBQU0sT0FBRyxDQUNKLENBQ04sQ0FDRCxDQUNOO0FBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCZ0Q7QUFDQTtBQUNHO0FBQ2M7QUFDdkM7QUFFWCxTQUFTSCxZQUFZLEdBQUc7RUFFckMsb0JBQ0UsdUlBQ0U7SUFBTSxTQUFTLEVBQUM7RUFBTSxnQkFDcEI7SUFBSyxTQUFTLEVBQUM7RUFBTSxnQkFFbkIsMkRBQUMsMERBQU07SUFBQyxLQUFLLEVBQUMsWUFBUztJQUFDLElBQUksRUFBQztFQUFFLEVBQUcsZUFDbEMsMkRBQUMsMERBQU0sT0FBRyxlQUVWO0lBQVMsU0FBUyxFQUFDO0VBQVcsZ0JBQzFCLDJEQUFDLHFFQUFZO0lBQUMsSUFBSSxFQUFDO0VBQVMsRUFBRSxlQUM5QiwyREFBQyw2REFBTSxPQUFHLENBQ0osQ0FDTixDQUNELENBQ047QUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJnRDtBQUNBO0FBQ0c7QUFDYztBQUN2QztBQUVYLFNBQVNBLFlBQVksR0FBRztFQUVyQyxvQkFDRSx1SUFDRTtJQUFNLFNBQVMsRUFBQztFQUFNLGdCQUNwQjtJQUFLLFNBQVMsRUFBQztFQUFNLGdCQUVuQiwyREFBQywwREFBTTtJQUFDLEtBQUssRUFBQyxvQkFBYztJQUFFLElBQUksRUFBQztFQUFFLEVBQUcsZUFDeEMsMkRBQUMsMERBQU0sT0FBRyxlQUVWO0lBQVMsU0FBUyxFQUFDO0VBQVcsZ0JBQzFCLDJEQUFDLHFFQUFZO0lBQUMsSUFBSSxFQUFDO0VBQWMsRUFBRSxlQUNuQywyREFBQyw2REFBTSxPQUFHLENBQ0osQ0FDTixDQUNELENBQ047QUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBLFNBQVNsQixpQ0FBaUMsQ0FBQ0UsT0FBTyxFQUFFO0VBQ2hELElBQU1vQixnQkFBZ0IsR0FBRyxDQUFDLENBQUM7RUFDM0IsSUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUF3QixDQUFJQyxDQUFDLEVBQUs7SUFDcENBLENBQUMsQ0FBQy9CLElBQUksRUFBRSxDQUFDZ0MsT0FBTyxDQUFDLFVBQUNDLEdBQUc7TUFBQSxPQUFNSixnQkFBZ0IsQ0FBQ0ksR0FBRyxDQUFDLEdBQUdGLENBQUMsQ0FBQ0UsR0FBRyxDQUFDLFdBQVE7SUFBQSxDQUFDLENBQUM7RUFDdkUsQ0FBQztFQUNESCx3QkFBd0IsQ0FBQ3JCLE9BQU8sQ0FBQztFQUNqQ3lCLE1BQU0sQ0FBQ0MscUJBQXFCLEdBQUcsVUFBQ2hGLElBQUksRUFBSztJQUNyQyxJQUFNaUYsU0FBUyxHQUFHUCxnQkFBZ0IsYUFBTTFFLElBQUksVUFBTyxJQUFJMEUsZ0JBQWdCLGFBQU0xRSxJQUFJLFVBQU87SUFDeEYsSUFBSSxPQUFPaUYsU0FBUyxLQUFLLFdBQVcsRUFBRTtNQUNsQyxNQUFNLElBQUlDLEtBQUssQ0FBQyxvQkFBb0IsR0FBR2xGLElBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUNyRTtJQUNBLE9BQU9pRixTQUFTO0VBQ3BCLENBQUM7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjBCO0FBQ1M7QUFDYTtBQUVoRCxJQUFJRyxVQUFVO0FBRWQsSUFBSUMsQ0FBQyxHQUFHRix1Q0FBVTtBQUNsQixJQUFJRyxLQUFxQyxFQUFFLEVBRzFDLE1BQU07RUFDTCxJQUFJSSxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sa0RBQWtEO0VBQzVEUCxVQUFVLEdBQUcsb0JBQVNRLENBQUMsRUFBRUMsQ0FBQyxFQUFFO0lBQzFCSCxDQUFDLENBQUNJLHFCQUFxQixHQUFHLElBQUk7SUFDOUIsSUFBSTtNQUNGLE9BQU9ULENBQUMsQ0FBQ0QsVUFBVSxDQUFDUSxDQUFDLEVBQUVDLENBQUMsQ0FBQztJQUMzQixDQUFDLFNBQVM7TUFDUkgsQ0FBQyxDQUFDSSxxQkFBcUIsR0FBRyxLQUFLO0lBQ2pDO0VBQ0YsQ0FBQztBQUNIO0FBQUMsSUFFS0MsU0FBUztFQUFBO0VBQUE7RUFBQTtJQUFBO0lBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQSxPQUNYLG1CQUFVO01BQ04sSUFBTXhCLEtBQUssR0FBRyxJQUFJLENBQUN5QixVQUFVLEdBQUcsSUFBSSxDQUFDQSxVQUFVLEdBQUcsSUFBSTtNQUN0RCxJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFTLEVBQUU7UUFBRWhCLFNBQVMsRUFBRSxJQUFJLENBQUNpQixjQUFjO1FBQUUzQixLQUFLLEVBQUVBO01BQU0sQ0FBQyxDQUFDO01BQy9FLElBQUksQ0FBQyxJQUFJLENBQUMyQixjQUFjLEVBQUU7UUFDdEIsTUFBTSxJQUFJaEIsS0FBSyxDQUFDLHlCQUF5QixDQUFDO01BQzlDO01BQ0EsSUFBTUQsU0FBUyxHQUFHRixNQUFNLENBQUNDLHFCQUFxQixDQUFDLElBQUksQ0FBQ2tCLGNBQWMsQ0FBQztNQUNuRSxJQUFJLENBQUNDLG1CQUFtQixDQUFDM0osMkRBQW1CLENBQUN5SSxTQUFTLEVBQUVWLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztNQUNyRSxJQUFJLENBQUMwQixhQUFhLENBQUMsT0FBTyxFQUFFO1FBQ3hCSSxhQUFhLEVBQUUsSUFBSSxDQUFDSCxjQUFjO1FBQ2xDakIsU0FBUyxFQUFFQSxTQUFTO1FBQ3BCVixLQUFLLEVBQUVBO01BQ1gsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBO0lBQUEsT0FDRCxzQkFBYTtNQUNULElBQUksQ0FBQ2pJLE9BQU8sQ0FBQ2dLLElBQUksQ0FBQ0MsT0FBTyxFQUFFO01BQzNCLElBQUksQ0FBQ04sYUFBYSxDQUFDLFNBQVMsRUFBRTtRQUMxQmhCLFNBQVMsRUFBRSxJQUFJLENBQUNpQixjQUFjO1FBQzlCM0IsS0FBSyxFQUFFLElBQUksQ0FBQ3lCLFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVUsR0FBRztNQUMvQyxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUE7SUFBQSxPQUNELDZCQUFvQlEsWUFBWSxFQUFFO01BQzlCLElBQU1sSyxPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPO01BQzVCLElBQUksQ0FBQ0EsT0FBTyxDQUFDZ0ssSUFBSSxFQUFFO1FBQ2ZoSyxPQUFPLENBQUNnSyxJQUFJLEdBQUdsQixVQUFVLENBQUMsSUFBSSxDQUFDOUksT0FBTyxDQUFDO01BQzNDO01BQ0FBLE9BQU8sQ0FBQ2dLLElBQUksQ0FBQ0csTUFBTSxDQUFDRCxZQUFZLENBQUM7SUFDckM7RUFBQztJQUFBO0lBQUEsT0FDRCx1QkFBY3hHLElBQUksRUFBRTBHLE9BQU8sRUFBRTtNQUN6QixJQUFJLENBQUNDLFFBQVEsQ0FBQzNHLElBQUksRUFBRTtRQUFFNEcsTUFBTSxFQUFFRixPQUFPO1FBQUVHLE1BQU0sRUFBRTtNQUFRLENBQUMsQ0FBQztJQUM3RDtFQUFDO0VBQUE7QUFBQSxFQS9CbUJ4SywyREFBVTtBQWlDbEMwSixTQUFTLENBQUNlLE1BQU0sR0FBRztFQUNmN0IsU0FBUyxFQUFFOEIsTUFBTTtFQUNqQnhDLEtBQUssRUFBRXlDO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzFERCIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY29weXJpZ2h0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9oZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2l0ZW1TdGF0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbG9hZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbWF0ZXJpZWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL21hdGVyaWVsX2RldGFpbHMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL25hdmJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvc2tlbGV0b24vbWF0ZXJpZWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3NrZWxldG9uL21hdGVyaWVsX2RldGFpbHMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb25zdGFudHMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2FjY3VlaWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9sb2dpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21hdGVyaWVsL2Rlc2t0b3AuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYXRlcmllbC9tYXRlcmllbF9kZXRhaWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWF0ZXJpZWwvcmVzZWF1LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWF0ZXJpZWwvcmV1bmlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21hdGVyaWVsL3RlbGVwaG9uaXF1ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtcmVhY3QvYXNzZXRzL2Rpc3QvcmVnaXN0ZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2dsb2JhbC5jc3M/ZWM3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWNjdWVpbC5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9hY2N1ZWlsLmpzeFwiLFxuXHRcIi4vbG9naW4uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbG9naW4uanN4XCIsXG5cdFwiLi9tYXRlcmllbC9kZXNrdG9wLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21hdGVyaWVsL2Rlc2t0b3AuanN4XCIsXG5cdFwiLi9tYXRlcmllbC9tYXRlcmllbF9kZXRhaWxzLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21hdGVyaWVsL21hdGVyaWVsX2RldGFpbHMuanN4XCIsXG5cdFwiLi9tYXRlcmllbC9yZXNlYXUuanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWF0ZXJpZWwvcmVzZWF1LmpzeFwiLFxuXHRcIi4vbWF0ZXJpZWwvcmV1bmlvbi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYXRlcmllbC9yZXVuaW9uLmpzeFwiLFxuXHRcIi4vbWF0ZXJpZWwvdGVsZXBob25pcXVlLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21hdGVyaWVsL3RlbGVwaG9uaXF1ZS5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXJlYWN0LS1yZWFjdCc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1yZWFjdC9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzJyksXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb290ZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCI3MHB4XCIsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IFwiMC41XCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UgMHNcIixcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJzeXN0ZW0tdWlcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwieC1zbWFsbFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmY3NVwiXHJcbiAgICAgICAgfX0+IERpZ2l0TGlnaHQgwqkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0uIFRvdXMgZHJvaXRzIHLDqXNlcnbDqXMuPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gY2FwaXRhbGl6ZVdvcmRzKHN0cikge1xyXG4gICAgcmV0dXJuIHN0clxyXG4gICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAuc3BsaXQoJyAnKVxyXG4gICAgICAubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcclxuICAgICAgLmpvaW4oJyAnKS5ub3JtYWxpemUoXCJORkRcIikucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIikucmVwbGFjZUFsbCgnLScsIFwiIFwiKS50b0xvd2VyQ2FzZSgpO1xyXG4gIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXIoeyB0aXRsZSwgaXRlbSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicGFuZWxIZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FjY3VlaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY3VlaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FjY3VlaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGVyaWVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5sZW5ndGggPD0gMCA/XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9tYXRlcmllbC8ke2NhcGl0YWxpemVXb3Jkcyh0aXRsZSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGVuZ3RoID4gMCA/XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2FwaXRhbGl6ZVdvcmRzKGl0ZW0pLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgY2FwaXRhbGl6ZVdvcmRzKGl0ZW0uc2xpY2UoMSkpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8Lz4pXHJcbn0iLCJpbXBvcnQgeyBJVEVNUyB9IGZyb20gJy4uL2NvbnN0YW50cy9kYXRhJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdG90YWwgPSBmdW5jdGlvbiAoQ2F0ZWdvcnkpIHtcclxuICBpZiAoQ2F0ZWdvcnkgPT0gbnVsbCB8fCBDYXRlZ29yeSA9PSAnJykge1xyXG4gICAgeyByZXR1cm4gSVRFTVMuZmlsdGVyKGl0ZW0gPT4gaXRlbSkubGVuZ3RoIH1cclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICB7IHJldHVybiBJVEVNUy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNhdGVnb3J5ID09IENhdGVnb3J5KS5sZW5ndGggfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYXZhaWxhYmxlID0gZnVuY3Rpb24gKENhdGVnb3J5KSB7XHJcbiAgaWYgKENhdGVnb3J5ID09IG51bGwgfHwgQ2F0ZWdvcnkgPT0gJycpIHtcclxuICAgIHtcclxuICAgICAgcmV0dXJuIElURU1TLmZpbHRlcihpdGVtID0+IGl0ZW0uYXZhaWxhYmxlKVxyXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgICAoaXRlbSkpLmxlbmd0aFxyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHtcclxuICAgICAgcmV0dXJuIElURU1TLmZpbHRlcihpdGVtID0+IGl0ZW0uY2F0ZWdvcnkgPT0gQ2F0ZWdvcnkpXHJcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uYXZhaWxhYmxlKS5sZW5ndGhcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHVuYXZhaWxhYmxlID0gZnVuY3Rpb24gKENhdGVnb3J5KSB7XHJcbiAgaWYgKENhdGVnb3J5ID09IG51bGwgfHwgQ2F0ZWdvcnkgPT0gJycpIHtcclxuICAgIHtcclxuICAgICAgcmV0dXJuIElURU1TLmZpbHRlcihpdGVtID0+IGl0ZW0udW5hdmFpbGFibGUpXHJcbiAgICAgICAgLm1hcCgoaXRlbSkgPT5cclxuICAgICAgICAgIChpdGVtKSkubGVuZ3RoXHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAge1xyXG4gICAgICByZXR1cm4gSVRFTVMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jYXRlZ29yeSA9PSBDYXRlZ29yeSlcclxuICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS51bmF2YWlsYWJsZSkubGVuZ3RoXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpdGVtU3RhdHMoeyBDYXRlZ29yeSB9KSB7XHJcbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInN0YXRzSXRlbXNcIj5cclxuICAgIDxzcGFuPlxyXG4gICAgICBUb3RhbDoge3RvdGFsKENhdGVnb3J5KX1cclxuICAgIDwvc3Bhbj5cclxuICAgIDxzcGFuPlxyXG4gICAgICBEaXNwb25pYmxlOiB7YXZhaWxhYmxlKENhdGVnb3J5KX1cclxuICAgIDwvc3Bhbj5cclxuICAgIDxzcGFuPlxyXG4gICAgICBJbmRpc3BvbmlibGU6IHt1bmF2YWlsYWJsZShDYXRlZ29yeSl9XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9kaXY+KVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmluZ3MgfSBmcm9tICdyZWFjdC1sb2FkZXItc3Bpbm5lcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkaW5nQ29tcCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImxvYWRpbmdcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgdG9wOiAnMCcsXHJcbiAgICAgICAgICAgIGJvdHRvbTogJzAnLFxyXG4gICAgICAgICAgICBsZWZ0OiAnMCcsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAnMCcsXHJcbiAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMHB4JyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxyXG4gICAgICAgIH19PjxSaW5nc1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwidmFyKC0tZGVmYXV0LWhlYWRlci1jb2xvcilcIlxyXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5Q29sb3I9J2JsYWNrJ1xyXG4gICAgICAgICAgICAgICAgcmFkaXVzPScxMi41J1xyXG4gICAgICAgICAgICAgICAgYXJpYUxhYmVsPVwibXV0YXRpbmctZG90cy1sb2FkaW5nXCJcclxuICAgICAgICAgICAgICAgIHdyYXBwZXJTdHlsZT17e319XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3M9XCJcIlxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgLz48L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBMaW5rIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluaydcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW0oeyBpdGVtIH0pIHtcclxuICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwicGFuZWxJdGVtXCI+XHJcbiAgICA8ZGl2IGlkPVwiZW50cnktcGljXCIgY2xhc3NOYW1lPVwicGFuZWxJbWFnZVwiPlxyXG4gICAgICA8TGluayBocmVmPXtpdGVtLmhyZWZ9PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17aXRlbS5pbWd9XHJcbiAgICAgICAgICBhbHQ9e2l0ZW0uYWx0fVxyXG4gICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezUwMH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbUluZm9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtSW5mb1RpdGxlXCI+XHJcbiAgICAgICAgPHNwYW4+Tm9tIGR1IHByb2R1aXQgOiA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1JbmZvVGl0bGVcIj5cclxuICAgICAgICA8TGluayBocmVmPXtgL21hdGVyaWVsLyR7aXRlbS5jYXRlZ29yeS5ub3JtYWxpemUoXCJORkRcIikucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIil9YH0+XHJcbiAgICAgICAgICA8c3Bhbj5DYXTDqWdvcmllIDoge2l0ZW0uY2F0ZWdvcnl9PC9zcGFuPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbUluZm9UaXRsZVwiPlxyXG4gICAgICAgIHtpdGVtLmF2YWlsYWJsZSA/XHJcbiAgICAgICAgICA8c3Bhbj5TdGF0dXQgOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJkYXJrZ3JlZW5cIiB9fT5EaXNwb25pYmxlPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDpcclxuICAgICAgICAgIDxzcGFuPlN0YXR1dCA6IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PlLDqXNlcnbDqTwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PilcclxufSIsImltcG9ydCBMaW5rIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluayc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbSh7IGl0ZW0gfSkge1xyXG5cclxuICBmdW5jdGlvbiBjYXBpdGFsaXplV29yZHMoc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyXHJcbiAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIC5zcGxpdCgnICcpXHJcbiAgICAgIC5tYXAoKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKVxyXG4gICAgICAuam9pbignICcpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHpvb20oZSkge1xyXG4gICAgXHJcbiAgICB2YXIgem9vbWVyID0gZS5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgIGxldCBvZmZzZXRYO1xyXG4gICAgbGV0IG9mZnNldFk7XHJcblxyXG4gICAgZS5vZmZzZXRYID8gb2Zmc2V0WCA9IGUub2Zmc2V0WCA6IG9mZnNldFggPSBlLnBhZ2VYO1xyXG4gICAgZS5vZmZzZXRZID8gb2Zmc2V0WSA9IGUub2Zmc2V0WSA6IG9mZnNldFkgPSBlLnBhZ2VZO1xyXG5cclxuICAgIGxldCB4ID0gb2Zmc2V0WC96b29tZXIub2Zmc2V0V2lkdGgqNTBcclxuICAgIGxldCB5ID0gb2Zmc2V0WS96b29tZXIub2Zmc2V0SGVpZ2h0KjgwXHJcblxyXG4gICAgem9vbWVyLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IHggKyAnJSAnICsgeSArICclJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJwYW5lbEluZm9JdGVtXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsSW1hZ2VcIj5cclxuICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJ6b29tXCIgb25Nb3VzZU1vdmU9e3pvb219IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aXRlbS5pbWd9KWAgfX0+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtpdGVtLmltZ31cclxuICAgICAgICAgIGFsdD17aXRlbS5hbHR9XHJcbiAgICAgICAgICBzdHlsZT17eyBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG4gICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgIGhlaWdodD17NTAwfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZmlndXJlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1JbmZvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbUluZm9UaXRsZVwiPlxyXG4gICAgICAgIDxoMT57aXRlbS5uYW1lfTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1JbmZvQ2F0XCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9tYXRlcmllbC8ke2l0ZW0uY2F0ZWdvcnkubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpfWB9PlxyXG4gICAgICAgICAgQ2F0w6lnb3JpZSA6IHtjYXBpdGFsaXplV29yZHMoaXRlbS5jYXRlZ29yeSl9XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaXRlbUluZm9BdmFpbGFibGVcIn0+XHJcbiAgICAgICAge2l0ZW0uYXZhaWxhYmxlID9cclxuICAgICAgICAgIDxzcGFuPlN0YXR1dCA6IDxwIHN0eWxlPXt7IGNvbG9yOiBcImRhcmtncmVlblwiIH19PkRpc3BvbmlibGU8L3A+PC9zcGFuPlxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgPHNwYW4+U3RhdHV0IDogPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+UsOpc2VydsOpPC9wPjwvc3Bhbj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1JbmZvRW1wbFwiPlxyXG4gICAgICAgIDxwPkVtcGxhY2VtZW50IDoge2l0ZW0uZW1wbGFjZW1lbnR9IE7CuiB7aXRlbS5pZH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1JbmZvRGVzY1wiPlxyXG4gICAgICAgIDxzcGFuPjxoMz5EZXNjcmlwdGlvbiA6IDwvaDM+IHtpdGVtLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbUluZm9DYXJcIj5cclxuICAgICAgICA8c3Bhbj48aDM+Q2FyYWN0w6lyaXN0aXF1ZXMgOiA8L2gzPiB7aXRlbS5jYXJhY3RlcmlzdGlxdWVzfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtpdGVtLmF2YWlsYWJsZSA/XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ2VuZGFHb29nbGVcIj5cclxuICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jYWxlbmRhci5nb29nbGUuY29tL2NhbGVuZGFyL2VtYmVkP2hlaWdodD02MDAmd2tzdD0xJmJnY29sb3I9JTIzZmZmZmZmJmN0ej1FdXJvcGUlMkZQYXJpcyZzaG93RGF0ZT0xJnNob3dOYXY9MSZzaG93VGl0bGU9MCZzaG93UHJpbnQ9MSZzaG93VGFicz0xJnNob3dDYWxlbmRhcnM9MCZzcmM9TWpOaFpUVmhPR0ZpWldGa05tTmlabVV5TldReE1qSmpZak15Wm1NM1lqWmtNemxsWVdZME9EWmtZbU13T1RjMk1HWm1NV0k0WVdRNE4yVTVaR0ZpWVVCbmNtOTFjQzVqWVd4bGJtUmhjaTVuYjI5bmJHVXVZMjl0JmNvbG9yPSUyMzYxNjE2MVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogMCB9fT5cclxuICAgICAgICAgIDwvaWZyYW1lPlxyXG4gICAgICAgIDwvZGl2PiA6IG51bGxcclxuICAgICAgfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdXRvblJlc2VydmVyXCI+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuUmVzZXJ2ZXJcIlxyXG4gICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgIHN4PXt7IGJvcmRlckNvbG9yOiBcIndoaXRlXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0UmVzZXJ2ZXJcIj5cclxuICAgICAgICAgICAgPHA+UkVTRVJWRVIgQ0UgTUFURVJJRUw8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj4pXHJcbn0iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5rJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmJhcigpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnROYXZcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImJnSW1nXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYnVpbGQvaW1hZ2VzL2RpZ2l0bGlnaHQuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJkaWdpbGlnaHQgcGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FjY3VlaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYnVpbGQvaW1hZ2VzL25hdmJhci9tYXRlcmlhbC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIm1hdGVyaWFsIHBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWF0w6lyaWVsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YlBhbmVsTWF0ZXJpZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21hdGVyaWVsL3Jlc2VhdVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJCdG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdUZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYnVpbGQvaW1hZ2VzL25hdmJhci9yZXNlYXUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicmVzZWF1IHBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlLDqXNlYXU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21hdGVyaWVsL3RlbGVwaG9uaXF1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJCdG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdUZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYnVpbGQvaW1hZ2VzL25hdmJhci90ZWxlcGhvbmUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwidGVsZXBob25lIHBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlTDqWzDqXBob25pcXVlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYXRlcmllbC9kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1YkJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9idWlsZC9pbWFnZXMvbmF2YmFyL2Rlc2t0b3AucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZGVza3RvcCBwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EZXNrdG9wPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYXRlcmllbC9yZXVuaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1YkJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9idWlsZC9pbWFnZXMvbmF2YmFyL3JldW5pb24ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicmV1bmlvbiBwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Sw6l1bmlvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+KVxyXG59IiwiaW1wb3J0IFNrZWxldG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU2tlbGV0b24nXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEl0ZW1TdGF0cyBmcm9tICcuLi9pdGVtU3RhdHMnXHJcbmltcG9ydCBJdGVtIGZyb20gJy4uL21hdGVyaWVsJ1xyXG5pbXBvcnQgeyBJVEVNUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9kYXRhJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgaXRlbXMgPSBmdW5jdGlvbiAoQ2F0ZWdvcnkpIHtcclxuICAgIGlmIChDYXRlZ29yeSA9PSBudWxsIHx8IENhdGVnb3J5ID09ICcnKSB7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gSVRFTVNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmF2YWlsYWJsZSlcclxuICAgICAgICAgICAgICAgIC5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+KSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBJVEVNU1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uY2F0ZWdvcnkgPT0gQ2F0ZWdvcnkpXHJcbiAgICAgICAgICAgICAgICAubWFwKChpdGVtKSA9PlxyXG4gICAgICAgICAgICAgICAgKDxJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IFNrZWxldG9uQnJlYWRjcnVtYiA9ICgpID0+IChcclxuICAgIDxzcGFuIHN0eWxlPXt7XHJcbiAgICAgICAgaGVpZ2h0OiAnNCUnLFxyXG4gICAgfX0+XHJcbiAgICAgICAgPFNrZWxldG9uIHZhcmlhbnQ9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgd2lkdGg9XCIzMCVcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9JzgwJSdcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICc1JScsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxLjUlJyxcclxuICAgICAgICAgICAgfX0gLz5cclxuICAgIDwvc3Bhbj4pXHJcblxyXG5jb25zdCBTa2VsZXRvbkl0ZW0gPSAoKSA9PiAoXHJcbiAgICA8U2tlbGV0b24gdmFyaWFudD1cInJvdW5kZWRcIlxyXG4gICAgICAgIHdpZHRoPVwiNDUlXCJcclxuICAgICAgICBoZWlnaHQ9JzE1JSdcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMSUnLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICczJScsXHJcbiAgICAgICAgfX0gLz4pXHJcblxyXG5mdW5jdGlvbiByYW5kb21UaW1lKG1pbiwgbWF4KSB7IC8vIG1pbiBhbmQgbWF4IGluY2x1ZGVkIFxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tlbGV0dGUoeyBwYWdlIH0pIHtcclxuXHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgfSwgcmFuZG9tVGltZSg1MDAsIDEwMDApKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7bG9hZGluZyA/ICg8PlxyXG5cclxuICAgICAgICAgICAgICAgIDxTa2VsZXRvbkJyZWFkY3J1bWIgLz5cclxuICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkoOCkua2V5cygpXS5tYXAoKGl0ZW0pID0+ICg8U2tlbGV0b25JdGVtIGtleT17aXRlbX0gLz4pKX1cclxuXHJcbiAgICAgICAgICAgIDwvPikgOiAoPD48SXRlbVN0YXRzIENhdGVnb3J5PXtwYWdlfSAvPiB7aXRlbXMocGFnZSl9XHJcbiAgICAgICAgICAgIDwvPil9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgU2tlbGV0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9Ta2VsZXRvbic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEl0ZW0gZnJvbSAnLi4vbWF0ZXJpZWxfZGV0YWlscyc7XHJcbmltcG9ydCB7IElURU1TIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2RhdGEnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgY2FwaXRhbGl6ZVdvcmRzID0gKHN0cikgPT4ge1xyXG4gICAgcmV0dXJuIHN0clxyXG4gICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAuc3BsaXQoJyAnKVxyXG4gICAgICAubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcclxuICAgICAgLmpvaW4oJyAnKS5ub3JtYWxpemUoXCJORkRcIikucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIikucmVwbGFjZUFsbCgnLScsIFwiIFwiKS50b0xvd2VyQ2FzZSgpO1xyXG4gIH07XHJcblxyXG5jb25zdCBpdGVtcyA9IGZ1bmN0aW9uIChpdGVtTmFtZSkge1xyXG4gICAgcmV0dXJuIElURU1TXHJcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGNhcGl0YWxpemVXb3JkcyhpdGVtLm5hbWUpID09IGNhcGl0YWxpemVXb3JkcyhpdGVtTmFtZSkpXHJcbiAgICAgICAgLm1hcCgoaXRlbSkgPT5cclxuICAgICAgICAoPEl0ZW1cclxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICBpdGVtPXtpdGVtfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgKSlcclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tVGltZShtaW4sIG1heCkgeyAvLyBtaW4gYW5kIG1heCBpbmNsdWRlZCBcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNrZWxldHRlKHsgaXRlbU5hbWUgfSkge1xyXG5cclxuICAgIGNvbnN0IEl0ZW1JbWFnZSA9ICgpID0+IChcclxuICAgICAgICA8U2tlbGV0b25cclxuICAgICAgICAgICAgYW5pbWF0aW9uPVwid2F2ZVwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJyb3VuZGVkXCJcclxuICAgICAgICAgICAgd2lkdGg9XCI4MCVcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9JzU1JSdcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcxMCUnLFxyXG4gICAgICAgICAgICB9fSAvPilcclxuXHJcbiAgICBjb25zdCBUZXh0VGl0bGUgPSAoKSA9PiAoXHJcbiAgICAgICAgPFNrZWxldG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJyb3VuZGVkXCJcclxuICAgICAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9JzMlJ1xyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzEwJScsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxJScsXHJcbiAgICAgICAgICAgIH19IC8+KVxyXG5cclxuICAgIGNvbnN0IFRleHREZXNjcmlwdGlvbiA9ICgpID0+IChcclxuICAgICAgICA8U2tlbGV0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cInJvdW5kZWRcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjgwJVwiXHJcbiAgICAgICAgICAgIGhlaWdodD0nMiUnXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTAlJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzMlJyxcclxuICAgICAgICAgICAgfX0gLz4pXHJcblxyXG4gICAgY29uc3QgQnV0dG9uID0gKCkgPT4gKFxyXG4gICAgICAgIDxTa2VsZXRvblxyXG4gICAgICAgICAgICBhbmltYXRpb249XCJ3YXZlXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInJvdW5kZWRcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbiAgICAgICAgICAgIGhlaWdodD0nMyUnXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTAlJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzglJyxcclxuICAgICAgICAgICAgfX0gLz4pXHJcblxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH0sIHJhbmRvbVRpbWUoNTAwLCAxMDAwKSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoPD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgYWxpZ25Db250ZW50OiAnY2VudGVyJyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PjxJdGVtSW1hZ2UgLz48L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRUaXRsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KDgpLmtleXMoKV0ubWFwKChpdGVtKSA9PiAoPFRleHREZXNjcmlwdGlvbiBrZXk9e2l0ZW19IC8+KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvPikgOiAoPD57aXRlbXMoaXRlbU5hbWUpfVxyXG4gICAgICAgICAgICA8Lz4pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGNvbnN0IElURU1TID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6IFwiQ29tbXV0YXRldXIgQ2lzY28gMjUwXCIsXHJcbiAgICAgICAgYWx0OiBcIkNvbW11dGF0ZXVyXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwicsOpc2VhdVwiLFxyXG4gICAgICAgIGVtcGxhY2VtZW50OiBcIlNhbGxlIGRlIHN0b2NrYWdlIDFcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMZXMgY29tbXV0YXRldXJzIENpc2NvIDI1MCBzb250IGNvbsOndXMgcG91ciDDqnRyZSBmYWNpbGVzIMOgIGTDqXBsb3llciBldCB1dGlsaXNlciBwYXIgbGVzIHBldGl0ZXMgZW50cmVwcmlzZXMgZXQgbGV1cnMgcGFydGVuYWlyZXMuIERlcyBpbnRlcmZhY2VzIGdyYXBoaXF1ZXMgYXZhbmPDqWVzIGV0IGNvbnZpdmlhbGVzIHLDqWR1aXNlbnQgbGUgdGVtcHMgZGUgZMOpcGxvaWVtZW50LCBkZSBkw6lwYW5uYWdlIGV0IGRlIGdlc3Rpb24gZHUgcsOpc2VhdS4gRGVzIGFzc2lzdGFudHMgZGUgY29uZmlndXJhdGlvbiBzaW1wbGlmaWVudCBsZXMgdMOiY2hlcyBkZSBjb25maWd1cmF0aW9uIGNvdXJhbnRlcyBldCBjb25zdGl0dWVudCBsJ291dGlsIGlkw6lhbCBwb3VyIHBhcmFtw6l0cmVyIGV0IGfDqXJlciBsZSByw6lzZWF1LlwiLFxyXG4gICAgICAgIGNhcmFjdGVyaXN0aXF1ZXM6IFwiQ29udHLDtGxlIGR1IGZsdXgsIHByaXNlIGVuIGNoYXJnZSBkZSBCT09UUCwgSUdNUCBzbm9vcGluZywgcHJpc2UgZW4gY2hhcmdlIGRlIFN5c2xvZywgcHJvdGVjdGlvbiBjb250cmUgbGVzIGF0dGFxdWVzIGRlIETDqW5pIGRlIFNlcnZpY2UsIG1pc2UgZW4gbWlyb2lyIGRlcyBwb3J0cywgcHJpc2UgZW4gY2hhcmdlIERpZmZTZXJ2LCBtaXNlIGVuIGZpbGUgZCdhdHRlbnRlIFdlaWdodGVkIFJvdW5kIFJvYmluIChXUlIpLCBjb250csO0bGUgZGUgbGEgdGVtcMOqdGUgZGUgQnJvYWRjYXN0LCBwcmlzZSBlbiBjaGFyZ2UgZCdJUHY2LCBNdWx0aWNhc3QgU3Rvcm0gQ29udHJvbCwgVW5pY2FzdCBTdG9ybSBDb250cm9sLCBwcmlzZSBlbiBjaGFyZ2UgZHUgcHJvdG9jb2xlIFNOVFAsIHByaXNlIGVuIGNoYXJnZSBkdSBwcm90b2NvbGUgU1RQIChTcGFubmluZyBUcmVlIFByb3RvY29sKSwgcHJpc2UgZW4gY2hhcmdlIGR1IHByb3RvY29sZSBSU1RQIChSYXBpZCBTcGFubmluZyBUcmVlIFByb3RvY29sKSwgcHJpc2UgZW4gY2hhcmdlIGR1IHByb3RvY29sZSBNdWx0aXBsZSBTcGFubmluZyBUcmVlIFByb3RvY29sIChNU1RQKSwgcXVhbGl0w6kgZGUgc2VydmljZSAoUURTKSwgc2VydmV1ciBESENQLCBzbm9vcGluZyBNTEQsIGJvdXRvbiBkZSByw6lpbml0aWFsaXNhdGlvbiwgc2FucyB2ZW50aWxhdGV1ciwgcHJpc2UgZW4gY2hhcmdlIExMRFAsIHJlbGFpcyBESENQLCBMaW5rIEFnZ3JlZ2F0aW9uIENvbnRyb2wgUHJvdG9jb2wgKExBQ1ApLCBQb3J0IFNlY3VyaXR5LCBjbGllbnQgREhDUCwgRW5lcmd5IEVmZmljaWVudCBFdGhlcm5ldCwgYmFzZSBkJ2luZm9ybWF0aW9uIGRlIGdlc3Rpb24gKE1JQiksIHRhbXBvbiAxMiBNQiwgQ2xhc3Mgb2YgU2VydmljZSAoQ29TKSwgYXV0aGVudGlmaWNhdGlvbiA4MDIuMXgsIER1cGxpY2F0ZWQgQWRkcmVzcyBEZXRlY3Rpb24sIFR5cGUgb2YgU2VydmljZSAoVG9TKSwgcHJpc2UgZW4gY2hhcmdlIERpZmZTZXJ2IENvZGUgUG9pbnQgKERTQ1ApLCB0ZXN0IGRlIGPDomJsZSwgdGVjaG5vbG9naWUgU21hcnRQb3J0LCBzeXN0w6htZSBkZSBwcsOpdmVudGlvbiBkdSBibG9jYWdlIGVuIHTDqnRlLCBJbnRlcm5ldCBDb250cm9sIE1lc3NhZ2UgUHJvdG9jb2wgKElDTVApLCBDaXNjbyBEaXNjb3ZlcnkgUHJvdG9jb2wsIG1pcm9pciBWTEFOLlwiLFxyXG4gICAgICAgIGltZzogXCIvYnVpbGQvaW1hZ2VzL2l0ZW0vY29tbXV0YXRldXIuanBnXCIsXHJcbiAgICAgICAgaHJlZjogXCIvbWF0ZXJpZWwvcmVzZWF1L2NvbW11dGF0ZXVyLWNpc2NvLTI1MFwiLFxyXG4gICAgICAgIGF2YWlsYWJsZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIlJvdXRldXIgQ2lzY28gMTkyMVwiLFxyXG4gICAgICAgIGFsdDogXCJSb3V0ZXVyXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwicsOpc2VhdVwiLFxyXG4gICAgICAgIGVtcGxhY2VtZW50OiBcIlNhbGxlIGRlIHN0b2NrYWdlIDFcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMZSBDaXNjbyAxOTIxIHMnYXBwdWllIHN1ciBsZSBtZWlsbGV1ciBkZSBzYSBjYXTDqWdvcmllLiBUb3VzIGxlcyByb3V0ZXVycyDDoCBzZXJ2aWNlcyBpbnTDqWdyw6lzIGRlIGxhIGdhbW1lIENpc2NvIDE5MDAgb2ZmcmVudCB1bmUgYWNjw6lsw6lyYXRpb24gZHUgY3J5cHRhZ2UgbWF0w6lyaWVsIGludMOpZ3LDqSBldCBkZXMgc2VydmljZXMgZGUgc8OpY3VyaXTDqSBhdmFuY8Opcy4gRW4gb3V0cmUsIGxlcyBwbGF0ZXMtZm9ybWVzIHByZW5uZW50IGVuIGNoYXJnZSBsYSBwbHVzIGxhcmdlIGdhbW1lIGQnb3B0aW9ucyBkZSBjb25uZWN0aXZpdMOpIGZpbGFpcmUgZXQgc2FucyBmaWwgZHUgc2VjdGV1ciwgdGVsbGVzIHF1ZSBsZXMgY29ubmV4aW9ucyBzw6lyaWUsIFQxL0UxLCB4RFNMLCBHaWdhYml0IEV0aGVybmV0IGV0IHNhbnMgZmlsIGRlIHRyb2lzacOobWUgZ8OpbsOpcmF0aW9uICgzRykuIExlIENpc2NvIDE5MjEgZXN0IGNvbsOndSBwb3VyIHLDqXBvbmRyZSBhdXggZXhpZ2VuY2VzIGRlcyBhcHBsaWNhdGlvbnMgZGVzIHN1Y2N1cnNhbGVzIGQnYXVqb3VyZCdodWksIGF2ZWMgdW5lIGZsZXhpYmlsaXTDqSBkZSBjb25jZXB0aW9uIHBvdXIgbGVzIGFwcGxpY2F0aW9ucyBmdXR1cmVzLiBWb3VzIHBvdXZleiBmYWNpbGVtZW50IGludGVyY2hhbmdlciBsZXMgbW9kdWxlcyB1dGlsaXPDqXMgc3VyIGxlIENpc2NvIDE5MjEgYXZlYyBkJ2F1dHJlcyByb3V0ZXVycyBDaXNjbyBwb3VyIGFzc3VyZXIgdW5lIHByb3RlY3Rpb24gbWF4aW1hbGUgZGUgdm90cmUgaW52ZXN0aXNzZW1lbnQuIEwndXRpbGlzYXRpb24gZGUgY2FydGVzIGQnaW50ZXJmYWNlIGNvbW11bmVzIMOgIGwnZW5zZW1ibGUgZHUgcsOpc2VhdSByw6lkdWl0IGNvbnNpZMOpcmFibGVtZW50IGxhIGNvbXBsZXhpdMOpIGRlIGxhIGdlc3Rpb24gZGVzIHN0b2NrcywgZGUgbGEgbWlzZSBlbiDFk3V2cmUgZGUgZ3JhbmRzIGTDqXBsb2llbWVudHMgZGUgcsOpc2VhdSBldCBkZSBsYSBtYWludGVuYW5jZSBkZXMgY29uZmlndXJhdGlvbnMgcG91ciBkZXMgc3VjY3Vyc2FsZXMgZGUgdGFpbGxlcyBkaXZlcnNlcy5cIixcclxuICAgICAgICBjYXJhY3RlcmlzdGlxdWVzOiBcIlx0UHJvdGVjdGlvbiBwYXIgZmlyZXdhbGwsIFByaXNlIGVuIGNoYXJnZSBWUE4sIHByaXNlIGVuIGNoYXJnZSBkZSBNUExTLCBwcmlzZSBlbiBjaGFyZ2UgZHUgcsOpc2VhdSBsb2NhbCAoTEFOKSB2aXJ0dWVsLCBwcmlzZSBlbiBjaGFyZ2UgZGUgU3lzbG9nLCBwcmlzZSBlbiBjaGFyZ2UgZCdJUHY2LCBDbGFzcy1CYXNlZCBXZWlnaHRlZCBGYWlyIFF1ZXVpbmcgKENCV0ZRKSwgV2VpZ2h0ZWQgUmFuZG9tIEVhcmx5IERldGVjdGlvbiAoV1JFRCksIHF1YWxpdMOpIGRlIHNlcnZpY2UgKFFEUyksIFdlYiBTZXJ2aWNlcyBNYW5hZ2VtZW50IEFnZW50IChXU01BKSwgVFItMDY5IEFnZW50LCBOZXRGbG93XCIsXHJcbiAgICAgICAgaW1nOiBcIi9idWlsZC9pbWFnZXMvaXRlbS9yb3V0ZXVyLmpwZ1wiLFxyXG4gICAgICAgIGhyZWY6IFwiL21hdGVyaWVsL3Jlc2VhdS9yb3V0ZXVyLWNpc2NvLTE5MjFcIixcclxuICAgICAgICBhdmFpbGFibGU6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgbmFtZTogXCJDcGwgQVYyMDAwXCIsXHJcbiAgICAgICAgYWx0OiBcIkNwbFwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcInLDqXNlYXVcIixcclxuICAgICAgICBlbXBsYWNlbWVudDogXCJTYWxsZSBkZSBzdG9ja2FnZSAxXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVG91dCBjb21tZSBsZSBELUxpbmsgREhQLTcwMUFWLCBsZSBUTC1QQTkwMjAgZW1iYXJxdWUgZG9uYyB1bmUgcHVjZSBjb21tdW5pY2FudGUgc2lnbsOpZSBCcm9hZGNvbS4gUGx1cyB2w6lsb2NlIHF1ZSBzb24gaG9tb2xvZ3VlIFF1YWxjb21tIFFDQTc1MDAgKDEsMiBHYi9zKSwgZWxsZSBwZXJtZXQgZCdhZmZpY2hlciBkZXMgZMOpYml0cyB0aMOpb3JpcXVlcyBwbHVzIMOpbGV2w6lzLCBiaWVuIHF1ZSBmb25jdGlvbm5hbnQgw6lnYWxlbWVudCBzdXIgbGEgbm9ybWUgSG9tZVBsdWcgQVYyLiBMZSBjb25zdHJ1Y3RldXIgcGFybGUgYWluc2kgZCd1biBkw6liaXQgdGjDqW9yaXF1ZSBkZSAyIEdiL3MsIHNvaXQgMTAwIE1iL3MgZGUgcGx1cyBxdWUgc3VyIGxhIHZlcnNpb24gZnJhbsOnYWlzZSBkdSBibG9jIEQtTGluayBldCA4MDAgTWIvcyBkZSBwbHVzIHF1ZSBzdXIgbGVzIGJsb2NzIHV0aWxpc2FudCB1bmUgcHVjZSBRdWFsY29tbS4gUG91ciBwcm9maXRlciBkZSB0ZWxzIGTDqWJpdHMg4oCUICBicnV0cyBvbiBsZSByYXBwZWxsZSDigJQgaWwgZXN0IHRvdXRlZm9pcyBuw6ljZXNzYWlyZSBkZSBwb3V2b2lyIHV0aWxpc2VyIGxhIGZvbmN0aW9uIE1pTW8gZXQgZG9uYyBkZSBkaXNwb3NlciBkZSB0cm9pcyBjw6JibGVzIMOpbGVjdHJpcXVlcyBzdXIgY2hhcXVlIHByaXNlIGRlIGNvdXJhbnQuXCIsXHJcbiAgICAgICAgY2FyYWN0ZXJpc3RpcXVlczogXCJEw6liaXQgdGjDqW9yaXF1ZVx0MiBHYml0L3MgUG9ydHNcdDJ4IEdpZ2FiaXQgRXRoZXJuZXQgTm9ybWVcdEhvbWVQbHVnIEFWMiA7IElFRUUxOTAxIDsgSG9tZVBsdWcgQVYgU8OpY3VyaXTDqVx0QUVTIDEyOCBiaXRzIEdhcmFudGllXHQzIFdpLUZpXHROb24gU3dpdGNoIHLDqXNlYXVcdE91aSBQcmlzZSBmZW1lbGxlXHRPdWlcIixcclxuICAgICAgICBpbWc6IFwiL2J1aWxkL2ltYWdlcy9pdGVtL2NwbC5qcGdcIixcclxuICAgICAgICBocmVmOiBcIi9tYXRlcmllbC9yZXNlYXUvY3BsLUFWMjAwMFwiLFxyXG4gICAgICAgIGF2YWlsYWJsZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICBuYW1lOiBcIlllYWxpbmsgVDU0V1wiLFxyXG4gICAgICAgIGFsdDogXCJUw6lsw6lwaG9uZSBmaXhlXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwidMOpbMOpcGhvbmlxdWVcIixcclxuICAgICAgICBlbXBsYWNlbWVudDogXCJTYWxsZSBkZSBzdG9ja2FnZSAyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQXZlYyBzb24gbW9kw6hsZSBUNTRXLCBZZWFsaW5rIHByb3Bvc2UgdW4gcG9zdGUgSVAgaGF1dCBkZSBnYW1tZSBwb3VyIGxlcyBlbnRyZXByaXNlcyBldCBsZSBtb25kZSBwcm9mZXNzaW9ubmVsLiBEb3TDqSBkJ3VuIMOpY3JhbiBjb3VsZXVyIExDRCA0LDMgcG91Y2VzIHRhY3RpbGUgZXQgb2ZmcmFudCBwbHVzaWV1cnMgcG9zaXRpb25zIHBvdXIgdW5lIHZpc2liaWxpdMOpIG9wdGltYWxlLCBpbCBwZXJtZXQgdW5lIG5hdmlnYXRpb24gZmx1aWRlIGV0IGFpc8OpZS4gR3LDomNlIGF1eCBkaWZmw6lyZW50cyB0w6ltb2lucyBsdW1pbmV1eCBiaWNvbG9yZXMgKHJvdWdlIGV0IHZlcnQpIGQnaW5mb3JtYXRpb25zIGQnw6l0YXQgZGUgbGlnbmUsIGRlIG1lc3NhZ2VzIG91IGQnYXBwZWxzIGVuIGF0dGVudGUsIHZveWV6IGQndW4gc2V1bCBjb3VwIGQnb2VpbCB2b3RyZSBhY3Rpdml0w6kgZW4gY291cnMuIE5pdmVhdSBpbnRlcmZhY2UgdXRpbGlzYXRldXIsIGxlIFllYWxpbmsgVDU0VyBlc3QgcGVuc8OpIHBvdXIgw6p0cmUgaW50dWl0aWYgZXQgbmUgcG9zZXIgYXVjdW4gcHJvYmzDqG1lcyBhdXggcHJvZmVzc2lvbm5lbHMsIHBldSBpbXBvcnRlIHF1J2lscyBzb2llbnQgw6AgbCdhaXNlIGF2ZWMgbGEgdMOpbMOpcGhvbmllIG91IG5vbi4gTGVzIGljw7RuZXMgYWluc2kgcXVlIGxlcyBkaWZmw6lyZW50ZXMgdG91Y2hlcyBwcm9ncmFtbWFibGVzIHBlcm1ldHRlbnQgdW5lIG5hdmlnYXRpb24gZXQgdW5lIHV0aWxpc2F0aW9uIHNpbXBsaWZpw6llLiBFbmZpbiwgbGUgdMOpbMOpcGhvbmUgZXN0IMOpdmlkZW1tZW50IGNhcGFibGUgZCdhZmZpY2hlciBsZSBub20gZXQgbGUgbnVtw6lybyBkZSBsJ2FwcGVsYW50LCBwZXJtZXR0YW50IGRlIGNvbm5hw650cmUgcXVpIGVzc2FpZSBkZSB2b3VzIGpvaW5kcmUuXCIsXHJcbiAgICAgICAgY2FyYWN0ZXJpc3RpcXVlczogXCJMZXMgY2FyYWN0w6lyaXN0aXF1ZXMgYXVkaW8gZHUgdMOpbMOpcGhvbmUgSVAgWWVhbGluayBUNTRXIHNvbnQgaXNzdWVzIGRlIGxhIGRlcm5pw6hyZSBnw6luw6lyYXRpb24uIFByZW5hbnQgZW4gY2hhcmdlIGxlIENvZGVjIE9QVVMsIGxlICBUNTRXIHByb3Bvc2UgdW5lIHF1YWxpdMOpIGRlIHZvaXggSEQgZ3LDomNlIGF1IGNvbWJpbsOpIGV0IGF1IGhhdXQtcGFybGV1ci4gIENvbXBhdGlibGUgYXZlYyBsZXMgcHJvdGjDqHNlcyBhdWRpdGl2ZXMgKEhBQyksIGxlIHTDqWzDqXBob25lIFNJUCBUNTRXIHBlcm1ldCwgZCd1bmUgcGFydCwgZCdvZmZyaXIgdW4gYm91Y2xpZXIgYWNjb3VzdGlxdWUgY29udHJlIGxlcyBicnVpdHMgdHJvcCBhaWfDvGUgcHJvdmVuYW50IGRlIHZvdHJlIGludGVybG9jdXRldXIsIGV0IGQnYXV0cmUgcGFydCwgb2ZmcmUgdW4gZmlsdHJhZ2UgaW50ZWxsaWdlbnQgZHUgYnJ1aXQuIExlIFQ1NFcgZXN0IGNhcGFibGUgZGUgZmlsdHJlciBlbiBwYXJ0aWUgbGVzIGJydWl0cyBudWlzaWJsZXMgYXV0b3VyIGRlIHZvdXMgZXQgZGUgbGVzIHRyYWl0ZXIgcG91ciBuZSByw6ljdXDDqXJlciBxdWUgbGEgdm9peC5cIixcclxuICAgICAgICBpbWc6IFwiL2J1aWxkL2ltYWdlcy9pdGVtL3RlbGVwaG9uZS1maXhlLnBuZ1wiLFxyXG4gICAgICAgIGhyZWY6IFwiL21hdGVyaWVsL3RlbGVwaG9uaXF1ZS95ZWFsaW5rLXQ1NHdcIixcclxuICAgICAgICBhdmFpbGFibGU6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgbmFtZTogXCJJcGhvbmUgMTJcIixcclxuICAgICAgICBhbHQ6IFwiVMOpbMOpcGhvbmUgcG9ydGFibGVcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJ0w6lsw6lwaG9uaXF1ZVwiLFxyXG4gICAgICAgIGVtcGxhY2VtZW50OiBcIlNhbGxlIGRlIHN0b2NrYWdlIDJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUb3V0IGVuIHPigJlpbnNwaXJhbnQgZHUgZGVzaWduIGRlcyBub3V2ZWF1eCBpUGFkLCBs4oCZaVBob25lIDEyIHJlbm91ZSDDqWdhbGVtZW50IGF2ZWMgbGUgcGFzc8OpIGVuIGFyYm9yYW50IHVuIHN0eWxlIHF1aSBu4oCZZXN0IHBhcyBzYW5zIHJhcHBlbGVyIGxlcyBhbmNpZW5uZXMgZ8OpbsOpcmF0aW9ucyBkZSBzbWFydHBob25lcyBBcHBsZSA7IG5vdGFtbWVudCBsZXMgNMOobWUgZXQgNcOobWUuIExlIHTDqWzDqXBob25lIHNlIHZldXQgcGx1cyBjb21wYWN0IHF1ZSBzb24gcHLDqWTDqWNlc3NldXIgZXQgYWZmaWNoZSBkZSBzdXJjcm/DrnQgdW5lIGZpbml0aW9uIHBsdXMgw6lsw6lnYW50ZSwgcXXigJlpbCBkb2l0IMOgIGRlcyBib3JkdXJlcyBuZXR0ZW1lbnQgcGx1cyBmaW5lcy4gTGUgc21hcnRwaG9uZSBkZSAxNMOobWUgZ8OpbsOpcmF0aW9uIHBhcnRhZ2UgcGFyIGFpbGxldXJzIGxlcyBtw6ptZXMgZGltZW5zaW9ucyBxdWUgbOKAmWlQaG9uZSAxMiBQcm8gZXQganVzdGlmaWUgZOKAmXVuZSB0csOocyBib25uZSBlcmdvbm9taWUsIHB1aXNxdeKAmWlsIHNlIG1hbmlwdWxlIGFpc8OpbWVudCBkJ3VuZSBzZXVsZSBtYWluLlwiLFxyXG4gICAgICAgIGNhcmFjdGVyaXN0aXF1ZXM6IFwiUHJvY2Vzc2V1clx0QXBwbGUgQTEzIEJpb25pY1x0QXBwbGUgQTE0IEJpb25pYyBNw6ltb2lyZSB2aXZlIChSQU0pXHQ0IEdvXHQ0IEdvIENhcGFjaXTDqSBkZSBzdG9ja2FnZVx0NjQgR28sIDEyOCBHbyBvdSAyNTYgR29cdDY0IEdvLCAxMjggR28gb3UgMjU2IEdvIEFwcGFyZWlsIHBob3RvXHREb3VibGUgY2Ftw6lyYSBkZSAxMiBNcHgsIENhbcOpcmEgZnJvbnRhbGUgZGUgMTIgTXB4XHREb3VibGUgY2Ftw6lyYSBkZSAxMiBNcHgsIENhbcOpcmEgZnJvbnRhbGUgZGUgMTIgTXB4IMOJY3Jhblx0TENEIDYsMSBwb3VjZXMgYXZlYyAxIDc5MiB4IDgyOCBwaXhlbHMgw6AgMzI2IHBwaTZcdE9MRUQgZGUgNiwxIHBvdWNlcyBhdmVjIDIgNTMyIHggMSAxNzAgcGl4ZWxzIMOgIDQ2MCBwcGkgQmF0dGVyaWVcdEJhdHRlcmllIExpLUlvbiBkZSAzIDExMCBtQWhcdEJhdHRlcmllIExpLUlvbiBkZSAyIDgxNSBtQWggQXV0b25vbWllXHQxNSBoXHQxMiBoIENvbm5lY3RpcXVlXHRMVEUsIFVNVFMsIEdNU1x0NUcsIExURSwgR01TLCBVTVRTXCIsXHJcbiAgICAgICAgaW1nOiBcIi9idWlsZC9pbWFnZXMvaXRlbS90ZWxlcGhvbmUtcG9ydGFibGUucG5nXCIsXHJcbiAgICAgICAgaHJlZjogXCIvbWF0ZXJpZWwvdGVsZXBob25pcXVlL2lwaG9uZS0xMlwiLFxyXG4gICAgICAgIGF2YWlsYWJsZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNixcclxuICAgICAgICBuYW1lOiBcIkNhc3F1ZSBTdXBlcmx1eCBobWQ2ODVhXCIsXHJcbiAgICAgICAgYWx0OiBcIkNhc3F1ZSBhdWRpb1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcImRlc2t0b3BcIixcclxuICAgICAgICBlbXBsYWNlbWVudDogXCJTYWxsZSBkZSBzdG9ja2FnZSAzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ29tbWUgc29uIG5vbSBsJ2luZGlxdWUsIGNlcyDDqWNvdXRldXJzIHNvbnQgZGUgaGF1dGUgZMOpZmluaXRpb24uIElscyBwZXV2ZW50IHJlcHJvZHVpcmUgZGVzIGJhc3NlcyDDqXBhaXNzZXMgYWluc2kgcXVlIGRlcyBtw6lkaXVtcyBldCBkZXMgYWlndXMgY2xhaXJzLiBBdmVjIGNlcyDDqWNvdXRldXJzLCB2b3VzIHBvdXZleiBwcm9maXRlciBkZSB2b3RyZSBtdXNpcXVlIHByw6lmw6lyw6llIHBhcnRvdXQgb3Ugdm91cyBhbGxlei4gTGVzIMOpY291dGV1cnMgcGV1dmVudCBldHJlIHBsacOpcyBwb3VyIG5lIHBhcyBwcmVuZHJlIHRyb3AgZGUgcGxhY2UgZGFucyB2b3MgYmFnYWdlcy4gTGUgY8OiYmxlIGVzdCBkb3TDqSBkJ3VuIG1pY3JvcGhvbmUgYSBib3V0b24tcG91c3NvaXIsIHF1aSB2b3VzIHBlcm1ldCBkZSByw6lwb25kcmUgYXV4IGFwcGVscyBldCBkJ3kgcsOpcG9uZHJlIChmb25jdGlvbm5lIGF2ZWMgbGVzIGFwcGFyZWlscyBBcHBsZSkuXCIsXHJcbiAgICAgICAgY2FyYWN0ZXJpc3RpcXVlczogXCJEaXJlY3Rpdml0w6k6IGNhcmRpb8OvZGUgUsOpcG9uc2UgZW4gZnLDqXF1ZW5jZTogNTAgLSAxNTAwMCBIeiBJbXDDqWRhbmNlOiAyMDAgT2htIFNlbnNpYmlsaXTDqTogLTY0IGRCViAvIFBhICgwLDYgbVYgLyBQYSkgw6AgMSBrSHogTG9uZ3VldXIgZGUgY8OiYmxlIGRlIDEsNSBtIGF2ZWMgY29ubmVjdGV1ciBYTFIgNCBicm9jaGVzIGZlbWVsbGVcIixcclxuICAgICAgICBpbWc6IFwiL2J1aWxkL2ltYWdlcy9pdGVtL2Nhc3F1ZS5qcGdcIixcclxuICAgICAgICBocmVmOiBcIi9tYXRlcmllbC9kZXNrdG9wL2Nhc3F1ZS1zdXBlcmx1eC1obWQ2ODVhXCIsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA3LFxyXG4gICAgICAgIG5hbWU6IFwiT3JkaW5hdGV1ciBBY2VyIHZlcml0b24gczI2ODBnXCIsXHJcbiAgICAgICAgYWx0OiBcIk9yZGluYXRldXIgZGUgYnVyZWF1XCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiZGVza3RvcFwiLFxyXG4gICAgICAgIGVtcGxhY2VtZW50OiBcIlNhbGxlIGRlIHN0b2NrYWdlIDNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMJ29yZGluYXRldXIgQWNlciBWZXJpdG9uIFMyNjgwRyBlc3QgdW5lIHNvbHV0aW9uIHByb2Zlc3Npb25uZWxsZSBwZXJmb3JtYW50ZSwgY29tcGFjdGUsIGZpYWJsZSBldCBzw6ljdXJpc8OpZSDDoCBwcml4IGFib3JkYWJsZS4gRmFpdGVzIGwnYWNoYXQgZGUgY2UgUEMgZGUgYnVyZWF1IHBvdXIgdG91dGVzIHZvcyB0w6JjaGVzIHByb2Zlc3Npb25uZWxsZXMgY291cmFudGVzIGV0IHByb2ZpdGV6IGRlIGJvbm5lcyBwZXJmb3JtYW5jZXMsIHkgY29tcHJpcyBlbiBtdWx0aXTDomNoZXMuXCIsXHJcbiAgICAgICAgY2FyYWN0ZXJpc3RpcXVlczogXCJJbmZvcm1hdGlvbnMgZ8OpbsOpcmFsZXMgRMOpc2lnbmF0aW9uIEFjZXIgVmVyaXRvbiBTMjY4MEcgKERULlZWMkVGLjAwSCkgLSBXaW5kb3dzIDEwIFBybyBNYXJxdWUgQWNlciBNb2TDqGxlIERULlZWMkVGLjAwSCBTeXN0w6htZSBkJ2V4cGxvaXRhdGlvbiBTeXN0w6htZSBkJ2V4cGxvaXRhdGlvbiBXaW5kb3dzIDEwIFByb2Zlc3Npb25uZWwgNjQgYml0cyBTeXN0w6htZSBkJ2V4cGxvaXRhdGlvbiBmb3VybmkgT3VpIFByb2Nlc3NldXIgZXQgY2hpcHNldCBQbGF0ZWZvcm1lIChQcm9jLikgSW50ZWwgQ29tZXQgTGFrZSBUeXBlIGRlIHByb2Nlc3NldXIgSW50ZWwgQ29yZSBpMy0xMDEwNSAoUXVhZC1Db3JlIDMuNyBHSHogLyA0LjQgR0h6IFR1cmJvIC0gOCBUaHJlYWRzIC0gQ2FjaGUgNiBNbykgUHJvY2Vzc2V1ciBJbnRlbCBDb3JlIGkzIEZyw6lxdWVuY2UgQ1BVIDMuNyBHSHogTcOpbW9pcmUgVGFpbGxlIGRlIGxhIG3DqW1vaXJlIDggR28gVHlwZSBkZSBtw6ltb2lyZSBERFI0IEZyw6lxdWVuY2UocykgTcOpbW9pcmUgRERSNCAyNjY2IE1IeiBTdG9ja2FnZSBDb25maWd1cmF0aW9uIGRpc3F1ZShzKSBTU0QgMjU2IEdvIERpc3F1ZSBkdXIgU1NEIDI1NiBHbyBEaXNxdWUgc2Vjb25kYWlyZSBTYW5zIGRpc3F1ZSBzZWNvbmRhaXJlIFR5cGUgZGUgRGlzcXVlIFN5c3TDqG1lIFNTRCAoU29saWQgU3RhdGUgRHJpdmUpIEludGVyZmFjZSBhdmVjIGwnb3JkaW5hdGV1ciBkaXNxdWUgZHVyIHN5c3TDqG1lIE0uMiAtIFBDSS1FIE5WTWUgTGVjdGV1ciBPcHRpcXVlIEdyYXZldXIgRFZEIFN1cGVyIE11bHRpIExlY3RldXIgZGUgZGlzcXVldHRlcyBOb24gQWZmaWNoYWdlIENoaXBzZXQgZ3JhcGhpcXVlIEludGVsIFVIRCBHcmFwaGljcyA2MzAgTlZJRElBIFN0dWRpbyBOb24gVHlwZSBkZSBtdWx0aS1HUFUgQXVjdW4gVlIgUmVhZHkgKHLDqWFsaXTDqSB2aXJ0dWVsbGUpIE5vbiBSw6lzZWF1IFNhbnMtZmlsIE5vbiBOb21icmUgZGUgcG9ydHMvQ29udHLDtGxldXIgRXRoZXJuZXQgMSBYIEludMOpZ3LDqSBOb3JtZShzKSByw6lzZWF1IDEwLzEwMC8xMDAwIE1icHMgQ29ubmVjdGlxdWUgQ29ubmVjdGV1cnMgcGFubmVhdSBhdmFudCAyIFggVVNCIDMuMSAyIFggVVNCIDMuMCAxIFggTWljcm8gKEphY2sgMy41bW0gRmVtZWxsZSkgMSBYIENhc3F1ZSAoSmFjayAzLjVtbSBGZW1lbGxlKSBDb25uZWN0ZXVycyBwYW5uZWF1IGFycmnDqHJlIDEgWCBWR0EgKEQtc3ViIDE1IEZlbWVsbGUpIDEgWCBIRE1JIEZlbWVsbGUgMSBYIERpc3BsYXlQb3J0IEZlbWVsbGUgNCBYIFVTQiAyLjAgMSBYIFJKNDUgRmVtZWxsZSAyIFggTWluaURpbiA2IEZlbWVsbGUgKFBTLzIpIDEgWCBTw6lyaWUgKFJTLTIzMikgMyBYIEphY2sgMyw1bW0gRmVtZWxsZSBTdMOpcsOpbyBFcXVpcGVtZW50IENsYXZpZXIgZXQgc291cmlzIGZvdXJuaXMgT3VpIENhcmFjdMOpcmlzdGlxdWVzIHBoeXNpcXVlcyBGb3JtYXQgZGUgUEMgVG91ciBGb3JtYXQgZHUgYm9pdGllciBNaW5pIFRvdXIgQ29uY2VwdGlvbiBib8OudGllciBCb2l0aWVyIG5vbiB2aXRyw6kgTGFyZ2V1ciAxNjAgbW0gSGF1dGV1ciAzNTAgbW0gUHJvZm9uZGV1ciAzMDkuMjUgbW0gUG9pZHMgNi44NCBrZyBQdWlzc2FuY2UgMTgwIFcgU3DDqWNpZmljYXRpb25zIHRlY2huaXF1ZXMgTW9udMOpIE91aSBVc2FnZSBQcm9mZXNzaW9ubmVsIFRlY2hub2xvZ2llIEludGVsIHZQcm8gTm9uIEdhcmFudGllcyBHYXJhbnRpZSBjb21tZXJjaWFsZSAyIGFubsOpZXMgdmVuZGV1ciBHYXJhbnRpZXMgbMOpZ2FsZXMgVm9pciBsZXMgbW9kYWxpdMOpcyBJbmZvcm1hdGlvbnMgbMOpZ2FsZXMgUmVwcmlzZSBkZXMgcHJvZHVpdHMgdXNhZ8OpcyBWb2lyIGxlcyBtb2RhbGl0w6lzXCIsXHJcbiAgICAgICAgaW1nOiBcIi9idWlsZC9pbWFnZXMvaXRlbS9vcmRpbmF0ZXVyLnBuZ1wiLFxyXG4gICAgICAgIGhyZWY6IFwiL21hdGVyaWVsL2Rlc2t0b3Avb3JkaW5hdGV1ci1hY2VyLXZlcml0b24tczI2ODBnXCIsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA4LFxyXG4gICAgICAgIG5hbWU6IFwiT3JkaW5hdGV1ciBBQ0VSIGFzcGlyZSAzXCIsXHJcbiAgICAgICAgYWx0OiBcIk9yZGluYXRldXIgcG9ydGFibGVcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJkZXNrdG9wXCIsXHJcbiAgICAgICAgZW1wbGFjZW1lbnQ6IFwiU2FsbGUgZGUgc3RvY2thZ2UgM1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlByb2ZpdGV6IGRlIGJvbm5lcyBwZXJmb3JtYW5jZXMgcG91ciB1biBwcml4IGFib3JkYWJsZSBhdmVjIGxlIFBDIHBvcnRhYmxlIEFjZXIgQXNwaXJlIDMgQTMxNS0yNFAuIMOAIGxhIGZvaXMgY29tcGFjdCwgw6lsw6lnYW50IGV0IGVmZmljYWNlLCBjJ2VzdCB1biBwYXJmYWl0IGNvbXBhZ25vbiBtb2JpbGUuIElsIHNlcmEgYWRhcHTDqSBwb3VyIGxlcyBhcHBsaWNhdGlvbnMgZGUgYnVyZWF1dGlxdWUsIGxhIG5hdmlnYXRpb24gd2ViIGV0IGxlIGRpdmVydGlzc2VtZW50IG11bHRpbcOpZGlhIG9jY2FzaW9ubmVsLlwiLFxyXG4gICAgICAgIGNhcmFjdGVyaXN0aXF1ZXM6IFwiUHJvY2Vzc2V1ciBBTUQgUnl6ZW4gNSA3NTIwVSAoUXVhZC1Db3JlIDIuOCBHSHogLyA0LjMgR0h6IFR1cmJvIC0gOCBUaHJlYWRzIC0gQ2FjaGUgNCBNbykgMTYgR28gZGUgbcOpbW9pcmUgTFBERFI1IChtw6ltb2lyZSBpbnTDqWdyw6llKSDDiWNyYW4gSVBTIGRlIDE1LjYgcG91Y2VzIGF2ZWMgcsOpc29sdXRpb24gRnVsbCBIRCAoMTkyMCB4IDEwODApIFNTRCBNLjIgUENJZSBkZSA1MTIgR28gTWVpbGxldXIgY29uZm9ydCBvY3VsYWlyZSBhdmVjIGxhIHRlY2hub2xvZ2llIEFjZXIgQmx1ZWxpZ2h0IFNoaWVsZCBDb21tdW5pY2F0aW9uIHNhbnMgZmlsIFdpLUZpIDYgKyBCbHVldG9vdGggNS4yIFdlYmNhbSBIUCA3MjBwIGludMOpZ3LDqWUgV2luZG93cyAxMSBGYW1pbGxlIEdhcmFudGllIGNvbnN0cnVjdGV1ciAyIGFuc1wiLFxyXG4gICAgICAgIGltZzogXCIvYnVpbGQvaW1hZ2VzL2l0ZW0vb3JkaW5hdGV1ci1wb3J0YWJsZS5qcGdcIixcclxuICAgICAgICBocmVmOiBcIi9tYXRlcmllbC9kZXNrdG9wL29yZGluYXRldXItYWNlci1hc3BpcmUtM1wiLFxyXG4gICAgICAgIGF2YWlsYWJsZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogOSxcclxuICAgICAgICBuYW1lOiBcIlRhYmxldHRlIHRhY3RpbGUgZXQ1NlwiLFxyXG4gICAgICAgIGFsdDogXCJUYWJsZXR0ZSB0YWN0aWxlXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiZGVza3RvcFwiLFxyXG4gICAgICAgIGVtcGxhY2VtZW50OiBcIlNhbGxlIGRlIHN0b2NrYWdlIDNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJaZWJyYSBhIHBvdXIgdm91cyBsYSBzb2x1dGlvbiBhdmVjIGxhIHRhYmxldHRlIHByb2Zlc3Npb25uZWxsZSBFVDU2LiBTb3VzIEFuZHJvaWQsIGF2ZWMgc2Nhbm5lciBpbnTDqWdyw6ksIGV0IGRvdMOpZSBkZXMgdGVjaG5vbG9naWVzIFdpLUZpLCBjZWxsdWxhaXJlcyBldCBCbHVldG9vdGggbGVzIHBsdXMgcmFwaWRlcywgbCdFVDU2IGVzdCBsZSBtb2TDqGxlIGxlIHBsdXMgcm9idXN0ZSwgbWluY2UgZXQgbMOpZ2VyIGRlIGxhIGdhbW1lIFplYnJhLlwiLFxyXG4gICAgICAgIGNhcmFjdGVyaXN0aXF1ZXM6IFwiUHJvY2Vzc2V1ciA6IFF1YWxjb21tIFNuYXBkcmFnb24gNjYwIGh1aXQgY8WTdXJzLCAyLDIgR0h6IFN5c3TDqG1lIDogQW5kcm9pZCA4LjEgT3JlbyBFY3JhbiA6IDguNCBwbywgY2FwYWNpdGlmLCB0YWN0aWxlIDEwIHBvaW50cywgcsOpc29sdXRpb24gbWF4aW1hbGUgMiA1NjAgeCAxIDYwMCA7IHZlcnJlIENvcm5pbmcgR29yaWxsYSBHbGFzcyA7IGxpc2libGUgZW4gcGxlaW4gam91ciBSQU0gOiA0IEdvIGRlIFJBTSBMUEREUjQgKGV4dGVuc2libGUganVzcXUnw6AgOCBHbykgQVBOIDogOCBNUCwgY2Ftw6lyYSBmcm9udGFsZSAyIE1QIFN0b2NrYWdlIDogMzIgR28gZGUgbcOpbW9pcmUgZmxhc2ggZU1NQyA7IGZlbnRlIHBvdXIgY2FydGUgbWljcm8gU0RYQyBhY2Nlc3NpYmxlIHBhciBs4oCZdXRpbGlzYXRldXIgKGp1c3F14oCZw6AgMjAwIEdvIHByaXMgZW4gY2hhcmdlIGVuIHN0YW5kYXJkKSBDb25uZWN0aXZpdMOpIDogNEcgTFRFIChkb25uw6llcyB1bmlxdWVtZW50KSwgQmx1ZXRvb3RoIDUuMCwgR1BTLCBBLUdQUywgTkZDLCBXaS1GaSBhYy9iL2cvbiwgVVNCIFR5cGUgQyBDYXB0ZXVycyA6IEFjY8OpbMOpcm9tw6h0cmUsIGNhcHRldXIgZGUgbHVtaW5vc2l0w6ksIGJvdXNzb3VsZSwgZ3lyb3Njb3BlIEJhdHRlcmllIGRlIDkgNjYwIG1BaCBMaS1Jb24sIHJlbXBsYcOnYWJsZSBwYXIgbOKAmXV0aWxpc2F0ZXVyIENlcnRpZmnDqSBJUDY1IERpbWVuc2lvbnMgKEwgeCBIIHggUCkgOiAyMjggeCAxNTAgeCAxMiw3IG1tIFBvaWRzIDogNTI3IGdcIixcclxuICAgICAgICBpbWc6IFwiL2J1aWxkL2ltYWdlcy9pdGVtL3RhYmxldHRlLXRhY3RpbGUucG5nXCIsXHJcbiAgICAgICAgaHJlZjogXCIvbWF0ZXJpZWwvZGVza3RvcC90YWJsZXR0ZS10YWN0aWxlLWV0NTZcIixcclxuICAgICAgICBhdmFpbGFibGU6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEwLFxyXG4gICAgICAgIG5hbWU6IFwiSW1wcmltYW50ZSBCcm90aGVyXCIsXHJcbiAgICAgICAgYWx0OiBcIkltcHJpbWFudGVcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJkZXNrdG9wXCIsXHJcbiAgICAgICAgZW1wbGFjZW1lbnQ6IFwiU2FsbGUgZGUgc3RvY2thZ2UgM1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxhIE1GQy1MMzcxMENXIGRlIEJyb3RoZXIgZXN0IHVuZSBpbXByaW1hbnRlIG11bHRpZm9uY3Rpb24gNC1lbi0xIHF1aSBwb3Nzw6hkZSBkZSBub21icmV1eCBhdG91dHMgcXVpIHZvbnQgYW3DqWxpb3JlciB2b3RyZSByZW5kZW1lbnQuIENldHRlIGltcHJpbWFudGUgc2lsZW5jaWV1c2UgZXQgY29tcGFjdGUgcG9zc8OoZGUgZGUgbm9tYnJldXNlcyBmb25jdGlvbm5hbGl0w6lzLCBkZXMgdml0ZXNzZXMgZCdpbXByZXNzaW9uIMOpbGV2w6llcyBldCBkJ3VuZSBjb25uZXhpb24gcsOpc2VhdSBzYW5zIGZpbCBpbnTDqWdyw6kuXCIsXHJcbiAgICAgICAgY2FyYWN0ZXJpc3RpcXVlczogXCJWaXRlc3NlIGTigJlpbXByZXNzaW9uIGp1c3F14oCZw6AgMTggcGFnZXMgcGFyIG1pbnV0ZSBUZWNobm9sb2dpZSBMRUQgVGFpbGxlIG1heGltYWxlIGR1IHBhcGllciA6IEE0IMOJY3JhbiB0YWN0aWxlIGNvdWxldXIgZGUgOS4zIGNtIGFmaW4gZGUgZmFjaWxpdGVyIHZvcyBpbXByZXNzaW9ucyBCYWMgcGFwaWVyIGRlIDI1MCBmZXVpbGxlcyBldCBjaGFyZ2V1ciBhdXRvbWF0aXF1ZSBkZSBkb2N1bWVudHMgZGUgNTAgZmV1aWxsZXMgQ29ubmVjdGl2aXTDqXMgVVNCIGV0IHLDqXNlYXUgV2ktRmkgQ29ubmVjdGl2aXTDqSBtb2JpbGUgOiBBaXJQcmludCwgQ29ydGFkbyBDbG91ZCBQcmludCwgR29vZ2xlIENsb3VkIFByaW50IDIuMCwgaVByaW50JlNjYW4sIEJyb3RoZXIgUHJpbnQgU2VydmljZSBQbHVnaW4sIE1vcHJpYSBJbXByZXNzaW9ucyBzaWxlbmNpZXVzZXMgOiBtb2lucyBkZSA0NWRCIE3DqW1vaXJlIGRlIDUxMiBNbyBNYXTDqXJpYXV4IHJvYnVzdGVzIGV0IGR1cmFibGVzXCIsXHJcbiAgICAgICAgaW1nOiBcIi9idWlsZC9pbWFnZXMvaXRlbS9pbXByaW1hbnRlLnBuZ1wiLFxyXG4gICAgICAgIGhyZWY6IFwiL21hdGVyaWVsL2Rlc2t0b3AvaW1wcmltYW50ZS1icm90aGVyXCIsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxMSxcclxuICAgICAgICBuYW1lOiBcIkNsZWYgdXNiIEtpbmdzdG9uXCIsXHJcbiAgICAgICAgYWx0OiBcIkNsZWYgdXNiXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiZGVza3RvcFwiLFxyXG4gICAgICAgIGVtcGxhY2VtZW50OiBcIlNhbGxlIGRlIHN0b2NrYWdlIDNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMYSBjbMOpIERhdGFUcmF2ZWxlciBNYXggZGUgS2luZ3N0b24gZXN0IHVuZSBjbMOpIFVTQiBxdWkgZXN0IGRvdMOpZSBkJ3VuZSBpbnRlcmZhY2UgVVNCIDMuMSBUeXBlIEMgYWZpbiBkJ29mZnJpciBkZXMgZMOpYml0cyBkZSBsZWN0dXJlIHBvdXZhbnQgYXR0ZWluZHJlIDEwMDAgTW8vcyBldCBkJ8OpY3JpdHVyZSBkZSA5MDAgTW8vcy5cIixcclxuICAgICAgICBjYXJhY3RlcmlzdGlxdWVzOiBcIkNhcGFjaXTDqSBkZSAyNTYgR28gSW50ZXJmYWNlIFVTQiAzLjEgVHlwZSBDIETDqWJpdCBlbiBsZWN0dXJlIDoganVzcXUnw6AgMTAwMCBNby9zIETDqWJpdCBlbiDDqWNyaXR1cmUgOiBqdXNxdSfDoCA5MDAgTW8vcyBDb21wYXRpYmlsaXTDqSA6IFdpbmRvd3MgMTEvMTAvOC4xLCBNYWMgT1MgKHYuMTAuMTQueCArKSwgTGludXggKHYuIDIuNi54ICspLCBDaHJvbWUgT1NcIixcclxuICAgICAgICBpbWc6IFwiL2J1aWxkL2ltYWdlcy9pdGVtL2NsZWYtdXNiLnBuZ1wiLFxyXG4gICAgICAgIGhyZWY6IFwiL21hdGVyaWVsL2Rlc2t0b3AvY2xlZi11c2Ita2luZ3N0b25cIixcclxuICAgICAgICBhdmFpbGFibGU6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEyLFxyXG4gICAgICAgIG5hbWU6IFwiU1NEIGV4dGVybmUgc2Ftc3VuZ1wiLFxyXG4gICAgICAgIGFsdDogXCJEaXNxdWUgZHVyIGV4dGVybmVcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJkZXNrdG9wXCIsXHJcbiAgICAgICAgZW1wbGFjZW1lbnQ6IFwiU2FsbGUgZGUgc3RvY2thZ2UgM1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxlIFNhbXN1bmcgVDcgU2hpZWxkIGVzdCB1biBTU0QgZXh0ZXJuZSB1bHRyYS1yYXBpZGUgZXQgdWx0cmEtcsOpc2lzdGFudC4gSWwgb2ZmcmUgZGVzIHZpdGVzc2VzIGZ1bGd1cmFudGVzIHBvdXIgbGUgdHJhbnNmZXJ0IGRlIGRvbm7DqWVzIGV0IGLDqW7DqWZpY2llIGQndW5lIHByb3RlY3Rpb24gYXZhbmPDqWUgKElQNjUpIGNvbnRyZSBsJ2VhdSwgbGEgcG91c3Npw6hyZSBldCBsZXMgY2h1dGVzIChqdXNxdSfDoCAzIG0pLiBJbCBlc3QgY29tcGF0aWJsZSBQQywgTWFjLCBBbmRyb2lkLCBjb25zb2xlcyBkZSBqZXV4IGV0IHBsdXMuXCIsXHJcbiAgICAgICAgY2FyYWN0ZXJpc3RpcXVlczogXCJEw6lzaWduYXRpb24gU2Ftc3VuZyBTU0QgRXh0ZXJuZSBUNyBTaGllbGQgMSBUbyBCbGV1IE1hcnF1ZVNhbXN1bmcgTW9kw6hsZU1VLVBFMVQwUi9FVSBHYXJhbnRpZTMgYW5zIChjb25zdHJ1Y3RldXIpIFBSSU5DSVBBTEVTIENBUkFDVMOJUklTVElRVUVTIENhcGFjaXTDqTEgVG8gRm9ybWF0IGRlIGRpc3F1ZSBleHRlcm5lVWx0cmEtcG9ydGFibGUgVHlwZSBkZSBEaXNxdWUgU3lzdMOobWVTU0QgKFNvbGlkIFN0YXRlIERyaXZlKSBJbnRlcmZhY2UgYXZlYyBsJ29yZGluYXRldXJVU0IgMy4xIEZvcm1hdCBkZSBEaXNxdWUyIDEvMiBPUyBzdXBwb3J0w6kocylNaWNyb3NvZnQgV2luZG93cyA3ICwgTWljcm9zb2Z0IFdpbmRvd3MgMTAgLCBNYWMgT1MgWCAxMC4xMCBvdSBzdXDDqXJpZXVyICwgTWljcm9zb2Z0IFdpbmRvd3MgMTEgLCBBbmRyb2lkIFNQw4lDSUZJQ0FUSU9OUyBESVNRVUUgVHlwZSBkZSBEaXNxdWVTU0QgKFNvbGlkIFN0YXRlIERyaXZlKSBSQUlEIHN1cHBvcnTDqW5vbiBGT05DVElPTlMgU1DDiUNJQUxFUyBSw6lzaXN0YW50IGF1eCBjaG9jc291aSBTdG9ja2FnZSBlbiBsaWduZW5vbiBDcnlwdGFnZSBkZXMgZG9ubsOpZXNvdWkgQ0FSQUNUw4lSSVNUSVFVRVMgUEhZU0lRVUVTIE1hdMOpcmlhdUFCUy9BbHVtaW5pdW0gLCBFbGFzdG9tw6hyZSBDb3VsZXVyQmxldSBMYXJnZXVyODggbW0gRXBhaXNzZXVyMTMgbW0gUHJvZm9uZGV1cjU5IG1tIFBvaWRzOTggZ1wiLFxyXG4gICAgICAgIGltZzogXCIvYnVpbGQvaW1hZ2VzL2l0ZW0vZGlzcXVlLWR1ci1leHRlcm5lLnBuZ1wiLFxyXG4gICAgICAgIGhyZWY6IFwiL21hdGVyaWVsL2Rlc2t0b3Avc3NkLWV4dGVybmUtc2Ftc3VuZ1wiLFxyXG4gICAgICAgIGF2YWlsYWJsZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMTMsXHJcbiAgICAgICAgbmFtZTogXCJWaWRlb3Byb2plY3RldXIgRXBzb24gRUItVzQ5XCIsXHJcbiAgICAgICAgYWx0OiBcIlZpZGVvcHJvamVjdGV1clwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcInLDqXVuaW9uXCIsXHJcbiAgICAgICAgZW1wbGFjZW1lbnQ6IFwiU2FsbGUgZGUgc3RvY2thZ2UgNFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNlIHZpZMOpb3Byb2plY3RldXIgbW9iaWxlIHByb3Bvc8OpIHBhciBsYSBtYXJxdWUgRVBTT04gdm91cyBvZmZyZSBsYSBsaWJlcnTDqSBkZSBs4oCZaW5zdGFsbGVyIHByZXNxdWUgcGFydG91dC4gQ+KAmWVzdCB1biBvdXRpbCBkZSBwcm9qZWN0aW9uIGR1cmFibGUgcXVpIGdhcmFudGl0IHBsdXNpZXVycyBhbm7DqWVzIGRlIHBlcmZvcm1hbmNlcyBwb3VyIHRvdXRlcyB2b3MgcsOpdW5pb25zIGV0IHByw6lzZW50YXRpb25zLiBMZSBkZXNpZ24gw6lsw6lnYW50IGV0IGNvbXBhY3QgZGUgY2Ugdmlkw6lvcHJvamVjdGV1ciwgYWluc2kgcXVlIHNlcyBmYWlibGVzIGRpbWVuc2lvbnMgdm91cyBwZXJtZXR0ZW50IGTigJl1dGlsaXNlciBzYSByw6lzb2x1dGlvbiBXWEdBIHBhcnRvdXQuIERlIHBsdXMsIGNlIHZpZMOpb3Byb2plY3RldXIgw6AgbGFtcGUgcHLDqXNlbnRlIHVuZSBkdXLDqWUgZOKAmXV0aWxpc2F0aW9uIGVuIG1vZGUgw6ljbyBkZSBwcsOocyBkZSAxNyAwMDAgaGV1cmVzLlwiLFxyXG4gICAgICAgIGNhcmFjdGVyaXN0aXF1ZXM6IFwiVGVjaG5vbG9naWUgZGUgcHJvamVjdGlvbiAzTENEICsgT2J0dXJhdGV1ciBSVkIgw6AgY3Jpc3RhdXggbGlxdWlkZXMgTHVtaW5vc2l0w6kgY291bGV1ciBldCBsdW1pw6hyZSBibGFuY2hlIEp1c3F14oCZw6AgMzgwMCBsdW1lbnMgUsOpc29sdXRpb24gV1hHQSwgMTI4MCB4IDgwMCwgMTY6MTAgUmVwcm9kdWN0aW9uIGRlcyBjb3VsZXVycyBKdXNxdeKAmcOgIDEsMDcgbWlsbGlhcmRzIGRlIGNvdWxldXJzIFRhaWxsZSBkZSBs4oCZaW1hZ2UgRW50cmUgMzMgZXQgMzIwIHBvdWNlcyBDb250cmFzdGUgMTYwMDA6MSBEaXN0YW5jZSBmb2NhbGUgMTYsOSBtbSAtIDIwLDI4IG1tIE9mZnNldCAxMDoxIERpbWVuc2lvbnMgbmV0dGVzIDMwMuKAjiB4IDI0OSB4IDg3IG1tIChMYXJnZXVyIHggUHJvZm9uZGV1ciB4IEhhdXRldXIpIFBvaWRzIDIsNyBLZ1wiLFxyXG4gICAgICAgIGltZzogXCIvYnVpbGQvaW1hZ2VzL2l0ZW0vdmlkZW9wcm9qZWN0ZXVyLnBuZ1wiLFxyXG4gICAgICAgIGhyZWY6IFwiL21hdGVyaWVsL3JldW5pb24vdmlkZW9wcm9qZWN0ZXVyLWVwc29uLWViLXc0OVwiLFxyXG4gICAgICAgIGF2YWlsYWJsZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMTQsXHJcbiAgICAgICAgbmFtZTogXCLDiWNyYW4gU2Ftc3VuZyBRTUJcIixcclxuICAgICAgICBhbHQ6IFwiw4ljcmFuXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwicsOpdW5pb25cIixcclxuICAgICAgICBlbXBsYWNlbWVudDogXCJTYWxsZSBkZSBzdG9ja2FnZSA0XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVXBzY2FsaW5nIGV0IER5bmFtaWMgQ3J5c3RhbCBDb2xvcnMgc29udCBsZXMgdGVjaG5vbG9naWVzIGRlIGxhIG1hcnF1ZSBTQU1TVU5HIHF1aSBnYXJhbnRpc3NlbnQgw6AgY2V0IMOpY3JhbiBwcm9mZXNzaW9ubmVsIHVuZSBjb2xvcmltw6l0cmllIGluY3JveWFibGUgcG91ciBkZXMgY29udGVudXMgdG91am91cnMgcGx1cyByw6lhbGlzdGVzIGRhbnMgdG91cyB2b3MgZW52aXJvbm5lbWVudHMgaW50w6lyaWV1cnMuIENldHRlIGdhbW1lIGTigJnDqWNyYW5zIHByb2Zlc3Npb25uZWxzIFNBTVNVTkcgUU1CIHZvdXMgb2ZmcmUgdW5lIHZpc2liaWxpdMOpIHBhcmZhaXRlIMOgIHRvdXQgbW9tZW50IGRlIGxhIGpvdXJuw6llIGNhciBlbGxlIGVzdCBkb3TDqWUgZOKAmXVuZSBoYXV0ZSBsdW1pbm9zaXTDqSwgZOKAmXVuZSBkYWxsZSBtYXRlIGFudGktcmVmbGV0cyBldCBk4oCZdW4gZ3JhbmQgYW5nbGUgZGUgdmlzaW9uIGRlIDE3OMKwLlwiLFxyXG4gICAgICAgIGNhcmFjdGVyaXN0aXF1ZXM6IFwiVHlwZSBFZGdlIExFRCBCTFUgVGFpbGxlIGVuIGNlbnRpbcOodHJlIDk2Ny41eDU1Ny43eDQ4LjMgTHVtaW5vc2l0w6kgNTAwIGNkL20yIFR5cGUgZGUgZGFsbGUgVkEgUG9pZHMgbmV0IDEwIGtnIENvbnNvbW1hdGlvbiBlbiB2ZWlsbGUgMC41VyBWRVNBIDIwMHgyMDAgVGVjaG5vbG9naWUgVXBzY2FsbGluZyBTeXN0w6htZSBk4oCZZXhwbG9pdGF0aW9uIFRpemVuIDYuNVwiLFxyXG4gICAgICAgIGltZzogXCIvYnVpbGQvaW1hZ2VzL2l0ZW0vZWNyYW4ucG5nXCIsXHJcbiAgICAgICAgaHJlZjogXCIvbWF0ZXJpZWwvcmV1bmlvbi9lY3Jhbi1zYW1zdW5nLXFtYlwiLFxyXG4gICAgICAgIGF2YWlsYWJsZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMTUsXHJcbiAgICAgICAgbmFtZTogXCJQYXBlcmJvYXJkIGRpZ2l0YWwgU2Ftc3VuZyBGbGlwIDRcIixcclxuICAgICAgICBhbHQ6IFwiUGFwZXJib2FyZCBkaWdpdGFsXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwicsOpdW5pb25cIixcclxuICAgICAgICBlbXBsYWNlbWVudDogXCJTYWxsZSBkZSBzdG9ja2FnZSA0XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTGUgUGFwZXJib2FyZCBkaWdpdGFsIFNhbXN1bmcgRmxpcCA0IGVzdCB1biDDqWNyYW4gdGFjdGlsZSBkZSA3NSBvdSA4NSBwb3VjZXMgZG90w6kgZOKAmXVuZSByw6lzb2x1dGlvbiA0Sy4gSWwgZG9ubmUgbGEgcG9zc2liaWxpdMOpIGRlIHByZW5kcmUgZGVzIG5vdGVzLCBk4oCZaW1wb3J0ZXIgZGVzIGZpY2hpZXJzLCBkZSBwYXJ0YWdlciBkdSBjb250ZW51IGV0IGJpZW4gcGx1cyBlbmNvcmUgISBD4oCZZXN0IGzigJlvdXRpbCBpbmNvbnRvdXJuYWJsZSBlbiBzYWxsZSBkZSByw6l1bmlvbiBwb3VyIGNvbGxhYm9yZXIgZWZmaWNhY2VtZW50LlwiLFxyXG4gICAgICAgIGNhcmFjdGVyaXN0aXF1ZXM6IFwiVGFpbGxlIDU1JycsIDY1JycsIDc14oCdIGV0IDg14oCdIFLDqXNvbHV0aW9uIDMgODQwIHggMiAxNjAgKHBheXNhZ2UpIEx1bWlub3NpdMOpIDM1MCBjZC9tMiBBbmdsZSBkZSB2aXNpb24gMTc4OjE3OCBIYXV0LXBhcmxldXJzIGludMOpZ3LDqXMgKDEwIFcgeCA0KSBTaWduYWwgZOKAmWVudHLDqWUgMiB4IEhETUkgKDEgYXZhbnQsIDEgYXJyaWXMgHJlKSwgMSB4IERQLCBVU0ItQyAoYXZhbnQpLCAzIHggVVNCICgyIFNvQywgMSBFeHRlcm5hbCkgMSB4IFNsb3QgT1BTIEkvRiBTaWduYWwgZGUgc29ydGllIDEgeCBIRE1JIE91dCAoUGFydGFnZSBk4oCZZcyBY3JhbiksIDEgeCBUb3VjaCBvdXQgMiAoVVNCIFVwc3RyZWFtKSwgU3RlcmVvIE1pbmkgSmFjayBQb2ludHMgZGUgY29udGFjdCBzaW11bHRhbsOpcyA0IHN1ciBTb0MsIDIwIHN1ciBzb3VyY2UgZXh0ZXJuZSBEaW1lbnNpb25zIE5ldHRlcyAvIEJydXRlcyAobW0pIDogNTUgcG91Y2VzIDogMTI5Ny40IHggNzY4LjIgeCA1OS45IDY1IHBvdWNlcyA6IDE1MjIuNCB4IDg5Ny42IHggNjIuOSA3NSBwb3VjZXMgOiAxNzI0IHggMTAyNi4zIHggODkgODUgcG91Y2VzIDogMTk0NS44IHggMTE1MS4xIHggODkgTcOpbW9pcmUgZGUgc3RvY2thZ2UgMzJHQiAoMi42NUdCIG9jY3Vww6kgcGFyIGwnTy9TLCAyOS4zNUdCIGRpc3BvbmlibGUpIFZFU0EgNDAwKjQwMFwiLFxyXG4gICAgICAgIGltZzogXCIvYnVpbGQvaW1hZ2VzL2l0ZW0vcGFwZXJib2FyZC1kaWdpdGFsLnBuZ1wiLFxyXG4gICAgICAgIGhyZWY6IFwiL21hdGVyaWVsL3JldW5pb24vcGFwZXJib2FyZC1kaWdpdGFsLXNhbXN1bmctZmxpcC00XCIsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlXHJcbiAgICB9XHJcbl0iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuLi9qcy9ib290c3RyYXAnO1xuXG5pbXBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfSBmcm9tICdAc3ltZm9ueS91eC1yZWFjdCc7XG5yZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuLi9yZWFjdC9jb250cm9sbGVycycsIHRydWUsIC9cXC4oanx0KXN4PyQvKSk7IiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4uL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluayc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvcHlyaWdodCdcbmltcG9ydCBJdGVtU2tlbGV0dGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9za2VsZXRvbi9tYXRlcmllbCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvYWRpbmdDb21wIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbG9hZGluZydcblxuZnVuY3Rpb24gcmFuZG9tVGltZShtaW4sIG1heCkgeyAvLyBtaW4gYW5kIG1heCBpbmNsdWRlZCBcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbilcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjdWVpbCgpIHtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9LCByYW5kb21UaW1lKDgwMCwgMTAwMCkpXG4gIH0sIFtdKVxuXG4gIGZ1bmN0aW9uIHJlbW92ZU9wYWNpdHkoKSB7XG5cbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBpZiAoZWxlbSkge1xuICAgICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICB9XG5cbiAgICBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nXCIpO1xuICAgIGlmIChlbGVtKSB7XG4gICAgICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMb2FkaW5nQ29tcCAvPlxuICAgICAgPG1haW4gaWQ9XCJtYWluXCIgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInBhbmVsSGVhZGVyXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2N1ZWlsXCI+XG4gICAgICAgICAgICAgICAgICBBY2N1ZWlsXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgTWF0ZXJpZWxcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPEl0ZW1Ta2VsZXR0ZSBwYWdlPVwiXCIgLz5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICB7bG9hZGluZyA/ICg8PjwvPikgOlxuICAgICAgICAoPD57cmVtb3ZlT3BhY2l0eSgpfTwvPil9XG4gICAgPC8+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbExlZnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdEZvcm1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0Rm9ybUNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9idWlsZC9pbWFnZXMvZGlnaXRsaWdodC5zdmdcIiBhbHQ9XCJEaWdpdExpZ2h0XCIgd2lkdGg9XCI1MDBcIiBoZWlnaHQ9XCI1MDBcIiAvPlxyXG4gICAgICAgICAgICAgIDxoMz5MZSBnZXN0aW9ubmFpcmUgZGUgcsOpc2VydmF0aW9uIGV0IGRlIHByw6hzIGRlIG1hdMOpcmllbHMgY2VudHJhbGlzw6lzPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsUmlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRGb3JtXCI+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWxSaWdodFRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+Q29ubmV4aW9uPC9oMz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImxvZ2luXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIklkZW50aWZpYW50XCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk1vdCBkZSBwYXNzZVwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlNlIGNvbm5lY3RlclxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWxSaWdodENvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgIDxhPlZvdXMgYXZleiBiZXNvaW4gZCdhaWRlID8mbmJzcDs8L2E+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwibWFpbHRvOmNvcmFudGluLmJlcmdlckBob3RtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgPkNvbnRhY3Rlei1ub3VzPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59IiwiaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hdmJhcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb3B5cmlnaHQnO1xuaW1wb3J0IEl0ZW1Ta2VsZXR0ZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3NrZWxldG9uL21hdGVyaWVsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlbGVwaG9uaXF1ZSgpIHtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuXG4gICAgICAgICAgPEhlYWRlciB0aXRsZT1cIkRlc2t0b3BcIiBpdGVtPVwiXCIgLz5cbiAgICAgICAgICA8TmF2YmFyIC8+XG5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPEl0ZW1Ta2VsZXR0ZSBwYWdlPVwiZGVza3RvcFwiLz5cbiAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn0iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvcHlyaWdodCc7XG5pbXBvcnQgSXRlbVNrZWxldHRlIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvc2tlbGV0b24vbWF0ZXJpZWxfZGV0YWlscyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtKHByb3BzKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cblxuICAgICAgICAgIDxIZWFkZXIgdGl0bGU9e3Byb3BzLmNhdH0gaXRlbT17cHJvcHMuaXRlbX0gLz5cbiAgICAgICAgICA8TmF2YmFyIC8+XG5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJJbmZvSXRlbVwiPlxuICAgICAgICAgICAgICA8SXRlbVNrZWxldHRlIGl0ZW1OYW1lPXtwcm9wcy5pdGVtfS8+XG4gICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59IiwiaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hdmJhcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb3B5cmlnaHQnO1xuaW1wb3J0IEl0ZW1Ta2VsZXR0ZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3NrZWxldG9uL21hdGVyaWVsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc2VhdSgpIHtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuXG4gICAgICAgICAgPEhlYWRlciB0aXRsZT1cIlLDqXNlYXVcIiAgaXRlbT1cIlwiIC8+XG4gICAgICAgICAgPE5hdmJhciAvPlxuXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxJdGVtU2tlbGV0dGUgcGFnZT1cInLDqXNlYXVcIi8+XG4gICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59IiwiaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hdmJhcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb3B5cmlnaHQnO1xuaW1wb3J0IEl0ZW1Ta2VsZXR0ZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3NrZWxldG9uL21hdGVyaWVsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlbGVwaG9uaXF1ZSgpIHtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuXG4gICAgICAgICAgPEhlYWRlciB0aXRsZT1cIlLDqXVuaW9uXCIgaXRlbT1cIlwiIC8+XG4gICAgICAgICAgPE5hdmJhciAvPlxuXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxJdGVtU2tlbGV0dGUgcGFnZT1cInLDqXVuaW9uXCIvPlxuICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufSIsImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29weXJpZ2h0JztcbmltcG9ydCBJdGVtU2tlbGV0dGUgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9za2VsZXRvbi9tYXRlcmllbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWxlcGhvbmlxdWUoKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cblxuICAgICAgICAgIDxIZWFkZXIgdGl0bGU9XCJUw6lsw6lwaG9uaXF1ZVwiICBpdGVtPVwiXCIgLz5cbiAgICAgICAgICA8TmF2YmFyIC8+XG5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPEl0ZW1Ta2VsZXR0ZSBwYWdlPVwidMOpbMOpcGhvbmlxdWVcIi8+XG4gICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59IiwiZnVuY3Rpb24gcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCByZWFjdENvbnRyb2xsZXJzID0ge307XG4gICAgY29uc3QgaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzID0gKHIpID0+IHtcbiAgICAgICAgci5rZXlzKCkuZm9yRWFjaCgoa2V5KSA9PiAocmVhY3RDb250cm9sbGVyc1trZXldID0gcihrZXkpLmRlZmF1bHQpKTtcbiAgICB9O1xuICAgIGltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyhjb250ZXh0KTtcbiAgICB3aW5kb3cucmVzb2x2ZVJlYWN0Q29tcG9uZW50ID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gcmVhY3RDb250cm9sbGVyc1tgLi8ke25hbWV9LmpzeGBdIHx8IHJlYWN0Q29udHJvbGxlcnNbYC4vJHtuYW1lfS50c3hgXTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0IGNvbnRyb2xsZXIgXCInICsgbmFtZSArICdcIiBkb2VzIG5vdCBleGlzdCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJlcXVpcmUkJDAgZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG52YXIgY3JlYXRlUm9vdDtcblxudmFyIG0gPSByZXF1aXJlJCQwO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgY3JlYXRlUm9vdCA9IG0uY3JlYXRlUm9vdDtcbiAgbS5oeWRyYXRlUm9vdDtcbn0gZWxzZSB7XG4gIHZhciBpID0gbS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcbiAgY3JlYXRlUm9vdCA9IGZ1bmN0aW9uKGMsIG8pIHtcbiAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBtLmNyZWF0ZVJvb3QoYywgbyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHNWYWx1ZSA/IHRoaXMucHJvcHNWYWx1ZSA6IG51bGw7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcsIHsgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFZhbHVlLCBwcm9wczogcHJvcHMgfSk7XG4gICAgICAgIGlmICghdGhpcy5jb21wb25lbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb21wb25lbnQgc3BlY2lmaWVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQodGhpcy5jb21wb25lbnRWYWx1ZSk7XG4gICAgICAgIHRoaXMuX3JlbmRlclJlYWN0RWxlbWVudChSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMsIG51bGwpKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudE5hbWU6IHRoaXMuY29tcG9uZW50VmFsdWUsXG4gICAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICAgICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yb290LnVubW91bnQoKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCd1bm1vdW50Jywge1xuICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHNWYWx1ZSA/IHRoaXMucHJvcHNWYWx1ZSA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcmVuZGVyUmVhY3RFbGVtZW50KHJlYWN0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICBpZiAoIWVsZW1lbnQucm9vdCkge1xuICAgICAgICAgICAgZWxlbWVudC5yb290ID0gY3JlYXRlUm9vdCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQucm9vdC5yZW5kZXIocmVhY3RFbGVtZW50KTtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQsIHByZWZpeDogJ3JlYWN0JyB9KTtcbiAgICB9XG59XG5kZWZhdWx0XzEudmFsdWVzID0ge1xuICAgIGNvbXBvbmVudDogU3RyaW5nLFxuICAgIHByb3BzOiBPYmplY3QsXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0XzEgYXMgZGVmYXVsdCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJSZWFjdCIsImZvb3RlciIsImZvbnRXZWlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJvcGFjaXR5IiwiY29sb3IiLCJ0cmFuc2l0aW9uIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZENvbG9yIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiTGluayIsImNhcGl0YWxpemVXb3JkcyIsInN0ciIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJtYXAiLCJ3b3JkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iLCJub3JtYWxpemUiLCJyZXBsYWNlIiwicmVwbGFjZUFsbCIsImhlYWRlciIsInRpdGxlIiwiaXRlbSIsImxlbmd0aCIsIklURU1TIiwidG90YWwiLCJDYXRlZ29yeSIsImZpbHRlciIsImNhdGVnb3J5IiwiYXZhaWxhYmxlIiwidW5hdmFpbGFibGUiLCJpdGVtU3RhdHMiLCJSaW5ncyIsImxvYWRpbmdDb21wIiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJtYXJnaW4iLCJ3aWR0aCIsIkl0ZW0iLCJocmVmIiwiaW1nIiwiYWx0Iiwib2JqZWN0Rml0IiwibmFtZSIsIkJ1dHRvbiIsInpvb20iLCJlIiwiem9vbWVyIiwiY3VycmVudFRhcmdldCIsIm9mZnNldFgiLCJvZmZzZXRZIiwicGFnZVgiLCJwYWdlWSIsIngiLCJvZmZzZXRXaWR0aCIsInkiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRJbWFnZSIsImVtcGxhY2VtZW50IiwiaWQiLCJkZXNjcmlwdGlvbiIsImNhcmFjdGVyaXN0aXF1ZXMiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsInVzZUVmZmVjdCIsIm5hdmJhciIsIlNrZWxldG9uIiwidXNlU3RhdGUiLCJJdGVtU3RhdHMiLCJpdGVtcyIsIlNrZWxldG9uQnJlYWRjcnVtYiIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJTa2VsZXRvbkl0ZW0iLCJyYW5kb21UaW1lIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiU2tlbGV0dGUiLCJwYWdlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRUaW1lb3V0IiwiQXJyYXkiLCJrZXlzIiwiaXRlbU5hbWUiLCJJdGVtSW1hZ2UiLCJUZXh0VGl0bGUiLCJUZXh0RGVzY3JpcHRpb24iLCJhbGlnbkNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwicmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIiwicmVxdWlyZSIsImNvbnRleHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiTmF2YmFyIiwiRm9vdGVyIiwiSXRlbVNrZWxldHRlIiwidXNlUmVmIiwiTG9hZGluZ0NvbXAiLCJBY2N1ZWlsIiwicmVtb3ZlT3BhY2l0eSIsImVsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiVGV4dEZpZWxkIiwiTG9naW4iLCJIZWFkZXIiLCJUZWxlcGhvbmlxdWUiLCJwcm9wcyIsImNhdCIsIlJlc2VhdSIsInJlYWN0Q29udHJvbGxlcnMiLCJpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMiLCJyIiwiZm9yRWFjaCIsImtleSIsIndpbmRvdyIsInJlc29sdmVSZWFjdENvbXBvbmVudCIsImNvbXBvbmVudCIsIkVycm9yIiwicmVxdWlyZSQkMCIsImNyZWF0ZVJvb3QiLCJtIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiaHlkcmF0ZVJvb3QiLCJpIiwiX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQiLCJjIiwibyIsInVzaW5nQ2xpZW50RW50cnlQb2ludCIsImRlZmF1bHRfMSIsInByb3BzVmFsdWUiLCJkaXNwYXRjaEV2ZW50IiwiY29tcG9uZW50VmFsdWUiLCJfcmVuZGVyUmVhY3RFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbXBvbmVudE5hbWUiLCJyb290IiwidW5tb3VudCIsInJlYWN0RWxlbWVudCIsInJlbmRlciIsInBheWxvYWQiLCJkaXNwYXRjaCIsImRldGFpbCIsInByZWZpeCIsInZhbHVlcyIsIlN0cmluZyIsIk9iamVjdCIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9