(function(module) {
  var adminView = {};
  adminView.renderRepos = function() {
    var template = Handlebars.compile($('#repo-template').html());
    $('#all-repos').append(repos.all.filter(function(r) {
      return r.fork === false;
    }).map(template));
  };
  module.adminView = adminView;
})(window);
