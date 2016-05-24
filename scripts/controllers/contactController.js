(function(module) {
  var contactController = {};
  contactController.index = function() {
    $('#home-page').hide();
    $('#resume').hide();
    $('#projects').hide();
    $('#admin').hide();
    $('#contact-me').show();
  };
  module.contactController = contactController;
})(window);
