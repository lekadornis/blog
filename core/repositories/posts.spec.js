require(process.cwd() + '/lib/jasmine/reporter');
var postsRepo = require(process.cwd() + '/core/repositories/posts');

describe('Posts Repository', function () {
    
    it('getAll : should return posts', function (done) {
        postsRepo.getAll().then(function(posts) {
            expect(posts.length).toBeGreaterThan(0);
            done();
        })
    });
    
});