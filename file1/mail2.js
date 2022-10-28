var result = JSON.parse(localStorage.getItem("info"))
var inp7 = document.querySelector(".inp7")
var inp8 = document.querySelector(".inp8")
var btn2 = document.querySelector(".btn2")

btn2.addEventListener("click",function(){
    if(inp7.value == result.email && inp8.value == result.pass){
       alert("Nice Well Done")
    }else{
        alert("there is some error please go back and check")
    }
})
