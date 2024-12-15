// gsap.from(" #page2 #box",{
//     scale:0,
//     duration:1,
//     rotate:360,
//     //  delay:1,
//     //  scrollTrigger:"#page2 #box"   yeh upper upper se kaam krta h 

//     scrollTrigger :{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 20%",
//         scrub:2
//     }

//   })


gsap.from("#scroll #img", {
    scale: 1.5, // Reduced scale for a smoother zoom effect
    y: 200,     // Adjusted y-axis movement for a subtler effect
    duration: 3, // Extended duration for smoother animation
    rotate: 360, // Reduced rotation for less abrupt motion
    scrollTrigger: {
        trigger: "#scroll #img",
        scroller: "body",
        // markers: true, // Keep markers for debugging; remove later
        start: "top 80%", // Start animation earlier for better visibility
        end: "top 40%",   // End animation later for a longer effect
        scrub: 1.5,  // Smoother scrubbing
        toggleActions: "restart pause reverse pause", // Animation control
    }
});

