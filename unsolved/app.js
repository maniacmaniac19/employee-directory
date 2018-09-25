



  //clear out view to enable button usage
  const initView = function(){
    // $(".form").hide;
    // $("#content").empty();
  }
//setup initial view to clear any content
initView();


//declaring view, merely printing employeeList into cards
const view = function(event){
event.preventDefault();
      let employees = "";
    for(i = 0; i < employeeList.length; i++){
        employees = $(".content").append(`<div class = card><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</div>`);
    }
    $(".content").append(`<div class = card><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</div>`);
}


// $("#view").on("click", view);

//declaring addView, will add form in and button to run add function
const addView = function(event){
  event.preventDefault();
  $(".form").empty();
    $(".form").show();
    $(".form").append(`<input id = "name" placeholder="Name">
    <input id = "office" placeholder="Office Number">
    <input id = "phone" placeholder="Phone Number">
    <button id= "addButton">Submit</button> `);
    $("#content").empty();
}

//declaring add, adding values from form and pushing it into array
const add = function(event){
  event.preventDefault();
    const nameVal = $("#name").val();
    const officeVal = $("#office").val();
    const phoneVal = $("#phone").val();
    employeeList.push({
      name: nameVal,
      officeNum: officeVal,
      phoneNum: phoneVal
      
    })
    $(".content").append(`<div class = card><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</div>`);
    console.log(employeeList)
}


//Declare verify view, 1 box for name and submit button
const verifyView = function(event){
  event.preventDefault();
  $(".form").empty();
    $(".form").show();
    $(".form").append(`<input id = 'verifyinput' placeholder="Verify Employee">
    <button id = "verifybutton">Submit</button>`)
    $(".content").empty();
}
//Declare verify function, checks for name in array
const verify = function(event){
  event.preventDefault();
    const userName = $("#verifyinput").val();
    let answer = ""
    for (let i = 0; i < employeeList.length; i++) {
      if (employeeList[i].name === userName) {
        answer = "Yes they are currently an employee";
      }else {
          answer = "Please see HR."
      }
    }
  
    $(".content").text(answer)
  }


  //Declare update view 3 boxes and button
  const updateView = function(event){
    event.preventDefault();
    $(".form").empty();
      $(".form").show();
      $(".form").append(`<input id = "updatename" placeholder="Name">
      <input id = "updateoffice" placeholder="Office Number">
      <input id = "updatephone" placeholder="Phone Number">
      <button id= "updateButton">Submit</button> `);
  }
// Update function to grab input from boxes and return the employeeList
  const update = function(event){
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
    $(".content").append(`<div class = card><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</div>`);
  }



// Declare deleteView to show form and empty content
const deleteView = function(event){
  event.preventDefault();
  $(".form").empty();
    $(".form").show();
    $(".form").append(`<input id = "deleteinput" placeholder="Delete Employee">
    <button id = "deletebutton">Submit</button>`)
    $(".content").empty();

}

//Delete function to match input and remove name from array
const del = function(event){
  event.preventDefault();
    const deleteName = $("#deleteinput").val();
    for (let i = 0; i < employeeList.length; i++) {
      if (employeeList[i].name === deleteName) {
        employeeList.splice(i, 1);
        
      }
    }
    render()
    // $(".content").append(`<div class = card><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</div>`);
    // console.log(employeeList[i])
  }



  // Print out list of Employess to content, verification answer - subfunction
const render = function(content){

  $("#content").html(content);
}

//calling view to print out list - doesn"t work
$("#view").on("click",view);

//Click on Add to switch to add view, 3 part form with no content
$("#add").on("click", addView);

//Run add function when Submit button on add form is clicked
$(".form").on("click", add);

// Sets up verify view
$("#verify").on("click", verifyView)
// runs verify function
  $(".form").on("click",verify)

  // Sets up update view
$("#update").on("click", updateView)
// runs update function
  $(".form").on("click",update)

// Sets up delete view
$("#delete").on("click", deleteView)
// runs delete function
  $(".form").on("click",del)