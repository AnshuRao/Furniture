$(document).ready(function () {

    $('.menu-trigger').click(function(){
        $(this).toggleClass("active_bar");
        $('#menu1').toggleClass('show');
        

    });






    /*  scroll show */
    $(window).scroll(function () {

        var scroll = $(window).scrollTop();
        var box = $('#home').height();
        var header = $('nav').height();


        if (scroll >= box - header) {
            $("nav").addClass("background-header");



        } else {
            $("nav").removeClass("background-header");
        }
    });




//menu bar

    const wrapper_div = document.querySelectorAll(' .wrapper');
    const navLi = document.querySelectorAll('nav .menu-nav li');
  

    window.addEventListener('scroll', () => {
        let current = '';
     
        wrapper_div.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
                console.log(section);
            }
        })

       //forEach is loop
       // => is short cut of function li is parameter of function
        navLi.forEach( pi => {
            pi.firstChild.classList.remove('on_this');
            if (pi.firstChild.classList.contains(current)) {
                pi.firstChild.classList.add('on_this')
            }

        })
    });


    
    const wrapper_div1 = document.querySelectorAll(' .wrapper');
    const navLi1 = document.querySelectorAll('nav #menu1 li');
  

    window.addEventListener('scroll', () => {
        let current = '';
     
        wrapper_div1.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
                console.log(section);
            }
        })

       //forEach is loop
       // => is short cut of function li is parameter of function
        navLi1.forEach( pi => {
            pi.firstChild.classList.remove('on_this');
            if (pi.firstChild.classList.contains(current)) {
                pi.firstChild.classList.add('on_this')
            }

        })
    });





    $('#home .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
      
        autoplay: true,
        responsive:{
            0:{
                items:1
            }
        }
    });

    $('.collection-carousel .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        
        
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            390:{
                items:2
            },
            
            600:{
                items:3
            },
            
        }
    });


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
       
        responsive:{
            0:{
                items:1
            }
         
        }
    });




 









});