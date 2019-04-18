$(document).ready(function () {

    /*nav - 서브메뉴*/
    $(".header-bottom").hide();

    $(".gnb > ul > li.menu-on").mouseover(function () {
        $(".header-bottom").show();
    });

    $(".gnb > ul > li.menu-on").mouseout(function () {
        $(".header-bottom").hide();
    });
    
    
    /*footer - 스크롤 내렸을시 footer가 보인다.*/

 $(window).scroll(function(){
     
     var docHeight = $(this).height();
     var current = $(this).scrollTop() + $(window).height();
     
     var currentScroll = parseInt(current);
     
     console.log("docHeight : "+docHeight + "/ currentScroll : " + currentScroll );
     
     
     if(docHeight < currentScroll){
         $("footer").slideDown("fast");
         
     }else{
         $("footer").slideUp("fast");
         $("main").css({
             "margin-bottom" : 120
//             "margin-bottom" : 200
         });
     }
     
     docHeight = currentScroll;
     
 });

});





































/**/