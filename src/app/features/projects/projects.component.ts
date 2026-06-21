import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { InViewDirective } from '../../core/directives/in-view.directive';

interface Project {
  title: string;
  description: string;
  techList: string[];
  github: string;
  screenshot: string;
  live: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgOptimizedImage, InViewDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-Commerce Storefront',
      description:
        'A production-quality e-commerce UI with product listing, cart management, and responsive design. Built as a showcase of Angular best practices including lazy loading, reactive forms, and standalone components.',
      techList: ['Angular', 'TypeScript', 'SCSS', 'RxJS'],
      github: 'https://github.com/pravinmane1/EcomStore',
      screenshot: 'https://i.ibb.co/d22K19S/ecom.png',
      live: 'https://ecomstore.pravinmane.com/',
    },
    {
      title: 'Configurable Calculator',
      description:
        'A highly modular, configuration-driven calculator built with Angular. Demonstrates clean architecture patterns: separation of concerns, dependency injection, and comprehensive unit test coverage.',
      techList: ['Angular', 'TypeScript', 'Jasmine', 'SCSS'],
      github: 'https://github.com/pravinmane1/clean-calculator',
      screenshot: 'https://i.ibb.co/hWjh0Fk/calc.png',
      live: 'https://calculator.pravinmane.com/',
    },
    {
      title: 'Interactive Card Input',
      description:
        'A pixel-perfect, accessible credit card input component built from a Frontend Masters challenge. Features real-time formatting, validation, and smooth micro-interactions.',
      techList: ['Angular', 'TypeScript', 'Reactive Forms', 'SCSS'],
      github: 'https://github.com/pravinmane1/login-card-challenge',
      screenshot: 'https://i.ibb.co/vQXdxLh/card.png',
      live: 'https://pravinmane1.github.io/login-card-challenge/',
    },
  ];

  visibleCount = 3;

  get visibleProjects(): Project[] {
    return this.projects.slice(0, this.visibleCount);
  }

  get hasMore(): boolean {
    return this.visibleCount < this.projects.length;
  }

  showMore(): void {
    this.visibleCount = Math.min(this.visibleCount + 3, this.projects.length);
  }
}
