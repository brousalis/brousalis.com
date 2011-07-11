jQuery(document).ready(function() {
  function nav() {
    var content = "";
    content += "<ul>";
    content += link("mailto:brousapg+web.at.gmail.com", "Contact me by <strong>E-mail</strong>", "email");
    content += link("http://twitter.com/brousalis","Follow me on <strong>Twitter</strong>", "twitter");
    content += link("http://gplus.to/brousalis", "Find me on <strong>Google Plus</strong>", "plus");
    content += link("http://github.com/brousalis", "Fork me on <strong>GitHub</strong>", "github");
    content += link("http://dribbble.com/brousalis", "In progress at <strong>Dribbble</strong>", "dribbble");
    content += "</ul>";
    return content;
  }
  function link(url, sentence, social){
    return "<li class=\""+ social +"\"><a href=\"" + url + "\">" + sentence + "</a></li>";
  }
  jQuery(".nav_container").append(nav()); 
  
  var source = jQuery(".cardimgcrop ").find("img").attr("src");
  jQuery(".cardimgcrop ").parent().parent().parent().css("background","url("+source+")");
  jQuery("div").remove(".cardimgcrop ");
});
