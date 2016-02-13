import {PostsService} from './posts.service';

describe('Posts Service', () => {
  
    beforeEach(function() {
        this.postsService = new PostsService();
    });
    
    it('should return posts', function(done) {
        this.postsService.getPosts().then(
            function(posts) {
                expect(posts.length).toBeGreaterThan(1);
                done();
            }
        );
    });

});