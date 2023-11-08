import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralWord',
  standalone: true
})
export class PluralWordPipe implements PipeTransform {

  transform(value: string, count: number): unknown {
    return `${count} ${value}${count > 1 ? 's' : ''}`;
  }
}
