const para=document.getElementByTagName("strong")[0]
const para1=document.getElementByTagName("a")
 para1.addEventListener("mouseover",highlight)
 function highlight(){
    para.style.color="blue"
 }
 para1.addEventListener("mouseout",return_normal)
 function return_normal(){
    para.style.color="black"
 }

