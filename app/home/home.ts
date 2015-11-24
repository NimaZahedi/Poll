import {Component, NgIf} from 'angular2/angular2';
import {Router, RouterLink} from 'angular2/router';
import {AuthServices} from "../services/auth_services";

@Component({
	selector: 'home',
	templateUrl: '../app/home/home.html',
	directives: [NgIf, RouterLink]

})

export class Home {
	constructor(private authServices: AuthServices, private router: Router) {
	}
	public isAuthenticate() {
		return this.authServices.isAuthenticated();
	}
	public initGoogleAuth() {
		this.authServices.initGoogleAuth(() => {
			this.router.navigateByUrl('/project');
		});
	}
}