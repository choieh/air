$(document).ready(function () {
    
    /*nav - 서브메뉴 1280px*/
    $(".header-bottom").hide();

    $(".gnb-web-list > li.web-menu-on").mouseover(function () {
        $(".header-bottom").show();
    });

    $(".gnb-web-list > li.web-menu-on").mouseout(function () {
        $(".header-bottom").hide();
    });
    
    /*nav-bar*/
    /*nav-bar 버튼을 클릭했을때*/
    $(".nav-bar").click(function () {
        $("nav").toggleClass("on"); /*nav 영역이 보여진다.*/
        $(".nav-bar").toggleClass("clicked"); /*nav-bar버튼이 펼쳐져있을때 모양이 'X'로 바뀌고, 아닐때는 '≡'로 바뀐다.*/
        $(".gnb>.gnb-list>li").children(".sub-menu").slideUp(); /*'X'일때 클릭시 리스트의 서브메뉴가 닫힌다.*/
    });
    
    /*서브메뉴*/
    /*메뉴 리스트를 클릭했을때*/
    $(".gnb-list>li").on("click",function(){
        
        /*현재 클릭한 리스트 번호*/
        var index = $(this).index(); 
       
       /*클릭한 글자에만 색을 넣고 그외에는 없앤다.*/ $(this).children("a").addClass("on").parent().siblings().children("a").removeClass("on");
        
        /*리스트에 포커스없을시 글자 색상을 없앤다.*/
        $(".gnb-list>li").focusout(function(){
            $(".gnb-list>li").children("a").removeClass("on");
        });
  
        if(index == 0){ /*조건(소메뉴가 있는 인덱스) : 인덱스 번호가 0일때*/
            
            /*인덱스번호의 리스트의 소메뉴만 보여지고 그외에는 접는다. */
            $(".gnb-list>li").eq(index).children(".sub-menu").slideToggle().parent().siblings().children(".sub-menu").slideUp(); 
            
        }else if(index == 4){ /*조건(소메뉴가 있는 인덱스) : 인덱스 번호가 4일때*/
            
            /*인덱스번호의 리스트의 소메뉴만 보여지고 그외에는 접는다. */
            $(".gnb-list>li").eq(index).children(".sub-menu").slideToggle().parent().siblings().children(".sub-menu").slideUp();
            
        }else{
            /*소메뉴가 없는 리스트를 클릭했을때 이미 펼쳐져있는 소메뉴들을 접는다.*/
            $(".gnb-list>li").children(".sub-menu").slideUp();
        }
    });
   
    
    /*quick*/
    /*퀵메뉴 버튼 클릭시*/
    $(".quick-btn").click(function(e){
        e.preventDefault(); /*a링크 이동 해제*/
        $("#quick").toggleClass("quick-before"); /*퀵메뉴 배경 toggle*/
        $(".quick-menu-list").fadeToggle(); /*퀵메뉴 리스트 fadeToggle*/
        $(".quick-btn").toggleClass("rotate"); /*퀵메뉴 버튼 회전*/
        
    });
    
    /*modal*/
    /*퀵메뉴 리스트 클릭시*/
    $(".quick-menu-list-item").on("click",function(){
        /*현재 클릭한 리스트 번호*/
        var index = $(this).index();
        
        console.log(index);
        
        /*modal이 보여진다*/
        $(".modal").addClass("show"); 
        
        if(index == 0){ /* 0 == 내 터미널 확인하기 */
            $(".modal-my-terminal").addClass("show").siblings().removeClass("show");  
        }else if(index == 1){ /* 1 == 공항 한눈에 보기 */
            $(".modal-view-airport").addClass("show").siblings().removeClass("show");
        }else if(index == 2){ /* 2 == 오시는길 */
            $(".modal-road-map").addClass("show").siblings().removeClass("show");
        }else{ /* 3 == Top(맨위로 올라가기) */
            $(".modal").removeClass("show");
            $('html, body').animate({
                scrollTop : 0
            }, 400);
            return false;
        }
        
    });
    
    /*modal의 닫기 버튼, modal 배경을 클릭했을시*/
    $(".close , .modal-close-bg").on("click",function(){
        $(".modal").removeClass("show"); /*modal이 닫힌다.*/
    });

});





































/**/