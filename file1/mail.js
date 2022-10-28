var inp1 = document.querySelector(".inp1")
var inp2 = document.querySelector(".inp2")
var inp3 = document.querySelector(".inp3")
var inp4 = document.querySelector(".inp4")
var inp5 = document.querySelector(".inp5")
var inp6_values = [];
var login = document.querySelector(".myatag1")
var btn1 = document.querySelector(".btn1")
var spani = document.querySelector(".spani")
var eight = 8
var counter = 0

var result = JSON.parse(localStorage.getItem("info")) || []


class Mail {
   constructor(fname,lname,email,pass,passconfirm){
      this.fname = fname,
      this.lname = lname,
      this.email = email,
      this.pass = pass,
      this.passcondom = passconfirm
   }
}
btn1.addEventListener("click",function(){
   var obj = new Mail(inp1.value,inp2.value,inp3.value,inp4.value,inp5.value,chkPref)
   var gg = inp4.value.split("")
   for(i = 0; i < gg.length; i++){
      if(gg[i] === gg[i].toUpperCase()){
         counter++
         if(counter >= 1 && gg.length >= eight){
            var gio = gg.join("")
            if(inp5.value == gio){ 
            }else{
               spani.innerHTML = "ERROR"
            }
         }
      }
      if(inp1.value == "" && inp2.value == "" && inp1.value == "" && inp4.value == "" && inp5.value == "" ){
         console.log("fill the gaps")
      }
   }
   if(inp3.value === result.email){
      alert("Email is already used")
   }
   console.log(obj)
   localStorage.setItem("info", JSON.stringify(obj))
})

function changeCheckbox(keyCode) {
   const spacebarKeyCode = 32;
   const item = document.getElementById("chkPref");
   const checked = item.getAttribute("aria-checked");
 
   if (keyCode && keyCode !== spacebarKeyCode) {
     return;
   } else if (checked === "true") {
     item.setAttribute("aria-checked", "false");
     console.log("unchecked")
   } else {
     item.setAttribute("aria-checked", "true");
     console.log("checked")
   }
 }