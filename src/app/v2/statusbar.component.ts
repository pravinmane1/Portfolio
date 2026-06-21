import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { WorkspaceView } from './terminal.component';

@Component({
  selector: 'app-statusbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="statusbar">
      <div class="status-left">
        <span class="st-git">⎇</span> <span class="st-branch">main</span>
        <span class="st-sep">|</span>
        <span class="st-file">{{ fileName }}</span>
        <span class="st-line">Ln 1, Col 1</span>
      </div>
      <div class="status-right">
        <span class="st-lang">TypeScript</span>
        <span class="st-sep">|</span>
        <span class="st-encoding">UTF-8</span>
        <span class="st-sep">|</span>
        <span class="st-lf">LF</span>
      </div>
    </div>
  `,
  styles: [`
    @import "../../styles.scss";
    .statusbar{display:flex;justify-content:space-between;align-items:center;height:$statusbar-h;padding:0 $space-md;background:$clr-accent;font-family:$ff-mono;font-size:11px;color:$clr-bg;font-weight:$fw-medium}
    .status-left,.status-right{display:flex;align-items:center;gap:$space-xs}
    .st-sep{opacity:0.4}.st-branch{opacity:0.9}.st-file{opacity:0.9}
    .st-line,.st-lang,.st-encoding,.st-lf{opacity:0.6}
    @media(max-width:600px){.status-right{display:none}}
  `]
})
export class StatusBarComponent {
  @Input() activeView: WorkspaceView = 'about';

  get fileName(): string {
    const map: Record<string,string> = {about:'about.ts',work:'deployments.ts',dna:'stack.config.ts',philosophy:'.editorconfig',journey:'git.log',contact:'reach.out.ts'};
    return map[this.activeView] || 'about.ts';
  }
}
