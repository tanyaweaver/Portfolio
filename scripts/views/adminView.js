(function(module) {
  var adminView = {};

  adminView.renderStats = function() {
    var template = Handlebars.compile($('#render-gh-pages').html());
    Project.ghPages().forEach(function(pages) {
      $('#stats').append(template(pages));
    });
  };

  adminView.renderUniqueCategories = function() {
    var template = Handlebars.compile($('#render-unique-categories').html());
    Project.listOfUniqueCategories().forEach(function(categories) {
      $('#unique-categories').append(template(categories));
    });
  };

  adminView.renderRepos = function() {
    var template = Handlebars.compile($('#repo-template').html());
    $('#all-repos').append(repos.all.filter(function(r) {
      return r.fork === false;
    }).map(template));
  };

  adminView.initAdminPage = function() {
    adminView.renderStats();
    adminView.renderUniqueCategories();
    repos.requestRepos(adminView.renderRepos);
  };

  module.adminView = adminView;
})(window);
