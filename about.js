gsap.registerPlugin(ScrollTrigger);

gsap.from('.a-right > *', {
  x: 300,
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
  scrollTrigger: {   
    trigger: '.a-right', 
    scroller: 'body',
    start: 'top 80%',
    end: 'top 20%',
    scrub: 1,
  }
});
gsap.from('.lg > *', {
  y: -300,
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
  scrollTrigger: {   
    trigger: '.lg', 
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