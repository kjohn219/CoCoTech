$(document).ready(function(){
    $("#submit").on("click", function(evt){
      evt.preventDefault();
      $.ajax({
        method: "POST",
        url: "api/login",
        data:{
          username: $("#exampleInpuSSO1").val().trim(),
          password: $("#exampleInputPassword1").val().trim()
        },
        dataType: "json"
      })
      .done(function( response ) {
        console.log('logon success');
        if(response.auth){
          window.location+=response.redirect;
        }
      })
      .fail(function(err,response){
     console.log('login fail')
          // $("#errMsg").show(500);
      alert('Logon Failed');  
        
      }) .always(function(){ console.log('always')});
  
    });
  
    
  })