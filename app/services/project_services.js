var ProjectServices = (function () {
    function ProjectServices() {
        this.url = "https://AngularJSCPH.firebaseio.com/Projects";
        this.projects = new Firebase(this.url);
    }
    ProjectServices.prototype.push = function (project) {
        this.projects.push(project);
    };
    ProjectServices.prototype.on = function (callback) {
        this.projects.on('value', callback);
    };
    return ProjectServices;
})();
exports.ProjectServices = ProjectServices;
//# sourceMappingURL=project_services.js.map