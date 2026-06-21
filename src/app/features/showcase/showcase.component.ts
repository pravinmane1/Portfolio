import { Component, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InViewDirective } from '../../core/directives/in-view.directive';

interface ShowcaseProject {
  title: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
  image: string;
}

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [CommonModule, InViewDirective],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss',
})
export class ShowcaseComponent implements AfterViewInit {
  @ViewChildren('card') cards!: QueryList<ElementRef>;

  projects: ShowcaseProject[] = [
    { title: 'E-Commerce Storefront', description: 'Production-quality e-commerce UI with lazy loading, reactive forms, and standalone components.', tech: ['Angular', 'TypeScript', 'SCSS', 'RxJS'], live: 'https://ecomstore.pravinmane.com/', github: 'https://github.com/pravinmane1/EcomStore', image: 'https://i.ibb.co/d22K19S/ecom.png' },
    { title: 'Configurable Calculator', description: 'Modular, configuration-driven architecture with dependency injection and full test coverage.', tech: ['Angular', 'TypeScript', 'Jasmine', 'SCSS'], live: 'https://calculator.pravinmane.com/', github: 'https://github.com/pravinmane1/clean-calculator', image: 'https://i.ibb.co/hWjh0Fk/calc.png' },
    { title: 'Interactive Card Input', description: 'Pixel-perfect, accessible credit card component with real-time validation and micro-interactions.', tech: ['Angular', 'TypeScript', 'Reactive Forms', 'SCSS'], live: 'https://pravinmane1.github.io/login-card-challenge/', github: 'https://github.com/pravinmane1/login-card-challenge', image: 'https://i.ibb.co/vQXdxLh/card.png' },
  ];

  ngAfterViewInit(): void {
    this.cards.forEach((card) => {
      const el = card.nativeElement as HTMLElement;
      el.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty('--mouse-x', `${x}%`);
        el.style.setProperty('--mouse-y', `${y}%`);
      });
    });
  }
}
