System.register(['angular2/core', '../posts/posts.service', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, posts_service_1, http_1;
    var BlogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            BlogComponent = (function () {
                function BlogComponent(_postsService) {
                    this._postsService = _postsService;
                    this.title = 'DEFN';
                }
                BlogComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.getPosts()
                        .subscribe(function (posts) { return _this.posts = posts; });
                };
                BlogComponent.prototype.getPosts = function () {
                    this.url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
                    if (this.url) {
                        return this._postsService.getPostByUrl(this.url);
                    }
                    else {
                        return this._postsService.getPosts();
                    }
                };
                BlogComponent = __decorate([
                    core_1.Component({
                        selector: 'blog',
                        styleUrls: ['styles/blog.css'],
                        templateUrl: 'views/blog/posts.html',
                        providers: [posts_service_1.PostsService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService])
                ], BlogComponent);
                return BlogComponent;
            })();
            exports_1("BlogComponent", BlogComponent);
        }
    }
});
//# sourceMappingURL=blog.component.js.map