jQuery(document).ready(function() {
  jQuery(".nav_container").append(nav());
  function nav() {
    var content = "";
    content += "<ul>";
    content += link("http://twitter.com/brousalis","Follow me on <strong>Twitter</strong>");
    content += link("http://gplus.to/brousalis", "Find me on <strong>Google Plus</strong>");
    content += link("http://github.com/brousalis", "Fork me on <strong>GitHub</strong>");
    content += "</ul>";
    return content;
  }
  function link(url, sentence, social){
    return "<li class=\""+ social +"\"><a href=\"" + url + "\"><span></span>" + sentence + "</a></li>";
  }
});
