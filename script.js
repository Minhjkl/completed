document.querySelector(".navbar").style.backgroundColor="transparent"
window.addEventListener("scroll",function(){
    if(window.scrollY===0){
        document.querySelector(".navbar").style.backgroundColor="transparent"
    }else{
        document.querySelector(".navbar").style.backgroundColor="#0f0f10"
    }
})
document.querySelector(".menu-home").onclick=function(){
   window.scrollTo({
       top:0,
       behavior:"smooth",
   })
}
document.querySelector(".menu-specs").onclick=function(){
    var scroll=document.querySelector(".specs").getBoundingClientRect().top
    window.scrollTo({
        top:scroll,
        behavior:"smooth",
    })
}
document.querySelector(".menu-case").onclick=function(){
    var scroll=document.querySelector(".case").getBoundingClientRect().top
    window.scrollTo({
    top:scroll,
    behavior:"smooth",
    })
}
document.querySelector(".menu-products").onclick=function(){
    var scroll=document.querySelector(".products").getBoundingClientRect().top
    window.scrollTo({
        top:scroll,
        behavior:"smooth",
    })
}