/*!
{
  "author": "Graham Fairweather",
  "copywrite": "Copyright (c) 2017",
  "date": "2019-07-17T11:42:25.844Z",
  "describe": "",
  "description": "Creates an array of array values not included in the other given arrays.",
  "file": "array-difference-x.js",
  "hash": "3aeac191e1c4ac7458cf",
  "license": "MIT",
  "version": "3.0.0"
}
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["arrayDifferenceX"] = factory();
	else
		root["arrayDifferenceX"] = factory();
})((function () {
  'use strict';

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  return Function('return this')();
}()), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(21)();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isString(value) {
	if (typeof value === 'string') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = 9007199254740991;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = 9007199254740991;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = 9007199254740991;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = 9007199254740991;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = 9007199254740991;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = 9007199254740991;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = 9007199254740991;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = 9007199254740991;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
*
*	VALIDATE: undefined
*
*
*	DESCRIPTION:
*		- Validates if a value is undefined.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/



/**
* FUNCTION: isUndefined( value )
*	Validates if a value is undefined.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating whether value is undefined
*/
function isUndefined( value ) {
	return value === void 0;
} // end FUNCTION isUndefined()


// EXPORTS //

module.exports = isUndefined;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(23);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(22)))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/attempt-x/dist/attempt-x.esm.js
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
function attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/has-boxed-string-x/dist/has-boxed-string-x.esm.js
var has_boxed_string_x_esm_string = 'a';
var boxedString = {}.constructor(has_boxed_string_x_esm_string);
/**
 * Check failure of by-index access of string characters (IE < 9)
 * and failure of `0 in boxedString` (Rhino).
 *
 * `true` if no failure; otherwise `false`.
 *
 * @type boolean
 */

var hasBoxed = boxedString[0] === has_boxed_string_x_esm_string && 0 in boxedString;
/* harmony default export */ var has_boxed_string_x_esm = (hasBoxed);


// EXTERNAL MODULE: ./node_modules/is-string/index.js
var is_string = __webpack_require__(2);
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js


var EMPTY_STRING = '';
var strSplit = EMPTY_STRING.split;
var isStringFn = has_boxed_string_x_esm === false && typeof strSplit === 'function' && is_string_default.a;
/**
 * This method tests if a value is a string with the boxed bug; splits to an
 * array for iteration; otherwise returns the original value.
 *
 * @param {*} [value] - The value to be tested.
 * @returns {*} An array or characters if value was a string with the boxed bug;
 *  otherwise the value.
 */

function splitIfBoxedBug(value) {
  return isStringFn && isStringFn(value) ? strSplit.call(value, EMPTY_STRING) : value;
}


// EXTERNAL MODULE: ./node_modules/is-symbol/index.js
var is_symbol = __webpack_require__(0);
var is_symbol_default = /*#__PURE__*/__webpack_require__.n(is_symbol);

// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var has_symbol_support_x_esm_this = undefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var hasSymbolSupport = attempt(function () {
  _newArrowCheck(this, has_symbol_support_x_esm_this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_symbol_support_x_esm = (hasSymbolSupport.threw === false && hasSymbolSupport.value === true);


// EXTERNAL MODULE: ./node_modules/array-filter-x/node_modules/is-primitive/index.js
var is_primitive = __webpack_require__(3);
var is_primitive_default = /*#__PURE__*/__webpack_require__.n(is_primitive);

// EXTERNAL MODULE: ./node_modules/is-date-object/index.js
var is_date_object = __webpack_require__(1);
var is_date_object_default = /*#__PURE__*/__webpack_require__.n(is_date_object);

// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
function toBoolean(value) {
  return !!value;
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/is-falsey-x/dist/is-falsey-x.esm.js

/**
 * This method tests if a given value is falsey.
 *
 * @param {*} [value] - The value to test.
 * @returns {boolean} `true` if the value is falsey: otherwise `false`.
 */

function isFalsey(value) {
  return !toBoolean(value);
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

function toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return nativeObjectToString.call(value);
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_to_string_tag_x_esm = (has_symbol_support_x_esm &&
/* eslint-disable-next-line compat/compat */
is_symbol_default()(Symbol.toStringTag));


// CONCATENATED MODULE: ./node_modules/is-nil-x/dist/is-nil-x.esm.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
function isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function requireObjectCoercible(value) {
  if (isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/to-string-x/dist/to-string-x.esm.js

var ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var castString = ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

function ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(ERROR_MESSAGE);
  }

  return castString(value);
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

function requireCoercibleToString(value) {
  return ToString(requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var stringES2018 = '';
var white_space_x_esm_length = list.length;

for (var white_space_x_esm_i = 0; white_space_x_esm_i < white_space_x_esm_length; white_space_x_esm_i += 1) {
  if (list[white_space_x_esm_i].es2016) {
    stringES2016 += list[white_space_x_esm_i].string;
  }

  if (list[white_space_x_esm_i].es2018) {
    stringES2018 += list[white_space_x_esm_i].string;
  }
}

var string2018 = stringES2018;
/* harmony default export */ var white_space_x_esm = (string2018);
var string2016 = stringES2016;


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/trim-left-x/dist/trim-left-x.esm.js


var trim_left_x_esm_EMPTY_STRING = '';
var RegExpCtr = /none/.constructor;
var reLeft2016 = new RegExpCtr("^[".concat(string2016, "]+"));
var reLeft = new RegExpCtr("^[".concat(white_space_x_esm, "]+"));
var replace = trim_left_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trimLeft2016(string) {
  return replace.call(requireCoercibleToString(string), reLeft2016, trim_left_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trimLeft2018(string) {
  return replace.call(requireCoercibleToString(string), reLeft, trim_left_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/trim-right-x/dist/trim-right-x.esm.js


var trim_right_x_esm_EMPTY_STRING = '';
var trim_right_x_esm_RegExpCtr = /none/.constructor;
var reRight2016 = new trim_right_x_esm_RegExpCtr("[".concat(string2016, "]+$"));
var reRight2018 = new trim_right_x_esm_RegExpCtr("[".concat(white_space_x_esm, "]+$"));
var trim_right_x_esm_replace = trim_right_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trimRight2016(string) {
  return trim_right_x_esm_replace.call(requireCoercibleToString(string), reRight2016, trim_right_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trimRight2018(string) {
  return trim_right_x_esm_replace.call(requireCoercibleToString(string), reRight2018, trim_right_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim2016(string) {
  return trimLeft2016(trimRight2016(string));
}
/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim2018(string) {
  return trimLeft2018(trimRight2018(string));
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/normalize-space-x/dist/normalize-space-x.esm.js


var SPACE = ' ';
var normalize_space_x_esm_RegExpCtr = /none/.constructor;
var reNormalize2016 = new normalize_space_x_esm_RegExpCtr("[".concat(string2016, "]+"), 'g');
var reNormalize2018 = new normalize_space_x_esm_RegExpCtr("[".concat(white_space_x_esm, "]+"), 'g');
var normalize_space_x_esm_replace = SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */

function normalizeSpace2016(string) {
  return normalize_space_x_esm_replace.call(trim2016(string), reNormalize2016, SPACE);
}
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

function normalizeSpace2018(string) {
  return normalize_space_x_esm_replace.call(trim2018(string), reNormalize2018, SPACE);
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/replace-comments-x/dist/replace-comments-x.esm.js


var replace_comments_x_esm_EMPTY_STRING = '';
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var replace_comments_x_esm_replace = replace_comments_x_esm_EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

function replaceComments(string, replacement) {
  return replace_comments_x_esm_replace.call(requireCoercibleToString(string), STRIP_COMMENTS, arguments.length > 1 ? ToString(replacement) : replace_comments_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/is-function-x/dist/is-function-x.esm.js
var is_function_x_esm_this = undefined;

function is_function_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }









var is_function_x_esm_SPACE = ' ';
var fToString = Function.prototype.toString;
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var asyncTag = '[object AsyncFunction]';
var ctrRx = /^class /;
var test = ctrRx.test;
var hasNativeClass = attempt(function () {
  is_function_x_esm_newArrowCheck(this, is_function_x_esm_this);

  /* eslint-disable-next-line no-new-func */
  return Function('"use strict"; return class My {};')();
}.bind(undefined)).threw === false;

var testClassstring = function _testClassstring(value) {
  return test.call(ctrRx, normalizeSpace2018(replaceComments(fToString.call(value), is_function_x_esm_SPACE)));
};

var isES6ClassFn = function isES6ClassFunc(value) {
  var result = attempt(testClassstring, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var tryFuncToString = function funcToString(value, allowClass) {
  if (hasNativeClass && allowClass === false && isES6ClassFn(value)) {
    return false;
  }

  return attempt.call(value, fToString).threw === false;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


function isFunction(value, allowClass) {
  if (is_primitive_default()(value)) {
    return false;
  }

  if (has_to_string_tag_x_esm) {
    return tryFuncToString(value, toBoolean(allowClass));
  }

  if (hasNativeClass && isFalsey(allowClass) && isES6ClassFn(value)) {
    return false;
  }

  var strTag = toStringTag(value);
  return strTag === funcTag || strTag === genTag || strTag === asyncTag;
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/to-primitive-x/dist/to-primitive-x.esm.js







var ZERO = 0;
var ONE = 1;
/* eslint-disable-next-line no-void */

var UNDEFINED = void ZERO;
var NUMBER = 'number';
var STRING = 'string';
var DEFAULT = 'default';
/** @type {StringConstructor} */

var StringCtr = STRING.constructor;
/** @type {NumberConstructor} */

var NumberCtr = ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var symToPrimitive = has_symbol_support_x_esm && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var symValueOf = has_symbol_support_x_esm && Symbol.prototype.valueOf;
var toStringOrder = ['toString', 'valueOf'];
var toNumberOrder = ['valueOf', 'toString'];
var orderLength = 2;
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */

var ordinaryToPrimitive = function _ordinaryToPrimitive(ordinary, hint) {
  requireObjectCoercible(ordinary);

  if (typeof hint !== 'string' || hint !== NUMBER && hint !== STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === STRING ? toStringOrder : toNumberOrder;
  var method;
  var result;

  for (var i = ZERO; i < orderLength; i += ONE) {
    method = ordinary[methodNames[i]];

    if (isFunction(method)) {
      result = method.call(ordinary);

      if (is_primitive_default()(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var getMethod = function _getMethod(object, property) {
  var func = object[property];

  if (isNil(func) === false) {
    if (isFunction(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === StringCtr) {
      return STRING;
    }

    if (value === NumberCtr) {
      return NUMBER;
    }
  }

  return DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var to_primitive_x_esm_getExoticToPrim = function getExoticToPrim(value) {
  if (has_symbol_support_x_esm) {
    if (symToPrimitive) {
      return getMethod(value, symToPrimitive);
    }

    if (is_symbol_default()(value)) {
      return symValueOf;
    }
  }

  return UNDEFINED;
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {NumberConstructor|StringConstructor} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


function toPrimitive(input, preferredType) {
  if (is_primitive_default()(input)) {
    return input;
  }

  var hint = getHint(preferredType, arguments.length > ONE);
  var exoticToPrim = to_primitive_x_esm_getExoticToPrim(input);

  if (typeof exoticToPrim !== 'undefined') {
    var result = exoticToPrim.call(input, hint);

    if (is_primitive_default()(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  var newHint = hint === DEFAULT && (is_date_object_default()(input) || is_symbol_default()(input)) ? STRING : hint;
  return ordinaryToPrimitive(input, newHint === DEFAULT ? NUMBER : newHint);
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/nan-x/dist/nan-x.esm.js
/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 */
/* harmony default export */ var nan_x_esm = (0 / 0);


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/parse-int-x/dist/parse-int-x.esm.js



var nativeParseInt = parseInt;
/**  @type {Function} */

var castNumber = 0 .constructor; // noinspection JSPotentiallyInvalidConstructorUsage

var _ref = '',
    charAt = _ref.charAt;
var hexRegex = /^[-+]?0[xX]/;
var parse_int_x_esm_test = hexRegex.test;
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2016).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function parseInt2016(string, radix) {
  var str = trimLeft2016(ToString(string));
  return nativeParseInt(str, castNumber(radix) || (parse_int_x_esm_test.call(hexRegex, str) ? 16 : 10));
}
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2018).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function parseInt2018(string, radix) {
  var str = trimLeft2018(ToString(string));

  if (charAt.call(str, 0) === "\u180E") {
    return nan_x_esm;
  }

  return nativeParseInt(str, castNumber(radix) || (parse_int_x_esm_test.call(hexRegex, str) ? 16 : 10));
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/to-number-x/dist/to-number-x.esm.js





var binaryRadix = 2;
var octalRadix = 8;
var testCharsCount = 2;
var to_number_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
/** @type {NumberConstructor} */

var to_number_x_esm_castNumber = testCharsCount.constructor;
var pStrSlice = to_number_x_esm_ERROR_MESSAGE.slice;
var binaryRegex = /^0b[01]+$/i;
var RegExpConstructor = binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var to_number_x_esm_test = binaryRegex.test;

var isBinary = function _isBinary(value) {
  return to_number_x_esm_test.call(binaryRegex, value);
};

var octalRegex = /^0o[0-7]+$/i;

var isOctal = function _isOctal(value) {
  return to_number_x_esm_test.call(octalRegex, value);
};

var nonWSregex2016 = new RegExpConstructor("[\x85\u200B\uFFFE]", 'g');

var hasNonWS2016 = function _hasNonWS(value) {
  return to_number_x_esm_test.call(nonWSregex2016, value);
};

var nonWSregex2018 = new RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var hasNonWS2018 = function _hasNonWS(value) {
  return to_number_x_esm_test.call(nonWSregex2018, value);
};

var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return to_number_x_esm_test.call(invalidHexLiteral, value);
};
/**
 * This method converts argument to a value of type Number. (ES2016).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


function toNumber2016(argument) {
  var value = toPrimitive(argument, Number);

  if (is_symbol_default()(value)) {
    throw new TypeError(to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (isBinary(value)) {
      return toNumber2016(parseInt2016(pStrSlice.call(value, testCharsCount), binaryRadix));
    }

    if (isOctal(value)) {
      return toNumber2016(parseInt2016(pStrSlice.call(value, testCharsCount), octalRadix));
    }

    if (hasNonWS2016(value) || isInvalidHexLiteral(value)) {
      return nan_x_esm;
    }

    var trimmed = trim2016(value);

    if (trimmed !== value) {
      return toNumber2016(trimmed);
    }
  }

  return to_number_x_esm_castNumber(value);
}
/**
 * This method converts argument to a value of type Number. (ES2018).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */

function toNumber2018(argument) {
  var value = toPrimitive(argument, to_number_x_esm_castNumber);

  if (is_symbol_default()(value)) {
    throw new TypeError(to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (isBinary(value)) {
      return toNumber2018(parseInt2018(pStrSlice.call(value, testCharsCount), binaryRadix));
    }

    if (isOctal(value)) {
      return toNumber2018(parseInt2018(pStrSlice.call(value, testCharsCount), octalRadix));
    }

    if (hasNonWS2018(value) || isInvalidHexLiteral(value)) {
      return nan_x_esm;
    }

    var trimmed = trim2018(value);

    if (trimmed !== value) {
      return toNumber2018(trimmed);
    }
  }

  return to_number_x_esm_castNumber(value);
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/is-nan-x/dist/is-nan-x.esm.js
/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} [value] - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 */
function is_nan_x_esm_isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/infinity-x/dist/infinity-x.esm.js
/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 */
/* harmony default export */ var infinity_x_esm = (1 / 0);


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/is-finite-x/dist/is-finite-x.esm.js


/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} [number] - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

function is_finite_x_esm_isFinite(number) {
  return typeof number === 'number' && is_nan_x_esm_isNaN(number) === false && number !== infinity_x_esm && number !== -infinity_x_esm;
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/math-sign-x/dist/math-sign-x.esm.js


/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2016).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function sign2016(x) {
  var n = toNumber2016(x);

  if (n === 0 || is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}
/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2018).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function sign2018(x) {
  var n = toNumber2018(x);

  if (n === 0 || is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/to-integer-x/dist/to-integer-x.esm.js




var abs = Math.abs,
    floor = Math.floor;
/**
 * Converts `value` to an integer. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function toInteger2016(value) {
  var number = toNumber2016(value);

  if (is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return sign2016(number) * floor(abs(number));
}
/**
 * Converts `value` to an integer. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function toInteger2018(value) {
  var number = toNumber2018(value);

  if (is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return sign2018(number) * floor(abs(number));
}


// EXTERNAL MODULE: ./node_modules/array-filter-x/node_modules/max-safe-integer/index.js
var max_safe_integer = __webpack_require__(11);
var max_safe_integer_default = /*#__PURE__*/__webpack_require__.n(max_safe_integer);

// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/to-length-x/dist/to-length-x.esm.js


/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function toLength2016(value) {
  var len = toInteger2016(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > max_safe_integer_default.a) {
    return max_safe_integer_default.a;
  }

  return len;
}
/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function toLength2018(value) {
  var len = toInteger2018(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > max_safe_integer_default.a) {
    return max_safe_integer_default.a;
  }

  return len;
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/to-object-x/dist/to-object-x.esm.js

var castObject = {}.constructor;
/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!object} The `value` converted to an object.
 */

function toObject(value) {
  return castObject(requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/to-string-symbols-supported-x/dist/to-string-symbols-supported-x.esm.js


/* eslint-disable-next-line compat/compat */

var pToString = has_symbol_support_x_esm && Symbol.prototype.toString;
var isSymbolFn = typeof pToString === 'function' && is_symbol_default.a;
/** @type {Function} */

var to_string_symbols_supported_x_esm_castString = ''.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String,
 * however the specification states that if the argument is a Symbol then a
 * 'TypeError' is thrown. This version also allows Symbols be converted to
 * a string. Other uncoercible exotics will still throw though.
 *
 * @param {*} [value] - The value to convert to a string.
 * @returns {string} The converted value.
 */

function toStringSymbolsSupported(value) {
  return isSymbolFn && isSymbolFn(value) ? pToString.call(value) : to_string_symbols_supported_x_esm_castString(value);
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/assert-is-function-x/dist/assert-is-function-x.esm.js



/**
 * Tests `callback` to see if it is a function, throws a `TypeError` if it is
 * not. Otherwise returns the `callback`.
 *
 * @param {*} callback - The argument to be tested.
 * @throws {TypeError} Throws if `callback` is not a function.
 * @returns {*} Returns `callback` if it is function.
 */

function assertIsFunction(callback) {
  if (isFunction(callback) === false) {
    var msg = is_primitive_default()(callback) ? toStringSymbolsSupported(callback) : '#<Object>';
    throw new TypeError("".concat(msg, " is not a function"));
  }

  return callback;
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/dist/array-filter-x.esm.js
var array_filter_x_esm_this = undefined;

function array_filter_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }






/** @type {ArrayConstructor} */

var ArrayCtr = [].constructor;
/** @type {ObjectConstructor} */

var array_filter_x_esm_castObject = {}.constructor;
/** @type {BooleanConstructor} */

var castBoolean = true.constructor;
var nativFilter = typeof ArrayCtr.prototype.filter === 'function' && ArrayCtr.prototype.filter;
var isWorking;

if (nativFilter) {
  var spy = 0;
  var res = attempt.call([1, 2], nativFilter, function (item) {
    array_filter_x_esm_newArrowCheck(this, array_filter_x_esm_this);

    spy += item;
    return false;
  }.bind(undefined));
  isWorking = res.threw === false && res.value && res.value.length === 0 && spy === 3;

  if (isWorking) {
    spy = '';
    res = attempt.call(array_filter_x_esm_castObject('abc'), nativFilter, function (item, index) {
      array_filter_x_esm_newArrowCheck(this, array_filter_x_esm_this);

      spy += item;
      return index === 1;
    }.bind(undefined));
    isWorking = res.threw === false && res.value && res.value.length === 1 && res.value[0] === 'b' && spy === 'abc';
  }

  if (isWorking) {
    spy = 0;
    res = attempt.call(function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }(1, 2, 3), nativFilter, function (item, index) {
      array_filter_x_esm_newArrowCheck(this, array_filter_x_esm_this);

      spy += item;
      return index === 2;
    }.bind(undefined));
    isWorking = res.threw === false && res.value && res.value.length === 1 && res.value[0] === 3 && spy === 6;
  }

  if (isWorking) {
    spy = 0;
    res = attempt.call({
      0: 1,
      1: 2,
      3: 3,
      4: 4,
      length: 4
    }, nativFilter, function (item) {
      array_filter_x_esm_newArrowCheck(this, array_filter_x_esm_this);

      spy += item;
      return false;
    }.bind(undefined));
    isWorking = res.threw === false && res.value && res.value.length === 0 && spy === 6;
  }

  if (isWorking) {
    var doc = typeof document !== 'undefined' && document;

    if (doc) {
      spy = null;
      var fragment = doc.createDocumentFragment();
      var div = doc.createElement('div');
      fragment.appendChild(div);
      res = attempt.call(fragment.childNodes, nativFilter, function (item) {
        array_filter_x_esm_newArrowCheck(this, array_filter_x_esm_this);

        spy = item;
        return item;
      }.bind(undefined));
      isWorking = res.threw === false && res.value && res.value.length === 1 && res.value[0] === div && spy === div;
    }
  }

  if (isWorking) {
    var isStrict = function returnIsStrict() {
      /* eslint-disable-next-line babel/no-invalid-this */
      return castBoolean(this) === false;
    }();

    if (isStrict) {
      spy = null;
      res = attempt.call([1], nativFilter, function () {
        array_filter_x_esm_newArrowCheck(this, array_filter_x_esm_this);

        /* eslint-disable-next-line babel/no-invalid-this */
        spy = typeof this === 'string';
      }.bind(undefined), 'x');
      isWorking = res.threw === false && res.value && res.value.length === 0 && spy === true;
    }
  }

  if (isWorking) {
    spy = {};
    var fn = ['return nativFilter.call("foo", function (_, __, context) {', 'if (castBoolean(context) === false || typeof context !== "object") {', 'spy.value = true;}});'].join('');
    /* eslint-disable-next-line no-new-func */

    res = attempt(Function('nativFilter', 'spy', 'castBoolean', fn), nativFilter, spy);
    isWorking = res.threw === false && res.value && res.value.length === 0 && spy.value !== true;
  }
}
/**
 * This method creates a new array with all elements that pass the test
 * implemented by the provided function.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function is a predicate, to test each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {Array} A new array with the elements that pass the test.
 */


var $filter;

if (nativFilter) {
  $filter = function filter(array, callBack
  /* , thisArg */
  ) {
    var args = [callBack];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return nativFilter.apply(array, args);
  };
} else {
  $filter = function filter(array, callBack
  /* , thisArg */
  ) {
    var object = toObject(array); // If no callback function or if callback is not a callable function

    assertIsFunction(callBack);
    var iterable = splitIfBoxedBug(object);
    var length = toLength2018(iterable.length);
    var thisArg;

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      thisArg = arguments[2];
    }

    var noThis = typeof thisArg === 'undefined';
    var result = [];

    for (var i = 0; i < length; i += 1) {
      if (i in iterable) {
        var item = iterable[i];

        if (noThis ? callBack(item, i, object) : callBack.call(thisArg, item, i, object)) {
          result[result.length] = item;
        }
      }
    }

    return result;
  };
}

var arrayFilter = $filter;
/* harmony default export */ var array_filter_x_esm = (arrayFilter);


// CONCATENATED MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
function attempt_x_esm_attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
}


// CONCATENATED MODULE: ./node_modules/has-boxed-string-x/dist/has-boxed-string-x.esm.js
var dist_has_boxed_string_x_esm_string = 'a';
var has_boxed_string_x_esm_boxedString = {}.constructor(dist_has_boxed_string_x_esm_string);
/**
 * Check failure of by-index access of string characters (IE < 9)
 * and failure of `0 in boxedString` (Rhino).
 *
 * `true` if no failure; otherwise `false`.
 *
 * @type boolean
 */

var has_boxed_string_x_esm_hasBoxed = has_boxed_string_x_esm_boxedString[0] === dist_has_boxed_string_x_esm_string && 0 in has_boxed_string_x_esm_boxedString;
/* harmony default export */ var dist_has_boxed_string_x_esm = (has_boxed_string_x_esm_hasBoxed);


// CONCATENATED MODULE: ./node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js


var split_if_boxed_bug_x_esm_EMPTY_STRING = '';
var split_if_boxed_bug_x_esm_strSplit = split_if_boxed_bug_x_esm_EMPTY_STRING.split;
var split_if_boxed_bug_x_esm_isStringFn = dist_has_boxed_string_x_esm === false && typeof split_if_boxed_bug_x_esm_strSplit === 'function' && is_string_default.a;
/**
 * This method tests if a value is a string with the boxed bug; splits to an
 * array for iteration; otherwise returns the original value.
 *
 * @param {*} [value] - The value to be tested.
 * @returns {*} An array or characters if value was a string with the boxed bug;
 *  otherwise the value.
 */

function split_if_boxed_bug_x_esm_splitIfBoxedBug(value) {
  return split_if_boxed_bug_x_esm_isStringFn && split_if_boxed_bug_x_esm_isStringFn(value) ? split_if_boxed_bug_x_esm_strSplit.call(value, split_if_boxed_bug_x_esm_EMPTY_STRING) : value;
}


// CONCATENATED MODULE: ./node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var dist_has_symbol_support_x_esm_this = undefined;

function has_symbol_support_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var has_symbol_support_x_esm_hasSymbolSupport = attempt_x_esm_attempt(function () {
  has_symbol_support_x_esm_newArrowCheck(this, dist_has_symbol_support_x_esm_this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var dist_has_symbol_support_x_esm = (has_symbol_support_x_esm_hasSymbolSupport.threw === false && has_symbol_support_x_esm_hasSymbolSupport.value === true);


// EXTERNAL MODULE: ./node_modules/is-primitive/index.js
var node_modules_is_primitive = __webpack_require__(4);
var node_modules_is_primitive_default = /*#__PURE__*/__webpack_require__.n(node_modules_is_primitive);

// CONCATENATED MODULE: ./node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
function to_boolean_x_esm_toBoolean(value) {
  return !!value;
}


// CONCATENATED MODULE: ./node_modules/is-falsey-x/dist/is-falsey-x.esm.js

/**
 * This method tests if a given value is falsey.
 *
 * @param {*} [value] - The value to test.
 * @returns {boolean} `true` if the value is falsey: otherwise `false`.
 */

function is_falsey_x_esm_isFalsey(value) {
  return !to_boolean_x_esm_toBoolean(value);
}


// CONCATENATED MODULE: ./node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var to_string_tag_x_esm_nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

function to_string_tag_x_esm_toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return to_string_tag_x_esm_nativeObjectToString.call(value);
}


// CONCATENATED MODULE: ./node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var dist_has_to_string_tag_x_esm = (dist_has_symbol_support_x_esm &&
/* eslint-disable-next-line compat/compat */
is_symbol_default()(Symbol.toStringTag));


// CONCATENATED MODULE: ./node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function require_object_coercible_x_esm_requireObjectCoercible(value) {
  if (isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/to-string-x/dist/to-string-x.esm.js

var to_string_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var to_string_x_esm_castString = to_string_x_esm_ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

function to_string_x_esm_ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(to_string_x_esm_ERROR_MESSAGE);
  }

  return to_string_x_esm_castString(value);
}


// CONCATENATED MODULE: ./node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

function require_coercible_to_string_x_esm_requireCoercibleToString(value) {
  return to_string_x_esm_ToString(require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var white_space_x_esm_list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var white_space_x_esm_stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var white_space_x_esm_stringES2018 = '';
var dist_white_space_x_esm_length = white_space_x_esm_list.length;

for (var dist_white_space_x_esm_i = 0; dist_white_space_x_esm_i < dist_white_space_x_esm_length; dist_white_space_x_esm_i += 1) {
  if (white_space_x_esm_list[dist_white_space_x_esm_i].es2016) {
    white_space_x_esm_stringES2016 += white_space_x_esm_list[dist_white_space_x_esm_i].string;
  }

  if (white_space_x_esm_list[dist_white_space_x_esm_i].es2018) {
    white_space_x_esm_stringES2018 += white_space_x_esm_list[dist_white_space_x_esm_i].string;
  }
}

var white_space_x_esm_string2018 = white_space_x_esm_stringES2018;
/* harmony default export */ var dist_white_space_x_esm = (white_space_x_esm_string2018);
var white_space_x_esm_string2016 = white_space_x_esm_stringES2016;


// CONCATENATED MODULE: ./node_modules/trim-left-x/dist/trim-left-x.esm.js


var dist_trim_left_x_esm_EMPTY_STRING = '';
var trim_left_x_esm_RegExpCtr = /none/.constructor;
var trim_left_x_esm_reLeft2016 = new trim_left_x_esm_RegExpCtr("^[".concat(white_space_x_esm_string2016, "]+"));
var trim_left_x_esm_reLeft = new trim_left_x_esm_RegExpCtr("^[".concat(dist_white_space_x_esm, "]+"));
var trim_left_x_esm_replace = dist_trim_left_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trim_left_x_esm_trimLeft2016(string) {
  return trim_left_x_esm_replace.call(require_coercible_to_string_x_esm_requireCoercibleToString(string), trim_left_x_esm_reLeft2016, dist_trim_left_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trim_left_x_esm_trimLeft2018(string) {
  return trim_left_x_esm_replace.call(require_coercible_to_string_x_esm_requireCoercibleToString(string), trim_left_x_esm_reLeft, dist_trim_left_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/trim-right-x/dist/trim-right-x.esm.js


var dist_trim_right_x_esm_EMPTY_STRING = '';
var dist_trim_right_x_esm_RegExpCtr = /none/.constructor;
var trim_right_x_esm_reRight2016 = new dist_trim_right_x_esm_RegExpCtr("[".concat(white_space_x_esm_string2016, "]+$"));
var trim_right_x_esm_reRight2018 = new dist_trim_right_x_esm_RegExpCtr("[".concat(dist_white_space_x_esm, "]+$"));
var dist_trim_right_x_esm_replace = dist_trim_right_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trim_right_x_esm_trimRight2016(string) {
  return dist_trim_right_x_esm_replace.call(require_coercible_to_string_x_esm_requireCoercibleToString(string), trim_right_x_esm_reRight2016, dist_trim_right_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trim_right_x_esm_trimRight2018(string) {
  return dist_trim_right_x_esm_replace.call(require_coercible_to_string_x_esm_requireCoercibleToString(string), trim_right_x_esm_reRight2018, dist_trim_right_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim_x_esm_trim2016(string) {
  return trim_left_x_esm_trimLeft2016(trim_right_x_esm_trimRight2016(string));
}
/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim_x_esm_trim2018(string) {
  return trim_left_x_esm_trimLeft2018(trim_right_x_esm_trimRight2018(string));
}


// CONCATENATED MODULE: ./node_modules/normalize-space-x/dist/normalize-space-x.esm.js


var normalize_space_x_esm_SPACE = ' ';
var dist_normalize_space_x_esm_RegExpCtr = /none/.constructor;
var normalize_space_x_esm_reNormalize2016 = new dist_normalize_space_x_esm_RegExpCtr("[".concat(white_space_x_esm_string2016, "]+"), 'g');
var normalize_space_x_esm_reNormalize2018 = new dist_normalize_space_x_esm_RegExpCtr("[".concat(dist_white_space_x_esm, "]+"), 'g');
var dist_normalize_space_x_esm_replace = normalize_space_x_esm_SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */

function normalize_space_x_esm_normalizeSpace2016(string) {
  return dist_normalize_space_x_esm_replace.call(trim_x_esm_trim2016(string), normalize_space_x_esm_reNormalize2016, normalize_space_x_esm_SPACE);
}
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

function normalize_space_x_esm_normalizeSpace2018(string) {
  return dist_normalize_space_x_esm_replace.call(trim_x_esm_trim2018(string), normalize_space_x_esm_reNormalize2018, normalize_space_x_esm_SPACE);
}


// CONCATENATED MODULE: ./node_modules/replace-comments-x/dist/replace-comments-x.esm.js


var dist_replace_comments_x_esm_EMPTY_STRING = '';
var replace_comments_x_esm_STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var dist_replace_comments_x_esm_replace = dist_replace_comments_x_esm_EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

function replace_comments_x_esm_replaceComments(string, replacement) {
  return dist_replace_comments_x_esm_replace.call(require_coercible_to_string_x_esm_requireCoercibleToString(string), replace_comments_x_esm_STRIP_COMMENTS, arguments.length > 1 ? to_string_x_esm_ToString(replacement) : dist_replace_comments_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/is-function-x/dist/is-function-x.esm.js
var dist_is_function_x_esm_this = undefined;

function dist_is_function_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }









var dist_is_function_x_esm_SPACE = ' ';
var is_function_x_esm_fToString = Function.prototype.toString;
var is_function_x_esm_funcTag = '[object Function]';
var is_function_x_esm_genTag = '[object GeneratorFunction]';
var is_function_x_esm_asyncTag = '[object AsyncFunction]';
var is_function_x_esm_ctrRx = /^class /;
var is_function_x_esm_test = is_function_x_esm_ctrRx.test;
var is_function_x_esm_hasNativeClass = attempt_x_esm_attempt(function () {
  dist_is_function_x_esm_newArrowCheck(this, dist_is_function_x_esm_this);

  /* eslint-disable-next-line no-new-func */
  return Function('"use strict"; return class My {};')();
}.bind(undefined)).threw === false;

var is_function_x_esm_testClassstring = function _testClassstring(value) {
  return is_function_x_esm_test.call(is_function_x_esm_ctrRx, normalize_space_x_esm_normalizeSpace2018(replace_comments_x_esm_replaceComments(is_function_x_esm_fToString.call(value), dist_is_function_x_esm_SPACE)));
};

var is_function_x_esm_isES6ClassFn = function isES6ClassFunc(value) {
  var result = attempt_x_esm_attempt(is_function_x_esm_testClassstring, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var is_function_x_esm_tryFuncToString = function funcToString(value, allowClass) {
  if (is_function_x_esm_hasNativeClass && allowClass === false && is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  return attempt_x_esm_attempt.call(value, is_function_x_esm_fToString).threw === false;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


function is_function_x_esm_isFunction(value, allowClass) {
  if (node_modules_is_primitive_default()(value)) {
    return false;
  }

  if (dist_has_to_string_tag_x_esm) {
    return is_function_x_esm_tryFuncToString(value, to_boolean_x_esm_toBoolean(allowClass));
  }

  if (is_function_x_esm_hasNativeClass && is_falsey_x_esm_isFalsey(allowClass) && is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  var strTag = to_string_tag_x_esm_toStringTag(value);
  return strTag === is_function_x_esm_funcTag || strTag === is_function_x_esm_genTag || strTag === is_function_x_esm_asyncTag;
}


// CONCATENATED MODULE: ./node_modules/to-primitive-x/dist/to-primitive-x.esm.js







var to_primitive_x_esm_ZERO = 0;
var to_primitive_x_esm_ONE = 1;
/* eslint-disable-next-line no-void */

var to_primitive_x_esm_UNDEFINED = void to_primitive_x_esm_ZERO;
var to_primitive_x_esm_NUMBER = 'number';
var to_primitive_x_esm_STRING = 'string';
var to_primitive_x_esm_DEFAULT = 'default';
/** @type {StringConstructor} */

var to_primitive_x_esm_StringCtr = to_primitive_x_esm_STRING.constructor;
/** @type {NumberConstructor} */

var to_primitive_x_esm_NumberCtr = to_primitive_x_esm_ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var to_primitive_x_esm_symToPrimitive = dist_has_symbol_support_x_esm && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var to_primitive_x_esm_symValueOf = dist_has_symbol_support_x_esm && Symbol.prototype.valueOf;
var to_primitive_x_esm_toStringOrder = ['toString', 'valueOf'];
var to_primitive_x_esm_toNumberOrder = ['valueOf', 'toString'];
var to_primitive_x_esm_orderLength = 2;
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */

var to_primitive_x_esm_ordinaryToPrimitive = function _ordinaryToPrimitive(ordinary, hint) {
  require_object_coercible_x_esm_requireObjectCoercible(ordinary);

  if (typeof hint !== 'string' || hint !== to_primitive_x_esm_NUMBER && hint !== to_primitive_x_esm_STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === to_primitive_x_esm_STRING ? to_primitive_x_esm_toStringOrder : to_primitive_x_esm_toNumberOrder;
  var method;
  var result;

  for (var i = to_primitive_x_esm_ZERO; i < to_primitive_x_esm_orderLength; i += to_primitive_x_esm_ONE) {
    method = ordinary[methodNames[i]];

    if (is_function_x_esm_isFunction(method)) {
      result = method.call(ordinary);

      if (node_modules_is_primitive_default()(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var to_primitive_x_esm_getMethod = function _getMethod(object, property) {
  var func = object[property];

  if (isNil(func) === false) {
    if (is_function_x_esm_isFunction(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return to_primitive_x_esm_UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var to_primitive_x_esm_getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === to_primitive_x_esm_StringCtr) {
      return to_primitive_x_esm_STRING;
    }

    if (value === to_primitive_x_esm_NumberCtr) {
      return to_primitive_x_esm_NUMBER;
    }
  }

  return to_primitive_x_esm_DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var dist_to_primitive_x_esm_getExoticToPrim = function getExoticToPrim(value) {
  if (dist_has_symbol_support_x_esm) {
    if (to_primitive_x_esm_symToPrimitive) {
      return to_primitive_x_esm_getMethod(value, to_primitive_x_esm_symToPrimitive);
    }

    if (is_symbol_default()(value)) {
      return to_primitive_x_esm_symValueOf;
    }
  }

  return to_primitive_x_esm_UNDEFINED;
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {NumberConstructor|StringConstructor} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


function to_primitive_x_esm_toPrimitive(input, preferredType) {
  if (node_modules_is_primitive_default()(input)) {
    return input;
  }

  var hint = to_primitive_x_esm_getHint(preferredType, arguments.length > to_primitive_x_esm_ONE);
  var exoticToPrim = dist_to_primitive_x_esm_getExoticToPrim(input);

  if (typeof exoticToPrim !== 'undefined') {
    var result = exoticToPrim.call(input, hint);

    if (node_modules_is_primitive_default()(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  var newHint = hint === to_primitive_x_esm_DEFAULT && (is_date_object_default()(input) || is_symbol_default()(input)) ? to_primitive_x_esm_STRING : hint;
  return to_primitive_x_esm_ordinaryToPrimitive(input, newHint === to_primitive_x_esm_DEFAULT ? to_primitive_x_esm_NUMBER : newHint);
}


// CONCATENATED MODULE: ./node_modules/nan-x/dist/nan-x.esm.js
/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 */
/* harmony default export */ var dist_nan_x_esm = (0 / 0);


// CONCATENATED MODULE: ./node_modules/parse-int-x/dist/parse-int-x.esm.js



var parse_int_x_esm_nativeParseInt = parseInt;
/**  @type {Function} */

var parse_int_x_esm_castNumber = 0 .constructor; // noinspection JSPotentiallyInvalidConstructorUsage

var parse_int_x_esm_ref = '',
    parse_int_x_esm_charAt = parse_int_x_esm_ref.charAt;
var parse_int_x_esm_hexRegex = /^[-+]?0[xX]/;
var dist_parse_int_x_esm_test = parse_int_x_esm_hexRegex.test;
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2016).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function parse_int_x_esm_parseInt2016(string, radix) {
  var str = trim_left_x_esm_trimLeft2016(to_string_x_esm_ToString(string));
  return parse_int_x_esm_nativeParseInt(str, parse_int_x_esm_castNumber(radix) || (dist_parse_int_x_esm_test.call(parse_int_x_esm_hexRegex, str) ? 16 : 10));
}
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2018).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function parse_int_x_esm_parseInt2018(string, radix) {
  var str = trim_left_x_esm_trimLeft2018(to_string_x_esm_ToString(string));

  if (parse_int_x_esm_charAt.call(str, 0) === "\u180E") {
    return dist_nan_x_esm;
  }

  return parse_int_x_esm_nativeParseInt(str, parse_int_x_esm_castNumber(radix) || (dist_parse_int_x_esm_test.call(parse_int_x_esm_hexRegex, str) ? 16 : 10));
}


// CONCATENATED MODULE: ./node_modules/to-number-x/dist/to-number-x.esm.js





var to_number_x_esm_binaryRadix = 2;
var to_number_x_esm_octalRadix = 8;
var to_number_x_esm_testCharsCount = 2;
var dist_to_number_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
/** @type {NumberConstructor} */

var dist_to_number_x_esm_castNumber = to_number_x_esm_testCharsCount.constructor;
var to_number_x_esm_pStrSlice = dist_to_number_x_esm_ERROR_MESSAGE.slice;
var to_number_x_esm_binaryRegex = /^0b[01]+$/i;
var to_number_x_esm_RegExpConstructor = to_number_x_esm_binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var dist_to_number_x_esm_test = to_number_x_esm_binaryRegex.test;

var to_number_x_esm_isBinary = function _isBinary(value) {
  return dist_to_number_x_esm_test.call(to_number_x_esm_binaryRegex, value);
};

var to_number_x_esm_octalRegex = /^0o[0-7]+$/i;

var to_number_x_esm_isOctal = function _isOctal(value) {
  return dist_to_number_x_esm_test.call(to_number_x_esm_octalRegex, value);
};

var to_number_x_esm_nonWSregex2016 = new to_number_x_esm_RegExpConstructor("[\x85\u200B\uFFFE]", 'g');

var to_number_x_esm_hasNonWS2016 = function _hasNonWS(value) {
  return dist_to_number_x_esm_test.call(to_number_x_esm_nonWSregex2016, value);
};

var to_number_x_esm_nonWSregex2018 = new to_number_x_esm_RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var to_number_x_esm_hasNonWS2018 = function _hasNonWS(value) {
  return dist_to_number_x_esm_test.call(to_number_x_esm_nonWSregex2018, value);
};

var to_number_x_esm_invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var to_number_x_esm_isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return dist_to_number_x_esm_test.call(to_number_x_esm_invalidHexLiteral, value);
};
/**
 * This method converts argument to a value of type Number. (ES2016).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


function to_number_x_esm_toNumber2016(argument) {
  var value = to_primitive_x_esm_toPrimitive(argument, Number);

  if (is_symbol_default()(value)) {
    throw new TypeError(dist_to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (to_number_x_esm_isBinary(value)) {
      return to_number_x_esm_toNumber2016(parse_int_x_esm_parseInt2016(to_number_x_esm_pStrSlice.call(value, to_number_x_esm_testCharsCount), to_number_x_esm_binaryRadix));
    }

    if (to_number_x_esm_isOctal(value)) {
      return to_number_x_esm_toNumber2016(parse_int_x_esm_parseInt2016(to_number_x_esm_pStrSlice.call(value, to_number_x_esm_testCharsCount), to_number_x_esm_octalRadix));
    }

    if (to_number_x_esm_hasNonWS2016(value) || to_number_x_esm_isInvalidHexLiteral(value)) {
      return dist_nan_x_esm;
    }

    var trimmed = trim_x_esm_trim2016(value);

    if (trimmed !== value) {
      return to_number_x_esm_toNumber2016(trimmed);
    }
  }

  return dist_to_number_x_esm_castNumber(value);
}
/**
 * This method converts argument to a value of type Number. (ES2018).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */

function to_number_x_esm_toNumber2018(argument) {
  var value = to_primitive_x_esm_toPrimitive(argument, dist_to_number_x_esm_castNumber);

  if (is_symbol_default()(value)) {
    throw new TypeError(dist_to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (to_number_x_esm_isBinary(value)) {
      return to_number_x_esm_toNumber2018(parse_int_x_esm_parseInt2018(to_number_x_esm_pStrSlice.call(value, to_number_x_esm_testCharsCount), to_number_x_esm_binaryRadix));
    }

    if (to_number_x_esm_isOctal(value)) {
      return to_number_x_esm_toNumber2018(parse_int_x_esm_parseInt2018(to_number_x_esm_pStrSlice.call(value, to_number_x_esm_testCharsCount), to_number_x_esm_octalRadix));
    }

    if (to_number_x_esm_hasNonWS2018(value) || to_number_x_esm_isInvalidHexLiteral(value)) {
      return dist_nan_x_esm;
    }

    var trimmed = trim_x_esm_trim2018(value);

    if (trimmed !== value) {
      return to_number_x_esm_toNumber2018(trimmed);
    }
  }

  return dist_to_number_x_esm_castNumber(value);
}


// CONCATENATED MODULE: ./node_modules/is-nan-x/dist/is-nan-x.esm.js
/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} [value] - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 */
function dist_is_nan_x_esm_isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
}


// CONCATENATED MODULE: ./node_modules/infinity-x/dist/infinity-x.esm.js
/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 */
/* harmony default export */ var dist_infinity_x_esm = (1 / 0);


// CONCATENATED MODULE: ./node_modules/is-finite-x/dist/is-finite-x.esm.js


/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} [number] - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

function dist_is_finite_x_esm_isFinite(number) {
  return typeof number === 'number' && dist_is_nan_x_esm_isNaN(number) === false && number !== dist_infinity_x_esm && number !== -dist_infinity_x_esm;
}


// CONCATENATED MODULE: ./node_modules/math-sign-x/dist/math-sign-x.esm.js


/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2016).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function math_sign_x_esm_sign2016(x) {
  var n = to_number_x_esm_toNumber2016(x);

  if (n === 0 || dist_is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}
/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2018).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function math_sign_x_esm_sign2018(x) {
  var n = to_number_x_esm_toNumber2018(x);

  if (n === 0 || dist_is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}


// CONCATENATED MODULE: ./node_modules/to-integer-x/dist/to-integer-x.esm.js




var to_integer_x_esm_abs = Math.abs,
    to_integer_x_esm_floor = Math.floor;
/**
 * Converts `value` to an integer. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function to_integer_x_esm_toInteger2016(value) {
  var number = to_number_x_esm_toNumber2016(value);

  if (dist_is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || dist_is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return math_sign_x_esm_sign2016(number) * to_integer_x_esm_floor(to_integer_x_esm_abs(number));
}
/**
 * Converts `value` to an integer. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function to_integer_x_esm_toInteger2018(value) {
  var number = to_number_x_esm_toNumber2018(value);

  if (dist_is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || dist_is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return math_sign_x_esm_sign2018(number) * to_integer_x_esm_floor(to_integer_x_esm_abs(number));
}


// EXTERNAL MODULE: ./node_modules/max-safe-integer/index.js
var node_modules_max_safe_integer = __webpack_require__(12);
var node_modules_max_safe_integer_default = /*#__PURE__*/__webpack_require__.n(node_modules_max_safe_integer);

// CONCATENATED MODULE: ./node_modules/to-length-x/dist/to-length-x.esm.js


/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function to_length_x_esm_toLength2016(value) {
  var len = to_integer_x_esm_toInteger2016(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > node_modules_max_safe_integer_default.a) {
    return node_modules_max_safe_integer_default.a;
  }

  return len;
}
/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function to_length_x_esm_toLength2018(value) {
  var len = to_integer_x_esm_toInteger2018(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > node_modules_max_safe_integer_default.a) {
    return node_modules_max_safe_integer_default.a;
  }

  return len;
}


// CONCATENATED MODULE: ./node_modules/to-object-x/dist/to-object-x.esm.js

var to_object_x_esm_castObject = {}.constructor;
/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!object} The `value` converted to an object.
 */

function to_object_x_esm_toObject(value) {
  return to_object_x_esm_castObject(require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/to-string-symbols-supported-x/dist/to-string-symbols-supported-x.esm.js


/* eslint-disable-next-line compat/compat */

var to_string_symbols_supported_x_esm_pToString = dist_has_symbol_support_x_esm && Symbol.prototype.toString;
var to_string_symbols_supported_x_esm_isSymbolFn = typeof to_string_symbols_supported_x_esm_pToString === 'function' && is_symbol_default.a;
/** @type {Function} */

var dist_to_string_symbols_supported_x_esm_castString = ''.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String,
 * however the specification states that if the argument is a Symbol then a
 * 'TypeError' is thrown. This version also allows Symbols be converted to
 * a string. Other uncoercible exotics will still throw though.
 *
 * @param {*} [value] - The value to convert to a string.
 * @returns {string} The converted value.
 */

function to_string_symbols_supported_x_esm_toStringSymbolsSupported(value) {
  return to_string_symbols_supported_x_esm_isSymbolFn && to_string_symbols_supported_x_esm_isSymbolFn(value) ? to_string_symbols_supported_x_esm_pToString.call(value) : dist_to_string_symbols_supported_x_esm_castString(value);
}


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/dist/assert-is-function-x.esm.js



/**
 * Tests `callback` to see if it is a function, throws a `TypeError` if it is
 * not. Otherwise returns the `callback`.
 *
 * @param {*} callback - The argument to be tested.
 * @throws {TypeError} Throws if `callback` is not a function.
 * @returns {*} Returns `callback` if it is function.
 */

function assert_is_function_x_esm_assertIsFunction(callback) {
  if (is_function_x_esm_isFunction(callback) === false) {
    var msg = node_modules_is_primitive_default()(callback) ? to_string_symbols_supported_x_esm_toStringSymbolsSupported(callback) : '#<Object>';
    throw new TypeError("".concat(msg, " is not a function"));
  }

  return callback;
}


// CONCATENATED MODULE: ./node_modules/array-some-x/dist/array-some-x.esm.js
var array_some_x_esm_this = undefined;

function array_some_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }






/** @type {BooleanConstructor} */

var array_some_x_esm_castBoolean = true.constructor;
/** @type {ObjectConstructor} */

var array_some_x_esm_castObject = {}.constructor;
var ns = [].some;
var nativeSome = typeof ns === 'function' && ns;
var array_some_x_esm_isWorking;

if (nativeSome) {
  var array_some_x_esm_spy = 0;
  var array_some_x_esm_res = attempt_x_esm_attempt.call([1, 2], nativeSome, function (item) {
    array_some_x_esm_newArrowCheck(this, array_some_x_esm_this);

    array_some_x_esm_spy += item;
    return false;
  }.bind(undefined));
  array_some_x_esm_isWorking = array_some_x_esm_res.threw === false && array_some_x_esm_res.value === false && array_some_x_esm_spy === 3;

  if (array_some_x_esm_isWorking) {
    array_some_x_esm_spy = '';
    array_some_x_esm_res = attempt_x_esm_attempt.call(array_some_x_esm_castObject('abc'), nativeSome, function (item, index) {
      array_some_x_esm_newArrowCheck(this, array_some_x_esm_this);

      array_some_x_esm_spy += item;
      return index === 1;
    }.bind(undefined));
    array_some_x_esm_isWorking = array_some_x_esm_res.threw === false && array_some_x_esm_res.value === true && array_some_x_esm_spy === 'ab';
  }

  if (array_some_x_esm_isWorking) {
    array_some_x_esm_spy = 0;
    array_some_x_esm_res = attempt_x_esm_attempt.call(function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }(1, 2, 3), nativeSome, function (item, index) {
      array_some_x_esm_newArrowCheck(this, array_some_x_esm_this);

      array_some_x_esm_spy += item;
      return index === 2;
    }.bind(undefined));
    array_some_x_esm_isWorking = array_some_x_esm_res.threw === false && array_some_x_esm_res.value === true && array_some_x_esm_spy === 6;
  }

  if (array_some_x_esm_isWorking) {
    array_some_x_esm_spy = 0;
    array_some_x_esm_res = attempt_x_esm_attempt.call({
      0: 1,
      1: 2,
      3: 3,
      4: 4,
      length: 4
    }, nativeSome, function (item) {
      array_some_x_esm_newArrowCheck(this, array_some_x_esm_this);

      array_some_x_esm_spy += item;
      return false;
    }.bind(undefined));
    array_some_x_esm_isWorking = array_some_x_esm_res.threw === false && array_some_x_esm_res.value === false && array_some_x_esm_spy === 6;
  }

  if (array_some_x_esm_isWorking) {
    var array_some_x_esm_doc = typeof document !== 'undefined' && document;

    if (array_some_x_esm_doc) {
      array_some_x_esm_spy = null;
      var array_some_x_esm_fragment = array_some_x_esm_doc.createDocumentFragment();
      var array_some_x_esm_div = array_some_x_esm_doc.createElement('div');
      array_some_x_esm_fragment.appendChild(array_some_x_esm_div);
      array_some_x_esm_res = attempt_x_esm_attempt.call(array_some_x_esm_fragment.childNodes, nativeSome, function (item) {
        array_some_x_esm_newArrowCheck(this, array_some_x_esm_this);

        array_some_x_esm_spy = item;
        return item;
      }.bind(undefined));
      array_some_x_esm_isWorking = array_some_x_esm_res.threw === false && array_some_x_esm_res.value === true && array_some_x_esm_spy === array_some_x_esm_div;
    }
  }

  if (array_some_x_esm_isWorking) {
    var array_some_x_esm_isStrict = function getIsStrict() {
      /* eslint-disable-next-line babel/no-invalid-this */
      return array_some_x_esm_castBoolean(this) === false;
    }();

    if (array_some_x_esm_isStrict) {
      array_some_x_esm_spy = null;
      array_some_x_esm_res = attempt_x_esm_attempt.call([1], nativeSome, function () {
        array_some_x_esm_newArrowCheck(this, array_some_x_esm_this);

        /* eslint-disable-next-line babel/no-invalid-this */
        array_some_x_esm_spy = typeof this === 'string';
      }.bind(undefined), 'x');
      array_some_x_esm_isWorking = array_some_x_esm_res.threw === false && array_some_x_esm_res.value === false && array_some_x_esm_spy === true;
    }
  }

  if (array_some_x_esm_isWorking) {
    array_some_x_esm_spy = {};
    var array_some_x_esm_fn = ['return nativeSome.call("foo", function (_, __, context) {', 'if (Boolean(context) === false || typeof context !== "object") {', 'spy.value = true;}});'].join('');
    /* eslint-disable-next-line no-new-func */

    array_some_x_esm_res = attempt_x_esm_attempt(Function('nativeSome', 'spy', array_some_x_esm_fn), nativeSome, array_some_x_esm_spy);
    array_some_x_esm_isWorking = array_some_x_esm_res.threw === false && array_some_x_esm_res.value === false && array_some_x_esm_spy.value !== true;
  }
}
/**
 * This method tests whether some element in the array passes the test
 * implemented by the provided function.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to test for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {boolean} `true` if the callback function returns a truthy value for
 *  any array element; otherwise, `false`.
 */


var $some;

if (nativeSome) {
  $some = function some(array, callBack
  /* , thisArg */
  ) {
    var args = [callBack];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return nativeSome.apply(array, args);
  };
} else {
  // ES5 15.4.4.17
  // http://es5.github.com/#x15.4.4.17
  // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
  $some = function some(array, callBack
  /* , thisArg */
  ) {
    var object = to_object_x_esm_toObject(array); // If no callback function or if callback is not a callable function

    assert_is_function_x_esm_assertIsFunction(callBack);
    var iterable = split_if_boxed_bug_x_esm_splitIfBoxedBug(object);
    var length = to_length_x_esm_toLength2018(iterable.length);
    var thisArg;

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      thisArg = arguments[2];
    }

    var noThis = typeof thisArg === 'undefined';

    for (var i = 0; i < length; i += 1) {
      if (i in iterable) {
        var item = iterable[i];

        if (noThis ? callBack(item, i, object) : callBack.call(thisArg, item, i, object)) {
          return true;
        }
      }
    }

    return false;
  };
}

var s = $some;
/* harmony default export */ var array_some_x_esm = (s);


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function dist_require_object_coercible_x_esm_requireObjectCoercible(value) {
  if (isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/to-object-x/dist/to-object-x.esm.js

var dist_to_object_x_esm_castObject = {}.constructor;
/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!object} The `value` converted to an object.
 */

function dist_to_object_x_esm_toObject(value) {
  return dist_to_object_x_esm_castObject(dist_require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/attempt-x/dist/attempt-x.esm.js
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
function dist_attempt_x_esm_attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
}


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var has_symbol_support_x_dist_has_symbol_support_x_esm_this = undefined;

function dist_has_symbol_support_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var dist_has_symbol_support_x_esm_hasSymbolSupport = dist_attempt_x_esm_attempt(function () {
  dist_has_symbol_support_x_esm_newArrowCheck(this, has_symbol_support_x_dist_has_symbol_support_x_esm_this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_symbol_support_x_dist_has_symbol_support_x_esm = (dist_has_symbol_support_x_esm_hasSymbolSupport.threw === false && dist_has_symbol_support_x_esm_hasSymbolSupport.value === true);


// EXTERNAL MODULE: ./node_modules/array-like-slice-x/node_modules/is-primitive/index.js
var array_like_slice_x_node_modules_is_primitive = __webpack_require__(6);
var array_like_slice_x_node_modules_is_primitive_default = /*#__PURE__*/__webpack_require__.n(array_like_slice_x_node_modules_is_primitive);

// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
function dist_to_boolean_x_esm_toBoolean(value) {
  return !!value;
}


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/is-falsey-x/dist/is-falsey-x.esm.js

/**
 * This method tests if a given value is falsey.
 *
 * @param {*} [value] - The value to test.
 * @returns {boolean} `true` if the value is falsey: otherwise `false`.
 */

function dist_is_falsey_x_esm_isFalsey(value) {
  return !dist_to_boolean_x_esm_toBoolean(value);
}


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var dist_to_string_tag_x_esm_nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

function dist_to_string_tag_x_esm_toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return dist_to_string_tag_x_esm_nativeObjectToString.call(value);
}


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_to_string_tag_x_dist_has_to_string_tag_x_esm = (has_symbol_support_x_dist_has_symbol_support_x_esm &&
/* eslint-disable-next-line compat/compat */
is_symbol_default()(Symbol.toStringTag));


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/to-string-x/dist/to-string-x.esm.js

var dist_to_string_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var dist_to_string_x_esm_castString = dist_to_string_x_esm_ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

function dist_to_string_x_esm_ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(dist_to_string_x_esm_ERROR_MESSAGE);
  }

  return dist_to_string_x_esm_castString(value);
}


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

function dist_require_coercible_to_string_x_esm_requireCoercibleToString(value) {
  return dist_to_string_x_esm_ToString(dist_require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var dist_white_space_x_esm_list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var dist_white_space_x_esm_stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var dist_white_space_x_esm_stringES2018 = '';
var white_space_x_dist_white_space_x_esm_length = dist_white_space_x_esm_list.length;

for (var white_space_x_dist_white_space_x_esm_i = 0; white_space_x_dist_white_space_x_esm_i < white_space_x_dist_white_space_x_esm_length; white_space_x_dist_white_space_x_esm_i += 1) {
  if (dist_white_space_x_esm_list[white_space_x_dist_white_space_x_esm_i].es2016) {
    dist_white_space_x_esm_stringES2016 += dist_white_space_x_esm_list[white_space_x_dist_white_space_x_esm_i].string;
  }

  if (dist_white_space_x_esm_list[white_space_x_dist_white_space_x_esm_i].es2018) {
    dist_white_space_x_esm_stringES2018 += dist_white_space_x_esm_list[white_space_x_dist_white_space_x_esm_i].string;
  }
}

var dist_white_space_x_esm_string2018 = dist_white_space_x_esm_stringES2018;
/* harmony default export */ var white_space_x_dist_white_space_x_esm = (dist_white_space_x_esm_string2018);
var dist_white_space_x_esm_string2016 = dist_white_space_x_esm_stringES2016;


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/trim-left-x/dist/trim-left-x.esm.js


var trim_left_x_dist_trim_left_x_esm_EMPTY_STRING = '';
var dist_trim_left_x_esm_RegExpCtr = /none/.constructor;
var dist_trim_left_x_esm_reLeft2016 = new dist_trim_left_x_esm_RegExpCtr("^[".concat(dist_white_space_x_esm_string2016, "]+"));
var dist_trim_left_x_esm_reLeft = new dist_trim_left_x_esm_RegExpCtr("^[".concat(white_space_x_dist_white_space_x_esm, "]+"));
var dist_trim_left_x_esm_replace = trim_left_x_dist_trim_left_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function dist_trim_left_x_esm_trimLeft2016(string) {
  return dist_trim_left_x_esm_replace.call(dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), dist_trim_left_x_esm_reLeft2016, trim_left_x_dist_trim_left_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function dist_trim_left_x_esm_trimLeft2018(string) {
  return dist_trim_left_x_esm_replace.call(dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), dist_trim_left_x_esm_reLeft, trim_left_x_dist_trim_left_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/trim-right-x/dist/trim-right-x.esm.js


var trim_right_x_dist_trim_right_x_esm_EMPTY_STRING = '';
var trim_right_x_dist_trim_right_x_esm_RegExpCtr = /none/.constructor;
var dist_trim_right_x_esm_reRight2016 = new trim_right_x_dist_trim_right_x_esm_RegExpCtr("[".concat(dist_white_space_x_esm_string2016, "]+$"));
var dist_trim_right_x_esm_reRight2018 = new trim_right_x_dist_trim_right_x_esm_RegExpCtr("[".concat(white_space_x_dist_white_space_x_esm, "]+$"));
var trim_right_x_dist_trim_right_x_esm_replace = trim_right_x_dist_trim_right_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function dist_trim_right_x_esm_trimRight2016(string) {
  return trim_right_x_dist_trim_right_x_esm_replace.call(dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), dist_trim_right_x_esm_reRight2016, trim_right_x_dist_trim_right_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function dist_trim_right_x_esm_trimRight2018(string) {
  return trim_right_x_dist_trim_right_x_esm_replace.call(dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), dist_trim_right_x_esm_reRight2018, trim_right_x_dist_trim_right_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function dist_trim_x_esm_trim2016(string) {
  return dist_trim_left_x_esm_trimLeft2016(dist_trim_right_x_esm_trimRight2016(string));
}
/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function dist_trim_x_esm_trim2018(string) {
  return dist_trim_left_x_esm_trimLeft2018(dist_trim_right_x_esm_trimRight2018(string));
}


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/normalize-space-x/dist/normalize-space-x.esm.js


var dist_normalize_space_x_esm_SPACE = ' ';
var normalize_space_x_dist_normalize_space_x_esm_RegExpCtr = /none/.constructor;
var dist_normalize_space_x_esm_reNormalize2016 = new normalize_space_x_dist_normalize_space_x_esm_RegExpCtr("[".concat(dist_white_space_x_esm_string2016, "]+"), 'g');
var dist_normalize_space_x_esm_reNormalize2018 = new normalize_space_x_dist_normalize_space_x_esm_RegExpCtr("[".concat(white_space_x_dist_white_space_x_esm, "]+"), 'g');
var normalize_space_x_dist_normalize_space_x_esm_replace = dist_normalize_space_x_esm_SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */

function dist_normalize_space_x_esm_normalizeSpace2016(string) {
  return normalize_space_x_dist_normalize_space_x_esm_replace.call(dist_trim_x_esm_trim2016(string), dist_normalize_space_x_esm_reNormalize2016, dist_normalize_space_x_esm_SPACE);
}
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

function dist_normalize_space_x_esm_normalizeSpace2018(string) {
  return normalize_space_x_dist_normalize_space_x_esm_replace.call(dist_trim_x_esm_trim2018(string), dist_normalize_space_x_esm_reNormalize2018, dist_normalize_space_x_esm_SPACE);
}


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/replace-comments-x/dist/replace-comments-x.esm.js


var replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING = '';
var dist_replace_comments_x_esm_STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var replace_comments_x_dist_replace_comments_x_esm_replace = replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

function dist_replace_comments_x_esm_replaceComments(string, replacement) {
  return replace_comments_x_dist_replace_comments_x_esm_replace.call(dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), dist_replace_comments_x_esm_STRIP_COMMENTS, arguments.length > 1 ? dist_to_string_x_esm_ToString(replacement) : replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/is-function-x/dist/is-function-x.esm.js
var is_function_x_dist_is_function_x_esm_this = undefined;

function is_function_x_dist_is_function_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }









var is_function_x_dist_is_function_x_esm_SPACE = ' ';
var dist_is_function_x_esm_fToString = Function.prototype.toString;
var dist_is_function_x_esm_funcTag = '[object Function]';
var dist_is_function_x_esm_genTag = '[object GeneratorFunction]';
var dist_is_function_x_esm_asyncTag = '[object AsyncFunction]';
var dist_is_function_x_esm_ctrRx = /^class /;
var dist_is_function_x_esm_test = dist_is_function_x_esm_ctrRx.test;
var dist_is_function_x_esm_hasNativeClass = dist_attempt_x_esm_attempt(function () {
  is_function_x_dist_is_function_x_esm_newArrowCheck(this, is_function_x_dist_is_function_x_esm_this);

  /* eslint-disable-next-line no-new-func */
  return Function('"use strict"; return class My {};')();
}.bind(undefined)).threw === false;

var dist_is_function_x_esm_testClassstring = function _testClassstring(value) {
  return dist_is_function_x_esm_test.call(dist_is_function_x_esm_ctrRx, dist_normalize_space_x_esm_normalizeSpace2018(dist_replace_comments_x_esm_replaceComments(dist_is_function_x_esm_fToString.call(value), is_function_x_dist_is_function_x_esm_SPACE)));
};

var dist_is_function_x_esm_isES6ClassFn = function isES6ClassFunc(value) {
  var result = dist_attempt_x_esm_attempt(dist_is_function_x_esm_testClassstring, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var dist_is_function_x_esm_tryFuncToString = function funcToString(value, allowClass) {
  if (dist_is_function_x_esm_hasNativeClass && allowClass === false && dist_is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  return dist_attempt_x_esm_attempt.call(value, dist_is_function_x_esm_fToString).threw === false;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


function dist_is_function_x_esm_isFunction(value, allowClass) {
  if (array_like_slice_x_node_modules_is_primitive_default()(value)) {
    return false;
  }

  if (has_to_string_tag_x_dist_has_to_string_tag_x_esm) {
    return dist_is_function_x_esm_tryFuncToString(value, dist_to_boolean_x_esm_toBoolean(allowClass));
  }

  if (dist_is_function_x_esm_hasNativeClass && dist_is_falsey_x_esm_isFalsey(allowClass) && dist_is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  var strTag = dist_to_string_tag_x_esm_toStringTag(value);
  return strTag === dist_is_function_x_esm_funcTag || strTag === dist_is_function_x_esm_genTag || strTag === dist_is_function_x_esm_asyncTag;
}


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/to-primitive-x/dist/to-primitive-x.esm.js







var dist_to_primitive_x_esm_ZERO = 0;
var dist_to_primitive_x_esm_ONE = 1;
/* eslint-disable-next-line no-void */

var dist_to_primitive_x_esm_UNDEFINED = void dist_to_primitive_x_esm_ZERO;
var dist_to_primitive_x_esm_NUMBER = 'number';
var dist_to_primitive_x_esm_STRING = 'string';
var dist_to_primitive_x_esm_DEFAULT = 'default';
/** @type {StringConstructor} */

var dist_to_primitive_x_esm_StringCtr = dist_to_primitive_x_esm_STRING.constructor;
/** @type {NumberConstructor} */

var dist_to_primitive_x_esm_NumberCtr = dist_to_primitive_x_esm_ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var dist_to_primitive_x_esm_symToPrimitive = has_symbol_support_x_dist_has_symbol_support_x_esm && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var dist_to_primitive_x_esm_symValueOf = has_symbol_support_x_dist_has_symbol_support_x_esm && Symbol.prototype.valueOf;
var dist_to_primitive_x_esm_toStringOrder = ['toString', 'valueOf'];
var dist_to_primitive_x_esm_toNumberOrder = ['valueOf', 'toString'];
var dist_to_primitive_x_esm_orderLength = 2;
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */

var dist_to_primitive_x_esm_ordinaryToPrimitive = function _ordinaryToPrimitive(ordinary, hint) {
  dist_require_object_coercible_x_esm_requireObjectCoercible(ordinary);

  if (typeof hint !== 'string' || hint !== dist_to_primitive_x_esm_NUMBER && hint !== dist_to_primitive_x_esm_STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === dist_to_primitive_x_esm_STRING ? dist_to_primitive_x_esm_toStringOrder : dist_to_primitive_x_esm_toNumberOrder;
  var method;
  var result;

  for (var i = dist_to_primitive_x_esm_ZERO; i < dist_to_primitive_x_esm_orderLength; i += dist_to_primitive_x_esm_ONE) {
    method = ordinary[methodNames[i]];

    if (dist_is_function_x_esm_isFunction(method)) {
      result = method.call(ordinary);

      if (array_like_slice_x_node_modules_is_primitive_default()(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var dist_to_primitive_x_esm_getMethod = function _getMethod(object, property) {
  var func = object[property];

  if (isNil(func) === false) {
    if (dist_is_function_x_esm_isFunction(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return dist_to_primitive_x_esm_UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var dist_to_primitive_x_esm_getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === dist_to_primitive_x_esm_StringCtr) {
      return dist_to_primitive_x_esm_STRING;
    }

    if (value === dist_to_primitive_x_esm_NumberCtr) {
      return dist_to_primitive_x_esm_NUMBER;
    }
  }

  return dist_to_primitive_x_esm_DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var to_primitive_x_dist_to_primitive_x_esm_getExoticToPrim = function getExoticToPrim(value) {
  if (has_symbol_support_x_dist_has_symbol_support_x_esm) {
    if (dist_to_primitive_x_esm_symToPrimitive) {
      return dist_to_primitive_x_esm_getMethod(value, dist_to_primitive_x_esm_symToPrimitive);
    }

    if (is_symbol_default()(value)) {
      return dist_to_primitive_x_esm_symValueOf;
    }
  }

  return dist_to_primitive_x_esm_UNDEFINED;
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {NumberConstructor|StringConstructor} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


function dist_to_primitive_x_esm_toPrimitive(input, preferredType) {
  if (array_like_slice_x_node_modules_is_primitive_default()(input)) {
    return input;
  }

  var hint = dist_to_primitive_x_esm_getHint(preferredType, arguments.length > dist_to_primitive_x_esm_ONE);
  var exoticToPrim = to_primitive_x_dist_to_primitive_x_esm_getExoticToPrim(input);

  if (typeof exoticToPrim !== 'undefined') {
    var result = exoticToPrim.call(input, hint);

    if (array_like_slice_x_node_modules_is_primitive_default()(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  var newHint = hint === dist_to_primitive_x_esm_DEFAULT && (is_date_object_default()(input) || is_symbol_default()(input)) ? dist_to_primitive_x_esm_STRING : hint;
  return dist_to_primitive_x_esm_ordinaryToPrimitive(input, newHint === dist_to_primitive_x_esm_DEFAULT ? dist_to_primitive_x_esm_NUMBER : newHint);
}


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/nan-x/dist/nan-x.esm.js
/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 */
/* harmony default export */ var nan_x_dist_nan_x_esm = (0 / 0);


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/parse-int-x/dist/parse-int-x.esm.js



var dist_parse_int_x_esm_nativeParseInt = parseInt;
/**  @type {Function} */

var dist_parse_int_x_esm_castNumber = 0 .constructor; // noinspection JSPotentiallyInvalidConstructorUsage

var dist_parse_int_x_esm_ref = '',
    dist_parse_int_x_esm_charAt = dist_parse_int_x_esm_ref.charAt;
var dist_parse_int_x_esm_hexRegex = /^[-+]?0[xX]/;
var parse_int_x_dist_parse_int_x_esm_test = dist_parse_int_x_esm_hexRegex.test;
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2016).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function dist_parse_int_x_esm_parseInt2016(string, radix) {
  var str = dist_trim_left_x_esm_trimLeft2016(dist_to_string_x_esm_ToString(string));
  return dist_parse_int_x_esm_nativeParseInt(str, dist_parse_int_x_esm_castNumber(radix) || (parse_int_x_dist_parse_int_x_esm_test.call(dist_parse_int_x_esm_hexRegex, str) ? 16 : 10));
}
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2018).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function dist_parse_int_x_esm_parseInt2018(string, radix) {
  var str = dist_trim_left_x_esm_trimLeft2018(dist_to_string_x_esm_ToString(string));

  if (dist_parse_int_x_esm_charAt.call(str, 0) === "\u180E") {
    return nan_x_dist_nan_x_esm;
  }

  return dist_parse_int_x_esm_nativeParseInt(str, dist_parse_int_x_esm_castNumber(radix) || (parse_int_x_dist_parse_int_x_esm_test.call(dist_parse_int_x_esm_hexRegex, str) ? 16 : 10));
}


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/to-number-x/dist/to-number-x.esm.js





var dist_to_number_x_esm_binaryRadix = 2;
var dist_to_number_x_esm_octalRadix = 8;
var dist_to_number_x_esm_testCharsCount = 2;
var to_number_x_dist_to_number_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
/** @type {NumberConstructor} */

var to_number_x_dist_to_number_x_esm_castNumber = dist_to_number_x_esm_testCharsCount.constructor;
var dist_to_number_x_esm_pStrSlice = to_number_x_dist_to_number_x_esm_ERROR_MESSAGE.slice;
var dist_to_number_x_esm_binaryRegex = /^0b[01]+$/i;
var dist_to_number_x_esm_RegExpConstructor = dist_to_number_x_esm_binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var to_number_x_dist_to_number_x_esm_test = dist_to_number_x_esm_binaryRegex.test;

var dist_to_number_x_esm_isBinary = function _isBinary(value) {
  return to_number_x_dist_to_number_x_esm_test.call(dist_to_number_x_esm_binaryRegex, value);
};

var dist_to_number_x_esm_octalRegex = /^0o[0-7]+$/i;

var dist_to_number_x_esm_isOctal = function _isOctal(value) {
  return to_number_x_dist_to_number_x_esm_test.call(dist_to_number_x_esm_octalRegex, value);
};

var dist_to_number_x_esm_nonWSregex2016 = new dist_to_number_x_esm_RegExpConstructor("[\x85\u200B\uFFFE]", 'g');

var dist_to_number_x_esm_hasNonWS2016 = function _hasNonWS(value) {
  return to_number_x_dist_to_number_x_esm_test.call(dist_to_number_x_esm_nonWSregex2016, value);
};

var dist_to_number_x_esm_nonWSregex2018 = new dist_to_number_x_esm_RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var dist_to_number_x_esm_hasNonWS2018 = function _hasNonWS(value) {
  return to_number_x_dist_to_number_x_esm_test.call(dist_to_number_x_esm_nonWSregex2018, value);
};

var dist_to_number_x_esm_invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var dist_to_number_x_esm_isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return to_number_x_dist_to_number_x_esm_test.call(dist_to_number_x_esm_invalidHexLiteral, value);
};
/**
 * This method converts argument to a value of type Number. (ES2016).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


function dist_to_number_x_esm_toNumber2016(argument) {
  var value = dist_to_primitive_x_esm_toPrimitive(argument, Number);

  if (is_symbol_default()(value)) {
    throw new TypeError(to_number_x_dist_to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (dist_to_number_x_esm_isBinary(value)) {
      return dist_to_number_x_esm_toNumber2016(dist_parse_int_x_esm_parseInt2016(dist_to_number_x_esm_pStrSlice.call(value, dist_to_number_x_esm_testCharsCount), dist_to_number_x_esm_binaryRadix));
    }

    if (dist_to_number_x_esm_isOctal(value)) {
      return dist_to_number_x_esm_toNumber2016(dist_parse_int_x_esm_parseInt2016(dist_to_number_x_esm_pStrSlice.call(value, dist_to_number_x_esm_testCharsCount), dist_to_number_x_esm_octalRadix));
    }

    if (dist_to_number_x_esm_hasNonWS2016(value) || dist_to_number_x_esm_isInvalidHexLiteral(value)) {
      return nan_x_dist_nan_x_esm;
    }

    var trimmed = dist_trim_x_esm_trim2016(value);

    if (trimmed !== value) {
      return dist_to_number_x_esm_toNumber2016(trimmed);
    }
  }

  return to_number_x_dist_to_number_x_esm_castNumber(value);
}
/**
 * This method converts argument to a value of type Number. (ES2018).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */

function dist_to_number_x_esm_toNumber2018(argument) {
  var value = dist_to_primitive_x_esm_toPrimitive(argument, to_number_x_dist_to_number_x_esm_castNumber);

  if (is_symbol_default()(value)) {
    throw new TypeError(to_number_x_dist_to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (dist_to_number_x_esm_isBinary(value)) {
      return dist_to_number_x_esm_toNumber2018(dist_parse_int_x_esm_parseInt2018(dist_to_number_x_esm_pStrSlice.call(value, dist_to_number_x_esm_testCharsCount), dist_to_number_x_esm_binaryRadix));
    }

    if (dist_to_number_x_esm_isOctal(value)) {
      return dist_to_number_x_esm_toNumber2018(dist_parse_int_x_esm_parseInt2018(dist_to_number_x_esm_pStrSlice.call(value, dist_to_number_x_esm_testCharsCount), dist_to_number_x_esm_octalRadix));
    }

    if (dist_to_number_x_esm_hasNonWS2018(value) || dist_to_number_x_esm_isInvalidHexLiteral(value)) {
      return nan_x_dist_nan_x_esm;
    }

    var trimmed = dist_trim_x_esm_trim2018(value);

    if (trimmed !== value) {
      return dist_to_number_x_esm_toNumber2018(trimmed);
    }
  }

  return to_number_x_dist_to_number_x_esm_castNumber(value);
}


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/is-nan-x/dist/is-nan-x.esm.js
/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} [value] - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 */
function is_nan_x_dist_is_nan_x_esm_isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
}


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/infinity-x/dist/infinity-x.esm.js
/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 */
/* harmony default export */ var infinity_x_dist_infinity_x_esm = (1 / 0);


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/is-finite-x/dist/is-finite-x.esm.js


/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} [number] - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

function is_finite_x_dist_is_finite_x_esm_isFinite(number) {
  return typeof number === 'number' && is_nan_x_dist_is_nan_x_esm_isNaN(number) === false && number !== infinity_x_dist_infinity_x_esm && number !== -infinity_x_dist_infinity_x_esm;
}


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/math-sign-x/dist/math-sign-x.esm.js


/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2016).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function dist_math_sign_x_esm_sign2016(x) {
  var n = dist_to_number_x_esm_toNumber2016(x);

  if (n === 0 || is_nan_x_dist_is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}
/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2018).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function dist_math_sign_x_esm_sign2018(x) {
  var n = dist_to_number_x_esm_toNumber2018(x);

  if (n === 0 || is_nan_x_dist_is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/to-integer-x/dist/to-integer-x.esm.js




var dist_to_integer_x_esm_abs = Math.abs,
    dist_to_integer_x_esm_floor = Math.floor;
/**
 * Converts `value` to an integer. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function dist_to_integer_x_esm_toInteger2016(value) {
  var number = dist_to_number_x_esm_toNumber2016(value);

  if (is_nan_x_dist_is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || is_finite_x_dist_is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return dist_math_sign_x_esm_sign2016(number) * dist_to_integer_x_esm_floor(dist_to_integer_x_esm_abs(number));
}
/**
 * Converts `value` to an integer. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function dist_to_integer_x_esm_toInteger2018(value) {
  var number = dist_to_number_x_esm_toNumber2018(value);

  if (is_nan_x_dist_is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || is_finite_x_dist_is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return dist_math_sign_x_esm_sign2018(number) * dist_to_integer_x_esm_floor(dist_to_integer_x_esm_abs(number));
}


// EXTERNAL MODULE: ./node_modules/array-like-slice-x/node_modules/max-safe-integer/index.js
var array_like_slice_x_node_modules_max_safe_integer = __webpack_require__(13);
var array_like_slice_x_node_modules_max_safe_integer_default = /*#__PURE__*/__webpack_require__.n(array_like_slice_x_node_modules_max_safe_integer);

// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/to-length-x/dist/to-length-x.esm.js


/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function dist_to_length_x_esm_toLength2016(value) {
  var len = dist_to_integer_x_esm_toInteger2016(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > array_like_slice_x_node_modules_max_safe_integer_default.a) {
    return array_like_slice_x_node_modules_max_safe_integer_default.a;
  }

  return len;
}
/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function dist_to_length_x_esm_toLength2018(value) {
  var len = dist_to_integer_x_esm_toInteger2018(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > array_like_slice_x_node_modules_max_safe_integer_default.a) {
    return array_like_slice_x_node_modules_max_safe_integer_default.a;
  }

  return len;
}


// EXTERNAL MODULE: ./node_modules/validate.io-undefined/lib/index.js
var lib = __webpack_require__(19);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/has-boxed-string-x/dist/has-boxed-string-x.esm.js
var has_boxed_string_x_dist_has_boxed_string_x_esm_string = 'a';
var dist_has_boxed_string_x_esm_boxedString = {}.constructor(has_boxed_string_x_dist_has_boxed_string_x_esm_string);
/**
 * Check failure of by-index access of string characters (IE < 9)
 * and failure of `0 in boxedString` (Rhino).
 *
 * `true` if no failure; otherwise `false`.
 *
 * @type boolean
 */

var dist_has_boxed_string_x_esm_hasBoxed = dist_has_boxed_string_x_esm_boxedString[0] === has_boxed_string_x_dist_has_boxed_string_x_esm_string && 0 in dist_has_boxed_string_x_esm_boxedString;
/* harmony default export */ var has_boxed_string_x_dist_has_boxed_string_x_esm = (dist_has_boxed_string_x_esm_hasBoxed);


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js


var dist_split_if_boxed_bug_x_esm_EMPTY_STRING = '';
var dist_split_if_boxed_bug_x_esm_strSplit = dist_split_if_boxed_bug_x_esm_EMPTY_STRING.split;
var dist_split_if_boxed_bug_x_esm_isStringFn = has_boxed_string_x_dist_has_boxed_string_x_esm === false && typeof dist_split_if_boxed_bug_x_esm_strSplit === 'function' && is_string_default.a;
/**
 * This method tests if a value is a string with the boxed bug; splits to an
 * array for iteration; otherwise returns the original value.
 *
 * @param {*} [value] - The value to be tested.
 * @returns {*} An array or characters if value was a string with the boxed bug;
 *  otherwise the value.
 */

function dist_split_if_boxed_bug_x_esm_splitIfBoxedBug(value) {
  return dist_split_if_boxed_bug_x_esm_isStringFn && dist_split_if_boxed_bug_x_esm_isStringFn(value) ? dist_split_if_boxed_bug_x_esm_strSplit.call(value, dist_split_if_boxed_bug_x_esm_EMPTY_STRING) : value;
}


// CONCATENATED MODULE: ./node_modules/array-like-slice-x/dist/array-like-slice-x.esm.js






var getMax = function _getMax(a, b) {
  return a >= b ? a : b;
};

var getMin = function _getMin(a, b) {
  return a <= b ? a : b;
};

var setRelative = function _setRelative(value, length) {
  return value < 0 ? getMax(length + value, 0) : getMin(value, length);
};
/**
 * The slice() method returns a shallow copy of a portion of an array into a new
 * array object selected from begin to end (end not included). The original
 * array will not be modified.
 *
 * @param {!object} arrayLike - The array like object to slice.
 * @param {number} [start] - Zero-based index at which to begin extraction.
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(-2) extracts the last two elements in the sequence.
 *  If begin is undefined, slice begins from index 0.
 * @param {number} [end] - Zero-based index before which to end extraction.
 *  Slice extracts up to but not including end. For example, slice([0,1,2,3,4],1,4)
 *  extracts the second element through the fourth element (elements indexed
 *  1, 2, and 3).
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(2,-1) extracts the third element through the second-to-last
 *  element in the sequence.
 *  If end is omitted, slice extracts through the end of the sequence (arr.length).
 *  If end is greater than the length of the sequence, slice extracts through
 *  the end of the sequence (arr.length).
 * @returns {Array} A new array containing the extracted elements.
 */


function slice(arrayLike, start, end) {
  var iterable = dist_split_if_boxed_bug_x_esm_splitIfBoxedBug(dist_to_object_x_esm_toObject(arrayLike));
  var length = dist_to_length_x_esm_toLength2018(iterable.length);
  var k = setRelative(dist_to_integer_x_esm_toInteger2018(start), length);
  var relativeEnd = lib_default()(end) ? length : dist_to_integer_x_esm_toInteger2018(end);
  var finalEnd = setRelative(relativeEnd, length);
  var val = [];
  val.length = getMax(finalEnd - k, 0);
  var next = 0;

  while (k < finalEnd) {
    if (k in iterable) {
      val[next] = iterable[k];
    }

    next += 1;
    k += 1;
  }

  return val;
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/attempt-x/dist/attempt-x.esm.js
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
function attempt_x_dist_attempt_x_esm_attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(value) {
  if (isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/to-object-x/dist/to-object-x.esm.js

var to_object_x_dist_to_object_x_esm_castObject = {}.constructor;
/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!object} The `value` converted to an object.
 */

function to_object_x_dist_to_object_x_esm_toObject(value) {
  return to_object_x_dist_to_object_x_esm_castObject(require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_this = undefined;

function has_symbol_support_x_dist_has_symbol_support_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var has_symbol_support_x_dist_has_symbol_support_x_esm_hasSymbolSupport = attempt_x_dist_attempt_x_esm_attempt(function () {
  has_symbol_support_x_dist_has_symbol_support_x_esm_newArrowCheck(this, node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm = (has_symbol_support_x_dist_has_symbol_support_x_esm_hasSymbolSupport.threw === false && has_symbol_support_x_dist_has_symbol_support_x_esm_hasSymbolSupport.value === true);


// EXTERNAL MODULE: ./node_modules/array-includes-x/node_modules/is-primitive/index.js
var array_includes_x_node_modules_is_primitive = __webpack_require__(7);
var array_includes_x_node_modules_is_primitive_default = /*#__PURE__*/__webpack_require__.n(array_includes_x_node_modules_is_primitive);

// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
function to_boolean_x_dist_to_boolean_x_esm_toBoolean(value) {
  return !!value;
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/is-falsey-x/dist/is-falsey-x.esm.js

/**
 * This method tests if a given value is falsey.
 *
 * @param {*} [value] - The value to test.
 * @returns {boolean} `true` if the value is falsey: otherwise `false`.
 */

function is_falsey_x_dist_is_falsey_x_esm_isFalsey(value) {
  return !to_boolean_x_dist_to_boolean_x_esm_toBoolean(value);
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var to_string_tag_x_dist_to_string_tag_x_esm_nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

function to_string_tag_x_dist_to_string_tag_x_esm_toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return to_string_tag_x_dist_to_string_tag_x_esm_nativeObjectToString.call(value);
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var node_modules_has_to_string_tag_x_dist_has_to_string_tag_x_esm = (node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm &&
/* eslint-disable-next-line compat/compat */
is_symbol_default()(Symbol.toStringTag));


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/to-string-x/dist/to-string-x.esm.js

var to_string_x_dist_to_string_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var to_string_x_dist_to_string_x_esm_castString = to_string_x_dist_to_string_x_esm_ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

function to_string_x_dist_to_string_x_esm_ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(to_string_x_dist_to_string_x_esm_ERROR_MESSAGE);
  }

  return to_string_x_dist_to_string_x_esm_castString(value);
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

function require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(value) {
  return to_string_x_dist_to_string_x_esm_ToString(require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var white_space_x_dist_white_space_x_esm_list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var white_space_x_dist_white_space_x_esm_stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var white_space_x_dist_white_space_x_esm_stringES2018 = '';
var node_modules_white_space_x_dist_white_space_x_esm_length = white_space_x_dist_white_space_x_esm_list.length;

for (var node_modules_white_space_x_dist_white_space_x_esm_i = 0; node_modules_white_space_x_dist_white_space_x_esm_i < node_modules_white_space_x_dist_white_space_x_esm_length; node_modules_white_space_x_dist_white_space_x_esm_i += 1) {
  if (white_space_x_dist_white_space_x_esm_list[node_modules_white_space_x_dist_white_space_x_esm_i].es2016) {
    white_space_x_dist_white_space_x_esm_stringES2016 += white_space_x_dist_white_space_x_esm_list[node_modules_white_space_x_dist_white_space_x_esm_i].string;
  }

  if (white_space_x_dist_white_space_x_esm_list[node_modules_white_space_x_dist_white_space_x_esm_i].es2018) {
    white_space_x_dist_white_space_x_esm_stringES2018 += white_space_x_dist_white_space_x_esm_list[node_modules_white_space_x_dist_white_space_x_esm_i].string;
  }
}

var white_space_x_dist_white_space_x_esm_string2018 = white_space_x_dist_white_space_x_esm_stringES2018;
/* harmony default export */ var node_modules_white_space_x_dist_white_space_x_esm = (white_space_x_dist_white_space_x_esm_string2018);
var white_space_x_dist_white_space_x_esm_string2016 = white_space_x_dist_white_space_x_esm_stringES2016;


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/trim-left-x/dist/trim-left-x.esm.js


var node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING = '';
var trim_left_x_dist_trim_left_x_esm_RegExpCtr = /none/.constructor;
var trim_left_x_dist_trim_left_x_esm_reLeft2016 = new trim_left_x_dist_trim_left_x_esm_RegExpCtr("^[".concat(white_space_x_dist_white_space_x_esm_string2016, "]+"));
var trim_left_x_dist_trim_left_x_esm_reLeft = new trim_left_x_dist_trim_left_x_esm_RegExpCtr("^[".concat(node_modules_white_space_x_dist_white_space_x_esm, "]+"));
var trim_left_x_dist_trim_left_x_esm_replace = node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trim_left_x_dist_trim_left_x_esm_trimLeft2016(string) {
  return trim_left_x_dist_trim_left_x_esm_replace.call(require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), trim_left_x_dist_trim_left_x_esm_reLeft2016, node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trim_left_x_dist_trim_left_x_esm_trimLeft2018(string) {
  return trim_left_x_dist_trim_left_x_esm_replace.call(require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), trim_left_x_dist_trim_left_x_esm_reLeft, node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/trim-right-x/dist/trim-right-x.esm.js


var node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING = '';
var node_modules_trim_right_x_dist_trim_right_x_esm_RegExpCtr = /none/.constructor;
var trim_right_x_dist_trim_right_x_esm_reRight2016 = new node_modules_trim_right_x_dist_trim_right_x_esm_RegExpCtr("[".concat(white_space_x_dist_white_space_x_esm_string2016, "]+$"));
var trim_right_x_dist_trim_right_x_esm_reRight2018 = new node_modules_trim_right_x_dist_trim_right_x_esm_RegExpCtr("[".concat(node_modules_white_space_x_dist_white_space_x_esm, "]+$"));
var node_modules_trim_right_x_dist_trim_right_x_esm_replace = node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trim_right_x_dist_trim_right_x_esm_trimRight2016(string) {
  return node_modules_trim_right_x_dist_trim_right_x_esm_replace.call(require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), trim_right_x_dist_trim_right_x_esm_reRight2016, node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trim_right_x_dist_trim_right_x_esm_trimRight2018(string) {
  return node_modules_trim_right_x_dist_trim_right_x_esm_replace.call(require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), trim_right_x_dist_trim_right_x_esm_reRight2018, node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim_x_dist_trim_x_esm_trim2016(string) {
  return trim_left_x_dist_trim_left_x_esm_trimLeft2016(trim_right_x_dist_trim_right_x_esm_trimRight2016(string));
}
/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim_x_dist_trim_x_esm_trim2018(string) {
  return trim_left_x_dist_trim_left_x_esm_trimLeft2018(trim_right_x_dist_trim_right_x_esm_trimRight2018(string));
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/normalize-space-x/dist/normalize-space-x.esm.js


var normalize_space_x_dist_normalize_space_x_esm_SPACE = ' ';
var node_modules_normalize_space_x_dist_normalize_space_x_esm_RegExpCtr = /none/.constructor;
var normalize_space_x_dist_normalize_space_x_esm_reNormalize2016 = new node_modules_normalize_space_x_dist_normalize_space_x_esm_RegExpCtr("[".concat(white_space_x_dist_white_space_x_esm_string2016, "]+"), 'g');
var normalize_space_x_dist_normalize_space_x_esm_reNormalize2018 = new node_modules_normalize_space_x_dist_normalize_space_x_esm_RegExpCtr("[".concat(node_modules_white_space_x_dist_white_space_x_esm, "]+"), 'g');
var node_modules_normalize_space_x_dist_normalize_space_x_esm_replace = normalize_space_x_dist_normalize_space_x_esm_SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */

function normalize_space_x_dist_normalize_space_x_esm_normalizeSpace2016(string) {
  return node_modules_normalize_space_x_dist_normalize_space_x_esm_replace.call(trim_x_dist_trim_x_esm_trim2016(string), normalize_space_x_dist_normalize_space_x_esm_reNormalize2016, normalize_space_x_dist_normalize_space_x_esm_SPACE);
}
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

function normalize_space_x_dist_normalize_space_x_esm_normalizeSpace2018(string) {
  return node_modules_normalize_space_x_dist_normalize_space_x_esm_replace.call(trim_x_dist_trim_x_esm_trim2018(string), normalize_space_x_dist_normalize_space_x_esm_reNormalize2018, normalize_space_x_dist_normalize_space_x_esm_SPACE);
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/replace-comments-x/dist/replace-comments-x.esm.js


var node_modules_replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING = '';
var replace_comments_x_dist_replace_comments_x_esm_STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var node_modules_replace_comments_x_dist_replace_comments_x_esm_replace = node_modules_replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

function replace_comments_x_dist_replace_comments_x_esm_replaceComments(string, replacement) {
  return node_modules_replace_comments_x_dist_replace_comments_x_esm_replace.call(require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), replace_comments_x_dist_replace_comments_x_esm_STRIP_COMMENTS, arguments.length > 1 ? to_string_x_dist_to_string_x_esm_ToString(replacement) : node_modules_replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/is-function-x/dist/is-function-x.esm.js
var node_modules_is_function_x_dist_is_function_x_esm_this = undefined;

function node_modules_is_function_x_dist_is_function_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }









var node_modules_is_function_x_dist_is_function_x_esm_SPACE = ' ';
var is_function_x_dist_is_function_x_esm_fToString = Function.prototype.toString;
var is_function_x_dist_is_function_x_esm_funcTag = '[object Function]';
var is_function_x_dist_is_function_x_esm_genTag = '[object GeneratorFunction]';
var is_function_x_dist_is_function_x_esm_asyncTag = '[object AsyncFunction]';
var is_function_x_dist_is_function_x_esm_ctrRx = /^class /;
var is_function_x_dist_is_function_x_esm_test = is_function_x_dist_is_function_x_esm_ctrRx.test;
var is_function_x_dist_is_function_x_esm_hasNativeClass = attempt_x_dist_attempt_x_esm_attempt(function () {
  node_modules_is_function_x_dist_is_function_x_esm_newArrowCheck(this, node_modules_is_function_x_dist_is_function_x_esm_this);

  /* eslint-disable-next-line no-new-func */
  return Function('"use strict"; return class My {};')();
}.bind(undefined)).threw === false;

var is_function_x_dist_is_function_x_esm_testClassstring = function _testClassstring(value) {
  return is_function_x_dist_is_function_x_esm_test.call(is_function_x_dist_is_function_x_esm_ctrRx, normalize_space_x_dist_normalize_space_x_esm_normalizeSpace2018(replace_comments_x_dist_replace_comments_x_esm_replaceComments(is_function_x_dist_is_function_x_esm_fToString.call(value), node_modules_is_function_x_dist_is_function_x_esm_SPACE)));
};

var is_function_x_dist_is_function_x_esm_isES6ClassFn = function isES6ClassFunc(value) {
  var result = attempt_x_dist_attempt_x_esm_attempt(is_function_x_dist_is_function_x_esm_testClassstring, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var is_function_x_dist_is_function_x_esm_tryFuncToString = function funcToString(value, allowClass) {
  if (is_function_x_dist_is_function_x_esm_hasNativeClass && allowClass === false && is_function_x_dist_is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  return attempt_x_dist_attempt_x_esm_attempt.call(value, is_function_x_dist_is_function_x_esm_fToString).threw === false;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


function is_function_x_dist_is_function_x_esm_isFunction(value, allowClass) {
  if (array_includes_x_node_modules_is_primitive_default()(value)) {
    return false;
  }

  if (node_modules_has_to_string_tag_x_dist_has_to_string_tag_x_esm) {
    return is_function_x_dist_is_function_x_esm_tryFuncToString(value, to_boolean_x_dist_to_boolean_x_esm_toBoolean(allowClass));
  }

  if (is_function_x_dist_is_function_x_esm_hasNativeClass && is_falsey_x_dist_is_falsey_x_esm_isFalsey(allowClass) && is_function_x_dist_is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  var strTag = to_string_tag_x_dist_to_string_tag_x_esm_toStringTag(value);
  return strTag === is_function_x_dist_is_function_x_esm_funcTag || strTag === is_function_x_dist_is_function_x_esm_genTag || strTag === is_function_x_dist_is_function_x_esm_asyncTag;
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/to-primitive-x/dist/to-primitive-x.esm.js







var to_primitive_x_dist_to_primitive_x_esm_ZERO = 0;
var to_primitive_x_dist_to_primitive_x_esm_ONE = 1;
/* eslint-disable-next-line no-void */

var to_primitive_x_dist_to_primitive_x_esm_UNDEFINED = void to_primitive_x_dist_to_primitive_x_esm_ZERO;
var to_primitive_x_dist_to_primitive_x_esm_NUMBER = 'number';
var to_primitive_x_dist_to_primitive_x_esm_STRING = 'string';
var to_primitive_x_dist_to_primitive_x_esm_DEFAULT = 'default';
/** @type {StringConstructor} */

var to_primitive_x_dist_to_primitive_x_esm_StringCtr = to_primitive_x_dist_to_primitive_x_esm_STRING.constructor;
/** @type {NumberConstructor} */

var to_primitive_x_dist_to_primitive_x_esm_NumberCtr = to_primitive_x_dist_to_primitive_x_esm_ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var to_primitive_x_dist_to_primitive_x_esm_symToPrimitive = node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var to_primitive_x_dist_to_primitive_x_esm_symValueOf = node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm && Symbol.prototype.valueOf;
var to_primitive_x_dist_to_primitive_x_esm_toStringOrder = ['toString', 'valueOf'];
var to_primitive_x_dist_to_primitive_x_esm_toNumberOrder = ['valueOf', 'toString'];
var to_primitive_x_dist_to_primitive_x_esm_orderLength = 2;
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */

var to_primitive_x_dist_to_primitive_x_esm_ordinaryToPrimitive = function _ordinaryToPrimitive(ordinary, hint) {
  require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(ordinary);

  if (typeof hint !== 'string' || hint !== to_primitive_x_dist_to_primitive_x_esm_NUMBER && hint !== to_primitive_x_dist_to_primitive_x_esm_STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === to_primitive_x_dist_to_primitive_x_esm_STRING ? to_primitive_x_dist_to_primitive_x_esm_toStringOrder : to_primitive_x_dist_to_primitive_x_esm_toNumberOrder;
  var method;
  var result;

  for (var i = to_primitive_x_dist_to_primitive_x_esm_ZERO; i < to_primitive_x_dist_to_primitive_x_esm_orderLength; i += to_primitive_x_dist_to_primitive_x_esm_ONE) {
    method = ordinary[methodNames[i]];

    if (is_function_x_dist_is_function_x_esm_isFunction(method)) {
      result = method.call(ordinary);

      if (array_includes_x_node_modules_is_primitive_default()(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var to_primitive_x_dist_to_primitive_x_esm_getMethod = function _getMethod(object, property) {
  var func = object[property];

  if (isNil(func) === false) {
    if (is_function_x_dist_is_function_x_esm_isFunction(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return to_primitive_x_dist_to_primitive_x_esm_UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var to_primitive_x_dist_to_primitive_x_esm_getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === to_primitive_x_dist_to_primitive_x_esm_StringCtr) {
      return to_primitive_x_dist_to_primitive_x_esm_STRING;
    }

    if (value === to_primitive_x_dist_to_primitive_x_esm_NumberCtr) {
      return to_primitive_x_dist_to_primitive_x_esm_NUMBER;
    }
  }

  return to_primitive_x_dist_to_primitive_x_esm_DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var node_modules_to_primitive_x_dist_to_primitive_x_esm_getExoticToPrim = function getExoticToPrim(value) {
  if (node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm) {
    if (to_primitive_x_dist_to_primitive_x_esm_symToPrimitive) {
      return to_primitive_x_dist_to_primitive_x_esm_getMethod(value, to_primitive_x_dist_to_primitive_x_esm_symToPrimitive);
    }

    if (is_symbol_default()(value)) {
      return to_primitive_x_dist_to_primitive_x_esm_symValueOf;
    }
  }

  return to_primitive_x_dist_to_primitive_x_esm_UNDEFINED;
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {NumberConstructor|StringConstructor} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


function to_primitive_x_dist_to_primitive_x_esm_toPrimitive(input, preferredType) {
  if (array_includes_x_node_modules_is_primitive_default()(input)) {
    return input;
  }

  var hint = to_primitive_x_dist_to_primitive_x_esm_getHint(preferredType, arguments.length > to_primitive_x_dist_to_primitive_x_esm_ONE);
  var exoticToPrim = node_modules_to_primitive_x_dist_to_primitive_x_esm_getExoticToPrim(input);

  if (typeof exoticToPrim !== 'undefined') {
    var result = exoticToPrim.call(input, hint);

    if (array_includes_x_node_modules_is_primitive_default()(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  var newHint = hint === to_primitive_x_dist_to_primitive_x_esm_DEFAULT && (is_date_object_default()(input) || is_symbol_default()(input)) ? to_primitive_x_dist_to_primitive_x_esm_STRING : hint;
  return to_primitive_x_dist_to_primitive_x_esm_ordinaryToPrimitive(input, newHint === to_primitive_x_dist_to_primitive_x_esm_DEFAULT ? to_primitive_x_dist_to_primitive_x_esm_NUMBER : newHint);
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/nan-x/dist/nan-x.esm.js
/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 */
/* harmony default export */ var node_modules_nan_x_dist_nan_x_esm = (0 / 0);


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/parse-int-x/dist/parse-int-x.esm.js



var parse_int_x_dist_parse_int_x_esm_nativeParseInt = parseInt;
/**  @type {Function} */

var parse_int_x_dist_parse_int_x_esm_castNumber = 0 .constructor; // noinspection JSPotentiallyInvalidConstructorUsage

var parse_int_x_dist_parse_int_x_esm_ref = '',
    parse_int_x_dist_parse_int_x_esm_charAt = parse_int_x_dist_parse_int_x_esm_ref.charAt;
var parse_int_x_dist_parse_int_x_esm_hexRegex = /^[-+]?0[xX]/;
var node_modules_parse_int_x_dist_parse_int_x_esm_test = parse_int_x_dist_parse_int_x_esm_hexRegex.test;
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2016).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function parse_int_x_dist_parse_int_x_esm_parseInt2016(string, radix) {
  var str = trim_left_x_dist_trim_left_x_esm_trimLeft2016(to_string_x_dist_to_string_x_esm_ToString(string));
  return parse_int_x_dist_parse_int_x_esm_nativeParseInt(str, parse_int_x_dist_parse_int_x_esm_castNumber(radix) || (node_modules_parse_int_x_dist_parse_int_x_esm_test.call(parse_int_x_dist_parse_int_x_esm_hexRegex, str) ? 16 : 10));
}
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2018).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function parse_int_x_dist_parse_int_x_esm_parseInt2018(string, radix) {
  var str = trim_left_x_dist_trim_left_x_esm_trimLeft2018(to_string_x_dist_to_string_x_esm_ToString(string));

  if (parse_int_x_dist_parse_int_x_esm_charAt.call(str, 0) === "\u180E") {
    return node_modules_nan_x_dist_nan_x_esm;
  }

  return parse_int_x_dist_parse_int_x_esm_nativeParseInt(str, parse_int_x_dist_parse_int_x_esm_castNumber(radix) || (node_modules_parse_int_x_dist_parse_int_x_esm_test.call(parse_int_x_dist_parse_int_x_esm_hexRegex, str) ? 16 : 10));
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/to-number-x/dist/to-number-x.esm.js





var to_number_x_dist_to_number_x_esm_binaryRadix = 2;
var to_number_x_dist_to_number_x_esm_octalRadix = 8;
var to_number_x_dist_to_number_x_esm_testCharsCount = 2;
var node_modules_to_number_x_dist_to_number_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
/** @type {NumberConstructor} */

var node_modules_to_number_x_dist_to_number_x_esm_castNumber = to_number_x_dist_to_number_x_esm_testCharsCount.constructor;
var to_number_x_dist_to_number_x_esm_pStrSlice = node_modules_to_number_x_dist_to_number_x_esm_ERROR_MESSAGE.slice;
var to_number_x_dist_to_number_x_esm_binaryRegex = /^0b[01]+$/i;
var to_number_x_dist_to_number_x_esm_RegExpConstructor = to_number_x_dist_to_number_x_esm_binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var node_modules_to_number_x_dist_to_number_x_esm_test = to_number_x_dist_to_number_x_esm_binaryRegex.test;

var to_number_x_dist_to_number_x_esm_isBinary = function _isBinary(value) {
  return node_modules_to_number_x_dist_to_number_x_esm_test.call(to_number_x_dist_to_number_x_esm_binaryRegex, value);
};

var to_number_x_dist_to_number_x_esm_octalRegex = /^0o[0-7]+$/i;

var to_number_x_dist_to_number_x_esm_isOctal = function _isOctal(value) {
  return node_modules_to_number_x_dist_to_number_x_esm_test.call(to_number_x_dist_to_number_x_esm_octalRegex, value);
};

var to_number_x_dist_to_number_x_esm_nonWSregex2016 = new to_number_x_dist_to_number_x_esm_RegExpConstructor("[\x85\u200B\uFFFE]", 'g');

var to_number_x_dist_to_number_x_esm_hasNonWS2016 = function _hasNonWS(value) {
  return node_modules_to_number_x_dist_to_number_x_esm_test.call(to_number_x_dist_to_number_x_esm_nonWSregex2016, value);
};

var to_number_x_dist_to_number_x_esm_nonWSregex2018 = new to_number_x_dist_to_number_x_esm_RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var to_number_x_dist_to_number_x_esm_hasNonWS2018 = function _hasNonWS(value) {
  return node_modules_to_number_x_dist_to_number_x_esm_test.call(to_number_x_dist_to_number_x_esm_nonWSregex2018, value);
};

var to_number_x_dist_to_number_x_esm_invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var to_number_x_dist_to_number_x_esm_isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return node_modules_to_number_x_dist_to_number_x_esm_test.call(to_number_x_dist_to_number_x_esm_invalidHexLiteral, value);
};
/**
 * This method converts argument to a value of type Number. (ES2016).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


function to_number_x_dist_to_number_x_esm_toNumber2016(argument) {
  var value = to_primitive_x_dist_to_primitive_x_esm_toPrimitive(argument, Number);

  if (is_symbol_default()(value)) {
    throw new TypeError(node_modules_to_number_x_dist_to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (to_number_x_dist_to_number_x_esm_isBinary(value)) {
      return to_number_x_dist_to_number_x_esm_toNumber2016(parse_int_x_dist_parse_int_x_esm_parseInt2016(to_number_x_dist_to_number_x_esm_pStrSlice.call(value, to_number_x_dist_to_number_x_esm_testCharsCount), to_number_x_dist_to_number_x_esm_binaryRadix));
    }

    if (to_number_x_dist_to_number_x_esm_isOctal(value)) {
      return to_number_x_dist_to_number_x_esm_toNumber2016(parse_int_x_dist_parse_int_x_esm_parseInt2016(to_number_x_dist_to_number_x_esm_pStrSlice.call(value, to_number_x_dist_to_number_x_esm_testCharsCount), to_number_x_dist_to_number_x_esm_octalRadix));
    }

    if (to_number_x_dist_to_number_x_esm_hasNonWS2016(value) || to_number_x_dist_to_number_x_esm_isInvalidHexLiteral(value)) {
      return node_modules_nan_x_dist_nan_x_esm;
    }

    var trimmed = trim_x_dist_trim_x_esm_trim2016(value);

    if (trimmed !== value) {
      return to_number_x_dist_to_number_x_esm_toNumber2016(trimmed);
    }
  }

  return node_modules_to_number_x_dist_to_number_x_esm_castNumber(value);
}
/**
 * This method converts argument to a value of type Number. (ES2018).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */

function to_number_x_dist_to_number_x_esm_toNumber2018(argument) {
  var value = to_primitive_x_dist_to_primitive_x_esm_toPrimitive(argument, node_modules_to_number_x_dist_to_number_x_esm_castNumber);

  if (is_symbol_default()(value)) {
    throw new TypeError(node_modules_to_number_x_dist_to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (to_number_x_dist_to_number_x_esm_isBinary(value)) {
      return to_number_x_dist_to_number_x_esm_toNumber2018(parse_int_x_dist_parse_int_x_esm_parseInt2018(to_number_x_dist_to_number_x_esm_pStrSlice.call(value, to_number_x_dist_to_number_x_esm_testCharsCount), to_number_x_dist_to_number_x_esm_binaryRadix));
    }

    if (to_number_x_dist_to_number_x_esm_isOctal(value)) {
      return to_number_x_dist_to_number_x_esm_toNumber2018(parse_int_x_dist_parse_int_x_esm_parseInt2018(to_number_x_dist_to_number_x_esm_pStrSlice.call(value, to_number_x_dist_to_number_x_esm_testCharsCount), to_number_x_dist_to_number_x_esm_octalRadix));
    }

    if (to_number_x_dist_to_number_x_esm_hasNonWS2018(value) || to_number_x_dist_to_number_x_esm_isInvalidHexLiteral(value)) {
      return node_modules_nan_x_dist_nan_x_esm;
    }

    var trimmed = trim_x_dist_trim_x_esm_trim2018(value);

    if (trimmed !== value) {
      return to_number_x_dist_to_number_x_esm_toNumber2018(trimmed);
    }
  }

  return node_modules_to_number_x_dist_to_number_x_esm_castNumber(value);
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/is-nan-x/dist/is-nan-x.esm.js
/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} [value] - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 */
function node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/infinity-x/dist/infinity-x.esm.js
/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 */
/* harmony default export */ var node_modules_infinity_x_dist_infinity_x_esm = (1 / 0);


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/is-finite-x/dist/is-finite-x.esm.js


/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} [number] - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

function node_modules_is_finite_x_dist_is_finite_x_esm_isFinite(number) {
  return typeof number === 'number' && node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(number) === false && number !== node_modules_infinity_x_dist_infinity_x_esm && number !== -node_modules_infinity_x_dist_infinity_x_esm;
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/math-sign-x/dist/math-sign-x.esm.js


/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2016).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function math_sign_x_dist_math_sign_x_esm_sign2016(x) {
  var n = to_number_x_dist_to_number_x_esm_toNumber2016(x);

  if (n === 0 || node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}
/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2018).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function math_sign_x_dist_math_sign_x_esm_sign2018(x) {
  var n = to_number_x_dist_to_number_x_esm_toNumber2018(x);

  if (n === 0 || node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/to-integer-x/dist/to-integer-x.esm.js




var to_integer_x_dist_to_integer_x_esm_abs = Math.abs,
    to_integer_x_dist_to_integer_x_esm_floor = Math.floor;
/**
 * Converts `value` to an integer. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function to_integer_x_dist_to_integer_x_esm_toInteger2016(value) {
  var number = to_number_x_dist_to_number_x_esm_toNumber2016(value);

  if (node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || node_modules_is_finite_x_dist_is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return math_sign_x_dist_math_sign_x_esm_sign2016(number) * to_integer_x_dist_to_integer_x_esm_floor(to_integer_x_dist_to_integer_x_esm_abs(number));
}
/**
 * Converts `value` to an integer. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function to_integer_x_dist_to_integer_x_esm_toInteger2018(value) {
  var number = to_number_x_dist_to_number_x_esm_toNumber2018(value);

  if (node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || node_modules_is_finite_x_dist_is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return math_sign_x_dist_math_sign_x_esm_sign2018(number) * to_integer_x_dist_to_integer_x_esm_floor(to_integer_x_dist_to_integer_x_esm_abs(number));
}


// EXTERNAL MODULE: ./node_modules/array-includes-x/node_modules/max-safe-integer/index.js
var array_includes_x_node_modules_max_safe_integer = __webpack_require__(14);
var array_includes_x_node_modules_max_safe_integer_default = /*#__PURE__*/__webpack_require__.n(array_includes_x_node_modules_max_safe_integer);

// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/to-length-x/dist/to-length-x.esm.js


/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function to_length_x_dist_to_length_x_esm_toLength2016(value) {
  var len = to_integer_x_dist_to_integer_x_esm_toInteger2016(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > array_includes_x_node_modules_max_safe_integer_default.a) {
    return array_includes_x_node_modules_max_safe_integer_default.a;
  }

  return len;
}
/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function to_length_x_dist_to_length_x_esm_toLength2018(value) {
  var len = to_integer_x_dist_to_integer_x_esm_toInteger2018(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > array_includes_x_node_modules_max_safe_integer_default.a) {
    return array_includes_x_node_modules_max_safe_integer_default.a;
  }

  return len;
}


// CONCATENATED MODULE: ./node_modules/same-value-x/node_modules/is-nan-x/dist/is-nan-x.esm.js
/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} [value] - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 */
function same_value_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
}


// CONCATENATED MODULE: ./node_modules/same-value-x/dist/same-value-x.esm.js

/**
 * This method is the comparison abstract operation SameValue(x, y), where x
 * and y are ECMAScript language values, produces true or false.
 *
 * @param {*} [value1] - The first value to compare.
 * @param {*} [value2] - The second value to compare.
 * @returns {boolean} A Boolean indicating whether or not the two arguments are
 *  the same value.
 */

function sameValue(value1, value2) {
  if (value1 === 0 && value2 === 0) {
    return 1 / value1 === 1 / value2;
  }

  if (value1 === value2) {
    return true;
  }

  return same_value_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(value1) && same_value_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(value2);
}


// CONCATENATED MODULE: ./node_modules/same-value-zero-x/dist/same-value-zero-x.esm.js

/**
 * This method determines whether two values are the same value.
 * SameValueZero differs from SameValue (`Object.is`) only in its treatment
 * of +0 and -0.
 *
 * @param {*} [x] - The first value to compare.
 * @param {*} [y] - The second value to compare.
 * @returns {boolean} A Boolean indicating whether or not the two arguments
 * are the same value.
 */

function sameValueZero(x, y) {
  return x === y || sameValue(x, y);
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/attempt-x/dist/attempt-x.esm.js
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
function node_modules_attempt_x_dist_attempt_x_esm_attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var find_index_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_this = undefined;

function node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_hasSymbolSupport = node_modules_attempt_x_dist_attempt_x_esm_attempt(function () {
  node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_newArrowCheck(this, find_index_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var find_index_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm = (node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_hasSymbolSupport.threw === false && node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_hasSymbolSupport.value === true);


// EXTERNAL MODULE: ./node_modules/find-index-x/node_modules/is-primitive/index.js
var find_index_x_node_modules_is_primitive = __webpack_require__(5);
var find_index_x_node_modules_is_primitive_default = /*#__PURE__*/__webpack_require__.n(find_index_x_node_modules_is_primitive);

// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
function node_modules_to_boolean_x_dist_to_boolean_x_esm_toBoolean(value) {
  return !!value;
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/is-falsey-x/dist/is-falsey-x.esm.js

/**
 * This method tests if a given value is falsey.
 *
 * @param {*} [value] - The value to test.
 * @returns {boolean} `true` if the value is falsey: otherwise `false`.
 */

function node_modules_is_falsey_x_dist_is_falsey_x_esm_isFalsey(value) {
  return !node_modules_to_boolean_x_dist_to_boolean_x_esm_toBoolean(value);
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var node_modules_to_string_tag_x_dist_to_string_tag_x_esm_nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

function node_modules_to_string_tag_x_dist_to_string_tag_x_esm_toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return node_modules_to_string_tag_x_dist_to_string_tag_x_esm_nativeObjectToString.call(value);
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var find_index_x_node_modules_has_to_string_tag_x_dist_has_to_string_tag_x_esm = (find_index_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm &&
/* eslint-disable-next-line compat/compat */
is_symbol_default()(Symbol.toStringTag));


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function node_modules_require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(value) {
  if (isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/to-string-x/dist/to-string-x.esm.js

var node_modules_to_string_x_dist_to_string_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var node_modules_to_string_x_dist_to_string_x_esm_castString = node_modules_to_string_x_dist_to_string_x_esm_ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

function node_modules_to_string_x_dist_to_string_x_esm_ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(node_modules_to_string_x_dist_to_string_x_esm_ERROR_MESSAGE);
  }

  return node_modules_to_string_x_dist_to_string_x_esm_castString(value);
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

function node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(value) {
  return node_modules_to_string_x_dist_to_string_x_esm_ToString(node_modules_require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var node_modules_white_space_x_dist_white_space_x_esm_list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var node_modules_white_space_x_dist_white_space_x_esm_stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var node_modules_white_space_x_dist_white_space_x_esm_stringES2018 = '';
var find_index_x_node_modules_white_space_x_dist_white_space_x_esm_length = node_modules_white_space_x_dist_white_space_x_esm_list.length;

for (var find_index_x_node_modules_white_space_x_dist_white_space_x_esm_i = 0; find_index_x_node_modules_white_space_x_dist_white_space_x_esm_i < find_index_x_node_modules_white_space_x_dist_white_space_x_esm_length; find_index_x_node_modules_white_space_x_dist_white_space_x_esm_i += 1) {
  if (node_modules_white_space_x_dist_white_space_x_esm_list[find_index_x_node_modules_white_space_x_dist_white_space_x_esm_i].es2016) {
    node_modules_white_space_x_dist_white_space_x_esm_stringES2016 += node_modules_white_space_x_dist_white_space_x_esm_list[find_index_x_node_modules_white_space_x_dist_white_space_x_esm_i].string;
  }

  if (node_modules_white_space_x_dist_white_space_x_esm_list[find_index_x_node_modules_white_space_x_dist_white_space_x_esm_i].es2018) {
    node_modules_white_space_x_dist_white_space_x_esm_stringES2018 += node_modules_white_space_x_dist_white_space_x_esm_list[find_index_x_node_modules_white_space_x_dist_white_space_x_esm_i].string;
  }
}

var node_modules_white_space_x_dist_white_space_x_esm_string2018 = node_modules_white_space_x_dist_white_space_x_esm_stringES2018;
/* harmony default export */ var find_index_x_node_modules_white_space_x_dist_white_space_x_esm = (node_modules_white_space_x_dist_white_space_x_esm_string2018);
var node_modules_white_space_x_dist_white_space_x_esm_string2016 = node_modules_white_space_x_dist_white_space_x_esm_stringES2016;


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/trim-left-x/dist/trim-left-x.esm.js


var find_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING = '';
var node_modules_trim_left_x_dist_trim_left_x_esm_RegExpCtr = /none/.constructor;
var node_modules_trim_left_x_dist_trim_left_x_esm_reLeft2016 = new node_modules_trim_left_x_dist_trim_left_x_esm_RegExpCtr("^[".concat(node_modules_white_space_x_dist_white_space_x_esm_string2016, "]+"));
var node_modules_trim_left_x_dist_trim_left_x_esm_reLeft = new node_modules_trim_left_x_dist_trim_left_x_esm_RegExpCtr("^[".concat(find_index_x_node_modules_white_space_x_dist_white_space_x_esm, "]+"));
var node_modules_trim_left_x_dist_trim_left_x_esm_replace = find_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2016(string) {
  return node_modules_trim_left_x_dist_trim_left_x_esm_replace.call(node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), node_modules_trim_left_x_dist_trim_left_x_esm_reLeft2016, find_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2018(string) {
  return node_modules_trim_left_x_dist_trim_left_x_esm_replace.call(node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), node_modules_trim_left_x_dist_trim_left_x_esm_reLeft, find_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/trim-right-x/dist/trim-right-x.esm.js


var find_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING = '';
var find_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_RegExpCtr = /none/.constructor;
var node_modules_trim_right_x_dist_trim_right_x_esm_reRight2016 = new find_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_RegExpCtr("[".concat(node_modules_white_space_x_dist_white_space_x_esm_string2016, "]+$"));
var node_modules_trim_right_x_dist_trim_right_x_esm_reRight2018 = new find_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_RegExpCtr("[".concat(find_index_x_node_modules_white_space_x_dist_white_space_x_esm, "]+$"));
var find_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_replace = find_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function node_modules_trim_right_x_dist_trim_right_x_esm_trimRight2016(string) {
  return find_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_replace.call(node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), node_modules_trim_right_x_dist_trim_right_x_esm_reRight2016, find_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function node_modules_trim_right_x_dist_trim_right_x_esm_trimRight2018(string) {
  return find_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_replace.call(node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), node_modules_trim_right_x_dist_trim_right_x_esm_reRight2018, find_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function node_modules_trim_x_dist_trim_x_esm_trim2016(string) {
  return node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2016(node_modules_trim_right_x_dist_trim_right_x_esm_trimRight2016(string));
}
/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function node_modules_trim_x_dist_trim_x_esm_trim2018(string) {
  return node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2018(node_modules_trim_right_x_dist_trim_right_x_esm_trimRight2018(string));
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/normalize-space-x/dist/normalize-space-x.esm.js


var node_modules_normalize_space_x_dist_normalize_space_x_esm_SPACE = ' ';
var find_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_RegExpCtr = /none/.constructor;
var node_modules_normalize_space_x_dist_normalize_space_x_esm_reNormalize2016 = new find_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_RegExpCtr("[".concat(node_modules_white_space_x_dist_white_space_x_esm_string2016, "]+"), 'g');
var node_modules_normalize_space_x_dist_normalize_space_x_esm_reNormalize2018 = new find_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_RegExpCtr("[".concat(find_index_x_node_modules_white_space_x_dist_white_space_x_esm, "]+"), 'g');
var find_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_replace = node_modules_normalize_space_x_dist_normalize_space_x_esm_SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */

function node_modules_normalize_space_x_dist_normalize_space_x_esm_normalizeSpace2016(string) {
  return find_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_replace.call(node_modules_trim_x_dist_trim_x_esm_trim2016(string), node_modules_normalize_space_x_dist_normalize_space_x_esm_reNormalize2016, node_modules_normalize_space_x_dist_normalize_space_x_esm_SPACE);
}
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

function node_modules_normalize_space_x_dist_normalize_space_x_esm_normalizeSpace2018(string) {
  return find_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_replace.call(node_modules_trim_x_dist_trim_x_esm_trim2018(string), node_modules_normalize_space_x_dist_normalize_space_x_esm_reNormalize2018, node_modules_normalize_space_x_dist_normalize_space_x_esm_SPACE);
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/replace-comments-x/dist/replace-comments-x.esm.js


var find_index_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING = '';
var node_modules_replace_comments_x_dist_replace_comments_x_esm_STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var find_index_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_replace = find_index_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

function node_modules_replace_comments_x_dist_replace_comments_x_esm_replaceComments(string, replacement) {
  return find_index_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_replace.call(node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), node_modules_replace_comments_x_dist_replace_comments_x_esm_STRIP_COMMENTS, arguments.length > 1 ? node_modules_to_string_x_dist_to_string_x_esm_ToString(replacement) : find_index_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/is-function-x/dist/is-function-x.esm.js
var find_index_x_node_modules_is_function_x_dist_is_function_x_esm_this = undefined;

function find_index_x_node_modules_is_function_x_dist_is_function_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }









var find_index_x_node_modules_is_function_x_dist_is_function_x_esm_SPACE = ' ';
var node_modules_is_function_x_dist_is_function_x_esm_fToString = Function.prototype.toString;
var node_modules_is_function_x_dist_is_function_x_esm_funcTag = '[object Function]';
var node_modules_is_function_x_dist_is_function_x_esm_genTag = '[object GeneratorFunction]';
var node_modules_is_function_x_dist_is_function_x_esm_asyncTag = '[object AsyncFunction]';
var node_modules_is_function_x_dist_is_function_x_esm_ctrRx = /^class /;
var node_modules_is_function_x_dist_is_function_x_esm_test = node_modules_is_function_x_dist_is_function_x_esm_ctrRx.test;
var node_modules_is_function_x_dist_is_function_x_esm_hasNativeClass = node_modules_attempt_x_dist_attempt_x_esm_attempt(function () {
  find_index_x_node_modules_is_function_x_dist_is_function_x_esm_newArrowCheck(this, find_index_x_node_modules_is_function_x_dist_is_function_x_esm_this);

  /* eslint-disable-next-line no-new-func */
  return Function('"use strict"; return class My {};')();
}.bind(undefined)).threw === false;

var node_modules_is_function_x_dist_is_function_x_esm_testClassstring = function _testClassstring(value) {
  return node_modules_is_function_x_dist_is_function_x_esm_test.call(node_modules_is_function_x_dist_is_function_x_esm_ctrRx, node_modules_normalize_space_x_dist_normalize_space_x_esm_normalizeSpace2018(node_modules_replace_comments_x_dist_replace_comments_x_esm_replaceComments(node_modules_is_function_x_dist_is_function_x_esm_fToString.call(value), find_index_x_node_modules_is_function_x_dist_is_function_x_esm_SPACE)));
};

var node_modules_is_function_x_dist_is_function_x_esm_isES6ClassFn = function isES6ClassFunc(value) {
  var result = node_modules_attempt_x_dist_attempt_x_esm_attempt(node_modules_is_function_x_dist_is_function_x_esm_testClassstring, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var node_modules_is_function_x_dist_is_function_x_esm_tryFuncToString = function funcToString(value, allowClass) {
  if (node_modules_is_function_x_dist_is_function_x_esm_hasNativeClass && allowClass === false && node_modules_is_function_x_dist_is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  return node_modules_attempt_x_dist_attempt_x_esm_attempt.call(value, node_modules_is_function_x_dist_is_function_x_esm_fToString).threw === false;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


function node_modules_is_function_x_dist_is_function_x_esm_isFunction(value, allowClass) {
  if (find_index_x_node_modules_is_primitive_default()(value)) {
    return false;
  }

  if (find_index_x_node_modules_has_to_string_tag_x_dist_has_to_string_tag_x_esm) {
    return node_modules_is_function_x_dist_is_function_x_esm_tryFuncToString(value, node_modules_to_boolean_x_dist_to_boolean_x_esm_toBoolean(allowClass));
  }

  if (node_modules_is_function_x_dist_is_function_x_esm_hasNativeClass && node_modules_is_falsey_x_dist_is_falsey_x_esm_isFalsey(allowClass) && node_modules_is_function_x_dist_is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  var strTag = node_modules_to_string_tag_x_dist_to_string_tag_x_esm_toStringTag(value);
  return strTag === node_modules_is_function_x_dist_is_function_x_esm_funcTag || strTag === node_modules_is_function_x_dist_is_function_x_esm_genTag || strTag === node_modules_is_function_x_dist_is_function_x_esm_asyncTag;
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/to-primitive-x/dist/to-primitive-x.esm.js







var node_modules_to_primitive_x_dist_to_primitive_x_esm_ZERO = 0;
var node_modules_to_primitive_x_dist_to_primitive_x_esm_ONE = 1;
/* eslint-disable-next-line no-void */

var node_modules_to_primitive_x_dist_to_primitive_x_esm_UNDEFINED = void node_modules_to_primitive_x_dist_to_primitive_x_esm_ZERO;
var node_modules_to_primitive_x_dist_to_primitive_x_esm_NUMBER = 'number';
var node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING = 'string';
var node_modules_to_primitive_x_dist_to_primitive_x_esm_DEFAULT = 'default';
/** @type {StringConstructor} */

var node_modules_to_primitive_x_dist_to_primitive_x_esm_StringCtr = node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING.constructor;
/** @type {NumberConstructor} */

var node_modules_to_primitive_x_dist_to_primitive_x_esm_NumberCtr = node_modules_to_primitive_x_dist_to_primitive_x_esm_ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var node_modules_to_primitive_x_dist_to_primitive_x_esm_symToPrimitive = find_index_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var node_modules_to_primitive_x_dist_to_primitive_x_esm_symValueOf = find_index_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm && Symbol.prototype.valueOf;
var node_modules_to_primitive_x_dist_to_primitive_x_esm_toStringOrder = ['toString', 'valueOf'];
var node_modules_to_primitive_x_dist_to_primitive_x_esm_toNumberOrder = ['valueOf', 'toString'];
var node_modules_to_primitive_x_dist_to_primitive_x_esm_orderLength = 2;
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */

var node_modules_to_primitive_x_dist_to_primitive_x_esm_ordinaryToPrimitive = function _ordinaryToPrimitive(ordinary, hint) {
  node_modules_require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(ordinary);

  if (typeof hint !== 'string' || hint !== node_modules_to_primitive_x_dist_to_primitive_x_esm_NUMBER && hint !== node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING ? node_modules_to_primitive_x_dist_to_primitive_x_esm_toStringOrder : node_modules_to_primitive_x_dist_to_primitive_x_esm_toNumberOrder;
  var method;
  var result;

  for (var i = node_modules_to_primitive_x_dist_to_primitive_x_esm_ZERO; i < node_modules_to_primitive_x_dist_to_primitive_x_esm_orderLength; i += node_modules_to_primitive_x_dist_to_primitive_x_esm_ONE) {
    method = ordinary[methodNames[i]];

    if (node_modules_is_function_x_dist_is_function_x_esm_isFunction(method)) {
      result = method.call(ordinary);

      if (find_index_x_node_modules_is_primitive_default()(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var node_modules_to_primitive_x_dist_to_primitive_x_esm_getMethod = function _getMethod(object, property) {
  var func = object[property];

  if (isNil(func) === false) {
    if (node_modules_is_function_x_dist_is_function_x_esm_isFunction(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return node_modules_to_primitive_x_dist_to_primitive_x_esm_UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var node_modules_to_primitive_x_dist_to_primitive_x_esm_getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === node_modules_to_primitive_x_dist_to_primitive_x_esm_StringCtr) {
      return node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING;
    }

    if (value === node_modules_to_primitive_x_dist_to_primitive_x_esm_NumberCtr) {
      return node_modules_to_primitive_x_dist_to_primitive_x_esm_NUMBER;
    }
  }

  return node_modules_to_primitive_x_dist_to_primitive_x_esm_DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var find_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_getExoticToPrim = function getExoticToPrim(value) {
  if (find_index_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm) {
    if (node_modules_to_primitive_x_dist_to_primitive_x_esm_symToPrimitive) {
      return node_modules_to_primitive_x_dist_to_primitive_x_esm_getMethod(value, node_modules_to_primitive_x_dist_to_primitive_x_esm_symToPrimitive);
    }

    if (is_symbol_default()(value)) {
      return node_modules_to_primitive_x_dist_to_primitive_x_esm_symValueOf;
    }
  }

  return node_modules_to_primitive_x_dist_to_primitive_x_esm_UNDEFINED;
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {NumberConstructor|StringConstructor} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


function node_modules_to_primitive_x_dist_to_primitive_x_esm_toPrimitive(input, preferredType) {
  if (find_index_x_node_modules_is_primitive_default()(input)) {
    return input;
  }

  var hint = node_modules_to_primitive_x_dist_to_primitive_x_esm_getHint(preferredType, arguments.length > node_modules_to_primitive_x_dist_to_primitive_x_esm_ONE);
  var exoticToPrim = find_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_getExoticToPrim(input);

  if (typeof exoticToPrim !== 'undefined') {
    var result = exoticToPrim.call(input, hint);

    if (find_index_x_node_modules_is_primitive_default()(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  var newHint = hint === node_modules_to_primitive_x_dist_to_primitive_x_esm_DEFAULT && (is_date_object_default()(input) || is_symbol_default()(input)) ? node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING : hint;
  return node_modules_to_primitive_x_dist_to_primitive_x_esm_ordinaryToPrimitive(input, newHint === node_modules_to_primitive_x_dist_to_primitive_x_esm_DEFAULT ? node_modules_to_primitive_x_dist_to_primitive_x_esm_NUMBER : newHint);
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/nan-x/dist/nan-x.esm.js
/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 */
/* harmony default export */ var find_index_x_node_modules_nan_x_dist_nan_x_esm = (0 / 0);


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/parse-int-x/dist/parse-int-x.esm.js



var node_modules_parse_int_x_dist_parse_int_x_esm_nativeParseInt = parseInt;
/**  @type {Function} */

var node_modules_parse_int_x_dist_parse_int_x_esm_castNumber = 0 .constructor; // noinspection JSPotentiallyInvalidConstructorUsage

var node_modules_parse_int_x_dist_parse_int_x_esm_ref = '',
    node_modules_parse_int_x_dist_parse_int_x_esm_charAt = node_modules_parse_int_x_dist_parse_int_x_esm_ref.charAt;
var node_modules_parse_int_x_dist_parse_int_x_esm_hexRegex = /^[-+]?0[xX]/;
var find_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_test = node_modules_parse_int_x_dist_parse_int_x_esm_hexRegex.test;
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2016).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2016(string, radix) {
  var str = node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2016(node_modules_to_string_x_dist_to_string_x_esm_ToString(string));
  return node_modules_parse_int_x_dist_parse_int_x_esm_nativeParseInt(str, node_modules_parse_int_x_dist_parse_int_x_esm_castNumber(radix) || (find_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_test.call(node_modules_parse_int_x_dist_parse_int_x_esm_hexRegex, str) ? 16 : 10));
}
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2018).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2018(string, radix) {
  var str = node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2018(node_modules_to_string_x_dist_to_string_x_esm_ToString(string));

  if (node_modules_parse_int_x_dist_parse_int_x_esm_charAt.call(str, 0) === "\u180E") {
    return find_index_x_node_modules_nan_x_dist_nan_x_esm;
  }

  return node_modules_parse_int_x_dist_parse_int_x_esm_nativeParseInt(str, node_modules_parse_int_x_dist_parse_int_x_esm_castNumber(radix) || (find_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_test.call(node_modules_parse_int_x_dist_parse_int_x_esm_hexRegex, str) ? 16 : 10));
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/to-number-x/dist/to-number-x.esm.js





var node_modules_to_number_x_dist_to_number_x_esm_binaryRadix = 2;
var node_modules_to_number_x_dist_to_number_x_esm_octalRadix = 8;
var node_modules_to_number_x_dist_to_number_x_esm_testCharsCount = 2;
var find_index_x_node_modules_to_number_x_dist_to_number_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
/** @type {NumberConstructor} */

var find_index_x_node_modules_to_number_x_dist_to_number_x_esm_castNumber = node_modules_to_number_x_dist_to_number_x_esm_testCharsCount.constructor;
var node_modules_to_number_x_dist_to_number_x_esm_pStrSlice = find_index_x_node_modules_to_number_x_dist_to_number_x_esm_ERROR_MESSAGE.slice;
var node_modules_to_number_x_dist_to_number_x_esm_binaryRegex = /^0b[01]+$/i;
var node_modules_to_number_x_dist_to_number_x_esm_RegExpConstructor = node_modules_to_number_x_dist_to_number_x_esm_binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var find_index_x_node_modules_to_number_x_dist_to_number_x_esm_test = node_modules_to_number_x_dist_to_number_x_esm_binaryRegex.test;

var node_modules_to_number_x_dist_to_number_x_esm_isBinary = function _isBinary(value) {
  return find_index_x_node_modules_to_number_x_dist_to_number_x_esm_test.call(node_modules_to_number_x_dist_to_number_x_esm_binaryRegex, value);
};

var node_modules_to_number_x_dist_to_number_x_esm_octalRegex = /^0o[0-7]+$/i;

var node_modules_to_number_x_dist_to_number_x_esm_isOctal = function _isOctal(value) {
  return find_index_x_node_modules_to_number_x_dist_to_number_x_esm_test.call(node_modules_to_number_x_dist_to_number_x_esm_octalRegex, value);
};

var node_modules_to_number_x_dist_to_number_x_esm_nonWSregex2016 = new node_modules_to_number_x_dist_to_number_x_esm_RegExpConstructor("[\x85\u200B\uFFFE]", 'g');

var node_modules_to_number_x_dist_to_number_x_esm_hasNonWS2016 = function _hasNonWS(value) {
  return find_index_x_node_modules_to_number_x_dist_to_number_x_esm_test.call(node_modules_to_number_x_dist_to_number_x_esm_nonWSregex2016, value);
};

var node_modules_to_number_x_dist_to_number_x_esm_nonWSregex2018 = new node_modules_to_number_x_dist_to_number_x_esm_RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var node_modules_to_number_x_dist_to_number_x_esm_hasNonWS2018 = function _hasNonWS(value) {
  return find_index_x_node_modules_to_number_x_dist_to_number_x_esm_test.call(node_modules_to_number_x_dist_to_number_x_esm_nonWSregex2018, value);
};

var node_modules_to_number_x_dist_to_number_x_esm_invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var node_modules_to_number_x_dist_to_number_x_esm_isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return find_index_x_node_modules_to_number_x_dist_to_number_x_esm_test.call(node_modules_to_number_x_dist_to_number_x_esm_invalidHexLiteral, value);
};
/**
 * This method converts argument to a value of type Number. (ES2016).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


function node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(argument) {
  var value = node_modules_to_primitive_x_dist_to_primitive_x_esm_toPrimitive(argument, Number);

  if (is_symbol_default()(value)) {
    throw new TypeError(find_index_x_node_modules_to_number_x_dist_to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (node_modules_to_number_x_dist_to_number_x_esm_isBinary(value)) {
      return node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2016(node_modules_to_number_x_dist_to_number_x_esm_pStrSlice.call(value, node_modules_to_number_x_dist_to_number_x_esm_testCharsCount), node_modules_to_number_x_dist_to_number_x_esm_binaryRadix));
    }

    if (node_modules_to_number_x_dist_to_number_x_esm_isOctal(value)) {
      return node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2016(node_modules_to_number_x_dist_to_number_x_esm_pStrSlice.call(value, node_modules_to_number_x_dist_to_number_x_esm_testCharsCount), node_modules_to_number_x_dist_to_number_x_esm_octalRadix));
    }

    if (node_modules_to_number_x_dist_to_number_x_esm_hasNonWS2016(value) || node_modules_to_number_x_dist_to_number_x_esm_isInvalidHexLiteral(value)) {
      return find_index_x_node_modules_nan_x_dist_nan_x_esm;
    }

    var trimmed = node_modules_trim_x_dist_trim_x_esm_trim2016(value);

    if (trimmed !== value) {
      return node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(trimmed);
    }
  }

  return find_index_x_node_modules_to_number_x_dist_to_number_x_esm_castNumber(value);
}
/**
 * This method converts argument to a value of type Number. (ES2018).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */

function node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(argument) {
  var value = node_modules_to_primitive_x_dist_to_primitive_x_esm_toPrimitive(argument, find_index_x_node_modules_to_number_x_dist_to_number_x_esm_castNumber);

  if (is_symbol_default()(value)) {
    throw new TypeError(find_index_x_node_modules_to_number_x_dist_to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (node_modules_to_number_x_dist_to_number_x_esm_isBinary(value)) {
      return node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2018(node_modules_to_number_x_dist_to_number_x_esm_pStrSlice.call(value, node_modules_to_number_x_dist_to_number_x_esm_testCharsCount), node_modules_to_number_x_dist_to_number_x_esm_binaryRadix));
    }

    if (node_modules_to_number_x_dist_to_number_x_esm_isOctal(value)) {
      return node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2018(node_modules_to_number_x_dist_to_number_x_esm_pStrSlice.call(value, node_modules_to_number_x_dist_to_number_x_esm_testCharsCount), node_modules_to_number_x_dist_to_number_x_esm_octalRadix));
    }

    if (node_modules_to_number_x_dist_to_number_x_esm_hasNonWS2018(value) || node_modules_to_number_x_dist_to_number_x_esm_isInvalidHexLiteral(value)) {
      return find_index_x_node_modules_nan_x_dist_nan_x_esm;
    }

    var trimmed = node_modules_trim_x_dist_trim_x_esm_trim2018(value);

    if (trimmed !== value) {
      return node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(trimmed);
    }
  }

  return find_index_x_node_modules_to_number_x_dist_to_number_x_esm_castNumber(value);
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/is-nan-x/dist/is-nan-x.esm.js
/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} [value] - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 */
function find_index_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/infinity-x/dist/infinity-x.esm.js
/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 */
/* harmony default export */ var find_index_x_node_modules_infinity_x_dist_infinity_x_esm = (1 / 0);


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/is-finite-x/dist/is-finite-x.esm.js


/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} [number] - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

function find_index_x_node_modules_is_finite_x_dist_is_finite_x_esm_isFinite(number) {
  return typeof number === 'number' && find_index_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(number) === false && number !== find_index_x_node_modules_infinity_x_dist_infinity_x_esm && number !== -find_index_x_node_modules_infinity_x_dist_infinity_x_esm;
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/math-sign-x/dist/math-sign-x.esm.js


/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2016).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function node_modules_math_sign_x_dist_math_sign_x_esm_sign2016(x) {
  var n = node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(x);

  if (n === 0 || find_index_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}
/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2018).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function node_modules_math_sign_x_dist_math_sign_x_esm_sign2018(x) {
  var n = node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(x);

  if (n === 0 || find_index_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/to-integer-x/dist/to-integer-x.esm.js




var node_modules_to_integer_x_dist_to_integer_x_esm_abs = Math.abs,
    node_modules_to_integer_x_dist_to_integer_x_esm_floor = Math.floor;
/**
 * Converts `value` to an integer. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function node_modules_to_integer_x_dist_to_integer_x_esm_toInteger2016(value) {
  var number = node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(value);

  if (find_index_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || find_index_x_node_modules_is_finite_x_dist_is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return node_modules_math_sign_x_dist_math_sign_x_esm_sign2016(number) * node_modules_to_integer_x_dist_to_integer_x_esm_floor(node_modules_to_integer_x_dist_to_integer_x_esm_abs(number));
}
/**
 * Converts `value` to an integer. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function node_modules_to_integer_x_dist_to_integer_x_esm_toInteger2018(value) {
  var number = node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(value);

  if (find_index_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || find_index_x_node_modules_is_finite_x_dist_is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return node_modules_math_sign_x_dist_math_sign_x_esm_sign2018(number) * node_modules_to_integer_x_dist_to_integer_x_esm_floor(node_modules_to_integer_x_dist_to_integer_x_esm_abs(number));
}


// EXTERNAL MODULE: ./node_modules/find-index-x/node_modules/max-safe-integer/index.js
var find_index_x_node_modules_max_safe_integer = __webpack_require__(15);
var find_index_x_node_modules_max_safe_integer_default = /*#__PURE__*/__webpack_require__.n(find_index_x_node_modules_max_safe_integer);

// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/to-length-x/dist/to-length-x.esm.js


/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function node_modules_to_length_x_dist_to_length_x_esm_toLength2016(value) {
  var len = node_modules_to_integer_x_dist_to_integer_x_esm_toInteger2016(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > find_index_x_node_modules_max_safe_integer_default.a) {
    return find_index_x_node_modules_max_safe_integer_default.a;
  }

  return len;
}
/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function node_modules_to_length_x_dist_to_length_x_esm_toLength2018(value) {
  var len = node_modules_to_integer_x_dist_to_integer_x_esm_toInteger2018(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > find_index_x_node_modules_max_safe_integer_default.a) {
    return find_index_x_node_modules_max_safe_integer_default.a;
  }

  return len;
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/to-object-x/dist/to-object-x.esm.js

var node_modules_to_object_x_dist_to_object_x_esm_castObject = {}.constructor;
/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!object} The `value` converted to an object.
 */

function node_modules_to_object_x_dist_to_object_x_esm_toObject(value) {
  return node_modules_to_object_x_dist_to_object_x_esm_castObject(node_modules_require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/to-string-symbols-supported-x/dist/to-string-symbols-supported-x.esm.js


/* eslint-disable-next-line compat/compat */

var dist_to_string_symbols_supported_x_esm_pToString = find_index_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm && Symbol.prototype.toString;
var dist_to_string_symbols_supported_x_esm_isSymbolFn = typeof dist_to_string_symbols_supported_x_esm_pToString === 'function' && is_symbol_default.a;
/** @type {Function} */

var to_string_symbols_supported_x_dist_to_string_symbols_supported_x_esm_castString = ''.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String,
 * however the specification states that if the argument is a Symbol then a
 * 'TypeError' is thrown. This version also allows Symbols be converted to
 * a string. Other uncoercible exotics will still throw though.
 *
 * @param {*} [value] - The value to convert to a string.
 * @returns {string} The converted value.
 */

function dist_to_string_symbols_supported_x_esm_toStringSymbolsSupported(value) {
  return dist_to_string_symbols_supported_x_esm_isSymbolFn && dist_to_string_symbols_supported_x_esm_isSymbolFn(value) ? dist_to_string_symbols_supported_x_esm_pToString.call(value) : to_string_symbols_supported_x_dist_to_string_symbols_supported_x_esm_castString(value);
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/assert-is-function-x/dist/assert-is-function-x.esm.js



/**
 * Tests `callback` to see if it is a function, throws a `TypeError` if it is
 * not. Otherwise returns the `callback`.
 *
 * @param {*} callback - The argument to be tested.
 * @throws {TypeError} Throws if `callback` is not a function.
 * @returns {*} Returns `callback` if it is function.
 */

function dist_assert_is_function_x_esm_assertIsFunction(callback) {
  if (node_modules_is_function_x_dist_is_function_x_esm_isFunction(callback) === false) {
    var msg = find_index_x_node_modules_is_primitive_default()(callback) ? dist_to_string_symbols_supported_x_esm_toStringSymbolsSupported(callback) : '#<Object>';
    throw new TypeError("".concat(msg, " is not a function"));
  }

  return callback;
}


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/has-boxed-string-x/dist/has-boxed-string-x.esm.js
var node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm_string = 'a';
var has_boxed_string_x_dist_has_boxed_string_x_esm_boxedString = {}.constructor(node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm_string);
/**
 * Check failure of by-index access of string characters (IE < 9)
 * and failure of `0 in boxedString` (Rhino).
 *
 * `true` if no failure; otherwise `false`.
 *
 * @type boolean
 */

var has_boxed_string_x_dist_has_boxed_string_x_esm_hasBoxed = has_boxed_string_x_dist_has_boxed_string_x_esm_boxedString[0] === node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm_string && 0 in has_boxed_string_x_dist_has_boxed_string_x_esm_boxedString;
/* harmony default export */ var node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm = (has_boxed_string_x_dist_has_boxed_string_x_esm_hasBoxed);


// CONCATENATED MODULE: ./node_modules/find-index-x/node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js


var split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_EMPTY_STRING = '';
var split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_strSplit = split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_EMPTY_STRING.split;
var split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_isStringFn = node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm === false && typeof split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_strSplit === 'function' && is_string_default.a;
/**
 * This method tests if a value is a string with the boxed bug; splits to an
 * array for iteration; otherwise returns the original value.
 *
 * @param {*} [value] - The value to be tested.
 * @returns {*} An array or characters if value was a string with the boxed bug;
 *  otherwise the value.
 */

function split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_splitIfBoxedBug(value) {
  return split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_isStringFn && split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_isStringFn(value) ? split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_strSplit.call(value, split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_EMPTY_STRING) : value;
}


// CONCATENATED MODULE: ./node_modules/find-index-x/dist/find-index-x.esm.js
var find_index_x_esm_this = undefined;

function find_index_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }






var pFindIndex = typeof Array.prototype.findIndex === 'function' && Array.prototype.findIndex;
var find_index_x_esm_isWorking;

if (pFindIndex) {
  var testArr = [];
  testArr.length = 2;
  testArr[1] = 1;
  var find_index_x_esm_res = node_modules_attempt_x_dist_attempt_x_esm_attempt.call(testArr, pFindIndex, function (item, idx) {
    find_index_x_esm_newArrowCheck(this, find_index_x_esm_this);

    return idx === 0;
  }.bind(undefined));
  find_index_x_esm_isWorking = find_index_x_esm_res.threw === false && find_index_x_esm_res.value === 0;

  if (find_index_x_esm_isWorking) {
    find_index_x_esm_res = node_modules_attempt_x_dist_attempt_x_esm_attempt.call(1, pFindIndex, function (item, idx) {
      find_index_x_esm_newArrowCheck(this, find_index_x_esm_this);

      return idx === 0;
    }.bind(undefined));
    find_index_x_esm_isWorking = find_index_x_esm_res.threw === false && find_index_x_esm_res.value === -1;
  }

  if (find_index_x_esm_isWorking) {
    find_index_x_esm_isWorking = node_modules_attempt_x_dist_attempt_x_esm_attempt.call([], pFindIndex).threw;
  }

  if (find_index_x_esm_isWorking) {
    find_index_x_esm_res = node_modules_attempt_x_dist_attempt_x_esm_attempt.call('abc', pFindIndex, function (item) {
      find_index_x_esm_newArrowCheck(this, find_index_x_esm_this);

      return item === 'c';
    }.bind(undefined));
    find_index_x_esm_isWorking = find_index_x_esm_res.threw === false && find_index_x_esm_res.value === 2;
  }

  if (find_index_x_esm_isWorking) {
    find_index_x_esm_res = node_modules_attempt_x_dist_attempt_x_esm_attempt.call(function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }('a', 'b', 'c'), pFindIndex, function (item) {
      find_index_x_esm_newArrowCheck(this, find_index_x_esm_this);

      return item === 'c';
    }.bind(undefined));
    find_index_x_esm_isWorking = find_index_x_esm_res.threw === false && find_index_x_esm_res.value === 2;
  }
}
/**
 * Like `findIndex`, this method returns an index in the array, if an element
 * in the array satisfies the provided testing function. Otherwise -1 is returned.
 *
 * @param {Array} array - The array to search.
 * @throws {TypeError} If array is `null` or `undefined`-.
 * @param {Function} callback - Function to execute on each value in the array,
 *  taking three arguments: `element`, `index` and `array`.
 * @throws {TypeError} If `callback` is not a function.
 * @param {*} [thisArg] - Object to use as `this` when executing `callback`.
 * @returns {number} Returns index of positively tested element, otherwise -1.
 */


var findIdx;

if (find_index_x_esm_isWorking) {
  findIdx = function findIndex(array, callback) {
    var args = [callback];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return pFindIndex.apply(array, args);
  };
} else {
  findIdx = function findIndex(array, callback) {
    var object = node_modules_to_object_x_dist_to_object_x_esm_toObject(array);
    dist_assert_is_function_x_esm_assertIsFunction(callback);
    var iterable = split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_splitIfBoxedBug(object);
    var length = node_modules_to_length_x_dist_to_length_x_esm_toLength2018(iterable.length);

    if (length < 1) {
      return -1;
    }

    var thisArg;

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      thisArg = arguments[2];
    }

    var index = 0;

    while (index < length) {
      if (callback.call(thisArg, iterable[index], index, object)) {
        return index;
      }

      index += 1;
    }

    return -1;
  };
}

var fi = findIdx;
/* harmony default export */ var find_index_x_esm = (fi);


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/has-boxed-string-x/dist/has-boxed-string-x.esm.js
var array_includes_x_node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm_string = 'a';
var node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm_boxedString = {}.constructor(array_includes_x_node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm_string);
/**
 * Check failure of by-index access of string characters (IE < 9)
 * and failure of `0 in boxedString` (Rhino).
 *
 * `true` if no failure; otherwise `false`.
 *
 * @type boolean
 */

var node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm_hasBoxed = node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm_boxedString[0] === array_includes_x_node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm_string && 0 in node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm_boxedString;
/* harmony default export */ var array_includes_x_node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm = (node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm_hasBoxed);


// CONCATENATED MODULE: ./node_modules/array-includes-x/node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js


var node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_EMPTY_STRING = '';
var node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_strSplit = node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_EMPTY_STRING.split;
var node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_isStringFn = array_includes_x_node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm === false && typeof node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_strSplit === 'function' && is_string_default.a;
/**
 * This method tests if a value is a string with the boxed bug; splits to an
 * array for iteration; otherwise returns the original value.
 *
 * @param {*} [value] - The value to be tested.
 * @returns {*} An array or characters if value was a string with the boxed bug;
 *  otherwise the value.
 */

function node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_splitIfBoxedBug(value) {
  return node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_isStringFn && node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_isStringFn(value) ? node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_strSplit.call(value, node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_EMPTY_STRING) : value;
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/is-nan-x/dist/is-nan-x.esm.js
/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} [value] - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 */
function index_of_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
function index_of_x_node_modules_to_boolean_x_dist_to_boolean_x_esm_toBoolean(value) {
  return !!value;
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/is-falsey-x/dist/is-falsey-x.esm.js

/**
 * This method tests if a given value is falsey.
 *
 * @param {*} [value] - The value to test.
 * @returns {boolean} `true` if the value is falsey: otherwise `false`.
 */

function index_of_x_node_modules_is_falsey_x_dist_is_falsey_x_esm_isFalsey(value) {
  return !index_of_x_node_modules_to_boolean_x_dist_to_boolean_x_esm_toBoolean(value);
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function index_of_x_node_modules_require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(value) {
  if (isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/to-object-x/dist/to-object-x.esm.js

var index_of_x_node_modules_to_object_x_dist_to_object_x_esm_castObject = {}.constructor;
/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!object} The `value` converted to an object.
 */

function index_of_x_node_modules_to_object_x_dist_to_object_x_esm_toObject(value) {
  return index_of_x_node_modules_to_object_x_dist_to_object_x_esm_castObject(index_of_x_node_modules_require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/attempt-x/dist/attempt-x.esm.js
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
function index_of_x_node_modules_attempt_x_dist_attempt_x_esm_attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var index_of_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_this = undefined;

function index_of_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var index_of_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_hasSymbolSupport = index_of_x_node_modules_attempt_x_dist_attempt_x_esm_attempt(function () {
  index_of_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_newArrowCheck(this, index_of_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var index_of_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm = (index_of_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_hasSymbolSupport.threw === false && index_of_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_hasSymbolSupport.value === true);


// EXTERNAL MODULE: ./node_modules/index-of-x/node_modules/is-primitive/index.js
var index_of_x_node_modules_is_primitive = __webpack_require__(8);
var index_of_x_node_modules_is_primitive_default = /*#__PURE__*/__webpack_require__.n(index_of_x_node_modules_is_primitive);

// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var index_of_x_node_modules_to_string_tag_x_dist_to_string_tag_x_esm_nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

function index_of_x_node_modules_to_string_tag_x_dist_to_string_tag_x_esm_toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return index_of_x_node_modules_to_string_tag_x_dist_to_string_tag_x_esm_nativeObjectToString.call(value);
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var index_of_x_node_modules_has_to_string_tag_x_dist_has_to_string_tag_x_esm = (index_of_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm &&
/* eslint-disable-next-line compat/compat */
is_symbol_default()(Symbol.toStringTag));


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/to-string-x/dist/to-string-x.esm.js

var index_of_x_node_modules_to_string_x_dist_to_string_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var index_of_x_node_modules_to_string_x_dist_to_string_x_esm_castString = index_of_x_node_modules_to_string_x_dist_to_string_x_esm_ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

function index_of_x_node_modules_to_string_x_dist_to_string_x_esm_ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(index_of_x_node_modules_to_string_x_dist_to_string_x_esm_ERROR_MESSAGE);
  }

  return index_of_x_node_modules_to_string_x_dist_to_string_x_esm_castString(value);
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

function index_of_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(value) {
  return index_of_x_node_modules_to_string_x_dist_to_string_x_esm_ToString(index_of_x_node_modules_require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var index_of_x_node_modules_white_space_x_dist_white_space_x_esm_list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var index_of_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var index_of_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2018 = '';
var index_of_x_node_modules_white_space_x_dist_white_space_x_esm_length = index_of_x_node_modules_white_space_x_dist_white_space_x_esm_list.length;

for (var index_of_x_node_modules_white_space_x_dist_white_space_x_esm_i = 0; index_of_x_node_modules_white_space_x_dist_white_space_x_esm_i < index_of_x_node_modules_white_space_x_dist_white_space_x_esm_length; index_of_x_node_modules_white_space_x_dist_white_space_x_esm_i += 1) {
  if (index_of_x_node_modules_white_space_x_dist_white_space_x_esm_list[index_of_x_node_modules_white_space_x_dist_white_space_x_esm_i].es2016) {
    index_of_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2016 += index_of_x_node_modules_white_space_x_dist_white_space_x_esm_list[index_of_x_node_modules_white_space_x_dist_white_space_x_esm_i].string;
  }

  if (index_of_x_node_modules_white_space_x_dist_white_space_x_esm_list[index_of_x_node_modules_white_space_x_dist_white_space_x_esm_i].es2018) {
    index_of_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2018 += index_of_x_node_modules_white_space_x_dist_white_space_x_esm_list[index_of_x_node_modules_white_space_x_dist_white_space_x_esm_i].string;
  }
}

var index_of_x_node_modules_white_space_x_dist_white_space_x_esm_string2018 = index_of_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2018;
/* harmony default export */ var index_of_x_node_modules_white_space_x_dist_white_space_x_esm = (index_of_x_node_modules_white_space_x_dist_white_space_x_esm_string2018);
var index_of_x_node_modules_white_space_x_dist_white_space_x_esm_string2016 = index_of_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2016;


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/trim-left-x/dist/trim-left-x.esm.js


var index_of_x_node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING = '';
var index_of_x_node_modules_trim_left_x_dist_trim_left_x_esm_RegExpCtr = /none/.constructor;
var index_of_x_node_modules_trim_left_x_dist_trim_left_x_esm_reLeft2016 = new index_of_x_node_modules_trim_left_x_dist_trim_left_x_esm_RegExpCtr("^[".concat(index_of_x_node_modules_white_space_x_dist_white_space_x_esm_string2016, "]+"));
var index_of_x_node_modules_trim_left_x_dist_trim_left_x_esm_reLeft = new index_of_x_node_modules_trim_left_x_dist_trim_left_x_esm_RegExpCtr("^[".concat(index_of_x_node_modules_white_space_x_dist_white_space_x_esm, "]+"));
var index_of_x_node_modules_trim_left_x_dist_trim_left_x_esm_replace = index_of_x_node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function index_of_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2016(string) {
  return index_of_x_node_modules_trim_left_x_dist_trim_left_x_esm_replace.call(index_of_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), index_of_x_node_modules_trim_left_x_dist_trim_left_x_esm_reLeft2016, index_of_x_node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function index_of_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2018(string) {
  return index_of_x_node_modules_trim_left_x_dist_trim_left_x_esm_replace.call(index_of_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), index_of_x_node_modules_trim_left_x_dist_trim_left_x_esm_reLeft, index_of_x_node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/trim-right-x/dist/trim-right-x.esm.js


var index_of_x_node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING = '';
var index_of_x_node_modules_trim_right_x_dist_trim_right_x_esm_RegExpCtr = /none/.constructor;
var index_of_x_node_modules_trim_right_x_dist_trim_right_x_esm_reRight2016 = new index_of_x_node_modules_trim_right_x_dist_trim_right_x_esm_RegExpCtr("[".concat(index_of_x_node_modules_white_space_x_dist_white_space_x_esm_string2016, "]+$"));
var index_of_x_node_modules_trim_right_x_dist_trim_right_x_esm_reRight2018 = new index_of_x_node_modules_trim_right_x_dist_trim_right_x_esm_RegExpCtr("[".concat(index_of_x_node_modules_white_space_x_dist_white_space_x_esm, "]+$"));
var index_of_x_node_modules_trim_right_x_dist_trim_right_x_esm_replace = index_of_x_node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function index_of_x_node_modules_trim_right_x_dist_trim_right_x_esm_trimRight2016(string) {
  return index_of_x_node_modules_trim_right_x_dist_trim_right_x_esm_replace.call(index_of_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), index_of_x_node_modules_trim_right_x_dist_trim_right_x_esm_reRight2016, index_of_x_node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function index_of_x_node_modules_trim_right_x_dist_trim_right_x_esm_trimRight2018(string) {
  return index_of_x_node_modules_trim_right_x_dist_trim_right_x_esm_replace.call(index_of_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), index_of_x_node_modules_trim_right_x_dist_trim_right_x_esm_reRight2018, index_of_x_node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function index_of_x_node_modules_trim_x_dist_trim_x_esm_trim2016(string) {
  return index_of_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2016(index_of_x_node_modules_trim_right_x_dist_trim_right_x_esm_trimRight2016(string));
}
/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function index_of_x_node_modules_trim_x_dist_trim_x_esm_trim2018(string) {
  return index_of_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2018(index_of_x_node_modules_trim_right_x_dist_trim_right_x_esm_trimRight2018(string));
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/normalize-space-x/dist/normalize-space-x.esm.js


var index_of_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_SPACE = ' ';
var index_of_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_RegExpCtr = /none/.constructor;
var index_of_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_reNormalize2016 = new index_of_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_RegExpCtr("[".concat(index_of_x_node_modules_white_space_x_dist_white_space_x_esm_string2016, "]+"), 'g');
var index_of_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_reNormalize2018 = new index_of_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_RegExpCtr("[".concat(index_of_x_node_modules_white_space_x_dist_white_space_x_esm, "]+"), 'g');
var index_of_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_replace = index_of_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */

function index_of_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_normalizeSpace2016(string) {
  return index_of_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_replace.call(index_of_x_node_modules_trim_x_dist_trim_x_esm_trim2016(string), index_of_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_reNormalize2016, index_of_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_SPACE);
}
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

function index_of_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_normalizeSpace2018(string) {
  return index_of_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_replace.call(index_of_x_node_modules_trim_x_dist_trim_x_esm_trim2018(string), index_of_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_reNormalize2018, index_of_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_SPACE);
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/replace-comments-x/dist/replace-comments-x.esm.js


var index_of_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING = '';
var index_of_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var index_of_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_replace = index_of_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

function index_of_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_replaceComments(string, replacement) {
  return index_of_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_replace.call(index_of_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), index_of_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_STRIP_COMMENTS, arguments.length > 1 ? index_of_x_node_modules_to_string_x_dist_to_string_x_esm_ToString(replacement) : index_of_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/is-function-x/dist/is-function-x.esm.js
var index_of_x_node_modules_is_function_x_dist_is_function_x_esm_this = undefined;

function index_of_x_node_modules_is_function_x_dist_is_function_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }









var index_of_x_node_modules_is_function_x_dist_is_function_x_esm_SPACE = ' ';
var index_of_x_node_modules_is_function_x_dist_is_function_x_esm_fToString = Function.prototype.toString;
var index_of_x_node_modules_is_function_x_dist_is_function_x_esm_funcTag = '[object Function]';
var index_of_x_node_modules_is_function_x_dist_is_function_x_esm_genTag = '[object GeneratorFunction]';
var index_of_x_node_modules_is_function_x_dist_is_function_x_esm_asyncTag = '[object AsyncFunction]';
var index_of_x_node_modules_is_function_x_dist_is_function_x_esm_ctrRx = /^class /;
var index_of_x_node_modules_is_function_x_dist_is_function_x_esm_test = index_of_x_node_modules_is_function_x_dist_is_function_x_esm_ctrRx.test;
var index_of_x_node_modules_is_function_x_dist_is_function_x_esm_hasNativeClass = index_of_x_node_modules_attempt_x_dist_attempt_x_esm_attempt(function () {
  index_of_x_node_modules_is_function_x_dist_is_function_x_esm_newArrowCheck(this, index_of_x_node_modules_is_function_x_dist_is_function_x_esm_this);

  /* eslint-disable-next-line no-new-func */
  return Function('"use strict"; return class My {};')();
}.bind(undefined)).threw === false;

var index_of_x_node_modules_is_function_x_dist_is_function_x_esm_testClassstring = function _testClassstring(value) {
  return index_of_x_node_modules_is_function_x_dist_is_function_x_esm_test.call(index_of_x_node_modules_is_function_x_dist_is_function_x_esm_ctrRx, index_of_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_normalizeSpace2018(index_of_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_replaceComments(index_of_x_node_modules_is_function_x_dist_is_function_x_esm_fToString.call(value), index_of_x_node_modules_is_function_x_dist_is_function_x_esm_SPACE)));
};

var index_of_x_node_modules_is_function_x_dist_is_function_x_esm_isES6ClassFn = function isES6ClassFunc(value) {
  var result = index_of_x_node_modules_attempt_x_dist_attempt_x_esm_attempt(index_of_x_node_modules_is_function_x_dist_is_function_x_esm_testClassstring, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var index_of_x_node_modules_is_function_x_dist_is_function_x_esm_tryFuncToString = function funcToString(value, allowClass) {
  if (index_of_x_node_modules_is_function_x_dist_is_function_x_esm_hasNativeClass && allowClass === false && index_of_x_node_modules_is_function_x_dist_is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  return index_of_x_node_modules_attempt_x_dist_attempt_x_esm_attempt.call(value, index_of_x_node_modules_is_function_x_dist_is_function_x_esm_fToString).threw === false;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


function index_of_x_node_modules_is_function_x_dist_is_function_x_esm_isFunction(value, allowClass) {
  if (index_of_x_node_modules_is_primitive_default()(value)) {
    return false;
  }

  if (index_of_x_node_modules_has_to_string_tag_x_dist_has_to_string_tag_x_esm) {
    return index_of_x_node_modules_is_function_x_dist_is_function_x_esm_tryFuncToString(value, index_of_x_node_modules_to_boolean_x_dist_to_boolean_x_esm_toBoolean(allowClass));
  }

  if (index_of_x_node_modules_is_function_x_dist_is_function_x_esm_hasNativeClass && index_of_x_node_modules_is_falsey_x_dist_is_falsey_x_esm_isFalsey(allowClass) && index_of_x_node_modules_is_function_x_dist_is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  var strTag = index_of_x_node_modules_to_string_tag_x_dist_to_string_tag_x_esm_toStringTag(value);
  return strTag === index_of_x_node_modules_is_function_x_dist_is_function_x_esm_funcTag || strTag === index_of_x_node_modules_is_function_x_dist_is_function_x_esm_genTag || strTag === index_of_x_node_modules_is_function_x_dist_is_function_x_esm_asyncTag;
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/to-primitive-x/dist/to-primitive-x.esm.js







var index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ZERO = 0;
var index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ONE = 1;
/* eslint-disable-next-line no-void */

var index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_UNDEFINED = void index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ZERO;
var index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_NUMBER = 'number';
var index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING = 'string';
var index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_DEFAULT = 'default';
/** @type {StringConstructor} */

var index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_StringCtr = index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING.constructor;
/** @type {NumberConstructor} */

var index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_NumberCtr = index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_symToPrimitive = index_of_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_symValueOf = index_of_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm && Symbol.prototype.valueOf;
var index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_toStringOrder = ['toString', 'valueOf'];
var index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_toNumberOrder = ['valueOf', 'toString'];
var index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_orderLength = 2;
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */

var index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ordinaryToPrimitive = function _ordinaryToPrimitive(ordinary, hint) {
  index_of_x_node_modules_require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(ordinary);

  if (typeof hint !== 'string' || hint !== index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_NUMBER && hint !== index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING ? index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_toStringOrder : index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_toNumberOrder;
  var method;
  var result;

  for (var i = index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ZERO; i < index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_orderLength; i += index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ONE) {
    method = ordinary[methodNames[i]];

    if (index_of_x_node_modules_is_function_x_dist_is_function_x_esm_isFunction(method)) {
      result = method.call(ordinary);

      if (index_of_x_node_modules_is_primitive_default()(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_getMethod = function _getMethod(object, property) {
  var func = object[property];

  if (isNil(func) === false) {
    if (index_of_x_node_modules_is_function_x_dist_is_function_x_esm_isFunction(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_StringCtr) {
      return index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING;
    }

    if (value === index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_NumberCtr) {
      return index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_NUMBER;
    }
  }

  return index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_getExoticToPrim = function getExoticToPrim(value) {
  if (index_of_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm) {
    if (index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_symToPrimitive) {
      return index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_getMethod(value, index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_symToPrimitive);
    }

    if (is_symbol_default()(value)) {
      return index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_symValueOf;
    }
  }

  return index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_UNDEFINED;
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {NumberConstructor|StringConstructor} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


function index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_toPrimitive(input, preferredType) {
  if (index_of_x_node_modules_is_primitive_default()(input)) {
    return input;
  }

  var hint = index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_getHint(preferredType, arguments.length > index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ONE);
  var exoticToPrim = index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_getExoticToPrim(input);

  if (typeof exoticToPrim !== 'undefined') {
    var result = exoticToPrim.call(input, hint);

    if (index_of_x_node_modules_is_primitive_default()(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  var newHint = hint === index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_DEFAULT && (is_date_object_default()(input) || is_symbol_default()(input)) ? index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING : hint;
  return index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ordinaryToPrimitive(input, newHint === index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_DEFAULT ? index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_NUMBER : newHint);
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/nan-x/dist/nan-x.esm.js
/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 */
/* harmony default export */ var index_of_x_node_modules_nan_x_dist_nan_x_esm = (0 / 0);


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/parse-int-x/dist/parse-int-x.esm.js



var index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_nativeParseInt = parseInt;
/**  @type {Function} */

var index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_castNumber = 0 .constructor; // noinspection JSPotentiallyInvalidConstructorUsage

var index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_ref = '',
    index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_charAt = index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_ref.charAt;
var index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_hexRegex = /^[-+]?0[xX]/;
var index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_test = index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_hexRegex.test;
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2016).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2016(string, radix) {
  var str = index_of_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2016(index_of_x_node_modules_to_string_x_dist_to_string_x_esm_ToString(string));
  return index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_nativeParseInt(str, index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_castNumber(radix) || (index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_test.call(index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_hexRegex, str) ? 16 : 10));
}
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2018).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2018(string, radix) {
  var str = index_of_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2018(index_of_x_node_modules_to_string_x_dist_to_string_x_esm_ToString(string));

  if (index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_charAt.call(str, 0) === "\u180E") {
    return index_of_x_node_modules_nan_x_dist_nan_x_esm;
  }

  return index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_nativeParseInt(str, index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_castNumber(radix) || (index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_test.call(index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_hexRegex, str) ? 16 : 10));
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/to-number-x/dist/to-number-x.esm.js





var index_of_x_node_modules_to_number_x_dist_to_number_x_esm_binaryRadix = 2;
var index_of_x_node_modules_to_number_x_dist_to_number_x_esm_octalRadix = 8;
var index_of_x_node_modules_to_number_x_dist_to_number_x_esm_testCharsCount = 2;
var index_of_x_node_modules_to_number_x_dist_to_number_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
/** @type {NumberConstructor} */

var index_of_x_node_modules_to_number_x_dist_to_number_x_esm_castNumber = index_of_x_node_modules_to_number_x_dist_to_number_x_esm_testCharsCount.constructor;
var index_of_x_node_modules_to_number_x_dist_to_number_x_esm_pStrSlice = index_of_x_node_modules_to_number_x_dist_to_number_x_esm_ERROR_MESSAGE.slice;
var index_of_x_node_modules_to_number_x_dist_to_number_x_esm_binaryRegex = /^0b[01]+$/i;
var index_of_x_node_modules_to_number_x_dist_to_number_x_esm_RegExpConstructor = index_of_x_node_modules_to_number_x_dist_to_number_x_esm_binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var index_of_x_node_modules_to_number_x_dist_to_number_x_esm_test = index_of_x_node_modules_to_number_x_dist_to_number_x_esm_binaryRegex.test;

var index_of_x_node_modules_to_number_x_dist_to_number_x_esm_isBinary = function _isBinary(value) {
  return index_of_x_node_modules_to_number_x_dist_to_number_x_esm_test.call(index_of_x_node_modules_to_number_x_dist_to_number_x_esm_binaryRegex, value);
};

var index_of_x_node_modules_to_number_x_dist_to_number_x_esm_octalRegex = /^0o[0-7]+$/i;

var index_of_x_node_modules_to_number_x_dist_to_number_x_esm_isOctal = function _isOctal(value) {
  return index_of_x_node_modules_to_number_x_dist_to_number_x_esm_test.call(index_of_x_node_modules_to_number_x_dist_to_number_x_esm_octalRegex, value);
};

var index_of_x_node_modules_to_number_x_dist_to_number_x_esm_nonWSregex2016 = new index_of_x_node_modules_to_number_x_dist_to_number_x_esm_RegExpConstructor("[\x85\u200B\uFFFE]", 'g');

var index_of_x_node_modules_to_number_x_dist_to_number_x_esm_hasNonWS2016 = function _hasNonWS(value) {
  return index_of_x_node_modules_to_number_x_dist_to_number_x_esm_test.call(index_of_x_node_modules_to_number_x_dist_to_number_x_esm_nonWSregex2016, value);
};

var index_of_x_node_modules_to_number_x_dist_to_number_x_esm_nonWSregex2018 = new index_of_x_node_modules_to_number_x_dist_to_number_x_esm_RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var index_of_x_node_modules_to_number_x_dist_to_number_x_esm_hasNonWS2018 = function _hasNonWS(value) {
  return index_of_x_node_modules_to_number_x_dist_to_number_x_esm_test.call(index_of_x_node_modules_to_number_x_dist_to_number_x_esm_nonWSregex2018, value);
};

var index_of_x_node_modules_to_number_x_dist_to_number_x_esm_invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var index_of_x_node_modules_to_number_x_dist_to_number_x_esm_isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return index_of_x_node_modules_to_number_x_dist_to_number_x_esm_test.call(index_of_x_node_modules_to_number_x_dist_to_number_x_esm_invalidHexLiteral, value);
};
/**
 * This method converts argument to a value of type Number. (ES2016).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


function index_of_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(argument) {
  var value = index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_toPrimitive(argument, Number);

  if (is_symbol_default()(value)) {
    throw new TypeError(index_of_x_node_modules_to_number_x_dist_to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (index_of_x_node_modules_to_number_x_dist_to_number_x_esm_isBinary(value)) {
      return index_of_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2016(index_of_x_node_modules_to_number_x_dist_to_number_x_esm_pStrSlice.call(value, index_of_x_node_modules_to_number_x_dist_to_number_x_esm_testCharsCount), index_of_x_node_modules_to_number_x_dist_to_number_x_esm_binaryRadix));
    }

    if (index_of_x_node_modules_to_number_x_dist_to_number_x_esm_isOctal(value)) {
      return index_of_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2016(index_of_x_node_modules_to_number_x_dist_to_number_x_esm_pStrSlice.call(value, index_of_x_node_modules_to_number_x_dist_to_number_x_esm_testCharsCount), index_of_x_node_modules_to_number_x_dist_to_number_x_esm_octalRadix));
    }

    if (index_of_x_node_modules_to_number_x_dist_to_number_x_esm_hasNonWS2016(value) || index_of_x_node_modules_to_number_x_dist_to_number_x_esm_isInvalidHexLiteral(value)) {
      return index_of_x_node_modules_nan_x_dist_nan_x_esm;
    }

    var trimmed = index_of_x_node_modules_trim_x_dist_trim_x_esm_trim2016(value);

    if (trimmed !== value) {
      return index_of_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(trimmed);
    }
  }

  return index_of_x_node_modules_to_number_x_dist_to_number_x_esm_castNumber(value);
}
/**
 * This method converts argument to a value of type Number. (ES2018).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */

function index_of_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(argument) {
  var value = index_of_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_toPrimitive(argument, index_of_x_node_modules_to_number_x_dist_to_number_x_esm_castNumber);

  if (is_symbol_default()(value)) {
    throw new TypeError(index_of_x_node_modules_to_number_x_dist_to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (index_of_x_node_modules_to_number_x_dist_to_number_x_esm_isBinary(value)) {
      return index_of_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2018(index_of_x_node_modules_to_number_x_dist_to_number_x_esm_pStrSlice.call(value, index_of_x_node_modules_to_number_x_dist_to_number_x_esm_testCharsCount), index_of_x_node_modules_to_number_x_dist_to_number_x_esm_binaryRadix));
    }

    if (index_of_x_node_modules_to_number_x_dist_to_number_x_esm_isOctal(value)) {
      return index_of_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(index_of_x_node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2018(index_of_x_node_modules_to_number_x_dist_to_number_x_esm_pStrSlice.call(value, index_of_x_node_modules_to_number_x_dist_to_number_x_esm_testCharsCount), index_of_x_node_modules_to_number_x_dist_to_number_x_esm_octalRadix));
    }

    if (index_of_x_node_modules_to_number_x_dist_to_number_x_esm_hasNonWS2018(value) || index_of_x_node_modules_to_number_x_dist_to_number_x_esm_isInvalidHexLiteral(value)) {
      return index_of_x_node_modules_nan_x_dist_nan_x_esm;
    }

    var trimmed = index_of_x_node_modules_trim_x_dist_trim_x_esm_trim2018(value);

    if (trimmed !== value) {
      return index_of_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(trimmed);
    }
  }

  return index_of_x_node_modules_to_number_x_dist_to_number_x_esm_castNumber(value);
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/infinity-x/dist/infinity-x.esm.js
/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 */
/* harmony default export */ var index_of_x_node_modules_infinity_x_dist_infinity_x_esm = (1 / 0);


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/is-finite-x/dist/is-finite-x.esm.js


/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} [number] - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

function index_of_x_node_modules_is_finite_x_dist_is_finite_x_esm_isFinite(number) {
  return typeof number === 'number' && index_of_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(number) === false && number !== index_of_x_node_modules_infinity_x_dist_infinity_x_esm && number !== -index_of_x_node_modules_infinity_x_dist_infinity_x_esm;
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/math-sign-x/dist/math-sign-x.esm.js


/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2016).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function index_of_x_node_modules_math_sign_x_dist_math_sign_x_esm_sign2016(x) {
  var n = index_of_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(x);

  if (n === 0 || index_of_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}
/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2018).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function index_of_x_node_modules_math_sign_x_dist_math_sign_x_esm_sign2018(x) {
  var n = index_of_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(x);

  if (n === 0 || index_of_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/to-integer-x/dist/to-integer-x.esm.js




var index_of_x_node_modules_to_integer_x_dist_to_integer_x_esm_abs = Math.abs,
    index_of_x_node_modules_to_integer_x_dist_to_integer_x_esm_floor = Math.floor;
/**
 * Converts `value` to an integer. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function index_of_x_node_modules_to_integer_x_dist_to_integer_x_esm_toInteger2016(value) {
  var number = index_of_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(value);

  if (index_of_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || index_of_x_node_modules_is_finite_x_dist_is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return index_of_x_node_modules_math_sign_x_dist_math_sign_x_esm_sign2016(number) * index_of_x_node_modules_to_integer_x_dist_to_integer_x_esm_floor(index_of_x_node_modules_to_integer_x_dist_to_integer_x_esm_abs(number));
}
/**
 * Converts `value` to an integer. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function index_of_x_node_modules_to_integer_x_dist_to_integer_x_esm_toInteger2018(value) {
  var number = index_of_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(value);

  if (index_of_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || index_of_x_node_modules_is_finite_x_dist_is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return index_of_x_node_modules_math_sign_x_dist_math_sign_x_esm_sign2018(number) * index_of_x_node_modules_to_integer_x_dist_to_integer_x_esm_floor(index_of_x_node_modules_to_integer_x_dist_to_integer_x_esm_abs(number));
}


// EXTERNAL MODULE: ./node_modules/index-of-x/node_modules/max-safe-integer/index.js
var index_of_x_node_modules_max_safe_integer = __webpack_require__(16);
var index_of_x_node_modules_max_safe_integer_default = /*#__PURE__*/__webpack_require__.n(index_of_x_node_modules_max_safe_integer);

// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/to-length-x/dist/to-length-x.esm.js


/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function index_of_x_node_modules_to_length_x_dist_to_length_x_esm_toLength2016(value) {
  var len = index_of_x_node_modules_to_integer_x_dist_to_integer_x_esm_toInteger2016(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > index_of_x_node_modules_max_safe_integer_default.a) {
    return index_of_x_node_modules_max_safe_integer_default.a;
  }

  return len;
}
/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function index_of_x_node_modules_to_length_x_dist_to_length_x_esm_toLength2018(value) {
  var len = index_of_x_node_modules_to_integer_x_dist_to_integer_x_esm_toInteger2018(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > index_of_x_node_modules_max_safe_integer_default.a) {
    return index_of_x_node_modules_max_safe_integer_default.a;
  }

  return len;
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function calculate_from_index_x_node_modules_require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(value) {
  if (isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/to-object-x/dist/to-object-x.esm.js

var calculate_from_index_x_node_modules_to_object_x_dist_to_object_x_esm_castObject = {}.constructor;
/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!object} The `value` converted to an object.
 */

function calculate_from_index_x_node_modules_to_object_x_dist_to_object_x_esm_toObject(value) {
  return calculate_from_index_x_node_modules_to_object_x_dist_to_object_x_esm_castObject(calculate_from_index_x_node_modules_require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/attempt-x/dist/attempt-x.esm.js
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
function calculate_from_index_x_node_modules_attempt_x_dist_attempt_x_esm_attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var calculate_from_index_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_this = undefined;

function calculate_from_index_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var calculate_from_index_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_hasSymbolSupport = calculate_from_index_x_node_modules_attempt_x_dist_attempt_x_esm_attempt(function () {
  calculate_from_index_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_newArrowCheck(this, calculate_from_index_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var calculate_from_index_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm = (calculate_from_index_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_hasSymbolSupport.threw === false && calculate_from_index_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_hasSymbolSupport.value === true);


// EXTERNAL MODULE: ./node_modules/calculate-from-index-x/node_modules/is-primitive/index.js
var calculate_from_index_x_node_modules_is_primitive = __webpack_require__(9);
var calculate_from_index_x_node_modules_is_primitive_default = /*#__PURE__*/__webpack_require__.n(calculate_from_index_x_node_modules_is_primitive);

// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
function calculate_from_index_x_node_modules_to_boolean_x_dist_to_boolean_x_esm_toBoolean(value) {
  return !!value;
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/is-falsey-x/dist/is-falsey-x.esm.js

/**
 * This method tests if a given value is falsey.
 *
 * @param {*} [value] - The value to test.
 * @returns {boolean} `true` if the value is falsey: otherwise `false`.
 */

function calculate_from_index_x_node_modules_is_falsey_x_dist_is_falsey_x_esm_isFalsey(value) {
  return !calculate_from_index_x_node_modules_to_boolean_x_dist_to_boolean_x_esm_toBoolean(value);
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var calculate_from_index_x_node_modules_to_string_tag_x_dist_to_string_tag_x_esm_nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

function calculate_from_index_x_node_modules_to_string_tag_x_dist_to_string_tag_x_esm_toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return calculate_from_index_x_node_modules_to_string_tag_x_dist_to_string_tag_x_esm_nativeObjectToString.call(value);
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var calculate_from_index_x_node_modules_has_to_string_tag_x_dist_has_to_string_tag_x_esm = (calculate_from_index_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm &&
/* eslint-disable-next-line compat/compat */
is_symbol_default()(Symbol.toStringTag));


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/to-string-x/dist/to-string-x.esm.js

var calculate_from_index_x_node_modules_to_string_x_dist_to_string_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var calculate_from_index_x_node_modules_to_string_x_dist_to_string_x_esm_castString = calculate_from_index_x_node_modules_to_string_x_dist_to_string_x_esm_ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

function calculate_from_index_x_node_modules_to_string_x_dist_to_string_x_esm_ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(calculate_from_index_x_node_modules_to_string_x_dist_to_string_x_esm_ERROR_MESSAGE);
  }

  return calculate_from_index_x_node_modules_to_string_x_dist_to_string_x_esm_castString(value);
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

function calculate_from_index_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(value) {
  return calculate_from_index_x_node_modules_to_string_x_dist_to_string_x_esm_ToString(calculate_from_index_x_node_modules_require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2018 = '';
var calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_length = calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_list.length;

for (var calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_i = 0; calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_i < calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_length; calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_i += 1) {
  if (calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_list[calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_i].es2016) {
    calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2016 += calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_list[calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_i].string;
  }

  if (calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_list[calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_i].es2018) {
    calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2018 += calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_list[calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_i].string;
  }
}

var calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_string2018 = calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2018;
/* harmony default export */ var calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm = (calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_string2018);
var calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_string2016 = calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2016;


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/trim-left-x/dist/trim-left-x.esm.js


var calculate_from_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING = '';
var calculate_from_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_RegExpCtr = /none/.constructor;
var calculate_from_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_reLeft2016 = new calculate_from_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_RegExpCtr("^[".concat(calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_string2016, "]+"));
var calculate_from_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_reLeft = new calculate_from_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_RegExpCtr("^[".concat(calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm, "]+"));
var calculate_from_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_replace = calculate_from_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function calculate_from_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2016(string) {
  return calculate_from_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_replace.call(calculate_from_index_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), calculate_from_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_reLeft2016, calculate_from_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function calculate_from_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2018(string) {
  return calculate_from_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_replace.call(calculate_from_index_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), calculate_from_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_reLeft, calculate_from_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/trim-right-x/dist/trim-right-x.esm.js


var calculate_from_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING = '';
var calculate_from_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_RegExpCtr = /none/.constructor;
var calculate_from_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_reRight2016 = new calculate_from_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_RegExpCtr("[".concat(calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_string2016, "]+$"));
var calculate_from_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_reRight2018 = new calculate_from_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_RegExpCtr("[".concat(calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm, "]+$"));
var calculate_from_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_replace = calculate_from_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function calculate_from_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_trimRight2016(string) {
  return calculate_from_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_replace.call(calculate_from_index_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), calculate_from_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_reRight2016, calculate_from_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function calculate_from_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_trimRight2018(string) {
  return calculate_from_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_replace.call(calculate_from_index_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), calculate_from_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_reRight2018, calculate_from_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function calculate_from_index_x_node_modules_trim_x_dist_trim_x_esm_trim2016(string) {
  return calculate_from_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2016(calculate_from_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_trimRight2016(string));
}
/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function calculate_from_index_x_node_modules_trim_x_dist_trim_x_esm_trim2018(string) {
  return calculate_from_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2018(calculate_from_index_x_node_modules_trim_right_x_dist_trim_right_x_esm_trimRight2018(string));
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/normalize-space-x/dist/normalize-space-x.esm.js


var calculate_from_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_SPACE = ' ';
var calculate_from_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_RegExpCtr = /none/.constructor;
var calculate_from_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_reNormalize2016 = new calculate_from_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_RegExpCtr("[".concat(calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm_string2016, "]+"), 'g');
var calculate_from_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_reNormalize2018 = new calculate_from_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_RegExpCtr("[".concat(calculate_from_index_x_node_modules_white_space_x_dist_white_space_x_esm, "]+"), 'g');
var calculate_from_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_replace = calculate_from_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */

function calculate_from_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_normalizeSpace2016(string) {
  return calculate_from_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_replace.call(calculate_from_index_x_node_modules_trim_x_dist_trim_x_esm_trim2016(string), calculate_from_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_reNormalize2016, calculate_from_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_SPACE);
}
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

function calculate_from_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_normalizeSpace2018(string) {
  return calculate_from_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_replace.call(calculate_from_index_x_node_modules_trim_x_dist_trim_x_esm_trim2018(string), calculate_from_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_reNormalize2018, calculate_from_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_SPACE);
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/replace-comments-x/dist/replace-comments-x.esm.js


var calculate_from_index_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING = '';
var calculate_from_index_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var calculate_from_index_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_replace = calculate_from_index_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

function calculate_from_index_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_replaceComments(string, replacement) {
  return calculate_from_index_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_replace.call(calculate_from_index_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), calculate_from_index_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_STRIP_COMMENTS, arguments.length > 1 ? calculate_from_index_x_node_modules_to_string_x_dist_to_string_x_esm_ToString(replacement) : calculate_from_index_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/is-function-x/dist/is-function-x.esm.js
var calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_this = undefined;

function calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }









var calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_SPACE = ' ';
var calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_fToString = Function.prototype.toString;
var calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_funcTag = '[object Function]';
var calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_genTag = '[object GeneratorFunction]';
var calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_asyncTag = '[object AsyncFunction]';
var calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_ctrRx = /^class /;
var calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_test = calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_ctrRx.test;
var calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_hasNativeClass = calculate_from_index_x_node_modules_attempt_x_dist_attempt_x_esm_attempt(function () {
  calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_newArrowCheck(this, calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_this);

  /* eslint-disable-next-line no-new-func */
  return Function('"use strict"; return class My {};')();
}.bind(undefined)).threw === false;

var calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_testClassstring = function _testClassstring(value) {
  return calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_test.call(calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_ctrRx, calculate_from_index_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_normalizeSpace2018(calculate_from_index_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_replaceComments(calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_fToString.call(value), calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_SPACE)));
};

var calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_isES6ClassFn = function isES6ClassFunc(value) {
  var result = calculate_from_index_x_node_modules_attempt_x_dist_attempt_x_esm_attempt(calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_testClassstring, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_tryFuncToString = function funcToString(value, allowClass) {
  if (calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_hasNativeClass && allowClass === false && calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  return calculate_from_index_x_node_modules_attempt_x_dist_attempt_x_esm_attempt.call(value, calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_fToString).threw === false;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


function calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_isFunction(value, allowClass) {
  if (calculate_from_index_x_node_modules_is_primitive_default()(value)) {
    return false;
  }

  if (calculate_from_index_x_node_modules_has_to_string_tag_x_dist_has_to_string_tag_x_esm) {
    return calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_tryFuncToString(value, calculate_from_index_x_node_modules_to_boolean_x_dist_to_boolean_x_esm_toBoolean(allowClass));
  }

  if (calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_hasNativeClass && calculate_from_index_x_node_modules_is_falsey_x_dist_is_falsey_x_esm_isFalsey(allowClass) && calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  var strTag = calculate_from_index_x_node_modules_to_string_tag_x_dist_to_string_tag_x_esm_toStringTag(value);
  return strTag === calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_funcTag || strTag === calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_genTag || strTag === calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_asyncTag;
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/to-primitive-x/dist/to-primitive-x.esm.js







var calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ZERO = 0;
var calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ONE = 1;
/* eslint-disable-next-line no-void */

var calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_UNDEFINED = void calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ZERO;
var calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_NUMBER = 'number';
var calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING = 'string';
var calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_DEFAULT = 'default';
/** @type {StringConstructor} */

var calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_StringCtr = calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING.constructor;
/** @type {NumberConstructor} */

var calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_NumberCtr = calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_symToPrimitive = calculate_from_index_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_symValueOf = calculate_from_index_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm && Symbol.prototype.valueOf;
var calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_toStringOrder = ['toString', 'valueOf'];
var calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_toNumberOrder = ['valueOf', 'toString'];
var calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_orderLength = 2;
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */

var calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ordinaryToPrimitive = function _ordinaryToPrimitive(ordinary, hint) {
  calculate_from_index_x_node_modules_require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(ordinary);

  if (typeof hint !== 'string' || hint !== calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_NUMBER && hint !== calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING ? calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_toStringOrder : calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_toNumberOrder;
  var method;
  var result;

  for (var i = calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ZERO; i < calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_orderLength; i += calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ONE) {
    method = ordinary[methodNames[i]];

    if (calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_isFunction(method)) {
      result = method.call(ordinary);

      if (calculate_from_index_x_node_modules_is_primitive_default()(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_getMethod = function _getMethod(object, property) {
  var func = object[property];

  if (isNil(func) === false) {
    if (calculate_from_index_x_node_modules_is_function_x_dist_is_function_x_esm_isFunction(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_StringCtr) {
      return calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING;
    }

    if (value === calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_NumberCtr) {
      return calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_NUMBER;
    }
  }

  return calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_getExoticToPrim = function getExoticToPrim(value) {
  if (calculate_from_index_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm) {
    if (calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_symToPrimitive) {
      return calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_getMethod(value, calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_symToPrimitive);
    }

    if (is_symbol_default()(value)) {
      return calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_symValueOf;
    }
  }

  return calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_UNDEFINED;
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {NumberConstructor|StringConstructor} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


function calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_toPrimitive(input, preferredType) {
  if (calculate_from_index_x_node_modules_is_primitive_default()(input)) {
    return input;
  }

  var hint = calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_getHint(preferredType, arguments.length > calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ONE);
  var exoticToPrim = calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_getExoticToPrim(input);

  if (typeof exoticToPrim !== 'undefined') {
    var result = exoticToPrim.call(input, hint);

    if (calculate_from_index_x_node_modules_is_primitive_default()(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  var newHint = hint === calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_DEFAULT && (is_date_object_default()(input) || is_symbol_default()(input)) ? calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING : hint;
  return calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ordinaryToPrimitive(input, newHint === calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_DEFAULT ? calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_NUMBER : newHint);
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/nan-x/dist/nan-x.esm.js
/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 */
/* harmony default export */ var calculate_from_index_x_node_modules_nan_x_dist_nan_x_esm = (0 / 0);


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/parse-int-x/dist/parse-int-x.esm.js



var calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_nativeParseInt = parseInt;
/**  @type {Function} */

var calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_castNumber = 0 .constructor; // noinspection JSPotentiallyInvalidConstructorUsage

var calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_ref = '',
    calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_charAt = calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_ref.charAt;
var calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_hexRegex = /^[-+]?0[xX]/;
var calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_test = calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_hexRegex.test;
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2016).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2016(string, radix) {
  var str = calculate_from_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2016(calculate_from_index_x_node_modules_to_string_x_dist_to_string_x_esm_ToString(string));
  return calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_nativeParseInt(str, calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_castNumber(radix) || (calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_test.call(calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_hexRegex, str) ? 16 : 10));
}
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2018).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2018(string, radix) {
  var str = calculate_from_index_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2018(calculate_from_index_x_node_modules_to_string_x_dist_to_string_x_esm_ToString(string));

  if (calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_charAt.call(str, 0) === "\u180E") {
    return calculate_from_index_x_node_modules_nan_x_dist_nan_x_esm;
  }

  return calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_nativeParseInt(str, calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_castNumber(radix) || (calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_test.call(calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_hexRegex, str) ? 16 : 10));
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/to-number-x/dist/to-number-x.esm.js





var calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_binaryRadix = 2;
var calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_octalRadix = 8;
var calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_testCharsCount = 2;
var calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
/** @type {NumberConstructor} */

var calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_castNumber = calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_testCharsCount.constructor;
var calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_pStrSlice = calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_ERROR_MESSAGE.slice;
var calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_binaryRegex = /^0b[01]+$/i;
var calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_RegExpConstructor = calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_test = calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_binaryRegex.test;

var calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_isBinary = function _isBinary(value) {
  return calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_test.call(calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_binaryRegex, value);
};

var calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_octalRegex = /^0o[0-7]+$/i;

var calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_isOctal = function _isOctal(value) {
  return calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_test.call(calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_octalRegex, value);
};

var calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_nonWSregex2016 = new calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_RegExpConstructor("[\x85\u200B\uFFFE]", 'g');

var calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_hasNonWS2016 = function _hasNonWS(value) {
  return calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_test.call(calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_nonWSregex2016, value);
};

var calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_nonWSregex2018 = new calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_hasNonWS2018 = function _hasNonWS(value) {
  return calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_test.call(calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_nonWSregex2018, value);
};

var calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_test.call(calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_invalidHexLiteral, value);
};
/**
 * This method converts argument to a value of type Number. (ES2016).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


function calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(argument) {
  var value = calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_toPrimitive(argument, Number);

  if (is_symbol_default()(value)) {
    throw new TypeError(calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_isBinary(value)) {
      return calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2016(calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_pStrSlice.call(value, calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_testCharsCount), calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_binaryRadix));
    }

    if (calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_isOctal(value)) {
      return calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2016(calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_pStrSlice.call(value, calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_testCharsCount), calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_octalRadix));
    }

    if (calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_hasNonWS2016(value) || calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_isInvalidHexLiteral(value)) {
      return calculate_from_index_x_node_modules_nan_x_dist_nan_x_esm;
    }

    var trimmed = calculate_from_index_x_node_modules_trim_x_dist_trim_x_esm_trim2016(value);

    if (trimmed !== value) {
      return calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(trimmed);
    }
  }

  return calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_castNumber(value);
}
/**
 * This method converts argument to a value of type Number. (ES2018).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */

function calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(argument) {
  var value = calculate_from_index_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_toPrimitive(argument, calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_castNumber);

  if (is_symbol_default()(value)) {
    throw new TypeError(calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_isBinary(value)) {
      return calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2018(calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_pStrSlice.call(value, calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_testCharsCount), calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_binaryRadix));
    }

    if (calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_isOctal(value)) {
      return calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(calculate_from_index_x_node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2018(calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_pStrSlice.call(value, calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_testCharsCount), calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_octalRadix));
    }

    if (calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_hasNonWS2018(value) || calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_isInvalidHexLiteral(value)) {
      return calculate_from_index_x_node_modules_nan_x_dist_nan_x_esm;
    }

    var trimmed = calculate_from_index_x_node_modules_trim_x_dist_trim_x_esm_trim2018(value);

    if (trimmed !== value) {
      return calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(trimmed);
    }
  }

  return calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_castNumber(value);
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/is-nan-x/dist/is-nan-x.esm.js
/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} [value] - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 */
function calculate_from_index_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/infinity-x/dist/infinity-x.esm.js
/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 */
/* harmony default export */ var calculate_from_index_x_node_modules_infinity_x_dist_infinity_x_esm = (1 / 0);


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/is-finite-x/dist/is-finite-x.esm.js


/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} [number] - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

function calculate_from_index_x_node_modules_is_finite_x_dist_is_finite_x_esm_isFinite(number) {
  return typeof number === 'number' && calculate_from_index_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(number) === false && number !== calculate_from_index_x_node_modules_infinity_x_dist_infinity_x_esm && number !== -calculate_from_index_x_node_modules_infinity_x_dist_infinity_x_esm;
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/math-sign-x/dist/math-sign-x.esm.js


/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2016).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function calculate_from_index_x_node_modules_math_sign_x_dist_math_sign_x_esm_sign2016(x) {
  var n = calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(x);

  if (n === 0 || calculate_from_index_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}
/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2018).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function calculate_from_index_x_node_modules_math_sign_x_dist_math_sign_x_esm_sign2018(x) {
  var n = calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(x);

  if (n === 0 || calculate_from_index_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/to-integer-x/dist/to-integer-x.esm.js




var calculate_from_index_x_node_modules_to_integer_x_dist_to_integer_x_esm_abs = Math.abs,
    calculate_from_index_x_node_modules_to_integer_x_dist_to_integer_x_esm_floor = Math.floor;
/**
 * Converts `value` to an integer. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function calculate_from_index_x_node_modules_to_integer_x_dist_to_integer_x_esm_toInteger2016(value) {
  var number = calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(value);

  if (calculate_from_index_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || calculate_from_index_x_node_modules_is_finite_x_dist_is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return calculate_from_index_x_node_modules_math_sign_x_dist_math_sign_x_esm_sign2016(number) * calculate_from_index_x_node_modules_to_integer_x_dist_to_integer_x_esm_floor(calculate_from_index_x_node_modules_to_integer_x_dist_to_integer_x_esm_abs(number));
}
/**
 * Converts `value` to an integer. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function calculate_from_index_x_node_modules_to_integer_x_dist_to_integer_x_esm_toInteger2018(value) {
  var number = calculate_from_index_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(value);

  if (calculate_from_index_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || calculate_from_index_x_node_modules_is_finite_x_dist_is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return calculate_from_index_x_node_modules_math_sign_x_dist_math_sign_x_esm_sign2018(number) * calculate_from_index_x_node_modules_to_integer_x_dist_to_integer_x_esm_floor(calculate_from_index_x_node_modules_to_integer_x_dist_to_integer_x_esm_abs(number));
}


// EXTERNAL MODULE: ./node_modules/calculate-from-index-x/node_modules/max-safe-integer/index.js
var calculate_from_index_x_node_modules_max_safe_integer = __webpack_require__(17);
var calculate_from_index_x_node_modules_max_safe_integer_default = /*#__PURE__*/__webpack_require__.n(calculate_from_index_x_node_modules_max_safe_integer);

// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/node_modules/to-length-x/dist/to-length-x.esm.js


/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function calculate_from_index_x_node_modules_to_length_x_dist_to_length_x_esm_toLength2016(value) {
  var len = calculate_from_index_x_node_modules_to_integer_x_dist_to_integer_x_esm_toInteger2016(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > calculate_from_index_x_node_modules_max_safe_integer_default.a) {
    return calculate_from_index_x_node_modules_max_safe_integer_default.a;
  }

  return len;
}
/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function calculate_from_index_x_node_modules_to_length_x_dist_to_length_x_esm_toLength2018(value) {
  var len = calculate_from_index_x_node_modules_to_integer_x_dist_to_integer_x_esm_toInteger2018(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > calculate_from_index_x_node_modules_max_safe_integer_default.a) {
    return calculate_from_index_x_node_modules_max_safe_integer_default.a;
  }

  return len;
}


// CONCATENATED MODULE: ./node_modules/is-array-like-x/node_modules/attempt-x/dist/attempt-x.esm.js
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
function is_array_like_x_node_modules_attempt_x_dist_attempt_x_esm_attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
}


// CONCATENATED MODULE: ./node_modules/is-array-like-x/node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
function is_array_like_x_node_modules_to_boolean_x_dist_to_boolean_x_esm_toBoolean(value) {
  return !!value;
}


// CONCATENATED MODULE: ./node_modules/is-array-like-x/node_modules/is-falsey-x/dist/is-falsey-x.esm.js

/**
 * This method tests if a given value is falsey.
 *
 * @param {*} [value] - The value to test.
 * @returns {boolean} `true` if the value is falsey: otherwise `false`.
 */

function is_array_like_x_node_modules_is_falsey_x_dist_is_falsey_x_esm_isFalsey(value) {
  return !is_array_like_x_node_modules_to_boolean_x_dist_to_boolean_x_esm_toBoolean(value);
}


// CONCATENATED MODULE: ./node_modules/is-array-like-x/node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var is_array_like_x_node_modules_to_string_tag_x_dist_to_string_tag_x_esm_nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

function is_array_like_x_node_modules_to_string_tag_x_dist_to_string_tag_x_esm_toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return is_array_like_x_node_modules_to_string_tag_x_dist_to_string_tag_x_esm_nativeObjectToString.call(value);
}


// CONCATENATED MODULE: ./node_modules/is-array-like-x/node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var is_array_like_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_this = undefined;

function is_array_like_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var is_array_like_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_hasSymbolSupport = is_array_like_x_node_modules_attempt_x_dist_attempt_x_esm_attempt(function () {
  is_array_like_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_newArrowCheck(this, is_array_like_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var is_array_like_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm = (is_array_like_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_hasSymbolSupport.threw === false && is_array_like_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_hasSymbolSupport.value === true);


// CONCATENATED MODULE: ./node_modules/is-array-like-x/node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var is_array_like_x_node_modules_has_to_string_tag_x_dist_has_to_string_tag_x_esm = (is_array_like_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm &&
/* eslint-disable-next-line compat/compat */
is_symbol_default()(Symbol.toStringTag));


// EXTERNAL MODULE: ./node_modules/is-array-like-x/node_modules/is-primitive/index.js
var is_array_like_x_node_modules_is_primitive = __webpack_require__(20);
var is_array_like_x_node_modules_is_primitive_default = /*#__PURE__*/__webpack_require__.n(is_array_like_x_node_modules_is_primitive);

// CONCATENATED MODULE: ./node_modules/is-array-like-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function is_array_like_x_node_modules_require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(value) {
  if (isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/is-array-like-x/node_modules/to-string-x/dist/to-string-x.esm.js

var is_array_like_x_node_modules_to_string_x_dist_to_string_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var is_array_like_x_node_modules_to_string_x_dist_to_string_x_esm_castString = is_array_like_x_node_modules_to_string_x_dist_to_string_x_esm_ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

function is_array_like_x_node_modules_to_string_x_dist_to_string_x_esm_ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(is_array_like_x_node_modules_to_string_x_dist_to_string_x_esm_ERROR_MESSAGE);
  }

  return is_array_like_x_node_modules_to_string_x_dist_to_string_x_esm_castString(value);
}


// CONCATENATED MODULE: ./node_modules/is-array-like-x/node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

function is_array_like_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(value) {
  return is_array_like_x_node_modules_to_string_x_dist_to_string_x_esm_ToString(is_array_like_x_node_modules_require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/is-array-like-x/node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2018 = '';
var is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_length = is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_list.length;

for (var is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_i = 0; is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_i < is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_length; is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_i += 1) {
  if (is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_list[is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_i].es2016) {
    is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2016 += is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_list[is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_i].string;
  }

  if (is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_list[is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_i].es2018) {
    is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2018 += is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_list[is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_i].string;
  }
}

var is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_string2018 = is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2018;
/* harmony default export */ var is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm = (is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_string2018);
var is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_string2016 = is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2016;


// CONCATENATED MODULE: ./node_modules/is-array-like-x/node_modules/trim-left-x/dist/trim-left-x.esm.js


var is_array_like_x_node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING = '';
var is_array_like_x_node_modules_trim_left_x_dist_trim_left_x_esm_RegExpCtr = /none/.constructor;
var is_array_like_x_node_modules_trim_left_x_dist_trim_left_x_esm_reLeft2016 = new is_array_like_x_node_modules_trim_left_x_dist_trim_left_x_esm_RegExpCtr("^[".concat(is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_string2016, "]+"));
var is_array_like_x_node_modules_trim_left_x_dist_trim_left_x_esm_reLeft = new is_array_like_x_node_modules_trim_left_x_dist_trim_left_x_esm_RegExpCtr("^[".concat(is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm, "]+"));
var is_array_like_x_node_modules_trim_left_x_dist_trim_left_x_esm_replace = is_array_like_x_node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function is_array_like_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2016(string) {
  return is_array_like_x_node_modules_trim_left_x_dist_trim_left_x_esm_replace.call(is_array_like_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), is_array_like_x_node_modules_trim_left_x_dist_trim_left_x_esm_reLeft2016, is_array_like_x_node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function is_array_like_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2018(string) {
  return is_array_like_x_node_modules_trim_left_x_dist_trim_left_x_esm_replace.call(is_array_like_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), is_array_like_x_node_modules_trim_left_x_dist_trim_left_x_esm_reLeft, is_array_like_x_node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/is-array-like-x/node_modules/trim-right-x/dist/trim-right-x.esm.js


var is_array_like_x_node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING = '';
var is_array_like_x_node_modules_trim_right_x_dist_trim_right_x_esm_RegExpCtr = /none/.constructor;
var is_array_like_x_node_modules_trim_right_x_dist_trim_right_x_esm_reRight2016 = new is_array_like_x_node_modules_trim_right_x_dist_trim_right_x_esm_RegExpCtr("[".concat(is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_string2016, "]+$"));
var is_array_like_x_node_modules_trim_right_x_dist_trim_right_x_esm_reRight2018 = new is_array_like_x_node_modules_trim_right_x_dist_trim_right_x_esm_RegExpCtr("[".concat(is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm, "]+$"));
var is_array_like_x_node_modules_trim_right_x_dist_trim_right_x_esm_replace = is_array_like_x_node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function is_array_like_x_node_modules_trim_right_x_dist_trim_right_x_esm_trimRight2016(string) {
  return is_array_like_x_node_modules_trim_right_x_dist_trim_right_x_esm_replace.call(is_array_like_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), is_array_like_x_node_modules_trim_right_x_dist_trim_right_x_esm_reRight2016, is_array_like_x_node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function is_array_like_x_node_modules_trim_right_x_dist_trim_right_x_esm_trimRight2018(string) {
  return is_array_like_x_node_modules_trim_right_x_dist_trim_right_x_esm_replace.call(is_array_like_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), is_array_like_x_node_modules_trim_right_x_dist_trim_right_x_esm_reRight2018, is_array_like_x_node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/is-array-like-x/node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function is_array_like_x_node_modules_trim_x_dist_trim_x_esm_trim2016(string) {
  return is_array_like_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2016(is_array_like_x_node_modules_trim_right_x_dist_trim_right_x_esm_trimRight2016(string));
}
/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function is_array_like_x_node_modules_trim_x_dist_trim_x_esm_trim2018(string) {
  return is_array_like_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2018(is_array_like_x_node_modules_trim_right_x_dist_trim_right_x_esm_trimRight2018(string));
}


// CONCATENATED MODULE: ./node_modules/is-array-like-x/node_modules/normalize-space-x/dist/normalize-space-x.esm.js


var is_array_like_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_SPACE = ' ';
var is_array_like_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_RegExpCtr = /none/.constructor;
var is_array_like_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_reNormalize2016 = new is_array_like_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_RegExpCtr("[".concat(is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm_string2016, "]+"), 'g');
var is_array_like_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_reNormalize2018 = new is_array_like_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_RegExpCtr("[".concat(is_array_like_x_node_modules_white_space_x_dist_white_space_x_esm, "]+"), 'g');
var is_array_like_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_replace = is_array_like_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */

function is_array_like_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_normalizeSpace2016(string) {
  return is_array_like_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_replace.call(is_array_like_x_node_modules_trim_x_dist_trim_x_esm_trim2016(string), is_array_like_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_reNormalize2016, is_array_like_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_SPACE);
}
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

function is_array_like_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_normalizeSpace2018(string) {
  return is_array_like_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_replace.call(is_array_like_x_node_modules_trim_x_dist_trim_x_esm_trim2018(string), is_array_like_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_reNormalize2018, is_array_like_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_SPACE);
}


// CONCATENATED MODULE: ./node_modules/is-array-like-x/node_modules/replace-comments-x/dist/replace-comments-x.esm.js


var is_array_like_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING = '';
var is_array_like_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var is_array_like_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_replace = is_array_like_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

function is_array_like_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_replaceComments(string, replacement) {
  return is_array_like_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_replace.call(is_array_like_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), is_array_like_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_STRIP_COMMENTS, arguments.length > 1 ? is_array_like_x_node_modules_to_string_x_dist_to_string_x_esm_ToString(replacement) : is_array_like_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/is-array-like-x/node_modules/is-function-x/dist/is-function-x.esm.js
var is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_this = undefined;

function is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }









var is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_SPACE = ' ';
var is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_fToString = Function.prototype.toString;
var is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_funcTag = '[object Function]';
var is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_genTag = '[object GeneratorFunction]';
var is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_asyncTag = '[object AsyncFunction]';
var is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_ctrRx = /^class /;
var is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_test = is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_ctrRx.test;
var is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_hasNativeClass = is_array_like_x_node_modules_attempt_x_dist_attempt_x_esm_attempt(function () {
  is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_newArrowCheck(this, is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_this);

  /* eslint-disable-next-line no-new-func */
  return Function('"use strict"; return class My {};')();
}.bind(undefined)).threw === false;

var is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_testClassstring = function _testClassstring(value) {
  return is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_test.call(is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_ctrRx, is_array_like_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_normalizeSpace2018(is_array_like_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_replaceComments(is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_fToString.call(value), is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_SPACE)));
};

var is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_isES6ClassFn = function isES6ClassFunc(value) {
  var result = is_array_like_x_node_modules_attempt_x_dist_attempt_x_esm_attempt(is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_testClassstring, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_tryFuncToString = function funcToString(value, allowClass) {
  if (is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_hasNativeClass && allowClass === false && is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  return is_array_like_x_node_modules_attempt_x_dist_attempt_x_esm_attempt.call(value, is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_fToString).threw === false;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


function is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_isFunction(value, allowClass) {
  if (is_array_like_x_node_modules_is_primitive_default()(value)) {
    return false;
  }

  if (is_array_like_x_node_modules_has_to_string_tag_x_dist_has_to_string_tag_x_esm) {
    return is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_tryFuncToString(value, is_array_like_x_node_modules_to_boolean_x_dist_to_boolean_x_esm_toBoolean(allowClass));
  }

  if (is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_hasNativeClass && is_array_like_x_node_modules_is_falsey_x_dist_is_falsey_x_esm_isFalsey(allowClass) && is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  var strTag = is_array_like_x_node_modules_to_string_tag_x_dist_to_string_tag_x_esm_toStringTag(value);
  return strTag === is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_funcTag || strTag === is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_genTag || strTag === is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_asyncTag;
}


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/is-nan-x/dist/is-nan-x.esm.js
/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} [value] - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 */
function is_integer_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
}


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/infinity-x/dist/infinity-x.esm.js
/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 */
/* harmony default export */ var is_integer_x_node_modules_infinity_x_dist_infinity_x_esm = (1 / 0);


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/is-finite-x/dist/is-finite-x.esm.js


/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} [number] - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

function is_integer_x_node_modules_is_finite_x_dist_is_finite_x_esm_isFinite(number) {
  return typeof number === 'number' && is_integer_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(number) === false && number !== is_integer_x_node_modules_infinity_x_dist_infinity_x_esm && number !== -is_integer_x_node_modules_infinity_x_dist_infinity_x_esm;
}


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/attempt-x/dist/attempt-x.esm.js
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
function is_integer_x_node_modules_attempt_x_dist_attempt_x_esm_attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
}


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var is_integer_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_this = undefined;

function is_integer_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var is_integer_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_hasSymbolSupport = is_integer_x_node_modules_attempt_x_dist_attempt_x_esm_attempt(function () {
  is_integer_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_newArrowCheck(this, is_integer_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var is_integer_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm = (is_integer_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_hasSymbolSupport.threw === false && is_integer_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_hasSymbolSupport.value === true);


// EXTERNAL MODULE: ./node_modules/is-integer-x/node_modules/is-primitive/index.js
var is_integer_x_node_modules_is_primitive = __webpack_require__(10);
var is_integer_x_node_modules_is_primitive_default = /*#__PURE__*/__webpack_require__.n(is_integer_x_node_modules_is_primitive);

// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
function is_integer_x_node_modules_to_boolean_x_dist_to_boolean_x_esm_toBoolean(value) {
  return !!value;
}


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/is-falsey-x/dist/is-falsey-x.esm.js

/**
 * This method tests if a given value is falsey.
 *
 * @param {*} [value] - The value to test.
 * @returns {boolean} `true` if the value is falsey: otherwise `false`.
 */

function is_integer_x_node_modules_is_falsey_x_dist_is_falsey_x_esm_isFalsey(value) {
  return !is_integer_x_node_modules_to_boolean_x_dist_to_boolean_x_esm_toBoolean(value);
}


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var is_integer_x_node_modules_to_string_tag_x_dist_to_string_tag_x_esm_nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

function is_integer_x_node_modules_to_string_tag_x_dist_to_string_tag_x_esm_toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return is_integer_x_node_modules_to_string_tag_x_dist_to_string_tag_x_esm_nativeObjectToString.call(value);
}


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var is_integer_x_node_modules_has_to_string_tag_x_dist_has_to_string_tag_x_esm = (is_integer_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm &&
/* eslint-disable-next-line compat/compat */
is_symbol_default()(Symbol.toStringTag));


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function is_integer_x_node_modules_require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(value) {
  if (isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/to-string-x/dist/to-string-x.esm.js

var is_integer_x_node_modules_to_string_x_dist_to_string_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var is_integer_x_node_modules_to_string_x_dist_to_string_x_esm_castString = is_integer_x_node_modules_to_string_x_dist_to_string_x_esm_ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

function is_integer_x_node_modules_to_string_x_dist_to_string_x_esm_ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(is_integer_x_node_modules_to_string_x_dist_to_string_x_esm_ERROR_MESSAGE);
  }

  return is_integer_x_node_modules_to_string_x_dist_to_string_x_esm_castString(value);
}


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

function is_integer_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(value) {
  return is_integer_x_node_modules_to_string_x_dist_to_string_x_esm_ToString(is_integer_x_node_modules_require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2018 = '';
var is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_length = is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_list.length;

for (var is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_i = 0; is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_i < is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_length; is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_i += 1) {
  if (is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_list[is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_i].es2016) {
    is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2016 += is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_list[is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_i].string;
  }

  if (is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_list[is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_i].es2018) {
    is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2018 += is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_list[is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_i].string;
  }
}

var is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_string2018 = is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2018;
/* harmony default export */ var is_integer_x_node_modules_white_space_x_dist_white_space_x_esm = (is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_string2018);
var is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_string2016 = is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_stringES2016;


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/trim-left-x/dist/trim-left-x.esm.js


var is_integer_x_node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING = '';
var is_integer_x_node_modules_trim_left_x_dist_trim_left_x_esm_RegExpCtr = /none/.constructor;
var is_integer_x_node_modules_trim_left_x_dist_trim_left_x_esm_reLeft2016 = new is_integer_x_node_modules_trim_left_x_dist_trim_left_x_esm_RegExpCtr("^[".concat(is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_string2016, "]+"));
var is_integer_x_node_modules_trim_left_x_dist_trim_left_x_esm_reLeft = new is_integer_x_node_modules_trim_left_x_dist_trim_left_x_esm_RegExpCtr("^[".concat(is_integer_x_node_modules_white_space_x_dist_white_space_x_esm, "]+"));
var is_integer_x_node_modules_trim_left_x_dist_trim_left_x_esm_replace = is_integer_x_node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function is_integer_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2016(string) {
  return is_integer_x_node_modules_trim_left_x_dist_trim_left_x_esm_replace.call(is_integer_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), is_integer_x_node_modules_trim_left_x_dist_trim_left_x_esm_reLeft2016, is_integer_x_node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function is_integer_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2018(string) {
  return is_integer_x_node_modules_trim_left_x_dist_trim_left_x_esm_replace.call(is_integer_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), is_integer_x_node_modules_trim_left_x_dist_trim_left_x_esm_reLeft, is_integer_x_node_modules_trim_left_x_dist_trim_left_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/trim-right-x/dist/trim-right-x.esm.js


var is_integer_x_node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING = '';
var is_integer_x_node_modules_trim_right_x_dist_trim_right_x_esm_RegExpCtr = /none/.constructor;
var is_integer_x_node_modules_trim_right_x_dist_trim_right_x_esm_reRight2016 = new is_integer_x_node_modules_trim_right_x_dist_trim_right_x_esm_RegExpCtr("[".concat(is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_string2016, "]+$"));
var is_integer_x_node_modules_trim_right_x_dist_trim_right_x_esm_reRight2018 = new is_integer_x_node_modules_trim_right_x_dist_trim_right_x_esm_RegExpCtr("[".concat(is_integer_x_node_modules_white_space_x_dist_white_space_x_esm, "]+$"));
var is_integer_x_node_modules_trim_right_x_dist_trim_right_x_esm_replace = is_integer_x_node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function is_integer_x_node_modules_trim_right_x_dist_trim_right_x_esm_trimRight2016(string) {
  return is_integer_x_node_modules_trim_right_x_dist_trim_right_x_esm_replace.call(is_integer_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), is_integer_x_node_modules_trim_right_x_dist_trim_right_x_esm_reRight2016, is_integer_x_node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function is_integer_x_node_modules_trim_right_x_dist_trim_right_x_esm_trimRight2018(string) {
  return is_integer_x_node_modules_trim_right_x_dist_trim_right_x_esm_replace.call(is_integer_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), is_integer_x_node_modules_trim_right_x_dist_trim_right_x_esm_reRight2018, is_integer_x_node_modules_trim_right_x_dist_trim_right_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function is_integer_x_node_modules_trim_x_dist_trim_x_esm_trim2016(string) {
  return is_integer_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2016(is_integer_x_node_modules_trim_right_x_dist_trim_right_x_esm_trimRight2016(string));
}
/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function is_integer_x_node_modules_trim_x_dist_trim_x_esm_trim2018(string) {
  return is_integer_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2018(is_integer_x_node_modules_trim_right_x_dist_trim_right_x_esm_trimRight2018(string));
}


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/normalize-space-x/dist/normalize-space-x.esm.js


var is_integer_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_SPACE = ' ';
var is_integer_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_RegExpCtr = /none/.constructor;
var is_integer_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_reNormalize2016 = new is_integer_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_RegExpCtr("[".concat(is_integer_x_node_modules_white_space_x_dist_white_space_x_esm_string2016, "]+"), 'g');
var is_integer_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_reNormalize2018 = new is_integer_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_RegExpCtr("[".concat(is_integer_x_node_modules_white_space_x_dist_white_space_x_esm, "]+"), 'g');
var is_integer_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_replace = is_integer_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */

function is_integer_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_normalizeSpace2016(string) {
  return is_integer_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_replace.call(is_integer_x_node_modules_trim_x_dist_trim_x_esm_trim2016(string), is_integer_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_reNormalize2016, is_integer_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_SPACE);
}
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

function is_integer_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_normalizeSpace2018(string) {
  return is_integer_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_replace.call(is_integer_x_node_modules_trim_x_dist_trim_x_esm_trim2018(string), is_integer_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_reNormalize2018, is_integer_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_SPACE);
}


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/replace-comments-x/dist/replace-comments-x.esm.js


var is_integer_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING = '';
var is_integer_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var is_integer_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_replace = is_integer_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

function is_integer_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_replaceComments(string, replacement) {
  return is_integer_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_replace.call(is_integer_x_node_modules_require_coercible_to_string_x_dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), is_integer_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_STRIP_COMMENTS, arguments.length > 1 ? is_integer_x_node_modules_to_string_x_dist_to_string_x_esm_ToString(replacement) : is_integer_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/is-function-x/dist/is-function-x.esm.js
var is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_this = undefined;

function is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }









var is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_SPACE = ' ';
var is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_fToString = Function.prototype.toString;
var is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_funcTag = '[object Function]';
var is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_genTag = '[object GeneratorFunction]';
var is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_asyncTag = '[object AsyncFunction]';
var is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_ctrRx = /^class /;
var is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_test = is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_ctrRx.test;
var is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_hasNativeClass = is_integer_x_node_modules_attempt_x_dist_attempt_x_esm_attempt(function () {
  is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_newArrowCheck(this, is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_this);

  /* eslint-disable-next-line no-new-func */
  return Function('"use strict"; return class My {};')();
}.bind(undefined)).threw === false;

var is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_testClassstring = function _testClassstring(value) {
  return is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_test.call(is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_ctrRx, is_integer_x_node_modules_normalize_space_x_dist_normalize_space_x_esm_normalizeSpace2018(is_integer_x_node_modules_replace_comments_x_dist_replace_comments_x_esm_replaceComments(is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_fToString.call(value), is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_SPACE)));
};

var is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_isES6ClassFn = function isES6ClassFunc(value) {
  var result = is_integer_x_node_modules_attempt_x_dist_attempt_x_esm_attempt(is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_testClassstring, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_tryFuncToString = function funcToString(value, allowClass) {
  if (is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_hasNativeClass && allowClass === false && is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  return is_integer_x_node_modules_attempt_x_dist_attempt_x_esm_attempt.call(value, is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_fToString).threw === false;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


function is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_isFunction(value, allowClass) {
  if (is_integer_x_node_modules_is_primitive_default()(value)) {
    return false;
  }

  if (is_integer_x_node_modules_has_to_string_tag_x_dist_has_to_string_tag_x_esm) {
    return is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_tryFuncToString(value, is_integer_x_node_modules_to_boolean_x_dist_to_boolean_x_esm_toBoolean(allowClass));
  }

  if (is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_hasNativeClass && is_integer_x_node_modules_is_falsey_x_dist_is_falsey_x_esm_isFalsey(allowClass) && is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  var strTag = is_integer_x_node_modules_to_string_tag_x_dist_to_string_tag_x_esm_toStringTag(value);
  return strTag === is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_funcTag || strTag === is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_genTag || strTag === is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_asyncTag;
}


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/to-primitive-x/dist/to-primitive-x.esm.js







var is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ZERO = 0;
var is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ONE = 1;
/* eslint-disable-next-line no-void */

var is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_UNDEFINED = void is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ZERO;
var is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_NUMBER = 'number';
var is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING = 'string';
var is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_DEFAULT = 'default';
/** @type {StringConstructor} */

var is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_StringCtr = is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING.constructor;
/** @type {NumberConstructor} */

var is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_NumberCtr = is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_symToPrimitive = is_integer_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_symValueOf = is_integer_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm && Symbol.prototype.valueOf;
var is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_toStringOrder = ['toString', 'valueOf'];
var is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_toNumberOrder = ['valueOf', 'toString'];
var is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_orderLength = 2;
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */

var is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ordinaryToPrimitive = function _ordinaryToPrimitive(ordinary, hint) {
  is_integer_x_node_modules_require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(ordinary);

  if (typeof hint !== 'string' || hint !== is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_NUMBER && hint !== is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING ? is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_toStringOrder : is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_toNumberOrder;
  var method;
  var result;

  for (var i = is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ZERO; i < is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_orderLength; i += is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ONE) {
    method = ordinary[methodNames[i]];

    if (is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_isFunction(method)) {
      result = method.call(ordinary);

      if (is_integer_x_node_modules_is_primitive_default()(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_getMethod = function _getMethod(object, property) {
  var func = object[property];

  if (isNil(func) === false) {
    if (is_integer_x_node_modules_is_function_x_dist_is_function_x_esm_isFunction(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_StringCtr) {
      return is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING;
    }

    if (value === is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_NumberCtr) {
      return is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_NUMBER;
    }
  }

  return is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_getExoticToPrim = function getExoticToPrim(value) {
  if (is_integer_x_node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm) {
    if (is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_symToPrimitive) {
      return is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_getMethod(value, is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_symToPrimitive);
    }

    if (is_symbol_default()(value)) {
      return is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_symValueOf;
    }
  }

  return is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_UNDEFINED;
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {NumberConstructor|StringConstructor} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


function is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_toPrimitive(input, preferredType) {
  if (is_integer_x_node_modules_is_primitive_default()(input)) {
    return input;
  }

  var hint = is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_getHint(preferredType, arguments.length > is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ONE);
  var exoticToPrim = is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_getExoticToPrim(input);

  if (typeof exoticToPrim !== 'undefined') {
    var result = exoticToPrim.call(input, hint);

    if (is_integer_x_node_modules_is_primitive_default()(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  var newHint = hint === is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_DEFAULT && (is_date_object_default()(input) || is_symbol_default()(input)) ? is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_STRING : hint;
  return is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_ordinaryToPrimitive(input, newHint === is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_DEFAULT ? is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_NUMBER : newHint);
}


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/nan-x/dist/nan-x.esm.js
/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 */
/* harmony default export */ var is_integer_x_node_modules_nan_x_dist_nan_x_esm = (0 / 0);


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/parse-int-x/dist/parse-int-x.esm.js



var is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_nativeParseInt = parseInt;
/**  @type {Function} */

var is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_castNumber = 0 .constructor; // noinspection JSPotentiallyInvalidConstructorUsage

var is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_ref = '',
    is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_charAt = is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_ref.charAt;
var is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_hexRegex = /^[-+]?0[xX]/;
var is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_test = is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_hexRegex.test;
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2016).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2016(string, radix) {
  var str = is_integer_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2016(is_integer_x_node_modules_to_string_x_dist_to_string_x_esm_ToString(string));
  return is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_nativeParseInt(str, is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_castNumber(radix) || (is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_test.call(is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_hexRegex, str) ? 16 : 10));
}
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2018).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2018(string, radix) {
  var str = is_integer_x_node_modules_trim_left_x_dist_trim_left_x_esm_trimLeft2018(is_integer_x_node_modules_to_string_x_dist_to_string_x_esm_ToString(string));

  if (is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_charAt.call(str, 0) === "\u180E") {
    return is_integer_x_node_modules_nan_x_dist_nan_x_esm;
  }

  return is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_nativeParseInt(str, is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_castNumber(radix) || (is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_test.call(is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_hexRegex, str) ? 16 : 10));
}


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/to-number-x/dist/to-number-x.esm.js





var is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_binaryRadix = 2;
var is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_octalRadix = 8;
var is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_testCharsCount = 2;
var is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
/** @type {NumberConstructor} */

var is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_castNumber = is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_testCharsCount.constructor;
var is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_pStrSlice = is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_ERROR_MESSAGE.slice;
var is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_binaryRegex = /^0b[01]+$/i;
var is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_RegExpConstructor = is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_test = is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_binaryRegex.test;

var is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_isBinary = function _isBinary(value) {
  return is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_test.call(is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_binaryRegex, value);
};

var is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_octalRegex = /^0o[0-7]+$/i;

var is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_isOctal = function _isOctal(value) {
  return is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_test.call(is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_octalRegex, value);
};

var is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_nonWSregex2016 = new is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_RegExpConstructor("[\x85\u200B\uFFFE]", 'g');

var is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_hasNonWS2016 = function _hasNonWS(value) {
  return is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_test.call(is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_nonWSregex2016, value);
};

var is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_nonWSregex2018 = new is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_hasNonWS2018 = function _hasNonWS(value) {
  return is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_test.call(is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_nonWSregex2018, value);
};

var is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_test.call(is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_invalidHexLiteral, value);
};
/**
 * This method converts argument to a value of type Number. (ES2016).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


function is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(argument) {
  var value = is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_toPrimitive(argument, Number);

  if (is_symbol_default()(value)) {
    throw new TypeError(is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_isBinary(value)) {
      return is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2016(is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_pStrSlice.call(value, is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_testCharsCount), is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_binaryRadix));
    }

    if (is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_isOctal(value)) {
      return is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2016(is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_pStrSlice.call(value, is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_testCharsCount), is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_octalRadix));
    }

    if (is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_hasNonWS2016(value) || is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_isInvalidHexLiteral(value)) {
      return is_integer_x_node_modules_nan_x_dist_nan_x_esm;
    }

    var trimmed = is_integer_x_node_modules_trim_x_dist_trim_x_esm_trim2016(value);

    if (trimmed !== value) {
      return is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(trimmed);
    }
  }

  return is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_castNumber(value);
}
/**
 * This method converts argument to a value of type Number. (ES2018).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */

function is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(argument) {
  var value = is_integer_x_node_modules_to_primitive_x_dist_to_primitive_x_esm_toPrimitive(argument, is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_castNumber);

  if (is_symbol_default()(value)) {
    throw new TypeError(is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_isBinary(value)) {
      return is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2018(is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_pStrSlice.call(value, is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_testCharsCount), is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_binaryRadix));
    }

    if (is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_isOctal(value)) {
      return is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(is_integer_x_node_modules_parse_int_x_dist_parse_int_x_esm_parseInt2018(is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_pStrSlice.call(value, is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_testCharsCount), is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_octalRadix));
    }

    if (is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_hasNonWS2018(value) || is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_isInvalidHexLiteral(value)) {
      return is_integer_x_node_modules_nan_x_dist_nan_x_esm;
    }

    var trimmed = is_integer_x_node_modules_trim_x_dist_trim_x_esm_trim2018(value);

    if (trimmed !== value) {
      return is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(trimmed);
    }
  }

  return is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_castNumber(value);
}


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/math-sign-x/dist/math-sign-x.esm.js


/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2016).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function is_integer_x_node_modules_math_sign_x_dist_math_sign_x_esm_sign2016(x) {
  var n = is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(x);

  if (n === 0 || is_integer_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}
/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2018).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function is_integer_x_node_modules_math_sign_x_dist_math_sign_x_esm_sign2018(x) {
  var n = is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(x);

  if (n === 0 || is_integer_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}


// CONCATENATED MODULE: ./node_modules/is-integer-x/node_modules/to-integer-x/dist/to-integer-x.esm.js




var is_integer_x_node_modules_to_integer_x_dist_to_integer_x_esm_abs = Math.abs,
    is_integer_x_node_modules_to_integer_x_dist_to_integer_x_esm_floor = Math.floor;
/**
 * Converts `value` to an integer. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function is_integer_x_node_modules_to_integer_x_dist_to_integer_x_esm_toInteger2016(value) {
  var number = is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2016(value);

  if (is_integer_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || is_integer_x_node_modules_is_finite_x_dist_is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return is_integer_x_node_modules_math_sign_x_dist_math_sign_x_esm_sign2016(number) * is_integer_x_node_modules_to_integer_x_dist_to_integer_x_esm_floor(is_integer_x_node_modules_to_integer_x_dist_to_integer_x_esm_abs(number));
}
/**
 * Converts `value` to an integer. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function is_integer_x_node_modules_to_integer_x_dist_to_integer_x_esm_toInteger2018(value) {
  var number = is_integer_x_node_modules_to_number_x_dist_to_number_x_esm_toNumber2018(value);

  if (is_integer_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || is_integer_x_node_modules_is_finite_x_dist_is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return is_integer_x_node_modules_math_sign_x_dist_math_sign_x_esm_sign2018(number) * is_integer_x_node_modules_to_integer_x_dist_to_integer_x_esm_floor(is_integer_x_node_modules_to_integer_x_dist_to_integer_x_esm_abs(number));
}


// CONCATENATED MODULE: ./node_modules/is-integer-x/dist/is-integer-x.esm.js


/**
 * This method determines whether the passed value is an integer.
 *
 * @param {*} value - The value to be tested for being an integer.
 * @returns {boolean} A Boolean indicating whether or not the given value is an integer.
 */

function isInteger(value) {
  return is_integer_x_node_modules_is_finite_x_dist_is_finite_x_esm_isFinite(value) && is_integer_x_node_modules_to_integer_x_dist_to_integer_x_esm_toInteger2018(value) === value;
}


// EXTERNAL MODULE: ./node_modules/is-safe-integer-x/node_modules/max-safe-integer/index.js
var is_safe_integer_x_node_modules_max_safe_integer = __webpack_require__(18);
var is_safe_integer_x_node_modules_max_safe_integer_default = /*#__PURE__*/__webpack_require__.n(is_safe_integer_x_node_modules_max_safe_integer);

// CONCATENATED MODULE: ./node_modules/is-safe-integer-x/dist/is-safe-integer-x.esm.js


var MIN_SAFE_INTEGER = -is_safe_integer_x_node_modules_max_safe_integer_default.a;
/**
 * This method determines whether the passed value is a safe integer.
 *
 * Can be exactly represented as an IEEE-754 double precision number, and
 * whose IEEE-754 representation cannot be the result of rounding any other
 * integer to fit the IEEE-754 representation.
 *
 * @param {*} value - The value to be tested for being a safe integer.
 * @returns {boolean} A Boolean indicating whether or not the given value is a
 *  safe integer.
 */

function isSafeInteger(value) {
  return isInteger(value) && value >= MIN_SAFE_INTEGER && value <= is_safe_integer_x_node_modules_max_safe_integer_default.a;
}


// CONCATENATED MODULE: ./node_modules/is-length-x/dist/is-length-x.esm.js

/**
 * This method checks if `value` is a valid array-like length.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */

function isLength(value) {
  return isSafeInteger(value) && value >= 0;
}


// CONCATENATED MODULE: ./node_modules/is-array-like-x/dist/is-array-like-x.esm.js



/**
 * Checks if value is array-like. A value is considered array-like if it's
 * not a function and has a `length` that's an integer greater than or
 * equal to 0 and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @param {*} value - The object to be tested.
 */

function isArrayLike(value) {
  return isNil(value) === false && is_array_like_x_node_modules_is_function_x_dist_is_function_x_esm_isFunction(value, true) === false && isLength(value.length);
}


// CONCATENATED MODULE: ./node_modules/calculate-from-index-x/dist/calculate-from-index-x.esm.js





var calculate_from_index_x_esm_getMax = function getMax(a, b) {
  return a >= b ? a : b;
};
/**
 * This method calculates a fromIndex of a given value for an array.
 *
 * @param {Array} array - * The array on which to calculate the starting index.
 * @throws {TypeError} If array is null or undefined.
 * @param {number} fromIndex - * The position in this array at which to begin. A
 *  negative value gives the index of array.length + fromIndex by asc.
 * @returns {number} The calculated fromIndex. Default is 0.
 */


function calcFromIndex(array, fromIndex) {
  var object = calculate_from_index_x_node_modules_to_object_x_dist_to_object_x_esm_toObject(array);

  if (isArrayLike(object) === false) {
    return 0;
  }

  var index = calculate_from_index_x_node_modules_to_integer_x_dist_to_integer_x_esm_toInteger2018(fromIndex);
  return index >= 0 ? index : calculate_from_index_x_esm_getMax(0, calculate_from_index_x_node_modules_to_length_x_dist_to_length_x_esm_toLength2018(object.length) + index);
}


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/has-boxed-string-x/dist/has-boxed-string-x.esm.js
var index_of_x_node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm_string = 'a';
var index_of_x_node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm_boxedString = {}.constructor(index_of_x_node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm_string);
/**
 * Check failure of by-index access of string characters (IE < 9)
 * and failure of `0 in boxedString` (Rhino).
 *
 * `true` if no failure; otherwise `false`.
 *
 * @type boolean
 */

var index_of_x_node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm_hasBoxed = index_of_x_node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm_boxedString[0] === index_of_x_node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm_string && 0 in index_of_x_node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm_boxedString;
/* harmony default export */ var index_of_x_node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm = (index_of_x_node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm_hasBoxed);


// CONCATENATED MODULE: ./node_modules/index-of-x/node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js


var index_of_x_node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_EMPTY_STRING = '';
var index_of_x_node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_strSplit = index_of_x_node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_EMPTY_STRING.split;
var index_of_x_node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_isStringFn = index_of_x_node_modules_has_boxed_string_x_dist_has_boxed_string_x_esm === false && typeof index_of_x_node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_strSplit === 'function' && is_string_default.a;
/**
 * This method tests if a value is a string with the boxed bug; splits to an
 * array for iteration; otherwise returns the original value.
 *
 * @param {*} [value] - The value to be tested.
 * @returns {*} An array or characters if value was a string with the boxed bug;
 *  otherwise the value.
 */

function index_of_x_node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_splitIfBoxedBug(value) {
  return index_of_x_node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_isStringFn && index_of_x_node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_isStringFn(value) ? index_of_x_node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_strSplit.call(value, index_of_x_node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_EMPTY_STRING) : value;
}


// CONCATENATED MODULE: ./node_modules/index-of-x/dist/index-of-x.esm.js
function index_of_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }












var pIndexOf = typeof Array.prototype.indexOf === 'function' && Array.prototype.indexOf;
var index_of_x_esm_isWorking;

if (pIndexOf) {
  var index_of_x_esm_res = index_of_x_node_modules_attempt_x_dist_attempt_x_esm_attempt.call([0, 1], pIndexOf, 1, 2);
  index_of_x_esm_isWorking = index_of_x_esm_res.threw === false && index_of_x_esm_res.value === -1;

  if (index_of_x_esm_isWorking) {
    index_of_x_esm_res = index_of_x_node_modules_attempt_x_dist_attempt_x_esm_attempt.call([0, 1], pIndexOf, 1);
    index_of_x_esm_isWorking = index_of_x_esm_res.threw === false && index_of_x_esm_res.value === 1;
  }

  if (index_of_x_esm_isWorking) {
    index_of_x_esm_res = index_of_x_node_modules_attempt_x_dist_attempt_x_esm_attempt.call([0, -0], pIndexOf, -0);
    index_of_x_esm_isWorking = index_of_x_esm_res.threw === false && index_of_x_esm_res.value === 0;
  }

  if (index_of_x_esm_isWorking) {
    var index_of_x_esm_testArr = [];
    index_of_x_esm_testArr.length = 2;
    /* eslint-disable-next-line no-void */

    index_of_x_esm_testArr[1] = void 0;
    /* eslint-disable-next-line no-void */

    index_of_x_esm_res = index_of_x_node_modules_attempt_x_dist_attempt_x_esm_attempt.call(index_of_x_esm_testArr, pIndexOf, void 0);
    index_of_x_esm_isWorking = index_of_x_esm_res.threw === false && index_of_x_esm_res.value === 1;
  }

  if (index_of_x_esm_isWorking) {
    index_of_x_esm_res = index_of_x_node_modules_attempt_x_dist_attempt_x_esm_attempt.call('abc', pIndexOf, 'c');
    index_of_x_esm_isWorking = index_of_x_esm_res.threw === false && index_of_x_esm_res.value === 2;
  }

  if (index_of_x_esm_isWorking) {
    index_of_x_esm_res = index_of_x_node_modules_attempt_x_dist_attempt_x_esm_attempt.call(function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }('a', 'b', 'c'), pIndexOf, 'c');
    index_of_x_esm_isWorking = index_of_x_esm_res.threw === false && index_of_x_esm_res.value === 2;
  }
}

if (index_of_x_esm_isWorking !== true) {
  pIndexOf = function $pIndexOf(searchElement) {
    /* eslint-disable-next-line babel/no-invalid-this */
    var length = index_of_x_node_modules_to_length_x_dist_to_length_x_esm_toLength2018(this.length);

    if (length < 1) {
      return -1;
    }
    /* eslint-disable-next-line prefer-rest-params */


    var i = arguments[1];

    while (i < length) {
      /* eslint-disable-next-line babel/no-invalid-this */
      if (i in this && this[i] === searchElement) {
        return i;
      }

      i += 1;
    }

    return -1;
  };
}
/**
 * This method returns an index in the array, if an element in the array
 * satisfies the provided testing function. Otherwise -1 is returned.
 *
 * @private
 * @param {Array} array - The array to search.
 * @param {*} searchElement - Element to locate in the array.
 * @param {number} fromIndex - The index to start the search at.
 * @param {Function} extendFn - The comparison function to use.
 * @returns {number} Returns index of found element, otherwise -1.
 */


var findIdxFrom = function findIndexFrom(array, searchElement, fromIndex, extendFn) {
  var fIdx = fromIndex;
  var length = index_of_x_node_modules_to_length_x_dist_to_length_x_esm_toLength2018(array.length);

  while (fIdx < length) {
    if (fIdx in array && extendFn(array[fIdx], searchElement)) {
      return fIdx;
    }

    fIdx += 1;
  }

  return -1;
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method returns the first index at which a given element can be found
 * in the array, or -1 if it is not present.
 *
 * @param {Array} array - The array to search.
 * @throws {TypeError} If `array` is `null` or `undefined`.
 * @param {*} searchElement - Element to locate in the `array`.
 * @param {number} [fromIndex] - The index to start the search at. If the
 *  index is greater than or equal to the array's length, -1 is returned,
 *  which means the array will not be searched. If the provided index value is
 *  a negative number, it is taken as the offset from the end of the array.
 *  Note: if the provided index is negative, the array is still searched from
 *  front to back. If the calculated index is less than 0, then the whole
 *  array will be searched. Default: 0 (entire array is searched).
 * @param {string} [extend] - Extension type: `SameValue` or `SameValueZero`.
 * @returns {number} Returns index of found element, otherwise -1.
 */
// eslint-enable jsdoc/check-param-names


function indexOf(array, searchElement) {
  var _this = this;

  var object = index_of_x_node_modules_to_object_x_dist_to_object_x_esm_toObject(array);
  var iterable = index_of_x_node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_splitIfBoxedBug(object);
  var length = index_of_x_node_modules_to_length_x_dist_to_length_x_esm_toLength2018(iterable.length);

  if (length < 1) {
    return -1;
  }

  var argLength = arguments.length;
  /* eslint-disable-next-line prefer-rest-params */

  var extend = argLength > 2 && argLength > 3 ? arguments[3] : arguments[2];
  var extendFn;

  if (is_string_default()(extend)) {
    extend = extend.toLowerCase();

    if (extend === 'samevalue') {
      extendFn = sameValue;
    } else if (extend === 'samevaluezero') {
      extendFn = sameValueZero;
    }
  }

  var fromIndex = 0;

  if (extendFn && (searchElement === 0 || index_of_x_node_modules_is_nan_x_dist_is_nan_x_esm_isNaN(searchElement))) {
    if (argLength > 3) {
      /* eslint-disable-next-line prefer-rest-params */
      fromIndex = calcFromIndex(iterable, arguments[2]);

      if (fromIndex >= length) {
        return -1;
      }

      if (fromIndex < 0) {
        fromIndex = 0;
      }
    }

    if (fromIndex > 0) {
      return findIdxFrom(iterable, searchElement, fromIndex, extendFn);
    }

    return find_index_x_esm(iterable, function (element, index) {
      index_of_x_esm_newArrowCheck(this, _this);

      return index in iterable && extendFn(searchElement, element);
    }.bind(this));
  }

  if (argLength > 3 || argLength > 2 && index_of_x_node_modules_is_falsey_x_dist_is_falsey_x_esm_isFalsey(extendFn)) {
    /* eslint-disable-next-line prefer-rest-params */
    fromIndex = calcFromIndex(iterable, arguments[2]);

    if (fromIndex >= length) {
      return -1;
    }

    if (fromIndex < 0) {
      fromIndex = 0;
    }
  }

  return pIndexOf.call(iterable, searchElement, fromIndex);
}


// CONCATENATED MODULE: ./node_modules/array-includes-x/dist/array-includes-x.esm.js
function array_includes_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }









var nativeIncludes = typeof Array.prototype.includes === 'function' && Array.prototype.includes;
var array_includes_x_esm_isWorking;

if (nativeIncludes) {
  var arr;
  var array_includes_x_esm_res = attempt_x_dist_attempt_x_esm_attempt.call(null, nativeIncludes, 'a');
  array_includes_x_esm_isWorking = array_includes_x_esm_res.threw;

  if (array_includes_x_esm_isWorking) {
    arr = {
      1: 'a',
      2: NaN,
      3: -0,
      length: 5
    };
    /* eslint-disable-next-line no-void */

    array_includes_x_esm_res = attempt_x_dist_attempt_x_esm_attempt.call(arr, nativeIncludes, void 0, -1);
    array_includes_x_esm_isWorking = array_includes_x_esm_res.threw === false && array_includes_x_esm_res.value === true;
  }

  if (array_includes_x_esm_isWorking) {
    array_includes_x_esm_res = attempt_x_dist_attempt_x_esm_attempt.call(arr, nativeIncludes, NaN);
    array_includes_x_esm_isWorking = array_includes_x_esm_res.threw === false && array_includes_x_esm_res.value === true;
  }

  if (array_includes_x_esm_isWorking) {
    array_includes_x_esm_res = attempt_x_dist_attempt_x_esm_attempt.call(arr, nativeIncludes, 0);
    array_includes_x_esm_isWorking = array_includes_x_esm_res.threw === false && array_includes_x_esm_res.value === true;
  }

  if (array_includes_x_esm_isWorking) {
    var array_includes_x_esm_testArr = [];
    array_includes_x_esm_testArr.length = 2;
    array_includes_x_esm_testArr[1] = null;
    /* eslint-disable-next-line no-void */

    array_includes_x_esm_res = attempt_x_dist_attempt_x_esm_attempt.call(array_includes_x_esm_testArr, nativeIncludes, void 0);
    array_includes_x_esm_isWorking = array_includes_x_esm_res.threw === false && array_includes_x_esm_res.value === true;
  }

  if (array_includes_x_esm_isWorking) {
    array_includes_x_esm_res = attempt_x_dist_attempt_x_esm_attempt.call('abc', nativeIncludes, 'c');
    array_includes_x_esm_isWorking = array_includes_x_esm_res.threw === false && array_includes_x_esm_res.value === true;
  }

  if (array_includes_x_esm_isWorking) {
    array_includes_x_esm_res = attempt_x_dist_attempt_x_esm_attempt.call(function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }('a', 'b', 'c'), nativeIncludes, 'c');
    array_includes_x_esm_isWorking = array_includes_x_esm_res.threw === false && array_includes_x_esm_res.value === true;
  }
}
/**
 * This method determines whether an array includes a certain element,
 * returning true or false as appropriate.
 *
 * @param {Array} array - The array to search.
 * @throws {TypeError} If `array` is `null` or `undefined`.
 * @param {*} searchElement - Element to locate in the `array`.
 * @param {number} [fromIndex] - The position in this array at which to begin
 *  searching for searchElement. A negative value searches from the index of
 *  array.length + fromIndex by asc. Defaults to 0.
 * @returns {boolean} `true` if searched element is included; otherwise `false`.
 */


var $includes;

if (array_includes_x_esm_isWorking) {
  $includes = function includes(array, searchElement) {
    var args = [searchElement];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return nativeIncludes.apply(array, args);
  };
} else {
  /*
   * This method returns an index in the array, if an element in the array
   * satisfies the provided testing function. Otherwise -1 is returned.
   *
   * @private
   * @param {Array} object - The array to search.
   * @param {*} searchElement - Element to locate in the array.
   * @param {number} fromIndex - The index to start the search at.
   * @returns {number} Returns index of found element, otherwise -1.
   */
  var array_includes_x_esm_findIdxFrom = function findIndexFrom(object, searchElement, fromIndex) {
    var fIdx = fromIndex;
    var length = to_length_x_dist_to_length_x_esm_toLength2018(object.length);

    while (fIdx < length) {
      if (sameValueZero(object[fIdx], searchElement)) {
        return fIdx;
      }

      fIdx += 1;
    }

    return -1;
  };

  $includes = function includes(array, searchElement) {
    var _this = this;

    var object = to_object_x_dist_to_object_x_esm_toObject(array);
    var iterable = node_modules_split_if_boxed_bug_x_dist_split_if_boxed_bug_x_esm_splitIfBoxedBug(object);
    var length = to_length_x_dist_to_length_x_esm_toLength2018(iterable.length);

    if (length < 1) {
      return -1;
    }

    if (typeof searchElement === 'undefined') {
      /* eslint-disable-next-line prefer-rest-params */
      var fromIndex = calcFromIndex(iterable, arguments[2]);

      if (fromIndex >= length) {
        return -1;
      }

      if (fromIndex < 0) {
        fromIndex = 0;
      }

      if (fromIndex > 0) {
        return array_includes_x_esm_findIdxFrom(iterable, searchElement, fromIndex) > -1;
      }

      return find_index_x_esm(iterable, function (element) {
        array_includes_x_esm_newArrowCheck(this, _this);

        return sameValueZero(searchElement, element);
      }.bind(this)) > -1;
    }
    /* eslint-disable-next-line prefer-rest-params */


    return indexOf(iterable, searchElement, arguments[2], 'samevaluezero') > -1;
  };
}

var inc = $includes;
/* harmony default export */ var array_includes_x_esm = (inc);


// CONCATENATED MODULE: ./dist/array-difference-x.esm.js
function array_difference_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }





 // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method creates an array of array values not included in the other given
 * arrays using SameValueZero for equality comparisons. The order and references
 * of result values are determined by the first array.
 *
 * @param {Array} array - The array to inspect.
 * @throws {TypeError} If array is null or undefined.
 * @param {...Array} [exclude] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 */
// eslint-enable jsdoc/check-param-names

var array_difference_x_esm_difference = function difference(array) {
  var _this = this;

  if (isNil(array)) {
    return [];
  }
  /* eslint-disable-next-line prefer-rest-params */


  var excludes = slice(arguments, 1);
  return array_filter_x_esm(array, function (value) {
    var _this2 = this;

    array_difference_x_esm_newArrowCheck(this, _this);

    return array_some_x_esm(excludes, function (exclude) {
      array_difference_x_esm_newArrowCheck(this, _this2);

      return isNil(exclude) === false && array_includes_x_esm(exclude, value);
    }.bind(this)) === false;
  }.bind(this));
};

/* harmony default export */ var array_difference_x_esm = __webpack_exports__["default"] = (array_difference_x_esm_difference);



/***/ })
/******/ ]);
});
//# sourceMappingURL=array-difference-x.js.map