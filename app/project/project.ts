import {Component, NgFor} from "angular2/angular2";
import {AddNewProject} from "../add_project/add_project";
import {ProjectServices} from "../services/project_services";
import {UserServices} from "../services/user_services";

@Component({
	selector: 'project',
	templateUrl: '../app/project/project.html',
	directives: [NgFor, AddNewProject]
})

export class Project {

	public projects;

	constructor(private projectServices: ProjectServices, private userServices: UserServices) {
		projectServices.on((data: FirebaseDataSnapshot) => {
			this.projects = [];
			data.forEach((d) => {
				this.projects.push(d.val());
			});
		});
	}

	public vote(event, projectName) {
		this.userServices.vote({ projectName: projectName });
	}

}