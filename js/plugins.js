/* global , $ , window , */

$(function(){
    "use strict";
    
    var winh = $(window).height();
    var upperh = $(".upper-bar").innerHeight();
    var navh = $(".navbar").innerHeight();
    
    $(".slider, .carousel-item").height(winh - (upperh + navh));
    
    $(".featured  ul li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        if($(this).data("class") === ".all")
            {
                $(".shuffle .col-md-3").css("opacity","1");
            }
        else{
            $(".shuffle .col-md-3").css("opacity","0.1");
            $($(this).data("class")).parent().css("opacity","1")
        }
        
    });
    
});