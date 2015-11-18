import {Component} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {AuthServices} from "../services/auth_services";

@Component({
	selector: 'home',
	templateUrl: '../app/home/home.html'
})

export class Home {
	constructor(private authServices: AuthServices, private router: Router) {
	}

	public initGoogleAuth() {
		this.authServices.initGoogleAuth(() => {
			this.router.navigateByUrl('/project');
		});
	}
}