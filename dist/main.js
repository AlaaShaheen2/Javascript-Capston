"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  background: #f7e3c1;\n  background: linear-gradient(to right, #f6a9a9, #ddcaaa);\n  background: linear-gradient(to right, #dd9797, #e2dacc);\n  margin: 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.title {\n  padding-left: 60px;\n  margin-left: 13rem;\n  display: flex;\n  justify-content: space-between;\n}\n\n.container {\n  padding: 40px;\n  margin: 0 auto;\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #ee6983;\n}\n\nh1 {\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 54px;\n}\n\n.logo {\n  max-width: 17%;\n  height: auto;\n  padding: 5px;\n}\n\n.links {\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\n\n.links ul {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  text-align: center;\n  margin-right: 20rem;\n  font-size: 1.5rem;\n}\n\n.links li {\n  list-style: none;\n}\n\n.links li a {\n  text-decoration: none;\n  color: black;\n  padding: 1rem;\n  display: block;\n}\n\n.poke-elem {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  grid-gap: 20px;\n  padding-inline-start: 0;\n}\n\n.poke-cards {\n  border-radius: 50px;\n  list-style: none;\n  padding: 30px;\n  background-color: #ee6983;\n  color: #222;\n  text-align: center;\n}\n\n.title-cr {\n  text-transform: capitalize;\n  margin-bottom: 0;\n  font-size: 32px;\n  font-weight: normal;\n}\n\n.type {\n  margin-top: 5px;\n  color: rgb(20 20 20);\n  font-weight: lighter;\n}\n\n.img-card {\n  height: 180px;\n  background-color: rgb(255 255 255 / 60%);\n  border-radius: 50%;\n  width: 180px;\n  text-align: center;\n}\n\n.btn {\n  background-color: rgb(255 255 255 / 60%);\n  border-radius: 10px;\n  color: black;\n  padding: 7px;\n}\n\n.heart-img {\n  width: 15%;\n  height: auto;\n  padding: 5px;\n}\n\n.click {\n  display: flex;\n  justify-content: center;\n}\n\n.like-api-call-btn {\n  background: none;\n  border: none;\n  outline: none;\n}\n\n/* Comment section */\n\n.comment-wrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 0;\n  backdrop-filter: blur(5px);\n}\n\n.comment-section {\n  background-color: #f6a9a9;\n  border-radius: 50px;\n  width: 90%;\n  height: 95%;\n  z-index: 101;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: auto;\n}\n\n.close-div {\n  width: 95%;\n  display: flex;\n  justify-content: end;\n}\n\n.close {\n  height: 60px;\n  width: 60px;\n  position: fixed;\n}\n\n.comment-pokename {\n  text-transform: capitalize;\n  margin-bottom: 0;\n  font-size: 40px;\n  font-weight: normal;\n}\n\n.comment-poketype {\n  font-weight: normal;\n  font-size: 24px;\n}\n\n.comment-pokeid {\n  font-weight: normal;\n  font-size: 18px;\n  margin-top: 0;\n}\n\n.all-comments-wrapper {\n  font-weight: normal;\n  width: 50vw;\n}\n\n.all-comments li {\n  margin-bottom: 3px;\n  list-style-type: none;\n  text-align: center;\n}\n\n.comments-header {\n  font-weight: normal;\n  font-size: 40px;\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\n.add-comment-wrapper {\n  font-weight: normal;\n  display: flex;\n  flex-direction: column;\n  width: 40vw;\n}\n\n.add-comment-header {\n  font-weight: normal;\n  align-self: center;\n  font-size: 30px;\n}\n\n.add-comment-name {\n  font-weight: normal;\n  padding: 3px;\n  margin-bottom: 10px;\n  width: 15vw;\n  font-size: 16px;\n}\n\n.add-comment-text {\n  font-weight: normal;\n  padding: 3px;\n  margin-bottom: 10px;\n  width: 25vw;\n  height: 100px;\n  font-size: 16px;\n}\n\n.add-comment-button {\n  font-weight: normal;\n  width: 15vw;\n  padding: 5px;\n  font-size: 18px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,uDAAuD;EACvD,uDAAuD;EACvD,SAAS;AACX;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,SAAS;EACT,UAAU;EACV,aAAa;AACf;;AAEA;EACE,SAAS;EACT,UAAU;EACV,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;EACb,yBAAyB;EACzB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,gBAAgB;EAChB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,wCAAwC;EACxC,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,wCAAwC;EACxC,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;AACf;;AAEA,oBAAoB;;AAEpB;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,MAAM;EACN,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,OAAO;EACP,0BAA0B;AAC5B;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,0BAA0B;EAC1B,gBAAgB;EAChB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,eAAe;AACjB","sourcesContent":["@import \"https://fonts.googleapis.com/css?family=Muli&display=swap\";\n@import \"https://fonts.googleapis.com/css?family=Lato:300,400&display=swap\";\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  background: #f7e3c1;\n  background: linear-gradient(to right, #f6a9a9, #ddcaaa);\n  background: linear-gradient(to right, #dd9797, #e2dacc);\n  margin: 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.title {\n  padding-left: 60px;\n  margin-left: 13rem;\n  display: flex;\n  justify-content: space-between;\n}\n\n.container {\n  padding: 40px;\n  margin: 0 auto;\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #ee6983;\n}\n\nh1 {\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 54px;\n}\n\n.logo {\n  max-width: 17%;\n  height: auto;\n  padding: 5px;\n}\n\n.links {\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\n\n.links ul {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  text-align: center;\n  margin-right: 20rem;\n  font-size: 1.5rem;\n}\n\n.links li {\n  list-style: none;\n}\n\n.links li a {\n  text-decoration: none;\n  color: black;\n  padding: 1rem;\n  display: block;\n}\n\n.poke-elem {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  grid-gap: 20px;\n  padding-inline-start: 0;\n}\n\n.poke-cards {\n  border-radius: 50px;\n  list-style: none;\n  padding: 30px;\n  background-color: #ee6983;\n  color: #222;\n  text-align: center;\n}\n\n.title-cr {\n  text-transform: capitalize;\n  margin-bottom: 0;\n  font-size: 32px;\n  font-weight: normal;\n}\n\n.type {\n  margin-top: 5px;\n  color: rgb(20 20 20);\n  font-weight: lighter;\n}\n\n.img-card {\n  height: 180px;\n  background-color: rgb(255 255 255 / 60%);\n  border-radius: 50%;\n  width: 180px;\n  text-align: center;\n}\n\n.btn {\n  background-color: rgb(255 255 255 / 60%);\n  border-radius: 10px;\n  color: black;\n  padding: 7px;\n}\n\n.heart-img {\n  width: 15%;\n  height: auto;\n  padding: 5px;\n}\n\n.click {\n  display: flex;\n  justify-content: center;\n}\n\n.like-api-call-btn {\n  background: none;\n  border: none;\n  outline: none;\n}\n\n/* Comment section */\n\n.comment-wrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 0;\n  backdrop-filter: blur(5px);\n}\n\n.comment-section {\n  background-color: #f6a9a9;\n  border-radius: 50px;\n  width: 90%;\n  height: 95%;\n  z-index: 101;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: auto;\n}\n\n.close-div {\n  width: 95%;\n  display: flex;\n  justify-content: end;\n}\n\n.close {\n  height: 60px;\n  width: 60px;\n  position: fixed;\n}\n\n.comment-pokename {\n  text-transform: capitalize;\n  margin-bottom: 0;\n  font-size: 40px;\n  font-weight: normal;\n}\n\n.comment-poketype {\n  font-weight: normal;\n  font-size: 24px;\n}\n\n.comment-pokeid {\n  font-weight: normal;\n  font-size: 18px;\n  margin-top: 0;\n}\n\n.all-comments-wrapper {\n  font-weight: normal;\n  width: 50vw;\n}\n\n.all-comments li {\n  margin-bottom: 3px;\n  list-style-type: none;\n  text-align: center;\n}\n\n.comments-header {\n  font-weight: normal;\n  font-size: 40px;\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\n.add-comment-wrapper {\n  font-weight: normal;\n  display: flex;\n  flex-direction: column;\n  width: 40vw;\n}\n\n.add-comment-header {\n  font-weight: normal;\n  align-self: center;\n  font-size: 30px;\n}\n\n.add-comment-name {\n  font-weight: normal;\n  padding: 3px;\n  margin-bottom: 10px;\n  width: 15vw;\n  font-size: 16px;\n}\n\n.add-comment-text {\n  font-weight: normal;\n  padding: 3px;\n  margin-bottom: 10px;\n  width: 25vw;\n  height: 100px;\n  font-size: 16px;\n}\n\n.add-comment-button {\n  font-weight: normal;\n  width: 15vw;\n  padding: 5px;\n  font-size: 18px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/JS/itemCounter.js":
/*!*******************************!*\
  !*** ./src/JS/itemCounter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _JS_likeAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JS/likeAPI.js */ "./src/JS/likeAPI.js");
/* harmony import */ var _JS_itemCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JS/itemCounter.js */ "./src/JS/itemCounter.js");
/* harmony import */ var _images_close_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/close.png */ "./src/images/close.png");
/* harmony import */ var _JS_commentApi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./JS/commentApi.js */ "./src/JS/commentApi.js");






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
            const showComments = () => {
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

              const allComments = document.createElement('ul');
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

              closeDiv.addEventListener('click', (z) => {
                if (z.target.src === _images_close_png__WEBPACK_IMPORTED_MODULE_3__) {
                  commentWrapper.remove();
                }
              });
              async function requestComments() {
                const commentsInfo = await _JS_commentApi_js__WEBPACK_IMPORTED_MODULE_4__["default"].getComments(pokemon[i].id);
                let commentCounter = 0;
                for (let i = 0; i + 1 <= commentsInfo.length; i += 1) {
                  const comment = document.createElement('li');
                  comment.innerText = `${commentsInfo[i]?.creation_date} ${commentsInfo[i]?.username}: ${commentsInfo[i]?.comment}`;
                  allComments.appendChild(comment);
                  commentCounter += 1;
                }
                commentsHeader.innerText = `Comments (${commentCounter})`;
              }

              addCommentBtn.addEventListener('click', () => {
                if (addCommentName.value !== '' && addCommentText.value !== '') {
                  const userName = addCommentName.value;
                  const userComment = addCommentText.value;
                  _JS_commentApi_js__WEBPACK_IMPORTED_MODULE_4__["default"].postComments(pokemon[i].id, userName, userComment);
                  addCommentName.value = '';
                  addCommentText.value = '';

                  const reload = async () => {
                    const waitComments = setTimeout(showComments, 500);
                    requestComments();
                    waitComments();
                    commentWrapper.remove();
                    showComments();
                  };
                  reload();
                }
              });

              requestComments();
            };

            showComments();
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


/***/ }),

/***/ "./src/images/close.png":
/*!******************************!*\
  !*** ./src/images/close.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10053b4b6b38945b74d3.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsOENBQUs7QUFDMUM7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLDJDQUEyQyxxRUFBb0I7QUFDL0Q7QUFDQSxnQ0FBZ0MsOEJBQThCO0FBQzlEO0FBQ0EseUNBQXlDLGdDQUFnQyxFQUFFLDBCQUEwQixJQUFJLHlCQUF5QjtBQUNsSTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsZUFBZTtBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzRUFBcUI7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxVQUFVO0FBQ3ZELHdDQUF3QyxTQUFTO0FBQ2pELHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7QUFDQSx1RUFBdUUsUUFBUTtBQUMvRSxnREFBZ0QsaUJBQWlCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsRUFBRSw4REFBVztBQUNiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0pTL2NvbW1lbnRBcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9KUy9pdGVtQ291bnRlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0pTL2xpa2VBUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TXVsaSZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwLDQwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogI2Y3ZTNjMTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y2YTlhOSwgI2RkY2FhYSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkZDk3OTcsICNlMmRhY2MpO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIHBhZGRpbmctbGVmdDogNjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZzogNDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlNjk4MztcXG59XFxuXFxuaDEge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNTRweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgbWF4LXdpZHRoOiAxNyU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5saW5rcyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmxpbmtzIHVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ubGlua3MgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmxpbmtzIGxpIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucG9rZS1lbGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxufVxcblxcbi5wb2tlLWNhcmRzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTY5ODM7XFxuICBjb2xvcjogIzIyMjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlLWNyIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi50eXBlIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGNvbG9yOiByZ2IoMjAgMjAgMjApO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxufVxcblxcbi5pbWctY2FyZCB7XFxuICBoZWlnaHQ6IDE4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAxODBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDdweDtcXG59XFxuXFxuLmhlYXJ0LWltZyB7XFxuICB3aWR0aDogMTUlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uY2xpY2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubGlrZS1hcGktY2FsbC1idG4ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIENvbW1lbnQgc2VjdGlvbiAqL1xcblxcbi5jb21tZW50LXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4uY29tbWVudC1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmE5YTk7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTUlO1xcbiAgei1pbmRleDogMTAxO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5jbG9zZS1kaXYge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4uY29tbWVudC1wb2tlbmFtZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uY29tbWVudC1wb2tldHlwZSB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uY29tbWVudC1wb2tlaWQge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5hbGwtY29tbWVudHMtd3JhcHBlciB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgd2lkdGg6IDUwdnc7XFxufVxcblxcbi5hbGwtY29tbWVudHMgbGkge1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29tbWVudHMtaGVhZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmFkZC1jb21tZW50LXdyYXBwZXIge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDQwdnc7XFxufVxcblxcbi5hZGQtY29tbWVudC1oZWFkZXIge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmFkZC1jb21tZW50LW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogMTV2dztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmFkZC1jb21tZW50LXRleHQge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogMjV2dztcXG4gIGhlaWdodDogMTAwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5hZGQtY29tbWVudC1idXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHdpZHRoOiAxNXZ3O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVEQUF1RDtFQUN2RCx1REFBdUQ7RUFDdkQsU0FBUztBQUNYOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLE1BQU07RUFDTixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixPQUFPO0VBQ1AsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TXVsaSZkaXNwbGF5PXN3YXBcXFwiO1xcbkBpbXBvcnQgXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAmZGlzcGxheT1zd2FwXFxcIjtcXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogI2Y3ZTNjMTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y2YTlhOSwgI2RkY2FhYSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkZDk3OTcsICNlMmRhY2MpO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIHBhZGRpbmctbGVmdDogNjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZzogNDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlNjk4MztcXG59XFxuXFxuaDEge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNTRweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgbWF4LXdpZHRoOiAxNyU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5saW5rcyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmxpbmtzIHVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ubGlua3MgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmxpbmtzIGxpIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucG9rZS1lbGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxufVxcblxcbi5wb2tlLWNhcmRzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTY5ODM7XFxuICBjb2xvcjogIzIyMjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlLWNyIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi50eXBlIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGNvbG9yOiByZ2IoMjAgMjAgMjApO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxufVxcblxcbi5pbWctY2FyZCB7XFxuICBoZWlnaHQ6IDE4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAxODBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyA2MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDdweDtcXG59XFxuXFxuLmhlYXJ0LWltZyB7XFxuICB3aWR0aDogMTUlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uY2xpY2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubGlrZS1hcGktY2FsbC1idG4ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIENvbW1lbnQgc2VjdGlvbiAqL1xcblxcbi5jb21tZW50LXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4uY29tbWVudC1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmE5YTk7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTUlO1xcbiAgei1pbmRleDogMTAxO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5jbG9zZS1kaXYge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4uY29tbWVudC1wb2tlbmFtZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uY29tbWVudC1wb2tldHlwZSB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uY29tbWVudC1wb2tlaWQge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5hbGwtY29tbWVudHMtd3JhcHBlciB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgd2lkdGg6IDUwdnc7XFxufVxcblxcbi5hbGwtY29tbWVudHMgbGkge1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29tbWVudHMtaGVhZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmFkZC1jb21tZW50LXdyYXBwZXIge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDQwdnc7XFxufVxcblxcbi5hZGQtY29tbWVudC1oZWFkZXIge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmFkZC1jb21tZW50LW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogMTV2dztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmFkZC1jb21tZW50LXRleHQge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogMjV2dztcXG4gIGhlaWdodDogMTAwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5hZGQtY29tbWVudC1idXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHdpZHRoOiAxNXZ3O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIENvbW1lbnRzIHtcbiAgc3RhdGljIHBvc3RDb21tZW50cyA9IGFzeW5jIChpZCwgbmFtZSwgY29tbWVudCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzBSM3J5M0N4c2cwV093ODMxcFNIL2NvbW1lbnRzJyxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaXRlbV9pZDogaWQsXG4gICAgICAgICAgdXNlcm5hbWU6IG5hbWUsXG4gICAgICAgICAgY29tbWVudCxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgICk7XG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IHJlcy50ZXh0KCk7XG4gICAgcmV0dXJuIHBvc3Q7XG4gIH07XG5cbiAgc3RhdGljIGdldENvbW1lbnRzID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvMFIzcnkzQ3hzZzBXT3c4MzFwU0gvY29tbWVudHM/aXRlbV9pZD0ke2lkfWAsXG4gICAgKTtcbiAgICBjb25zdCBjb21tZW50ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4gY29tbWVudDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHM7IiwiY29uc3QgaXRlbUNvdW50ZXIgPSAoYWxsSXRlbXMsIGl0ZW1zQ291bnRlcikgPT4ge1xuICBpdGVtc0NvdW50ZXIuaW5uZXJIVE1MID0gYFBva2Vtb25zKCR7YWxsSXRlbXMgLyAzfSlgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXRlbUNvdW50ZXI7IiwiY29uc3QgcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb2tlLWVsZW0nKTtcblxuY29uc3QgbGlrZUFQSSA9IChpdGVtKSA9PiB7XG4gIGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8wUjNyeTNDeHNnMFdPdzgzMXBTSC9saWtlcycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaXRlbSksXG4gIH0pO1xuICAvLyAudGhlbihqc29uPT5qc29uLmpzb24oKSlcbn07XG5cbmNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBsaWtlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzBSM3J5M0N4c2cwV093ODMxcFNIL2xpa2VzJyk7XG4gIHJldHVybiBsaWtlLmpzb24oKTtcbn07XG5cbnAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LnZhbHVlID09PSAnaGVhcnQtaW1nIGxpa2UtYXBpLWNhbGwtYnRuJykge1xuICAgIGNvbnN0IGxpa2VDb250YWluZXIgPSBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzJdO1xuICAgIGNvbnN0IHZhbHVlID0gK2xpa2VDb250YWluZXIuaW5uZXJIVE1MICsgMTtcbiAgICBsaWtlQ29udGFpbmVyLmlubmVySFRNTCA9IHZhbHVlO1xuICAgIGNvbnN0IHsgaWQgfSA9IGUudGFyZ2V0O1xuICAgIGxpa2VBUEkoeyBpdGVtX2lkOiBpZCB9KTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldExpa2VzOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdldExpa2VzIGZyb20gJy4vSlMvbGlrZUFQSS5qcyc7XG5pbXBvcnQgaXRlbUNvdW50ZXIgZnJvbSAnLi9KUy9pdGVtQ291bnRlci5qcyc7XG5pbXBvcnQgY2xvc2UgZnJvbSAnLi9pbWFnZXMvY2xvc2UucG5nJztcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL0pTL2NvbW1lbnRBcGkuanMnO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5jb25zdCBwb2tlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2tlLWVsZW0nKTtcbmNvbnN0IHBva2VDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBva2UtY291bnRlcicpO1xuXG5jb25zdCBwb2tlTnVtID0gMzY7XG5cbmNvbnN0IGZldGNoUG9rZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGlrZXMgPSBhd2FpdCBnZXRMaWtlcygpO1xuXG4gIGNvbnN0IHBva2Vtb25zID0gW107XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHBva2VOdW07IGkgKz0gMykge1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtpfWA7XG4gICAgcG9rZW1vbnMucHVzaChmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSkpO1xuICB9XG5cbiAgY29uc3QgZGlzcGxheUNvbW1lbnRzID0gKHBva2Vtb24pID0+IHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBva2UtZWxlbScpO1xuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmlubmVySFRNTCA9PT0gJ0NvbW1lbnQnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHBva2Vtb24ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBwb2tlU291cmNlID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcuc3JjO1xuICAgICAgICAgIGlmIChwb2tlU291cmNlID09PSBwb2tlbW9uW2ldPy5pbWFnZSkge1xuICAgICAgICAgICAgY29uc3Qgc2hvd0NvbW1lbnRzID0gKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjb21tZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICBjb21tZW50V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjb21tZW50LXdyYXBwZXInKTtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1lbnRXcmFwcGVyKTtcblxuICAgICAgICAgICAgICBjb25zdCBjb21tZW50U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICBjb21tZW50U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjb21tZW50LXNlY3Rpb24nKTtcbiAgICAgICAgICAgICAgY29tbWVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29tbWVudFNlY3Rpb24pO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGNsb3NlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIGNsb3NlRGl2LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWRpdicpO1xuICAgICAgICAgICAgICBjb21tZW50U2VjdGlvbi5hcHBlbmRDaGlsZChjbG9zZURpdik7XG5cbiAgICAgICAgICAgICAgY29uc3QgY2xvc2VJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgIGNsb3NlSWNvbi5zcmMgPSBjbG9zZTtcbiAgICAgICAgICAgICAgY2xvc2VJY29uLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XG4gICAgICAgICAgICAgIGNsb3NlRGl2LmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XG5cbiAgICAgICAgICAgICAgY29uc3QgcG9rZW1vbkltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICBwb2tlbW9uSW1nLnNyYyA9IHBva2Vtb25baV0uaW1hZ2U7XG4gICAgICAgICAgICAgIHBva2Vtb25JbWcuY2xhc3NMaXN0LmFkZCgnaW1nLWNhcmQnKTtcbiAgICAgICAgICAgICAgY29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQocG9rZW1vbkltZyk7XG5cbiAgICAgICAgICAgICAgY29uc3QgcG9rZW1vbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgICBwb2tlbW9uTmFtZS5jbGFzc0xpc3QuYWRkKCdjb21tZW50LXBva2VuYW1lJyk7XG4gICAgICAgICAgICAgIHBva2Vtb25OYW1lLmlubmVyVGV4dCA9IHBva2Vtb25baV0ubmFtZTtcbiAgICAgICAgICAgICAgY29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQocG9rZW1vbk5hbWUpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHBva2Vtb25UeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICBwb2tlbW9uVHlwZS5jbGFzc0xpc3QuYWRkKCdjb21tZW50LXBva2V0eXBlJyk7XG4gICAgICAgICAgICAgIHBva2Vtb25UeXBlLmlubmVyVGV4dCA9IGBUeXBlOiAke3Bva2Vtb25baV0udHlwZX1gO1xuICAgICAgICAgICAgICBjb21tZW50U2VjdGlvbi5hcHBlbmRDaGlsZChwb2tlbW9uVHlwZSk7XG5cbiAgICAgICAgICAgICAgY29uc3QgcG9rZW1vbkdhbWVJRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgcG9rZW1vbkdhbWVJRC5jbGFzc0xpc3QuYWRkKCdjb21tZW50LXBva2VpZCcpO1xuICAgICAgICAgICAgICBwb2tlbW9uR2FtZUlELmlubmVyVGV4dCA9IGBJbi1nYW1lIFBva2Vtb24gSUQ6ICR7cG9rZW1vbltpXS5pZH1gO1xuICAgICAgICAgICAgICBjb21tZW50U2VjdGlvbi5hcHBlbmRDaGlsZChwb2tlbW9uR2FtZUlEKTtcblxuICAgICAgICAgICAgICBjb25zdCBhbGxDb21tZW50c1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgYWxsQ29tbWVudHNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FsbC1jb21tZW50cy13cmFwcGVyJyk7XG4gICAgICAgICAgICAgIGNvbW1lbnRTZWN0aW9uLmFwcGVuZENoaWxkKGFsbENvbW1lbnRzV3JhcHBlcik7XG5cbiAgICAgICAgICAgICAgY29uc3QgY29tbWVudHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgICBjb21tZW50c0hlYWRlci5jbGFzc0xpc3QuYWRkKCdjb21tZW50cy1oZWFkZXInKTtcbiAgICAgICAgICAgICAgY29tbWVudHNIZWFkZXIuaW5uZXJUZXh0ID0gJ0NvbW1lbnRzJztcbiAgICAgICAgICAgICAgYWxsQ29tbWVudHNXcmFwcGVyLmFwcGVuZENoaWxkKGNvbW1lbnRzSGVhZGVyKTtcblxuICAgICAgICAgICAgICBjb25zdCBhbGxDb21tZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICAgIGFsbENvbW1lbnRzLmNsYXNzTGlzdC5hZGQoJ2FsbC1jb21tZW50cycpO1xuICAgICAgICAgICAgICBhbGxDb21tZW50c1dyYXBwZXIuYXBwZW5kQ2hpbGQoYWxsQ29tbWVudHMpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGFkZENvbW1lbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIGFkZENvbW1lbnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FkZC1jb21tZW50LXdyYXBwZXInKTtcbiAgICAgICAgICAgICAgY29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkQ29tbWVudFdyYXBwZXIpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGFkZENvbW1lbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgICBhZGRDb21tZW50SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2FkZC1jb21tZW50LWhlYWRlcicpO1xuICAgICAgICAgICAgICBhZGRDb21tZW50SGVhZGVyLmlubmVyVGV4dCA9ICdBZGQgYSBjb21tZW50JztcbiAgICAgICAgICAgICAgYWRkQ29tbWVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkQ29tbWVudEhlYWRlcik7XG5cbiAgICAgICAgICAgICAgY29uc3QgYWRkQ29tbWVudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICBhZGRDb21tZW50TmFtZS5jbGFzc0xpc3QuYWRkKCdhZGQtY29tbWVudC1uYW1lJyk7XG4gICAgICAgICAgICAgIGFkZENvbW1lbnROYW1lLnBsYWNlaG9sZGVyID0gJ1lvdXIgbmFtZSc7XG4gICAgICAgICAgICAgIGFkZENvbW1lbnRXcmFwcGVyLmFwcGVuZENoaWxkKGFkZENvbW1lbnROYW1lKTtcblxuICAgICAgICAgICAgICBjb25zdCBhZGRDb21tZW50VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICAgIGFkZENvbW1lbnRUZXh0LmNsYXNzTGlzdC5hZGQoJ2FkZC1jb21tZW50LXRleHQnKTtcbiAgICAgICAgICAgICAgYWRkQ29tbWVudFRleHQucGxhY2Vob2xkZXIgPSAnWW91ciBjb21tZW50JztcbiAgICAgICAgICAgICAgYWRkQ29tbWVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkQ29tbWVudFRleHQpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGFkZENvbW1lbnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgYWRkQ29tbWVudEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtY29tbWVudC1idXR0b24nKTtcbiAgICAgICAgICAgICAgYWRkQ29tbWVudEJ0bi5pbm5lclRleHQgPSAnQ29tbWVudCc7XG4gICAgICAgICAgICAgIGFkZENvbW1lbnRXcmFwcGVyLmFwcGVuZENoaWxkKGFkZENvbW1lbnRCdG4pO1xuXG4gICAgICAgICAgICAgIGNsb3NlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHopID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoei50YXJnZXQuc3JjID09PSBjbG9zZSkge1xuICAgICAgICAgICAgICAgICAgY29tbWVudFdyYXBwZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdENvbW1lbnRzKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRzSW5mbyA9IGF3YWl0IENvbW1lbnRzLmdldENvbW1lbnRzKHBva2Vtb25baV0uaWQpO1xuICAgICAgICAgICAgICAgIGxldCBjb21tZW50Q291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgKyAxIDw9IGNvbW1lbnRzSW5mby5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgICBjb21tZW50LmlubmVyVGV4dCA9IGAke2NvbW1lbnRzSW5mb1tpXT8uY3JlYXRpb25fZGF0ZX0gJHtjb21tZW50c0luZm9baV0/LnVzZXJuYW1lfTogJHtjb21tZW50c0luZm9baV0/LmNvbW1lbnR9YDtcbiAgICAgICAgICAgICAgICAgIGFsbENvbW1lbnRzLmFwcGVuZENoaWxkKGNvbW1lbnQpO1xuICAgICAgICAgICAgICAgICAgY29tbWVudENvdW50ZXIgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tbWVudHNIZWFkZXIuaW5uZXJUZXh0ID0gYENvbW1lbnRzICgke2NvbW1lbnRDb3VudGVyfSlgO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYWRkQ29tbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYWRkQ29tbWVudE5hbWUudmFsdWUgIT09ICcnICYmIGFkZENvbW1lbnRUZXh0LnZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdXNlck5hbWUgPSBhZGRDb21tZW50TmFtZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJDb21tZW50ID0gYWRkQ29tbWVudFRleHQudmFsdWU7XG4gICAgICAgICAgICAgICAgICBDb21tZW50cy5wb3N0Q29tbWVudHMocG9rZW1vbltpXS5pZCwgdXNlck5hbWUsIHVzZXJDb21tZW50KTtcbiAgICAgICAgICAgICAgICAgIGFkZENvbW1lbnROYW1lLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICBhZGRDb21tZW50VGV4dC52YWx1ZSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCByZWxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdhaXRDb21tZW50cyA9IHNldFRpbWVvdXQoc2hvd0NvbW1lbnRzLCA1MDApO1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0Q29tbWVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgd2FpdENvbW1lbnRzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnRXcmFwcGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBzaG93Q29tbWVudHMoKTtcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICByZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIHJlcXVlc3RDb21tZW50cygpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc2hvd0NvbW1lbnRzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd1Bva2UgPSAocG9rZW1vbikgPT4ge1xuICAgIGNvbnN0IHBva2VJbm5lckh0bWwgPSBwb2tlbW9uXG4gICAgICAubWFwKFxuICAgICAgICAocG9rKSA9PiB7XG4gICAgICAgICAgbGV0IHRhcmdldExpa2VzID0gMDtcbiAgICAgICAgICBsaWtlcy5mb3JFYWNoKChsKSA9PiB7XG4gICAgICAgICAgICBpZiAobC5pdGVtX2lkLnRvU3RyaW5nKCkgPT09IHBvay5pZC50b1N0cmluZygpICYmIHRhcmdldExpa2VzID09PSAwKSB7XG4gICAgICAgICAgICAgIHRhcmdldExpa2VzID0gbC5saWtlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicG9rZS1jYXJkc1wiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1jYXJkXCIgc3JjPVwiJHtwb2suaW1hZ2V9XCIvPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRpdGxlLWNyXCI+ICR7cG9rLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInR5cGVcIj5UeXBlOiAke3Bvay50eXBlfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjbGlja1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuXCI+Q29tbWVudDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvaWNvbnM4LWhlYXJ0LTQwKDEpLnBuZ1wiIGFsdD1cIlwiIGlkPSR7cG9rLmlkfSBjbGFzcz1cImhlYXJ0LWltZyBsaWtlLWFwaS1jYWxsLWJ0blwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlrZXMtY29udGFpbmVyXCI+JHt0YXJnZXRMaWtlcyB8fCAwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIGA7XG4gICAgICAgIH0sXG4gICAgICApXG4gICAgICAuam9pbignJyk7XG4gICAgcG9rZUVsZW0uaW5uZXJIVE1MID0gcG9rZUlubmVySHRtbDtcbiAgfTtcblxuICBQcm9taXNlLmFsbChwb2tlbW9ucykudGhlbigocmVzdWx0cykgPT4ge1xuICAgIGNvbnN0IHBva2Vtb24gPSByZXN1bHRzLm1hcCgocmVzKSA9PiAoe1xuICAgICAgbmFtZTogcmVzLm5hbWUsXG4gICAgICBpbWFnZTogcmVzLnNwcml0ZXMuZnJvbnRfZGVmYXVsdCxcbiAgICAgIHR5cGU6IHJlcy50eXBlcy5tYXAoKHR5cGUpID0+IHR5cGUudHlwZS5uYW1lKS5qb2luKCcsICcpLFxuICAgICAgaWQ6IHJlcy5pZCxcbiAgICB9KSk7XG4gICAgc2hvd1Bva2UocG9rZW1vbik7XG4gICAgZGlzcGxheUNvbW1lbnRzKHBva2Vtb24pO1xuICB9KTtcbn07XG5cbndpbmRvdy5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gIGZldGNoUG9rZSgpO1xuICBpdGVtQ291bnRlcihwb2tlTnVtLCBwb2tlQ291bnRlcik7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9