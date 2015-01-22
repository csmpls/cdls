var doneTypingTimeout;
var lastContentSent; 
var editor = new Editor();
editor.render();


$(document).ready( function () {

  lastContentSent = getEditorContent();
  
  window.onkeydown=function() {
    if (lastContentSent != getEditorContent()) {
      $('#saveStatus').html('unsaved changes')
      window.clearTimeout(doneTypingTimeout);
      doneTypingTimeout = window.setTimeout( function() {
        saveContent()
      }, 1000);
    }
  }
})

function saveContent() {
  var content = getEditorContent()
  $('#saveStatus').html('saving');
  $.ajax({
      type: 'POST'
      , url: $('#postSubmissionForm').attr('action')
      , dataType: 'json'
      , data: JSON.stringify({'content':content})
      , success: function(resp) {
        $('#saveStatus').html('saved');
        lastContentSent = content;
      }
   })
//  )
}

function postContent() {
  $('.content').html(getEditorContent());
  $('postSubmissionForm').submit();
}

function getEditorContent() {
  return editor.codemirror.getValue();
}

