require 'angular/html2js'

activate :livereload

activate :autoprefixer  do |config|
  config.browsers = ['last 3 versions', 'Explorer >= 9']
end

set :css_dir, 'stylesheets'
set :js_dir, 'app'
set :images_dir, 'images'

sprockets.append_path File.join "#{root}", "bower_components"
sprockets.append_path File.join "#{root}", "config"
sprockets.append_path File.join "#{root}", "source", "common"

Angular::Html2js.configure do |config|
  config.module_name = 'templates'
  config.init_sprockets
end

ignore 'test/**'

configure :development do
  activate :dotenv
end

configure :build do
  activate :dotenv, env: '.env.production'

  ignore "*.coffee"
  ignore "*.ngt"

  activate :minify_css
  activate :minify_html
  activate :minify_javascript
  activate :asset_hash
  activate :imageoptim
  activate :gzip
  # activate :relative_assets
end
