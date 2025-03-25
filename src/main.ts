import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

fetch('/config.json')
  .then(response => response.json())
  .then(config => {
    (window as any).config = config;
    bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  }).catch(()=>{
   bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
  });
