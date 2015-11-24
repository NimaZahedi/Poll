import {Injectable} from "angular2/angular2";
import {AuthServices} from "./auth_services";

@Injectable()
export class UserServices {

	private url = "https://AngularJSCPH.firebaseio.com/Users/";

	constructor(private authServices: AuthServices) {

	}

	public getVoteRef() {
		return new Firebase(this.url + this.authServices.getUid() + '/vote');
	}
	public getAllVotes(callback) {
		var userRef = new Firebase(this.url);
		var votes = {};
		userRef.once('value', (users) => {
			var us = users.val();
			for (var k in us) {
				var user = us[k];
				if (user.vote) {
					var id = user.vote.projectId;
					if (id in votes)
						votes[id]++;
					else
						votes[id] = 1;
				}

			}
			callback(votes)
		});
	}

	public vote(project) {
		if (!this.authServices.isAuthenticated())
			return;
		var vote = this.getVoteRef();
		vote.set(project);
	}

	public getVote(callback) {

		if (!this.authServices.isAuthenticated())
			return;
		var vote = this.getVoteRef();
		vote.on("value", callback)
	}

}