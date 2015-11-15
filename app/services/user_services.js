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
var auth_services_1 = require("./auth_services");
var UserServices = (function () {
    function UserServices(authServices) {
        this.authServices = authServices;
        this.url = "https://AngularJSCPH.firebaseio.com/Users/";
    }
    UserServices.prototype.getVoteRef = function () {
        return new Firebase(this.url + this.authServices.getUid() + '/vote');
    };
    UserServices.prototype.vote = function (project) {
        if (!this.authServices.isAuthenticated())
            return;
        var vote = this.getVoteRef();
        vote.set(project);
    };
    UserServices.prototype.getVote = function (callback) {
        if (!this.authServices.isAuthenticated())
            return;
        var vote = this.getVoteRef();
        vote.on("value", callback);
    };
    UserServices = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof auth_services_1.AuthServices !== 'undefined' && auth_services_1.AuthServices) === 'function' && _a) || Object])
    ], UserServices);
    return UserServices;
    var _a;
})();
exports.UserServices = UserServices;
//# sourceMappingURL=user_services.js.map