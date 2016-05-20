(function(module) {
  function Project (opts){
    for (keys in opts) {
      this[keys] = opts[keys];
    }
  }

  Project.all = [];

  //render projects to the html page
  Project.prototype.toHtml = function(scriptTemplateId) {
    this.publishedDaysAgo = 'about ' + parseInt((new Date() - new Date (this.publishedOn))/60/60/24/1000) + ' days ago';
    var template = Handlebars.compile((scriptTemplateId).html());
    // this.classList.add('projects-display');
    return template(this);
  };

  //sort projects by date published, newes first
  Project.loadAll = function (dataWePassIn) {
    dataWePassIn.sort(function(a,b) {
      return(new Date(b.publishedOn) - new Date(a.publishedOn));
    });
   //iterate through the collection of all my projects
   //and create new Project instances, push them into Project.all[]
    Project.all = dataWePassIn.map(function(project) {
      return new Project(project);
    });
  };

  Project.ghPages = function() {
    return Project.all.map(function(project) {
      return {
        title: project.title,
        projectGhPages: project.projectGhPages
      };
    });
  };

  Project.listOfUniqueCategories = function() {
    return Project.all.reduce(function(uniqueCategories, project) {
      if (uniqueCategories.indexOf(project.category) === -1) {
        uniqueCategories.push(project.category);
      };
      return uniqueCategories;
    },[])
    .map(function(c) {
      return {
        uniqueCategory: c,
        numberOfOccurances: Project.all.filter(function(project) {
          return project.category === c;
        }).length
      };
    });
  };

  Project.fetchAll = function() {
    $.ajax({
      url: '../data/ProjectItems.json',
      success: function(data, message, xhr) {
        var eTag = xhr.getResponseHeader('eTag');
        if(!localStorage.eTag || eTag !== localStorage.eTag) {
          console.log('eTag is not in local storage or different from local storage');
          localStorage.eTag = eTag;
          Project.loadAll(data);
          localStorage.allMyProjects = JSON.stringify(data);
        } else {
          console.log('eTag is the same as in local storage');
          Project.loadAll(JSON.parse(localStorage.allMyProjects));
        }
        projectView.initIndexPage();
      }
    });
  };
  module.Project = Project;
})(window);
