import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type WorkspaceView = 'about' | 'work' | 'dna' | 'philosophy' | 'journey' | 'contact';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="editor-header">
      <div class="file-tabs">
        @for (cmd of commands; track cmd.id) {
        <button class="file-tab" [class.active]="activeView() === cmd.id" (click)="select(cmd.id)">
          <span class="tab-icon">{{ cmd.icon }}</span>
          {{ cmd.file }}
          @if (activeView() === cmd.id) { <span class="tab-close">×</span> }
        </button>
        }
      </div>
      <div class="terminal-input-row">
        <span class="prompt-sign">❯</span>
        <input
          class="cmd-input"
          [(ngModel)]="command"
          (keydown.enter)="execute()"
          placeholder="type a command (about, work, dna...)"
          autofocus spellcheck="false"
        />
      </div>
    </div>
  `,
  styles: [`
    @import "../../styles.scss";
    .editor-header{background:$clr-bg;border-bottom:1px solid $clr-border}
    .file-tabs{display:flex;overflow-x:auto;background:$clr-surface;padding:0 $space-xs;gap:0}
    .file-tab{display:flex;align-items:center;gap:$space-xs;background:none;border:none;color:$clr-comment;font-family:$ff-body;font-size:$fs-xs;padding:$space-xs $space-sm;cursor:pointer;border-right:1px solid $clr-border;white-space:nowrap;transition:all $duration-fast $ease-out;border-bottom:2px solid transparent}
    .file-tab:hover{color:$clr-text-secondary;background:$clr-surface-hover}
    .file-tab.active{color:$clr-text-primary;background:$clr-bg;border-bottom-color:$clr-accent}
    .tab-icon{font-size:10px}
    .tab-close{margin-left:2px;opacity:0;transition:opacity $duration-fast}
    .file-tab:hover .tab-close{opacity:0.5}
    .terminal-input-row{display:flex;align-items:center;gap:$space-sm;padding:0 $space-md;height:$terminal-h}
    .prompt-sign{color:$clr-function;font-family:$ff-mono;font-size:$fs-mono;flex-shrink:0}
    .cmd-input{background:none;border:none;color:$clr-string;font-family:$ff-mono;font-size:$fs-mono;outline:none;flex:1;&::placeholder{color:$clr-comment}}
    @media(max-width:600px){.file-tabs{justify-content:flex-start}.file-tab{font-size:10px;padding:$space-xs 6px}}
  `]
})
export class TerminalComponent {
  @Output() viewChange = new EventEmitter<WorkspaceView>();
  activeView = signal<WorkspaceView>('about');
  command = '';

  commands = [
    { id:'about' as WorkspaceView, file:'about.ts', icon:'📄' },
    { id:'work' as WorkspaceView, file:'deployments.ts', icon:'🚀' },
    { id:'dna' as WorkspaceView, file:'stack.config.ts', icon:'⚙️' },
    { id:'philosophy' as WorkspaceView, file:'.editorconfig', icon:'📝' },
    { id:'journey' as WorkspaceView, file:'git.log', icon:'📋' },
    { id:'contact' as WorkspaceView, file:'reach.out.ts', icon:'📬' },
  ];

  select(view: WorkspaceView){this.activeView.set(view);this.viewChange.emit(view)}
  execute(){const c=this.command.trim().toLowerCase();const m=this.commands.find(x=>x.id===c);if(m){this.select(m.id);this.command=''}}
}
