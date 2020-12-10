$(function () {
	$(document).scroll(function () {
		var $nav = $(".fixed-top");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
		var $div = $(".navbar-nav");
		$div.toggleClass('scrolled', $(this).scrollTop() > $div.height());
	});
});