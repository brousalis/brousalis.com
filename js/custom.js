var where = null;

$(document).ready(function(){

  function smart_columns() {
    $("ul#thumbs").css({ 'width' : "100%"});
    var col_wrap = $("ul#thumbs").width();
    var col_num = Math.floor(col_wrap / 400); 
    var col_fixed = Math.floor(col_wrap / col_num);
    $("ul#thumbs").css({ 'width' : col_wrap}); 
    $("ul#thumbs li").css({ 'width' : col_fixed}); 
  }
  smart_columns();

  var control_hash = "";
  $(function() {
    var new_hash = "",
    $main_content = $("#work-detail-wrapper"),
    $page_wrap = $("#thumb-wrapper");
    
    $(".launcher").delegate("a:not(#filters-launcher)", "click", function() {
      window.location.hash = $(this).attr("href");
      where = 1;
      if ($.browser.msie) {
        if(parseInt($.browser.version, 10) <= 7){
          window.location.reload();
        };
      }   
      return false;
    });

    $("li.thumb").delegate("a", "click", function() {
    	if ($(this).attr("href") != control_hash) {
    		create_loader($(this));
	      window.location.hash = $(this).attr("href");
	      where = 1;
    	} else {
    		if (control_hash != "") {
    			$main_content.slideDown(300, function() {
					  var viewport_height = $(window).height();
					  $main_content.height(viewport_height);
	        });
    		}
    	}
    });
	
    $(window).bind('hashchange', function(){                                  
      new_hash = window.location.hash.substring(1);
      if (new_hash && new_hash != control_hash) {
        control_hash = window.location.hash.substring(1);
        $main_content.load(new_hash, function(response, status, xhr) {
          if (status == "error") {
            $('#imgLoad').remove();
          }
          $('#imgLoad').remove();
          $('#prev').click(function(){
            activeSlides();
          });
          $('#next').click(function(){
            activeSlides(1);
          });
          $main_content.slideDown(300, function() {
            var viewportHeight = $(window).height();
            $main_content.height(viewportHeight);
          });
          $('html,body,#wrapper').animate({scrollTop:0}, 500);
          slideWorks();
          centerWork();
          closeSlideWork();
          $('#slides img').load(function() {  
            var aparece = setTimeout("$('figure img').animate({opacity: 1},2000)", 200); 
          });
          $("img.img-work-back").fullBg();
            $(".thumbs a").removeClass("current");
            $(".thumbs a[href='"+new_hash+"']").addClass("current");
            setTimeout(
             function(){
              mCustomScrollbars();
            }, 1000);
            $('#slideshow').fullDivGal();
        });
      };
    });
    
    $(window).trigger('hashchange');
  });

  function create_loader(where_to){
    var img = document.createElement("img");
    img.setAttribute("id", 'imgLoad');
    img.setAttribute("src", "images/ajax-loader.gif");
    where_to.append(img);
  }

  var workWrapper = $('#work-detail-wrapper');
  function viewportHeight(){
    return $(window).height();
  };
  function viewportWidth(){
    return $(window).width();
  };
  function slideWorks() { 
    workWrapper.height(viewportHeight());
    workWrapper.width(viewportWidth());
  }
  slideWorks();//Execute the function when page loads

  function closeSlideWork(){
    $('#closebt a').click(function () {
      $("#work-detail-wrapper").slideUp();
      where = null;
    });
  };

  function centerWork() { // centering works
    function wrapper (){
    	return $("#work-detail-wrapper"); 
    }
    var itemW = $(".item-wrapper");
    var theItem = $('.item-wrapper .item');
    theItem.css('height', itemW.height() - 222 +'px');
  };

  function infoDiv(){
    return $('div.info-work');
  }

  function showInfo(){
	  if (infoDiv().css('display') = 'none'){
		  infoDiv().fadeIn(1000);
	  } else {
		  infoDiv().fadeOut(1000);
	  }
  }

  $(window).load(function(){
    (function(){
		  $('.thumb').fadeTo(250, 0.4);
	  });
	  centerWork();
  });

  $(window).resize(function(){
	  slideWorks(); //Esential for calculate sizes in iPad landscape/portrait modes.
	  centerWork();
	  smart_columns();
  });

  $('#filters-launcher').click(function(){
	  $('#filters').fadeIn(500);
	  $('#sections').fadeOut(500);
  });

  $('.close-sub').click(function(){
	  $('#filters').fadeOut(500);
	  $('#sections').fadeIn(500);
  });

  var cat = "none";
  if(cat == "none")
		$(".thumb").fadeTo(100, 0.4);

  $("#filter-menu a").click(function() {
	  cat = $(this).attr("class");
	  $("#works .thumb").not("."+cat).fadeTo(100, 0.1);
    $("#works .thumb").filter("."+cat).fadeTo(100, 1);
    $("#filter-menu a").parent().removeClass("active");
    $(this).parent().addClass("active");
	
	  function altoScroll(){
      return $('#work-detail-wrapper').height();
    };

    $('html,body,#wrapper').animate({scrollTop: (where) ? altoScroll() : 0}, 500);
    return false;
  });

  $("#filter-menu a.none").click(function() {
	  $("#works .thumb").animate({ opacity: 0.4 },{queue:true, duration:250, easing: 'easeInOutExpo'});
  }); 

  $("#network-menu li a").click(function() {
    window.open(this.href);
    return false;
  }); 

  $('.thumb').hover(function(){
    if(cat== null || cat == "none" )
      $(this).fadeTo(100, 1);
  }, function(){
    if(cat== null || cat == "none" )
      $(this).fadeTo(100, 0.4)
  });

});

var ADAPT_CONFIG = {
  path: 'assets/',
  dynamic: true,
  range: [
    '0px    to 449px  = mobile.css',
    '459px  to 840px  = middle.css',
    '841px  to 1440px = large.css',
    '1441px = xlarge.css'
  ]
};
