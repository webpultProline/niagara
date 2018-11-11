$(function(){
	/*карусели*/
	if($('.slider').length > 0){
		$('.slider').slick({
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			slidesToShow: 1,
			autoplay: false,
			variableWidth: false,
			centerMode: false,
			autoplaySpeed: 5000,
		});
		function setOptionSlider(){
			$('.slider').each(function(){
				/*адаптив*/
				var count_def = parseInt($(this).attr('data-count_def'),10);
				var xl_count = parseInt($(this).attr('data-xl_count'),10);
				var lg_count = parseInt($(this).attr('data-lg_count'),10);
				var md_count = parseInt($(this).attr('data-md_count'),10);
				var sm_count = parseInt($(this).attr('data-sm_count'),10);
				/**/
				if(typeof $(this).attr('data-dotsSet') !== typeof undefined && $(this).attr('data-dotsSet') !== false && $(this).attr('data-dotsSet') != '0'){
					var setDots = true;
				} else {
					var setDots = false;
				}
				if(typeof $(this).attr('data-arrowNav') !== typeof undefined && $(this).attr('data-arrowNav') !== false && $(this).attr('data-arrowNav') != '0'){
					var setArrows = true;
				} else {
					var setArrows = false;
				}
				//
				if(typeof $(this).attr('data-variableWidth') !== typeof undefined && $(this).attr('data-variableWidth') !== false && $(this).attr('data-variableWidth') != '0'){
					var variableWidth = true;
				} else {
					var variableWidth = false;
				}
				if(typeof $(this).attr('data-centerMode') !== typeof undefined && $(this).attr('data-centerMode') !== false && $(this).attr('data-centerMode') != '0'){
					var centerMode = true;
				} else {
					var centerMode = false;
				}
				//
				if(typeof $(this).attr('data-autoPlay') !== typeof undefined && $(this).attr('data-autoPlay') !== false && $(this).attr('data-autoPlay') != '0'){
					var autoPlay = false;
				} else {
					var autoPlay = true;
				}
				if(typeof $(this).attr('data-infinite') !== typeof undefined && $(this).attr('data-infinite') !== false && $(this).attr('data-infinite') != '0'){
					var infinite = false;
				} else {
					var infinite = true;
				}
				//
				if(typeof $(this).attr('data-fade') !== typeof undefined && $(this).attr('data-fade') !== false && $(this).attr('data-fade') != '0'){
					var fade = false;
				} else {
					var fade = true;
				}
				if(typeof $(this).attr('data-scrollSlide') !== typeof undefined && $(this).attr('data-scrollSlide') !== false && $(this).attr('data-scrollSlide') != '0'){
					var scrollSlide = count_def;
				} else {
					var scrollSlide = 1;
				}
				
				
				$(this).slick('slickSetOption',{
					infinite: infinite,
					slidesToScroll: 1,
					dots: setDots,
					arrows: setArrows,
					slidesToShow: count_def,
					autoplay: autoPlay,
					variableWidth: variableWidth,
					centerMode: centerMode,
					autoplaySpeed: 5000,
					fade: fade,
					responsive: [
						{
							breakpoint: 1199,
							settings: {
								slidesToShow: xl_count
							}
						},
						{
							breakpoint: 1024,
							settings: {
								slidesToShow: lg_count
							}
						},
						{
							breakpoint: 769,
							settings: {
								slidesToShow: md_count
							}
						},
						{
							breakpoint: 576,
							settings: {
								slidesToShow: sm_count,
							}
						}
					]
				},true);
			});
		}
		setOptionSlider();
		window.addEventListener('resize', function(event){
			setOptionSlider();
		});
	}
	/*галерея на главной странице*/
	$('.slider-btn').click(function(){
		changeSlide($(this).attr('data-action'),$(this).attr('data-select_slider'));
	});
	function initSlider(){
		$('.slider-new').find('.slide').each(function(){
			if($(this).index() == 0){
				$(this).addClass('slide-current');
			}
			$(this).attr('data-index',$(this).index());
		});
	}
	initSlider();
	function changeSlide(action,slider){
		var self = $(slider);
		var slide_to_show = self.find('.slide').length-self.find('.slide:hidden').length;//Кол-во слайдов отображаемых по свойствам css
		var now_current = self.find('.slide-current');//Как сейчас активный слайд
		var max_slide = self.find('.slide').length;//Кол-во всех слайдов
		var nex_slide = 0;
		switch(action){
			case 'next' : {
				nex_slide = parseInt(now_current.attr('data-index'),10)+1;
				//Обнуление
				self.find('.slide').removeClass('slide-current');
				//Проверка на макс. число слайдов
				if(nex_slide <= max_slide-slide_to_show){
					self.find('.slide[data-index="'+nex_slide+'"]').addClass('slide-current');
				} else {
					self.find('.slide[data-index="0"]').addClass('slide-current');
				}
			} break;
			case 'prev' : {
				if(parseInt(now_current.attr('data-index'),10) == 0){
					nex_slide = (max_slide-slide_to_show);
				} else {
					nex_slide = parseInt(now_current.attr('data-index'),10)-1;
				}
				//Обнуление
				self.find('.slide').removeClass('slide-current');
				//Активация слайда
				self.find('.slide[data-index="'+nex_slide+'"]').addClass('slide-current');
			} break;
		}
	}
	/*плитки с брендами*/
	$('.brands--item').find('div').mouseenter(function(){
		var background_image = $(this).attr('data-background');
		$(this).parents('.brands').css('background-image','url('+background_image+')');
	}).mouseleave(function(){
		$(this).parents('.brands').css('background-image','url('+$(this).parents('.brands').attr('data-background')+')');
	});
	
	
	
	
	

});