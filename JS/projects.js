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
 //iterate through the collection of all my projects (projectItems.js)
 //and create new Project instances, push them into projects[]
  dataWePassIn.forEach (function(project) {
    Project.all.push(new Project (project));
  });
};

Project.fetchAll = function() {
  if(localStorage.allMyProjects) {
    console.log('local Storage exists');
    Project.loadAll(JSON.parse(localStorage.allMyProjects));
    projectView.initIndexPage();
  }else{
    console.log('no local storage');
    $.getJSON('../data/projectItems.json', function(data) {
      Project.loadAll(data);
      localStorage.allMyProjects = JSON.stringify(data);
      projectView.initIndexPage();
    });
  }
};
