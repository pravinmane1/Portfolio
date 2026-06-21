import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InViewDirective } from '../../core/directives/in-view.directive';

interface JourneyStep {
  year: string;
  role: string;
  company: string;
  detail: string[];
  tech: string[];
}

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [CommonModule, InViewDirective],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.scss',
})
export class JourneyComponent {
  activeIndex = signal<number>(0);

  steps: JourneyStep[] = [
    {
      year: '2014',
      role: 'The Beginning',
      company: 'Self-Taught Developer',
      detail: [
        'Taught myself HTML and CSS on a borrowed laptop, building simple websites',
        'Discovered the thrill of seeing code come to life on screen',
        'Built multiple Android applications as side projects during engineering',
        'Freelanced mobile app projects while completing computer engineering degree',
      ],
      tech: ['HTML', 'CSS', 'Android', 'Java', 'Firebase'],
    },
    {
      year: '2020',
      role: 'Full Stack Developer',
      company: 'SLB',
      detail: [
        'Led component architecture redesign for flagship oilfield data platform',
        'Introduced NgRx state management, reducing prop-drilling bugs across the team',
        'Built complex, API-driven UI modules handling real-time data streams via RxJS',
        'Shipped responsive, cross-browser interfaces tested across Chrome, Edge, and Safari',
      ],
      tech: ['Angular', 'TypeScript', '.NET Core', 'Azure', 'RxJS', 'NgRx'],
    },
    {
      year: '2024',
      role: 'Software Engineer II',
      company: 'JP Morgan Chase & Co.',
      detail: [
        'Architected reusable component libraries adopted across multiple teams',
        'Optimized bundle sizes and lazy-loaded routes for key workflows',
        'Implemented comprehensive error boundaries, improving production observability',
        'Collaborated with UX teams to ship accessible, WCAG-compliant interfaces',
      ],
      tech: ['Angular', 'TypeScript', '.NET Core', 'AWS', 'RxJS', 'NgRx'],
    },
  ];

  setActive(index: number) {
    this.activeIndex.set(index);
  }
}
