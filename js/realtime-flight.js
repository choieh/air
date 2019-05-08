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
	$('ul.list > li a.li').on('click', function(e) {
		e.preventDefault();
		var index = $('ul.list > li').index($(this).parent());
		showDetail(index);
	});
	function showDetail(n) {
		if ($('ul.list > li:eq(' + n + ')').hasClass('on')) {
			$('ul.list > li:eq(' + n + ')').removeClass('on');
			$('ul.list > li:eq(' + n + ') div.detail').slideUp(500);
			$('.li:focus').blur();
		} else {
			$('ul.list > li').removeClass('on');
			$('ul.list > li:eq(' + n + ')').addClass('on');
			$('ul.list > li div.detail').slideUp(500);
			$('ul.list > li:eq(' + n + ') div.detail').slideDown(500);
			
		}
	}
	
	
});

