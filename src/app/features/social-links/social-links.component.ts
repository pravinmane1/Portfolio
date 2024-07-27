import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FirebaseConfigService } from '../../core/firebase/firebase-config.service';
import { ANALYTICS_EVENT_TYPE } from '../../core/firebase/event-list.const';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss',
})
export class SocialLinksComponent {

  @Input() onlyIcons!: boolean;
  constructor(private firebaseService: FirebaseConfigService) {}

  public socialLinkClicked(name: string) {
    this.firebaseService.logEvent(ANALYTICS_EVENT_TYPE.SOCIAL_LINK_CLIKED, {
      name,
    });
  }
}
