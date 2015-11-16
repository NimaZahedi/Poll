import {Component, bootstrap, provide} from "angular2/angular2";

import {ROUTER_PROVIDERS,
Route,
HashLocationStrategy,
LocationStrategy,
Router,
RouterLink,
RouteConfig,
RouterOutlet} from "angular2/router";

import {AddNewPoll} from "./add-poll/add.poll";
import {Poll} from "./poll/poll";
import {PollServices} from "./services/poll.services";

@Component({
	selector: 'app',
	templateUrl: './app/app.html',
	directives: [AddNewPoll, Poll, RouterOutlet, RouterLink]
})

@RouteConfig([
	new Route({ path: "/poll", component: Poll, name: "Poll" }),
	new Route({ path: "/addpoll", component: AddNewPoll, name: "AddNewPoll" })
])

export class App {
	message;
	constructor() {
		this.message = "hi from app";
	}
}

bootstrap(App, [PollServices, ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);

