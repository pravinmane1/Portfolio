import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { InViewDirective } from '../../core/directives/in-view.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgOptimizedImage, InViewDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  skillCategories = [
    {
      name: 'Frontend',
      items: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'SCSS', 'HTML5', 'Responsive Design'],
    },
    {
      name: 'Backend',
      items: ['.NET Core', 'C#', 'REST APIs', 'SQL Server', 'PostgreSQL'],
    },
    {
      name: 'Cloud & DevOps',
      items: ['AWS', 'Azure', 'CI/CD', 'Docker', 'GitHub Actions'],
    },
    {
      name: 'Tools & Practices',
      items: ['Git', 'Agile', 'Code Review', 'Accessibility', 'Performance', 'Firebase'],
    },
  ];
}
