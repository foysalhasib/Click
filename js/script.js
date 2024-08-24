let foysal = document.querySelector(".one")

let btn = document.querySelector(".btn")

let check = true

btn.addEventListener("click",function(){
    
    check = !check

   if(check){
    foysal.style.background = "red"
   }else{
    foysal.style.background = "green"
   }
    
})
