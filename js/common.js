$(function(){
    $("#k_gnb>li").on("mouseover focusin",function(){
        $(this).addClass("k_gnb_act");
        $(this).children().addClass("k_gnb_act");
    });
    $("#k_gnb>li").on("mouseout focusout",function(){
        $(this).removeClass("k_gnb_act");
        $(this).children().removeClass("k_gnb_act");
    });
}); //END