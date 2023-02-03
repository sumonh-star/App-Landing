// =====header-background-slider=====
var swiper = new Swiper(".headerSwiper", {
    spaceBetween: 30,
    // effect: "fade",
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      type: "progressbar",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  // =====more-theme-slider=====
 var swiper = new Swiper(".related-swiper", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
  });

  // ====side-menu-slide=====
const menuBtn = document.getElementById('menu-btn'),
      rightSideMenu = document.getElementById('right-slider-menu'),
      closeBtn = document.getElementById('close-btn');

      if(menuBtn){
        menuBtn.addEventListener('click', () =>{
          rightSideMenu.classList.add('slide-active');
        });
    };
    if(closeBtn){
      closeBtn.addEventListener('click', () =>{
        rightSideMenu.classList.remove('slide-active');
      });
  };

    // ====form-active=====
const profileBtn = document.getElementById('profile-btn'),
loginMenu = document.getElementById('login-menu'),
formCloseBtn = document.getElementById('form-close-btn');

if(profileBtn){
  profileBtn.addEventListener('click', () =>{
    loginMenu.classList.add('form-active');
  });
};
if(formCloseBtn){
  formCloseBtn.addEventListener('click', () =>{
    loginMenu.classList.remove('form-active');
});
};

  // =====qode-theme-slide=====
  const relatedTheme = document.getElementById('related-theme'),
        qodeBtn = document.getElementById('qode-btn');
        relatedTheme.style.right="-280px";
        qodeBtn.onclick=function(){
            if(relatedTheme.style.right=="-280px"){
              relatedTheme.style.right="0";
            }
            else{
              relatedTheme.style.right="-280px";
    
            };
        };

        var darkMode = document.getElementById('dark-mode-2');
        darkMode.onclick = function(){
          document.body.classList.toggle("dark-mode");
          if(document.body.classList.contains("dark-mode")){
            darkMode.src="../images/sun-2.png";
          }
          else{
            darkMode.src="../images/moon-2.png";
          };
        };

        // =====benifite-slider=====
        var swiper = new Swiper(".benifite-swiper", {
          loop:true,
          grabCursor:true,
          spaceBetween:10,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints:{
            0:{
              slidesPerView:1,
            },
            768:{
              slidesPerView:2,
            },
            1100:{
              slidesPerView:3,
            },
            1400:{
              slidesPerView:3,
            }
          }
        });

// =====main-home-active-line=====
// const list = document.querySelectorAll('.nav-list');
// function activeLink(){
    // list.forEach((item) =>
    // item.classList.remove('active'));
    // this.classList.add('active');
// }
// list.forEach((item) =>
// item.addEventListener('click',activeLink));



// =====dark-mood=====
var darkMode = document.getElementById('dark-mode');
darkMode.onclick = function(){
  document.body.classList.toggle("dark-mode");
  if(document.body.classList.contains("dark-mode")){
    darkMode.src="../images/sun.png";
  }
  else{
    darkMode.src="../images/moon.png";
  };
};

// ======mobile-reval-animation======
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}


/*========= SHOW SCROLL UP =========*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up'),
      navActive = document.getElementById('nav');
  if(this.scrollY >= 150){
  scrollUp.classList.add('scroll-active');
  navActive.classList.add('nav-active');
} 
  else {
    scrollUp.classList.remove('scroll-active');
    navActive.classList.remove('nav-active');
  };
};
window.addEventListener('scroll', scrollUp);

/*======= SCROLL REVEAL ANIMATION =======*/
var sr = ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 2500,
  delay: 200,
  // reset: true
});
sr.reveal(`.qode-part,.clint-say-content,.advice-section, .cetagory-item`);

sr.reveal(`.related-content,.footer-copy-text,.footer-contact-part,.companys-item-box, .benifite-section`,{origin: 
'bottom'});

sr.reveal(`.nav-logo, .progressbar-content,.team-header-text,.app-download-part,.intergation-item-box,.shop-img`,{origin: 'left'});

sr.reveal(`.nav-icons,.shop-content,.intergation-content,.footer-logo-part, .progressbar-img`,{origin: 'right'});
