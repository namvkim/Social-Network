// $(document).ready(function() {
//     $('[data-toggle="tooltip"]').tooltip();
// });


var i = 1;

   $("textarea").keyup(function(e) {
    if (e.keyCode == 13) {
     var html = $(this).val();
     var newHTML = "<div class='list_"+i+"'><p class='html_"+i+"'>"+html+"</p><div style='display: flex'><div class='delete'><a href='#' class='remove' number='"+i+"'>Xóa</a></div><div class='update' style='margin-left: 30px'><a href='#' class='edit' thutu='"+i+"'>Sửa</a></div><div class='like' style='margin-left: 30px'><a href='#' class='wlike'>Thích</a></div></div></div>";
     $("#list").append(newHTML);
     $(this).val("");

     i++;

    }

  })