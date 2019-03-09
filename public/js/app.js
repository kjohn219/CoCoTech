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



//assign variable to the DL chosen with LET statement as we need in multiple features...............................TODO
let newOne = [];
$("#inStock").on("click", function(){
  //onclick="Pass_Content_Of_Cell(this.innerText)"
  let bingo=this.innerText;
  console.log(bingo);
  // var tr = $(this).closest("tr");
  // var row = $("#inStock").DataTable().rows(tr);
  // console.log(tr);
  // console.log(row);
  console.log(`and his name was, ${bingo}`);
  newOne = bingo;
  console.log(newOne);
  // character 16 is item ID number so this works for 1-9 DL in tables, need to ajust length control fo rmore
  // the ID number becomes query for or agaisnt table to pull out actual DL name to add to variable for use globally
  //returned array is list of string characters (convert to sections if possible)
  //[item id dl name 6 @the dog ran away]  in this case character 16 is the number 6 (DL ID #6)
  let search = Number((newOne[16] + newOne[17]-1));
  console.log(onHand);
  console.log(search);
  
  let groupName = onHand[search].dl_name;   ///////set search variable to = DL group located at ID made up of 16, 17  for 1-99 dl entries .......................  TODO
  console.log(groupName);
  $('https://localhost:8250/login.html').click();
  //href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css
});

//next -- with DL  -- call table, get DL, assign to variable, move to hyperlink to section 3   (URL =====technicians.html)...........................TODO
//after adding code to hyperlink, need authorization validation JMT, display DL on top of section 3 page
//