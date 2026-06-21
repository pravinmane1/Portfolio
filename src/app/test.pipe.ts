import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
  standalone: true
})
export class TestPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
