let h=document.getElementById("h");
let m=document.getElementById("m");
let s=document.getElementById("s");
setInterval(tic, 1000);
function tic(){
    let d = new Date();
    let hours = 123- d.getHours();
    let min = 59- d.getMinutes();
    let sec = 59- d.getSeconds();
    h.innerHTML=hours+" ч : ";
    m.innerHTML=min+" м : ";
    s.innerHTML=sec+" c";
}

var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animate__animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();