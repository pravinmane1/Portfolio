import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToasterService } from './toaster.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.scss',
})
export class ToasterComponent implements OnInit, OnDestroy {
  isVisible = false;
  isSuccess = false;
  message = '';
  messageSubscription!: Subscription;

  constructor(private toasterService: ToasterService) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.messageSubscription = this.toasterService.toasterMessage$.subscribe(
      (toasterMessage: { message: string; isSuccess: boolean }) => {
        this.showToaster(toasterMessage.message, toasterMessage.isSuccess);
      }
    );
  }

  showToaster(message: string, isSuccess: boolean = true) {
    this.message = message || '';
    this.isSuccess = isSuccess;
    this.isVisible = true;

    if (this.isSuccess) {
      setTimeout(() => {
        this.message = '';
        this.isVisible = false;
      }, 15000);
    }
  }

  onCloseClicked() {
    this.isVisible = false;
  }
}
