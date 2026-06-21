import { Component } from '@angular/core';import { CommonModule } from '@angular/common';
@Component({selector:'app-view-contact',standalone:true,imports:[CommonModule],
  template:`
    <div class="view">
      <div class="contact-code">
        <p><span class="kw">export</span> <span class="kw">const</span> <span class="prop">reachOut</span> = {{ '{' }}</p>
        <p>&nbsp;&nbsp;<span class="prop">email</span>: <span class="str">'{{ email }}'</span>,</p>
        <p>&nbsp;&nbsp;<span class="prop">linkedin</span>: <span class="str">'linkedin.com/in/pravinmane1'</span>,</p>
        <p>&nbsp;&nbsp;<span class="prop">github</span>: <span class="str">'github.com/pravinmane1'</span>,</p>
        <p>&nbsp;&nbsp;<span class="prop">location</span>: <span class="str">'Pune, India'</span>,</p>
        <p>&nbsp;&nbsp;<span class="prop">message</span>: <span class="str">'Let us build something people remember.'</span>,</p>
        <p>{{ '}' }};</p>
        <br/>
        <p><span class="cm">/**</span></p>
        <p><span class="cm"> * I'm currently open to new opportunities.</span></p>
        <p><span class="cm"> * If you're building something ambitious,</span></p>
        <p><span class="cm"> * I'd love to hear from you.</span></p>
        <p><span class="cm"> */</span></p>
        <br/>
        <p><a [href]="'mailto:'+email" class="mail-link">{{ email }}</a></p>
      </div>
    </div>
  `,
  styles:[`@import "../../styles.scss";
    .view{height:calc(100vh - $statusbar-h - $terminal-h - $tabs-h);overflow-y:auto;padding:$space-lg;display:flex;align-items:center;justify-content:center}
    .contact-code{font-family:$ff-mono;font-size:$fs-mono;line-height:1.9;max-width:500px}
    .kw{color:$clr-accent}.str{color:$clr-string}.prop{color:$clr-constant}.cm{color:$clr-comment;font-style:italic}
    .mail-link{color:$clr-function;text-decoration:none;&:hover{text-decoration:underline}}
    @media(max-width:600px){.contact-code{font-size:11px}}
  `]
})
export class ViewContactComponent {
  email = 'manepravin11122@gmail.com';
}
