// var cars = ["Saab", "Volvo", "BMW"];
// document.getElementById("demo").innerHTML = cars;

// document.addEventListener("click")

//    $("list").innerText = employeeList[i].name;

// const render = function(){
//     let list = ""
//     for(i = 0; i <employeeList.length; i++){
//     console.log(employeeList[i]);
//     // document.write(employeeList[i]);
//     $().html(`<p>${employeeList[i].name}</p>`);
//         list+= employeeList[i].name;
//     }
//     render(list);
// }

let view = function(content){
    $(content).empty();
    for(i = 0; i < employeeList.length; i++){
        console.log(employeeList[i]);
        // document.write(`<div class = card-body><p class= card text> ${employeeList[i].name}</p><p class=card-text> ${employeeList[i].officeNum}</p><p class=card text> ${employeeList[i].phoneNum}</p></div>`);
        // $(content).append(`<div class = card><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</div>`);
    }
}

$('#view').on('click', view('.content'));
