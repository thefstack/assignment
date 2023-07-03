let menuhide=document.getElementById('menu');
let menudisplay=document.getElementById('nav-items-display');
let body=document.getElementById('body');


window.addEventListener("resize", function() {
    if (window.innerWidth >= 850) {
        menudisplay.style.display='none';
    }
  });

menuhide.addEventListener("click",function(){
    if(!this.dataset.clicked){
        this.setAttribute("data-clicked", "true");
        menudisplay.style.display='flex';
    }
    else{
        this.removeAttribute("data-clicked");
        menudisplay.style.display='none';
        
    }
});







const typed=new Typed('#multiple-text',{
    strings:['Hired','Jobs'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


ScrollReveal({ 
 
    distance: '100px',
    duration:1000,
    delay:100
});

ScrollReveal().reveal('#body2,.key', {origin:'bottom'});
ScrollReveal().reveal('.left',{
    origin:'left'
});






gsap.to("#nav",{
    backgroundImage:'linear-gradient(to right,#ffcda8,#ffaac9, #ffe7ce,#e4a5ff)',
    duration:0.5,
    textColor:"#0000f0",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -30%",
        scrub:true
    }
})
gsap.to("#nav h1,#menu i",{
    color:"#000000",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -30%",
        scrub:true
    }
})
gsap.to("#body2",{
    backgroundImage:'linear-gradient(to right,#ffcda8,#ffaac9, #ffe7ce,#e4a5ff)',
    duration:0.3,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -70%",
        end:"top -90%",
        scrub:true
    }
})

gsap.to("#nav-items-display",{
    backgroundImage:'linear-gradient(to right,#ffcda8,#ffaac9, #ffe7ce,#e4a5ff)',
    
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -30%",
        scrub:true
    }
})



