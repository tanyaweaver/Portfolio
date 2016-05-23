(function(module) {
  var projectView = {};

  projectView.populateFilters = function() {
    $('.projects-display').each(function() {
      var val = $(this).attr('data-category');
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      if($('#category-filter').text().indexOf(val) == -1) {
        $('#category-filter').append(optionTag);
      }
    });
  };

  projectView.handleCategoryFilter = function() {
    $('#category-filter').on('change', function() {
      if($(this).val() !== '--Search for a project by category--') {
        $('.projects-display').hide();
        $('.projects-display[data-category="' + $(this).val() + '"]').fadeIn();
      }else{
        $('.projects-display').show();
      };
    });
  };

  projectView.renderResume = function() {
    ResumeSection.all.forEach(function(section) {
      $('#resume').append(section.toHtml($('#render-resume')));
    });
  };

  projectView.renderProjects = function() {
    Project.all.forEach(function(project) {
      $('#projects').append(project.toHtml($('#render-projects')));
    });
  };

  projectView.renderStats = function() {
    var template = Handlebars.compile($('#render-stats').html());
    Project.ghPages().forEach(function(pages) {
      $('#stats').append(template(pages));
    });
  };

  projectView.renderUniqueCategories = function() {
    var template = Handlebars.compile($('#render-unique-categories').html());
    Project.listOfUniqueCategories().forEach(function(categories) {
      $('#unique-categories').append(template(categories));
    });
  };

  projectView.initIndexPage = function() {
    projectView.renderProjects();
    projectView.populateFilters();
    projectView.handleCategoryFilter();
    projectView.renderStats();
    projectView.renderUniqueCategories();
  };

  projectView.initResumeTab = function() {
    projectView.renderResume();
  };

  module.projectView = projectView;
})(window);
