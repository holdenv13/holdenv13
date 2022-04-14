//common reveal options to create reveal animations
ScrollReveal({
    reset: false,
    distance: '0px',
    duration: 1500,
    delay: 100
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal('#body-contain', {  origin: 'bottom', viewOffset: {bottom: 200}})

ScrollReveal().reveal('.headings', { mobile:false, origin: 'left', easing: 'ease', distance:'100px', duration: 1000, viewOffset: {bottom: 300}})
ScrollReveal().reveal('.headings', { desktop:false, origin: 'left', easing: 'ease', distance:'20px', duration: 1000, viewOffset: {bottom: 150}})

ScrollReveal().reveal('#about-contain', {  origin: 'right', delay:200, viewOffset: {bottom: 230}})
ScrollReveal().reveal('#project-contain', {  origin: 'right', delay:200, viewOffset: {bottom: 230}})
ScrollReveal().reveal('#contact-contain', {  origin: 'right', delay:200, viewOffset: {bottom: 200}})