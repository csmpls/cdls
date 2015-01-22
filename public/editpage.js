var doneTypingTimeout;
var editor = new Editor();
editor.render();

window.onkeydown=function() {
  $('#saveStatus').html('unsaved changes')
  window.clearTimeout(doneTypingTimeout);
  doneTypingTimeout = window.setTimeout( function() {
    saveContent(),
  }, 1000);
}

function saveContent() {
  $('#saveStatus').html('saved');
}

function postContent() {
  var content = editor.codemirror.getValue();
  $('.content').html(content);
  $('postSubmissionForm').submit();
}

