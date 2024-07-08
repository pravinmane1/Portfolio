import { CommonModule } from '@angular/common';
import { Component, isDevMode, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioComponent } from './core/components/portfolio/portfolio.component';
import { UnderDevelopmentComponent } from './core/components/under-development/under-development.component';
import {
  MODE_STORAGE_SERVICE,
  ModeLocalStorageService,
} from './features/mode-toggle/mode-storage.service';
import { ModeToggleService } from './features/mode-toggle/mode-toggle.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    UnderDevelopmentComponent,
    PortfolioComponent,
  ],
  providers: [
    ModeToggleService,
    { provide: MODE_STORAGE_SERVICE, useClass: ModeLocalStorageService },
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isDevMode = isDevMode();
  counter = signal(0);

  incrementCounter() {
    this.counter.set(this.counter() + 1);
  }
}
