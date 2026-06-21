import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-view-about',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div class="view">
      <div class="code-block">
        <div class="line-nums">
          @for (n of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]; track n) { <span>{{ n }}</span> }
        </div>
        <div class="code-content">
          <p><span class="kw">export</span> <span class="kw">interface</span> <span class="type">Engineer</span> {{ '{' }}</p>
          <p>&nbsp;&nbsp;<span class="prop">name</span>: <span class="str">'Pravin Mane'</span>;</p>
          <p>&nbsp;&nbsp;<span class="prop">role</span>: <span class="str">'Software Engineer'</span>;</p>
          <p>&nbsp;&nbsp;<span class="prop">company</span>: <span class="str">'JP Morgan Chase & Co.'</span>;</p>
          <p>&nbsp;&nbsp;<span class="prop">location</span>: <span class="str">'Pune, India'</span>;</p>
          <p>&nbsp;&nbsp;<span class="prop">specialization</span>: <span class="type">Array</span>&lt;<span class="str">string</span>&gt; = [</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;<span class="str">'Angular'</span>, <span class="str">'TypeScript'</span>, <span class="str">'.NET Core'</span>,</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;<span class="str">'Enterprise Architecture'</span>, <span class="str">'Performance'</span>,</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;<span class="str">'Accessibility'</span>, <span class="str">'Design Systems'</span></p>
          <p>&nbsp;&nbsp;];</p>
          <p>&nbsp;&nbsp;<span class="prop">previousCompany</span>: <span class="str">'SLB (2020–2024)'</span>;</p>
          <p>&nbsp;&nbsp;<span class="prop">started</span>: <span class="num">2014</span>; <span class="cm">// self-taught HTML & CSS</span></p>
          <p>&nbsp;&nbsp;<span class="prop">philosophy</span>: <span class="str">'Great interfaces are invisible'</span>;</p>
          <p>{{ '}' }};</p>
          <br/>
          <p><span class="cm">/**</span></p>
          <p><span class="cm"> * Building enterprise Angular systems at banking scale.</span></p>
          <p><span class="cm"> * Previously led front-end architecture at SLB.</span></p>
          <p><span class="cm"> * Believes performance is a feature, not an optimization.</span></p>
          <p><span class="cm"> */</span></p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @import "../../styles.scss";
    .view{height:calc(100vh - $statusbar-h - $terminal-h - $tabs-h);overflow-y:auto;padding:0;display:flex}
    .code-block{display:flex;font-family:$ff-mono;font-size:$fs-mono;line-height:1.8;padding:$space-lg 0;flex:1}
    .line-nums{display:flex;flex-flow:column;align-items:flex-end;padding:0 $space-md;color:$clr-line-number;user-select:none;min-width:40px;font-size:11px;line-height:1.8}
    .code-content{flex:1;padding-right:$space-lg;color:$clr-text-secondary}
    .code-content p{white-space:pre}
    .kw{color:$clr-accent}.str{color:$clr-string}.type{color:$clr-function}.prop{color:$clr-constant}.num{color:$clr-constant}.cm{color:$clr-comment;font-style:italic}
    @media(max-width:600px){.code-block{font-size:11px}.line-nums{display:none}}
  `]
})
export class ViewAboutComponent {}
