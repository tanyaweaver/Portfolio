(function(module) {
  var portfolioController ={};
  portfolioController.index = function() {
    if($('#project section').length === 0) {
      Project.fetchAll();
    }
    $('#home-page').hide();
    $('#resume').hide();
    $('#projects').show();
    $('#admin').hide();
    $('#contact-me').hide();
  };
  module.portfolioController = portfolioController;
})(window);
