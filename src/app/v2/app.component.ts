import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootComponent } from './boot.component';
import { TerminalComponent, WorkspaceView } from './terminal.component';
import { WorkspaceComponent } from './workspace.component';
import { StatusBarComponent } from './statusbar.component';
import { ModeToggleComponent } from '../features/mode-toggle/mode-toggle.component';
import { ToasterComponent } from '../core/components/toaster/toaster.component';
import { FirebaseConfigService } from '../core/firebase/firebase-config.service';
import { ANALYTICS_EVENT_TYPE } from '../core/firebase/event-list.const';

@Component({
  selector: 'app-root-v2',
  standalone: true,
  imports: [CommonModule, BootComponent, TerminalComponent, WorkspaceComponent, StatusBarComponent, ModeToggleComponent, ToasterComponent],
  template: `
    @if (!booted()) {
      <app-boot (done)="onBootDone()" />
    } @else {
      <div class="os-shell">
        <app-terminal (viewChange)="activeView.set($event)" />
        <app-workspace [activeView]="activeView()" />
        <app-statusbar [activeView]="activeView()" />
        <div class="os-mode-toggle">
          <app-mode-toggle />
        </div>
      </div>
    }
    <app-toaster />
  `,
  styles: [`
    .os-shell { display: flex; flex-flow: column nowrap; height: 100vh; width: 100vw; overflow: hidden; }
    .os-mode-toggle { position: fixed; bottom: 36px; right: 12px; z-index: 60; opacity: 0.6; transition: opacity 150ms; &:hover { opacity: 1; } }
  `]
})
export class AppComponent {
  booted = signal(false);
  activeView = signal<WorkspaceView>('about');

  constructor(private firebase: FirebaseConfigService) {}

  onBootDone() {
    this.booted.set(true);
    this.firebase.logEvent(ANALYTICS_EVENT_TYPE.SITE_OPENED);
  }
}
