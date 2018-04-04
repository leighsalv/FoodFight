(function(window) {
  "use strict";
  // Auth should be done in the backend, but it isn't. There, check if user
  // is authed to dpd, if so, allow. If not, redirect to login
  var dpd = window.dpd;
  dpd.users.me(function(result, error) {
    if (! result) {
     window.location.href = 'index.html';
    }
  });
})(window);
