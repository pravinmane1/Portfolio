import { Component, HostListener, OnInit, signal } from '@angular/core';
import { ModeToggleComponent } from '../../../features/mode-toggle/mode-toggle.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ModeToggleComponent,
    NavigationComponent,
    NgOptimizedImage,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading.set(false);
    });
  }
  private currentScrollY = 0;
  public isHeaderVisible = signal<boolean>(true);
  public isMobileNavBarVisible = signal<boolean>(false);
  public isLoading = signal(true);

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event: Event) {
    const newScrollY = (event?.currentTarget as Window)?.scrollY;
    if (newScrollY && Math.abs(newScrollY - this.currentScrollY) > 10) {
      const scrolledTowardUp = newScrollY < this.currentScrollY;
      const headerCrossed = newScrollY > 100;
      this.isHeaderVisible.set(!headerCrossed || scrolledTowardUp);
      this.currentScrollY = (event.currentTarget as Window)?.scrollY;
    }
  }

  initiateNavBarClose() {
    this.isMobileNavBarVisible.set(!this.isMobileNavBarVisible());
  }
}
