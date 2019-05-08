$(document).ready(function() {

//출발, 도착 tab
   $('div.tab a').on('click', function(e) {
      e.preventDefault();
      var idx = $(this).index();
       
      if ($(this).hasClass('tab-entran')) {
          $('div.depart').css({'display': 'none'})
          $('div.entran').css({'display': 'block'});
          
          //초기화
          $('div.tab a').removeClass('on');
          $('div.tab a').css({
             'color': '#000',
             'line-height': '60px',
             'height': '60px',
             'margin-top': '10px',
             'background': '#d8d8d8',
             'border' : 'none',
             'border-bottom' : '1px solid #7a7a7a', 
         });  
          
          //선택적용
          $(this).addClass('on');
          $('div.tab a:nth-child('+ (idx + 1) + ')').css({
             'color': '#009afa',
             'line-height': '70px',
             'height': '70px',
             'margin-top': '0',
             'background': 'none',
             'border' : '1px solid #7a7a7a',
             'border-bottom' : 'none'
         });   
      } 
      else if ($(this).hasClass('tab-depart')) {
          $('div.entran').css({'display': 'none'});
          $('div.depart').css({'display': 'block'});
         
          //초기화
          $('div.tab a').removeClass('on');
          $('div.tab a').css({
             'color': '#000',
             'line-height': '60px',
             'height': '60px',
             'margin-top': '10px',
             'background': '#d8d8d8',
             'border' : 'none',
             'border-bottom' : '1px solid #7a7a7a', 
         });  
          
          //선택적용
          $(this).addClass('on');
          $('div.tab a:nth-child('+ (idx + 1) + ')').css({
             'color': '#009afa',
             'line-height': '70px',
             'height': '70px',
             'margin-top': '0',
             'background': 'none',
             'border' : '1px solid #7a7a7a',
             'border-bottom' : 'none'
         }); 
      }  
   })
   $('div.more a').on('click', function(e) { 
       e.preventDefault();
   }) 
});