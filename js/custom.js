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
            active_slides();
          });
          $('#next').click(function(){
            active_slides(1);
          });
          $main_content.slideDown(300, function() {
            var viewport_height = $(window).height();
            $main_content.height(viewport_height);
          });
          $('html,body,#wrapper').animate({scrollTop:0}, 500);
          slide_works();
          center_work();
          close_slide();
          $('#slides img').load(function() {  
            var timer = setTimeout("$('figure img').animate({opacity: 1},2000)", 200); 
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

  var work_wrapper = $('#work-detail-wrapper');
  function viewport_height(){
    return $(window).height();
  };
  function viewport_width(){
    return $(window).width();
  };
  function slide_works() { 
    work_wrapper.height(viewport_height());
    work_wrapper.width(viewport_width());
  }
  slide_works();//Execute the function when page loads

  function close_slide(){
    $('#closebt a').click(function () {
      $("#work-detail-wrapper").slideUp();
      where = null;
    });
  };

  function center_work() { // centering works
    function wrapper (){
    	return $("#work-detail-wrapper"); 
    }
    var item_wrap = $(".item-wrapper");
    var item = $('.item-wrapper .item');
    item.css('height', item_wrap.height() - 222 +'px');
  };

  function info_div(){
    return $('div.info-work');
  }

  function show_info(){
	  if (info_div().css('display') = 'none'){
		  info_div().fadeIn(1000);
	  } else {
		  info_div().fadeOut(1000);
	  }
  }

  $(window).load(function(){
    (function(){
		  $('.thumb').fadeTo(250, 0.4);
	  });
	  center_work();
  });

  $(window).resize(function(){
	  slide_works(); //Esential for calculate sizes in iPad landscape/portrait modes.
	  center_work();
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
