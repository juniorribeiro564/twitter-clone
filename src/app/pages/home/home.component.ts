import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	tweets: any = []
	postLocal: any = []

	constructor(private service: MessagesService) { }

	ngOnInit(): void {
		const post: any = [localStorage.getItem('twitt')];
		this.tweets = this.service.getMessages();
		if (post[0].length != 0) {
			const array: string[] = post[0].split(',');
			this.postLocal = array;
		}
	}

	deletePost(array: string): void {
		if (array === 'tweets') {
			this.tweets.splice(0, 1)
			localStorage.setItem("twitt", this.tweets)
		} else {
			this.postLocal.splice(0, 1)
			localStorage.setItem("twitt", this.postLocal)
		}		
	}


}
