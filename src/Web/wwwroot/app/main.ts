import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MainModule } from './main.module';


// Bootstrap module here!!!
// This way we can include the module on every page...
platformBrowserDynamic().bootstrapModule( MainModule );