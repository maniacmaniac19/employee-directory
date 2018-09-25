
// Print out list of Employess to content, verification answer - subfunction
const render = function (content) {
    $("#content").html(content);
  }


  //clear out view to enable button usage
  const initView = function(){
    $(".form").hide;
    $("#content").empty();
  }
//setup initial view to clear any content
initView();


//declaring view, merely printing employeeList into cards
const view = function(){
      let employees = "";
    for(i = 0; i < employeeList.length; i++){
        employees = $(".content").append(`<div class = card><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</div>`);
    }
    render(employees);  
}
//calling view to print out list - doesn"t work
$("#view").on("click",view());

// $("#view").on("click", view);

//declaring addView, will add form in and button to run add function
const addView = function(){
    $(".form").show();
    $(".form").append(`<input id = "name" placeholder="Name">
    <input id = "office" placeholder="Office Number">
    <input id = "phone" placeholder="Phone Number">
    <button id= "addButton">Submit</button> `);
    $("#content").empty();
}

//declaring add, adding values from form and pushing it into array
const add = function(){
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
//Click on Add to switch to add view, 3 part form with no content
$("#add").on("click", addView());

//Run add function when Submit button on add form is clicked
$("#addButton").on("click", add())

//Declare verify view, 1 box for name and submit button
const verifyView = function(){
    $(".form").show();
    $(".form").append(`input id = "verifyinput" placeholder="Verify Employee">
    <button id = "verifybutton"Submit</button>`)
    $(".content").empty();
}
//Declare verify function, checks for name in array
const verify = function(){
    const userName = $("#verifyinput").val();
    let answer = ""
    for (let i = 0; i < employeeList.length; i++) {
      if (employeeList[i].name === userName) {
        answer = "Yes they are currently an employee";
      }else {
          answer = "Please see HR."
      }
    }
    render(answer);
  }
// Sets up verify view
  $("#verify").on("click", verifyView())
// runs verify function
  $("#verifybutton").on("click",verify())

  //Declare update view 3 boxes and button
  const updateView = function(){
      $(".form").show();
      $(".form").append(`input id = "updatename" placeholder="Name">
      <input id = "updateoffice" placeholder="Office Number">
      <input id = "updatephone" placeholder="Phone Number">
      <button id= "updateButton">Submit</button> `);
  }
// Update function to grab input from boxes and return the employeeList
  const update = function(){
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

// Sets up update view
$("#update").on("click", updateView())
// runs update function
  $("#updatebutton").on("click",update())

// Declare deleteView to show form and empty content
const deleteView = function(){
    $(".form").show();
    $(".form").append(`input id = "deleteinput" placeholder="Delete Employee">
    <button id = "deletebutton"Submit</button>`)
    $(".content").empty();

}

//Delete function to match input and remove name from array
const del = function(){
    const deleteName = $("#deleteinput").val();
    for (let i = 0; i < employeeList.length; i++) {
      if (employeeList[i].name === deleteName) {
        employeeList.splice(i, 1);
      }
    }
    render();
  }

// Sets up update view
$("#delete").on("click", deleteView())
// runs update function
  $("#deletebutton").on("click",del())