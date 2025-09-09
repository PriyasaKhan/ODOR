gsap.registerPlugin(ScrollTrigger);

gsap.from('.line-right-side > *', {
  x: 300,
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
  scrollTrigger: {   
    trigger: '.line-right-side', 
    scroller: 'body',
    start: 'top 90%',
    end: 'top 20%',
    scrub: 1,
  }
});
gsap.from('.line-left-side > *', {
  x: -300,
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
  scrollTrigger: {   
    trigger: '.line-left-side', 
    scroller: 'body',
    start: 'top 90%',
    end: 'top 20%',
    scrub: 1,
  }
});
gsap.from('.f-right-side > *', {
  x:300,
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
  scrollTrigger: {   
    trigger: '.f-right-side', 
    scroller: 'body',
    start: 'top 95%',
    end: 'top 20%',
    scrub: 1,
  }
});

gsap.from('.l-latest > *', {
  x:-300,
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
  scrollTrigger: {   
    trigger: '.l-latest', 
    scroller: 'body',
    start: 'top 75%',
    end: 'top 20%',
    scrub: 1,
  }
});
gsap.from('.landing-page > *', {
  x: -300,
  opacity: 0,
  stagger: 0.2,
  duration: 0.6,
  scrollTrigger: {   
    trigger: '.landing-page', 
    scroller: 'body',
    start: 'top 75%',
    toggleActions: 'play none none none' 
  }
});



gsap.to("nav", {
  opacity: 1,
  backgroundColor: "black",
  scrollTrigger: {
      trigger: 'nav',
    scroller: 'body',
    start: 'top -30%',
    end: 'bottom bottom',
    scrub: 2,
  }
});

  let bar = document.querySelector('#bar');
  let bar2 = document.querySelector('.bar2');
  let cross = document.querySelector('#cross');

  bar.addEventListener('click', () => {
      bar2.style.display='flex';
  });

  cross.addEventListener('click', () => {
       bar2.style.display='none';
  });

