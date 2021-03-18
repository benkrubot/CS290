const tl = gsap.timeline({ defaults: { ease: "power1.out" } }); //Create timeline lets us chain together multiple animations

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 }); //Text pops up
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 }); //Slider comes up
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.5"); //Intro goes up and away
tl.fromTo(".navbar", { opacity: 0 }, { opacity: 1, duration: 1 }); //Delay for nav to show up
tl.fromTo(".title-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1"); //Delay for title to show up