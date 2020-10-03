/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap\" rel=\"stylesheet);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Cousine:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  box-sizing: border-box;\n  font-family: \"Rubik\", sans-serif;\n  margin: 0;\n  padding: 0; }\n\n#container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden; }\n\n#contentHolder {\n  position: relative;\n  width: 500px;\n  height: 500px;\n  overflow: hidden;\n  background-color: white;\n  border-radius: 10px;\n  border: 2px solid #eaeaea; }\n\n#shipHolder {\n  position: absolute;\n  width: 500px;\n  height: 250px;\n  background-color: white;\n  overflow: hidden; }\n\n#sky {\n  position: absolute; }\n\n#vanguardShip {\n  position: absolute;\n  transform: translate(0px, 60px) rotate(0);\n  transform-origin: center bottom; }\n\n#particleHolder {\n  position: absolute;\n  width: 500px;\n  height: 250px;\n  overflow: hidden;\n  transform: translateY(250px); }\n\n#particles {\n  position: absolute;\n  width: 500px;\n  height: 250px; }\n\n#seaLine {\n  position: absolute;\n  width: 500px;\n  border-bottom: 1px solid #ABD4F5;\n  left: 50%;\n  top: 250px;\n  transform: translateX(-50%);\n  transition: width 5s;\n  z-index: 10; }\n\n@keyframes wobble {\n  0% {\n    transform: translate(100px, 64px) rotate(1deg); }\n  50% {\n    transform: translate(100px, 68px) rotate(-1deg); }\n  100% {\n    transform: translate(100px, 64px) rotate(1deg); } }\n\n@keyframes floating {\n  from {\n    transform: translate(-300px, 64px) rotate(0deg); }\n  to {\n    transform: translate(100px, 64px) rotate(1deg); } }\n\n.floatClass {\n  animation: floating, wobble;\n  animation-duration: 3s, 6s;\n  animation-delay: 0s, 3s;\n  animation-fill-mode: forwards, forwards;\n  animation-timing-function: ease-out, ease-in-out;\n  animation-direction: forwards, alternate;\n  animation-iteration-count: 1, infinite; }\n\n#navHolder {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin: 20px; }\n\n.navButton {\n  width: 100px;\n  padding: 5px;\n  border: 2px solid #eaeaea;\n  border-radius: 5px;\n  margin: 10px;\n  text-align: center;\n  background-color: #f0f0f0;\n  font-size: 12px; }\n\n.activeButton {\n  background-color: #272727;\n  color: #f0f0f0; }\n\n.description {\n  width: 450px;\n  text-align: justify;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 14px; }\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ball */ "./src/ball.js");
/* harmony import */ var _pvector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pvector */ "./src/pvector.js");



class App {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.count = 0;
    this.seaLine = document.getElementById("seaLine");
    this.ship = document.getElementById("vanguardShip");
    this.particleSVG = document.getElementById("particles");
    this.totalParticles = 100;
    this.particles = [];
    this.zeroG = new _pvector__WEBPACK_IMPORTED_MODULE_1__["PVector"](0, 0);
    this.oneG = new _pvector__WEBPACK_IMPORTED_MODULE_1__["PVector"](0, 1);
    this.twoG = new _pvector__WEBPACK_IMPORTED_MODULE_1__["PVector"](0, 2);
    this.lowG = new _pvector__WEBPACK_IMPORTED_MODULE_1__["PVector"](0, .5);
    this.gravity = this.zeroG;

  }

  init() {
    this.buildParticles();
    this.initNav();
    this.draw();

    const buttons = document.querySelectorAll('.navButton');
    for(const button of buttons){
      button.addEventListener("click", ()=>{
        console.log('clicked: ', button.innerHTML)
      })
    }

  }

  initNav() {
    const floatButton = document.getElementById("float");
    floatButton.addEventListener("click", () => {
      console.log("float click")
      this.changeMode("float");
      this.gravity = this.zeroG;
    })

    const bounceButton = document.getElementById("orbit");
    bounceButton.addEventListener("click", () => {
      console.log("orbit click")
      this.changeMode("orbit");
      this.gravity = this.zeroG;
    })

    const flowButton = document.getElementById("flow");
    flowButton.addEventListener("click", () => {
      console.log("flow click")
      this.changeMode("flow");
      this.gravity = this.lowG;
    })

    const dropButton = document.getElementById("drop");
    dropButton.addEventListener("click", () => {
      console.log("drop click")
      this.changeMode("drop");
      this.gravity = this.oneG;
    })
  }

  changeMode(newMode) {
    for (let i = 0; i < this.totalParticles; i++) {
      this.particles[i].changeMode(newMode);
    }
  }

  buildParticles() {
    for (let i = 0; i < this.totalParticles; i++) {
      const x = 250; //Math.random() * this.w;
      const y = 250; //Math.random() * this.h/2;
      const b = new _ball__WEBPACK_IMPORTED_MODULE_0__["Ball"](x, y, 10);
      b.init(this.particleSVG, 500, 250);
      b.changeMode("float");
      this.particles.push(b);
    }
  }

  stepOne() {
    this.ship.classList.add("floatClass");
  }

  draw() {
    for (const particle of this.particles) {
      particle.move(this.gravity);
      particle.update();
    }
    window.requestAnimationFrame(() => { this.draw() }, 1);
  }
}

/***/ }),

/***/ "./src/ball.js":
/*!*********************!*\
  !*** ./src/ball.js ***!
  \*********************/
/*! exports provided: Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ball", function() { return Ball; });
/* harmony import */ var _pvector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pvector */ "./src/pvector.js");


class Ball {
  constructor(x, y, r) {
    this.origin = new _pvector__WEBPACK_IMPORTED_MODULE_0__["PVector"](x, y);
    this.location = new _pvector__WEBPACK_IMPORTED_MODULE_0__["PVector"](x, y);
    this.velocity = new _pvector__WEBPACK_IMPORTED_MODULE_0__["PVector"](Math.random() * 4 - 2, Math.random() * 2 - 1);
    this.accel = new _pvector__WEBPACK_IMPORTED_MODULE_0__["PVector"](0, 0);
    this.lifeSpan = 255;
    this.maxX;
    this.maxY
    this.cx = this.location.x;
    this.cy = this.location.y;
    this.r = 2 + Math.ceil(Math.random() * 6);
    this.opacity = this.r/25;
    this.circle;
    this.fill = "#ffffff";
    this.stroke = "#ffffff";
    this.strokeWidth = 2;
    this.ns = "http://www.w3.org/2000/svg";
    this.mode = "bounce";
    this.friction = .95 + Math.random() * .045;

  }

  init(svg, maxX, maxY) {
    this.setBounds(maxX, maxY)
    this.buildCircle(svg);
  }

  setBounds(maxX, maxY) {
    this.maxX = maxX - this.r
    this.maxY = maxY - this.r;
  }

  buildCircle(svg) {
    const randColor = `rgb(${this.randomColor()}, ${this.randomColor()}, ${this.randomColor()})`;
    this.circle = document.createElementNS(this.ns, "circle");
    this.circle.setAttribute("cx", this.cx);
    this.circle.setAttribute("cy", this.cy);
    this.circle.setAttribute("r", this.r);
    this.circle.setAttribute("fill", '#ffffff');
    this.circle.setAttribute("fill-opacity", this.opacity);
    //this.circle.setAttribute("stroke", this.stroke);
    //this.circle.setAttribute("stroke-width", this.strokeWidth);
    svg.appendChild(this.circle);
  }

  randomColor() {
    return Math.round(Math.random() * 255)
  }

  move(newForce) {
    this.accel.add(newForce);
    this.velocity.add(this.accel);
    this.location.add(this.velocity);
    this.accel = new _pvector__WEBPACK_IMPORTED_MODULE_0__["PVector"](0, 0);
  }

  draw() {
    this.circle.setAttribute("cx", this.location.x);
    this.circle.setAttribute("cy", this.location.y);
  }

  changeMode(newMode) {
    if (newMode == this.mode) return;

    this.mode = newMode;
    if (this.mode == "float") {
      this.velocity = new _pvector__WEBPACK_IMPORTED_MODULE_0__["PVector"](Math.random() * 1 - .5, Math.random() * 2);
    } else if (this.mode == "bounce") {
      this.velocity = new _pvector__WEBPACK_IMPORTED_MODULE_0__["PVector"](this.velocity.x, Math.random() * 4 - 2);
    } else if (this.mode == "flow") {
      this.velocity = new _pvector__WEBPACK_IMPORTED_MODULE_0__["PVector"](this.velocity.x, Math.random() * 4 - 2);
    }
  }

  bounce() {
    if (this.location.x < this.r) {
      this.location.x = this.r;
      this.velocity.x *= -1;
    } else if (this.location.x > this.maxX) {
      this.location.x = this.maxX;
      this.velocity.x *= -1;
    }

    if (this.location.y > this.maxY) {
      this.location.y = this.maxY;
      this.velocity.y *= -1;
    } else if (this.location.y < this.r) {
      this.location.y = this.r;
      this.velocity.y *= -1;
    }

    if (this.mode != "drop") return;

    this.velocity.multiply(this.friction);
  }

  float() {
    if (this.velocity.y > 0) this.velocity.y *= -1;
    if (this.location.x < 0) {
      this.location.x = this.maxX;
    } else if (this.location.x > this.maxX) {
      this.location.x = 0;
    }

    if (this.location.y < 0) {
      this.location.y = this.maxY;
    } else if (this.location.y > 250) {
      this.location.y = this.maxY;
    }
  }

  flow() {
    if (this.location.y > 250) {
      this.location.y = 250;
      this.location.x = this.maxX/2;
      const yVel = Math.random() * 8+ 8;
      this.velocity = new _pvector__WEBPACK_IMPORTED_MODULE_0__["PVector"](Math.random() * 2 - 1, Math.random() * 4 - 2);
      this.move(new _pvector__WEBPACK_IMPORTED_MODULE_0__["PVector"](Math.random() * 1 - .5, -yVel));
    }
  }

  orbit(){
    const targetV = new _pvector__WEBPACK_IMPORTED_MODULE_0__["PVector"](250, 125);
    targetV.sub(this.location);
    targetV.normalize();
    targetV.multiply(.1);
    this.move(targetV);
    this.velocity.multiply(.999);

  }



  update() {
    //this.float();
    if (this.mode == "float") {
      this.float()
    } else if (this.mode == "orbit"){
      this.orbit()
    } else if (this.mode == "drop"){
      this.bounce()
    } else {
      this.flow();
    }
    this.draw();
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.js");



console.log('hello world')

// let count = 0;
// const seaLine = document.getElementById("seaLine");
// const ship = document.getElementById("vanguardShip");

// const stepOne = ()=>{
//   seaLine.style.width = "500px";
//   ship.classList.add("floatClass");
// }

// stepOne();

const app = new _app__WEBPACK_IMPORTED_MODULE_1__["App"](500, 500);
app.init();
app.stepOne();


/***/ }),

/***/ "./src/pvector.js":
/*!************************!*\
  !*** ./src/pvector.js ***!
  \************************/
/*! exports provided: PVector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PVector", function() { return PVector; });
class PVector{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    mag(){
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    add(v){
        this.x += v.x;
        this.y += v.y;
    }

    sub(v){
        this.x -= v.x;
        this.y -= v.y;
    }

    static Subtract(v1, v2){
        let x = v1.x - v2.x;
        let y = v1.y - v2.y;

        return new PVector(x, y);
    }

    multiply(num)
    {
        this.x *= num;
        this.y *= num;
    }

    normalize(v){
        let num = Math.sqrt(this.x * this.x + this.y * this.y)
        this.x = this.x/num;
        this.y = this.y/num;
    }

    reset(){
        this.x = 0;
        this.y = 0;
    }


}


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });