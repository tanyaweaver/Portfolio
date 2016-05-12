var projects = [];

function Project (opts){
  this.title = opts.title;
  this.publishedOn = opts.publishedOn;
  this.projectGhPages = opts.projectGhPages;
  this.projectIcon = opts.projectIcon;
  this.projectSourceCode = opts.projectSourceCode;
}

//render projects to the html page
Project.prototype.toHtml = function() {
  // var $newProjectHtml = $('section.template').clone();
  // $newProjectHtml.find('h3').html(this.title);
  // $newProjectHtml.find('.gh-pages').attr('href', this.projectGhPages);
  // $newProjectHtml.find('img').attr('src', this.projectIcon);
  // $newProjectHtml.find('p').html(this.projectDescription);
  // $newProjectHtml.find('.source-code').attr('href', this.projectSourceCode);
  // $newProjectHtml.removeClass('template');
  // $newProjectHtml.find('time').html('about ' + parseInt((new Date() - new Date (this.publishedOn))/60/60/24/1000) + ' days ago');
  // $newProjectHtml.addClass('projects-display');
  // return $newProjectHtml;
  this.publishedDaysAgo = 'about ' + parseInt((new Date() - new Date (this.publishedOn))/60/60/24/1000) + ' days ago';
  var $source = $('#render-projects').html();
  var template = Handlebars.compile($source);
  // this.classList.add('projects-display');
  return template(this);
};

//sort projects by date published, newes first
allMyProjects.sort(function(a,b) {
  return(new Date(b.publishedOn) - new Date(a.publishedOn));
});

//iterate through the collection of all my projects (projectItems.js)
//and create new Project instances, push them into projects[]
allMyProjects.forEach (function(project) {
  projects.push(new Project (project));
});

//append each Project from the projects[] to the DOM
projects.forEach (function(p) {
  $('#projects').append(p.toHtml());
});
