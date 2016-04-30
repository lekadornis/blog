import {Component, OnInit}      from 'angular2/core';
import {PostsService}           from '../posts/posts.service';
import {HTTP_PROVIDERS}         from 'angular2/http';
import {Post}                   from '../posts/post';

@Component({
    selector: 'blog',
    styleUrls: ['styles/posts.css'],
    templateUrl: 'views/blog/posts.html',
    providers: [PostsService, HTTP_PROVIDERS]
})

export class BlogComponent implements OnInit {
    
    constructor(private _postsService: PostsService) { }
    
    public title = 'DEFN';
    public posts : Post[];
    public url : string;
    
    ngOnInit() {
        this.getPosts()
            .subscribe(
                posts => this.posts = posts
            );
    }
    
    getPosts() {
        this.url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        return this._postsService.getPosts(this.url);            
    }
}