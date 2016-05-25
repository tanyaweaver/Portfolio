(function(module) {
  var repos = {};
  repos.all = [];
  repos.requestRepos = function(callback) {
    $.get('/github/users/tanyaweaver/repos?sort=updated').done(function(data) {
      repos.all = data;
    }).done(callback);
  };
  module.repos = repos;
})(window);
