document.addEventListener('DOMContentLoaded',function(){
    var mmenuBtn        = document.querySelector('.hamburger'),
        container       = document.querySelector('.presentation .container'),
        containerWidth  = container.clientWidth,
        slider          = document.querySelector('.slider'),
        sliderItems     = document.querySelectorAll('.slider__item'),
        sliderNavList   = document.querySelectorAll('.slider__nav--item'),
        leftButton      = document.querySelector('.left__arrow'),
        rightButton     = document.querySelector('.right__arrow'),
        countItem       = 0,
        preloader       = document.querySelector('.preloader'),
        mmenu           = document.querySelector('.mmenu'),
        presentation    = document.querySelector('.presentation'),
        headerTop       = document.querySelector('.header__top'),
        topBtn          = document.querySelector('.up'),
        historySection  = document.querySelector('.history'),
        categoriesItems = document.querySelectorAll('.categories___item');
       

// slider
  setWidth(slider);

  rightButton.addEventListener('click',slideFromButton);
  leftButton.addEventListener('click',slideFromButton);

  [].forEach.call(sliderNavList,function(e){
    e.addEventListener('click',slideTo);
  });

  function setWidth(element) {
    element.style.width = sliderItems.length * 100 + '%';
  }

  function deleteClass(list) {
    for(var i = 0; i < list.length; i++) {
      list[i].classList.remove('active');
    }
  };

  function slideTo() {
    var count = this.getAttribute('data-count');

    countItem = +count;
    deleteClass(sliderNavList);
    this.classList.add('active');

    slider.style.transform = 'translateX(' + (-containerWidth*count) + 'px)';

  };

  function slideFromButton() {
    var side = this.getAttribute('data-side');

    deleteClass(sliderNavList);

    if(side == 'right') {
      countItem += 1;
      if(countItem > sliderItems.length-1) {
        countItem = 0;
      }
      sliderNavList[countItem].classList.add('active');
      slider.style.transform = 'translateX(' + (-containerWidth*countItem) + 'px)';
    } 

    if(side == 'left') {
      countItem -= 1;
      if(countItem < 0) {
        countItem = sliderItems.length-1;
      }
      sliderNavList[countItem].classList.add('active');
      slider.style.transform = 'translateX(' + (-containerWidth*countItem) + 'px)';
    }
  };
    
  // slider 
    
    mmenuBtn.addEventListener('click',hamburger);
    
    // hamburger button
    function hamburger(){
        var mmenuBtn = document.querySelector('.hamburger__inner');
        mmenuBtn.classList.toggle('hamburger__inner__active');

        if(!mmenu.classList.contains('show')) {
          mmenu.style.display = 'flex';
          setTimeout(function(){
            mmenu.classList.add('show')
          },100);
        } else {
          mmenu.classList.remove('show');
          setTimeout(function(){
            mmenu.style.display = 'none';
          },500);
        }
    };

    
    // sticky header
    document.addEventListener('scroll',function(e) {
        var offsetTop = window.pageYOffset,
            header    = document.querySelector('.header__top');

        if(offsetTop > 0 ) {
           header.classList.add('fixed'); 
        } else {
            header.classList.remove('fixed');
        }
    });


    // fadeIn / out
    fadeIn();
    function fadeIn(){
      setTimeout(function(){
        if(preloader.classList.contains('preloader__done')) {
          presentation.classList.add('fadeInBottom'); 
        }
      },1700)
    };
  

    // slow scroll to top
    function scroll(element) {
      var b     = 100,
          coords = element.getBoundingClientRect().y; // получаем кординаты эелемента
      setTimeout(function y(){
          a = window.pageYOffset;
          if(a > coords ) {
              window.scrollTo(0,a-b);
              setTimeout(y,5)
          }   
      },10);
    };

    topBtn.addEventListener('click',function(){
      scroll(headerTop);
    });


// fadeIn on scroll
    window.addEventListener('scroll',function(){
      fadeOnScroll(historySection);
      [].forEach.call(categoriesItems,function (e) { 
      fadeOnScroll(e);
      });
    });

    function fadeOnScroll(element){
      var coordsBounding    = element.getBoundingClientRect().y,
        coordsOfDocument = window.pageYOffset,
        animation = element.getAttribute('data-animate'),
        elementHeight = element.clientHeight,
        coords = coordsBounding + coordsOfDocument-elementHeight / 2;

      if( coordsOfDocument  >= coords) {
      element.classList.add(animation)
      }

      if(coordsOfDocument < coords) {
      element.classList.remove(animation)
      }
    };
});



preloader
  document.body.onload = preloader();

  function preloader() {
  var preloader = document.querySelector('.preloader');
  setTimeout(function(){
    if(!preloader.classList.contains('preloader__done')) {
      preloader.classList.add('preloader__done');
    }
  },1500);
};



