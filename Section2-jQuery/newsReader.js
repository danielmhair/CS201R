var main = function() {
	$('.article').removeClass('current');
	$('.article').click(function() {
		$('.article').removeClass('current');
		$('.description').hide();
		$(this).addClass('current');
		$(this).children('.description').show();
	});
}

var hasDescription = true;
$(document).ready(main);
$(document).keypress(function(event) {
    
	if(event.which === 111) {
        $('.current').children('.description').toggle();
		hasDescription = !hasDescription;
    }
    else if (event.which === 110) {
        var currentArticle = $('.current');
		var nextArticle = currentArticle.next();
		if (nextArticle.length == 0) {
			nextArticle = $('.articles').children('.article').first();
		}
		
		currentArticle.removeClass('current');
		currentArticle.children('.description').hide();
        nextArticle.addClass('current');
		if (hasDescription) {
			nextArticle.children('.description').show();
		}
    }
});