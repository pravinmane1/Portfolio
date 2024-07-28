import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {

  toasterMessage$ = new Subject<{ message: string; isSuccess: boolean }>();
}
