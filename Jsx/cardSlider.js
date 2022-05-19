$(document).ready(function(){

    $(' #fixed .owl-carousel').owlCarousel({

        loop:true,
        margin:10,
        nav:true,
        responsive:{
            320:{
                items:1
            },
            375:{
                items:1
            },
            425:{
                items:1
            },
            768:{
                items:1
            },
            
            1000:{
                items:1
            },
            
           
        }
        
    }),


    $(' #fixedB .owl-carousel').owlCarousel({

        loop:true,
        margin:10,
        nav:true,
        responsive:{
            320:{
                items:1
            },
            375:{
                items:1
            },
            425:{
                items:1
            },
            768:{
                items:2
            },
            
            1000:{
                items:3
            },
            
           
        }
        
    })
})