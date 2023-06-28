(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _pluginify = _interopRequireDefault(require("../pluginify"));
var utils = _interopRequireWildcard(require("../utils/utils"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * jp-plugin-name - jQueryPluginify sample block
 * @author 2023 ImAliTavakoli
 *
 * This is just a sample jQuey Plugin that is created with help of the jQuey 
 * Pluginify and the utility functions.
 *
 *
 * Requirements:
 * - jQuery version 1.9.1 or higher
 * - Pluginify:               ../pluginify.js
 * - Utils:                   ../utils/utils.js
 *
 *
 *
 *
 * @example
 * // HTML simple usage
 * // //////////////////////////////////////////////////////////////////////////
 * // //////////////////////////////////////////////////////////////////////////
 * // //////////////////////////////////////////////////////////////////////////
 * // //////////////////////////////////////////////////////////////////////////
 * //
 * // <div class="jp-plugin-name" data-jp-disabled data-jp-disabled-class="jp-disabled">This element is a jQuery plugin!</div>
 * //
 * // <!-- data-jp-disabled: Boolean = false; (Optional)
 * // If it's true, it adds disabled class to the block. -->
 * //
 * // <!-- data-jp-disabled-class: String = 'jp-plugin-name--state-disabled'; (Optional)
 * // CSS class that will be added to the block when jpDisabled option is true. -->
 *
 *
 *
 *
 * // JS usage
 * // //////////////////////////////////////////////////////////////////////////
 * // //////////////////////////////////////////////////////////////////////////
 * // //////////////////////////////////////////////////////////////////////////
 * // //////////////////////////////////////////////////////////////////////////
 *
 * // If you've set 'initializeJPBlocksManually' variable in your HTML page to
 * // `true`, then you need to initialize the block manually yourself to enable
 * // its JavaScript functionalities.
 * $('.jp-plugin-name').gppluginname();
 *
 * // Of course when you initialize the block, you can pass it your options object too.
 * // $('.jp-plugin-name').gppluginname({jpDisabled: true});
 *
 * // Destroy the initialized block
 * // NOTE: If the method's 'keepCssStyles' argument is set to 'true' (it's
 * // 'false' by default), then any added CSS classes to the elements won't be
 * // removed on destroy.
 * // $('.jp-plugin-name').gppluginname('destroy', false);
 *
 *
 * // The following methods can be called
 * $('.jp-plugin-name').gppluginname('toggleDisability');
 *
 * // The following events will be triggered on special occasions
 * $('.jp-plugin-name').on('statusChanged.gppluginname', (e, param) => { console.log(param.status); });
 */
var PluginName = /*#__PURE__*/function () {
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Constructor

  function PluginName(element, options) {
    _classCallCheck(this, PluginName);
    this._properties(element, options);
  }

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Static constant
  _createClass(PluginName, [{
    key: "_properties",
    value:
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    /// Properties

    function _properties(element, options) {
      this.$element = $(element);
      this.options = this._getOptions(options);
    }
  }, {
    key: "_getOptions",
    value:
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    /// Private functions

    function _getOptions(options) {
      // The following options should be boolean. Now if the user mentions them
      // via data API without specifying their value, then they will be string, so
      // we check that if they are string, let's convert them into boolean.
      options.jpDisabled = utils.toBoolean(options.jpDisabled);
      return options;
    }
  }, {
    key: "_dispatchEvent",
    value: function _dispatchEvent(status) {
      this.$element.trigger($.Event('statusChanged.gppluginname'), {
        status: status
      });
    }

    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    /// Methods
  }, {
    key: "toggleDisability",
    value: function toggleDisability() {
      if (this.$element.hasClass(this.options.jpDisabledClass)) {
        this.$element.removeClass(this.options.jpDisabledClass);
        this._dispatchEvent('enabled');
      } else {
        this.$element.addClass(this.options.jpDisabledClass);
        this._dispatchEvent('disabled');
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var keepCssStyles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // Remove all probable added styles from any element
      if (!keepCssStyles) {
        this.$element.removeClass(this.options.jpDisabledClass);
      }

      // Null all saved variables
      this.$element = undefined;
      this.options = undefined;
    }
  }], [{
    key: "DEFAULTS",
    get: function get() {
      return {
        jpDisabledClass: 'jp-plugin-name--state-disabled',
        jpDisabled: false
      };
    }
  }]);
  return PluginName;
}(); // Create our jQuery plugin
(0, _pluginify["default"])('gppluginname', PluginName);

// If there's no initializeJPBlocksManually variable which is true, then run the
// plugin for all the blocks in the page
if (typeof window.initializeJPBlocksManually !== 'boolean' || window.initializeJPBlocksManually === false) {
  jQuery(document).ready(function ($) {
    $('.jp-plugin-name').gppluginname();
  });
}

},{"../pluginify":2,"../utils/utils":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = pluginify;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Generate a jQuery plugin.
 * Inspired by: https://gist.github.com/monkeymonk/c08cb040431f89f99928132ca221d647
 * @author 2023 ImAliTavakoli
 *
 *
 * Requirements:
 * - jQuery version 1.9.1 or higher
 *
 *
 *
 *
 * @param pluginName [string] Plugin name
 * @param className [object] Class of the plugin
 * @param shortHand [bool] Generate a shorthand as $.pluginName
 *
 * @example
 * import pluginify from 'pluginify';
 *
 * // Create your class.
 * class MyPlugin {
 * 		constructor(element, options) {
 *   		// ...
 *   	}
 *   	method(arg1, arg2) {
 *   	  // ...
 *   	}
 * }
 *
 * // Set its default options if it's going to have any.
 * MyPlugin.DEFAULTS = {};
 *
 * // Pluginify your class!
 * pluginify('myPlugin', MyPlugin);
 *
 * $(selector).myPlugin({options}); // Now just call your plugin on a selector.
 * $(selector).myPlugin().somethingElse(); // It's chainable too!
 * $(selector).myPlugin('method', arg1, arg2); // You can also call a specific method of your plugin.
 *
 * // Destroy your already initialized plugin.
 * // NOTE: You MUST also have a 'destroy' method on your plugin as well, in
 * // order to undo anything you have done on plugin initialization.
 * $(selector).myPlugin('destroy');
 */
function pluginify(pluginName, className) {
  var shortHand = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var dataName = "__".concat(pluginName);
  var old = $.fn[pluginName];

  // Call our plugin for any number of DOM elements (the elements that our
  // plugin is supposed to be initialized for them) by using .each() method and
  // then return the results of .each() as it returns this (the original jQuery
  // object) to enable chaining.
  $.fn[pluginName] = function (option) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return this.each(function () {
      var $this = $(this);
      var data = $this.data(dataName);

      // Let's merge all of the options that we've recevied from different
      // places: defaults, data API, and the options that user has passed while
      // calling the plugin.
      var options = $.extend({}, className.DEFAULTS, $this.data(), _typeof(option) === 'object' && option);
      if (!data) {
        $this.data(dataName, data = new className(this, options));
      }

      // If option was a string then it means that user is trying to call a
      // method of our plugin, so let's do it!
      if (typeof option === 'string') {
        data[option].apply(data, args);

        // If user was calling the 'destroy' method of our plugin, then delete
        // the already stored arbitrary data (that its name is our plugin's
        // name) associated with the matched elements... Why? To go through the
        // above if statment in the next call in order to initialize the plugin
        // class once again, whenever user tries to initialize the plugin again
        // after she destroys it.
        if (option === 'destroy') {
          $this.removeData(dataName);
          data = undefined;
        }
      }
    });
  };

  // Short hand
  if (shortHand) {
    $[pluginName] = function (options) {
      return $({})[pluginName](options);
    };
  }

  // No conflict
  $.fn[pluginName].noConflict = function () {
    return $.fn[pluginName] = old;
  };
}

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inlineStyleValue = inlineStyleValue;
exports.removeInlineStyles = removeInlineStyles;
exports.toBoolean = toBoolean;
/**
 * utils - Some helper functions
 * @author 2023 ImAliTavakoli
 *
 * Utility functions designed to reduce duplication.
 *
 *
 * Requirements:
 * - jQuery version 1.9.1 or higher
 */

/**
 * Convert any variable type to boolean! Supported types: Boolean, Number, and
 * String. If the veriable's type is something else rather than the mentioned
 * ones, function returns false, or returns value of the variable itself if
 * `returnVarIfNotSupported` argument is false.
 *
 * NOTE: If checkString parameter is false, a String variable will be true no
 * matter what, otherwise its value will be checked and only if it's similar to
 * the following values, it will be true: true, on, yes, 1.
 *
 * NOTE: A Number variable is true when it's above 1, otherwise it will be false.
 *
 * @param  {*}       param                            Variable that is going to be converted to Boolean
 * @param  {Boolean} [checkString=false]              Define weather to check the value of String variables or not
 * @param  {Boolean} [returnVarIfNotSupported=false]  Define weather to return false if param is not Boolean/Number/String or return the value of the param itself
 * @return {Boolean|*}
 */
function toBoolean(param) {
  var checkString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var returnVarIfNotSupported = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (typeof param == 'boolean') return param;
  if (typeof param == 'number' && param > 0) return true;
  if (typeof param == 'string') {
    if (checkString) {
      if (param.toUpperCase() === 'TRUE' || param.toUpperCase() === 'ON' || param.toUpperCase() === 'YES' || param === '1') return true;
    } else {
      return true;
    }
  }
  if (returnVarIfNotSupported) return param;else return false;
}

/**
 * Get the value of an inline css style. If function returns undefined, it means
 * that the mentioned css property (param) does not exist as an inline element
 * style.
 *
 * @param  {jQuery element} $element     The element that we like to check its inline css style
 * @param  {String}         param        Inline css property that we like to check its existance
 * @return {String}                      The value of param
 */
function inlineStyleValue($element, param) {
  var styles = $element.attr('style'),
    value;
  if (styles !== undefined) {
    styles.split(';').forEach(function (e) {
      var style = e.split(':');
      if ($.trim(style[0]) === param) {
        value = style[1];
        value = value.replace(/\s/g, ''); // remove any possible spaces in the value
      }
    });
  }

  return value;
}

/**
 * Removes the mentioned inline css properties (params) from the element.
 *
 * @param  {jQuery element} $element     The element that we like to remove its inline styles
 * @param  {String} params               Inline css properties that we like to remove
 * @return {String}
 */
function removeInlineStyles($element) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }
  if ($element.attr('style') !== undefined) {
    $element.attr('style', function (j, style) {
      var regex = new RegExp('(' + params.join('|') + ')\s?:\s?[^;]+;?', 'g');
      return style.replace(regex, '');
      // return style.replace(/(display|height)\s?:\s?[^;]+;?/g, '');
    });
  }
}

},{}],4:[function(require,module,exports){
"use strict";

require("../blocks/plugin-name/plugin-name");

},{"../blocks/plugin-name/plugin-name":1}]},{},[4]);
