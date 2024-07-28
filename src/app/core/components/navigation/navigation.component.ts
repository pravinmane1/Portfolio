import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent implements OnInit {
  @Input() withCloseBtn = false;
  @Output() closeClicked = new EventEmitter();
  public moveNavRight = signal(false);
  public isLoading = signal(true);
  public navOptions = signal([
    { href: '#about', title: 'About' },
    { href: '#experience', title: 'Experience' },
    { href: '#projects', title: 'Projects' },
    { href: '#contact', title: 'Contact' },
  ]);

  onCloseClicked() {
    this.moveNavRight.set(true);
    setTimeout(() => {
      this.closeClicked.emit();
    },300);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading.set(false);
    },100);
  }
}
