
// =====first product=======
let a = document.querySelector('#ph1');
let b = document.querySelector('#phh1');
let c = document.querySelector('#p-box1');
let d = document.querySelector('#p-text2');
let e = document.querySelector('.btn5');
let f = document.querySelector('#cart1');
let star = document.querySelector('.lol');


c.addEventListener('mouseenter', () => {
    b.textContent = 'POP Extra Strawberry';
    a.style.backgroundImage = 'url(image/product-image3.png)';
    d.textContent = '$59.50';
    e.style.backgroundColor = '#fa4f09';
    f.style.color = 'white';
    star.style.color= 'white';
});
c.addEventListener('mouseleave', () => {
    b.textContent = 'Menthol E-Cigarette Kit'
    a.style.backgroundImage = 'url(image/product-image1.png)';
    d.textContent = '$49.50';
    e.style.backgroundColor = 'rgb(0, 0, 0)';
    f.style.color = '#fa4f09';

star.style.color= 'orange';

});

// ===========sec product=========
let pbox2 = document.querySelector('#p-box2');
let ph2 =document.querySelector('#ph2');
let phh2 =document.querySelector('#phh2');
let phh3 =document.querySelector('#phh3');
let bn2 = document.querySelector('#bn2');
let car2 =document.querySelector('.car2');
let l4 = document.querySelector('.l4');
let l5 = document.querySelector('.l5');
pbox2.addEventListener('mouseenter',()=>{
    ph2.style.backgroundImage='url(image/product-image4.png)';;
    phh2.textContent='Pods Sold Separately';
    phh3.textContent='$65.50';
    bn2.style.backgroundColor = '#fa4f09';
    car2.style.color = 'white';
    l4.style.color = 'orange'
    l5.style.color = 'orange'
});
pbox2.addEventListener('mouseleave',()=>{
    ph2.style.backgroundImage='url(image/product-image2.png)';;
    phh2.textContent='Disposable Sub-Ohm Tank';
    phh3.textContent='$49.50';
   bn2.style.backgroundColor = 'rgb(0, 0, 0)';
    car2.style.color = '#fa4f09';
    l4.style.color = 'white'
    l5.style.color = 'white'
});

// =======product 3========

let pbox3 = document.querySelector('#p-box3');
let ph3 = document.querySelector('#ph3');
let phhh3 = document.querySelector('#phhh3');
let phhh4 = document.querySelector('#phhh4');
let bn3 = document.querySelector('#bn3');
let car3 = document.querySelector('.car3');
let l6 = document.querySelector('.l6');
let l7 =document.querySelector('.l7');

pbox3.addEventListener('mouseenter',()=>{
    ph3.style.backgroundImage='url(image/product-image5.png)';
    phhh3.textContent='Pods Sold Separately';
    phhh4.textContent='$65.50';
    bn3.style.backgroundColor='#fa4f09';
    car3.style.color='white';
    l6.style.color='white'
    l7.style.color='white';
});
pbox3.addEventListener('mouseleave',()=>{
    ph3.style.backgroundImage='url(image/product-image3.png)';
    phhh3.textContent='POP Extra Strawberry';
    phhh4.textContent='$49.50';
    bn3.style.backgroundColor='black';
    car3.style.color='#fa4f09';
  l6.style.color='orange'
    l7.style.color='white';
});

// ==========forth item===========
let pbox4 = document.querySelector('#p-box4');
let ph4 = document.querySelector('#ph4');
let phhh5 = document.querySelector('#phhh5');
let phhh6 = document.querySelector('#phhh6');
let bn4 = document.querySelector('#bn4');
let car4 = document.querySelector('.car4');
let l8 = document.querySelector('.l8');
let l9 =document.querySelector('.l9');
pbox4.addEventListener('mouseenter',()=>{
    ph4.style.backgroundImage='url(image/product-image6.png)';
    phhh5.textContent='GeekVape Obelisk Pod';
    phhh6.textContent='$75.50';
    bn4.style.backgroundColor='#fa4f09';
    car4.style.color='white';
    l8.style.color='white'
    l9.style.color='white';
});
pbox4.addEventListener('mouseleave',()=>{
    ph4.style.backgroundImage='url(image/product-image4.png)';
    phhh5.textContent='Pods Sold Separately';
    phhh6.textContent='$49.50';
    bn4.style.backgroundColor='black';
    car4.style.color='#fa4f09';
  l8.style.color='orange'
    l9.style.color='orange';
});

// =======fifth item========

let pbox5 = document.querySelector('#p-box5');
let ph5 = document.querySelector('#ph5');
let phhh7 = document.querySelector('#phhh7');
let phhh8 = document.querySelector('#phhh8');
let bn5 = document.querySelector('#bn5');
let car5 = document.querySelector('.car5');
let l10 = document.querySelector('.l10');
let l11 =document.querySelector('.l11');
pbox5.addEventListener('mouseenter',()=>{
    ph5.style.backgroundImage='url(image/product-image3.png)';
    phhh7.textContent='POP Extra Strawberry';
    phhh8.textContent='$55.50';
    bn5.style.backgroundColor='#fa4f09';
    car5.style.color='white';
    l10.style.color='orange'
    l11.style.color='white';
});
pbox5.addEventListener('mouseleave',()=>{
    ph5.style.backgroundImage='url(image/product-image5.png)';
    phhh7.textContent='Pods Sold Separately';
    phhh8.textContent='$49.50';
    bn5.style.backgroundColor='black';
    car5.style.color='#fa4f09';
  l10.style.color='white'
    l11.style.color='white';
});

// ========6 item=============
let pbox6 = document.querySelector('#pbox6');
let ph6 = document.querySelector('#ph6');
let phhh9 = document.querySelector('#phhh9');
let phhh10 = document.querySelector('#phhh10');
let bn6 = document.querySelector('#bn6');
let car6 = document.querySelector('.car6');


pbox6.addEventListener('mouseenter',()=>{
    ph6.style.backgroundImage ='url(image/product-image2.png)';
    phhh9.textContent = 'Disposable Sub-Ohm Tank';
    phhh10.textContent = '$45.50';
    bn6.style.backgroundColor = '#fa4f09';
    car6.style.color='white';
});

pbox6.addEventListener('mouseleave',()=>{
    ph6.style.backgroundImage ='url(image/product-image6.png)';
    phhh9.textContent = 'GeekVape Obelisk Pod';
    phhh10.textContent = '$49.50';
    bn6.style.backgroundColor = 'black';
    car6.style.color='#fa4f09';
});

// 7 item=========//

let pbox7 = document.querySelector('#pbox7');
let ph7 = document.querySelector('#ph7');
let phhh11 = document.querySelector('#phhh11');
let phhh12 = document.querySelector('#phhh12');
let btn7 = document.querySelector('#btn7');
let car7 = document.querySelector('.car7');

pbox7.addEventListener('mouseenter',()=>{
    ph7.style.backgroundImage ='url(image/product-image1.png)';
    phhh11.textContent = 'Menthol E-Cigarette Kit';
    phhh12.textContent = '$69.50';
    btn7.style.backgroundColor = '#fa4f09';
    car7.style.color='white';
});


pbox7.addEventListener('mouseleave',()=>{
    ph7.style.backgroundImage ='url(image/product-image7.png)';
    phhh11.textContent = 'POP Extra Strawberry';
    phhh12.textContent = '$49.50';
    btn7.style.backgroundColor = 'black';
    car7.style.color='#fa4f09';
});

// ======8 item========//

let pbox8 = document.querySelector('#pbox8');
let ph8 = document.querySelector('#ph8');
let phhh13 =document.querySelector('#phhh13');
let phhh14 =document.querySelector('#phhh14');
let btn8 = document.querySelector('#btn8');
let car8 = document.querySelector('.car8');
let star4 =document.querySelector('.star4');

pbox8.addEventListener('mouseenter',()=>{
    ph8.style.backgroundImage = 'url(image/product-image5.png)';
    phhh13.textContent='Pods Sold Separately';
    phhh14.textContent='$55.50';
    btn8.style.backgroundColor='#fa4f09';
    car8.style.color='white';
star4.style.color='white';
})

pbox8.addEventListener('mouseleave',()=>{
   ph8.style.backgroundImage = 'url(image/product-image8.png)';
    phhh13.textContent='100ml Nic Salt Juice';
    phhh14.textContent='$49.50';
    btn8.style.backgroundColor='black';
    car8.style.color='#fa4f09';
star4.style.color='orange';
})
// =======product 9========

let pbox9 = document.querySelector('#p-box9');
let ph9 = document.querySelector('#ph9');
let phhh39 = document.querySelector('#phhh39');
let phhh49 = document.querySelector('#phhh49');
let bn39 = document.querySelector('#bn39');
let car39 = document.querySelector('.car39');
let l67 = document.querySelector('.l67');

pbox9.addEventListener('mouseenter',()=>{
    ph9.style.backgroundImage='url(image/product-image5.png)';
    phhh39.textContent='Pods Sold Separately';
    phhh49.textContent='$65.50';
    bn39.style.backgroundColor='#fa4f09';
    car39.style.color='white';
    l67.style.color='white'
   
});
pbox9.addEventListener('mouseleave',()=>{
    ph9.style.backgroundImage='url(image/product-image3.png)';
    phhh39.textContent='POP Extra Strawberry';
    phhh49.textContent='$49.50';
    bn39.style.backgroundColor='black';
    car39.style.color='#fa4f09';
  l67.style.color='orange'
   
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





