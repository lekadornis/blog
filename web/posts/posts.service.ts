import {Component, Injectable}  from 'angular2/core';
import {Http, HTTP_PROVIDERS}   from 'angular2/http';

@Component({
    providers: [HTTP_PROVIDERS]
})

@Injectable()
export class TestService {

    public http: Http;
    
    constructor(http: Http) {
        this.http = http;
    }
    
    getPosts() {
        return this.http.get('get/posts');
    }

}