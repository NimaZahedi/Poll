export class PollServices {
	private polls: Firebase;
	private url = "https://AngularJSCPH.firebaseio.com/Polls";
	
	constructor() {
		this.polls = new Firebase(this.url); 
	}
	
	public push(poll) {
		this.polls.push(poll);
	}
	
	public on(callback) {
		this.polls.on('value', callback);
	}
	
}