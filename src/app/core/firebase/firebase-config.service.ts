import { Injectable } from '@angular/core';
import { Analytics, getAnalytics } from 'firebase/analytics';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config.const';

@Injectable({
  providedIn: 'root',
})
export class FirebaseConfigService {
  private app!: FirebaseApp;
  private analytics!: Analytics;
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.analytics = getAnalytics(this.app);
  }
}
