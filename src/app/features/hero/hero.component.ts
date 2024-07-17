import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { SocialLinksComponent } from "../social-links/social-links.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, SocialLinksComponent],
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
