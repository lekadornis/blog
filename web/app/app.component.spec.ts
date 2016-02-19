import {
  beforeEachProviders,
  describe,
  expect,
  it,
  injectAsync
} from 'angular2/testing';
import {HTTP_PROVIDERS}   from 'angular2/http';
import {provide} from 'angular2/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';

import {AppComponent} from './app.component';
import {PostsService} from '../posts/posts.service';

class MockPostsService extends PostsService {
    
    getPosts() {
        return Observable.of(new Object()).map(
            posts => [
                { "title": "Title 1 mocked", "content": "Text 1" },
                { "title": "Title 2 mocked", "content": "Text 2" }
            ]
        );
    }
}

describe('AppComponent', () => {

    beforeEachProviders(() => [
        provide(PostsService, {useClass: MockPostsService}), 
        AppComponent,
        HTTP_PROVIDERS
    ]);
    
    it('should have a title defined', function() {
        let app = new AppComponent(null);
        expect(app.title).toBeDefined();
    });
    
    it('posts service should return posts', injectAsync([AppComponent], 
        (service: AppComponent) => {
            return service.getPosts().toPromise().then((posts) => {
                expect(posts.length).toBeGreaterThan(1);
            });
        }
    ));
    
});