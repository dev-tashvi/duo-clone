
function init(){
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
      multiplier:2
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    
    ScrollTrigger.refresh();
    
}
init()

var cursor = document.querySelector(".cursor");
var main  = document.querySelector(".main");
var video = document.querySelector(".video1");
window.addEventListener("mousemove",function moveCircle(e) {
  TweenLite.to(cursor, 0.4, {
    css: {
      left: e.pageX-30,
      top: e.pageY-30
    }
  });
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top 30%",
        end:"top 0%",
        scrub:3,
    }
})
tl.to(".page1 h1",{
    x:-250,
},"anim")
tl.to(".page1 h2",{
    x:250,
},"anim")
tl.to(".page1 video",{
    scale:1.5,
},"anim")

tl.to(".page1 h1", {
    filter: "blur(10px)", // Apply a blur effect
},"anim"); 

tl.to(".page1 h2", {
    filter: "blur(10px)", // Apply a blur effect
},"anim"); 
var tl2 = gsap.timeline({
  scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",
      start:"top -30%",
      end:"top -10%",
      scrub:1.5,
  }
})
tl2.to(".main",{
  backgroundColor:"#fff"
})