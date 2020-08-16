// STORING DATA
var chris = {name: "Chris Luhrman", grade: "101%", age: 24, program: "Year Up - Puget Sound"}
var kerkphon = {name: "Kerkphon Ketboonsai", grade: "21%", age: 22, program: "Year Up - Puget Sound"}
var hussein = {name: "Hussein Sheikh", grade: "85.7%", age: 20, program: "Year Up - Puget Sound"}
var pierre = {name: "Pierre Nguyen", grade: "52.9%", age: 23, program: "Year Up - Puget Sound"}

chrisJSON = JSON.stringify(chris);
kerkphonJSON = JSON.stringify(kerkphon);
husseinJSON = JSON.stringify(hussein);
pierreJSON = JSON.stringify(pierre);

localStorage.setItem("chrisJSON", chrisJSON);
localStorage.setItem("kerkphonJSON", kerkphonJSON);
localStorage.setItem("husseinJSON", husseinJSON);
localStorage.setItem("pierreJSON", pierreJSON);

// RETRIEVING DATA
var chrisText = localStorage.getItem("chrisJSON");
var kerkphonText = localStorage.getItem("kerkphonJSON");
var husseinText = localStorage.getItem("husseinJSON");
var pierreText = localStorage.getItem("pierreJSON");

var chrisObj = JSON.parse(chrisText);
var kerkphonObj = JSON.parse(kerkphonText);
var husseinObj = JSON.parse(husseinText);
var pierreObj = JSON.parse(pierreText);

// jQuery Chris
$("#chris").click(function(){
  $("#name").html(chrisObj.name);
  $("#grade").html(chrisObj.grade);
  $("#age").html(chrisObj.age);
  $("#prog").html(chrisObj.program);
})
// jQuery Kerkphon
$("#kerkphon").click(function(){
  $("#name").html(kerkphonObj.name);
  $("#grade").html(kerkphonObj.grade);
  $("#age").html(kerkphonObj.age);
  $("#prog").html(kerkphonObj.program);
})
// jQuery Hussein
$("#hussein").click(function(){
  $("#name").html(husseinObj.name);
  $("#grade").html(husseinObj.grade);
  $("#age").html(husseinObj.age);
  $("#prog").html(husseinObj.program);
})
// jQuery Pierre
$("#pierre").click(function(){
  $("#name").html(pierreObj.name);
  $("#grade").html(pierreObj.grade);
  $("#age").html(pierreObj.age);
  $("#prog").html(pierreObj.program);
})