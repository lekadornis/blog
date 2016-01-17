System.register(['./app.component'], function(exports_1) {
    var app_component_1;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            describe('App Component', function () {
                it('has title', function () {
                    var appComponent = new app_component_1.AppComponent();
                    expect(appComponent.title).not.toEqual(undefined);
                });
            });
        }
    }
});
