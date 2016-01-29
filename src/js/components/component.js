var jQuery = require('jquery');

class Component {

  static init() {
    jQuery(this.selector).each((i, element) => {
      new this(element, jQuery);
    });
  }
  
}

module.exports = Component;