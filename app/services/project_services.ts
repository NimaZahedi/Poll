export class ProjectServices {
	private projects: Firebase;
	private url = "https://AngularJSCPH.firebaseio.com/Projects";
	
	constructor() {
		this.projects = new Firebase(this.url); 
	}
	
	public push(project) {
		this.projects.push(project);
	}
	
	public on(callback) {
		this.projects.on('value', callback);
	}
	
}