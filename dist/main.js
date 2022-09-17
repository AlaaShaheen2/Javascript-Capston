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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  background: #f7e3c1;\n  background: linear-gradient(to right, #f6a9a9, #ddcaaa);\n  background: linear-gradient(to right, #dd9797, #e2dacc);\n  margin: 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.title {\n  padding-left: 60px;\n  margin-left: 13rem;\n  display: flex;\n  justify-content: space-between;\n}\n\n.container {\n  padding: 40px;\n  margin: 0 auto;\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #ee6983;\n}\n\nh1 {\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 54px;\n}\n\n.logo {\n  max-width: 17%;\n  height: auto;\n  padding: 5px;\n}\n\n.links {\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\n\n.links ul {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  text-align: center;\n  margin-right: 20rem;\n  font-size: 1.5rem;\n}\n\n.links li {\n  list-style: none;\n}\n\n.links li a {\n  text-decoration: none;\n  color: black;\n  padding: 1rem;\n  display: block;\n}\n\n.poke-elem {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  grid-gap: 20px;\n  padding-inline-start: 0;\n}\n\n.poke-cards {\n  border-radius: 50px;\n  list-style: none;\n  padding: 30px;\n  background-color: #ee6983;\n  color: #222;\n  text-align: center;\n}\n\n.title-cr {\n  text-transform: capitalize;\n  margin-bottom: 0;\n  font-size: 32px;\n  font-weight: normal;\n}\n\n.type {\n  margin-top: 5px;\n  color: rgb(20 20 20);\n  font-weight: lighter;\n}\n\n.img-card {\n  height: 180px;\n  background-color: rgb(255 255 255 / 60%);\n  border-radius: 50%;\n  width: 180px;\n  text-align: center;\n}\n\n.btn {\n  background-color: rgb(255 255 255 / 60%);\n  border-radius: 10px;\n  color: black;\n  padding: 7px;\n}\n\n.heart-img {\n  width: 15%;\n  height: auto;\n  padding: 5px;\n}\n\n.click {\n  display: flex;\n  justify-content: center;\n}\n\n.like-api-call-btn {\n  background: none;\n  border: none;\n  outline: none;\n}\n\n/* Comment section */\n\n.comment-wrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 0;\n  backdrop-filter: blur(5px);\n}\n\n.comment-section {\n  background-color: #f6a9a9;\n  border-radius: 50px;\n  width: 90%;\n  height: 95%;\n  z-index: 101;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: auto;\n}\n\n.close-div {\n  width: 95%;\n  display: flex;\n  justify-content: end;\n}\n\n.close {\n  height: 60px;\n  width: 60px;\n  position: fixed;\n}\n\n.comment-pokename {\n  text-transform: capitalize;\n  margin-bottom: 0;\n  font-size: 40px;\n  font-weight: normal;\n}\n\n.comment-poketype {\n  font-weight: normal;\n  font-size: 24px;\n}\n\n.comment-pokeid {\n  font-weight: normal;\n  font-size: 18px;\n  margin-top: 0;\n}\n\n.all-comments-wrapper {\n  font-weight: normal;\n  width: 50vw;\n}\n\n.all-comments li {\n  margin-bottom: 3px;\n  list-style-type: none;\n  text-align: center;\n}\n\n.comments-header {\n  font-weight: normal;\n  font-size: 40px;\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\n.add-comment-wrapper {\n  font-weight: normal;\n  display: flex;\n  flex-direction: column;\n  width: 40vw;\n}\n\n.add-comment-header {\n  font-weight: normal;\n  align-self: center;\n  font-size: 30px;\n}\n\n.add-comment-name {\n  font-weight: normal;\n  padding: 3px;\n  margin-bottom: 10px;\n  width: 15vw;\n  font-size: 16px;\n}\n\n.add-comment-text {\n  font-weight: normal;\n  padding: 3px;\n  margin-bottom: 10px;\n  width: 25vw;\n  height: 100px;\n  font-size: 16px;\n}\n\n.add-comment-button {\n  font-weight: normal;\n  width: 15vw;\n  padding: 5px;\n  font-size: 18px;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100px;\n  background-color: #ee6983;\n}\n\n.footer p {\n  margin-left: 40px;\n  font-size: 24px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import \"https://fonts.googleapis.com/css?family=Muli&display=swap\";\n@import \"https://fonts.googleapis.com/css?family=Lato:300,400&display=swap\";\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  background: #f7e3c1;\n  background: linear-gradient(to right, #f6a9a9, #ddcaaa);\n  background: linear-gradient(to right, #dd9797, #e2dacc);\n  margin: 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.title {\n  padding-left: 60px;\n  margin-left: 13rem;\n  display: flex;\n  justify-content: space-between;\n}\n\n.container {\n  padding: 40px;\n  margin: 0 auto;\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #ee6983;\n}\n\nh1 {\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 54px;\n}\n\n.logo {\n  max-width: 17%;\n  height: auto;\n  padding: 5px;\n}\n\n.links {\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\n\n.links ul {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  text-align: center;\n  margin-right: 20rem;\n  font-size: 1.5rem;\n}\n\n.links li {\n  list-style: none;\n}\n\n.links li a {\n  text-decoration: none;\n  color: black;\n  padding: 1rem;\n  display: block;\n}\n\n.poke-elem {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  grid-gap: 20px;\n  padding-inline-start: 0;\n}\n\n.poke-cards {\n  border-radius: 50px;\n  list-style: none;\n  padding: 30px;\n  background-color: #ee6983;\n  color: #222;\n  text-align: center;\n}\n\n.title-cr {\n  text-transform: capitalize;\n  margin-bottom: 0;\n  font-size: 32px;\n  font-weight: normal;\n}\n\n.type {\n  margin-top: 5px;\n  color: rgb(20 20 20);\n  font-weight: lighter;\n}\n\n.img-card {\n  height: 180px;\n  background-color: rgb(255 255 255 / 60%);\n  border-radius: 50%;\n  width: 180px;\n  text-align: center;\n}\n\n.btn {\n  background-color: rgb(255 255 255 / 60%);\n  border-radius: 10px;\n  color: black;\n  padding: 7px;\n}\n\n.heart-img {\n  width: 15%;\n  height: auto;\n  padding: 5px;\n}\n\n.click {\n  display: flex;\n  justify-content: center;\n}\n\n.like-api-call-btn {\n  background: none;\n  border: none;\n  outline: none;\n}\n\n/* Comment section */\n\n.comment-wrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 0;\n  backdrop-filter: blur(5px);\n}\n\n.comment-section {\n  background-color: #f6a9a9;\n  border-radius: 50px;\n  width: 90%;\n  height: 95%;\n  z-index: 101;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: auto;\n}\n\n.close-div {\n  width: 95%;\n  display: flex;\n  justify-content: end;\n}\n\n.close {\n  height: 60px;\n  width: 60px;\n  position: fixed;\n}\n\n.comment-pokename {\n  text-transform: capitalize;\n  margin-bottom: 0;\n  font-size: 40px;\n  font-weight: normal;\n}\n\n.comment-poketype {\n  font-weight: normal;\n  font-size: 24px;\n}\n\n.comment-pokeid {\n  font-weight: normal;\n  font-size: 18px;\n  margin-top: 0;\n}\n\n.all-comments-wrapper {\n  font-weight: normal;\n  width: 50vw;\n}\n\n.all-comments li {\n  margin-bottom: 3px;\n  list-style-type: none;\n  text-align: center;\n}\n\n.comments-header {\n  font-weight: normal;\n  font-size: 40px;\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\n.add-comment-wrapper {\n  font-weight: normal;\n  display: flex;\n  flex-direction: column;\n  width: 40vw;\n}\n\n.add-comment-header {\n  font-weight: normal;\n  align-self: center;\n  font-size: 30px;\n}\n\n.add-comment-name {\n  font-weight: normal;\n  padding: 3px;\n  margin-bottom: 10px;\n  width: 15vw;\n  font-size: 16px;\n}\n\n.add-comment-text {\n  font-weight: normal;\n  padding: 3px;\n  margin-bottom: 10px;\n  width: 25vw;\n  height: 100px;\n  font-size: 16px;\n}\n\n.add-comment-button {\n  font-weight: normal;\n  width: 15vw;\n  padding: 5px;\n  font-size: 18px;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100px;\n  background-color: #ee6983;\n}\n\n.footer p {\n  margin-left: 40px;\n  font-size: 24px;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsaUhBQWlIO0FBQ2pILHlIQUF5SDtBQUN6SDtBQUNBLDZDQUE2QywyQkFBMkIsR0FBRyxVQUFVLHdCQUF3Qiw0REFBNEQsNERBQTRELGNBQWMsR0FBRyxhQUFhLDZCQUE2QixHQUFHLFlBQVksdUJBQXVCLHVCQUF1QixrQkFBa0IsbUNBQW1DLEdBQUcsZ0JBQWdCLGtCQUFrQixtQkFBbUIsR0FBRyxhQUFhLGtCQUFrQixtQ0FBbUMsd0JBQXdCLDhCQUE4QixHQUFHLFFBQVEsOEJBQThCLHVCQUF1QixvQkFBb0IsR0FBRyxXQUFXLG1CQUFtQixpQkFBaUIsaUJBQWlCLEdBQUcsWUFBWSxjQUFjLGVBQWUsa0JBQWtCLEdBQUcsZUFBZSxjQUFjLGVBQWUsa0JBQWtCLHVCQUF1Qix3QkFBd0Isc0JBQXNCLEdBQUcsZUFBZSxxQkFBcUIsR0FBRyxpQkFBaUIsMEJBQTBCLGlCQUFpQixrQkFBa0IsbUJBQW1CLEdBQUcsZ0JBQWdCLGtCQUFrQixnRUFBZ0UsbUJBQW1CLDRCQUE0QixHQUFHLGlCQUFpQix3QkFBd0IscUJBQXFCLGtCQUFrQiw4QkFBOEIsZ0JBQWdCLHVCQUF1QixHQUFHLGVBQWUsK0JBQStCLHFCQUFxQixvQkFBb0Isd0JBQXdCLEdBQUcsV0FBVyxvQkFBb0IseUJBQXlCLHlCQUF5QixHQUFHLGVBQWUsa0JBQWtCLDZDQUE2Qyx1QkFBdUIsaUJBQWlCLHVCQUF1QixHQUFHLFVBQVUsNkNBQTZDLHdCQUF3QixpQkFBaUIsaUJBQWlCLEdBQUcsZ0JBQWdCLGVBQWUsaUJBQWlCLGlCQUFpQixHQUFHLFlBQVksa0JBQWtCLDRCQUE0QixHQUFHLHdCQUF3QixxQkFBcUIsaUJBQWlCLGtCQUFrQixHQUFHLCtDQUErQyxvQkFBb0IsZ0JBQWdCLGlCQUFpQixpQkFBaUIsV0FBVyxrQkFBa0Isd0JBQXdCLDRCQUE0QixZQUFZLCtCQUErQixHQUFHLHNCQUFzQiw4QkFBOEIsd0JBQXdCLGVBQWUsZ0JBQWdCLGlCQUFpQixrQkFBa0Isa0JBQWtCLDJCQUEyQix3QkFBd0IscUJBQXFCLEdBQUcsZ0JBQWdCLGVBQWUsa0JBQWtCLHlCQUF5QixHQUFHLFlBQVksaUJBQWlCLGdCQUFnQixvQkFBb0IsR0FBRyx1QkFBdUIsK0JBQStCLHFCQUFxQixvQkFBb0Isd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixvQkFBb0IsR0FBRyxxQkFBcUIsd0JBQXdCLG9CQUFvQixrQkFBa0IsR0FBRywyQkFBMkIsd0JBQXdCLGdCQUFnQixHQUFHLHNCQUFzQix1QkFBdUIsMEJBQTBCLHVCQUF1QixHQUFHLHNCQUFzQix3QkFBd0Isb0JBQW9CLHVCQUF1QixrQkFBa0Isd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixrQkFBa0IsMkJBQTJCLGdCQUFnQixHQUFHLHlCQUF5Qix3QkFBd0IsdUJBQXVCLG9CQUFvQixHQUFHLHVCQUF1Qix3QkFBd0IsaUJBQWlCLHdCQUF3QixnQkFBZ0Isb0JBQW9CLEdBQUcsdUJBQXVCLHdCQUF3QixpQkFBaUIsd0JBQXdCLGdCQUFnQixrQkFBa0Isb0JBQW9CLEdBQUcseUJBQXlCLHdCQUF3QixnQkFBZ0IsaUJBQWlCLG9CQUFvQixHQUFHLGFBQWEsa0JBQWtCLHdCQUF3QixnQkFBZ0Isa0JBQWtCLDhCQUE4QixHQUFHLGVBQWUsc0JBQXNCLG9CQUFvQixHQUFHLFNBQVMsZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLGdHQUFnRyxnRkFBZ0YsT0FBTywyQkFBMkIsR0FBRyxVQUFVLHdC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L3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9KUy9jb21tZW50QXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvSlMvaXRlbUNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9KUy9saWtlQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU11bGkmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICNmN2UzYzE7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNmE5YTksICNkZGNhYWEpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZGQ5Nzk3LCAjZTJkYWNjKTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi50aXRsZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICBtYXJnaW4tbGVmdDogMTNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTY5ODM7XFxufVxcblxcbmgxIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDU0cHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIG1heC13aWR0aDogMTclO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubGlua3Mge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5saW5rcyB1bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogMjByZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmxpbmtzIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5saW5rcyBsaSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnBva2UtZWxlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMjBweCwgMWZyKSk7XFxuICBncmlkLWdhcDogMjBweDtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xcbn1cXG5cXG4ucG9rZS1jYXJkcyB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU2OTgzO1xcbiAgY29sb3I6ICMyMjI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZS1jciB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4udHlwZSB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBjb2xvcjogcmdiKDIwIDIwIDIwKTtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG5cXG4uaW1nLWNhcmQge1xcbiAgaGVpZ2h0OiAxODBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDYwJSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMTgwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiA3cHg7XFxufVxcblxcbi5oZWFydC1pbWcge1xcbiAgd2lkdGg6IDE1JTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmNsaWNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmxpa2UtYXBpLWNhbGwtYnRuIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBDb21tZW50IHNlY3Rpb24gKi9cXG5cXG4uY29tbWVudC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdG9wOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZhOWE5O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDk1JTtcXG4gIHotaW5kZXg6IDEwMTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uY2xvc2UtZGl2IHtcXG4gIHdpZHRoOiA5NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5jbG9zZSB7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICB3aWR0aDogNjBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuLmNvbW1lbnQtcG9rZW5hbWUge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLmNvbW1lbnQtcG9rZXR5cGUge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmNvbW1lbnQtcG9rZWlkIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4uYWxsLWNvbW1lbnRzLXdyYXBwZXIge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHdpZHRoOiA1MHZ3O1xcbn1cXG5cXG4uYWxsLWNvbW1lbnRzIGxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDNweDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbW1lbnRzLWhlYWRlciB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5hZGQtY29tbWVudC13cmFwcGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA0MHZ3O1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQtaGVhZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5hZGQtY29tbWVudC1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgd2lkdGg6IDE1dnc7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5hZGQtY29tbWVudC10ZXh0IHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgd2lkdGg6IDI1dnc7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQtYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICB3aWR0aDogMTV2dztcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTY5ODM7XFxufVxcblxcbi5mb290ZXIgcCB7XFxuICBtYXJnaW4tbGVmdDogNDBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1REFBdUQ7RUFDdkQsdURBQXVEO0VBQ3ZELFNBQVM7QUFDWDs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixNQUFNO0VBQ04sYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsT0FBTztFQUNQLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU11bGkmZGlzcGxheT1zd2FwXFxcIjtcXG5AaW1wb3J0IFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAsNDAwJmRpc3BsYXk9c3dhcFxcXCI7XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICNmN2UzYzE7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNmE5YTksICNkZGNhYWEpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZGQ5Nzk3LCAjZTJkYWNjKTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi50aXRsZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICBtYXJnaW4tbGVmdDogMTNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTY5ODM7XFxufVxcblxcbmgxIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDU0cHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIG1heC13aWR0aDogMTclO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubGlua3Mge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5saW5rcyB1bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogMjByZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmxpbmtzIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5saW5rcyBsaSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnBva2UtZWxlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMjBweCwgMWZyKSk7XFxuICBncmlkLWdhcDogMjBweDtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xcbn1cXG5cXG4ucG9rZS1jYXJkcyB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU2OTgzO1xcbiAgY29sb3I6ICMyMjI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZS1jciB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4udHlwZSB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBjb2xvcjogcmdiKDIwIDIwIDIwKTtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG5cXG4uaW1nLWNhcmQge1xcbiAgaGVpZ2h0OiAxODBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDYwJSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMTgwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gNjAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiA3cHg7XFxufVxcblxcbi5oZWFydC1pbWcge1xcbiAgd2lkdGg6IDE1JTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmNsaWNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmxpa2UtYXBpLWNhbGwtYnRuIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBDb21tZW50IHNlY3Rpb24gKi9cXG5cXG4uY29tbWVudC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdG9wOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZhOWE5O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDk1JTtcXG4gIHotaW5kZXg6IDEwMTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uY2xvc2UtZGl2IHtcXG4gIHdpZHRoOiA5NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5jbG9zZSB7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICB3aWR0aDogNjBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuLmNvbW1lbnQtcG9rZW5hbWUge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLmNvbW1lbnQtcG9rZXR5cGUge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmNvbW1lbnQtcG9rZWlkIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4uYWxsLWNvbW1lbnRzLXdyYXBwZXIge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHdpZHRoOiA1MHZ3O1xcbn1cXG5cXG4uYWxsLWNvbW1lbnRzIGxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDNweDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbW1lbnRzLWhlYWRlciB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5hZGQtY29tbWVudC13cmFwcGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA0MHZ3O1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQtaGVhZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5hZGQtY29tbWVudC1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgd2lkdGg6IDE1dnc7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5hZGQtY29tbWVudC10ZXh0IHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgd2lkdGg6IDI1dnc7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQtYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICB3aWR0aDogMTV2dztcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTY5ODM7XFxufVxcblxcbi5mb290ZXIgcCB7XFxuICBtYXJnaW4tbGVmdDogNDBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBDb21tZW50cyB7XG4gIHN0YXRpYyBwb3N0Q29tbWVudHMgPSBhc3luYyAoaWQsIG5hbWUsIGNvbW1lbnQpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8wUjNyeTNDeHNnMFdPdzgzMXBTSC9jb21tZW50cycsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGl0ZW1faWQ6IGlkLFxuICAgICAgICAgIHVzZXJuYW1lOiBuYW1lLFxuICAgICAgICAgIGNvbW1lbnQsXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICApO1xuICAgIGNvbnN0IHBvc3QgPSBhd2FpdCByZXMudGV4dCgpO1xuICAgIHJldHVybiBwb3N0O1xuICB9O1xuXG4gIHN0YXRpYyBnZXRDb21tZW50cyA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzBSM3J5M0N4c2cwV093ODMxcFNIL2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gLFxuICAgICk7XG4gICAgY29uc3QgY29tbWVudCA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIGNvbW1lbnQ7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzOyIsImNvbnN0IGl0ZW1Db3VudGVyID0gKGFsbEl0ZW1zLCBpdGVtc0NvdW50ZXIpID0+IHtcbiAgaXRlbXNDb3VudGVyLmlubmVySFRNTCA9IGBQb2tlbW9ucygke2FsbEl0ZW1zIC8gM30pYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGl0ZW1Db3VudGVyOyIsImNvbnN0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9rZS1lbGVtJyk7XG5cbmNvbnN0IGxpa2VBUEkgPSAoaXRlbSkgPT4ge1xuICBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvMFIzcnkzQ3hzZzBXT3c4MzFwU0gvbGlrZXMnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGl0ZW0pLFxuICB9KTtcbiAgLy8gLnRoZW4oanNvbj0+anNvbi5qc29uKCkpXG59O1xuXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGlrZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8wUjNyeTNDeHNnMFdPdzgzMXBTSC9saWtlcycpO1xuICByZXR1cm4gbGlrZS5qc29uKCk7XG59O1xuXG5wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZSA9PT0gJ2hlYXJ0LWltZyBsaWtlLWFwaS1jYWxsLWJ0bicpIHtcbiAgICBjb25zdCBsaWtlQ29udGFpbmVyID0gZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlblsyXTtcbiAgICBjb25zdCB2YWx1ZSA9ICtsaWtlQ29udGFpbmVyLmlubmVySFRNTCArIDE7XG4gICAgbGlrZUNvbnRhaW5lci5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICBjb25zdCB7IGlkIH0gPSBlLnRhcmdldDtcbiAgICBsaWtlQVBJKHsgaXRlbV9pZDogaWQgfSk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRMaWtlczsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBnZXRMaWtlcyBmcm9tICcuL0pTL2xpa2VBUEkuanMnO1xuaW1wb3J0IGl0ZW1Db3VudGVyIGZyb20gJy4vSlMvaXRlbUNvdW50ZXIuanMnO1xuaW1wb3J0IGNsb3NlIGZyb20gJy4vaW1hZ2VzL2Nsb3NlLnBuZyc7XG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi9KUy9jb21tZW50QXBpLmpzJztcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuY29uc3QgcG9rZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9rZS1lbGVtJyk7XG5jb25zdCBwb2tlQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2tlLWNvdW50ZXInKTtcblxuY29uc3QgcG9rZU51bSA9IDM2O1xuXG5jb25zdCBmZXRjaFBva2UgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxpa2VzID0gYXdhaXQgZ2V0TGlrZXMoKTtcblxuICBjb25zdCBwb2tlbW9ucyA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBwb2tlTnVtOyBpICs9IDMpIHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7aX1gO1xuICAgIHBva2Vtb25zLnB1c2goZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpKTtcbiAgfVxuXG4gIGNvbnN0IGRpc3BsYXlDb21tZW50cyA9IChwb2tlbW9uKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2tlLWVsZW0nKTtcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5pbm5lckhUTUwgPT09ICdDb21tZW50Jykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBwb2tlbW9uLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3QgcG9rZVNvdXJjZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLm5leHRTaWJsaW5nLnNyYztcbiAgICAgICAgICBpZiAocG9rZVNvdXJjZSA9PT0gcG9rZW1vbltpXT8uaW1hZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dDb21tZW50cyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY29tbWVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgY29tbWVudFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29tbWVudC13cmFwcGVyJyk7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21tZW50V3JhcHBlcik7XG5cbiAgICAgICAgICAgICAgY29uc3QgY29tbWVudFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgY29tbWVudFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29tbWVudC1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgIGNvbW1lbnRXcmFwcGVyLmFwcGVuZENoaWxkKGNvbW1lbnRTZWN0aW9uKTtcblxuICAgICAgICAgICAgICBjb25zdCBjbG9zZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICBjbG9zZURpdi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1kaXYnKTtcbiAgICAgICAgICAgICAgY29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQoY2xvc2VEaXYpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICBjbG9zZUljb24uc3JjID0gY2xvc2U7XG4gICAgICAgICAgICAgIGNsb3NlSWNvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICAgICAgICAgICAgICBjbG9zZURpdi5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHBva2Vtb25JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgcG9rZW1vbkltZy5zcmMgPSBwb2tlbW9uW2ldLmltYWdlO1xuICAgICAgICAgICAgICBwb2tlbW9uSW1nLmNsYXNzTGlzdC5hZGQoJ2ltZy1jYXJkJyk7XG4gICAgICAgICAgICAgIGNvbW1lbnRTZWN0aW9uLmFwcGVuZENoaWxkKHBva2Vtb25JbWcpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHBva2Vtb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgICAgcG9rZW1vbk5hbWUuY2xhc3NMaXN0LmFkZCgnY29tbWVudC1wb2tlbmFtZScpO1xuICAgICAgICAgICAgICBwb2tlbW9uTmFtZS5pbm5lclRleHQgPSBwb2tlbW9uW2ldLm5hbWU7XG4gICAgICAgICAgICAgIGNvbW1lbnRTZWN0aW9uLmFwcGVuZENoaWxkKHBva2Vtb25OYW1lKTtcblxuICAgICAgICAgICAgICBjb25zdCBwb2tlbW9uVHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgcG9rZW1vblR5cGUuY2xhc3NMaXN0LmFkZCgnY29tbWVudC1wb2tldHlwZScpO1xuICAgICAgICAgICAgICBwb2tlbW9uVHlwZS5pbm5lclRleHQgPSBgVHlwZTogJHtwb2tlbW9uW2ldLnR5cGV9YDtcbiAgICAgICAgICAgICAgY29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQocG9rZW1vblR5cGUpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHBva2Vtb25HYW1lSUQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgIHBva2Vtb25HYW1lSUQuY2xhc3NMaXN0LmFkZCgnY29tbWVudC1wb2tlaWQnKTtcbiAgICAgICAgICAgICAgcG9rZW1vbkdhbWVJRC5pbm5lclRleHQgPSBgSW4tZ2FtZSBQb2tlbW9uIElEOiAke3Bva2Vtb25baV0uaWR9YDtcbiAgICAgICAgICAgICAgY29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQocG9rZW1vbkdhbWVJRCk7XG5cbiAgICAgICAgICAgICAgY29uc3QgYWxsQ29tbWVudHNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIGFsbENvbW1lbnRzV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhbGwtY29tbWVudHMtd3JhcHBlcicpO1xuICAgICAgICAgICAgICBjb21tZW50U2VjdGlvbi5hcHBlbmRDaGlsZChhbGxDb21tZW50c1dyYXBwZXIpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgICAgY29tbWVudHNIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY29tbWVudHMtaGVhZGVyJyk7XG4gICAgICAgICAgICAgIGNvbW1lbnRzSGVhZGVyLmlubmVyVGV4dCA9ICdDb21tZW50cyc7XG4gICAgICAgICAgICAgIGFsbENvbW1lbnRzV3JhcHBlci5hcHBlbmRDaGlsZChjb21tZW50c0hlYWRlcik7XG5cbiAgICAgICAgICAgICAgY29uc3QgYWxsQ29tbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgICBhbGxDb21tZW50cy5jbGFzc0xpc3QuYWRkKCdhbGwtY29tbWVudHMnKTtcbiAgICAgICAgICAgICAgYWxsQ29tbWVudHNXcmFwcGVyLmFwcGVuZENoaWxkKGFsbENvbW1lbnRzKTtcblxuICAgICAgICAgICAgICBjb25zdCBhZGRDb21tZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICBhZGRDb21tZW50V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhZGQtY29tbWVudC13cmFwcGVyJyk7XG4gICAgICAgICAgICAgIGNvbW1lbnRTZWN0aW9uLmFwcGVuZENoaWxkKGFkZENvbW1lbnRXcmFwcGVyKTtcblxuICAgICAgICAgICAgICBjb25zdCBhZGRDb21tZW50SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgICAgYWRkQ29tbWVudEhlYWRlci5jbGFzc0xpc3QuYWRkKCdhZGQtY29tbWVudC1oZWFkZXInKTtcbiAgICAgICAgICAgICAgYWRkQ29tbWVudEhlYWRlci5pbm5lclRleHQgPSAnQWRkIGEgY29tbWVudCc7XG4gICAgICAgICAgICAgIGFkZENvbW1lbnRXcmFwcGVyLmFwcGVuZENoaWxkKGFkZENvbW1lbnRIZWFkZXIpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGFkZENvbW1lbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgYWRkQ29tbWVudE5hbWUuY2xhc3NMaXN0LmFkZCgnYWRkLWNvbW1lbnQtbmFtZScpO1xuICAgICAgICAgICAgICBhZGRDb21tZW50TmFtZS5wbGFjZWhvbGRlciA9ICdZb3VyIG5hbWUnO1xuICAgICAgICAgICAgICBhZGRDb21tZW50V3JhcHBlci5hcHBlbmRDaGlsZChhZGRDb21tZW50TmFtZSk7XG5cbiAgICAgICAgICAgICAgY29uc3QgYWRkQ29tbWVudFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgICBhZGRDb21tZW50VGV4dC5jbGFzc0xpc3QuYWRkKCdhZGQtY29tbWVudC10ZXh0Jyk7XG4gICAgICAgICAgICAgIGFkZENvbW1lbnRUZXh0LnBsYWNlaG9sZGVyID0gJ1lvdXIgY29tbWVudCc7XG4gICAgICAgICAgICAgIGFkZENvbW1lbnRXcmFwcGVyLmFwcGVuZENoaWxkKGFkZENvbW1lbnRUZXh0KTtcblxuICAgICAgICAgICAgICBjb25zdCBhZGRDb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgIGFkZENvbW1lbnRCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLWNvbW1lbnQtYnV0dG9uJyk7XG4gICAgICAgICAgICAgIGFkZENvbW1lbnRCdG4uaW5uZXJUZXh0ID0gJ0NvbW1lbnQnO1xuICAgICAgICAgICAgICBhZGRDb21tZW50V3JhcHBlci5hcHBlbmRDaGlsZChhZGRDb21tZW50QnRuKTtcblxuICAgICAgICAgICAgICBjbG9zZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICh6KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHoudGFyZ2V0LnNyYyA9PT0gY2xvc2UpIHtcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnRXcmFwcGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RDb21tZW50cygpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tZW50c0luZm8gPSBhd2FpdCBDb21tZW50cy5nZXRDb21tZW50cyhwb2tlbW9uW2ldLmlkKTtcbiAgICAgICAgICAgICAgICBsZXQgY29tbWVudENvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpICsgMSA8PSBjb21tZW50c0luZm8ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgICAgY29tbWVudC5pbm5lclRleHQgPSBgJHtjb21tZW50c0luZm9baV0/LmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudHNJbmZvW2ldPy51c2VybmFtZX06ICR7Y29tbWVudHNJbmZvW2ldPy5jb21tZW50fWA7XG4gICAgICAgICAgICAgICAgICBhbGxDb21tZW50cy5hcHBlbmRDaGlsZChjb21tZW50KTtcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnRDb3VudGVyICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbW1lbnRzSGVhZGVyLmlubmVyVGV4dCA9IGBDb21tZW50cyAoJHtjb21tZW50Q291bnRlcn0pYDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGFkZENvbW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFkZENvbW1lbnROYW1lLnZhbHVlICE9PSAnJyAmJiBhZGRDb21tZW50VGV4dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJOYW1lID0gYWRkQ29tbWVudE5hbWUudmFsdWU7XG4gICAgICAgICAgICAgICAgICBjb25zdCB1c2VyQ29tbWVudCA9IGFkZENvbW1lbnRUZXh0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgQ29tbWVudHMucG9zdENvbW1lbnRzKHBva2Vtb25baV0uaWQsIHVzZXJOYW1lLCB1c2VyQ29tbWVudCk7XG4gICAgICAgICAgICAgICAgICBhZGRDb21tZW50TmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgYWRkQ29tbWVudFRleHQudmFsdWUgPSAnJztcblxuICAgICAgICAgICAgICAgICAgY29uc3QgcmVsb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB3YWl0Q29tbWVudHMgPSBzZXRUaW1lb3V0KHNob3dDb21tZW50cywgNTAwKTtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdENvbW1lbnRzKCk7XG4gICAgICAgICAgICAgICAgICAgIHdhaXRDb21tZW50cygpO1xuICAgICAgICAgICAgICAgICAgICBjb21tZW50V3JhcHBlci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NvbW1lbnRzKCk7XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgcmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXF1ZXN0Q29tbWVudHMoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHNob3dDb21tZW50cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNob3dQb2tlID0gKHBva2Vtb24pID0+IHtcbiAgICBjb25zdCBwb2tlSW5uZXJIdG1sID0gcG9rZW1vblxuICAgICAgLm1hcChcbiAgICAgICAgKHBvaykgPT4ge1xuICAgICAgICAgIGxldCB0YXJnZXRMaWtlcyA9IDA7XG4gICAgICAgICAgbGlrZXMuZm9yRWFjaCgobCkgPT4ge1xuICAgICAgICAgICAgaWYgKGwuaXRlbV9pZC50b1N0cmluZygpID09PSBwb2suaWQudG9TdHJpbmcoKSAmJiB0YXJnZXRMaWtlcyA9PT0gMCkge1xuICAgICAgICAgICAgICB0YXJnZXRMaWtlcyA9IGwubGlrZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInBva2UtY2FyZHNcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctY2FyZFwiIHNyYz1cIiR7cG9rLmltYWdlfVwiLz5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZS1jclwiPiAke3Bvay5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0eXBlXCI+VHlwZTogJHtwb2sudHlwZX08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY2xpY2tcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0blwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL2ljb25zOC1oZWFydC00MCgxKS5wbmdcIiBhbHQ9XCJcIiBpZD0ke3Bvay5pZH0gY2xhc3M9XCJoZWFydC1pbWcgbGlrZS1hcGktY2FsbC1idG5cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpa2VzLWNvbnRhaW5lclwiPiR7dGFyZ2V0TGlrZXMgfHwgMH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICBgO1xuICAgICAgICB9LFxuICAgICAgKVxuICAgICAgLmpvaW4oJycpO1xuICAgIHBva2VFbGVtLmlubmVySFRNTCA9IHBva2VJbm5lckh0bWw7XG4gIH07XG5cbiAgUHJvbWlzZS5hbGwocG9rZW1vbnMpLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICBjb25zdCBwb2tlbW9uID0gcmVzdWx0cy5tYXAoKHJlcykgPT4gKHtcbiAgICAgIG5hbWU6IHJlcy5uYW1lLFxuICAgICAgaW1hZ2U6IHJlcy5zcHJpdGVzLmZyb250X2RlZmF1bHQsXG4gICAgICB0eXBlOiByZXMudHlwZXMubWFwKCh0eXBlKSA9PiB0eXBlLnR5cGUubmFtZSkuam9pbignLCAnKSxcbiAgICAgIGlkOiByZXMuaWQsXG4gICAgfSkpO1xuICAgIHNob3dQb2tlKHBva2Vtb24pO1xuICAgIGRpc3BsYXlDb21tZW50cyhwb2tlbW9uKTtcbiAgfSk7XG59O1xuXG53aW5kb3cub25sb2FkID0gYXN5bmMgKCkgPT4ge1xuICBmZXRjaFBva2UoKTtcbiAgaXRlbUNvdW50ZXIocG9rZU51bSwgcG9rZUNvdW50ZXIpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==