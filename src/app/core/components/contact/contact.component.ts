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

  constructor(private httpClient: HttpClient) {
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
      this.httpClient.post(url, { name, email, message }).subscribe(() => {
        console.log('success');
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
