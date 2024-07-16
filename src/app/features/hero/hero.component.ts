import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  public isLoading = signal(true);
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading.set(false);
    });
  }
}
