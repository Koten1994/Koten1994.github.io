$(document).ready(function() {
    var $menu = $("#my-menu").mmenu({
        extensions: {
            "all" : ["theme-white","position-right","border-full","listview-50"]
        }
    });
    var $icon = $("#my-icon");
    var API = $menu.data( "mmenu" );
    $icon.on( "click", function() {
        API.open();
     });     
    API.bind( "open:finish", function() {
        setTimeout(function() {
           $icon.addClass( "is-active" );
        }, 100);
     });
     API.bind( "close:finish", function() {
        setTimeout(function() {
           $icon.removeClass( "is-active" );
        }, 100);
     });


     $(".owl-carousel").owlCarousel({
         responsive:{
            0:{
                items:1,
                margin: 0
            },
            768: {
                items:2
            },
            992:{
                items:3,
            }
        },
            loop:true,
            nav:true,
            autoplay:true,
            margin:50
     });

     $(".learn-more").magnificPopup({
        type: "inline",
        midClick: true,
        removalDelay: 300,
        mainClass: 'mfp-fade'
     });




        var about = document.querySelector(".about");
        var our_pets = document.querySelector(".pets-slider");
        var help = document.querySelector(".help");
        var contacts = document.querySelector(".footer");

        var m_about = document.querySelector(".m_about");
        var m_our_pets = document.querySelector(".m_our");
        var m_help = document.querySelector(".m_help");
        var m_contacts = document.querySelector(".m_contacts");
        
        // Scroll function
        function scroll(element) {
            var b = 10;
            var coords = element.getBoundingClientRect().y;
            if(element.classList.contains("footer")) {
                coords-=600;
            };
            setTimeout(function y(){
                a = window.pageYOffset;
                if( a < coords ) {
                    console.log(a,coords);
                    window.scrollBy(0,b);
                    setTimeout(y,5);
                }   
            },10);
        };

        m_about.addEventListener("click",function(e){
            e.preventDefault();
            scroll(about);
        });
        m_our_pets.addEventListener("click",function(e){
            e.preventDefault();
            scroll(our_pets);
        });
        m_help.addEventListener("click",function(e){
            e.preventDefault();
            scroll(help);
        });
        m_contacts.addEventListener("click",function(e){
            e.preventDefault();
            scroll(contacts);
        });
 });