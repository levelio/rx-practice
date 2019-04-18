// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__assign = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __exportStar(m, exports) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
},{}],"../../node_modules/rxjs/_esm5/internal/util/isFunction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = isFunction;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
  return typeof x === 'function';
}
},{}],"../../node_modules/rxjs/_esm5/internal/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
  Promise: undefined,

  set useDeprecatedSynchronousErrorHandling(value) {
    if (value) {
      var error =
      /*@__PURE__*/
      new Error();
      /*@__PURE__*/

      console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
    } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
      /*@__PURE__*/
      console.log('RxJS: Back to a better error behavior. Thank you. <3');
    }

    _enable_super_gross_mode_that_will_cause_bad_things = value;
  },

  get useDeprecatedSynchronousErrorHandling() {
    return _enable_super_gross_mode_that_will_cause_bad_things;
  }

};
exports.config = config;
},{}],"../../node_modules/rxjs/_esm5/internal/util/hostReportError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hostReportError = hostReportError;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
  setTimeout(function () {
    throw err;
  });
}
},{}],"../../node_modules/rxjs/_esm5/internal/Observer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = void 0;

var _config = require("./config");

var _hostReportError = require("./util/hostReportError");

/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
var empty = {
  closed: true,
  next: function (value) {},
  error: function (err) {
    if (_config.config.useDeprecatedSynchronousErrorHandling) {
      throw err;
    } else {
      (0, _hostReportError.hostReportError)(err);
    }
  },
  complete: function () {}
};
exports.empty = empty;
},{"./config":"../../node_modules/rxjs/_esm5/internal/config.js","./util/hostReportError":"../../node_modules/rxjs/_esm5/internal/util/hostReportError.js"}],"../../node_modules/rxjs/_esm5/internal/util/isArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = Array.isArray || function (x) {
  return x && typeof x.length === 'number';
};

exports.isArray = isArray;
},{}],"../../node_modules/rxjs/_esm5/internal/util/isObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = isObject;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
  return x !== null && typeof x === 'object';
}
},{}],"../../node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsubscriptionError = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function UnsubscriptionErrorImpl(errors) {
  Error.call(this);
  this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
    return i + 1 + ") " + err.toString();
  }).join('\n  ') : '';
  this.name = 'UnsubscriptionError';
  this.errors = errors;
  return this;
}

UnsubscriptionErrorImpl.prototype =
/*@__PURE__*/
Object.create(Error.prototype);
var UnsubscriptionError = UnsubscriptionErrorImpl;
exports.UnsubscriptionError = UnsubscriptionError;
},{}],"../../node_modules/rxjs/_esm5/internal/Subscription.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subscription = void 0;

var _isArray = require("./util/isArray");

var _isObject = require("./util/isObject");

var _isFunction = require("./util/isFunction");

var _UnsubscriptionError = require("./util/UnsubscriptionError");

/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */
var Subscription =
/*@__PURE__*/
function () {
  function Subscription(unsubscribe) {
    this.closed = false;
    this._parent = null;
    this._parents = null;
    this._subscriptions = null;

    if (unsubscribe) {
      this._unsubscribe = unsubscribe;
    }
  }

  Subscription.prototype.unsubscribe = function () {
    var hasErrors = false;
    var errors;

    if (this.closed) {
      return;
    }

    var _a = this,
        _parent = _a._parent,
        _parents = _a._parents,
        _unsubscribe = _a._unsubscribe,
        _subscriptions = _a._subscriptions;

    this.closed = true;
    this._parent = null;
    this._parents = null;
    this._subscriptions = null;
    var index = -1;
    var len = _parents ? _parents.length : 0;

    while (_parent) {
      _parent.remove(this);

      _parent = ++index < len && _parents[index] || null;
    }

    if ((0, _isFunction.isFunction)(_unsubscribe)) {
      try {
        _unsubscribe.call(this);
      } catch (e) {
        hasErrors = true;
        errors = e instanceof _UnsubscriptionError.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
      }
    }

    if ((0, _isArray.isArray)(_subscriptions)) {
      index = -1;
      len = _subscriptions.length;

      while (++index < len) {
        var sub = _subscriptions[index];

        if ((0, _isObject.isObject)(sub)) {
          try {
            sub.unsubscribe();
          } catch (e) {
            hasErrors = true;
            errors = errors || [];

            if (e instanceof _UnsubscriptionError.UnsubscriptionError) {
              errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
            } else {
              errors.push(e);
            }
          }
        }
      }
    }

    if (hasErrors) {
      throw new _UnsubscriptionError.UnsubscriptionError(errors);
    }
  };

  Subscription.prototype.add = function (teardown) {
    var subscription = teardown;

    switch (typeof teardown) {
      case 'function':
        subscription = new Subscription(teardown);

      case 'object':
        if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
          return subscription;
        } else if (this.closed) {
          subscription.unsubscribe();
          return subscription;
        } else if (!(subscription instanceof Subscription)) {
          var tmp = subscription;
          subscription = new Subscription();
          subscription._subscriptions = [tmp];
        }

        break;

      default:
        {
          if (!teardown) {
            return Subscription.EMPTY;
          }

          throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
    }

    if (subscription._addParent(this)) {
      var subscriptions = this._subscriptions;

      if (subscriptions) {
        subscriptions.push(subscription);
      } else {
        this._subscriptions = [subscription];
      }
    }

    return subscription;
  };

  Subscription.prototype.remove = function (subscription) {
    var subscriptions = this._subscriptions;

    if (subscriptions) {
      var subscriptionIndex = subscriptions.indexOf(subscription);

      if (subscriptionIndex !== -1) {
        subscriptions.splice(subscriptionIndex, 1);
      }
    }
  };

  Subscription.prototype._addParent = function (parent) {
    var _a = this,
        _parent = _a._parent,
        _parents = _a._parents;

    if (_parent === parent) {
      return false;
    } else if (!_parent) {
      this._parent = parent;
      return true;
    } else if (!_parents) {
      this._parents = [parent];
      return true;
    } else if (_parents.indexOf(parent) === -1) {
      _parents.push(parent);

      return true;
    }

    return false;
  };

  Subscription.EMPTY = function (empty) {
    empty.closed = true;
    return empty;
  }(new Subscription());

  return Subscription;
}();

exports.Subscription = Subscription;

function flattenUnsubscriptionErrors(errors) {
  return errors.reduce(function (errs, err) {
    return errs.concat(err instanceof _UnsubscriptionError.UnsubscriptionError ? err.errors : err);
  }, []);
}
},{"./util/isArray":"../../node_modules/rxjs/_esm5/internal/util/isArray.js","./util/isObject":"../../node_modules/rxjs/_esm5/internal/util/isObject.js","./util/isFunction":"../../node_modules/rxjs/_esm5/internal/util/isFunction.js","./util/UnsubscriptionError":"../../node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js"}],"../../node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$$rxSubscriber = exports.rxSubscriber = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = typeof Symbol === 'function' ?
/*@__PURE__*/
Symbol('rxSubscriber') : '@@rxSubscriber_' +
/*@__PURE__*/
Math.random();
exports.rxSubscriber = rxSubscriber;
var $$rxSubscriber = rxSubscriber;
exports.$$rxSubscriber = $$rxSubscriber;
},{}],"../../node_modules/rxjs/_esm5/internal/Subscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SafeSubscriber = exports.Subscriber = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _isFunction = require("./util/isFunction");

var _Observer = require("./Observer");

var _Subscription = require("./Subscription");

var _rxSubscriber = require("../internal/symbol/rxSubscriber");

var _config = require("./config");

var _hostReportError = require("./util/hostReportError");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */
var Subscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(Subscriber, _super);

  function Subscriber(destinationOrNext, error, complete) {
    var _this = _super.call(this) || this;

    _this.syncErrorValue = null;
    _this.syncErrorThrown = false;
    _this.syncErrorThrowable = false;
    _this.isStopped = false;

    switch (arguments.length) {
      case 0:
        _this.destination = _Observer.empty;
        break;

      case 1:
        if (!destinationOrNext) {
          _this.destination = _Observer.empty;
          break;
        }

        if (typeof destinationOrNext === 'object') {
          if (destinationOrNext instanceof Subscriber) {
            _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
            _this.destination = destinationOrNext;
            destinationOrNext.add(_this);
          } else {
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext);
          }

          break;
        }

      default:
        _this.syncErrorThrowable = true;
        _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
        break;
    }

    return _this;
  }

  Subscriber.prototype[_rxSubscriber.rxSubscriber] = function () {
    return this;
  };

  Subscriber.create = function (next, error, complete) {
    var subscriber = new Subscriber(next, error, complete);
    subscriber.syncErrorThrowable = false;
    return subscriber;
  };

  Subscriber.prototype.next = function (value) {
    if (!this.isStopped) {
      this._next(value);
    }
  };

  Subscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      this.isStopped = true;

      this._error(err);
    }
  };

  Subscriber.prototype.complete = function () {
    if (!this.isStopped) {
      this.isStopped = true;

      this._complete();
    }
  };

  Subscriber.prototype.unsubscribe = function () {
    if (this.closed) {
      return;
    }

    this.isStopped = true;

    _super.prototype.unsubscribe.call(this);
  };

  Subscriber.prototype._next = function (value) {
    this.destination.next(value);
  };

  Subscriber.prototype._error = function (err) {
    this.destination.error(err);
    this.unsubscribe();
  };

  Subscriber.prototype._complete = function () {
    this.destination.complete();
    this.unsubscribe();
  };

  Subscriber.prototype._unsubscribeAndRecycle = function () {
    var _a = this,
        _parent = _a._parent,
        _parents = _a._parents;

    this._parent = null;
    this._parents = null;
    this.unsubscribe();
    this.closed = false;
    this.isStopped = false;
    this._parent = _parent;
    this._parents = _parents;
    return this;
  };

  return Subscriber;
}(_Subscription.Subscription);

exports.Subscriber = Subscriber;

var SafeSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SafeSubscriber, _super);

  function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
    var _this = _super.call(this) || this;

    _this._parentSubscriber = _parentSubscriber;
    var next;
    var context = _this;

    if ((0, _isFunction.isFunction)(observerOrNext)) {
      next = observerOrNext;
    } else if (observerOrNext) {
      next = observerOrNext.next;
      error = observerOrNext.error;
      complete = observerOrNext.complete;

      if (observerOrNext !== _Observer.empty) {
        context = Object.create(observerOrNext);

        if ((0, _isFunction.isFunction)(context.unsubscribe)) {
          _this.add(context.unsubscribe.bind(context));
        }

        context.unsubscribe = _this.unsubscribe.bind(_this);
      }
    }

    _this._context = context;
    _this._next = next;
    _this._error = error;
    _this._complete = complete;
    return _this;
  }

  SafeSubscriber.prototype.next = function (value) {
    if (!this.isStopped && this._next) {
      var _parentSubscriber = this._parentSubscriber;

      if (!_config.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
        this.__tryOrUnsub(this._next, value);
      } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      var _parentSubscriber = this._parentSubscriber;
      var useDeprecatedSynchronousErrorHandling = _config.config.useDeprecatedSynchronousErrorHandling;

      if (this._error) {
        if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(this._error, err);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, this._error, err);

          this.unsubscribe();
        }
      } else if (!_parentSubscriber.syncErrorThrowable) {
        this.unsubscribe();

        if (useDeprecatedSynchronousErrorHandling) {
          throw err;
        }

        (0, _hostReportError.hostReportError)(err);
      } else {
        if (useDeprecatedSynchronousErrorHandling) {
          _parentSubscriber.syncErrorValue = err;
          _parentSubscriber.syncErrorThrown = true;
        } else {
          (0, _hostReportError.hostReportError)(err);
        }

        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.complete = function () {
    var _this = this;

    if (!this.isStopped) {
      var _parentSubscriber = this._parentSubscriber;

      if (this._complete) {
        var wrappedComplete = function () {
          return _this._complete.call(_this._context);
        };

        if (!_config.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(wrappedComplete);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, wrappedComplete);

          this.unsubscribe();
        }
      } else {
        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
    try {
      fn.call(this._context, value);
    } catch (err) {
      this.unsubscribe();

      if (_config.config.useDeprecatedSynchronousErrorHandling) {
        throw err;
      } else {
        (0, _hostReportError.hostReportError)(err);
      }
    }
  };

  SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
    if (!_config.config.useDeprecatedSynchronousErrorHandling) {
      throw new Error('bad call');
    }

    try {
      fn.call(this._context, value);
    } catch (err) {
      if (_config.config.useDeprecatedSynchronousErrorHandling) {
        parent.syncErrorValue = err;
        parent.syncErrorThrown = true;
        return true;
      } else {
        (0, _hostReportError.hostReportError)(err);
        return true;
      }
    }

    return false;
  };

  SafeSubscriber.prototype._unsubscribe = function () {
    var _parentSubscriber = this._parentSubscriber;
    this._context = null;
    this._parentSubscriber = null;

    _parentSubscriber.unsubscribe();
  };

  return SafeSubscriber;
}(Subscriber);

exports.SafeSubscriber = SafeSubscriber;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./util/isFunction":"../../node_modules/rxjs/_esm5/internal/util/isFunction.js","./Observer":"../../node_modules/rxjs/_esm5/internal/Observer.js","./Subscription":"../../node_modules/rxjs/_esm5/internal/Subscription.js","../internal/symbol/rxSubscriber":"../../node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js","./config":"../../node_modules/rxjs/_esm5/internal/config.js","./util/hostReportError":"../../node_modules/rxjs/_esm5/internal/util/hostReportError.js"}],"../../node_modules/rxjs/_esm5/internal/util/canReportError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canReportError = canReportError;

var _Subscriber = require("../Subscriber");

/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
function canReportError(observer) {
  while (observer) {
    var _a = observer,
        closed_1 = _a.closed,
        destination = _a.destination,
        isStopped = _a.isStopped;

    if (closed_1 || isStopped) {
      return false;
    } else if (destination && destination instanceof _Subscriber.Subscriber) {
      observer = destination;
    } else {
      observer = null;
    }
  }

  return true;
}
},{"../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/util/toSubscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toSubscriber = toSubscriber;

var _Subscriber = require("../Subscriber");

var _rxSubscriber = require("../symbol/rxSubscriber");

var _Observer = require("../Observer");

/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
function toSubscriber(nextOrObserver, error, complete) {
  if (nextOrObserver) {
    if (nextOrObserver instanceof _Subscriber.Subscriber) {
      return nextOrObserver;
    }

    if (nextOrObserver[_rxSubscriber.rxSubscriber]) {
      return nextOrObserver[_rxSubscriber.rxSubscriber]();
    }
  }

  if (!nextOrObserver && !error && !complete) {
    return new _Subscriber.Subscriber(_Observer.empty);
  }

  return new _Subscriber.Subscriber(nextOrObserver, error, complete);
}
},{"../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","../symbol/rxSubscriber":"../../node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js","../Observer":"../../node_modules/rxjs/_esm5/internal/Observer.js"}],"../../node_modules/rxjs/_esm5/internal/symbol/observable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observable = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';
exports.observable = observable;
},{}],"../../node_modules/rxjs/_esm5/internal/util/noop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noop = noop;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function noop() {}
},{}],"../../node_modules/rxjs/_esm5/internal/util/pipe.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pipe = pipe;
exports.pipeFromArray = pipeFromArray;

var _noop = require("./noop");

/** PURE_IMPORTS_START _noop PURE_IMPORTS_END */
function pipe() {
  var fns = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }

  return pipeFromArray(fns);
}

function pipeFromArray(fns) {
  if (!fns) {
    return _noop.noop;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return function piped(input) {
    return fns.reduce(function (prev, fn) {
      return fn(prev);
    }, input);
  };
}
},{"./noop":"../../node_modules/rxjs/_esm5/internal/util/noop.js"}],"../../node_modules/rxjs/_esm5/internal/Observable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Observable = void 0;

var _canReportError = require("./util/canReportError");

var _toSubscriber = require("./util/toSubscriber");

var _observable = require("../internal/symbol/observable");

var _pipe = require("./util/pipe");

var _config = require("./config");

/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_internal_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */
var Observable =
/*@__PURE__*/
function () {
  function Observable(subscribe) {
    this._isScalar = false;

    if (subscribe) {
      this._subscribe = subscribe;
    }
  }

  Observable.prototype.lift = function (operator) {
    var observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  };

  Observable.prototype.subscribe = function (observerOrNext, error, complete) {
    var operator = this.operator;
    var sink = (0, _toSubscriber.toSubscriber)(observerOrNext, error, complete);

    if (operator) {
      sink.add(operator.call(sink, this.source));
    } else {
      sink.add(this.source || _config.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
    }

    if (_config.config.useDeprecatedSynchronousErrorHandling) {
      if (sink.syncErrorThrowable) {
        sink.syncErrorThrowable = false;

        if (sink.syncErrorThrown) {
          throw sink.syncErrorValue;
        }
      }
    }

    return sink;
  };

  Observable.prototype._trySubscribe = function (sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      if (_config.config.useDeprecatedSynchronousErrorHandling) {
        sink.syncErrorThrown = true;
        sink.syncErrorValue = err;
      }

      if ((0, _canReportError.canReportError)(sink)) {
        sink.error(err);
      } else {
        console.warn(err);
      }
    }
  };

  Observable.prototype.forEach = function (next, promiseCtor) {
    var _this = this;

    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var subscription;
      subscription = _this.subscribe(function (value) {
        try {
          next(value);
        } catch (err) {
          reject(err);

          if (subscription) {
            subscription.unsubscribe();
          }
        }
      }, reject, resolve);
    });
  };

  Observable.prototype._subscribe = function (subscriber) {
    var source = this.source;
    return source && source.subscribe(subscriber);
  };

  Observable.prototype[_observable.observable] = function () {
    return this;
  };

  Observable.prototype.pipe = function () {
    var operations = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }

    if (operations.length === 0) {
      return this;
    }

    return (0, _pipe.pipeFromArray)(operations)(this);
  };

  Observable.prototype.toPromise = function (promiseCtor) {
    var _this = this;

    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var value;

      _this.subscribe(function (x) {
        return value = x;
      }, function (err) {
        return reject(err);
      }, function () {
        return resolve(value);
      });
    });
  };

  Observable.create = function (subscribe) {
    return new Observable(subscribe);
  };

  return Observable;
}();

exports.Observable = Observable;

function getPromiseCtor(promiseCtor) {
  if (!promiseCtor) {
    promiseCtor = _config.config.Promise || Promise;
  }

  if (!promiseCtor) {
    throw new Error('no Promise impl found');
  }

  return promiseCtor;
}
},{"./util/canReportError":"../../node_modules/rxjs/_esm5/internal/util/canReportError.js","./util/toSubscriber":"../../node_modules/rxjs/_esm5/internal/util/toSubscriber.js","../internal/symbol/observable":"../../node_modules/rxjs/_esm5/internal/symbol/observable.js","./util/pipe":"../../node_modules/rxjs/_esm5/internal/util/pipe.js","./config":"../../node_modules/rxjs/_esm5/internal/config.js"}],"../../node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectUnsubscribedError = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function ObjectUnsubscribedErrorImpl() {
  Error.call(this);
  this.message = 'object unsubscribed';
  this.name = 'ObjectUnsubscribedError';
  return this;
}

ObjectUnsubscribedErrorImpl.prototype =
/*@__PURE__*/
Object.create(Error.prototype);
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
},{}],"../../node_modules/rxjs/_esm5/internal/SubjectSubscription.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubjectSubscription = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscription = require("./Subscription");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
var SubjectSubscription =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SubjectSubscription, _super);

  function SubjectSubscription(subject, subscriber) {
    var _this = _super.call(this) || this;

    _this.subject = subject;
    _this.subscriber = subscriber;
    _this.closed = false;
    return _this;
  }

  SubjectSubscription.prototype.unsubscribe = function () {
    if (this.closed) {
      return;
    }

    this.closed = true;
    var subject = this.subject;
    var observers = subject.observers;
    this.subject = null;

    if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
      return;
    }

    var subscriberIndex = observers.indexOf(this.subscriber);

    if (subscriberIndex !== -1) {
      observers.splice(subscriberIndex, 1);
    }
  };

  return SubjectSubscription;
}(_Subscription.Subscription);

exports.SubjectSubscription = SubjectSubscription;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./Subscription":"../../node_modules/rxjs/_esm5/internal/Subscription.js"}],"../../node_modules/rxjs/_esm5/internal/Subject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnonymousSubject = exports.Subject = exports.SubjectSubscriber = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Observable = require("./Observable");

var _Subscriber = require("./Subscriber");

var _Subscription = require("./Subscription");

var _ObjectUnsubscribedError = require("./util/ObjectUnsubscribedError");

var _SubjectSubscription = require("./SubjectSubscription");

var _rxSubscriber = require("../internal/symbol/rxSubscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */
var SubjectSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SubjectSubscriber, _super);

  function SubjectSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    return _this;
  }

  return SubjectSubscriber;
}(_Subscriber.Subscriber);

exports.SubjectSubscriber = SubjectSubscriber;

var Subject =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(Subject, _super);

  function Subject() {
    var _this = _super.call(this) || this;

    _this.observers = [];
    _this.closed = false;
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }

  Subject.prototype[_rxSubscriber.rxSubscriber] = function () {
    return new SubjectSubscriber(this);
  };

  Subject.prototype.lift = function (operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };

  Subject.prototype.next = function (value) {
    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    }

    if (!this.isStopped) {
      var observers = this.observers;
      var len = observers.length;
      var copy = observers.slice();

      for (var i = 0; i < len; i++) {
        copy[i].next(value);
      }
    }
  };

  Subject.prototype.error = function (err) {
    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    }

    this.hasError = true;
    this.thrownError = err;
    this.isStopped = true;
    var observers = this.observers;
    var len = observers.length;
    var copy = observers.slice();

    for (var i = 0; i < len; i++) {
      copy[i].error(err);
    }

    this.observers.length = 0;
  };

  Subject.prototype.complete = function () {
    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    }

    this.isStopped = true;
    var observers = this.observers;
    var len = observers.length;
    var copy = observers.slice();

    for (var i = 0; i < len; i++) {
      copy[i].complete();
    }

    this.observers.length = 0;
  };

  Subject.prototype.unsubscribe = function () {
    this.isStopped = true;
    this.closed = true;
    this.observers = null;
  };

  Subject.prototype._trySubscribe = function (subscriber) {
    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    } else {
      return _super.prototype._trySubscribe.call(this, subscriber);
    }
  };

  Subject.prototype._subscribe = function (subscriber) {
    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    } else if (this.hasError) {
      subscriber.error(this.thrownError);
      return _Subscription.Subscription.EMPTY;
    } else if (this.isStopped) {
      subscriber.complete();
      return _Subscription.Subscription.EMPTY;
    } else {
      this.observers.push(subscriber);
      return new _SubjectSubscription.SubjectSubscription(this, subscriber);
    }
  };

  Subject.prototype.asObservable = function () {
    var observable = new _Observable.Observable();
    observable.source = this;
    return observable;
  };

  Subject.create = function (destination, source) {
    return new AnonymousSubject(destination, source);
  };

  return Subject;
}(_Observable.Observable);

exports.Subject = Subject;

var AnonymousSubject =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AnonymousSubject, _super);

  function AnonymousSubject(destination, source) {
    var _this = _super.call(this) || this;

    _this.destination = destination;
    _this.source = source;
    return _this;
  }

  AnonymousSubject.prototype.next = function (value) {
    var destination = this.destination;

    if (destination && destination.next) {
      destination.next(value);
    }
  };

  AnonymousSubject.prototype.error = function (err) {
    var destination = this.destination;

    if (destination && destination.error) {
      this.destination.error(err);
    }
  };

  AnonymousSubject.prototype.complete = function () {
    var destination = this.destination;

    if (destination && destination.complete) {
      this.destination.complete();
    }
  };

  AnonymousSubject.prototype._subscribe = function (subscriber) {
    var source = this.source;

    if (source) {
      return this.source.subscribe(subscriber);
    } else {
      return _Subscription.Subscription.EMPTY;
    }
  };

  return AnonymousSubject;
}(Subject);

exports.AnonymousSubject = AnonymousSubject;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","./Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","./Subscription":"../../node_modules/rxjs/_esm5/internal/Subscription.js","./util/ObjectUnsubscribedError":"../../node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js","./SubjectSubscription":"../../node_modules/rxjs/_esm5/internal/SubjectSubscription.js","../internal/symbol/rxSubscriber":"../../node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js"}],"../../node_modules/rxjs/_esm5/internal/operators/refCount.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refCount = refCount;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function refCount() {
  return function refCountOperatorFunction(source) {
    return source.lift(new RefCountOperator(source));
  };
}

var RefCountOperator =
/*@__PURE__*/
function () {
  function RefCountOperator(connectable) {
    this.connectable = connectable;
  }

  RefCountOperator.prototype.call = function (subscriber, source) {
    var connectable = this.connectable;
    connectable._refCount++;
    var refCounter = new RefCountSubscriber(subscriber, connectable);
    var subscription = source.subscribe(refCounter);

    if (!refCounter.closed) {
      refCounter.connection = connectable.connect();
    }

    return subscription;
  };

  return RefCountOperator;
}();

var RefCountSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(RefCountSubscriber, _super);

  function RefCountSubscriber(destination, connectable) {
    var _this = _super.call(this, destination) || this;

    _this.connectable = connectable;
    return _this;
  }

  RefCountSubscriber.prototype._unsubscribe = function () {
    var connectable = this.connectable;

    if (!connectable) {
      this.connection = null;
      return;
    }

    this.connectable = null;
    var refCount = connectable._refCount;

    if (refCount <= 0) {
      this.connection = null;
      return;
    }

    connectable._refCount = refCount - 1;

    if (refCount > 1) {
      this.connection = null;
      return;
    }

    var connection = this.connection;
    var sharedConnection = connectable._connection;
    this.connection = null;

    if (sharedConnection && (!connection || sharedConnection === connection)) {
      sharedConnection.unsubscribe();
    }
  };

  return RefCountSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectableObservableDescriptor = exports.ConnectableObservable = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("../Subject");

var _Observable = require("../Observable");

var _Subscriber = require("../Subscriber");

var _Subscription = require("../Subscription");

var _refCount = require("../operators/refCount");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */
var ConnectableObservable =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ConnectableObservable, _super);

  function ConnectableObservable(source, subjectFactory) {
    var _this = _super.call(this) || this;

    _this.source = source;
    _this.subjectFactory = subjectFactory;
    _this._refCount = 0;
    _this._isComplete = false;
    return _this;
  }

  ConnectableObservable.prototype._subscribe = function (subscriber) {
    return this.getSubject().subscribe(subscriber);
  };

  ConnectableObservable.prototype.getSubject = function () {
    var subject = this._subject;

    if (!subject || subject.isStopped) {
      this._subject = this.subjectFactory();
    }

    return this._subject;
  };

  ConnectableObservable.prototype.connect = function () {
    var connection = this._connection;

    if (!connection) {
      this._isComplete = false;
      connection = this._connection = new _Subscription.Subscription();
      connection.add(this.source.subscribe(new ConnectableSubscriber(this.getSubject(), this)));

      if (connection.closed) {
        this._connection = null;
        connection = _Subscription.Subscription.EMPTY;
      } else {
        this._connection = connection;
      }
    }

    return connection;
  };

  ConnectableObservable.prototype.refCount = function () {
    return (0, _refCount.refCount)()(this);
  };

  return ConnectableObservable;
}(_Observable.Observable);

exports.ConnectableObservable = ConnectableObservable;
var connectableProto = ConnectableObservable.prototype;
var connectableObservableDescriptor = {
  operator: {
    value: null
  },
  _refCount: {
    value: 0,
    writable: true
  },
  _subject: {
    value: null,
    writable: true
  },
  _connection: {
    value: null,
    writable: true
  },
  _subscribe: {
    value: connectableProto._subscribe
  },
  _isComplete: {
    value: connectableProto._isComplete,
    writable: true
  },
  getSubject: {
    value: connectableProto.getSubject
  },
  connect: {
    value: connectableProto.connect
  },
  refCount: {
    value: connectableProto.refCount
  }
};
exports.connectableObservableDescriptor = connectableObservableDescriptor;

var ConnectableSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ConnectableSubscriber, _super);

  function ConnectableSubscriber(destination, connectable) {
    var _this = _super.call(this, destination) || this;

    _this.connectable = connectable;
    return _this;
  }

  ConnectableSubscriber.prototype._error = function (err) {
    this._unsubscribe();

    _super.prototype._error.call(this, err);
  };

  ConnectableSubscriber.prototype._complete = function () {
    this.connectable._isComplete = true;

    this._unsubscribe();

    _super.prototype._complete.call(this);
  };

  ConnectableSubscriber.prototype._unsubscribe = function () {
    var connectable = this.connectable;

    if (connectable) {
      this.connectable = null;
      var connection = connectable._connection;
      connectable._refCount = 0;
      connectable._subject = null;
      connectable._connection = null;

      if (connection) {
        connection.unsubscribe();
      }
    }
  };

  return ConnectableSubscriber;
}(_Subject.SubjectSubscriber);

var RefCountOperator =
/*@__PURE__*/
function () {
  function RefCountOperator(connectable) {
    this.connectable = connectable;
  }

  RefCountOperator.prototype.call = function (subscriber, source) {
    var connectable = this.connectable;
    connectable._refCount++;
    var refCounter = new RefCountSubscriber(subscriber, connectable);
    var subscription = source.subscribe(refCounter);

    if (!refCounter.closed) {
      refCounter.connection = connectable.connect();
    }

    return subscription;
  };

  return RefCountOperator;
}();

var RefCountSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(RefCountSubscriber, _super);

  function RefCountSubscriber(destination, connectable) {
    var _this = _super.call(this, destination) || this;

    _this.connectable = connectable;
    return _this;
  }

  RefCountSubscriber.prototype._unsubscribe = function () {
    var connectable = this.connectable;

    if (!connectable) {
      this.connection = null;
      return;
    }

    this.connectable = null;
    var refCount = connectable._refCount;

    if (refCount <= 0) {
      this.connection = null;
      return;
    }

    connectable._refCount = refCount - 1;

    if (refCount > 1) {
      this.connection = null;
      return;
    }

    var connection = this.connection;
    var sharedConnection = connectable._connection;
    this.connection = null;

    if (sharedConnection && (!connection || sharedConnection === connection)) {
      sharedConnection.unsubscribe();
    }
  };

  return RefCountSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subject":"../../node_modules/rxjs/_esm5/internal/Subject.js","../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","../Subscription":"../../node_modules/rxjs/_esm5/internal/Subscription.js","../operators/refCount":"../../node_modules/rxjs/_esm5/internal/operators/refCount.js"}],"../../node_modules/rxjs/_esm5/internal/operators/groupBy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupBy = groupBy;
exports.GroupedObservable = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _Subscription = require("../Subscription");

var _Observable = require("../Observable");

var _Subject = require("../Subject");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_Subscription,_Observable,_Subject PURE_IMPORTS_END */
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
  return function (source) {
    return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
  };
}

var GroupByOperator =
/*@__PURE__*/
function () {
  function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
    this.keySelector = keySelector;
    this.elementSelector = elementSelector;
    this.durationSelector = durationSelector;
    this.subjectSelector = subjectSelector;
  }

  GroupByOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
  };

  return GroupByOperator;
}();

var GroupBySubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(GroupBySubscriber, _super);

  function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
    var _this = _super.call(this, destination) || this;

    _this.keySelector = keySelector;
    _this.elementSelector = elementSelector;
    _this.durationSelector = durationSelector;
    _this.subjectSelector = subjectSelector;
    _this.groups = null;
    _this.attemptedToUnsubscribe = false;
    _this.count = 0;
    return _this;
  }

  GroupBySubscriber.prototype._next = function (value) {
    var key;

    try {
      key = this.keySelector(value);
    } catch (err) {
      this.error(err);
      return;
    }

    this._group(value, key);
  };

  GroupBySubscriber.prototype._group = function (value, key) {
    var groups = this.groups;

    if (!groups) {
      groups = this.groups = new Map();
    }

    var group = groups.get(key);
    var element;

    if (this.elementSelector) {
      try {
        element = this.elementSelector(value);
      } catch (err) {
        this.error(err);
      }
    } else {
      element = value;
    }

    if (!group) {
      group = this.subjectSelector ? this.subjectSelector() : new _Subject.Subject();
      groups.set(key, group);
      var groupedObservable = new GroupedObservable(key, group, this);
      this.destination.next(groupedObservable);

      if (this.durationSelector) {
        var duration = void 0;

        try {
          duration = this.durationSelector(new GroupedObservable(key, group));
        } catch (err) {
          this.error(err);
          return;
        }

        this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
      }
    }

    if (!group.closed) {
      group.next(element);
    }
  };

  GroupBySubscriber.prototype._error = function (err) {
    var groups = this.groups;

    if (groups) {
      groups.forEach(function (group, key) {
        group.error(err);
      });
      groups.clear();
    }

    this.destination.error(err);
  };

  GroupBySubscriber.prototype._complete = function () {
    var groups = this.groups;

    if (groups) {
      groups.forEach(function (group, key) {
        group.complete();
      });
      groups.clear();
    }

    this.destination.complete();
  };

  GroupBySubscriber.prototype.removeGroup = function (key) {
    this.groups.delete(key);
  };

  GroupBySubscriber.prototype.unsubscribe = function () {
    if (!this.closed) {
      this.attemptedToUnsubscribe = true;

      if (this.count === 0) {
        _super.prototype.unsubscribe.call(this);
      }
    }
  };

  return GroupBySubscriber;
}(_Subscriber.Subscriber);

var GroupDurationSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(GroupDurationSubscriber, _super);

  function GroupDurationSubscriber(key, group, parent) {
    var _this = _super.call(this, group) || this;

    _this.key = key;
    _this.group = group;
    _this.parent = parent;
    return _this;
  }

  GroupDurationSubscriber.prototype._next = function (value) {
    this.complete();
  };

  GroupDurationSubscriber.prototype._unsubscribe = function () {
    var _a = this,
        parent = _a.parent,
        key = _a.key;

    this.key = this.parent = null;

    if (parent) {
      parent.removeGroup(key);
    }
  };

  return GroupDurationSubscriber;
}(_Subscriber.Subscriber);

var GroupedObservable =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(GroupedObservable, _super);

  function GroupedObservable(key, groupSubject, refCountSubscription) {
    var _this = _super.call(this) || this;

    _this.key = key;
    _this.groupSubject = groupSubject;
    _this.refCountSubscription = refCountSubscription;
    return _this;
  }

  GroupedObservable.prototype._subscribe = function (subscriber) {
    var subscription = new _Subscription.Subscription();

    var _a = this,
        refCountSubscription = _a.refCountSubscription,
        groupSubject = _a.groupSubject;

    if (refCountSubscription && !refCountSubscription.closed) {
      subscription.add(new InnerRefCountSubscription(refCountSubscription));
    }

    subscription.add(groupSubject.subscribe(subscriber));
    return subscription;
  };

  return GroupedObservable;
}(_Observable.Observable);

exports.GroupedObservable = GroupedObservable;

var InnerRefCountSubscription =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(InnerRefCountSubscription, _super);

  function InnerRefCountSubscription(parent) {
    var _this = _super.call(this) || this;

    _this.parent = parent;
    parent.count++;
    return _this;
  }

  InnerRefCountSubscription.prototype.unsubscribe = function () {
    var parent = this.parent;

    if (!parent.closed && !this.closed) {
      _super.prototype.unsubscribe.call(this);

      parent.count -= 1;

      if (parent.count === 0 && parent.attemptedToUnsubscribe) {
        parent.unsubscribe();
      }
    }
  };

  return InnerRefCountSubscription;
}(_Subscription.Subscription);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","../Subscription":"../../node_modules/rxjs/_esm5/internal/Subscription.js","../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","../Subject":"../../node_modules/rxjs/_esm5/internal/Subject.js"}],"../../node_modules/rxjs/_esm5/internal/BehaviorSubject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BehaviorSubject = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("./Subject");

var _ObjectUnsubscribedError = require("./util/ObjectUnsubscribedError");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */
var BehaviorSubject =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(BehaviorSubject, _super);

  function BehaviorSubject(_value) {
    var _this = _super.call(this) || this;

    _this._value = _value;
    return _this;
  }

  Object.defineProperty(BehaviorSubject.prototype, "value", {
    get: function () {
      return this.getValue();
    },
    enumerable: true,
    configurable: true
  });

  BehaviorSubject.prototype._subscribe = function (subscriber) {
    var subscription = _super.prototype._subscribe.call(this, subscriber);

    if (subscription && !subscription.closed) {
      subscriber.next(this._value);
    }

    return subscription;
  };

  BehaviorSubject.prototype.getValue = function () {
    if (this.hasError) {
      throw this.thrownError;
    } else if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    } else {
      return this._value;
    }
  };

  BehaviorSubject.prototype.next = function (value) {
    _super.prototype.next.call(this, this._value = value);
  };

  return BehaviorSubject;
}(_Subject.Subject);

exports.BehaviorSubject = BehaviorSubject;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./Subject":"../../node_modules/rxjs/_esm5/internal/Subject.js","./util/ObjectUnsubscribedError":"../../node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js"}],"../../node_modules/rxjs/_esm5/internal/scheduler/Action.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Action = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscription = require("../Subscription");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
var Action =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(Action, _super);

  function Action(scheduler, work) {
    return _super.call(this) || this;
  }

  Action.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return this;
  };

  return Action;
}(_Subscription.Subscription);

exports.Action = Action;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscription":"../../node_modules/rxjs/_esm5/internal/Subscription.js"}],"../../node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncAction = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Action = require("./Action");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */
var AsyncAction =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AsyncAction, _super);

  function AsyncAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    _this.pending = false;
    return _this;
  }

  AsyncAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (this.closed) {
      return this;
    }

    this.state = state;
    var id = this.id;
    var scheduler = this.scheduler;

    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }

    this.pending = true;
    this.delay = delay;
    this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
    return this;
  };

  AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return setInterval(scheduler.flush.bind(scheduler, this), delay);
  };

  AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && this.delay === delay && this.pending === false) {
      return id;
    }

    clearInterval(id);
    return undefined;
  };

  AsyncAction.prototype.execute = function (state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }

    this.pending = false;

    var error = this._execute(state, delay);

    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };

  AsyncAction.prototype._execute = function (state, delay) {
    var errored = false;
    var errorValue = undefined;

    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = !!e && e || new Error(e);
    }

    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };

  AsyncAction.prototype._unsubscribe = function () {
    var id = this.id;
    var scheduler = this.scheduler;
    var actions = scheduler.actions;
    var index = actions.indexOf(this);
    this.work = null;
    this.state = null;
    this.pending = false;
    this.scheduler = null;

    if (index !== -1) {
      actions.splice(index, 1);
    }

    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, null);
    }

    this.delay = null;
  };

  return AsyncAction;
}(_Action.Action);

exports.AsyncAction = AsyncAction;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./Action":"../../node_modules/rxjs/_esm5/internal/scheduler/Action.js"}],"../../node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueueAction = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncAction = require("./AsyncAction");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
var QueueAction =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(QueueAction, _super);

  function QueueAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  QueueAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay > 0) {
      return _super.prototype.schedule.call(this, state, delay);
    }

    this.delay = delay;
    this.state = state;
    this.scheduler.flush(this);
    return this;
  };

  QueueAction.prototype.execute = function (state, delay) {
    return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
  };

  QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    return scheduler.flush(this);
  };

  return QueueAction;
}(_AsyncAction.AsyncAction);

exports.QueueAction = QueueAction;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./AsyncAction":"../../node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js"}],"../../node_modules/rxjs/_esm5/internal/Scheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scheduler = void 0;

var Scheduler =
/*@__PURE__*/
function () {
  function Scheduler(SchedulerAction, now) {
    if (now === void 0) {
      now = Scheduler.now;
    }

    this.SchedulerAction = SchedulerAction;
    this.now = now;
  }

  Scheduler.prototype.schedule = function (work, delay, state) {
    if (delay === void 0) {
      delay = 0;
    }

    return new this.SchedulerAction(this, work).schedule(state, delay);
  };

  Scheduler.now = function () {
    return Date.now();
  };

  return Scheduler;
}();

exports.Scheduler = Scheduler;
},{}],"../../node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncScheduler = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Scheduler = require("../Scheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */
var AsyncScheduler =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AsyncScheduler, _super);

  function AsyncScheduler(SchedulerAction, now) {
    if (now === void 0) {
      now = _Scheduler.Scheduler.now;
    }

    var _this = _super.call(this, SchedulerAction, function () {
      if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
        return AsyncScheduler.delegate.now();
      } else {
        return now();
      }
    }) || this;

    _this.actions = [];
    _this.active = false;
    _this.scheduled = undefined;
    return _this;
  }

  AsyncScheduler.prototype.schedule = function (work, delay, state) {
    if (delay === void 0) {
      delay = 0;
    }

    if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
      return AsyncScheduler.delegate.schedule(work, delay, state);
    } else {
      return _super.prototype.schedule.call(this, work, delay, state);
    }
  };

  AsyncScheduler.prototype.flush = function (action) {
    var actions = this.actions;

    if (this.active) {
      actions.push(action);
      return;
    }

    var error;
    this.active = true;

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());

    this.active = false;

    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AsyncScheduler;
}(_Scheduler.Scheduler);

exports.AsyncScheduler = AsyncScheduler;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Scheduler":"../../node_modules/rxjs/_esm5/internal/Scheduler.js"}],"../../node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueueScheduler = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncScheduler = require("./AsyncScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var QueueScheduler =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(QueueScheduler, _super);

  function QueueScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return QueueScheduler;
}(_AsyncScheduler.AsyncScheduler);

exports.QueueScheduler = QueueScheduler;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./AsyncScheduler":"../../node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"}],"../../node_modules/rxjs/_esm5/internal/scheduler/queue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queue = void 0;

var _QueueAction = require("./QueueAction");

var _QueueScheduler = require("./QueueScheduler");

/** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */
var queue =
/*@__PURE__*/
new _QueueScheduler.QueueScheduler(_QueueAction.QueueAction);
exports.queue = queue;
},{"./QueueAction":"../../node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js","./QueueScheduler":"../../node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js"}],"../../node_modules/rxjs/_esm5/internal/observable/empty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.emptyScheduled = emptyScheduled;
exports.EMPTY = void 0;

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
var EMPTY =
/*@__PURE__*/
new _Observable.Observable(function (subscriber) {
  return subscriber.complete();
});
exports.EMPTY = EMPTY;

function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}

function emptyScheduled(scheduler) {
  return new _Observable.Observable(function (subscriber) {
    return scheduler.schedule(function () {
      return subscriber.complete();
    });
  });
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js"}],"../../node_modules/rxjs/_esm5/internal/util/isScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isScheduler = isScheduler;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isScheduler(value) {
  return value && typeof value.schedule === 'function';
}
},{}],"../../node_modules/rxjs/_esm5/internal/util/subscribeToArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToArray = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var subscribeToArray = function (array) {
  return function (subscriber) {
    for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }

    if (!subscriber.closed) {
      subscriber.complete();
    }
  };
};

exports.subscribeToArray = subscribeToArray;
},{}],"../../node_modules/rxjs/_esm5/internal/observable/fromArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromArray = fromArray;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

var _subscribeToArray = require("../util/subscribeToArray");

/** PURE_IMPORTS_START _Observable,_Subscription,_util_subscribeToArray PURE_IMPORTS_END */
function fromArray(input, scheduler) {
  if (!scheduler) {
    return new _Observable.Observable((0, _subscribeToArray.subscribeToArray)(input));
  } else {
    return new _Observable.Observable(function (subscriber) {
      var sub = new _Subscription.Subscription();
      var i = 0;
      sub.add(scheduler.schedule(function () {
        if (i === input.length) {
          subscriber.complete();
          return;
        }

        subscriber.next(input[i++]);

        if (!subscriber.closed) {
          sub.add(this.schedule());
        }
      }));
      return sub;
    });
  }
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","../Subscription":"../../node_modules/rxjs/_esm5/internal/Subscription.js","../util/subscribeToArray":"../../node_modules/rxjs/_esm5/internal/util/subscribeToArray.js"}],"../../node_modules/rxjs/_esm5/internal/observable/scalar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scalar = scalar;

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
function scalar(value) {
  var result = new _Observable.Observable(function (subscriber) {
    subscriber.next(value);
    subscriber.complete();
  });
  result._isScalar = true;
  result.value = value;
  return result;
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js"}],"../../node_modules/rxjs/_esm5/internal/observable/of.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.of = of;

var _isScheduler = require("../util/isScheduler");

var _fromArray = require("./fromArray");

var _empty = require("./empty");

var _scalar = require("./scalar");

/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_empty,_scalar PURE_IMPORTS_END */
function of() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var scheduler = args[args.length - 1];

  if ((0, _isScheduler.isScheduler)(scheduler)) {
    args.pop();
  } else {
    scheduler = undefined;
  }

  switch (args.length) {
    case 0:
      return (0, _empty.empty)(scheduler);

    case 1:
      return scheduler ? (0, _fromArray.fromArray)(args, scheduler) : (0, _scalar.scalar)(args[0]);

    default:
      return (0, _fromArray.fromArray)(args, scheduler);
  }
}
},{"../util/isScheduler":"../../node_modules/rxjs/_esm5/internal/util/isScheduler.js","./fromArray":"../../node_modules/rxjs/_esm5/internal/observable/fromArray.js","./empty":"../../node_modules/rxjs/_esm5/internal/observable/empty.js","./scalar":"../../node_modules/rxjs/_esm5/internal/observable/scalar.js"}],"../../node_modules/rxjs/_esm5/internal/observable/throwError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throwError = throwError;

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
function throwError(error, scheduler) {
  if (!scheduler) {
    return new _Observable.Observable(function (subscriber) {
      return subscriber.error(error);
    });
  } else {
    return new _Observable.Observable(function (subscriber) {
      return scheduler.schedule(dispatch, 0, {
        error: error,
        subscriber: subscriber
      });
    });
  }
}

function dispatch(_a) {
  var error = _a.error,
      subscriber = _a.subscriber;
  subscriber.error(error);
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js"}],"../../node_modules/rxjs/_esm5/internal/Notification.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notification = exports.NotificationKind = void 0;

var _empty = require("./observable/empty");

var _of = require("./observable/of");

var _throwError = require("./observable/throwError");

/** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */
var NotificationKind;
/*@__PURE__*/

exports.NotificationKind = NotificationKind;

(function (NotificationKind) {
  NotificationKind["NEXT"] = "N";
  NotificationKind["ERROR"] = "E";
  NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (exports.NotificationKind = NotificationKind = {}));

var Notification =
/*@__PURE__*/
function () {
  function Notification(kind, value, error) {
    this.kind = kind;
    this.value = value;
    this.error = error;
    this.hasValue = kind === "N";
  }

  Notification.prototype.observe = function (observer) {
    switch (this.kind) {
      case "N":
        return observer.next && observer.next(this.value);

      case "E":
        return observer.error && observer.error(this.error);

      case "C":
        return observer.complete && observer.complete();
    }
  };

  Notification.prototype.do = function (next, error, complete) {
    var kind = this.kind;

    switch (kind) {
      case "N":
        return next && next(this.value);

      case "E":
        return error && error(this.error);

      case "C":
        return complete && complete();
    }
  };

  Notification.prototype.accept = function (nextOrObserver, error, complete) {
    if (nextOrObserver && typeof nextOrObserver.next === 'function') {
      return this.observe(nextOrObserver);
    } else {
      return this.do(nextOrObserver, error, complete);
    }
  };

  Notification.prototype.toObservable = function () {
    var kind = this.kind;

    switch (kind) {
      case "N":
        return (0, _of.of)(this.value);

      case "E":
        return (0, _throwError.throwError)(this.error);

      case "C":
        return (0, _empty.empty)();
    }

    throw new Error('unexpected notification kind value');
  };

  Notification.createNext = function (value) {
    if (typeof value !== 'undefined') {
      return new Notification("N", value);
    }

    return Notification.undefinedValueNotification;
  };

  Notification.createError = function (err) {
    return new Notification("E", undefined, err);
  };

  Notification.createComplete = function () {
    return Notification.completeNotification;
  };

  Notification.completeNotification = new Notification("C");
  Notification.undefinedValueNotification = new Notification("N", undefined);
  return Notification;
}();

exports.Notification = Notification;
},{"./observable/empty":"../../node_modules/rxjs/_esm5/internal/observable/empty.js","./observable/of":"../../node_modules/rxjs/_esm5/internal/observable/of.js","./observable/throwError":"../../node_modules/rxjs/_esm5/internal/observable/throwError.js"}],"../../node_modules/rxjs/_esm5/internal/operators/observeOn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observeOn = observeOn;
exports.ObserveOnMessage = exports.ObserveOnSubscriber = exports.ObserveOnOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _Notification = require("../Notification");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */
function observeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return function observeOnOperatorFunction(source) {
    return source.lift(new ObserveOnOperator(scheduler, delay));
  };
}

var ObserveOnOperator =
/*@__PURE__*/
function () {
  function ObserveOnOperator(scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    this.scheduler = scheduler;
    this.delay = delay;
  }

  ObserveOnOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
  };

  return ObserveOnOperator;
}();

exports.ObserveOnOperator = ObserveOnOperator;

var ObserveOnSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ObserveOnSubscriber, _super);

  function ObserveOnSubscriber(destination, scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    var _this = _super.call(this, destination) || this;

    _this.scheduler = scheduler;
    _this.delay = delay;
    return _this;
  }

  ObserveOnSubscriber.dispatch = function (arg) {
    var notification = arg.notification,
        destination = arg.destination;
    notification.observe(destination);
    this.unsubscribe();
  };

  ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
    var destination = this.destination;
    destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
  };

  ObserveOnSubscriber.prototype._next = function (value) {
    this.scheduleMessage(_Notification.Notification.createNext(value));
  };

  ObserveOnSubscriber.prototype._error = function (err) {
    this.scheduleMessage(_Notification.Notification.createError(err));
    this.unsubscribe();
  };

  ObserveOnSubscriber.prototype._complete = function () {
    this.scheduleMessage(_Notification.Notification.createComplete());
    this.unsubscribe();
  };

  return ObserveOnSubscriber;
}(_Subscriber.Subscriber);

exports.ObserveOnSubscriber = ObserveOnSubscriber;

var ObserveOnMessage =
/*@__PURE__*/
function () {
  function ObserveOnMessage(notification, destination) {
    this.notification = notification;
    this.destination = destination;
  }

  return ObserveOnMessage;
}();

exports.ObserveOnMessage = ObserveOnMessage;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","../Notification":"../../node_modules/rxjs/_esm5/internal/Notification.js"}],"../../node_modules/rxjs/_esm5/internal/ReplaySubject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReplaySubject = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("./Subject");

var _queue = require("./scheduler/queue");

var _Subscription = require("./Subscription");

var _observeOn = require("./operators/observeOn");

var _ObjectUnsubscribedError = require("./util/ObjectUnsubscribedError");

var _SubjectSubscription = require("./SubjectSubscription");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */
var ReplaySubject =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ReplaySubject, _super);

  function ReplaySubject(bufferSize, windowTime, scheduler) {
    if (bufferSize === void 0) {
      bufferSize = Number.POSITIVE_INFINITY;
    }

    if (windowTime === void 0) {
      windowTime = Number.POSITIVE_INFINITY;
    }

    var _this = _super.call(this) || this;

    _this.scheduler = scheduler;
    _this._events = [];
    _this._infiniteTimeWindow = false;
    _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
    _this._windowTime = windowTime < 1 ? 1 : windowTime;

    if (windowTime === Number.POSITIVE_INFINITY) {
      _this._infiniteTimeWindow = true;
      _this.next = _this.nextInfiniteTimeWindow;
    } else {
      _this.next = _this.nextTimeWindow;
    }

    return _this;
  }

  ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
    var _events = this._events;

    _events.push(value);

    if (_events.length > this._bufferSize) {
      _events.shift();
    }

    _super.prototype.next.call(this, value);
  };

  ReplaySubject.prototype.nextTimeWindow = function (value) {
    this._events.push(new ReplayEvent(this._getNow(), value));

    this._trimBufferThenGetEvents();

    _super.prototype.next.call(this, value);
  };

  ReplaySubject.prototype._subscribe = function (subscriber) {
    var _infiniteTimeWindow = this._infiniteTimeWindow;

    var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();

    var scheduler = this.scheduler;
    var len = _events.length;
    var subscription;

    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    } else if (this.isStopped || this.hasError) {
      subscription = _Subscription.Subscription.EMPTY;
    } else {
      this.observers.push(subscriber);
      subscription = new _SubjectSubscription.SubjectSubscription(this, subscriber);
    }

    if (scheduler) {
      subscriber.add(subscriber = new _observeOn.ObserveOnSubscriber(subscriber, scheduler));
    }

    if (_infiniteTimeWindow) {
      for (var i = 0; i < len && !subscriber.closed; i++) {
        subscriber.next(_events[i]);
      }
    } else {
      for (var i = 0; i < len && !subscriber.closed; i++) {
        subscriber.next(_events[i].value);
      }
    }

    if (this.hasError) {
      subscriber.error(this.thrownError);
    } else if (this.isStopped) {
      subscriber.complete();
    }

    return subscription;
  };

  ReplaySubject.prototype._getNow = function () {
    return (this.scheduler || _queue.queue).now();
  };

  ReplaySubject.prototype._trimBufferThenGetEvents = function () {
    var now = this._getNow();

    var _bufferSize = this._bufferSize;
    var _windowTime = this._windowTime;
    var _events = this._events;
    var eventsCount = _events.length;
    var spliceCount = 0;

    while (spliceCount < eventsCount) {
      if (now - _events[spliceCount].time < _windowTime) {
        break;
      }

      spliceCount++;
    }

    if (eventsCount > _bufferSize) {
      spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
    }

    if (spliceCount > 0) {
      _events.splice(0, spliceCount);
    }

    return _events;
  };

  return ReplaySubject;
}(_Subject.Subject);

exports.ReplaySubject = ReplaySubject;

var ReplayEvent =
/*@__PURE__*/
function () {
  function ReplayEvent(time, value) {
    this.time = time;
    this.value = value;
  }

  return ReplayEvent;
}();
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./Subject":"../../node_modules/rxjs/_esm5/internal/Subject.js","./scheduler/queue":"../../node_modules/rxjs/_esm5/internal/scheduler/queue.js","./Subscription":"../../node_modules/rxjs/_esm5/internal/Subscription.js","./operators/observeOn":"../../node_modules/rxjs/_esm5/internal/operators/observeOn.js","./util/ObjectUnsubscribedError":"../../node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js","./SubjectSubscription":"../../node_modules/rxjs/_esm5/internal/SubjectSubscription.js"}],"../../node_modules/rxjs/_esm5/internal/AsyncSubject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncSubject = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("./Subject");

var _Subscription = require("./Subscription");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_Subscription PURE_IMPORTS_END */
var AsyncSubject =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AsyncSubject, _super);

  function AsyncSubject() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.value = null;
    _this.hasNext = false;
    _this.hasCompleted = false;
    return _this;
  }

  AsyncSubject.prototype._subscribe = function (subscriber) {
    if (this.hasError) {
      subscriber.error(this.thrownError);
      return _Subscription.Subscription.EMPTY;
    } else if (this.hasCompleted && this.hasNext) {
      subscriber.next(this.value);
      subscriber.complete();
      return _Subscription.Subscription.EMPTY;
    }

    return _super.prototype._subscribe.call(this, subscriber);
  };

  AsyncSubject.prototype.next = function (value) {
    if (!this.hasCompleted) {
      this.value = value;
      this.hasNext = true;
    }
  };

  AsyncSubject.prototype.error = function (error) {
    if (!this.hasCompleted) {
      _super.prototype.error.call(this, error);
    }
  };

  AsyncSubject.prototype.complete = function () {
    this.hasCompleted = true;

    if (this.hasNext) {
      _super.prototype.next.call(this, this.value);
    }

    _super.prototype.complete.call(this);
  };

  return AsyncSubject;
}(_Subject.Subject);

exports.AsyncSubject = AsyncSubject;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./Subject":"../../node_modules/rxjs/_esm5/internal/Subject.js","./Subscription":"../../node_modules/rxjs/_esm5/internal/Subscription.js"}],"../../node_modules/rxjs/_esm5/internal/util/Immediate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Immediate = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var nextHandle = 1;
var tasksByHandle = {};

function runIfPresent(handle) {
  var cb = tasksByHandle[handle];

  if (cb) {
    cb();
  }
}

var Immediate = {
  setImmediate: function (cb) {
    var handle = nextHandle++;
    tasksByHandle[handle] = cb;
    Promise.resolve().then(function () {
      return runIfPresent(handle);
    });
    return handle;
  },
  clearImmediate: function (handle) {
    delete tasksByHandle[handle];
  }
};
exports.Immediate = Immediate;
},{}],"../../node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsapAction = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Immediate = require("../util/Immediate");

var _AsyncAction = require("./AsyncAction");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_util_Immediate,_AsyncAction PURE_IMPORTS_END */
var AsapAction =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AsapAction, _super);

  function AsapAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    scheduler.actions.push(this);
    return scheduler.scheduled || (scheduler.scheduled = _Immediate.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
  };

  AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
    }

    if (scheduler.actions.length === 0) {
      _Immediate.Immediate.clearImmediate(id);

      scheduler.scheduled = undefined;
    }

    return undefined;
  };

  return AsapAction;
}(_AsyncAction.AsyncAction);

exports.AsapAction = AsapAction;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../util/Immediate":"../../node_modules/rxjs/_esm5/internal/util/Immediate.js","./AsyncAction":"../../node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js"}],"../../node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsapScheduler = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncScheduler = require("./AsyncScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var AsapScheduler =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AsapScheduler, _super);

  function AsapScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AsapScheduler.prototype.flush = function (action) {
    this.active = true;
    this.scheduled = undefined;
    var actions = this.actions;
    var error;
    var index = -1;
    var count = actions.length;
    action = action || actions.shift();

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (++index < count && (action = actions.shift()));

    this.active = false;

    if (error) {
      while (++index < count && (action = actions.shift())) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AsapScheduler;
}(_AsyncScheduler.AsyncScheduler);

exports.AsapScheduler = AsapScheduler;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./AsyncScheduler":"../../node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"}],"../../node_modules/rxjs/_esm5/internal/scheduler/asap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asap = void 0;

var _AsapAction = require("./AsapAction");

var _AsapScheduler = require("./AsapScheduler");

/** PURE_IMPORTS_START _AsapAction,_AsapScheduler PURE_IMPORTS_END */
var asap =
/*@__PURE__*/
new _AsapScheduler.AsapScheduler(_AsapAction.AsapAction);
exports.asap = asap;
},{"./AsapAction":"../../node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js","./AsapScheduler":"../../node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js"}],"../../node_modules/rxjs/_esm5/internal/scheduler/async.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.async = void 0;

var _AsyncAction = require("./AsyncAction");

var _AsyncScheduler = require("./AsyncScheduler");

/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
var async =
/*@__PURE__*/
new _AsyncScheduler.AsyncScheduler(_AsyncAction.AsyncAction);
exports.async = async;
},{"./AsyncAction":"../../node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js","./AsyncScheduler":"../../node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"}],"../../node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationFrameAction = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncAction = require("./AsyncAction");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
var AnimationFrameAction =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AnimationFrameAction, _super);

  function AnimationFrameAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    scheduler.actions.push(this);
    return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () {
      return scheduler.flush(null);
    }));
  };

  AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
    }

    if (scheduler.actions.length === 0) {
      cancelAnimationFrame(id);
      scheduler.scheduled = undefined;
    }

    return undefined;
  };

  return AnimationFrameAction;
}(_AsyncAction.AsyncAction);

exports.AnimationFrameAction = AnimationFrameAction;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./AsyncAction":"../../node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js"}],"../../node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationFrameScheduler = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncScheduler = require("./AsyncScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var AnimationFrameScheduler =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AnimationFrameScheduler, _super);

  function AnimationFrameScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AnimationFrameScheduler.prototype.flush = function (action) {
    this.active = true;
    this.scheduled = undefined;
    var actions = this.actions;
    var error;
    var index = -1;
    var count = actions.length;
    action = action || actions.shift();

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (++index < count && (action = actions.shift()));

    this.active = false;

    if (error) {
      while (++index < count && (action = actions.shift())) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AnimationFrameScheduler;
}(_AsyncScheduler.AsyncScheduler);

exports.AnimationFrameScheduler = AnimationFrameScheduler;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./AsyncScheduler":"../../node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"}],"../../node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationFrame = void 0;

var _AnimationFrameAction = require("./AnimationFrameAction");

var _AnimationFrameScheduler = require("./AnimationFrameScheduler");

/** PURE_IMPORTS_START _AnimationFrameAction,_AnimationFrameScheduler PURE_IMPORTS_END */
var animationFrame =
/*@__PURE__*/
new _AnimationFrameScheduler.AnimationFrameScheduler(_AnimationFrameAction.AnimationFrameAction);
exports.animationFrame = animationFrame;
},{"./AnimationFrameAction":"../../node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js","./AnimationFrameScheduler":"../../node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js"}],"../../node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VirtualAction = exports.VirtualTimeScheduler = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncAction = require("./AsyncAction");

var _AsyncScheduler = require("./AsyncScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
var VirtualTimeScheduler =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(VirtualTimeScheduler, _super);

  function VirtualTimeScheduler(SchedulerAction, maxFrames) {
    if (SchedulerAction === void 0) {
      SchedulerAction = VirtualAction;
    }

    if (maxFrames === void 0) {
      maxFrames = Number.POSITIVE_INFINITY;
    }

    var _this = _super.call(this, SchedulerAction, function () {
      return _this.frame;
    }) || this;

    _this.maxFrames = maxFrames;
    _this.frame = 0;
    _this.index = -1;
    return _this;
  }

  VirtualTimeScheduler.prototype.flush = function () {
    var _a = this,
        actions = _a.actions,
        maxFrames = _a.maxFrames;

    var error, action;

    while ((action = actions[0]) && action.delay <= maxFrames) {
      actions.shift();
      this.frame = action.delay;

      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    }

    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  VirtualTimeScheduler.frameTimeFactor = 10;
  return VirtualTimeScheduler;
}(_AsyncScheduler.AsyncScheduler);

exports.VirtualTimeScheduler = VirtualTimeScheduler;

var VirtualAction =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(VirtualAction, _super);

  function VirtualAction(scheduler, work, index) {
    if (index === void 0) {
      index = scheduler.index += 1;
    }

    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    _this.index = index;
    _this.active = true;
    _this.index = scheduler.index = index;
    return _this;
  }

  VirtualAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (!this.id) {
      return _super.prototype.schedule.call(this, state, delay);
    }

    this.active = false;
    var action = new VirtualAction(this.scheduler, this.work);
    this.add(action);
    return action.schedule(state, delay);
  };

  VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    this.delay = scheduler.frame + delay;
    var actions = scheduler.actions;
    actions.push(this);
    actions.sort(VirtualAction.sortActions);
    return true;
  };

  VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return undefined;
  };

  VirtualAction.prototype._execute = function (state, delay) {
    if (this.active === true) {
      return _super.prototype._execute.call(this, state, delay);
    }
  };

  VirtualAction.sortActions = function (a, b) {
    if (a.delay === b.delay) {
      if (a.index === b.index) {
        return 0;
      } else if (a.index > b.index) {
        return 1;
      } else {
        return -1;
      }
    } else if (a.delay > b.delay) {
      return 1;
    } else {
      return -1;
    }
  };

  return VirtualAction;
}(_AsyncAction.AsyncAction);

exports.VirtualAction = VirtualAction;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./AsyncAction":"../../node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js","./AsyncScheduler":"../../node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"}],"../../node_modules/rxjs/_esm5/internal/util/identity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identity = identity;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
  return x;
}
},{}],"../../node_modules/rxjs/_esm5/internal/util/isObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObservable = isObservable;

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
function isObservable(obj) {
  return !!obj && (obj instanceof _Observable.Observable || typeof obj.lift === 'function' && typeof obj.subscribe === 'function');
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js"}],"../../node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArgumentOutOfRangeError = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function ArgumentOutOfRangeErrorImpl() {
  Error.call(this);
  this.message = 'argument out of range';
  this.name = 'ArgumentOutOfRangeError';
  return this;
}

ArgumentOutOfRangeErrorImpl.prototype =
/*@__PURE__*/
Object.create(Error.prototype);
var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
},{}],"../../node_modules/rxjs/_esm5/internal/util/EmptyError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyError = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function EmptyErrorImpl() {
  Error.call(this);
  this.message = 'no elements in sequence';
  this.name = 'EmptyError';
  return this;
}

EmptyErrorImpl.prototype =
/*@__PURE__*/
Object.create(Error.prototype);
var EmptyError = EmptyErrorImpl;
exports.EmptyError = EmptyError;
},{}],"../../node_modules/rxjs/_esm5/internal/util/TimeoutError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeoutError = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function TimeoutErrorImpl() {
  Error.call(this);
  this.message = 'Timeout has occurred';
  this.name = 'TimeoutError';
  return this;
}

TimeoutErrorImpl.prototype =
/*@__PURE__*/
Object.create(Error.prototype);
var TimeoutError = TimeoutErrorImpl;
exports.TimeoutError = TimeoutError;
},{}],"../../node_modules/rxjs/_esm5/internal/operators/map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;
exports.MapOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function map(project, thisArg) {
  return function mapOperation(source) {
    if (typeof project !== 'function') {
      throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }

    return source.lift(new MapOperator(project, thisArg));
  };
}

var MapOperator =
/*@__PURE__*/
function () {
  function MapOperator(project, thisArg) {
    this.project = project;
    this.thisArg = thisArg;
  }

  MapOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
  };

  return MapOperator;
}();

exports.MapOperator = MapOperator;

var MapSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(MapSubscriber, _super);

  function MapSubscriber(destination, project, thisArg) {
    var _this = _super.call(this, destination) || this;

    _this.project = project;
    _this.count = 0;
    _this.thisArg = thisArg || _this;
    return _this;
  }

  MapSubscriber.prototype._next = function (value) {
    var result;

    try {
      result = this.project.call(this.thisArg, value, this.count++);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  };

  return MapSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/observable/bindCallback.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindCallback = bindCallback;

var _Observable = require("../Observable");

var _AsyncSubject = require("../AsyncSubject");

var _map = require("../operators/map");

var _canReportError = require("../util/canReportError");

var _isArray = require("../util/isArray");

var _isScheduler = require("../util/isScheduler");

/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isArray,_util_isScheduler PURE_IMPORTS_END */
function bindCallback(callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if ((0, _isScheduler.isScheduler)(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe((0, _map.map)(function (args) {
          return (0, _isArray.isArray)(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
        }));
      };
    }
  }

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var context = this;
    var subject;
    var params = {
      context: context,
      subject: subject,
      callbackFunc: callbackFunc,
      scheduler: scheduler
    };
    return new _Observable.Observable(function (subscriber) {
      if (!scheduler) {
        if (!subject) {
          subject = new _AsyncSubject.AsyncSubject();

          var handler = function () {
            var innerArgs = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              innerArgs[_i] = arguments[_i];
            }

            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
            subject.complete();
          };

          try {
            callbackFunc.apply(context, args.concat([handler]));
          } catch (err) {
            if ((0, _canReportError.canReportError)(subject)) {
              subject.error(err);
            } else {
              console.warn(err);
            }
          }
        }

        return subject.subscribe(subscriber);
      } else {
        var state = {
          args: args,
          subscriber: subscriber,
          params: params
        };
        return scheduler.schedule(dispatch, 0, state);
      }
    });
  };
}

function dispatch(state) {
  var _this = this;

  var self = this;
  var args = state.args,
      subscriber = state.subscriber,
      params = state.params;
  var callbackFunc = params.callbackFunc,
      context = params.context,
      scheduler = params.scheduler;
  var subject = params.subject;

  if (!subject) {
    subject = params.subject = new _AsyncSubject.AsyncSubject();

    var handler = function () {
      var innerArgs = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        innerArgs[_i] = arguments[_i];
      }

      var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;

      _this.add(scheduler.schedule(dispatchNext, 0, {
        value: value,
        subject: subject
      }));
    };

    try {
      callbackFunc.apply(context, args.concat([handler]));
    } catch (err) {
      subject.error(err);
    }
  }

  this.add(subject.subscribe(subscriber));
}

function dispatchNext(state) {
  var value = state.value,
      subject = state.subject;
  subject.next(value);
  subject.complete();
}

function dispatchError(state) {
  var err = state.err,
      subject = state.subject;
  subject.error(err);
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","../AsyncSubject":"../../node_modules/rxjs/_esm5/internal/AsyncSubject.js","../operators/map":"../../node_modules/rxjs/_esm5/internal/operators/map.js","../util/canReportError":"../../node_modules/rxjs/_esm5/internal/util/canReportError.js","../util/isArray":"../../node_modules/rxjs/_esm5/internal/util/isArray.js","../util/isScheduler":"../../node_modules/rxjs/_esm5/internal/util/isScheduler.js"}],"../../node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindNodeCallback = bindNodeCallback;

var _Observable = require("../Observable");

var _AsyncSubject = require("../AsyncSubject");

var _map = require("../operators/map");

var _canReportError = require("../util/canReportError");

var _isScheduler = require("../util/isScheduler");

var _isArray = require("../util/isArray");

/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isScheduler,_util_isArray PURE_IMPORTS_END */
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if ((0, _isScheduler.isScheduler)(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe((0, _map.map)(function (args) {
          return (0, _isArray.isArray)(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
        }));
      };
    }
  }

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var params = {
      subject: undefined,
      args: args,
      callbackFunc: callbackFunc,
      scheduler: scheduler,
      context: this
    };
    return new _Observable.Observable(function (subscriber) {
      var context = params.context;
      var subject = params.subject;

      if (!scheduler) {
        if (!subject) {
          subject = params.subject = new _AsyncSubject.AsyncSubject();

          var handler = function () {
            var innerArgs = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              innerArgs[_i] = arguments[_i];
            }

            var err = innerArgs.shift();

            if (err) {
              subject.error(err);
              return;
            }

            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
            subject.complete();
          };

          try {
            callbackFunc.apply(context, args.concat([handler]));
          } catch (err) {
            if ((0, _canReportError.canReportError)(subject)) {
              subject.error(err);
            } else {
              console.warn(err);
            }
          }
        }

        return subject.subscribe(subscriber);
      } else {
        return scheduler.schedule(dispatch, 0, {
          params: params,
          subscriber: subscriber,
          context: context
        });
      }
    });
  };
}

function dispatch(state) {
  var _this = this;

  var params = state.params,
      subscriber = state.subscriber,
      context = state.context;
  var callbackFunc = params.callbackFunc,
      args = params.args,
      scheduler = params.scheduler;
  var subject = params.subject;

  if (!subject) {
    subject = params.subject = new _AsyncSubject.AsyncSubject();

    var handler = function () {
      var innerArgs = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        innerArgs[_i] = arguments[_i];
      }

      var err = innerArgs.shift();

      if (err) {
        _this.add(scheduler.schedule(dispatchError, 0, {
          err: err,
          subject: subject
        }));
      } else {
        var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;

        _this.add(scheduler.schedule(dispatchNext, 0, {
          value: value,
          subject: subject
        }));
      }
    };

    try {
      callbackFunc.apply(context, args.concat([handler]));
    } catch (err) {
      this.add(scheduler.schedule(dispatchError, 0, {
        err: err,
        subject: subject
      }));
    }
  }

  this.add(subject.subscribe(subscriber));
}

function dispatchNext(arg) {
  var value = arg.value,
      subject = arg.subject;
  subject.next(value);
  subject.complete();
}

function dispatchError(arg) {
  var err = arg.err,
      subject = arg.subject;
  subject.error(err);
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","../AsyncSubject":"../../node_modules/rxjs/_esm5/internal/AsyncSubject.js","../operators/map":"../../node_modules/rxjs/_esm5/internal/operators/map.js","../util/canReportError":"../../node_modules/rxjs/_esm5/internal/util/canReportError.js","../util/isScheduler":"../../node_modules/rxjs/_esm5/internal/util/isScheduler.js","../util/isArray":"../../node_modules/rxjs/_esm5/internal/util/isArray.js"}],"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OuterSubscriber = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("./Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
var OuterSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(OuterSubscriber, _super);

  function OuterSubscriber() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.destination.next(innerValue);
  };

  OuterSubscriber.prototype.notifyError = function (error, innerSub) {
    this.destination.error(error);
  };

  OuterSubscriber.prototype.notifyComplete = function (innerSub) {
    this.destination.complete();
  };

  return OuterSubscriber;
}(_Subscriber.Subscriber);

exports.OuterSubscriber = OuterSubscriber;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/InnerSubscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerSubscriber = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("./Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
var InnerSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(InnerSubscriber, _super);

  function InnerSubscriber(parent, outerValue, outerIndex) {
    var _this = _super.call(this) || this;

    _this.parent = parent;
    _this.outerValue = outerValue;
    _this.outerIndex = outerIndex;
    _this.index = 0;
    return _this;
  }

  InnerSubscriber.prototype._next = function (value) {
    this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
  };

  InnerSubscriber.prototype._error = function (error) {
    this.parent.notifyError(error, this);
    this.unsubscribe();
  };

  InnerSubscriber.prototype._complete = function () {
    this.parent.notifyComplete(this);
    this.unsubscribe();
  };

  return InnerSubscriber;
}(_Subscriber.Subscriber);

exports.InnerSubscriber = InnerSubscriber;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToPromise = void 0;

var _hostReportError = require("./hostReportError");

/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */
var subscribeToPromise = function (promise) {
  return function (subscriber) {
    promise.then(function (value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function (err) {
      return subscriber.error(err);
    }).then(null, _hostReportError.hostReportError);
    return subscriber;
  };
};

exports.subscribeToPromise = subscribeToPromise;
},{"./hostReportError":"../../node_modules/rxjs/_esm5/internal/util/hostReportError.js"}],"../../node_modules/rxjs/_esm5/internal/symbol/iterator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSymbolIterator = getSymbolIterator;
exports.$$iterator = exports.iterator = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function getSymbolIterator() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return '@@iterator';
  }

  return Symbol.iterator;
}

var iterator =
/*@__PURE__*/
getSymbolIterator();
exports.iterator = iterator;
var $$iterator = iterator;
exports.$$iterator = $$iterator;
},{}],"../../node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToIterable = void 0;

var _iterator = require("../symbol/iterator");

/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
var subscribeToIterable = function (iterable) {
  return function (subscriber) {
    var iterator = iterable[_iterator.iterator]();

    do {
      var item = iterator.next();

      if (item.done) {
        subscriber.complete();
        break;
      }

      subscriber.next(item.value);

      if (subscriber.closed) {
        break;
      }
    } while (true);

    if (typeof iterator.return === 'function') {
      subscriber.add(function () {
        if (iterator.return) {
          iterator.return();
        }
      });
    }

    return subscriber;
  };
};

exports.subscribeToIterable = subscribeToIterable;
},{"../symbol/iterator":"../../node_modules/rxjs/_esm5/internal/symbol/iterator.js"}],"../../node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToObservable = void 0;

var _observable = require("../symbol/observable");

/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
var subscribeToObservable = function (obj) {
  return function (subscriber) {
    var obs = obj[_observable.observable]();

    if (typeof obs.subscribe !== 'function') {
      throw new TypeError('Provided object does not correctly implement Symbol.observable');
    } else {
      return obs.subscribe(subscriber);
    }
  };
};

exports.subscribeToObservable = subscribeToObservable;
},{"../symbol/observable":"../../node_modules/rxjs/_esm5/internal/symbol/observable.js"}],"../../node_modules/rxjs/_esm5/internal/util/isArrayLike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArrayLike = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArrayLike = function (x) {
  return x && typeof x.length === 'number' && typeof x !== 'function';
};

exports.isArrayLike = isArrayLike;
},{}],"../../node_modules/rxjs/_esm5/internal/util/isPromise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPromise = isPromise;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isPromise(value) {
  return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
},{}],"../../node_modules/rxjs/_esm5/internal/util/subscribeTo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeTo = void 0;

var _Observable = require("../Observable");

var _subscribeToArray = require("./subscribeToArray");

var _subscribeToPromise = require("./subscribeToPromise");

var _subscribeToIterable = require("./subscribeToIterable");

var _subscribeToObservable = require("./subscribeToObservable");

var _isArrayLike = require("./isArrayLike");

var _isPromise = require("./isPromise");

var _isObject = require("./isObject");

var _iterator = require("../symbol/iterator");

var _observable = require("../symbol/observable");

/** PURE_IMPORTS_START _Observable,_subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */
var subscribeTo = function (result) {
  if (result instanceof _Observable.Observable) {
    return function (subscriber) {
      if (result._isScalar) {
        subscriber.next(result.value);
        subscriber.complete();
        return undefined;
      } else {
        return result.subscribe(subscriber);
      }
    };
  } else if (!!result && typeof result[_observable.observable] === 'function') {
    return (0, _subscribeToObservable.subscribeToObservable)(result);
  } else if ((0, _isArrayLike.isArrayLike)(result)) {
    return (0, _subscribeToArray.subscribeToArray)(result);
  } else if ((0, _isPromise.isPromise)(result)) {
    return (0, _subscribeToPromise.subscribeToPromise)(result);
  } else if (!!result && typeof result[_iterator.iterator] === 'function') {
    return (0, _subscribeToIterable.subscribeToIterable)(result);
  } else {
    var value = (0, _isObject.isObject)(result) ? 'an invalid object' : "'" + result + "'";
    var msg = "You provided " + value + " where a stream was expected." + ' You can provide an Observable, Promise, Array, or Iterable.';
    throw new TypeError(msg);
  }
};

exports.subscribeTo = subscribeTo;
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","./subscribeToArray":"../../node_modules/rxjs/_esm5/internal/util/subscribeToArray.js","./subscribeToPromise":"../../node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js","./subscribeToIterable":"../../node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js","./subscribeToObservable":"../../node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js","./isArrayLike":"../../node_modules/rxjs/_esm5/internal/util/isArrayLike.js","./isPromise":"../../node_modules/rxjs/_esm5/internal/util/isPromise.js","./isObject":"../../node_modules/rxjs/_esm5/internal/util/isObject.js","../symbol/iterator":"../../node_modules/rxjs/_esm5/internal/symbol/iterator.js","../symbol/observable":"../../node_modules/rxjs/_esm5/internal/symbol/observable.js"}],"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToResult = subscribeToResult;

var _InnerSubscriber = require("../InnerSubscriber");

var _subscribeTo = require("./subscribeTo");

/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo PURE_IMPORTS_END */
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination) {
  if (destination === void 0) {
    destination = new _InnerSubscriber.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
  }

  if (destination.closed) {
    return;
  }

  return (0, _subscribeTo.subscribeTo)(result)(destination);
}
},{"../InnerSubscriber":"../../node_modules/rxjs/_esm5/internal/InnerSubscriber.js","./subscribeTo":"../../node_modules/rxjs/_esm5/internal/util/subscribeTo.js"}],"../../node_modules/rxjs/_esm5/internal/observable/combineLatest.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineLatest = combineLatest;
exports.CombineLatestSubscriber = exports.CombineLatestOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _isScheduler = require("../util/isScheduler");

var _isArray = require("../util/isArray");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

var _fromArray = require("./fromArray");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */
var NONE = {};

function combineLatest() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  var resultSelector = null;
  var scheduler = null;

  if ((0, _isScheduler.isScheduler)(observables[observables.length - 1])) {
    scheduler = observables.pop();
  }

  if (typeof observables[observables.length - 1] === 'function') {
    resultSelector = observables.pop();
  }

  if (observables.length === 1 && (0, _isArray.isArray)(observables[0])) {
    observables = observables[0];
  }

  return (0, _fromArray.fromArray)(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}

var CombineLatestOperator =
/*@__PURE__*/
function () {
  function CombineLatestOperator(resultSelector) {
    this.resultSelector = resultSelector;
  }

  CombineLatestOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
  };

  return CombineLatestOperator;
}();

exports.CombineLatestOperator = CombineLatestOperator;

var CombineLatestSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(CombineLatestSubscriber, _super);

  function CombineLatestSubscriber(destination, resultSelector) {
    var _this = _super.call(this, destination) || this;

    _this.resultSelector = resultSelector;
    _this.active = 0;
    _this.values = [];
    _this.observables = [];
    return _this;
  }

  CombineLatestSubscriber.prototype._next = function (observable) {
    this.values.push(NONE);
    this.observables.push(observable);
  };

  CombineLatestSubscriber.prototype._complete = function () {
    var observables = this.observables;
    var len = observables.length;

    if (len === 0) {
      this.destination.complete();
    } else {
      this.active = len;
      this.toRespond = len;

      for (var i = 0; i < len; i++) {
        var observable = observables[i];
        this.add((0, _subscribeToResult.subscribeToResult)(this, observable, observable, i));
      }
    }
  };

  CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
    if ((this.active -= 1) === 0) {
      this.destination.complete();
    }
  };

  CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    var values = this.values;
    var oldVal = values[outerIndex];
    var toRespond = !this.toRespond ? 0 : oldVal === NONE ? --this.toRespond : this.toRespond;
    values[outerIndex] = innerValue;

    if (toRespond === 0) {
      if (this.resultSelector) {
        this._tryResultSelector(values);
      } else {
        this.destination.next(values.slice());
      }
    }
  };

  CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
    var result;

    try {
      result = this.resultSelector.apply(this, values);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  };

  return CombineLatestSubscriber;
}(_OuterSubscriber.OuterSubscriber);

exports.CombineLatestSubscriber = CombineLatestSubscriber;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../util/isScheduler":"../../node_modules/rxjs/_esm5/internal/util/isScheduler.js","../util/isArray":"../../node_modules/rxjs/_esm5/internal/util/isArray.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js","./fromArray":"../../node_modules/rxjs/_esm5/internal/observable/fromArray.js"}],"../../node_modules/rxjs/_esm5/internal/util/isInteropObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInteropObservable = isInteropObservable;

var _observable = require("../symbol/observable");

/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
function isInteropObservable(input) {
  return input && typeof input[_observable.observable] === 'function';
}
},{"../symbol/observable":"../../node_modules/rxjs/_esm5/internal/symbol/observable.js"}],"../../node_modules/rxjs/_esm5/internal/util/isIterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIterable = isIterable;

var _iterator = require("../symbol/iterator");

/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
function isIterable(input) {
  return input && typeof input[_iterator.iterator] === 'function';
}
},{"../symbol/iterator":"../../node_modules/rxjs/_esm5/internal/symbol/iterator.js"}],"../../node_modules/rxjs/_esm5/internal/observable/fromPromise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromPromise = fromPromise;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

var _subscribeToPromise = require("../util/subscribeToPromise");

/** PURE_IMPORTS_START _Observable,_Subscription,_util_subscribeToPromise PURE_IMPORTS_END */
function fromPromise(input, scheduler) {
  if (!scheduler) {
    return new _Observable.Observable((0, _subscribeToPromise.subscribeToPromise)(input));
  } else {
    return new _Observable.Observable(function (subscriber) {
      var sub = new _Subscription.Subscription();
      sub.add(scheduler.schedule(function () {
        return input.then(function (value) {
          sub.add(scheduler.schedule(function () {
            subscriber.next(value);
            sub.add(scheduler.schedule(function () {
              return subscriber.complete();
            }));
          }));
        }, function (err) {
          sub.add(scheduler.schedule(function () {
            return subscriber.error(err);
          }));
        });
      }));
      return sub;
    });
  }
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","../Subscription":"../../node_modules/rxjs/_esm5/internal/Subscription.js","../util/subscribeToPromise":"../../node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js"}],"../../node_modules/rxjs/_esm5/internal/observable/fromIterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromIterable = fromIterable;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

var _iterator = require("../symbol/iterator");

var _subscribeToIterable = require("../util/subscribeToIterable");

/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator,_util_subscribeToIterable PURE_IMPORTS_END */
function fromIterable(input, scheduler) {
  if (!input) {
    throw new Error('Iterable cannot be null');
  }

  if (!scheduler) {
    return new _Observable.Observable((0, _subscribeToIterable.subscribeToIterable)(input));
  } else {
    return new _Observable.Observable(function (subscriber) {
      var sub = new _Subscription.Subscription();
      var iterator;
      sub.add(function () {
        if (iterator && typeof iterator.return === 'function') {
          iterator.return();
        }
      });
      sub.add(scheduler.schedule(function () {
        iterator = input[_iterator.iterator]();
        sub.add(scheduler.schedule(function () {
          if (subscriber.closed) {
            return;
          }

          var value;
          var done;

          try {
            var result = iterator.next();
            value = result.value;
            done = result.done;
          } catch (err) {
            subscriber.error(err);
            return;
          }

          if (done) {
            subscriber.complete();
          } else {
            subscriber.next(value);
            this.schedule();
          }
        }));
      }));
      return sub;
    });
  }
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","../Subscription":"../../node_modules/rxjs/_esm5/internal/Subscription.js","../symbol/iterator":"../../node_modules/rxjs/_esm5/internal/symbol/iterator.js","../util/subscribeToIterable":"../../node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js"}],"../../node_modules/rxjs/_esm5/internal/observable/fromObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromObservable = fromObservable;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

var _observable = require("../symbol/observable");

var _subscribeToObservable = require("../util/subscribeToObservable");

/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable,_util_subscribeToObservable PURE_IMPORTS_END */
function fromObservable(input, scheduler) {
  if (!scheduler) {
    return new _Observable.Observable((0, _subscribeToObservable.subscribeToObservable)(input));
  } else {
    return new _Observable.Observable(function (subscriber) {
      var sub = new _Subscription.Subscription();
      sub.add(scheduler.schedule(function () {
        var observable = input[_observable.observable]();

        sub.add(observable.subscribe({
          next: function (value) {
            sub.add(scheduler.schedule(function () {
              return subscriber.next(value);
            }));
          },
          error: function (err) {
            sub.add(scheduler.schedule(function () {
              return subscriber.error(err);
            }));
          },
          complete: function () {
            sub.add(scheduler.schedule(function () {
              return subscriber.complete();
            }));
          }
        }));
      }));
      return sub;
    });
  }
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","../Subscription":"../../node_modules/rxjs/_esm5/internal/Subscription.js","../symbol/observable":"../../node_modules/rxjs/_esm5/internal/symbol/observable.js","../util/subscribeToObservable":"../../node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js"}],"../../node_modules/rxjs/_esm5/internal/observable/from.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.from = from;

var _Observable = require("../Observable");

var _isPromise = require("../util/isPromise");

var _isArrayLike = require("../util/isArrayLike");

var _isInteropObservable = require("../util/isInteropObservable");

var _isIterable = require("../util/isIterable");

var _fromArray = require("./fromArray");

var _fromPromise = require("./fromPromise");

var _fromIterable = require("./fromIterable");

var _fromObservable = require("./fromObservable");

var _subscribeTo = require("../util/subscribeTo");

/** PURE_IMPORTS_START _Observable,_util_isPromise,_util_isArrayLike,_util_isInteropObservable,_util_isIterable,_fromArray,_fromPromise,_fromIterable,_fromObservable,_util_subscribeTo PURE_IMPORTS_END */
function from(input, scheduler) {
  if (!scheduler) {
    if (input instanceof _Observable.Observable) {
      return input;
    }

    return new _Observable.Observable((0, _subscribeTo.subscribeTo)(input));
  }

  if (input != null) {
    if ((0, _isInteropObservable.isInteropObservable)(input)) {
      return (0, _fromObservable.fromObservable)(input, scheduler);
    } else if ((0, _isPromise.isPromise)(input)) {
      return (0, _fromPromise.fromPromise)(input, scheduler);
    } else if ((0, _isArrayLike.isArrayLike)(input)) {
      return (0, _fromArray.fromArray)(input, scheduler);
    } else if ((0, _isIterable.isIterable)(input) || typeof input === 'string') {
      return (0, _fromIterable.fromIterable)(input, scheduler);
    }
  }

  throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","../util/isPromise":"../../node_modules/rxjs/_esm5/internal/util/isPromise.js","../util/isArrayLike":"../../node_modules/rxjs/_esm5/internal/util/isArrayLike.js","../util/isInteropObservable":"../../node_modules/rxjs/_esm5/internal/util/isInteropObservable.js","../util/isIterable":"../../node_modules/rxjs/_esm5/internal/util/isIterable.js","./fromArray":"../../node_modules/rxjs/_esm5/internal/observable/fromArray.js","./fromPromise":"../../node_modules/rxjs/_esm5/internal/observable/fromPromise.js","./fromIterable":"../../node_modules/rxjs/_esm5/internal/observable/fromIterable.js","./fromObservable":"../../node_modules/rxjs/_esm5/internal/observable/fromObservable.js","../util/subscribeTo":"../../node_modules/rxjs/_esm5/internal/util/subscribeTo.js"}],"../../node_modules/rxjs/_esm5/internal/operators/mergeMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMap = mergeMap;
exports.MergeMapSubscriber = exports.MergeMapOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _subscribeToResult = require("../util/subscribeToResult");

var _OuterSubscriber = require("../OuterSubscriber");

var _InnerSubscriber = require("../InnerSubscriber");

var _map = require("./map");

var _from = require("../observable/from");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber,_map,_observable_from PURE_IMPORTS_END */
function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }

  if (typeof resultSelector === 'function') {
    return function (source) {
      return source.pipe(mergeMap(function (a, i) {
        return (0, _from.from)(project(a, i)).pipe((0, _map.map)(function (b, ii) {
          return resultSelector(a, b, i, ii);
        }));
      }, concurrent));
    };
  } else if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }

  return function (source) {
    return source.lift(new MergeMapOperator(project, concurrent));
  };
}

var MergeMapOperator =
/*@__PURE__*/
function () {
  function MergeMapOperator(project, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }

    this.project = project;
    this.concurrent = concurrent;
  }

  MergeMapOperator.prototype.call = function (observer, source) {
    return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
  };

  return MergeMapOperator;
}();

exports.MergeMapOperator = MergeMapOperator;

var MergeMapSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(MergeMapSubscriber, _super);

  function MergeMapSubscriber(destination, project, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }

    var _this = _super.call(this, destination) || this;

    _this.project = project;
    _this.concurrent = concurrent;
    _this.hasCompleted = false;
    _this.buffer = [];
    _this.active = 0;
    _this.index = 0;
    return _this;
  }

  MergeMapSubscriber.prototype._next = function (value) {
    if (this.active < this.concurrent) {
      this._tryNext(value);
    } else {
      this.buffer.push(value);
    }
  };

  MergeMapSubscriber.prototype._tryNext = function (value) {
    var result;
    var index = this.index++;

    try {
      result = this.project(value, index);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.active++;

    this._innerSub(result, value, index);
  };

  MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
    var innerSubscriber = new _InnerSubscriber.InnerSubscriber(this, undefined, undefined);
    var destination = this.destination;
    destination.add(innerSubscriber);
    (0, _subscribeToResult.subscribeToResult)(this, ish, value, index, innerSubscriber);
  };

  MergeMapSubscriber.prototype._complete = function () {
    this.hasCompleted = true;

    if (this.active === 0 && this.buffer.length === 0) {
      this.destination.complete();
    }

    this.unsubscribe();
  };

  MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.destination.next(innerValue);
  };

  MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
    var buffer = this.buffer;
    this.remove(innerSub);
    this.active--;

    if (buffer.length > 0) {
      this._next(buffer.shift());
    } else if (this.active === 0 && this.hasCompleted) {
      this.destination.complete();
    }
  };

  return MergeMapSubscriber;
}(_OuterSubscriber.OuterSubscriber);

exports.MergeMapSubscriber = MergeMapSubscriber;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../InnerSubscriber":"../../node_modules/rxjs/_esm5/internal/InnerSubscriber.js","./map":"../../node_modules/rxjs/_esm5/internal/operators/map.js","../observable/from":"../../node_modules/rxjs/_esm5/internal/observable/from.js"}],"../../node_modules/rxjs/_esm5/internal/operators/mergeAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeAll = mergeAll;

var _mergeMap = require("./mergeMap");

var _identity = require("../util/identity");

/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */
function mergeAll(concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }

  return (0, _mergeMap.mergeMap)(_identity.identity, concurrent);
}
},{"./mergeMap":"../../node_modules/rxjs/_esm5/internal/operators/mergeMap.js","../util/identity":"../../node_modules/rxjs/_esm5/internal/util/identity.js"}],"../../node_modules/rxjs/_esm5/internal/operators/concatAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatAll = concatAll;

var _mergeAll = require("./mergeAll");

/** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */
function concatAll() {
  return (0, _mergeAll.mergeAll)(1);
}
},{"./mergeAll":"../../node_modules/rxjs/_esm5/internal/operators/mergeAll.js"}],"../../node_modules/rxjs/_esm5/internal/observable/concat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concat = concat;

var _of = require("./of");

var _concatAll = require("../operators/concatAll");

/** PURE_IMPORTS_START _of,_operators_concatAll PURE_IMPORTS_END */
function concat() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  return (0, _concatAll.concatAll)()(_of.of.apply(void 0, observables));
}
},{"./of":"../../node_modules/rxjs/_esm5/internal/observable/of.js","../operators/concatAll":"../../node_modules/rxjs/_esm5/internal/operators/concatAll.js"}],"../../node_modules/rxjs/_esm5/internal/observable/defer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defer = defer;

var _Observable = require("../Observable");

var _from = require("./from");

var _empty = require("./empty");

/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */
function defer(observableFactory) {
  return new _Observable.Observable(function (subscriber) {
    var input;

    try {
      input = observableFactory();
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    var source = input ? (0, _from.from)(input) : (0, _empty.empty)();
    return source.subscribe(subscriber);
  });
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","./from":"../../node_modules/rxjs/_esm5/internal/observable/from.js","./empty":"../../node_modules/rxjs/_esm5/internal/observable/empty.js"}],"../../node_modules/rxjs/_esm5/internal/observable/forkJoin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forkJoin = forkJoin;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Observable = require("../Observable");

var _isArray = require("../util/isArray");

var _empty = require("./empty");

var _subscribeToResult = require("../util/subscribeToResult");

var _OuterSubscriber = require("../OuterSubscriber");

var _map = require("../operators/map");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Observable,_util_isArray,_empty,_util_subscribeToResult,_OuterSubscriber,_operators_map PURE_IMPORTS_END */
function forkJoin() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  var resultSelector;

  if (typeof sources[sources.length - 1] === 'function') {
    resultSelector = sources.pop();
  }

  if (sources.length === 1 && (0, _isArray.isArray)(sources[0])) {
    sources = sources[0];
  }

  if (sources.length === 0) {
    return _empty.EMPTY;
  }

  if (resultSelector) {
    return forkJoin(sources).pipe((0, _map.map)(function (args) {
      return resultSelector.apply(void 0, args);
    }));
  }

  return new _Observable.Observable(function (subscriber) {
    return new ForkJoinSubscriber(subscriber, sources);
  });
}

var ForkJoinSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ForkJoinSubscriber, _super);

  function ForkJoinSubscriber(destination, sources) {
    var _this = _super.call(this, destination) || this;

    _this.sources = sources;
    _this.completed = 0;
    _this.haveValues = 0;
    var len = sources.length;
    _this.values = new Array(len);

    for (var i = 0; i < len; i++) {
      var source = sources[i];
      var innerSubscription = (0, _subscribeToResult.subscribeToResult)(_this, source, null, i);

      if (innerSubscription) {
        _this.add(innerSubscription);
      }
    }

    return _this;
  }

  ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.values[outerIndex] = innerValue;

    if (!innerSub._hasValue) {
      innerSub._hasValue = true;
      this.haveValues++;
    }
  };

  ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
    var _a = this,
        destination = _a.destination,
        haveValues = _a.haveValues,
        values = _a.values;

    var len = values.length;

    if (!innerSub._hasValue) {
      destination.complete();
      return;
    }

    this.completed++;

    if (this.completed !== len) {
      return;
    }

    if (haveValues === len) {
      destination.next(values);
    }

    destination.complete();
  };

  return ForkJoinSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","../util/isArray":"../../node_modules/rxjs/_esm5/internal/util/isArray.js","./empty":"../../node_modules/rxjs/_esm5/internal/observable/empty.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../operators/map":"../../node_modules/rxjs/_esm5/internal/operators/map.js"}],"../../node_modules/rxjs/_esm5/internal/observable/fromEvent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromEvent = fromEvent;

var _Observable = require("../Observable");

var _isArray = require("../util/isArray");

var _isFunction = require("../util/isFunction");

var _map = require("../operators/map");

/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */
var toString = Object.prototype.toString;

function fromEvent(target, eventName, options, resultSelector) {
  if ((0, _isFunction.isFunction)(options)) {
    resultSelector = options;
    options = undefined;
  }

  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe((0, _map.map)(function (args) {
      return (0, _isArray.isArray)(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
  }

  return new _Observable.Observable(function (subscriber) {
    function handler(e) {
      if (arguments.length > 1) {
        subscriber.next(Array.prototype.slice.call(arguments));
      } else {
        subscriber.next(e);
      }
    }

    setupSubscription(target, eventName, handler, subscriber, options);
  });
}

function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
  var unsubscribe;

  if (isEventTarget(sourceObj)) {
    var source_1 = sourceObj;
    sourceObj.addEventListener(eventName, handler, options);

    unsubscribe = function () {
      return source_1.removeEventListener(eventName, handler, options);
    };
  } else if (isJQueryStyleEventEmitter(sourceObj)) {
    var source_2 = sourceObj;
    sourceObj.on(eventName, handler);

    unsubscribe = function () {
      return source_2.off(eventName, handler);
    };
  } else if (isNodeStyleEventEmitter(sourceObj)) {
    var source_3 = sourceObj;
    sourceObj.addListener(eventName, handler);

    unsubscribe = function () {
      return source_3.removeListener(eventName, handler);
    };
  } else if (sourceObj && sourceObj.length) {
    for (var i = 0, len = sourceObj.length; i < len; i++) {
      setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
    }
  } else {
    throw new TypeError('Invalid event target');
  }

  subscriber.add(unsubscribe);
}

function isNodeStyleEventEmitter(sourceObj) {
  return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}

function isJQueryStyleEventEmitter(sourceObj) {
  return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}

function isEventTarget(sourceObj) {
  return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","../util/isArray":"../../node_modules/rxjs/_esm5/internal/util/isArray.js","../util/isFunction":"../../node_modules/rxjs/_esm5/internal/util/isFunction.js","../operators/map":"../../node_modules/rxjs/_esm5/internal/operators/map.js"}],"../../node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromEventPattern = fromEventPattern;

var _Observable = require("../Observable");

var _isArray = require("../util/isArray");

var _isFunction = require("../util/isFunction");

var _map = require("../operators/map");

/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */
function fromEventPattern(addHandler, removeHandler, resultSelector) {
  if (resultSelector) {
    return fromEventPattern(addHandler, removeHandler).pipe((0, _map.map)(function (args) {
      return (0, _isArray.isArray)(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
  }

  return new _Observable.Observable(function (subscriber) {
    var handler = function () {
      var e = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        e[_i] = arguments[_i];
      }

      return subscriber.next(e.length === 1 ? e[0] : e);
    };

    var retValue;

    try {
      retValue = addHandler(handler);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    if (!(0, _isFunction.isFunction)(removeHandler)) {
      return undefined;
    }

    return function () {
      return removeHandler(handler, retValue);
    };
  });
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","../util/isArray":"../../node_modules/rxjs/_esm5/internal/util/isArray.js","../util/isFunction":"../../node_modules/rxjs/_esm5/internal/util/isFunction.js","../operators/map":"../../node_modules/rxjs/_esm5/internal/operators/map.js"}],"../../node_modules/rxjs/_esm5/internal/observable/generate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generate = generate;

var _Observable = require("../Observable");

var _identity = require("../util/identity");

var _isScheduler = require("../util/isScheduler");

/** PURE_IMPORTS_START _Observable,_util_identity,_util_isScheduler PURE_IMPORTS_END */
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
  var resultSelector;
  var initialState;

  if (arguments.length == 1) {
    var options = initialStateOrOptions;
    initialState = options.initialState;
    condition = options.condition;
    iterate = options.iterate;
    resultSelector = options.resultSelector || _identity.identity;
    scheduler = options.scheduler;
  } else if (resultSelectorOrObservable === undefined || (0, _isScheduler.isScheduler)(resultSelectorOrObservable)) {
    initialState = initialStateOrOptions;
    resultSelector = _identity.identity;
    scheduler = resultSelectorOrObservable;
  } else {
    initialState = initialStateOrOptions;
    resultSelector = resultSelectorOrObservable;
  }

  return new _Observable.Observable(function (subscriber) {
    var state = initialState;

    if (scheduler) {
      return scheduler.schedule(dispatch, 0, {
        subscriber: subscriber,
        iterate: iterate,
        condition: condition,
        resultSelector: resultSelector,
        state: state
      });
    }

    do {
      if (condition) {
        var conditionResult = void 0;

        try {
          conditionResult = condition(state);
        } catch (err) {
          subscriber.error(err);
          return undefined;
        }

        if (!conditionResult) {
          subscriber.complete();
          break;
        }
      }

      var value = void 0;

      try {
        value = resultSelector(state);
      } catch (err) {
        subscriber.error(err);
        return undefined;
      }

      subscriber.next(value);

      if (subscriber.closed) {
        break;
      }

      try {
        state = iterate(state);
      } catch (err) {
        subscriber.error(err);
        return undefined;
      }
    } while (true);

    return undefined;
  });
}

function dispatch(state) {
  var subscriber = state.subscriber,
      condition = state.condition;

  if (subscriber.closed) {
    return undefined;
  }

  if (state.needIterate) {
    try {
      state.state = state.iterate(state.state);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }
  } else {
    state.needIterate = true;
  }

  if (condition) {
    var conditionResult = void 0;

    try {
      conditionResult = condition(state.state);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    if (!conditionResult) {
      subscriber.complete();
      return undefined;
    }

    if (subscriber.closed) {
      return undefined;
    }
  }

  var value;

  try {
    value = state.resultSelector(state.state);
  } catch (err) {
    subscriber.error(err);
    return undefined;
  }

  if (subscriber.closed) {
    return undefined;
  }

  subscriber.next(value);

  if (subscriber.closed) {
    return undefined;
  }

  return this.schedule(state);
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","../util/identity":"../../node_modules/rxjs/_esm5/internal/util/identity.js","../util/isScheduler":"../../node_modules/rxjs/_esm5/internal/util/isScheduler.js"}],"../../node_modules/rxjs/_esm5/internal/observable/iif.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iif = iif;

var _defer = require("./defer");

var _empty = require("./empty");

/** PURE_IMPORTS_START _defer,_empty PURE_IMPORTS_END */
function iif(condition, trueResult, falseResult) {
  if (trueResult === void 0) {
    trueResult = _empty.EMPTY;
  }

  if (falseResult === void 0) {
    falseResult = _empty.EMPTY;
  }

  return (0, _defer.defer)(function () {
    return condition() ? trueResult : falseResult;
  });
}
},{"./defer":"../../node_modules/rxjs/_esm5/internal/observable/defer.js","./empty":"../../node_modules/rxjs/_esm5/internal/observable/empty.js"}],"../../node_modules/rxjs/_esm5/internal/util/isNumeric.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumeric = isNumeric;

var _isArray = require("./isArray");

/** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */
function isNumeric(val) {
  return !(0, _isArray.isArray)(val) && val - parseFloat(val) + 1 >= 0;
}
},{"./isArray":"../../node_modules/rxjs/_esm5/internal/util/isArray.js"}],"../../node_modules/rxjs/_esm5/internal/observable/interval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interval = interval;

var _Observable = require("../Observable");

var _async = require("../scheduler/async");

var _isNumeric = require("../util/isNumeric");

/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */
function interval(period, scheduler) {
  if (period === void 0) {
    period = 0;
  }

  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  if (!(0, _isNumeric.isNumeric)(period) || period < 0) {
    period = 0;
  }

  if (!scheduler || typeof scheduler.schedule !== 'function') {
    scheduler = _async.async;
  }

  return new _Observable.Observable(function (subscriber) {
    subscriber.add(scheduler.schedule(dispatch, period, {
      subscriber: subscriber,
      counter: 0,
      period: period
    }));
    return subscriber;
  });
}

function dispatch(state) {
  var subscriber = state.subscriber,
      counter = state.counter,
      period = state.period;
  subscriber.next(counter);
  this.schedule({
    subscriber: subscriber,
    counter: counter + 1,
    period: period
  }, period);
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","../scheduler/async":"../../node_modules/rxjs/_esm5/internal/scheduler/async.js","../util/isNumeric":"../../node_modules/rxjs/_esm5/internal/util/isNumeric.js"}],"../../node_modules/rxjs/_esm5/internal/observable/merge.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = merge;

var _Observable = require("../Observable");

var _isScheduler = require("../util/isScheduler");

var _mergeAll = require("../operators/mergeAll");

var _fromArray = require("./fromArray");

/** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */
function merge() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  var concurrent = Number.POSITIVE_INFINITY;
  var scheduler = null;
  var last = observables[observables.length - 1];

  if ((0, _isScheduler.isScheduler)(last)) {
    scheduler = observables.pop();

    if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
      concurrent = observables.pop();
    }
  } else if (typeof last === 'number') {
    concurrent = observables.pop();
  }

  if (scheduler === null && observables.length === 1 && observables[0] instanceof _Observable.Observable) {
    return observables[0];
  }

  return (0, _mergeAll.mergeAll)(concurrent)((0, _fromArray.fromArray)(observables, scheduler));
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","../util/isScheduler":"../../node_modules/rxjs/_esm5/internal/util/isScheduler.js","../operators/mergeAll":"../../node_modules/rxjs/_esm5/internal/operators/mergeAll.js","./fromArray":"../../node_modules/rxjs/_esm5/internal/observable/fromArray.js"}],"../../node_modules/rxjs/_esm5/internal/observable/never.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.never = never;
exports.NEVER = void 0;

var _Observable = require("../Observable");

var _noop = require("../util/noop");

/** PURE_IMPORTS_START _Observable,_util_noop PURE_IMPORTS_END */
var NEVER =
/*@__PURE__*/
new _Observable.Observable(_noop.noop);
exports.NEVER = NEVER;

function never() {
  return NEVER;
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","../util/noop":"../../node_modules/rxjs/_esm5/internal/util/noop.js"}],"../../node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onErrorResumeNext = onErrorResumeNext;

var _Observable = require("../Observable");

var _from = require("./from");

var _isArray = require("../util/isArray");

var _empty = require("./empty");

/** PURE_IMPORTS_START _Observable,_from,_util_isArray,_empty PURE_IMPORTS_END */
function onErrorResumeNext() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  if (sources.length === 0) {
    return _empty.EMPTY;
  }

  var first = sources[0],
      remainder = sources.slice(1);

  if (sources.length === 1 && (0, _isArray.isArray)(first)) {
    return onErrorResumeNext.apply(void 0, first);
  }

  return new _Observable.Observable(function (subscriber) {
    var subNext = function () {
      return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber));
    };

    return (0, _from.from)(first).subscribe({
      next: function (value) {
        subscriber.next(value);
      },
      error: subNext,
      complete: subNext
    });
  });
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","./from":"../../node_modules/rxjs/_esm5/internal/observable/from.js","../util/isArray":"../../node_modules/rxjs/_esm5/internal/util/isArray.js","./empty":"../../node_modules/rxjs/_esm5/internal/observable/empty.js"}],"../../node_modules/rxjs/_esm5/internal/observable/pairs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pairs = pairs;
exports.dispatch = dispatch;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
function pairs(obj, scheduler) {
  if (!scheduler) {
    return new _Observable.Observable(function (subscriber) {
      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length && !subscriber.closed; i++) {
        var key = keys[i];

        if (obj.hasOwnProperty(key)) {
          subscriber.next([key, obj[key]]);
        }
      }

      subscriber.complete();
    });
  } else {
    return new _Observable.Observable(function (subscriber) {
      var keys = Object.keys(obj);
      var subscription = new _Subscription.Subscription();
      subscription.add(scheduler.schedule(dispatch, 0, {
        keys: keys,
        index: 0,
        subscriber: subscriber,
        subscription: subscription,
        obj: obj
      }));
      return subscription;
    });
  }
}

function dispatch(state) {
  var keys = state.keys,
      index = state.index,
      subscriber = state.subscriber,
      subscription = state.subscription,
      obj = state.obj;

  if (!subscriber.closed) {
    if (index < keys.length) {
      var key = keys[index];
      subscriber.next([key, obj[key]]);
      subscription.add(this.schedule({
        keys: keys,
        index: index + 1,
        subscriber: subscriber,
        subscription: subscription,
        obj: obj
      }));
    } else {
      subscriber.complete();
    }
  }
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","../Subscription":"../../node_modules/rxjs/_esm5/internal/Subscription.js"}],"../../node_modules/rxjs/_esm5/internal/observable/race.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.race = race;
exports.RaceSubscriber = exports.RaceOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _isArray = require("../util/isArray");

var _fromArray = require("./fromArray");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_util_isArray,_fromArray,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function race() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  if (observables.length === 1) {
    if ((0, _isArray.isArray)(observables[0])) {
      observables = observables[0];
    } else {
      return observables[0];
    }
  }

  return (0, _fromArray.fromArray)(observables, undefined).lift(new RaceOperator());
}

var RaceOperator =
/*@__PURE__*/
function () {
  function RaceOperator() {}

  RaceOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new RaceSubscriber(subscriber));
  };

  return RaceOperator;
}();

exports.RaceOperator = RaceOperator;

var RaceSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(RaceSubscriber, _super);

  function RaceSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.hasFirst = false;
    _this.observables = [];
    _this.subscriptions = [];
    return _this;
  }

  RaceSubscriber.prototype._next = function (observable) {
    this.observables.push(observable);
  };

  RaceSubscriber.prototype._complete = function () {
    var observables = this.observables;
    var len = observables.length;

    if (len === 0) {
      this.destination.complete();
    } else {
      for (var i = 0; i < len && !this.hasFirst; i++) {
        var observable = observables[i];
        var subscription = (0, _subscribeToResult.subscribeToResult)(this, observable, observable, i);

        if (this.subscriptions) {
          this.subscriptions.push(subscription);
        }

        this.add(subscription);
      }

      this.observables = null;
    }
  };

  RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    if (!this.hasFirst) {
      this.hasFirst = true;

      for (var i = 0; i < this.subscriptions.length; i++) {
        if (i !== outerIndex) {
          var subscription = this.subscriptions[i];
          subscription.unsubscribe();
          this.remove(subscription);
        }
      }

      this.subscriptions = null;
    }

    this.destination.next(innerValue);
  };

  return RaceSubscriber;
}(_OuterSubscriber.OuterSubscriber);

exports.RaceSubscriber = RaceSubscriber;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../util/isArray":"../../node_modules/rxjs/_esm5/internal/util/isArray.js","./fromArray":"../../node_modules/rxjs/_esm5/internal/observable/fromArray.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/observable/range.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;
exports.dispatch = dispatch;

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
function range(start, count, scheduler) {
  if (start === void 0) {
    start = 0;
  }

  return new _Observable.Observable(function (subscriber) {
    if (count === undefined) {
      count = start;
      start = 0;
    }

    var index = 0;
    var current = start;

    if (scheduler) {
      return scheduler.schedule(dispatch, 0, {
        index: index,
        count: count,
        start: start,
        subscriber: subscriber
      });
    } else {
      do {
        if (index++ >= count) {
          subscriber.complete();
          break;
        }

        subscriber.next(current++);

        if (subscriber.closed) {
          break;
        }
      } while (true);
    }

    return undefined;
  });
}

function dispatch(state) {
  var start = state.start,
      index = state.index,
      count = state.count,
      subscriber = state.subscriber;

  if (index >= count) {
    subscriber.complete();
    return;
  }

  subscriber.next(start);

  if (subscriber.closed) {
    return;
  }

  state.index = index + 1;
  state.start = start + 1;
  this.schedule(state);
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js"}],"../../node_modules/rxjs/_esm5/internal/observable/timer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timer = timer;

var _Observable = require("../Observable");

var _async = require("../scheduler/async");

var _isNumeric = require("../util/isNumeric");

var _isScheduler = require("../util/isScheduler");

/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */
function timer(dueTime, periodOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }

  var period = -1;

  if ((0, _isNumeric.isNumeric)(periodOrScheduler)) {
    period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
  } else if ((0, _isScheduler.isScheduler)(periodOrScheduler)) {
    scheduler = periodOrScheduler;
  }

  if (!(0, _isScheduler.isScheduler)(scheduler)) {
    scheduler = _async.async;
  }

  return new _Observable.Observable(function (subscriber) {
    var due = (0, _isNumeric.isNumeric)(dueTime) ? dueTime : +dueTime - scheduler.now();
    return scheduler.schedule(dispatch, due, {
      index: 0,
      period: period,
      subscriber: subscriber
    });
  });
}

function dispatch(state) {
  var index = state.index,
      period = state.period,
      subscriber = state.subscriber;
  subscriber.next(index);

  if (subscriber.closed) {
    return;
  } else if (period === -1) {
    return subscriber.complete();
  }

  state.index = index + 1;
  this.schedule(state, period);
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","../scheduler/async":"../../node_modules/rxjs/_esm5/internal/scheduler/async.js","../util/isNumeric":"../../node_modules/rxjs/_esm5/internal/util/isNumeric.js","../util/isScheduler":"../../node_modules/rxjs/_esm5/internal/util/isScheduler.js"}],"../../node_modules/rxjs/_esm5/internal/observable/using.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.using = using;

var _Observable = require("../Observable");

var _from = require("./from");

var _empty = require("./empty");

/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */
function using(resourceFactory, observableFactory) {
  return new _Observable.Observable(function (subscriber) {
    var resource;

    try {
      resource = resourceFactory();
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    var result;

    try {
      result = observableFactory(resource);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    var source = result ? (0, _from.from)(result) : _empty.EMPTY;
    var subscription = source.subscribe(subscriber);
    return function () {
      subscription.unsubscribe();

      if (resource) {
        resource.unsubscribe();
      }
    };
  });
}
},{"../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","./from":"../../node_modules/rxjs/_esm5/internal/observable/from.js","./empty":"../../node_modules/rxjs/_esm5/internal/observable/empty.js"}],"../../node_modules/rxjs/_esm5/internal/observable/zip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = zip;
exports.ZipSubscriber = exports.ZipOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _fromArray = require("./fromArray");

var _isArray = require("../util/isArray");

var _Subscriber = require("../Subscriber");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

var _iterator = require("../../internal/symbol/iterator");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_fromArray,_util_isArray,_Subscriber,_OuterSubscriber,_util_subscribeToResult,_.._internal_symbol_iterator PURE_IMPORTS_END */
function zip() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  var resultSelector = observables[observables.length - 1];

  if (typeof resultSelector === 'function') {
    observables.pop();
  }

  return (0, _fromArray.fromArray)(observables, undefined).lift(new ZipOperator(resultSelector));
}

var ZipOperator =
/*@__PURE__*/
function () {
  function ZipOperator(resultSelector) {
    this.resultSelector = resultSelector;
  }

  ZipOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
  };

  return ZipOperator;
}();

exports.ZipOperator = ZipOperator;

var ZipSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ZipSubscriber, _super);

  function ZipSubscriber(destination, resultSelector, values) {
    if (values === void 0) {
      values = Object.create(null);
    }

    var _this = _super.call(this, destination) || this;

    _this.iterators = [];
    _this.active = 0;
    _this.resultSelector = typeof resultSelector === 'function' ? resultSelector : null;
    _this.values = values;
    return _this;
  }

  ZipSubscriber.prototype._next = function (value) {
    var iterators = this.iterators;

    if ((0, _isArray.isArray)(value)) {
      iterators.push(new StaticArrayIterator(value));
    } else if (typeof value[_iterator.iterator] === 'function') {
      iterators.push(new StaticIterator(value[_iterator.iterator]()));
    } else {
      iterators.push(new ZipBufferIterator(this.destination, this, value));
    }
  };

  ZipSubscriber.prototype._complete = function () {
    var iterators = this.iterators;
    var len = iterators.length;
    this.unsubscribe();

    if (len === 0) {
      this.destination.complete();
      return;
    }

    this.active = len;

    for (var i = 0; i < len; i++) {
      var iterator = iterators[i];

      if (iterator.stillUnsubscribed) {
        var destination = this.destination;
        destination.add(iterator.subscribe(iterator, i));
      } else {
        this.active--;
      }
    }
  };

  ZipSubscriber.prototype.notifyInactive = function () {
    this.active--;

    if (this.active === 0) {
      this.destination.complete();
    }
  };

  ZipSubscriber.prototype.checkIterators = function () {
    var iterators = this.iterators;
    var len = iterators.length;
    var destination = this.destination;

    for (var i = 0; i < len; i++) {
      var iterator = iterators[i];

      if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
        return;
      }
    }

    var shouldComplete = false;
    var args = [];

    for (var i = 0; i < len; i++) {
      var iterator = iterators[i];
      var result = iterator.next();

      if (iterator.hasCompleted()) {
        shouldComplete = true;
      }

      if (result.done) {
        destination.complete();
        return;
      }

      args.push(result.value);
    }

    if (this.resultSelector) {
      this._tryresultSelector(args);
    } else {
      destination.next(args);
    }

    if (shouldComplete) {
      destination.complete();
    }
  };

  ZipSubscriber.prototype._tryresultSelector = function (args) {
    var result;

    try {
      result = this.resultSelector.apply(this, args);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  };

  return ZipSubscriber;
}(_Subscriber.Subscriber);

exports.ZipSubscriber = ZipSubscriber;

var StaticIterator =
/*@__PURE__*/
function () {
  function StaticIterator(iterator) {
    this.iterator = iterator;
    this.nextResult = iterator.next();
  }

  StaticIterator.prototype.hasValue = function () {
    return true;
  };

  StaticIterator.prototype.next = function () {
    var result = this.nextResult;
    this.nextResult = this.iterator.next();
    return result;
  };

  StaticIterator.prototype.hasCompleted = function () {
    var nextResult = this.nextResult;
    return nextResult && nextResult.done;
  };

  return StaticIterator;
}();

var StaticArrayIterator =
/*@__PURE__*/
function () {
  function StaticArrayIterator(array) {
    this.array = array;
    this.index = 0;
    this.length = 0;
    this.length = array.length;
  }

  StaticArrayIterator.prototype[_iterator.iterator] = function () {
    return this;
  };

  StaticArrayIterator.prototype.next = function (value) {
    var i = this.index++;
    var array = this.array;
    return i < this.length ? {
      value: array[i],
      done: false
    } : {
      value: null,
      done: true
    };
  };

  StaticArrayIterator.prototype.hasValue = function () {
    return this.array.length > this.index;
  };

  StaticArrayIterator.prototype.hasCompleted = function () {
    return this.array.length === this.index;
  };

  return StaticArrayIterator;
}();

var ZipBufferIterator =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ZipBufferIterator, _super);

  function ZipBufferIterator(destination, parent, observable) {
    var _this = _super.call(this, destination) || this;

    _this.parent = parent;
    _this.observable = observable;
    _this.stillUnsubscribed = true;
    _this.buffer = [];
    _this.isComplete = false;
    return _this;
  }

  ZipBufferIterator.prototype[_iterator.iterator] = function () {
    return this;
  };

  ZipBufferIterator.prototype.next = function () {
    var buffer = this.buffer;

    if (buffer.length === 0 && this.isComplete) {
      return {
        value: null,
        done: true
      };
    } else {
      return {
        value: buffer.shift(),
        done: false
      };
    }
  };

  ZipBufferIterator.prototype.hasValue = function () {
    return this.buffer.length > 0;
  };

  ZipBufferIterator.prototype.hasCompleted = function () {
    return this.buffer.length === 0 && this.isComplete;
  };

  ZipBufferIterator.prototype.notifyComplete = function () {
    if (this.buffer.length > 0) {
      this.isComplete = true;
      this.parent.notifyInactive();
    } else {
      this.destination.complete();
    }
  };

  ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.buffer.push(innerValue);
    this.parent.checkIterators();
  };

  ZipBufferIterator.prototype.subscribe = function (value, index) {
    return (0, _subscribeToResult.subscribeToResult)(this, this.observable, this, index);
  };

  return ZipBufferIterator;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./fromArray":"../../node_modules/rxjs/_esm5/internal/observable/fromArray.js","../util/isArray":"../../node_modules/rxjs/_esm5/internal/util/isArray.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js","../../internal/symbol/iterator":"../../node_modules/rxjs/_esm5/internal/symbol/iterator.js"}],"../../node_modules/rxjs/_esm5/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Observable", {
  enumerable: true,
  get: function () {
    return _Observable.Observable;
  }
});
Object.defineProperty(exports, "ConnectableObservable", {
  enumerable: true,
  get: function () {
    return _ConnectableObservable.ConnectableObservable;
  }
});
Object.defineProperty(exports, "GroupedObservable", {
  enumerable: true,
  get: function () {
    return _groupBy.GroupedObservable;
  }
});
Object.defineProperty(exports, "observable", {
  enumerable: true,
  get: function () {
    return _observable.observable;
  }
});
Object.defineProperty(exports, "Subject", {
  enumerable: true,
  get: function () {
    return _Subject.Subject;
  }
});
Object.defineProperty(exports, "BehaviorSubject", {
  enumerable: true,
  get: function () {
    return _BehaviorSubject.BehaviorSubject;
  }
});
Object.defineProperty(exports, "ReplaySubject", {
  enumerable: true,
  get: function () {
    return _ReplaySubject.ReplaySubject;
  }
});
Object.defineProperty(exports, "AsyncSubject", {
  enumerable: true,
  get: function () {
    return _AsyncSubject.AsyncSubject;
  }
});
Object.defineProperty(exports, "asapScheduler", {
  enumerable: true,
  get: function () {
    return _asap.asap;
  }
});
Object.defineProperty(exports, "asyncScheduler", {
  enumerable: true,
  get: function () {
    return _async.async;
  }
});
Object.defineProperty(exports, "queueScheduler", {
  enumerable: true,
  get: function () {
    return _queue.queue;
  }
});
Object.defineProperty(exports, "animationFrameScheduler", {
  enumerable: true,
  get: function () {
    return _animationFrame.animationFrame;
  }
});
Object.defineProperty(exports, "VirtualTimeScheduler", {
  enumerable: true,
  get: function () {
    return _VirtualTimeScheduler.VirtualTimeScheduler;
  }
});
Object.defineProperty(exports, "VirtualAction", {
  enumerable: true,
  get: function () {
    return _VirtualTimeScheduler.VirtualAction;
  }
});
Object.defineProperty(exports, "Scheduler", {
  enumerable: true,
  get: function () {
    return _Scheduler.Scheduler;
  }
});
Object.defineProperty(exports, "Subscription", {
  enumerable: true,
  get: function () {
    return _Subscription.Subscription;
  }
});
Object.defineProperty(exports, "Subscriber", {
  enumerable: true,
  get: function () {
    return _Subscriber.Subscriber;
  }
});
Object.defineProperty(exports, "Notification", {
  enumerable: true,
  get: function () {
    return _Notification.Notification;
  }
});
Object.defineProperty(exports, "pipe", {
  enumerable: true,
  get: function () {
    return _pipe.pipe;
  }
});
Object.defineProperty(exports, "noop", {
  enumerable: true,
  get: function () {
    return _noop.noop;
  }
});
Object.defineProperty(exports, "identity", {
  enumerable: true,
  get: function () {
    return _identity.identity;
  }
});
Object.defineProperty(exports, "isObservable", {
  enumerable: true,
  get: function () {
    return _isObservable.isObservable;
  }
});
Object.defineProperty(exports, "ArgumentOutOfRangeError", {
  enumerable: true,
  get: function () {
    return _ArgumentOutOfRangeError.ArgumentOutOfRangeError;
  }
});
Object.defineProperty(exports, "EmptyError", {
  enumerable: true,
  get: function () {
    return _EmptyError.EmptyError;
  }
});
Object.defineProperty(exports, "ObjectUnsubscribedError", {
  enumerable: true,
  get: function () {
    return _ObjectUnsubscribedError.ObjectUnsubscribedError;
  }
});
Object.defineProperty(exports, "UnsubscriptionError", {
  enumerable: true,
  get: function () {
    return _UnsubscriptionError.UnsubscriptionError;
  }
});
Object.defineProperty(exports, "TimeoutError", {
  enumerable: true,
  get: function () {
    return _TimeoutError.TimeoutError;
  }
});
Object.defineProperty(exports, "bindCallback", {
  enumerable: true,
  get: function () {
    return _bindCallback.bindCallback;
  }
});
Object.defineProperty(exports, "bindNodeCallback", {
  enumerable: true,
  get: function () {
    return _bindNodeCallback.bindNodeCallback;
  }
});
Object.defineProperty(exports, "combineLatest", {
  enumerable: true,
  get: function () {
    return _combineLatest.combineLatest;
  }
});
Object.defineProperty(exports, "concat", {
  enumerable: true,
  get: function () {
    return _concat.concat;
  }
});
Object.defineProperty(exports, "defer", {
  enumerable: true,
  get: function () {
    return _defer.defer;
  }
});
Object.defineProperty(exports, "empty", {
  enumerable: true,
  get: function () {
    return _empty.empty;
  }
});
Object.defineProperty(exports, "EMPTY", {
  enumerable: true,
  get: function () {
    return _empty.EMPTY;
  }
});
Object.defineProperty(exports, "forkJoin", {
  enumerable: true,
  get: function () {
    return _forkJoin.forkJoin;
  }
});
Object.defineProperty(exports, "from", {
  enumerable: true,
  get: function () {
    return _from.from;
  }
});
Object.defineProperty(exports, "fromEvent", {
  enumerable: true,
  get: function () {
    return _fromEvent.fromEvent;
  }
});
Object.defineProperty(exports, "fromEventPattern", {
  enumerable: true,
  get: function () {
    return _fromEventPattern.fromEventPattern;
  }
});
Object.defineProperty(exports, "generate", {
  enumerable: true,
  get: function () {
    return _generate.generate;
  }
});
Object.defineProperty(exports, "iif", {
  enumerable: true,
  get: function () {
    return _iif.iif;
  }
});
Object.defineProperty(exports, "interval", {
  enumerable: true,
  get: function () {
    return _interval.interval;
  }
});
Object.defineProperty(exports, "merge", {
  enumerable: true,
  get: function () {
    return _merge.merge;
  }
});
Object.defineProperty(exports, "never", {
  enumerable: true,
  get: function () {
    return _never.never;
  }
});
Object.defineProperty(exports, "NEVER", {
  enumerable: true,
  get: function () {
    return _never.NEVER;
  }
});
Object.defineProperty(exports, "of", {
  enumerable: true,
  get: function () {
    return _of.of;
  }
});
Object.defineProperty(exports, "onErrorResumeNext", {
  enumerable: true,
  get: function () {
    return _onErrorResumeNext.onErrorResumeNext;
  }
});
Object.defineProperty(exports, "pairs", {
  enumerable: true,
  get: function () {
    return _pairs.pairs;
  }
});
Object.defineProperty(exports, "race", {
  enumerable: true,
  get: function () {
    return _race.race;
  }
});
Object.defineProperty(exports, "range", {
  enumerable: true,
  get: function () {
    return _range.range;
  }
});
Object.defineProperty(exports, "throwError", {
  enumerable: true,
  get: function () {
    return _throwError.throwError;
  }
});
Object.defineProperty(exports, "timer", {
  enumerable: true,
  get: function () {
    return _timer.timer;
  }
});
Object.defineProperty(exports, "using", {
  enumerable: true,
  get: function () {
    return _using.using;
  }
});
Object.defineProperty(exports, "zip", {
  enumerable: true,
  get: function () {
    return _zip.zip;
  }
});
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function () {
    return _config.config;
  }
});

var _Observable = require("./internal/Observable");

var _ConnectableObservable = require("./internal/observable/ConnectableObservable");

var _groupBy = require("./internal/operators/groupBy");

var _observable = require("./internal/symbol/observable");

var _Subject = require("./internal/Subject");

var _BehaviorSubject = require("./internal/BehaviorSubject");

var _ReplaySubject = require("./internal/ReplaySubject");

var _AsyncSubject = require("./internal/AsyncSubject");

var _asap = require("./internal/scheduler/asap");

var _async = require("./internal/scheduler/async");

var _queue = require("./internal/scheduler/queue");

var _animationFrame = require("./internal/scheduler/animationFrame");

var _VirtualTimeScheduler = require("./internal/scheduler/VirtualTimeScheduler");

var _Scheduler = require("./internal/Scheduler");

var _Subscription = require("./internal/Subscription");

var _Subscriber = require("./internal/Subscriber");

var _Notification = require("./internal/Notification");

var _pipe = require("./internal/util/pipe");

var _noop = require("./internal/util/noop");

var _identity = require("./internal/util/identity");

var _isObservable = require("./internal/util/isObservable");

var _ArgumentOutOfRangeError = require("./internal/util/ArgumentOutOfRangeError");

var _EmptyError = require("./internal/util/EmptyError");

var _ObjectUnsubscribedError = require("./internal/util/ObjectUnsubscribedError");

var _UnsubscriptionError = require("./internal/util/UnsubscriptionError");

var _TimeoutError = require("./internal/util/TimeoutError");

var _bindCallback = require("./internal/observable/bindCallback");

var _bindNodeCallback = require("./internal/observable/bindNodeCallback");

var _combineLatest = require("./internal/observable/combineLatest");

var _concat = require("./internal/observable/concat");

var _defer = require("./internal/observable/defer");

var _empty = require("./internal/observable/empty");

var _forkJoin = require("./internal/observable/forkJoin");

var _from = require("./internal/observable/from");

var _fromEvent = require("./internal/observable/fromEvent");

var _fromEventPattern = require("./internal/observable/fromEventPattern");

var _generate = require("./internal/observable/generate");

var _iif = require("./internal/observable/iif");

var _interval = require("./internal/observable/interval");

var _merge = require("./internal/observable/merge");

var _never = require("./internal/observable/never");

var _of = require("./internal/observable/of");

var _onErrorResumeNext = require("./internal/observable/onErrorResumeNext");

var _pairs = require("./internal/observable/pairs");

var _race = require("./internal/observable/race");

var _range = require("./internal/observable/range");

var _throwError = require("./internal/observable/throwError");

var _timer = require("./internal/observable/timer");

var _using = require("./internal/observable/using");

var _zip = require("./internal/observable/zip");

var _config = require("./internal/config");
},{"./internal/Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","./internal/observable/ConnectableObservable":"../../node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js","./internal/operators/groupBy":"../../node_modules/rxjs/_esm5/internal/operators/groupBy.js","./internal/symbol/observable":"../../node_modules/rxjs/_esm5/internal/symbol/observable.js","./internal/Subject":"../../node_modules/rxjs/_esm5/internal/Subject.js","./internal/BehaviorSubject":"../../node_modules/rxjs/_esm5/internal/BehaviorSubject.js","./internal/ReplaySubject":"../../node_modules/rxjs/_esm5/internal/ReplaySubject.js","./internal/AsyncSubject":"../../node_modules/rxjs/_esm5/internal/AsyncSubject.js","./internal/scheduler/asap":"../../node_modules/rxjs/_esm5/internal/scheduler/asap.js","./internal/scheduler/async":"../../node_modules/rxjs/_esm5/internal/scheduler/async.js","./internal/scheduler/queue":"../../node_modules/rxjs/_esm5/internal/scheduler/queue.js","./internal/scheduler/animationFrame":"../../node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js","./internal/scheduler/VirtualTimeScheduler":"../../node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js","./internal/Scheduler":"../../node_modules/rxjs/_esm5/internal/Scheduler.js","./internal/Subscription":"../../node_modules/rxjs/_esm5/internal/Subscription.js","./internal/Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","./internal/Notification":"../../node_modules/rxjs/_esm5/internal/Notification.js","./internal/util/pipe":"../../node_modules/rxjs/_esm5/internal/util/pipe.js","./internal/util/noop":"../../node_modules/rxjs/_esm5/internal/util/noop.js","./internal/util/identity":"../../node_modules/rxjs/_esm5/internal/util/identity.js","./internal/util/isObservable":"../../node_modules/rxjs/_esm5/internal/util/isObservable.js","./internal/util/ArgumentOutOfRangeError":"../../node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js","./internal/util/EmptyError":"../../node_modules/rxjs/_esm5/internal/util/EmptyError.js","./internal/util/ObjectUnsubscribedError":"../../node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js","./internal/util/UnsubscriptionError":"../../node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js","./internal/util/TimeoutError":"../../node_modules/rxjs/_esm5/internal/util/TimeoutError.js","./internal/observable/bindCallback":"../../node_modules/rxjs/_esm5/internal/observable/bindCallback.js","./internal/observable/bindNodeCallback":"../../node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js","./internal/observable/combineLatest":"../../node_modules/rxjs/_esm5/internal/observable/combineLatest.js","./internal/observable/concat":"../../node_modules/rxjs/_esm5/internal/observable/concat.js","./internal/observable/defer":"../../node_modules/rxjs/_esm5/internal/observable/defer.js","./internal/observable/empty":"../../node_modules/rxjs/_esm5/internal/observable/empty.js","./internal/observable/forkJoin":"../../node_modules/rxjs/_esm5/internal/observable/forkJoin.js","./internal/observable/from":"../../node_modules/rxjs/_esm5/internal/observable/from.js","./internal/observable/fromEvent":"../../node_modules/rxjs/_esm5/internal/observable/fromEvent.js","./internal/observable/fromEventPattern":"../../node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js","./internal/observable/generate":"../../node_modules/rxjs/_esm5/internal/observable/generate.js","./internal/observable/iif":"../../node_modules/rxjs/_esm5/internal/observable/iif.js","./internal/observable/interval":"../../node_modules/rxjs/_esm5/internal/observable/interval.js","./internal/observable/merge":"../../node_modules/rxjs/_esm5/internal/observable/merge.js","./internal/observable/never":"../../node_modules/rxjs/_esm5/internal/observable/never.js","./internal/observable/of":"../../node_modules/rxjs/_esm5/internal/observable/of.js","./internal/observable/onErrorResumeNext":"../../node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js","./internal/observable/pairs":"../../node_modules/rxjs/_esm5/internal/observable/pairs.js","./internal/observable/race":"../../node_modules/rxjs/_esm5/internal/observable/race.js","./internal/observable/range":"../../node_modules/rxjs/_esm5/internal/observable/range.js","./internal/observable/throwError":"../../node_modules/rxjs/_esm5/internal/observable/throwError.js","./internal/observable/timer":"../../node_modules/rxjs/_esm5/internal/observable/timer.js","./internal/observable/using":"../../node_modules/rxjs/_esm5/internal/observable/using.js","./internal/observable/zip":"../../node_modules/rxjs/_esm5/internal/observable/zip.js","./internal/config":"../../node_modules/rxjs/_esm5/internal/config.js"}],"../../node_modules/rxjs/_esm5/internal/operators/audit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.audit = audit;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function audit(durationSelector) {
  return function auditOperatorFunction(source) {
    return source.lift(new AuditOperator(durationSelector));
  };
}

var AuditOperator =
/*@__PURE__*/
function () {
  function AuditOperator(durationSelector) {
    this.durationSelector = durationSelector;
  }

  AuditOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
  };

  return AuditOperator;
}();

var AuditSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AuditSubscriber, _super);

  function AuditSubscriber(destination, durationSelector) {
    var _this = _super.call(this, destination) || this;

    _this.durationSelector = durationSelector;
    _this.hasValue = false;
    return _this;
  }

  AuditSubscriber.prototype._next = function (value) {
    this.value = value;
    this.hasValue = true;

    if (!this.throttled) {
      var duration = void 0;

      try {
        var durationSelector = this.durationSelector;
        duration = durationSelector(value);
      } catch (err) {
        return this.destination.error(err);
      }

      var innerSubscription = (0, _subscribeToResult.subscribeToResult)(this, duration);

      if (!innerSubscription || innerSubscription.closed) {
        this.clearThrottle();
      } else {
        this.add(this.throttled = innerSubscription);
      }
    }
  };

  AuditSubscriber.prototype.clearThrottle = function () {
    var _a = this,
        value = _a.value,
        hasValue = _a.hasValue,
        throttled = _a.throttled;

    if (throttled) {
      this.remove(throttled);
      this.throttled = null;
      throttled.unsubscribe();
    }

    if (hasValue) {
      this.value = null;
      this.hasValue = false;
      this.destination.next(value);
    }
  };

  AuditSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
    this.clearThrottle();
  };

  AuditSubscriber.prototype.notifyComplete = function () {
    this.clearThrottle();
  };

  return AuditSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/operators/auditTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auditTime = auditTime;

var _async = require("../scheduler/async");

var _audit = require("./audit");

var _timer = require("../observable/timer");

/** PURE_IMPORTS_START _scheduler_async,_audit,_observable_timer PURE_IMPORTS_END */
function auditTime(duration, scheduler) {
  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  return (0, _audit.audit)(function () {
    return (0, _timer.timer)(duration, scheduler);
  });
}
},{"../scheduler/async":"../../node_modules/rxjs/_esm5/internal/scheduler/async.js","./audit":"../../node_modules/rxjs/_esm5/internal/operators/audit.js","../observable/timer":"../../node_modules/rxjs/_esm5/internal/observable/timer.js"}],"../../node_modules/rxjs/_esm5/internal/operators/buffer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buffer = buffer;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function buffer(closingNotifier) {
  return function bufferOperatorFunction(source) {
    return source.lift(new BufferOperator(closingNotifier));
  };
}

var BufferOperator =
/*@__PURE__*/
function () {
  function BufferOperator(closingNotifier) {
    this.closingNotifier = closingNotifier;
  }

  BufferOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
  };

  return BufferOperator;
}();

var BufferSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(BufferSubscriber, _super);

  function BufferSubscriber(destination, closingNotifier) {
    var _this = _super.call(this, destination) || this;

    _this.buffer = [];

    _this.add((0, _subscribeToResult.subscribeToResult)(_this, closingNotifier));

    return _this;
  }

  BufferSubscriber.prototype._next = function (value) {
    this.buffer.push(value);
  };

  BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    var buffer = this.buffer;
    this.buffer = [];
    this.destination.next(buffer);
  };

  return BufferSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/operators/bufferCount.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bufferCount = bufferCount;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function bufferCount(bufferSize, startBufferEvery) {
  if (startBufferEvery === void 0) {
    startBufferEvery = null;
  }

  return function bufferCountOperatorFunction(source) {
    return source.lift(new BufferCountOperator(bufferSize, startBufferEvery));
  };
}

var BufferCountOperator =
/*@__PURE__*/
function () {
  function BufferCountOperator(bufferSize, startBufferEvery) {
    this.bufferSize = bufferSize;
    this.startBufferEvery = startBufferEvery;

    if (!startBufferEvery || bufferSize === startBufferEvery) {
      this.subscriberClass = BufferCountSubscriber;
    } else {
      this.subscriberClass = BufferSkipCountSubscriber;
    }
  }

  BufferCountOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
  };

  return BufferCountOperator;
}();

var BufferCountSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(BufferCountSubscriber, _super);

  function BufferCountSubscriber(destination, bufferSize) {
    var _this = _super.call(this, destination) || this;

    _this.bufferSize = bufferSize;
    _this.buffer = [];
    return _this;
  }

  BufferCountSubscriber.prototype._next = function (value) {
    var buffer = this.buffer;
    buffer.push(value);

    if (buffer.length == this.bufferSize) {
      this.destination.next(buffer);
      this.buffer = [];
    }
  };

  BufferCountSubscriber.prototype._complete = function () {
    var buffer = this.buffer;

    if (buffer.length > 0) {
      this.destination.next(buffer);
    }

    _super.prototype._complete.call(this);
  };

  return BufferCountSubscriber;
}(_Subscriber.Subscriber);

var BufferSkipCountSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(BufferSkipCountSubscriber, _super);

  function BufferSkipCountSubscriber(destination, bufferSize, startBufferEvery) {
    var _this = _super.call(this, destination) || this;

    _this.bufferSize = bufferSize;
    _this.startBufferEvery = startBufferEvery;
    _this.buffers = [];
    _this.count = 0;
    return _this;
  }

  BufferSkipCountSubscriber.prototype._next = function (value) {
    var _a = this,
        bufferSize = _a.bufferSize,
        startBufferEvery = _a.startBufferEvery,
        buffers = _a.buffers,
        count = _a.count;

    this.count++;

    if (count % startBufferEvery === 0) {
      buffers.push([]);
    }

    for (var i = buffers.length; i--;) {
      var buffer = buffers[i];
      buffer.push(value);

      if (buffer.length === bufferSize) {
        buffers.splice(i, 1);
        this.destination.next(buffer);
      }
    }
  };

  BufferSkipCountSubscriber.prototype._complete = function () {
    var _a = this,
        buffers = _a.buffers,
        destination = _a.destination;

    while (buffers.length > 0) {
      var buffer = buffers.shift();

      if (buffer.length > 0) {
        destination.next(buffer);
      }
    }

    _super.prototype._complete.call(this);
  };

  return BufferSkipCountSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/operators/bufferTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bufferTime = bufferTime;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _async = require("../scheduler/async");

var _Subscriber = require("../Subscriber");

var _isScheduler = require("../util/isScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_scheduler_async,_Subscriber,_util_isScheduler PURE_IMPORTS_END */
function bufferTime(bufferTimeSpan) {
  var length = arguments.length;
  var scheduler = _async.async;

  if ((0, _isScheduler.isScheduler)(arguments[arguments.length - 1])) {
    scheduler = arguments[arguments.length - 1];
    length--;
  }

  var bufferCreationInterval = null;

  if (length >= 2) {
    bufferCreationInterval = arguments[1];
  }

  var maxBufferSize = Number.POSITIVE_INFINITY;

  if (length >= 3) {
    maxBufferSize = arguments[2];
  }

  return function bufferTimeOperatorFunction(source) {
    return source.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
  };
}

var BufferTimeOperator =
/*@__PURE__*/
function () {
  function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
    this.bufferTimeSpan = bufferTimeSpan;
    this.bufferCreationInterval = bufferCreationInterval;
    this.maxBufferSize = maxBufferSize;
    this.scheduler = scheduler;
  }

  BufferTimeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
  };

  return BufferTimeOperator;
}();

var Context =
/*@__PURE__*/
function () {
  function Context() {
    this.buffer = [];
  }

  return Context;
}();

var BufferTimeSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(BufferTimeSubscriber, _super);

  function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
    var _this = _super.call(this, destination) || this;

    _this.bufferTimeSpan = bufferTimeSpan;
    _this.bufferCreationInterval = bufferCreationInterval;
    _this.maxBufferSize = maxBufferSize;
    _this.scheduler = scheduler;
    _this.contexts = [];

    var context = _this.openContext();

    _this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;

    if (_this.timespanOnly) {
      var timeSpanOnlyState = {
        subscriber: _this,
        context: context,
        bufferTimeSpan: bufferTimeSpan
      };

      _this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
    } else {
      var closeState = {
        subscriber: _this,
        context: context
      };
      var creationState = {
        bufferTimeSpan: bufferTimeSpan,
        bufferCreationInterval: bufferCreationInterval,
        subscriber: _this,
        scheduler: scheduler
      };

      _this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));

      _this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
    }

    return _this;
  }

  BufferTimeSubscriber.prototype._next = function (value) {
    var contexts = this.contexts;
    var len = contexts.length;
    var filledBufferContext;

    for (var i = 0; i < len; i++) {
      var context_1 = contexts[i];
      var buffer = context_1.buffer;
      buffer.push(value);

      if (buffer.length == this.maxBufferSize) {
        filledBufferContext = context_1;
      }
    }

    if (filledBufferContext) {
      this.onBufferFull(filledBufferContext);
    }
  };

  BufferTimeSubscriber.prototype._error = function (err) {
    this.contexts.length = 0;

    _super.prototype._error.call(this, err);
  };

  BufferTimeSubscriber.prototype._complete = function () {
    var _a = this,
        contexts = _a.contexts,
        destination = _a.destination;

    while (contexts.length > 0) {
      var context_2 = contexts.shift();
      destination.next(context_2.buffer);
    }

    _super.prototype._complete.call(this);
  };

  BufferTimeSubscriber.prototype._unsubscribe = function () {
    this.contexts = null;
  };

  BufferTimeSubscriber.prototype.onBufferFull = function (context) {
    this.closeContext(context);
    var closeAction = context.closeAction;
    closeAction.unsubscribe();
    this.remove(closeAction);

    if (!this.closed && this.timespanOnly) {
      context = this.openContext();
      var bufferTimeSpan = this.bufferTimeSpan;
      var timeSpanOnlyState = {
        subscriber: this,
        context: context,
        bufferTimeSpan: bufferTimeSpan
      };
      this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
    }
  };

  BufferTimeSubscriber.prototype.openContext = function () {
    var context = new Context();
    this.contexts.push(context);
    return context;
  };

  BufferTimeSubscriber.prototype.closeContext = function (context) {
    this.destination.next(context.buffer);
    var contexts = this.contexts;
    var spliceIndex = contexts ? contexts.indexOf(context) : -1;

    if (spliceIndex >= 0) {
      contexts.splice(contexts.indexOf(context), 1);
    }
  };

  return BufferTimeSubscriber;
}(_Subscriber.Subscriber);

function dispatchBufferTimeSpanOnly(state) {
  var subscriber = state.subscriber;
  var prevContext = state.context;

  if (prevContext) {
    subscriber.closeContext(prevContext);
  }

  if (!subscriber.closed) {
    state.context = subscriber.openContext();
    state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
  }
}

function dispatchBufferCreation(state) {
  var bufferCreationInterval = state.bufferCreationInterval,
      bufferTimeSpan = state.bufferTimeSpan,
      subscriber = state.subscriber,
      scheduler = state.scheduler;
  var context = subscriber.openContext();
  var action = this;

  if (!subscriber.closed) {
    subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, {
      subscriber: subscriber,
      context: context
    }));
    action.schedule(state, bufferCreationInterval);
  }
}

function dispatchBufferClose(arg) {
  var subscriber = arg.subscriber,
      context = arg.context;
  subscriber.closeContext(context);
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../scheduler/async":"../../node_modules/rxjs/_esm5/internal/scheduler/async.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","../util/isScheduler":"../../node_modules/rxjs/_esm5/internal/util/isScheduler.js"}],"../../node_modules/rxjs/_esm5/internal/operators/bufferToggle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bufferToggle = bufferToggle;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscription = require("../Subscription");

var _subscribeToResult = require("../util/subscribeToResult");

var _OuterSubscriber = require("../OuterSubscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscription,_util_subscribeToResult,_OuterSubscriber PURE_IMPORTS_END */
function bufferToggle(openings, closingSelector) {
  return function bufferToggleOperatorFunction(source) {
    return source.lift(new BufferToggleOperator(openings, closingSelector));
  };
}

var BufferToggleOperator =
/*@__PURE__*/
function () {
  function BufferToggleOperator(openings, closingSelector) {
    this.openings = openings;
    this.closingSelector = closingSelector;
  }

  BufferToggleOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
  };

  return BufferToggleOperator;
}();

var BufferToggleSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(BufferToggleSubscriber, _super);

  function BufferToggleSubscriber(destination, openings, closingSelector) {
    var _this = _super.call(this, destination) || this;

    _this.openings = openings;
    _this.closingSelector = closingSelector;
    _this.contexts = [];

    _this.add((0, _subscribeToResult.subscribeToResult)(_this, openings));

    return _this;
  }

  BufferToggleSubscriber.prototype._next = function (value) {
    var contexts = this.contexts;
    var len = contexts.length;

    for (var i = 0; i < len; i++) {
      contexts[i].buffer.push(value);
    }
  };

  BufferToggleSubscriber.prototype._error = function (err) {
    var contexts = this.contexts;

    while (contexts.length > 0) {
      var context_1 = contexts.shift();
      context_1.subscription.unsubscribe();
      context_1.buffer = null;
      context_1.subscription = null;
    }

    this.contexts = null;

    _super.prototype._error.call(this, err);
  };

  BufferToggleSubscriber.prototype._complete = function () {
    var contexts = this.contexts;

    while (contexts.length > 0) {
      var context_2 = contexts.shift();
      this.destination.next(context_2.buffer);
      context_2.subscription.unsubscribe();
      context_2.buffer = null;
      context_2.subscription = null;
    }

    this.contexts = null;

    _super.prototype._complete.call(this);
  };

  BufferToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
  };

  BufferToggleSubscriber.prototype.notifyComplete = function (innerSub) {
    this.closeBuffer(innerSub.context);
  };

  BufferToggleSubscriber.prototype.openBuffer = function (value) {
    try {
      var closingSelector = this.closingSelector;
      var closingNotifier = closingSelector.call(this, value);

      if (closingNotifier) {
        this.trySubscribe(closingNotifier);
      }
    } catch (err) {
      this._error(err);
    }
  };

  BufferToggleSubscriber.prototype.closeBuffer = function (context) {
    var contexts = this.contexts;

    if (contexts && context) {
      var buffer = context.buffer,
          subscription = context.subscription;
      this.destination.next(buffer);
      contexts.splice(contexts.indexOf(context), 1);
      this.remove(subscription);
      subscription.unsubscribe();
    }
  };

  BufferToggleSubscriber.prototype.trySubscribe = function (closingNotifier) {
    var contexts = this.contexts;
    var buffer = [];
    var subscription = new _Subscription.Subscription();
    var context = {
      buffer: buffer,
      subscription: subscription
    };
    contexts.push(context);
    var innerSubscription = (0, _subscribeToResult.subscribeToResult)(this, closingNotifier, context);

    if (!innerSubscription || innerSubscription.closed) {
      this.closeBuffer(context);
    } else {
      innerSubscription.context = context;
      this.add(innerSubscription);
      subscription.add(innerSubscription);
    }
  };

  return BufferToggleSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscription":"../../node_modules/rxjs/_esm5/internal/Subscription.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js"}],"../../node_modules/rxjs/_esm5/internal/operators/bufferWhen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bufferWhen = bufferWhen;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscription = require("../Subscription");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscription,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function bufferWhen(closingSelector) {
  return function (source) {
    return source.lift(new BufferWhenOperator(closingSelector));
  };
}

var BufferWhenOperator =
/*@__PURE__*/
function () {
  function BufferWhenOperator(closingSelector) {
    this.closingSelector = closingSelector;
  }

  BufferWhenOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
  };

  return BufferWhenOperator;
}();

var BufferWhenSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(BufferWhenSubscriber, _super);

  function BufferWhenSubscriber(destination, closingSelector) {
    var _this = _super.call(this, destination) || this;

    _this.closingSelector = closingSelector;
    _this.subscribing = false;

    _this.openBuffer();

    return _this;
  }

  BufferWhenSubscriber.prototype._next = function (value) {
    this.buffer.push(value);
  };

  BufferWhenSubscriber.prototype._complete = function () {
    var buffer = this.buffer;

    if (buffer) {
      this.destination.next(buffer);
    }

    _super.prototype._complete.call(this);
  };

  BufferWhenSubscriber.prototype._unsubscribe = function () {
    this.buffer = null;
    this.subscribing = false;
  };

  BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.openBuffer();
  };

  BufferWhenSubscriber.prototype.notifyComplete = function () {
    if (this.subscribing) {
      this.complete();
    } else {
      this.openBuffer();
    }
  };

  BufferWhenSubscriber.prototype.openBuffer = function () {
    var closingSubscription = this.closingSubscription;

    if (closingSubscription) {
      this.remove(closingSubscription);
      closingSubscription.unsubscribe();
    }

    var buffer = this.buffer;

    if (this.buffer) {
      this.destination.next(buffer);
    }

    this.buffer = [];
    var closingNotifier;

    try {
      var closingSelector = this.closingSelector;
      closingNotifier = closingSelector();
    } catch (err) {
      return this.error(err);
    }

    closingSubscription = new _Subscription.Subscription();
    this.closingSubscription = closingSubscription;
    this.add(closingSubscription);
    this.subscribing = true;
    closingSubscription.add((0, _subscribeToResult.subscribeToResult)(this, closingNotifier));
    this.subscribing = false;
  };

  return BufferWhenSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscription":"../../node_modules/rxjs/_esm5/internal/Subscription.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/operators/catchError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.catchError = catchError;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _InnerSubscriber = require("../InnerSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function catchError(selector) {
  return function catchErrorOperatorFunction(source) {
    var operator = new CatchOperator(selector);
    var caught = source.lift(operator);
    return operator.caught = caught;
  };
}

var CatchOperator =
/*@__PURE__*/
function () {
  function CatchOperator(selector) {
    this.selector = selector;
  }

  CatchOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
  };

  return CatchOperator;
}();

var CatchSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(CatchSubscriber, _super);

  function CatchSubscriber(destination, selector, caught) {
    var _this = _super.call(this, destination) || this;

    _this.selector = selector;
    _this.caught = caught;
    return _this;
  }

  CatchSubscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      var result = void 0;

      try {
        result = this.selector(err, this.caught);
      } catch (err2) {
        _super.prototype.error.call(this, err2);

        return;
      }

      this._unsubscribeAndRecycle();

      var innerSubscriber = new _InnerSubscriber.InnerSubscriber(this, undefined, undefined);
      this.add(innerSubscriber);
      (0, _subscribeToResult.subscribeToResult)(this, result, undefined, undefined, innerSubscriber);
    }
  };

  return CatchSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../InnerSubscriber":"../../node_modules/rxjs/_esm5/internal/InnerSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/operators/combineAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineAll = combineAll;

var _combineLatest = require("../observable/combineLatest");

/** PURE_IMPORTS_START _observable_combineLatest PURE_IMPORTS_END */
function combineAll(project) {
  return function (source) {
    return source.lift(new _combineLatest.CombineLatestOperator(project));
  };
}
},{"../observable/combineLatest":"../../node_modules/rxjs/_esm5/internal/observable/combineLatest.js"}],"../../node_modules/rxjs/_esm5/internal/operators/combineLatest.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineLatest = combineLatest;

var _isArray = require("../util/isArray");

var _combineLatest = require("../observable/combineLatest");

var _from = require("../observable/from");

/** PURE_IMPORTS_START _util_isArray,_observable_combineLatest,_observable_from PURE_IMPORTS_END */
var none = {};

function combineLatest() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  var project = null;

  if (typeof observables[observables.length - 1] === 'function') {
    project = observables.pop();
  }

  if (observables.length === 1 && (0, _isArray.isArray)(observables[0])) {
    observables = observables[0].slice();
  }

  return function (source) {
    return source.lift.call((0, _from.from)([source].concat(observables)), new _combineLatest.CombineLatestOperator(project));
  };
}
},{"../util/isArray":"../../node_modules/rxjs/_esm5/internal/util/isArray.js","../observable/combineLatest":"../../node_modules/rxjs/_esm5/internal/observable/combineLatest.js","../observable/from":"../../node_modules/rxjs/_esm5/internal/observable/from.js"}],"../../node_modules/rxjs/_esm5/internal/operators/concat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concat = concat;

var _concat = require("../observable/concat");

/** PURE_IMPORTS_START _observable_concat PURE_IMPORTS_END */
function concat() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  return function (source) {
    return source.lift.call(_concat.concat.apply(void 0, [source].concat(observables)));
  };
}
},{"../observable/concat":"../../node_modules/rxjs/_esm5/internal/observable/concat.js"}],"../../node_modules/rxjs/_esm5/internal/operators/concatMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatMap = concatMap;

var _mergeMap = require("./mergeMap");

/** PURE_IMPORTS_START _mergeMap PURE_IMPORTS_END */
function concatMap(project, resultSelector) {
  return (0, _mergeMap.mergeMap)(project, resultSelector, 1);
}
},{"./mergeMap":"../../node_modules/rxjs/_esm5/internal/operators/mergeMap.js"}],"../../node_modules/rxjs/_esm5/internal/operators/concatMapTo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatMapTo = concatMapTo;

var _concatMap = require("./concatMap");

/** PURE_IMPORTS_START _concatMap PURE_IMPORTS_END */
function concatMapTo(innerObservable, resultSelector) {
  return (0, _concatMap.concatMap)(function () {
    return innerObservable;
  }, resultSelector);
}
},{"./concatMap":"../../node_modules/rxjs/_esm5/internal/operators/concatMap.js"}],"../../node_modules/rxjs/_esm5/internal/operators/count.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.count = count;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function count(predicate) {
  return function (source) {
    return source.lift(new CountOperator(predicate, source));
  };
}

var CountOperator =
/*@__PURE__*/
function () {
  function CountOperator(predicate, source) {
    this.predicate = predicate;
    this.source = source;
  }

  CountOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
  };

  return CountOperator;
}();

var CountSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(CountSubscriber, _super);

  function CountSubscriber(destination, predicate, source) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.source = source;
    _this.count = 0;
    _this.index = 0;
    return _this;
  }

  CountSubscriber.prototype._next = function (value) {
    if (this.predicate) {
      this._tryPredicate(value);
    } else {
      this.count++;
    }
  };

  CountSubscriber.prototype._tryPredicate = function (value) {
    var result;

    try {
      result = this.predicate(value, this.index++, this.source);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    if (result) {
      this.count++;
    }
  };

  CountSubscriber.prototype._complete = function () {
    this.destination.next(this.count);
    this.destination.complete();
  };

  return CountSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/operators/debounce.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = debounce;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function debounce(durationSelector) {
  return function (source) {
    return source.lift(new DebounceOperator(durationSelector));
  };
}

var DebounceOperator =
/*@__PURE__*/
function () {
  function DebounceOperator(durationSelector) {
    this.durationSelector = durationSelector;
  }

  DebounceOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
  };

  return DebounceOperator;
}();

var DebounceSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(DebounceSubscriber, _super);

  function DebounceSubscriber(destination, durationSelector) {
    var _this = _super.call(this, destination) || this;

    _this.durationSelector = durationSelector;
    _this.hasValue = false;
    _this.durationSubscription = null;
    return _this;
  }

  DebounceSubscriber.prototype._next = function (value) {
    try {
      var result = this.durationSelector.call(this, value);

      if (result) {
        this._tryNext(value, result);
      }
    } catch (err) {
      this.destination.error(err);
    }
  };

  DebounceSubscriber.prototype._complete = function () {
    this.emitValue();
    this.destination.complete();
  };

  DebounceSubscriber.prototype._tryNext = function (value, duration) {
    var subscription = this.durationSubscription;
    this.value = value;
    this.hasValue = true;

    if (subscription) {
      subscription.unsubscribe();
      this.remove(subscription);
    }

    subscription = (0, _subscribeToResult.subscribeToResult)(this, duration);

    if (subscription && !subscription.closed) {
      this.add(this.durationSubscription = subscription);
    }
  };

  DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.emitValue();
  };

  DebounceSubscriber.prototype.notifyComplete = function () {
    this.emitValue();
  };

  DebounceSubscriber.prototype.emitValue = function () {
    if (this.hasValue) {
      var value = this.value;
      var subscription = this.durationSubscription;

      if (subscription) {
        this.durationSubscription = null;
        subscription.unsubscribe();
        this.remove(subscription);
      }

      this.value = null;
      this.hasValue = false;

      _super.prototype._next.call(this, value);
    }
  };

  return DebounceSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/operators/debounceTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounceTime = debounceTime;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _async = require("../scheduler/async");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */
function debounceTime(dueTime, scheduler) {
  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  return function (source) {
    return source.lift(new DebounceTimeOperator(dueTime, scheduler));
  };
}

var DebounceTimeOperator =
/*@__PURE__*/
function () {
  function DebounceTimeOperator(dueTime, scheduler) {
    this.dueTime = dueTime;
    this.scheduler = scheduler;
  }

  DebounceTimeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
  };

  return DebounceTimeOperator;
}();

var DebounceTimeSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(DebounceTimeSubscriber, _super);

  function DebounceTimeSubscriber(destination, dueTime, scheduler) {
    var _this = _super.call(this, destination) || this;

    _this.dueTime = dueTime;
    _this.scheduler = scheduler;
    _this.debouncedSubscription = null;
    _this.lastValue = null;
    _this.hasValue = false;
    return _this;
  }

  DebounceTimeSubscriber.prototype._next = function (value) {
    this.clearDebounce();
    this.lastValue = value;
    this.hasValue = true;
    this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
  };

  DebounceTimeSubscriber.prototype._complete = function () {
    this.debouncedNext();
    this.destination.complete();
  };

  DebounceTimeSubscriber.prototype.debouncedNext = function () {
    this.clearDebounce();

    if (this.hasValue) {
      var lastValue = this.lastValue;
      this.lastValue = null;
      this.hasValue = false;
      this.destination.next(lastValue);
    }
  };

  DebounceTimeSubscriber.prototype.clearDebounce = function () {
    var debouncedSubscription = this.debouncedSubscription;

    if (debouncedSubscription !== null) {
      this.remove(debouncedSubscription);
      debouncedSubscription.unsubscribe();
      this.debouncedSubscription = null;
    }
  };

  return DebounceTimeSubscriber;
}(_Subscriber.Subscriber);

function dispatchNext(subscriber) {
  subscriber.debouncedNext();
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","../scheduler/async":"../../node_modules/rxjs/_esm5/internal/scheduler/async.js"}],"../../node_modules/rxjs/_esm5/internal/operators/defaultIfEmpty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultIfEmpty = defaultIfEmpty;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function defaultIfEmpty(defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = null;
  }

  return function (source) {
    return source.lift(new DefaultIfEmptyOperator(defaultValue));
  };
}

var DefaultIfEmptyOperator =
/*@__PURE__*/
function () {
  function DefaultIfEmptyOperator(defaultValue) {
    this.defaultValue = defaultValue;
  }

  DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
  };

  return DefaultIfEmptyOperator;
}();

var DefaultIfEmptySubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(DefaultIfEmptySubscriber, _super);

  function DefaultIfEmptySubscriber(destination, defaultValue) {
    var _this = _super.call(this, destination) || this;

    _this.defaultValue = defaultValue;
    _this.isEmpty = true;
    return _this;
  }

  DefaultIfEmptySubscriber.prototype._next = function (value) {
    this.isEmpty = false;
    this.destination.next(value);
  };

  DefaultIfEmptySubscriber.prototype._complete = function () {
    if (this.isEmpty) {
      this.destination.next(this.defaultValue);
    }

    this.destination.complete();
  };

  return DefaultIfEmptySubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/util/isDate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDate = isDate;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isDate(value) {
  return value instanceof Date && !isNaN(+value);
}
},{}],"../../node_modules/rxjs/_esm5/internal/operators/delay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delay = delay;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _async = require("../scheduler/async");

var _isDate = require("../util/isDate");

var _Subscriber = require("../Subscriber");

var _Notification = require("../Notification");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_scheduler_async,_util_isDate,_Subscriber,_Notification PURE_IMPORTS_END */
function delay(delay, scheduler) {
  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  var absoluteDelay = (0, _isDate.isDate)(delay);
  var delayFor = absoluteDelay ? +delay - scheduler.now() : Math.abs(delay);
  return function (source) {
    return source.lift(new DelayOperator(delayFor, scheduler));
  };
}

var DelayOperator =
/*@__PURE__*/
function () {
  function DelayOperator(delay, scheduler) {
    this.delay = delay;
    this.scheduler = scheduler;
  }

  DelayOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
  };

  return DelayOperator;
}();

var DelaySubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(DelaySubscriber, _super);

  function DelaySubscriber(destination, delay, scheduler) {
    var _this = _super.call(this, destination) || this;

    _this.delay = delay;
    _this.scheduler = scheduler;
    _this.queue = [];
    _this.active = false;
    _this.errored = false;
    return _this;
  }

  DelaySubscriber.dispatch = function (state) {
    var source = state.source;
    var queue = source.queue;
    var scheduler = state.scheduler;
    var destination = state.destination;

    while (queue.length > 0 && queue[0].time - scheduler.now() <= 0) {
      queue.shift().notification.observe(destination);
    }

    if (queue.length > 0) {
      var delay_1 = Math.max(0, queue[0].time - scheduler.now());
      this.schedule(state, delay_1);
    } else {
      this.unsubscribe();
      source.active = false;
    }
  };

  DelaySubscriber.prototype._schedule = function (scheduler) {
    this.active = true;
    var destination = this.destination;
    destination.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
      source: this,
      destination: this.destination,
      scheduler: scheduler
    }));
  };

  DelaySubscriber.prototype.scheduleNotification = function (notification) {
    if (this.errored === true) {
      return;
    }

    var scheduler = this.scheduler;
    var message = new DelayMessage(scheduler.now() + this.delay, notification);
    this.queue.push(message);

    if (this.active === false) {
      this._schedule(scheduler);
    }
  };

  DelaySubscriber.prototype._next = function (value) {
    this.scheduleNotification(_Notification.Notification.createNext(value));
  };

  DelaySubscriber.prototype._error = function (err) {
    this.errored = true;
    this.queue = [];
    this.destination.error(err);
    this.unsubscribe();
  };

  DelaySubscriber.prototype._complete = function () {
    this.scheduleNotification(_Notification.Notification.createComplete());
    this.unsubscribe();
  };

  return DelaySubscriber;
}(_Subscriber.Subscriber);

var DelayMessage =
/*@__PURE__*/
function () {
  function DelayMessage(time, notification) {
    this.time = time;
    this.notification = notification;
  }

  return DelayMessage;
}();
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../scheduler/async":"../../node_modules/rxjs/_esm5/internal/scheduler/async.js","../util/isDate":"../../node_modules/rxjs/_esm5/internal/util/isDate.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","../Notification":"../../node_modules/rxjs/_esm5/internal/Notification.js"}],"../../node_modules/rxjs/_esm5/internal/operators/delayWhen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delayWhen = delayWhen;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _Observable = require("../Observable");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function delayWhen(delayDurationSelector, subscriptionDelay) {
  if (subscriptionDelay) {
    return function (source) {
      return new SubscriptionDelayObservable(source, subscriptionDelay).lift(new DelayWhenOperator(delayDurationSelector));
    };
  }

  return function (source) {
    return source.lift(new DelayWhenOperator(delayDurationSelector));
  };
}

var DelayWhenOperator =
/*@__PURE__*/
function () {
  function DelayWhenOperator(delayDurationSelector) {
    this.delayDurationSelector = delayDurationSelector;
  }

  DelayWhenOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
  };

  return DelayWhenOperator;
}();

var DelayWhenSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(DelayWhenSubscriber, _super);

  function DelayWhenSubscriber(destination, delayDurationSelector) {
    var _this = _super.call(this, destination) || this;

    _this.delayDurationSelector = delayDurationSelector;
    _this.completed = false;
    _this.delayNotifierSubscriptions = [];
    _this.index = 0;
    return _this;
  }

  DelayWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.destination.next(outerValue);
    this.removeSubscription(innerSub);
    this.tryComplete();
  };

  DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
    this._error(error);
  };

  DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
    var value = this.removeSubscription(innerSub);

    if (value) {
      this.destination.next(value);
    }

    this.tryComplete();
  };

  DelayWhenSubscriber.prototype._next = function (value) {
    var index = this.index++;

    try {
      var delayNotifier = this.delayDurationSelector(value, index);

      if (delayNotifier) {
        this.tryDelay(delayNotifier, value);
      }
    } catch (err) {
      this.destination.error(err);
    }
  };

  DelayWhenSubscriber.prototype._complete = function () {
    this.completed = true;
    this.tryComplete();
    this.unsubscribe();
  };

  DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
    subscription.unsubscribe();
    var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);

    if (subscriptionIdx !== -1) {
      this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
    }

    return subscription.outerValue;
  };

  DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
    var notifierSubscription = (0, _subscribeToResult.subscribeToResult)(this, delayNotifier, value);

    if (notifierSubscription && !notifierSubscription.closed) {
      var destination = this.destination;
      destination.add(notifierSubscription);
      this.delayNotifierSubscriptions.push(notifierSubscription);
    }
  };

  DelayWhenSubscriber.prototype.tryComplete = function () {
    if (this.completed && this.delayNotifierSubscriptions.length === 0) {
      this.destination.complete();
    }
  };

  return DelayWhenSubscriber;
}(_OuterSubscriber.OuterSubscriber);

var SubscriptionDelayObservable =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SubscriptionDelayObservable, _super);

  function SubscriptionDelayObservable(source, subscriptionDelay) {
    var _this = _super.call(this) || this;

    _this.source = source;
    _this.subscriptionDelay = subscriptionDelay;
    return _this;
  }

  SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
    this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
  };

  return SubscriptionDelayObservable;
}(_Observable.Observable);

var SubscriptionDelaySubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SubscriptionDelaySubscriber, _super);

  function SubscriptionDelaySubscriber(parent, source) {
    var _this = _super.call(this) || this;

    _this.parent = parent;
    _this.source = source;
    _this.sourceSubscribed = false;
    return _this;
  }

  SubscriptionDelaySubscriber.prototype._next = function (unused) {
    this.subscribeToSource();
  };

  SubscriptionDelaySubscriber.prototype._error = function (err) {
    this.unsubscribe();
    this.parent.error(err);
  };

  SubscriptionDelaySubscriber.prototype._complete = function () {
    this.unsubscribe();
    this.subscribeToSource();
  };

  SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
    if (!this.sourceSubscribed) {
      this.sourceSubscribed = true;
      this.unsubscribe();
      this.source.subscribe(this.parent);
    }
  };

  return SubscriptionDelaySubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/operators/dematerialize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dematerialize = dematerialize;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function dematerialize() {
  return function dematerializeOperatorFunction(source) {
    return source.lift(new DeMaterializeOperator());
  };
}

var DeMaterializeOperator =
/*@__PURE__*/
function () {
  function DeMaterializeOperator() {}

  DeMaterializeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DeMaterializeSubscriber(subscriber));
  };

  return DeMaterializeOperator;
}();

var DeMaterializeSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(DeMaterializeSubscriber, _super);

  function DeMaterializeSubscriber(destination) {
    return _super.call(this, destination) || this;
  }

  DeMaterializeSubscriber.prototype._next = function (value) {
    value.observe(this.destination);
  };

  return DeMaterializeSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/operators/distinct.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distinct = distinct;
exports.DistinctSubscriber = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function distinct(keySelector, flushes) {
  return function (source) {
    return source.lift(new DistinctOperator(keySelector, flushes));
  };
}

var DistinctOperator =
/*@__PURE__*/
function () {
  function DistinctOperator(keySelector, flushes) {
    this.keySelector = keySelector;
    this.flushes = flushes;
  }

  DistinctOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DistinctSubscriber(subscriber, this.keySelector, this.flushes));
  };

  return DistinctOperator;
}();

var DistinctSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(DistinctSubscriber, _super);

  function DistinctSubscriber(destination, keySelector, flushes) {
    var _this = _super.call(this, destination) || this;

    _this.keySelector = keySelector;
    _this.values = new Set();

    if (flushes) {
      _this.add((0, _subscribeToResult.subscribeToResult)(_this, flushes));
    }

    return _this;
  }

  DistinctSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.values.clear();
  };

  DistinctSubscriber.prototype.notifyError = function (error, innerSub) {
    this._error(error);
  };

  DistinctSubscriber.prototype._next = function (value) {
    if (this.keySelector) {
      this._useKeySelector(value);
    } else {
      this._finalizeNext(value, value);
    }
  };

  DistinctSubscriber.prototype._useKeySelector = function (value) {
    var key;
    var destination = this.destination;

    try {
      key = this.keySelector(value);
    } catch (err) {
      destination.error(err);
      return;
    }

    this._finalizeNext(key, value);
  };

  DistinctSubscriber.prototype._finalizeNext = function (key, value) {
    var values = this.values;

    if (!values.has(key)) {
      values.add(key);
      this.destination.next(value);
    }
  };

  return DistinctSubscriber;
}(_OuterSubscriber.OuterSubscriber);

exports.DistinctSubscriber = DistinctSubscriber;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distinctUntilChanged = distinctUntilChanged;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function distinctUntilChanged(compare, keySelector) {
  return function (source) {
    return source.lift(new DistinctUntilChangedOperator(compare, keySelector));
  };
}

var DistinctUntilChangedOperator =
/*@__PURE__*/
function () {
  function DistinctUntilChangedOperator(compare, keySelector) {
    this.compare = compare;
    this.keySelector = keySelector;
  }

  DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
  };

  return DistinctUntilChangedOperator;
}();

var DistinctUntilChangedSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(DistinctUntilChangedSubscriber, _super);

  function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
    var _this = _super.call(this, destination) || this;

    _this.keySelector = keySelector;
    _this.hasKey = false;

    if (typeof compare === 'function') {
      _this.compare = compare;
    }

    return _this;
  }

  DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
    return x === y;
  };

  DistinctUntilChangedSubscriber.prototype._next = function (value) {
    var key;

    try {
      var keySelector = this.keySelector;
      key = keySelector ? keySelector(value) : value;
    } catch (err) {
      return this.destination.error(err);
    }

    var result = false;

    if (this.hasKey) {
      try {
        var compare = this.compare;
        result = compare(this.key, key);
      } catch (err) {
        return this.destination.error(err);
      }
    } else {
      this.hasKey = true;
    }

    if (!result) {
      this.key = key;
      this.destination.next(value);
    }
  };

  return DistinctUntilChangedSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/operators/distinctUntilKeyChanged.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distinctUntilKeyChanged = distinctUntilKeyChanged;

var _distinctUntilChanged = require("./distinctUntilChanged");

/** PURE_IMPORTS_START _distinctUntilChanged PURE_IMPORTS_END */
function distinctUntilKeyChanged(key, compare) {
  return (0, _distinctUntilChanged.distinctUntilChanged)(function (x, y) {
    return compare ? compare(x[key], y[key]) : x[key] === y[key];
  });
}
},{"./distinctUntilChanged":"../../node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js"}],"../../node_modules/rxjs/_esm5/internal/operators/filter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filter = filter;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function filter(predicate, thisArg) {
  return function filterOperatorFunction(source) {
    return source.lift(new FilterOperator(predicate, thisArg));
  };
}

var FilterOperator =
/*@__PURE__*/
function () {
  function FilterOperator(predicate, thisArg) {
    this.predicate = predicate;
    this.thisArg = thisArg;
  }

  FilterOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
  };

  return FilterOperator;
}();

var FilterSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(FilterSubscriber, _super);

  function FilterSubscriber(destination, predicate, thisArg) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.thisArg = thisArg;
    _this.count = 0;
    return _this;
  }

  FilterSubscriber.prototype._next = function (value) {
    var result;

    try {
      result = this.predicate.call(this.thisArg, value, this.count++);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    if (result) {
      this.destination.next(value);
    }
  };

  return FilterSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/operators/tap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tap = tap;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _noop = require("../util/noop");

var _isFunction = require("../util/isFunction");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_util_noop,_util_isFunction PURE_IMPORTS_END */
function tap(nextOrObserver, error, complete) {
  return function tapOperatorFunction(source) {
    return source.lift(new DoOperator(nextOrObserver, error, complete));
  };
}

var DoOperator =
/*@__PURE__*/
function () {
  function DoOperator(nextOrObserver, error, complete) {
    this.nextOrObserver = nextOrObserver;
    this.error = error;
    this.complete = complete;
  }

  DoOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
  };

  return DoOperator;
}();

var TapSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(TapSubscriber, _super);

  function TapSubscriber(destination, observerOrNext, error, complete) {
    var _this = _super.call(this, destination) || this;

    _this._tapNext = _noop.noop;
    _this._tapError = _noop.noop;
    _this._tapComplete = _noop.noop;
    _this._tapError = error || _noop.noop;
    _this._tapComplete = complete || _noop.noop;

    if ((0, _isFunction.isFunction)(observerOrNext)) {
      _this._context = _this;
      _this._tapNext = observerOrNext;
    } else if (observerOrNext) {
      _this._context = observerOrNext;
      _this._tapNext = observerOrNext.next || _noop.noop;
      _this._tapError = observerOrNext.error || _noop.noop;
      _this._tapComplete = observerOrNext.complete || _noop.noop;
    }

    return _this;
  }

  TapSubscriber.prototype._next = function (value) {
    try {
      this._tapNext.call(this._context, value);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(value);
  };

  TapSubscriber.prototype._error = function (err) {
    try {
      this._tapError.call(this._context, err);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.error(err);
  };

  TapSubscriber.prototype._complete = function () {
    try {
      this._tapComplete.call(this._context);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    return this.destination.complete();
  };

  return TapSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","../util/noop":"../../node_modules/rxjs/_esm5/internal/util/noop.js","../util/isFunction":"../../node_modules/rxjs/_esm5/internal/util/isFunction.js"}],"../../node_modules/rxjs/_esm5/internal/operators/throwIfEmpty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throwIfEmpty = void 0;

var _tap = require("./tap");

var _EmptyError = require("../util/EmptyError");

/** PURE_IMPORTS_START _tap,_util_EmptyError PURE_IMPORTS_END */
var throwIfEmpty = function (errorFactory) {
  if (errorFactory === void 0) {
    errorFactory = defaultErrorFactory;
  }

  return (0, _tap.tap)({
    hasValue: false,
    next: function () {
      this.hasValue = true;
    },
    complete: function () {
      if (!this.hasValue) {
        throw errorFactory();
      }
    }
  });
};

exports.throwIfEmpty = throwIfEmpty;

function defaultErrorFactory() {
  return new _EmptyError.EmptyError();
}
},{"./tap":"../../node_modules/rxjs/_esm5/internal/operators/tap.js","../util/EmptyError":"../../node_modules/rxjs/_esm5/internal/util/EmptyError.js"}],"../../node_modules/rxjs/_esm5/internal/operators/take.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.take = take;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _ArgumentOutOfRangeError = require("../util/ArgumentOutOfRangeError");

var _empty = require("../observable/empty");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */
function take(count) {
  return function (source) {
    if (count === 0) {
      return (0, _empty.empty)();
    } else {
      return source.lift(new TakeOperator(count));
    }
  };
}

var TakeOperator =
/*@__PURE__*/
function () {
  function TakeOperator(total) {
    this.total = total;

    if (this.total < 0) {
      throw new _ArgumentOutOfRangeError.ArgumentOutOfRangeError();
    }
  }

  TakeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new TakeSubscriber(subscriber, this.total));
  };

  return TakeOperator;
}();

var TakeSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(TakeSubscriber, _super);

  function TakeSubscriber(destination, total) {
    var _this = _super.call(this, destination) || this;

    _this.total = total;
    _this.count = 0;
    return _this;
  }

  TakeSubscriber.prototype._next = function (value) {
    var total = this.total;
    var count = ++this.count;

    if (count <= total) {
      this.destination.next(value);

      if (count === total) {
        this.destination.complete();
        this.unsubscribe();
      }
    }
  };

  return TakeSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","../util/ArgumentOutOfRangeError":"../../node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js","../observable/empty":"../../node_modules/rxjs/_esm5/internal/observable/empty.js"}],"../../node_modules/rxjs/_esm5/internal/operators/elementAt.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elementAt = elementAt;

var _ArgumentOutOfRangeError = require("../util/ArgumentOutOfRangeError");

var _filter = require("./filter");

var _throwIfEmpty = require("./throwIfEmpty");

var _defaultIfEmpty = require("./defaultIfEmpty");

var _take = require("./take");

/** PURE_IMPORTS_START _util_ArgumentOutOfRangeError,_filter,_throwIfEmpty,_defaultIfEmpty,_take PURE_IMPORTS_END */
function elementAt(index, defaultValue) {
  if (index < 0) {
    throw new _ArgumentOutOfRangeError.ArgumentOutOfRangeError();
  }

  var hasDefaultValue = arguments.length >= 2;
  return function (source) {
    return source.pipe((0, _filter.filter)(function (v, i) {
      return i === index;
    }), (0, _take.take)(1), hasDefaultValue ? (0, _defaultIfEmpty.defaultIfEmpty)(defaultValue) : (0, _throwIfEmpty.throwIfEmpty)(function () {
      return new _ArgumentOutOfRangeError.ArgumentOutOfRangeError();
    }));
  };
}
},{"../util/ArgumentOutOfRangeError":"../../node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js","./filter":"../../node_modules/rxjs/_esm5/internal/operators/filter.js","./throwIfEmpty":"../../node_modules/rxjs/_esm5/internal/operators/throwIfEmpty.js","./defaultIfEmpty":"../../node_modules/rxjs/_esm5/internal/operators/defaultIfEmpty.js","./take":"../../node_modules/rxjs/_esm5/internal/operators/take.js"}],"../../node_modules/rxjs/_esm5/internal/operators/endWith.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endWith = endWith;

var _fromArray = require("../observable/fromArray");

var _scalar = require("../observable/scalar");

var _empty = require("../observable/empty");

var _concat = require("../observable/concat");

var _isScheduler = require("../util/isScheduler");

/** PURE_IMPORTS_START _observable_fromArray,_observable_scalar,_observable_empty,_observable_concat,_util_isScheduler PURE_IMPORTS_END */
function endWith() {
  var array = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    array[_i] = arguments[_i];
  }

  return function (source) {
    var scheduler = array[array.length - 1];

    if ((0, _isScheduler.isScheduler)(scheduler)) {
      array.pop();
    } else {
      scheduler = null;
    }

    var len = array.length;

    if (len === 1 && !scheduler) {
      return (0, _concat.concat)(source, (0, _scalar.scalar)(array[0]));
    } else if (len > 0) {
      return (0, _concat.concat)(source, (0, _fromArray.fromArray)(array, scheduler));
    } else {
      return (0, _concat.concat)(source, (0, _empty.empty)(scheduler));
    }
  };
}
},{"../observable/fromArray":"../../node_modules/rxjs/_esm5/internal/observable/fromArray.js","../observable/scalar":"../../node_modules/rxjs/_esm5/internal/observable/scalar.js","../observable/empty":"../../node_modules/rxjs/_esm5/internal/observable/empty.js","../observable/concat":"../../node_modules/rxjs/_esm5/internal/observable/concat.js","../util/isScheduler":"../../node_modules/rxjs/_esm5/internal/util/isScheduler.js"}],"../../node_modules/rxjs/_esm5/internal/operators/every.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.every = every;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function every(predicate, thisArg) {
  return function (source) {
    return source.lift(new EveryOperator(predicate, thisArg, source));
  };
}

var EveryOperator =
/*@__PURE__*/
function () {
  function EveryOperator(predicate, thisArg, source) {
    this.predicate = predicate;
    this.thisArg = thisArg;
    this.source = source;
  }

  EveryOperator.prototype.call = function (observer, source) {
    return source.subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
  };

  return EveryOperator;
}();

var EverySubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(EverySubscriber, _super);

  function EverySubscriber(destination, predicate, thisArg, source) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.thisArg = thisArg;
    _this.source = source;
    _this.index = 0;
    _this.thisArg = thisArg || _this;
    return _this;
  }

  EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
    this.destination.next(everyValueMatch);
    this.destination.complete();
  };

  EverySubscriber.prototype._next = function (value) {
    var result = false;

    try {
      result = this.predicate.call(this.thisArg, value, this.index++, this.source);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    if (!result) {
      this.notifyComplete(false);
    }
  };

  EverySubscriber.prototype._complete = function () {
    this.notifyComplete(true);
  };

  return EverySubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/operators/exhaust.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exhaust = exhaust;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function exhaust() {
  return function (source) {
    return source.lift(new SwitchFirstOperator());
  };
}

var SwitchFirstOperator =
/*@__PURE__*/
function () {
  function SwitchFirstOperator() {}

  SwitchFirstOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new SwitchFirstSubscriber(subscriber));
  };

  return SwitchFirstOperator;
}();

var SwitchFirstSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SwitchFirstSubscriber, _super);

  function SwitchFirstSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.hasCompleted = false;
    _this.hasSubscription = false;
    return _this;
  }

  SwitchFirstSubscriber.prototype._next = function (value) {
    if (!this.hasSubscription) {
      this.hasSubscription = true;
      this.add((0, _subscribeToResult.subscribeToResult)(this, value));
    }
  };

  SwitchFirstSubscriber.prototype._complete = function () {
    this.hasCompleted = true;

    if (!this.hasSubscription) {
      this.destination.complete();
    }
  };

  SwitchFirstSubscriber.prototype.notifyComplete = function (innerSub) {
    this.remove(innerSub);
    this.hasSubscription = false;

    if (this.hasCompleted) {
      this.destination.complete();
    }
  };

  return SwitchFirstSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/operators/exhaustMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exhaustMap = exhaustMap;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _InnerSubscriber = require("../InnerSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

var _map = require("./map");

var _from = require("../observable/from");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult,_map,_observable_from PURE_IMPORTS_END */
function exhaustMap(project, resultSelector) {
  if (resultSelector) {
    return function (source) {
      return source.pipe(exhaustMap(function (a, i) {
        return (0, _from.from)(project(a, i)).pipe((0, _map.map)(function (b, ii) {
          return resultSelector(a, b, i, ii);
        }));
      }));
    };
  }

  return function (source) {
    return source.lift(new ExhaustMapOperator(project));
  };
}

var ExhaustMapOperator =
/*@__PURE__*/
function () {
  function ExhaustMapOperator(project) {
    this.project = project;
  }

  ExhaustMapOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ExhaustMapSubscriber(subscriber, this.project));
  };

  return ExhaustMapOperator;
}();

var ExhaustMapSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ExhaustMapSubscriber, _super);

  function ExhaustMapSubscriber(destination, project) {
    var _this = _super.call(this, destination) || this;

    _this.project = project;
    _this.hasSubscription = false;
    _this.hasCompleted = false;
    _this.index = 0;
    return _this;
  }

  ExhaustMapSubscriber.prototype._next = function (value) {
    if (!this.hasSubscription) {
      this.tryNext(value);
    }
  };

  ExhaustMapSubscriber.prototype.tryNext = function (value) {
    var result;
    var index = this.index++;

    try {
      result = this.project(value, index);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.hasSubscription = true;

    this._innerSub(result, value, index);
  };

  ExhaustMapSubscriber.prototype._innerSub = function (result, value, index) {
    var innerSubscriber = new _InnerSubscriber.InnerSubscriber(this, undefined, undefined);
    var destination = this.destination;
    destination.add(innerSubscriber);
    (0, _subscribeToResult.subscribeToResult)(this, result, value, index, innerSubscriber);
  };

  ExhaustMapSubscriber.prototype._complete = function () {
    this.hasCompleted = true;

    if (!this.hasSubscription) {
      this.destination.complete();
    }

    this.unsubscribe();
  };

  ExhaustMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.destination.next(innerValue);
  };

  ExhaustMapSubscriber.prototype.notifyError = function (err) {
    this.destination.error(err);
  };

  ExhaustMapSubscriber.prototype.notifyComplete = function (innerSub) {
    var destination = this.destination;
    destination.remove(innerSub);
    this.hasSubscription = false;

    if (this.hasCompleted) {
      this.destination.complete();
    }
  };

  return ExhaustMapSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../InnerSubscriber":"../../node_modules/rxjs/_esm5/internal/InnerSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js","./map":"../../node_modules/rxjs/_esm5/internal/operators/map.js","../observable/from":"../../node_modules/rxjs/_esm5/internal/observable/from.js"}],"../../node_modules/rxjs/_esm5/internal/operators/expand.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expand = expand;
exports.ExpandSubscriber = exports.ExpandOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function expand(project, concurrent, scheduler) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }

  if (scheduler === void 0) {
    scheduler = undefined;
  }

  concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
  return function (source) {
    return source.lift(new ExpandOperator(project, concurrent, scheduler));
  };
}

var ExpandOperator =
/*@__PURE__*/
function () {
  function ExpandOperator(project, concurrent, scheduler) {
    this.project = project;
    this.concurrent = concurrent;
    this.scheduler = scheduler;
  }

  ExpandOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
  };

  return ExpandOperator;
}();

exports.ExpandOperator = ExpandOperator;

var ExpandSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ExpandSubscriber, _super);

  function ExpandSubscriber(destination, project, concurrent, scheduler) {
    var _this = _super.call(this, destination) || this;

    _this.project = project;
    _this.concurrent = concurrent;
    _this.scheduler = scheduler;
    _this.index = 0;
    _this.active = 0;
    _this.hasCompleted = false;

    if (concurrent < Number.POSITIVE_INFINITY) {
      _this.buffer = [];
    }

    return _this;
  }

  ExpandSubscriber.dispatch = function (arg) {
    var subscriber = arg.subscriber,
        result = arg.result,
        value = arg.value,
        index = arg.index;
    subscriber.subscribeToProjection(result, value, index);
  };

  ExpandSubscriber.prototype._next = function (value) {
    var destination = this.destination;

    if (destination.closed) {
      this._complete();

      return;
    }

    var index = this.index++;

    if (this.active < this.concurrent) {
      destination.next(value);

      try {
        var project = this.project;
        var result = project(value, index);

        if (!this.scheduler) {
          this.subscribeToProjection(result, value, index);
        } else {
          var state = {
            subscriber: this,
            result: result,
            value: value,
            index: index
          };
          var destination_1 = this.destination;
          destination_1.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
        }
      } catch (e) {
        destination.error(e);
      }
    } else {
      this.buffer.push(value);
    }
  };

  ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
    this.active++;
    var destination = this.destination;
    destination.add((0, _subscribeToResult.subscribeToResult)(this, result, value, index));
  };

  ExpandSubscriber.prototype._complete = function () {
    this.hasCompleted = true;

    if (this.hasCompleted && this.active === 0) {
      this.destination.complete();
    }

    this.unsubscribe();
  };

  ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this._next(innerValue);
  };

  ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
    var buffer = this.buffer;
    var destination = this.destination;
    destination.remove(innerSub);
    this.active--;

    if (buffer && buffer.length > 0) {
      this._next(buffer.shift());
    }

    if (this.hasCompleted && this.active === 0) {
      this.destination.complete();
    }
  };

  return ExpandSubscriber;
}(_OuterSubscriber.OuterSubscriber);

exports.ExpandSubscriber = ExpandSubscriber;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/operators/finalize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.finalize = finalize;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _Subscription = require("../Subscription");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_Subscription PURE_IMPORTS_END */
function finalize(callback) {
  return function (source) {
    return source.lift(new FinallyOperator(callback));
  };
}

var FinallyOperator =
/*@__PURE__*/
function () {
  function FinallyOperator(callback) {
    this.callback = callback;
  }

  FinallyOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new FinallySubscriber(subscriber, this.callback));
  };

  return FinallyOperator;
}();

var FinallySubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(FinallySubscriber, _super);

  function FinallySubscriber(destination, callback) {
    var _this = _super.call(this, destination) || this;

    _this.add(new _Subscription.Subscription(callback));

    return _this;
  }

  return FinallySubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","../Subscription":"../../node_modules/rxjs/_esm5/internal/Subscription.js"}],"../../node_modules/rxjs/_esm5/internal/operators/find.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find = find;
exports.FindValueSubscriber = exports.FindValueOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function find(predicate, thisArg) {
  if (typeof predicate !== 'function') {
    throw new TypeError('predicate is not a function');
  }

  return function (source) {
    return source.lift(new FindValueOperator(predicate, source, false, thisArg));
  };
}

var FindValueOperator =
/*@__PURE__*/
function () {
  function FindValueOperator(predicate, source, yieldIndex, thisArg) {
    this.predicate = predicate;
    this.source = source;
    this.yieldIndex = yieldIndex;
    this.thisArg = thisArg;
  }

  FindValueOperator.prototype.call = function (observer, source) {
    return source.subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
  };

  return FindValueOperator;
}();

exports.FindValueOperator = FindValueOperator;

var FindValueSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(FindValueSubscriber, _super);

  function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.source = source;
    _this.yieldIndex = yieldIndex;
    _this.thisArg = thisArg;
    _this.index = 0;
    return _this;
  }

  FindValueSubscriber.prototype.notifyComplete = function (value) {
    var destination = this.destination;
    destination.next(value);
    destination.complete();
    this.unsubscribe();
  };

  FindValueSubscriber.prototype._next = function (value) {
    var _a = this,
        predicate = _a.predicate,
        thisArg = _a.thisArg;

    var index = this.index++;

    try {
      var result = predicate.call(thisArg || this, value, index, this.source);

      if (result) {
        this.notifyComplete(this.yieldIndex ? index : value);
      }
    } catch (err) {
      this.destination.error(err);
    }
  };

  FindValueSubscriber.prototype._complete = function () {
    this.notifyComplete(this.yieldIndex ? -1 : undefined);
  };

  return FindValueSubscriber;
}(_Subscriber.Subscriber);

exports.FindValueSubscriber = FindValueSubscriber;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/operators/findIndex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findIndex = findIndex;

var _find = require("../operators/find");

/** PURE_IMPORTS_START _operators_find PURE_IMPORTS_END */
function findIndex(predicate, thisArg) {
  return function (source) {
    return source.lift(new _find.FindValueOperator(predicate, source, true, thisArg));
  };
}
},{"../operators/find":"../../node_modules/rxjs/_esm5/internal/operators/find.js"}],"../../node_modules/rxjs/_esm5/internal/operators/first.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.first = first;

var _EmptyError = require("../util/EmptyError");

var _filter = require("./filter");

var _take = require("./take");

var _defaultIfEmpty = require("./defaultIfEmpty");

var _throwIfEmpty = require("./throwIfEmpty");

var _identity = require("../util/identity");

/** PURE_IMPORTS_START _util_EmptyError,_filter,_take,_defaultIfEmpty,_throwIfEmpty,_util_identity PURE_IMPORTS_END */
function first(predicate, defaultValue) {
  var hasDefaultValue = arguments.length >= 2;
  return function (source) {
    return source.pipe(predicate ? (0, _filter.filter)(function (v, i) {
      return predicate(v, i, source);
    }) : _identity.identity, (0, _take.take)(1), hasDefaultValue ? (0, _defaultIfEmpty.defaultIfEmpty)(defaultValue) : (0, _throwIfEmpty.throwIfEmpty)(function () {
      return new _EmptyError.EmptyError();
    }));
  };
}
},{"../util/EmptyError":"../../node_modules/rxjs/_esm5/internal/util/EmptyError.js","./filter":"../../node_modules/rxjs/_esm5/internal/operators/filter.js","./take":"../../node_modules/rxjs/_esm5/internal/operators/take.js","./defaultIfEmpty":"../../node_modules/rxjs/_esm5/internal/operators/defaultIfEmpty.js","./throwIfEmpty":"../../node_modules/rxjs/_esm5/internal/operators/throwIfEmpty.js","../util/identity":"../../node_modules/rxjs/_esm5/internal/util/identity.js"}],"../../node_modules/rxjs/_esm5/internal/operators/ignoreElements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ignoreElements = ignoreElements;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function ignoreElements() {
  return function ignoreElementsOperatorFunction(source) {
    return source.lift(new IgnoreElementsOperator());
  };
}

var IgnoreElementsOperator =
/*@__PURE__*/
function () {
  function IgnoreElementsOperator() {}

  IgnoreElementsOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new IgnoreElementsSubscriber(subscriber));
  };

  return IgnoreElementsOperator;
}();

var IgnoreElementsSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(IgnoreElementsSubscriber, _super);

  function IgnoreElementsSubscriber() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  IgnoreElementsSubscriber.prototype._next = function (unused) {};

  return IgnoreElementsSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/operators/isEmpty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmpty = isEmpty;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function isEmpty() {
  return function (source) {
    return source.lift(new IsEmptyOperator());
  };
}

var IsEmptyOperator =
/*@__PURE__*/
function () {
  function IsEmptyOperator() {}

  IsEmptyOperator.prototype.call = function (observer, source) {
    return source.subscribe(new IsEmptySubscriber(observer));
  };

  return IsEmptyOperator;
}();

var IsEmptySubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(IsEmptySubscriber, _super);

  function IsEmptySubscriber(destination) {
    return _super.call(this, destination) || this;
  }

  IsEmptySubscriber.prototype.notifyComplete = function (isEmpty) {
    var destination = this.destination;
    destination.next(isEmpty);
    destination.complete();
  };

  IsEmptySubscriber.prototype._next = function (value) {
    this.notifyComplete(false);
  };

  IsEmptySubscriber.prototype._complete = function () {
    this.notifyComplete(true);
  };

  return IsEmptySubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/operators/takeLast.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeLast = takeLast;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _ArgumentOutOfRangeError = require("../util/ArgumentOutOfRangeError");

var _empty = require("../observable/empty");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */
function takeLast(count) {
  return function takeLastOperatorFunction(source) {
    if (count === 0) {
      return (0, _empty.empty)();
    } else {
      return source.lift(new TakeLastOperator(count));
    }
  };
}

var TakeLastOperator =
/*@__PURE__*/
function () {
  function TakeLastOperator(total) {
    this.total = total;

    if (this.total < 0) {
      throw new _ArgumentOutOfRangeError.ArgumentOutOfRangeError();
    }
  }

  TakeLastOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
  };

  return TakeLastOperator;
}();

var TakeLastSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(TakeLastSubscriber, _super);

  function TakeLastSubscriber(destination, total) {
    var _this = _super.call(this, destination) || this;

    _this.total = total;
    _this.ring = new Array();
    _this.count = 0;
    return _this;
  }

  TakeLastSubscriber.prototype._next = function (value) {
    var ring = this.ring;
    var total = this.total;
    var count = this.count++;

    if (ring.length < total) {
      ring.push(value);
    } else {
      var index = count % total;
      ring[index] = value;
    }
  };

  TakeLastSubscriber.prototype._complete = function () {
    var destination = this.destination;
    var count = this.count;

    if (count > 0) {
      var total = this.count >= this.total ? this.total : this.count;
      var ring = this.ring;

      for (var i = 0; i < total; i++) {
        var idx = count++ % total;
        destination.next(ring[idx]);
      }
    }

    destination.complete();
  };

  return TakeLastSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","../util/ArgumentOutOfRangeError":"../../node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js","../observable/empty":"../../node_modules/rxjs/_esm5/internal/observable/empty.js"}],"../../node_modules/rxjs/_esm5/internal/operators/last.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.last = last;

var _EmptyError = require("../util/EmptyError");

var _filter = require("./filter");

var _takeLast = require("./takeLast");

var _throwIfEmpty = require("./throwIfEmpty");

var _defaultIfEmpty = require("./defaultIfEmpty");

var _identity = require("../util/identity");

/** PURE_IMPORTS_START _util_EmptyError,_filter,_takeLast,_throwIfEmpty,_defaultIfEmpty,_util_identity PURE_IMPORTS_END */
function last(predicate, defaultValue) {
  var hasDefaultValue = arguments.length >= 2;
  return function (source) {
    return source.pipe(predicate ? (0, _filter.filter)(function (v, i) {
      return predicate(v, i, source);
    }) : _identity.identity, (0, _takeLast.takeLast)(1), hasDefaultValue ? (0, _defaultIfEmpty.defaultIfEmpty)(defaultValue) : (0, _throwIfEmpty.throwIfEmpty)(function () {
      return new _EmptyError.EmptyError();
    }));
  };
}
},{"../util/EmptyError":"../../node_modules/rxjs/_esm5/internal/util/EmptyError.js","./filter":"../../node_modules/rxjs/_esm5/internal/operators/filter.js","./takeLast":"../../node_modules/rxjs/_esm5/internal/operators/takeLast.js","./throwIfEmpty":"../../node_modules/rxjs/_esm5/internal/operators/throwIfEmpty.js","./defaultIfEmpty":"../../node_modules/rxjs/_esm5/internal/operators/defaultIfEmpty.js","../util/identity":"../../node_modules/rxjs/_esm5/internal/util/identity.js"}],"../../node_modules/rxjs/_esm5/internal/operators/mapTo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapTo = mapTo;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function mapTo(value) {
  return function (source) {
    return source.lift(new MapToOperator(value));
  };
}

var MapToOperator =
/*@__PURE__*/
function () {
  function MapToOperator(value) {
    this.value = value;
  }

  MapToOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new MapToSubscriber(subscriber, this.value));
  };

  return MapToOperator;
}();

var MapToSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(MapToSubscriber, _super);

  function MapToSubscriber(destination, value) {
    var _this = _super.call(this, destination) || this;

    _this.value = value;
    return _this;
  }

  MapToSubscriber.prototype._next = function (x) {
    this.destination.next(this.value);
  };

  return MapToSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/operators/materialize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.materialize = materialize;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _Notification = require("../Notification");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */
function materialize() {
  return function materializeOperatorFunction(source) {
    return source.lift(new MaterializeOperator());
  };
}

var MaterializeOperator =
/*@__PURE__*/
function () {
  function MaterializeOperator() {}

  MaterializeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new MaterializeSubscriber(subscriber));
  };

  return MaterializeOperator;
}();

var MaterializeSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(MaterializeSubscriber, _super);

  function MaterializeSubscriber(destination) {
    return _super.call(this, destination) || this;
  }

  MaterializeSubscriber.prototype._next = function (value) {
    this.destination.next(_Notification.Notification.createNext(value));
  };

  MaterializeSubscriber.prototype._error = function (err) {
    var destination = this.destination;
    destination.next(_Notification.Notification.createError(err));
    destination.complete();
  };

  MaterializeSubscriber.prototype._complete = function () {
    var destination = this.destination;
    destination.next(_Notification.Notification.createComplete());
    destination.complete();
  };

  return MaterializeSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","../Notification":"../../node_modules/rxjs/_esm5/internal/Notification.js"}],"../../node_modules/rxjs/_esm5/internal/operators/scan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scan = scan;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function scan(accumulator, seed) {
  var hasSeed = false;

  if (arguments.length >= 2) {
    hasSeed = true;
  }

  return function scanOperatorFunction(source) {
    return source.lift(new ScanOperator(accumulator, seed, hasSeed));
  };
}

var ScanOperator =
/*@__PURE__*/
function () {
  function ScanOperator(accumulator, seed, hasSeed) {
    if (hasSeed === void 0) {
      hasSeed = false;
    }

    this.accumulator = accumulator;
    this.seed = seed;
    this.hasSeed = hasSeed;
  }

  ScanOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
  };

  return ScanOperator;
}();

var ScanSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ScanSubscriber, _super);

  function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
    var _this = _super.call(this, destination) || this;

    _this.accumulator = accumulator;
    _this._seed = _seed;
    _this.hasSeed = hasSeed;
    _this.index = 0;
    return _this;
  }

  Object.defineProperty(ScanSubscriber.prototype, "seed", {
    get: function () {
      return this._seed;
    },
    set: function (value) {
      this.hasSeed = true;
      this._seed = value;
    },
    enumerable: true,
    configurable: true
  });

  ScanSubscriber.prototype._next = function (value) {
    if (!this.hasSeed) {
      this.seed = value;
      this.destination.next(value);
    } else {
      return this._tryNext(value);
    }
  };

  ScanSubscriber.prototype._tryNext = function (value) {
    var index = this.index++;
    var result;

    try {
      result = this.accumulator(this.seed, value, index);
    } catch (err) {
      this.destination.error(err);
    }

    this.seed = result;
    this.destination.next(result);
  };

  return ScanSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/operators/reduce.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reduce = reduce;

var _scan = require("./scan");

var _takeLast = require("./takeLast");

var _defaultIfEmpty = require("./defaultIfEmpty");

var _pipe = require("../util/pipe");

/** PURE_IMPORTS_START _scan,_takeLast,_defaultIfEmpty,_util_pipe PURE_IMPORTS_END */
function reduce(accumulator, seed) {
  if (arguments.length >= 2) {
    return function reduceOperatorFunctionWithSeed(source) {
      return (0, _pipe.pipe)((0, _scan.scan)(accumulator, seed), (0, _takeLast.takeLast)(1), (0, _defaultIfEmpty.defaultIfEmpty)(seed))(source);
    };
  }

  return function reduceOperatorFunction(source) {
    return (0, _pipe.pipe)((0, _scan.scan)(function (acc, value, index) {
      return accumulator(acc, value, index + 1);
    }), (0, _takeLast.takeLast)(1))(source);
  };
}
},{"./scan":"../../node_modules/rxjs/_esm5/internal/operators/scan.js","./takeLast":"../../node_modules/rxjs/_esm5/internal/operators/takeLast.js","./defaultIfEmpty":"../../node_modules/rxjs/_esm5/internal/operators/defaultIfEmpty.js","../util/pipe":"../../node_modules/rxjs/_esm5/internal/util/pipe.js"}],"../../node_modules/rxjs/_esm5/internal/operators/max.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.max = max;

var _reduce = require("./reduce");

/** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */
function max(comparer) {
  var max = typeof comparer === 'function' ? function (x, y) {
    return comparer(x, y) > 0 ? x : y;
  } : function (x, y) {
    return x > y ? x : y;
  };
  return (0, _reduce.reduce)(max);
}
},{"./reduce":"../../node_modules/rxjs/_esm5/internal/operators/reduce.js"}],"../../node_modules/rxjs/_esm5/internal/operators/merge.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = merge;

var _merge = require("../observable/merge");

/** PURE_IMPORTS_START _observable_merge PURE_IMPORTS_END */
function merge() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  return function (source) {
    return source.lift.call(_merge.merge.apply(void 0, [source].concat(observables)));
  };
}
},{"../observable/merge":"../../node_modules/rxjs/_esm5/internal/observable/merge.js"}],"../../node_modules/rxjs/_esm5/internal/operators/mergeMapTo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMapTo = mergeMapTo;

var _mergeMap = require("./mergeMap");

/** PURE_IMPORTS_START _mergeMap PURE_IMPORTS_END */
function mergeMapTo(innerObservable, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }

  if (typeof resultSelector === 'function') {
    return (0, _mergeMap.mergeMap)(function () {
      return innerObservable;
    }, resultSelector, concurrent);
  }

  if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }

  return (0, _mergeMap.mergeMap)(function () {
    return innerObservable;
  }, concurrent);
}
},{"./mergeMap":"../../node_modules/rxjs/_esm5/internal/operators/mergeMap.js"}],"../../node_modules/rxjs/_esm5/internal/operators/mergeScan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeScan = mergeScan;
exports.MergeScanSubscriber = exports.MergeScanOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _subscribeToResult = require("../util/subscribeToResult");

var _OuterSubscriber = require("../OuterSubscriber");

var _InnerSubscriber = require("../InnerSubscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber PURE_IMPORTS_END */
function mergeScan(accumulator, seed, concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }

  return function (source) {
    return source.lift(new MergeScanOperator(accumulator, seed, concurrent));
  };
}

var MergeScanOperator =
/*@__PURE__*/
function () {
  function MergeScanOperator(accumulator, seed, concurrent) {
    this.accumulator = accumulator;
    this.seed = seed;
    this.concurrent = concurrent;
  }

  MergeScanOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new MergeScanSubscriber(subscriber, this.accumulator, this.seed, this.concurrent));
  };

  return MergeScanOperator;
}();

exports.MergeScanOperator = MergeScanOperator;

var MergeScanSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(MergeScanSubscriber, _super);

  function MergeScanSubscriber(destination, accumulator, acc, concurrent) {
    var _this = _super.call(this, destination) || this;

    _this.accumulator = accumulator;
    _this.acc = acc;
    _this.concurrent = concurrent;
    _this.hasValue = false;
    _this.hasCompleted = false;
    _this.buffer = [];
    _this.active = 0;
    _this.index = 0;
    return _this;
  }

  MergeScanSubscriber.prototype._next = function (value) {
    if (this.active < this.concurrent) {
      var index = this.index++;
      var destination = this.destination;
      var ish = void 0;

      try {
        var accumulator = this.accumulator;
        ish = accumulator(this.acc, value, index);
      } catch (e) {
        return destination.error(e);
      }

      this.active++;

      this._innerSub(ish, value, index);
    } else {
      this.buffer.push(value);
    }
  };

  MergeScanSubscriber.prototype._innerSub = function (ish, value, index) {
    var innerSubscriber = new _InnerSubscriber.InnerSubscriber(this, undefined, undefined);
    var destination = this.destination;
    destination.add(innerSubscriber);
    (0, _subscribeToResult.subscribeToResult)(this, ish, value, index, innerSubscriber);
  };

  MergeScanSubscriber.prototype._complete = function () {
    this.hasCompleted = true;

    if (this.active === 0 && this.buffer.length === 0) {
      if (this.hasValue === false) {
        this.destination.next(this.acc);
      }

      this.destination.complete();
    }

    this.unsubscribe();
  };

  MergeScanSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    var destination = this.destination;
    this.acc = innerValue;
    this.hasValue = true;
    destination.next(innerValue);
  };

  MergeScanSubscriber.prototype.notifyComplete = function (innerSub) {
    var buffer = this.buffer;
    var destination = this.destination;
    destination.remove(innerSub);
    this.active--;

    if (buffer.length > 0) {
      this._next(buffer.shift());
    } else if (this.active === 0 && this.hasCompleted) {
      if (this.hasValue === false) {
        this.destination.next(this.acc);
      }

      this.destination.complete();
    }
  };

  return MergeScanSubscriber;
}(_OuterSubscriber.OuterSubscriber);

exports.MergeScanSubscriber = MergeScanSubscriber;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../InnerSubscriber":"../../node_modules/rxjs/_esm5/internal/InnerSubscriber.js"}],"../../node_modules/rxjs/_esm5/internal/operators/min.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.min = min;

var _reduce = require("./reduce");

/** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */
function min(comparer) {
  var min = typeof comparer === 'function' ? function (x, y) {
    return comparer(x, y) < 0 ? x : y;
  } : function (x, y) {
    return x < y ? x : y;
  };
  return (0, _reduce.reduce)(min);
}
},{"./reduce":"../../node_modules/rxjs/_esm5/internal/operators/reduce.js"}],"../../node_modules/rxjs/_esm5/internal/operators/multicast.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multicast = multicast;
exports.MulticastOperator = void 0;

var _ConnectableObservable = require("../observable/ConnectableObservable");

/** PURE_IMPORTS_START _observable_ConnectableObservable PURE_IMPORTS_END */
function multicast(subjectOrSubjectFactory, selector) {
  return function multicastOperatorFunction(source) {
    var subjectFactory;

    if (typeof subjectOrSubjectFactory === 'function') {
      subjectFactory = subjectOrSubjectFactory;
    } else {
      subjectFactory = function subjectFactory() {
        return subjectOrSubjectFactory;
      };
    }

    if (typeof selector === 'function') {
      return source.lift(new MulticastOperator(subjectFactory, selector));
    }

    var connectable = Object.create(source, _ConnectableObservable.connectableObservableDescriptor);
    connectable.source = source;
    connectable.subjectFactory = subjectFactory;
    return connectable;
  };
}

var MulticastOperator =
/*@__PURE__*/
function () {
  function MulticastOperator(subjectFactory, selector) {
    this.subjectFactory = subjectFactory;
    this.selector = selector;
  }

  MulticastOperator.prototype.call = function (subscriber, source) {
    var selector = this.selector;
    var subject = this.subjectFactory();
    var subscription = selector(subject).subscribe(subscriber);
    subscription.add(source.subscribe(subject));
    return subscription;
  };

  return MulticastOperator;
}();

exports.MulticastOperator = MulticastOperator;
},{"../observable/ConnectableObservable":"../../node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js"}],"../../node_modules/rxjs/_esm5/internal/operators/onErrorResumeNext.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onErrorResumeNext = onErrorResumeNext;
exports.onErrorResumeNextStatic = onErrorResumeNextStatic;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _from = require("../observable/from");

var _isArray = require("../util/isArray");

var _OuterSubscriber = require("../OuterSubscriber");

var _InnerSubscriber = require("../InnerSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_observable_from,_util_isArray,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function onErrorResumeNext() {
  var nextSources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    nextSources[_i] = arguments[_i];
  }

  if (nextSources.length === 1 && (0, _isArray.isArray)(nextSources[0])) {
    nextSources = nextSources[0];
  }

  return function (source) {
    return source.lift(new OnErrorResumeNextOperator(nextSources));
  };
}

function onErrorResumeNextStatic() {
  var nextSources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    nextSources[_i] = arguments[_i];
  }

  var source = null;

  if (nextSources.length === 1 && (0, _isArray.isArray)(nextSources[0])) {
    nextSources = nextSources[0];
  }

  source = nextSources.shift();
  return (0, _from.from)(source, null).lift(new OnErrorResumeNextOperator(nextSources));
}

var OnErrorResumeNextOperator =
/*@__PURE__*/
function () {
  function OnErrorResumeNextOperator(nextSources) {
    this.nextSources = nextSources;
  }

  OnErrorResumeNextOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
  };

  return OnErrorResumeNextOperator;
}();

var OnErrorResumeNextSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(OnErrorResumeNextSubscriber, _super);

  function OnErrorResumeNextSubscriber(destination, nextSources) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    _this.nextSources = nextSources;
    return _this;
  }

  OnErrorResumeNextSubscriber.prototype.notifyError = function (error, innerSub) {
    this.subscribeToNextSource();
  };

  OnErrorResumeNextSubscriber.prototype.notifyComplete = function (innerSub) {
    this.subscribeToNextSource();
  };

  OnErrorResumeNextSubscriber.prototype._error = function (err) {
    this.subscribeToNextSource();
    this.unsubscribe();
  };

  OnErrorResumeNextSubscriber.prototype._complete = function () {
    this.subscribeToNextSource();
    this.unsubscribe();
  };

  OnErrorResumeNextSubscriber.prototype.subscribeToNextSource = function () {
    var next = this.nextSources.shift();

    if (!!next) {
      var innerSubscriber = new _InnerSubscriber.InnerSubscriber(this, undefined, undefined);
      var destination = this.destination;
      destination.add(innerSubscriber);
      (0, _subscribeToResult.subscribeToResult)(this, next, undefined, undefined, innerSubscriber);
    } else {
      this.destination.complete();
    }
  };

  return OnErrorResumeNextSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../observable/from":"../../node_modules/rxjs/_esm5/internal/observable/from.js","../util/isArray":"../../node_modules/rxjs/_esm5/internal/util/isArray.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../InnerSubscriber":"../../node_modules/rxjs/_esm5/internal/InnerSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/operators/pairwise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pairwise = pairwise;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function pairwise() {
  return function (source) {
    return source.lift(new PairwiseOperator());
  };
}

var PairwiseOperator =
/*@__PURE__*/
function () {
  function PairwiseOperator() {}

  PairwiseOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new PairwiseSubscriber(subscriber));
  };

  return PairwiseOperator;
}();

var PairwiseSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(PairwiseSubscriber, _super);

  function PairwiseSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.hasPrev = false;
    return _this;
  }

  PairwiseSubscriber.prototype._next = function (value) {
    if (this.hasPrev) {
      this.destination.next([this.prev, value]);
    } else {
      this.hasPrev = true;
    }

    this.prev = value;
  };

  return PairwiseSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/util/not.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.not = not;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function not(pred, thisArg) {
  function notPred() {
    return !notPred.pred.apply(notPred.thisArg, arguments);
  }

  notPred.pred = pred;
  notPred.thisArg = thisArg;
  return notPred;
}
},{}],"../../node_modules/rxjs/_esm5/internal/operators/partition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partition = partition;

var _not = require("../util/not");

var _filter = require("./filter");

/** PURE_IMPORTS_START _util_not,_filter PURE_IMPORTS_END */
function partition(predicate, thisArg) {
  return function (source) {
    return [(0, _filter.filter)(predicate, thisArg)(source), (0, _filter.filter)((0, _not.not)(predicate, thisArg))(source)];
  };
}
},{"../util/not":"../../node_modules/rxjs/_esm5/internal/util/not.js","./filter":"../../node_modules/rxjs/_esm5/internal/operators/filter.js"}],"../../node_modules/rxjs/_esm5/internal/operators/pluck.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pluck = pluck;

var _map = require("./map");

/** PURE_IMPORTS_START _map PURE_IMPORTS_END */
function pluck() {
  var properties = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    properties[_i] = arguments[_i];
  }

  var length = properties.length;

  if (length === 0) {
    throw new Error('list of properties cannot be empty.');
  }

  return function (source) {
    return (0, _map.map)(plucker(properties, length))(source);
  };
}

function plucker(props, length) {
  var mapper = function (x) {
    var currentProp = x;

    for (var i = 0; i < length; i++) {
      var p = currentProp[props[i]];

      if (typeof p !== 'undefined') {
        currentProp = p;
      } else {
        return undefined;
      }
    }

    return currentProp;
  };

  return mapper;
}
},{"./map":"../../node_modules/rxjs/_esm5/internal/operators/map.js"}],"../../node_modules/rxjs/_esm5/internal/operators/publish.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publish = publish;

var _Subject = require("../Subject");

var _multicast = require("./multicast");

/** PURE_IMPORTS_START _Subject,_multicast PURE_IMPORTS_END */
function publish(selector) {
  return selector ? (0, _multicast.multicast)(function () {
    return new _Subject.Subject();
  }, selector) : (0, _multicast.multicast)(new _Subject.Subject());
}
},{"../Subject":"../../node_modules/rxjs/_esm5/internal/Subject.js","./multicast":"../../node_modules/rxjs/_esm5/internal/operators/multicast.js"}],"../../node_modules/rxjs/_esm5/internal/operators/publishBehavior.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publishBehavior = publishBehavior;

var _BehaviorSubject = require("../BehaviorSubject");

var _multicast = require("./multicast");

/** PURE_IMPORTS_START _BehaviorSubject,_multicast PURE_IMPORTS_END */
function publishBehavior(value) {
  return function (source) {
    return (0, _multicast.multicast)(new _BehaviorSubject.BehaviorSubject(value))(source);
  };
}
},{"../BehaviorSubject":"../../node_modules/rxjs/_esm5/internal/BehaviorSubject.js","./multicast":"../../node_modules/rxjs/_esm5/internal/operators/multicast.js"}],"../../node_modules/rxjs/_esm5/internal/operators/publishLast.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publishLast = publishLast;

var _AsyncSubject = require("../AsyncSubject");

var _multicast = require("./multicast");

/** PURE_IMPORTS_START _AsyncSubject,_multicast PURE_IMPORTS_END */
function publishLast() {
  return function (source) {
    return (0, _multicast.multicast)(new _AsyncSubject.AsyncSubject())(source);
  };
}
},{"../AsyncSubject":"../../node_modules/rxjs/_esm5/internal/AsyncSubject.js","./multicast":"../../node_modules/rxjs/_esm5/internal/operators/multicast.js"}],"../../node_modules/rxjs/_esm5/internal/operators/publishReplay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publishReplay = publishReplay;

var _ReplaySubject = require("../ReplaySubject");

var _multicast = require("./multicast");

/** PURE_IMPORTS_START _ReplaySubject,_multicast PURE_IMPORTS_END */
function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
  if (selectorOrScheduler && typeof selectorOrScheduler !== 'function') {
    scheduler = selectorOrScheduler;
  }

  var selector = typeof selectorOrScheduler === 'function' ? selectorOrScheduler : undefined;
  var subject = new _ReplaySubject.ReplaySubject(bufferSize, windowTime, scheduler);
  return function (source) {
    return (0, _multicast.multicast)(function () {
      return subject;
    }, selector)(source);
  };
}
},{"../ReplaySubject":"../../node_modules/rxjs/_esm5/internal/ReplaySubject.js","./multicast":"../../node_modules/rxjs/_esm5/internal/operators/multicast.js"}],"../../node_modules/rxjs/_esm5/internal/operators/race.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.race = race;

var _isArray = require("../util/isArray");

var _race = require("../observable/race");

/** PURE_IMPORTS_START _util_isArray,_observable_race PURE_IMPORTS_END */
function race() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  return function raceOperatorFunction(source) {
    if (observables.length === 1 && (0, _isArray.isArray)(observables[0])) {
      observables = observables[0];
    }

    return source.lift.call(_race.race.apply(void 0, [source].concat(observables)));
  };
}
},{"../util/isArray":"../../node_modules/rxjs/_esm5/internal/util/isArray.js","../observable/race":"../../node_modules/rxjs/_esm5/internal/observable/race.js"}],"../../node_modules/rxjs/_esm5/internal/operators/repeat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeat = repeat;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _empty = require("../observable/empty");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_observable_empty PURE_IMPORTS_END */
function repeat(count) {
  if (count === void 0) {
    count = -1;
  }

  return function (source) {
    if (count === 0) {
      return (0, _empty.empty)();
    } else if (count < 0) {
      return source.lift(new RepeatOperator(-1, source));
    } else {
      return source.lift(new RepeatOperator(count - 1, source));
    }
  };
}

var RepeatOperator =
/*@__PURE__*/
function () {
  function RepeatOperator(count, source) {
    this.count = count;
    this.source = source;
  }

  RepeatOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
  };

  return RepeatOperator;
}();

var RepeatSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(RepeatSubscriber, _super);

  function RepeatSubscriber(destination, count, source) {
    var _this = _super.call(this, destination) || this;

    _this.count = count;
    _this.source = source;
    return _this;
  }

  RepeatSubscriber.prototype.complete = function () {
    if (!this.isStopped) {
      var _a = this,
          source = _a.source,
          count = _a.count;

      if (count === 0) {
        return _super.prototype.complete.call(this);
      } else if (count > -1) {
        this.count = count - 1;
      }

      source.subscribe(this._unsubscribeAndRecycle());
    }
  };

  return RepeatSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","../observable/empty":"../../node_modules/rxjs/_esm5/internal/observable/empty.js"}],"../../node_modules/rxjs/_esm5/internal/operators/repeatWhen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeatWhen = repeatWhen;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("../Subject");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function repeatWhen(notifier) {
  return function (source) {
    return source.lift(new RepeatWhenOperator(notifier));
  };
}

var RepeatWhenOperator =
/*@__PURE__*/
function () {
  function RepeatWhenOperator(notifier) {
    this.notifier = notifier;
  }

  RepeatWhenOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, source));
  };

  return RepeatWhenOperator;
}();

var RepeatWhenSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(RepeatWhenSubscriber, _super);

  function RepeatWhenSubscriber(destination, notifier, source) {
    var _this = _super.call(this, destination) || this;

    _this.notifier = notifier;
    _this.source = source;
    _this.sourceIsBeingSubscribedTo = true;
    return _this;
  }

  RepeatWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.sourceIsBeingSubscribedTo = true;
    this.source.subscribe(this);
  };

  RepeatWhenSubscriber.prototype.notifyComplete = function (innerSub) {
    if (this.sourceIsBeingSubscribedTo === false) {
      return _super.prototype.complete.call(this);
    }
  };

  RepeatWhenSubscriber.prototype.complete = function () {
    this.sourceIsBeingSubscribedTo = false;

    if (!this.isStopped) {
      if (!this.retries) {
        this.subscribeToRetries();
      }

      if (!this.retriesSubscription || this.retriesSubscription.closed) {
        return _super.prototype.complete.call(this);
      }

      this._unsubscribeAndRecycle();

      this.notifications.next();
    }
  };

  RepeatWhenSubscriber.prototype._unsubscribe = function () {
    var _a = this,
        notifications = _a.notifications,
        retriesSubscription = _a.retriesSubscription;

    if (notifications) {
      notifications.unsubscribe();
      this.notifications = null;
    }

    if (retriesSubscription) {
      retriesSubscription.unsubscribe();
      this.retriesSubscription = null;
    }

    this.retries = null;
  };

  RepeatWhenSubscriber.prototype._unsubscribeAndRecycle = function () {
    var _unsubscribe = this._unsubscribe;
    this._unsubscribe = null;

    _super.prototype._unsubscribeAndRecycle.call(this);

    this._unsubscribe = _unsubscribe;
    return this;
  };

  RepeatWhenSubscriber.prototype.subscribeToRetries = function () {
    this.notifications = new _Subject.Subject();
    var retries;

    try {
      var notifier = this.notifier;
      retries = notifier(this.notifications);
    } catch (e) {
      return _super.prototype.complete.call(this);
    }

    this.retries = retries;
    this.retriesSubscription = (0, _subscribeToResult.subscribeToResult)(this, retries);
  };

  return RepeatWhenSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subject":"../../node_modules/rxjs/_esm5/internal/Subject.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/operators/retry.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retry = retry;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function retry(count) {
  if (count === void 0) {
    count = -1;
  }

  return function (source) {
    return source.lift(new RetryOperator(count, source));
  };
}

var RetryOperator =
/*@__PURE__*/
function () {
  function RetryOperator(count, source) {
    this.count = count;
    this.source = source;
  }

  RetryOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
  };

  return RetryOperator;
}();

var RetrySubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(RetrySubscriber, _super);

  function RetrySubscriber(destination, count, source) {
    var _this = _super.call(this, destination) || this;

    _this.count = count;
    _this.source = source;
    return _this;
  }

  RetrySubscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      var _a = this,
          source = _a.source,
          count = _a.count;

      if (count === 0) {
        return _super.prototype.error.call(this, err);
      } else if (count > -1) {
        this.count = count - 1;
      }

      source.subscribe(this._unsubscribeAndRecycle());
    }
  };

  return RetrySubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/operators/retryWhen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retryWhen = retryWhen;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("../Subject");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function retryWhen(notifier) {
  return function (source) {
    return source.lift(new RetryWhenOperator(notifier, source));
  };
}

var RetryWhenOperator =
/*@__PURE__*/
function () {
  function RetryWhenOperator(notifier, source) {
    this.notifier = notifier;
    this.source = source;
  }

  RetryWhenOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
  };

  return RetryWhenOperator;
}();

var RetryWhenSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(RetryWhenSubscriber, _super);

  function RetryWhenSubscriber(destination, notifier, source) {
    var _this = _super.call(this, destination) || this;

    _this.notifier = notifier;
    _this.source = source;
    return _this;
  }

  RetryWhenSubscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      var errors = this.errors;
      var retries = this.retries;
      var retriesSubscription = this.retriesSubscription;

      if (!retries) {
        errors = new _Subject.Subject();

        try {
          var notifier = this.notifier;
          retries = notifier(errors);
        } catch (e) {
          return _super.prototype.error.call(this, e);
        }

        retriesSubscription = (0, _subscribeToResult.subscribeToResult)(this, retries);
      } else {
        this.errors = null;
        this.retriesSubscription = null;
      }

      this._unsubscribeAndRecycle();

      this.errors = errors;
      this.retries = retries;
      this.retriesSubscription = retriesSubscription;
      errors.next(err);
    }
  };

  RetryWhenSubscriber.prototype._unsubscribe = function () {
    var _a = this,
        errors = _a.errors,
        retriesSubscription = _a.retriesSubscription;

    if (errors) {
      errors.unsubscribe();
      this.errors = null;
    }

    if (retriesSubscription) {
      retriesSubscription.unsubscribe();
      this.retriesSubscription = null;
    }

    this.retries = null;
  };

  RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    var _unsubscribe = this._unsubscribe;
    this._unsubscribe = null;

    this._unsubscribeAndRecycle();

    this._unsubscribe = _unsubscribe;
    this.source.subscribe(this);
  };

  return RetryWhenSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subject":"../../node_modules/rxjs/_esm5/internal/Subject.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/operators/sample.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sample = sample;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function sample(notifier) {
  return function (source) {
    return source.lift(new SampleOperator(notifier));
  };
}

var SampleOperator =
/*@__PURE__*/
function () {
  function SampleOperator(notifier) {
    this.notifier = notifier;
  }

  SampleOperator.prototype.call = function (subscriber, source) {
    var sampleSubscriber = new SampleSubscriber(subscriber);
    var subscription = source.subscribe(sampleSubscriber);
    subscription.add((0, _subscribeToResult.subscribeToResult)(sampleSubscriber, this.notifier));
    return subscription;
  };

  return SampleOperator;
}();

var SampleSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SampleSubscriber, _super);

  function SampleSubscriber() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.hasValue = false;
    return _this;
  }

  SampleSubscriber.prototype._next = function (value) {
    this.value = value;
    this.hasValue = true;
  };

  SampleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.emitValue();
  };

  SampleSubscriber.prototype.notifyComplete = function () {
    this.emitValue();
  };

  SampleSubscriber.prototype.emitValue = function () {
    if (this.hasValue) {
      this.hasValue = false;
      this.destination.next(this.value);
    }
  };

  return SampleSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/operators/sampleTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sampleTime = sampleTime;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _async = require("../scheduler/async");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */
function sampleTime(period, scheduler) {
  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  return function (source) {
    return source.lift(new SampleTimeOperator(period, scheduler));
  };
}

var SampleTimeOperator =
/*@__PURE__*/
function () {
  function SampleTimeOperator(period, scheduler) {
    this.period = period;
    this.scheduler = scheduler;
  }

  SampleTimeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
  };

  return SampleTimeOperator;
}();

var SampleTimeSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SampleTimeSubscriber, _super);

  function SampleTimeSubscriber(destination, period, scheduler) {
    var _this = _super.call(this, destination) || this;

    _this.period = period;
    _this.scheduler = scheduler;
    _this.hasValue = false;

    _this.add(scheduler.schedule(dispatchNotification, period, {
      subscriber: _this,
      period: period
    }));

    return _this;
  }

  SampleTimeSubscriber.prototype._next = function (value) {
    this.lastValue = value;
    this.hasValue = true;
  };

  SampleTimeSubscriber.prototype.notifyNext = function () {
    if (this.hasValue) {
      this.hasValue = false;
      this.destination.next(this.lastValue);
    }
  };

  return SampleTimeSubscriber;
}(_Subscriber.Subscriber);

function dispatchNotification(state) {
  var subscriber = state.subscriber,
      period = state.period;
  subscriber.notifyNext();
  this.schedule(state, period);
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","../scheduler/async":"../../node_modules/rxjs/_esm5/internal/scheduler/async.js"}],"../../node_modules/rxjs/_esm5/internal/operators/sequenceEqual.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequenceEqual = sequenceEqual;
exports.SequenceEqualSubscriber = exports.SequenceEqualOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function sequenceEqual(compareTo, comparator) {
  return function (source) {
    return source.lift(new SequenceEqualOperator(compareTo, comparator));
  };
}

var SequenceEqualOperator =
/*@__PURE__*/
function () {
  function SequenceEqualOperator(compareTo, comparator) {
    this.compareTo = compareTo;
    this.comparator = comparator;
  }

  SequenceEqualOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparator));
  };

  return SequenceEqualOperator;
}();

exports.SequenceEqualOperator = SequenceEqualOperator;

var SequenceEqualSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SequenceEqualSubscriber, _super);

  function SequenceEqualSubscriber(destination, compareTo, comparator) {
    var _this = _super.call(this, destination) || this;

    _this.compareTo = compareTo;
    _this.comparator = comparator;
    _this._a = [];
    _this._b = [];
    _this._oneComplete = false;

    _this.destination.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, _this)));

    return _this;
  }

  SequenceEqualSubscriber.prototype._next = function (value) {
    if (this._oneComplete && this._b.length === 0) {
      this.emit(false);
    } else {
      this._a.push(value);

      this.checkValues();
    }
  };

  SequenceEqualSubscriber.prototype._complete = function () {
    if (this._oneComplete) {
      this.emit(this._a.length === 0 && this._b.length === 0);
    } else {
      this._oneComplete = true;
    }

    this.unsubscribe();
  };

  SequenceEqualSubscriber.prototype.checkValues = function () {
    var _c = this,
        _a = _c._a,
        _b = _c._b,
        comparator = _c.comparator;

    while (_a.length > 0 && _b.length > 0) {
      var a = _a.shift();

      var b = _b.shift();

      var areEqual = false;

      try {
        areEqual = comparator ? comparator(a, b) : a === b;
      } catch (e) {
        this.destination.error(e);
      }

      if (!areEqual) {
        this.emit(false);
      }
    }
  };

  SequenceEqualSubscriber.prototype.emit = function (value) {
    var destination = this.destination;
    destination.next(value);
    destination.complete();
  };

  SequenceEqualSubscriber.prototype.nextB = function (value) {
    if (this._oneComplete && this._a.length === 0) {
      this.emit(false);
    } else {
      this._b.push(value);

      this.checkValues();
    }
  };

  SequenceEqualSubscriber.prototype.completeB = function () {
    if (this._oneComplete) {
      this.emit(this._a.length === 0 && this._b.length === 0);
    } else {
      this._oneComplete = true;
    }
  };

  return SequenceEqualSubscriber;
}(_Subscriber.Subscriber);

exports.SequenceEqualSubscriber = SequenceEqualSubscriber;

var SequenceEqualCompareToSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SequenceEqualCompareToSubscriber, _super);

  function SequenceEqualCompareToSubscriber(destination, parent) {
    var _this = _super.call(this, destination) || this;

    _this.parent = parent;
    return _this;
  }

  SequenceEqualCompareToSubscriber.prototype._next = function (value) {
    this.parent.nextB(value);
  };

  SequenceEqualCompareToSubscriber.prototype._error = function (err) {
    this.parent.error(err);
    this.unsubscribe();
  };

  SequenceEqualCompareToSubscriber.prototype._complete = function () {
    this.parent.completeB();
    this.unsubscribe();
  };

  return SequenceEqualCompareToSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/operators/share.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.share = share;

var _multicast = require("./multicast");

var _refCount = require("./refCount");

var _Subject = require("../Subject");

/** PURE_IMPORTS_START _multicast,_refCount,_Subject PURE_IMPORTS_END */
function shareSubjectFactory() {
  return new _Subject.Subject();
}

function share() {
  return function (source) {
    return (0, _refCount.refCount)()((0, _multicast.multicast)(shareSubjectFactory)(source));
  };
}
},{"./multicast":"../../node_modules/rxjs/_esm5/internal/operators/multicast.js","./refCount":"../../node_modules/rxjs/_esm5/internal/operators/refCount.js","../Subject":"../../node_modules/rxjs/_esm5/internal/Subject.js"}],"../../node_modules/rxjs/_esm5/internal/operators/shareReplay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shareReplay = shareReplay;

var _ReplaySubject = require("../ReplaySubject");

/** PURE_IMPORTS_START _ReplaySubject PURE_IMPORTS_END */
function shareReplay(configOrBufferSize, windowTime, scheduler) {
  var config;

  if (configOrBufferSize && typeof configOrBufferSize === 'object') {
    config = configOrBufferSize;
  } else {
    config = {
      bufferSize: configOrBufferSize,
      windowTime: windowTime,
      refCount: false,
      scheduler: scheduler
    };
  }

  return function (source) {
    return source.lift(shareReplayOperator(config));
  };
}

function shareReplayOperator(_a) {
  var _b = _a.bufferSize,
      bufferSize = _b === void 0 ? Number.POSITIVE_INFINITY : _b,
      _c = _a.windowTime,
      windowTime = _c === void 0 ? Number.POSITIVE_INFINITY : _c,
      useRefCount = _a.refCount,
      scheduler = _a.scheduler;
  var subject;
  var refCount = 0;
  var subscription;
  var hasError = false;
  var isComplete = false;
  return function shareReplayOperation(source) {
    refCount++;

    if (!subject || hasError) {
      hasError = false;
      subject = new _ReplaySubject.ReplaySubject(bufferSize, windowTime, scheduler);
      subscription = source.subscribe({
        next: function (value) {
          subject.next(value);
        },
        error: function (err) {
          hasError = true;
          subject.error(err);
        },
        complete: function () {
          isComplete = true;
          subject.complete();
        }
      });
    }

    var innerSub = subject.subscribe(this);
    this.add(function () {
      refCount--;
      innerSub.unsubscribe();

      if (subscription && !isComplete && useRefCount && refCount === 0) {
        subscription.unsubscribe();
        subscription = undefined;
        subject = undefined;
      }
    });
  };
}
},{"../ReplaySubject":"../../node_modules/rxjs/_esm5/internal/ReplaySubject.js"}],"../../node_modules/rxjs/_esm5/internal/operators/single.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.single = single;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _EmptyError = require("../util/EmptyError");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_util_EmptyError PURE_IMPORTS_END */
function single(predicate) {
  return function (source) {
    return source.lift(new SingleOperator(predicate, source));
  };
}

var SingleOperator =
/*@__PURE__*/
function () {
  function SingleOperator(predicate, source) {
    this.predicate = predicate;
    this.source = source;
  }

  SingleOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
  };

  return SingleOperator;
}();

var SingleSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SingleSubscriber, _super);

  function SingleSubscriber(destination, predicate, source) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.source = source;
    _this.seenValue = false;
    _this.index = 0;
    return _this;
  }

  SingleSubscriber.prototype.applySingleValue = function (value) {
    if (this.seenValue) {
      this.destination.error('Sequence contains more than one element');
    } else {
      this.seenValue = true;
      this.singleValue = value;
    }
  };

  SingleSubscriber.prototype._next = function (value) {
    var index = this.index++;

    if (this.predicate) {
      this.tryNext(value, index);
    } else {
      this.applySingleValue(value);
    }
  };

  SingleSubscriber.prototype.tryNext = function (value, index) {
    try {
      if (this.predicate(value, index, this.source)) {
        this.applySingleValue(value);
      }
    } catch (err) {
      this.destination.error(err);
    }
  };

  SingleSubscriber.prototype._complete = function () {
    var destination = this.destination;

    if (this.index > 0) {
      destination.next(this.seenValue ? this.singleValue : undefined);
      destination.complete();
    } else {
      destination.error(new _EmptyError.EmptyError());
    }
  };

  return SingleSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","../util/EmptyError":"../../node_modules/rxjs/_esm5/internal/util/EmptyError.js"}],"../../node_modules/rxjs/_esm5/internal/operators/skip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skip = skip;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function skip(count) {
  return function (source) {
    return source.lift(new SkipOperator(count));
  };
}

var SkipOperator =
/*@__PURE__*/
function () {
  function SkipOperator(total) {
    this.total = total;
  }

  SkipOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new SkipSubscriber(subscriber, this.total));
  };

  return SkipOperator;
}();

var SkipSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SkipSubscriber, _super);

  function SkipSubscriber(destination, total) {
    var _this = _super.call(this, destination) || this;

    _this.total = total;
    _this.count = 0;
    return _this;
  }

  SkipSubscriber.prototype._next = function (x) {
    if (++this.count > this.total) {
      this.destination.next(x);
    }
  };

  return SkipSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/operators/skipLast.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skipLast = skipLast;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _ArgumentOutOfRangeError = require("../util/ArgumentOutOfRangeError");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError PURE_IMPORTS_END */
function skipLast(count) {
  return function (source) {
    return source.lift(new SkipLastOperator(count));
  };
}

var SkipLastOperator =
/*@__PURE__*/
function () {
  function SkipLastOperator(_skipCount) {
    this._skipCount = _skipCount;

    if (this._skipCount < 0) {
      throw new _ArgumentOutOfRangeError.ArgumentOutOfRangeError();
    }
  }

  SkipLastOperator.prototype.call = function (subscriber, source) {
    if (this._skipCount === 0) {
      return source.subscribe(new _Subscriber.Subscriber(subscriber));
    } else {
      return source.subscribe(new SkipLastSubscriber(subscriber, this._skipCount));
    }
  };

  return SkipLastOperator;
}();

var SkipLastSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SkipLastSubscriber, _super);

  function SkipLastSubscriber(destination, _skipCount) {
    var _this = _super.call(this, destination) || this;

    _this._skipCount = _skipCount;
    _this._count = 0;
    _this._ring = new Array(_skipCount);
    return _this;
  }

  SkipLastSubscriber.prototype._next = function (value) {
    var skipCount = this._skipCount;
    var count = this._count++;

    if (count < skipCount) {
      this._ring[count] = value;
    } else {
      var currentIndex = count % skipCount;
      var ring = this._ring;
      var oldValue = ring[currentIndex];
      ring[currentIndex] = value;
      this.destination.next(oldValue);
    }
  };

  return SkipLastSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","../util/ArgumentOutOfRangeError":"../../node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js"}],"../../node_modules/rxjs/_esm5/internal/operators/skipUntil.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skipUntil = skipUntil;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _InnerSubscriber = require("../InnerSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function skipUntil(notifier) {
  return function (source) {
    return source.lift(new SkipUntilOperator(notifier));
  };
}

var SkipUntilOperator =
/*@__PURE__*/
function () {
  function SkipUntilOperator(notifier) {
    this.notifier = notifier;
  }

  SkipUntilOperator.prototype.call = function (destination, source) {
    return source.subscribe(new SkipUntilSubscriber(destination, this.notifier));
  };

  return SkipUntilOperator;
}();

var SkipUntilSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SkipUntilSubscriber, _super);

  function SkipUntilSubscriber(destination, notifier) {
    var _this = _super.call(this, destination) || this;

    _this.hasValue = false;
    var innerSubscriber = new _InnerSubscriber.InnerSubscriber(_this, undefined, undefined);

    _this.add(innerSubscriber);

    _this.innerSubscription = innerSubscriber;
    (0, _subscribeToResult.subscribeToResult)(_this, notifier, undefined, undefined, innerSubscriber);
    return _this;
  }

  SkipUntilSubscriber.prototype._next = function (value) {
    if (this.hasValue) {
      _super.prototype._next.call(this, value);
    }
  };

  SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.hasValue = true;

    if (this.innerSubscription) {
      this.innerSubscription.unsubscribe();
    }
  };

  SkipUntilSubscriber.prototype.notifyComplete = function () {};

  return SkipUntilSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../InnerSubscriber":"../../node_modules/rxjs/_esm5/internal/InnerSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/operators/skipWhile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skipWhile = skipWhile;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function skipWhile(predicate) {
  return function (source) {
    return source.lift(new SkipWhileOperator(predicate));
  };
}

var SkipWhileOperator =
/*@__PURE__*/
function () {
  function SkipWhileOperator(predicate) {
    this.predicate = predicate;
  }

  SkipWhileOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
  };

  return SkipWhileOperator;
}();

var SkipWhileSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SkipWhileSubscriber, _super);

  function SkipWhileSubscriber(destination, predicate) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.skipping = true;
    _this.index = 0;
    return _this;
  }

  SkipWhileSubscriber.prototype._next = function (value) {
    var destination = this.destination;

    if (this.skipping) {
      this.tryCallPredicate(value);
    }

    if (!this.skipping) {
      destination.next(value);
    }
  };

  SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
    try {
      var result = this.predicate(value, this.index++);
      this.skipping = Boolean(result);
    } catch (err) {
      this.destination.error(err);
    }
  };

  return SkipWhileSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/operators/startWith.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startWith = startWith;

var _fromArray = require("../observable/fromArray");

var _scalar = require("../observable/scalar");

var _empty = require("../observable/empty");

var _concat = require("../observable/concat");

var _isScheduler = require("../util/isScheduler");

/** PURE_IMPORTS_START _observable_fromArray,_observable_scalar,_observable_empty,_observable_concat,_util_isScheduler PURE_IMPORTS_END */
function startWith() {
  var array = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    array[_i] = arguments[_i];
  }

  return function (source) {
    var scheduler = array[array.length - 1];

    if ((0, _isScheduler.isScheduler)(scheduler)) {
      array.pop();
    } else {
      scheduler = null;
    }

    var len = array.length;

    if (len === 1 && !scheduler) {
      return (0, _concat.concat)((0, _scalar.scalar)(array[0]), source);
    } else if (len > 0) {
      return (0, _concat.concat)((0, _fromArray.fromArray)(array, scheduler), source);
    } else {
      return (0, _concat.concat)((0, _empty.empty)(scheduler), source);
    }
  };
}
},{"../observable/fromArray":"../../node_modules/rxjs/_esm5/internal/observable/fromArray.js","../observable/scalar":"../../node_modules/rxjs/_esm5/internal/observable/scalar.js","../observable/empty":"../../node_modules/rxjs/_esm5/internal/observable/empty.js","../observable/concat":"../../node_modules/rxjs/_esm5/internal/observable/concat.js","../util/isScheduler":"../../node_modules/rxjs/_esm5/internal/util/isScheduler.js"}],"../../node_modules/rxjs/_esm5/internal/observable/SubscribeOnObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubscribeOnObservable = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Observable = require("../Observable");

var _asap = require("../scheduler/asap");

var _isNumeric = require("../util/isNumeric");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Observable,_scheduler_asap,_util_isNumeric PURE_IMPORTS_END */
var SubscribeOnObservable =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SubscribeOnObservable, _super);

  function SubscribeOnObservable(source, delayTime, scheduler) {
    if (delayTime === void 0) {
      delayTime = 0;
    }

    if (scheduler === void 0) {
      scheduler = _asap.asap;
    }

    var _this = _super.call(this) || this;

    _this.source = source;
    _this.delayTime = delayTime;
    _this.scheduler = scheduler;

    if (!(0, _isNumeric.isNumeric)(delayTime) || delayTime < 0) {
      _this.delayTime = 0;
    }

    if (!scheduler || typeof scheduler.schedule !== 'function') {
      _this.scheduler = _asap.asap;
    }

    return _this;
  }

  SubscribeOnObservable.create = function (source, delay, scheduler) {
    if (delay === void 0) {
      delay = 0;
    }

    if (scheduler === void 0) {
      scheduler = _asap.asap;
    }

    return new SubscribeOnObservable(source, delay, scheduler);
  };

  SubscribeOnObservable.dispatch = function (arg) {
    var source = arg.source,
        subscriber = arg.subscriber;
    return this.add(source.subscribe(subscriber));
  };

  SubscribeOnObservable.prototype._subscribe = function (subscriber) {
    var delay = this.delayTime;
    var source = this.source;
    var scheduler = this.scheduler;
    return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
      source: source,
      subscriber: subscriber
    });
  };

  return SubscribeOnObservable;
}(_Observable.Observable);

exports.SubscribeOnObservable = SubscribeOnObservable;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Observable":"../../node_modules/rxjs/_esm5/internal/Observable.js","../scheduler/asap":"../../node_modules/rxjs/_esm5/internal/scheduler/asap.js","../util/isNumeric":"../../node_modules/rxjs/_esm5/internal/util/isNumeric.js"}],"../../node_modules/rxjs/_esm5/internal/operators/subscribeOn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeOn = subscribeOn;

var _SubscribeOnObservable = require("../observable/SubscribeOnObservable");

/** PURE_IMPORTS_START _observable_SubscribeOnObservable PURE_IMPORTS_END */
function subscribeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return function subscribeOnOperatorFunction(source) {
    return source.lift(new SubscribeOnOperator(scheduler, delay));
  };
}

var SubscribeOnOperator =
/*@__PURE__*/
function () {
  function SubscribeOnOperator(scheduler, delay) {
    this.scheduler = scheduler;
    this.delay = delay;
  }

  SubscribeOnOperator.prototype.call = function (subscriber, source) {
    return new _SubscribeOnObservable.SubscribeOnObservable(source, this.delay, this.scheduler).subscribe(subscriber);
  };

  return SubscribeOnOperator;
}();
},{"../observable/SubscribeOnObservable":"../../node_modules/rxjs/_esm5/internal/observable/SubscribeOnObservable.js"}],"../../node_modules/rxjs/_esm5/internal/operators/switchMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchMap = switchMap;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _InnerSubscriber = require("../InnerSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

var _map = require("./map");

var _from = require("../observable/from");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult,_map,_observable_from PURE_IMPORTS_END */
function switchMap(project, resultSelector) {
  if (typeof resultSelector === 'function') {
    return function (source) {
      return source.pipe(switchMap(function (a, i) {
        return (0, _from.from)(project(a, i)).pipe((0, _map.map)(function (b, ii) {
          return resultSelector(a, b, i, ii);
        }));
      }));
    };
  }

  return function (source) {
    return source.lift(new SwitchMapOperator(project));
  };
}

var SwitchMapOperator =
/*@__PURE__*/
function () {
  function SwitchMapOperator(project) {
    this.project = project;
  }

  SwitchMapOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new SwitchMapSubscriber(subscriber, this.project));
  };

  return SwitchMapOperator;
}();

var SwitchMapSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SwitchMapSubscriber, _super);

  function SwitchMapSubscriber(destination, project) {
    var _this = _super.call(this, destination) || this;

    _this.project = project;
    _this.index = 0;
    return _this;
  }

  SwitchMapSubscriber.prototype._next = function (value) {
    var result;
    var index = this.index++;

    try {
      result = this.project(value, index);
    } catch (error) {
      this.destination.error(error);
      return;
    }

    this._innerSub(result, value, index);
  };

  SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
    var innerSubscription = this.innerSubscription;

    if (innerSubscription) {
      innerSubscription.unsubscribe();
    }

    var innerSubscriber = new _InnerSubscriber.InnerSubscriber(this, undefined, undefined);
    var destination = this.destination;
    destination.add(innerSubscriber);
    this.innerSubscription = (0, _subscribeToResult.subscribeToResult)(this, result, value, index, innerSubscriber);
  };

  SwitchMapSubscriber.prototype._complete = function () {
    var innerSubscription = this.innerSubscription;

    if (!innerSubscription || innerSubscription.closed) {
      _super.prototype._complete.call(this);
    }

    this.unsubscribe();
  };

  SwitchMapSubscriber.prototype._unsubscribe = function () {
    this.innerSubscription = null;
  };

  SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
    var destination = this.destination;
    destination.remove(innerSub);
    this.innerSubscription = null;

    if (this.isStopped) {
      _super.prototype._complete.call(this);
    }
  };

  SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.destination.next(innerValue);
  };

  return SwitchMapSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../InnerSubscriber":"../../node_modules/rxjs/_esm5/internal/InnerSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js","./map":"../../node_modules/rxjs/_esm5/internal/operators/map.js","../observable/from":"../../node_modules/rxjs/_esm5/internal/observable/from.js"}],"../../node_modules/rxjs/_esm5/internal/operators/switchAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchAll = switchAll;

var _switchMap = require("./switchMap");

var _identity = require("../util/identity");

/** PURE_IMPORTS_START _switchMap,_util_identity PURE_IMPORTS_END */
function switchAll() {
  return (0, _switchMap.switchMap)(_identity.identity);
}
},{"./switchMap":"../../node_modules/rxjs/_esm5/internal/operators/switchMap.js","../util/identity":"../../node_modules/rxjs/_esm5/internal/util/identity.js"}],"../../node_modules/rxjs/_esm5/internal/operators/switchMapTo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchMapTo = switchMapTo;

var _switchMap = require("./switchMap");

/** PURE_IMPORTS_START _switchMap PURE_IMPORTS_END */
function switchMapTo(innerObservable, resultSelector) {
  return resultSelector ? (0, _switchMap.switchMap)(function () {
    return innerObservable;
  }, resultSelector) : (0, _switchMap.switchMap)(function () {
    return innerObservable;
  });
}
},{"./switchMap":"../../node_modules/rxjs/_esm5/internal/operators/switchMap.js"}],"../../node_modules/rxjs/_esm5/internal/operators/takeUntil.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeUntil = takeUntil;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function takeUntil(notifier) {
  return function (source) {
    return source.lift(new TakeUntilOperator(notifier));
  };
}

var TakeUntilOperator =
/*@__PURE__*/
function () {
  function TakeUntilOperator(notifier) {
    this.notifier = notifier;
  }

  TakeUntilOperator.prototype.call = function (subscriber, source) {
    var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
    var notifierSubscription = (0, _subscribeToResult.subscribeToResult)(takeUntilSubscriber, this.notifier);

    if (notifierSubscription && !takeUntilSubscriber.seenValue) {
      takeUntilSubscriber.add(notifierSubscription);
      return source.subscribe(takeUntilSubscriber);
    }

    return takeUntilSubscriber;
  };

  return TakeUntilOperator;
}();

var TakeUntilSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(TakeUntilSubscriber, _super);

  function TakeUntilSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.seenValue = false;
    return _this;
  }

  TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.seenValue = true;
    this.complete();
  };

  TakeUntilSubscriber.prototype.notifyComplete = function () {};

  return TakeUntilSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/operators/takeWhile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeWhile = takeWhile;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function takeWhile(predicate, inclusive) {
  if (inclusive === void 0) {
    inclusive = false;
  }

  return function (source) {
    return source.lift(new TakeWhileOperator(predicate, inclusive));
  };
}

var TakeWhileOperator =
/*@__PURE__*/
function () {
  function TakeWhileOperator(predicate, inclusive) {
    this.predicate = predicate;
    this.inclusive = inclusive;
  }

  TakeWhileOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate, this.inclusive));
  };

  return TakeWhileOperator;
}();

var TakeWhileSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(TakeWhileSubscriber, _super);

  function TakeWhileSubscriber(destination, predicate, inclusive) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.inclusive = inclusive;
    _this.index = 0;
    return _this;
  }

  TakeWhileSubscriber.prototype._next = function (value) {
    var destination = this.destination;
    var result;

    try {
      result = this.predicate(value, this.index++);
    } catch (err) {
      destination.error(err);
      return;
    }

    this.nextOrComplete(value, result);
  };

  TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
    var destination = this.destination;

    if (Boolean(predicateResult)) {
      destination.next(value);
    } else {
      if (this.inclusive) {
        destination.next(value);
      }

      destination.complete();
    }
  };

  return TakeWhileSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/_esm5/internal/operators/throttle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = throttle;
exports.defaultThrottleConfig = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
var defaultThrottleConfig = {
  leading: true,
  trailing: false
};
exports.defaultThrottleConfig = defaultThrottleConfig;

function throttle(durationSelector, config) {
  if (config === void 0) {
    config = defaultThrottleConfig;
  }

  return function (source) {
    return source.lift(new ThrottleOperator(durationSelector, config.leading, config.trailing));
  };
}

var ThrottleOperator =
/*@__PURE__*/
function () {
  function ThrottleOperator(durationSelector, leading, trailing) {
    this.durationSelector = durationSelector;
    this.leading = leading;
    this.trailing = trailing;
  }

  ThrottleOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
  };

  return ThrottleOperator;
}();

var ThrottleSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ThrottleSubscriber, _super);

  function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    _this.durationSelector = durationSelector;
    _this._leading = _leading;
    _this._trailing = _trailing;
    _this._hasValue = false;
    return _this;
  }

  ThrottleSubscriber.prototype._next = function (value) {
    this._hasValue = true;
    this._sendValue = value;

    if (!this._throttled) {
      if (this._leading) {
        this.send();
      } else {
        this.throttle(value);
      }
    }
  };

  ThrottleSubscriber.prototype.send = function () {
    var _a = this,
        _hasValue = _a._hasValue,
        _sendValue = _a._sendValue;

    if (_hasValue) {
      this.destination.next(_sendValue);
      this.throttle(_sendValue);
    }

    this._hasValue = false;
    this._sendValue = null;
  };

  ThrottleSubscriber.prototype.throttle = function (value) {
    var duration = this.tryDurationSelector(value);

    if (!!duration) {
      this.add(this._throttled = (0, _subscribeToResult.subscribeToResult)(this, duration));
    }
  };

  ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
    try {
      return this.durationSelector(value);
    } catch (err) {
      this.destination.error(err);
      return null;
    }
  };

  ThrottleSubscriber.prototype.throttlingDone = function () {
    var _a = this,
        _throttled = _a._throttled,
        _trailing = _a._trailing;

    if (_throttled) {
      _throttled.unsubscribe();
    }

    this._throttled = null;

    if (_trailing) {
      this.send();
    }
  };

  ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.throttlingDone();
  };

  ThrottleSubscriber.prototype.notifyComplete = function () {
    this.throttlingDone();
  };

  return ThrottleSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/operators/throttleTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttleTime = throttleTime;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _async = require("../scheduler/async");

var _throttle = require("./throttle");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async,_throttle PURE_IMPORTS_END */
function throttleTime(duration, scheduler, config) {
  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  if (config === void 0) {
    config = _throttle.defaultThrottleConfig;
  }

  return function (source) {
    return source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing));
  };
}

var ThrottleTimeOperator =
/*@__PURE__*/
function () {
  function ThrottleTimeOperator(duration, scheduler, leading, trailing) {
    this.duration = duration;
    this.scheduler = scheduler;
    this.leading = leading;
    this.trailing = trailing;
  }

  ThrottleTimeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
  };

  return ThrottleTimeOperator;
}();

var ThrottleTimeSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ThrottleTimeSubscriber, _super);

  function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
    var _this = _super.call(this, destination) || this;

    _this.duration = duration;
    _this.scheduler = scheduler;
    _this.leading = leading;
    _this.trailing = trailing;
    _this._hasTrailingValue = false;
    _this._trailingValue = null;
    return _this;
  }

  ThrottleTimeSubscriber.prototype._next = function (value) {
    if (this.throttled) {
      if (this.trailing) {
        this._trailingValue = value;
        this._hasTrailingValue = true;
      }
    } else {
      this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, {
        subscriber: this
      }));

      if (this.leading) {
        this.destination.next(value);
      }
    }
  };

  ThrottleTimeSubscriber.prototype._complete = function () {
    if (this._hasTrailingValue) {
      this.destination.next(this._trailingValue);
      this.destination.complete();
    } else {
      this.destination.complete();
    }
  };

  ThrottleTimeSubscriber.prototype.clearThrottle = function () {
    var throttled = this.throttled;

    if (throttled) {
      if (this.trailing && this._hasTrailingValue) {
        this.destination.next(this._trailingValue);
        this._trailingValue = null;
        this._hasTrailingValue = false;
      }

      throttled.unsubscribe();
      this.remove(throttled);
      this.throttled = null;
    }
  };

  return ThrottleTimeSubscriber;
}(_Subscriber.Subscriber);

function dispatchNext(arg) {
  var subscriber = arg.subscriber;
  subscriber.clearThrottle();
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","../scheduler/async":"../../node_modules/rxjs/_esm5/internal/scheduler/async.js","./throttle":"../../node_modules/rxjs/_esm5/internal/operators/throttle.js"}],"../../node_modules/rxjs/_esm5/internal/operators/timeInterval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeInterval = timeInterval;
exports.TimeInterval = void 0;

var _async = require("../scheduler/async");

var _scan = require("./scan");

var _defer = require("../observable/defer");

var _map = require("./map");

/** PURE_IMPORTS_START _scheduler_async,_scan,_observable_defer,_map PURE_IMPORTS_END */
function timeInterval(scheduler) {
  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  return function (source) {
    return (0, _defer.defer)(function () {
      return source.pipe((0, _scan.scan)(function (_a, value) {
        var current = _a.current;
        return {
          value: value,
          current: scheduler.now(),
          last: current
        };
      }, {
        current: scheduler.now(),
        value: undefined,
        last: undefined
      }), (0, _map.map)(function (_a) {
        var current = _a.current,
            last = _a.last,
            value = _a.value;
        return new TimeInterval(value, current - last);
      }));
    });
  };
}

var TimeInterval =
/*@__PURE__*/
function () {
  function TimeInterval(value, interval) {
    this.value = value;
    this.interval = interval;
  }

  return TimeInterval;
}();

exports.TimeInterval = TimeInterval;
},{"../scheduler/async":"../../node_modules/rxjs/_esm5/internal/scheduler/async.js","./scan":"../../node_modules/rxjs/_esm5/internal/operators/scan.js","../observable/defer":"../../node_modules/rxjs/_esm5/internal/observable/defer.js","./map":"../../node_modules/rxjs/_esm5/internal/operators/map.js"}],"../../node_modules/rxjs/_esm5/internal/operators/timeoutWith.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeoutWith = timeoutWith;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _async = require("../scheduler/async");

var _isDate = require("../util/isDate");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_scheduler_async,_util_isDate,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function timeoutWith(due, withObservable, scheduler) {
  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  return function (source) {
    var absoluteTimeout = (0, _isDate.isDate)(due);
    var waitFor = absoluteTimeout ? +due - scheduler.now() : Math.abs(due);
    return source.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
  };
}

var TimeoutWithOperator =
/*@__PURE__*/
function () {
  function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
    this.waitFor = waitFor;
    this.absoluteTimeout = absoluteTimeout;
    this.withObservable = withObservable;
    this.scheduler = scheduler;
  }

  TimeoutWithOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
  };

  return TimeoutWithOperator;
}();

var TimeoutWithSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(TimeoutWithSubscriber, _super);

  function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
    var _this = _super.call(this, destination) || this;

    _this.absoluteTimeout = absoluteTimeout;
    _this.waitFor = waitFor;
    _this.withObservable = withObservable;
    _this.scheduler = scheduler;
    _this.action = null;

    _this.scheduleTimeout();

    return _this;
  }

  TimeoutWithSubscriber.dispatchTimeout = function (subscriber) {
    var withObservable = subscriber.withObservable;

    subscriber._unsubscribeAndRecycle();

    subscriber.add((0, _subscribeToResult.subscribeToResult)(subscriber, withObservable));
  };

  TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
    var action = this.action;

    if (action) {
      this.action = action.schedule(this, this.waitFor);
    } else {
      this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, this));
    }
  };

  TimeoutWithSubscriber.prototype._next = function (value) {
    if (!this.absoluteTimeout) {
      this.scheduleTimeout();
    }

    _super.prototype._next.call(this, value);
  };

  TimeoutWithSubscriber.prototype._unsubscribe = function () {
    this.action = null;
    this.scheduler = null;
    this.withObservable = null;
  };

  return TimeoutWithSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../scheduler/async":"../../node_modules/rxjs/_esm5/internal/scheduler/async.js","../util/isDate":"../../node_modules/rxjs/_esm5/internal/util/isDate.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/operators/timeout.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeout = timeout;

var _async = require("../scheduler/async");

var _TimeoutError = require("../util/TimeoutError");

var _timeoutWith = require("./timeoutWith");

var _throwError = require("../observable/throwError");

/** PURE_IMPORTS_START _scheduler_async,_util_TimeoutError,_timeoutWith,_observable_throwError PURE_IMPORTS_END */
function timeout(due, scheduler) {
  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  return (0, _timeoutWith.timeoutWith)(due, (0, _throwError.throwError)(new _TimeoutError.TimeoutError()), scheduler);
}
},{"../scheduler/async":"../../node_modules/rxjs/_esm5/internal/scheduler/async.js","../util/TimeoutError":"../../node_modules/rxjs/_esm5/internal/util/TimeoutError.js","./timeoutWith":"../../node_modules/rxjs/_esm5/internal/operators/timeoutWith.js","../observable/throwError":"../../node_modules/rxjs/_esm5/internal/observable/throwError.js"}],"../../node_modules/rxjs/_esm5/internal/operators/timestamp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timestamp = timestamp;
exports.Timestamp = void 0;

var _async = require("../scheduler/async");

var _map = require("./map");

/** PURE_IMPORTS_START _scheduler_async,_map PURE_IMPORTS_END */
function timestamp(scheduler) {
  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  return (0, _map.map)(function (value) {
    return new Timestamp(value, scheduler.now());
  });
}

var Timestamp =
/*@__PURE__*/
function () {
  function Timestamp(value, timestamp) {
    this.value = value;
    this.timestamp = timestamp;
  }

  return Timestamp;
}();

exports.Timestamp = Timestamp;
},{"../scheduler/async":"../../node_modules/rxjs/_esm5/internal/scheduler/async.js","./map":"../../node_modules/rxjs/_esm5/internal/operators/map.js"}],"../../node_modules/rxjs/_esm5/internal/operators/toArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toArray = toArray;

var _reduce = require("./reduce");

/** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */
function toArrayReducer(arr, item, index) {
  if (index === 0) {
    return [item];
  }

  arr.push(item);
  return arr;
}

function toArray() {
  return (0, _reduce.reduce)(toArrayReducer, []);
}
},{"./reduce":"../../node_modules/rxjs/_esm5/internal/operators/reduce.js"}],"../../node_modules/rxjs/_esm5/internal/operators/window.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.window = window;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("../Subject");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function window(windowBoundaries) {
  return function windowOperatorFunction(source) {
    return source.lift(new WindowOperator(windowBoundaries));
  };
}

var WindowOperator =
/*@__PURE__*/
function () {
  function WindowOperator(windowBoundaries) {
    this.windowBoundaries = windowBoundaries;
  }

  WindowOperator.prototype.call = function (subscriber, source) {
    var windowSubscriber = new WindowSubscriber(subscriber);
    var sourceSubscription = source.subscribe(windowSubscriber);

    if (!sourceSubscription.closed) {
      windowSubscriber.add((0, _subscribeToResult.subscribeToResult)(windowSubscriber, this.windowBoundaries));
    }

    return sourceSubscription;
  };

  return WindowOperator;
}();

var WindowSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(WindowSubscriber, _super);

  function WindowSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.window = new _Subject.Subject();
    destination.next(_this.window);
    return _this;
  }

  WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.openWindow();
  };

  WindowSubscriber.prototype.notifyError = function (error, innerSub) {
    this._error(error);
  };

  WindowSubscriber.prototype.notifyComplete = function (innerSub) {
    this._complete();
  };

  WindowSubscriber.prototype._next = function (value) {
    this.window.next(value);
  };

  WindowSubscriber.prototype._error = function (err) {
    this.window.error(err);
    this.destination.error(err);
  };

  WindowSubscriber.prototype._complete = function () {
    this.window.complete();
    this.destination.complete();
  };

  WindowSubscriber.prototype._unsubscribe = function () {
    this.window = null;
  };

  WindowSubscriber.prototype.openWindow = function () {
    var prevWindow = this.window;

    if (prevWindow) {
      prevWindow.complete();
    }

    var destination = this.destination;
    var newWindow = this.window = new _Subject.Subject();
    destination.next(newWindow);
  };

  return WindowSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subject":"../../node_modules/rxjs/_esm5/internal/Subject.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/operators/windowCount.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowCount = windowCount;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _Subject = require("../Subject");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_Subject PURE_IMPORTS_END */
function windowCount(windowSize, startWindowEvery) {
  if (startWindowEvery === void 0) {
    startWindowEvery = 0;
  }

  return function windowCountOperatorFunction(source) {
    return source.lift(new WindowCountOperator(windowSize, startWindowEvery));
  };
}

var WindowCountOperator =
/*@__PURE__*/
function () {
  function WindowCountOperator(windowSize, startWindowEvery) {
    this.windowSize = windowSize;
    this.startWindowEvery = startWindowEvery;
  }

  WindowCountOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
  };

  return WindowCountOperator;
}();

var WindowCountSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(WindowCountSubscriber, _super);

  function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    _this.windowSize = windowSize;
    _this.startWindowEvery = startWindowEvery;
    _this.windows = [new _Subject.Subject()];
    _this.count = 0;
    destination.next(_this.windows[0]);
    return _this;
  }

  WindowCountSubscriber.prototype._next = function (value) {
    var startWindowEvery = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize;
    var destination = this.destination;
    var windowSize = this.windowSize;
    var windows = this.windows;
    var len = windows.length;

    for (var i = 0; i < len && !this.closed; i++) {
      windows[i].next(value);
    }

    var c = this.count - windowSize + 1;

    if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
      windows.shift().complete();
    }

    if (++this.count % startWindowEvery === 0 && !this.closed) {
      var window_1 = new _Subject.Subject();
      windows.push(window_1);
      destination.next(window_1);
    }
  };

  WindowCountSubscriber.prototype._error = function (err) {
    var windows = this.windows;

    if (windows) {
      while (windows.length > 0 && !this.closed) {
        windows.shift().error(err);
      }
    }

    this.destination.error(err);
  };

  WindowCountSubscriber.prototype._complete = function () {
    var windows = this.windows;

    if (windows) {
      while (windows.length > 0 && !this.closed) {
        windows.shift().complete();
      }
    }

    this.destination.complete();
  };

  WindowCountSubscriber.prototype._unsubscribe = function () {
    this.count = 0;
    this.windows = null;
  };

  return WindowCountSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","../Subject":"../../node_modules/rxjs/_esm5/internal/Subject.js"}],"../../node_modules/rxjs/_esm5/internal/operators/windowTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowTime = windowTime;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("../Subject");

var _async = require("../scheduler/async");

var _Subscriber = require("../Subscriber");

var _isNumeric = require("../util/isNumeric");

var _isScheduler = require("../util/isScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_scheduler_async,_Subscriber,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */
function windowTime(windowTimeSpan) {
  var scheduler = _async.async;
  var windowCreationInterval = null;
  var maxWindowSize = Number.POSITIVE_INFINITY;

  if ((0, _isScheduler.isScheduler)(arguments[3])) {
    scheduler = arguments[3];
  }

  if ((0, _isScheduler.isScheduler)(arguments[2])) {
    scheduler = arguments[2];
  } else if ((0, _isNumeric.isNumeric)(arguments[2])) {
    maxWindowSize = arguments[2];
  }

  if ((0, _isScheduler.isScheduler)(arguments[1])) {
    scheduler = arguments[1];
  } else if ((0, _isNumeric.isNumeric)(arguments[1])) {
    windowCreationInterval = arguments[1];
  }

  return function windowTimeOperatorFunction(source) {
    return source.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler));
  };
}

var WindowTimeOperator =
/*@__PURE__*/
function () {
  function WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
    this.windowTimeSpan = windowTimeSpan;
    this.windowCreationInterval = windowCreationInterval;
    this.maxWindowSize = maxWindowSize;
    this.scheduler = scheduler;
  }

  WindowTimeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
  };

  return WindowTimeOperator;
}();

var CountedSubject =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(CountedSubject, _super);

  function CountedSubject() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._numberOfNextedValues = 0;
    return _this;
  }

  CountedSubject.prototype.next = function (value) {
    this._numberOfNextedValues++;

    _super.prototype.next.call(this, value);
  };

  Object.defineProperty(CountedSubject.prototype, "numberOfNextedValues", {
    get: function () {
      return this._numberOfNextedValues;
    },
    enumerable: true,
    configurable: true
  });
  return CountedSubject;
}(_Subject.Subject);

var WindowTimeSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(WindowTimeSubscriber, _super);

  function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    _this.windowTimeSpan = windowTimeSpan;
    _this.windowCreationInterval = windowCreationInterval;
    _this.maxWindowSize = maxWindowSize;
    _this.scheduler = scheduler;
    _this.windows = [];

    var window = _this.openWindow();

    if (windowCreationInterval !== null && windowCreationInterval >= 0) {
      var closeState = {
        subscriber: _this,
        window: window,
        context: null
      };
      var creationState = {
        windowTimeSpan: windowTimeSpan,
        windowCreationInterval: windowCreationInterval,
        subscriber: _this,
        scheduler: scheduler
      };

      _this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));

      _this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
    } else {
      var timeSpanOnlyState = {
        subscriber: _this,
        window: window,
        windowTimeSpan: windowTimeSpan
      };

      _this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
    }

    return _this;
  }

  WindowTimeSubscriber.prototype._next = function (value) {
    var windows = this.windows;
    var len = windows.length;

    for (var i = 0; i < len; i++) {
      var window_1 = windows[i];

      if (!window_1.closed) {
        window_1.next(value);

        if (window_1.numberOfNextedValues >= this.maxWindowSize) {
          this.closeWindow(window_1);
        }
      }
    }
  };

  WindowTimeSubscriber.prototype._error = function (err) {
    var windows = this.windows;

    while (windows.length > 0) {
      windows.shift().error(err);
    }

    this.destination.error(err);
  };

  WindowTimeSubscriber.prototype._complete = function () {
    var windows = this.windows;

    while (windows.length > 0) {
      var window_2 = windows.shift();

      if (!window_2.closed) {
        window_2.complete();
      }
    }

    this.destination.complete();
  };

  WindowTimeSubscriber.prototype.openWindow = function () {
    var window = new CountedSubject();
    this.windows.push(window);
    var destination = this.destination;
    destination.next(window);
    return window;
  };

  WindowTimeSubscriber.prototype.closeWindow = function (window) {
    window.complete();
    var windows = this.windows;
    windows.splice(windows.indexOf(window), 1);
  };

  return WindowTimeSubscriber;
}(_Subscriber.Subscriber);

function dispatchWindowTimeSpanOnly(state) {
  var subscriber = state.subscriber,
      windowTimeSpan = state.windowTimeSpan,
      window = state.window;

  if (window) {
    subscriber.closeWindow(window);
  }

  state.window = subscriber.openWindow();
  this.schedule(state, windowTimeSpan);
}

function dispatchWindowCreation(state) {
  var windowTimeSpan = state.windowTimeSpan,
      subscriber = state.subscriber,
      scheduler = state.scheduler,
      windowCreationInterval = state.windowCreationInterval;
  var window = subscriber.openWindow();
  var action = this;
  var context = {
    action: action,
    subscription: null
  };
  var timeSpanState = {
    subscriber: subscriber,
    window: window,
    context: context
  };
  context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
  action.add(context.subscription);
  action.schedule(state, windowCreationInterval);
}

function dispatchWindowClose(state) {
  var subscriber = state.subscriber,
      window = state.window,
      context = state.context;

  if (context && context.action && context.subscription) {
    context.action.remove(context.subscription);
  }

  subscriber.closeWindow(window);
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subject":"../../node_modules/rxjs/_esm5/internal/Subject.js","../scheduler/async":"../../node_modules/rxjs/_esm5/internal/scheduler/async.js","../Subscriber":"../../node_modules/rxjs/_esm5/internal/Subscriber.js","../util/isNumeric":"../../node_modules/rxjs/_esm5/internal/util/isNumeric.js","../util/isScheduler":"../../node_modules/rxjs/_esm5/internal/util/isScheduler.js"}],"../../node_modules/rxjs/_esm5/internal/operators/windowToggle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowToggle = windowToggle;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("../Subject");

var _Subscription = require("../Subscription");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_Subscription,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function windowToggle(openings, closingSelector) {
  return function (source) {
    return source.lift(new WindowToggleOperator(openings, closingSelector));
  };
}

var WindowToggleOperator =
/*@__PURE__*/
function () {
  function WindowToggleOperator(openings, closingSelector) {
    this.openings = openings;
    this.closingSelector = closingSelector;
  }

  WindowToggleOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
  };

  return WindowToggleOperator;
}();

var WindowToggleSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(WindowToggleSubscriber, _super);

  function WindowToggleSubscriber(destination, openings, closingSelector) {
    var _this = _super.call(this, destination) || this;

    _this.openings = openings;
    _this.closingSelector = closingSelector;
    _this.contexts = [];

    _this.add(_this.openSubscription = (0, _subscribeToResult.subscribeToResult)(_this, openings, openings));

    return _this;
  }

  WindowToggleSubscriber.prototype._next = function (value) {
    var contexts = this.contexts;

    if (contexts) {
      var len = contexts.length;

      for (var i = 0; i < len; i++) {
        contexts[i].window.next(value);
      }
    }
  };

  WindowToggleSubscriber.prototype._error = function (err) {
    var contexts = this.contexts;
    this.contexts = null;

    if (contexts) {
      var len = contexts.length;
      var index = -1;

      while (++index < len) {
        var context_1 = contexts[index];
        context_1.window.error(err);
        context_1.subscription.unsubscribe();
      }
    }

    _super.prototype._error.call(this, err);
  };

  WindowToggleSubscriber.prototype._complete = function () {
    var contexts = this.contexts;
    this.contexts = null;

    if (contexts) {
      var len = contexts.length;
      var index = -1;

      while (++index < len) {
        var context_2 = contexts[index];
        context_2.window.complete();
        context_2.subscription.unsubscribe();
      }
    }

    _super.prototype._complete.call(this);
  };

  WindowToggleSubscriber.prototype._unsubscribe = function () {
    var contexts = this.contexts;
    this.contexts = null;

    if (contexts) {
      var len = contexts.length;
      var index = -1;

      while (++index < len) {
        var context_3 = contexts[index];
        context_3.window.unsubscribe();
        context_3.subscription.unsubscribe();
      }
    }
  };

  WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    if (outerValue === this.openings) {
      var closingNotifier = void 0;

      try {
        var closingSelector = this.closingSelector;
        closingNotifier = closingSelector(innerValue);
      } catch (e) {
        return this.error(e);
      }

      var window_1 = new _Subject.Subject();
      var subscription = new _Subscription.Subscription();
      var context_4 = {
        window: window_1,
        subscription: subscription
      };
      this.contexts.push(context_4);
      var innerSubscription = (0, _subscribeToResult.subscribeToResult)(this, closingNotifier, context_4);

      if (innerSubscription.closed) {
        this.closeWindow(this.contexts.length - 1);
      } else {
        innerSubscription.context = context_4;
        subscription.add(innerSubscription);
      }

      this.destination.next(window_1);
    } else {
      this.closeWindow(this.contexts.indexOf(outerValue));
    }
  };

  WindowToggleSubscriber.prototype.notifyError = function (err) {
    this.error(err);
  };

  WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
    if (inner !== this.openSubscription) {
      this.closeWindow(this.contexts.indexOf(inner.context));
    }
  };

  WindowToggleSubscriber.prototype.closeWindow = function (index) {
    if (index === -1) {
      return;
    }

    var contexts = this.contexts;
    var context = contexts[index];
    var window = context.window,
        subscription = context.subscription;
    contexts.splice(index, 1);
    window.complete();
    subscription.unsubscribe();
  };

  return WindowToggleSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subject":"../../node_modules/rxjs/_esm5/internal/Subject.js","../Subscription":"../../node_modules/rxjs/_esm5/internal/Subscription.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/operators/windowWhen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowWhen = windowWhen;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("../Subject");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function windowWhen(closingSelector) {
  return function windowWhenOperatorFunction(source) {
    return source.lift(new WindowOperator(closingSelector));
  };
}

var WindowOperator =
/*@__PURE__*/
function () {
  function WindowOperator(closingSelector) {
    this.closingSelector = closingSelector;
  }

  WindowOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new WindowSubscriber(subscriber, this.closingSelector));
  };

  return WindowOperator;
}();

var WindowSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(WindowSubscriber, _super);

  function WindowSubscriber(destination, closingSelector) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    _this.closingSelector = closingSelector;

    _this.openWindow();

    return _this;
  }

  WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.openWindow(innerSub);
  };

  WindowSubscriber.prototype.notifyError = function (error, innerSub) {
    this._error(error);
  };

  WindowSubscriber.prototype.notifyComplete = function (innerSub) {
    this.openWindow(innerSub);
  };

  WindowSubscriber.prototype._next = function (value) {
    this.window.next(value);
  };

  WindowSubscriber.prototype._error = function (err) {
    this.window.error(err);
    this.destination.error(err);
    this.unsubscribeClosingNotification();
  };

  WindowSubscriber.prototype._complete = function () {
    this.window.complete();
    this.destination.complete();
    this.unsubscribeClosingNotification();
  };

  WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
    if (this.closingNotification) {
      this.closingNotification.unsubscribe();
    }
  };

  WindowSubscriber.prototype.openWindow = function (innerSub) {
    if (innerSub === void 0) {
      innerSub = null;
    }

    if (innerSub) {
      this.remove(innerSub);
      innerSub.unsubscribe();
    }

    var prevWindow = this.window;

    if (prevWindow) {
      prevWindow.complete();
    }

    var window = this.window = new _Subject.Subject();
    this.destination.next(window);
    var closingNotifier;

    try {
      var closingSelector = this.closingSelector;
      closingNotifier = closingSelector();
    } catch (e) {
      this.destination.error(e);
      this.window.error(e);
      return;
    }

    this.add(this.closingNotification = (0, _subscribeToResult.subscribeToResult)(this, closingNotifier));
  };

  return WindowSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subject":"../../node_modules/rxjs/_esm5/internal/Subject.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/operators/withLatestFrom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withLatestFrom = withLatestFrom;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function withLatestFrom() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return function (source) {
    var project;

    if (typeof args[args.length - 1] === 'function') {
      project = args.pop();
    }

    var observables = args;
    return source.lift(new WithLatestFromOperator(observables, project));
  };
}

var WithLatestFromOperator =
/*@__PURE__*/
function () {
  function WithLatestFromOperator(observables, project) {
    this.observables = observables;
    this.project = project;
  }

  WithLatestFromOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
  };

  return WithLatestFromOperator;
}();

var WithLatestFromSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(WithLatestFromSubscriber, _super);

  function WithLatestFromSubscriber(destination, observables, project) {
    var _this = _super.call(this, destination) || this;

    _this.observables = observables;
    _this.project = project;
    _this.toRespond = [];
    var len = observables.length;
    _this.values = new Array(len);

    for (var i = 0; i < len; i++) {
      _this.toRespond.push(i);
    }

    for (var i = 0; i < len; i++) {
      var observable = observables[i];

      _this.add((0, _subscribeToResult.subscribeToResult)(_this, observable, observable, i));
    }

    return _this;
  }

  WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.values[outerIndex] = innerValue;
    var toRespond = this.toRespond;

    if (toRespond.length > 0) {
      var found = toRespond.indexOf(outerIndex);

      if (found !== -1) {
        toRespond.splice(found, 1);
      }
    }
  };

  WithLatestFromSubscriber.prototype.notifyComplete = function () {};

  WithLatestFromSubscriber.prototype._next = function (value) {
    if (this.toRespond.length === 0) {
      var args = [value].concat(this.values);

      if (this.project) {
        this._tryProject(args);
      } else {
        this.destination.next(args);
      }
    }
  };

  WithLatestFromSubscriber.prototype._tryProject = function (args) {
    var result;

    try {
      result = this.project.apply(this, args);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  };

  return WithLatestFromSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../OuterSubscriber":"../../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../../node_modules/rxjs/_esm5/internal/operators/zip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = zip;

var _zip = require("../observable/zip");

/** PURE_IMPORTS_START _observable_zip PURE_IMPORTS_END */
function zip() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  return function zipOperatorFunction(source) {
    return source.lift.call(_zip.zip.apply(void 0, [source].concat(observables)));
  };
}
},{"../observable/zip":"../../node_modules/rxjs/_esm5/internal/observable/zip.js"}],"../../node_modules/rxjs/_esm5/internal/operators/zipAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zipAll = zipAll;

var _zip = require("../observable/zip");

/** PURE_IMPORTS_START _observable_zip PURE_IMPORTS_END */
function zipAll(project) {
  return function (source) {
    return source.lift(new _zip.ZipOperator(project));
  };
}
},{"../observable/zip":"../../node_modules/rxjs/_esm5/internal/observable/zip.js"}],"../../node_modules/rxjs/_esm5/operators/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "audit", {
  enumerable: true,
  get: function () {
    return _audit.audit;
  }
});
Object.defineProperty(exports, "auditTime", {
  enumerable: true,
  get: function () {
    return _auditTime.auditTime;
  }
});
Object.defineProperty(exports, "buffer", {
  enumerable: true,
  get: function () {
    return _buffer.buffer;
  }
});
Object.defineProperty(exports, "bufferCount", {
  enumerable: true,
  get: function () {
    return _bufferCount.bufferCount;
  }
});
Object.defineProperty(exports, "bufferTime", {
  enumerable: true,
  get: function () {
    return _bufferTime.bufferTime;
  }
});
Object.defineProperty(exports, "bufferToggle", {
  enumerable: true,
  get: function () {
    return _bufferToggle.bufferToggle;
  }
});
Object.defineProperty(exports, "bufferWhen", {
  enumerable: true,
  get: function () {
    return _bufferWhen.bufferWhen;
  }
});
Object.defineProperty(exports, "catchError", {
  enumerable: true,
  get: function () {
    return _catchError.catchError;
  }
});
Object.defineProperty(exports, "combineAll", {
  enumerable: true,
  get: function () {
    return _combineAll.combineAll;
  }
});
Object.defineProperty(exports, "combineLatest", {
  enumerable: true,
  get: function () {
    return _combineLatest.combineLatest;
  }
});
Object.defineProperty(exports, "concat", {
  enumerable: true,
  get: function () {
    return _concat.concat;
  }
});
Object.defineProperty(exports, "concatAll", {
  enumerable: true,
  get: function () {
    return _concatAll.concatAll;
  }
});
Object.defineProperty(exports, "concatMap", {
  enumerable: true,
  get: function () {
    return _concatMap.concatMap;
  }
});
Object.defineProperty(exports, "concatMapTo", {
  enumerable: true,
  get: function () {
    return _concatMapTo.concatMapTo;
  }
});
Object.defineProperty(exports, "count", {
  enumerable: true,
  get: function () {
    return _count.count;
  }
});
Object.defineProperty(exports, "debounce", {
  enumerable: true,
  get: function () {
    return _debounce.debounce;
  }
});
Object.defineProperty(exports, "debounceTime", {
  enumerable: true,
  get: function () {
    return _debounceTime.debounceTime;
  }
});
Object.defineProperty(exports, "defaultIfEmpty", {
  enumerable: true,
  get: function () {
    return _defaultIfEmpty.defaultIfEmpty;
  }
});
Object.defineProperty(exports, "delay", {
  enumerable: true,
  get: function () {
    return _delay.delay;
  }
});
Object.defineProperty(exports, "delayWhen", {
  enumerable: true,
  get: function () {
    return _delayWhen.delayWhen;
  }
});
Object.defineProperty(exports, "dematerialize", {
  enumerable: true,
  get: function () {
    return _dematerialize.dematerialize;
  }
});
Object.defineProperty(exports, "distinct", {
  enumerable: true,
  get: function () {
    return _distinct.distinct;
  }
});
Object.defineProperty(exports, "distinctUntilChanged", {
  enumerable: true,
  get: function () {
    return _distinctUntilChanged.distinctUntilChanged;
  }
});
Object.defineProperty(exports, "distinctUntilKeyChanged", {
  enumerable: true,
  get: function () {
    return _distinctUntilKeyChanged.distinctUntilKeyChanged;
  }
});
Object.defineProperty(exports, "elementAt", {
  enumerable: true,
  get: function () {
    return _elementAt.elementAt;
  }
});
Object.defineProperty(exports, "endWith", {
  enumerable: true,
  get: function () {
    return _endWith.endWith;
  }
});
Object.defineProperty(exports, "every", {
  enumerable: true,
  get: function () {
    return _every.every;
  }
});
Object.defineProperty(exports, "exhaust", {
  enumerable: true,
  get: function () {
    return _exhaust.exhaust;
  }
});
Object.defineProperty(exports, "exhaustMap", {
  enumerable: true,
  get: function () {
    return _exhaustMap.exhaustMap;
  }
});
Object.defineProperty(exports, "expand", {
  enumerable: true,
  get: function () {
    return _expand.expand;
  }
});
Object.defineProperty(exports, "filter", {
  enumerable: true,
  get: function () {
    return _filter.filter;
  }
});
Object.defineProperty(exports, "finalize", {
  enumerable: true,
  get: function () {
    return _finalize.finalize;
  }
});
Object.defineProperty(exports, "find", {
  enumerable: true,
  get: function () {
    return _find.find;
  }
});
Object.defineProperty(exports, "findIndex", {
  enumerable: true,
  get: function () {
    return _findIndex.findIndex;
  }
});
Object.defineProperty(exports, "first", {
  enumerable: true,
  get: function () {
    return _first.first;
  }
});
Object.defineProperty(exports, "groupBy", {
  enumerable: true,
  get: function () {
    return _groupBy.groupBy;
  }
});
Object.defineProperty(exports, "ignoreElements", {
  enumerable: true,
  get: function () {
    return _ignoreElements.ignoreElements;
  }
});
Object.defineProperty(exports, "isEmpty", {
  enumerable: true,
  get: function () {
    return _isEmpty.isEmpty;
  }
});
Object.defineProperty(exports, "last", {
  enumerable: true,
  get: function () {
    return _last.last;
  }
});
Object.defineProperty(exports, "map", {
  enumerable: true,
  get: function () {
    return _map.map;
  }
});
Object.defineProperty(exports, "mapTo", {
  enumerable: true,
  get: function () {
    return _mapTo.mapTo;
  }
});
Object.defineProperty(exports, "materialize", {
  enumerable: true,
  get: function () {
    return _materialize.materialize;
  }
});
Object.defineProperty(exports, "max", {
  enumerable: true,
  get: function () {
    return _max.max;
  }
});
Object.defineProperty(exports, "merge", {
  enumerable: true,
  get: function () {
    return _merge.merge;
  }
});
Object.defineProperty(exports, "mergeAll", {
  enumerable: true,
  get: function () {
    return _mergeAll.mergeAll;
  }
});
Object.defineProperty(exports, "mergeMap", {
  enumerable: true,
  get: function () {
    return _mergeMap.mergeMap;
  }
});
Object.defineProperty(exports, "flatMap", {
  enumerable: true,
  get: function () {
    return _mergeMap.mergeMap;
  }
});
Object.defineProperty(exports, "mergeMapTo", {
  enumerable: true,
  get: function () {
    return _mergeMapTo.mergeMapTo;
  }
});
Object.defineProperty(exports, "mergeScan", {
  enumerable: true,
  get: function () {
    return _mergeScan.mergeScan;
  }
});
Object.defineProperty(exports, "min", {
  enumerable: true,
  get: function () {
    return _min.min;
  }
});
Object.defineProperty(exports, "multicast", {
  enumerable: true,
  get: function () {
    return _multicast.multicast;
  }
});
Object.defineProperty(exports, "observeOn", {
  enumerable: true,
  get: function () {
    return _observeOn.observeOn;
  }
});
Object.defineProperty(exports, "onErrorResumeNext", {
  enumerable: true,
  get: function () {
    return _onErrorResumeNext.onErrorResumeNext;
  }
});
Object.defineProperty(exports, "pairwise", {
  enumerable: true,
  get: function () {
    return _pairwise.pairwise;
  }
});
Object.defineProperty(exports, "partition", {
  enumerable: true,
  get: function () {
    return _partition.partition;
  }
});
Object.defineProperty(exports, "pluck", {
  enumerable: true,
  get: function () {
    return _pluck.pluck;
  }
});
Object.defineProperty(exports, "publish", {
  enumerable: true,
  get: function () {
    return _publish.publish;
  }
});
Object.defineProperty(exports, "publishBehavior", {
  enumerable: true,
  get: function () {
    return _publishBehavior.publishBehavior;
  }
});
Object.defineProperty(exports, "publishLast", {
  enumerable: true,
  get: function () {
    return _publishLast.publishLast;
  }
});
Object.defineProperty(exports, "publishReplay", {
  enumerable: true,
  get: function () {
    return _publishReplay.publishReplay;
  }
});
Object.defineProperty(exports, "race", {
  enumerable: true,
  get: function () {
    return _race.race;
  }
});
Object.defineProperty(exports, "reduce", {
  enumerable: true,
  get: function () {
    return _reduce.reduce;
  }
});
Object.defineProperty(exports, "repeat", {
  enumerable: true,
  get: function () {
    return _repeat.repeat;
  }
});
Object.defineProperty(exports, "repeatWhen", {
  enumerable: true,
  get: function () {
    return _repeatWhen.repeatWhen;
  }
});
Object.defineProperty(exports, "retry", {
  enumerable: true,
  get: function () {
    return _retry.retry;
  }
});
Object.defineProperty(exports, "retryWhen", {
  enumerable: true,
  get: function () {
    return _retryWhen.retryWhen;
  }
});
Object.defineProperty(exports, "refCount", {
  enumerable: true,
  get: function () {
    return _refCount.refCount;
  }
});
Object.defineProperty(exports, "sample", {
  enumerable: true,
  get: function () {
    return _sample.sample;
  }
});
Object.defineProperty(exports, "sampleTime", {
  enumerable: true,
  get: function () {
    return _sampleTime.sampleTime;
  }
});
Object.defineProperty(exports, "scan", {
  enumerable: true,
  get: function () {
    return _scan.scan;
  }
});
Object.defineProperty(exports, "sequenceEqual", {
  enumerable: true,
  get: function () {
    return _sequenceEqual.sequenceEqual;
  }
});
Object.defineProperty(exports, "share", {
  enumerable: true,
  get: function () {
    return _share.share;
  }
});
Object.defineProperty(exports, "shareReplay", {
  enumerable: true,
  get: function () {
    return _shareReplay.shareReplay;
  }
});
Object.defineProperty(exports, "single", {
  enumerable: true,
  get: function () {
    return _single.single;
  }
});
Object.defineProperty(exports, "skip", {
  enumerable: true,
  get: function () {
    return _skip.skip;
  }
});
Object.defineProperty(exports, "skipLast", {
  enumerable: true,
  get: function () {
    return _skipLast.skipLast;
  }
});
Object.defineProperty(exports, "skipUntil", {
  enumerable: true,
  get: function () {
    return _skipUntil.skipUntil;
  }
});
Object.defineProperty(exports, "skipWhile", {
  enumerable: true,
  get: function () {
    return _skipWhile.skipWhile;
  }
});
Object.defineProperty(exports, "startWith", {
  enumerable: true,
  get: function () {
    return _startWith.startWith;
  }
});
Object.defineProperty(exports, "subscribeOn", {
  enumerable: true,
  get: function () {
    return _subscribeOn.subscribeOn;
  }
});
Object.defineProperty(exports, "switchAll", {
  enumerable: true,
  get: function () {
    return _switchAll.switchAll;
  }
});
Object.defineProperty(exports, "switchMap", {
  enumerable: true,
  get: function () {
    return _switchMap.switchMap;
  }
});
Object.defineProperty(exports, "switchMapTo", {
  enumerable: true,
  get: function () {
    return _switchMapTo.switchMapTo;
  }
});
Object.defineProperty(exports, "take", {
  enumerable: true,
  get: function () {
    return _take.take;
  }
});
Object.defineProperty(exports, "takeLast", {
  enumerable: true,
  get: function () {
    return _takeLast.takeLast;
  }
});
Object.defineProperty(exports, "takeUntil", {
  enumerable: true,
  get: function () {
    return _takeUntil.takeUntil;
  }
});
Object.defineProperty(exports, "takeWhile", {
  enumerable: true,
  get: function () {
    return _takeWhile.takeWhile;
  }
});
Object.defineProperty(exports, "tap", {
  enumerable: true,
  get: function () {
    return _tap.tap;
  }
});
Object.defineProperty(exports, "throttle", {
  enumerable: true,
  get: function () {
    return _throttle.throttle;
  }
});
Object.defineProperty(exports, "throttleTime", {
  enumerable: true,
  get: function () {
    return _throttleTime.throttleTime;
  }
});
Object.defineProperty(exports, "throwIfEmpty", {
  enumerable: true,
  get: function () {
    return _throwIfEmpty.throwIfEmpty;
  }
});
Object.defineProperty(exports, "timeInterval", {
  enumerable: true,
  get: function () {
    return _timeInterval.timeInterval;
  }
});
Object.defineProperty(exports, "timeout", {
  enumerable: true,
  get: function () {
    return _timeout.timeout;
  }
});
Object.defineProperty(exports, "timeoutWith", {
  enumerable: true,
  get: function () {
    return _timeoutWith.timeoutWith;
  }
});
Object.defineProperty(exports, "timestamp", {
  enumerable: true,
  get: function () {
    return _timestamp.timestamp;
  }
});
Object.defineProperty(exports, "toArray", {
  enumerable: true,
  get: function () {
    return _toArray.toArray;
  }
});
Object.defineProperty(exports, "window", {
  enumerable: true,
  get: function () {
    return _window.window;
  }
});
Object.defineProperty(exports, "windowCount", {
  enumerable: true,
  get: function () {
    return _windowCount.windowCount;
  }
});
Object.defineProperty(exports, "windowTime", {
  enumerable: true,
  get: function () {
    return _windowTime.windowTime;
  }
});
Object.defineProperty(exports, "windowToggle", {
  enumerable: true,
  get: function () {
    return _windowToggle.windowToggle;
  }
});
Object.defineProperty(exports, "windowWhen", {
  enumerable: true,
  get: function () {
    return _windowWhen.windowWhen;
  }
});
Object.defineProperty(exports, "withLatestFrom", {
  enumerable: true,
  get: function () {
    return _withLatestFrom.withLatestFrom;
  }
});
Object.defineProperty(exports, "zip", {
  enumerable: true,
  get: function () {
    return _zip.zip;
  }
});
Object.defineProperty(exports, "zipAll", {
  enumerable: true,
  get: function () {
    return _zipAll.zipAll;
  }
});

var _audit = require("../internal/operators/audit");

var _auditTime = require("../internal/operators/auditTime");

var _buffer = require("../internal/operators/buffer");

var _bufferCount = require("../internal/operators/bufferCount");

var _bufferTime = require("../internal/operators/bufferTime");

var _bufferToggle = require("../internal/operators/bufferToggle");

var _bufferWhen = require("../internal/operators/bufferWhen");

var _catchError = require("../internal/operators/catchError");

var _combineAll = require("../internal/operators/combineAll");

var _combineLatest = require("../internal/operators/combineLatest");

var _concat = require("../internal/operators/concat");

var _concatAll = require("../internal/operators/concatAll");

var _concatMap = require("../internal/operators/concatMap");

var _concatMapTo = require("../internal/operators/concatMapTo");

var _count = require("../internal/operators/count");

var _debounce = require("../internal/operators/debounce");

var _debounceTime = require("../internal/operators/debounceTime");

var _defaultIfEmpty = require("../internal/operators/defaultIfEmpty");

var _delay = require("../internal/operators/delay");

var _delayWhen = require("../internal/operators/delayWhen");

var _dematerialize = require("../internal/operators/dematerialize");

var _distinct = require("../internal/operators/distinct");

var _distinctUntilChanged = require("../internal/operators/distinctUntilChanged");

var _distinctUntilKeyChanged = require("../internal/operators/distinctUntilKeyChanged");

var _elementAt = require("../internal/operators/elementAt");

var _endWith = require("../internal/operators/endWith");

var _every = require("../internal/operators/every");

var _exhaust = require("../internal/operators/exhaust");

var _exhaustMap = require("../internal/operators/exhaustMap");

var _expand = require("../internal/operators/expand");

var _filter = require("../internal/operators/filter");

var _finalize = require("../internal/operators/finalize");

var _find = require("../internal/operators/find");

var _findIndex = require("../internal/operators/findIndex");

var _first = require("../internal/operators/first");

var _groupBy = require("../internal/operators/groupBy");

var _ignoreElements = require("../internal/operators/ignoreElements");

var _isEmpty = require("../internal/operators/isEmpty");

var _last = require("../internal/operators/last");

var _map = require("../internal/operators/map");

var _mapTo = require("../internal/operators/mapTo");

var _materialize = require("../internal/operators/materialize");

var _max = require("../internal/operators/max");

var _merge = require("../internal/operators/merge");

var _mergeAll = require("../internal/operators/mergeAll");

var _mergeMap = require("../internal/operators/mergeMap");

var _mergeMapTo = require("../internal/operators/mergeMapTo");

var _mergeScan = require("../internal/operators/mergeScan");

var _min = require("../internal/operators/min");

var _multicast = require("../internal/operators/multicast");

var _observeOn = require("../internal/operators/observeOn");

var _onErrorResumeNext = require("../internal/operators/onErrorResumeNext");

var _pairwise = require("../internal/operators/pairwise");

var _partition = require("../internal/operators/partition");

var _pluck = require("../internal/operators/pluck");

var _publish = require("../internal/operators/publish");

var _publishBehavior = require("../internal/operators/publishBehavior");

var _publishLast = require("../internal/operators/publishLast");

var _publishReplay = require("../internal/operators/publishReplay");

var _race = require("../internal/operators/race");

var _reduce = require("../internal/operators/reduce");

var _repeat = require("../internal/operators/repeat");

var _repeatWhen = require("../internal/operators/repeatWhen");

var _retry = require("../internal/operators/retry");

var _retryWhen = require("../internal/operators/retryWhen");

var _refCount = require("../internal/operators/refCount");

var _sample = require("../internal/operators/sample");

var _sampleTime = require("../internal/operators/sampleTime");

var _scan = require("../internal/operators/scan");

var _sequenceEqual = require("../internal/operators/sequenceEqual");

var _share = require("../internal/operators/share");

var _shareReplay = require("../internal/operators/shareReplay");

var _single = require("../internal/operators/single");

var _skip = require("../internal/operators/skip");

var _skipLast = require("../internal/operators/skipLast");

var _skipUntil = require("../internal/operators/skipUntil");

var _skipWhile = require("../internal/operators/skipWhile");

var _startWith = require("../internal/operators/startWith");

var _subscribeOn = require("../internal/operators/subscribeOn");

var _switchAll = require("../internal/operators/switchAll");

var _switchMap = require("../internal/operators/switchMap");

var _switchMapTo = require("../internal/operators/switchMapTo");

var _take = require("../internal/operators/take");

var _takeLast = require("../internal/operators/takeLast");

var _takeUntil = require("../internal/operators/takeUntil");

var _takeWhile = require("../internal/operators/takeWhile");

var _tap = require("../internal/operators/tap");

var _throttle = require("../internal/operators/throttle");

var _throttleTime = require("../internal/operators/throttleTime");

var _throwIfEmpty = require("../internal/operators/throwIfEmpty");

var _timeInterval = require("../internal/operators/timeInterval");

var _timeout = require("../internal/operators/timeout");

var _timeoutWith = require("../internal/operators/timeoutWith");

var _timestamp = require("../internal/operators/timestamp");

var _toArray = require("../internal/operators/toArray");

var _window = require("../internal/operators/window");

var _windowCount = require("../internal/operators/windowCount");

var _windowTime = require("../internal/operators/windowTime");

var _windowToggle = require("../internal/operators/windowToggle");

var _windowWhen = require("../internal/operators/windowWhen");

var _withLatestFrom = require("../internal/operators/withLatestFrom");

var _zip = require("../internal/operators/zip");

var _zipAll = require("../internal/operators/zipAll");
},{"../internal/operators/audit":"../../node_modules/rxjs/_esm5/internal/operators/audit.js","../internal/operators/auditTime":"../../node_modules/rxjs/_esm5/internal/operators/auditTime.js","../internal/operators/buffer":"../../node_modules/rxjs/_esm5/internal/operators/buffer.js","../internal/operators/bufferCount":"../../node_modules/rxjs/_esm5/internal/operators/bufferCount.js","../internal/operators/bufferTime":"../../node_modules/rxjs/_esm5/internal/operators/bufferTime.js","../internal/operators/bufferToggle":"../../node_modules/rxjs/_esm5/internal/operators/bufferToggle.js","../internal/operators/bufferWhen":"../../node_modules/rxjs/_esm5/internal/operators/bufferWhen.js","../internal/operators/catchError":"../../node_modules/rxjs/_esm5/internal/operators/catchError.js","../internal/operators/combineAll":"../../node_modules/rxjs/_esm5/internal/operators/combineAll.js","../internal/operators/combineLatest":"../../node_modules/rxjs/_esm5/internal/operators/combineLatest.js","../internal/operators/concat":"../../node_modules/rxjs/_esm5/internal/operators/concat.js","../internal/operators/concatAll":"../../node_modules/rxjs/_esm5/internal/operators/concatAll.js","../internal/operators/concatMap":"../../node_modules/rxjs/_esm5/internal/operators/concatMap.js","../internal/operators/concatMapTo":"../../node_modules/rxjs/_esm5/internal/operators/concatMapTo.js","../internal/operators/count":"../../node_modules/rxjs/_esm5/internal/operators/count.js","../internal/operators/debounce":"../../node_modules/rxjs/_esm5/internal/operators/debounce.js","../internal/operators/debounceTime":"../../node_modules/rxjs/_esm5/internal/operators/debounceTime.js","../internal/operators/defaultIfEmpty":"../../node_modules/rxjs/_esm5/internal/operators/defaultIfEmpty.js","../internal/operators/delay":"../../node_modules/rxjs/_esm5/internal/operators/delay.js","../internal/operators/delayWhen":"../../node_modules/rxjs/_esm5/internal/operators/delayWhen.js","../internal/operators/dematerialize":"../../node_modules/rxjs/_esm5/internal/operators/dematerialize.js","../internal/operators/distinct":"../../node_modules/rxjs/_esm5/internal/operators/distinct.js","../internal/operators/distinctUntilChanged":"../../node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js","../internal/operators/distinctUntilKeyChanged":"../../node_modules/rxjs/_esm5/internal/operators/distinctUntilKeyChanged.js","../internal/operators/elementAt":"../../node_modules/rxjs/_esm5/internal/operators/elementAt.js","../internal/operators/endWith":"../../node_modules/rxjs/_esm5/internal/operators/endWith.js","../internal/operators/every":"../../node_modules/rxjs/_esm5/internal/operators/every.js","../internal/operators/exhaust":"../../node_modules/rxjs/_esm5/internal/operators/exhaust.js","../internal/operators/exhaustMap":"../../node_modules/rxjs/_esm5/internal/operators/exhaustMap.js","../internal/operators/expand":"../../node_modules/rxjs/_esm5/internal/operators/expand.js","../internal/operators/filter":"../../node_modules/rxjs/_esm5/internal/operators/filter.js","../internal/operators/finalize":"../../node_modules/rxjs/_esm5/internal/operators/finalize.js","../internal/operators/find":"../../node_modules/rxjs/_esm5/internal/operators/find.js","../internal/operators/findIndex":"../../node_modules/rxjs/_esm5/internal/operators/findIndex.js","../internal/operators/first":"../../node_modules/rxjs/_esm5/internal/operators/first.js","../internal/operators/groupBy":"../../node_modules/rxjs/_esm5/internal/operators/groupBy.js","../internal/operators/ignoreElements":"../../node_modules/rxjs/_esm5/internal/operators/ignoreElements.js","../internal/operators/isEmpty":"../../node_modules/rxjs/_esm5/internal/operators/isEmpty.js","../internal/operators/last":"../../node_modules/rxjs/_esm5/internal/operators/last.js","../internal/operators/map":"../../node_modules/rxjs/_esm5/internal/operators/map.js","../internal/operators/mapTo":"../../node_modules/rxjs/_esm5/internal/operators/mapTo.js","../internal/operators/materialize":"../../node_modules/rxjs/_esm5/internal/operators/materialize.js","../internal/operators/max":"../../node_modules/rxjs/_esm5/internal/operators/max.js","../internal/operators/merge":"../../node_modules/rxjs/_esm5/internal/operators/merge.js","../internal/operators/mergeAll":"../../node_modules/rxjs/_esm5/internal/operators/mergeAll.js","../internal/operators/mergeMap":"../../node_modules/rxjs/_esm5/internal/operators/mergeMap.js","../internal/operators/mergeMapTo":"../../node_modules/rxjs/_esm5/internal/operators/mergeMapTo.js","../internal/operators/mergeScan":"../../node_modules/rxjs/_esm5/internal/operators/mergeScan.js","../internal/operators/min":"../../node_modules/rxjs/_esm5/internal/operators/min.js","../internal/operators/multicast":"../../node_modules/rxjs/_esm5/internal/operators/multicast.js","../internal/operators/observeOn":"../../node_modules/rxjs/_esm5/internal/operators/observeOn.js","../internal/operators/onErrorResumeNext":"../../node_modules/rxjs/_esm5/internal/operators/onErrorResumeNext.js","../internal/operators/pairwise":"../../node_modules/rxjs/_esm5/internal/operators/pairwise.js","../internal/operators/partition":"../../node_modules/rxjs/_esm5/internal/operators/partition.js","../internal/operators/pluck":"../../node_modules/rxjs/_esm5/internal/operators/pluck.js","../internal/operators/publish":"../../node_modules/rxjs/_esm5/internal/operators/publish.js","../internal/operators/publishBehavior":"../../node_modules/rxjs/_esm5/internal/operators/publishBehavior.js","../internal/operators/publishLast":"../../node_modules/rxjs/_esm5/internal/operators/publishLast.js","../internal/operators/publishReplay":"../../node_modules/rxjs/_esm5/internal/operators/publishReplay.js","../internal/operators/race":"../../node_modules/rxjs/_esm5/internal/operators/race.js","../internal/operators/reduce":"../../node_modules/rxjs/_esm5/internal/operators/reduce.js","../internal/operators/repeat":"../../node_modules/rxjs/_esm5/internal/operators/repeat.js","../internal/operators/repeatWhen":"../../node_modules/rxjs/_esm5/internal/operators/repeatWhen.js","../internal/operators/retry":"../../node_modules/rxjs/_esm5/internal/operators/retry.js","../internal/operators/retryWhen":"../../node_modules/rxjs/_esm5/internal/operators/retryWhen.js","../internal/operators/refCount":"../../node_modules/rxjs/_esm5/internal/operators/refCount.js","../internal/operators/sample":"../../node_modules/rxjs/_esm5/internal/operators/sample.js","../internal/operators/sampleTime":"../../node_modules/rxjs/_esm5/internal/operators/sampleTime.js","../internal/operators/scan":"../../node_modules/rxjs/_esm5/internal/operators/scan.js","../internal/operators/sequenceEqual":"../../node_modules/rxjs/_esm5/internal/operators/sequenceEqual.js","../internal/operators/share":"../../node_modules/rxjs/_esm5/internal/operators/share.js","../internal/operators/shareReplay":"../../node_modules/rxjs/_esm5/internal/operators/shareReplay.js","../internal/operators/single":"../../node_modules/rxjs/_esm5/internal/operators/single.js","../internal/operators/skip":"../../node_modules/rxjs/_esm5/internal/operators/skip.js","../internal/operators/skipLast":"../../node_modules/rxjs/_esm5/internal/operators/skipLast.js","../internal/operators/skipUntil":"../../node_modules/rxjs/_esm5/internal/operators/skipUntil.js","../internal/operators/skipWhile":"../../node_modules/rxjs/_esm5/internal/operators/skipWhile.js","../internal/operators/startWith":"../../node_modules/rxjs/_esm5/internal/operators/startWith.js","../internal/operators/subscribeOn":"../../node_modules/rxjs/_esm5/internal/operators/subscribeOn.js","../internal/operators/switchAll":"../../node_modules/rxjs/_esm5/internal/operators/switchAll.js","../internal/operators/switchMap":"../../node_modules/rxjs/_esm5/internal/operators/switchMap.js","../internal/operators/switchMapTo":"../../node_modules/rxjs/_esm5/internal/operators/switchMapTo.js","../internal/operators/take":"../../node_modules/rxjs/_esm5/internal/operators/take.js","../internal/operators/takeLast":"../../node_modules/rxjs/_esm5/internal/operators/takeLast.js","../internal/operators/takeUntil":"../../node_modules/rxjs/_esm5/internal/operators/takeUntil.js","../internal/operators/takeWhile":"../../node_modules/rxjs/_esm5/internal/operators/takeWhile.js","../internal/operators/tap":"../../node_modules/rxjs/_esm5/internal/operators/tap.js","../internal/operators/throttle":"../../node_modules/rxjs/_esm5/internal/operators/throttle.js","../internal/operators/throttleTime":"../../node_modules/rxjs/_esm5/internal/operators/throttleTime.js","../internal/operators/throwIfEmpty":"../../node_modules/rxjs/_esm5/internal/operators/throwIfEmpty.js","../internal/operators/timeInterval":"../../node_modules/rxjs/_esm5/internal/operators/timeInterval.js","../internal/operators/timeout":"../../node_modules/rxjs/_esm5/internal/operators/timeout.js","../internal/operators/timeoutWith":"../../node_modules/rxjs/_esm5/internal/operators/timeoutWith.js","../internal/operators/timestamp":"../../node_modules/rxjs/_esm5/internal/operators/timestamp.js","../internal/operators/toArray":"../../node_modules/rxjs/_esm5/internal/operators/toArray.js","../internal/operators/window":"../../node_modules/rxjs/_esm5/internal/operators/window.js","../internal/operators/windowCount":"../../node_modules/rxjs/_esm5/internal/operators/windowCount.js","../internal/operators/windowTime":"../../node_modules/rxjs/_esm5/internal/operators/windowTime.js","../internal/operators/windowToggle":"../../node_modules/rxjs/_esm5/internal/operators/windowToggle.js","../internal/operators/windowWhen":"../../node_modules/rxjs/_esm5/internal/operators/windowWhen.js","../internal/operators/withLatestFrom":"../../node_modules/rxjs/_esm5/internal/operators/withLatestFrom.js","../internal/operators/zip":"../../node_modules/rxjs/_esm5/internal/operators/zip.js","../internal/operators/zipAll":"../../node_modules/rxjs/_esm5/internal/operators/zipAll.js"}],"index.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var rxjs_1 = require("rxjs");

var operators_1 = require("rxjs/operators");

var box = document.querySelector(".box");
var mousedown = rxjs_1.fromEvent(box, "mousedown");
var mouseup = rxjs_1.fromEvent(document, "mouseup");
var mousemove = rxjs_1.fromEvent(document, "mousemove");
mousedown.pipe(operators_1.switchMap(function (e) {
  return mousemove.pipe(operators_1.map(function (event) {
    return [event.clientX - e.offsetX, event.clientY - e.offsetY];
  }), operators_1.takeUntil(mouseup));
})).subscribe(function (_a) {
  var x = _a[0],
      y = _a[1];
  box.style.transform = "translate(" + x + "px," + y + "px)";
});
},{"rxjs":"../../node_modules/rxjs/_esm5/index.js","rxjs/operators":"../../node_modules/rxjs/_esm5/operators/index.js"}],"../../../../.nvm/versions/node/v8.9.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52781" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../.nvm/versions/node/v8.9.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/01.77de5100.js.map