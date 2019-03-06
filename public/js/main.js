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
        if(response.auth){
          window.location+=response.redirect;
        }
      })
      .fail(function(err,response){
     
          $("#errMsg").show();
        
        
      })
  
    });
  
    
  })