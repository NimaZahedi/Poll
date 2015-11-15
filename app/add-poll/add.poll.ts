import {Component, NgModel, NgFor} from "angular2/angular2";
import {PollServices} from "../poll.services";

@Component({
	selector: 'add-new-poll',
	templateUrl: '../app/add-poll/add-new-poll.html',
	directives: [NgModel, NgFor]
})

export class AddNewPoll {
	name: string = '';
	polls: Poll[] = new Array();

	constructor(private pollServices: PollServices) {
		pollServices.on((data: FirebaseDataSnapshot) => {
			this.polls = [];
			data.forEach((d) => {
				this.polls.push(d.val());
			});
		});
	}

	public addNewPoll() {
		var poll = new Poll(this.name);
		this.pollServices.push(poll);
	}

}

export class Poll {
	constructor(public name?: string) {
	}
}



