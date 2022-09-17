(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Muli&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lato:300,400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  background: #f7e3c1;\n  background: linear-gradient(to right, #f6a9a9, #ddcaaa);\n  background: linear-gradient(to right, #dd9797, #e2dacc);\n  margin: 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.title {\n  padding-left: 60px;\n  margin-left: 13rem;\n  display: flex;\n  justify-content: space-between;\n}\n\n.container {\n  padding: 40px;\n  margin: 0 auto;\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #ee6983;\n}\n\nh1 {\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 54px;\n}\n\n.logo {\n  max-width: 17%;\n  height: auto;\n  padding: 5px;\n}\n\n.links {\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\n\n.links ul {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  text-align: center;\n  margin-right: 20rem;\n  font-size: 1.5rem;\n}\n\n.links li {\n  list-style: none;\n}\n\n.links li a {\n  text-decoration: none;\n  color: black;\n  padding: 1rem;\n  display: block;\n}\n\n.poke-elem {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  grid-gap: 20px;\n  padding-inline-start: 0;\n}\n\n.poke-cards {\n  border-radius: 50px;\n  list-style: none;\n  padding: 30px;\n  background-color: #ee6983;\n  color: #222;\n  text-align: center;\n}\n\n.title-cr {\n  text-transform: capitalize;\n  margin-bottom: 0;\n  font-size: 32px;\n  font-weight: normal;\n}\n\n.type {\n  margin-top: 5px;\n  color: rgb(20 20 20);\n  font-weight: lighter;\n}\n\n.img-card {\n  height: 180px;\n  background-color: rgb(255 255 255 / 60%);\n  border-radius: 50%;\n  width: 180px;\n  text-align: center;\n}\n\n.btn {\n  background-color: rgb(255 255 255 / 60%);\n  border-radius: 10px;\n  color: black;\n  padding: 7px;\n}\n\n.heart-img {\n  width: 15%;\n  height: auto;\n  padding: 5px;\n}\n\n.click {\n  display: flex;\n  justify-content: center;\n}\n\n.like-api-call-btn {\n  background: none;\n  border: none;\n  outline: none;\n}\n\n/* Comment section */\n\n.comment-wrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 0;\n  backdrop-filter: blur(5px);\n}\n\n.comment-section {\n  background-color: #f6a9a9;\n  border-radius: 50px;\n  width: 90%;\n  height: 95%;\n  z-index: 101;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.close-div {\n  width: 95%;\n  display: flex;\n  justify-content: end;\n}\n\n.close {\n  height: 60px;\n  width: 60px;\n}\n\n.comment-pokename {\n  text-transform: capitalize;\n  margin-bottom: 0;\n  font-size: 40px;\n  font-weight: normal;\n}\n\n.comment-poketype {\n  font-weight: normal;\n  font-size: 24px;\n}\n\n.comment-pokeid {\n  font-weight: normal;\n  font-size: 18px;\n  margin-top: 0;\n}\n\n.all-comments-wrapper {\n  font-weight: normal;\n  width: 50vw;\n}\n\n.all-comments li {\n  margin-bottom: 3px;\n  list-style-type: none;\n  text-align: center;\n}\n\n.comments-header {\n  font-weight: normal;\n  font-size: 40px;\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\n.add-comment-wrapper {\n  font-weight: normal;\n  display: flex;\n  flex-direction: column;\n  width: 40vw;\n}\n\n.add-comment-header {\n  font-weight: normal;\n  align-self: center;\n  font-size: 30px;\n}\n\n.add-comment-name {\n  font-weight: normal;\n  padding: 3px;\n  margin-bottom: 10px;\n  width: 15vw;\n  font-size: 16px;\n}\n\n.add-comment-text {\n  font-weight: normal;\n  padding: 3px;\n  margin-bottom: 10px;\n  width: 25vw;\n  height: 100px;\n  font-size: 16px;\n}\n\n.add-comment-button {\n  font-weight: normal;\n  width: 15vw;\n  padding: 5px;\n  font-size: 18px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,uDAAuD;EACvD,uDAAuD;EACvD,SAAS;AACX;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,SAAS;EACT,UAAU;EACV,aAAa;AACf;;AAEA;EACE,SAAS;EACT,UAAU;EACV,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;EACb,yBAAyB;EACzB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,gBAAgB;EAChB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,wCAAwC;EACxC,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,wCAAwC;EACxC,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;AACf;;AAEA,oBAAoB;;AAEpB;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,MAAM;EACN,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,OAAO;EACP,0BAA0B;AAC5B;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,0BAA0B;EAC1B,gBAAgB;EAChB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,eAAe;AACjB","sourcesContent":["@import \"https://fonts.googleapis.com/css?family=Muli&display=swap\";\n@import \"https://fonts.googleapis.com/css?family=Lato:300,400&display=swap\";\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  background: #f7e3c1;\n  background: linear-gradient(to right, #f6a9a9, #ddcaaa);\n  background: linear-gradient(to right, #dd9797, #e2dacc);\n  margin: 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.title {\n  padding-left: 60px;\n  margin-left: 13rem;\n  display: flex;\n  justify-content: space-between;\n}\n\n.container {\n  padding: 40px;\n  margin: 0 auto;\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #ee6983;\n}\n\nh1 {\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 54px;\n}\n\n.logo {\n  max-width: 17%;\n  height: auto;\n  padding: 5px;\n}\n\n.links {\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\n\n.links ul {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  text-align: center;\n  margin-right: 20rem;\n  font-size: 1.5rem;\n}\n\n.links li {\n  list-style: none;\n}\n\n.links li a {\n  text-decoration: none;\n  color: black;\n  padding: 1rem;\n  display: block;\n}\n\n.poke-elem {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  grid-gap: 20px;\n  padding-inline-start: 0;\n}\n\n.poke-cards {\n  border-radius: 50px;\n  list-style: none;\n  padding: 30px;\n  background-color: #ee6983;\n  color: #222;\n  text-align: center;\n}\n\n.title-cr {\n  text-transform: capitalize;\n  margin-bottom: 0;\n  font-size: 32px;\n  font-weight: normal;\n}\n\n.type {\n  margin-top: 5px;\n  color: rgb(20 20 20);\n  font-weight: lighter;\n}\n\n.img-card {\n  height: 180px;\n  background-color: rgb(255 255 255 / 60%);\n  border-radius: 50%;\n  width: 180px;\n  text-align: center;\n}\n\n.btn {\n  background-color: rgb(255 255 255 / 60%);\n  border-radius: 10px;\n  color: black;\n  padding: 7px;\n}\n\n.heart-img {\n  width: 15%;\n  height: auto;\n  padding: 5px;\n}\n\n.click {\n  display: flex;\n  justify-content: center;\n}\n\n.like-api-call-btn {\n  background: none;\n  border: none;\n  outline: none;\n}\n\n/* Comment section */\n\n.comment-wrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 0;\n  backdrop-filter: blur(5px);\n}\n\n.comment-section {\n  background-color: #f6a9a9;\n  border-radius: 50px;\n  width: 90%;\n  height: 95%;\n  z-index: 101;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.close-div {\n  width: 95%;\n  display: flex;\n  justify-content: end;\n}\n\n.close {\n  height: 60px;\n  width: 60px;\n}\n\n.comment-pokename {\n  text-transform: capitalize;\n  margin-bottom: 0;\n  font-size: 40px;\n  font-weight: normal;\n}\n\n.comment-poketype {\n  font-weight: normal;\n  font-size: 24px;\n}\n\n.comment-pokeid {\n  font-weight: normal;\n  font-size: 18px;\n  margin-top: 0;\n}\n\n.all-comments-wrapper {\n  font-weight: normal;\n  width: 50vw;\n}\n\n.all-comments li {\n  margin-bottom: 3px;\n  list-style-type: none;\n  text-align: center;\n}\n\n.comments-header {\n  font-weight: normal;\n  font-size: 40px;\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\n.add-comment-wrapper {\n  font-weight: normal;\n  display: flex;\n  flex-direction: column;\n  width: 40vw;\n}\n\n.add-comment-header {\n  font-weight: normal;\n  align-self: center;\n  font-size: 30px;\n}\n\n.add-comment-name {\n  font-weight: normal;\n  padding: 3px;\n  margin-bottom: 10px;\n  width: 15vw;\n  font-size: 16px;\n}\n\n.add-comment-text {\n  font-weight: normal;\n  padding: 3px;\n  margin-bottom: 10px;\n  width: 25vw;\n  height: 100px;\n  font-size: 16px;\n}\n\n.add-comment-button {\n  font-weight: normal;\n  width: 15vw;\n  padding: 5px;\n  font-size: 18px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/JS/commentApi.js":
/*!******************************!*\
  !*** ./src/JS/commentApi.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Comments {
  static postComments = async (id, name, comment) => {
    const res = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0R3ry3Cxsg0WOw831pSH/comments',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: id,
          username: name,
          comment,
        }),
      },
    );
    const post = await res.text();
    return post;
  };

  static getComments = async (id) => {
    const res = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0R3ry3Cxsg0WOw831pSH/comments?item_id=${id}`,
    );
    const comment = await res.json();
    return comment;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comments);

/***/ }),

/***/ "./src/JS/commentReload.js":
/*!*********************************!*\
  !*** ./src/JS/commentReload.js ***!
  \*********************************/
/***/ (() => {

const commentReload = () => {
  const commentWrapper = document.createElement('div');
  commentWrapper.classList.add('comment-wrapper');
  container.appendChild(commentWrapper);

  const commentSection = document.createElement('div');
  commentSection.classList.add('comment-section');
  commentWrapper.appendChild(commentSection);

  const closeDiv = document.createElement('div');
  closeDiv.classList.add('close-div');
  commentSection.appendChild(closeDiv);

  const closeIcon = new Image();
  closeIcon.src = close;
  closeIcon.classList.add('close');
  closeDiv.appendChild(closeIcon);

  const pokemonImg = new Image();
  pokemonImg.src = pokemon[i].image;
  pokemonImg.classList.add('img-card');
  commentSection.appendChild(pokemonImg);

  const pokemonName = document.createElement('h2');
  pokemonName.classList.add('comment-pokename');
  pokemonName.innerText = pokemon[i].name;
  commentSection.appendChild(pokemonName);

  const pokemonType = document.createElement('p');
  pokemonType.classList.add('comment-poketype');
  pokemonType.innerText = `Type: ${pokemon[i].type}`;
  commentSection.appendChild(pokemonType);

  const pokemonGameID = document.createElement('p');
  pokemonGameID.classList.add('comment-pokeid');
  pokemonGameID.innerText = `In-game Pokemon ID: ${pokemon[i].id}`;
  commentSection.appendChild(pokemonGameID);

  const allCommentsWrapper = document.createElement('div');
  allCommentsWrapper.classList.add('all-comments-wrapper');
  commentSection.appendChild(allCommentsWrapper);

  const commentsHeader = document.createElement('h2');
  commentsHeader.classList.add('comments-header');
  commentsHeader.innerText = 'Comments';
  allCommentsWrapper.appendChild(commentsHeader);

  let allComments = document.createElement('ul');
  allComments.classList.add('all-comments');
  allCommentsWrapper.appendChild(allComments);

  const addCommentWrapper = document.createElement('div');
  addCommentWrapper.classList.add('add-comment-wrapper');
  commentSection.appendChild(addCommentWrapper);

  const addCommentHeader = document.createElement('h3');
  addCommentHeader.classList.add('add-comment-header');
  addCommentHeader.innerText = 'Add a comment';
  addCommentWrapper.appendChild(addCommentHeader);

  const addCommentName = document.createElement('input');
  addCommentName.classList.add('add-comment-name');
  addCommentName.placeholder = 'Your name';
  addCommentWrapper.appendChild(addCommentName);

  const addCommentText = document.createElement('textarea');
  addCommentText.classList.add('add-comment-text');
  addCommentText.placeholder = 'Your comment';
  addCommentWrapper.appendChild(addCommentText);

  const addCommentBtn = document.createElement('button');
  addCommentBtn.classList.add('add-comment-button');
  addCommentBtn.innerText = 'Comment';
  addCommentWrapper.appendChild(addCommentBtn);
};

/***/ }),

/***/ "./src/JS/itemCounter.js":
/*!*******************************!*\
  !*** ./src/JS/itemCounter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const itemCounter = (allItems, itemsCounter) => {
  itemsCounter.innerHTML = `Pokemons(${allItems / 3})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounter);

/***/ }),

/***/ "./src/JS/likeAPI.js":
/*!***************************!*\
  !*** ./src/JS/likeAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const p = document.querySelector('#poke-elem');

const likeAPI = (item) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0R3ry3Cxsg0WOw831pSH/likes', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(item),
  });
  // .then(json=>json.json())
};

const getLikes = async () => {
  const like = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0R3ry3Cxsg0WOw831pSH/likes');
  return like.json();
};

p.addEventListener('click', (e) => {
  if (e.target.classList.value === 'heart-img like-api-call-btn') {
    const likeContainer = e.target.parentNode.children[2];
    const value = +likeContainer.innerHTML + 1;
    likeContainer.innerHTML = value;
    const { id } = e.target;
    likeAPI({ item_id: id });
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _JS_likeAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JS/likeAPI.js */ "./src/JS/likeAPI.js");
/* harmony import */ var _JS_itemCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JS/itemCounter.js */ "./src/JS/itemCounter.js");
/* harmony import */ var _images_close_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/close.png */ "./src/images/close.png");
/* harmony import */ var _JS_commentApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./JS/commentApi */ "./src/JS/commentApi.js");
/* harmony import */ var _JS_commentReload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JS/commentReload */ "./src/JS/commentReload.js");
/* harmony import */ var _JS_commentReload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_JS_commentReload__WEBPACK_IMPORTED_MODULE_5__);







const container = document.querySelector('.container');
const pokeElem = document.getElementById('poke-elem');
const pokeCounter = document.querySelector('.poke-counter');

const pokeNum = 36;

const fetchPoke = async () => {
  const likes = await (0,_JS_likeAPI_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const pokemons = [];
  for (let i = 1; i <= pokeNum; i += 3) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    pokemons.push(fetch(url).then((res) => res.json()));
  }

  const displayComments = (pokemon) => {
    const list = document.querySelector('.poke-elem');
    list.addEventListener('click', (e) => {
      if (e.target.innerHTML === 'Comment') {
        for (let i = 0; i <= pokemon.length; i += 1) {
          const pokeSource = e.target.parentElement.parentElement.firstChild.nextSibling.src;
          if (pokeSource === pokemon[i]?.image) {
            const commentWrapper = document.createElement('div');
            commentWrapper.classList.add('comment-wrapper');
            container.appendChild(commentWrapper);

            const commentSection = document.createElement('div');
            commentSection.classList.add('comment-section');
            commentWrapper.appendChild(commentSection);

            const closeDiv = document.createElement('div');
            closeDiv.classList.add('close-div');
            commentSection.appendChild(closeDiv);

            const closeIcon = new Image();
            closeIcon.src = _images_close_png__WEBPACK_IMPORTED_MODULE_3__;
            closeIcon.classList.add('close');
            closeDiv.appendChild(closeIcon);

            const pokemonImg = new Image();
            pokemonImg.src = pokemon[i].image;
            pokemonImg.classList.add('img-card');
            commentSection.appendChild(pokemonImg);

            const pokemonName = document.createElement('h2');
            pokemonName.classList.add('comment-pokename');
            pokemonName.innerText = pokemon[i].name;
            commentSection.appendChild(pokemonName);

            const pokemonType = document.createElement('p');
            pokemonType.classList.add('comment-poketype');
            pokemonType.innerText = `Type: ${pokemon[i].type}`;
            commentSection.appendChild(pokemonType);

            const pokemonGameID = document.createElement('p');
            pokemonGameID.classList.add('comment-pokeid');
            pokemonGameID.innerText = `In-game Pokemon ID: ${pokemon[i].id}`;
            commentSection.appendChild(pokemonGameID);

            const allCommentsWrapper = document.createElement('div');
            allCommentsWrapper.classList.add('all-comments-wrapper');
            commentSection.appendChild(allCommentsWrapper);

            const commentsHeader = document.createElement('h2');
            commentsHeader.classList.add('comments-header');
            commentsHeader.innerText = 'Comments';
            allCommentsWrapper.appendChild(commentsHeader);

            let allComments = document.createElement('ul');
            allComments.classList.add('all-comments');
            allCommentsWrapper.appendChild(allComments);

            const addCommentWrapper = document.createElement('div');
            addCommentWrapper.classList.add('add-comment-wrapper');
            commentSection.appendChild(addCommentWrapper);

            const addCommentHeader = document.createElement('h3');
            addCommentHeader.classList.add('add-comment-header');
            addCommentHeader.innerText = 'Add a comment';
            addCommentWrapper.appendChild(addCommentHeader);

            const addCommentName = document.createElement('input');
            addCommentName.classList.add('add-comment-name');
            addCommentName.placeholder = 'Your name';
            addCommentWrapper.appendChild(addCommentName);

            const addCommentText = document.createElement('textarea');
            addCommentText.classList.add('add-comment-text');
            addCommentText.placeholder = 'Your comment';
            addCommentWrapper.appendChild(addCommentText);

            const addCommentBtn = document.createElement('button');
            addCommentBtn.classList.add('add-comment-button');
            addCommentBtn.innerText = 'Comment';
            addCommentWrapper.appendChild(addCommentBtn);

            async function requestComments() {
              let commentsInfo = await _JS_commentApi__WEBPACK_IMPORTED_MODULE_4__["default"].getComments(pokemon[i].id);
              console.log(commentsInfo);
              for (let i = 0; i+1 <= commentsInfo.length; i += 1) {
                const comment = document.createElement('li');
                comment.innerText = `${commentsInfo[i]?.creation_date} ${commentsInfo[i]?.username}: ${commentsInfo[i]?.comment}`;
                allComments.appendChild(comment);
              }
            }
            requestComments();

            addCommentBtn.addEventListener('click', (y) => {
              if (addCommentName.value !== '' && addCommentText.value !== '') {
                const userName = addCommentName.value;
                const userComment = addCommentText.value;
                _JS_commentApi__WEBPACK_IMPORTED_MODULE_4__["default"].postComments(pokemon[i].id, userName, userComment);
                addCommentName.value = '';
                addCommentText.value = '';
                commentWrapper.remove();
                _JS_commentReload__WEBPACK_IMPORTED_MODULE_5___default()();
              }
            });

            closeDiv.addEventListener('click', (z) => {
              if (z.target.src === _images_close_png__WEBPACK_IMPORTED_MODULE_3__) {
                commentWrapper.remove();
              }
            });
          }
        }
      }
    });
  };

  const showPoke = (pokemon) => {
    const pokeInnerHtml = pokemon
      .map(
        (pok) => {
          let targetLikes = 0;
          likes.forEach((l) => {
            if (l.item_id.toString() === pok.id.toString() && targetLikes === 0) {
              targetLikes = l.likes;
            }
          });
          return `
            <li class="poke-cards">
            
                <img class="img-card" src="${pok.image}"/>
                <h2 class="title-cr"> ${pok.name}</h2>
                <p class="type">Type: ${pok.type}</p>
                <div class = "click">
                <button type="button" class="btn">Comment</button>
                <img src="./images/icons8-heart-40(1).png" alt="" id=${pok.id} class="heart-img like-api-call-btn">
                <span class="likes-container">${targetLikes || 0}</span>
                </div>
            </li>
        `;
        },
      )
      .join('');
    pokeElem.innerHTML = pokeInnerHtml;
  };

  Promise.all(pokemons).then((results) => {
    const pokemon = results.map((res) => ({
      name: res.name,
      image: res.sprites.front_default,
      type: res.types.map((type) => type.type.name).join(', '),
      id: res.id,
    }));
    showPoke(pokemon);
    displayComments(pokemon);
  });
};

window.onload = async () => {
  fetchPoke();
  (0,_JS_itemCounter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(pokeNum, pokeCounter);
};

/*
addCommentBtn.addEventListener('click', (y) => {
  if (addCommentName.value !== '' && addCommentText.value !== '') {
    const userName = addCommentName.value;
    const userComment = addCommentText.value;
    Comments.postComments(pokemon[i].id, userName, userComment);
    addCommentName.value = '';
    addCommentText.value = '';
    allComments.remove();
    allComments = document.createElement('ul');
    allComments.classList.add('all-comments');
    allCommentsWrapper.appendChild(allComments);
    async function requestComments2() {
      let commentsInfo = await Comments.getComments(pokemon[i].id);
      console.log(commentsInfo);
      for (let i = 0; i+1 <= commentsInfo.length; i += 1) {
        if (commentsInfo[i].user !== undefined){
        const comment = document.createElement('li');
        comment.innerText = `${commentsInfo[i]?.creation_date} ${commentsInfo[i]?.username}: ${commentsInfo[i]?.comment}`;
        allComments.appendChild(comment);
        }
      }
    }
    requestComments2();
  }
});*/

/***/ }),

/***/ "./src/images/close.png":
/*!******************************!*\
  !*** ./src/images/close.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "10053b4b6b38945b74d3.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsRUFBRSw4REFBVztBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQTtBQUNBLCtCQUErQixnQ0FBZ0MsRUFBRSwwQkFBMEIsSUFBSSx5QkFBeUI7QUFDeEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0pTL2NvbW1lbnRBcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9KUy9jb21tZW50UmVsb2FkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvSlMvaXRlbUNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9KUy9saWtlQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU11bGkmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICNmN2UzYzE7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNmE5YTksICNkZGNhYWEpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZGQ5Nzk3LCAjZTJkYWNjKTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi50aXRsZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICBtYXJnaW4tbGVmdDogMTNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTY5ODM7XFxufVxcblxcbmgxIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDU0cHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIG1heC13aWR0aDogMTclO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubGlua3Mge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5saW5rcyB1bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogMjByZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmxpbmtzIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5saW5rcyBsaSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnBva2UtZWxlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMjBweCwgMWZyKSk7XFxuICBncmlkLWdhcDogMjBweDtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xcbn1cXG5cXG4ucG9rZS1jYXJkcyB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU2OTgzO1xcbiAgY29sb3I6ICMyMjI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZS1jciB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4udHlwZSB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBjb2xvcjogcmdiKDIwIDIwIDIwKTtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG5cXG4uaW1nLWNhcmQge1xcbiAgaGVpZ2h0OiAxODBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDYwJSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMTgwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiA3cHg7XFxufVxcblxcbi5oZWFydC1pbWcge1xcbiAgd2lkdGg6IDE1JTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmNsaWNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmxpa2UtYXBpLWNhbGwtYnRuIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBDb21tZW50IHNlY3Rpb24gKi9cXG5cXG4uY29tbWVudC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdG9wOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZhOWE5O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDk1JTtcXG4gIHotaW5kZXg6IDEwMTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZS1kaXYge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4uY29tbWVudC1wb2tlbmFtZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uY29tbWVudC1wb2tldHlwZSB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uY29tbWVudC1wb2tlaWQge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5hbGwtY29tbWVudHMtd3JhcHBlciB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgd2lkdGg6IDUwdnc7XFxufVxcblxcbi5hbGwtY29tbWVudHMgbGkge1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29tbWVudHMtaGVhZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmFkZC1jb21tZW50LXdyYXBwZXIge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDQwdnc7XFxufVxcblxcbi5hZGQtY29tbWVudC1oZWFkZXIge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmFkZC1jb21tZW50LW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogMTV2dztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmFkZC1jb21tZW50LXRleHQge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogMjV2dztcXG4gIGhlaWdodDogMTAwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5hZGQtY29tbWVudC1idXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHdpZHRoOiAxNXZ3O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVEQUF1RDtFQUN2RCx1REFBdUQ7RUFDdkQsU0FBUztBQUNYOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLE1BQU07RUFDTixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixPQUFPO0VBQ1AsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TXVsaSZkaXNwbGF5PXN3YXBcXFwiO1xcbkBpbXBvcnQgXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAmZGlzcGxheT1zd2FwXFxcIjtcXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogI2Y3ZTNjMTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y2YTlhOSwgI2RkY2FhYSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkZDk3OTcsICNlMmRhY2MpO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIHBhZGRpbmctbGVmdDogNjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZzogNDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlNjk4MztcXG59XFxuXFxuaDEge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNTRweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgbWF4LXdpZHRoOiAxNyU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5saW5rcyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmxpbmtzIHVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ubGlua3MgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmxpbmtzIGxpIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucG9rZS1lbGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxufVxcblxcbi5wb2tlLWNhcmRzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTY5ODM7XFxuICBjb2xvcjogIzIyMjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlLWNyIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi50eXBlIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGNvbG9yOiByZ2IoMjAgMjAgMjApO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxufVxcblxcbi5pbWctY2FyZCB7XFxuICBoZWlnaHQ6IDE4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAxODBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDdweDtcXG59XFxuXFxuLmhlYXJ0LWltZyB7XFxuICB3aWR0aDogMTUlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uY2xpY2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubGlrZS1hcGktY2FsbC1idG4ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIENvbW1lbnQgc2VjdGlvbiAqL1xcblxcbi5jb21tZW50LXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4uY29tbWVudC1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmE5YTk7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTUlO1xcbiAgei1pbmRleDogMTAxO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlLWRpdiB7XFxuICB3aWR0aDogOTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi5jb21tZW50LXBva2VuYW1lIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5jb21tZW50LXBva2V0eXBlIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5jb21tZW50LXBva2VpZCB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLmFsbC1jb21tZW50cy13cmFwcGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICB3aWR0aDogNTB2dztcXG59XFxuXFxuLmFsbC1jb21tZW50cyBsaSB7XFxuICBtYXJnaW4tYm90dG9tOiAzcHg7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb21tZW50cy1oZWFkZXIge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQtd3JhcHBlciB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNDB2dztcXG59XFxuXFxuLmFkZC1jb21tZW50LWhlYWRlciB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQtbmFtZSB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHdpZHRoOiAxNXZ3O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQtdGV4dCB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHdpZHRoOiAyNXZ3O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmFkZC1jb21tZW50LWJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgd2lkdGg6IDE1dnc7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgQ29tbWVudHMge1xuICBzdGF0aWMgcG9zdENvbW1lbnRzID0gYXN5bmMgKGlkLCBuYW1lLCBjb21tZW50KSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvMFIzcnkzQ3hzZzBXT3c4MzFwU0gvY29tbWVudHMnLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpdGVtX2lkOiBpZCxcbiAgICAgICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgICAgICBjb21tZW50LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgKTtcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgcmVzLnRleHQoKTtcbiAgICByZXR1cm4gcG9zdDtcbiAgfTtcblxuICBzdGF0aWMgZ2V0Q29tbWVudHMgPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8wUjNyeTNDeHNnMFdPdzgzMXBTSC9jb21tZW50cz9pdGVtX2lkPSR7aWR9YCxcbiAgICApO1xuICAgIGNvbnN0IGNvbW1lbnQgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiBjb21tZW50O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50czsiLCJjb25zdCBjb21tZW50UmVsb2FkID0gKCkgPT4ge1xuICBjb25zdCBjb21tZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb21tZW50V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjb21tZW50LXdyYXBwZXInKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1lbnRXcmFwcGVyKTtcblxuICBjb25zdCBjb21tZW50U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb21tZW50U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjb21tZW50LXNlY3Rpb24nKTtcbiAgY29tbWVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29tbWVudFNlY3Rpb24pO1xuXG4gIGNvbnN0IGNsb3NlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNsb3NlRGl2LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWRpdicpO1xuICBjb21tZW50U2VjdGlvbi5hcHBlbmRDaGlsZChjbG9zZURpdik7XG5cbiAgY29uc3QgY2xvc2VJY29uID0gbmV3IEltYWdlKCk7XG4gIGNsb3NlSWNvbi5zcmMgPSBjbG9zZTtcbiAgY2xvc2VJY29uLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XG4gIGNsb3NlRGl2LmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XG5cbiAgY29uc3QgcG9rZW1vbkltZyA9IG5ldyBJbWFnZSgpO1xuICBwb2tlbW9uSW1nLnNyYyA9IHBva2Vtb25baV0uaW1hZ2U7XG4gIHBva2Vtb25JbWcuY2xhc3NMaXN0LmFkZCgnaW1nLWNhcmQnKTtcbiAgY29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQocG9rZW1vbkltZyk7XG5cbiAgY29uc3QgcG9rZW1vbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBwb2tlbW9uTmFtZS5jbGFzc0xpc3QuYWRkKCdjb21tZW50LXBva2VuYW1lJyk7XG4gIHBva2Vtb25OYW1lLmlubmVyVGV4dCA9IHBva2Vtb25baV0ubmFtZTtcbiAgY29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQocG9rZW1vbk5hbWUpO1xuXG4gIGNvbnN0IHBva2Vtb25UeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwb2tlbW9uVHlwZS5jbGFzc0xpc3QuYWRkKCdjb21tZW50LXBva2V0eXBlJyk7XG4gIHBva2Vtb25UeXBlLmlubmVyVGV4dCA9IGBUeXBlOiAke3Bva2Vtb25baV0udHlwZX1gO1xuICBjb21tZW50U2VjdGlvbi5hcHBlbmRDaGlsZChwb2tlbW9uVHlwZSk7XG5cbiAgY29uc3QgcG9rZW1vbkdhbWVJRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcG9rZW1vbkdhbWVJRC5jbGFzc0xpc3QuYWRkKCdjb21tZW50LXBva2VpZCcpO1xuICBwb2tlbW9uR2FtZUlELmlubmVyVGV4dCA9IGBJbi1nYW1lIFBva2Vtb24gSUQ6ICR7cG9rZW1vbltpXS5pZH1gO1xuICBjb21tZW50U2VjdGlvbi5hcHBlbmRDaGlsZChwb2tlbW9uR2FtZUlEKTtcblxuICBjb25zdCBhbGxDb21tZW50c1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWxsQ29tbWVudHNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FsbC1jb21tZW50cy13cmFwcGVyJyk7XG4gIGNvbW1lbnRTZWN0aW9uLmFwcGVuZENoaWxkKGFsbENvbW1lbnRzV3JhcHBlcik7XG5cbiAgY29uc3QgY29tbWVudHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb21tZW50c0hlYWRlci5jbGFzc0xpc3QuYWRkKCdjb21tZW50cy1oZWFkZXInKTtcbiAgY29tbWVudHNIZWFkZXIuaW5uZXJUZXh0ID0gJ0NvbW1lbnRzJztcbiAgYWxsQ29tbWVudHNXcmFwcGVyLmFwcGVuZENoaWxkKGNvbW1lbnRzSGVhZGVyKTtcblxuICBsZXQgYWxsQ29tbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBhbGxDb21tZW50cy5jbGFzc0xpc3QuYWRkKCdhbGwtY29tbWVudHMnKTtcbiAgYWxsQ29tbWVudHNXcmFwcGVyLmFwcGVuZENoaWxkKGFsbENvbW1lbnRzKTtcblxuICBjb25zdCBhZGRDb21tZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGRDb21tZW50V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhZGQtY29tbWVudC13cmFwcGVyJyk7XG4gIGNvbW1lbnRTZWN0aW9uLmFwcGVuZENoaWxkKGFkZENvbW1lbnRXcmFwcGVyKTtcblxuICBjb25zdCBhZGRDb21tZW50SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgYWRkQ29tbWVudEhlYWRlci5jbGFzc0xpc3QuYWRkKCdhZGQtY29tbWVudC1oZWFkZXInKTtcbiAgYWRkQ29tbWVudEhlYWRlci5pbm5lclRleHQgPSAnQWRkIGEgY29tbWVudCc7XG4gIGFkZENvbW1lbnRXcmFwcGVyLmFwcGVuZENoaWxkKGFkZENvbW1lbnRIZWFkZXIpO1xuXG4gIGNvbnN0IGFkZENvbW1lbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgYWRkQ29tbWVudE5hbWUuY2xhc3NMaXN0LmFkZCgnYWRkLWNvbW1lbnQtbmFtZScpO1xuICBhZGRDb21tZW50TmFtZS5wbGFjZWhvbGRlciA9ICdZb3VyIG5hbWUnO1xuICBhZGRDb21tZW50V3JhcHBlci5hcHBlbmRDaGlsZChhZGRDb21tZW50TmFtZSk7XG5cbiAgY29uc3QgYWRkQ29tbWVudFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBhZGRDb21tZW50VGV4dC5jbGFzc0xpc3QuYWRkKCdhZGQtY29tbWVudC10ZXh0Jyk7XG4gIGFkZENvbW1lbnRUZXh0LnBsYWNlaG9sZGVyID0gJ1lvdXIgY29tbWVudCc7XG4gIGFkZENvbW1lbnRXcmFwcGVyLmFwcGVuZENoaWxkKGFkZENvbW1lbnRUZXh0KTtcblxuICBjb25zdCBhZGRDb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZENvbW1lbnRCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLWNvbW1lbnQtYnV0dG9uJyk7XG4gIGFkZENvbW1lbnRCdG4uaW5uZXJUZXh0ID0gJ0NvbW1lbnQnO1xuICBhZGRDb21tZW50V3JhcHBlci5hcHBlbmRDaGlsZChhZGRDb21tZW50QnRuKTtcbn07IiwiY29uc3QgaXRlbUNvdW50ZXIgPSAoYWxsSXRlbXMsIGl0ZW1zQ291bnRlcikgPT4ge1xuICBpdGVtc0NvdW50ZXIuaW5uZXJIVE1MID0gYFBva2Vtb25zKCR7YWxsSXRlbXMgLyAzfSlgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXRlbUNvdW50ZXI7IiwiY29uc3QgcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb2tlLWVsZW0nKTtcblxuY29uc3QgbGlrZUFQSSA9IChpdGVtKSA9PiB7XG4gIGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8wUjNyeTNDeHNnMFdPdzgzMXBTSC9saWtlcycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaXRlbSksXG4gIH0pO1xuICAvLyAudGhlbihqc29uPT5qc29uLmpzb24oKSlcbn07XG5cbmNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBsaWtlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzBSM3J5M0N4c2cwV093ODMxcFNIL2xpa2VzJyk7XG4gIHJldHVybiBsaWtlLmpzb24oKTtcbn07XG5cbnAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LnZhbHVlID09PSAnaGVhcnQtaW1nIGxpa2UtYXBpLWNhbGwtYnRuJykge1xuICAgIGNvbnN0IGxpa2VDb250YWluZXIgPSBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzJdO1xuICAgIGNvbnN0IHZhbHVlID0gK2xpa2VDb250YWluZXIuaW5uZXJIVE1MICsgMTtcbiAgICBsaWtlQ29udGFpbmVyLmlubmVySFRNTCA9IHZhbHVlO1xuICAgIGNvbnN0IHsgaWQgfSA9IGUudGFyZ2V0O1xuICAgIGxpa2VBUEkoeyBpdGVtX2lkOiBpZCB9KTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldExpa2VzOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdldExpa2VzIGZyb20gJy4vSlMvbGlrZUFQSS5qcyc7XG5pbXBvcnQgaXRlbUNvdW50ZXIgZnJvbSAnLi9KUy9pdGVtQ291bnRlci5qcyc7XG5pbXBvcnQgY2xvc2UgZnJvbSAnLi9pbWFnZXMvY2xvc2UucG5nJztcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL0pTL2NvbW1lbnRBcGknO1xuaW1wb3J0IGNvbW1lbnRSZWxvYWQgZnJvbSAnLi9KUy9jb21tZW50UmVsb2FkJztcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuY29uc3QgcG9rZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9rZS1lbGVtJyk7XG5jb25zdCBwb2tlQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2tlLWNvdW50ZXInKTtcblxuY29uc3QgcG9rZU51bSA9IDM2O1xuXG5jb25zdCBmZXRjaFBva2UgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxpa2VzID0gYXdhaXQgZ2V0TGlrZXMoKTtcblxuICBjb25zdCBwb2tlbW9ucyA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBwb2tlTnVtOyBpICs9IDMpIHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7aX1gO1xuICAgIHBva2Vtb25zLnB1c2goZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpKTtcbiAgfVxuXG4gIGNvbnN0IGRpc3BsYXlDb21tZW50cyA9IChwb2tlbW9uKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2tlLWVsZW0nKTtcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5pbm5lckhUTUwgPT09ICdDb21tZW50Jykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBwb2tlbW9uLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3QgcG9rZVNvdXJjZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLm5leHRTaWJsaW5nLnNyYztcbiAgICAgICAgICBpZiAocG9rZVNvdXJjZSA9PT0gcG9rZW1vbltpXT8uaW1hZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb21tZW50V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjb21tZW50LXdyYXBwZXInKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21tZW50V3JhcHBlcik7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb21tZW50U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjb21tZW50LXNlY3Rpb24nKTtcbiAgICAgICAgICAgIGNvbW1lbnRXcmFwcGVyLmFwcGVuZENoaWxkKGNvbW1lbnRTZWN0aW9uKTtcblxuICAgICAgICAgICAgY29uc3QgY2xvc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNsb3NlRGl2LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWRpdicpO1xuICAgICAgICAgICAgY29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQoY2xvc2VEaXYpO1xuXG4gICAgICAgICAgICBjb25zdCBjbG9zZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zcmMgPSBjbG9zZTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICAgICAgICAgICAgY2xvc2VEaXYuYXBwZW5kQ2hpbGQoY2xvc2VJY29uKTtcblxuICAgICAgICAgICAgY29uc3QgcG9rZW1vbkltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgcG9rZW1vbkltZy5zcmMgPSBwb2tlbW9uW2ldLmltYWdlO1xuICAgICAgICAgICAgcG9rZW1vbkltZy5jbGFzc0xpc3QuYWRkKCdpbWctY2FyZCcpO1xuICAgICAgICAgICAgY29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQocG9rZW1vbkltZyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBva2Vtb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgIHBva2Vtb25OYW1lLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtcG9rZW5hbWUnKTtcbiAgICAgICAgICAgIHBva2Vtb25OYW1lLmlubmVyVGV4dCA9IHBva2Vtb25baV0ubmFtZTtcbiAgICAgICAgICAgIGNvbW1lbnRTZWN0aW9uLmFwcGVuZENoaWxkKHBva2Vtb25OYW1lKTtcblxuICAgICAgICAgICAgY29uc3QgcG9rZW1vblR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwb2tlbW9uVHlwZS5jbGFzc0xpc3QuYWRkKCdjb21tZW50LXBva2V0eXBlJyk7XG4gICAgICAgICAgICBwb2tlbW9uVHlwZS5pbm5lclRleHQgPSBgVHlwZTogJHtwb2tlbW9uW2ldLnR5cGV9YDtcbiAgICAgICAgICAgIGNvbW1lbnRTZWN0aW9uLmFwcGVuZENoaWxkKHBva2Vtb25UeXBlKTtcblxuICAgICAgICAgICAgY29uc3QgcG9rZW1vbkdhbWVJRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHBva2Vtb25HYW1lSUQuY2xhc3NMaXN0LmFkZCgnY29tbWVudC1wb2tlaWQnKTtcbiAgICAgICAgICAgIHBva2Vtb25HYW1lSUQuaW5uZXJUZXh0ID0gYEluLWdhbWUgUG9rZW1vbiBJRDogJHtwb2tlbW9uW2ldLmlkfWA7XG4gICAgICAgICAgICBjb21tZW50U2VjdGlvbi5hcHBlbmRDaGlsZChwb2tlbW9uR2FtZUlEKTtcblxuICAgICAgICAgICAgY29uc3QgYWxsQ29tbWVudHNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBhbGxDb21tZW50c1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYWxsLWNvbW1lbnRzLXdyYXBwZXInKTtcbiAgICAgICAgICAgIGNvbW1lbnRTZWN0aW9uLmFwcGVuZENoaWxkKGFsbENvbW1lbnRzV3JhcHBlcik7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgIGNvbW1lbnRzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRzLWhlYWRlcicpO1xuICAgICAgICAgICAgY29tbWVudHNIZWFkZXIuaW5uZXJUZXh0ID0gJ0NvbW1lbnRzJztcbiAgICAgICAgICAgIGFsbENvbW1lbnRzV3JhcHBlci5hcHBlbmRDaGlsZChjb21tZW50c0hlYWRlcik7XG5cbiAgICAgICAgICAgIGxldCBhbGxDb21tZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICBhbGxDb21tZW50cy5jbGFzc0xpc3QuYWRkKCdhbGwtY29tbWVudHMnKTtcbiAgICAgICAgICAgIGFsbENvbW1lbnRzV3JhcHBlci5hcHBlbmRDaGlsZChhbGxDb21tZW50cyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFkZENvbW1lbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBhZGRDb21tZW50V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhZGQtY29tbWVudC13cmFwcGVyJyk7XG4gICAgICAgICAgICBjb21tZW50U2VjdGlvbi5hcHBlbmRDaGlsZChhZGRDb21tZW50V3JhcHBlcik7XG5cbiAgICAgICAgICAgIGNvbnN0IGFkZENvbW1lbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgYWRkQ29tbWVudEhlYWRlci5jbGFzc0xpc3QuYWRkKCdhZGQtY29tbWVudC1oZWFkZXInKTtcbiAgICAgICAgICAgIGFkZENvbW1lbnRIZWFkZXIuaW5uZXJUZXh0ID0gJ0FkZCBhIGNvbW1lbnQnO1xuICAgICAgICAgICAgYWRkQ29tbWVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkQ29tbWVudEhlYWRlcik7XG5cbiAgICAgICAgICAgIGNvbnN0IGFkZENvbW1lbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGFkZENvbW1lbnROYW1lLmNsYXNzTGlzdC5hZGQoJ2FkZC1jb21tZW50LW5hbWUnKTtcbiAgICAgICAgICAgIGFkZENvbW1lbnROYW1lLnBsYWNlaG9sZGVyID0gJ1lvdXIgbmFtZSc7XG4gICAgICAgICAgICBhZGRDb21tZW50V3JhcHBlci5hcHBlbmRDaGlsZChhZGRDb21tZW50TmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFkZENvbW1lbnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgICAgIGFkZENvbW1lbnRUZXh0LmNsYXNzTGlzdC5hZGQoJ2FkZC1jb21tZW50LXRleHQnKTtcbiAgICAgICAgICAgIGFkZENvbW1lbnRUZXh0LnBsYWNlaG9sZGVyID0gJ1lvdXIgY29tbWVudCc7XG4gICAgICAgICAgICBhZGRDb21tZW50V3JhcHBlci5hcHBlbmRDaGlsZChhZGRDb21tZW50VGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFkZENvbW1lbnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGFkZENvbW1lbnRCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLWNvbW1lbnQtYnV0dG9uJyk7XG4gICAgICAgICAgICBhZGRDb21tZW50QnRuLmlubmVyVGV4dCA9ICdDb21tZW50JztcbiAgICAgICAgICAgIGFkZENvbW1lbnRXcmFwcGVyLmFwcGVuZENoaWxkKGFkZENvbW1lbnRCdG4pO1xuXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiByZXF1ZXN0Q29tbWVudHMoKSB7XG4gICAgICAgICAgICAgIGxldCBjb21tZW50c0luZm8gPSBhd2FpdCBDb21tZW50cy5nZXRDb21tZW50cyhwb2tlbW9uW2ldLmlkKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tbWVudHNJbmZvKTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkrMSA8PSBjb21tZW50c0luZm8ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICBjb21tZW50LmlubmVyVGV4dCA9IGAke2NvbW1lbnRzSW5mb1tpXT8uY3JlYXRpb25fZGF0ZX0gJHtjb21tZW50c0luZm9baV0/LnVzZXJuYW1lfTogJHtjb21tZW50c0luZm9baV0/LmNvbW1lbnR9YDtcbiAgICAgICAgICAgICAgICBhbGxDb21tZW50cy5hcHBlbmRDaGlsZChjb21tZW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVxdWVzdENvbW1lbnRzKCk7XG5cbiAgICAgICAgICAgIGFkZENvbW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoeSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoYWRkQ29tbWVudE5hbWUudmFsdWUgIT09ICcnICYmIGFkZENvbW1lbnRUZXh0LnZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJOYW1lID0gYWRkQ29tbWVudE5hbWUudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckNvbW1lbnQgPSBhZGRDb21tZW50VGV4dC52YWx1ZTtcbiAgICAgICAgICAgICAgICBDb21tZW50cy5wb3N0Q29tbWVudHMocG9rZW1vbltpXS5pZCwgdXNlck5hbWUsIHVzZXJDb21tZW50KTtcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50TmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRUZXh0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgY29tbWVudFdyYXBwZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgY29tbWVudFJlbG9hZCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2xvc2VEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoeikgPT4ge1xuICAgICAgICAgICAgICBpZiAoei50YXJnZXQuc3JjID09PSBjbG9zZSkge1xuICAgICAgICAgICAgICAgIGNvbW1lbnRXcmFwcGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzaG93UG9rZSA9IChwb2tlbW9uKSA9PiB7XG4gICAgY29uc3QgcG9rZUlubmVySHRtbCA9IHBva2Vtb25cbiAgICAgIC5tYXAoXG4gICAgICAgIChwb2spID0+IHtcbiAgICAgICAgICBsZXQgdGFyZ2V0TGlrZXMgPSAwO1xuICAgICAgICAgIGxpa2VzLmZvckVhY2goKGwpID0+IHtcbiAgICAgICAgICAgIGlmIChsLml0ZW1faWQudG9TdHJpbmcoKSA9PT0gcG9rLmlkLnRvU3RyaW5nKCkgJiYgdGFyZ2V0TGlrZXMgPT09IDApIHtcbiAgICAgICAgICAgICAgdGFyZ2V0TGlrZXMgPSBsLmxpa2VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJwb2tlLWNhcmRzXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWNhcmRcIiBzcmM9XCIke3Bvay5pbWFnZX1cIi8+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGUtY3JcIj4gJHtwb2submFtZX08L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidHlwZVwiPlR5cGU6ICR7cG9rLnR5cGV9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNsaWNrXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG5cIj5Db21tZW50PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9pY29uczgtaGVhcnQtNDAoMSkucG5nXCIgYWx0PVwiXCIgaWQ9JHtwb2suaWR9IGNsYXNzPVwiaGVhcnQtaW1nIGxpa2UtYXBpLWNhbGwtYnRuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaWtlcy1jb250YWluZXJcIj4ke3RhcmdldExpa2VzIHx8IDB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgYDtcbiAgICAgICAgfSxcbiAgICAgIClcbiAgICAgIC5qb2luKCcnKTtcbiAgICBwb2tlRWxlbS5pbm5lckhUTUwgPSBwb2tlSW5uZXJIdG1sO1xuICB9O1xuXG4gIFByb21pc2UuYWxsKHBva2Vtb25zKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgY29uc3QgcG9rZW1vbiA9IHJlc3VsdHMubWFwKChyZXMpID0+ICh7XG4gICAgICBuYW1lOiByZXMubmFtZSxcbiAgICAgIGltYWdlOiByZXMuc3ByaXRlcy5mcm9udF9kZWZhdWx0LFxuICAgICAgdHlwZTogcmVzLnR5cGVzLm1hcCgodHlwZSkgPT4gdHlwZS50eXBlLm5hbWUpLmpvaW4oJywgJyksXG4gICAgICBpZDogcmVzLmlkLFxuICAgIH0pKTtcbiAgICBzaG93UG9rZShwb2tlbW9uKTtcbiAgICBkaXNwbGF5Q29tbWVudHMocG9rZW1vbik7XG4gIH0pO1xufTtcblxud2luZG93Lm9ubG9hZCA9IGFzeW5jICgpID0+IHtcbiAgZmV0Y2hQb2tlKCk7XG4gIGl0ZW1Db3VudGVyKHBva2VOdW0sIHBva2VDb3VudGVyKTtcbn07XG5cbi8qXG5hZGRDb21tZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHkpID0+IHtcbiAgaWYgKGFkZENvbW1lbnROYW1lLnZhbHVlICE9PSAnJyAmJiBhZGRDb21tZW50VGV4dC52YWx1ZSAhPT0gJycpIHtcbiAgICBjb25zdCB1c2VyTmFtZSA9IGFkZENvbW1lbnROYW1lLnZhbHVlO1xuICAgIGNvbnN0IHVzZXJDb21tZW50ID0gYWRkQ29tbWVudFRleHQudmFsdWU7XG4gICAgQ29tbWVudHMucG9zdENvbW1lbnRzKHBva2Vtb25baV0uaWQsIHVzZXJOYW1lLCB1c2VyQ29tbWVudCk7XG4gICAgYWRkQ29tbWVudE5hbWUudmFsdWUgPSAnJztcbiAgICBhZGRDb21tZW50VGV4dC52YWx1ZSA9ICcnO1xuICAgIGFsbENvbW1lbnRzLnJlbW92ZSgpO1xuICAgIGFsbENvbW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBhbGxDb21tZW50cy5jbGFzc0xpc3QuYWRkKCdhbGwtY29tbWVudHMnKTtcbiAgICBhbGxDb21tZW50c1dyYXBwZXIuYXBwZW5kQ2hpbGQoYWxsQ29tbWVudHMpO1xuICAgIGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RDb21tZW50czIoKSB7XG4gICAgICBsZXQgY29tbWVudHNJbmZvID0gYXdhaXQgQ29tbWVudHMuZ2V0Q29tbWVudHMocG9rZW1vbltpXS5pZCk7XG4gICAgICBjb25zb2xlLmxvZyhjb21tZW50c0luZm8pO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkrMSA8PSBjb21tZW50c0luZm8ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGNvbW1lbnRzSW5mb1tpXS51c2VyICE9PSB1bmRlZmluZWQpe1xuICAgICAgICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29tbWVudC5pbm5lclRleHQgPSBgJHtjb21tZW50c0luZm9baV0/LmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudHNJbmZvW2ldPy51c2VybmFtZX06ICR7Y29tbWVudHNJbmZvW2ldPy5jb21tZW50fWA7XG4gICAgICAgIGFsbENvbW1lbnRzLmFwcGVuZENoaWxkKGNvbW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlcXVlc3RDb21tZW50czIoKTtcbiAgfVxufSk7Ki8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=