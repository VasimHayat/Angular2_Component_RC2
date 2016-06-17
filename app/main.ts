import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.Component';
 

bootstrap(AppComponent)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));
