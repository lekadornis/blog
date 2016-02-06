import {PostsService} from './posts.service';

describe('Posts Service', () => {
  
    it('return posts', (done) => {
        let postsService = new PostsService();
        postsService.getPosts().then(
            function(posts) {
                expect(posts.length).toBeGreaterThan(1);
                done();
            }
        );
    });
});