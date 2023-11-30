import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-home-card',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeCardComponent{
	@Input() TweetMessage: string = ""

	constructor() { }

}