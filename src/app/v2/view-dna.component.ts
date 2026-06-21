import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({selector:'app-view-dna',standalone:true,imports:[CommonModule],
  template:`
    <div class="view">
      <div class="config-block">
        <p class="cfg-line"><span class="cfg-kw">import</span> {{ '{' }} <span class="cfg-type">TechStack</span> {{ '}' }} <span class="cfg-kw">from</span> <span class="cfg-str">'&#64;pravin/stack'</span>;</p>
        <br/>
        <p class="cfg-line"><span class="cfg-kw">export</span> <span class="cfg-kw">const</span> <span class="cfg-prop">stack</span>: <span class="cfg-type">TechStack</span> = {{ '{' }}</p>
        @for (c of clusters; track c.label) {
        <div class="cfg-section">
          <p class="cfg-line">&nbsp;&nbsp;<span class="cfg-cm">// {{ c.label }}</span></p>
          <p class="cfg-line">&nbsp;&nbsp;<span class="cfg-prop">{{ c.key }}</span>: [</p>
          <p class="cfg-line">&nbsp;&nbsp;&nbsp;&nbsp;@for (item of c.items; track item; let l = $last) {<span class="cfg-str">'{{ item }}'</span>@if (!l) {, }} </p>
          <p class="cfg-line">&nbsp;&nbsp;],</p>
        </div>
        }
        <p class="cfg-line">{{ '}' }};</p>
      </div>
    </div>
  `,
  styles:[`@import "../../styles.scss";
    .view{height:calc(100vh - $statusbar-h - $terminal-h - $tabs-h);overflow-y:auto;padding:$space-lg}
    .config-block{font-family:$ff-mono;font-size:$fs-mono;line-height:1.9}
    .cfg-kw{color:$clr-accent}.cfg-str{color:$clr-string}.cfg-type{color:$clr-function}.cfg-prop{color:$clr-constant}.cfg-cm{color:$clr-comment;font-style:italic}
    .cfg-section{margin:$space-sm 0}
    .cfg-line{white-space:pre-wrap}
    @media(max-width:600px){.config-block{font-size:11px}}
  `]
})
export class ViewDnaComponent {
  clusters = [
    { key:'frontend',label:'Frontend',items:['Angular','TypeScript','RxJS','NgRx','SCSS','HTML5','Web Components']},
    { key:'backend',label:'Backend',items:['.NET Core','C#','REST APIs','SQL Server','PostgreSQL']},
    { key:'cloud',label:'Cloud & DevOps',items:['AWS','Azure','CI/CD','Docker','GitHub Actions']},
    { key:'engineering',label:'Engineering',items:['System Design','Performance','Accessibility','Code Review','Mentoring']},
  ];
}

