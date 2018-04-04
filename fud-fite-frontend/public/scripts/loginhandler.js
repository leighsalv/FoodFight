(function (window) {
  'use strict';
  var App = window.App || {};
  var dpd = window.dpd;
  var $ = window.jQuery;
  function LoginHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  LoginHandler.prototype.addSubmitHandler = function (fn) {
    this.$formElement.on('submit', function (event) {
      event.preventDefault();
      var data = {};
      $(this).serializeArray().forEach(function (item) {
        data[item.name] = item.value;
      });
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };

  App.LoginHandler = LoginHandler;
  window.App = App;
})(window);
