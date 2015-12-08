Parse.initialize("N8XfwKZnBHwZRKSREAxaCTQM3gXbIGSUDQgMJ8jT", "rXF9Ekvm9KUoAT0A69qRp2NRlXZf1xN2aREhVrX9");

var postHtml = '<div class="col-sm-8 col-sm-offset-2"><div class="thumbnail">'
             + '<div class="caption"><button type="button" name="button" class="btn btn-xs pull-right delete">'
             + '<span class="glyphicon glyphicon-remove"></span></button>'
             + '<h3> '
var D = new Date();

var Post = Parse.Object.extend("post");
var post = new Post();

// post.set("title", 1337);
// post.set("content", "Sean Plott");
// gameScore.set("cheatMode", false);



$(document).ready(function() {
// add event listeners to page

// delete post when the X is clicked
  $('.delete').on('click', function(){
    $(this).parents()[2].remove();
  });

  // get input from the title vals and textarea
  $('#submit-button').on('click',function(){
     $title = $('#new-post-title').eq(0).val();
     $content = $('#new-post').eq(0).val();

     post.save({content: $content , title : $title}, {
       success: function(post) {
         console.log(post)
        $('#all-posts').prepend( postHtml + $title + '</h3>' + '<p>' + $content + '</p>' + dHtml + '</div></div></div>');
        var post = new Post();
       },
       error: function(post, error) {
         // Execute any logic that should take place if the save fails.
         // error is a Parse.Error with an error code and message.
         alert('Failed to create new object, with error code: ' + error.message);
       }
     });
     dHtml = '<p><small><i>Written on ' + D.toLocaleDateString();
     // prepend html into post list

     //clear forms
     $('#new-post-title').eq(0).val('');
     $('#new-post').eq(0).val('');
     //apply the event handler to the newly created element
     $('.delete').on('click', function(){
       $(this).parents()[2].remove();
     });
  });
});
