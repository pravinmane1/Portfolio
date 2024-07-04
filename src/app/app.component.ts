import { CommonModule } from '@angular/common';
import { Component, isDevMode } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UnderDevelopmentComponent } from './core/under-development/under-development.component';
import { PortfolioComponent } from './core/portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, UnderDevelopmentComponent, PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isDevMode = isDevMode();
}
