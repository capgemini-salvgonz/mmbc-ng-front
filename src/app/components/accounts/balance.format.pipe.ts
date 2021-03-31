import { Pipe, PipeTransform } from '@angular/core';

const options = { 
  minimumFractionDigits: 2,
  maximumFractionDigits: 2  
};

@Pipe({ name: 'balanceFormat'})
export class BalanceFormatPipe implements PipeTransform {
  transform(value: number): string {    
    return "$" + value.toLocaleString("es-MX", options);
  }
}