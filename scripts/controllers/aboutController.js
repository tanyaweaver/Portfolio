(function(module) {
  var aboutController = {};
  aboutController.index = function() {
    if($('#resume section').length === 0) {
      ResumeSection.fetchAll();
    }
    $('#home-page').hide();
    $('#resume').show();
    $('#projects').hide();
    $('#admin').hide();
    $('#contact-me').hide();
  };
  module.aboutController = aboutController;
})(window);
