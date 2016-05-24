(function(module) {
  var portfolioController = {};
  portfolioController.index = function() {
    if($('#projects section').length === 0) {
      Project.fetchAll(projectView.initIndexPage);
    }
    $('#projects').show().siblings().hide();
    // repos.requestRepos(repoView.index);
  };
  module.portfolioController = portfolioController;
})(window);
