import {Component, bootstrap, provide, NgIf} from "angular2/angular2";

import {
ROUTER_PROVIDERS,
Route,
HashLocationStrategy,
LocationStrategy,
Router,
RouterLink,
RouteConfig,
RouterOutlet} from "angular2/router";

import {Home} from './home/home';
import {Project} from "./project/project";
import {Winner} from "./winner/winner";
import {AuthServices} from "./services/auth_services";
import {ProjectServices} from "./services/project_services";
import {UserServices} from "./services/user_services";

@Component({
	selector: 'app',
	templateUrl: './app/app.html',
	directives: [Home, Project, RouterOutlet, RouterLink, NgIf]
})

@RouteConfig([
	new Route({ path: "/project", component: Project, name: "Project" }),
	new Route({ path: "/winner", component: Winner, name: "Winner" }),
	new Route({ path: "/", component: Home, name: "Home" })
])

export class App {
	message;
	constructor(private authServices: AuthServices) {
		this.message = "hi from app";
	}
	
	public getProfile(){
		return this.authServices.getUserProfile();
	}
	public isAuthenticate() {
		return this.authServices.isAuthenticated(); 
	}
	
}

bootstrap(App, [AuthServices, ProjectServices, UserServices, ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);

