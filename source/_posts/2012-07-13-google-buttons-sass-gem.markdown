---
layout: post
title: "google-buttons-sass gem"
date: 2012-07-13 14:43
comments: true
categories: ruby
---

I'm happy to release <span class="bash">google-buttons-sass</span>, a gem that is a SASS-powered version of [CSS3 Google Buttons](https://github.com/todc/css3-google-buttons) written by Tim O'Donnell, ready to be imported to your project.

<div style="margin-bottom: 30px; text-align: center;">
  <img src="/images/buttons.png" style="border: white 4px solid !important; margin: 0px 0px 20px 17px">
  <a class="button" href="http://blog.timodonnell.com/css3-google-buttons/" style="margin-left: 20px;">CSS Demo</a>
  <a class="button" href="http://github.com/brousalis/google-buttons-sass">Github</a>
</div>

This gem requires Twitter Bootstrap to be installed, which you can do by importing the CSS files directly to your project or by installing the <span class="bash">bootstrap-sass</span> gem.

If you are using Bundler for your project, you can install the gem:

{% codeblock lang:ruby %}
gem 'sass-rails', '~> 3.1'
gem 'google-buttons-sass'
{% endcodeblock %}

If you don't have Twitter Bootstrap assets installed into your project manually, you may want to install [bootstrap-sass](https://github.com/thomas-mcdonald/bootstrap-sass):

{% codeblock lang:ruby %}
gem 'bootstrap-sass', '~> 2.0.4.0'
{% endcodeblock %}

Then add the following line to your main css file to import the styles:

{% codeblock lang:css %}
@import "google-buttons"
{% endcodeblock %}

<span class="more">Read more to find out how to use the gem in a non-Rails project and with compass.</span>

<!-- more -->

If you want to use the Javascript that supports the custom select box, add the following line to your main js file:

{% codeblock lang:js %}
//= require google-buttons
{% endcodeblock %}

To read more about <strong>Compass</strong> support or have any questions, comments, bugs, please visit the [Github page](https://github.com/brousalis/google-buttons-sass).
