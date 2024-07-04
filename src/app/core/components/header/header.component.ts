import { Component } from '@angular/core';
import { ModeToggleComponent } from '../../../features/mode-toggle/mode-toggle.component';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ModeToggleComponent, NavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
