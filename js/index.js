$(document).ready(function () {

    /*footer - 스크롤 내렸을시 footer가 보인다.*/

    /*$(window).scroll(function () {

        var docHeight = $(this).height();
        var current = $(this).scrollTop() + $(window).height();

        var currentScroll = parseInt(current);

             console.log("docHeight : "+docHeight + "/ currentScroll : " + currentScroll );


        if (docHeight < currentScroll) {
            $("footer").slideDown("fast");

        } else {
            $("footer").slideUp("fast");
            $("main").css({
                "margin-bottom": 150
            });
        }

        docHeight = currentScroll;

    });*/


    /*출발,도착 버튼 선택시 font color 변경*/
    $(".flight-btn > a").click(function (e) {
        e.preventDefault();
        $(this).addClass("select").siblings().removeClass("select");

    });


    /*검색버튼 클릭시 검색결과 slideUp()*/

    /*결과이미지가 나오는 함수*/
    var callback = function (e) {
        e.preventDefault();
        $(".result-img").fadeToggle();
    };

    $(".flight-result-btn a").keypress(function (e) {
        e.preventDefault();
        /*enter key 눌렀을 시*/
        if (e.which == 13) callback();
    });

    $(".flight-result-btn a").click(callback);


    /*닫기버튼 클릭시 검색결과 slideDown()*/
    $(".result-img > .close").click(callback);
    
    
    
    

});/*//document*/








/**/
