import { Injectable, isDevMode } from '@angular/core';
import { Analytics, getAnalytics, logEvent } from 'firebase/analytics';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config.const';
import { ANALYTICS_EVENT, ANALYTICS_EVENT_TYPE } from './event-list.const';

@Injectable({
  providedIn: 'root',
})
export class FirebaseConfigService {
  private app!: FirebaseApp;
  private analytics!: Analytics;
  constructor() {
    if (isDevMode()) {
      return;
    }
    this.app = initializeApp(firebaseConfig);
    this.analytics = getAnalytics(this.app);
  }

  public logEvent(
    eventType: ANALYTICS_EVENT_TYPE,
    eventParams?: Record<string, string>
  ) {
    if (isDevMode()) {
      return;
    }
    if (eventParams) {
      logEvent(this.analytics, ANALYTICS_EVENT[eventType], eventParams);
    } else {
      logEvent(this.analytics, ANALYTICS_EVENT[eventType]);
    }
  }
}
