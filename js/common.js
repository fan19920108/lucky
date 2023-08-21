$(function() {
	$menuBtn = $('.menuBtn');
	$menuBtn.on('click', function() {
		$menuBtn.toggleClass('open');
	});

	$subMenu = $('.menu .dropdown-menu a');
	$subMenu.on("click", function(e){
		$(this).parent('li').toggleClass('show');
		e.stopPropagation();
		e.preventDefault();
	});
});