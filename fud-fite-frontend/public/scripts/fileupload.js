var files = [];
var $ = window.jQuery;

var uploadFiles = function() {

  var fd = new FormData()
  for (var i in files) {
    fd.append("uploadedFile", files[i]);
  }
  dpd.users.me(function(results) {
    var category = $("#category :selected").val();
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:2403/picturedata" + "?userID=" + results.id + "&username=" + results.username+ "&email=" + results.email + "&category=" + category);
    xhr.onload = function() {
      var response = JSON.parse(this.responseText);
      if (this.status < 300) {
        $("#upload-area").append("<p>Upload successful!</p>");
      } else {
        alert(response.message);
      }
    };
    xhr.onerror = function(err) {
      alert("Error: ", err);
    };
    xhr.send(fd);
  });
};

var setFiles = function(element) {
  files = [];
  for (var i = 0; i < element.files.length; i++) {
    files.push(element.files[i]);
  }
};
