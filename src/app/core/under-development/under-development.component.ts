import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-under-development',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './under-development.component.html',
  styleUrl: './under-development.component.scss',
})
export class UnderDevelopmentComponent {
  title = "Pravin's Portfolio";
}
