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

projectView.handleMainNav = function() {
  $('.nav').on('click', '.tab', function() {
    var $choice = $(this).data('content');
    $('.tab-content').hide();
    $('.tab-content').each(function() {
      if($(this).attr('id') === $choice) {
        $(this).fadeIn();
      }
    });
  });
  //setting click on the HOME tab to set up the page
  $('.nav .tab:first').click();
};
$(document).ready(function() {
  projectView.handleMainNav();
  projectView.populateFilters();
});
