---
layout: post
title: "SASS better box-shadow mixin"
date: 2012-07-01 13:12
comments: true
categories: css
---

I've seen a similar box-shadow mixin in several places, particularly <a href="http://twitter.github.com/bootstrap">Twitter Bootstrap</a>, and I think it can be improved.

{% codeblock lang:sass %}
@mixin box-shadow($shadow) {
  -webkit-box-shadow: $shadow;
     -moz-box-shadow: $shadow;
          box-shadow: $shadow;
}
{% endcodeblock %}

This is the mixin most often seen, however it doesn't allow for multiple shadows, like:

{% codeblock lang:css %}
box-shadow: 0 0 2px rgba(0, 0, 0, .1), 0 2px 5px rgba(0, 0, 0, .2)
{% endcodeblock %}

Here is my modified version that supports multiple shadows:

{% codeblock lang:sass %}
@mixin box-shadow($shadow1, $shadow2:false, $shadow3:false) {
	$shadows: $shadow1;
  @if $shadow2 { $shadows: $shadow1, $shadow2; }
  @if $shadows != false { $shadows: $shadow1, $shadow2, $shadow3; }
  -webkit-box-shadow: $shadows;
     -moz-box-shadow: $shadows;
          box-shadow: $shadows;
} 
{% endcodeblock %}

You can then call it:
{% codeblock lang:css %}
@include box-shadow(0 0 2px rgba(0, 0, 0, .1), 0 2px 5px rgba(0, 0, 0, .2);
{% endcodeblock %}
