/**
 * AuthServices
 */

export class AuthServices {

    private authData;
    private firebaseRef = new Firebase('https://AngularJSCPH.firebaseio.com')

    constructor() {
    }

    public getUserProfile() {
        if (this.authData != null) {
            return {
                displayName: this.authData.google.displayName,
                email: this.authData.google.email
            };
        }
    }

    public getUid() {
        return this.authData.uid;
    }

    public isAuthenticated() {
        this.authData = this.firebaseRef.getAuth()
        return this.authData != null;
    }

    public unAuth() {
        this.firebaseRef.unauth();
    }

    public initGoogleAuth(callback) {

        this.firebaseRef.authWithOAuthPopup("google", (error, authData) => {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);

                this.authData = authData;
                var profile = new Firebase("https://AngularJSCPH.firebaseio.com/Users/" + authData.uid + '/profile');
                profile.set({
                    displayName: authData.google.displayName,
                    email: authData.google.email
                });
                callback();
            }
        }, {
                remember: "sessionOnly",
                scope: "email"
            });
    }
}