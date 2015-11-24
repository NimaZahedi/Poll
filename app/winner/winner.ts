import {Component, NgFor} from "angular2/angular2";
import {UserServices} from "../services/user_services"
import {ProjectServices} from "../services/project_services"

@Component({
	selector: 'winner',
	templateUrl: '../app/winner/winner.html',
	directives: [NgFor]
})

export class Winner {
	projects;
	maxValue;
	constructor(private userServices: UserServices, private projectServices: ProjectServices) {

		userServices.getAllVotes((votes) => {
			this.maxValue = 0;
			var winners = [];
			for (var k in votes) {
				if (votes[k] == this.maxValue) {
					winners.push(k);
				}
				if (votes[k] > this.maxValue) {
					winners = [k];
					this.maxValue = votes[k]
				}
			}
			this.projects = [];
			winners.forEach((winner) => {
				this.projectServices.getProjectById(winner, (project) => {
					this.projects.push(project.val());
				})
			});
		});
	}
}