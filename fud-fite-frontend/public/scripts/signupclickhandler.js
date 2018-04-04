(function (window) {
  'use strict';
  var App = window.App || {};
  var dpd = window.dpd;
  var $ = window.jQuery;
  var SELECTOR = '[data-login="singupclick"]';
  var signup = $(SELECTOR);
  signup.on('click', function (event) {
    event.preventDefault();
    var $form = $('<form></form>');
    var modalText = 'Thank you for your payment, ' + payment.title + ' ' + payment.username + '';
    var $msg = $('<p></p>').text(modalText);
    $dialog.append($msg);
    $dialog.modal();
  });

  SignUpClickHandler.prototype.addSubmitHandler = function (fn) {
    this.$formElement.on('click', function (event) {
      event.preventDefault();
      var data = {};
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };

  App.LoginHandler = LoginHandler;
  window.App = App;
})(window);
