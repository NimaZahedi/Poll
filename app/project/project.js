var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var add_project_1 = require("../add_project/add_project");
var project_services_1 = require("../services/project_services");
var user_services_1 = require("../services/user_services");
var Project = (function () {
    function Project(projectServices, userServices) {
        var _this = this;
        this.projectServices = projectServices;
        this.userServices = userServices;
        this.selectedProject = { projectId: '' };
        projectServices.on(function (data) {
            _this.projects = [];
            data.forEach(function (d) {
                var p = d.val();
                _this.projects.push({
                    id: d.key(),
                    name: p.name,
                    description: p.description,
                    developers: p.developers,
                });
            });
        });
        userServices.getVote(function (vote) {
            if (vote.val())
                _this.selectedProject = vote.val();
            else
                _this.selectedProject = { projectId: '' };
        });
    }
    Project.prototype.vote = function (event, projectId) {
        this.userServices.vote({ projectId: projectId });
        this.selectedProject = { projectId: projectId };
    };
    Project = __decorate([
        angular2_1.Component({
            selector: 'project',
            templateUrl: '../app/project/project.html',
            directives: [angular2_1.NgFor, add_project_1.AddNewProject]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof project_services_1.ProjectServices !== 'undefined' && project_services_1.ProjectServices) === 'function' && _a) || Object, (typeof (_b = typeof user_services_1.UserServices !== 'undefined' && user_services_1.UserServices) === 'function' && _b) || Object])
    ], Project);
    return Project;
    var _a, _b;
})();
exports.Project = Project;
//# sourceMappingURL=project.js.map