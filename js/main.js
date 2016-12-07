$(function() {

	// align description block in slider
	var slideDescription = $('.slide__item__description').height();
	$('.slide__item__description').css('marginTop', -slideDescription / 2);

	// align description block in suggestions 

	var suggestionsDescription = $('.suggestions__full__description').height();
	$('.suggestions__full__description').css('marginTop', -suggestionsDescription / 2);

	// var suggestionsDescription = $('.suggestions__min__description').height();
	// $('.suggestions__min__description').css('marginTop', -suggestionsDescription / 2);
});

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  arrows: false,
  draggable: false
});