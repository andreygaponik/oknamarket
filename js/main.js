function selectWrapper(select) {
	$(select).each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

	});
}

$(function() {

	// align description block in slider
	var slideDescription = $('.slide__item__description').height();
	$('.slide__item__description').css('marginTop', -slideDescription / 2);

	// align description block in suggestions 

	var suggestionsDescription = $('.b-full__description').height();
	$('.b-full__description').css('marginTop', -suggestionsDescription / 2);

	selectWrapper('select');

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

    $('#add-field__sill').click(function(event) {
    	event.preventDefault();

      $('<div class="b-default__add-field"><div class="b-sill__style"><select id="sill-style"><option value="Глухая">Металл (белый)</option><option value="Поворотная">Металл (белый)</option><option value="Поворотно-откидная">Металл (белый)</option></select></div><div class="b-sill__width"><label for="b-level-3__window-width">Ширина</label><select id="b-level-3__window-width"><option value="Глухая">2500</option><option value="Поворотная">3000</option><option value="Поворотно-откидная">3500</option></select></div><div class="b-sill__height"><label for="b-level-3__window-height">Длина</label><select id="b-level-3__window-height"><option value="Глухая">2500</option><option value="Поворотная">3000</option><option value="Поворотно-откидная">3500</option></select></div><a href="" class="sill__remove"></a></div>')
				.fadeIn('slow')
        .prependTo('#b-calc__sill');


      var a = $('#b-calc__sill').find('select');
      var b = $('#b-calc__sill').find('.select select');


      if (a.parent().parent('.select')) {
      	console.log('acc')
      } else {
      	selectWrapper(a);
      }
      console.log(a.parent());

      console.log(b.length);

      
    });

    $('#remove').click(function() {
    if(i > 1) {
        $('.field:last').remove();
        i--;
    }
    });

    $('#reset').click(function() {
    while(i > 2) {
        $('.field:last').remove();
        i--;
    }
    });

    // here's our click function for when the forms submitted

    $('.submit').click(function(){
    var answers = [];

    $.each($('.field'), function() {
        answers.push($(this).val());
    });

    if(answers.length == 0) {
        answers = "none";
    }  

    alert(answers);

    return false;

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

