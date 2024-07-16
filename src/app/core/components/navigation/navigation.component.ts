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
  @Input() withCloseBtn: boolean = false;
  @Output() closeClicked = new EventEmitter();
  public isLoading = signal(true);
  public navOptions = signal([
    { href: '#about', title: 'About' },
    { href: '#experience', title: 'Experience' },
    { href: '#work', title: 'Work' },
    { href: '#contact', title: 'Contact' },
  ]);

  onCloseClicked() {
    this.closeClicked.emit();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading.set(false);
    });
  }
}
