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
var project_services_1 = require("../services/project_services");
var AddNewProject = (function () {
    function AddNewProject(projectServices) {
        var _this = this;
        this.projectServices = projectServices;
        this.projects = new Array();
        projectServices.on(function (data) {
            _this.projects = [];
            data.forEach(function (d) {
                _this.projects.push({ id: d.key(), name: d.val().name });
            });
        });
    }
    AddNewProject.prototype.addNewProject = function (event, name, description, developers) {
        var project = { name: name.value, description: description.value, developers: developers.value };
        this.projectServices.push(project);
        name.value = '';
        description.value = '';
        developers.value = '';
    };
    AddNewProject = __decorate([
        angular2_1.Component({
            selector: 'add-new-project',
            templateUrl: '../app/add_project/add_new_project.html'
        }), 
        __metadata('design:paramtypes', [project_services_1.ProjectServices])
    ], AddNewProject);
    return AddNewProject;
})();
exports.AddNewProject = AddNewProject;
//# sourceMappingURL=add_project.js.map