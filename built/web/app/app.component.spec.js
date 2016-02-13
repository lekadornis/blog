System.register(['./app.component'], function(exports_1) {
    var app_component_1;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            describe('AppComponent', function () {
                beforeEach(function () {
                    this.app = new app_component_1.AppComponent();
                });
                it('should have title property', function () {
                    expect(this.app.title).toBe('One on a tower');
                });
            });
        }
    }
});
