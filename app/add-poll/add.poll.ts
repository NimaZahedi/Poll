import {Component} from "angular2/angular2";

@Component({
	selector: 'add-new-poll',
	template: '{{message}}'
})

export class AddNewPoll {
	message;
	constructor() {
		this.message = "Add new poll";
	}
}

