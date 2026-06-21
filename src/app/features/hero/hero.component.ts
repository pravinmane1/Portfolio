import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  isRevealed = signal(false);

  ngOnInit(): void {
    setTimeout(() => this.isRevealed.set(true), 300);
  }
}
