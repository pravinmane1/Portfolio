import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { InViewDirective } from '../../core/directives/in-view.directive';
import { SocialLinksComponent } from '../social-links/social-links.component';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, InViewDirective, SocialLinksComponent],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.scss',
})
export class ConnectComponent {
  email = 'manepravin11122@gmail.com';

  copyEmail() {
    navigator.clipboard.writeText(this.email);
  }
}
