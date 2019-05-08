$(function() {

	setParallaxWithBar();

	function setParallaxWithBar() {
			var numPage = $('.scroll-page').length;
			var pagePrev = 0;
			var pageNow = 0;
			var pageNext = 0;
			var isWheelBlocked = false;
			var isFooterVisible = false;
			var timerId = 0;

			// mousewheel 이벤트
			$(window).on('mousewheel DOMMouseScroll', function(e) {
					e.preventDefault();
					clearTimeout(timerId);
					timerId = setTimeout(function() {isWheelBlocked = false;}, 300);
					if (isWheelBlocked === true) return false;
					isWheelBlocked = true;
					var delta = 0;
					if (e.originalEvent.wheelDelta) {  // 일반 브라우저
							delta = e.originalEvent.wheelDelta / -120;
					} else {  // 파이어폭스
							delta = e.originalEvent.detail / 3;
					}
					if (delta > 0) {
							if (pageNow === numPage) {
									showPage('footer');
							} else {
									showPage(pageNext);
							}
					} else {
							if (pageNow === numPage && isFooterVisible === true) {
									showPage(pageNow);
							} else {
									showPage(pagePrev);
							}
					}
			});

			// 상태체크(이동시)
			$(window).on('scroll resize', function() {
					checkScroll();
			});


			function checkScroll() {
					var scrollTop = $(document).scrollTop();
					var startFooterVisible = $('.scroll-page:eq(' + (numPage - 1) + ')').offset().top + $('footer').outerHeight() / 2;
					var minScroll = 0;
					var maxScroll = 0;
					// 현재 페이지 확인
					$('.scroll-page').each(function(i) {
							minScroll = (i * $(window).outerHeight()) - ($(this).outerHeight() / 2);
							maxScroll = (i * $(window).outerHeight()) + ($(this).outerHeight() / 2);
							if (scrollTop >= minScroll && scrollTop < maxScroll) {
									pageNow = (i + 1);
									pageNow = (i + 1);
									pagePrev = ((i + 1) - 1) < 1 ? 1 : (i + 1) - 1;
									pageNext = ((i + 1) + 1) > numPage ? numPage : (i + 1) + 1;
							}
					});
					if (scrollTop > startFooterVisible) {
							isFooterVisible = true;
					} else {
							isFooterVisible = false;
					}
					console.log(pagePrev + ' / ' + pageNow + ' / ' + pageNext);
			}

			function showPage(n) {
					var scrollTo = 0;
					if (n === 'footer') {
							scrollTo = $('.scroll-page:eq(' + (numPage - 1) + ')').offset().top + $('footer').outerHeight();
					} else {
							scrollTo = $('.scroll-page:eq(' + (n - 1) + ')').offset().top;
					}
					$('html').stop(true).animate({scrollTop: scrollTo}, 500);
			}
	}
	
	$('.year-left').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
	});
	
	$('.year-right').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
	});
	
	});