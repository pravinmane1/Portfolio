import { CommonModule } from '@angular/common';
import { Component, isDevMode, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioComponent } from './core/components/portfolio/portfolio.component';
import { UnderDevelopmentComponent } from './core/components/under-development/under-development.component';
import {
  MODE_STORAGE_SERVICE,
  ModeLocalStorageService,
} from './features/mode-toggle/mode-storage.service';
import { ModeToggleService } from './features/mode-toggle/mode-toggle.service';
import { FirebaseConfigService } from './core/firebase/firebase-config.service';
import { ANALYTICS_EVENT_TYPE } from './core/firebase/event-list.const';
import { ReactiveFormsModule } from '@angular/forms';
import { ToasterComponent } from './core/components/toaster/toaster.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    UnderDevelopmentComponent,
    PortfolioComponent,
    ToasterComponent,
  ],
  providers: [
    ModeToggleService,
    ReactiveFormsModule,
    { provide: MODE_STORAGE_SERVICE, useClass: ModeLocalStorageService },
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isDevMode = isDevMode();
  counter = signal(0);

  constructor(private firebaseService: FirebaseConfigService) {}

  ngOnInit(): void {
    this.firebaseService.logEvent(ANALYTICS_EVENT_TYPE.SITE_OPENED);
  }

  incrementCounter() {
    this.counter.set(this.counter() + 1);
  }
}
