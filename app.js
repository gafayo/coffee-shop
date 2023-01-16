const navHead = document.querySelector(".nav-head");
console.log(navHead)

window.addEventListener("scroll", function(){
    const navHeight = navHead.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > navHeight){
         navHead.classList.add("fixed-nav");
    }else{
        navHead.classList.remove("fixed-nav")
    }
})