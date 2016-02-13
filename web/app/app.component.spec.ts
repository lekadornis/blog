import {AppComponent} from './app.component';

describe('AppComponent', () => {

    beforeEach(function() {
        this.app = new AppComponent();
    });

    it('should have title property', function() {
        expect(this.app.title).toBe('One on a tower');
    });

});