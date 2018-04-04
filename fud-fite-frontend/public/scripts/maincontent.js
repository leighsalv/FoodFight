(function(window) {
  "use strict";
  var App = window.App || {};

  var $ = window.jQuery;

  function LoadMainContent() {}

  LoadMainContent.prototype.mainContentLoader = function() {
    dpd.users.me(function(data) {
      var topElem = new addUserToTop(data);
      $("#content-area.content-area").prepend(topElem.$topElement);
    });

    dpd.picturedata.get(function(data, error) {
      if (error) {
        alert(error.message);
      } else {
        for (var i = data.length - 1; i >= 0; i--) {
          var rowElement = new addPicDom(data[i]);

          $(".user-content").append(rowElement.$element);
        }

        $(".reply").click(function() {
          getComments(this);
        });

      }

    });
  };

  LoadMainContent.prototype.addClickHandler = function () {

    $("#food-feed").click(function () {

      $(".widget-box.post").remove();

      dpd.picturedata.get(function(data, error) {
        if (error) {
          alert(error.message);
        } else {
          for (var i = data.length-1; i >= 0; i--) {
            var mainElement = new addPicDom(data[i]);

            $(".user-content").append(mainElement.$element);
          }

          $(".reply").click(function() {
            getComments(this);
          });

        }
      });
    });

    $("#my-foods").click(function () {

      $(".widget-box.post").remove();
      dpd.users.me(function(response) {
        dpd.picturedata.get({username: response.username}, function(data, error) {
          if (error) {
            alert(error.message);
          } else {
            for (var i = data.length-1; i >= 0; i--) {
              var mainElement = new addPicDom(data[i]);
              $(".user-content").append(mainElement.$element);
            }

            $(".reply").click(function() {
              getComments(this);
            });

          }
        });
      });
    });
  };

  function addUserToTop(data) {
    var $h3UserName = $("<h3></h3>", {
      "text": "Welcome to the FITE, " + data.username
    });

    var $divUserDetails = $("<div></div>", {
      "class": "user-details"
    });

    var $divProfileInfo = $("<div></div>", {
      "class": "profile-info"
    });

    var $sectionTopArea = $("<section></section>", {
      "id": "top-area"
    });

    $divUserDetails.append($h3UserName);
    $divProfileInfo.append($divUserDetails);
    $sectionTopArea.append($divProfileInfo);

    this.$topElement = $sectionTopArea;
  }

  function getComments(self) {
    var input="";
    var picId = self.id.toString() + "CID";
    input = document.getElementById(self.id).value;
    document.getElementById(self.id).value="";

    var dateTime = new Date();
    dpd.users.me(function(results) {
      dpd.comments.post({
        "text": input,
        "pictureId": self.id,
        "timestamp": dateTime,
        "username": results.username
      }, function(result, error) {
        if (error) {
          alert("Tis an error");
        } else {
          $("#" + picId).append("<div class=\"user-comment\"><div class=\"user-info\"><a>" + results.username + "</a><span class=\"time\">" + dateTime.toLocaleDateString() + " at " + dateTime.toLocaleTimeString() + "</div><div class=\"append-comment\">" + input + "</div>");
        }
      });
    });
  }

  function addPicDom(mainContentData) {
    var $divWidgetBox = $("<div></div>", {
      "class": "widget-box post"
    });

    var $divHead = $("<div></div>", {
      "class": "head"
    });

    var $divPostInfo = $("<div></div>", {
      "class": "post-info"
    });

    var $spanUsrInfo = $("<span></span>", {
      "class": "user-info"
    });

    var $aUsrName = $("<a></a>", {
      "href": "#",
      "text": mainContentData.username
    });

    var dateTime = new Date(mainContentData.creationDate);

    var $spanPostDate = $("<span></span>", {
      "class": "post-date",
      "text": dateTime.toLocaleDateString() + " at " + dateTime.toLocaleTimeString()
    });

    var $divBody = $("<div></div>", {
      "class": "body"
    });

    var $divPostImg = $("<div></div>", {
      "class": "post-img"
    });

    var $img = $("<img></img>", {
      src: "http://localhost:2403/uploads/" + mainContentData.filename,
      alt: "post"
    });

    var $spanCommentSpan = $("<span></span>", {
      "class": "comment-span"
    });

    var $iComment = $("<i></i>", {
      "class": "fa fa-comment",
      "aria-hidden": "true"
    });
    var $divPostComments = $("<div></div>", {
      "id": mainContentData.id + "CID",
      "class": "post-comments"
    });

    var $divPostForm = $("<div></div>", {
      "class": "post-form"
    });

    var $divFormInfo = $("<div></div>", {
      "class": "form-info"
    });

    var $inputCOMMENTCHUNK = $("<input></input>", {
      "id": mainContentData.id,
      "class": "input-comment",
      "type": "text",
      "placeholder": "Write a reply..",
      "name": "",
      "value": ""
    });

    var $divIcons = $("<div></div>", {
      "class": "icons"
    });

    var $iRep = $("<i></i>", {
      "class": "fa fa-reply reply",
      "aria-hidden": "true",
      "id": mainContentData.id
    });

    dpd.comments.get({
      pictureId: mainContentData.id
    }, function(results) {
      for(var i = 0; i < results.length; i++) {
        var $divUserComment = $("<div></div>", {
          "class": "user-comment",
        });

        var $divUserInfo = $("<div></div>", {
          "class": "user-info"
        });

        var $aUserName = $("<a></a>", {
          "text": results[i].username
        });

        var commentTime = new Date(results[i].timestamp);

        var $spanTime = $("<span></span>", {
          "class": "time",
          "text": commentTime.toLocaleDateString() + " at " + commentTime.toLocaleTimeString()
        });

        var $divAppendComment = $("<div></div>", {
          "class": "append-comment",
          "text": results[i].text
        });

        $divUserInfo.append($aUserName, $spanTime);
        $divUserComment.append($divUserInfo, $divAppendComment);
        $divPostComments.append($divUserComment);
      }
    });

    $divIcons.append($iRep);
    $divFormInfo.append($inputCOMMENTCHUNK, $divIcons);
    $divPostForm.append($divFormInfo);
    $spanCommentSpan.append($iComment);

    $divPostImg.append($img);
    $spanUsrInfo.append($aUsrName);
    $divPostInfo.append($spanUsrInfo, $spanPostDate);
    $divHead.append($divPostInfo);
    $divBody.append($divPostImg, $divPostComments, $divPostForm);
    $divWidgetBox.append($divHead, $divBody);

    this.$element = $divWidgetBox;
  }

  App.LoadMainContent = LoadMainContent;
  window.App = App;
})(window);
