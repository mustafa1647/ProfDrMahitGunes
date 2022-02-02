$(document).ready(function(){
    $("#b1").click(function(){
        $(".title1").show("fast");
        $(".title2").hide("fast");
        $(".title3").hide("fast");
        $(".title4").hide("fast");
        $(".title5").hide("fast");
    });
    $("#b2").click(function(){
        $(".title1").hide("fast");
        $(".title2").show("fast");
        $(".title3").hide("fast");
        $(".title4").hide("fast");
        $(".title5").hide("fast");
    });
    $("#b3").click(function(){
        $(".title1").hide("fast");
        $(".title2").hide("fast");
        $(".title3").show("fast");
        $(".title4").hide("fast");
        $(".title5").hide("fast");
    });
    $("#b4").click(function(){
        $(".title1").hide("fast");
        $(".title2").hide("fast");
        $(".title3").hide("fast");
        $(".title4").show("fast");
        $(".title5").hide("fast");
    });
    $("#b5").click(function(){
        $(".title1").hide("fast");
        $(".title2").hide("fast");
        $(".title3").hide("fast");
        $(".title4").hide("fast");
        $(".title5").show("fast");
    });

    (function() {
        $('.footer').css('position', $(document).height() > $(window).height() ? "inherit" : "fixed");
    })();
});

var element=document.getElementById("menuLink")

    $('.menu__link').each(function(i){
        $(this).attr('id',"menuLink"+i)
      });

