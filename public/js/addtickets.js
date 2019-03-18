 let emailGroup = localStorage.getItem("emailGroup");
console.log(emailGroup);
$("#emailGroup").val(emailGroup);  //identified email group DL

$("#add-btn").on("click", function(event) {
    event.preventDefault();
    var newCase = {
      name: $("#name").val().trim(), // name of person to be contacted -- may not be caller
      phone: $("#phone").val().trim(), // phone # of person to be contacted
      contactEmail: $("#contactEmail").val(),  //email id of person to be contacted
      description: $("#description").val().trim() // text blob description of issue and incident
    };

  
    if (!/^[0-9A-Za-z\s\-]+$/.test(newCase.title)) {
      return alert("invalid character in SSO field.  Upper and lower case letters and numbers please.");
    }
    if (!/^[0-9A-Za-z\s\-]+$/.test(newCase.description)) {
      return alert("invalid character in Description field.  Upper and lower case letters and numbers please.");
    }
// generate alert 
let ticketNumber = Math.floor((Math.random() * 10000) + 1);
  

alert(`Your new case is INC ${ticketNumber} and someone from our Technical Support team will contact you shortly!    Thankyou for using CoCoTech - Your Support Accelerator`);




    // $.post("/api/new", newCase)
    //   .then(function (data) {
    //     console.log(data);
    //     alert("Adding a Case now, our Tech Support will contact you shortly!");
    //   });
    $("#SSO").val("");
    $("#phone").val("");
    $("#description").val("");
    $("#typeid").val("");
  });
  
  var addResults = '<a class="btn btn-primary btn-md" role="button" id="add-btn"><span class="fa fa-fire"></span> Submit a Case</a>';
  $("#add-section").html(addResults);
  