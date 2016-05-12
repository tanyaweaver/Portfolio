var projectView = {};

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
});
