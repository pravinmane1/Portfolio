import { Component } from '@angular/core';
import { ModeToggleComponent } from '../../../features/mode-toggle/mode-toggle.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ModeToggleComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
