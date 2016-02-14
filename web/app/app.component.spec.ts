import {
  beforeEachProviders,
  describe,
  expect,
  it,
  injectAsync
} from 'angular2/testing';

import {provide} from 'angular2/core';
import {AppComponent} from './app.component';
import {PostsService} from '../posts/posts.service';

class MockPostsService extends PostsService {
    getPosts() {
        return Promise.resolve([
            { "title": "Title 1 mocked", "content": "Text 1" },
            { "title": "Title 2 mocked", "content": "Text 2" }
        ]);
    }
}

describe('AppComponent', () => {

    beforeEachProviders(() => [
        provide(PostsService, {useClass: MockPostsService}), 
        AppComponent
    ]);
    
    it('should have title property', function() {
        let app = new AppComponent(null);
        expect(app.title).toEqual('One on a tower');
    });
    
    it('posts service should return posts', injectAsync([AppComponent], 
        (service: AppComponent) => {
            return service.getPosts().then((posts) => {
                expect(posts.length).toBeGreaterThan(1);
            });
        }
    ), 3000);
    
});