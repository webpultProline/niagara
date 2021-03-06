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
		
		$('.slider-out_btn').click(function(){
			var action = $(this).attr('data-action');
			switch(action){
				case 'prev' : {
					$('#'+$(this).attr('data-slider')).slick('slickPrev');
				} break;
				case 'next' : {
					$('#'+$(this).attr('data-slider')).slick('slickNext');
				} break;
			}
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
	
	
	
	
	
	/*Каталог - навигация*/
	//custom_selectEvents(true,true,$(this),'HasPopUp');
	$('.navigation--catalog-btn').click(function(){
		if($(this).hasClass('openOnEvent') == false){
			custom_selectEvents(true,true,$(this),'navigation--catalog');
			$(this).addClass('openOnEvent');
			$('body').addClass('openNavigation');
		} else {
			custom_selectEvents(false,true,$(this),'navigation--catalog');
			$(this).removeClass('openOnEvent');
			$('body').removeClass('openNavigation');
		}
	});
	$('.navigation--catalog-close').click(function(){
		$('.navigation--catalog-btn').removeClass('openOnEvent');
		$('body').removeClass('openNavigation');
		custom_selectEvents(false,true,$(this),'navigation--catalog');
	});
	
	function custom_selectEvents(status_,onactive_,parent_,parent_class_){
		window.custom_select = status_;
		window.custom_select_block = onactive_;
		window.custom_select_parent = parent_;
		window.custom_select_parent_class = parent_class_;
	}

	$(window).click(function(event){
		if(window.custom_select == true){
			if($(event.target).parents().hasClass(window.custom_select_parent_class) == false && $(event.target).hasClass(window.custom_select_parent_class) == false){
				if(window.custom_select_block == false){
					window.custom_select_parent.removeClass('openOnEvent');
					$('body').removeClass('openNavigation');
				}
			}
			window.custom_select_block = false;
		}
	});
	
	function touchAction(){
		window.touchForSelectRegion = 0;
		window.touchStartForSelectRegion = 0;
		window.touchCheckForSelectRegion = false;
		window.touchForSelectRegionDeltaY = 0;
		window.stopActionForSelectRegion = false;
		
		$('.navigation--catalog').on('touchstart', function(event){
			if($('.navigation--catalog-btn').hasClass('openOnEvent') == true){
				if($(window).width() < 992){
					window.touchStartForSelectRegion = event['originalEvent']['touches'][0]['clientX'];
				}
			}
		});
		$('.navigation--catalog').on('touchmove', function(event){
			if($('.navigation--catalog-btn').hasClass('openOnEvent') == true){
				if($(window).width() < 992){
					var nowDeltaX = event['originalEvent']['touches'][0]['clientX'] - window.touchStartForSelectRegion;
					if(nowDeltaX <= -10 && window.stopActionForSelectRegion == false){
						window.touchCheckForSelectRegion = true;
						var window_width = $(window).width();
						var one_percent = window_width/100;
						var opacity_now = ((window_width-(nowDeltaX*-1))/one_percent)/100;
						if($('.navigation--catalog').hasClass('moved') == false){
							$('.navigation--catalog').addClass('moved')
						}
						$('.navigation--catalog').css({
							'transform':'translateX('+nowDeltaX+'px) translateY(100%)',
							'opacity':opacity_now*1.25
						});
						window.touchForSelectRegion = nowDeltaX;
					} else {
						window.touchForSelectRegion = 0;
						window.touchStartForSelectRegion = 0;
						window.touchCheckForSelectRegion = false;
						$('.navigation--catalog').attr('style','');
						$('.navigation--catalog').removeClass('moved');
						if(window.stopActionForSelectRegion == false){
							window.stopActionForSelectRegion = true;
						}
					}
				}
			}
		});
		$('.navigation--catalog').on('touchend', function(event){
			if($('.navigation--catalog-btn').hasClass('openOnEvent') == true){
				if($(window).width() < 992){
					if(window.touchForSelectRegion < (($(window).width()/2)*-1)){
						if(window.touchCheckForSelectRegion == true){
							$('.navigation--catalog-btn').removeClass('openOnEvent');
							$('body').removeClass('openNavigation');
						}
					}
					window.touchForSelectRegion = 0;
					window.touchStartForSelectRegion = 0;
					window.touchCheckForSelectRegion = false;
					$('.navigation--catalog').attr('style','');
					$('.navigation--catalog').removeClass('moved');
					window.stopActionForSelectRegion = false;
				}
			}
		});
	}
	touchAction();
	
	/*кастомные слекты*/
	$('.custom--select').click(function(event){
		if($(this).find('.custom--select-val').hasClass('openOnEvent') == false){
			custom_selectEvents(true,true,$(this).find('.custom--select-val'),'custom--select-main');
			$('.custom--select').find('.custom--select-val').removeClass('openOnEvent');
			$(this).find('.custom--select-val').addClass('openOnEvent');
		} else {
			if($(event.target).parents().hasClass('custom--select-main') == false && $(event.target).hasClass('custom--select-main') == false){
				custom_selectEvents(false,true,$(this).find('.custom--select-val'),'custom--select-main');
				$(this).find('.custom--select-val').removeClass('openOnEvent');
			} else {
				if($(event.target).hasClass('custom--select-link') == true){
					custom_selectEvents(false,true,$(this).find('.custom--select-val'),'custom--select-main');
					$(this).find('.custom--select-val').removeClass('openOnEvent');
				} else {
					custom_selectEvents(true,true,$(this).find('.custom--select-val'),'custom--select-main');
					$(this).find('.custom--select-val').addClass('openOnEvent');
				}
			}
		}
	});
	if($(".custom--select-main").length > 0){
		$(".custom--select-main").mCustomScrollbar({
			theme:"dark",
			axis: 'y'
		});
	}
	$('.custom--select').find('.custom--select-link').click(function(){
		if(typeof $(this).parents('.custom--select').find('.custom--select-val').attr('data-def') === typeof undefined){
			$(this).parents('.custom--select').find('.custom--select-val').attr('data-def',$(this).parents('.custom--select').find('.custom--select-val').text());
		}
		$(this).parents('.custom--select').find('.custom--select-val').text('');
		$(this).parents('.custom--select').find('.custom--select-val').text($(this).text());
		$(this).parents('.custom--select').find('input[type="hidden"]').val('');
		$(this).parents('.custom--select').find('input[type="hidden"]').val($(this).attr('data-value'));
		
		$(this).parents('.custom--select').find('input[type="hidden"]').addClass('selected');
	});
	$('.custom--select').find('.custom--select-status').click(function(){
		if($(this).parents('.custom--select').find('input[type="hidden"]').hasClass('selected') == true){
			$(this).parents('.custom--select').find('input[type="hidden"]').removeClass('selected');
			$(this).parents('.custom--select').find('.custom--select-val').text('');
			$(this).parents('.custom--select').find('.custom--select-val').text($(this).parents('.custom--select').find('.custom--select-val').attr('data-def'));
		}
	});
	
	$('.filter--view-more').click(function(){
		$(this).toggleClass('open');
		$(this).parent().toggleClass('open');
		$(this).parent().find('.container').first().stop().slideToggle(350);
	});
	/*табы*/
	function setIndicator(){
		var active_btn = $('.tabs--btn.active');
		var position_left = active_btn.position().left;
		var width_btn = active_btn.outerWidth();
		var setPos = position_left+(width_btn/2)-($('.tabs--btn_indicator').width()/2);
		$('.tabs--btn_indicator').css('left',setPos+'px')
	}
	if($('.tabs--btn_indicator').length > 0){
		setIndicator();
	}
	$('.tabs--btn').click(function(){
		$('.tabs--btn').removeClass('active');
		$(this).addClass('active');
		setIndicator();
		$("#"+$(this).attr('data-parent')).find('.product--tab').removeClass('open');
		$("#"+$(this).attr('data-parent')).find('#'+$(this).attr('data-tab')).addClass('open');
	});
	/*инпуты*/
	$('.label--input input , .label--input textarea').change(function(){
		if($(this).val() != ''){
			$(this).addClass('val');
		} else {
			$(this).removeClass('val');
		}
	});
	/*карточка товаров*/
	if($('[data-fancybox="gallery"]').length > 0){
		$('[data-fancybox="gallery"]').fancybox({
			backFocus : false,
			btnTpl: {
				download: '',
				arrowLeft: 	'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
							'<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21000 21000">'+
							'<path style="fill: #ffffff" d="M11775.22 13106.63l-3681.3 -2428.65 3681.3 -2428.66 0 4857.31zm-1275.22 -13106.63c5789.7,0 10500,4710.3 10500,10500 0,5789.7 -4710.3,10500 -10500,10500 -5789.7,0 -10500,-4710.3 -10500,-10500 0,-5789.7 4710.3,-10500 10500,-10500zm0 20475c5500.43,0 9975,-4474.57 9975,-9975 0,-5500.43 -4474.57,-9975 -9975,-9975 -5500.43,0 -9975,4474.58 -9975,9975 0,5500.42 4474.57,9975 9975,9975z"/>'+
							'</svg></div>'+
							'</button>',
				arrowRight:	'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
							'<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21000 21000">'+
							'<path style="fill: #ffffff" d="M9224.78 13106.63l3681.3 -2428.65 -3681.3 -2428.66 0 4857.31zm1275.22 -13106.63c-5789.7,0 -10500,4710.3 -10500,10500 0,5789.7 4710.3,10500 10500,10500 5789.7,0 10500,-4710.3 10500,-10500 0,-5789.7 -4710.3,-10500 -10500,-10500zm0 20475c-5500.43,0 -9975,-4474.57 -9975,-9975 0,-5500.43 4474.57,-9975 9975,-9975 5500.43,0 9975,4474.58 9975,9975 0,5500.42 -4474.57,9975 -9975,9975z"/>'+
							'</svg></div>' +
							'</button>',
			}
		});
	}
	if($('.product--image-small_slider').length > 0){
		$('.product--image-btn').click(function(){
			var action = $(this).attr('data-action');
			switch(action){
				case 'prev' : {
					$('.product--image-small_slider').slick('slickPrev');
					$('.product--image-main_slider').slick('slickPrev');
				} break;
				case 'next' : {
					$('.product--image-small_slider').slick('slickNext');
					$('.product--image-main_slider').slick('slickNext');
				} break;
			}
		});
		
		$('.product--image-small_slider').on('swipe', function(event, slick, currentSlide, nextSlide){
			var curent = parseInt($('.product--image-small_slider .slick-slide.slick-current').attr('data-slick-index'),10);
			$('.product--image-main_slider').slick('slickGoTo',curent);
		});
		$('.product--image-main_slider').on('swipe', function(event, slick, currentSlide, nextSlide){
			var curent = parseInt($('.product--image-main_slider .slick-slide.slick-current').attr('data-slick-index'),10);
			$('.product--image-small_slider').slick('slickGoTo',curent);
		});
	}
	/*
	модальные окна
	*/
	if($('.phone_input').length > 0){
		$('.phone_input').inputmask({"mask": "+7 (999) 999-99-99"});
	}
	$('.openModalBTN').click(function(event){
		event.preventDefault();
		_setScrollbar();
		$('body').addClass('openModal');
		var targetBlock = $(this).attr('data-targetModal');
		$('.modal').removeClass('openModal');
		$('#'+targetBlock).addClass('openModal');
	});
	$('.close-modal').click(function(){
		if($('.mobile-menu_btn').hasClass('open-menu') == false){
			$('body').removeClass('openModal');
			_resetScrollbar();
		}
		$(this).parents('.modal').removeClass('openModal');
	});
	$(window).click(function(event){
		if($(event.target).hasClass('modal') == true){
			if($('.mobile-menu_btn').hasClass('open-menu') == false){
				$('body').removeClass('openModal');
				_resetScrollbar();
			}
			$(event.target).removeClass('openModal');
		}
	});
	
	function _setScrollbar() {
		var rect = document.body.getBoundingClientRect();
		var _isBodyOverflowing = rect.left + rect.right < window.innerWidth;
		var _scrollbarWidth = _getScrollbarWidth();
        if(_isBodyOverflowing){
			$('body').css('padding-right',_scrollbarWidth+'px');
        }
	};
	//_setScrollbar();
	
	function _resetScrollbar(){
		$('body').css('padding-right','0px');
	}
	
	function _getScrollbarWidth() {
		var scrollDiv = document.createElement('div');
		scrollDiv.className = 'modal-scrollbar-measure';
		document.body.appendChild(scrollDiv);
		var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
		document.body.removeChild(scrollDiv);
		return scrollbarWidth;
	};
	/*
	-----
	Карта
	-----
	*/
    ymaps.ready(init);
    function init(){ 
        // Создание карты.    
        var myMap = new ymaps.Map("map--bottom_container", {
            center: [55.633920, 37.439786],
            zoom: 7
        });
		var myPlacemark;
		myPlacemark = new ymaps.Placemark(myMap.getCenter(),
			{
				hideIcon: false
			},
			{
				iconLayout: 'default#image',
				iconImageHref: 'styles/img/map--logo.png',
				iconImageSize: [125, 57],
				iconImageOffset: [-62.5, -57]
			});
		myMap.geoObjects
			.add(myPlacemark);
			
		myMap.behaviors.disable('scrollZoom');
		myMap.setZoom(16)
    }
});