---
layout: post
title: "Jekyll category list plugin"
date: 2012-07-08 00:51
comments: true
categories: ruby
---

<a href="http://github.com/mojombo/jekyll">Jekyll</a> is a static site generator written in Ruby. It is a very flexible solution for blogging that is much more lightweight that something like Wordpress. 

In order to get the category list you see on the left to work, I had to write a custom Jekyll plugin. The animations are done by CSS3 transitions. I've created a repo on Github for the plugin.

<div style="margin-bottom: 30px; text-align: center;">
  <a class="button" href="http://github.com/brousalis/jekyll-category-list">Github</a>
  <a class="button" href="http://brousalis.github.com/jekyll-category-list" style="margin-left: 20px;">CSS Demo</a>
</div>

{% codeblock lang:ruby categorylist.rb %}
module Jekyll
  class CategoryList < Liquid::Tag
    def render(context)
      s = StringIO.new
      begin
        categories = context['site']['categories']
        unless categories.nil?
          s << "<ul>"
          sorted = {}
          post_count = context['site']['posts'].size.to_i
          categories.each do |cat|
            sorted[cat[0]] = cat[1].size
          end
          sorted = sorted.sort_by {|k,v| v}.reverse!
          sorted.each do |k,v|
            s << "<li><em>#{v}</em><a href=\"/blog/categories/#{k}\">#{k}</a><span style=\"width:#{v * 100 / post_count}%\">bar</span><div class=\"#{k}\"></div></li>"
          end
          s << "</ul>"
        end
      rescue => boom
        p boom
      end
      s.string
    end
  end
end

Liquid::Template.register_tag('category_list', Jekyll::CategoryList) 
{% endcodeblock %}

Read the rest for the CSS, usage, and more information. 

<!-- more -->
The plugin can then be used in the html as <span class="bash">category_list</span>. This generates the following unordered list:

{% codeblock lang:html %}
<ul id="categories">
  <li>
    <em>2</em>
    <a href="/blog/categories/personal">personal</a>
    <span style="width:50%">bar</span>
    <div class="personal"></div>
  </li>
</ul>
{% endcodeblock %}

The <em>div</em> is the icon, optional, and the width % is calculated by the post count of the category divided by the total post count. 

Below is the CSS needed to animate the bars width to 100%, as well as apply some directional changes to the rest of the elements generated.

{% codeblock lang:css %}
#categories {
  list-style: none;
}
#categories  li {  
  border-bottom: none;
  position: relative;
  padding: .2em 0;
  margin-bottom: 2px;
  overflow: hidden;
  text-shadow: none;
}
#categories li:hover em {
  top 5px;
}
#categories li:hover span {
  width: 96% !important;
}
#categories li:hover div {
  top: 40px;
}
#categories li a {
  position: relative;
  display: block;
  padding-left: 12px;
  z-index: 1;
  line-height: 25px;
}
#categories li em {
  font-style: normal;
  font-size: 11px;
  right: 13px;
  opacity: 0.9;
  position: absolute;
  top: 40px;
  z-index: 2;
  line-height: 25px;
  -webkit-transition: all 0.2s ease;
     -moz-transition: all 0.2s ease;
       -o-transition: all 0.2s ease;
          transition: all 0.2s ease;
}
#categories li span {
  padding: 3px 6px;
  height: 50%;
  text-indent: -9999px;
  display: block;
  overflow: hidden;
  background: #e5e5e5;
  position: absolute;
  top: 20%;
  left: 0;
  z-index: 0;
  -webkit-border-radius: 100px;
     -moz-border-radius: 100px;
       -o-border-radius: 100px;
          border-radius: 100px; 
  -webkit-transition: width 0.5s ease;
     -moz-transition: width 0.5s ease;
       -o-transition: width 0.5s ease;
          transition: width 0.5s ease; 
}
#categories li div {
  width: 16px;
  height: 16px;
  float: right;
  text-indent: -9999px;
  position: absolute;
  top: 6px;
  right: 7px;
  opacity: 0.6;
  -webkit-transition: all 0.2s ease;
     -moz-transition: all 0.2s ease;
       -o-transition: all 0.2s ease;
          transition: all 0.2s ease; 
}
{% endcodeblock %}

The CSS could use some refactoring, but I figured that is what Github is for. Feel free to send pull requests or comment on ways I could improve the code. 
