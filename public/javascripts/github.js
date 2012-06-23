//var github = (function(){
//  function render(target, repos){
//    var i = 0, fragment = '', t = $(target)[0];
//
//    for(i = 0; i < repos.length; i++) {
//      fragment += '<li><a href="'+repos[i].url+'">'+repos[i].name+'</a><p>'+repos[i].description+'</p></li>';
//    }
//    t.innerHTML = fragment;
//  }
//  return {
//    showRepos: function(options){
//      $.ajax({
//          url: "http://github.com/api/v2/json/repos/show/"+options.user+"?callback=?"
//        , type: 'jsonp'
//        , error: function (err) { $(options.target + ' li.loading').addClass('error').text("Error loading feed"); }
//        , success: function(data) {
//          var repos = [];
//          if (!data || !data.repositories) { return; }
//          for (var i = 0; i < data.repositories.length; i++) {
//            if (options.skip_forks && data.repositories[i].fork) { continue; }
//            repos.push(data.repositories[i]);
//          }
//          repos.sort(function(a, b) {
//            var aDate = new Date(a.pushed_at).valueOf(),
//                bDate = new Date(b.pushed_at).valueOf();
//
//            if (aDate === bDate) { return 0; }
//            return aDate > bDate ? -1 : 1;
//          });
//
//          if (options.count) { repos.splice(options.count); }
//          render(options.target, repos);
//        }
//      });
//    }
//  };
//})();

$(function(){var a=0;$(".github-widget").each(function(){if(a==0){$("head").append('<style type="text/css">.github-box{font-family:helvetica,arial,sans-serif;font-size:13px;line-height:18px;background:#fafafa;border:1px solid #ddd;color:#666;border-radius:3px}.github-box a{color:#4183c4;border:0;text-decoration:none}.github-box .github-box-title{position:relative;border-bottom:1px solid #ddd;border-radius:3px 3px 0 0;background:#fcfcfc;background:-moz-linear-gradient(#fcfcfc,#ebebeb);background:-webkit-linear-gradient(#fcfcfc,#ebebeb);}.github-box .github-box-title h3{font-family:helvetica,arial,sans-serif;font-weight:normal;font-size:16px;color:gray;margin:0;padding:10px 10px 10px 30px;background:url(https://a248.e.akamai.net/assets.github.com/images/icons/public.png) 7px center no-repeat}.github-box .github-box-title h3 .repo{font-weight:bold}.github-box .github-box-title .github-stats{position:absolute;top:8px;right:10px;background:white;border:1px solid #ddd;border-radius:3px;font-size:11px;font-weight:bold;line-height:21px;height:21px}.github-box .github-box-title .github-stats a{display:inline-block;height:21px;color:#666;padding:0 5px 0 18px;background:url(https://a248.e.akamai.net/assets.github.com/images/modules/pagehead/repostat.png) no-repeat}.github-box .github-box-title .github-stats .watchers{border-right:1px solid #ddd;background-position:3px -2px}.github-box .github-box-title .github-stats .forks{background-position:0 -52px;padding-left:15px}.github-box .github-box-content{padding:10px;font-weight:300}.github-box .github-box-content p{margin:0}.github-box .github-box-content .link{font-weight:bold}.github-box .github-box-download{position:relative;border-top:1px solid #ddd;background:white;border-radius:0 0 3px 3px;padding:10px;height:24px}.github-box .github-box-download .updated{margin:0;font-size:11px;color:#666;line-height:24px;font-weight:300}.github-box .github-box-download .updated strong{font-weight:bold;color:#000}.github-box .github-box-download .download{position:absolute;display:block;top:10px;right:10px;height:24px;line-height:24px;font-size:12px;color:#666;font-weight:bold;text-shadow:0 1px 0 rgba(255,255,255,0.9);padding:0 10px;border:1px solid #ddd;border-bottom-color:#bbb;border-radius:3px;background:#f5f5f5;background:-moz-linear-gradient(#f5f5f5,#e5e5e5);background:-webkit-linear-gradient(#f5f5f5,#e5e5e5);}.github-box .github-box-download .download:hover{color:#527894;border-color:#cfe3ed;border-bottom-color:#9fc7db;background:#f1f7fa;background:-moz-linear-gradient(#f1f7fa,#dbeaf1);background:-webkit-linear-gradient(#f1f7fa,#dbeaf1);</style>')}a++;var c=$(this);var b=c.data("repo");$.ajax({url:"https://api.github.com/repos/"+b,dataType:"jsonp",success:function(f){var e=f.data;var d=new Date(e.pushed_at);var g=d.getMonth()+"-"+d.getDate()+"-"+d.getFullYear();var h=$('           <div class="github-box repo">               <div class="github-box-title">                  <h3>                      <a class="owner" href="'+e.owner.url.replace("api.","").replace("users/","")+'">'+e.owner.login+'</a>                       /                       <a class="repo" href="'+e.url.replace("api.","").replace("repos/","")+'">'+e.name+'</a>                   </h3>                   <div class="github-stats">                      <a class="watchers" href="'+e.url.replace("api.","").replace("repos/","")+'/watchers">'+e.watchers+'</a>                      <a class="forks" href="'+e.url.replace("api.","").replace("repos/","")+'/forks">'+e.forks+'</a>                   </div>              </div>              <div class="github-box-content">                  <p class="description">'+e.description+' &mdash; <a href="'+e.url.replace("api.","").replace("repos/","")+'#readme">Read More</a></p>                   <p class="link"><a href="'+e.homepage+'">'+e.homepage+'</a></p>               </div>              <div class="github-box-download">                   <p class="updated">Latest commit to the <strong>master</strong> branch on '+g+'</p>                   <a class="download" href="'+e.url.replace("api.","").replace("repos/","")+'/zipball/master">Download as zip</a>               </div>          </div>        ');h.appendTo(c)}})})});
