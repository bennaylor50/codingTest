$(document).ready(function(){

    $('.owl-news').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText : ["<i class='fa fa-arrow-left fa-lg'></i>","<i class='fa fa-arrow-right fa-lg'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
         
      }
   
    })

    $('.owl-calender').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText : ["<i class='fa fa-arrow-left fa-lg'></i>","<i class='fa fa-arrow-right fa-lg'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
         
      }
    })
    
      $('.owl-follow').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText : ["<i class='fa fa-arrow-left fa-lg'></i>","<i class='fa fa-arrow-right fa-lg'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
         
      }
   
    })
});

