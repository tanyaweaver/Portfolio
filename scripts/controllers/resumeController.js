(function(module) {
  var resumeController = {};
  resumeController.index = function() {
    if($('#resume section').length === 0) {
      ResumeSection.fetchAll();
    }
    $('#resume').show().siblings().hide();
  };
  module.resumeController = resumeController;
})(window);
