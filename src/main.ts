import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SunsetTransModule } from './app/sunset-trans.module';


platformBrowserDynamic().bootstrapModule(SunsetTransModule)
  .catch(err => console.error(err));
