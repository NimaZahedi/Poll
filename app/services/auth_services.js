/**
 * AuthServices
 */
var AuthServices = (function () {
    function AuthServices() {
        this.firebaseRef = new Firebase('https://AngularJSCPH.firebaseio.com');
    }
    AuthServices.prototype.getUserProfile = function () {
        if (this.authData != null) {
            return {
                displayName: this.authData.google.displayeName
            };
        }
    };
    AuthServices.prototype.getUid = function () {
        return this.authData.uid;
    };
    AuthServices.prototype.isAuthenticated = function () {
        this.authData = this.firebaseRef.getAuth();
        return this.authData != null;
    };
    AuthServices.prototype.unAuth = function () {
        this.firebaseRef.unauth();
    };
    AuthServices.prototype.initGoogleAuth = function (callback) {
        var _this = this;
        this.firebaseRef.authWithOAuthPopup("google", function (error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            }
            else {
                console.log("Authenticated successfully with payload:", authData);
                _this.authData = authData;
                callback();
            }
        }, {
            remember: "sessionOnly",
            scope: "email"
        });
    };
    return AuthServices;
})();
exports.AuthServices = AuthServices;
//# sourceMappingURL=auth_services.js.map