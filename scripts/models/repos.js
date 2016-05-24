(function(module) {
  var repos = {};
  repos.all = [];
  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'http://api.github.com/users/tanyaweaver/repos?sort=updated',
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken},
      success: function(data, message, xhr) {
        repos.all = data;
        callback();
      }
    });
  };
  module.repos = repos;
})(window);
