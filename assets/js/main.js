document.querySelector(".right-mobile").addEventListener("click", ()=>{
  document.querySelector('.mobileNav').classList.toggle("hideNav")
})

let loadTL = gsap.timeline()

loadTL.from(".loader", {
  scale: 0,
  opacity: 0,
  duration: .8,
  delay: .5
})

loadTL.to(".loader", {
  scale: 5,
  opacity: 0,
  duration: .8,
  // delay: 1
})

loadTL.to(".loader_wrapper", {
  display: "none",
  duration: .3
})


// Projects animations
// gsap.from('.projects_section .project_container', {
//   opacity: 0,
//   scale: 0.3,
//   duration: 0.1,
//   stagger: 0.1,
//   scrollTrigger: {
//     trigger: ".projects_section",
//     scroller: "body",
//     // markers: true,
//     // start: "top 0%",
//     end: "top -200%",
//     // end: "top 20%",
//     start: "top 130%",
//     scrub: 1,
//     // pin: true
//   }
// })
