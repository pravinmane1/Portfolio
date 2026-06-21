import { Component } from '@angular/core';
import { SocialLinksComponent } from '../../../features/social-links/social-links.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToasterService } from '../toaster/toaster.service';
import { catchError, finalize, of } from 'rxjs';
import { InViewDirective } from '../../directives/in-view.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SocialLinksComponent, NgOptimizedImage, ReactiveFormsModule, CommonModule, InViewDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm: FormGroup;
  isSending = false;

  constructor(private httpClient: HttpClient, private toasterService: ToasterService) {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.maxLength(3000)]),
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const { name, email, message } = this.contactForm.value;
      const url = (window as any).config?.CONTACTINFO_FORMSPREE_URL;
      this.isSending = true;
      this.httpClient
        .post(url, { name, email, message })
        .pipe(
          finalize(() => (this.isSending = false)),
          catchError(() => of(null))
        )
        .subscribe((res) => {
          this.toasterService.toasterMessage$.next({
            message: res
              ? 'Your message has been received. I will respond as soon as possible.'
              : 'Failed to send your message. Please check your information and try again.',
            isSuccess: !!res,
          });
        });
    }
  }

  get name(): AbstractControl { return this.contactForm.get('name')!; }
  get email(): AbstractControl { return this.contactForm.get('email')!; }
  get message(): AbstractControl { return this.contactForm.get('message')!; }
}
