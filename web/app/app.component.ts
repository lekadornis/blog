import {Component, OnInit} from 'angular2/core';
import {PostsService} from '../posts/posts.service';
import {Post} from '../posts/post';

@Component({
    selector: 'home',
    styleUrls: ['styles/app.css'],
    templateUrl: 'views/app.html',
    providers: [PostsService]
})

export class AppComponent implements OnInit {
    
    constructor(private _postsService: PostsService) { }
    
    public static PROD = false;
    public title = 'One on a tower';
    public posts: Post[];
    
    ngOnInit() {
        this.getPosts();
    }
    
    getPosts() {
        this._postsService.getPosts().then(posts => this.posts = posts);
    }
}