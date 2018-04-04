(function(window) {
  "use strict";

  var App = window.App;
  var LoadMainContent = App.LoadMainContent;

  var mainContent = new LoadMainContent();

  mainContent.mainContentLoader();
  mainContent.addClickHandler();

})(window);
