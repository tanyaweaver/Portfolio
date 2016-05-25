(function(module) {
  var adminController = {};
  adminController.index = function() {
    if($('#admin section p').length === 0) {
      Project.fetchAll(adminView.initAdminPage);
      repos.requestRepos(adminView.renderRepos);
    }
    $('#admin').show().siblings().hide();
  };
  module.adminController = adminController;
})(window);
