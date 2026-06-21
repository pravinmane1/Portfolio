import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InViewDirective } from '../../core/directives/in-view.directive';

interface Value {
  icon: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-values',
  standalone: true,
  imports: [CommonModule, InViewDirective],
  templateUrl: './values.component.html',
  styleUrl: './values.component.scss',
})
export class ValuesComponent {
  values: Value[] = [
    {
      icon: '📋',
      title: 'I write things down.',
      body: 'Documentation isn\'t an afterthought — it\'s how I think. Every component, every API decision, every architecture choice gets written down so the team can move faster tomorrow.',
    },
    {
      icon: '🔍',
      title: 'I review code like I wrote it.',
      body: 'Every PR I review gets the same attention I\'d give my own code. I look for edge cases, performance traps, accessibility gaps, and opportunities to teach — not just approve.',
    },
    {
      icon: '🚀',
      title: 'I ship incrementally.',
      body: 'Perfect is the enemy of shipped. I break work into small, reviewable chunks that deliver value fast. Iterate based on data, not gut feeling.',
    },
  ];
}
