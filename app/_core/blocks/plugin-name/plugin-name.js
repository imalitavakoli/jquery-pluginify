import pluginify      from '../pluginify';
import * as utils     from '../utils/utils';

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
class PluginName {

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Properties

  _properties(element, options) {
    this.$element                            = $(element);
    this.options                             = this._getOptions(options);
  }




  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Constructor

  constructor(element, options) {
    this._properties(element, options);
  }




  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Static constant

  static get DEFAULTS() {
    return {
      jpDisabledClass:                         'jp-plugin-name--state-disabled',
      jpDisabled:                              false,
    }
  }




  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Private functions

  _getOptions(options) {
    // The following options should be boolean. Now if the user mentions them
    // via data API without specifying their value, then they will be string, so
    // we check that if they are string, let's convert them into boolean.
    options.jpDisabled =                                utils.toBoolean(options.jpDisabled);

    return options;
  }


  _dispatchEvent(status) {
    this.$element.trigger($.Event('statusChanged.gppluginname'), {status: status});
  }




  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Methods

  toggleDisability() {
    if (this.$element.hasClass(this.options.jpDisabledClass)) {
      this.$element.removeClass(this.options.jpDisabledClass);
      this._dispatchEvent('enabled');
    }else {
      this.$element.addClass(this.options.jpDisabledClass);
      this._dispatchEvent('disabled');
    }
  }


  destroy(keepCssStyles = false) {
    // Remove all probable added styles from any element
    if (!keepCssStyles) {
      this.$element.removeClass(this.options.jpDisabledClass);
    }

    // Null all saved variables
    this.$element                            = undefined;
    this.options                             = undefined;
  }

}




// Create our jQuery plugin
pluginify('gppluginname', PluginName);

// If there's no initializeJPBlocksManually variable which is true, then run the
// plugin for all the blocks in the page
if (typeof window.initializeJPBlocksManually !== 'boolean' || window.initializeJPBlocksManually === false) {
  jQuery(document).ready( $ => {
    $('.jp-plugin-name').gppluginname();
  });
}
