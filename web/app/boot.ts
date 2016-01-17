import {bootstrap}    from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {AppComponent} from './app.component';

if(AppComponent.PROD) {
    enableProdMode();
}

bootstrap(AppComponent);