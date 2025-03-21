import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [ 
    provideRouter(
      routes, 
      withViewTransitions({
        onViewTransitionCreated(transitionInfo) {
      console.log(transitionInfo);
    },}),),
  
    importProvidersFrom(
      HttpClientModule
    )
  
  ]
};
