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
    scrub: 1,
  }
});
gsap.utils.toArray('.bg-l > *').forEach((el, i) => {
  gsap.from(el, {
    x: -300,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: el,
      scroller: 'body',
      start: 'top 80%',
      end: 'top 60%',
      toggleActions: 'play none none none'
    }
  });
});
gsap.from('.tg > *', {
  x: -300,
  opacity: 0,
  stagger: 1.5,
  duration: 0.5,
  scrollTrigger: {   
    trigger: '.tg', 
    scroller: 'body',
    start: 'top 60%',
    end: 'top 20%',
    scrub: 1,
  }
});
gsap.from('.hg > *', {
  x: -300,
  opacity: 0,
  stagger: 0.2,
  duration: 0.4,
  scrollTrigger: {   
    trigger: '.hg', 
    scroller: 'body',
    start: 'top 60%',
    end: 'top 20%',
    toggleActions: 'play none none none' 
  }
});
gsap.from('.rc > *', {
  x: -300,
  opacity: 0,
  stagger: 0.2,
  duration: 0.9,
  scrollTrigger: {   
    trigger: '.rc', 
    scroller: 'body',
    start: 'top 60%',
    end: 'top 20%',
    toggleActions: 'play none none none'
  }
});
gsap.from('.opp > *', {
  x: -300,
  opacity: 0,
  stagger: 0.2,
  duration: 0.9,
  scrollTrigger: {   
    trigger: '.opp', 
    scroller: 'body',
    start: 'top 60%',
    end: 'top 20%',
     toggleActions: 'play none none none'
  }
});

gsap.utils.toArray('.aa1').forEach((card) => {
  gsap.from(card, {
    x: 100,
    opacity: 0,
    duration: 0.9,
    scrollTrigger: {
      trigger: card,
      scroller: 'body',
      start: 'top 90%',
      end: 'top 40%',
      scrub:1
    }
  });
});
gsap.utils.toArray('.lk').forEach((block) => {
  gsap.from(block.children, {
    x: 300,
    opacity: 0,
    stagger: 0.3,
    duration: 0.8,
    scrollTrigger: {
      trigger: block,
      start: 'top 75%',
      end: 'top 40%',
      scrub:1
    }
  });
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
