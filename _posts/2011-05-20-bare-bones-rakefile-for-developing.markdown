---
layout: post
title: Bare Bones Rakefile for Jekyll
tags: Ruby, Jekyll
excerpt: This is a web dev Rakefile that I use for most of my projects, including this one.

---

This is a basic Rakefile I use for most of my projects, including this one. It requires Ruby. This one handles uploading to the server, as well as some other misc tasks that are involved in maintaining this blog. To use this, simply type in 

{% highlight bash %}
rake 'taskname'
{% endhighlight %}

If you have any questions, feel free to e-mail me or post in the comments.

{% highlight ruby %}
require 'date'

task :default => :dev

# Run Jekyll, access site at localhost:4000
desc 'Run Jekyll in development mode'
task :dev do
  puts '* Running Jekyll with auto-generation and server'
  puts `jekyll --auto --server`
end

# Compiles the site
desc 'Run Jekyll to generate the site'
task :build do
  puts '* Generating static site with Jekyll'
  puts `jekyll`
end
  
# Uploads the site to your server - Make sure you replace the username and password
desc 'rsync the contents of ./_site to the server'
task :sync do
  puts '* Publishing files to live server'
  puts `rsync -e ssh -avz "_site/" you@domain.com:~/public_html/p`
end

# Pushes the source code to Github - use: rake p m="Commit message"
desc 'Push source code to Github'
task :p do
  puts '* Pushing to Github'
  puts `git add .`
  puts `git commit -m "#{ENV['m']}" .`
  puts `git push origin master`
end

# Do it!
desc 'Generate and publish the entire site, and send out pings'
  task :publish => [:build, :p, :sync] do
end

# Create a new post
desc 'create a new draft post'
task :post do
  title, slug = get_title
  file = File.join(File.dirname(__FILE__), '_posts', slug + '.markdown')
  create_blank_post(file, title)
  open_in_editor(file)
end

# List of all unfinished posts
desc 'List all draft posts'
task :drafts do
  puts `find ./_posts -type f -exec grep -H 'published: false' {} \\;`
end

# Helper method for :draft and :post, that required a TITLE environment
# variable to be set. If there is none, the task will exit.
#
# If there is a title given, then this method will return it and a escaped
# version suitable for filenames.
def get_title
  unless title = ENV['TITLE']
    puts "USAGE: rake post TITLE='the post title'"
    exit(1)
  end
  return [title, "#{Date.today}-#{title.downcase.gsub(/[^\w]+/, '-')}"]
end

# Helper method for :draft and :post, that will create a file at a given
# location and fill it with an empty post.
def create_blank_post(path, title)
  # Create the directories to this path if needed
  FileUtils.mkpath(File.dirname(path))

  # Write the template to the file
  File.open(path, "w") do |f|
    f << <<-EOS.gsub(/^    /, '')
    ---
    layout: post
    title: #{title}
    published: false
    categories:
    ---

    EOS
  end
end

# Open a file in the default text editor.
def open_in_editor(file)
  system ("mate #{file}")
end
{% endhighlight %}

Here is a list of commands and what they do:

