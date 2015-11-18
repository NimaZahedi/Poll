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
var router_1 = require("angular2/router");
var home_1 = require('./home/home');
var project_1 = require("./project/project");
var auth_services_1 = require("./services/auth_services");
var project_services_1 = require("./services/project_services");
var user_services_1 = require("./services/user_services");
var App = (function () {
    function App(authServices) {
        this.authServices = authServices;
        this.message = "hi from app";
    }
    App.prototype.isAuthenticate = function () {
        return this.authServices.isAuthenticated();
    };
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            templateUrl: './app/app.html',
            directives: [home_1.Home, project_1.Project, router_1.RouterOutlet, router_1.RouterLink, angular2_1.NgIf]
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: "/project", component: project_1.Project, name: "Project" }),
            new router_1.Route({ path: "/", component: home_1.Home, name: "Home" })
        ]), 
        __metadata('design:paramtypes', [auth_services_1.AuthServices])
    ], App);
    return App;
})();
exports.App = App;
angular2_1.bootstrap(App, [auth_services_1.AuthServices, project_services_1.ProjectServices, user_services_1.UserServices, router_1.ROUTER_PROVIDERS, angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
//# sourceMappingURL=app.js.map