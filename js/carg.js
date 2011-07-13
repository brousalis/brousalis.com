jQuery(document).ready(function() {
  function nav() {
    var content = "";
    content += "<ul>";
    content += link("mailto:brousapg+web.at.gmail.com", "Contact me by <strong>E-mail</strong>", "email");
    content += link("http://twitter.com/brousalis","Follow me on <strong>Twitter</strong>", "twitter");
    //content += link("http://gplus.to/brousalis", "Find me on <strong>Google Plus</strong>", "plus");
    content += link("http://github.com/brousalis", "Fork me on <strong>GitHub</strong>", "github");
    content += link("http://dribbble.com/brousalis", "In progress at <strong>Dribbble</strong>", "dribbble");
    content += "</ul>";
    return content;
  }
  function link(url, sentence, social){
    return "<li class=\""+ social +"\"><a href=\"" + url + "\">" + sentence + "</a></li>";
  }
  jQuery(".nav_container").append(nav()); 

  /*$(".cardimgcrop").each(function(i) {
    var source = jQuery(this).find("img").attr("src");
    jQuery(this).parent().parent().parent().css("background","url("+source+")");
    jQuery("div").remove(this);
  });*/

  jQuery('body').hide();
	jQuery('body').fadeIn(1000);

  

  jQuery(window).resize(function() { 
    $("#thumb_container").reinitialise();
  }); 

});

