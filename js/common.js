$(function(){
    $("#k_gnb>li").on("mouseover focusin",function(){
        $(this).addClass("k_gnb_act");
        $(this).children().addClass("k_gnb_act");
    });
    $("#k_gnb>li").on("mouseout focusout",function(){
        $(this).removeClass("k_gnb_act");
        $(this).children().removeClass("k_gnb_act");
    });
    
    var mcount = 0;
    $(".m_k_gnb_btn").click(function(){
        mcount++;
        if(mcount%2==1){
            $(this).addClass("m_k_gnb_act");
            $(this).children().addClass("m_k_gnb_act");
            $(this).children("span").css("transition-duration","0.4s");
            $("#m_k_gnb_box").stop().slideDown(1000);
        }else{
            $(this).removeClass("m_k_gnb_act");
            $(this).children().removeClass("m_k_gnb_act");
            $(this).children("span").css("transition-duration","0s");
            $("#m_k_gnb_box").stop().slideUp(1000);
        };
    });
    var mgcount = 0;
    $("#m_k_gnb>li>p").click(function(){
        $(this).next("ul").stop().slideToggle(400);
        $(this).parent().siblings().children("ul").stop().slideUp(400);
    });
}); //END