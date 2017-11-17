import {InjectionToken} from '@angular/core';
import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

let funnelRoute = 'site';
export const AppConfig: IAppConfig = {
  routes: {
    site: funnelRoute,
    funnel: 'funnel'
  },
  endpoints: {
    heroes: 'https://service.eoc.nl/premie-berekening'
  }
};