console.log('this is the right js file');



$(document).ready(function() {
// add event listeners to page

// delete post when the X is clicked


// get input from the title and textarea
  $('#submit-button').on('click',function(){
     title = $('#new-post-title').eq(0).val();
     post = $('#new-post').eq(0).val();
     $('#all-posts').prepend('<div class="col-sm-8 col-sm-offset-2"><div class="thumbnail">'
                             + '<div class="caption"><button type="button" name="button" class="btn btn-xs pull-right delete">'
                             + '<span class="glyphicon glyphicon-remove"></span></button>'
                             + '<h3> ' + title + '</h3>' + '<p>' + post + '</p></div></div></div>');
     $('#new-post-title').eq(0).val('');
     $('#new-post').eq(0).val('');
     $('.delete').on('click', function(){
       $(this).parents()[2].remove();
       console.log($(this));
     });
  });
});
// append html onto page

$('.delete').on('click', function(){
  $(this).parents()[2].remove();
  console.log($(this));
});
