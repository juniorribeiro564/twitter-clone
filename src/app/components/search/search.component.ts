import { Component } from '@angular/core';
import { MessagesService } from '../../services/messages.service'

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})

export class SearchComponent {
	tweetMessage: string = "";
	tweetMaxLength: number = 50;
	tweetRemain: number = this.tweetMaxLength;

	constructor(private service: MessagesService) {

	}

	sendTweet() {
		this.service.addMessage(this.tweetMessage)
		this.tweetMessage = ""
		this.tweetRemain = this.tweetMaxLength
	}

	changeTweet() {
		this.tweetRemain = this.tweetMaxLength - this.tweetMessage.length
	}

}
