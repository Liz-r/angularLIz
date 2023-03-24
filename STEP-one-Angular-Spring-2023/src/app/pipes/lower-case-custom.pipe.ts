import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowerCaseCustom'
})
export class LowerCaseCustomPipe implements PipeTransform {

  transform(value: string): unknown {
    return value.toLocaleLowerCase();
  }

}
