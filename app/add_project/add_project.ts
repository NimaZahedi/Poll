import {Component} from "angular2/angular2";
import {ProjectServices} from "../services/project_services";

@Component({
	selector: 'add-new-project',
	templateUrl: '../app/add_project/add_new_project.html'
})

export class AddNewProject {
	projects = new Array();

	constructor(private projectServices: ProjectServices) {
		projectServices.on((data: FirebaseDataSnapshot) => {
			this.projects = [];
			data.forEach((d) => {
				this.projects.push({ id: d.key(), name: d.val().name });
			});
		});
	}

	public addNewProject(event, name: HTMLInputElement, description: HTMLInputElement, developers: HTMLInputElement) {
		var project = { name: name.value, description: description.value, developers: developers.value };
		this.projectServices.push(project);
		name.value = '';
		description.value = '';
		developers.value = '';
	}

}
