import {Injectable} from 'angular2/core';
import {POSTS}      from './mock-posts';

@Injectable()
export class PostsService {
    
    getPosts() {
        return Promise.resolve(POSTS);
    }
    
}