import { animate, inView, stagger, scroll } from "motion"

// animate(
//   ".logoborder",
//   { transform: "rotate(360deg)" },
//   { duration: 3 }
// )

function cardSlideOut(element) {
  inView(element, ({target}) => {
    const controls = animate(
      target.querySelectorAll(".services-inner-item-box"), {
        opacity: ["0", "1"],
        y: ["0", "50px"],
      },
      {delay: stagger(0.5), duration: 1, easing: [0.29, -0.13, 0.18, 1.18]},
      { allowWebkitAcceleration: true },
    )
  })
}

function cardslide(element) {
  // console.log(element.childNodes);
  inView(element, ({target}) => {
    const controls = animate(
      target.querySelectorAll(".services-inner-item-box"), {
        opacity: ["0", "1"],
        y: ["50px", "0"],
      },
      {delay: stagger(0.5), duration: 1, easing: [0.29, -0.13, 0.18, 1.18]},
      { allowWebkitAcceleration: true },
    )

    return (leaveInfo) => controls.stop();
  })
}

cardslide(".services-item-box");


// const items = document.querySelectorAll(".donations-inner-box");

// // Animate gallery horizontally during vertical scroll
// scroll(
//   animate(".donations-box", {
//     transform: ["none", `translateX(-${items.length - 1}00vw)`]
//   }),
//   { target: document.querySelector("section") }
// );

    // .finished.then(() => {
    //   animate(
    //     target.querySelectorAll(".services-inner-item-box"), {
    //       opacity: ["1", "0"],
    //       y: ["0", "50px"],
    //     },
    //     {delay: stagger(0.5), duration: 1, direction: "alternate", easing: [0.29, -0.13, 0.18, 1.18]},
    //     { allowWebkitAcceleration: true },
    //   )
    // })

// animate(
//   ".services-inner-item-box", 
//   {
//     opacity: ["0", "1"],
//     y: ["50px", "0"],
//   },
//   {delay: stagger(0.5), duration: 1, easing: [0.29, -0.13, 0.18, 1.18]},
//   { allowWebkitAcceleration: true },
// )


// window.addEventListener("scroll", cardslide);

