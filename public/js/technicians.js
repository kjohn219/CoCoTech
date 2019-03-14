// kickoff with technician html invoke from redirect end of app.js -- which passes expected DL name in the redirect url "group=@******DL*****"
$(document).ready(function(){
  console.log('start');
  console.log($(location).attr('search'));
  console.log('end');
  let bucket = localStorage.getItem("emailGroup")
  console.log(bucket);
  // let emailGroup = $(location).attr('search');
  // emailGroup = emailGroup.slice(emailGroup.indexOf('=')+1);
  //console.log(emailGroup);
  // $.get('/api/technicians?group=VPN',function(results){
    $.get('/api/technicians'+$(location).attr('search') ,function(results){
    for(var i = 0;i<results.length;i++){
    $(".table-body").append('<tr><th scope="col">'+results[i].SSO+'</th><th scope="col">'+results[i].NAME+'</th><th scope="col">'+results[i].GROUP_NAME+'</th><th scope="col">'+results[i].STATUS+'</th></tr>')
    }
  })
})

//http://localhost:8080/technicians?group=vpn
//http://localhost:8080/technicians?group=outlook
//http://localhost:8080/technicians?group=dns

// $.get('/api/technicians?status=ACTIVE',function(results){
//   $.get('/api/technicians'+$(location).attr('search') ,function(results){
//   for(var i = 0;i<results.length;i++){
//     count += results[i].innerHTML.split(' ').length;
//   }
//   document.write("Number of words: "+count);
// })
// })
//   countWords()

