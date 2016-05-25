(function(module) {
  function ResumeSection (opts) {
    for (keys in opts) {
      this[keys] = opts[keys];
    }
  }

  ResumeSection.all = [];

  ResumeSection.prototype.toHtml = function (scriptTemplateId){
    var template = Handlebars.compile((scriptTemplateId).html());
    return template(this);
  };

  ResumeSection.loadAll = function(dataWePassIn) {
    ResumeSection.all = dataWePassIn.map(function(section) {
      return new ResumeSection(section);
    });
  };

  ResumeSection.fetchAll = function() {
    $.ajax({
      method: 'HEAD',
      url: '/data/resumeItems.json',
      success: function(data, message, xhr) {
        var eTagResume = xhr.getResponseHeader('eTag');
        if(!localStorage.eTagResume || eTagResume !== localStorage.eTagResume) {
          localStorage.eTagResume = eTagResume;
          $.getJSON('/data/resumeItems.json', function(data) {
            ResumeSection.loadAll(data);
            localStorage.MyResumeSections = JSON.stringify(data);
            resumeView.renderResume();

          });
        } else {
          ResumeSection.loadAll(JSON.parse(localStorage.MyResumeSections));
          resumeView.renderResume();
        }
      }
    });
  };
  module.ResumeSection = ResumeSection;
})(window);
