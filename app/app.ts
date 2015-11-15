import {Component, bootstrap} from "angular2/angular2";
import {AddNewPoll} from "./add-poll/add.poll"

@Component({
	selector: 'app',
	template: '{{message}} <br /> <add-new-poll></add-new-poll>',
	directives: [AddNewPoll]
})

export class App {
	message;
	constructor() {
		this.message = "hi from app";
	}
}

bootstrap(App);

