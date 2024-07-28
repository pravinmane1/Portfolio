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
  isLoading = true;
  message = '';
  messageSubscription!: Subscription;

  constructor(private toasterService: ToasterService) {}
  ngOnDestroy(): void {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }
  ngOnInit(): void {
    this.messageSubscription = this.toasterService.toasterMessage$.subscribe(
      (toasterMessage: { message: string; isSuccess: boolean }) => {
        this.showToaster(toasterMessage.message, toasterMessage.isSuccess);
      }
    );
  }

  showToaster(message: string, isSuccess = true) {
    this.message = message || '';
    this.isSuccess = isSuccess;
    this.isVisible = true;
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 300);

    if (this.isSuccess) {
      setTimeout(() => {
        this.onCloseClicked();
      }, 5000);
    }
  }

  onCloseClicked() {
    this.isLoading = true;
    setTimeout(() => {
      this.message = '';
      this.isVisible = false;
      this.isLoading = false;
    }, 300);
  }
}
