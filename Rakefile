require 'date'

task :default => :dev

desc 'Run Jekyll in development mode'
task :dev do
  puts '* Running Jekyll with auto-generation and server'
  puts `jekyll --auto --server`
end

desc 'Run Jekyll to generate the site'
task :build do
  puts '* Generating static site with Jekyll'
  puts `jekyll`
end

desc 'rsync the contents of ./_site to the server'
task :sync do
  puts '* Publishing files to live server'
  puts `rsync -e ssh -avz "_site/" brousali@brousalis.com:~/public_html/p`
end

desc 'Push source code to Github'
task :push do
  puts '* Pushing to Github'
  puts `git add .`
  puts `git commit -m "#{ENV['m']}" .`
  puts `git push origin master`
end

desc 'Generate and publish the entire site, and send out pings'
  task :publish => [:build, :push, :sync] do
end

desc 'Push to the github'
  task :p => [:push] do
end

desc 'create a new draft post'
task :post do
  title, slug = get_title
  file = File.join(File.dirname(__FILE__), '_posts', slug + '.markdown')
  create_blank_post(file, title)
  open_in_editor(file)
end

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

# Helper method to open a file in the default text editor.
def open_in_editor(file)
  system ("mate #{file}")
end