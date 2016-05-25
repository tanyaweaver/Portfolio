(function(module) {
  var resumeView = {};

  resumeView.renderResume = function() {
    ResumeSection.all.forEach(function(section) {
      $('#resume').append(section.toHtml($('#render-resume')));
    });
  };
  
  module.resumeView = resumeView;
})(window);
