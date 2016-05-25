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

  projectView.renderProjects = function() {
    Project.all.forEach(function(project) {
      $('#projects').append(project.toHtml($('#render-projects')));
    });
  };

  projectView.initIndexPage = function() {
    projectView.renderProjects();
    projectView.populateFilters();
    projectView.handleCategoryFilter();
  };

  module.projectView = projectView;
})(window);
