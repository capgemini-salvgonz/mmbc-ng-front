import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'accountType'})
export class AccountTypePipe implements PipeTransform {
  transform(value: string): string {
    return value == 'D'? 'Debit': value == 'C'?  "Credit": value;
  }
}