import {POSTS} from './mock-posts';

export class PostsService {   
    getPosts() {
        return Promise.resolve(POSTS);
    }
}