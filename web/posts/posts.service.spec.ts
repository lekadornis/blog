import {
  beforeEachProviders,
  describe,
  expect,
  it,
  injectAsync
} from 'angular2/testing';
import {HTTP_PROVIDERS}   from 'angular2/http';

import {PostsService} from './posts.service';

describe('Posts Service', () => {
  
    beforeEachProviders(() => [
        PostsService,
        HTTP_PROVIDERS
    ]);
    
    it('should return posts', injectAsync([PostsService], 
        (service: PostsService) => {
            return service.getPosts().toPromise().then((posts) => {
                expect(posts.length).toBeGreaterThan(1);
            });
        }
    ));

});