import { Component } from '@angular/core';
import { SocialLinksComponent } from '../../../features/social-links/social-links.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToasterService } from '../toaster/toaster.service';
import { catchError, finalize, of } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    SocialLinksComponent,
    NgOptimizedImage,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm: FormGroup;
  isSending = false;

  constructor(
    private httpClient: HttpClient,
    private toasterService: ToasterService
  ) {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [
        Validators.required,
        Validators.maxLength(3000),
      ]),
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      const name = this.contactForm.value.name;
      const email = this.contactForm.value.email;
      const message = this.contactForm.value.message;
      const url = `https://formspree.io/f/mzzpegwv`;
      this.isSending = true;
      this.httpClient
        .post(url, { name, email, message })
        .pipe(
          finalize(() => {
            this.isSending = false;
          }),
          catchError(() => {
            return of(null);
          })
        )
        .subscribe((res) => {
          if (res) {
            this.toasterService.toasterMessage$.next({
              message:
                'Your message has been received successfully, I will try my best to respond as soon as possible',
              isSuccess: true,
            });
          } else {
            this.toasterService.toasterMessage$.next({
              message:
                'Failure in sending your message, Please check if all of the provided information is correct and try again',
              isSuccess: false,
            });
          }
        });
    }
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }
}
