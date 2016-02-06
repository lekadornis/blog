import {Component} from 'angular2/core';

@Component({
    selector: 'home',
    styleUrls: ['styles/app.css'],
    templateUrl: 'views/app.html'
})

export class AppComponent {

    public static PROD = false;
    public title = 'One on a tower';
    
}