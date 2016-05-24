(function(module) {
  var homeController = {};
  homeController.index = function() {
    $('#home-page').show();
    $('#resume').hide();
    $('#projects').hide();
    $('#admin').hide();
    $('#contact-me').hide();
  };
  module.homeController = homeController;
})(window);
