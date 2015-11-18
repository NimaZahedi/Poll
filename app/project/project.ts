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
	selectedProject = { projectId: '' };

	constructor(private projectServices: ProjectServices, private userServices: UserServices) {
		projectServices.on((data: FirebaseDataSnapshot) => {
			this.projects = [];
			data.forEach((d) => {
				var p = d.val();
				this.projects.push({
					id: d.key(),
					name: p.name,
					description: p.description,
					developers: p.developers, 
				});
			});
		});

		userServices.getVote((vote: FirebaseDataSnapshot) => {
			if (vote.val())
				this.selectedProject = vote.val();
			else
				this.selectedProject = { projectId: '' };
		});
	}

	public vote(event, projectId) {
		this.userServices.vote({ projectId: projectId });
		this.selectedProject = { projectId: projectId };
	}

}