// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

var text = "";
window.onload = function() {
var myFruitList = document.querySelector("#l1");
    for (var i = 0; i < fruits.length; i++){
    text += "<li>" + fruits[i] + "</li>"
    }
myFruitList.innerHTML = text;

var myFileList = document.querySelector ("#u1");
var text1 = "";

for (var i = 0; i < directory.length; i++){
    if (directory[i].type == "file"){
        text1 += "<li>" + directory[i].name + "</li>";
    }
    else if (directory[i].type == "directory"){
        text1 += "<li>" + directory[i].name +"<ul>";
        
        for (var j = 0; j < directory[i].files.length; j++){
            text1 += "<li>" + directory[i].files[j].name + "</li>";
        } 
        
        text1 += "</ul>" + "</li>";
    }
}
myFileList.innerHTML = text1;
}