import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  @Input() withCloseBtn:boolean = false;
  @Output() closeClicked = new EventEmitter();

  onCloseClicked(){
    this.closeClicked.emit();
  }
}
