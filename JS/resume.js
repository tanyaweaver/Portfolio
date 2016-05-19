(function(module) {
  function ResumeSection (opts) {
    for (keys in opts) {
      this[keys] = opts[keys];
    }
  }

  ResumeSection.all = [];

  ResumeSection.prototype.toHtml = function (scriptTemplateId){
    var template = Handlebars.compile(scriptTemplateId).html();
    return template(this);
  };

  ResumeSection.loadAll = function(dataWePassIn) {
    Resume.all = dataWePassIn.map(function(section) {
      return new ResumeSection(section);
    });
  };

  ResumeSection.fetchAll = function() {
    $.ajax({
      url: '../data/resumeItems.json',
      success: function(data, message, xhr) {
        var eTag = xhr.getResponseHeader('eTag');
        if(!localStorage.eTag || eTag !== localStorage.eTag) {
          localStorage.eTag = eTag;
          ResumeSection.loadAll(data);
          localStorage.MyResumeSections = JSON.stringify(data);
        } else {
          ResumeSection.loadAll(JSON.parse(localStorage.MyResumeSections));
        }
        projectView.initResumeTab();
      }
    });
  };
  module.ResumeSection = ResumeSection;
})(window);
