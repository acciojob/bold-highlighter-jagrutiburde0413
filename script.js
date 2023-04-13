  
const para=document.getElementsByTagName("strong")
const para1=document.getElementsByTagName("href")

 para1.addEventListener("mouseover",highlight)
 function highlight(){
    para.style.color="blue"
 }
 para1.addEventListener("mouseout",return_normal)
function return_normal(){
    para.style.color="black"
 }
