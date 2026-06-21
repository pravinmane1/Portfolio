import { Component } from '@angular/core';import { CommonModule } from '@angular/common';
@Component({selector:'app-view-philosophy',standalone:true,imports:[CommonModule],
  template:`
    <div class="view">
      <div class="editorconfig">
        <p class="ec-line"><span class="ec-cm"># Build Philosophy</span></p>
        <br/>
        @for (p of principles; track p.key) {
        <p class="ec-line"><span class="ec-cm"># {{ p.key }}</span></p>
        <p class="ec-line"><span class="ec-prop">{{ p.key }}</span> = <span class="ec-val">{{ p.value }}</span></p>
        <br/>
        }
        <p class="ec-line"><span class="ec-cm"># These principles guide every PR, every component, every decision.</span></p>
      </div>
    </div>
  `,
  styles:[`@import "../../styles.scss";
    .view{height:calc(100vh - $statusbar-h - $terminal-h - $tabs-h);overflow-y:auto;padding:$space-lg;display:flex;align-items:center;justify-content:center}
    .editorconfig{font-family:$ff-mono;font-size:$fs-mono;line-height:1.9;max-width:550px}
    .ec-cm{color:$clr-comment;font-style:italic}.ec-prop{color:$clr-constant}.ec-val{color:$clr-string}
    @media(max-width:600px){.editorconfig{font-size:11px}}
  `]
})
export class ViewPhilosophyComponent {
  principles = [
    { key:'performance_first',value:'true  // Performance is a feature, not an optimization' },
    { key:'keep_it_simple',value:'true  // Simple scales. Complexity is the enemy of reliability' },
    { key:'design_is_trust',value:'true  // Every pixel either builds or erodes confidence' },
    { key:'ship_incrementally',value:'true  // Perfect is the enemy of shipped' },
  ];
}

