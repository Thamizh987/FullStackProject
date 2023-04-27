import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/*When the server get started ..It comes to main.ts.Here it is given the App module,which 
is the head of all the modules and components.It then goes to AppModule.*/ 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
