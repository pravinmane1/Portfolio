import { Component } from '@angular/core';
import { AppV3Component } from './v3/app.component';
import {
  MODE_STORAGE_SERVICE,
  ModeLocalStorageService,
} from './features/mode-toggle/mode-storage.service';
import { ModeToggleService } from './features/mode-toggle/mode-toggle.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppV3Component],
  providers: [
    ModeToggleService,
    { provide: MODE_STORAGE_SERVICE, useClass: ModeLocalStorageService },
  ],
  template: `<app-root-v3 />`,
})
export class AppComponent {}
