$(document).ready(function(){
  console.log($(location).attr('search'))
  
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

