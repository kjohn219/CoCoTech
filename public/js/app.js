console.log('app.js just fired');
//for dbStock to avoid conflict between the two methods/functions (not good, but being cautious)
let onHand;
// retreive the inventory and render it to the screen in #inStock html class
const renderDLInventory = function(dlList){
console.log("try to render table");
console.log(dlList);
onHand = dlList;
console.log(onHand);

    $(document).ready(function() {
      $('#inStock').DataTable( {

        data: dlList,    
          columns: [
              { data: "id" },
              { data: "dl_name" }             
          ]
      } );
    });
  };
  
 const retreiveDLInventory = function() {
   console.log('in retreive function, call api is next');
  $.get('/api/dlgroups').then(renderDLInventory);
}
console.log('go get dl list from DB');
retreiveDLInventory();


  let search
  //assign variable to the DL chosen with LET statement as we need in multiple features...............................TODO
  let newOne = [];
$("#inStock").on("click", function(){
  let bingo=this.innerText;
  console.log(bingo);
  newOne = bingo;
  console.log(newOne);
  // character 16 is item ID number so this works for 1-9 DL in tables, so using 16,17 is 0-99
  // the ID number becomes query for or agaisnt table to pull out actual DL name to add to variable for use globally
  //returned array is list of string characters (convert to sections if possible)
  //[item id dl name 6 @the dog ran away]  in this case character 16 is the number 6 (DL ID #6)
  let groupID = Number((newOne[16] + newOne[17]-1));
  console.log(onHand);
  console.log(groupID);
  
  search = onHand[groupID].dl_name;   ///////set search variable to = DL group located at ID made up of 16, 17  for 1-99 dl entries .......................  TODO
  console.log(search);
  localStorage.setItem("emailGroup", search);
  $(location).attr("href", `http://localhost:8250/technicians?group=${search}`);

});
localStorage.setItem("youruserID", "ABCD value of token - JWT physical");

//after adding code to hyperlink, need authorization validation JMT, display DL on top of section 3 page
//

// we can use as part of the SN emulation for ticket generation in seciotn 4 if needed -- 
//assign token to local storage - push into local storage, and pull out - then is global between all js where we can get at top of js file
// localStorage.setItem("youruserID", "ABCD value of token - JWT physical");  ///this is storing into localstorage yourUserID is the unique key id you want to reference
// localStorage.getItem("youruserID");