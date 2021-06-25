"use strict";






$(function(){
    
    
    // gnb lnb event
    var $lnb = $('.lnb');
    var $gnbItem = $('.gnb__item');
    
    // 초기 상태
    $lnb.hide();
    
    // 구현 : 
    // gnb__title애 mouseenter시 해당 lnb 영역 show
    // mouseleave시 lnb 다시 hide
    // gnb__title 로 하면 여백에서 사라짐 오류
    // 부모요소는 gnb__list
    
    $gnbItem.mouseenter(function(){
        var idx = $(this).index();
        $lnb.eq(idx).show();
    });
    $gnbItem.mouseleave(function(){
        $lnb.hide();
    });
    



    // shopping news fixed






    // main banner slider 
    $('.main__banner').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    // arrow top btn
    var $header = $('#header');
    var $arrowUp = $('#arrowUp');

    $(window).scroll(function(){

        var scrollTop = $(window).scrollTop();
        var mainHeight = $('#main').outerHeight();

        /* 초기 상태 위에 있어서 안보이는 상태,
        main을 지나가면 서서히 보이게 하고
        다시 올라가면 서서히 안보이게 하라 */
        if( scrollTop < mainHeight ){
            $arrowUp.fadeOut();
        }else{
            $arrowUp.fadeIn();
        }        

    })


});