import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';

import {App} from './app.component';

bootstrap(App, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
