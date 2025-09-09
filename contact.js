gsap.registerPlugin(ScrollTrigger);

gsap.from('.c-right-side > *', {
  x: 300,
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
  scrollTrigger: {   
    trigger: '.c-right-side', 
    scroller: 'body',
    start: 'top 60%',
    end: 'top 20%',
     toggleActions: 'play none none none'
  }
});
gsap.from('.black-box  > *', {
  x: -300,
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
  scrollTrigger: {   
    trigger: '.black-box ', 
    scroller: 'body',
    start: 'top 60%',
    end: 'top 20%',
    scrub: 1,
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