import { Component } from '@angular/core';
import { InViewDirective } from '../../core/directives/in-view.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principles',
  standalone: true,
  imports: [CommonModule, InViewDirective],
  templateUrl: './principles.component.html',
  styleUrl: './principles.component.scss',
})
export class PrinciplesComponent {}
