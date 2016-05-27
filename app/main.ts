import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

import {App} from './app.component';

bootstrap(App, [HTTP_PROVIDERS]);
