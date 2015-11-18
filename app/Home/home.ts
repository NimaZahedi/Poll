import {Component} from 'angular2/angular2';
import {AuthServices} from "../services/auth_services";
@Component({
	selector: 'home',
	templateUrl: '../app/home/home.html'
})

/**
 * Home
 */
export class Home {
	constructor(private authServices: AuthServices) {
	}
	
	public initGoogleAuth() {
		this.authServices.initGoogleAuth();
	}
}