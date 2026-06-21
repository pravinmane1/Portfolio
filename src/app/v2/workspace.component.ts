import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { WorkspaceView } from './terminal.component';
import { ViewAboutComponent } from './view-about.component';
import { ViewWorkComponent } from './view-work.component';
import { ViewDnaComponent } from './view-dna.component';
import { ViewPhilosophyComponent } from './view-philosophy.component';
import { ViewJourneyComponent } from './view-journey.component';
import { ViewContactComponent } from './view-contact.component';

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [CommonModule, ViewAboutComponent, ViewWorkComponent, ViewDnaComponent, ViewPhilosophyComponent, ViewJourneyComponent, ViewContactComponent],
  template: `
    <div class="workspace" [attr.data-view]="activeView">
      @switch (activeView) {
        @case ('about') { <div class="view-slot"><app-view-about /></div> }
        @case ('work') { <div class="view-slot"><app-view-work /></div> }
        @case ('dna') { <div class="view-slot"><app-view-dna /></div> }
        @case ('philosophy') { <div class="view-slot"><app-view-philosophy /></div> }
        @case ('journey') { <div class="view-slot"><app-view-journey /></div> }
        @case ('contact') { <div class="view-slot"><app-view-contact /></div> }
      }
    </div>
  `,
  styles: [`
    :host { display: block; flex: 1; overflow: hidden; }
    .workspace { height: 100%; position: relative; }
    .view-slot {
      position: absolute; inset: 0;
      animation: viewEnter 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    @keyframes viewEnter {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class WorkspaceComponent {
  @Input() activeView: WorkspaceView = 'about';
}
