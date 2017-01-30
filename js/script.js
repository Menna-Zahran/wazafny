/**
 * Created by ascom on 10/11/2016.
 */


$(document).ready(function() {

    /*header carousel*/
    $("#owl-demo").owlCarousel({

        navigation: false, // Show next and prev buttons
        navigationText:false, /*["<i class='fa fa-chevron-left' aria-hidden='true'></i>", "<i class='fa fa-chevron-right' aria-hidden='true'></i>"],*/
        paginationSpeed: 2000,
        pagination:false,
        singleItem: true,
        autoPlay: true,
        slideSpeed: 10,
        stopOnHover: true
        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });


    /*section 1 carousel companies*/
    var owl = $("#owl-demo-companies");

    owl.owlCarousel({
        autoPlay: 1000, //Set AutoPlay to 3 seconds
        pagination:false,
        items : 5, //10 items above 1000px browser width
        itemsDesktop : [1000,5], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,3], // between 900px and 601px
        itemsTablet: [600,2], //2 items between 600 and 0
        itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
       /* slideSpeed: 10,*/
        paginationSpeed: 90000
    });




});

