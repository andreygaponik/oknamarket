$(function() {
	// align description block in slider
	var slideDescription = $('.slide__item__description').height();
	$('.slide__item__description').css('marginTop', -slideDescription / 2);

	// align description block in suggestions 
	var suggestionsDescription = $('.b-full__description').height();
	$('.b-full__description').css('marginTop', -suggestionsDescription / 2);

	// selectWrapper('select');
  $('.custom-select').styler({
    selectSmartPositioning: false 
  });
});

// ADD FIELDS ON CALCULATOR

function addField(item) {
  $('<div class="b-default__add-field"><div class="b-sill__style"><select id="sill-style" class="custom-select"><option value="Глухая">Металл (белый)</option><option value="Поворотная">Металл (белый)</option><option value="Поворотно-откидная">Металл (белый)</option></select></div><div class="b-sill__width"><label for="b-level-3__window-width">Ширина</label><select id="b-level-3__window-width" class="custom-select"><option value="Глухая">2500</option><option value="Поворотная">3000</option><option value="Поворотно-откидная">3500</option></select></div><div class="b-sill__height"><label for="b-level-3__window-height">Длина</label><select id="b-level-3__window-height" class="custom-select"><option value="Глухая">2500</option><option value="Поворотная">3000</option><option value="Поворотно-откидная">3500</option></select></div><a href="" class="sill__remove"></a></div>')
    .fadeIn('slow')
    .prependTo(item);

  $('.custom-select').styler({
    selectSmartPositioning: false 
  });

  $('.sill__remove').click(function(event) {
    event.preventDefault();

    $(this).parent('.b-default__add-field').remove();
  });
};

$('#add-field__sill').click(function(event) {
  event.preventDefault();

  addField('#b-calc__sill');
});

$('#add-field__tide').click(function(event) {
  event.preventDefault();

  addField('#b-calc__tide');
});

// COUNTER
var i;

$('.plus').click(function(event) {
  event.preventDefault();

  i = $(this).parent().find('.input-value').val();
  $(this).parent().find('.input-value').attr('value', ++i);
  console.log(i);

});

$('.minus').click(function(event) {
  event.preventDefault();

  i = $(this).parent().find('.input-value').val();

  if (i > 0 && i != -1) {
    $(this).parent().find('.input-value').attr('value', --i);
  }
});

// SLIDER

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  arrows: false,
  draggable: false
});

// ASIDE

$('.b-aside__list a').click(function(event) {
  event.preventDefault();

  var anchor = $(this).attr('href');

  $('.b-aside__list li').removeClass('b-list__active');

  $(this).parent().addClass('b-list__active');
  $(anchor + '').css('display','block');

  console.log(anchor);
});

// AJAX

// function call() {
//  	  var msg   = $('#formx').serialize();
//         $.ajax({
//           type: 'POST',
//           url: 'res.php',
//           data: msg,
//           success: function(data) {
//             $('#results').html(data);
//           },
//           error:  function(xhr, str){
// 	    alert('Возникла ошибка: ' + xhr.responseCode);
//           }
//         });
 
//     }

