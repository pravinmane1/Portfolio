import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FirebaseConfigService } from '../../firebase/firebase-config.service';
import { ANALYTICS_EVENT_TYPE } from '../../firebase/event-list.const';

@Component({
  selector: 'app-under-development',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './under-development.component.html',
  styleUrl: './under-development.component.scss',
})
export class UnderDevelopmentComponent {
  title = "Pravin's Portfolio";

  constructor(private firebaseService: FirebaseConfigService) {}
  public socialLinkClicked(name: string) {
    this.firebaseService.logEvent(ANALYTICS_EVENT_TYPE.SOCIAL_LINK_CLIKED_DEV, {
      name,
    });
  }
}
