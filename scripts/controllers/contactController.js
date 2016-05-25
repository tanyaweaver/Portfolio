(function(module) {
  var contactController = {};
  contactController.index = function() {
    $('#contact-me').show().siblings().hide();
  };
  module.contactController = contactController;
})(window);
