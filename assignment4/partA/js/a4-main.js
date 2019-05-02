var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

/*******************************************************/
/* window.onload */
window.onload = function  () {
  loadTableWithFilters();
};

/*******************************************************/
/* loadTableWithFilters */ 
function loadTableWithFilters () {

  var myTable = document.getElementById("main-table-body");
  myTable.innerHTML = "";

  for (var i = 0; i < petData.length; i++) {
    if ((petData[i].type == filterType || filterType == "") 
       && (petData[i].age >= filterAgeMin) 
       && (petData[i].age <= filterAgeMax)) {
    
      // create a variables
      var image_src = petData[i].image.src;
      var image_alt = petData[i].image.alt;
      var image_width = petData[i].image.width;
      var image_height = petData[i].image.height;
      var name = petData[i].name;
      var age = petData[i].age;
      var description= petData[i].description;
      var type = petData[i].type;

      // create the tags for the td1
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var img = document.createElement("img");
      var td2 = document.createElement("td");

      // assign atributes to the image tag
      img.setAttribute("src", image_src); 
      img.setAttribute("alt", image_alt);
      img.setAttribute("width", image_width);
      img.setAttribute("height", image_height);

      //create the tags for the td2
      var h4 = document.createElement("h4");
      var parag = document.createElement("p");
      var span = document.createElement("span");

      //content for td2 tags
      parag.innerHTML = description;
      var hcontent = document.createTextNode(name);
      var scontent = document.createTextNode("Age : " + age + " years old");

      //appending child tags
      h4.appendChild(hcontent);
      span.appendChild(scontent);

      //appending img and td1 into row
      td1.appendChild(img);
      tr.appendChild(td1);

      //appending desc, paragraph, header into td2
      td2.appendChild(h4);
      td2.appendChild(parag);
      td2.appendChild(span);
      tr.appendChild(td2);

      //append all content into table body
      myTable.appendChild(tr);
    }
  }
}

/*******************************************************/
/* Dog */
function filterDog() {
  filterType = "dog";
  loadTableWithFilters();
}

/*******************************************************/
/* Cat */ 
function filterCat() {
   filterType = "cat";
   loadTableWithFilters();
}

/*******************************************************/
/* Bird */ 
function filterBird() {
   filterType = "bird";
   loadTableWithFilters();
}

/*******************************************************/
/* Age: 0-1*/
function filter_zero_1() {
   filterAgeMin = 0;
   filterAgeMax = 1;
   loadTableWithFilters();
}

/*******************************************************/
/* Age: 1-3*/
function filter_1_3() {
   filterAgeMin = 1;
   filterAgeMax = 3;
   loadTableWithFilters();
}

/*******************************************************/
/* Age: 4+ */
function filter_4_plus() {
   filterAgeMin = 4;
   filterAgeMax = Number.MAX_VALUE;
   loadTableWithFilters();
}

/*******************************************************/
/* All Pets */
function filterAllPets() {
   filterType = "";
   filterAgeMin = 0;
   filterAgeMax = Number.MAX_VALUE;
   loadTableWithFilters();
}
