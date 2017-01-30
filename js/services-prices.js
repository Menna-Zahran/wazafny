/**
 * Created by ascom on 20/11/2016.
 */
$(document).ready(function() {


/*prices carousel*/
    $("#owl-demo-prices").owlCarousel({

        autoPlay: false, //Set AutoPlay to 3 seconds
        /*        navigation:true,
         navigationText:["<i class='fa fa-chevron-left' aria-hidden='true'></i>", "<i class='fa fa-chevron-right' aria-hidden='true'></i>"],*/
        pagination:true,
        paginationNumbers:true,
        paginationText:["hello","hello","hello","hello"],
        items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        itemsTablet	:[768,1],
        itemsTabletSmall:	false,
        itemsMobile:	[479,1],
        stopOnHover:true,
        paginationSpeed:10

    });

  /*testimonials carousel*/
    $("#owl-demo-testimonials").owlCarousel({

        autoPlay: false, //Set AutoPlay to 3 seconds
        navigation:true,
        navigationText:["<i class='fa fa-chevron-left' aria-hidden='true'></i>", "<i class='fa fa-chevron-right' aria-hidden='true'></i>"],
        pagination:false,
        items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        stopOnHover:true,
        itemsTablet	:[768,1]	,
        itemsTabletSmall:	false,
        itemsMobile:	[479,1]

});


});