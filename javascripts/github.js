var github = (function(){
  function render(target, repos){
    var i = 0, fragment = '', t = $(target)[0];

    for(i = 0; i < repos.length; i++) {
<<<<<<< HEAD
      fragment += '<li><a href="'+repos[i].html_url+'">'+repos[i].name+'</a><p>'+(repos[i].description||'')+'</p></li>';
=======
      fragment += '<li><a href="'+repos[i].url+'">'+repos[i].name+'</a><p>'+repos[i].description+'</p></li>';
>>>>>>> 96f8cb1515beaa4bed4d60ecf59883759b2db5bf
    }
    t.innerHTML = fragment;
  }
  return {
    showRepos: function(options){
      $.ajax({
<<<<<<< HEAD
          url: "https://api.github.com/users/"+options.user+"/repos?callback=?"
=======
          url: "http://github.com/api/v2/json/repos/show/"+options.user+"?callback=?"
>>>>>>> 96f8cb1515beaa4bed4d60ecf59883759b2db5bf
        , type: 'jsonp'
        , error: function (err) { $(options.target + ' li.loading').addClass('error').text("Error loading feed"); }
        , success: function(data) {
          var repos = [];
<<<<<<< HEAD
          if (!data || !data.data) { return; }
          for (var i = 0; i < data.data.length; i++) {
            if (options.skip_forks && data.data[i].fork) { continue; }
            repos.push(data.data[i]);
=======
          if (!data || !data.repositories) { return; }
          for (var i = 0; i < data.repositories.length; i++) {
            if (options.skip_forks && data.repositories[i].fork) { continue; }
            repos.push(data.repositories[i]);
>>>>>>> 96f8cb1515beaa4bed4d60ecf59883759b2db5bf
          }
          repos.sort(function(a, b) {
            var aDate = new Date(a.pushed_at).valueOf(),
                bDate = new Date(b.pushed_at).valueOf();

            if (aDate === bDate) { return 0; }
            return aDate > bDate ? -1 : 1;
          });

          if (options.count) { repos.splice(options.count); }
          render(options.target, repos);
        }
      });
    }
  };
})();
