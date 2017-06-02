$(function(){
	$('.menu li a').gradientText({
		colors: ['#cc33cc', '#BC004F']
	});

	$(".fancy").fancybox({
		padding: 0,
		fixed: false,
		closeClick: true,
		helpers: {
			overlay: {
				opacity: 0.3,
			},
		}
	});

	$(".photos a").attr('rel', 'gallery').fancybox({
		padding: 0,
		loop: false,
		nextEffect: 'fade',
		prevEffect: 'fade',
		nextClick: true,
		arrows: false,
		closeBtn: false,
		helpers: {
			overlay: {
				opacity: 0.9,
			},
			buttons: {},
			thumbs: {
				width: 50,
				height: 50
			}
		}
	});
});