document.addEventListener("DOMContentLoaded", (event) => {
    // Set initial states for all elements that will be animated
    gsap.set(".img", { y: 500 });
    gsap.set(".loader-img", { x: 500 });
    // FIXED: Changed selector from ".nav-item" to ".nav-item"
    gsap.set(".nav-item", { y: 25, opacity: 0 });
    gsap.set("h1", { y: 200 });
    gsap.set(".item", {y: 200, opacity: 0}); // Also set opacity to 0 for a fade-in


    const tl = gsap.timeline({ delay: 1 });

     tl.to(".img", {
        y: 0,
        duration: 1.5,
        stagger: 0.05,
        ease: "power3.inOut",
     })
     .to(".loader-img", {
        x: 0,
        duration: 3,
        ease: 'power3.inOut'
     },
     '-=2.5')
     // FIXED: Corrected the ID selector from #loader-logo to #logo
     // FIXED: Changed clip-path to make images collapse downwards
     .to(".img:not(#logo)", {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", // Animates to a collapsed state
        duration: 1,
        stagger: 0.1,
        ease: 'power3.inOut',
     }, "-=1")
     // FIXED: Changed clip-path to make the whole loader screen slide up and away
     .to(".loader", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", // Animates to a collapsed state at the top
        duration: 1,
        ease: 'power3.inOut',
     }, "-=0.5")
     // FIXED: Corrected the selector to .nav-item to reveal the main content
     .to(".nav-item, h1, .item", {
        y: 0,
        opacity: 1,
        duration: 1.5, // slightly longer duration for a smoother feel
        stagger: 0.1,
        ease: 'power3.out',
     }, "-=0.7"); // Overlap slightly with the loader disappearing
});