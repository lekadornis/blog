import {Component, OnInit}      from 'angular2/core';
import {TestService}            from '../posts/posts.service';
import {HTTP_PROVIDERS}         from 'angular2/http';
import {Post}                   from '../posts/post';
import 'rxjs/add/operator/map';

@Component({
    selector: 'home',
    styleUrls: ['styles/app.css'],
    templateUrl: 'views/app.html',
    providers: [TestService, HTTP_PROVIDERS]
})

export class AppComponent implements OnInit {
    
    constructor(private _postsService: TestService) { }
    
    public static PROD = false;
    public title = 'One on a tower';
    public posts : Post[];
    
    ngOnInit() {
        this.getPosts();
    }
    
    getPosts() {
        this._postsService.getPosts()
            .map(response => response.json())
            .subscribe(
                posts => this.posts = posts
            );
    }
}