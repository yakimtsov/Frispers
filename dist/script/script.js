$('input[name="block"]').click(function(){
	var target = $('#block-' + $(this).val());
 
	$('.facilities__content-block-img-area').not(target).hide(0);
	target.fadeIn(500);
});
$('.button-block1').on('click', function(){
	$('.pretext1').slideToggle()
});
$('.button-block2').on('click', function(){
	$('.pretext2').slideToggle()
});
$('.button-block3').on('click', function(){
	$('.pretext3').slideToggle()
});
$('.gallery__content-img').slick({
	infinite: true,
	slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
	prevArrow: '.icon-first',
	nextArrow: '.icon-second'	
});
$('.reviews__content-block').slick({
	infinite: true,
	slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
	prevArrow: '.spaces__content-icon-first',
	nextArrow: '.spaces__content-icon-second'	
});
$('.header__button-sign').on('click', function(e){
	$('.modal-overlay').fadeIn()
})
$('.modal-overlay').on('click', function(e){
	if($(e.target).closest('.modal__sign').length ==0){
	$('.modal-overlay').fadeOut()
	}
})
$('.modal__sign-close').on('click', function(){
	$('.modal-overlay').fadeOut()
})


$('#form-button').on('click', function(e){
    e.preventDefault();

    let name = $('#name').val().trim();
    let email = $('#email').val().trim();

    if(name == ""){
        $('#error-name').text('Enter your name');
        return false
    }else if(email == ""){
        $('#error-email').text('Enter your email');
        return false

    }
    $.ajax({
        url: '../ajax/telegram.php',
        type: 'POST',
        cache: false,
        data: {'email': email, 'password': password},
        dataType: 'html',
        beforeSend: function(){
            $('#sign-button').prop('disabled', true)
        },
        success: function(){
            $('.modal-overlay').fadeOut();
            $('#name').val('');
            $('#email').val('');
            $('#error-email').text('');
            $('#error-name').text('');
            $('#form-button').prop('disabled', false)
        }
    })
})
