$(document).ready(function(){
    var token = getCookie('token')
    if(token){

    
      $.ajax({
        method: "GET",
        url: "api/users",
        headers:
            {
                'Authorization': token
            }
      })
      .done(function( response ) {
          if(response.auth){
            response.data.forEach(element => {
                $("#results").append(`<div class="row"><div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text"><img src='${element.avatar}'></p>
  </div>
</div></div>`)
                    
            });
        }else{
            document.write("you are not authorized to be here")
        }
        
      });
    }else{
        document.write("you are not authorized to be here")
    }

      function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
  
 
  
    
  })
  