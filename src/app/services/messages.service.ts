import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MessagesService {
	private messages: string[] = [];

	constructor() { }

	addMessage(message: string) {
		let localPosts = localStorage.getItem('twitt');
		if (localPosts) {
			var names: any = [message].concat(localPosts);
			localStorage.setItem("twitt", names);
		} else {
			var names: any = [message];
			localStorage.setItem("twitt", names);
		}
		this.messages.push(message);
	}

	getMessages() {
		 return this.messages;
	};

	clearMessages() {
		localStorage.clear();
	}

}
