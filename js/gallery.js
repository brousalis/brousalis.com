(function($) {
	$.fn.fullDivGal = function(){
		// RECOGE DATOS Y CREA LAS CAPAS NECESARIAS
		var divGal = $(this);
		var imgs = divGal.find('img');  // recoge las imagenes
		var listas = divGal.find('li');  // recoge los li		
		var nimgs = listas.length;  //numero de imagenes
		var posicion = 0;
		var slides = divGal.find('ul');
		var fdgThumbs = $('<ul id="fdgThumbs"></ul>');
		var divThumbs = $('<div id="divThumbs"></div>');
		var fdgNav = $('<div id="fdgNav"></div>');
		var fdgPrev = $('<span id="fdgPrev">Prev</span>');
		var fdgNext = $('<span id="fdgNext">Next</span>');
		
		// CREA ELEMENTOS SLIDE Y THUMBS
		function creaLista(valor){
			var lThumb = $('<li id="fdgt'+ valor +'"><img src="'+ imgs.eq(valor).attr('src')+'" /></li>');
			lThumb.click(function(){
				posicion = valor;
				coloca();
			});
			fdgThumbs.append(lThumb);
		};
		for ( i=0; i < nimgs; i++){
			creaLista(i);
		};
		// PRECARGA Y CARGA DE IMAGENES
		for ( i = 0 ; i < nimgs ; i++ ){
			imgs.eq(i).load(function(){
				escala();
				fdgCenter();
			});
		};
		
		// ASIGNA FUNCIONES
		fdgPrev.click(function(){
			if (posicion != 0){
				posicion--;
				coloca();
			};
		});
		fdgNext.click(function(){
			if (posicion < (nimgs - 1) ){
				posicion++;
				coloca();
			};
		});
		
		// SLIDE - Coloca el ul#slide horizontalmente
		function coloca(){
			slides.stop();
			slides.animate({ left : '-'+divGal.width() * posicion }, 500);
			( posicion == 0 ) ? fdgPrev.addClass('hide') : fdgPrev.removeClass('hide');
			( posicion == ( nimgs - 1) ) ? fdgNext.addClass('hide') : fdgNext.removeClass('hide');
		};
		
		// CENTRA LAS CAPAS
		function fdgCenter(){
			var slidesLi = slides.find('li');
			var ratGal =  divGal.width() / divGal.height();
			// fix width ul#slide
			slides.width( divGal.width() * nimgs );
			slides.height( divGal.height());
			// fix width ul#slide li
			slidesLi.width( divGal.width());
			slides.css( 'left', '-' + divGal.width() * posicion +'px' );
		};
		$(window).resize(function(){
			fdgCenter();
			escala();
		});
	
		 // ESCALA IMAGENES
		function escala(e){
			var ratGal = divGal.width() / divGal.height() ;
			var cual;
			function escalada(x){
				var ratCual = x.width() / x.height();
				if ( ratCual > ratGal){
					x.width('100%');
					x.height('auto');
				} else{
					x.width('auto');
					x.height('100%');
				};
				x.stop().animate({
					marginTop : '-' + ( cual.height() / 2 ) + 'px'
				}, 300);
			};

			if (e){
				cual = imgs.eq(e);
				escalada(cual);
			}else{
				for (i= 0; i < nimgs ; i++){
					cual = imgs.eq(i);
					escalada(cual);
				};
			};
		};
		
		// :hover LINK IMAGES
		function hoverimg(){
			$('ul#fdgSlides li a img').css("opacity", "0.85");
			$('ul#fdgSlides li a img').mouseenter(function(){
				$(this).stop().animate({
					opacity: 0.4
				}, 700);
			});
			$('ul#fdgSlides li a img').mouseleave(function(){
				$(this).stop().animate({
					opacity: 0.85
				}, 700);
			});
		}
		
		// SUBE Y BAJA LOS THUMBS
		divThumbs.mouseenter(function(){
			$(this).stop();
			$(this).animate({
				marginTop: '-75px'
			}, 500);
		});
		divThumbs.mouseleave(function(e){
			$(this).stop();
			$(this).animate({
				marginTop: 0
			}, 1000 );
		});
		divThumbs.mouseleave();
		
		// AGREGA LOS ELEMENTOS CREADOS Y CENTRA Y ESCALA LAS CAPAS
		fdgNav.append(fdgPrev);
		fdgNav.append(fdgNext);
		divGal.append(fdgNav);
		divThumbs.append(fdgThumbs);
		divThumbs.append($('<span id="up">&uarr;</span>'));
		divGal.append(divThumbs);
		fdgCenter();
		coloca();
		escala();
		hoverimg();
	};
})(jQuery)
