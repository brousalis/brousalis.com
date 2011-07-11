jQuery(document).ready(function() {
  jQuery(".nav_container").append(nav());
  function nav() {
    var content = "";
    content += "<ul>";
    content += link("http://twitter.com/brousalis","Follow me on <strong>Twitter</strong>", "twitter");
    content += link("http://gplus.to/brousalis", "Find me on <strong>Google Plus</strong>", "plus");
    content += link("http://github.com/brousalis", "Fork me on <strong>GitHub</strong>", "github");
    content += link("http://dribbble.com/brousalis", "In progress at <strong>Dribbble</strong>", "dribbble");
    content += "</ul>";
    return content;
  }
  function link(url, sentence, social){
    return "<li class=\""+ social +"\"><a href=\"" + url + "\"><span></span>" + sentence + "</a></li>";
  }
});
