var projectView = {};

projectView.populateFilters = function() {
  $('.projects-display').each(function() {
    var val = $(this).attr('data-category');
    var optionTag = '<option value="' + val + '">' + val + '</option>';
    console.log($('#category-filter').text());
    if($('#category-filter').text().indexOf(val) == -1) {
      $('#category-filter').append(optionTag);
    }
  });
};

projectView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    console.log($(this).val());
    if($(this).val() !== '--Search for a project by category--') {
      $('.projects-display').hide();
      $('.projects-display[data-category="' + $(this).val() + '"]').fadeIn();
    }else{
      $('.projects-display').show();
    };
    // $(this).val('--Search for a project by category--');
    // console.log($(this).val());
  });
};

projectView.handleMainNav = function() {
  $('.nav').on('click', '.tab', function() {
    var $choice = $(this).data('content');
    $('.tab-content').hide();
    $('.tab-content').each(function() {
      if($(this).attr('id') === $choice) {
        $(this).fadeIn();
      }
      if($(this).attr('id') === 'projects'){
        $('.projects-display').show();
        $('#category-filter').val('--Search for a project by category--');
      }
    });
  });
  //setting click on the HOME tab to set up the page
  $('.nav .tab:first').click();
};
$(document).ready(function() {
  projectView.populateFilters();
  projectView.handleCategoryFilter();
  projectView.handleMainNav();
});
