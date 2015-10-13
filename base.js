console.log('this is the right js file');



$(document).ready(function() {
// add event listeners to page
  // $('#del').on('click', function(){
  //   console.log(this.parent());
  // });

// get input from the title and textarea
  $('#submit-button').on('click',function(){
     title = $('#new-post-title').eq(0).val();
     post = $('#new-post').eq(0).val();
     $('#all-posts').prepend('<div class="col-sm-8 col-sm-offset-2"><div class="thumbnail">'
                             + '<div class="caption"><button type="button" name="button" class="btn btn-xs pull-right" id="del">'
                             + '<span class="glyphicon glyphicon-remove"></span></button>'
                             + '<h3> ' + title + '</h3>' + '<p>' + post + '</p></div></div></div>');
  });
});
// append html onto page
// delete post when the X is clicked
