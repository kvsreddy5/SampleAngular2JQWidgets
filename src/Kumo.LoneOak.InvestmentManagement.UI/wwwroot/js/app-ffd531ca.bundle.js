webpackJsonp([0],{

/***/ 0:
/*!*************************************!*\
  !*** ./angular2App/app/main.dev.ts ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1);
	var app_module_1 = __webpack_require__(/*! ./app.module */ 23);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 23:
/*!***************************************!*\
  !*** ./angular2App/app/app.module.ts ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	/// <reference path="../../node_modules/jqwidgets-framework/jqwidgets-ts/jqwidgets.d.ts" />
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 21);
	var http_1 = __webpack_require__(/*! @angular/http */ 24);
	var router_1 = __webpack_require__(/*! @angular/router */ 25);
	var forms_1 = __webpack_require__(/*! @angular/forms */ 55);
	var app_component_1 = __webpack_require__(/*! ./app.component */ 57);
	var angular_jqxdataadapter_1 = __webpack_require__(/*! jqwidgets-framework/jqwidgets-ts/angular_jqxdataadapter */ 64);
	var angular_jqxgrid_1 = __webpack_require__(/*! jqwidgets-framework/jqwidgets-ts/angular_jqxgrid */ 61);
	var angular_jqxbuttons_1 = __webpack_require__(/*! jqwidgets-framework/jqwidgets-ts/angular_jqxbuttons */ 62);
	var angular_jqxwindow_1 = __webpack_require__(/*! jqwidgets-framework/jqwidgets-ts/angular_jqxwindow */ 63);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule, forms_1.FormsModule, router_1.RouterModule],
	        declarations: [app_component_1.AppComponent, angular_jqxdataadapter_1.jqxDataAdapterComponent, angular_jqxgrid_1.jqxGridComponent, angular_jqxbuttons_1.jqxButtonComponent, angular_jqxwindow_1.jqxWindowComponent],
	        bootstrap: [app_component_1.AppComponent],
	        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
	    })
	], AppModule);
	exports.AppModule = AppModule;


/***/ },

/***/ 55:
/*!***********************************************!*\
  !*** ./~/@angular/forms/bundles/forms.umd.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * @license Angular v2.0.0
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(/*! @angular/core */ 3), __webpack_require__(/*! rxjs/operator/toPromise */ 56), __webpack_require__(/*! rxjs/Subject */ 4), __webpack_require__(/*! rxjs/Observable */ 5), __webpack_require__(/*! rxjs/observable/fromPromise */ 52)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/operator/toPromise', 'rxjs/Subject', 'rxjs/Observable', 'rxjs/observable/fromPromise'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.forms = global.ng.forms || {}),global.ng.core,global.Rx.Observable.prototype,global.Rx,global.Rx,global.Rx.Observable));
	}(this, function (exports,_angular_core,rxjs_operator_toPromise,rxjs_Subject,rxjs_Observable,rxjs_observable_fromPromise) { 'use strict';
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var globalScope;
	    if (typeof window === 'undefined') {
	        if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	            // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	            globalScope = self;
	        }
	        else {
	            globalScope = global;
	        }
	    }
	    else {
	        globalScope = window;
	    }
	    // Need to declare a new variable for global here since TypeScript
	    // exports the original value of the symbol.
	    var global$1 = globalScope;
	    // TODO: remove calls to assert in production environment
	    // Note: Can't just export this and import in in other files
	    // as `assert` is a reserved keyword in Dart
	    global$1.assert = function assert(condition) {
	        // TODO: to be fixed properly via #2830, noop for now
	    };
	    function isPresent(obj) {
	        return obj !== undefined && obj !== null;
	    }
	    function isBlank(obj) {
	        return obj === undefined || obj === null;
	    }
	    function isString(obj) {
	        return typeof obj === 'string';
	    }
	    function isFunction(obj) {
	        return typeof obj === 'function';
	    }
	    function isStringMap(obj) {
	        return typeof obj === 'object' && obj !== null;
	    }
	    function isPromise(obj) {
	        // allow any Promise/A+ compliant thenable.
	        // It's up to the caller to ensure that obj.then conforms to the spec
	        return isPresent(obj) && isFunction(obj.then);
	    }
	    function isArray(obj) {
	        return Array.isArray(obj);
	    }
	    var StringWrapper = (function () {
	        function StringWrapper() {
	        }
	        StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
	        StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
	        StringWrapper.split = function (s, regExp) { return s.split(regExp); };
	        StringWrapper.equals = function (s, s2) { return s === s2; };
	        StringWrapper.stripLeft = function (s, charVal) {
	            if (s && s.length) {
	                var pos = 0;
	                for (var i = 0; i < s.length; i++) {
	                    if (s[i] != charVal)
	                        break;
	                    pos++;
	                }
	                s = s.substring(pos);
	            }
	            return s;
	        };
	        StringWrapper.stripRight = function (s, charVal) {
	            if (s && s.length) {
	                var pos = s.length;
	                for (var i = s.length - 1; i >= 0; i--) {
	                    if (s[i] != charVal)
	                        break;
	                    pos--;
	                }
	                s = s.substring(0, pos);
	            }
	            return s;
	        };
	        StringWrapper.replace = function (s, from, replace) {
	            return s.replace(from, replace);
	        };
	        StringWrapper.replaceAll = function (s, from, replace) {
	            return s.replace(from, replace);
	        };
	        StringWrapper.slice = function (s, from, to) {
	            if (from === void 0) { from = 0; }
	            if (to === void 0) { to = null; }
	            return s.slice(from, to === null ? undefined : to);
	        };
	        StringWrapper.replaceAllMapped = function (s, from, cb) {
	            return s.replace(from, function () {
	                var matches = [];
	                for (var _i = 0; _i < arguments.length; _i++) {
	                    matches[_i - 0] = arguments[_i];
	                }
	                // Remove offset & string from the result array
	                matches.splice(-2, 2);
	                // The callback receives match, p1, ..., pn
	                return cb(matches);
	            });
	        };
	        StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
	        StringWrapper.compare = function (a, b) {
	            if (a < b) {
	                return -1;
	            }
	            else if (a > b) {
	                return 1;
	            }
	            else {
	                return 0;
	            }
	        };
	        return StringWrapper;
	    }());
	    var NumberWrapper = (function () {
	        function NumberWrapper() {
	        }
	        NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	        NumberWrapper.equal = function (a, b) { return a === b; };
	        NumberWrapper.parseIntAutoRadix = function (text) {
	            var result = parseInt(text);
	            if (isNaN(result)) {
	                throw new Error('Invalid integer literal when parsing ' + text);
	            }
	            return result;
	        };
	        NumberWrapper.parseInt = function (text, radix) {
	            if (radix == 10) {
	                if (/^(\-|\+)?[0-9]+$/.test(text)) {
	                    return parseInt(text, radix);
	                }
	            }
	            else if (radix == 16) {
	                if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	                    return parseInt(text, radix);
	                }
	            }
	            else {
	                var result = parseInt(text, radix);
	                if (!isNaN(result)) {
	                    return result;
	                }
	            }
	            throw new Error('Invalid integer literal when parsing ' + text + ' in base ' + radix);
	        };
	        Object.defineProperty(NumberWrapper, "NaN", {
	            get: function () { return NaN; },
	            enumerable: true,
	            configurable: true
	        });
	        NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
	        NumberWrapper.isNaN = function (value) { return isNaN(value); };
	        NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
	        return NumberWrapper;
	    }());
	    // JS has NaN !== NaN
	    function looseIdentical(a, b) {
	        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	    }
	    function normalizeBool(obj) {
	        return isBlank(obj) ? false : obj;
	    }
	    function isJsObject(o) {
	        return o !== null && (typeof o === 'function' || typeof o === 'object');
	    }
	    function isPrimitive(obj) {
	        return !isJsObject(obj);
	    }
	    function hasConstructor(value, type) {
	        return value.constructor === type;
	    }
	
	    /**
	     * Base class for control directives.
	     *
	     * Only used internally in the forms module.
	     *
	     * @stable
	     */
	    var AbstractControlDirective = (function () {
	        function AbstractControlDirective() {
	        }
	        Object.defineProperty(AbstractControlDirective.prototype, "control", {
	            get: function () { throw new Error('unimplemented'); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "value", {
	            get: function () { return isPresent(this.control) ? this.control.value : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	            get: function () { return isPresent(this.control) ? this.control.valid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
	            get: function () { return isPresent(this.control) ? this.control.invalid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pending", {
	            get: function () { return isPresent(this.control) ? this.control.pending : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	            get: function () {
	                return isPresent(this.control) ? this.control.errors : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	            get: function () { return isPresent(this.control) ? this.control.pristine : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	            get: function () { return isPresent(this.control) ? this.control.dirty : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	            get: function () { return isPresent(this.control) ? this.control.touched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	            get: function () { return isPresent(this.control) ? this.control.untouched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
	            get: function () { return isPresent(this.control) ? this.control.disabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
	            get: function () { return isPresent(this.control) ? this.control.enabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
	            get: function () {
	                return isPresent(this.control) ? this.control.statusChanges : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
	            get: function () {
	                return isPresent(this.control) ? this.control.valueChanges : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "path", {
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        AbstractControlDirective.prototype.reset = function (value) {
	            if (value === void 0) { value = undefined; }
	            if (isPresent(this.control))
	                this.control.reset(value);
	        };
	        return AbstractControlDirective;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * A directive that contains multiple {@link NgControl}s.
	     *
	     * Only used by the forms module.
	     *
	     * @stable
	     */
	    var ControlContainer = (function (_super) {
	        __extends$1(ControlContainer, _super);
	        function ControlContainer() {
	            _super.apply(this, arguments);
	        }
	        Object.defineProperty(ControlContainer.prototype, "formDirective", {
	            /**
	             * Get the form to which this container belongs.
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ControlContainer.prototype, "path", {
	            /**
	             * Get the path to this container.
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        return ControlContainer;
	    }(AbstractControlDirective));
	
	    var Map$1 = global$1.Map;
	    var Set = global$1.Set;
	    // Safari and Internet Explorer do not support the iterable parameter to the
	    // Map constructor.  We work around that by manually adding the items.
	    var createMapFromPairs = (function () {
	        try {
	            if (new Map$1([[1, 2]]).size === 1) {
	                return function createMapFromPairs(pairs) { return new Map$1(pairs); };
	            }
	        }
	        catch (e) {
	        }
	        return function createMapAndPopulateFromPairs(pairs) {
	            var map = new Map$1();
	            for (var i = 0; i < pairs.length; i++) {
	                var pair = pairs[i];
	                map.set(pair[0], pair[1]);
	            }
	            return map;
	        };
	    })();
	    var createMapFromMap = (function () {
	        try {
	            if (new Map$1(new Map$1())) {
	                return function createMapFromMap(m) { return new Map$1(m); };
	            }
	        }
	        catch (e) {
	        }
	        return function createMapAndPopulateFromMap(m) {
	            var map = new Map$1();
	            m.forEach(function (v, k) { map.set(k, v); });
	            return map;
	        };
	    })();
	    var _clearValues = (function () {
	        if ((new Map$1()).keys().next) {
	            return function _clearValues(m) {
	                var keyIterator = m.keys();
	                var k;
	                while (!((k = keyIterator.next()).done)) {
	                    m.set(k.value, null);
	                }
	            };
	        }
	        else {
	            return function _clearValuesWithForeEach(m) {
	                m.forEach(function (v, k) { m.set(k, null); });
	            };
	        }
	    })();
	    // Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	    // TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	    var _arrayFromMap = (function () {
	        try {
	            if ((new Map$1()).values().next) {
	                return function createArrayFromMap(m, getValues) {
	                    return getValues ? Array.from(m.values()) : Array.from(m.keys());
	                };
	            }
	        }
	        catch (e) {
	        }
	        return function createArrayFromMapWithForeach(m, getValues) {
	            var res = ListWrapper.createFixedSize(m.size), i = 0;
	            m.forEach(function (v, k) {
	                res[i] = getValues ? v : k;
	                i++;
	            });
	            return res;
	        };
	    })();
	    var MapWrapper = (function () {
	        function MapWrapper() {
	        }
	        MapWrapper.clone = function (m) { return createMapFromMap(m); };
	        MapWrapper.createFromStringMap = function (stringMap) {
	            var result = new Map$1();
	            for (var prop in stringMap) {
	                result.set(prop, stringMap[prop]);
	            }
	            return result;
	        };
	        MapWrapper.toStringMap = function (m) {
	            var r = {};
	            m.forEach(function (v, k) { return r[k] = v; });
	            return r;
	        };
	        MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
	        MapWrapper.clearValues = function (m) { _clearValues(m); };
	        MapWrapper.iterable = function (m) { return m; };
	        MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	        MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	        return MapWrapper;
	    }());
	    /**
	     * Wraps Javascript Objects
	     */
	    var StringMapWrapper = (function () {
	        function StringMapWrapper() {
	        }
	        StringMapWrapper.create = function () {
	            // Note: We are not using Object.create(null) here due to
	            // performance!
	            // http://jsperf.com/ng2-object-create-null
	            return {};
	        };
	        StringMapWrapper.contains = function (map, key) {
	            return map.hasOwnProperty(key);
	        };
	        StringMapWrapper.get = function (map, key) {
	            return map.hasOwnProperty(key) ? map[key] : undefined;
	        };
	        StringMapWrapper.set = function (map, key, value) { map[key] = value; };
	        StringMapWrapper.keys = function (map) { return Object.keys(map); };
	        StringMapWrapper.values = function (map) {
	            return Object.keys(map).map(function (k) { return map[k]; });
	        };
	        StringMapWrapper.isEmpty = function (map) {
	            for (var prop in map) {
	                return false;
	            }
	            return true;
	        };
	        StringMapWrapper.delete = function (map, key) { delete map[key]; };
	        StringMapWrapper.forEach = function (map, callback) {
	            for (var _i = 0, _a = Object.keys(map); _i < _a.length; _i++) {
	                var k = _a[_i];
	                callback(map[k], k);
	            }
	        };
	        StringMapWrapper.merge = function (m1, m2) {
	            var m = {};
	            for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
	                var k = _a[_i];
	                m[k] = m1[k];
	            }
	            for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
	                var k = _c[_b];
	                m[k] = m2[k];
	            }
	            return m;
	        };
	        StringMapWrapper.equals = function (m1, m2) {
	            var k1 = Object.keys(m1);
	            var k2 = Object.keys(m2);
	            if (k1.length != k2.length) {
	                return false;
	            }
	            for (var i = 0; i < k1.length; i++) {
	                var key = k1[i];
	                if (m1[key] !== m2[key]) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        return StringMapWrapper;
	    }());
	    var ListWrapper = (function () {
	        function ListWrapper() {
	        }
	        // JS has no way to express a statically fixed size list, but dart does so we
	        // keep both methods.
	        ListWrapper.createFixedSize = function (size) { return new Array(size); };
	        ListWrapper.createGrowableSize = function (size) { return new Array(size); };
	        ListWrapper.clone = function (array) { return array.slice(0); };
	        ListWrapper.forEachWithIndex = function (array, fn) {
	            for (var i = 0; i < array.length; i++) {
	                fn(array[i], i);
	            }
	        };
	        ListWrapper.first = function (array) {
	            if (!array)
	                return null;
	            return array[0];
	        };
	        ListWrapper.last = function (array) {
	            if (!array || array.length == 0)
	                return null;
	            return array[array.length - 1];
	        };
	        ListWrapper.indexOf = function (array, value, startIndex) {
	            if (startIndex === void 0) { startIndex = 0; }
	            return array.indexOf(value, startIndex);
	        };
	        ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
	        ListWrapper.reversed = function (array) {
	            var a = ListWrapper.clone(array);
	            return a.reverse();
	        };
	        ListWrapper.concat = function (a, b) { return a.concat(b); };
	        ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
	        ListWrapper.removeAt = function (list, index) {
	            var res = list[index];
	            list.splice(index, 1);
	            return res;
	        };
	        ListWrapper.removeAll = function (list, items) {
	            for (var i = 0; i < items.length; ++i) {
	                var index = list.indexOf(items[i]);
	                list.splice(index, 1);
	            }
	        };
	        ListWrapper.remove = function (list, el) {
	            var index = list.indexOf(el);
	            if (index > -1) {
	                list.splice(index, 1);
	                return true;
	            }
	            return false;
	        };
	        ListWrapper.clear = function (list) { list.length = 0; };
	        ListWrapper.isEmpty = function (list) { return list.length == 0; };
	        ListWrapper.fill = function (list, value, start, end) {
	            if (start === void 0) { start = 0; }
	            if (end === void 0) { end = null; }
	            list.fill(value, start, end === null ? list.length : end);
	        };
	        ListWrapper.equals = function (a, b) {
	            if (a.length != b.length)
	                return false;
	            for (var i = 0; i < a.length; ++i) {
	                if (a[i] !== b[i])
	                    return false;
	            }
	            return true;
	        };
	        ListWrapper.slice = function (l, from, to) {
	            if (from === void 0) { from = 0; }
	            if (to === void 0) { to = null; }
	            return l.slice(from, to === null ? undefined : to);
	        };
	        ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
	        ListWrapper.sort = function (l, compareFn) {
	            if (isPresent(compareFn)) {
	                l.sort(compareFn);
	            }
	            else {
	                l.sort();
	            }
	        };
	        ListWrapper.toString = function (l) { return l.toString(); };
	        ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
	        ListWrapper.maximum = function (list, predicate) {
	            if (list.length == 0) {
	                return null;
	            }
	            var solution = null;
	            var maxValue = -Infinity;
	            for (var index = 0; index < list.length; index++) {
	                var candidate = list[index];
	                if (isBlank(candidate)) {
	                    continue;
	                }
	                var candidateValue = predicate(candidate);
	                if (candidateValue > maxValue) {
	                    solution = candidate;
	                    maxValue = candidateValue;
	                }
	            }
	            return solution;
	        };
	        ListWrapper.flatten = function (list) {
	            var target = [];
	            _flattenArray(list, target);
	            return target;
	        };
	        ListWrapper.addAll = function (list, source) {
	            for (var i = 0; i < source.length; i++) {
	                list.push(source[i]);
	            }
	        };
	        return ListWrapper;
	    }());
	    function _flattenArray(source, target) {
	        if (isPresent(source)) {
	            for (var i = 0; i < source.length; i++) {
	                var item = source[i];
	                if (isArray(item)) {
	                    _flattenArray(item, target);
	                }
	                else {
	                    target.push(item);
	                }
	            }
	        }
	        return target;
	    }
	    // Safari and Internet Explorer do not support the iterable parameter to the
	    // Set constructor.  We work around that by manually adding the items.
	    var createSetFromList = (function () {
	        var test = new Set([1, 2, 3]);
	        if (test.size === 3) {
	            return function createSetFromList(lst) { return new Set(lst); };
	        }
	        else {
	            return function createSetAndPopulateFromList(lst) {
	                var res = new Set(lst);
	                if (res.size !== lst.length) {
	                    for (var i = 0; i < lst.length; i++) {
	                        res.add(lst[i]);
	                    }
	                }
	                return res;
	            };
	        }
	    })();
	
	    /**
	     * Providers for validators to be used for {@link FormControl}s in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * ### Example
	     *
	     * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
	     * @stable
	     */
	    var NG_VALIDATORS = new _angular_core.OpaqueToken('NgValidators');
	    /**
	     * Providers for asynchronous validators to be used for {@link FormControl}s
	     * in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * See {@link NG_VALIDATORS} for more details.
	     *
	     * @stable
	     */
	    var NG_ASYNC_VALIDATORS = new _angular_core.OpaqueToken('NgAsyncValidators');
	    /**
	     * Provides a set of validators used by form controls.
	     *
	     * A validator is a function that processes a {@link FormControl} or collection of
	     * controls and returns a map of errors. A null map means that validation has passed.
	     *
	     * ### Example
	     *
	     * ```typescript
	     * var loginControl = new FormControl("", Validators.required)
	     * ```
	     *
	     * @stable
	     */
	    var Validators = (function () {
	        function Validators() {
	        }
	        /**
	         * Validator that requires controls to have a non-empty value.
	         */
	        Validators.required = function (control) {
	            return isBlank(control.value) || (isString(control.value) && control.value == '') ?
	                { 'required': true } :
	                null;
	        };
	        /**
	         * Validator that requires controls to have a value of a minimum length.
	         */
	        Validators.minLength = function (minLength) {
	            return function (control) {
	                if (isPresent(Validators.required(control)))
	                    return null;
	                var v = control.value;
	                return v.length < minLength ?
	                    { 'minlength': { 'requiredLength': minLength, 'actualLength': v.length } } :
	                    null;
	            };
	        };
	        /**
	         * Validator that requires controls to have a value of a maximum length.
	         */
	        Validators.maxLength = function (maxLength) {
	            return function (control) {
	                if (isPresent(Validators.required(control)))
	                    return null;
	                var v = control.value;
	                return v.length > maxLength ?
	                    { 'maxlength': { 'requiredLength': maxLength, 'actualLength': v.length } } :
	                    null;
	            };
	        };
	        /**
	         * Validator that requires a control to match a regex to its value.
	         */
	        Validators.pattern = function (pattern) {
	            return function (control) {
	                if (isPresent(Validators.required(control)))
	                    return null;
	                var regex = new RegExp("^" + pattern + "$");
	                var v = control.value;
	                return regex.test(v) ? null :
	                    { 'pattern': { 'requiredPattern': "^" + pattern + "$", 'actualValue': v } };
	            };
	        };
	        /**
	         * No-op validator.
	         */
	        Validators.nullValidator = function (c) { return null; };
	        /**
	         * Compose multiple validators into a single function that returns the union
	         * of the individual error maps.
	         */
	        Validators.compose = function (validators) {
	            if (isBlank(validators))
	                return null;
	            var presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                return _mergeErrors(_executeValidators(control, presentValidators));
	            };
	        };
	        Validators.composeAsync = function (validators) {
	            if (isBlank(validators))
	                return null;
	            var presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                var promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
	                return Promise.all(promises).then(_mergeErrors);
	            };
	        };
	        return Validators;
	    }());
	    function _convertToPromise(obj) {
	        return isPromise(obj) ? obj : rxjs_operator_toPromise.toPromise.call(obj);
	    }
	    function _executeValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    function _executeAsyncValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    function _mergeErrors(arrayOfErrors) {
	        var res = arrayOfErrors.reduce(function (res, errors) {
	            return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
	        }, {});
	        return StringMapWrapper.isEmpty(res) ? null : res;
	    }
	
	    /**
	     * Used to provide a {@link ControlValueAccessor} for form controls.
	     *
	     * See {@link DefaultValueAccessor} for how to implement one.
	     * @stable
	     */
	    var NG_VALUE_ACCESSOR = new _angular_core.OpaqueToken('NgValueAccessor');
	
	    var CHECKBOX_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return CheckboxControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The accessor for writing a value and listening to changes on a checkbox input element.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="checkbox" name="rememberLogin" ngModel>
	     *  ```
	     *
	     *  @stable
	     */
	    var CheckboxControlValueAccessor = (function () {
	        function CheckboxControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        CheckboxControlValueAccessor.prototype.writeValue = function (value) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
	        };
	        CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        CheckboxControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
	                        host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                        providers: [CHECKBOX_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        CheckboxControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return CheckboxControlValueAccessor;
	    }());
	
	    var DEFAULT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return DefaultValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The default accessor for writing a value and listening to changes that is used by the
	     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="text" name="searchQuery" ngModel>
	     *  ```
	     *
	     *  @stable
	     */
	    var DefaultValueAccessor = (function () {
	        function DefaultValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        DefaultValueAccessor.prototype.writeValue = function (value) {
	            var normalizedValue = isBlank(value) ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        DefaultValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                        // TODO: vsavkin replace the above selector with the one below it once
	                        // https://github.com/angular/angular/issues/3011 is implemented
	                        // selector: '[ngControl],[ngModel],[ngFormControl]',
	                        host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [DEFAULT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        DefaultValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return DefaultValueAccessor;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    function normalizeValidator(validator) {
	        if (validator.validate !== undefined) {
	            return function (c) { return validator.validate(c); };
	        }
	        else {
	            return validator;
	        }
	    }
	    function normalizeAsyncValidator(validator) {
	        if (validator.validate !== undefined) {
	            return function (c) { return validator.validate(c); };
	        }
	        else {
	            return validator;
	        }
	    }
	
	    var NUMBER_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return NumberValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The accessor for writing a number value and listening to changes that is used by the
	     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="number" [(ngModel)]="age">
	     *  ```
	     */
	    var NumberValueAccessor = (function () {
	        function NumberValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        NumberValueAccessor.prototype.writeValue = function (value) {
	            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
	            var normalizedValue = isBlank(value) ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        NumberValueAccessor.prototype.registerOnChange = function (fn) {
	            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	        };
	        NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        NumberValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
	                        host: {
	                            '(change)': 'onChange($event.target.value)',
	                            '(input)': 'onChange($event.target.value)',
	                            '(blur)': 'onTouched()'
	                        },
	                        providers: [NUMBER_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        NumberValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return NumberValueAccessor;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$2 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    function unimplemented() {
	        throw new Error('unimplemented');
	    }
	    /**
	     * A base class that all control directive extend.
	     * It binds a {@link FormControl} object to a DOM element.
	     *
	     * Used internally by Angular forms.
	     *
	     * @stable
	     */
	    var NgControl = (function (_super) {
	        __extends$2(NgControl, _super);
	        function NgControl() {
	            _super.apply(this, arguments);
	            /** @internal */
	            this._parent = null;
	            this.name = null;
	            this.valueAccessor = null;
	            /** @internal */
	            this._rawValidators = [];
	            /** @internal */
	            this._rawAsyncValidators = [];
	        }
	        Object.defineProperty(NgControl.prototype, "validator", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgControl.prototype, "asyncValidator", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        return NgControl;
	    }(AbstractControlDirective));
	
	    var RADIO_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return RadioControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * Internal class used by Angular to uncheck radio buttons with the matching name.
	     */
	    var RadioControlRegistry = (function () {
	        function RadioControlRegistry() {
	            this._accessors = [];
	        }
	        RadioControlRegistry.prototype.add = function (control, accessor) {
	            this._accessors.push([control, accessor]);
	        };
	        RadioControlRegistry.prototype.remove = function (accessor) {
	            var indexToRemove = -1;
	            for (var i = 0; i < this._accessors.length; ++i) {
	                if (this._accessors[i][1] === accessor) {
	                    indexToRemove = i;
	                }
	            }
	            ListWrapper.removeAt(this._accessors, indexToRemove);
	        };
	        RadioControlRegistry.prototype.select = function (accessor) {
	            var _this = this;
	            this._accessors.forEach(function (c) {
	                if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
	                    c[1].fireUncheck(accessor.value);
	                }
	            });
	        };
	        RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
	            if (!controlPair[0].control)
	                return false;
	            return controlPair[0]._parent === accessor._control._parent &&
	                controlPair[1].name === accessor.name;
	        };
	        RadioControlRegistry.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        RadioControlRegistry.ctorParameters = [];
	        return RadioControlRegistry;
	    }());
	    /**
	     * The accessor for writing a radio control value and listening to changes that is used by the
	     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  @Component({
	     *    template: `
	     *      <input type="radio" name="food" [(ngModel)]="food" value="chicken">
	     *      <input type="radio" name="food" [(ngModel)]="food" value="fish">
	     *    `
	     *  })
	     *  class FoodCmp {
	     *    food = 'chicken';
	     *  }
	     *  ```
	     */
	    var RadioControlValueAccessor = (function () {
	        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this._registry = _registry;
	            this._injector = _injector;
	            this.onChange = function () { };
	            this.onTouched = function () { };
	        }
	        RadioControlValueAccessor.prototype.ngOnInit = function () {
	            this._control = this._injector.get(NgControl);
	            this._checkName();
	            this._registry.add(this._control, this);
	        };
	        RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	        RadioControlValueAccessor.prototype.writeValue = function (value) {
	            this._state = value === this.value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
	        };
	        RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this._fn = fn;
	            this.onChange = function () {
	                fn(_this.value);
	                _this._registry.select(_this);
	            };
	        };
	        RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
	        RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        RadioControlValueAccessor.prototype._checkName = function () {
	            if (this.name && this.formControlName && this.name !== this.formControlName) {
	                this._throwNameError();
	            }
	            if (!this.name && this.formControlName)
	                this.name = this.formControlName;
	        };
	        RadioControlValueAccessor.prototype._throwNameError = function () {
	            throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
	        };
	        RadioControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
	                        host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                        providers: [RADIO_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        RadioControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	            { type: RadioControlRegistry, },
	            { type: _angular_core.Injector, },
	        ];
	        RadioControlValueAccessor.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'formControlName': [{ type: _angular_core.Input },],
	            'value': [{ type: _angular_core.Input },],
	        };
	        return RadioControlValueAccessor;
	    }());
	
	    var SELECT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectControlValueAccessor; }),
	        multi: true
	    };
	    function _buildValueString(id, value) {
	        if (isBlank(id))
	            return "" + value;
	        if (!isPrimitive(value))
	            value = 'Object';
	        return StringWrapper.slice(id + ": " + value, 0, 50);
	    }
	    function _extractId(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     * The accessor for writing a value and listening to changes on a select element.
	     *
	     * Note: We have to listen to the 'change' event because 'input' events aren't fired
	     * for selects in Firefox and IE:
	     * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
	     * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
	     *
	     * @stable
	     */
	    var SelectControlValueAccessor = (function () {
	        function SelectControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        SelectControlValueAccessor.prototype.writeValue = function (value) {
	            this.value = value;
	            var valueString = _buildValueString(this._getOptionId(value), value);
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
	        };
	        SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (valueString) {
	                _this.value = valueString;
	                fn(_this._getOptionValue(valueString));
	            };
	        };
	        SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /** @internal */
	        SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	        /** @internal */
	        SelectControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id), value))
	                    return id;
	            }
	            return null;
	        };
	        /** @internal */
	        SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var value = this._optionMap.get(_extractId(valueString));
	            return isPresent(value) ? value : valueString;
	        };
	        SelectControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
	                        host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return SelectControlValueAccessor;
	    }());
	    /**
	     * Marks `<option>` as dynamic, so Angular can be notified when options change.
	     *
	     * ### Example
	     *
	     * ```
	     * <select name="city" ngModel>
	     *   <option *ngFor="let c of cities" [value]="c"></option>
	     * </select>
	     * ```
	     *
	     * @stable
	     */
	    var NgSelectOption = (function () {
	        function NgSelectOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (isPresent(this._select))
	                this.id = this._select._registerOption();
	        }
	        Object.defineProperty(NgSelectOption.prototype, "ngValue", {
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._select._optionMap.set(this.id, value);
	                this._setElementValue(_buildValueString(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectOption.prototype, "value", {
	            set: function (value) {
	                this._setElementValue(value);
	                if (isPresent(this._select))
	                    this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        NgSelectOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        NgSelectOption.prototype.ngOnDestroy = function () {
	            if (isPresent(this._select)) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectOption.ctorParameters = [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ];
	        NgSelectOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectOption;
	    }());
	
	    var SELECT_MULTIPLE_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
	        multi: true
	    };
	    function _buildValueString$1(id, value) {
	        if (isBlank(id))
	            return "" + value;
	        if (isString(value))
	            value = "'" + value + "'";
	        if (!isPrimitive(value))
	            value = 'Object';
	        return StringWrapper.slice(id + ": " + value, 0, 50);
	    }
	    function _extractId$1(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     * The accessor for writing a value and listening to changes on a select element.
	     *
	     * @stable
	     */
	    var SelectMultipleControlValueAccessor = (function () {
	        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
	            var _this = this;
	            this.value = value;
	            if (value == null)
	                return;
	            var values = value;
	            // convert values to ids
	            var ids = values.map(function (v) { return _this._getOptionId(v); });
	            this._optionMap.forEach(function (opt, o) { opt._setSelected(ids.indexOf(o.toString()) > -1); });
	        };
	        SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (_) {
	                var selected = [];
	                if (_.hasOwnProperty('selectedOptions')) {
	                    var options = _.selectedOptions;
	                    for (var i = 0; i < options.length; i++) {
	                        var opt = options.item(i);
	                        var val = _this._getOptionValue(opt.value);
	                        selected.push(val);
	                    }
	                }
	                else {
	                    var options = _.options;
	                    for (var i = 0; i < options.length; i++) {
	                        var opt = options.item(i);
	                        if (opt.selected) {
	                            var val = _this._getOptionValue(opt.value);
	                            selected.push(val);
	                        }
	                    }
	                }
	                fn(selected);
	            };
	        };
	        SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
	            var id = (this._idCounter++).toString();
	            this._optionMap.set(id, value);
	            return id;
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id)._value, value))
	                    return id;
	            }
	            return null;
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var opt = this._optionMap.get(_extractId$1(valueString));
	            return isPresent(opt) ? opt._value : valueString;
	        };
	        SelectMultipleControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
	                        host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectMultipleControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return SelectMultipleControlValueAccessor;
	    }());
	    /**
	     * Marks `<option>` as dynamic, so Angular can be notified when options change.
	     *
	     * ### Example
	     *
	     * ```
	     * <select multiple name="city" ngModel>
	     *   <option *ngFor="let c of cities" [value]="c"></option>
	     * </select>
	     * ```
	     */
	    var NgSelectMultipleOption = (function () {
	        function NgSelectMultipleOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (isPresent(this._select)) {
	                this.id = this._select._registerOption(this);
	            }
	        }
	        Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._value = value;
	                this._setElementValue(_buildValueString$1(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
	            set: function (value) {
	                if (isPresent(this._select)) {
	                    this._value = value;
	                    this._setElementValue(_buildValueString$1(this.id, value));
	                    this._select.writeValue(this._select.value);
	                }
	                else {
	                    this._setElementValue(value);
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        NgSelectMultipleOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        /** @internal */
	        NgSelectMultipleOption.prototype._setSelected = function (selected) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
	        };
	        NgSelectMultipleOption.prototype.ngOnDestroy = function () {
	            if (isPresent(this._select)) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectMultipleOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectMultipleOption.ctorParameters = [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ];
	        NgSelectMultipleOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectMultipleOption;
	    }());
	
	    function controlPath(name, parent) {
	        var p = ListWrapper.clone(parent.path);
	        p.push(name);
	        return p;
	    }
	    function setUpControl(control, dir) {
	        if (isBlank(control))
	            _throwError(dir, 'Cannot find control with');
	        if (isBlank(dir.valueAccessor))
	            _throwError(dir, 'No value accessor for form control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	        dir.valueAccessor.writeValue(control.value);
	        // view -> model
	        dir.valueAccessor.registerOnChange(function (newValue) {
	            dir.viewToModelUpdate(newValue);
	            control.markAsDirty();
	            control.setValue(newValue, { emitModelToViewChange: false });
	        });
	        // touched
	        dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
	        control.registerOnChange(function (newValue, emitModelEvent) {
	            // control -> view
	            dir.valueAccessor.writeValue(newValue);
	            // control -> ngModel
	            if (emitModelEvent)
	                dir.viewToModelUpdate(newValue);
	        });
	        if (dir.valueAccessor.setDisabledState) {
	            control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
	        }
	        // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
	        dir._rawValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange)
	                validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	        dir._rawAsyncValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange)
	                validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	    }
	    function cleanUpControl(control, dir) {
	        dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
	        dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
	        dir._rawValidators.forEach(function (validator) { return validator.registerOnValidatorChange(null); });
	        dir._rawAsyncValidators.forEach(function (validator) { return validator.registerOnValidatorChange(null); });
	        if (control)
	            control._clearChangeFns();
	    }
	    function setUpFormContainer(control, dir) {
	        if (isBlank(control))
	            _throwError(dir, 'Cannot find control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	    }
	    function _noControlError(dir) {
	        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
	    }
	    function _throwError(dir, message) {
	        var messageEnd;
	        if (dir.path.length > 1) {
	            messageEnd = "path: '" + dir.path.join(' -> ') + "'";
	        }
	        else if (dir.path[0]) {
	            messageEnd = "name: '" + dir.path + "'";
	        }
	        else {
	            messageEnd = 'unspecified name attribute';
	        }
	        throw new Error(message + " " + messageEnd);
	    }
	    function composeValidators(validators) {
	        return isPresent(validators) ? Validators.compose(validators.map(normalizeValidator)) : null;
	    }
	    function composeAsyncValidators(validators) {
	        return isPresent(validators) ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
	            null;
	    }
	    function isPropertyUpdated(changes, viewModel) {
	        if (!StringMapWrapper.contains(changes, 'model'))
	            return false;
	        var change = changes['model'];
	        if (change.isFirstChange())
	            return true;
	        return !looseIdentical(viewModel, change.currentValue);
	    }
	    function isBuiltInAccessor(valueAccessor) {
	        return (hasConstructor(valueAccessor, CheckboxControlValueAccessor) ||
	            hasConstructor(valueAccessor, NumberValueAccessor) ||
	            hasConstructor(valueAccessor, SelectControlValueAccessor) ||
	            hasConstructor(valueAccessor, SelectMultipleControlValueAccessor) ||
	            hasConstructor(valueAccessor, RadioControlValueAccessor));
	    }
	    // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
	    function selectValueAccessor(dir, valueAccessors) {
	        if (isBlank(valueAccessors))
	            return null;
	        var defaultAccessor;
	        var builtinAccessor;
	        var customAccessor;
	        valueAccessors.forEach(function (v) {
	            if (hasConstructor(v, DefaultValueAccessor)) {
	                defaultAccessor = v;
	            }
	            else if (isBuiltInAccessor(v)) {
	                if (isPresent(builtinAccessor))
	                    _throwError(dir, 'More than one built-in value accessor matches form control with');
	                builtinAccessor = v;
	            }
	            else {
	                if (isPresent(customAccessor))
	                    _throwError(dir, 'More than one custom value accessor matches form control with');
	                customAccessor = v;
	            }
	        });
	        if (isPresent(customAccessor))
	            return customAccessor;
	        if (isPresent(builtinAccessor))
	            return builtinAccessor;
	        if (isPresent(defaultAccessor))
	            return defaultAccessor;
	        _throwError(dir, 'No valid value accessor for form control with');
	        return null;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * This is a base class for code shared between {@link NgModelGroup} and {@link FormGroupName}.
	     *
	     * @stable
	     */
	    var AbstractFormGroupDirective = (function (_super) {
	        __extends(AbstractFormGroupDirective, _super);
	        function AbstractFormGroupDirective() {
	            _super.apply(this, arguments);
	        }
	        AbstractFormGroupDirective.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormGroup(this);
	        };
	        AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormGroup(this);
	            }
	        };
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
	            /**
	             * Get the {@link FormGroup} backing this binding.
	             */
	            get: function () { return this.formDirective.getFormGroup(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
	            /**
	             * Get the path to this control group.
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
	            /**
	             * Get the {@link Form} to which this group belongs.
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        AbstractFormGroupDirective.prototype._checkParentType = function () { };
	        return AbstractFormGroupDirective;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$3 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var AbstractControlStatus = (function () {
	        function AbstractControlStatus(cd) {
	            this._cd = cd;
	        }
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.untouched : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.touched : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.pristine : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.dirty : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.valid : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.invalid : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return AbstractControlStatus;
	    }());
	    var ngControlStatusHost = {
	        '[class.ng-untouched]': 'ngClassUntouched',
	        '[class.ng-touched]': 'ngClassTouched',
	        '[class.ng-pristine]': 'ngClassPristine',
	        '[class.ng-dirty]': 'ngClassDirty',
	        '[class.ng-valid]': 'ngClassValid',
	        '[class.ng-invalid]': 'ngClassInvalid'
	    };
	    /**
	     * Directive automatically applied to Angular form controls that sets CSS classes
	     * based on control status (valid/invalid/dirty/etc).
	     *
	     * @stable
	     */
	    var NgControlStatus = (function (_super) {
	        __extends$3(NgControlStatus, _super);
	        function NgControlStatus(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatus.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
	        ];
	        /** @nocollapse */
	        NgControlStatus.ctorParameters = [
	            { type: NgControl, decorators: [{ type: _angular_core.Self },] },
	        ];
	        return NgControlStatus;
	    }(AbstractControlStatus));
	    /**
	     * Directive automatically applied to Angular form groups that sets CSS classes
	     * based on control status (valid/invalid/dirty/etc).
	     *
	     * @stable
	     */
	    var NgControlStatusGroup = (function (_super) {
	        __extends$3(NgControlStatusGroup, _super);
	        function NgControlStatusGroup(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatusGroup.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
	                        host: ngControlStatusHost
	                    },] },
	        ];
	        /** @nocollapse */
	        NgControlStatusGroup.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Self },] },
	        ];
	        return NgControlStatusGroup;
	    }(AbstractControlStatus));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$5 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Use by directives and components to emit custom Events.
	     *
	     * ### Examples
	     *
	     * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	     * title gets clicked:
	     *
	     * ```
	     * @Component({
	     *   selector: 'zippy',
	     *   template: `
	     *   <div class="zippy">
	     *     <div (click)="toggle()">Toggle</div>
	     *     <div [hidden]="!visible">
	     *       <ng-content></ng-content>
	     *     </div>
	     *  </div>`})
	     * export class Zippy {
	     *   visible: boolean = true;
	     *   @Output() open: EventEmitter<any> = new EventEmitter();
	     *   @Output() close: EventEmitter<any> = new EventEmitter();
	     *
	     *   toggle() {
	     *     this.visible = !this.visible;
	     *     if (this.visible) {
	     *       this.open.emit(null);
	     *     } else {
	     *       this.close.emit(null);
	     *     }
	     *   }
	     * }
	     * ```
	     *
	     * The events payload can be accessed by the parameter `$event` on the components output event
	     * handler:
	     *
	     * ```
	     * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
	     * ```
	     *
	     * Uses Rx.Observable but provides an adapter to make it work as specified here:
	     * https://github.com/jhusain/observable-spec
	     *
	     * Once a reference implementation of the spec is available, switch to it.
	     * @stable
	     */
	    var EventEmitter = (function (_super) {
	        __extends$5(EventEmitter, _super);
	        /**
	         * Creates an instance of [EventEmitter], which depending on [isAsync],
	         * delivers events synchronously or asynchronously.
	         */
	        function EventEmitter(isAsync) {
	            if (isAsync === void 0) { isAsync = false; }
	            _super.call(this);
	            this.__isAsync = isAsync;
	        }
	        EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	        EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	            var schedulerFn;
	            var errorFn = function (err) { return null; };
	            var completeFn = function () { return null; };
	            if (generatorOrNext && typeof generatorOrNext === 'object') {
	                schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
	                    setTimeout(function () { return generatorOrNext.next(value); });
	                } : function (value /** TODO #9100 */) { generatorOrNext.next(value); };
	                if (generatorOrNext.error) {
	                    errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                        function (err) { generatorOrNext.error(err); };
	                }
	                if (generatorOrNext.complete) {
	                    completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                        function () { generatorOrNext.complete(); };
	                }
	            }
	            else {
	                schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
	                    setTimeout(function () { return generatorOrNext(value); });
	                } : function (value /** TODO #9100 */) { generatorOrNext(value); };
	                if (error) {
	                    errorFn =
	                        this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	                }
	                if (complete) {
	                    completeFn =
	                        this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	                }
	            }
	            return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	        };
	        return EventEmitter;
	    }(rxjs_Subject.Subject));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$6 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
	     */
	    var VALID = 'VALID';
	    /**
	     * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
	     */
	    var INVALID = 'INVALID';
	    /**
	     * Indicates that a FormControl is pending, i.e. that async validation is occurring and
	     * errors are not yet available for the input value.
	     */
	    var PENDING = 'PENDING';
	    /**
	     * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
	     * calculations of validity or value.
	     */
	    var DISABLED = 'DISABLED';
	    function _find(control, path, delimiter) {
	        if (isBlank(path))
	            return null;
	        if (!(path instanceof Array)) {
	            path = path.split(delimiter);
	        }
	        if (path instanceof Array && ListWrapper.isEmpty(path))
	            return null;
	        return path.reduce(function (v, name) {
	            if (v instanceof FormGroup) {
	                return isPresent(v.controls[name]) ? v.controls[name] : null;
	            }
	            else if (v instanceof FormArray) {
	                var index = name;
	                return isPresent(v.at(index)) ? v.at(index) : null;
	            }
	            else {
	                return null;
	            }
	        }, control);
	    }
	    function toObservable(r) {
	        return isPromise(r) ? rxjs_observable_fromPromise.fromPromise(r) : r;
	    }
	    function coerceToValidator(validator) {
	        return Array.isArray(validator) ? composeValidators(validator) : validator;
	    }
	    function coerceToAsyncValidator(asyncValidator) {
	        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
	    }
	    /**
	     * @whatItDoes This is the base class for {@link FormControl}, {@link FormGroup}, and
	     * {@link FormArray}.
	     *
	     * It provides some of the shared behavior that all controls and groups of controls have, like
	     * running validators, calculating status, and resetting state. It also defines the properties
	     * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
	     * instantiated directly.
	     *
	     * @stable
	     */
	    var AbstractControl = (function () {
	        function AbstractControl(validator, asyncValidator) {
	            this.validator = validator;
	            this.asyncValidator = asyncValidator;
	            /** @internal */
	            this._onCollectionChange = function () { };
	            this._pristine = true;
	            this._touched = false;
	        }
	        Object.defineProperty(AbstractControl.prototype, "value", {
	            /**
	             * The value of the control.
	             */
	            get: function () { return this._value; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "status", {
	            /**
	             * The validation status of the control. There are four possible
	             * validation statuses:
	             *
	             * * **VALID**:  control has passed all validation checks
	             * * **INVALID**: control has failed at least one validation check
	             * * **PENDING**: control is in the midst of conducting a validation check
	             * * **DISABLED**: control is exempt from validation checks
	             *
	             * These statuses are mutually exclusive, so a control cannot be
	             * both valid AND invalid or invalid AND disabled.
	             */
	            get: function () { return this._status; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valid", {
	            /**
	             * A control is `valid` when its `status === VALID`.
	             *
	             * In order to have this status, the control must have passed all its
	             * validation checks.
	             */
	            get: function () { return this._status === VALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "invalid", {
	            /**
	             * A control is `invalid` when its `status === INVALID`.
	             *
	             * In order to have this status, the control must have failed
	             * at least one of its validation checks.
	             */
	            get: function () { return this._status === INVALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pending", {
	            /**
	             * A control is `pending` when its `status === PENDING`.
	             *
	             * In order to have this status, the control must be in the
	             * middle of conducting a validation check.
	             */
	            get: function () { return this._status == PENDING; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "disabled", {
	            /**
	             * A control is `disabled` when its `status === DISABLED`.
	             *
	             * Disabled controls are exempt from validation checks and
	             * are not included in the aggregate value of their ancestor
	             * controls.
	             */
	            get: function () { return this._status === DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "enabled", {
	            /**
	             * A control is `enabled` as long as its `status !== DISABLED`.
	             *
	             * In other words, it has a status of `VALID`, `INVALID`, or
	             * `PENDING`.
	             */
	            get: function () { return this._status !== DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "errors", {
	            /**
	             * Returns any errors generated by failing validation. If there
	             * are no errors, it will return null.
	             */
	            get: function () { return this._errors; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pristine", {
	            /**
	             * A control is `pristine` if the user has not yet changed
	             * the value in the UI.
	             *
	             * Note that programmatic changes to a control's value will
	             * *not* mark it dirty.
	             */
	            get: function () { return this._pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "dirty", {
	            /**
	             * A control is `dirty` if the user has changed the value
	             * in the UI.
	             *
	             * Note that programmatic changes to a control's value will
	             * *not* mark it dirty.
	             */
	            get: function () { return !this.pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "touched", {
	            /**
	            * A control is marked `touched` once the user has triggered
	            * a `blur` event on it.
	            */
	            get: function () { return this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "untouched", {
	            /**
	             * A control is `untouched` if the user has not yet triggered
	             * a `blur` event on it.
	             */
	            get: function () { return !this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	            /**
	             * Emits an event every time the value of the control changes, in
	             * the UI or programmatically.
	             */
	            get: function () { return this._valueChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	            /**
	             * Emits an event every time the validation status of the control
	             * is re-calculated.
	             */
	            get: function () { return this._statusChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Sets the synchronous validators that are active on this control.  Calling
	         * this will overwrite any existing sync validators.
	         */
	        AbstractControl.prototype.setValidators = function (newValidator) {
	            this.validator = coerceToValidator(newValidator);
	        };
	        /**
	         * Sets the async validators that are active on this control. Calling this
	         * will overwrite any existing async validators.
	         */
	        AbstractControl.prototype.setAsyncValidators = function (newValidator) {
	            this.asyncValidator = coerceToAsyncValidator(newValidator);
	        };
	        /**
	         * Empties out the sync validator list.
	         */
	        AbstractControl.prototype.clearValidators = function () { this.validator = null; };
	        /**
	         * Empties out the async validator list.
	         */
	        AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
	        /**
	         * Marks the control as `touched`.
	         *
	         * This will also mark all direct ancestors as `touched` to maintain
	         * the model.
	         */
	        AbstractControl.prototype.markAsTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            onlySelf = normalizeBool(onlySelf);
	            this._touched = true;
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.markAsTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `untouched`.
	         *
	         * If the control has any children, it will also mark all children as `untouched`
	         * to maintain the model, and re-calculate the `touched` status of all parent
	         * controls.
	         */
	        AbstractControl.prototype.markAsUntouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = false;
	            this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `dirty`.
	         *
	         * This will also mark all direct ancestors as `dirty` to maintain
	         * the model.
	         */
	        AbstractControl.prototype.markAsDirty = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            onlySelf = normalizeBool(onlySelf);
	            this._pristine = false;
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.markAsDirty({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `pristine`.
	         *
	         * If the control has any children, it will also mark all children as `pristine`
	         * to maintain the model, and re-calculate the `pristine` status of all parent
	         * controls.
	         */
	        AbstractControl.prototype.markAsPristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = true;
	            this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `pending`.
	         */
	        AbstractControl.prototype.markAsPending = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            onlySelf = normalizeBool(onlySelf);
	            this._status = PENDING;
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.markAsPending({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Disables the control. This means the control will be exempt from validation checks and
	         * excluded from the aggregate value of any parent. Its status is `DISABLED`.
	         *
	         * If the control has children, all children will be disabled to maintain the model.
	         */
	        AbstractControl.prototype.disable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            emitEvent = isPresent(emitEvent) ? emitEvent : true;
	            this._status = DISABLED;
	            this._errors = null;
	            this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
	            this._updateValue();
	            if (emitEvent) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange(true);
	        };
	        /**
	         * Enables the control. This means the control will be included in validation checks and
	         * the aggregate value of its parent. Its status is re-calculated based on its value and
	         * its validators.
	         *
	         * If the control has children, all children will be enabled.
	         */
	        AbstractControl.prototype.enable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = VALID;
	            this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange(false);
	        };
	        AbstractControl.prototype._updateAncestors = function (onlySelf) {
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.updateValueAndValidity();
	                this._parent._updatePristine();
	                this._parent._updateTouched();
	            }
	        };
	        AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	        /**
	         * Re-calculates the value and validation status of the control.
	         *
	         * By default, it will also update the value and validity of its ancestors.
	         */
	        AbstractControl.prototype.updateValueAndValidity = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            onlySelf = normalizeBool(onlySelf);
	            emitEvent = isPresent(emitEvent) ? emitEvent : true;
	            this._setInitialStatus();
	            this._updateValue();
	            if (this.enabled) {
	                this._errors = this._runValidator();
	                this._status = this._calculateStatus();
	                if (this._status === VALID || this._status === PENDING) {
	                    this._runAsyncValidator(emitEvent);
	                }
	            }
	            if (emitEvent) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._updateTreeValidity = function (_a) {
	            var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
	            this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	        };
	        AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
	        AbstractControl.prototype._runValidator = function () {
	            return isPresent(this.validator) ? this.validator(this) : null;
	        };
	        AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	            var _this = this;
	            if (isPresent(this.asyncValidator)) {
	                this._status = PENDING;
	                this._cancelExistingSubscription();
	                var obs = toObservable(this.asyncValidator(this));
	                this._asyncValidationSubscription = obs.subscribe({ next: function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); } });
	            }
	        };
	        AbstractControl.prototype._cancelExistingSubscription = function () {
	            if (isPresent(this._asyncValidationSubscription)) {
	                this._asyncValidationSubscription.unsubscribe();
	            }
	        };
	        /**
	         * Sets errors on a form control.
	         *
	         * This is used when validations are run manually by the user, rather than automatically.
	         *
	         * Calling `setErrors` will also update the validity of the parent control.
	         *
	         * ### Example
	         *
	         * ```
	         * const login = new FormControl("someLogin");
	         * login.setErrors({
	         *   "notUnique": true
	         * });
	         *
	         * expect(login.valid).toEqual(false);
	         * expect(login.errors).toEqual({"notUnique": true});
	         *
	         * login.setValue("someOtherLogin");
	         *
	         * expect(login.valid).toEqual(true);
	         * ```
	         */
	        AbstractControl.prototype.setErrors = function (errors, _a) {
	            var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
	            emitEvent = isPresent(emitEvent) ? emitEvent : true;
	            this._errors = errors;
	            this._updateControlsErrors(emitEvent);
	        };
	        /**
	         * Retrieves a child control given the control's name or path.
	         *
	         * Paths can be passed in as an array or a string delimited by a dot.
	         *
	         * To get a control nested within a `person` sub-group:
	         *
	         * * `this.form.get('person.name');`
	         *
	         * -OR-
	         *
	         * * `this.form.get(['person', 'name']);`
	         */
	        AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
	        /**
	         * Returns true if the control with the given path has the error specified. Otherwise
	         * returns null or undefined.
	         *
	         * If no path is given, it checks for the error on the present control.
	         */
	        AbstractControl.prototype.getError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            var control = isPresent(path) && !ListWrapper.isEmpty(path) ? this.get(path) : this;
	            if (isPresent(control) && isPresent(control._errors)) {
	                return StringMapWrapper.get(control._errors, errorCode);
	            }
	            else {
	                return null;
	            }
	        };
	        /**
	         * Returns true if the control with the given path has the error specified. Otherwise
	         * returns false.
	         *
	         * If no path is given, it checks for the error on the present control.
	         */
	        AbstractControl.prototype.hasError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return isPresent(this.getError(errorCode, path));
	        };
	        Object.defineProperty(AbstractControl.prototype, "root", {
	            /**
	             * Retrieves the top-level ancestor of this control.
	             */
	            get: function () {
	                var x = this;
	                while (isPresent(x._parent)) {
	                    x = x._parent;
	                }
	                return x;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
	            this._status = this._calculateStatus();
	            if (emitEvent) {
	                this._statusChanges.emit(this._status);
	            }
	            if (isPresent(this._parent)) {
	                this._parent._updateControlsErrors(emitEvent);
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._initObservables = function () {
	            this._valueChanges = new EventEmitter();
	            this._statusChanges = new EventEmitter();
	        };
	        AbstractControl.prototype._calculateStatus = function () {
	            if (this._allControlsDisabled())
	                return DISABLED;
	            if (isPresent(this._errors))
	                return INVALID;
	            if (this._anyControlsHaveStatus(PENDING))
	                return PENDING;
	            if (this._anyControlsHaveStatus(INVALID))
	                return INVALID;
	            return VALID;
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsHaveStatus = function (status) {
	            return this._anyControls(function (control) { return control.status == status; });
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsDirty = function () {
	            return this._anyControls(function (control) { return control.dirty; });
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsTouched = function () {
	            return this._anyControls(function (control) { return control.touched; });
	        };
	        /** @internal */
	        AbstractControl.prototype._updatePristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = !this._anyControlsDirty();
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._updateTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = this._anyControlsTouched();
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._onDisabledChange = function (isDisabled) { };
	        /** @internal */
	        AbstractControl.prototype._isBoxedValue = function (formState) {
	            return isStringMap(formState) && Object.keys(formState).length === 2 && 'value' in formState &&
	                'disabled' in formState;
	        };
	        /** @internal */
	        AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
	        return AbstractControl;
	    }());
	    /**
	     * @whatItDoes Tracks the value and validation status of an individual form control.
	     *
	     * It is one of the three fundamental building blocks of Angular forms, along with
	     * {@link FormGroup} and {@link FormArray}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormControl}, you can pass in an initial value as the
	     * first argument. Example:
	     *
	     * ```ts
	     * const ctrl = new FormControl('some value');
	     * console.log(ctrl.value);     // 'some value'
	     *```
	     *
	     * You can also initialize the control with a form state object on instantiation,
	     * which includes both the value and whether or not the control is disabled.
	     *
	     * ```ts
	     * const ctrl = new FormControl({value: 'n/a', disabled: true});
	     * console.log(ctrl.value);     // 'n/a'
	     * console.log(ctrl.status);   // 'DISABLED'
	     * ```
	     *
	     * To include a sync validator (or an array of sync validators) with the control,
	     * pass it in as the second argument. Async validators are also supported, but
	     * have to be passed in separately as the third arg.
	     *
	     * ```ts
	     * const ctrl = new FormControl('', Validators.required);
	     * console.log(ctrl.value);     // ''
	     * console.log(ctrl.status);   // 'INVALID'
	     * ```
	     *
	     * See its superclass, {@link AbstractControl}, for more properties and methods.
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormControl = (function (_super) {
	        __extends$6(FormControl, _super);
	        function FormControl(formState, validator, asyncValidator) {
	            if (formState === void 0) { formState = null; }
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
	            /** @internal */
	            this._onChange = [];
	            this._applyFormState(formState);
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	            this._initObservables();
	        }
	        /**
	         * Set the value of the form control to `value`.
	         *
	         * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
	         * and not its parent component. This defaults to false.
	         *
	         * If `emitEvent` is `true`, this
	         * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
	         * to true (as it falls through to `updateValueAndValidity`).
	         *
	         * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	         * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	         * specified.
	         *
	         * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
	         * model.  This is the default behavior if `emitViewToModelChange` is not specified.
	         */
	        FormControl.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
	            emitModelToViewChange = isPresent(emitModelToViewChange) ? emitModelToViewChange : true;
	            emitViewToModelChange = isPresent(emitViewToModelChange) ? emitViewToModelChange : true;
	            this._value = value;
	            if (this._onChange.length && emitModelToViewChange) {
	                this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange); });
	            }
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * Patches the value of a control.
	         *
	         * This function is functionally the same as {@link FormControl.setValue} at this level.
	         * It exists for symmetry with {@link FormGroup.patchValue} on `FormGroups` and `FormArrays`,
	         * where it does behave differently.
	         */
	        FormControl.prototype.patchValue = function (value, options) {
	            if (options === void 0) { options = {}; }
	            this.setValue(value, options);
	        };
	        /**
	         * Resets the form control. This means by default:
	         *
	         * * it is marked as `pristine`
	         * * it is marked as `untouched`
	         * * value is set to null
	         *
	         * You can also reset to a specific form state by passing through a standalone
	         * value or a form state object that contains both a value and a disabled state
	         * (these are the only two properties that cannot be calculated).
	         *
	         * Ex:
	         *
	         * ```ts
	         * this.control.reset('Nancy');
	         *
	         * console.log(this.control.value);  // 'Nancy'
	         * ```
	         *
	         * OR
	         *
	         * ```
	         * this.control.reset({value: 'Nancy', disabled: true});
	         *
	         * console.log(this.control.value);  // 'Nancy'
	         * console.log(this.control.status);  // 'DISABLED'
	         * ```
	         */
	        FormControl.prototype.reset = function (formState, _a) {
	            if (formState === void 0) { formState = null; }
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._applyFormState(formState);
	            this.markAsPristine({ onlySelf: onlySelf });
	            this.markAsUntouched({ onlySelf: onlySelf });
	            this.setValue(this._value, { onlySelf: onlySelf });
	        };
	        /**
	         * @internal
	         */
	        FormControl.prototype._updateValue = function () { };
	        /**
	         * @internal
	         */
	        FormControl.prototype._anyControls = function (condition) { return false; };
	        /**
	         * @internal
	         */
	        FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
	        /**
	         * Register a listener for change events.
	         */
	        FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
	        /**
	         * @internal
	         */
	        FormControl.prototype._clearChangeFns = function () {
	            this._onChange = [];
	            this._onDisabledChange = null;
	            this._onCollectionChange = function () { };
	        };
	        /**
	         * Register a listener for disabled events.
	         */
	        FormControl.prototype.registerOnDisabledChange = function (fn) { this._onDisabledChange = fn; };
	        /**
	         * @internal
	         */
	        FormControl.prototype._forEachChild = function (cb) { };
	        FormControl.prototype._applyFormState = function (formState) {
	            if (this._isBoxedValue(formState)) {
	                this._value = formState.value;
	                formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
	                    this.enable({ onlySelf: true, emitEvent: false });
	            }
	            else {
	                this._value = formState;
	            }
	        };
	        return FormControl;
	    }(AbstractControl));
	    /**
	     * @whatItDoes Tracks the value and validity state of a group of {@link FormControl}
	     * instances.
	     *
	     * A `FormGroup` aggregates the values of each child {@link FormControl} into one object,
	     * with each control name as the key.  It calculates its status by reducing the statuses
	     * of its children. For example, if one of the controls in a group is invalid, the entire
	     * group becomes invalid.
	     *
	     * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
	     * along with {@link FormControl} and {@link FormArray}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormGroup}, pass in a collection of child controls as the first
	     * argument. The key for each child will be the name under which it is registered.
	     *
	     * ### Example
	     *
	     * ```
	     * const form = new FormGroup({
	     *   first: new FormControl('Nancy', Validators.minLength(2)),
	     *   last: new FormControl('Drew'),
	     * });
	     *
	     * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
	     * console.log(form.status);  // 'VALID'
	     * ```
	     *
	     * You can also include group-level validators as the second arg, or group-level async
	     * validators as the third arg. These come in handy when you want to perform validation
	     * that considers the value of more than one child control.
	     *
	     * ### Example
	     *
	     * ```
	     * const form = new FormGroup({
	     *   password: new FormControl('', Validators.minLength(2)),
	     *   passwordConfirm: new FormControl('', Validators.minLength(2)),
	     * }, passwordMatchValidator);
	     *
	     *
	     * function passwordMatchValidator(g: FormGroup) {
	     *    return g.get('password').value === g.get('passwordConfirm').value
	     *       ? null : {'mismatch': true};
	     * }
	     * ```
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormGroup = (function (_super) {
	        __extends$6(FormGroup, _super);
	        function FormGroup(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         * Registers a control with the group's list of controls.
	         *
	         * This method does not update value or validity of the control, so for
	         * most cases you'll want to use {@link FormGroup.addControl} instead.
	         */
	        FormGroup.prototype.registerControl = function (name, control) {
	            if (this.controls[name])
	                return this.controls[name];
	            this.controls[name] = control;
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	            return control;
	        };
	        /**
	         * Add a control to this group.
	         */
	        FormGroup.prototype.addControl = function (name, control) {
	            this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Remove a control from this group.
	         */
	        FormGroup.prototype.removeControl = function (name) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            StringMapWrapper.delete(this.controls, name);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Replace an existing control.
	         */
	        FormGroup.prototype.setControl = function (name, control) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            StringMapWrapper.delete(this.controls, name);
	            if (control)
	                this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Check whether there is an enabled control with the given name in the group.
	         *
	         * It will return false for disabled controls. If you'd like to check for
	         * existence in the group only, use {@link AbstractControl.get} instead.
	         */
	        FormGroup.prototype.contains = function (controlName) {
	            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
	        };
	        /**
	         *  Sets the value of the {@link FormGroup}. It accepts an object that matches
	         *  the structure of the group, with control names as keys.
	         *
	         * This method performs strict checks, so it will throw an error if you try
	         * to set the value of a control that doesn't exist or if you exclude the
	         * value of a control.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const form = new FormGroup({
	         *     first: new FormControl(),
	         *     last: new FormControl()
	         *  });
	         *  console.log(form.value);   // {first: null, last: null}
	         *
	         *  form.setValue({first: 'Nancy', last: 'Drew'});
	         *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
	         *
	         *  ```
	         */
	        FormGroup.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._checkAllValuesPresent(value);
	            StringMapWrapper.forEach(value, function (newValue, name) {
	                _this._throwIfControlMissing(name);
	                _this.controls[name].setValue(newValue, { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         *  Patches the value of the {@link FormGroup}. It accepts an object with control
	         *  names as keys, and will do its best to match the values to the correct controls
	         *  in the group.
	         *
	         *  It accepts both super-sets and sub-sets of the group without throwing an error.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const form = new FormGroup({
	         *     first: new FormControl(),
	         *     last: new FormControl()
	         *  });
	         *  console.log(form.value);   // {first: null, last: null}
	         *
	         *  form.patchValue({first: 'Nancy'});
	         *  console.log(form.value);   // {first: 'Nancy', last: null}
	         *
	         *  ```
	         */
	        FormGroup.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            StringMapWrapper.forEach(value, function (newValue, name) {
	                if (_this.controls[name]) {
	                    _this.controls[name].patchValue(newValue, { onlySelf: true });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         * Resets the {@link FormGroup}. This means by default:
	         *
	         * * The group and all descendants are marked `pristine`
	         * * The group and all descendants are marked `untouched`
	         * * The value of all descendants will be null or null maps
	         *
	         * You can also reset to a specific form state by passing in a map of states
	         * that matches the structure of your form, with control names as keys. The state
	         * can be a standalone value or a form state object with both a value and a disabled
	         * status.
	         *
	         * ### Example
	         *
	         * ```ts
	         * this.form.reset({first: 'name', last; 'last name'});
	         *
	         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	         * ```
	         *
	         * - OR -
	         *
	         * ```
	         * this.form.reset({
	         *   first: {value: 'name', disabled: true},
	         *   last: 'last'
	         * });
	         *
	         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	         * console.log(this.form.get('first').status);  // 'DISABLED'
	         * ```
	         */
	        FormGroup.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = {}; }
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._forEachChild(function (control, name) {
	                control.reset(value[name], { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         * The aggregate value of the {@link FormGroup}, including any disabled controls.
	         *
	         * If you'd like to include all values regardless of disabled status, use this method.
	         * Otherwise, the `value` property is the best way to get the value of the group.
	         */
	        FormGroup.prototype.getRawValue = function () {
	            return this._reduceChildren({}, function (acc, control, name) {
	                acc[name] = control.value;
	                return acc;
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._throwIfControlMissing = function (name) {
	            if (!Object.keys(this.controls).length) {
	                throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.controls[name]) {
	                throw new Error("Cannot find form control with name: " + name + ".");
	            }
	        };
	        /** @internal */
	        FormGroup.prototype._forEachChild = function (cb) {
	            StringMapWrapper.forEach(this.controls, cb);
	        };
	        /** @internal */
	        FormGroup.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) {
	                control.setParent(_this);
	                control._registerOnCollectionChange(_this._onCollectionChange);
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	        /** @internal */
	        FormGroup.prototype._anyControls = function (condition) {
	            var _this = this;
	            var res = false;
	            this._forEachChild(function (control, name) {
	                res = res || (_this.contains(name) && condition(control));
	            });
	            return res;
	        };
	        /** @internal */
	        FormGroup.prototype._reduceValue = function () {
	            var _this = this;
	            return this._reduceChildren({}, function (acc, control, name) {
	                if (control.enabled || _this.disabled) {
	                    acc[name] = control.value;
	                }
	                return acc;
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._reduceChildren = function (initValue, fn) {
	            var res = initValue;
	            this._forEachChild(function (control, name) { res = fn(res, control, name); });
	            return res;
	        };
	        /** @internal */
	        FormGroup.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
	                var controlName = _a[_i];
	                if (this.controls[controlName].enabled) {
	                    return false;
	                }
	            }
	            return Object.keys(this.controls).length > 0 || this.disabled;
	        };
	        /** @internal */
	        FormGroup.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, name) {
	                if (value[name] === undefined) {
	                    throw new Error("Must supply a value for form control with name: '" + name + "'.");
	                }
	            });
	        };
	        return FormGroup;
	    }(AbstractControl));
	    /**
	     * @whatItDoes Tracks the value and validity state of an array of {@link FormControl}
	     * instances.
	     *
	     * A `FormArray` aggregates the values of each child {@link FormControl} into an array.
	     * It calculates its status by reducing the statuses of its children. For example, if one of
	     * the controls in a `FormArray` is invalid, the entire array becomes invalid.
	     *
	     * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
	     * along with {@link FormControl} and {@link FormGroup}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormArray}, pass in an array of child controls as the first
	     * argument.
	     *
	     * ### Example
	     *
	     * ```
	     * const arr = new FormArray([
	     *   new FormControl('Nancy', Validators.minLength(2)),
	     *   new FormControl('Drew'),
	     * ]);
	     *
	     * console.log(arr.value);   // ['Nancy', 'Drew']
	     * console.log(arr.status);  // 'VALID'
	     * ```
	     *
	     * You can also include array-level validators as the second arg, or array-level async
	     * validators as the third arg. These come in handy when you want to perform validation
	     * that considers the value of more than one child control.
	     *
	     * ### Adding or removing controls
	     *
	     * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	     * in `FormArray` itself. These methods ensure the controls are properly tracked in the
	     * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	     * the `FormArray` directly, as that will result in strange and unexpected behavior such
	     * as broken change detection.
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormArray = (function (_super) {
	        __extends$6(FormArray, _super);
	        function FormArray(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         * Get the {@link AbstractControl} at the given `index` in the array.
	         */
	        FormArray.prototype.at = function (index) { return this.controls[index]; };
	        /**
	         * Insert a new {@link AbstractControl} at the end of the array.
	         */
	        FormArray.prototype.push = function (control) {
	            this.controls.push(control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Insert a new {@link AbstractControl} at the given `index` in the array.
	         */
	        FormArray.prototype.insert = function (index, control) {
	            ListWrapper.insert(this.controls, index, control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Remove the control at the given `index` in the array.
	         */
	        FormArray.prototype.removeAt = function (index) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            ListWrapper.removeAt(this.controls, index);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Replace an existing control.
	         */
	        FormArray.prototype.setControl = function (index, control) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            ListWrapper.removeAt(this.controls, index);
	            if (control) {
	                ListWrapper.insert(this.controls, index, control);
	                this._registerControl(control);
	            }
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        Object.defineProperty(FormArray.prototype, "length", {
	            /**
	             * Length of the control array.
	             */
	            get: function () { return this.controls.length; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         *  Sets the value of the {@link FormArray}. It accepts an array that matches
	         *  the structure of the control.
	         *
	         * This method performs strict checks, so it will throw an error if you try
	         * to set the value of a control that doesn't exist or if you exclude the
	         * value of a control.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const arr = new FormArray([
	         *     new FormControl(),
	         *     new FormControl()
	         *  ]);
	         *  console.log(arr.value);   // [null, null]
	         *
	         *  arr.setValue(['Nancy', 'Drew']);
	         *  console.log(arr.value);   // ['Nancy', 'Drew']
	         *  ```
	         */
	        FormArray.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._checkAllValuesPresent(value);
	            value.forEach(function (newValue, index) {
	                _this._throwIfControlMissing(index);
	                _this.at(index).setValue(newValue, { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         *  Patches the value of the {@link FormArray}. It accepts an array that matches the
	         *  structure of the control, and will do its best to match the values to the correct
	         *  controls in the group.
	         *
	         *  It accepts both super-sets and sub-sets of the array without throwing an error.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const arr = new FormArray([
	         *     new FormControl(),
	         *     new FormControl()
	         *  ]);
	         *  console.log(arr.value);   // [null, null]
	         *
	         *  arr.patchValue(['Nancy']);
	         *  console.log(arr.value);   // ['Nancy', null]
	         *  ```
	         */
	        FormArray.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            value.forEach(function (newValue, index) {
	                if (_this.at(index)) {
	                    _this.at(index).patchValue(newValue, { onlySelf: true });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         * Resets the {@link FormArray}. This means by default:
	         *
	         * * The array and all descendants are marked `pristine`
	         * * The array and all descendants are marked `untouched`
	         * * The value of all descendants will be null or null maps
	         *
	         * You can also reset to a specific form state by passing in an array of states
	         * that matches the structure of the control. The state can be a standalone value
	         * or a form state object with both a value and a disabled status.
	         *
	         * ### Example
	         *
	         * ```ts
	         * this.arr.reset(['name', 'last name']);
	         *
	         * console.log(this.arr.value);  // ['name', 'last name']
	         * ```
	         *
	         * - OR -
	         *
	         * ```
	         * this.arr.reset([
	         *   {value: 'name', disabled: true},
	         *   'last'
	         * ]);
	         *
	         * console.log(this.arr.value);  // ['name', 'last name']
	         * console.log(this.arr.get(0).status);  // 'DISABLED'
	         * ```
	         */
	        FormArray.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = []; }
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._forEachChild(function (control, index) {
	                control.reset(value[index], { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         * The aggregate value of the array, including any disabled controls.
	         *
	         * If you'd like to include all values regardless of disabled status, use this method.
	         * Otherwise, the `value` property is the best way to get the value of the array.
	         */
	        FormArray.prototype.getRawValue = function () { return this.controls.map(function (control) { return control.value; }); };
	        /** @internal */
	        FormArray.prototype._throwIfControlMissing = function (index) {
	            if (!this.controls.length) {
	                throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.at(index)) {
	                throw new Error("Cannot find form control at index " + index);
	            }
	        };
	        /** @internal */
	        FormArray.prototype._forEachChild = function (cb) {
	            this.controls.forEach(function (control, index) { cb(control, index); });
	        };
	        /** @internal */
	        FormArray.prototype._updateValue = function () {
	            var _this = this;
	            this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
	                .map(function (control) { return control.value; });
	        };
	        /** @internal */
	        FormArray.prototype._anyControls = function (condition) {
	            return this.controls.some(function (control) { return control.enabled && condition(control); });
	        };
	        /** @internal */
	        FormArray.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) { return _this._registerControl(control); });
	        };
	        /** @internal */
	        FormArray.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, i) {
	                if (value[i] === undefined) {
	                    throw new Error("Must supply a value for form control at index: " + i + ".");
	                }
	            });
	        };
	        /** @internal */
	        FormArray.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
	                var control = _a[_i];
	                if (control.enabled)
	                    return false;
	            }
	            return this.controls.length > 0 || this.disabled;
	        };
	        FormArray.prototype._registerControl = function (control) {
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	        };
	        return FormArray;
	    }(AbstractControl));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$4 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formDirectiveProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgForm; })
	    };
	    var resolvedPromise = Promise.resolve(null);
	    /**
	     * @whatItDoes Creates a top-level {@link FormGroup} instance and binds it to a form
	     * to track aggregate form value and validation status.
	     *
	     * @howToUse
	     *
	     * As soon as you import the `FormsModule`, this directive becomes active by default on
	     * all `<form>` tags.  You don't need to add a special selector.
	     *
	     * You can export the directive into a local template variable using `ngForm` as the key
	     * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
	     * {@link FormGroup} instance are duplicated on the directive itself, so a reference to it
	     * will give you access to the aggregate value and validity status of the form, as well as
	     * user interaction properties like `dirty` and `touched`.
	     *
	     * To register child controls with the form, you'll want to use {@link NgModel} with a
	     * `name` attribute.  You can also use {@link NgModelGroup} if you'd like to create
	     * sub-groups within the form.
	     *
	     * You can listen to the directive's `ngSubmit` event to be notified when the user has
	     * triggered a form submission.
	     *
	     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `FormsModule`
	     *
	     *  @stable
	     */
	    var NgForm = (function (_super) {
	        __extends$4(NgForm, _super);
	        function NgForm(validators, asyncValidators) {
	            _super.call(this);
	            this._submitted = false;
	            this.ngSubmit = new EventEmitter();
	            this.form =
	                new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
	        }
	        Object.defineProperty(NgForm.prototype, "submitted", {
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "formDirective", {
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "controls", {
	            get: function () { return this.form.controls; },
	            enumerable: true,
	            configurable: true
	        });
	        NgForm.prototype.addControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                dir._control = container.registerControl(dir.name, dir.control);
	                setUpControl(dir.control, dir);
	                dir.control.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        NgForm.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	        NgForm.prototype.removeControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                if (isPresent(container)) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        NgForm.prototype.addFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                var group = new FormGroup({});
	                setUpFormContainer(group, dir);
	                container.registerControl(dir.name, group);
	                group.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        NgForm.prototype.removeFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                if (isPresent(container)) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        NgForm.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	        NgForm.prototype.updateModel = function (dir, value) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var ctrl = _this.form.get(dir.path);
	                ctrl.setValue(value);
	            });
	        };
	        NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
	        NgForm.prototype.onSubmit = function () {
	            this._submitted = true;
	            this.ngSubmit.emit(null);
	            return false;
	        };
	        NgForm.prototype.onReset = function () { this.resetForm(); };
	        NgForm.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /** @internal */
	        NgForm.prototype._findContainer = function (path) {
	            path.pop();
	            return ListWrapper.isEmpty(path) ? this.form : this.form.get(path);
	        };
	        NgForm.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                        providers: [formDirectiveProvider],
	                        host: { '(submit)': 'onSubmit()', '(reset)': 'onReset()' },
	                        outputs: ['ngSubmit'],
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgForm.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        return NgForm;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var Examples = {
	        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
	        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
	        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; let i=index\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
	        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
	        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
	    };
	
	    var TemplateDrivenErrors = (function () {
	        function TemplateDrivenErrors() {
	        }
	        TemplateDrivenErrors.modelParentException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + Examples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + Examples.ngModelWithFormGroup);
	        };
	        TemplateDrivenErrors.formGroupNameException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        TemplateDrivenErrors.missingNameException = function () {
	            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
	        };
	        TemplateDrivenErrors.modelGroupParentException = function () {
	            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        return TemplateDrivenErrors;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$8 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var modelGroupProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgModelGroup; })
	    };
	    /**
	     * @whatItDoes Creates and binds a {@link FormGroup} instance to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive can only be used as a child of {@link NgForm} (or in other words,
	     * within `<form>` tags).
	     *
	     * Use this directive if you'd like to create a sub-group within a form. This can
	     * come in handy if you want to validate a sub-group of your form separately from
	     * the rest of your form, or if some values in your domain model make more sense to
	     * consume together in a nested object.
	     *
	     * Pass in the name you'd like this sub-group to have and it will become the key
	     * for the sub-group in the form's full value. You can also export the directive into
	     * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
	     *
	     * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `FormsModule`
	     *
	     * @stable
	     */
	    var NgModelGroup = (function (_super) {
	        __extends$8(NgModelGroup, _super);
	        function NgModelGroup(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /** @internal */
	        NgModelGroup.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelGroupParentException();
	            }
	        };
	        NgModelGroup.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
	        ];
	        /** @nocollapse */
	        NgModelGroup.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        NgModelGroup.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['ngModelGroup',] },],
	        };
	        return NgModelGroup;
	    }(AbstractFormGroupDirective));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$7 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formControlBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return NgModel; })
	    };
	    var resolvedPromise$1 = Promise.resolve(null);
	    /**
	     * @whatItDoes Creates a {@link FormControl} instance from a domain model and binds it
	     * to a form control element.
	     *
	     * The {@link FormControl} instance will track the value, user interaction, and
	     * validation status of the control and keep the view synced with the model. If used
	     * within a parent form, the directive will also register itself with the form as a child
	     * control.
	     *
	     * @howToUse
	     *
	     * This directive can be used by itself or as part of a larger form. All you need is the
	     * `ngModel` selector to activate it.
	     *
	     * It accepts a domain model as an optional {@link @Input}. If you have a one-way binding
	     * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
	     * class will set the value in the view. If you have a two-way binding with `[()]` syntax
	     * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
	     * the domain model in your class as well.
	     *
	     * If you wish to inspect the properties of the associated {@link FormControl} (like
	     * validity state), you can also export the directive into a local template variable using
	     * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
	     * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
	     * will fall through to the control anyway, so you can access them directly. You can see a
	     * full list of properties directly available in {@link AbstractControlDirective}.
	     *
	     * The following is an example of a simple standalone control using `ngModel`:
	     *
	     * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
	     *
	     * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
	     * so that the control can be registered with the parent form under that name.
	     *
	     * It's worth noting that in the context of a parent form, you often can skip one-way or
	     * two-way binding because the parent form will sync the value for you. You can access
	     * its properties by exporting it into a local template variable using `ngForm` (ex:
	     * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
	     *
	     * If you do need to populate initial values into your form, using a one-way binding for
	     * `ngModel` tends to be sufficient as long as you use the exported form's value rather
	     * than the domain model's value on submit.
	     *
	     * Take a look at an example of using `ngModel` within a form:
	     *
	     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: `FormsModule`
	     *
	     *  @stable
	     */
	    var NgModel = (function (_super) {
	        __extends$7(NgModel, _super);
	        function NgModel(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            /** @internal */
	            this._control = new FormControl();
	            /** @internal */
	            this._registered = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        NgModel.prototype.ngOnChanges = function (changes) {
	            this._checkForErrors();
	            if (!this._registered)
	                this._setUpControl();
	            if ('isDisabled' in changes) {
	                this._updateDisabled(changes);
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this._updateValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
	        Object.defineProperty(NgModel.prototype, "control", {
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "path", {
	            get: function () {
	                return this._parent ? controlPath(this.name, this._parent) : [this.name];
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "formDirective", {
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        NgModel.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        NgModel.prototype._setUpControl = function () {
	            this._isStandalone() ? this._setUpStandalone() :
	                this.formDirective.addControl(this);
	            this._registered = true;
	        };
	        NgModel.prototype._isStandalone = function () {
	            return !this._parent || (this.options && this.options.standalone);
	        };
	        NgModel.prototype._setUpStandalone = function () {
	            setUpControl(this._control, this);
	            this._control.updateValueAndValidity({ emitEvent: false });
	        };
	        NgModel.prototype._checkForErrors = function () {
	            if (!this._isStandalone()) {
	                this._checkParentType();
	            }
	            this._checkName();
	        };
	        NgModel.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                TemplateDrivenErrors.formGroupNameException();
	            }
	            else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelParentException();
	            }
	        };
	        NgModel.prototype._checkName = function () {
	            if (this.options && this.options.name)
	                this.name = this.options.name;
	            if (!this._isStandalone() && !this.name) {
	                TemplateDrivenErrors.missingNameException();
	            }
	        };
	        NgModel.prototype._updateValue = function (value) {
	            var _this = this;
	            resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
	        };
	        NgModel.prototype._updateDisabled = function (changes) {
	            var _this = this;
	            var disabledValue = changes['isDisabled'].currentValue;
	            var isDisabled = disabledValue != null && disabledValue != false;
	            resolvedPromise$1.then(function () {
	                if (isDisabled && !_this.control.disabled) {
	                    _this.control.disable();
	                }
	                else if (!isDisabled && _this.control.disabled) {
	                    _this.control.enable();
	                }
	            });
	        };
	        NgModel.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[ngModel]:not([formControlName]):not([formControl])',
	                        providers: [formControlBinding],
	                        exportAs: 'ngModel'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgModel.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        NgModel.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'options': [{ type: _angular_core.Input, args: ['ngModelOptions',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	        };
	        return NgModel;
	    }(NgControl));
	
	    var ReactiveErrors = (function () {
	        function ReactiveErrors() {
	        }
	        ReactiveErrors.controlParentException = function () {
	            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formControlName);
	        };
	        ReactiveErrors.ngModelGroupException = function () {
	            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + Examples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + Examples.ngModelGroup);
	        };
	        ReactiveErrors.missingFormException = function () {
	            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + Examples.formControlName);
	        };
	        ReactiveErrors.groupParentException = function () {
	            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formGroupName);
	        };
	        ReactiveErrors.arrayParentException = function () {
	            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + Examples.formArrayName);
	        };
	        ReactiveErrors.disabledAttrWarning = function () {
	            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
	        };
	        return ReactiveErrors;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$9 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formControlBinding$1 = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlDirective; })
	    };
	    /**
	     * @whatItDoes Syncs a standalone {@link FormControl} instance to a form control element.
	     *
	     * In other words, this directive ensures that any values written to the {@link FormControl}
	     * instance programmatically will be written to the DOM element (model -> view). Conversely,
	     * any values written to the DOM element through user input will be reflected in the
	     * {@link FormControl} instance (view -> model).
	     *
	     * @howToUse
	     *
	     * Use this directive if you'd like to create and manage a {@link FormControl} instance directly.
	     * Simply create a {@link FormControl}, save it to your component class, and pass it into the
	     * {@link FormControlDirective}.
	     *
	     * This directive is designed to be used as a standalone control.  Unlike {@link FormControlName},
	     * it does not require that your {@link FormControl} instance be part of any parent
	     * {@link FormGroup}, and it won't be registered to any {@link FormGroupDirective} that
	     * exists above it.
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormControl} instance. See a full list of available properties in
	     * {@link AbstractControl}.
	     *
	     * **Set the value**: You can pass in an initial value when instantiating the {@link FormControl},
	     * or you can set it programmatically later using {@link AbstractControl.setValue} or
	     * {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the control, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     *  @stable
	     */
	    var FormControlDirective = (function (_super) {
	        __extends$9(FormControlDirective, _super);
	        function FormControlDirective(validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this.update = new EventEmitter();
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlDirective.prototype.ngOnChanges = function (changes) {
	            if (this._isControlChanged(changes)) {
	                setUpControl(this.form, this);
	                if (this.control.disabled)
	                    this.valueAccessor.setDisabledState(true);
	                this.form.updateValueAndValidity({ emitEvent: false });
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.form.setValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        Object.defineProperty(FormControlDirective.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        FormControlDirective.prototype._isControlChanged = function (changes) {
	            return StringMapWrapper.contains(changes, 'form');
	        };
	        FormControlDirective.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
	        ];
	        /** @nocollapse */
	        FormControlDirective.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        FormControlDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formControl',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlDirective;
	    }(NgControl));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$11 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formDirectiveProvider$1 = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupDirective; })
	    };
	    /**
	     * @whatItDoes Binds an existing {@link FormGroup} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive accepts an existing {@link FormGroup} instance. It will then use this
	     * {@link FormGroup} instance to match any child {@link FormControl}, {@link FormGroup},
	     * and {@link FormArray} instances to child {@link FormControlName}, {@link FormGroupName},
	     * and {@link FormArrayName} directives.
	     *
	     * **Set value**: You can set the form's initial value when instantiating the
	     * {@link FormGroup}, or you can set it programmatically later using the {@link FormGroup}'s
	     * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue} methods.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
	     * to the {@link FormGroup}'s {@link AbstractControl.valueChanges} event.  You can also listen to
	     * its {@link AbstractControl.statusChanges} event to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * In this example, we create form controls for first name and last name.
	     *
	     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: {@link ReactiveFormsModule}
	     *
	     *  @stable
	     */
	    var FormGroupDirective = (function (_super) {
	        __extends$11(FormGroupDirective, _super);
	        function FormGroupDirective(_validators, _asyncValidators) {
	            _super.call(this);
	            this._validators = _validators;
	            this._asyncValidators = _asyncValidators;
	            this._submitted = false;
	            this.directives = [];
	            this.form = null;
	            this.ngSubmit = new EventEmitter();
	        }
	        FormGroupDirective.prototype.ngOnChanges = function (changes) {
	            this._checkFormPresent();
	            if (StringMapWrapper.contains(changes, 'form')) {
	                this._updateValidators();
	                this._updateDomValue();
	                this._updateRegistrations();
	            }
	        };
	        Object.defineProperty(FormGroupDirective.prototype, "submitted", {
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        FormGroupDirective.prototype.addControl = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpControl(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	            this.directives.push(dir);
	            return ctrl;
	        };
	        FormGroupDirective.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.removeControl = function (dir) { ListWrapper.remove(this.directives, dir); };
	        FormGroupDirective.prototype.addFormGroup = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype.removeFormGroup = function (dir) { };
	        FormGroupDirective.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.addFormArray = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype.removeFormArray = function (dir) { };
	        FormGroupDirective.prototype.getFormArray = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.updateModel = function (dir, value) {
	            var ctrl = this.form.get(dir.path);
	            ctrl.setValue(value);
	        };
	        FormGroupDirective.prototype.onSubmit = function () {
	            this._submitted = true;
	            this.ngSubmit.emit(null);
	            return false;
	        };
	        FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
	        FormGroupDirective.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /** @internal */
	        FormGroupDirective.prototype._updateDomValue = function () {
	            var _this = this;
	            this.directives.forEach(function (dir) {
	                var newCtrl = _this.form.get(dir.path);
	                if (dir._control !== newCtrl) {
	                    cleanUpControl(dir._control, dir);
	                    if (newCtrl)
	                        setUpControl(newCtrl, dir);
	                    dir._control = newCtrl;
	                }
	            });
	            this.form._updateTreeValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype._updateRegistrations = function () {
	            var _this = this;
	            this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
	            if (this._oldForm)
	                this._oldForm._registerOnCollectionChange(function () { });
	            this._oldForm = this.form;
	        };
	        FormGroupDirective.prototype._updateValidators = function () {
	            var sync = composeValidators(this._validators);
	            this.form.validator = Validators.compose([this.form.validator, sync]);
	            var async = composeAsyncValidators(this._asyncValidators);
	            this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
	        };
	        FormGroupDirective.prototype._checkFormPresent = function () {
	            if (isBlank(this.form)) {
	                ReactiveErrors.missingFormException();
	            }
	        };
	        FormGroupDirective.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroup]',
	                        providers: [formDirectiveProvider$1],
	                        host: { '(submit)': 'onSubmit()', '(reset)': 'onReset()' },
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        FormGroupDirective.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormGroupDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formGroup',] },],
	            'ngSubmit': [{ type: _angular_core.Output },],
	        };
	        return FormGroupDirective;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$12 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formGroupNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupName; })
	    };
	    /**
	     * @whatItDoes Syncs a nested {@link FormGroup} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive can only be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the nested {@link FormGroup} you want to link, and
	     * will look for a {@link FormGroup} registered with that name in the parent
	     * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	     *
	     * Nested form groups can come in handy when you want to validate a sub-group of a
	     * form separately from the rest or when you'd like to group the values of certain
	     * controls into their own nested object.
	     *
	     * **Access the group**: You can access the associated {@link FormGroup} using the
	     * {@link AbstractControl.get} method. Ex: `this.form.get('name')`.
	     *
	     * You can also access individual controls within the group using dot syntax.
	     * Ex: `this.form.get('name.first')`
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormGroup}. See a full list of available properties in {@link AbstractControl}.
	     *
	     * **Set the value**: You can set an initial value for each child control when instantiating
	     * the {@link FormGroup}, or you can set it programmatically later using
	     * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the group, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     * @stable
	     */
	    var FormGroupName = (function (_super) {
	        __extends$12(FormGroupName, _super);
	        function FormGroupName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /** @internal */
	        FormGroupName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.groupParentException();
	            }
	        };
	        FormGroupName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormGroupName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormGroupName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formGroupName',] },],
	        };
	        return FormGroupName;
	    }(AbstractFormGroupDirective));
	    var formArrayNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormArrayName; })
	    };
	    /**
	     * @whatItDoes Syncs a nested {@link FormArray} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the nested {@link FormArray} you want to link, and
	     * will look for a {@link FormArray} registered with that name in the parent
	     * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	     *
	     * Nested form arrays can come in handy when you have a group of form controls but
	     * you're not sure how many there will be. Form arrays allow you to create new
	     * form controls dynamically.
	     *
	     * **Access the array**: You can access the associated {@link FormArray} using the
	     * {@link AbstractControl.get} method on the parent {@link FormGroup}.
	     * Ex: `this.form.get('cities')`.
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormArray}. See a full list of available properties in {@link AbstractControl}.
	     *
	     * **Set the value**: You can set an initial value for each child control when instantiating
	     * the {@link FormArray}, or you can set the value programmatically later using the
	     * {@link FormArray}'s {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}
	     * methods.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the array, you can
	     * subscribe to the {@link FormArray}'s {@link AbstractControl.valueChanges} event.  You can also
	     * listen to its {@link AbstractControl.statusChanges} event to be notified when the validation
	     * status is re-calculated.
	     *
	     * **Add new controls**: You can add new controls to the {@link FormArray} dynamically by
	     * calling its {@link FormArray.push} method.
	     *  Ex: `this.form.get('cities').push(new FormControl());`
	     *
	     * ### Example
	     *
	     * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     * @stable
	     */
	    var FormArrayName = (function (_super) {
	        __extends$12(FormArrayName, _super);
	        function FormArrayName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        FormArrayName.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormArray(this);
	        };
	        FormArrayName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormArray(this);
	            }
	        };
	        Object.defineProperty(FormArrayName.prototype, "control", {
	            get: function () { return this.formDirective.getFormArray(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "formDirective", {
	            get: function () {
	                return this._parent ? this._parent.formDirective : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "path", {
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "validator", {
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        FormArrayName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.arrayParentException();
	            }
	        };
	        FormArrayName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormArrayName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormArrayName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formArrayName',] },],
	        };
	        return FormArrayName;
	    }(ControlContainer));
	    function _hasInvalidParent(parent) {
	        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
	            !(parent instanceof FormArrayName);
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$10 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var controlNameBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlName; })
	    };
	    /**
	     * @whatItDoes  Syncs a {@link FormControl} in an existing {@link FormGroup} to a form control
	     * element by name.
	     *
	     * In other words, this directive ensures that any values written to the {@link FormControl}
	     * instance programmatically will be written to the DOM element (model -> view). Conversely,
	     * any values written to the DOM element through user input will be reflected in the
	     * {@link FormControl} instance (view -> model).
	     *
	     * @howToUse
	     *
	     * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the {@link FormControl} instance you want to
	     * link, and will look for a {@link FormControl} registered with that name in the
	     * closest {@link FormGroup} or {@link FormArray} above it.
	     *
	     * **Access the control**: You can access the {@link FormControl} associated with
	     * this directive by using the {@link AbstractControl.get} method.
	     * Ex: `this.form.get('first');`
	     *
	     * **Get value**: the `value` property is always synced and available on the {@link FormControl}.
	     * See a full list of available properties in {@link AbstractControl}.
	     *
	     *  **Set value**: You can set an initial value for the control when instantiating the
	     *  {@link FormControl}, or you can set it programmatically later using
	     *  {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the control, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * In this example, we create form controls for first name and last name.
	     *
	     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	     *
	     *  * **npm package**: `@angular/forms`
	     *
	     *  * **NgModule**: {@link ReactiveFormsModule}
	     *
	     *  @stable
	     */
	    var FormControlName = (function (_super) {
	        __extends$10(FormControlName, _super);
	        function FormControlName(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this._added = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlName.prototype, "isDisabled", {
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlName.prototype.ngOnChanges = function (changes) {
	            if (!this._added)
	                this._setUpControl();
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.viewModel = this.model;
	                this.formDirective.updateModel(this, this.model);
	            }
	        };
	        FormControlName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeControl(this);
	            }
	        };
	        FormControlName.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        Object.defineProperty(FormControlName.prototype, "path", {
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "formDirective", {
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "control", {
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlName.prototype._checkParentType = function () {
	            if (!(this._parent instanceof FormGroupName) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                ReactiveErrors.ngModelGroupException();
	            }
	            else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
	                !(this._parent instanceof FormArrayName)) {
	                ReactiveErrors.controlParentException();
	            }
	        };
	        FormControlName.prototype._setUpControl = function () {
	            this._checkParentType();
	            this._control = this.formDirective.addControl(this);
	            if (this.control.disabled)
	                this.valueAccessor.setDisabledState(true);
	            this._added = true;
	        };
	        FormControlName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
	        ];
	        /** @nocollapse */
	        FormControlName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        FormControlName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formControlName',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlName;
	    }(NgControl));
	
	    var REQUIRED_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return RequiredValidator; }),
	        multi: true
	    };
	    /**
	     * A Directive that adds the `required` validator to any controls marked with the
	     * `required` attribute, via the {@link NG_VALIDATORS} binding.
	     *
	     * ### Example
	     *
	     * ```
	     * <input name="fullName" ngModel required>
	     * ```
	     *
	     * @stable
	     */
	    var RequiredValidator = (function () {
	        function RequiredValidator() {
	        }
	        Object.defineProperty(RequiredValidator.prototype, "required", {
	            get: function () { return this._required; },
	            set: function (value) {
	                this._required = isPresent(value) && "" + value !== 'false';
	                if (this._onChange)
	                    this._onChange();
	            },
	            enumerable: true,
	            configurable: true
	        });
	        RequiredValidator.prototype.validate = function (c) {
	            return this.required ? Validators.required(c) : null;
	        };
	        RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        RequiredValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[required][formControlName],[required][formControl],[required][ngModel]',
	                        providers: [REQUIRED_VALIDATOR],
	                        host: { '[attr.required]': 'required? "" : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        RequiredValidator.ctorParameters = [];
	        RequiredValidator.propDecorators = {
	            'required': [{ type: _angular_core.Input },],
	        };
	        return RequiredValidator;
	    }());
	    /**
	     * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='min'}
	     */
	    var MIN_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MinLengthValidator; }),
	        multi: true
	    };
	    /**
	     * A directive which installs the {@link MinLengthValidator} for any `formControlName`,
	     * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
	     *
	     * @stable
	     */
	    var MinLengthValidator = (function () {
	        function MinLengthValidator() {
	        }
	        MinLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.minLength(parseInt(this.minlength, 10));
	        };
	        MinLengthValidator.prototype.ngOnChanges = function (changes) {
	            if (changes['minlength']) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        MinLengthValidator.prototype.validate = function (c) {
	            return isPresent(this.minlength) ? this._validator(c) : null;
	        };
	        MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        MinLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
	                        providers: [MIN_LENGTH_VALIDATOR],
	                        host: { '[attr.minlength]': 'minlength? minlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MinLengthValidator.ctorParameters = [];
	        MinLengthValidator.propDecorators = {
	            'minlength': [{ type: _angular_core.Input },],
	        };
	        return MinLengthValidator;
	    }());
	    /**
	     * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='max'}
	     */
	    var MAX_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MaxLengthValidator; }),
	        multi: true
	    };
	    /**
	     * A directive which installs the {@link MaxLengthValidator} for any `formControlName,
	     * `formControl`,
	     * or control with `ngModel` that also has a `maxlength` attribute.
	     *
	     * @stable
	     */
	    var MaxLengthValidator = (function () {
	        function MaxLengthValidator() {
	        }
	        MaxLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
	        };
	        MaxLengthValidator.prototype.ngOnChanges = function (changes) {
	            if (changes['maxlength']) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        MaxLengthValidator.prototype.validate = function (c) {
	            return isPresent(this.maxlength) ? this._validator(c) : null;
	        };
	        MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        MaxLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
	                        providers: [MAX_LENGTH_VALIDATOR],
	                        host: { '[attr.maxlength]': 'maxlength? maxlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MaxLengthValidator.ctorParameters = [];
	        MaxLengthValidator.propDecorators = {
	            'maxlength': [{ type: _angular_core.Input },],
	        };
	        return MaxLengthValidator;
	    }());
	    var PATTERN_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return PatternValidator; }),
	        multi: true
	    };
	    /**
	     * A Directive that adds the `pattern` validator to any controls marked with the
	     * `pattern` attribute, via the {@link NG_VALIDATORS} binding. Uses attribute value
	     * as the regex to validate Control value against.  Follows pattern attribute
	     * semantics; i.e. regex must match entire Control value.
	     *
	     * ### Example
	     *
	     * ```
	     * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
	     * ```
	     * @stable
	     */
	    var PatternValidator = (function () {
	        function PatternValidator() {
	        }
	        PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
	        PatternValidator.prototype.ngOnChanges = function (changes) {
	            if (changes['pattern']) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        PatternValidator.prototype.validate = function (c) {
	            return isPresent(this.pattern) ? this._validator(c) : null;
	        };
	        PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        PatternValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
	                        providers: [PATTERN_VALIDATOR],
	                        host: { '[attr.pattern]': 'pattern? pattern : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        PatternValidator.ctorParameters = [];
	        PatternValidator.propDecorators = {
	            'pattern': [{ type: _angular_core.Input },],
	        };
	        return PatternValidator;
	    }());
	
	    /**
	     * @whatItDoes Creates an {@link AbstractControl} from a user-specified configuration.
	     *
	     * It is essentially syntactic sugar that shortens the `new FormGroup()`,
	     * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
	     * forms.
	     *
	     * @howToUse
	     *
	     * To use, inject `FormBuilder` into your component class. You can then call its methods
	     * directly.
	     *
	     * {@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
	     *
	     *  * **npm package**: `@angular/forms`
	     *
	     *  * **NgModule**: {@link ReactiveFormsModule}
	     *
	     * @stable
	     */
	    var FormBuilder = (function () {
	        function FormBuilder() {
	        }
	        /**
	         * Construct a new {@link FormGroup} with the given map of configuration.
	         * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
	         *
	         * See the {@link FormGroup} constructor for more details.
	         */
	        FormBuilder.prototype.group = function (controlsConfig, extra) {
	            if (extra === void 0) { extra = null; }
	            var controls = this._reduceControls(controlsConfig);
	            var validator = isPresent(extra) ? StringMapWrapper.get(extra, 'validator') : null;
	            var asyncValidator = isPresent(extra) ? StringMapWrapper.get(extra, 'asyncValidator') : null;
	            return new FormGroup(controls, validator, asyncValidator);
	        };
	        /**
	         * Construct a new {@link FormControl} with the given `formState`,`validator`, and
	         * `asyncValidator`.
	         *
	         * `formState` can either be a standalone value for the form control or an object
	         * that contains both a value and a disabled status.
	         *
	         */
	        FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            return new FormControl(formState, validator, asyncValidator);
	        };
	        /**
	         * Construct a {@link FormArray} from the given `controlsConfig` array of
	         * configuration, with the given optional `validator` and `asyncValidator`.
	         */
	        FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	            var _this = this;
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	            return new FormArray(controls, validator, asyncValidator);
	        };
	        /** @internal */
	        FormBuilder.prototype._reduceControls = function (controlsConfig) {
	            var _this = this;
	            var controls = {};
	            StringMapWrapper.forEach(controlsConfig, function (controlConfig, controlName) {
	                controls[controlName] = _this._createControl(controlConfig);
	            });
	            return controls;
	        };
	        /** @internal */
	        FormBuilder.prototype._createControl = function (controlConfig) {
	            if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
	                controlConfig instanceof FormArray) {
	                return controlConfig;
	            }
	            else if (isArray(controlConfig)) {
	                var value = controlConfig[0];
	                var validator = controlConfig.length > 1 ? controlConfig[1] : null;
	                var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	                return this.control(value, validator, asyncValidator);
	            }
	            else {
	                return this.control(controlConfig);
	            }
	        };
	        FormBuilder.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        FormBuilder.ctorParameters = [];
	        return FormBuilder;
	    }());
	
	    var SHARED_FORM_DIRECTIVES = [
	        NgSelectOption, NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor,
	        CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor,
	        RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator,
	        MinLengthValidator, MaxLengthValidator, PatternValidator
	    ];
	    var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
	    var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
	    /**
	     * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
	     */
	    var InternalFormsSharedModule = (function () {
	        function InternalFormsSharedModule() {
	        }
	        InternalFormsSharedModule.decorators = [
	            { type: _angular_core.NgModule, args: [{ declarations: SHARED_FORM_DIRECTIVES, exports: SHARED_FORM_DIRECTIVES },] },
	        ];
	        /** @nocollapse */
	        InternalFormsSharedModule.ctorParameters = [];
	        return InternalFormsSharedModule;
	    }());
	
	    /**
	     * The ng module for forms.
	     * @stable
	     */
	    var FormsModule = (function () {
	        function FormsModule() {
	        }
	        FormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
	                        providers: [RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        FormsModule.ctorParameters = [];
	        return FormsModule;
	    }());
	    /**
	     * The ng module for reactive forms.
	     * @stable
	     */
	    var ReactiveFormsModule = (function () {
	        function ReactiveFormsModule() {
	        }
	        ReactiveFormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
	                        providers: [FormBuilder, RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        ReactiveFormsModule.ctorParameters = [];
	        return ReactiveFormsModule;
	    }());
	
	    exports.AbstractControlDirective = AbstractControlDirective;
	    exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
	    exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	    exports.ControlContainer = ControlContainer;
	    exports.NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR;
	    exports.DefaultValueAccessor = DefaultValueAccessor;
	    exports.NgControl = NgControl;
	    exports.NgControlStatus = NgControlStatus;
	    exports.NgControlStatusGroup = NgControlStatusGroup;
	    exports.NgForm = NgForm;
	    exports.NgModel = NgModel;
	    exports.NgModelGroup = NgModelGroup;
	    exports.FormControlDirective = FormControlDirective;
	    exports.FormControlName = FormControlName;
	    exports.FormGroupDirective = FormGroupDirective;
	    exports.FormArrayName = FormArrayName;
	    exports.FormGroupName = FormGroupName;
	    exports.NgSelectOption = NgSelectOption;
	    exports.SelectControlValueAccessor = SelectControlValueAccessor;
	    exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
	    exports.MaxLengthValidator = MaxLengthValidator;
	    exports.MinLengthValidator = MinLengthValidator;
	    exports.PatternValidator = PatternValidator;
	    exports.RequiredValidator = RequiredValidator;
	    exports.FormBuilder = FormBuilder;
	    exports.AbstractControl = AbstractControl;
	    exports.FormArray = FormArray;
	    exports.FormControl = FormControl;
	    exports.FormGroup = FormGroup;
	    exports.NG_ASYNC_VALIDATORS = NG_ASYNC_VALIDATORS;
	    exports.NG_VALIDATORS = NG_VALIDATORS;
	    exports.Validators = Validators;
	    exports.FormsModule = FormsModule;
	    exports.ReactiveFormsModule = ReactiveFormsModule;
	
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 57:
/*!******************************************!*\
  !*** ./angular2App/app/app.component.ts ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/// <reference path="../../node_modules/jqwidgets-framework/jqwidgets-ts/jqwidgets.d.ts" />
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var angular_jqxgrid_1 = __webpack_require__(/*! jqwidgets-framework/jqwidgets-ts/angular_jqxgrid */ 61);
	var angular_jqxbuttons_1 = __webpack_require__(/*! jqwidgets-framework/jqwidgets-ts/angular_jqxbuttons */ 62);
	var angular_jqxwindow_1 = __webpack_require__(/*! jqwidgets-framework/jqwidgets-ts/angular_jqxwindow */ 63);
	var AppComponent = (function () {
	    function AppComponent() {
	        this.name = "Angular Jqx";
	        this.source = {
	            datatype: "json",
	            datafields: [
	                { name: 'name', type: 'string' },
	                { name: 'type', type: 'string' },
	                { name: 'calories', type: 'int' },
	                { name: 'totalfat', type: 'string' },
	                { name: 'protein', type: 'string' }
	            ],
	            id: 'id',
	            localdata: '[{ "id": "1","name": "Hot Chocolate", "type": "Chocolate Beverage", "calories": "370", "totalfat": "16g", "protein": "14g" },' +
	                '{"id": 2,"name": "Peppermint Hot Chocolate","type": "Chocolate Beverage","calories": "440","totalfat": "16g","protein": "13g"},' +
	                '{"id": "3","name": "Salted Caramel Hot Chocolate","type": "Chocolate Beverage","calories": "450","totalfat": "16g","protein": "13g"}]',
	        };
	        this.dataAdapter = new $.jqx.dataAdapter(this.source);
	        this.cellsrenderer = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
	            if (value < 20) {
	                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
	            }
	            else {
	                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
	            }
	        };
	        this.settings = {
	            width: 850,
	            source: this.dataAdapter,
	            pageable: true,
	            autoheight: true,
	            sortable: true,
	            altrows: true,
	            enabletooltips: true,
	            editable: true,
	            selectionmode: 'multiplecellsadvanced',
	            columns: [
	                { text: 'Name', datafield: 'name', width: 250 },
	                { text: 'Beverage Type', datafield: 'type', width: 250 },
	                { text: 'Calories', datafield: 'calories', width: 180 },
	                { text: 'Total Fat', datafield: 'totalfat', width: 120 },
	                { text: 'Protein', datafield: 'protein', minwidth: 120 }
	            ]
	        };
	        this.windowSettings = {
	            height: 300,
	            width: 500,
	            maxHeight: 400,
	            maxWidth: 700,
	            minHeight: 200,
	            minWidth: 200,
	            position: { x: 300, y: 100 },
	            showCollapseButton: true,
	        };
	    }
	    AppComponent.prototype.ngAfterViewInit = function () {
	        this.myGrid.createComponent(this.settings);
	        this.showWindowButton.createComponent({ width: '70px' });
	        this.hideWindowButton.createComponent({ width: '70px' });
	        this.window.createComponent(this.windowSettings);
	    };
	    AppComponent.prototype.onShowButton = function () {
	        this.window.open();
	    };
	    AppComponent.prototype.onHideButton = function () {
	        this.window.close();
	    };
	    return AppComponent;
	}());
	__decorate([
	    core_1.ViewChild('gridReference'),
	    __metadata("design:type", angular_jqxgrid_1.jqxGridComponent)
	], AppComponent.prototype, "myGrid", void 0);
	__decorate([
	    core_1.ViewChild('windowReference'),
	    __metadata("design:type", angular_jqxwindow_1.jqxWindowComponent)
	], AppComponent.prototype, "window", void 0);
	__decorate([
	    core_1.ViewChild('showWindowButton'),
	    __metadata("design:type", angular_jqxbuttons_1.jqxButtonComponent)
	], AppComponent.prototype, "showWindowButton", void 0);
	__decorate([
	    core_1.ViewChild('hideWindowButton'),
	    __metadata("design:type", angular_jqxbuttons_1.jqxButtonComponent)
	], AppComponent.prototype, "hideWindowButton", void 0);
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'fms-app',
	        templateUrl: './app.component.html'
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 58)))

/***/ },

/***/ 61:
/*!***************************************************************!*\
  !*** ./~/jqwidgets-framework/jqwidgets-ts/angular_jqxgrid.ts ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/*
	jQWidgets v4.5.0 (2017-Jan)
	Copyright (c) 2011-2017 jQWidgets.
	License: http://jqwidgets.com/license/
	*/
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var jqxGridComponent = (function () {
	    function jqxGridComponent(containerElement) {
	        var _this = this;
	        this.autoCreate = true;
	        this.properties = ['altrows', 'altstart', 'altstep', 'autoshowloadelement', 'autoshowfiltericon', 'autoshowcolumnsmenubutton', 'clipboard', 'closeablegroups', 'columnsmenuwidth', 'columnmenuopening', 'columnmenuclosing', 'cellhover', 'enablekeyboarddelete', 'enableellipsis', 'enablemousewheel', 'enableanimations', 'enabletooltips', 'enablehover', 'enablebrowserselection', 'everpresentrowposition', 'everpresentrowheight', 'everpresentrowactions', 'everpresentrowactionsmode', 'filterrowheight', 'filtermode', 'groupsrenderer', 'groupcolumnrenderer', 'groupsexpandedbydefault', 'handlekeyboardnavigation', 'pagerrenderer', 'rtl', 'showdefaultloadelement', 'showfiltercolumnbackground', 'showfiltermenuitems', 'showpinnedcolumnbackground', 'showsortcolumnbackground', 'showsortmenuitems', 'showgroupmenuitems', 'showrowdetailscolumn', 'showheader', 'showgroupsheader', 'showaggregates', 'showgroupaggregates', 'showeverpresentrow', 'showfilterrow', 'showemptyrow', 'showstatusbar', 'statusbarheight', 'showtoolbar', 'selectionmode', 'theme', 'toolbarheight', 'autoheight', 'autorowheight', 'columnsheight', 'deferreddatafields', 'groupsheaderheight', 'groupindentwidth', 'height', 'pagerheight', 'rowsheight', 'scrollbarsize', 'scrollmode', 'scrollfeedback', 'width', 'autosavestate', 'autoloadstate', 'columns', 'columngroups', 'columnsmenu', 'columnsresize', 'columnsautoresize', 'columnsreorder', 'disabled', 'editable', 'editmode', 'filter', 'filterable', 'groupable', 'groups', 'horizontalscrollbarstep', 'horizontalscrollbarlargestep', 'initrowdetails', 'keyboardnavigation', 'pagesize', 'pagesizeoptions', 'pagermode', 'pagerbuttonscount', 'pageable', 'rowdetails', 'rowdetailstemplate', 'ready', 'rendered', 'renderstatusbar', 'rendertoolbar', 'rendergridrows', 'sortable', 'selectedrowindex', 'selectedrowindexes', 'source', 'sorttogglestates', 'updatedelay', 'virtualmode', 'verticalscrollbarstep', 'verticalscrollbarlargestep'];
	        // jqxGridComponent events
	        this.onBindingcomplete = new core_1.EventEmitter();
	        this.onColumnresized = new core_1.EventEmitter();
	        this.onColumnreordered = new core_1.EventEmitter();
	        this.onColumnclick = new core_1.EventEmitter();
	        this.onCellclick = new core_1.EventEmitter();
	        this.onCelldoubleclick = new core_1.EventEmitter();
	        this.onCellselect = new core_1.EventEmitter();
	        this.onCellunselect = new core_1.EventEmitter();
	        this.onCellvaluechanged = new core_1.EventEmitter();
	        this.onCellbeginedit = new core_1.EventEmitter();
	        this.onCellendedit = new core_1.EventEmitter();
	        this.onFilter = new core_1.EventEmitter();
	        this.onGroupschanged = new core_1.EventEmitter();
	        this.onGroupexpand = new core_1.EventEmitter();
	        this.onGroupcollapse = new core_1.EventEmitter();
	        this.onPagechanged = new core_1.EventEmitter();
	        this.onPagesizechanged = new core_1.EventEmitter();
	        this.onRowclick = new core_1.EventEmitter();
	        this.onRowdoubleclick = new core_1.EventEmitter();
	        this.onRowselect = new core_1.EventEmitter();
	        this.onRowunselect = new core_1.EventEmitter();
	        this.onRowexpand = new core_1.EventEmitter();
	        this.onRowcollapse = new core_1.EventEmitter();
	        this.onSort = new core_1.EventEmitter();
	        this.elementRef = containerElement;
	        setTimeout(function () {
	            if (_this.autoCreate) {
	                _this.createComponent();
	            }
	        });
	    }
	    jqxGridComponent.prototype.ngOnChanges = function (changes) {
	        if (this.host) {
	            for (var i = 0; i < this.properties.length; i++) {
	                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
	                var areEqual = void 0;
	                if (this[attrName]) {
	                    if (typeof this[attrName] === 'object') {
	                        if (this[attrName] instanceof Array) {
	                            areEqual = this.arraysEqual(this[attrName], this.host.jqxGrid(this.properties[i]));
	                        }
	                        if (areEqual) {
	                            return false;
	                        }
	                        this.host.jqxGrid(this.properties[i], this[attrName]);
	                        continue;
	                    }
	                    if (this[attrName] !== this.host.jqxGrid(this.properties[i])) {
	                        this.host.jqxGrid(this.properties[i], this[attrName]);
	                    }
	                }
	            }
	        }
	    };
	    jqxGridComponent.prototype.arraysEqual = function (attrValue, hostValue) {
	        if (attrValue.length != hostValue.length) {
	            return false;
	        }
	        for (var i = 0; i < attrValue.length; i++) {
	            if (attrValue[i] !== hostValue[i]) {
	                return false;
	            }
	        }
	        return true;
	    };
	    jqxGridComponent.prototype.manageAttributes = function () {
	        var options = {};
	        for (var i = 0; i < this.properties.length; i++) {
	            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
	            if (this[attrName] !== undefined) {
	                options[this.properties[i]] = this[attrName];
	            }
	        }
	        return options;
	    };
	    jqxGridComponent.prototype.createComponent = function (options) {
	        if (options) {
	            $.extend(options, this.manageAttributes());
	        }
	        else {
	            options = this.manageAttributes();
	        }
	        this.host = $(this.elementRef.nativeElement.firstChild);
	        this.__wireEvents__();
	        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxGrid', options);
	        this.__updateRect__();
	    };
	    jqxGridComponent.prototype.createWidget = function (options) {
	        this.createComponent(options);
	    };
	    jqxGridComponent.prototype.__updateRect__ = function () {
	        this.host.css({ width: this.attrWidth, height: this.attrHeight });
	    };
	    jqxGridComponent.prototype.setOptions = function (options) {
	        this.host.jqxGrid('setOptions', options);
	    };
	    // jqxGridComponent properties
	    jqxGridComponent.prototype.altrows = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('altrows', arg);
	        }
	        else {
	            return this.host.jqxGrid('altrows');
	        }
	    };
	    jqxGridComponent.prototype.altstart = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('altstart', arg);
	        }
	        else {
	            return this.host.jqxGrid('altstart');
	        }
	    };
	    jqxGridComponent.prototype.altstep = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('altstep', arg);
	        }
	        else {
	            return this.host.jqxGrid('altstep');
	        }
	    };
	    jqxGridComponent.prototype.autoshowloadelement = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('autoshowloadelement', arg);
	        }
	        else {
	            return this.host.jqxGrid('autoshowloadelement');
	        }
	    };
	    jqxGridComponent.prototype.autoshowfiltericon = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('autoshowfiltericon', arg);
	        }
	        else {
	            return this.host.jqxGrid('autoshowfiltericon');
	        }
	    };
	    jqxGridComponent.prototype.autoshowcolumnsmenubutton = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('autoshowcolumnsmenubutton', arg);
	        }
	        else {
	            return this.host.jqxGrid('autoshowcolumnsmenubutton');
	        }
	    };
	    jqxGridComponent.prototype.clipboard = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('clipboard', arg);
	        }
	        else {
	            return this.host.jqxGrid('clipboard');
	        }
	    };
	    jqxGridComponent.prototype.closeablegroups = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('closeablegroups', arg);
	        }
	        else {
	            return this.host.jqxGrid('closeablegroups');
	        }
	    };
	    jqxGridComponent.prototype.columnsmenuwidth = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('columnsmenuwidth', arg);
	        }
	        else {
	            return this.host.jqxGrid('columnsmenuwidth');
	        }
	    };
	    jqxGridComponent.prototype.columnmenuopening = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('columnmenuopening', arg);
	        }
	        else {
	            return this.host.jqxGrid('columnmenuopening');
	        }
	    };
	    jqxGridComponent.prototype.columnmenuclosing = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('columnmenuclosing', arg);
	        }
	        else {
	            return this.host.jqxGrid('columnmenuclosing');
	        }
	    };
	    jqxGridComponent.prototype.cellhover = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('cellhover', arg);
	        }
	        else {
	            return this.host.jqxGrid('cellhover');
	        }
	    };
	    jqxGridComponent.prototype.enablekeyboarddelete = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('enablekeyboarddelete', arg);
	        }
	        else {
	            return this.host.jqxGrid('enablekeyboarddelete');
	        }
	    };
	    jqxGridComponent.prototype.enableellipsis = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('enableellipsis', arg);
	        }
	        else {
	            return this.host.jqxGrid('enableellipsis');
	        }
	    };
	    jqxGridComponent.prototype.enablemousewheel = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('enablemousewheel', arg);
	        }
	        else {
	            return this.host.jqxGrid('enablemousewheel');
	        }
	    };
	    jqxGridComponent.prototype.enableanimations = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('enableanimations', arg);
	        }
	        else {
	            return this.host.jqxGrid('enableanimations');
	        }
	    };
	    jqxGridComponent.prototype.enabletooltips = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('enabletooltips', arg);
	        }
	        else {
	            return this.host.jqxGrid('enabletooltips');
	        }
	    };
	    jqxGridComponent.prototype.enablehover = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('enablehover', arg);
	        }
	        else {
	            return this.host.jqxGrid('enablehover');
	        }
	    };
	    jqxGridComponent.prototype.enablebrowserselection = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('enablebrowserselection', arg);
	        }
	        else {
	            return this.host.jqxGrid('enablebrowserselection');
	        }
	    };
	    jqxGridComponent.prototype.everpresentrowposition = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('everpresentrowposition', arg);
	        }
	        else {
	            return this.host.jqxGrid('everpresentrowposition');
	        }
	    };
	    jqxGridComponent.prototype.everpresentrowheight = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('everpresentrowheight', arg);
	        }
	        else {
	            return this.host.jqxGrid('everpresentrowheight');
	        }
	    };
	    jqxGridComponent.prototype.everpresentrowactions = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('everpresentrowactions', arg);
	        }
	        else {
	            return this.host.jqxGrid('everpresentrowactions');
	        }
	    };
	    jqxGridComponent.prototype.everpresentrowactionsmode = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('everpresentrowactionsmode', arg);
	        }
	        else {
	            return this.host.jqxGrid('everpresentrowactionsmode');
	        }
	    };
	    jqxGridComponent.prototype.filterrowheight = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('filterrowheight', arg);
	        }
	        else {
	            return this.host.jqxGrid('filterrowheight');
	        }
	    };
	    jqxGridComponent.prototype.filtermode = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('filtermode', arg);
	        }
	        else {
	            return this.host.jqxGrid('filtermode');
	        }
	    };
	    jqxGridComponent.prototype.groupsrenderer = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('groupsrenderer', arg);
	        }
	        else {
	            return this.host.jqxGrid('groupsrenderer');
	        }
	    };
	    jqxGridComponent.prototype.groupcolumnrenderer = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('groupcolumnrenderer', arg);
	        }
	        else {
	            return this.host.jqxGrid('groupcolumnrenderer');
	        }
	    };
	    jqxGridComponent.prototype.groupsexpandedbydefault = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('groupsexpandedbydefault', arg);
	        }
	        else {
	            return this.host.jqxGrid('groupsexpandedbydefault');
	        }
	    };
	    jqxGridComponent.prototype.handlekeyboardnavigation = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('handlekeyboardnavigation', arg);
	        }
	        else {
	            return this.host.jqxGrid('handlekeyboardnavigation');
	        }
	    };
	    jqxGridComponent.prototype.pagerrenderer = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('pagerrenderer', arg);
	        }
	        else {
	            return this.host.jqxGrid('pagerrenderer');
	        }
	    };
	    jqxGridComponent.prototype.rtl = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('rtl', arg);
	        }
	        else {
	            return this.host.jqxGrid('rtl');
	        }
	    };
	    jqxGridComponent.prototype.showdefaultloadelement = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('showdefaultloadelement', arg);
	        }
	        else {
	            return this.host.jqxGrid('showdefaultloadelement');
	        }
	    };
	    jqxGridComponent.prototype.showfiltercolumnbackground = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('showfiltercolumnbackground', arg);
	        }
	        else {
	            return this.host.jqxGrid('showfiltercolumnbackground');
	        }
	    };
	    jqxGridComponent.prototype.showfiltermenuitems = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('showfiltermenuitems', arg);
	        }
	        else {
	            return this.host.jqxGrid('showfiltermenuitems');
	        }
	    };
	    jqxGridComponent.prototype.showpinnedcolumnbackground = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('showpinnedcolumnbackground', arg);
	        }
	        else {
	            return this.host.jqxGrid('showpinnedcolumnbackground');
	        }
	    };
	    jqxGridComponent.prototype.showsortcolumnbackground = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('showsortcolumnbackground', arg);
	        }
	        else {
	            return this.host.jqxGrid('showsortcolumnbackground');
	        }
	    };
	    jqxGridComponent.prototype.showsortmenuitems = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('showsortmenuitems', arg);
	        }
	        else {
	            return this.host.jqxGrid('showsortmenuitems');
	        }
	    };
	    jqxGridComponent.prototype.showgroupmenuitems = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('showgroupmenuitems', arg);
	        }
	        else {
	            return this.host.jqxGrid('showgroupmenuitems');
	        }
	    };
	    jqxGridComponent.prototype.showrowdetailscolumn = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('showrowdetailscolumn', arg);
	        }
	        else {
	            return this.host.jqxGrid('showrowdetailscolumn');
	        }
	    };
	    jqxGridComponent.prototype.showheader = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('showheader', arg);
	        }
	        else {
	            return this.host.jqxGrid('showheader');
	        }
	    };
	    jqxGridComponent.prototype.showgroupsheader = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('showgroupsheader', arg);
	        }
	        else {
	            return this.host.jqxGrid('showgroupsheader');
	        }
	    };
	    jqxGridComponent.prototype.showaggregates = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('showaggregates', arg);
	        }
	        else {
	            return this.host.jqxGrid('showaggregates');
	        }
	    };
	    jqxGridComponent.prototype.showgroupaggregates = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('showgroupaggregates', arg);
	        }
	        else {
	            return this.host.jqxGrid('showgroupaggregates');
	        }
	    };
	    jqxGridComponent.prototype.showeverpresentrow = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('showeverpresentrow', arg);
	        }
	        else {
	            return this.host.jqxGrid('showeverpresentrow');
	        }
	    };
	    jqxGridComponent.prototype.showfilterrow = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('showfilterrow', arg);
	        }
	        else {
	            return this.host.jqxGrid('showfilterrow');
	        }
	    };
	    jqxGridComponent.prototype.showemptyrow = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('showemptyrow', arg);
	        }
	        else {
	            return this.host.jqxGrid('showemptyrow');
	        }
	    };
	    jqxGridComponent.prototype.showstatusbar = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('showstatusbar', arg);
	        }
	        else {
	            return this.host.jqxGrid('showstatusbar');
	        }
	    };
	    jqxGridComponent.prototype.statusbarheight = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('statusbarheight', arg);
	        }
	        else {
	            return this.host.jqxGrid('statusbarheight');
	        }
	    };
	    jqxGridComponent.prototype.showtoolbar = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('showtoolbar', arg);
	        }
	        else {
	            return this.host.jqxGrid('showtoolbar');
	        }
	    };
	    jqxGridComponent.prototype.selectionmode = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('selectionmode', arg);
	        }
	        else {
	            return this.host.jqxGrid('selectionmode');
	        }
	    };
	    jqxGridComponent.prototype.theme = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('theme', arg);
	        }
	        else {
	            return this.host.jqxGrid('theme');
	        }
	    };
	    jqxGridComponent.prototype.toolbarheight = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('toolbarheight', arg);
	        }
	        else {
	            return this.host.jqxGrid('toolbarheight');
	        }
	    };
	    jqxGridComponent.prototype.autoheight = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('autoheight', arg);
	        }
	        else {
	            return this.host.jqxGrid('autoheight');
	        }
	    };
	    jqxGridComponent.prototype.autorowheight = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('autorowheight', arg);
	        }
	        else {
	            return this.host.jqxGrid('autorowheight');
	        }
	    };
	    jqxGridComponent.prototype.columnsheight = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('columnsheight', arg);
	        }
	        else {
	            return this.host.jqxGrid('columnsheight');
	        }
	    };
	    jqxGridComponent.prototype.deferreddatafields = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('deferreddatafields', arg);
	        }
	        else {
	            return this.host.jqxGrid('deferreddatafields');
	        }
	    };
	    jqxGridComponent.prototype.groupsheaderheight = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('groupsheaderheight', arg);
	        }
	        else {
	            return this.host.jqxGrid('groupsheaderheight');
	        }
	    };
	    jqxGridComponent.prototype.groupindentwidth = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('groupindentwidth', arg);
	        }
	        else {
	            return this.host.jqxGrid('groupindentwidth');
	        }
	    };
	    jqxGridComponent.prototype.height = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('height', arg);
	        }
	        else {
	            return this.host.jqxGrid('height');
	        }
	    };
	    jqxGridComponent.prototype.pagerheight = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('pagerheight', arg);
	        }
	        else {
	            return this.host.jqxGrid('pagerheight');
	        }
	    };
	    jqxGridComponent.prototype.rowsheight = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('rowsheight', arg);
	        }
	        else {
	            return this.host.jqxGrid('rowsheight');
	        }
	    };
	    jqxGridComponent.prototype.scrollbarsize = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('scrollbarsize', arg);
	        }
	        else {
	            return this.host.jqxGrid('scrollbarsize');
	        }
	    };
	    jqxGridComponent.prototype.scrollmode = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('scrollmode', arg);
	        }
	        else {
	            return this.host.jqxGrid('scrollmode');
	        }
	    };
	    jqxGridComponent.prototype.scrollfeedback = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('scrollfeedback', arg);
	        }
	        else {
	            return this.host.jqxGrid('scrollfeedback');
	        }
	    };
	    jqxGridComponent.prototype.width = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('width', arg);
	        }
	        else {
	            return this.host.jqxGrid('width');
	        }
	    };
	    jqxGridComponent.prototype.autosavestate = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('autosavestate', arg);
	        }
	        else {
	            return this.host.jqxGrid('autosavestate');
	        }
	    };
	    jqxGridComponent.prototype.autoloadstate = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('autoloadstate', arg);
	        }
	        else {
	            return this.host.jqxGrid('autoloadstate');
	        }
	    };
	    jqxGridComponent.prototype.columns = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('columns', arg);
	        }
	        else {
	            return this.host.jqxGrid('columns');
	        }
	    };
	    jqxGridComponent.prototype.columngroups = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('columngroups', arg);
	        }
	        else {
	            return this.host.jqxGrid('columngroups');
	        }
	    };
	    jqxGridComponent.prototype.columnsmenu = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('columnsmenu', arg);
	        }
	        else {
	            return this.host.jqxGrid('columnsmenu');
	        }
	    };
	    jqxGridComponent.prototype.columnsresize = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('columnsresize', arg);
	        }
	        else {
	            return this.host.jqxGrid('columnsresize');
	        }
	    };
	    jqxGridComponent.prototype.columnsautoresize = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('columnsautoresize', arg);
	        }
	        else {
	            return this.host.jqxGrid('columnsautoresize');
	        }
	    };
	    jqxGridComponent.prototype.columnsreorder = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('columnsreorder', arg);
	        }
	        else {
	            return this.host.jqxGrid('columnsreorder');
	        }
	    };
	    jqxGridComponent.prototype.disabled = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('disabled', arg);
	        }
	        else {
	            return this.host.jqxGrid('disabled');
	        }
	    };
	    jqxGridComponent.prototype.editable = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('editable', arg);
	        }
	        else {
	            return this.host.jqxGrid('editable');
	        }
	    };
	    jqxGridComponent.prototype.editmode = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('editmode', arg);
	        }
	        else {
	            return this.host.jqxGrid('editmode');
	        }
	    };
	    jqxGridComponent.prototype.filter = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('filter', arg);
	        }
	        else {
	            return this.host.jqxGrid('filter');
	        }
	    };
	    jqxGridComponent.prototype.filterable = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('filterable', arg);
	        }
	        else {
	            return this.host.jqxGrid('filterable');
	        }
	    };
	    jqxGridComponent.prototype.groupable = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('groupable', arg);
	        }
	        else {
	            return this.host.jqxGrid('groupable');
	        }
	    };
	    jqxGridComponent.prototype.groups = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('groups', arg);
	        }
	        else {
	            return this.host.jqxGrid('groups');
	        }
	    };
	    jqxGridComponent.prototype.horizontalscrollbarstep = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('horizontalscrollbarstep', arg);
	        }
	        else {
	            return this.host.jqxGrid('horizontalscrollbarstep');
	        }
	    };
	    jqxGridComponent.prototype.horizontalscrollbarlargestep = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('horizontalscrollbarlargestep', arg);
	        }
	        else {
	            return this.host.jqxGrid('horizontalscrollbarlargestep');
	        }
	    };
	    jqxGridComponent.prototype.initrowdetails = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('initrowdetails', arg);
	        }
	        else {
	            return this.host.jqxGrid('initrowdetails');
	        }
	    };
	    jqxGridComponent.prototype.keyboardnavigation = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('keyboardnavigation', arg);
	        }
	        else {
	            return this.host.jqxGrid('keyboardnavigation');
	        }
	    };
	    jqxGridComponent.prototype.pagesize = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('pagesize', arg);
	        }
	        else {
	            return this.host.jqxGrid('pagesize');
	        }
	    };
	    jqxGridComponent.prototype.pagesizeoptions = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('pagesizeoptions', arg);
	        }
	        else {
	            return this.host.jqxGrid('pagesizeoptions');
	        }
	    };
	    jqxGridComponent.prototype.pagermode = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('pagermode', arg);
	        }
	        else {
	            return this.host.jqxGrid('pagermode');
	        }
	    };
	    jqxGridComponent.prototype.pagerbuttonscount = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('pagerbuttonscount', arg);
	        }
	        else {
	            return this.host.jqxGrid('pagerbuttonscount');
	        }
	    };
	    jqxGridComponent.prototype.pageable = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('pageable', arg);
	        }
	        else {
	            return this.host.jqxGrid('pageable');
	        }
	    };
	    jqxGridComponent.prototype.rowdetails = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('rowdetails', arg);
	        }
	        else {
	            return this.host.jqxGrid('rowdetails');
	        }
	    };
	    jqxGridComponent.prototype.rowdetailstemplate = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('rowdetailstemplate', arg);
	        }
	        else {
	            return this.host.jqxGrid('rowdetailstemplate');
	        }
	    };
	    jqxGridComponent.prototype.ready = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('ready', arg);
	        }
	        else {
	            return this.host.jqxGrid('ready');
	        }
	    };
	    jqxGridComponent.prototype.rendered = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('rendered', arg);
	        }
	        else {
	            return this.host.jqxGrid('rendered');
	        }
	    };
	    jqxGridComponent.prototype.renderstatusbar = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('renderstatusbar', arg);
	        }
	        else {
	            return this.host.jqxGrid('renderstatusbar');
	        }
	    };
	    jqxGridComponent.prototype.rendertoolbar = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('rendertoolbar', arg);
	        }
	        else {
	            return this.host.jqxGrid('rendertoolbar');
	        }
	    };
	    jqxGridComponent.prototype.rendergridrows = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('rendergridrows', arg);
	        }
	        else {
	            return this.host.jqxGrid('rendergridrows');
	        }
	    };
	    jqxGridComponent.prototype.sortable = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('sortable', arg);
	        }
	        else {
	            return this.host.jqxGrid('sortable');
	        }
	    };
	    jqxGridComponent.prototype.selectedrowindex = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('selectedrowindex', arg);
	        }
	        else {
	            return this.host.jqxGrid('selectedrowindex');
	        }
	    };
	    jqxGridComponent.prototype.selectedrowindexes = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('selectedrowindexes', arg);
	        }
	        else {
	            return this.host.jqxGrid('selectedrowindexes');
	        }
	    };
	    jqxGridComponent.prototype.source = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('source', arg);
	        }
	        else {
	            return this.host.jqxGrid('source');
	        }
	    };
	    jqxGridComponent.prototype.sorttogglestates = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('sorttogglestates', arg);
	        }
	        else {
	            return this.host.jqxGrid('sorttogglestates');
	        }
	    };
	    jqxGridComponent.prototype.updatedelay = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('updatedelay', arg);
	        }
	        else {
	            return this.host.jqxGrid('updatedelay');
	        }
	    };
	    jqxGridComponent.prototype.virtualmode = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('virtualmode', arg);
	        }
	        else {
	            return this.host.jqxGrid('virtualmode');
	        }
	    };
	    jqxGridComponent.prototype.verticalscrollbarstep = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('verticalscrollbarstep', arg);
	        }
	        else {
	            return this.host.jqxGrid('verticalscrollbarstep');
	        }
	    };
	    jqxGridComponent.prototype.verticalscrollbarlargestep = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxGrid('verticalscrollbarlargestep', arg);
	        }
	        else {
	            return this.host.jqxGrid('verticalscrollbarlargestep');
	        }
	    };
	    // jqxGridComponent functions
	    jqxGridComponent.prototype.autoresizecolumns = function (type) {
	        this.host.jqxGrid('autoresizecolumns', type);
	    };
	    jqxGridComponent.prototype.autoresizecolumn = function (dataField, type) {
	        this.host.jqxGrid('autoresizecolumn', dataField, type);
	    };
	    jqxGridComponent.prototype.beginupdate = function () {
	        this.host.jqxGrid('beginupdate');
	    };
	    jqxGridComponent.prototype.clear = function () {
	        this.host.jqxGrid('clear');
	    };
	    jqxGridComponent.prototype.destroy = function () {
	        this.host.jqxGrid('destroy');
	    };
	    jqxGridComponent.prototype.endupdate = function () {
	        this.host.jqxGrid('endupdate');
	    };
	    jqxGridComponent.prototype.ensurerowvisible = function (rowBoundIndex) {
	        this.host.jqxGrid('ensurerowvisible', rowBoundIndex);
	    };
	    jqxGridComponent.prototype.focus = function () {
	        this.host.jqxGrid('focus');
	    };
	    jqxGridComponent.prototype.getcolumnindex = function (dataField) {
	        return this.host.jqxGrid('getcolumnindex', dataField);
	    };
	    jqxGridComponent.prototype.getcolumn = function (dataField) {
	        return this.host.jqxGrid('getcolumn', dataField);
	    };
	    jqxGridComponent.prototype.getcolumnproperty = function (dataField, propertyName) {
	        return this.host.jqxGrid('getcolumnproperty', dataField, propertyName);
	    };
	    jqxGridComponent.prototype.getrowid = function (rowBoundIndex) {
	        return this.host.jqxGrid('getrowid', rowBoundIndex);
	    };
	    jqxGridComponent.prototype.getrowdata = function (rowBoundIndex) {
	        return this.host.jqxGrid('getrowdata', rowBoundIndex);
	    };
	    jqxGridComponent.prototype.getrowdatabyid = function (rowID) {
	        return this.host.jqxGrid('getrowdatabyid', rowID);
	    };
	    jqxGridComponent.prototype.getrowboundindexbyid = function (rowID) {
	        return this.host.jqxGrid('getrowboundindexbyid', rowID);
	    };
	    jqxGridComponent.prototype.getrowboundindex = function (rowDisplayIndex) {
	        return this.host.jqxGrid('getrowboundindex', rowDisplayIndex);
	    };
	    jqxGridComponent.prototype.getrows = function () {
	        return this.host.jqxGrid('getrows');
	    };
	    jqxGridComponent.prototype.getboundrows = function () {
	        return this.host.jqxGrid('getboundrows');
	    };
	    jqxGridComponent.prototype.getdisplayrows = function () {
	        return this.host.jqxGrid('getdisplayrows');
	    };
	    jqxGridComponent.prototype.getdatainformation = function () {
	        return this.host.jqxGrid('getdatainformation');
	    };
	    jqxGridComponent.prototype.getsortinformation = function () {
	        return this.host.jqxGrid('getsortinformation');
	    };
	    jqxGridComponent.prototype.getpaginginformation = function () {
	        return this.host.jqxGrid('getpaginginformation');
	    };
	    jqxGridComponent.prototype.hidecolumn = function (dataField) {
	        this.host.jqxGrid('hidecolumn', dataField);
	    };
	    jqxGridComponent.prototype.hideloadelement = function () {
	        this.host.jqxGrid('hideloadelement');
	    };
	    jqxGridComponent.prototype.hiderowdetails = function (rowBoundIndex) {
	        this.host.jqxGrid('hiderowdetails', rowBoundIndex);
	    };
	    jqxGridComponent.prototype.iscolumnvisible = function (dataField) {
	        return this.host.jqxGrid('iscolumnvisible', dataField);
	    };
	    jqxGridComponent.prototype.iscolumnpinned = function (dataField) {
	        return this.host.jqxGrid('iscolumnpinned', dataField);
	    };
	    jqxGridComponent.prototype.localizestrings = function (localizationObject) {
	        this.host.jqxGrid('localizestrings', localizationObject);
	    };
	    jqxGridComponent.prototype.pincolumn = function (dataField) {
	        this.host.jqxGrid('pincolumn', dataField);
	    };
	    jqxGridComponent.prototype.refreshdata = function () {
	        this.host.jqxGrid('refreshdata');
	    };
	    jqxGridComponent.prototype.refresh = function () {
	        this.host.jqxGrid('refresh');
	    };
	    jqxGridComponent.prototype.render = function () {
	        this.host.jqxGrid('render');
	    };
	    jqxGridComponent.prototype.scrolloffset = function (top, left) {
	        this.host.jqxGrid('scrolloffset', top, left);
	    };
	    jqxGridComponent.prototype.scrollposition = function () {
	        return this.host.jqxGrid('scrollposition');
	    };
	    jqxGridComponent.prototype.showloadelement = function () {
	        this.host.jqxGrid('showloadelement');
	    };
	    jqxGridComponent.prototype.showrowdetails = function (rowBoundIndex) {
	        this.host.jqxGrid('showrowdetails', rowBoundIndex);
	    };
	    jqxGridComponent.prototype.setcolumnindex = function (dataField, index) {
	        this.host.jqxGrid('setcolumnindex', dataField, index);
	    };
	    jqxGridComponent.prototype.setcolumnproperty = function (dataField, propertyName, propertyValue) {
	        this.host.jqxGrid('setcolumnproperty', dataField, propertyName, propertyValue);
	    };
	    jqxGridComponent.prototype.showcolumn = function (dataField) {
	        this.host.jqxGrid('showcolumn', dataField);
	    };
	    jqxGridComponent.prototype.unpincolumn = function (dataField) {
	        this.host.jqxGrid('unpincolumn', dataField);
	    };
	    jqxGridComponent.prototype.updatebounddata = function (type) {
	        this.host.jqxGrid('updatebounddata', type);
	    };
	    jqxGridComponent.prototype.updating = function () {
	        return this.host.jqxGrid('updating');
	    };
	    jqxGridComponent.prototype.getsortcolumn = function () {
	        return this.host.jqxGrid('getsortcolumn');
	    };
	    jqxGridComponent.prototype.removesort = function () {
	        this.host.jqxGrid('removesort');
	    };
	    jqxGridComponent.prototype.sortby = function (dataField, sortOrder) {
	        this.host.jqxGrid('sortby', dataField, sortOrder);
	    };
	    jqxGridComponent.prototype.addgroup = function (dataField) {
	        this.host.jqxGrid('addgroup', dataField);
	    };
	    jqxGridComponent.prototype.cleargroups = function () {
	        this.host.jqxGrid('cleargroups');
	    };
	    jqxGridComponent.prototype.collapsegroup = function (group) {
	        this.host.jqxGrid('collapsegroup', group);
	    };
	    jqxGridComponent.prototype.collapseallgroups = function () {
	        this.host.jqxGrid('collapseallgroups');
	    };
	    jqxGridComponent.prototype.expandallgroups = function () {
	        this.host.jqxGrid('expandallgroups');
	    };
	    jqxGridComponent.prototype.expandgroup = function (group) {
	        this.host.jqxGrid('expandgroup', group);
	    };
	    jqxGridComponent.prototype.getrootgroupscount = function () {
	        return this.host.jqxGrid('getrootgroupscount');
	    };
	    jqxGridComponent.prototype.getgroup = function (groupIndex) {
	        return this.host.jqxGrid('getgroup', groupIndex);
	    };
	    jqxGridComponent.prototype.insertgroup = function (groupIndex, dataField) {
	        this.host.jqxGrid('insertgroup', groupIndex, dataField);
	    };
	    jqxGridComponent.prototype.iscolumngroupable = function () {
	        return this.host.jqxGrid('iscolumngroupable');
	    };
	    jqxGridComponent.prototype.removegroupat = function (groupIndex) {
	        this.host.jqxGrid('removegroupat', groupIndex);
	    };
	    jqxGridComponent.prototype.removegroup = function (dataField) {
	        this.host.jqxGrid('removegroup', dataField);
	    };
	    jqxGridComponent.prototype.addfilter = function (dataField, filterGroup, refreshGrid) {
	        this.host.jqxGrid('addfilter', dataField, filterGroup, refreshGrid);
	    };
	    jqxGridComponent.prototype.applyfilters = function () {
	        this.host.jqxGrid('applyfilters');
	    };
	    jqxGridComponent.prototype.clearfilters = function () {
	        this.host.jqxGrid('clearfilters');
	    };
	    jqxGridComponent.prototype.getfilterinformation = function () {
	        return this.host.jqxGrid('getfilterinformation');
	    };
	    jqxGridComponent.prototype.removefilter = function (dataField, refreshGrid) {
	        this.host.jqxGrid('removefilter', dataField, refreshGrid);
	    };
	    jqxGridComponent.prototype.refreshfilterrow = function () {
	        this.host.jqxGrid('refreshfilterrow');
	    };
	    jqxGridComponent.prototype.gotopage = function (pageNumber) {
	        this.host.jqxGrid('gotopage', pageNumber);
	    };
	    jqxGridComponent.prototype.gotoprevpage = function () {
	        this.host.jqxGrid('gotoprevpage');
	    };
	    jqxGridComponent.prototype.gotonextpage = function () {
	        this.host.jqxGrid('gotonextpage');
	    };
	    jqxGridComponent.prototype.addrow = function (rowIds, data, rowPosition) {
	        this.host.jqxGrid('addrow', rowIds, data, rowPosition);
	    };
	    jqxGridComponent.prototype.begincelledit = function (rowBoundIndex, dataField) {
	        this.host.jqxGrid('begincelledit', rowBoundIndex, dataField);
	    };
	    jqxGridComponent.prototype.beginrowedit = function (rowBoundIndex) {
	        this.host.jqxGrid('beginrowedit', rowBoundIndex);
	    };
	    jqxGridComponent.prototype.closemenu = function () {
	        this.host.jqxGrid('closemenu');
	    };
	    jqxGridComponent.prototype.deleterow = function (rowIds) {
	        this.host.jqxGrid('deleterow', rowIds);
	    };
	    jqxGridComponent.prototype.endcelledit = function (rowBoundIndex, dataField, confirmChanges) {
	        this.host.jqxGrid('endcelledit', rowBoundIndex, dataField, confirmChanges);
	    };
	    jqxGridComponent.prototype.endrowedit = function (rowBoundIndex, confirmChanges) {
	        this.host.jqxGrid('endrowedit', rowBoundIndex, confirmChanges);
	    };
	    jqxGridComponent.prototype.getcell = function (rowBoundIndex, datafield) {
	        return this.host.jqxGrid('getcell', rowBoundIndex, datafield);
	    };
	    jqxGridComponent.prototype.getcellatposition = function (left, top) {
	        return this.host.jqxGrid('getcellatposition', left, top);
	    };
	    jqxGridComponent.prototype.getcelltext = function (rowBoundIndex, dataField) {
	        return this.host.jqxGrid('getcelltext', rowBoundIndex, dataField);
	    };
	    jqxGridComponent.prototype.getcelltextbyid = function (rowID, dataField) {
	        return this.host.jqxGrid('getcelltextbyid', rowID, dataField);
	    };
	    jqxGridComponent.prototype.getcellvaluebyid = function (rowID, dataField) {
	        return this.host.jqxGrid('getcellvaluebyid', rowID, dataField);
	    };
	    jqxGridComponent.prototype.getcellvalue = function (rowBoundIndex, dataField) {
	        return this.host.jqxGrid('getcellvalue', rowBoundIndex, dataField);
	    };
	    jqxGridComponent.prototype.isBindingCompleted = function () {
	        return this.host.jqxGrid('isBindingCompleted');
	    };
	    jqxGridComponent.prototype.openmenu = function (dataField) {
	        this.host.jqxGrid('openmenu', dataField);
	    };
	    jqxGridComponent.prototype.setcellvalue = function (rowBoundIndex, dataField, value) {
	        this.host.jqxGrid('setcellvalue', rowBoundIndex, dataField, value);
	    };
	    jqxGridComponent.prototype.setcellvaluebyid = function (rowID, dataField, value) {
	        this.host.jqxGrid('setcellvaluebyid', rowID, dataField, value);
	    };
	    jqxGridComponent.prototype.showvalidationpopup = function (rowBoundIndex, dataField, validationMessage) {
	        this.host.jqxGrid('showvalidationpopup', rowBoundIndex, dataField, validationMessage);
	    };
	    jqxGridComponent.prototype.updaterow = function (rowIds, data) {
	        this.host.jqxGrid('updaterow', rowIds, data);
	    };
	    jqxGridComponent.prototype.clearselection = function () {
	        this.host.jqxGrid('clearselection');
	    };
	    jqxGridComponent.prototype.getselectedrowindex = function () {
	        return this.host.jqxGrid('getselectedrowindex');
	    };
	    jqxGridComponent.prototype.getselectedrowindexes = function () {
	        return this.host.jqxGrid('getselectedrowindexes');
	    };
	    jqxGridComponent.prototype.getselectedcell = function () {
	        return this.host.jqxGrid('getselectedcell');
	    };
	    jqxGridComponent.prototype.getselectedcells = function () {
	        return this.host.jqxGrid('getselectedcells');
	    };
	    jqxGridComponent.prototype.selectcell = function (rowBoundIndex, dataField) {
	        this.host.jqxGrid('selectcell', rowBoundIndex, dataField);
	    };
	    jqxGridComponent.prototype.selectallrows = function () {
	        this.host.jqxGrid('selectallrows');
	    };
	    jqxGridComponent.prototype.selectrow = function (rowBoundIndex) {
	        this.host.jqxGrid('selectrow', rowBoundIndex);
	    };
	    jqxGridComponent.prototype.unselectrow = function (rowBoundIndex) {
	        this.host.jqxGrid('unselectrow', rowBoundIndex);
	    };
	    jqxGridComponent.prototype.unselectcell = function (rowBoundIndex, dataField) {
	        this.host.jqxGrid('unselectcell', rowBoundIndex, dataField);
	    };
	    jqxGridComponent.prototype.getcolumnaggregateddata = function (dataField, aggregates) {
	        return this.host.jqxGrid('getcolumnaggregateddata', dataField, aggregates);
	    };
	    jqxGridComponent.prototype.refreshaggregates = function () {
	        this.host.jqxGrid('refreshaggregates');
	    };
	    jqxGridComponent.prototype.renderaggregates = function () {
	        this.host.jqxGrid('renderaggregates');
	    };
	    jqxGridComponent.prototype.exportdata = function (dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet) {
	        return this.host.jqxGrid('exportdata', dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet);
	    };
	    jqxGridComponent.prototype.getstate = function () {
	        return this.host.jqxGrid('getstate');
	    };
	    jqxGridComponent.prototype.loadstate = function (stateObject) {
	        this.host.jqxGrid('loadstate', stateObject);
	    };
	    jqxGridComponent.prototype.savestate = function () {
	        return this.host.jqxGrid('savestate');
	    };
	    jqxGridComponent.prototype.__wireEvents__ = function () {
	        var _this = this;
	        this.host.on('bindingcomplete', function (eventData) { _this.onBindingcomplete.emit(eventData); });
	        this.host.on('columnresized', function (eventData) { _this.onColumnresized.emit(eventData); });
	        this.host.on('columnreordered', function (eventData) { _this.onColumnreordered.emit(eventData); });
	        this.host.on('columnclick', function (eventData) { _this.onColumnclick.emit(eventData); });
	        this.host.on('cellclick', function (eventData) { _this.onCellclick.emit(eventData); });
	        this.host.on('celldoubleclick', function (eventData) { _this.onCelldoubleclick.emit(eventData); });
	        this.host.on('cellselect', function (eventData) { _this.onCellselect.emit(eventData); });
	        this.host.on('cellunselect', function (eventData) { _this.onCellunselect.emit(eventData); });
	        this.host.on('cellvaluechanged', function (eventData) { _this.onCellvaluechanged.emit(eventData); });
	        this.host.on('cellbeginedit', function (eventData) { _this.onCellbeginedit.emit(eventData); });
	        this.host.on('cellendedit', function (eventData) { _this.onCellendedit.emit(eventData); });
	        this.host.on('filter', function (eventData) { _this.onFilter.emit(eventData); });
	        this.host.on('groupschanged', function (eventData) { _this.onGroupschanged.emit(eventData); });
	        this.host.on('groupexpand', function (eventData) { _this.onGroupexpand.emit(eventData); });
	        this.host.on('groupcollapse', function (eventData) { _this.onGroupcollapse.emit(eventData); });
	        this.host.on('pagechanged', function (eventData) { _this.onPagechanged.emit(eventData); });
	        this.host.on('pagesizechanged', function (eventData) { _this.onPagesizechanged.emit(eventData); });
	        this.host.on('rowclick', function (eventData) { _this.onRowclick.emit(eventData); });
	        this.host.on('rowdoubleclick', function (eventData) { _this.onRowdoubleclick.emit(eventData); });
	        this.host.on('rowselect', function (eventData) { _this.onRowselect.emit(eventData); });
	        this.host.on('rowunselect', function (eventData) { _this.onRowunselect.emit(eventData); });
	        this.host.on('rowexpand', function (eventData) { _this.onRowexpand.emit(eventData); });
	        this.host.on('rowcollapse', function (eventData) { _this.onRowcollapse.emit(eventData); });
	        this.host.on('sort', function (eventData) { _this.onSort.emit(eventData); });
	    };
	    return jqxGridComponent;
	}()); //jqxGridComponent
	__decorate([
	    core_1.Input('altrows'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrAltrows", void 0);
	__decorate([
	    core_1.Input('altstart'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrAltstart", void 0);
	__decorate([
	    core_1.Input('altstep'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrAltstep", void 0);
	__decorate([
	    core_1.Input('autoshowloadelement'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrAutoshowloadelement", void 0);
	__decorate([
	    core_1.Input('autoshowfiltericon'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrAutoshowfiltericon", void 0);
	__decorate([
	    core_1.Input('autoshowcolumnsmenubutton'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrAutoshowcolumnsmenubutton", void 0);
	__decorate([
	    core_1.Input('clipboard'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrClipboard", void 0);
	__decorate([
	    core_1.Input('closeablegroups'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrCloseablegroups", void 0);
	__decorate([
	    core_1.Input('columnsmenuwidth'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrColumnsmenuwidth", void 0);
	__decorate([
	    core_1.Input('columnmenuopening'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrColumnmenuopening", void 0);
	__decorate([
	    core_1.Input('columnmenuclosing'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrColumnmenuclosing", void 0);
	__decorate([
	    core_1.Input('cellhover'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrCellhover", void 0);
	__decorate([
	    core_1.Input('enablekeyboarddelete'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrEnablekeyboarddelete", void 0);
	__decorate([
	    core_1.Input('enableellipsis'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrEnableellipsis", void 0);
	__decorate([
	    core_1.Input('enablemousewheel'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrEnablemousewheel", void 0);
	__decorate([
	    core_1.Input('enableanimations'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrEnableanimations", void 0);
	__decorate([
	    core_1.Input('enabletooltips'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrEnabletooltips", void 0);
	__decorate([
	    core_1.Input('enablehover'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrEnablehover", void 0);
	__decorate([
	    core_1.Input('enablebrowserselection'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrEnablebrowserselection", void 0);
	__decorate([
	    core_1.Input('everpresentrowposition'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrEverpresentrowposition", void 0);
	__decorate([
	    core_1.Input('everpresentrowheight'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrEverpresentrowheight", void 0);
	__decorate([
	    core_1.Input('everpresentrowactions'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrEverpresentrowactions", void 0);
	__decorate([
	    core_1.Input('everpresentrowactionsmode'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrEverpresentrowactionsmode", void 0);
	__decorate([
	    core_1.Input('filterrowheight'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrFilterrowheight", void 0);
	__decorate([
	    core_1.Input('filtermode'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrFiltermode", void 0);
	__decorate([
	    core_1.Input('groupsrenderer'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrGroupsrenderer", void 0);
	__decorate([
	    core_1.Input('groupcolumnrenderer'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrGroupcolumnrenderer", void 0);
	__decorate([
	    core_1.Input('groupsexpandedbydefault'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrGroupsexpandedbydefault", void 0);
	__decorate([
	    core_1.Input('handlekeyboardnavigation'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrHandlekeyboardnavigation", void 0);
	__decorate([
	    core_1.Input('pagerrenderer'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrPagerrenderer", void 0);
	__decorate([
	    core_1.Input('rtl'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrRtl", void 0);
	__decorate([
	    core_1.Input('showdefaultloadelement'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrShowdefaultloadelement", void 0);
	__decorate([
	    core_1.Input('showfiltercolumnbackground'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrShowfiltercolumnbackground", void 0);
	__decorate([
	    core_1.Input('showfiltermenuitems'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrShowfiltermenuitems", void 0);
	__decorate([
	    core_1.Input('showpinnedcolumnbackground'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrShowpinnedcolumnbackground", void 0);
	__decorate([
	    core_1.Input('showsortcolumnbackground'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrShowsortcolumnbackground", void 0);
	__decorate([
	    core_1.Input('showsortmenuitems'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrShowsortmenuitems", void 0);
	__decorate([
	    core_1.Input('showgroupmenuitems'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrShowgroupmenuitems", void 0);
	__decorate([
	    core_1.Input('showrowdetailscolumn'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrShowrowdetailscolumn", void 0);
	__decorate([
	    core_1.Input('showheader'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrShowheader", void 0);
	__decorate([
	    core_1.Input('showgroupsheader'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrShowgroupsheader", void 0);
	__decorate([
	    core_1.Input('showaggregates'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrShowaggregates", void 0);
	__decorate([
	    core_1.Input('showgroupaggregates'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrShowgroupaggregates", void 0);
	__decorate([
	    core_1.Input('showeverpresentrow'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrShoweverpresentrow", void 0);
	__decorate([
	    core_1.Input('showfilterrow'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrShowfilterrow", void 0);
	__decorate([
	    core_1.Input('showemptyrow'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrShowemptyrow", void 0);
	__decorate([
	    core_1.Input('showstatusbar'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrShowstatusbar", void 0);
	__decorate([
	    core_1.Input('statusbarheight'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrStatusbarheight", void 0);
	__decorate([
	    core_1.Input('showtoolbar'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrShowtoolbar", void 0);
	__decorate([
	    core_1.Input('selectionmode'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrSelectionmode", void 0);
	__decorate([
	    core_1.Input('theme'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrTheme", void 0);
	__decorate([
	    core_1.Input('toolbarheight'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrToolbarheight", void 0);
	__decorate([
	    core_1.Input('autoheight'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrAutoheight", void 0);
	__decorate([
	    core_1.Input('autorowheight'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrAutorowheight", void 0);
	__decorate([
	    core_1.Input('columnsheight'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrColumnsheight", void 0);
	__decorate([
	    core_1.Input('deferreddatafields'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrDeferreddatafields", void 0);
	__decorate([
	    core_1.Input('groupsheaderheight'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrGroupsheaderheight", void 0);
	__decorate([
	    core_1.Input('groupindentwidth'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrGroupindentwidth", void 0);
	__decorate([
	    core_1.Input('pagerheight'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrPagerheight", void 0);
	__decorate([
	    core_1.Input('rowsheight'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrRowsheight", void 0);
	__decorate([
	    core_1.Input('scrollbarsize'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrScrollbarsize", void 0);
	__decorate([
	    core_1.Input('scrollmode'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrScrollmode", void 0);
	__decorate([
	    core_1.Input('scrollfeedback'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrScrollfeedback", void 0);
	__decorate([
	    core_1.Input('autosavestate'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrAutosavestate", void 0);
	__decorate([
	    core_1.Input('autoloadstate'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrAutoloadstate", void 0);
	__decorate([
	    core_1.Input('columns'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrColumns", void 0);
	__decorate([
	    core_1.Input('columngroups'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrColumngroups", void 0);
	__decorate([
	    core_1.Input('columnsmenu'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrColumnsmenu", void 0);
	__decorate([
	    core_1.Input('columnsresize'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrColumnsresize", void 0);
	__decorate([
	    core_1.Input('columnsautoresize'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrColumnsautoresize", void 0);
	__decorate([
	    core_1.Input('columnsreorder'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrColumnsreorder", void 0);
	__decorate([
	    core_1.Input('disabled'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrDisabled", void 0);
	__decorate([
	    core_1.Input('editable'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrEditable", void 0);
	__decorate([
	    core_1.Input('editmode'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrEditmode", void 0);
	__decorate([
	    core_1.Input('filter'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrFilter", void 0);
	__decorate([
	    core_1.Input('filterable'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrFilterable", void 0);
	__decorate([
	    core_1.Input('groupable'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrGroupable", void 0);
	__decorate([
	    core_1.Input('groups'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrGroups", void 0);
	__decorate([
	    core_1.Input('horizontalscrollbarstep'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrHorizontalscrollbarstep", void 0);
	__decorate([
	    core_1.Input('horizontalscrollbarlargestep'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrHorizontalscrollbarlargestep", void 0);
	__decorate([
	    core_1.Input('initrowdetails'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrInitrowdetails", void 0);
	__decorate([
	    core_1.Input('keyboardnavigation'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrKeyboardnavigation", void 0);
	__decorate([
	    core_1.Input('pagesize'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrPagesize", void 0);
	__decorate([
	    core_1.Input('pagesizeoptions'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrPagesizeoptions", void 0);
	__decorate([
	    core_1.Input('pagermode'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrPagermode", void 0);
	__decorate([
	    core_1.Input('pagerbuttonscount'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrPagerbuttonscount", void 0);
	__decorate([
	    core_1.Input('pageable'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrPageable", void 0);
	__decorate([
	    core_1.Input('rowdetails'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrRowdetails", void 0);
	__decorate([
	    core_1.Input('rowdetailstemplate'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrRowdetailstemplate", void 0);
	__decorate([
	    core_1.Input('ready'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrReady", void 0);
	__decorate([
	    core_1.Input('rendered'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrRendered", void 0);
	__decorate([
	    core_1.Input('renderstatusbar'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrRenderstatusbar", void 0);
	__decorate([
	    core_1.Input('rendertoolbar'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrRendertoolbar", void 0);
	__decorate([
	    core_1.Input('rendergridrows'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrRendergridrows", void 0);
	__decorate([
	    core_1.Input('sortable'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrSortable", void 0);
	__decorate([
	    core_1.Input('selectedrowindex'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrSelectedrowindex", void 0);
	__decorate([
	    core_1.Input('selectedrowindexes'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrSelectedrowindexes", void 0);
	__decorate([
	    core_1.Input('source'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrSource", void 0);
	__decorate([
	    core_1.Input('sorttogglestates'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrSorttogglestates", void 0);
	__decorate([
	    core_1.Input('updatedelay'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrUpdatedelay", void 0);
	__decorate([
	    core_1.Input('virtualmode'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrVirtualmode", void 0);
	__decorate([
	    core_1.Input('verticalscrollbarstep'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrVerticalscrollbarstep", void 0);
	__decorate([
	    core_1.Input('verticalscrollbarlargestep'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrVerticalscrollbarlargestep", void 0);
	__decorate([
	    core_1.Input('width'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrWidth", void 0);
	__decorate([
	    core_1.Input('height'),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "attrHeight", void 0);
	__decorate([
	    core_1.Input('auto-create'),
	    __metadata("design:type", Boolean)
	], jqxGridComponent.prototype, "autoCreate", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onBindingcomplete", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onColumnresized", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onColumnreordered", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onColumnclick", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onCellclick", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onCelldoubleclick", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onCellselect", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onCellunselect", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onCellvaluechanged", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onCellbeginedit", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onCellendedit", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onFilter", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onGroupschanged", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onGroupexpand", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onGroupcollapse", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onPagechanged", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onPagesizechanged", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onRowclick", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onRowdoubleclick", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onRowselect", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onRowunselect", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onRowexpand", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onRowcollapse", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxGridComponent.prototype, "onSort", void 0);
	jqxGridComponent = __decorate([
	    core_1.Component({
	        selector: 'jqxGrid',
	        template: '<div><ng-content></ng-content></div>'
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef])
	], jqxGridComponent);
	exports.jqxGridComponent = jqxGridComponent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 58)))

/***/ },

/***/ 62:
/*!******************************************************************!*\
  !*** ./~/jqwidgets-framework/jqwidgets-ts/angular_jqxbuttons.ts ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/*
	jQWidgets v4.5.0 (2017-Jan)
	Copyright (c) 2011-2017 jQWidgets.
	License: http://jqwidgets.com/license/
	*/
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var jqxButtonComponent = (function () {
	    function jqxButtonComponent(containerElement) {
	        var _this = this;
	        this.autoCreate = true;
	        this.properties = ['delay', 'disabled', 'height', 'imgSrc', 'imgWidth', 'imgHeight', 'imgPosition', 'roundedCorners', 'rtl', 'textPosition', 'textImageRelation', 'theme', 'template', 'toggled', 'width', 'value'];
	        // jqxButtonComponent events
	        this.onClick = new core_1.EventEmitter();
	        this.elementRef = containerElement;
	        setTimeout(function () {
	            if (_this.autoCreate) {
	                _this.createComponent();
	            }
	        });
	    }
	    jqxButtonComponent.prototype.ngOnChanges = function (changes) {
	        if (this.host) {
	            for (var i = 0; i < this.properties.length; i++) {
	                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
	                var areEqual = void 0;
	                if (this[attrName]) {
	                    if (typeof this[attrName] === 'object') {
	                        if (this[attrName] instanceof Array) {
	                            areEqual = this.arraysEqual(this[attrName], this.host.jqxButton(this.properties[i]));
	                        }
	                        if (areEqual) {
	                            return false;
	                        }
	                        this.host.jqxButton(this.properties[i], this[attrName]);
	                        continue;
	                    }
	                    if (this[attrName] !== this.host.jqxButton(this.properties[i])) {
	                        this.host.jqxButton(this.properties[i], this[attrName]);
	                    }
	                }
	            }
	        }
	    };
	    jqxButtonComponent.prototype.arraysEqual = function (attrValue, hostValue) {
	        if (attrValue.length != hostValue.length) {
	            return false;
	        }
	        for (var i = 0; i < attrValue.length; i++) {
	            if (attrValue[i] !== hostValue[i]) {
	                return false;
	            }
	        }
	        return true;
	    };
	    jqxButtonComponent.prototype.manageAttributes = function () {
	        var options = {};
	        for (var i = 0; i < this.properties.length; i++) {
	            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
	            if (this[attrName] !== undefined) {
	                options[this.properties[i]] = this[attrName];
	            }
	        }
	        return options;
	    };
	    jqxButtonComponent.prototype.createComponent = function (options) {
	        if (options) {
	            $.extend(options, this.manageAttributes());
	        }
	        else {
	            options = this.manageAttributes();
	        }
	        this.host = $(this.elementRef.nativeElement.firstChild);
	        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxButton', options);
	        this.host = this.widgetObject['host'];
	        this.__wireEvents__();
	        this.__updateRect__();
	    };
	    jqxButtonComponent.prototype.createWidget = function (options) {
	        this.createComponent(options);
	    };
	    jqxButtonComponent.prototype.__updateRect__ = function () {
	        this.host.css({ width: this.attrWidth, height: this.attrHeight });
	    };
	    jqxButtonComponent.prototype.setOptions = function (options) {
	        this.host.jqxButton('setOptions', options);
	    };
	    // jqxButtonComponent properties
	    jqxButtonComponent.prototype.delay = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxButton('delay', arg);
	        }
	        else {
	            return this.host.jqxButton('delay');
	        }
	    };
	    jqxButtonComponent.prototype.disabled = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxButton('disabled', arg);
	        }
	        else {
	            return this.host.jqxButton('disabled');
	        }
	    };
	    jqxButtonComponent.prototype.height = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxButton('height', arg);
	        }
	        else {
	            return this.host.jqxButton('height');
	        }
	    };
	    jqxButtonComponent.prototype.imgSrc = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxButton('imgSrc', arg);
	        }
	        else {
	            return this.host.jqxButton('imgSrc');
	        }
	    };
	    jqxButtonComponent.prototype.imgWidth = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxButton('imgWidth', arg);
	        }
	        else {
	            return this.host.jqxButton('imgWidth');
	        }
	    };
	    jqxButtonComponent.prototype.imgHeight = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxButton('imgHeight', arg);
	        }
	        else {
	            return this.host.jqxButton('imgHeight');
	        }
	    };
	    jqxButtonComponent.prototype.imgPosition = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxButton('imgPosition', arg);
	        }
	        else {
	            return this.host.jqxButton('imgPosition');
	        }
	    };
	    jqxButtonComponent.prototype.roundedCorners = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxButton('roundedCorners', arg);
	        }
	        else {
	            return this.host.jqxButton('roundedCorners');
	        }
	    };
	    jqxButtonComponent.prototype.rtl = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxButton('rtl', arg);
	        }
	        else {
	            return this.host.jqxButton('rtl');
	        }
	    };
	    jqxButtonComponent.prototype.textPosition = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxButton('textPosition', arg);
	        }
	        else {
	            return this.host.jqxButton('textPosition');
	        }
	    };
	    jqxButtonComponent.prototype.textImageRelation = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxButton('textImageRelation', arg);
	        }
	        else {
	            return this.host.jqxButton('textImageRelation');
	        }
	    };
	    jqxButtonComponent.prototype.theme = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxButton('theme', arg);
	        }
	        else {
	            return this.host.jqxButton('theme');
	        }
	    };
	    jqxButtonComponent.prototype.template = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxButton('template', arg);
	        }
	        else {
	            return this.host.jqxButton('template');
	        }
	    };
	    jqxButtonComponent.prototype.toggled = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxButton('toggled', arg);
	        }
	        else {
	            return this.host.jqxButton('toggled');
	        }
	    };
	    jqxButtonComponent.prototype.width = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxButton('width', arg);
	        }
	        else {
	            return this.host.jqxButton('width');
	        }
	    };
	    jqxButtonComponent.prototype.value = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxButton('value', arg);
	        }
	        else {
	            return this.host.jqxButton('value');
	        }
	    };
	    // jqxButtonComponent functions
	    jqxButtonComponent.prototype.check = function () {
	        this.host.jqxButton('check');
	    };
	    jqxButtonComponent.prototype.destroy = function () {
	        this.host.jqxButton('destroy');
	    };
	    jqxButtonComponent.prototype.focus = function () {
	        this.host.jqxButton('focus');
	    };
	    jqxButtonComponent.prototype.render = function () {
	        this.host.jqxButton('render');
	    };
	    jqxButtonComponent.prototype.toggle = function () {
	        this.host.jqxButton('toggle');
	    };
	    jqxButtonComponent.prototype.unCheck = function () {
	        this.host.jqxButton('unCheck');
	    };
	    jqxButtonComponent.prototype.val = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxButton("val", arg);
	        }
	        else {
	            return this.host.jqxButton("val");
	        }
	    };
	    ;
	    jqxButtonComponent.prototype.__wireEvents__ = function () {
	        var _this = this;
	        this.host.on('click', function (eventData) { _this.onClick.emit(eventData); });
	    };
	    return jqxButtonComponent;
	}()); //jqxButtonComponent
	__decorate([
	    core_1.Input('delay'),
	    __metadata("design:type", Object)
	], jqxButtonComponent.prototype, "attrDelay", void 0);
	__decorate([
	    core_1.Input('disabled'),
	    __metadata("design:type", Object)
	], jqxButtonComponent.prototype, "attrDisabled", void 0);
	__decorate([
	    core_1.Input('imgSrc'),
	    __metadata("design:type", Object)
	], jqxButtonComponent.prototype, "attrImgSrc", void 0);
	__decorate([
	    core_1.Input('imgWidth'),
	    __metadata("design:type", Object)
	], jqxButtonComponent.prototype, "attrImgWidth", void 0);
	__decorate([
	    core_1.Input('imgHeight'),
	    __metadata("design:type", Object)
	], jqxButtonComponent.prototype, "attrImgHeight", void 0);
	__decorate([
	    core_1.Input('imgPosition'),
	    __metadata("design:type", Object)
	], jqxButtonComponent.prototype, "attrImgPosition", void 0);
	__decorate([
	    core_1.Input('roundedCorners'),
	    __metadata("design:type", Object)
	], jqxButtonComponent.prototype, "attrRoundedCorners", void 0);
	__decorate([
	    core_1.Input('rtl'),
	    __metadata("design:type", Object)
	], jqxButtonComponent.prototype, "attrRtl", void 0);
	__decorate([
	    core_1.Input('textPosition'),
	    __metadata("design:type", Object)
	], jqxButtonComponent.prototype, "attrTextPosition", void 0);
	__decorate([
	    core_1.Input('textImageRelation'),
	    __metadata("design:type", Object)
	], jqxButtonComponent.prototype, "attrTextImageRelation", void 0);
	__decorate([
	    core_1.Input('theme'),
	    __metadata("design:type", Object)
	], jqxButtonComponent.prototype, "attrTheme", void 0);
	__decorate([
	    core_1.Input('template'),
	    __metadata("design:type", Object)
	], jqxButtonComponent.prototype, "attrTemplate", void 0);
	__decorate([
	    core_1.Input('toggled'),
	    __metadata("design:type", Object)
	], jqxButtonComponent.prototype, "attrToggled", void 0);
	__decorate([
	    core_1.Input('value'),
	    __metadata("design:type", Object)
	], jqxButtonComponent.prototype, "attrValue", void 0);
	__decorate([
	    core_1.Input('width'),
	    __metadata("design:type", Object)
	], jqxButtonComponent.prototype, "attrWidth", void 0);
	__decorate([
	    core_1.Input('height'),
	    __metadata("design:type", Object)
	], jqxButtonComponent.prototype, "attrHeight", void 0);
	__decorate([
	    core_1.Input('auto-create'),
	    __metadata("design:type", Boolean)
	], jqxButtonComponent.prototype, "autoCreate", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxButtonComponent.prototype, "onClick", void 0);
	jqxButtonComponent = __decorate([
	    core_1.Component({
	        selector: 'jqxButton',
	        template: '<button><ng-content></ng-content></button>'
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef])
	], jqxButtonComponent);
	exports.jqxButtonComponent = jqxButtonComponent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 58)))

/***/ },

/***/ 63:
/*!*****************************************************************!*\
  !*** ./~/jqwidgets-framework/jqwidgets-ts/angular_jqxwindow.ts ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/*
	jQWidgets v4.5.0 (2017-Jan)
	Copyright (c) 2011-2017 jQWidgets.
	License: http://jqwidgets.com/license/
	*/
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var jqxWindowComponent = (function () {
	    function jqxWindowComponent(containerElement) {
	        var _this = this;
	        this.autoCreate = true;
	        this.properties = ['autoOpen', 'animationType', 'collapsed', 'collapseAnimationDuration', 'content', 'closeAnimationDuration', 'closeButtonSize', 'closeButtonAction', 'cancelButton', 'dragArea', 'draggable', 'disabled', 'height', 'initContent', 'isModal', 'keyboardCloseKey', 'keyboardNavigation', 'minHeight', 'maxHeight', 'minWidth', 'maxWidth', 'modalOpacity', 'modalZIndex', 'modalBackgroundZIndex', 'okButton', 'position', 'rtl', 'resizable', 'showAnimationDuration', 'showCloseButton', 'showCollapseButton', 'theme', 'title', 'width', 'zIndex'];
	        // jqxWindowComponent events
	        this.onClose = new core_1.EventEmitter();
	        this.onCollapse = new core_1.EventEmitter();
	        this.onCreated = new core_1.EventEmitter();
	        this.onExpand = new core_1.EventEmitter();
	        this.onMoving = new core_1.EventEmitter();
	        this.onMoved = new core_1.EventEmitter();
	        this.onOpen = new core_1.EventEmitter();
	        this.onResizing = new core_1.EventEmitter();
	        this.onResized = new core_1.EventEmitter();
	        this.elementRef = containerElement;
	        setTimeout(function () {
	            if (_this.autoCreate) {
	                _this.createComponent();
	            }
	        });
	    }
	    jqxWindowComponent.prototype.ngOnChanges = function (changes) {
	        if (this.host) {
	            for (var i = 0; i < this.properties.length; i++) {
	                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
	                var areEqual = void 0;
	                if (this[attrName]) {
	                    if (typeof this[attrName] === 'object') {
	                        if (this[attrName] instanceof Array) {
	                            areEqual = this.arraysEqual(this[attrName], this.host.jqxWindow(this.properties[i]));
	                        }
	                        if (areEqual) {
	                            return false;
	                        }
	                        this.host.jqxWindow(this.properties[i], this[attrName]);
	                        continue;
	                    }
	                    if (this[attrName] !== this.host.jqxWindow(this.properties[i])) {
	                        this.host.jqxWindow(this.properties[i], this[attrName]);
	                    }
	                }
	            }
	        }
	    };
	    jqxWindowComponent.prototype.arraysEqual = function (attrValue, hostValue) {
	        if (attrValue.length != hostValue.length) {
	            return false;
	        }
	        for (var i = 0; i < attrValue.length; i++) {
	            if (attrValue[i] !== hostValue[i]) {
	                return false;
	            }
	        }
	        return true;
	    };
	    jqxWindowComponent.prototype.manageAttributes = function () {
	        var options = {};
	        for (var i = 0; i < this.properties.length; i++) {
	            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
	            if (this[attrName] !== undefined) {
	                options[this.properties[i]] = this[attrName];
	            }
	        }
	        return options;
	    };
	    jqxWindowComponent.prototype.createComponent = function (options) {
	        if (options) {
	            $.extend(options, this.manageAttributes());
	        }
	        else {
	            options = this.manageAttributes();
	        }
	        this.host = $(this.elementRef.nativeElement.firstChild);
	        this.__wireEvents__();
	        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxWindow', options);
	        this.__updateRect__();
	    };
	    jqxWindowComponent.prototype.createWidget = function (options) {
	        this.createComponent(options);
	    };
	    jqxWindowComponent.prototype.__updateRect__ = function () {
	        this.host.css({ width: this.attrWidth, height: this.attrHeight });
	    };
	    jqxWindowComponent.prototype.setOptions = function (options) {
	        this.host.jqxWindow('setOptions', options);
	    };
	    // jqxWindowComponent properties
	    jqxWindowComponent.prototype.autoOpen = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('autoOpen', arg);
	        }
	        else {
	            return this.host.jqxWindow('autoOpen');
	        }
	    };
	    jqxWindowComponent.prototype.animationType = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('animationType', arg);
	        }
	        else {
	            return this.host.jqxWindow('animationType');
	        }
	    };
	    jqxWindowComponent.prototype.collapsed = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('collapsed', arg);
	        }
	        else {
	            return this.host.jqxWindow('collapsed');
	        }
	    };
	    jqxWindowComponent.prototype.collapseAnimationDuration = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('collapseAnimationDuration', arg);
	        }
	        else {
	            return this.host.jqxWindow('collapseAnimationDuration');
	        }
	    };
	    jqxWindowComponent.prototype.content = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('content', arg);
	        }
	        else {
	            return this.host.jqxWindow('content');
	        }
	    };
	    jqxWindowComponent.prototype.closeAnimationDuration = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('closeAnimationDuration', arg);
	        }
	        else {
	            return this.host.jqxWindow('closeAnimationDuration');
	        }
	    };
	    jqxWindowComponent.prototype.closeButtonSize = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('closeButtonSize', arg);
	        }
	        else {
	            return this.host.jqxWindow('closeButtonSize');
	        }
	    };
	    jqxWindowComponent.prototype.closeButtonAction = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('closeButtonAction', arg);
	        }
	        else {
	            return this.host.jqxWindow('closeButtonAction');
	        }
	    };
	    jqxWindowComponent.prototype.cancelButton = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('cancelButton', arg);
	        }
	        else {
	            return this.host.jqxWindow('cancelButton');
	        }
	    };
	    jqxWindowComponent.prototype.dragArea = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('dragArea', arg);
	        }
	        else {
	            return this.host.jqxWindow('dragArea');
	        }
	    };
	    jqxWindowComponent.prototype.draggable = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('draggable', arg);
	        }
	        else {
	            return this.host.jqxWindow('draggable');
	        }
	    };
	    jqxWindowComponent.prototype.disabled = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('disabled', arg);
	        }
	        else {
	            return this.host.jqxWindow('disabled');
	        }
	    };
	    jqxWindowComponent.prototype.height = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('height', arg);
	        }
	        else {
	            return this.host.jqxWindow('height');
	        }
	    };
	    jqxWindowComponent.prototype.initContent = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('initContent', arg);
	        }
	        else {
	            return this.host.jqxWindow('initContent');
	        }
	    };
	    jqxWindowComponent.prototype.isModal = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('isModal', arg);
	        }
	        else {
	            return this.host.jqxWindow('isModal');
	        }
	    };
	    jqxWindowComponent.prototype.keyboardCloseKey = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('keyboardCloseKey', arg);
	        }
	        else {
	            return this.host.jqxWindow('keyboardCloseKey');
	        }
	    };
	    jqxWindowComponent.prototype.keyboardNavigation = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('keyboardNavigation', arg);
	        }
	        else {
	            return this.host.jqxWindow('keyboardNavigation');
	        }
	    };
	    jqxWindowComponent.prototype.minHeight = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('minHeight', arg);
	        }
	        else {
	            return this.host.jqxWindow('minHeight');
	        }
	    };
	    jqxWindowComponent.prototype.maxHeight = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('maxHeight', arg);
	        }
	        else {
	            return this.host.jqxWindow('maxHeight');
	        }
	    };
	    jqxWindowComponent.prototype.minWidth = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('minWidth', arg);
	        }
	        else {
	            return this.host.jqxWindow('minWidth');
	        }
	    };
	    jqxWindowComponent.prototype.maxWidth = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('maxWidth', arg);
	        }
	        else {
	            return this.host.jqxWindow('maxWidth');
	        }
	    };
	    jqxWindowComponent.prototype.modalOpacity = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('modalOpacity', arg);
	        }
	        else {
	            return this.host.jqxWindow('modalOpacity');
	        }
	    };
	    jqxWindowComponent.prototype.modalZIndex = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('modalZIndex', arg);
	        }
	        else {
	            return this.host.jqxWindow('modalZIndex');
	        }
	    };
	    jqxWindowComponent.prototype.modalBackgroundZIndex = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('modalBackgroundZIndex', arg);
	        }
	        else {
	            return this.host.jqxWindow('modalBackgroundZIndex');
	        }
	    };
	    jqxWindowComponent.prototype.okButton = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('okButton', arg);
	        }
	        else {
	            return this.host.jqxWindow('okButton');
	        }
	    };
	    jqxWindowComponent.prototype.position = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('position', arg);
	        }
	        else {
	            return this.host.jqxWindow('position');
	        }
	    };
	    jqxWindowComponent.prototype.rtl = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('rtl', arg);
	        }
	        else {
	            return this.host.jqxWindow('rtl');
	        }
	    };
	    jqxWindowComponent.prototype.resizable = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('resizable', arg);
	        }
	        else {
	            return this.host.jqxWindow('resizable');
	        }
	    };
	    jqxWindowComponent.prototype.showAnimationDuration = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('showAnimationDuration', arg);
	        }
	        else {
	            return this.host.jqxWindow('showAnimationDuration');
	        }
	    };
	    jqxWindowComponent.prototype.showCloseButton = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('showCloseButton', arg);
	        }
	        else {
	            return this.host.jqxWindow('showCloseButton');
	        }
	    };
	    jqxWindowComponent.prototype.showCollapseButton = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('showCollapseButton', arg);
	        }
	        else {
	            return this.host.jqxWindow('showCollapseButton');
	        }
	    };
	    jqxWindowComponent.prototype.theme = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('theme', arg);
	        }
	        else {
	            return this.host.jqxWindow('theme');
	        }
	    };
	    jqxWindowComponent.prototype.title = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('title', arg);
	        }
	        else {
	            return this.host.jqxWindow('title');
	        }
	    };
	    jqxWindowComponent.prototype.width = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('width', arg);
	        }
	        else {
	            return this.host.jqxWindow('width');
	        }
	    };
	    jqxWindowComponent.prototype.zIndex = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxWindow('zIndex', arg);
	        }
	        else {
	            return this.host.jqxWindow('zIndex');
	        }
	    };
	    // jqxWindowComponent functions
	    jqxWindowComponent.prototype.bringToFront = function () {
	        this.host.jqxWindow('bringToFront');
	    };
	    jqxWindowComponent.prototype.close = function () {
	        this.host.jqxWindow('close');
	    };
	    jqxWindowComponent.prototype.collapse = function () {
	        this.host.jqxWindow('collapse');
	    };
	    jqxWindowComponent.prototype.closeAll = function () {
	        this.host.jqxWindow('closeAll');
	    };
	    jqxWindowComponent.prototype.disable = function () {
	        this.host.jqxWindow('disable');
	    };
	    jqxWindowComponent.prototype.destroy = function () {
	        this.host.jqxWindow('destroy');
	    };
	    jqxWindowComponent.prototype.enable = function () {
	        this.host.jqxWindow('enable');
	    };
	    jqxWindowComponent.prototype.expand = function () {
	        this.host.jqxWindow('expand');
	    };
	    jqxWindowComponent.prototype.focus = function () {
	        this.host.jqxWindow('focus');
	    };
	    jqxWindowComponent.prototype.isOpen = function () {
	        return this.host.jqxWindow('isOpen');
	    };
	    jqxWindowComponent.prototype.move = function (top, left) {
	        this.host.jqxWindow('move', top, left);
	    };
	    jqxWindowComponent.prototype.open = function () {
	        this.host.jqxWindow('open');
	    };
	    jqxWindowComponent.prototype.resize = function (top, left) {
	        this.host.jqxWindow('resize', top, left);
	    };
	    jqxWindowComponent.prototype.setTitle = function (title) {
	        this.host.jqxWindow('setTitle', title);
	    };
	    jqxWindowComponent.prototype.setContent = function (content) {
	        this.host.jqxWindow('setContent', content);
	    };
	    jqxWindowComponent.prototype.__wireEvents__ = function () {
	        var _this = this;
	        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
	        this.host.on('collapse', function (eventData) { _this.onCollapse.emit(eventData); });
	        this.host.on('created', function (eventData) { _this.onCreated.emit(eventData); });
	        this.host.on('expand', function (eventData) { _this.onExpand.emit(eventData); });
	        this.host.on('moving', function (eventData) { _this.onMoving.emit(eventData); });
	        this.host.on('moved', function (eventData) { _this.onMoved.emit(eventData); });
	        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
	        this.host.on('resizing', function (eventData) { _this.onResizing.emit(eventData); });
	        this.host.on('resized', function (eventData) { _this.onResized.emit(eventData); });
	    };
	    return jqxWindowComponent;
	}()); //jqxWindowComponent
	__decorate([
	    core_1.Input('autoOpen'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrAutoOpen", void 0);
	__decorate([
	    core_1.Input('animationType'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrAnimationType", void 0);
	__decorate([
	    core_1.Input('collapsed'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrCollapsed", void 0);
	__decorate([
	    core_1.Input('collapseAnimationDuration'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrCollapseAnimationDuration", void 0);
	__decorate([
	    core_1.Input('content'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrContent", void 0);
	__decorate([
	    core_1.Input('closeAnimationDuration'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrCloseAnimationDuration", void 0);
	__decorate([
	    core_1.Input('closeButtonSize'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrCloseButtonSize", void 0);
	__decorate([
	    core_1.Input('closeButtonAction'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrCloseButtonAction", void 0);
	__decorate([
	    core_1.Input('cancelButton'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrCancelButton", void 0);
	__decorate([
	    core_1.Input('dragArea'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrDragArea", void 0);
	__decorate([
	    core_1.Input('draggable'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrDraggable", void 0);
	__decorate([
	    core_1.Input('disabled'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrDisabled", void 0);
	__decorate([
	    core_1.Input('initContent'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrInitContent", void 0);
	__decorate([
	    core_1.Input('isModal'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrIsModal", void 0);
	__decorate([
	    core_1.Input('keyboardCloseKey'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrKeyboardCloseKey", void 0);
	__decorate([
	    core_1.Input('keyboardNavigation'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrKeyboardNavigation", void 0);
	__decorate([
	    core_1.Input('minHeight'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrMinHeight", void 0);
	__decorate([
	    core_1.Input('maxHeight'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrMaxHeight", void 0);
	__decorate([
	    core_1.Input('minWidth'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrMinWidth", void 0);
	__decorate([
	    core_1.Input('maxWidth'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrMaxWidth", void 0);
	__decorate([
	    core_1.Input('modalOpacity'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrModalOpacity", void 0);
	__decorate([
	    core_1.Input('modalZIndex'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrModalZIndex", void 0);
	__decorate([
	    core_1.Input('modalBackgroundZIndex'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrModalBackgroundZIndex", void 0);
	__decorate([
	    core_1.Input('okButton'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrOkButton", void 0);
	__decorate([
	    core_1.Input('position'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrPosition", void 0);
	__decorate([
	    core_1.Input('rtl'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrRtl", void 0);
	__decorate([
	    core_1.Input('resizable'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrResizable", void 0);
	__decorate([
	    core_1.Input('showAnimationDuration'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrShowAnimationDuration", void 0);
	__decorate([
	    core_1.Input('showCloseButton'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrShowCloseButton", void 0);
	__decorate([
	    core_1.Input('showCollapseButton'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrShowCollapseButton", void 0);
	__decorate([
	    core_1.Input('theme'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrTheme", void 0);
	__decorate([
	    core_1.Input('title'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrTitle", void 0);
	__decorate([
	    core_1.Input('zIndex'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrZIndex", void 0);
	__decorate([
	    core_1.Input('width'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrWidth", void 0);
	__decorate([
	    core_1.Input('height'),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "attrHeight", void 0);
	__decorate([
	    core_1.Input('auto-create'),
	    __metadata("design:type", Boolean)
	], jqxWindowComponent.prototype, "autoCreate", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "onClose", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "onCollapse", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "onCreated", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "onExpand", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "onMoving", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "onMoved", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "onOpen", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "onResizing", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], jqxWindowComponent.prototype, "onResized", void 0);
	jqxWindowComponent = __decorate([
	    core_1.Component({
	        selector: 'jqxWindow',
	        template: '<div><ng-content></ng-content></div>'
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef])
	], jqxWindowComponent);
	exports.jqxWindowComponent = jqxWindowComponent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 58)))

/***/ },

/***/ 64:
/*!**********************************************************************!*\
  !*** ./~/jqwidgets-framework/jqwidgets-ts/angular_jqxdataadapter.ts ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/*
	jQWidgets v4.5.0 (2017-Jan)
	Copyright (c) 2011-2017 jQWidgets.
	License: http://jqwidgets.com/license/
	*/
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var jqxDataAdapterComponent = (function () {
	    function jqxDataAdapterComponent(containerElement) {
	        var _this = this;
	        this.autoCreate = true;
	        this.properties = ['columnDelimiter', 'datafields', 'data', 'datatype', 'type', 'id', 'localdata', 'mapChar', 'rowDelimiter', 'root', 'record', 'url', 'async', 'autoBind', 'beforeSend', 'beforeLoadComplete', 'contentType', 'formatData', 'loadError', 'loadComplete', 'loadServerData', 'processData', 'beginUpdate', 'dataBind', 'endUpdate', 'formatDate', 'formatNumber', 'getRecordsHierarchy', 'getGroupedRecords', 'getAggregatedData', 'records'];
	        this.elementRef = containerElement;
	        setTimeout(function () {
	            if (_this.autoCreate) {
	                _this.createComponent();
	            }
	        });
	    }
	    jqxDataAdapterComponent.prototype.ngOnChanges = function (changes) {
	        if (this.host) {
	            for (var i = 0; i < this.properties.length; i++) {
	                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
	                var areEqual = void 0;
	                if (this[attrName]) {
	                    if (typeof this[attrName] === 'object') {
	                        if (this[attrName] instanceof Array) {
	                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDataAdapter(this.properties[i]));
	                        }
	                        if (areEqual) {
	                            return false;
	                        }
	                        this.host.jqxDataAdapter(this.properties[i], this[attrName]);
	                        continue;
	                    }
	                    if (this[attrName] !== this.host.jqxDataAdapter(this.properties[i])) {
	                        this.host.jqxDataAdapter(this.properties[i], this[attrName]);
	                    }
	                }
	            }
	        }
	    };
	    jqxDataAdapterComponent.prototype.arraysEqual = function (attrValue, hostValue) {
	        if (attrValue.length != hostValue.length) {
	            return false;
	        }
	        for (var i = 0; i < attrValue.length; i++) {
	            if (attrValue[i] !== hostValue[i]) {
	                return false;
	            }
	        }
	        return true;
	    };
	    jqxDataAdapterComponent.prototype.manageAttributes = function () {
	        var options = {};
	        for (var i = 0; i < this.properties.length; i++) {
	            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
	            if (this[attrName] !== undefined) {
	                options[this.properties[i]] = this[attrName];
	            }
	        }
	        return options;
	    };
	    jqxDataAdapterComponent.prototype.createComponent = function (options) {
	        if (options) {
	            $.extend(options, this.manageAttributes());
	        }
	        else {
	            options = this.manageAttributes();
	        }
	        this.host = $(this.elementRef.nativeElement.firstChild);
	        this.__wireEvents__();
	        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDataAdapter', options);
	        this.__updateRect__();
	    };
	    jqxDataAdapterComponent.prototype.createWidget = function (options) {
	        this.createComponent(options);
	    };
	    jqxDataAdapterComponent.prototype.__updateRect__ = function () {
	        this.host.css({ width: this.attrWidth, height: this.attrHeight });
	    };
	    jqxDataAdapterComponent.prototype.setOptions = function (options) {
	        this.host.jqxDataAdapter('setOptions', options);
	    };
	    // jqxDataAdapterComponent properties
	    jqxDataAdapterComponent.prototype.columnDelimiter = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('columnDelimiter', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('columnDelimiter');
	        }
	    };
	    jqxDataAdapterComponent.prototype.datafields = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('datafields', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('datafields');
	        }
	    };
	    jqxDataAdapterComponent.prototype.data = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('data', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('data');
	        }
	    };
	    jqxDataAdapterComponent.prototype.datatype = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('datatype', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('datatype');
	        }
	    };
	    jqxDataAdapterComponent.prototype.type = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('type', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('type');
	        }
	    };
	    jqxDataAdapterComponent.prototype.id = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('id', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('id');
	        }
	    };
	    jqxDataAdapterComponent.prototype.localdata = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('localdata', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('localdata');
	        }
	    };
	    jqxDataAdapterComponent.prototype.mapChar = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('mapChar', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('mapChar');
	        }
	    };
	    jqxDataAdapterComponent.prototype.rowDelimiter = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('rowDelimiter', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('rowDelimiter');
	        }
	    };
	    jqxDataAdapterComponent.prototype.root = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('root', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('root');
	        }
	    };
	    jqxDataAdapterComponent.prototype.record = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('record', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('record');
	        }
	    };
	    jqxDataAdapterComponent.prototype.url = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('url', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('url');
	        }
	    };
	    jqxDataAdapterComponent.prototype.async = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('async', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('async');
	        }
	    };
	    jqxDataAdapterComponent.prototype.autoBind = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('autoBind', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('autoBind');
	        }
	    };
	    jqxDataAdapterComponent.prototype.beforeSend = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('beforeSend', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('beforeSend');
	        }
	    };
	    jqxDataAdapterComponent.prototype.beforeLoadComplete = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('beforeLoadComplete', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('beforeLoadComplete');
	        }
	    };
	    jqxDataAdapterComponent.prototype.contentType = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('contentType', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('contentType');
	        }
	    };
	    jqxDataAdapterComponent.prototype.formatData = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('formatData', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('formatData');
	        }
	    };
	    jqxDataAdapterComponent.prototype.loadError = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('loadError', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('loadError');
	        }
	    };
	    jqxDataAdapterComponent.prototype.loadComplete = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('loadComplete', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('loadComplete');
	        }
	    };
	    jqxDataAdapterComponent.prototype.loadServerData = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('loadServerData', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('loadServerData');
	        }
	    };
	    jqxDataAdapterComponent.prototype.processData = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('processData', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('processData');
	        }
	    };
	    jqxDataAdapterComponent.prototype.beginUpdate = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('beginUpdate', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('beginUpdate');
	        }
	    };
	    jqxDataAdapterComponent.prototype.dataBind = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('dataBind', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('dataBind');
	        }
	    };
	    jqxDataAdapterComponent.prototype.endUpdate = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('endUpdate', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('endUpdate');
	        }
	    };
	    jqxDataAdapterComponent.prototype.formatDate = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('formatDate', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('formatDate');
	        }
	    };
	    jqxDataAdapterComponent.prototype.formatNumber = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('formatNumber', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('formatNumber');
	        }
	    };
	    jqxDataAdapterComponent.prototype.getRecordsHierarchy = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('getRecordsHierarchy', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('getRecordsHierarchy');
	        }
	    };
	    jqxDataAdapterComponent.prototype.getGroupedRecords = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('getGroupedRecords', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('getGroupedRecords');
	        }
	    };
	    jqxDataAdapterComponent.prototype.getAggregatedData = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('getAggregatedData', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('getAggregatedData');
	        }
	    };
	    jqxDataAdapterComponent.prototype.records = function (arg) {
	        if (arg !== undefined) {
	            this.host.jqxDataAdapter('records', arg);
	        }
	        else {
	            return this.host.jqxDataAdapter('records');
	        }
	    };
	    // jqxDataAdapterComponent functions
	    // jqxDataAdapterComponent events
	    jqxDataAdapterComponent.prototype.__wireEvents__ = function () {
	    };
	    return jqxDataAdapterComponent;
	}()); //jqxDataAdapterComponent
	__decorate([
	    core_1.Input('columnDelimiter'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrColumnDelimiter", void 0);
	__decorate([
	    core_1.Input('datafields'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrDatafields", void 0);
	__decorate([
	    core_1.Input('data'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrData", void 0);
	__decorate([
	    core_1.Input('datatype'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrDatatype", void 0);
	__decorate([
	    core_1.Input('type'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrType", void 0);
	__decorate([
	    core_1.Input('id'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrId", void 0);
	__decorate([
	    core_1.Input('localdata'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrLocaldata", void 0);
	__decorate([
	    core_1.Input('mapChar'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrMapChar", void 0);
	__decorate([
	    core_1.Input('rowDelimiter'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrRowDelimiter", void 0);
	__decorate([
	    core_1.Input('root'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrRoot", void 0);
	__decorate([
	    core_1.Input('record'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrRecord", void 0);
	__decorate([
	    core_1.Input('url'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrUrl", void 0);
	__decorate([
	    core_1.Input('async'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrAsync", void 0);
	__decorate([
	    core_1.Input('autoBind'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrAutoBind", void 0);
	__decorate([
	    core_1.Input('beforeSend'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrBeforeSend", void 0);
	__decorate([
	    core_1.Input('beforeLoadComplete'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrBeforeLoadComplete", void 0);
	__decorate([
	    core_1.Input('contentType'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrContentType", void 0);
	__decorate([
	    core_1.Input('formatData'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrFormatData", void 0);
	__decorate([
	    core_1.Input('loadError'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrLoadError", void 0);
	__decorate([
	    core_1.Input('loadComplete'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrLoadComplete", void 0);
	__decorate([
	    core_1.Input('loadServerData'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrLoadServerData", void 0);
	__decorate([
	    core_1.Input('processData'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrProcessData", void 0);
	__decorate([
	    core_1.Input('beginUpdate'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrBeginUpdate", void 0);
	__decorate([
	    core_1.Input('dataBind'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrDataBind", void 0);
	__decorate([
	    core_1.Input('endUpdate'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrEndUpdate", void 0);
	__decorate([
	    core_1.Input('formatDate'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrFormatDate", void 0);
	__decorate([
	    core_1.Input('formatNumber'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrFormatNumber", void 0);
	__decorate([
	    core_1.Input('getRecordsHierarchy'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrGetRecordsHierarchy", void 0);
	__decorate([
	    core_1.Input('getGroupedRecords'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrGetGroupedRecords", void 0);
	__decorate([
	    core_1.Input('getAggregatedData'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrGetAggregatedData", void 0);
	__decorate([
	    core_1.Input('records'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrRecords", void 0);
	__decorate([
	    core_1.Input('width'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrWidth", void 0);
	__decorate([
	    core_1.Input('height'),
	    __metadata("design:type", Object)
	], jqxDataAdapterComponent.prototype, "attrHeight", void 0);
	__decorate([
	    core_1.Input('auto-create'),
	    __metadata("design:type", Boolean)
	], jqxDataAdapterComponent.prototype, "autoCreate", void 0);
	jqxDataAdapterComponent = __decorate([
	    core_1.Component({
	        selector: 'jqxDataAdapter',
	        template: '<div><ng-content></ng-content></div>'
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef])
	], jqxDataAdapterComponent);
	exports.jqxDataAdapterComponent = jqxDataAdapterComponent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 58)))

/***/ }

});
//# sourceMappingURL=app-ffd531ca.bundle.js.map