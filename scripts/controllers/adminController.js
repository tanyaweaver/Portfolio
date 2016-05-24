(function(module) {
  var adminController = {};
  adminController.index = function() {
    if($('#admin section p').length === 0) {
      Project.fetchAll(projectView.initAdminPage);
    }
    $('#home-page').hide();
    $('#resume').hide();
    $('#projects').hide();
    $('#admin').show();
    $('#contact-me').hide();
  };
  module.adminController = adminController;
})(window);
