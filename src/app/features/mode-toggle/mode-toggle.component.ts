import { Component } from '@angular/core';
import { ModeToggleService } from './mode-toggle.service';

@Component({
  selector: 'app-mode-toggle',
  standalone: true,
  imports: [],
  templateUrl: './mode-toggle.component.html',
  styleUrl: './mode-toggle.component.scss',
})
export class ModeToggleComponent {
  constructor(private modeToggleService: ModeToggleService) {}
  toggle() {
    this.modeToggleService.toggleMode();
  }
}
