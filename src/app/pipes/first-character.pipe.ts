import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'firstCharacter'
})
export class FirstCharacterPipe implements PipeTransform {

  transform(value: string): unknown {
    value = value.charAt(0) + '.';
    return value;
  }
}
