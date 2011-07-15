$(function() {
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
    return "<li class=\""+ social +"\"><a href=\"" + url + "\"><span class="title"></span>" + sentence + "</a></li>";
  }
  $(".nav_container").append(nav()); 

  $('body').hide();
	$('body').fadeIn(1000);

  $('.nav_container li').hover(function() {
    $(this).find('span.title').fadeTo(0.1,0.5);     
  }, function() {
    $(this).find('span.title').fadeTo(0.1,1);
  });

  $(window).bind("load",function(){
    $('#thumb_container').jScrollPane(  { maintainPosition: false }).data('jsp').reinitialise();
  });

  $('.project_thumb').each(function(){
     $(this).find('a').append("<a href=\"" + url + "\"><span class=\"overlay\" style=\"display: none;\"><span class=\"icon\"></span class=\"title\"></span>");  
  });

  
   $('.project_thumb a').hover(function() {
      $(this).find('.overlay').show();
    }, function() {
      $(this).find('.overlay').hide();
   });  
    
});    
