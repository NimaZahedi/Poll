import {Component, NgFor} from "angular2/angular2";
import {} from "./add-poll/add-poll"; 
import {PollServices} from "../services/poll.services";

@Component({
	selector: 'poll',
	templateUrl: '../app/poll/poll.html',
	directives: [NgFor]
})

export class Poll {

	public polls: Poll[];

	constructor(private pollServices: PollServices) {
		pollServices.on((data: FirebaseDataSnapshot) => {
			this.polls = [];
			data.forEach((d) => {
				this.polls.push(d.val());
			});
		});
	}

}