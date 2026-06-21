import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  categories = [
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
      items: ['Git', 'Agile', 'Code Review', 'Accessibility', 'Performance Optimization', 'Firebase'],
    },
  ];
}
