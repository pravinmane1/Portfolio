import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  @Input() withCloseBtn = false;
  @Input() activeSection = 'hero';
  @Output() closeClicked = new EventEmitter<void>();

  navItems = signal([
    { href: '#principles', title: 'Philosophy', id: 'principles' },
    { href: '#work', title: 'Work', id: 'work' },
    { href: '#journey', title: 'Journey', id: 'journey' },
    { href: '#connect', title: 'Connect', id: 'connect' },
  ]);

  onNavClick() { this.closeClicked.emit(); }
}
