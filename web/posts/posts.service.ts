import {Component, Injectable}  from 'angular2/core';
import {Http, HTTP_PROVIDERS}   from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    providers: [HTTP_PROVIDERS]
})

@Injectable()
export class PostsService {

    public http: Http;
    
    constructor(http: Http) {
        this.http = http;
    }

    getPosts(url: string) {
        return this.http.get('/get/post/' + url)
                .map(response => response.json());
    }

}