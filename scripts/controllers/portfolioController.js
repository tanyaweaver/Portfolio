(function(module) {
  var portfolioController = {};
  portfolioController.index = function() {
    if($('#projects section').length === 0) {
      Project.fetchAll(projectView.initIndexPage);
    }
    $('#home-page').hide();
    $('#resume').hide();
    $('#projects').show();
    $('#admin').hide();
    $('#contact-me').hide();
  };
  module.portfolioController = portfolioController;
})(window);
