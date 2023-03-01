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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVCQSxpRUFBZTtBQUNmLDhCQUE4QiwyTUFBZ0Y7QUFDOUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGK0M7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0VBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBLE9BVUksbUJBQVU7TUFDTixJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxHQUFHLG1FQUFtRTtJQUNsRztFQUFDO0VBQUE7QUFBQSxFQUh3QkYsMkRBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hiO0FBRVgsU0FBU0ksTUFBTSxHQUFHO0VBQzdCLG9CQUNJO0lBQUssS0FBSyxFQUFFO01BQ1JDLFVBQVUsRUFBRSxNQUFNO01BQ2xCQyxjQUFjLEVBQUUsTUFBTTtNQUN0QkMsT0FBTyxFQUFFLE1BQU07TUFDZkMsTUFBTSxFQUFFLE1BQU07TUFDZEMsT0FBTyxFQUFFLEtBQUs7TUFDZEMsS0FBSyxFQUFFLFNBQVM7TUFDaEJDLFVBQVUsRUFBRSw2QkFBNkI7TUFDekNDLFVBQVUsRUFBRSxXQUFXO01BQ3ZCQyxRQUFRLEVBQUUsU0FBUztNQUNuQkMsY0FBYyxFQUFFLFFBQVE7TUFDeEJDLFVBQVUsRUFBRSxRQUFRO01BQ3BCQyxlQUFlLEVBQUU7SUFDckI7RUFBRSxHQUFDLG1CQUFjLEVBQUMsSUFBSUMsSUFBSSxFQUFFLENBQUNDLFdBQVcsRUFBRSxFQUFDLCtCQUF1QixDQUFNO0FBRWhGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnNDO0FBQ1o7QUFFMUIsU0FBU0UsZUFBZSxDQUFDQyxHQUFHLEVBQUU7RUFDMUIsT0FBT0EsR0FBRyxDQUNQQyxXQUFXLEVBQUUsQ0FDYkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUNWQyxHQUFHLENBQUMsVUFBQ0MsSUFBSTtJQUFBLE9BQUtBLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxXQUFXLEVBQUUsR0FBR0YsSUFBSSxDQUFDRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0VBQUEsRUFBQyxDQUMzREMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQ0MsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQ1YsV0FBVyxFQUFFO0FBQ2xHO0FBQUM7QUFFWSxTQUFTVyxNQUFNLE9BQWtCO0VBQUEsSUFBZkMsS0FBSyxRQUFMQSxLQUFLO0lBQUVDLElBQUksUUFBSkEsSUFBSTtFQUN4QyxvQkFDSSx1SUFDSTtJQUFRLFNBQVMsRUFBQztFQUFhLGdCQUMzQjtJQUFJLFNBQVMsRUFBQztFQUFZLGdCQUN0QixvRkFDSSwyREFBQywwREFBSTtJQUFDLElBQUksRUFBQztFQUFVLEdBQUMsU0FFdEIsQ0FBTyxDQUNOLGVBQ0wsb0ZBQ0ksMkRBQUMsMERBQUk7SUFBQyxJQUFJLEVBQUM7RUFBVSxHQUFDLFVBRXRCLENBQU8sQ0FDTixFQUVKQSxJQUFJLENBQUNDLE1BQU0sSUFBSSxDQUFDLGdCQUViLHVFQUNLRixLQUFLLENBQ0wsZ0JBQ0wsb0ZBQ0ksMkRBQUMsMERBQUk7SUFBQyxJQUFJLHNCQUFlZCxlQUFlLENBQUNjLEtBQUssQ0FBQztFQUFHLEdBQzdDQSxLQUFLLENBQ0gsQ0FDTixFQUdSQyxJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDLGdCQUVaLG9GQUNJLHlFQUFPaEIsZUFBZSxDQUFDZSxJQUFJLENBQUMsQ0FBQ1QsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxXQUFXLEVBQUUsR0FBR1AsZUFBZSxDQUFDZSxJQUFJLENBQUNQLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFRLENBQzVGLEdBR0wsSUFBSSxDQUdQLENBQ0EsQ0FDVjtBQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRHlDO0FBQ2Y7QUFFMUIsSUFBTVUsS0FBSyxHQUFHLFNBQVJBLEtBQUssQ0FBYUMsUUFBUSxFQUFFO0VBQ2hDLElBQUlBLFFBQVEsSUFBSSxJQUFJLElBQUlBLFFBQVEsSUFBSSxFQUFFLEVBQUU7SUFDdEM7TUFBRSxPQUFPRix5REFBWSxDQUFDLFVBQUFGLElBQUk7UUFBQSxPQUFJQSxJQUFJO01BQUEsRUFBQyxDQUFDQyxNQUFNO0lBQUM7RUFDN0MsQ0FBQyxNQUNJO0lBQ0g7TUFBRSxPQUFPQyx5REFBWSxDQUFDLFVBQUFGLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUNNLFFBQVEsSUFBSUYsUUFBUTtNQUFBLEVBQUMsQ0FBQ0gsTUFBTTtJQUFDO0VBQ2xFO0FBQ0YsQ0FBQztBQUVELElBQU1NLFNBQVMsR0FBRyxTQUFaQSxTQUFTLENBQWFILFFBQVEsRUFBRTtFQUNwQyxJQUFJQSxRQUFRLElBQUksSUFBSSxJQUFJQSxRQUFRLElBQUksRUFBRSxFQUFFO0lBQ3RDO01BQ0UsT0FBT0YseURBQVksQ0FBQyxVQUFBRixJQUFJO1FBQUEsT0FBSUEsSUFBSSxDQUFDTyxTQUFTO01BQUEsRUFBQyxDQUN4Q2xCLEdBQUcsQ0FBQyxVQUFDVyxJQUFJO1FBQUEsT0FDUEEsSUFBSTtNQUFBLENBQUMsQ0FBQyxDQUFDQyxNQUFNO0lBQ3BCO0VBQ0YsQ0FBQyxNQUNJO0lBQ0g7TUFDRSxPQUFPQyx5REFBWSxDQUFDLFVBQUFGLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUNNLFFBQVEsSUFBSUYsUUFBUTtNQUFBLEVBQUMsQ0FDbkRDLE1BQU0sQ0FBQyxVQUFBTCxJQUFJO1FBQUEsT0FBSUEsSUFBSSxDQUFDTyxTQUFTO01BQUEsRUFBQyxDQUFDTixNQUFNO0lBQzFDO0VBQ0Y7QUFDRixDQUFDO0FBRUQsSUFBTU8sV0FBVyxHQUFHLFNBQWRBLFdBQVcsQ0FBYUosUUFBUSxFQUFFO0VBQ3RDLElBQUlBLFFBQVEsSUFBSSxJQUFJLElBQUlBLFFBQVEsSUFBSSxFQUFFLEVBQUU7SUFDdEM7TUFDRSxPQUFPRix5REFBWSxDQUFDLFVBQUFGLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUNRLFdBQVc7TUFBQSxFQUFDLENBQzFDbkIsR0FBRyxDQUFDLFVBQUNXLElBQUk7UUFBQSxPQUNQQSxJQUFJO01BQUEsQ0FBQyxDQUFDLENBQUNDLE1BQU07SUFDcEI7RUFDRixDQUFDLE1BQ0k7SUFDSDtNQUNFLE9BQU9DLHlEQUFZLENBQUMsVUFBQUYsSUFBSTtRQUFBLE9BQUlBLElBQUksQ0FBQ00sUUFBUSxJQUFJRixRQUFRO01BQUEsRUFBQyxDQUNuREMsTUFBTSxDQUFDLFVBQUFMLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUNRLFdBQVc7TUFBQSxFQUFDLENBQUNQLE1BQU07SUFDNUM7RUFDRjtBQUNGLENBQUM7QUFFYyxTQUFTUSxTQUFTLE9BQWU7RUFBQSxJQUFaTCxRQUFRLFFBQVJBLFFBQVE7RUFDMUMsb0JBQVE7SUFBSyxTQUFTLEVBQUM7RUFBWSxnQkFDakMseUVBQU0sU0FDRyxFQUFDRCxLQUFLLENBQUNDLFFBQVEsQ0FBQyxDQUNsQixlQUNQLHlFQUFNLGNBQ1EsRUFBQ0csU0FBUyxDQUFDSCxRQUFRLENBQUMsQ0FDM0IsZUFDUCx5RUFBTSxnQkFDVSxFQUFDSSxXQUFXLENBQUNKLFFBQVEsQ0FBQyxDQUMvQixDQUNIO0FBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEMEI7QUFDbUI7QUFFOUIsU0FBU08sV0FBVyxHQUFHO0VBQ2xDLG9CQUNJO0lBQUssRUFBRSxFQUFDLFNBQVM7SUFBQyxLQUFLLEVBQUU7TUFDckJDLFFBQVEsRUFBRSxVQUFVO01BQ3BCQyxHQUFHLEVBQUUsR0FBRztNQUNSQyxNQUFNLEVBQUUsR0FBRztNQUNYQyxJQUFJLEVBQUUsR0FBRztNQUNUQyxLQUFLLEVBQUUsR0FBRztNQUNWQyxNQUFNLEVBQUUsTUFBTTtNQUNkQyxLQUFLLEVBQUUsT0FBTztNQUNkN0MsTUFBTSxFQUFFO0lBQ1o7RUFBRSxnQkFBQywyREFBQyx1REFBSztJQUNELE1BQU0sRUFBQyxLQUFLO0lBQ1osS0FBSyxFQUFDLEtBQUs7SUFDWCxLQUFLLEVBQUMsNEJBQTRCO0lBQ2xDLGNBQWMsRUFBQyxPQUFPO0lBQ3RCLE1BQU0sRUFBQyxNQUFNO0lBQ2IsU0FBUyxFQUFDLHVCQUF1QjtJQUNqQyxZQUFZLEVBQUUsQ0FBQyxDQUFFO0lBQ2pCLFlBQVksRUFBQyxFQUFFO0lBQ2YsT0FBTyxFQUFFO0VBQUssRUFDaEIsQ0FBTTtBQUVwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJxQztBQUNYO0FBRVgsU0FBUzhDLElBQUksT0FBVztFQUFBLElBQVJuQixJQUFJLFFBQUpBLElBQUk7RUFDakMsb0JBQVE7SUFBSyxTQUFTLEVBQUM7RUFBVyxnQkFDaEM7SUFBSyxFQUFFLEVBQUMsV0FBVztJQUFDLFNBQVMsRUFBQztFQUFZLGdCQUN4QywyREFBQywwREFBSTtJQUFDLElBQUksRUFBRUEsSUFBSSxDQUFDb0I7RUFBSyxnQkFDcEI7SUFDRSxHQUFHLEVBQUVwQixJQUFJLENBQUNxQixHQUFJO0lBQ2QsR0FBRyxFQUFFckIsSUFBSSxDQUFDc0IsR0FBSTtJQUNkLEtBQUssRUFBRTtNQUFFQyxTQUFTLEVBQUU7SUFBUSxDQUFFO0lBQzlCLEtBQUssRUFBRSxHQUFJO0lBQ1gsTUFBTSxFQUFFO0VBQUksRUFDWixDQUNHLENBQ0gsZUFDTjtJQUFLLFNBQVMsRUFBQztFQUFVLGdCQUN2QjtJQUFLLFNBQVMsRUFBQztFQUFlLGdCQUM1Qix5RUFBTSxtQkFBaUIsQ0FBTyxlQUM5Qix5RUFBT3ZCLElBQUksQ0FBQ3dCLElBQUksQ0FBUSxDQUNwQixlQUNOO0lBQUssU0FBUyxFQUFDO0VBQWUsZ0JBQzVCLDJEQUFDLDBEQUFJO0lBQUMsSUFBSSxzQkFBZXhCLElBQUksQ0FBQ00sUUFBUSxDQUFDWCxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUM7RUFBRyxnQkFDeEYseUVBQU0saUJBQVksRUFBQ0ksSUFBSSxDQUFDTSxRQUFRLENBQVEsQ0FDbkMsQ0FDSCxlQUNOO0lBQUssU0FBUyxFQUFDO0VBQWUsR0FDM0JOLElBQUksQ0FBQ08sU0FBUyxnQkFDYix5RUFBTSxXQUFTO0lBQU0sS0FBSyxFQUFFO01BQUVoQyxLQUFLLEVBQUU7SUFBWTtFQUFFLEdBQUMsWUFBVSxDQUFPLENBQU8sZ0JBRTVFLHlFQUFNLFdBQVM7SUFBTSxLQUFLLEVBQUU7TUFBRUEsS0FBSyxFQUFFO0lBQU07RUFBRSxHQUFDLGVBQU8sQ0FBTyxDQUFPLENBRWpFLENBQ0YsQ0FDRjtBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNzQztBQUNJO0FBQ2hCO0FBRVgsU0FBUzRDLElBQUksT0FBVztFQUFBLElBQVJuQixJQUFJLFFBQUpBLElBQUk7RUFFakMsU0FBU2YsZUFBZSxDQUFDQyxHQUFHLEVBQUU7SUFDNUIsT0FBT0EsR0FBRyxDQUNQQyxXQUFXLEVBQUUsQ0FDYkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUNWQyxHQUFHLENBQUMsVUFBQ0MsSUFBSTtNQUFBLE9BQUtBLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxXQUFXLEVBQUUsR0FBR0YsSUFBSSxDQUFDRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQUEsRUFBQyxDQUMzREMsSUFBSSxDQUFDLEdBQUcsQ0FBQztFQUNkO0VBQUM7RUFFRCxTQUFTZ0MsSUFBSSxDQUFDQyxDQUFDLEVBQUU7SUFFZixJQUFJQyxNQUFNLEdBQUdELENBQUMsQ0FBQ0UsYUFBYTtJQUU1QixJQUFJQyxPQUFPO0lBQ1gsSUFBSUMsT0FBTztJQUVYSixDQUFDLENBQUNHLE9BQU8sR0FBR0EsT0FBTyxHQUFHSCxDQUFDLENBQUNHLE9BQU8sR0FBR0EsT0FBTyxHQUFHSCxDQUFDLENBQUNLLEtBQUs7SUFDbkRMLENBQUMsQ0FBQ0ksT0FBTyxHQUFHQSxPQUFPLEdBQUdKLENBQUMsQ0FBQ0ksT0FBTyxHQUFHQSxPQUFPLEdBQUdKLENBQUMsQ0FBQ00sS0FBSztJQUVuRCxJQUFJQyxDQUFDLEdBQUdKLE9BQU8sR0FBQ0YsTUFBTSxDQUFDTyxXQUFXLEdBQUMsRUFBRTtJQUNyQyxJQUFJQyxDQUFDLEdBQUdMLE9BQU8sR0FBQ0gsTUFBTSxDQUFDUyxZQUFZLEdBQUMsRUFBRTtJQUV0Q1QsTUFBTSxDQUFDVSxLQUFLLENBQUNDLGtCQUFrQixHQUFHTCxDQUFDLEdBQUcsSUFBSSxHQUFHRSxDQUFDLEdBQUcsR0FBRztFQUN0RDtFQUVBLG9CQUFRO0lBQUssU0FBUyxFQUFDO0VBQWUsZ0JBQ3BDO0lBQUssU0FBUyxFQUFDO0VBQVksZ0JBQ3pCO0lBQVEsU0FBUyxFQUFDLE1BQU07SUFBQyxXQUFXLEVBQUVWLElBQUs7SUFBQyxLQUFLLEVBQUU7TUFBQ2MsZUFBZSxnQkFBU3hDLElBQUksQ0FBQ3FCLEdBQUc7SUFBSTtFQUFFLGdCQUN4RjtJQUNFLEdBQUcsRUFBRXJCLElBQUksQ0FBQ3FCLEdBQUk7SUFDZCxHQUFHLEVBQUVyQixJQUFJLENBQUNzQixHQUFJO0lBQ2QsS0FBSyxFQUFFO01BQUVDLFNBQVMsRUFBRTtJQUFRLENBQUU7SUFDOUIsS0FBSyxFQUFFLEdBQUk7SUFDWCxNQUFNLEVBQUU7RUFBSSxFQUNaLENBQ0ssQ0FDTCxlQUNOO0lBQUssU0FBUyxFQUFDO0VBQVUsZ0JBQ3ZCO0lBQUssU0FBUyxFQUFDO0VBQWUsZ0JBQzVCLHVFQUFLdkIsSUFBSSxDQUFDd0IsSUFBSSxDQUFNLENBQ2hCLGVBQ047SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDMUIsMkRBQUMsMERBQUk7SUFBQyxJQUFJLHNCQUFleEIsSUFBSSxDQUFDTSxRQUFRLENBQUNYLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQztFQUFHLEdBQUMsaUJBQzdFLEVBQUNYLGVBQWUsQ0FBQ2UsSUFBSSxDQUFDTSxRQUFRLENBQUMsQ0FDdEMsQ0FDSCxlQUNOO0lBQUssU0FBUyxFQUFFO0VBQW9CLEdBQ2pDTixJQUFJLENBQUNPLFNBQVMsZ0JBQ2IseUVBQU0sV0FBUztJQUFHLEtBQUssRUFBRTtNQUFFaEMsS0FBSyxFQUFFO0lBQVk7RUFBRSxHQUFDLFlBQVUsQ0FBSSxDQUFPLGdCQUV0RSx5RUFBTSxXQUFTO0lBQUcsS0FBSyxFQUFFO01BQUVBLEtBQUssRUFBRTtJQUFNO0VBQUUsR0FBQyxlQUFPLENBQUksQ0FBTyxDQUUzRCxlQUNOO0lBQUssU0FBUyxFQUFDO0VBQWMsZ0JBQzNCLHNFQUFHLGdCQUFjLEVBQUN5QixJQUFJLENBQUN5QyxXQUFXLEVBQUMsU0FBSSxFQUFDekMsSUFBSSxDQUFDMEMsRUFBRSxDQUFLLENBQ2hELGVBQ047SUFBSyxTQUFTLEVBQUM7RUFBYyxnQkFDM0Isc0ZBQU0sdUVBQUksZ0JBQWMsQ0FBSyxLQUFDLEVBQUMxQyxJQUFJLENBQUMyQyxXQUFXLENBQVEsQ0FDbkQsZUFDTjtJQUFLLFNBQVMsRUFBQztFQUFhLGdCQUMxQixzRkFBTSx1RUFBSSx3QkFBbUIsQ0FBSyxLQUFDLEVBQUMzQyxJQUFJLENBQUM0QyxnQkFBZ0IsQ0FBUSxDQUM3RCxFQUNMNUMsSUFBSSxDQUFDTyxTQUFTLGdCQUNiO0lBQUssU0FBUyxFQUFDO0VBQWMsZ0JBQzNCO0lBQ0UsR0FBRyxFQUFDLHdUQUF3VDtJQUM1VCxLQUFLLEVBQUU7TUFBRXNDLE1BQU0sRUFBRTtJQUFFO0VBQUUsRUFDZCxDQUNMLEdBQUcsSUFBSSxlQUVmO0lBQUssU0FBUyxFQUFDO0VBQWdCLGdCQUM3QiwyREFBQyw2REFBTTtJQUNMLFNBQVMsRUFBQyxhQUFhO0lBQ3ZCLElBQUksRUFBQyxPQUFPO0lBQ1osRUFBRSxFQUFFO01BQUVDLFdBQVcsRUFBRSxPQUFPO01BQUV2RSxLQUFLLEVBQUU7SUFBUSxDQUFFO0lBQzdDLE9BQU8sRUFBQztFQUFVLGdCQUNsQjtJQUFLLFNBQVMsRUFBQztFQUFjLGdCQUMzQixzRUFBRyxzQkFBb0IsQ0FBSSxDQUN2QixDQUNDLENBQ0wsQ0FDRixDQUNGO0FBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RjBDO0FBQ0o7QUFDRztBQUUxQixTQUFTeUUsTUFBTSxHQUFHO0VBRTdCLG9CQUNRO0lBQUssU0FBUyxFQUFDO0VBQVMsZ0JBQ3BCO0lBQ0ksRUFBRSxFQUFDLE9BQU87SUFDVixHQUFHLEVBQUMsOEJBQThCO0lBQ2xDLEdBQUcsRUFBQyxtQkFBbUI7SUFDdkIsS0FBSyxFQUFFLEdBQUk7SUFDWCxNQUFNLEVBQUU7RUFBSSxFQUNkLGVBQ0YsMkRBQUMsMERBQUk7SUFBQyxJQUFJLEVBQUM7RUFBVSxnQkFDakIsMkRBQUMsNERBQU07SUFDSCxTQUFTLEVBQUMsS0FBSztJQUNmLElBQUksRUFBQyxPQUFPO0lBQ1osT0FBTyxFQUFDO0VBQVUsZ0JBQ2xCO0lBQUssU0FBUyxFQUFDO0VBQVMsZ0JBQ3BCO0lBQ0ksR0FBRyxFQUFDLG1DQUFtQztJQUN2QyxHQUFHLEVBQUMsa0JBQWtCO0lBQ3RCLEtBQUssRUFBRSxHQUFJO0lBQ1gsTUFBTSxFQUFFO0VBQUksRUFDZCxlQUNGLHNFQUFHLGFBQVEsQ0FBSSxDQUNiLENBQ0QsQ0FDTixlQUVQO0lBQUssU0FBUyxFQUFDO0VBQWtCLGdCQUM3QiwyREFBQywwREFBSTtJQUFDLElBQUksRUFBQztFQUFrQixnQkFDekIsMkRBQUMsNERBQU07SUFDSCxTQUFTLEVBQUMsUUFBUTtJQUNsQixJQUFJLEVBQUMsT0FBTztJQUNaLE9BQU8sRUFBQztFQUFVLGdCQUNsQjtJQUFLLFNBQVMsRUFBQztFQUFTLGdCQUNwQjtJQUNJLEdBQUcsRUFBQyxpQ0FBaUM7SUFDckMsR0FBRyxFQUFDLGdCQUFnQjtJQUNwQixLQUFLLEVBQUUsR0FBSTtJQUNYLE1BQU0sRUFBRTtFQUFJLEVBQ2QsZUFDRixzRUFBRyxXQUFNLENBQUksQ0FDWCxDQUNELENBQ04sZUFFUCwyREFBQywwREFBSTtJQUFDLElBQUksRUFBQztFQUF3QixnQkFDL0IsMkRBQUMsNERBQU07SUFDSCxTQUFTLEVBQUMsUUFBUTtJQUNsQixJQUFJLEVBQUMsT0FBTztJQUNaLE9BQU8sRUFBQztFQUFVLGdCQUNsQjtJQUFLLFNBQVMsRUFBQztFQUFTLGdCQUNwQjtJQUNJLEdBQUcsRUFBQyxvQ0FBb0M7SUFDeEMsR0FBRyxFQUFDLG1CQUFtQjtJQUN2QixLQUFLLEVBQUUsR0FBSTtJQUNYLE1BQU0sRUFBRTtFQUFJLEVBQ2QsZUFDRixzRUFBRyxvQkFBWSxDQUFJLENBQ2pCLENBQ0QsQ0FDTixlQUVQLDJEQUFDLDBEQUFJO0lBQUMsSUFBSSxFQUFDO0VBQW1CLGdCQUMxQiwyREFBQyw0REFBTTtJQUNILFNBQVMsRUFBQyxRQUFRO0lBQ2xCLElBQUksRUFBQyxPQUFPO0lBQ1osT0FBTyxFQUFDO0VBQVUsZ0JBQ2xCO0lBQUssU0FBUyxFQUFDO0VBQVMsZ0JBQ3BCO0lBQ0ksR0FBRyxFQUFDLGtDQUFrQztJQUN0QyxHQUFHLEVBQUMsaUJBQWlCO0lBQ3JCLEtBQUssRUFBRSxHQUFJO0lBQ1gsTUFBTSxFQUFFO0VBQUksRUFDZCxlQUNGLHNFQUFHLFNBQU8sQ0FBSSxDQUNaLENBQ0QsQ0FDTixlQUVQLDJEQUFDLDBEQUFJO0lBQUMsSUFBSSxFQUFDO0VBQW1CLGdCQUMxQiwyREFBQyw0REFBTTtJQUNILFNBQVMsRUFBQyxRQUFRO0lBQ2xCLElBQUksRUFBQyxPQUFPO0lBQ1osT0FBTyxFQUFDO0VBQVUsZ0JBQ2xCO0lBQUssU0FBUyxFQUFDO0VBQVMsZ0JBQ3BCO0lBQ0ksR0FBRyxFQUFDLGtDQUFrQztJQUN0QyxHQUFHLEVBQUMsaUJBQWlCO0lBQ3JCLEtBQUssRUFBRSxHQUFJO0lBQ1gsTUFBTSxFQUFFO0VBQUksRUFDZCxlQUNGLHNFQUFHLFlBQU8sQ0FBSSxDQUNaLENBQ0QsQ0FDTixDQUNMLENBQ0o7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RzZDO0FBQ0Q7QUFDUjtBQUNOO0FBQ2M7QUFDbEI7QUFFMUIsSUFBTUksS0FBSyxHQUFHLFNBQVJBLEtBQUssQ0FBYWhELFFBQVEsRUFBRTtFQUM5QixJQUFJQSxRQUFRLElBQUksSUFBSSxJQUFJQSxRQUFRLElBQUksRUFBRSxFQUFFO0lBQ3BDO01BQ0ksT0FBT0YsMERBQ0ksQ0FBQyxVQUFBRixJQUFJO1FBQUEsT0FBSUEsSUFBSSxDQUFDTyxTQUFTO01BQUEsRUFBQyxDQUM5QmxCLEdBQUcsQ0FBQyxVQUFBVyxJQUFJO1FBQUEsb0JBQ0wsNERBQUMsa0RBQUk7VUFDRCxHQUFHLEVBQUVBLElBQUksQ0FBQzBDLEVBQUc7VUFDYixJQUFJLEVBQUUxQztRQUFLLEVBQ2I7TUFBQSxDQUFDLENBQUM7SUFDaEI7RUFDSixDQUFDLE1BQ0k7SUFDRDtNQUNJLE9BQU9FLDBEQUNJLENBQUMsVUFBQUYsSUFBSTtRQUFBLE9BQUlBLElBQUksQ0FBQ00sUUFBUSxJQUFJRixRQUFRO01BQUEsRUFBQyxDQUN6Q2YsR0FBRyxDQUFDLFVBQUNXLElBQUk7UUFBQSxvQkFDVCw0REFBQyxrREFBSTtVQUNGLEdBQUcsRUFBRUEsSUFBSSxDQUFDMEMsRUFBRztVQUNiLElBQUksRUFBRTFDO1FBQUssRUFDYjtNQUFBLENBQ0QsQ0FBQztJQUNWO0VBQ0o7QUFDSixDQUFDO0FBRUQsSUFBTXFELGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0I7RUFBQSxvQkFDcEI7SUFBTSxLQUFLLEVBQUU7TUFDVGhGLE1BQU0sRUFBRTtJQUNaO0VBQUUsZ0JBQ0UsNERBQUMsK0RBQVE7SUFBQyxPQUFPLEVBQUMsTUFBTTtJQUNwQixLQUFLLEVBQUMsS0FBSztJQUNYLE1BQU0sRUFBQyxLQUFLO0lBQ1osRUFBRSxFQUFFO01BQ0FpRixVQUFVLEVBQUUsSUFBSTtNQUNoQkMsU0FBUyxFQUFFO0lBQ2Y7RUFBRSxFQUFHLENBQ047QUFBQSxDQUFDO0FBRVosSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVk7RUFBQSxvQkFDZCw0REFBQywrREFBUTtJQUFDLE9BQU8sRUFBQyxTQUFTO0lBQ3ZCLEtBQUssRUFBQyxLQUFLO0lBQ1gsTUFBTSxFQUFDLEtBQUs7SUFDWixFQUFFLEVBQUU7TUFDQUYsVUFBVSxFQUFFLElBQUk7TUFDaEJDLFNBQVMsRUFBRTtJQUNmO0VBQUUsRUFBRztBQUFBLENBQUM7QUFFZCxTQUFTRSxVQUFVLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0VBQUU7RUFDNUIsT0FBT0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLElBQUlILEdBQUcsR0FBR0QsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHQSxHQUFHLENBQUM7QUFDNUQ7QUFFZSxTQUFTSyxRQUFRLE9BQVc7RUFBQSxJQUFSQyxJQUFJLFFBQUpBLElBQUk7RUFFbkMsZ0JBQThCZCxnREFBUSxDQUFDLElBQUksQ0FBQztJQUFBO0lBQXJDZSxPQUFPO0lBQUVDLFVBQVU7RUFFMUJuQixpREFBUyxDQUFDLFlBQU07SUFDWm9CLFVBQVUsQ0FBQyxZQUFNO01BQ2JELFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQyxFQUFFVCxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQzdCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDSSw0SEFDS1EsT0FBTyxnQkFBSSx5SUFFUiw0REFBQyxrQkFBa0IsT0FBRyxFQUNyQixtQkFBSUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEVBQUUsRUFBRWhGLEdBQUcsQ0FBQyxVQUFDVyxJQUFJO0lBQUEsb0JBQU0sNERBQUMsWUFBWTtNQUFDLEdBQUcsRUFBRUE7SUFBSyxFQUFHO0VBQUEsQ0FBQyxDQUFDLENBRW5FLGdCQUFLLHlJQUFFLDREQUFDLG1EQUFTO0lBQUMsUUFBUSxFQUFFZ0U7RUFBSyxFQUFHLEtBQUMsRUFBQ1osS0FBSyxDQUFDWSxJQUFJLENBQUMsQ0FDaEQsQ0FDTDtBQUVYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRjhDO0FBQ0Y7QUFDTDtBQUNNO0FBQ25CO0FBRTFCLElBQU0vRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWUsQ0FBSUMsR0FBRyxFQUFLO0VBQzdCLE9BQU9BLEdBQUcsQ0FDUEMsV0FBVyxFQUFFLENBQ2JDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FDVkMsR0FBRyxDQUFDLFVBQUNDLElBQUk7SUFBQSxPQUFLQSxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxFQUFFLEdBQUdGLElBQUksQ0FBQ0csS0FBSyxDQUFDLENBQUMsQ0FBQztFQUFBLEVBQUMsQ0FDM0RDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUNDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUNWLFdBQVcsRUFBRTtBQUNsRyxDQUFDO0FBRUgsSUFBTWlFLEtBQUssR0FBRyxTQUFSQSxLQUFLLENBQWFrQixRQUFRLEVBQUU7RUFDOUIsT0FBT3BFLDBEQUNJLENBQUMsVUFBQUYsSUFBSTtJQUFBLE9BQUlmLGVBQWUsQ0FBQ2UsSUFBSSxDQUFDd0IsSUFBSSxDQUFDLElBQUl2QyxlQUFlLENBQUNxRixRQUFRLENBQUM7RUFBQSxFQUFDLENBQ3ZFakYsR0FBRyxDQUFDLFVBQUNXLElBQUk7SUFBQSxvQkFDVCw0REFBQywwREFBSTtNQUNGLEdBQUcsRUFBRUEsSUFBSSxDQUFDMEMsRUFBRztNQUNiLElBQUksRUFBRTFDO0lBQUssRUFDYjtFQUFBLENBQ0QsQ0FBQztBQUNWLENBQUM7QUFFRCxTQUFTeUQsVUFBVSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtFQUFFO0VBQzVCLE9BQU9DLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxJQUFJSCxHQUFHLEdBQUdELEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBR0EsR0FBRyxDQUFDO0FBQzVEO0FBRWUsU0FBU0ssUUFBUSxPQUFlO0VBQUEsSUFBWk8sUUFBUSxRQUFSQSxRQUFRO0VBRXZDLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFTO0lBQUEsb0JBQ1gsNERBQUMsK0RBQVE7TUFDTCxTQUFTLEVBQUMsTUFBTTtNQUNoQixPQUFPLEVBQUMsU0FBUztNQUNqQixLQUFLLEVBQUMsS0FBSztNQUNYLE1BQU0sRUFBQyxLQUFLO01BQ1osRUFBRSxFQUFFO1FBQ0FqQixVQUFVLEVBQUU7TUFDaEI7SUFBRSxFQUFHO0VBQUEsQ0FBQztFQUVkLElBQU1rQixTQUFTLEdBQUcsU0FBWkEsU0FBUztJQUFBLG9CQUNYLDREQUFDLCtEQUFRO01BQ0wsT0FBTyxFQUFDLFNBQVM7TUFDakIsS0FBSyxFQUFDLEtBQUs7TUFDWCxNQUFNLEVBQUMsSUFBSTtNQUNYLEVBQUUsRUFBRTtRQUNBbEIsVUFBVSxFQUFFLEtBQUs7UUFDakJDLFNBQVMsRUFBRTtNQUNmO0lBQUUsRUFBRztFQUFBLENBQUM7RUFFZCxJQUFNa0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFlO0lBQUEsb0JBQ2pCLDREQUFDLCtEQUFRO01BQ0wsT0FBTyxFQUFDLFNBQVM7TUFDakIsS0FBSyxFQUFDLEtBQUs7TUFDWCxNQUFNLEVBQUMsSUFBSTtNQUNYLEVBQUUsRUFBRTtRQUNBbkIsVUFBVSxFQUFFLEtBQUs7UUFDakJDLFNBQVMsRUFBRTtNQUNmO0lBQUUsRUFBRztFQUFBLENBQUM7RUFFZCxJQUFNOUIsTUFBTSxHQUFHLFNBQVRBLE1BQU07SUFBQSxvQkFDUiw0REFBQywrREFBUTtNQUNMLFNBQVMsRUFBQyxNQUFNO01BQ2hCLE9BQU8sRUFBQyxTQUFTO01BQ2pCLEtBQUssRUFBQyxLQUFLO01BQ1gsTUFBTSxFQUFDLElBQUk7TUFDWCxFQUFFLEVBQUU7UUFDQTZCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCQyxTQUFTLEVBQUU7TUFDZjtJQUFFLEVBQUc7RUFBQSxDQUFDO0VBRWQsZ0JBQThCTCxnREFBUSxDQUFDLElBQUksQ0FBQztJQUFBO0lBQXJDZSxPQUFPO0lBQUVDLFVBQVU7RUFFMUJuQixpREFBUyxDQUFDLFlBQU07SUFDWm9CLFVBQVUsQ0FBQyxZQUFNO01BQ2JELFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQyxFQUFFVCxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQzdCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDSSw0SEFDS1EsT0FBTyxnQkFBSSx5SUFFUjtJQUFLLEtBQUssRUFBRTtNQUFFN0YsT0FBTyxFQUFFLE1BQU07TUFBRU8sY0FBYyxFQUFFLFFBQVE7TUFBRUMsVUFBVSxFQUFFLFFBQVE7TUFBRThGLFlBQVksRUFBRTtJQUFTO0VBQUUsZ0JBRXBHO0lBQU0sS0FBSyxFQUFFO01BQUV0RyxPQUFPLEVBQUUsTUFBTTtNQUFFdUcsYUFBYSxFQUFFLFFBQVE7TUFBRWhHLGNBQWMsRUFBRTtJQUFTO0VBQUUsZ0JBQUMsNERBQUMsU0FBUyxPQUFHLENBQU8sZUFFekc7SUFBTSxLQUFLLEVBQUU7TUFBRVAsT0FBTyxFQUFFLE1BQU07TUFBRXVHLGFBQWEsRUFBRSxRQUFRO01BQUVoRyxjQUFjLEVBQUU7SUFBUztFQUFFLGdCQUNoRiw0REFBQyxTQUFTLE9BQUcsRUFDWixtQkFBSXlGLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFFLEVBQUVoRixHQUFHLENBQUMsVUFBQ1csSUFBSTtJQUFBLG9CQUFNLDREQUFDLGVBQWU7TUFBQyxHQUFHLEVBQUVBO0lBQUssRUFBRztFQUFBLENBQUMsQ0FBQyxlQUNyRSw0REFBQyxNQUFNLE9BQUcsQ0FDUCxDQUNMLENBRVAsZ0JBQUssNEhBQUdvRCxLQUFLLENBQUNrQixRQUFRLENBQUMsQ0FDdEIsQ0FDTDtBQUVYOzs7Ozs7Ozs7Ozs7Ozs7QUNuR08sSUFBTXBFLEtBQUssR0FBRyxDQUNqQjtFQUNJd0MsRUFBRSxFQUFFLENBQUM7RUFDTGxCLElBQUksRUFBRSx1QkFBdUI7RUFDN0JGLEdBQUcsRUFBRSxhQUFhO0VBQ2xCaEIsUUFBUSxFQUFFLFFBQVE7RUFDbEJtQyxXQUFXLEVBQUUscUJBQXFCO0VBQ2xDRSxXQUFXLEVBQUUsaVpBQWlaO0VBQzlaQyxnQkFBZ0IsRUFBRSxpcENBQWlwQztFQUNucUN2QixHQUFHLEVBQUUsb0NBQW9DO0VBQ3pDRCxJQUFJLEVBQUUsd0NBQXdDO0VBQzlDYixTQUFTLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDSW1DLEVBQUUsRUFBRSxDQUFDO0VBQ0xsQixJQUFJLEVBQUUsb0JBQW9CO0VBQzFCRixHQUFHLEVBQUUsU0FBUztFQUNkaEIsUUFBUSxFQUFFLFFBQVE7RUFDbEJtQyxXQUFXLEVBQUUscUJBQXFCO0VBQ2xDRSxXQUFXLEVBQUUsOGdDQUE4Z0M7RUFDM2hDQyxnQkFBZ0IsRUFBRSxvVkFBb1Y7RUFDdFd2QixHQUFHLEVBQUUsZ0NBQWdDO0VBQ3JDRCxJQUFJLEVBQUUscUNBQXFDO0VBQzNDYixTQUFTLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDSW1DLEVBQUUsRUFBRSxDQUFDO0VBQ0xsQixJQUFJLEVBQUUsWUFBWTtFQUNsQkYsR0FBRyxFQUFFLEtBQUs7RUFDVmhCLFFBQVEsRUFBRSxRQUFRO0VBQ2xCbUMsV0FBVyxFQUFFLHFCQUFxQjtFQUNsQ0UsV0FBVyxFQUFFLHlwQkFBeXBCO0VBQ3RxQkMsZ0JBQWdCLEVBQUUsK0tBQStLO0VBQ2pNdkIsR0FBRyxFQUFFLDRCQUE0QjtFQUNqQ0QsSUFBSSxFQUFFLDZCQUE2QjtFQUNuQ2IsU0FBUyxFQUFFO0FBQ2YsQ0FBQyxFQUNEO0VBQ0ltQyxFQUFFLEVBQUUsQ0FBQztFQUNMbEIsSUFBSSxFQUFFLGNBQWM7RUFDcEJGLEdBQUcsRUFBRSxnQkFBZ0I7RUFDckJoQixRQUFRLEVBQUUsY0FBYztFQUN4Qm1DLFdBQVcsRUFBRSxxQkFBcUI7RUFDbENFLFdBQVcsRUFBRSwwM0JBQTAzQjtFQUN2NEJDLGdCQUFnQixFQUFFLCtqQkFBK2pCO0VBQ2psQnZCLEdBQUcsRUFBRSx1Q0FBdUM7RUFDNUNELElBQUksRUFBRSxxQ0FBcUM7RUFDM0NiLFNBQVMsRUFBRTtBQUNmLENBQUMsRUFDRDtFQUNJbUMsRUFBRSxFQUFFLENBQUM7RUFDTGxCLElBQUksRUFBRSxXQUFXO0VBQ2pCRixHQUFHLEVBQUUsb0JBQW9CO0VBQ3pCaEIsUUFBUSxFQUFFLGNBQWM7RUFDeEJtQyxXQUFXLEVBQUUscUJBQXFCO0VBQ2xDRSxXQUFXLEVBQUUsOGlCQUE4aUI7RUFDM2pCQyxnQkFBZ0IsRUFBRSx5ZkFBeWY7RUFDM2dCdkIsR0FBRyxFQUFFLDJDQUEyQztFQUNoREQsSUFBSSxFQUFFLGtDQUFrQztFQUN4Q2IsU0FBUyxFQUFFO0FBQ2YsQ0FBQyxFQUNEO0VBQ0ltQyxFQUFFLEVBQUUsQ0FBQztFQUNMbEIsSUFBSSxFQUFFLHlCQUF5QjtFQUMvQkYsR0FBRyxFQUFFLGNBQWM7RUFDbkJoQixRQUFRLEVBQUUsU0FBUztFQUNuQm1DLFdBQVcsRUFBRSxxQkFBcUI7RUFDbENFLFdBQVcsRUFBRSwwZEFBMGQ7RUFDdmVDLGdCQUFnQixFQUFFLGdNQUFnTTtFQUNsTnZCLEdBQUcsRUFBRSwrQkFBK0I7RUFDcENELElBQUksRUFBRSwyQ0FBMkM7RUFDakRiLFNBQVMsRUFBRTtBQUNmLENBQUMsRUFDRDtFQUNJbUMsRUFBRSxFQUFFLENBQUM7RUFDTGxCLElBQUksRUFBRSxnQ0FBZ0M7RUFDdENGLEdBQUcsRUFBRSxzQkFBc0I7RUFDM0JoQixRQUFRLEVBQUUsU0FBUztFQUNuQm1DLFdBQVcsRUFBRSxxQkFBcUI7RUFDbENFLFdBQVcsRUFBRSxrUkFBa1I7RUFDL1JDLGdCQUFnQixFQUFFLDJ5REFBMnlEO0VBQzd6RHZCLEdBQUcsRUFBRSxtQ0FBbUM7RUFDeENELElBQUksRUFBRSxrREFBa0Q7RUFDeERiLFNBQVMsRUFBRTtBQUNmLENBQUMsRUFDRDtFQUNJbUMsRUFBRSxFQUFFLENBQUM7RUFDTGxCLElBQUksRUFBRSwwQkFBMEI7RUFDaENGLEdBQUcsRUFBRSxxQkFBcUI7RUFDMUJoQixRQUFRLEVBQUUsU0FBUztFQUNuQm1DLFdBQVcsRUFBRSxxQkFBcUI7RUFDbENFLFdBQVcsRUFBRSxtU0FBbVM7RUFDaFRDLGdCQUFnQixFQUFFLHNaQUFzWjtFQUN4YXZCLEdBQUcsRUFBRSw0Q0FBNEM7RUFDakRELElBQUksRUFBRSw0Q0FBNEM7RUFDbERiLFNBQVMsRUFBRTtBQUNmLENBQUMsRUFDRDtFQUNJbUMsRUFBRSxFQUFFLENBQUM7RUFDTGxCLElBQUksRUFBRSx1QkFBdUI7RUFDN0JGLEdBQUcsRUFBRSxrQkFBa0I7RUFDdkJoQixRQUFRLEVBQUUsU0FBUztFQUNuQm1DLFdBQVcsRUFBRSxxQkFBcUI7RUFDbENFLFdBQVcsRUFBRSw4UEFBOFA7RUFDM1FDLGdCQUFnQixFQUFFLCt1QkFBK3VCO0VBQ2p3QnZCLEdBQUcsRUFBRSx5Q0FBeUM7RUFDOUNELElBQUksRUFBRSx5Q0FBeUM7RUFDL0NiLFNBQVMsRUFBRTtBQUNmLENBQUMsRUFDRDtFQUNJbUMsRUFBRSxFQUFFLEVBQUU7RUFDTmxCLElBQUksRUFBRSxvQkFBb0I7RUFDMUJGLEdBQUcsRUFBRSxZQUFZO0VBQ2pCaEIsUUFBUSxFQUFFLFNBQVM7RUFDbkJtQyxXQUFXLEVBQUUscUJBQXFCO0VBQ2xDRSxXQUFXLEVBQUUsb1NBQW9TO0VBQ2pUQyxnQkFBZ0IsRUFBRSw2ZUFBNmU7RUFDL2Z2QixHQUFHLEVBQUUsbUNBQW1DO0VBQ3hDRCxJQUFJLEVBQUUsc0NBQXNDO0VBQzVDYixTQUFTLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDSW1DLEVBQUUsRUFBRSxFQUFFO0VBQ05sQixJQUFJLEVBQUUsbUJBQW1CO0VBQ3pCRixHQUFHLEVBQUUsVUFBVTtFQUNmaEIsUUFBUSxFQUFFLFNBQVM7RUFDbkJtQyxXQUFXLEVBQUUscUJBQXFCO0VBQ2xDRSxXQUFXLEVBQUUsNkxBQTZMO0VBQzFNQyxnQkFBZ0IsRUFBRSw4TUFBOE07RUFDaE92QixHQUFHLEVBQUUsaUNBQWlDO0VBQ3RDRCxJQUFJLEVBQUUscUNBQXFDO0VBQzNDYixTQUFTLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDSW1DLEVBQUUsRUFBRSxFQUFFO0VBQ05sQixJQUFJLEVBQUUscUJBQXFCO0VBQzNCRixHQUFHLEVBQUUsb0JBQW9CO0VBQ3pCaEIsUUFBUSxFQUFFLFNBQVM7RUFDbkJtQyxXQUFXLEVBQUUscUJBQXFCO0VBQ2xDRSxXQUFXLEVBQUUsNFNBQTRTO0VBQ3pUQyxnQkFBZ0IsRUFBRSx3c0JBQXdzQjtFQUMxdEJ2QixHQUFHLEVBQUUsMkNBQTJDO0VBQ2hERCxJQUFJLEVBQUUsdUNBQXVDO0VBQzdDYixTQUFTLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDSW1DLEVBQUUsRUFBRSxFQUFFO0VBQ05sQixJQUFJLEVBQUUsOEJBQThCO0VBQ3BDRixHQUFHLEVBQUUsaUJBQWlCO0VBQ3RCaEIsUUFBUSxFQUFFLFNBQVM7RUFDbkJtQyxXQUFXLEVBQUUscUJBQXFCO0VBQ2xDRSxXQUFXLEVBQUUsa2VBQWtlO0VBQy9lQyxnQkFBZ0IsRUFBRSw0WkFBNFo7RUFDOWF2QixHQUFHLEVBQUUsd0NBQXdDO0VBQzdDRCxJQUFJLEVBQUUsZ0RBQWdEO0VBQ3REYixTQUFTLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDSW1DLEVBQUUsRUFBRSxFQUFFO0VBQ05sQixJQUFJLEVBQUUsbUJBQW1CO0VBQ3pCRixHQUFHLEVBQUUsT0FBTztFQUNaaEIsUUFBUSxFQUFFLFNBQVM7RUFDbkJtQyxXQUFXLEVBQUUscUJBQXFCO0VBQ2xDRSxXQUFXLEVBQUUseWNBQXljO0VBQ3RkQyxnQkFBZ0IsRUFBRSxnTkFBZ047RUFDbE92QixHQUFHLEVBQUUsOEJBQThCO0VBQ25DRCxJQUFJLEVBQUUscUNBQXFDO0VBQzNDYixTQUFTLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDSW1DLEVBQUUsRUFBRSxFQUFFO0VBQ05sQixJQUFJLEVBQUUsbUNBQW1DO0VBQ3pDRixHQUFHLEVBQUUsb0JBQW9CO0VBQ3pCaEIsUUFBUSxFQUFFLFNBQVM7RUFDbkJtQyxXQUFXLEVBQUUscUJBQXFCO0VBQ2xDRSxXQUFXLEVBQUUsMlNBQTJTO0VBQ3hUQyxnQkFBZ0IsRUFBRSxncUJBQWdxQjtFQUNsckJ2QixHQUFHLEVBQUUsMkNBQTJDO0VBQ2hERCxJQUFJLEVBQUUscURBQXFEO0VBQzNEYixTQUFTLEVBQUU7QUFDZixDQUFDLENBQ0o7Ozs7Ozs7Ozs7Ozs7OztBQ3JMRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDOEI7O0FBRTlCO0FBQ3lCO0FBRTZDO0FBQ3RFcUUsb0ZBQWlDLENBQUNDLCtFQUE0RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZG5DOztBQUU1RDtBQUNPLElBQU1HLEdBQUcsR0FBR0QsMEVBQWdCLENBQUNGLHlJQUluQyxDQUFDOztBQUVGO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWMEI7QUFDWTtBQUNNO0FBQ0c7QUFDYztBQUNUO0FBQ0Y7QUFFbEQsU0FBU3BCLFVBQVUsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFBRTtFQUM5QixPQUFPQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsSUFBSUgsR0FBRyxHQUFHRCxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUdBLEdBQUcsQ0FBQztBQUMxRDtBQUVlLFNBQVM0QixPQUFPLEdBQUc7RUFFaEMsZ0JBQThCcEMsZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQTtJQUFyQ2UsT0FBTztJQUFFQyxVQUFVO0VBRTFCbkIsaURBQVMsQ0FBQyxZQUFNO0lBQ2RvQixVQUFVLENBQUMsWUFBTTtNQUNmRCxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUMsRUFBRVQsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztFQUMzQixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sU0FBUzhCLGFBQWEsR0FBRztJQUV2QixJQUFJQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUMxQyxJQUFJRixJQUFJLEVBQUU7TUFDUkEsSUFBSSxDQUFDbEQsS0FBSyxDQUFDaEUsT0FBTyxHQUFHLENBQUM7SUFDeEI7SUFFQWtILElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQ3pDLElBQUlGLElBQUksRUFBRTtNQUNSQSxJQUFJLENBQUNsRCxLQUFLLENBQUNoRSxPQUFPLEdBQUcsQ0FBQztJQUN4QjtFQUNGO0VBRUEsb0JBQ0UseUlBQ0UsNERBQUMsNERBQVcsT0FBRyxlQUNmO0lBQU0sRUFBRSxFQUFDLE1BQU07SUFBQyxTQUFTLEVBQUM7RUFBTSxnQkFDOUI7SUFBSyxTQUFTLEVBQUM7RUFBTSxnQkFDbkI7SUFBUSxTQUFTLEVBQUM7RUFBYSxnQkFDN0I7SUFBSSxTQUFTLEVBQUM7RUFBWSxnQkFDeEIscUZBQ0UsNERBQUMsMkRBQUk7SUFBQyxJQUFJLEVBQUM7RUFBVSxHQUFDLFNBRXRCLENBQU8sQ0FDSixlQUNMLHdFQUFJLFVBRUosQ0FBSyxDQUNGLENBQ0UsZUFDVCw0REFBQywyREFBTSxPQUFHLGVBQ1Y7SUFBUyxTQUFTLEVBQUM7RUFBVyxnQkFDNUIsNERBQUMsc0VBQVk7SUFBQyxJQUFJLEVBQUM7RUFBRSxFQUFHLGVBQ3hCLDREQUFDLDhEQUFNLE9BQUcsQ0FDRixDQUNOLENBQ0QsRUFFTjJGLE9BQU8sZ0JBQUksMkhBQUssZ0JBQ2QsNEhBQUdzQixhQUFhLEVBQUUsQ0FBSyxDQUN6QjtBQUVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEUwQjtBQUNnQjtBQUNNO0FBRWpDLFNBQVNLLEtBQUssR0FBRztFQUM5QixvQkFDRSx1SUFDRTtJQUFNLFNBQVMsRUFBQztFQUFNLGdCQUNwQjtJQUFLLFNBQVMsRUFBQztFQUFXLGdCQUN4QjtJQUFLLFNBQVMsRUFBQztFQUFVLGdCQUN2QjtJQUFLLFNBQVMsRUFBQztFQUFpQixnQkFDOUI7SUFBSyxHQUFHLEVBQUMsOEJBQThCO0lBQUMsR0FBRyxFQUFDLFlBQVk7SUFBQyxLQUFLLEVBQUMsS0FBSztJQUFDLE1BQU0sRUFBQztFQUFLLEVBQUcsZUFDcEYsdUVBQUksZ0ZBQWtFLENBQUssQ0FDdkUsQ0FDRixDQUNGLGVBQ047SUFBSyxTQUFTLEVBQUM7RUFBWSxnQkFDekI7SUFBSyxTQUFTLEVBQUM7RUFBVyxnQkFDeEIsc0ZBQ0U7SUFBSyxTQUFTLEVBQUM7RUFBaUIsZ0JBQzlCLHVFQUFJLFdBQVMsQ0FBSyxDQUNkLGVBQ04sMkRBQUMsK0RBQVM7SUFDUixNQUFNLEVBQUMsT0FBTztJQUNkLEVBQUUsRUFBQyxPQUFPO0lBQ1YsS0FBSyxFQUFDLFNBQVM7SUFDZixLQUFLLEVBQUMsYUFBYTtJQUNuQixPQUFPLEVBQUM7RUFBVSxFQUNsQixlQUNGLDJEQUFDLCtEQUFTO0lBQ1IsTUFBTSxFQUFDLE9BQU87SUFDZCxFQUFFLEVBQUMsVUFBVTtJQUNiLEtBQUssRUFBQyxTQUFTO0lBQ2YsS0FBSyxFQUFDLGNBQWM7SUFDcEIsT0FBTyxFQUFDO0VBQVUsRUFDbEIsZUFDRiwyREFBQyw0REFBTTtJQUNMLElBQUksRUFBQyxPQUFPO0lBQ1osT0FBTyxFQUFDO0VBQVUsR0FBQyxjQUNyQixDQUFTLGVBQ1Q7SUFBSyxTQUFTLEVBQUM7RUFBbUIsZ0JBQ2hDLHNFQUFHLCtCQUErQixDQUFJLGVBQ3RDO0lBQ0UsSUFBSSxFQUFDLG9DQUFvQztJQUN6QyxNQUFNLEVBQUMsUUFBUTtJQUNmLEdBQUcsRUFBQztFQUFxQixHQUMxQixnQkFBYyxDQUFJLENBQ2YsQ0FDRCxDQUNILENBQ0YsQ0FDRCxDQUNOO0FBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REZ0Q7QUFDQTtBQUNHO0FBQ2M7QUFDdkM7QUFFWCxTQUFTRSxZQUFZLEdBQUc7RUFFckMsb0JBQ0UsdUlBQ0U7SUFBTSxTQUFTLEVBQUM7RUFBTSxnQkFDcEI7SUFBSyxTQUFTLEVBQUM7RUFBTSxnQkFFbkIsMkRBQUMsMERBQU07SUFBQyxLQUFLLEVBQUMsU0FBUztJQUFDLElBQUksRUFBQztFQUFFLEVBQUcsZUFDbEMsMkRBQUMsMERBQU0sT0FBRyxlQUVWO0lBQVMsU0FBUyxFQUFDO0VBQVcsZ0JBQzFCLDJEQUFDLHFFQUFZO0lBQUMsSUFBSSxFQUFDO0VBQVMsRUFBRSxlQUM5QiwyREFBQyw2REFBTSxPQUFHLENBQ0osQ0FDTixDQUNELENBQ047QUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJnRDtBQUNBO0FBQ0c7QUFDc0I7QUFDL0M7QUFFWCxTQUFTM0UsSUFBSSxDQUFDNEUsS0FBSyxFQUFFO0VBRWxDLG9CQUNFLHVJQUNFO0lBQU0sU0FBUyxFQUFDO0VBQU0sZ0JBQ3BCO0lBQUssU0FBUyxFQUFDO0VBQU0sZ0JBRW5CLDJEQUFDLDBEQUFNO0lBQUMsS0FBSyxFQUFFQSxLQUFLLENBQUNDLEdBQUk7SUFBQyxJQUFJLEVBQUVELEtBQUssQ0FBQy9GO0VBQUssRUFBRyxlQUM5QywyREFBQywwREFBTSxPQUFHLGVBRVY7SUFBUyxTQUFTLEVBQUM7RUFBVSxnQkFDekIsMkRBQUMsNkVBQVk7SUFBQyxRQUFRLEVBQUUrRixLQUFLLENBQUMvRjtFQUFLLEVBQUUsZUFDckMsMkRBQUMsNkRBQU0sT0FBRyxDQUNKLENBQ04sQ0FDRCxDQUNOO0FBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCZ0Q7QUFDQTtBQUNHO0FBQ2M7QUFDdkM7QUFFWCxTQUFTaUcsTUFBTSxHQUFHO0VBRS9CLG9CQUNFLHVJQUNFO0lBQU0sU0FBUyxFQUFDO0VBQU0sZ0JBQ3BCO0lBQUssU0FBUyxFQUFDO0VBQU0sZ0JBRW5CLDJEQUFDLDBEQUFNO0lBQUMsS0FBSyxFQUFDLFdBQVE7SUFBRSxJQUFJLEVBQUM7RUFBRSxFQUFHLGVBQ2xDLDJEQUFDLDBEQUFNLE9BQUcsZUFFVjtJQUFTLFNBQVMsRUFBQztFQUFXLGdCQUMxQiwyREFBQyxxRUFBWTtJQUFDLElBQUksRUFBQztFQUFRLEVBQUUsZUFDN0IsMkRBQUMsNkRBQU0sT0FBRyxDQUNKLENBQ04sQ0FDRCxDQUNOO0FBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCZ0Q7QUFDQTtBQUNHO0FBQ2M7QUFDdkM7QUFFWCxTQUFTSCxZQUFZLEdBQUc7RUFFckMsb0JBQ0UsdUlBQ0U7SUFBTSxTQUFTLEVBQUM7RUFBTSxnQkFDcEI7SUFBSyxTQUFTLEVBQUM7RUFBTSxnQkFFbkIsMkRBQUMsMERBQU07SUFBQyxLQUFLLEVBQUMsWUFBUztJQUFDLElBQUksRUFBQztFQUFFLEVBQUcsZUFDbEMsMkRBQUMsMERBQU0sT0FBRyxlQUVWO0lBQVMsU0FBUyxFQUFDO0VBQVcsZ0JBQzFCLDJEQUFDLHFFQUFZO0lBQUMsSUFBSSxFQUFDO0VBQVMsRUFBRSxlQUM5QiwyREFBQyw2REFBTSxPQUFHLENBQ0osQ0FDTixDQUNELENBQ047QUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJnRDtBQUNBO0FBQ0c7QUFDYztBQUN2QztBQUVYLFNBQVNBLFlBQVksR0FBRztFQUVyQyxvQkFDRSx1SUFDRTtJQUFNLFNBQVMsRUFBQztFQUFNLGdCQUNwQjtJQUFLLFNBQVMsRUFBQztFQUFNLGdCQUVuQiwyREFBQywwREFBTTtJQUFDLEtBQUssRUFBQyxvQkFBYztJQUFFLElBQUksRUFBQztFQUFFLEVBQUcsZUFDeEMsMkRBQUMsMERBQU0sT0FBRyxlQUVWO0lBQVMsU0FBUyxFQUFDO0VBQVcsZ0JBQzFCLDJEQUFDLHFFQUFZO0lBQUMsSUFBSSxFQUFDO0VBQWMsRUFBRSxlQUNuQywyREFBQyw2REFBTSxPQUFHLENBQ0osQ0FDTixDQUNELENBQ047QUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBLFNBQVNsQixpQ0FBaUMsQ0FBQ0UsT0FBTyxFQUFFO0VBQ2hELElBQU1vQixnQkFBZ0IsR0FBRyxDQUFDLENBQUM7RUFDM0IsSUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUF3QixDQUFJQyxDQUFDLEVBQUs7SUFDcENBLENBQUMsQ0FBQy9CLElBQUksRUFBRSxDQUFDZ0MsT0FBTyxDQUFDLFVBQUNDLEdBQUc7TUFBQSxPQUFNSixnQkFBZ0IsQ0FBQ0ksR0FBRyxDQUFDLEdBQUdGLENBQUMsQ0FBQ0UsR0FBRyxDQUFDLFdBQVE7SUFBQSxDQUFDLENBQUM7RUFDdkUsQ0FBQztFQUNESCx3QkFBd0IsQ0FBQ3JCLE9BQU8sQ0FBQztFQUNqQ3lCLE1BQU0sQ0FBQ0MscUJBQXFCLEdBQUcsVUFBQ2hGLElBQUksRUFBSztJQUNyQyxJQUFNaUYsU0FBUyxHQUFHUCxnQkFBZ0IsYUFBTTFFLElBQUksVUFBTyxJQUFJMEUsZ0JBQWdCLGFBQU0xRSxJQUFJLFVBQU87SUFDeEYsSUFBSSxPQUFPaUYsU0FBUyxLQUFLLFdBQVcsRUFBRTtNQUNsQyxNQUFNLElBQUlDLEtBQUssQ0FBQyxvQkFBb0IsR0FBR2xGLElBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUNyRTtJQUNBLE9BQU9pRixTQUFTO0VBQ3BCLENBQUM7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjBCO0FBQ1M7QUFDYTtBQUVoRCxJQUFJRyxVQUFVO0FBRWQsSUFBSUMsQ0FBQyxHQUFHRix1Q0FBVTtBQUNsQixJQUFJRyxLQUFxQyxFQUFFLEVBRzFDLE1BQU07RUFDTCxJQUFJSSxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sa0RBQWtEO0VBQzVEUCxVQUFVLEdBQUcsb0JBQVNRLENBQUMsRUFBRUMsQ0FBQyxFQUFFO0lBQzFCSCxDQUFDLENBQUNJLHFCQUFxQixHQUFHLElBQUk7SUFDOUIsSUFBSTtNQUNGLE9BQU9ULENBQUMsQ0FBQ0QsVUFBVSxDQUFDUSxDQUFDLEVBQUVDLENBQUMsQ0FBQztJQUMzQixDQUFDLFNBQVM7TUFDUkgsQ0FBQyxDQUFDSSxxQkFBcUIsR0FBRyxLQUFLO0lBQ2pDO0VBQ0YsQ0FBQztBQUNIO0FBQUMsSUFFS0MsU0FBUztFQUFBO0VBQUE7RUFBQTtJQUFBO0lBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQSxPQUNYLG1CQUFVO01BQ04sSUFBTXhCLEtBQUssR0FBRyxJQUFJLENBQUN5QixVQUFVLEdBQUcsSUFBSSxDQUFDQSxVQUFVLEdBQUcsSUFBSTtNQUN0RCxJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFTLEVBQUU7UUFBRWhCLFNBQVMsRUFBRSxJQUFJLENBQUNpQixjQUFjO1FBQUUzQixLQUFLLEVBQUVBO01BQU0sQ0FBQyxDQUFDO01BQy9FLElBQUksQ0FBQyxJQUFJLENBQUMyQixjQUFjLEVBQUU7UUFDdEIsTUFBTSxJQUFJaEIsS0FBSyxDQUFDLHlCQUF5QixDQUFDO01BQzlDO01BQ0EsSUFBTUQsU0FBUyxHQUFHRixNQUFNLENBQUNDLHFCQUFxQixDQUFDLElBQUksQ0FBQ2tCLGNBQWMsQ0FBQztNQUNuRSxJQUFJLENBQUNDLG1CQUFtQixDQUFDM0osMkRBQW1CLENBQUN5SSxTQUFTLEVBQUVWLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztNQUNyRSxJQUFJLENBQUMwQixhQUFhLENBQUMsT0FBTyxFQUFFO1FBQ3hCSSxhQUFhLEVBQUUsSUFBSSxDQUFDSCxjQUFjO1FBQ2xDakIsU0FBUyxFQUFFQSxTQUFTO1FBQ3BCVixLQUFLLEVBQUVBO01BQ1gsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBO0lBQUEsT0FDRCxzQkFBYTtNQUNULElBQUksQ0FBQ2pJLE9BQU8sQ0FBQ2dLLElBQUksQ0FBQ0MsT0FBTyxFQUFFO01BQzNCLElBQUksQ0FBQ04sYUFBYSxDQUFDLFNBQVMsRUFBRTtRQUMxQmhCLFNBQVMsRUFBRSxJQUFJLENBQUNpQixjQUFjO1FBQzlCM0IsS0FBSyxFQUFFLElBQUksQ0FBQ3lCLFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVUsR0FBRztNQUMvQyxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUE7SUFBQSxPQUNELDZCQUFvQlEsWUFBWSxFQUFFO01BQzlCLElBQU1sSyxPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPO01BQzVCLElBQUksQ0FBQ0EsT0FBTyxDQUFDZ0ssSUFBSSxFQUFFO1FBQ2ZoSyxPQUFPLENBQUNnSyxJQUFJLEdBQUdsQixVQUFVLENBQUMsSUFBSSxDQUFDOUksT0FBTyxDQUFDO01BQzNDO01BQ0FBLE9BQU8sQ0FBQ2dLLElBQUksQ0FBQ0csTUFBTSxDQUFDRCxZQUFZLENBQUM7SUFDckM7RUFBQztJQUFBO0lBQUEsT0FDRCx1QkFBY3hHLElBQUksRUFBRTBHLE9BQU8sRUFBRTtNQUN6QixJQUFJLENBQUNDLFFBQVEsQ0FBQzNHLElBQUksRUFBRTtRQUFFNEcsTUFBTSxFQUFFRixPQUFPO1FBQUVHLE1BQU0sRUFBRTtNQUFRLENBQUMsQ0FBQztJQUM3RDtFQUFDO0VBQUE7QUFBQSxFQS9CbUJ4SywyREFBVTtBQWlDbEMwSixTQUFTLENBQUNlLE1BQU0sR0FBRztFQUNmN0IsU0FBUyxFQUFFOEIsTUFBTTtFQUNqQnhDLEtBQUssRUFBRXlDO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzFERCIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY29weXJpZ2h0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9oZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2l0ZW1TdGF0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbG9hZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbWF0ZXJpZWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL21hdGVyaWVsX2RldGFpbHMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL25hdmJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvc2tlbGV0b24vbWF0ZXJpZWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3NrZWxldG9uL21hdGVyaWVsX2RldGFpbHMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb25zdGFudHMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2FjY3VlaWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9sb2dpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21hdGVyaWVsL2Rlc2t0b3AuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYXRlcmllbC9tYXRlcmllbF9kZXRhaWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWF0ZXJpZWwvcmVzZWF1LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWF0ZXJpZWwvcmV1bmlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21hdGVyaWVsL3RlbGVwaG9uaXF1ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtcmVhY3QvYXNzZXRzL2Rpc3QvcmVnaXN0ZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2dsb2JhbC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FjY3VlaWwuanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvYWNjdWVpbC5qc3hcIixcblx0XCIuL2xvZ2luLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2xvZ2luLmpzeFwiLFxuXHRcIi4vbWF0ZXJpZWwvZGVza3RvcC5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYXRlcmllbC9kZXNrdG9wLmpzeFwiLFxuXHRcIi4vbWF0ZXJpZWwvbWF0ZXJpZWxfZGV0YWlscy5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYXRlcmllbC9tYXRlcmllbF9kZXRhaWxzLmpzeFwiLFxuXHRcIi4vbWF0ZXJpZWwvcmVzZWF1LmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21hdGVyaWVsL3Jlc2VhdS5qc3hcIixcblx0XCIuL21hdGVyaWVsL3JldW5pb24uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWF0ZXJpZWwvcmV1bmlvbi5qc3hcIixcblx0XCIuL21hdGVyaWVsL3RlbGVwaG9uaXF1ZS5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYXRlcmllbC90ZWxlcGhvbmlxdWUuanN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKGolN0N0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1yZWFjdC0tcmVhY3QnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtcmVhY3QvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9vdGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiNzBweFwiLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiBcIjAuNVwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlIDBzXCIsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIngtc21hbGxcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmNzVcIlxyXG4gICAgICAgIH19PiBEaWdpdExpZ2h0IMKpIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LiBUb3VzIGRyb2l0cyByw6lzZXJ2w6lzLjwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IExpbmsgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5rJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIGNhcGl0YWxpemVXb3JkcyhzdHIpIHtcclxuICAgIHJldHVybiBzdHJcclxuICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgLnNwbGl0KCcgJylcclxuICAgICAgLm1hcCgod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpXHJcbiAgICAgIC5qb2luKCcgJykubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpLnJlcGxhY2VBbGwoJy0nLCBcIiBcIikudG9Mb3dlckNhc2UoKTtcclxuICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyKHsgdGl0bGUsIGl0ZW0gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInBhbmVsSGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2N1ZWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2N1ZWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2N1ZWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRlcmllbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGVuZ3RoIDw9IDAgP1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbWF0ZXJpZWwvJHtjYXBpdGFsaXplV29yZHModGl0bGUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmxlbmd0aCA+IDAgP1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NhcGl0YWxpemVXb3JkcyhpdGVtKS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGNhcGl0YWxpemVXb3JkcyhpdGVtLnNsaWNlKDEpKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPC8+KVxyXG59IiwiaW1wb3J0IHsgSVRFTVMgfSBmcm9tICcuLi9jb25zdGFudHMvZGF0YSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHRvdGFsID0gZnVuY3Rpb24gKENhdGVnb3J5KSB7XHJcbiAgaWYgKENhdGVnb3J5ID09IG51bGwgfHwgQ2F0ZWdvcnkgPT0gJycpIHtcclxuICAgIHsgcmV0dXJuIElURU1TLmZpbHRlcihpdGVtID0+IGl0ZW0pLmxlbmd0aCB9XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgeyByZXR1cm4gSVRFTVMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jYXRlZ29yeSA9PSBDYXRlZ29yeSkubGVuZ3RoIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGF2YWlsYWJsZSA9IGZ1bmN0aW9uIChDYXRlZ29yeSkge1xyXG4gIGlmIChDYXRlZ29yeSA9PSBudWxsIHx8IENhdGVnb3J5ID09ICcnKSB7XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiBJVEVNUy5maWx0ZXIoaXRlbSA9PiBpdGVtLmF2YWlsYWJsZSlcclxuICAgICAgICAubWFwKChpdGVtKSA9PlxyXG4gICAgICAgICAgKGl0ZW0pKS5sZW5ndGhcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiBJVEVNUy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNhdGVnb3J5ID09IENhdGVnb3J5KVxyXG4gICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmF2YWlsYWJsZSkubGVuZ3RoXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB1bmF2YWlsYWJsZSA9IGZ1bmN0aW9uIChDYXRlZ29yeSkge1xyXG4gIGlmIChDYXRlZ29yeSA9PSBudWxsIHx8IENhdGVnb3J5ID09ICcnKSB7XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiBJVEVNUy5maWx0ZXIoaXRlbSA9PiBpdGVtLnVuYXZhaWxhYmxlKVxyXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgICAoaXRlbSkpLmxlbmd0aFxyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHtcclxuICAgICAgcmV0dXJuIElURU1TLmZpbHRlcihpdGVtID0+IGl0ZW0uY2F0ZWdvcnkgPT0gQ2F0ZWdvcnkpXHJcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0udW5hdmFpbGFibGUpLmxlbmd0aFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXRlbVN0YXRzKHsgQ2F0ZWdvcnkgfSkge1xyXG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJzdGF0c0l0ZW1zXCI+XHJcbiAgICA8c3Bhbj5cclxuICAgICAgVG90YWw6IHt0b3RhbChDYXRlZ29yeSl9XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8c3Bhbj5cclxuICAgICAgRGlzcG9uaWJsZToge2F2YWlsYWJsZShDYXRlZ29yeSl9XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8c3Bhbj5cclxuICAgICAgSW5kaXNwb25pYmxlOiB7dW5hdmFpbGFibGUoQ2F0ZWdvcnkpfVxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PilcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJpbmdzIH0gZnJvbSAncmVhY3QtbG9hZGVyLXNwaW5uZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZGluZ0NvbXAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJsb2FkaW5nXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgICAgICBib3R0b206ICcwJyxcclxuICAgICAgICAgICAgbGVmdDogJzAnLFxyXG4gICAgICAgICAgICByaWdodDogJzAnLFxyXG4gICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDBweCcsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHB4JyxcclxuICAgICAgICB9fT48UmluZ3NcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInZhcigtLWRlZmF1dC1oZWFkZXItY29sb3IpXCJcclxuICAgICAgICAgICAgICAgIHNlY29uZGFyeUNvbG9yPSdibGFjaydcclxuICAgICAgICAgICAgICAgIHJhZGl1cz0nMTIuNSdcclxuICAgICAgICAgICAgICAgIGFyaWFMYWJlbD1cIm11dGF0aW5nLWRvdHMtbG9hZGluZ1wiXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyU3R5bGU9e3t9fVxyXG4gICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzPVwiXCJcclxuICAgICAgICAgICAgICAgIHZpc2libGU9e3RydWV9XHJcbiAgICAgICAgICAgIC8+PC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtKHsgaXRlbSB9KSB7XHJcbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInBhbmVsSXRlbVwiPlxyXG4gICAgPGRpdiBpZD1cImVudHJ5LXBpY1wiIGNsYXNzTmFtZT1cInBhbmVsSW1hZ2VcIj5cclxuICAgICAgPExpbmsgaHJlZj17aXRlbS5ocmVmfT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e2l0ZW0uaW1nfVxyXG4gICAgICAgICAgYWx0PXtpdGVtLmFsdH1cclxuICAgICAgICAgIHN0eWxlPXt7IG9iamVjdEZpdDogXCJjb3ZlclwiIH19XHJcbiAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1JbmZvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbUluZm9UaXRsZVwiPlxyXG4gICAgICAgIDxzcGFuPk5vbSBkdSBwcm9kdWl0IDogPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPntpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtSW5mb1RpdGxlXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9tYXRlcmllbC8ke2l0ZW0uY2F0ZWdvcnkubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpfWB9PlxyXG4gICAgICAgICAgPHNwYW4+Q2F0w6lnb3JpZSA6IHtpdGVtLmNhdGVnb3J5fTwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1JbmZvVGl0bGVcIj5cclxuICAgICAgICB7aXRlbS5hdmFpbGFibGUgP1xyXG4gICAgICAgICAgPHNwYW4+U3RhdHV0IDogPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiZGFya2dyZWVuXCIgfX0+RGlzcG9uaWJsZTwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICA8c3Bhbj5TdGF0dXQgOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5Sw6lzZXJ2w6k8L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj4pXHJcbn0iLCJpbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW0oeyBpdGVtIH0pIHtcclxuXHJcbiAgZnVuY3Rpb24gY2FwaXRhbGl6ZVdvcmRzKHN0cikge1xyXG4gICAgcmV0dXJuIHN0clxyXG4gICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAuc3BsaXQoJyAnKVxyXG4gICAgICAubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcclxuICAgICAgLmpvaW4oJyAnKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiB6b29tKGUpIHtcclxuICAgIFxyXG4gICAgdmFyIHpvb21lciA9IGUuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICBsZXQgb2Zmc2V0WDtcclxuICAgIGxldCBvZmZzZXRZO1xyXG5cclxuICAgIGUub2Zmc2V0WCA/IG9mZnNldFggPSBlLm9mZnNldFggOiBvZmZzZXRYID0gZS5wYWdlWDtcclxuICAgIGUub2Zmc2V0WSA/IG9mZnNldFkgPSBlLm9mZnNldFkgOiBvZmZzZXRZID0gZS5wYWdlWTtcclxuXHJcbiAgICBsZXQgeCA9IG9mZnNldFgvem9vbWVyLm9mZnNldFdpZHRoKjUwXHJcbiAgICBsZXQgeSA9IG9mZnNldFkvem9vbWVyLm9mZnNldEhlaWdodCo4MFxyXG5cclxuICAgIHpvb21lci5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSB4ICsgJyUgJyArIHkgKyAnJSc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwicGFuZWxJbmZvSXRlbVwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbEltYWdlXCI+XHJcbiAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiem9vbVwiIG9uTW91c2VNb3ZlPXt6b29tfSBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke2l0ZW0uaW1nfSlgIH19PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17aXRlbS5pbWd9XHJcbiAgICAgICAgICBhbHQ9e2l0ZW0uYWx0fVxyXG4gICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezUwMH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2ZpZ3VyZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtSW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1JbmZvVGl0bGVcIj5cclxuICAgICAgICA8aDE+e2l0ZW0ubmFtZX08L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtSW5mb0NhdFwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvbWF0ZXJpZWwvJHtpdGVtLmNhdGVnb3J5Lm5vcm1hbGl6ZShcIk5GRFwiKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKX1gfT5cclxuICAgICAgICAgIENhdMOpZ29yaWUgOiB7Y2FwaXRhbGl6ZVdvcmRzKGl0ZW0uY2F0ZWdvcnkpfVxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIml0ZW1JbmZvQXZhaWxhYmxlXCJ9PlxyXG4gICAgICAgIHtpdGVtLmF2YWlsYWJsZSA/XHJcbiAgICAgICAgICA8c3Bhbj5TdGF0dXQgOiA8cCBzdHlsZT17eyBjb2xvcjogXCJkYXJrZ3JlZW5cIiB9fT5EaXNwb25pYmxlPC9wPjwvc3Bhbj5cclxuICAgICAgICAgIDpcclxuICAgICAgICAgIDxzcGFuPlN0YXR1dCA6IDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PlLDqXNlcnbDqTwvcD48L3NwYW4+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtSW5mb0VtcGxcIj5cclxuICAgICAgICA8cD5FbXBsYWNlbWVudCA6IHtpdGVtLmVtcGxhY2VtZW50fSBOwroge2l0ZW0uaWR9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtSW5mb0Rlc2NcIj5cclxuICAgICAgICA8c3Bhbj48aDM+RGVzY3JpcHRpb24gOiA8L2gzPiB7aXRlbS5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1JbmZvQ2FyXCI+XHJcbiAgICAgICAgPHNwYW4+PGgzPkNhcmFjdMOpcmlzdGlxdWVzIDogPC9oMz4ge2l0ZW0uY2FyYWN0ZXJpc3RpcXVlc308L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aXRlbS5hdmFpbGFibGUgP1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdlbmRhR29vZ2xlXCI+XHJcbiAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2FsZW5kYXIuZ29vZ2xlLmNvbS9jYWxlbmRhci9lbWJlZD9oZWlnaHQ9NjAwJndrc3Q9MSZiZ2NvbG9yPSUyM2ZmZmZmZiZjdHo9RXVyb3BlJTJGUGFyaXMmc2hvd0RhdGU9MSZzaG93TmF2PTEmc2hvd1RpdGxlPTAmc2hvd1ByaW50PTEmc2hvd1RhYnM9MSZzaG93Q2FsZW5kYXJzPTAmc3JjPU1qTmhaVFZoT0dGaVpXRmtObU5pWm1VeU5XUXhNakpqWWpNeVptTTNZalprTXpsbFlXWTBPRFprWW1Nd09UYzJNR1ptTVdJNFlXUTROMlU1WkdGaVlVQm5jbTkxY0M1allXeGxibVJoY2k1bmIyOW5iR1V1WTI5dCZjb2xvcj0lMjM2MTYxNjFcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IDAgfX0+XHJcbiAgICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgICA8L2Rpdj4gOiBudWxsXHJcbiAgICAgIH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3V0b25SZXNlcnZlclwiPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blJlc2VydmVyXCJcclxuICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICBzeD17eyBib3JkZXJDb2xvcjogXCJ3aGl0ZVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFJlc2VydmVyXCI+XHJcbiAgICAgICAgICAgIDxwPlJFU0VSVkVSIENFIE1BVEVSSUVMPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+KVxyXG59IiwiaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZiYXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0TmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJiZ0ltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2J1aWxkL2ltYWdlcy9kaWdpdGxpZ2h0LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiZGlnaWxpZ2h0IHBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2N1ZWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdUZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2J1aWxkL2ltYWdlcy9uYXZiYXIvbWF0ZXJpYWwucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJtYXRlcmlhbCBwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1hdMOpcmllbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJQYW5lbE1hdGVyaWVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYXRlcmllbC9yZXNlYXVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ViQnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2J1aWxkL2ltYWdlcy9uYXZiYXIvcmVzZWF1LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInJlc2VhdSBwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Sw6lzZWF1PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYXRlcmllbC90ZWxlcGhvbmlxdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ViQnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2J1aWxkL2ltYWdlcy9uYXZiYXIvdGVsZXBob25lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInRlbGVwaG9uZSBwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Uw6lsw6lwaG9uaXF1ZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWF0ZXJpZWwvZGVza3RvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJCdG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdUZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYnVpbGQvaW1hZ2VzL25hdmJhci9kZXNrdG9wLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImRlc2t0b3AgcGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGVza3RvcDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWF0ZXJpZWwvcmV1bmlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJCdG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdUZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYnVpbGQvaW1hZ2VzL25hdmJhci9yZXVuaW9uLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInJldW5pb24gcGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UsOpdW5pb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PilcclxufSIsImltcG9ydCBTa2VsZXRvbiBmcm9tICdAbXVpL21hdGVyaWFsL1NrZWxldG9uJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJdGVtU3RhdHMgZnJvbSAnLi4vaXRlbVN0YXRzJ1xyXG5pbXBvcnQgSXRlbSBmcm9tICcuLi9tYXRlcmllbCdcclxuaW1wb3J0IHsgSVRFTVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvZGF0YSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IGl0ZW1zID0gZnVuY3Rpb24gKENhdGVnb3J5KSB7XHJcbiAgICBpZiAoQ2F0ZWdvcnkgPT0gbnVsbCB8fCBDYXRlZ29yeSA9PSAnJykge1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIElURU1TXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5hdmFpbGFibGUpXHJcbiAgICAgICAgICAgICAgICAubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAvPikpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gSVRFTVNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmNhdGVnb3J5ID09IENhdGVnb3J5KVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoaXRlbSkgPT5cclxuICAgICAgICAgICAgICAgICg8SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBTa2VsZXRvbkJyZWFkY3J1bWIgPSAoKSA9PiAoXHJcbiAgICA8c3BhbiBzdHlsZT17e1xyXG4gICAgICAgIGhlaWdodDogJzQlJyxcclxuICAgIH19PlxyXG4gICAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwidGV4dFwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMzAlXCJcclxuICAgICAgICAgICAgaGVpZ2h0PSc4MCUnXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnNSUnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMS41JScsXHJcbiAgICAgICAgICAgIH19IC8+XHJcbiAgICA8L3NwYW4+KVxyXG5cclxuY29uc3QgU2tlbGV0b25JdGVtID0gKCkgPT4gKFxyXG4gICAgPFNrZWxldG9uIHZhcmlhbnQ9XCJyb3VuZGVkXCJcclxuICAgICAgICB3aWR0aD1cIjQ1JVwiXHJcbiAgICAgICAgaGVpZ2h0PScxNSUnXHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgbWFyZ2luTGVmdDogJzElJyxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnMyUnLFxyXG4gICAgICAgIH19IC8+KVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tVGltZShtaW4sIG1heCkgeyAvLyBtaW4gYW5kIG1heCBpbmNsdWRlZCBcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNrZWxldHRlKHsgcGFnZSB9KSB7XHJcblxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH0sIHJhbmRvbVRpbWUoNTAwLCAxMDAwKSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoPD5cclxuXHJcbiAgICAgICAgICAgICAgICA8U2tlbGV0b25CcmVhZGNydW1iIC8+XHJcbiAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KDgpLmtleXMoKV0ubWFwKChpdGVtKSA9PiAoPFNrZWxldG9uSXRlbSBrZXk9e2l0ZW19IC8+KSl9XHJcblxyXG4gICAgICAgICAgICA8Lz4pIDogKDw+PEl0ZW1TdGF0cyBDYXRlZ29yeT17cGFnZX0gLz4ge2l0ZW1zKHBhZ2UpfVxyXG4gICAgICAgICAgICA8Lz4pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFNrZWxldG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU2tlbGV0b24nO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJdGVtIGZyb20gJy4uL21hdGVyaWVsX2RldGFpbHMnO1xyXG5pbXBvcnQgeyBJVEVNUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9kYXRhJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IGNhcGl0YWxpemVXb3JkcyA9IChzdHIpID0+IHtcclxuICAgIHJldHVybiBzdHJcclxuICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgLnNwbGl0KCcgJylcclxuICAgICAgLm1hcCgod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpXHJcbiAgICAgIC5qb2luKCcgJykubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpLnJlcGxhY2VBbGwoJy0nLCBcIiBcIikudG9Mb3dlckNhc2UoKTtcclxuICB9O1xyXG5cclxuY29uc3QgaXRlbXMgPSBmdW5jdGlvbiAoaXRlbU5hbWUpIHtcclxuICAgIHJldHVybiBJVEVNU1xyXG4gICAgICAgIC5maWx0ZXIoaXRlbSA9PiBjYXBpdGFsaXplV29yZHMoaXRlbS5uYW1lKSA9PSBjYXBpdGFsaXplV29yZHMoaXRlbU5hbWUpKVxyXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgKDxJdGVtXHJcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAvPlxyXG4gICAgICAgICkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbVRpbWUobWluLCBtYXgpIHsgLy8gbWluIGFuZCBtYXggaW5jbHVkZWQgXHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2VsZXR0ZSh7IGl0ZW1OYW1lIH0pIHtcclxuXHJcbiAgICBjb25zdCBJdGVtSW1hZ2UgPSAoKSA9PiAoXHJcbiAgICAgICAgPFNrZWxldG9uXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbj1cIndhdmVcIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwicm91bmRlZFwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiODAlXCJcclxuICAgICAgICAgICAgaGVpZ2h0PSc1NSUnXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTAlJyxcclxuICAgICAgICAgICAgfX0gLz4pXHJcblxyXG4gICAgY29uc3QgVGV4dFRpdGxlID0gKCkgPT4gKFxyXG4gICAgICAgIDxTa2VsZXRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwicm91bmRlZFwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTAlXCJcclxuICAgICAgICAgICAgaGVpZ2h0PSczJSdcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcxMCUnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMSUnLFxyXG4gICAgICAgICAgICB9fSAvPilcclxuXHJcbiAgICBjb25zdCBUZXh0RGVzY3JpcHRpb24gPSAoKSA9PiAoXHJcbiAgICAgICAgPFNrZWxldG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJyb3VuZGVkXCJcclxuICAgICAgICAgICAgd2lkdGg9XCI4MCVcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9JzIlJ1xyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzEwJScsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICczJScsXHJcbiAgICAgICAgICAgIH19IC8+KVxyXG5cclxuICAgIGNvbnN0IEJ1dHRvbiA9ICgpID0+IChcclxuICAgICAgICA8U2tlbGV0b25cclxuICAgICAgICAgICAgYW5pbWF0aW9uPVwid2F2ZVwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJyb3VuZGVkXCJcclxuICAgICAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9JzMlJ1xyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzEwJScsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICc4JScsXHJcbiAgICAgICAgICAgIH19IC8+KVxyXG5cclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICB9LCByYW5kb21UaW1lKDUwMCwgMTAwMCkpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gKDw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGFsaWduQ29udGVudDogJ2NlbnRlcicgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT48SXRlbUltYWdlIC8+PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0VGl0bGUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheSg4KS5rZXlzKCldLm1hcCgoaXRlbSkgPT4gKDxUZXh0RGVzY3JpcHRpb24ga2V5PXtpdGVtfSAvPikpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8Lz4pIDogKDw+e2l0ZW1zKGl0ZW1OYW1lKX1cclxuICAgICAgICAgICAgPC8+KX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSIsImV4cG9ydCBjb25zdCBJVEVNUyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiBcIkNvbW11dGF0ZXVyIENpc2NvIDI1MFwiLFxyXG4gICAgICAgIGFsdDogXCJDb21tdXRhdGV1clwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcInLDqXNlYXVcIixcclxuICAgICAgICBlbXBsYWNlbWVudDogXCJTYWxsZSBkZSBzdG9ja2FnZSAxXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTGVzIGNvbW11dGF0ZXVycyBDaXNjbyAyNTAgc29udCBjb27Dp3VzIHBvdXIgw6p0cmUgZmFjaWxlcyDDoCBkw6lwbG95ZXIgZXQgdXRpbGlzZXIgcGFyIGxlcyBwZXRpdGVzIGVudHJlcHJpc2VzIGV0IGxldXJzIHBhcnRlbmFpcmVzLiBEZXMgaW50ZXJmYWNlcyBncmFwaGlxdWVzIGF2YW5jw6llcyBldCBjb252aXZpYWxlcyByw6lkdWlzZW50IGxlIHRlbXBzIGRlIGTDqXBsb2llbWVudCwgZGUgZMOpcGFubmFnZSBldCBkZSBnZXN0aW9uIGR1IHLDqXNlYXUuIERlcyBhc3Npc3RhbnRzIGRlIGNvbmZpZ3VyYXRpb24gc2ltcGxpZmllbnQgbGVzIHTDomNoZXMgZGUgY29uZmlndXJhdGlvbiBjb3VyYW50ZXMgZXQgY29uc3RpdHVlbnQgbCdvdXRpbCBpZMOpYWwgcG91ciBwYXJhbcOpdHJlciBldCBnw6lyZXIgbGUgcsOpc2VhdS5cIixcclxuICAgICAgICBjYXJhY3RlcmlzdGlxdWVzOiBcIkNvbnRyw7RsZSBkdSBmbHV4LCBwcmlzZSBlbiBjaGFyZ2UgZGUgQk9PVFAsIElHTVAgc25vb3BpbmcsIHByaXNlIGVuIGNoYXJnZSBkZSBTeXNsb2csIHByb3RlY3Rpb24gY29udHJlIGxlcyBhdHRhcXVlcyBkZSBEw6luaSBkZSBTZXJ2aWNlLCBtaXNlIGVuIG1pcm9pciBkZXMgcG9ydHMsIHByaXNlIGVuIGNoYXJnZSBEaWZmU2VydiwgbWlzZSBlbiBmaWxlIGQnYXR0ZW50ZSBXZWlnaHRlZCBSb3VuZCBSb2JpbiAoV1JSKSwgY29udHLDtGxlIGRlIGxhIHRlbXDDqnRlIGRlIEJyb2FkY2FzdCwgcHJpc2UgZW4gY2hhcmdlIGQnSVB2NiwgTXVsdGljYXN0IFN0b3JtIENvbnRyb2wsIFVuaWNhc3QgU3Rvcm0gQ29udHJvbCwgcHJpc2UgZW4gY2hhcmdlIGR1IHByb3RvY29sZSBTTlRQLCBwcmlzZSBlbiBjaGFyZ2UgZHUgcHJvdG9jb2xlIFNUUCAoU3Bhbm5pbmcgVHJlZSBQcm90b2NvbCksIHByaXNlIGVuIGNoYXJnZSBkdSBwcm90b2NvbGUgUlNUUCAoUmFwaWQgU3Bhbm5pbmcgVHJlZSBQcm90b2NvbCksIHByaXNlIGVuIGNoYXJnZSBkdSBwcm90b2NvbGUgTXVsdGlwbGUgU3Bhbm5pbmcgVHJlZSBQcm90b2NvbCAoTVNUUCksIHF1YWxpdMOpIGRlIHNlcnZpY2UgKFFEUyksIHNlcnZldXIgREhDUCwgc25vb3BpbmcgTUxELCBib3V0b24gZGUgcsOpaW5pdGlhbGlzYXRpb24sIHNhbnMgdmVudGlsYXRldXIsIHByaXNlIGVuIGNoYXJnZSBMTERQLCByZWxhaXMgREhDUCwgTGluayBBZ2dyZWdhdGlvbiBDb250cm9sIFByb3RvY29sIChMQUNQKSwgUG9ydCBTZWN1cml0eSwgY2xpZW50IERIQ1AsIEVuZXJneSBFZmZpY2llbnQgRXRoZXJuZXQsIGJhc2UgZCdpbmZvcm1hdGlvbiBkZSBnZXN0aW9uIChNSUIpLCB0YW1wb24gMTIgTUIsIENsYXNzIG9mIFNlcnZpY2UgKENvUyksIGF1dGhlbnRpZmljYXRpb24gODAyLjF4LCBEdXBsaWNhdGVkIEFkZHJlc3MgRGV0ZWN0aW9uLCBUeXBlIG9mIFNlcnZpY2UgKFRvUyksIHByaXNlIGVuIGNoYXJnZSBEaWZmU2VydiBDb2RlIFBvaW50IChEU0NQKSwgdGVzdCBkZSBjw6JibGUsIHRlY2hub2xvZ2llIFNtYXJ0UG9ydCwgc3lzdMOobWUgZGUgcHLDqXZlbnRpb24gZHUgYmxvY2FnZSBlbiB0w6p0ZSwgSW50ZXJuZXQgQ29udHJvbCBNZXNzYWdlIFByb3RvY29sIChJQ01QKSwgQ2lzY28gRGlzY292ZXJ5IFByb3RvY29sLCBtaXJvaXIgVkxBTi5cIixcclxuICAgICAgICBpbWc6IFwiL2J1aWxkL2ltYWdlcy9pdGVtL2NvbW11dGF0ZXVyLmpwZ1wiLFxyXG4gICAgICAgIGhyZWY6IFwiL21hdGVyaWVsL3Jlc2VhdS9jb21tdXRhdGV1ci1jaXNjby0yNTBcIixcclxuICAgICAgICBhdmFpbGFibGU6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJSb3V0ZXVyIENpc2NvIDE5MjFcIixcclxuICAgICAgICBhbHQ6IFwiUm91dGV1clwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcInLDqXNlYXVcIixcclxuICAgICAgICBlbXBsYWNlbWVudDogXCJTYWxsZSBkZSBzdG9ja2FnZSAxXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTGUgQ2lzY28gMTkyMSBzJ2FwcHVpZSBzdXIgbGUgbWVpbGxldXIgZGUgc2EgY2F0w6lnb3JpZS4gVG91cyBsZXMgcm91dGV1cnMgw6Agc2VydmljZXMgaW50w6lncsOpcyBkZSBsYSBnYW1tZSBDaXNjbyAxOTAwIG9mZnJlbnQgdW5lIGFjY8OpbMOpcmF0aW9uIGR1IGNyeXB0YWdlIG1hdMOpcmllbCBpbnTDqWdyw6kgZXQgZGVzIHNlcnZpY2VzIGRlIHPDqWN1cml0w6kgYXZhbmPDqXMuIEVuIG91dHJlLCBsZXMgcGxhdGVzLWZvcm1lcyBwcmVubmVudCBlbiBjaGFyZ2UgbGEgcGx1cyBsYXJnZSBnYW1tZSBkJ29wdGlvbnMgZGUgY29ubmVjdGl2aXTDqSBmaWxhaXJlIGV0IHNhbnMgZmlsIGR1IHNlY3RldXIsIHRlbGxlcyBxdWUgbGVzIGNvbm5leGlvbnMgc8OpcmllLCBUMS9FMSwgeERTTCwgR2lnYWJpdCBFdGhlcm5ldCBldCBzYW5zIGZpbCBkZSB0cm9pc2nDqG1lIGfDqW7DqXJhdGlvbiAoM0cpLiBMZSBDaXNjbyAxOTIxIGVzdCBjb27Dp3UgcG91ciByw6lwb25kcmUgYXV4IGV4aWdlbmNlcyBkZXMgYXBwbGljYXRpb25zIGRlcyBzdWNjdXJzYWxlcyBkJ2F1am91cmQnaHVpLCBhdmVjIHVuZSBmbGV4aWJpbGl0w6kgZGUgY29uY2VwdGlvbiBwb3VyIGxlcyBhcHBsaWNhdGlvbnMgZnV0dXJlcy4gVm91cyBwb3V2ZXogZmFjaWxlbWVudCBpbnRlcmNoYW5nZXIgbGVzIG1vZHVsZXMgdXRpbGlzw6lzIHN1ciBsZSBDaXNjbyAxOTIxIGF2ZWMgZCdhdXRyZXMgcm91dGV1cnMgQ2lzY28gcG91ciBhc3N1cmVyIHVuZSBwcm90ZWN0aW9uIG1heGltYWxlIGRlIHZvdHJlIGludmVzdGlzc2VtZW50LiBMJ3V0aWxpc2F0aW9uIGRlIGNhcnRlcyBkJ2ludGVyZmFjZSBjb21tdW5lcyDDoCBsJ2Vuc2VtYmxlIGR1IHLDqXNlYXUgcsOpZHVpdCBjb25zaWTDqXJhYmxlbWVudCBsYSBjb21wbGV4aXTDqSBkZSBsYSBnZXN0aW9uIGRlcyBzdG9ja3MsIGRlIGxhIG1pc2UgZW4gxZN1dnJlIGRlIGdyYW5kcyBkw6lwbG9pZW1lbnRzIGRlIHLDqXNlYXUgZXQgZGUgbGEgbWFpbnRlbmFuY2UgZGVzIGNvbmZpZ3VyYXRpb25zIHBvdXIgZGVzIHN1Y2N1cnNhbGVzIGRlIHRhaWxsZXMgZGl2ZXJzZXMuXCIsXHJcbiAgICAgICAgY2FyYWN0ZXJpc3RpcXVlczogXCJcdFByb3RlY3Rpb24gcGFyIGZpcmV3YWxsLCBQcmlzZSBlbiBjaGFyZ2UgVlBOLCBwcmlzZSBlbiBjaGFyZ2UgZGUgTVBMUywgcHJpc2UgZW4gY2hhcmdlIGR1IHLDqXNlYXUgbG9jYWwgKExBTikgdmlydHVlbCwgcHJpc2UgZW4gY2hhcmdlIGRlIFN5c2xvZywgcHJpc2UgZW4gY2hhcmdlIGQnSVB2NiwgQ2xhc3MtQmFzZWQgV2VpZ2h0ZWQgRmFpciBRdWV1aW5nIChDQldGUSksIFdlaWdodGVkIFJhbmRvbSBFYXJseSBEZXRlY3Rpb24gKFdSRUQpLCBxdWFsaXTDqSBkZSBzZXJ2aWNlIChRRFMpLCBXZWIgU2VydmljZXMgTWFuYWdlbWVudCBBZ2VudCAoV1NNQSksIFRSLTA2OSBBZ2VudCwgTmV0Rmxvd1wiLFxyXG4gICAgICAgIGltZzogXCIvYnVpbGQvaW1hZ2VzL2l0ZW0vcm91dGV1ci5qcGdcIixcclxuICAgICAgICBocmVmOiBcIi9tYXRlcmllbC9yZXNlYXUvcm91dGV1ci1jaXNjby0xOTIxXCIsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6IFwiQ3BsIEFWMjAwMFwiLFxyXG4gICAgICAgIGFsdDogXCJDcGxcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJyw6lzZWF1XCIsXHJcbiAgICAgICAgZW1wbGFjZW1lbnQ6IFwiU2FsbGUgZGUgc3RvY2thZ2UgMVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRvdXQgY29tbWUgbGUgRC1MaW5rIERIUC03MDFBViwgbGUgVEwtUEE5MDIwIGVtYmFycXVlIGRvbmMgdW5lIHB1Y2UgY29tbXVuaWNhbnRlIHNpZ27DqWUgQnJvYWRjb20uIFBsdXMgdsOpbG9jZSBxdWUgc29uIGhvbW9sb2d1ZSBRdWFsY29tbSBRQ0E3NTAwICgxLDIgR2IvcyksIGVsbGUgcGVybWV0IGQnYWZmaWNoZXIgZGVzIGTDqWJpdHMgdGjDqW9yaXF1ZXMgcGx1cyDDqWxldsOpcywgYmllbiBxdWUgZm9uY3Rpb25uYW50IMOpZ2FsZW1lbnQgc3VyIGxhIG5vcm1lIEhvbWVQbHVnIEFWMi4gTGUgY29uc3RydWN0ZXVyIHBhcmxlIGFpbnNpIGQndW4gZMOpYml0IHRow6lvcmlxdWUgZGUgMiBHYi9zLCBzb2l0IDEwMCBNYi9zIGRlIHBsdXMgcXVlIHN1ciBsYSB2ZXJzaW9uIGZyYW7Dp2Fpc2UgZHUgYmxvYyBELUxpbmsgZXQgODAwIE1iL3MgZGUgcGx1cyBxdWUgc3VyIGxlcyBibG9jcyB1dGlsaXNhbnQgdW5lIHB1Y2UgUXVhbGNvbW0uIFBvdXIgcHJvZml0ZXIgZGUgdGVscyBkw6liaXRzIOKAlCAgYnJ1dHMgb24gbGUgcmFwcGVsbGUg4oCUIGlsIGVzdCB0b3V0ZWZvaXMgbsOpY2Vzc2FpcmUgZGUgcG91dm9pciB1dGlsaXNlciBsYSBmb25jdGlvbiBNaU1vIGV0IGRvbmMgZGUgZGlzcG9zZXIgZGUgdHJvaXMgY8OiYmxlcyDDqWxlY3RyaXF1ZXMgc3VyIGNoYXF1ZSBwcmlzZSBkZSBjb3VyYW50LlwiLFxyXG4gICAgICAgIGNhcmFjdGVyaXN0aXF1ZXM6IFwiRMOpYml0IHRow6lvcmlxdWVcdDIgR2JpdC9zIFBvcnRzXHQyeCBHaWdhYml0IEV0aGVybmV0IE5vcm1lXHRIb21lUGx1ZyBBVjIgOyBJRUVFMTkwMSA7IEhvbWVQbHVnIEFWIFPDqWN1cml0w6lcdEFFUyAxMjggYml0cyBHYXJhbnRpZVx0MyBXaS1GaVx0Tm9uIFN3aXRjaCByw6lzZWF1XHRPdWkgUHJpc2UgZmVtZWxsZVx0T3VpXCIsXHJcbiAgICAgICAgaW1nOiBcIi9idWlsZC9pbWFnZXMvaXRlbS9jcGwuanBnXCIsXHJcbiAgICAgICAgaHJlZjogXCIvbWF0ZXJpZWwvcmVzZWF1L2NwbC1BVjIwMDBcIixcclxuICAgICAgICBhdmFpbGFibGU6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgbmFtZTogXCJZZWFsaW5rIFQ1NFdcIixcclxuICAgICAgICBhbHQ6IFwiVMOpbMOpcGhvbmUgZml4ZVwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcInTDqWzDqXBob25pcXVlXCIsXHJcbiAgICAgICAgZW1wbGFjZW1lbnQ6IFwiU2FsbGUgZGUgc3RvY2thZ2UgMlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkF2ZWMgc29uIG1vZMOobGUgVDU0VywgWWVhbGluayBwcm9wb3NlIHVuIHBvc3RlIElQIGhhdXQgZGUgZ2FtbWUgcG91ciBsZXMgZW50cmVwcmlzZXMgZXQgbGUgbW9uZGUgcHJvZmVzc2lvbm5lbC4gRG90w6kgZCd1biDDqWNyYW4gY291bGV1ciBMQ0QgNCwzIHBvdWNlcyB0YWN0aWxlIGV0IG9mZnJhbnQgcGx1c2lldXJzIHBvc2l0aW9ucyBwb3VyIHVuZSB2aXNpYmlsaXTDqSBvcHRpbWFsZSwgaWwgcGVybWV0IHVuZSBuYXZpZ2F0aW9uIGZsdWlkZSBldCBhaXPDqWUuIEdyw6JjZSBhdXggZGlmZsOpcmVudHMgdMOpbW9pbnMgbHVtaW5ldXggYmljb2xvcmVzIChyb3VnZSBldCB2ZXJ0KSBkJ2luZm9ybWF0aW9ucyBkJ8OpdGF0IGRlIGxpZ25lLCBkZSBtZXNzYWdlcyBvdSBkJ2FwcGVscyBlbiBhdHRlbnRlLCB2b3lleiBkJ3VuIHNldWwgY291cCBkJ29laWwgdm90cmUgYWN0aXZpdMOpIGVuIGNvdXJzLiBOaXZlYXUgaW50ZXJmYWNlIHV0aWxpc2F0ZXVyLCBsZSBZZWFsaW5rIFQ1NFcgZXN0IHBlbnPDqSBwb3VyIMOqdHJlIGludHVpdGlmIGV0IG5lIHBvc2VyIGF1Y3VuIHByb2Jsw6htZXMgYXV4IHByb2Zlc3Npb25uZWxzLCBwZXUgaW1wb3J0ZSBxdSdpbHMgc29pZW50IMOgIGwnYWlzZSBhdmVjIGxhIHTDqWzDqXBob25pZSBvdSBub24uIExlcyBpY8O0bmVzIGFpbnNpIHF1ZSBsZXMgZGlmZsOpcmVudGVzIHRvdWNoZXMgcHJvZ3JhbW1hYmxlcyBwZXJtZXR0ZW50IHVuZSBuYXZpZ2F0aW9uIGV0IHVuZSB1dGlsaXNhdGlvbiBzaW1wbGlmacOpZS4gRW5maW4sIGxlIHTDqWzDqXBob25lIGVzdCDDqXZpZGVtbWVudCBjYXBhYmxlIGQnYWZmaWNoZXIgbGUgbm9tIGV0IGxlIG51bcOpcm8gZGUgbCdhcHBlbGFudCwgcGVybWV0dGFudCBkZSBjb25uYcOudHJlIHF1aSBlc3NhaWUgZGUgdm91cyBqb2luZHJlLlwiLFxyXG4gICAgICAgIGNhcmFjdGVyaXN0aXF1ZXM6IFwiTGVzIGNhcmFjdMOpcmlzdGlxdWVzIGF1ZGlvIGR1IHTDqWzDqXBob25lIElQIFllYWxpbmsgVDU0VyBzb250IGlzc3VlcyBkZSBsYSBkZXJuacOocmUgZ8OpbsOpcmF0aW9uLiBQcmVuYW50IGVuIGNoYXJnZSBsZSBDb2RlYyBPUFVTLCBsZSAgVDU0VyBwcm9wb3NlIHVuZSBxdWFsaXTDqSBkZSB2b2l4IEhEIGdyw6JjZSBhdSBjb21iaW7DqSBldCBhdSBoYXV0LXBhcmxldXIuICBDb21wYXRpYmxlIGF2ZWMgbGVzIHByb3Row6hzZXMgYXVkaXRpdmVzIChIQUMpLCBsZSB0w6lsw6lwaG9uZSBTSVAgVDU0VyBwZXJtZXQsIGQndW5lIHBhcnQsIGQnb2ZmcmlyIHVuIGJvdWNsaWVyIGFjY291c3RpcXVlIGNvbnRyZSBsZXMgYnJ1aXRzIHRyb3AgYWlnw7xlIHByb3ZlbmFudCBkZSB2b3RyZSBpbnRlcmxvY3V0ZXVyLCBldCBkJ2F1dHJlIHBhcnQsIG9mZnJlIHVuIGZpbHRyYWdlIGludGVsbGlnZW50IGR1IGJydWl0LiBMZSBUNTRXIGVzdCBjYXBhYmxlIGRlIGZpbHRyZXIgZW4gcGFydGllIGxlcyBicnVpdHMgbnVpc2libGVzIGF1dG91ciBkZSB2b3VzIGV0IGRlIGxlcyB0cmFpdGVyIHBvdXIgbmUgcsOpY3Vww6lyZXIgcXVlIGxhIHZvaXguXCIsXHJcbiAgICAgICAgaW1nOiBcIi9idWlsZC9pbWFnZXMvaXRlbS90ZWxlcGhvbmUtZml4ZS5wbmdcIixcclxuICAgICAgICBocmVmOiBcIi9tYXRlcmllbC90ZWxlcGhvbmlxdWUveWVhbGluay10NTR3XCIsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA1LFxyXG4gICAgICAgIG5hbWU6IFwiSXBob25lIDEyXCIsXHJcbiAgICAgICAgYWx0OiBcIlTDqWzDqXBob25lIHBvcnRhYmxlXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwidMOpbMOpcGhvbmlxdWVcIixcclxuICAgICAgICBlbXBsYWNlbWVudDogXCJTYWxsZSBkZSBzdG9ja2FnZSAyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVG91dCBlbiBz4oCZaW5zcGlyYW50IGR1IGRlc2lnbiBkZXMgbm91dmVhdXggaVBhZCwgbOKAmWlQaG9uZSAxMiByZW5vdWUgw6lnYWxlbWVudCBhdmVjIGxlIHBhc3PDqSBlbiBhcmJvcmFudCB1biBzdHlsZSBxdWkgbuKAmWVzdCBwYXMgc2FucyByYXBwZWxlciBsZXMgYW5jaWVubmVzIGfDqW7DqXJhdGlvbnMgZGUgc21hcnRwaG9uZXMgQXBwbGUgOyBub3RhbW1lbnQgbGVzIDTDqG1lIGV0IDXDqG1lLiBMZSB0w6lsw6lwaG9uZSBzZSB2ZXV0IHBsdXMgY29tcGFjdCBxdWUgc29uIHByw6lkw6ljZXNzZXVyIGV0IGFmZmljaGUgZGUgc3VyY3Jvw650IHVuZSBmaW5pdGlvbiBwbHVzIMOpbMOpZ2FudGUsIHF14oCZaWwgZG9pdCDDoCBkZXMgYm9yZHVyZXMgbmV0dGVtZW50IHBsdXMgZmluZXMuIExlIHNtYXJ0cGhvbmUgZGUgMTTDqG1lIGfDqW7DqXJhdGlvbiBwYXJ0YWdlIHBhciBhaWxsZXVycyBsZXMgbcOqbWVzIGRpbWVuc2lvbnMgcXVlIGzigJlpUGhvbmUgMTIgUHJvIGV0IGp1c3RpZmllIGTigJl1bmUgdHLDqHMgYm9ubmUgZXJnb25vbWllLCBwdWlzcXXigJlpbCBzZSBtYW5pcHVsZSBhaXPDqW1lbnQgZCd1bmUgc2V1bGUgbWFpbi5cIixcclxuICAgICAgICBjYXJhY3RlcmlzdGlxdWVzOiBcIlByb2Nlc3NldXJcdEFwcGxlIEExMyBCaW9uaWNcdEFwcGxlIEExNCBCaW9uaWMgTcOpbW9pcmUgdml2ZSAoUkFNKVx0NCBHb1x0NCBHbyBDYXBhY2l0w6kgZGUgc3RvY2thZ2VcdDY0IEdvLCAxMjggR28gb3UgMjU2IEdvXHQ2NCBHbywgMTI4IEdvIG91IDI1NiBHbyBBcHBhcmVpbCBwaG90b1x0RG91YmxlIGNhbcOpcmEgZGUgMTIgTXB4LCBDYW3DqXJhIGZyb250YWxlIGRlIDEyIE1weFx0RG91YmxlIGNhbcOpcmEgZGUgMTIgTXB4LCBDYW3DqXJhIGZyb250YWxlIGRlIDEyIE1weCDDiWNyYW5cdExDRCA2LDEgcG91Y2VzIGF2ZWMgMSA3OTIgeCA4MjggcGl4ZWxzIMOgIDMyNiBwcGk2XHRPTEVEIGRlIDYsMSBwb3VjZXMgYXZlYyAyIDUzMiB4IDEgMTcwIHBpeGVscyDDoCA0NjAgcHBpIEJhdHRlcmllXHRCYXR0ZXJpZSBMaS1Jb24gZGUgMyAxMTAgbUFoXHRCYXR0ZXJpZSBMaS1Jb24gZGUgMiA4MTUgbUFoIEF1dG9ub21pZVx0MTUgaFx0MTIgaCBDb25uZWN0aXF1ZVx0TFRFLCBVTVRTLCBHTVNcdDVHLCBMVEUsIEdNUywgVU1UU1wiLFxyXG4gICAgICAgIGltZzogXCIvYnVpbGQvaW1hZ2VzL2l0ZW0vdGVsZXBob25lLXBvcnRhYmxlLnBuZ1wiLFxyXG4gICAgICAgIGhyZWY6IFwiL21hdGVyaWVsL3RlbGVwaG9uaXF1ZS9pcGhvbmUtMTJcIixcclxuICAgICAgICBhdmFpbGFibGU6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDYsXHJcbiAgICAgICAgbmFtZTogXCJDYXNxdWUgU3VwZXJsdXggaG1kNjg1YVwiLFxyXG4gICAgICAgIGFsdDogXCJDYXNxdWUgYXVkaW9cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJkZXNrdG9wXCIsXHJcbiAgICAgICAgZW1wbGFjZW1lbnQ6IFwiU2FsbGUgZGUgc3RvY2thZ2UgM1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNvbW1lIHNvbiBub20gbCdpbmRpcXVlLCBjZXMgw6ljb3V0ZXVycyBzb250IGRlIGhhdXRlIGTDqWZpbml0aW9uLiBJbHMgcGV1dmVudCByZXByb2R1aXJlIGRlcyBiYXNzZXMgw6lwYWlzc2VzIGFpbnNpIHF1ZSBkZXMgbcOpZGl1bXMgZXQgZGVzIGFpZ3VzIGNsYWlycy4gQXZlYyBjZXMgw6ljb3V0ZXVycywgdm91cyBwb3V2ZXogcHJvZml0ZXIgZGUgdm90cmUgbXVzaXF1ZSBwcsOpZsOpcsOpZSBwYXJ0b3V0IG91IHZvdXMgYWxsZXouIExlcyDDqWNvdXRldXJzIHBldXZlbnQgZXRyZSBwbGnDqXMgcG91ciBuZSBwYXMgcHJlbmRyZSB0cm9wIGRlIHBsYWNlIGRhbnMgdm9zIGJhZ2FnZXMuIExlIGPDomJsZSBlc3QgZG90w6kgZCd1biBtaWNyb3Bob25lIGEgYm91dG9uLXBvdXNzb2lyLCBxdWkgdm91cyBwZXJtZXQgZGUgcsOpcG9uZHJlIGF1eCBhcHBlbHMgZXQgZCd5IHLDqXBvbmRyZSAoZm9uY3Rpb25uZSBhdmVjIGxlcyBhcHBhcmVpbHMgQXBwbGUpLlwiLFxyXG4gICAgICAgIGNhcmFjdGVyaXN0aXF1ZXM6IFwiRGlyZWN0aXZpdMOpOiBjYXJkaW/Dr2RlIFLDqXBvbnNlIGVuIGZyw6lxdWVuY2U6IDUwIC0gMTUwMDAgSHogSW1ww6lkYW5jZTogMjAwIE9obSBTZW5zaWJpbGl0w6k6IC02NCBkQlYgLyBQYSAoMCw2IG1WIC8gUGEpIMOgIDEga0h6IExvbmd1ZXVyIGRlIGPDomJsZSBkZSAxLDUgbSBhdmVjIGNvbm5lY3RldXIgWExSIDQgYnJvY2hlcyBmZW1lbGxlXCIsXHJcbiAgICAgICAgaW1nOiBcIi9idWlsZC9pbWFnZXMvaXRlbS9jYXNxdWUuanBnXCIsXHJcbiAgICAgICAgaHJlZjogXCIvbWF0ZXJpZWwvZGVza3RvcC9jYXNxdWUtc3VwZXJsdXgtaG1kNjg1YVwiLFxyXG4gICAgICAgIGF2YWlsYWJsZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNyxcclxuICAgICAgICBuYW1lOiBcIk9yZGluYXRldXIgQWNlciB2ZXJpdG9uIHMyNjgwZ1wiLFxyXG4gICAgICAgIGFsdDogXCJPcmRpbmF0ZXVyIGRlIGJ1cmVhdVwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcImRlc2t0b3BcIixcclxuICAgICAgICBlbXBsYWNlbWVudDogXCJTYWxsZSBkZSBzdG9ja2FnZSAzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTCdvcmRpbmF0ZXVyIEFjZXIgVmVyaXRvbiBTMjY4MEcgZXN0IHVuZSBzb2x1dGlvbiBwcm9mZXNzaW9ubmVsbGUgcGVyZm9ybWFudGUsIGNvbXBhY3RlLCBmaWFibGUgZXQgc8OpY3VyaXPDqWUgw6AgcHJpeCBhYm9yZGFibGUuIEZhaXRlcyBsJ2FjaGF0IGRlIGNlIFBDIGRlIGJ1cmVhdSBwb3VyIHRvdXRlcyB2b3MgdMOiY2hlcyBwcm9mZXNzaW9ubmVsbGVzIGNvdXJhbnRlcyBldCBwcm9maXRleiBkZSBib25uZXMgcGVyZm9ybWFuY2VzLCB5IGNvbXByaXMgZW4gbXVsdGl0w6JjaGVzLlwiLFxyXG4gICAgICAgIGNhcmFjdGVyaXN0aXF1ZXM6IFwiSW5mb3JtYXRpb25zIGfDqW7DqXJhbGVzIETDqXNpZ25hdGlvbiBBY2VyIFZlcml0b24gUzI2ODBHIChEVC5WVjJFRi4wMEgpIC0gV2luZG93cyAxMCBQcm8gTWFycXVlIEFjZXIgTW9kw6hsZSBEVC5WVjJFRi4wMEggU3lzdMOobWUgZCdleHBsb2l0YXRpb24gU3lzdMOobWUgZCdleHBsb2l0YXRpb24gV2luZG93cyAxMCBQcm9mZXNzaW9ubmVsIDY0IGJpdHMgU3lzdMOobWUgZCdleHBsb2l0YXRpb24gZm91cm5pIE91aSBQcm9jZXNzZXVyIGV0IGNoaXBzZXQgUGxhdGVmb3JtZSAoUHJvYy4pIEludGVsIENvbWV0IExha2UgVHlwZSBkZSBwcm9jZXNzZXVyIEludGVsIENvcmUgaTMtMTAxMDUgKFF1YWQtQ29yZSAzLjcgR0h6IC8gNC40IEdIeiBUdXJibyAtIDggVGhyZWFkcyAtIENhY2hlIDYgTW8pIFByb2Nlc3NldXIgSW50ZWwgQ29yZSBpMyBGcsOpcXVlbmNlIENQVSAzLjcgR0h6IE3DqW1vaXJlIFRhaWxsZSBkZSBsYSBtw6ltb2lyZSA4IEdvIFR5cGUgZGUgbcOpbW9pcmUgRERSNCBGcsOpcXVlbmNlKHMpIE3DqW1vaXJlIEREUjQgMjY2NiBNSHogU3RvY2thZ2UgQ29uZmlndXJhdGlvbiBkaXNxdWUocykgU1NEIDI1NiBHbyBEaXNxdWUgZHVyIFNTRCAyNTYgR28gRGlzcXVlIHNlY29uZGFpcmUgU2FucyBkaXNxdWUgc2Vjb25kYWlyZSBUeXBlIGRlIERpc3F1ZSBTeXN0w6htZSBTU0QgKFNvbGlkIFN0YXRlIERyaXZlKSBJbnRlcmZhY2UgYXZlYyBsJ29yZGluYXRldXIgZGlzcXVlIGR1ciBzeXN0w6htZSBNLjIgLSBQQ0ktRSBOVk1lIExlY3RldXIgT3B0aXF1ZSBHcmF2ZXVyIERWRCBTdXBlciBNdWx0aSBMZWN0ZXVyIGRlIGRpc3F1ZXR0ZXMgTm9uIEFmZmljaGFnZSBDaGlwc2V0IGdyYXBoaXF1ZSBJbnRlbCBVSEQgR3JhcGhpY3MgNjMwIE5WSURJQSBTdHVkaW8gTm9uIFR5cGUgZGUgbXVsdGktR1BVIEF1Y3VuIFZSIFJlYWR5IChyw6lhbGl0w6kgdmlydHVlbGxlKSBOb24gUsOpc2VhdSBTYW5zLWZpbCBOb24gTm9tYnJlIGRlIHBvcnRzL0NvbnRyw7RsZXVyIEV0aGVybmV0IDEgWCBJbnTDqWdyw6kgTm9ybWUocykgcsOpc2VhdSAxMC8xMDAvMTAwMCBNYnBzIENvbm5lY3RpcXVlIENvbm5lY3RldXJzIHBhbm5lYXUgYXZhbnQgMiBYIFVTQiAzLjEgMiBYIFVTQiAzLjAgMSBYIE1pY3JvIChKYWNrIDMuNW1tIEZlbWVsbGUpIDEgWCBDYXNxdWUgKEphY2sgMy41bW0gRmVtZWxsZSkgQ29ubmVjdGV1cnMgcGFubmVhdSBhcnJpw6hyZSAxIFggVkdBIChELXN1YiAxNSBGZW1lbGxlKSAxIFggSERNSSBGZW1lbGxlIDEgWCBEaXNwbGF5UG9ydCBGZW1lbGxlIDQgWCBVU0IgMi4wIDEgWCBSSjQ1IEZlbWVsbGUgMiBYIE1pbmlEaW4gNiBGZW1lbGxlIChQUy8yKSAxIFggU8OpcmllIChSUy0yMzIpIDMgWCBKYWNrIDMsNW1tIEZlbWVsbGUgU3TDqXLDqW8gRXF1aXBlbWVudCBDbGF2aWVyIGV0IHNvdXJpcyBmb3VybmlzIE91aSBDYXJhY3TDqXJpc3RpcXVlcyBwaHlzaXF1ZXMgRm9ybWF0IGRlIFBDIFRvdXIgRm9ybWF0IGR1IGJvaXRpZXIgTWluaSBUb3VyIENvbmNlcHRpb24gYm/DrnRpZXIgQm9pdGllciBub24gdml0csOpIExhcmdldXIgMTYwIG1tIEhhdXRldXIgMzUwIG1tIFByb2ZvbmRldXIgMzA5LjI1IG1tIFBvaWRzIDYuODQga2cgUHVpc3NhbmNlIDE4MCBXIFNww6ljaWZpY2F0aW9ucyB0ZWNobmlxdWVzIE1vbnTDqSBPdWkgVXNhZ2UgUHJvZmVzc2lvbm5lbCBUZWNobm9sb2dpZSBJbnRlbCB2UHJvIE5vbiBHYXJhbnRpZXMgR2FyYW50aWUgY29tbWVyY2lhbGUgMiBhbm7DqWVzIHZlbmRldXIgR2FyYW50aWVzIGzDqWdhbGVzIFZvaXIgbGVzIG1vZGFsaXTDqXMgSW5mb3JtYXRpb25zIGzDqWdhbGVzIFJlcHJpc2UgZGVzIHByb2R1aXRzIHVzYWfDqXMgVm9pciBsZXMgbW9kYWxpdMOpc1wiLFxyXG4gICAgICAgIGltZzogXCIvYnVpbGQvaW1hZ2VzL2l0ZW0vb3JkaW5hdGV1ci5wbmdcIixcclxuICAgICAgICBocmVmOiBcIi9tYXRlcmllbC9kZXNrdG9wL29yZGluYXRldXItYWNlci12ZXJpdG9uLXMyNjgwZ1wiLFxyXG4gICAgICAgIGF2YWlsYWJsZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogOCxcclxuICAgICAgICBuYW1lOiBcIk9yZGluYXRldXIgQUNFUiBhc3BpcmUgM1wiLFxyXG4gICAgICAgIGFsdDogXCJPcmRpbmF0ZXVyIHBvcnRhYmxlXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiZGVza3RvcFwiLFxyXG4gICAgICAgIGVtcGxhY2VtZW50OiBcIlNhbGxlIGRlIHN0b2NrYWdlIDNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQcm9maXRleiBkZSBib25uZXMgcGVyZm9ybWFuY2VzIHBvdXIgdW4gcHJpeCBhYm9yZGFibGUgYXZlYyBsZSBQQyBwb3J0YWJsZSBBY2VyIEFzcGlyZSAzIEEzMTUtMjRQLiDDgCBsYSBmb2lzIGNvbXBhY3QsIMOpbMOpZ2FudCBldCBlZmZpY2FjZSwgYydlc3QgdW4gcGFyZmFpdCBjb21wYWdub24gbW9iaWxlLiBJbCBzZXJhIGFkYXB0w6kgcG91ciBsZXMgYXBwbGljYXRpb25zIGRlIGJ1cmVhdXRpcXVlLCBsYSBuYXZpZ2F0aW9uIHdlYiBldCBsZSBkaXZlcnRpc3NlbWVudCBtdWx0aW3DqWRpYSBvY2Nhc2lvbm5lbC5cIixcclxuICAgICAgICBjYXJhY3RlcmlzdGlxdWVzOiBcIlByb2Nlc3NldXIgQU1EIFJ5emVuIDUgNzUyMFUgKFF1YWQtQ29yZSAyLjggR0h6IC8gNC4zIEdIeiBUdXJibyAtIDggVGhyZWFkcyAtIENhY2hlIDQgTW8pIDE2IEdvIGRlIG3DqW1vaXJlIExQRERSNSAobcOpbW9pcmUgaW50w6lncsOpZSkgw4ljcmFuIElQUyBkZSAxNS42IHBvdWNlcyBhdmVjIHLDqXNvbHV0aW9uIEZ1bGwgSEQgKDE5MjAgeCAxMDgwKSBTU0QgTS4yIFBDSWUgZGUgNTEyIEdvIE1laWxsZXVyIGNvbmZvcnQgb2N1bGFpcmUgYXZlYyBsYSB0ZWNobm9sb2dpZSBBY2VyIEJsdWVsaWdodCBTaGllbGQgQ29tbXVuaWNhdGlvbiBzYW5zIGZpbCBXaS1GaSA2ICsgQmx1ZXRvb3RoIDUuMiBXZWJjYW0gSFAgNzIwcCBpbnTDqWdyw6llIFdpbmRvd3MgMTEgRmFtaWxsZSBHYXJhbnRpZSBjb25zdHJ1Y3RldXIgMiBhbnNcIixcclxuICAgICAgICBpbWc6IFwiL2J1aWxkL2ltYWdlcy9pdGVtL29yZGluYXRldXItcG9ydGFibGUuanBnXCIsXHJcbiAgICAgICAgaHJlZjogXCIvbWF0ZXJpZWwvZGVza3RvcC9vcmRpbmF0ZXVyLWFjZXItYXNwaXJlLTNcIixcclxuICAgICAgICBhdmFpbGFibGU6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDksXHJcbiAgICAgICAgbmFtZTogXCJUYWJsZXR0ZSB0YWN0aWxlIGV0NTZcIixcclxuICAgICAgICBhbHQ6IFwiVGFibGV0dGUgdGFjdGlsZVwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcImRlc2t0b3BcIixcclxuICAgICAgICBlbXBsYWNlbWVudDogXCJTYWxsZSBkZSBzdG9ja2FnZSAzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiWmVicmEgYSBwb3VyIHZvdXMgbGEgc29sdXRpb24gYXZlYyBsYSB0YWJsZXR0ZSBwcm9mZXNzaW9ubmVsbGUgRVQ1Ni4gU291cyBBbmRyb2lkLCBhdmVjIHNjYW5uZXIgaW50w6lncsOpLCBldCBkb3TDqWUgZGVzIHRlY2hub2xvZ2llcyBXaS1GaSwgY2VsbHVsYWlyZXMgZXQgQmx1ZXRvb3RoIGxlcyBwbHVzIHJhcGlkZXMsIGwnRVQ1NiBlc3QgbGUgbW9kw6hsZSBsZSBwbHVzIHJvYnVzdGUsIG1pbmNlIGV0IGzDqWdlciBkZSBsYSBnYW1tZSBaZWJyYS5cIixcclxuICAgICAgICBjYXJhY3RlcmlzdGlxdWVzOiBcIlByb2Nlc3NldXIgOiBRdWFsY29tbSBTbmFwZHJhZ29uIDY2MCBodWl0IGPFk3VycywgMiwyIEdIeiBTeXN0w6htZSA6IEFuZHJvaWQgOC4xIE9yZW8gRWNyYW4gOiA4LjQgcG8sIGNhcGFjaXRpZiwgdGFjdGlsZSAxMCBwb2ludHMsIHLDqXNvbHV0aW9uIG1heGltYWxlIDIgNTYwIHggMSA2MDAgOyB2ZXJyZSBDb3JuaW5nIEdvcmlsbGEgR2xhc3MgOyBsaXNpYmxlIGVuIHBsZWluIGpvdXIgUkFNIDogNCBHbyBkZSBSQU0gTFBERFI0IChleHRlbnNpYmxlIGp1c3F1J8OgIDggR28pIEFQTiA6IDggTVAsIGNhbcOpcmEgZnJvbnRhbGUgMiBNUCBTdG9ja2FnZSA6IDMyIEdvIGRlIG3DqW1vaXJlIGZsYXNoIGVNTUMgOyBmZW50ZSBwb3VyIGNhcnRlIG1pY3JvIFNEWEMgYWNjZXNzaWJsZSBwYXIgbOKAmXV0aWxpc2F0ZXVyIChqdXNxdeKAmcOgIDIwMCBHbyBwcmlzIGVuIGNoYXJnZSBlbiBzdGFuZGFyZCkgQ29ubmVjdGl2aXTDqSA6IDRHIExURSAoZG9ubsOpZXMgdW5pcXVlbWVudCksIEJsdWV0b290aCA1LjAsIEdQUywgQS1HUFMsIE5GQywgV2ktRmkgYWMvYi9nL24sIFVTQiBUeXBlIEMgQ2FwdGV1cnMgOiBBY2PDqWzDqXJvbcOodHJlLCBjYXB0ZXVyIGRlIGx1bWlub3NpdMOpLCBib3Vzc291bGUsIGd5cm9zY29wZSBCYXR0ZXJpZSBkZSA5IDY2MCBtQWggTGktSW9uLCByZW1wbGHDp2FibGUgcGFyIGzigJl1dGlsaXNhdGV1ciBDZXJ0aWZpw6kgSVA2NSBEaW1lbnNpb25zIChMIHggSCB4IFApIDogMjI4IHggMTUwIHggMTIsNyBtbSBQb2lkcyA6IDUyNyBnXCIsXHJcbiAgICAgICAgaW1nOiBcIi9idWlsZC9pbWFnZXMvaXRlbS90YWJsZXR0ZS10YWN0aWxlLnBuZ1wiLFxyXG4gICAgICAgIGhyZWY6IFwiL21hdGVyaWVsL2Rlc2t0b3AvdGFibGV0dGUtdGFjdGlsZS1ldDU2XCIsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxMCxcclxuICAgICAgICBuYW1lOiBcIkltcHJpbWFudGUgQnJvdGhlclwiLFxyXG4gICAgICAgIGFsdDogXCJJbXByaW1hbnRlXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiZGVza3RvcFwiLFxyXG4gICAgICAgIGVtcGxhY2VtZW50OiBcIlNhbGxlIGRlIHN0b2NrYWdlIDNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMYSBNRkMtTDM3MTBDVyBkZSBCcm90aGVyIGVzdCB1bmUgaW1wcmltYW50ZSBtdWx0aWZvbmN0aW9uIDQtZW4tMSBxdWkgcG9zc8OoZGUgZGUgbm9tYnJldXggYXRvdXRzIHF1aSB2b250IGFtw6lsaW9yZXIgdm90cmUgcmVuZGVtZW50LiBDZXR0ZSBpbXByaW1hbnRlIHNpbGVuY2lldXNlIGV0IGNvbXBhY3RlIHBvc3PDqGRlIGRlIG5vbWJyZXVzZXMgZm9uY3Rpb25uYWxpdMOpcywgZGVzIHZpdGVzc2VzIGQnaW1wcmVzc2lvbiDDqWxldsOpZXMgZXQgZCd1bmUgY29ubmV4aW9uIHLDqXNlYXUgc2FucyBmaWwgaW50w6lncsOpLlwiLFxyXG4gICAgICAgIGNhcmFjdGVyaXN0aXF1ZXM6IFwiVml0ZXNzZSBk4oCZaW1wcmVzc2lvbiBqdXNxdeKAmcOgIDE4IHBhZ2VzIHBhciBtaW51dGUgVGVjaG5vbG9naWUgTEVEIFRhaWxsZSBtYXhpbWFsZSBkdSBwYXBpZXIgOiBBNCDDiWNyYW4gdGFjdGlsZSBjb3VsZXVyIGRlIDkuMyBjbSBhZmluIGRlIGZhY2lsaXRlciB2b3MgaW1wcmVzc2lvbnMgQmFjIHBhcGllciBkZSAyNTAgZmV1aWxsZXMgZXQgY2hhcmdldXIgYXV0b21hdGlxdWUgZGUgZG9jdW1lbnRzIGRlIDUwIGZldWlsbGVzIENvbm5lY3Rpdml0w6lzIFVTQiBldCByw6lzZWF1IFdpLUZpIENvbm5lY3Rpdml0w6kgbW9iaWxlIDogQWlyUHJpbnQsIENvcnRhZG8gQ2xvdWQgUHJpbnQsIEdvb2dsZSBDbG91ZCBQcmludCAyLjAsIGlQcmludCZTY2FuLCBCcm90aGVyIFByaW50IFNlcnZpY2UgUGx1Z2luLCBNb3ByaWEgSW1wcmVzc2lvbnMgc2lsZW5jaWV1c2VzIDogbW9pbnMgZGUgNDVkQiBNw6ltb2lyZSBkZSA1MTIgTW8gTWF0w6lyaWF1eCByb2J1c3RlcyBldCBkdXJhYmxlc1wiLFxyXG4gICAgICAgIGltZzogXCIvYnVpbGQvaW1hZ2VzL2l0ZW0vaW1wcmltYW50ZS5wbmdcIixcclxuICAgICAgICBocmVmOiBcIi9tYXRlcmllbC9kZXNrdG9wL2ltcHJpbWFudGUtYnJvdGhlclwiLFxyXG4gICAgICAgIGF2YWlsYWJsZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMTEsXHJcbiAgICAgICAgbmFtZTogXCJDbGVmIHVzYiBLaW5nc3RvblwiLFxyXG4gICAgICAgIGFsdDogXCJDbGVmIHVzYlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcImRlc2t0b3BcIixcclxuICAgICAgICBlbXBsYWNlbWVudDogXCJTYWxsZSBkZSBzdG9ja2FnZSAzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTGEgY2zDqSBEYXRhVHJhdmVsZXIgTWF4IGRlIEtpbmdzdG9uIGVzdCB1bmUgY2zDqSBVU0IgcXVpIGVzdCBkb3TDqWUgZCd1bmUgaW50ZXJmYWNlIFVTQiAzLjEgVHlwZSBDIGFmaW4gZCdvZmZyaXIgZGVzIGTDqWJpdHMgZGUgbGVjdHVyZSBwb3V2YW50IGF0dGVpbmRyZSAxMDAwIE1vL3MgZXQgZCfDqWNyaXR1cmUgZGUgOTAwIE1vL3MuXCIsXHJcbiAgICAgICAgY2FyYWN0ZXJpc3RpcXVlczogXCJDYXBhY2l0w6kgZGUgMjU2IEdvIEludGVyZmFjZSBVU0IgMy4xIFR5cGUgQyBEw6liaXQgZW4gbGVjdHVyZSA6IGp1c3F1J8OgIDEwMDAgTW8vcyBEw6liaXQgZW4gw6ljcml0dXJlIDoganVzcXUnw6AgOTAwIE1vL3MgQ29tcGF0aWJpbGl0w6kgOiBXaW5kb3dzIDExLzEwLzguMSwgTWFjIE9TICh2LjEwLjE0LnggKyksIExpbnV4ICh2LiAyLjYueCArKSwgQ2hyb21lIE9TXCIsXHJcbiAgICAgICAgaW1nOiBcIi9idWlsZC9pbWFnZXMvaXRlbS9jbGVmLXVzYi5wbmdcIixcclxuICAgICAgICBocmVmOiBcIi9tYXRlcmllbC9kZXNrdG9wL2NsZWYtdXNiLWtpbmdzdG9uXCIsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxMixcclxuICAgICAgICBuYW1lOiBcIlNTRCBleHRlcm5lIHNhbXN1bmdcIixcclxuICAgICAgICBhbHQ6IFwiRGlzcXVlIGR1ciBleHRlcm5lXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiZGVza3RvcFwiLFxyXG4gICAgICAgIGVtcGxhY2VtZW50OiBcIlNhbGxlIGRlIHN0b2NrYWdlIDNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMZSBTYW1zdW5nIFQ3IFNoaWVsZCBlc3QgdW4gU1NEIGV4dGVybmUgdWx0cmEtcmFwaWRlIGV0IHVsdHJhLXLDqXNpc3RhbnQuIElsIG9mZnJlIGRlcyB2aXRlc3NlcyBmdWxndXJhbnRlcyBwb3VyIGxlIHRyYW5zZmVydCBkZSBkb25uw6llcyBldCBiw6luw6lmaWNpZSBkJ3VuZSBwcm90ZWN0aW9uIGF2YW5jw6llIChJUDY1KSBjb250cmUgbCdlYXUsIGxhIHBvdXNzacOocmUgZXQgbGVzIGNodXRlcyAoanVzcXUnw6AgMyBtKS4gSWwgZXN0IGNvbXBhdGlibGUgUEMsIE1hYywgQW5kcm9pZCwgY29uc29sZXMgZGUgamV1eCBldCBwbHVzLlwiLFxyXG4gICAgICAgIGNhcmFjdGVyaXN0aXF1ZXM6IFwiRMOpc2lnbmF0aW9uIFNhbXN1bmcgU1NEIEV4dGVybmUgVDcgU2hpZWxkIDEgVG8gQmxldSBNYXJxdWVTYW1zdW5nIE1vZMOobGVNVS1QRTFUMFIvRVUgR2FyYW50aWUzIGFucyAoY29uc3RydWN0ZXVyKSBQUklOQ0lQQUxFUyBDQVJBQ1TDiVJJU1RJUVVFUyBDYXBhY2l0w6kxIFRvIEZvcm1hdCBkZSBkaXNxdWUgZXh0ZXJuZVVsdHJhLXBvcnRhYmxlIFR5cGUgZGUgRGlzcXVlIFN5c3TDqG1lU1NEIChTb2xpZCBTdGF0ZSBEcml2ZSkgSW50ZXJmYWNlIGF2ZWMgbCdvcmRpbmF0ZXVyVVNCIDMuMSBGb3JtYXQgZGUgRGlzcXVlMiAxLzIgT1Mgc3VwcG9ydMOpKHMpTWljcm9zb2Z0IFdpbmRvd3MgNyAsIE1pY3Jvc29mdCBXaW5kb3dzIDEwICwgTWFjIE9TIFggMTAuMTAgb3Ugc3Vww6lyaWV1ciAsIE1pY3Jvc29mdCBXaW5kb3dzIDExICwgQW5kcm9pZCBTUMOJQ0lGSUNBVElPTlMgRElTUVVFIFR5cGUgZGUgRGlzcXVlU1NEIChTb2xpZCBTdGF0ZSBEcml2ZSkgUkFJRCBzdXBwb3J0w6lub24gRk9OQ1RJT05TIFNQw4lDSUFMRVMgUsOpc2lzdGFudCBhdXggY2hvY3NvdWkgU3RvY2thZ2UgZW4gbGlnbmVub24gQ3J5cHRhZ2UgZGVzIGRvbm7DqWVzb3VpIENBUkFDVMOJUklTVElRVUVTIFBIWVNJUVVFUyBNYXTDqXJpYXVBQlMvQWx1bWluaXVtICwgRWxhc3RvbcOocmUgQ291bGV1ckJsZXUgTGFyZ2V1cjg4IG1tIEVwYWlzc2V1cjEzIG1tIFByb2ZvbmRldXI1OSBtbSBQb2lkczk4IGdcIixcclxuICAgICAgICBpbWc6IFwiL2J1aWxkL2ltYWdlcy9pdGVtL2Rpc3F1ZS1kdXItZXh0ZXJuZS5wbmdcIixcclxuICAgICAgICBocmVmOiBcIi9tYXRlcmllbC9kZXNrdG9wL3NzZC1leHRlcm5lLXNhbXN1bmdcIixcclxuICAgICAgICBhdmFpbGFibGU6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEzLFxyXG4gICAgICAgIG5hbWU6IFwiVmlkZW9wcm9qZWN0ZXVyIEVwc29uIEVCLVc0OVwiLFxyXG4gICAgICAgIGFsdDogXCJWaWRlb3Byb2plY3RldXJcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJyw6l1bmlvblwiLFxyXG4gICAgICAgIGVtcGxhY2VtZW50OiBcIlNhbGxlIGRlIHN0b2NrYWdlIDRcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDZSB2aWTDqW9wcm9qZWN0ZXVyIG1vYmlsZSBwcm9wb3PDqSBwYXIgbGEgbWFycXVlIEVQU09OIHZvdXMgb2ZmcmUgbGEgbGliZXJ0w6kgZGUgbOKAmWluc3RhbGxlciBwcmVzcXVlIHBhcnRvdXQuIEPigJllc3QgdW4gb3V0aWwgZGUgcHJvamVjdGlvbiBkdXJhYmxlIHF1aSBnYXJhbnRpdCBwbHVzaWV1cnMgYW5uw6llcyBkZSBwZXJmb3JtYW5jZXMgcG91ciB0b3V0ZXMgdm9zIHLDqXVuaW9ucyBldCBwcsOpc2VudGF0aW9ucy4gTGUgZGVzaWduIMOpbMOpZ2FudCBldCBjb21wYWN0IGRlIGNlIHZpZMOpb3Byb2plY3RldXIsIGFpbnNpIHF1ZSBzZXMgZmFpYmxlcyBkaW1lbnNpb25zIHZvdXMgcGVybWV0dGVudCBk4oCZdXRpbGlzZXIgc2EgcsOpc29sdXRpb24gV1hHQSBwYXJ0b3V0LiBEZSBwbHVzLCBjZSB2aWTDqW9wcm9qZWN0ZXVyIMOgIGxhbXBlIHByw6lzZW50ZSB1bmUgZHVyw6llIGTigJl1dGlsaXNhdGlvbiBlbiBtb2RlIMOpY28gZGUgcHLDqHMgZGUgMTcgMDAwIGhldXJlcy5cIixcclxuICAgICAgICBjYXJhY3RlcmlzdGlxdWVzOiBcIlRlY2hub2xvZ2llIGRlIHByb2plY3Rpb24gM0xDRCArIE9idHVyYXRldXIgUlZCIMOgIGNyaXN0YXV4IGxpcXVpZGVzIEx1bWlub3NpdMOpIGNvdWxldXIgZXQgbHVtacOocmUgYmxhbmNoZSBKdXNxdeKAmcOgIDM4MDAgbHVtZW5zIFLDqXNvbHV0aW9uIFdYR0EsIDEyODAgeCA4MDAsIDE2OjEwIFJlcHJvZHVjdGlvbiBkZXMgY291bGV1cnMgSnVzcXXigJnDoCAxLDA3IG1pbGxpYXJkcyBkZSBjb3VsZXVycyBUYWlsbGUgZGUgbOKAmWltYWdlIEVudHJlIDMzIGV0IDMyMCBwb3VjZXMgQ29udHJhc3RlIDE2MDAwOjEgRGlzdGFuY2UgZm9jYWxlIDE2LDkgbW0gLSAyMCwyOCBtbSBPZmZzZXQgMTA6MSBEaW1lbnNpb25zIG5ldHRlcyAzMDLigI4geCAyNDkgeCA4NyBtbSAoTGFyZ2V1ciB4IFByb2ZvbmRldXIgeCBIYXV0ZXVyKSBQb2lkcyAyLDcgS2dcIixcclxuICAgICAgICBpbWc6IFwiL2J1aWxkL2ltYWdlcy9pdGVtL3ZpZGVvcHJvamVjdGV1ci5wbmdcIixcclxuICAgICAgICBocmVmOiBcIi9tYXRlcmllbC9yZXVuaW9uL3ZpZGVvcHJvamVjdGV1ci1lcHNvbi1lYi13NDlcIixcclxuICAgICAgICBhdmFpbGFibGU6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDE0LFxyXG4gICAgICAgIG5hbWU6IFwiw4ljcmFuIFNhbXN1bmcgUU1CXCIsXHJcbiAgICAgICAgYWx0OiBcIsOJY3JhblwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcInLDqXVuaW9uXCIsXHJcbiAgICAgICAgZW1wbGFjZW1lbnQ6IFwiU2FsbGUgZGUgc3RvY2thZ2UgNFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlVwc2NhbGluZyBldCBEeW5hbWljIENyeXN0YWwgQ29sb3JzIHNvbnQgbGVzIHRlY2hub2xvZ2llcyBkZSBsYSBtYXJxdWUgU0FNU1VORyBxdWkgZ2FyYW50aXNzZW50IMOgIGNldCDDqWNyYW4gcHJvZmVzc2lvbm5lbCB1bmUgY29sb3JpbcOpdHJpZSBpbmNyb3lhYmxlIHBvdXIgZGVzIGNvbnRlbnVzIHRvdWpvdXJzIHBsdXMgcsOpYWxpc3RlcyBkYW5zIHRvdXMgdm9zIGVudmlyb25uZW1lbnRzIGludMOpcmlldXJzLiBDZXR0ZSBnYW1tZSBk4oCZw6ljcmFucyBwcm9mZXNzaW9ubmVscyBTQU1TVU5HIFFNQiB2b3VzIG9mZnJlIHVuZSB2aXNpYmlsaXTDqSBwYXJmYWl0ZSDDoCB0b3V0IG1vbWVudCBkZSBsYSBqb3VybsOpZSBjYXIgZWxsZSBlc3QgZG90w6llIGTigJl1bmUgaGF1dGUgbHVtaW5vc2l0w6ksIGTigJl1bmUgZGFsbGUgbWF0ZSBhbnRpLXJlZmxldHMgZXQgZOKAmXVuIGdyYW5kIGFuZ2xlIGRlIHZpc2lvbiBkZSAxNzjCsC5cIixcclxuICAgICAgICBjYXJhY3RlcmlzdGlxdWVzOiBcIlR5cGUgRWRnZSBMRUQgQkxVIFRhaWxsZSBlbiBjZW50aW3DqHRyZSA5NjcuNXg1NTcuN3g0OC4zIEx1bWlub3NpdMOpIDUwMCBjZC9tMiBUeXBlIGRlIGRhbGxlIFZBIFBvaWRzIG5ldCAxMCBrZyBDb25zb21tYXRpb24gZW4gdmVpbGxlIDAuNVcgVkVTQSAyMDB4MjAwIFRlY2hub2xvZ2llIFVwc2NhbGxpbmcgU3lzdMOobWUgZOKAmWV4cGxvaXRhdGlvbiBUaXplbiA2LjVcIixcclxuICAgICAgICBpbWc6IFwiL2J1aWxkL2ltYWdlcy9pdGVtL2VjcmFuLnBuZ1wiLFxyXG4gICAgICAgIGhyZWY6IFwiL21hdGVyaWVsL3JldW5pb24vZWNyYW4tc2Ftc3VuZy1xbWJcIixcclxuICAgICAgICBhdmFpbGFibGU6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDE1LFxyXG4gICAgICAgIG5hbWU6IFwiUGFwZXJib2FyZCBkaWdpdGFsIFNhbXN1bmcgRmxpcCA0XCIsXHJcbiAgICAgICAgYWx0OiBcIlBhcGVyYm9hcmQgZGlnaXRhbFwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcInLDqXVuaW9uXCIsXHJcbiAgICAgICAgZW1wbGFjZW1lbnQ6IFwiU2FsbGUgZGUgc3RvY2thZ2UgNFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxlIFBhcGVyYm9hcmQgZGlnaXRhbCBTYW1zdW5nIEZsaXAgNCBlc3QgdW4gw6ljcmFuIHRhY3RpbGUgZGUgNzUgb3UgODUgcG91Y2VzIGRvdMOpIGTigJl1bmUgcsOpc29sdXRpb24gNEsuIElsIGRvbm5lIGxhIHBvc3NpYmlsaXTDqSBkZSBwcmVuZHJlIGRlcyBub3RlcywgZOKAmWltcG9ydGVyIGRlcyBmaWNoaWVycywgZGUgcGFydGFnZXIgZHUgY29udGVudSBldCBiaWVuIHBsdXMgZW5jb3JlICEgQ+KAmWVzdCBs4oCZb3V0aWwgaW5jb250b3VybmFibGUgZW4gc2FsbGUgZGUgcsOpdW5pb24gcG91ciBjb2xsYWJvcmVyIGVmZmljYWNlbWVudC5cIixcclxuICAgICAgICBjYXJhY3RlcmlzdGlxdWVzOiBcIlRhaWxsZSA1NScnLCA2NScnLCA3NeKAnSBldCA4NeKAnSBSw6lzb2x1dGlvbiAzIDg0MCB4IDIgMTYwIChwYXlzYWdlKSBMdW1pbm9zaXTDqSAzNTAgY2QvbTIgQW5nbGUgZGUgdmlzaW9uIDE3ODoxNzggSGF1dC1wYXJsZXVycyBpbnTDqWdyw6lzICgxMCBXIHggNCkgU2lnbmFsIGTigJllbnRyw6llIDIgeCBIRE1JICgxIGF2YW50LCAxIGFycmllzIByZSksIDEgeCBEUCwgVVNCLUMgKGF2YW50KSwgMyB4IFVTQiAoMiBTb0MsIDEgRXh0ZXJuYWwpIDEgeCBTbG90IE9QUyBJL0YgU2lnbmFsIGRlIHNvcnRpZSAxIHggSERNSSBPdXQgKFBhcnRhZ2UgZOKAmWXMgWNyYW4pLCAxIHggVG91Y2ggb3V0IDIgKFVTQiBVcHN0cmVhbSksIFN0ZXJlbyBNaW5pIEphY2sgUG9pbnRzIGRlIGNvbnRhY3Qgc2ltdWx0YW7DqXMgNCBzdXIgU29DLCAyMCBzdXIgc291cmNlIGV4dGVybmUgRGltZW5zaW9ucyBOZXR0ZXMgLyBCcnV0ZXMgKG1tKSA6IDU1IHBvdWNlcyA6IDEyOTcuNCB4IDc2OC4yIHggNTkuOSA2NSBwb3VjZXMgOiAxNTIyLjQgeCA4OTcuNiB4IDYyLjkgNzUgcG91Y2VzIDogMTcyNCB4IDEwMjYuMyB4IDg5IDg1IHBvdWNlcyA6IDE5NDUuOCB4IDExNTEuMSB4IDg5IE3DqW1vaXJlIGRlIHN0b2NrYWdlIDMyR0IgKDIuNjVHQiBvY2N1cMOpIHBhciBsJ08vUywgMjkuMzVHQiBkaXNwb25pYmxlKSBWRVNBIDQwMCo0MDBcIixcclxuICAgICAgICBpbWc6IFwiL2J1aWxkL2ltYWdlcy9pdGVtL3BhcGVyYm9hcmQtZGlnaXRhbC5wbmdcIixcclxuICAgICAgICBocmVmOiBcIi9tYXRlcmllbC9yZXVuaW9uL3BhcGVyYm9hcmQtZGlnaXRhbC1zYW1zdW5nLWZsaXAtNFwiLFxyXG4gICAgICAgIGF2YWlsYWJsZTogdHJ1ZVxyXG4gICAgfVxyXG5dIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi4vanMvYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QnO1xucmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dCgnLi4vcmVhY3QvY29udHJvbGxlcnMnLCB0cnVlLCAvXFwuKGp8dClzeD8kLykpOyIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL25hdmJhcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb3B5cmlnaHQnXG5pbXBvcnQgSXRlbVNrZWxldHRlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2tlbGV0b24vbWF0ZXJpZWwnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2FkaW5nQ29tcCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xvYWRpbmcnXG5cbmZ1bmN0aW9uIHJhbmRvbVRpbWUobWluLCBtYXgpIHsgLy8gbWluIGFuZCBtYXggaW5jbHVkZWQgXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY3VlaWwoKSB7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfSwgcmFuZG9tVGltZSg4MDAsIDEwMDApKVxuICB9LCBbXSlcblxuICBmdW5jdGlvbiByZW1vdmVPcGFjaXR5KCkge1xuXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgaWYgKGVsZW0pIHtcbiAgICAgIGVsZW0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgfVxuXG4gICAgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ1wiKTtcbiAgICBpZiAoZWxlbSkge1xuICAgICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TG9hZGluZ0NvbXAgLz5cbiAgICAgIDxtYWluIGlkPVwibWFpblwiIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJwYW5lbEhlYWRlclwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjdWVpbFwiPlxuICAgICAgICAgICAgICAgICAgQWNjdWVpbFxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIE1hdGVyaWVsXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxJdGVtU2tlbGV0dGUgcGFnZT1cIlwiIC8+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAge2xvYWRpbmcgPyAoPD48Lz4pIDpcbiAgICAgICAgKDw+e3JlbW92ZU9wYWNpdHkoKX08Lz4pfVxuICAgIDwvPlxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWxMZWZ0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRGb3JtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdEZvcm1Db250cm9sXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYnVpbGQvaW1hZ2VzL2RpZ2l0bGlnaHQuc3ZnXCIgYWx0PVwiRGlnaXRMaWdodFwiIHdpZHRoPVwiNTAwXCIgaGVpZ2h0PVwiNTAwXCIgLz5cclxuICAgICAgICAgICAgICA8aDM+TGUgZ2VzdGlvbm5haXJlIGRlIHLDqXNlcnZhdGlvbiBldCBkZSBwcsOocyBkZSBtYXTDqXJpZWxzIGNlbnRyYWxpc8OpczwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbFJpZ2h0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0Rm9ybVwiPlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsUmlnaHRUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPkNvbm5leGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJsb2dpblwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJJZGVudGlmaWFudFwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJNb3QgZGUgcGFzc2VcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIj5TZSBjb25uZWN0ZXJcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsUmlnaHRDb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5Wb3VzIGF2ZXogYmVzb2luIGQnYWlkZSA/Jm5ic3A7PC9hPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIm1haWx0bzpjb3JhbnRpbi5iZXJnZXJAaG90bWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgID5Db250YWN0ZXotbm91czwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gIClcclxufSIsImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29weXJpZ2h0JztcbmltcG9ydCBJdGVtU2tlbGV0dGUgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9za2VsZXRvbi9tYXRlcmllbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWxlcGhvbmlxdWUoKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cblxuICAgICAgICAgIDxIZWFkZXIgdGl0bGU9XCJEZXNrdG9wXCIgaXRlbT1cIlwiIC8+XG4gICAgICAgICAgPE5hdmJhciAvPlxuXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxJdGVtU2tlbGV0dGUgcGFnZT1cImRlc2t0b3BcIi8+XG4gICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59IiwiaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hdmJhcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb3B5cmlnaHQnO1xuaW1wb3J0IEl0ZW1Ta2VsZXR0ZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3NrZWxldG9uL21hdGVyaWVsX2RldGFpbHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbShwcm9wcykge1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG5cbiAgICAgICAgICA8SGVhZGVyIHRpdGxlPXtwcm9wcy5jYXR9IGl0ZW09e3Byb3BzLml0ZW19IC8+XG4gICAgICAgICAgPE5hdmJhciAvPlxuXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiSW5mb0l0ZW1cIj5cbiAgICAgICAgICAgICAgPEl0ZW1Ta2VsZXR0ZSBpdGVtTmFtZT17cHJvcHMuaXRlbX0vPlxuICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufSIsImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29weXJpZ2h0JztcbmltcG9ydCBJdGVtU2tlbGV0dGUgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9za2VsZXRvbi9tYXRlcmllbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNlYXUoKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cblxuICAgICAgICAgIDxIZWFkZXIgdGl0bGU9XCJSw6lzZWF1XCIgIGl0ZW09XCJcIiAvPlxuICAgICAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8SXRlbVNrZWxldHRlIHBhZ2U9XCJyw6lzZWF1XCIvPlxuICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufSIsImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29weXJpZ2h0JztcbmltcG9ydCBJdGVtU2tlbGV0dGUgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9za2VsZXRvbi9tYXRlcmllbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWxlcGhvbmlxdWUoKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cblxuICAgICAgICAgIDxIZWFkZXIgdGl0bGU9XCJSw6l1bmlvblwiIGl0ZW09XCJcIiAvPlxuICAgICAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8SXRlbVNrZWxldHRlIHBhZ2U9XCJyw6l1bmlvblwiLz5cbiAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn0iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvcHlyaWdodCc7XG5pbXBvcnQgSXRlbVNrZWxldHRlIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvc2tlbGV0b24vbWF0ZXJpZWwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVsZXBob25pcXVlKCkge1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG5cbiAgICAgICAgICA8SGVhZGVyIHRpdGxlPVwiVMOpbMOpcGhvbmlxdWVcIiAgaXRlbT1cIlwiIC8+XG4gICAgICAgICAgPE5hdmJhciAvPlxuXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxJdGVtU2tlbGV0dGUgcGFnZT1cInTDqWzDqXBob25pcXVlXCIvPlxuICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufSIsImZ1bmN0aW9uIHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgcmVhY3RDb250cm9sbGVycyA9IHt9O1xuICAgIGNvbnN0IGltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyA9IChyKSA9PiB7XG4gICAgICAgIHIua2V5cygpLmZvckVhY2goKGtleSkgPT4gKHJlYWN0Q29udHJvbGxlcnNba2V5XSA9IHIoa2V5KS5kZWZhdWx0KSk7XG4gICAgfTtcbiAgICBpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMoY29udGV4dCk7XG4gICAgd2luZG93LnJlc29sdmVSZWFjdENvbXBvbmVudCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHJlYWN0Q29udHJvbGxlcnNbYC4vJHtuYW1lfS5qc3hgXSB8fCByZWFjdENvbnRyb2xsZXJzW2AuLyR7bmFtZX0udHN4YF07XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdCBjb250cm9sbGVyIFwiJyArIG5hbWUgKyAnXCIgZG9lcyBub3QgZXhpc3QnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG59XG5cbmV4cG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCByZXF1aXJlJCQwIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxudmFyIGNyZWF0ZVJvb3Q7XG5cbnZhciBtID0gcmVxdWlyZSQkMDtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGNyZWF0ZVJvb3QgPSBtLmNyZWF0ZVJvb3Q7XG4gIG0uaHlkcmF0ZVJvb3Q7XG59IGVsc2Uge1xuICB2YXIgaSA9IG0uX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG4gIGNyZWF0ZVJvb3QgPSBmdW5jdGlvbihjLCBvKSB7XG4gICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbS5jcmVhdGVSb290KGMsIG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cblxuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnLCB7IGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSwgcHJvcHM6IHByb3BzIH0pO1xuICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY29tcG9uZW50IHNwZWNpZmllZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB3aW5kb3cucmVzb2x2ZVJlYWN0Q29tcG9uZW50KHRoaXMuY29tcG9uZW50VmFsdWUpO1xuICAgICAgICB0aGlzLl9yZW5kZXJSZWFjdEVsZW1lbnQoUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzLCBudWxsKSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucm9vdC51bm1vdW50KCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndW5tb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3JlbmRlclJlYWN0RWxlbWVudChyZWFjdEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgaWYgKCFlbGVtZW50LnJvb3QpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucm9vdCA9IGNyZWF0ZVJvb3QodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnJvb3QucmVuZGVyKHJlYWN0RWxlbWVudCk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBwcmVmaXg6ICdyZWFjdCcgfSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBjb21wb25lbnQ6IFN0cmluZyxcbiAgICBwcm9wczogT2JqZWN0LFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiUmVhY3QiLCJmb290ZXIiLCJmb250V2VpZ2h0IiwidGV4dERlY29yYXRpb24iLCJkaXNwbGF5IiwiaGVpZ2h0Iiwib3BhY2l0eSIsImNvbG9yIiwidHJhbnNpdGlvbiIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIkxpbmsiLCJjYXBpdGFsaXplV29yZHMiLCJzdHIiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0IiwibWFwIiwid29yZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJqb2luIiwibm9ybWFsaXplIiwicmVwbGFjZSIsInJlcGxhY2VBbGwiLCJoZWFkZXIiLCJ0aXRsZSIsIml0ZW0iLCJsZW5ndGgiLCJJVEVNUyIsInRvdGFsIiwiQ2F0ZWdvcnkiLCJmaWx0ZXIiLCJjYXRlZ29yeSIsImF2YWlsYWJsZSIsInVuYXZhaWxhYmxlIiwiaXRlbVN0YXRzIiwiUmluZ3MiLCJsb2FkaW5nQ29tcCIsInBvc2l0aW9uIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwibWFyZ2luIiwid2lkdGgiLCJJdGVtIiwiaHJlZiIsImltZyIsImFsdCIsIm9iamVjdEZpdCIsIm5hbWUiLCJCdXR0b24iLCJ6b29tIiwiZSIsInpvb21lciIsImN1cnJlbnRUYXJnZXQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInBhZ2VYIiwicGFnZVkiLCJ4Iiwib2Zmc2V0V2lkdGgiLCJ5Iiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJlbXBsYWNlbWVudCIsImlkIiwiZGVzY3JpcHRpb24iLCJjYXJhY3RlcmlzdGlxdWVzIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJ1c2VFZmZlY3QiLCJuYXZiYXIiLCJTa2VsZXRvbiIsInVzZVN0YXRlIiwiSXRlbVN0YXRzIiwiaXRlbXMiLCJTa2VsZXRvbkJyZWFkY3J1bWIiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwiU2tlbGV0b25JdGVtIiwicmFuZG9tVGltZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIlNrZWxldHRlIiwicGFnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0VGltZW91dCIsIkFycmF5Iiwia2V5cyIsIml0ZW1OYW1lIiwiSXRlbUltYWdlIiwiVGV4dFRpdGxlIiwiVGV4dERlc2NyaXB0aW9uIiwiYWxpZ25Db250ZW50IiwiZmxleERpcmVjdGlvbiIsInJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyIsInJlcXVpcmUiLCJjb250ZXh0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsIk5hdmJhciIsIkZvb3RlciIsIkl0ZW1Ta2VsZXR0ZSIsInVzZVJlZiIsIkxvYWRpbmdDb21wIiwiQWNjdWVpbCIsInJlbW92ZU9wYWNpdHkiLCJlbGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlRleHRGaWVsZCIsIkxvZ2luIiwiSGVhZGVyIiwiVGVsZXBob25pcXVlIiwicHJvcHMiLCJjYXQiLCJSZXNlYXUiLCJyZWFjdENvbnRyb2xsZXJzIiwiaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzIiwiciIsImZvckVhY2giLCJrZXkiLCJ3aW5kb3ciLCJyZXNvbHZlUmVhY3RDb21wb25lbnQiLCJjb21wb25lbnQiLCJFcnJvciIsInJlcXVpcmUkJDAiLCJjcmVhdGVSb290IiwibSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImh5ZHJhdGVSb290IiwiaSIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwiYyIsIm8iLCJ1c2luZ0NsaWVudEVudHJ5UG9pbnQiLCJkZWZhdWx0XzEiLCJwcm9wc1ZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsImNvbXBvbmVudFZhbHVlIiwiX3JlbmRlclJlYWN0RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb21wb25lbnROYW1lIiwicm9vdCIsInVubW91bnQiLCJyZWFjdEVsZW1lbnQiLCJyZW5kZXIiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwcmVmaXgiLCJ2YWx1ZXMiLCJTdHJpbmciLCJPYmplY3QiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==