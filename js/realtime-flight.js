$(document).ready(function() {
	//출발, 도착 tab
	$('div.tab a').on('click', function(e) {
		e.preventDefault();
		var idx = $(this).index();

		if ($(this).hasClass('on')) {
			return;
		} else {
			//초기화
			$('div.tab a').removeClass('on');
			$('div.tab a').css({
				'color': '#000',
				'line-height': '40px',
				'height': '40px',
				'margin-top': '10px',
				'background': '#d8d8d8'
			});
			//선택적용
			$(this).addClass('on');
			$('div.tab a:nth-child('+ (idx + 1) + ')').css({
				'color': '#009afa',
				'line-height': '50px',
				'height': '50px',
				'margin-top': '0',
				'background': 'none',
			});
		}
	});
	//리스트 누르면 상세 보여주기
	$('.inner-flight-list > .flight-info-box .flight-info').on('click', function(e) {
		e.preventDefault();
		var index = $('.inner-flight-list > .flight-info-box').index($(this).parent());
		var detailHeight = $(this).parent().find('.flight-detail .flight-detail-box').outerHeight();
		
		if ($(this).parent().hasClass('on')) {
			$(this).parent().removeClass('on');
			$(this).parent().find('.flight-detail').stop().animate({
				'height': 0
			}, 500);
		} else {
			$('.inner-flight-list > .flight-info-box').removeClass('on');
			$('.inner-flight-list > .flight-info-box .flight-detail').stop().animate({
				'height': 0
			}, 500);
			$(this).parent().addClass('on');
			$(this).parent().find('.flight-detail').stop().animate({
				'height': detailHeight
			}, 500);
		}
	});
});

