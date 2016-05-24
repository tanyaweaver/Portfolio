(function(module) {
  var aboutController = {};
  aboutController.index = function() {
    if($('#resume section').length === 0) {
      ResumeSection.fetchAll();
    }
    $('#resume').show().siblings().hide();
  };
  module.aboutController = aboutController;
})(window);
