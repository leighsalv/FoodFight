(function (window) {
  'use strict';
  var dpd = window.dpd;
  var $ = window.jQuery;
  var SELECTOR = '[data-login="signup-form"]';
  var logout_button = $(SELECTOR);
  var signup_error = $('.signup-error-message');
  logout_button.on('submit', function(event) {
    event.preventDefault();
    var data = {};
    $(this).serializeArray().forEach(function (item) {
      data[item.name] = item.value;
    });

    dpd.users.get({'username': data['username']}, function(results, error) {
      if (results.length != 0) {
        signup_error.empty().append('Username already taken').show();
      } else {
        if(data['password'] != data['password2']) {
          signup_error.empty().append('Passwords do not match').show();
        } else {
          dpd.users.post(data, function(result, error) {
            if (result) {
              signup_error.empty().hide();
              var $dialog = $('<div></div>');
              var modalText = 'User creation successful. You may now login.';
              var $msg = $('<p></p>').text(modalText);
              $dialog.append($msg);
              $dialog.modal();
            } else {
              signup_error.empty().append('Failed to create new user').show();
            }
          });
        }
      }
    });
  });
})(window);
