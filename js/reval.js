/*======= SCROLL REVEAL ANIMATION =======*/
var sr = ScrollReveal({
    origin: 'top',
    distance: '200px',
    duration: 3500,
    delay: 400,
    // reset: true
  });
  sr.reveal(`.qode-part,team-members-section,.clint-say-about-img,.intergation-title,.table-
  head,.dis-col-2`);
  
  sr.reveal(`.clint-say-about-text,.footer-copy-text,.team-intergation-main-box, .button-
  box,.footer-contact-part,.dis-col-3`,{origin: 
  'bottom'});
  
  sr.reveal(`.nav-logo,.team-header-img,.purches-text,.intergation-
  item-box,.app-download-part`,{origin: 'left'});
  
  sr.reveal(`.nav-icons,.team-header-text,.dis-col-4,.footer-logo-part,.dis-col-1, .intergation-
  sub-title`,
  {origin: 'right'});


        
// =====team-member-profile-mouseover-effect=====?
var imgBx = document.querySelectorAll('.imgBx');
var contentBx = document.querySelectorAll('.contentBx');

for (let i=0; i<imgBx.length; i++){
  imgBx[i].addEventListener('mouseover', function(){
    for(let i=0; i<contentBx.length; i++){
      contentBx[i].className = 'contentBx';
    }
    document.getElementById(this.dataset.id).
    className = 'contentBx active';

    for (let i=0; i<imgBx.length; i++){
      imgBx[i].className = 'imgBx';
    }
    this.className = 'imgBx active';
  });
};




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


/*========= SHOW SCROLL UP =========*/ 
function scrollUp(){
    var scrollUp = document.getElementById('scroll-up'),
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