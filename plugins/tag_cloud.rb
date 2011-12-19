module Jekyll
  class CategoryList < Liquid::Tag

    def render(context)
      s = StringIO.new
      begin
        cats = context['site']['categories']
        unless cats.nil?
          s << "<ul>"
          sorted = {}
          cats.each do |cat|
            sorted[cat[0]] = cat[1].size
          end
          sorted = sorted.sort_by {|k,v| v}.reverse!
          sorted.each do |k,v|
            s << "<li><em>#{v}</em><a href=\"#{k}\">#{k}</a><span style=\"width:#{v*10}%\">bar</span></li>"
          end
          s << "</ul>"
        end
      rescue => boom
        # Nothing, I think
        p boom
      end
      s.string
    end
  end
end

Liquid::Template.register_tag('category_list', Jekyll::CategoryList)