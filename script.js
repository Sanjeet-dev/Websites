// const body = document.querySelector("body");
const cursor = document.querySelector(".pointer");
const blur = document.querySelector(".pointer-blur");

document.addEventListener("mousemove",function(coor){
    cursor.style.left = coor.x+"px";
    cursor.style.top = coor.y+"px";
    blur.style.left = coor.x - 200 +"px";
    blur.style.top = coor.y -200 +"px";
});



gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    delay:0.1,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end: "top -70%",
        scrub:2
    }
})