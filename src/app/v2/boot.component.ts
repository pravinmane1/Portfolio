import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boot',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="boot" [class.fade-out]="isDone()">
      <div class="boot-sequence">
        <p class="boot-line" [class.visible]="step() >= 1">
          <span class="boot-dim">[</span><span class="boot-ok">OK</span><span class="boot-dim">]</span> <span class="boot-path">~/workspace</span> <span class="boot-dim">loaded</span>
        </p>
        <p class="boot-line" [class.visible]="step() >= 2">
          <span class="boot-dim">[</span><span class="boot-ok">OK</span><span class="boot-dim">]</span> <span class="boot-path">angular/core</span> <span class="boot-dim">v18.0.0</span>
        </p>
        <p class="boot-line" [class.visible]="step() >= 3">
          <span class="boot-dim">[</span><span class="boot-ok">OK</span><span class="boot-dim">]</span> <span class="boot-path">pravin/portfolio</span> <span class="boot-dim">ready on</span> <span class="boot-accent">pravinmane.com</span>
        </p>
        <p class="boot-line boot-cursor" [class.visible]="step() >= 3">
          <span class="boot-prompt">❯</span>
        </p>
      </div>
    </div>
  `,
  styles: [`
    @import "../../styles.scss";
    .boot{position:fixed;inset:0;z-index:$z-boot;background:$clr-bg;display:flex;align-items:center;justify-content:center;transition:opacity $duration-slow $ease-out-expo;font-family:$ff-mono;}
    .boot.fade-out{opacity:0;pointer-events:none}
    .boot-line{opacity:0;margin-bottom:$space-xs;font-size:$fs-mono;transition:opacity $duration-fast}
    .boot-line.visible{opacity:1}
    .boot-dim{color:$clr-comment}
    .boot-ok{color:$clr-string}
    .boot-path{color:$clr-accent}
    .boot-accent{color:$clr-constant}
    .boot-prompt{color:$clr-function}
    .boot-cursor .boot-prompt::after{content:'';display:inline-block;width:8px;height:14px;background:$clr-text-primary;margin-left:2px;animation:blink 0.7s step-end infinite}
    @keyframes blink{50%{opacity:0}}
    @media(max-width:500px){.boot-line{font-size:$fs-xs}}
  `]
})
export class BootComponent implements OnInit {
  @Output() done = new EventEmitter<void>();
  step = signal(0); isDone = signal(false);
  ngOnInit(){
    setTimeout(()=>this.step.set(1),300);
    setTimeout(()=>this.step.set(2),800);
    setTimeout(()=>this.step.set(3),1400);
    setTimeout(()=>{this.isDone.set(true);setTimeout(()=>this.done.emit(),400)},2200);
  }
}
