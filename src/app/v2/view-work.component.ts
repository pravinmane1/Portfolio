import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-work',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="view">
      @for (p of projects; track p.title; let i = $index) {
      <div class="deploy-row">
        <div class="deploy-header">
          <span class="deploy-hash">{{ p.commit }}</span>
          <span class="deploy-status" [class.live]="p.status === 'LIVE'" [class.building]="p.status === 'BUILD'">{{ p.status }}</span>
          <span class="deploy-date">{{ p.date }}</span>
        </div>
        <div class="deploy-body">
          <h3 class="deploy-name">{{ p.title }}</h3>
          <p class="deploy-desc">{{ p.description }}</p>
          <div class="deploy-diff">
            <span class="diff-add">+ {{ p.additions }} additions</span>
            <span class="diff-del">- {{ p.deletions }} deletions</span>
          </div>
        </div>
        <div class="deploy-tech">
          @for (t of p.tech; track t) { <span class="tech-chip">{{ t }}</span> }
        </div>
        <a [href]="p.live" target="_blank" class="deploy-url">{{ p.domain }}</a>
      </div>
      }
    </div>
  `,
  styles: [`
    @import "../../styles.scss";
    .view{height:calc(100vh - $statusbar-h - $terminal-h - $tabs-h);overflow-y:auto;padding:$space-md}
    .deploy-row{background:$clr-surface;border:1px solid $clr-border;border-radius:$radius-md;padding:$space-md $space-lg;margin-bottom:$space-md;transition:border-color $duration-fast $ease-out;&:hover{border-color:$clr-accent}}
    .deploy-header{display:flex;align-items:center;gap:$space-sm;margin-bottom:$space-sm;font-family:$ff-mono;font-size:$fs-xs}
    .deploy-hash{color:$clr-function}.deploy-date{color:$clr-comment;margin-left:auto}
    .deploy-status{padding:1px $space-sm;border-radius:$radius-sm;font-size:10px;font-weight:$fw-semibold;letter-spacing:0.5px;background:rgba(158,206,106,0.15);color:$clr-string;&.building{background:rgba(224,175,104,0.15);color:$clr-function}}
    .deploy-name{color:$clr-text-primary;font-size:$fs-lg;font-weight:$fw-semibold;margin-bottom:$space-xs}
    .deploy-desc{color:$clr-text-secondary;font-size:$fs-sm;line-height:$lh-relaxed;margin-bottom:$space-sm}
    .deploy-diff{display:flex;gap:$space-md;margin-bottom:$space-sm;font-family:$ff-mono;font-size:$fs-xs}
    .diff-add{color:$clr-string}.diff-del{color:$clr-error}
    .deploy-tech{display:flex;flex-wrap:wrap;gap:$space-xs;margin-bottom:$space-sm;span{font-family:$ff-mono;font-size:10px;color:$clr-accent;padding:1px $space-sm;border:1px solid $clr-accent-muted;border-radius:$radius-sm}}
    .deploy-url{font-family:$ff-mono;font-size:$fs-xs;color:$clr-function;text-decoration:none;&:hover{text-decoration:underline}}
  `]
})
export class ViewWorkComponent {
  projects = [
    { title:'E-Commerce Storefront', description:'Production-quality e-commerce UI with lazy loading, reactive forms, and standalone components.', tech:['Angular','TypeScript','SCSS','RxJS'], live:'https://ecomstore.pravinmane.com/', commit:'a7f3c92', status:'LIVE', date:'2025-11-14', additions:2347, deletions:412, domain:'ecomstore.pravinmane.com' },
    { title:'Configurable Calculator', description:'Modular, configuration-driven architecture with dependency injection and full test coverage.', tech:['Angular','TypeScript','Jasmine','SCSS'], live:'https://calculator.pravinmane.com/', commit:'4e8b1d6', status:'LIVE', date:'2025-08-03', additions:1823, deletions:289, domain:'calculator.pravinmane.com' },
    { title:'Interactive Card Input', description:'Pixel-perfect, accessible credit card component with real-time validation.', tech:['Angular','TypeScript','Reactive Forms','SCSS'], live:'https://pravinmane1.github.io/login-card-challenge/', commit:'c2d9f14', status:'BUILD', date:'2025-06-20', additions:1245, deletions:156, domain:'pravinmane1.github.io' },
  ];
}
