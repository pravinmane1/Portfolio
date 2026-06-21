import { Component } from '@angular/core';import { CommonModule } from '@angular/common';
@Component({selector:'app-view-journey',standalone:true,imports:[CommonModule],
  template:`
    <div class="view">
      <div class="git-log">
        @for (e of entries; track e.hash) {
        <div class="commit">
          <span class="commit-hash">{{ e.hash }}</span>
          <span class="commit-date">{{ e.date }}</span>
          <span class="commit-msg">{{ e.message }}</span>
          <div class="commit-detail">
            <span class="commit-author">{{ e.author }}</span>
            <span class="commit-branch">({{ e.branch }})</span>
          </div>
        </div>
        }
      </div>
    </div>
  `,
  styles:[`@import "../../styles.scss";
    .view{height:calc(100vh - $statusbar-h - $terminal-h - $tabs-h);overflow-y:auto;padding:$space-md}
    .git-log{font-family:$ff-mono;font-size:$fs-mono;line-height:1.7;max-width:650px;margin:0 auto}
    .commit{padding:$space-sm 0;border-bottom:1px solid $clr-border}
    .commit-hash{color:$clr-function;margin-right:$space-sm;font-size:$fs-xs}
    .commit-date{color:$clr-comment;margin-right:$space-md;font-size:$fs-xs}
    .commit-msg{color:$clr-text-primary}
    .commit-detail{margin-top:2px;padding-left:60px}
    .commit-author{color:$clr-accent;font-size:$fs-xs}
    .commit-branch{color:$clr-string;font-size:$fs-xs;margin-left:$space-sm}
    @media(max-width:600px){.git-log{font-size:11px}.commit-detail{padding-left:0}}
  `]
})
export class ViewJourneyComponent {
  entries = [
    { hash:'a7f3c92', date:'2024-07-14', message:'feat: joined JP Morgan Chase as Software Engineer II', author:'Pravin Mane', branch:'main' },
    { hash:'e5d218a', date:'2023-03-01', message:'refactor: led component architecture redesign at SLB', author:'Pravin Mane', branch:'main' },
    { hash:'b4c9f01', date:'2020-08-12', message:'feat: started as Full Stack Developer at SLB', author:'Pravin Mane', branch:'main' },
    { hash:'9d2e4c7', date:'2016-07-01', message:'feat: began computer engineering + Android development', author:'Pravin Mane', branch:'origin' },
    { hash:'1a8b3f5', date:'2014-03-20', message:'init: taught myself HTML & CSS on a borrowed laptop', author:'Pravin Mane', branch:'origin' },
  ];
}

