(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;
  var dpd = window.dpd;
  var LoginHandler = App.LoginHandler
  var LOGIN_SELECTOR = '[data-login="form"]';
  var ERROR_MESSAGE_SELECTOR = '.error-message';

  dpd.users.me(function(result, error) {
    if (result) {
      // Currenlty logged in
      console.log(result);
      window.location.href = 'all_tasks.html';
    }
  });

  var login = new LoginHandler(LOGIN_SELECTOR);
  login.addSubmitHandler(function(data){
    dpd.users.login({ username: data['username'],
      password: data['password']
    }, function(result, error) {
      if (error) {
        var e_selector = $(ERROR_MESSAGE_SELECTOR);
        e_selector.text(error.message);
        e_selector.show();
      } else {
        window.location.href = 'all_tasks.html';
      }
    });
  });

})(window);
