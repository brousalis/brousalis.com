require "jekyll_asset_pipeline"

module JekyllAssetPipeline
  class SassConverter < JekyllAssetPipeline::Converter
    require 'sass'

    def self.filetype
      '.scss'
    end

    def convert
      return Sass::Engine.new(@content, load_paths: ['.','_assets','_assets/css'], syntax: :scss).render
    end
  end
end
