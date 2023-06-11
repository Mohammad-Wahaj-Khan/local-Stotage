var h1Element = document.getElementById("h1Element")


function pageLoading(){
    console.log("page load")
    var getUserName = localStorage.getItem("username")
    if(!getUserName){
    var username = prompt("Enter your Name")
        localStorage.setItem("username" , username)
        h1Element.innerHTML = "Wellcome" + " " + username
    return
    }
    h1Element.innerHTML = "Wellcome" + " " + getUserName
    // localStorage.clear()
}



/* function SetLocalStorage(){

     var fullname = "Wahaj Khan"
     localStorage.setItem("fullname", fullname)
    //   localStorage.clear()
 }*/



/* function GetLocalStorage(){

    var getitem = localStorage.getItem("fullname")
     console.log(getitem)
     // localStorage.clear()
 } */


// function saveData(){

//     var saveName = "Wahaj Khan"
//     localStorage.setItem("saveName" , saveName)


// }
// function getData(){

//     console.log(localStorage.getItem("saveName"))    

// }


// String Number Boolean null undefined => Easily done by local storage

// function ourWholeDate(){
//     // Set Data
//     var fullname = "Muhammad Wahaj Khan"
//     var age = 17
//     var phoneNumber = "0331*******"
//     localStorage.setItem("fullname", fullname)
//     localStorage.setItem("age", age)
//     localStorage.setItem("phoneNumber", phoneNumber)
     
//     // getData

//     console.log(localStorage.getItem("fullname"))
//     console.log(localStorage.getItem("age"))
//     console.log(localStorage.getItem("phoneNumber"))

// }

// Array 

// Array save in string

var fruitArr = ["orange" , "Mango" , "apple"]
localStorage.setItem("fruitsArr", fruitArr)

// We want it save in Array form 
console.log(localStorage.getItem("fruitsArr"))
// You can see it save in string form We want it save in Array form 
// so we add JSON.stringify() on it 
// so,

// function setArray(){
//     var fruitArr = ["orange" , "Mango" , "apple"]
//     var stringify = JSON.stringify(fruitArr)
//     console.log(stringify)
//     localStorage.setItem("fruitsArr", stringify)
// }
// function getArray(){
//     var getArr = JSON.parse(localStorage.getItem("fruitsArr"))
//     console.log(getArr)
// }

// Done Array //

// objects

// var obj = {
//     name : "Wahaj",
//     age : 17,
//     pass : 22192
// }
// localStorage.setItem("obj" , obj)

// aap bolo ge ye kia hai [object Object]
// so it is by default obj same as array 
// now time to fix it using JSON.stringify() method

// function setObject(){
//     var obj = {
//         name : "Wahaj",
//         age : 17,
//         pass : 22192
//     }
//     var stringObj = JSON.stringify(obj)
//     localStorage.setItem("setObject", stringObj)
// }

// function getObject(){
//     var getObj = JSON.parse(localStorage.getItem("setObject"))
//     console.log(getObj)
// }

// getItem mai JSON.parse() lage ga in obj and arr
// setItem mai JSON.stringify() lage ga in obj and arr

// Object
// before = [object Object]    // After =  	{"name":"Wahaj","age":17,"pass":22192}


// Source Code link in description


// Allah hafiz