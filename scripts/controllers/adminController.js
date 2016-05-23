(function(module) {
  var adminController = {};
  adminController.index = function() {
    $('#home-page').hide();
    $('#resume').hide();
    $('#projects').hide();
    $('#admin').show();
    $('#contact-me').hide();
  };
  module.adminController = adminController;
})(window);
