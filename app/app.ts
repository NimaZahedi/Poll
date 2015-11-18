import {Component, bootstrap, provide} from "angular2/angular2";

import {ROUTER_PROVIDERS,
Route,
HashLocationStrategy,
LocationStrategy,
Router,
RouterLink,
RouteConfig,
RouterOutlet} from "angular2/router";

import { Home } from './home/home';
import {Project} from "./project/project";
import {AuthServices} from "./services/auth_services";
import {ProjectServices} from "./services/project_services";
import {UserServices} from "./services/user_services";

@Component({
	selector: 'app',
	templateUrl: './app/app.html',
	directives: [Home, Project, RouterOutlet, RouterLink]
})

@RouteConfig([
	new Route({ path: "/project", component: Project, name: "Project" }),
	new Route({ path: "/", component: Home, name: "Home" })
])

export class App {
	message;
	constructor() {
		this.message = "hi from app";
	}
}

bootstrap(App, [AuthServices, ProjectServices, UserServices, ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);

