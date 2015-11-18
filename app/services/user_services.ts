import {Injectable} from "angular2/angular2";
import {AuthServices} from "./auth_services";

@Injectable()
export class UserServices {

	private url = "https://AngularJSCPH.firebaseio.com/Users/";

	constructor(private authServices: AuthServices) {

	}

	public vote(project) {
		if (!this.authServices.isAuthenticated())
			return;
		var vote = new Firebase(this.url + this.authServices.getUid() + '/vote');
		vote.set(project);
	}

}