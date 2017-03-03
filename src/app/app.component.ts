import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html' 
})

//  [] means property binding - Component to dom
// () means event binding - Dom to component

export class AppComponent  { 
	title = 'Angular 2';
	name = 'Ward';
	wardsColor = 'blue'; 
	

	changeSuitColor() {
		this.wardsColor = this.wardsColor === 'blue' ?  'red' : 'blue' ;
	}
}
