import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decodeHtml',
  standalone: true
})
export class DecodeHtmlPipe implements PipeTransform {

  transform(str: string)  {
    const elem1 = document.createElement('textarea');

    if (str) {
      if (!str || str === '') {
        return '';
      }
      elem1.innerHTML = str;
      return elem1.value;
    }
    return str;
  };
}
