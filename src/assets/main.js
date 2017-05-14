$(function() {

  // your code will go here
$.ajax("https://www.codeschool.com/users/ofirhartuv.json", {
 dataType : 'jsonp',
 success: function(response){
   let courses = response.courses.completed;
   console.log(courses);
   $.each(courses,function(index,course){
      let newDiv = `<div class="course">
        <h3>${course.title}</h3>
        <img src="${course.badge}"></img>
        <a href="${course.url}" target="_blank">See Course</a>
       </div>`;

        $('#badges').append($(newDiv));
   });

 }

})
});
