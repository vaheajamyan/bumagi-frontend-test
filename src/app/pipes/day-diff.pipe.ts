import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dayDiff'
})
export class DayDiffPipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value);
    const diff = (((new Date()).getTime() - date.getTime()) / 1000);
    const daydiff = Math.floor(diff / 86400);
    if (isNaN(daydiff) || daydiff < 0 || daydiff >= 31) {
      return '';
    }
    return daydiff === 0 && (
      diff < 60 && 'сейчас' ||
      diff < 120 && '1 минут назад' ||
      diff < 3600 && Math.floor(diff / 60) + ' минут назад' ||
      diff < 7200 && '1 час' ||
      diff < 86400 && Math.floor(diff / 3600) + ' час назад') ||
      daydiff === 1 && 'вчера' ||
      daydiff < 7 && daydiff + ' день назад' ||
      daydiff < 31 && Math.ceil(daydiff / 7) + ' недель назад';
  }

}
