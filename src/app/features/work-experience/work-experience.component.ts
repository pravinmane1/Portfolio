import { Component } from '@angular/core';
import { InViewDirective } from '../../core/directives/in-view.directive';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [InViewDirective],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
})
export class WorkExperienceComponent {}
