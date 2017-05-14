$(function() {

  // your code will go here
jQuery.ajax("https://www.codeschool.com/users/ofirhartuv.json", {
 dataType : 'jsonp',
 success: function(result){
   $.each(response.courses.completed,function(index,course){
      let newDiv = `<div class="course">
        <h3 title="${course}"></h3>
        <img src="${course.badge}"></img>
        <a href="${course.url}" target="_blank">See Course</a>
       </div>`;

        $('#badges').append($(newDiv));
   });

 }

})
});
