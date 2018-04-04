(function (window) {
  'use strict';
  var dpd = window.dpd;
  var $ = window.jQuery;
  var LOGOUT_SELECTOR = '[data-logout="button"]';
  var logout_button = $(LOGOUT_SELECTOR);
  logout_button.on('click', function(event) {
    event.preventDefault();
    dpd.users.logout(function(result, error) {
      if (result) {
        // logout success
        console.log(result);
        window.location.href = 'index.html';
      }
    });
  });
})(window);
