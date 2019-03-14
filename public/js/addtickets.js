$("#add-btn").on("click", function (event) {
    event.preventDefault();
    var newCase = {
      sso: $("#SSO").val().trim(),
      phone: $("#phone").val().trim(),
      typex: $("#typex").val(),
      description: $("#description").val().trim()
    };
  
    // data integrity check
  
    if (!/^[0-9A-Za-z\s\-]+$/.test(newCase.title)) {
      return alert("invalid character in SSO field.  Upper and lower case letters and numbers please.")
    }
    if (!/^[0-9A-Za-z\s\-]+$/.test(newCase.description)) {
      return alert("invalid character in Description field.  Upper and lower case letters and numbers please.")
    }

    $.post("/api/new", newCase)
      .then(function (data) {
        console.log(data);
        alert("Adding a Case now, our Tech Support will contact you shortly!");
      });
    $("#SSO").val("");
    $("#phone").val("");
    $("#description").val("");
    $("#typeid").val("");
  });
  
  var addResults = '<a class="btn btn-primary btn-md" role="button" id="add-btn"><span class="fa fa-fire"></span> Submit a Case</a>';
  $("#add-section").html(addResults);
  