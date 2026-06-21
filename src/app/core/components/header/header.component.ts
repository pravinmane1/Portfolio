import { Component, HostListener, OnInit, signal } from '@angular/core';
import { ModeToggleComponent } from '../../../features/mode-toggle/mode-toggle.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { CommonModule } from '@angular/common';

const SECTION_IDS = ['hero', 'principles', 'work', 'journey', 'connect'];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ModeToggleComponent, NavigationComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private lastScrollY = 0;
  isHeaderVisible = signal(true);
  isMobileNavOpen = signal(false);
  isScrolled = signal(false);
  activeSection = signal('hero');

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) {
          this.activeSection.set(visible[0].target.id);
        }
      },
      { threshold: 0.3, rootMargin: '-20% 0px -60% 0px' }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    const y = window.scrollY;
    this.isScrolled.set(y > 20);
    if (Math.abs(y - this.lastScrollY) > 10) {
      this.isHeaderVisible.set(y < 100 || y < this.lastScrollY);
      this.lastScrollY = y;
    }
  }

  closeMobileNav() { this.isMobileNavOpen.set(false); }
}
