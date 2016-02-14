System.register(['angular2/core', '../posts/test.service', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, test_service_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_service_1_1) {
                test_service_1 = test_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_postsService) {
                    this._postsService = _postsService;
                    this.title = 'One on a tower';
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getPosts();
                };
                AppComponent.prototype.getPosts = function () {
                    var _this = this;
                    this._postsService.getPosts().subscribe(function (response) { return _this.posts = response.json(); });
                };
                AppComponent.PROD = false;
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        styleUrls: ['styles/app.css'],
                        templateUrl: 'views/app.html',
                        providers: [test_service_1.TestService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [test_service_1.TestService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map