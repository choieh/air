$(document).ready(function () {


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
    $(".result-img > .rst-close").click(callback);
    
    
    
    

});/*//document*/








/**/
