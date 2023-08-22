import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

declare global {
  interface Window {
    gapi: any;
  }
}

const script = document.createElement('script');
script.src = 'https://apis.google.com/js/api.js';
script.onload = () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
};
document.head.appendChild(script);
