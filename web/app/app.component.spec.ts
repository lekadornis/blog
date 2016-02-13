import {
  beforeEachProviders,
  describe,
  expect,
  it,
  injectAsync
} from 'angular2/testing';

import {AppComponent} from './app.component';
import {PostsService} from '../posts/posts.service';

describe('AppComponent', () => {

    beforeEachProviders(() => [PostsService, AppComponent]);
    
    it('should have title property', function() {
        let app = new AppComponent();
        expect(app.title).toEqual('One on a tower');
    });
    
    it('posts service should return posts', injectAsync([AppComponent], 
        (service: AppComponent) => {
            return service.getPosts().then((posts) => {
                expect(posts.length).toBeGreaterThan(1);
            });
        }
    ));
    
});