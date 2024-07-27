import { Component } from '@angular/core';
import { SocialLinksComponent } from '../../../features/social-links/social-links.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SocialLinksComponent, NgOptimizedImage],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
