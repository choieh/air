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
	
	//리스트 누르면 디테일 보여주기
	$('.inner-flight-list > li .flight-info').on('click', function(e) {
		e.preventDefault();
		var index = $('.inner-flight-list > li').index($(this).parent());
		showDetail(index);
	});
	function showDetail(n) {
		if ($('.inner-flight-list > li:eq(' + n + ')').hasClass('on')) {
			$('.inner-flight-list > li:eq(' + n + ')').removeClass('on');
			$('.inner-flight-list > li:eq(' + n + ') div.flight-detail').slideUp(500);
			$('.flight-info:focus').blur();
		} else {
			$('.inner-flight-list > li').removeClass('on');
			$('.inner-flight-list > li:eq(' + n + ')').addClass('on');
			$('.inner-flight-list > li div.flight-detail').slideUp(500);
			$('.inner-flight-list > li:eq(' + n + ') div.flight-detail').slideDown(500);
			
		}
	}
	
	
});

