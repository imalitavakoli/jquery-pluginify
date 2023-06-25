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
export function toBoolean(param, checkString = false, returnVarIfNotSupported = false) {
  if (typeof param == 'boolean') return param;

  if (typeof param == 'number' && param > 0) return true;

  if (typeof param == 'string') {
    if (checkString) {
      if (param.toUpperCase() === 'TRUE' || param.toUpperCase() === 'ON' || param.toUpperCase() === 'YES' || param === '1') return true;
    } else {
      return true;
    }
  }

  if (returnVarIfNotSupported) return param;
  else return false;
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
export function inlineStyleValue($element, param) {
  let styles = $element.attr('style'),
  value;

  if (styles !== undefined) {
    styles.split(';').forEach((e) => {
      let style = e.split(':');

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
export function removeInlineStyles($element, ...params) {
  if ($element.attr('style') !== undefined) {
    $element.attr('style', function(j, style)
    {
      let regex = new RegExp('(' + params.join('|') + ')\s?:\s?[^;]+;?', 'g');
      return style.replace(regex, '');
      // return style.replace(/(display|height)\s?:\s?[^;]+;?/g, '');
    });
  }
}
