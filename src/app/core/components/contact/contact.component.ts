import { Component } from '@angular/core';
import { SocialLinksComponent } from '../../../features/social-links/social-links.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SocialLinksComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
