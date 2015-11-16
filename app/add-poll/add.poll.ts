import {Component, NgFor} from "angular2/angular2";
import {PollServices} from "../poll.services";

@Component({
	selector: 'add-new-poll',
	templateUrl: '../app/add-poll/add-new-poll.html',
	directives: [NgFor]
})

export class AddNewPoll {
	polls: Poll[] = new Array();

	constructor(private pollServices: PollServices) {
		pollServices.on((data: FirebaseDataSnapshot) => {
			this.polls = [];
			data.forEach((d) => {
				this.polls.push(d.val());
			});
		});
	}

	public addNewPoll(event, name) {
		var poll = new Poll(name);
		this.pollServices.push(poll);
	}

}

export class Poll {
	constructor(public name?: string) {
	}
}



