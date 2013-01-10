---
layout: post
title: "Current Git branch in prompt"
date: 2012-06-15 00:48
comments: true
categories: [lab]
---

I've found it necessary now to have the current Git branch always listed in my command line. You can checkout how I do it with my <a href="http://github.com/brousalis/dotfiles">dotfiles</a>, or add the following below to your <span class="bash">.bashrc</span>:

{% codeblock bashrc lang:bash %}
parse_git_branch() { git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'; }
export PS1="\[\033[01;34m\]\h:\[\033[01;33m\]\w\[\033[01;34m\] \$(parse_git_branch) \[\033[01;33m\]>\[\e[0m\] "
{% endcodeblock %}

The <strong>PS1</strong> defines what your prompt looks like. The important keywords here are <span class="bash">\h</span> - hostname, <span class="bash">\u</span> - username, <span class="bash">\w</span> - directory path. 

The lines such as <span class="bash">\[\033[01;34m\]</span> set colors for the text.

Adding these then doing a <span class="bash">source ~/.bashrc</span> in console should make your command line look like:

<img src="/images/bash.png" style="border: black 0.5em solid !important">
