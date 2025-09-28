import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow, isToday, isYesterday } from 'date-fns';
import { ru } from 'date-fns/locale';

@Pipe({
  name: 'translitDate',
})
export class TranslitDatePipe implements PipeTransform {
  transform(date: string | undefined): string {
    if (!date) {
      return '';
    }
    const inputDate = new Date(date);
    if (isToday(inputDate)) {
      return 'Сегодня';
    } else if (isYesterday(inputDate)) {
      return 'Вчера';
    } else {
      return formatDistanceToNow(inputDate, {
        addSuffix: true,
        locale: ru,
      });
    }
  }
}
