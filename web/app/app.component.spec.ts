import {AppComponent} from './app.component';

describe('App Component', () => {
  
    it('has title', () => {
        let appComponent = new AppComponent();
        expect(appComponent.title).not.toEqual(undefined);
    });
  
});