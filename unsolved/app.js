//declaring view, merely printing employeeList into cards
const view = function(event) {
  event.preventDefault();
  $('.content').empty();
  let employees = "";
  for (i = 0; i < employeeList.length; i++) {
   employees = $(".content").append(`<div class = card><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</div>`);
  }
  $(".content").append(`<div class = card><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</div>`);
 }
 
 //declaring addView, will add form in and button to run add function
 const addView = function(event) {
  event.preventDefault();
  $(".form").empty();
  $('.submitbutton').empty();
  $(".form").show();
  $(".form").append(`<input id = "name" placeholder="Name">
     <input id = "office" placeholder="Office Number">
     <input id = "phone" placeholder="Phone Number">`);
  $('.submitbutton').append(`<button id = "verifybutton">Submit</button>`)
  $("#content").empty();
 }
 
 //declaring add, adding values from form and pushing it into array
 const add = function(event) {
  event.preventDefault();
  const nameVal = $("#name").val();
  const officeVal = $("#office").val();
  const phoneVal = $("#phone").val();
  employeeList.push({
   name: nameVal,
   officeNum: officeVal,
   phoneNum: phoneVal
  })
  render();
 }
 
 //Declare verify view, 1 box for name and submit button
 const verifyView = function(event) {
  event.preventDefault();
  $(".form").empty();
  $('.submitbutton').empty();
  $(".form").show();
  $(".form").append(`<input id = 'verifyinput' placeholder="Verify Employee">`)
  $('.submitbutton').append(`<button id = "verifybutton">Submit</button>`)
  $(".content").empty();
 }
 //Declare verify function, checks for name in array
 const verify = function(event) {
  event.preventDefault();
  const userName = $("#verifyinput").val();
  let answer = ""
  for (let i = 0; i < employeeList.length; i++) {
   if (employeeList[i].name === userName) {
    answer = "Yes, they are currently an employee.";
    return $(".content").text(answer);
   }
  }
  return $(".content").text("Please see HR.");
 }
 
 //Declare update view 3 boxes and button
 const updateView = function(event) {
  event.preventDefault();
  $(".form").empty();
  $('.submitbutton').empty();
  $(".form").show();
  $(".form").append(`<input id = "updatename" placeholder="Name">
       <input id = "updateoffice" placeholder="Office Number">
       <input id = "updatephone" placeholder="Phone Number">`);
  $('.submitbutton').append(`<button id = "updatebutton">Submit</button>`)
 }
 
 // Update function to grab input from boxes and return the employeeList
 const update = function(event) {
  event.preventDefault();
  const userName = $("#updatename").val();
  const officeNum = $("#updateoffice").val();
  const phoneNum = $("#updatephone").val();
  for (let i = 0; i < employeeList.length; i++) {
   if (employeeList[i].name === userName) {
    employeeList[i].officeNum = officeNum;
    employeeList[i].phoneNum = phoneNum;
   }
  }
  render();
 }
 
 // Declare deleteView to show form and empty content
 const deleteView = function(event) {
  event.preventDefault();
  $(".form").empty();
  $('.submitbutton').empty();
  $(".form").show();
  $(".form").append(`<input id = "deleteinput" placeholder="Delete Employee">`)
  $('.submitbutton').append(`<button id = "updatebutton">Submit</button>`)
  $(".content").empty();
 }
 
 //Delete function to match input and remove name from array
 const del = function(event) {
  event.preventDefault();
  const deleteName = $("#deleteinput").val();
  for (let i = 0; i < employeeList.length; i++) {
   if (employeeList[i].name === deleteName) {
    employeeList.splice(i, 1);
   }
  }
  render()
 }
 
 // Print out list of Employess to content, verification answer - subfunction
 const render = function() {
  $('.content').empty();
  let employees = "";
  for (i = 0; i < employeeList.length; i++) {
   employees = $(".content").append(`<div class = card><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</div>`);
  }
 }
 
 //calling view to print out list - doesn"t work
 $("#view").on("click", view);
 
 //Click on Add to switch to add view, 3 part form with no content
 $("#add").on("click", addView);
 
 //Run add function when Submit button on add form is clicked
 $(".submitbutton").on("click", add);
 
 // Sets up verify view
 $("#verify").on("click", verifyView);
 
 // runs verify function
 $('.submitbutton').on("click", verify);
 
 // Sets up update view
 $("#update").on("click", updateView);
 
 // runs update function
 $(".submitbutton").on("click", update);
 
 // Sets up delete view
 $("#delete").on("click", deleteView);
 // runs delete function
 $(".submitbutton").on("click", del);