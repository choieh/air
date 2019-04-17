$(document).ready(function () {

    /*nav - 서브메뉴*/
    $(".header-bottom").hide();

    $(".gnb > ul > li.menu-on").mouseover(function () {
        $(".header-bottom").show();
    });

    $(".gnb > ul > li.menu-on").mouseout(function () {
        $(".header-bottom").hide();
    });

});


/*footer - 스크롤 내렸을시 footer가 보인다.*/
