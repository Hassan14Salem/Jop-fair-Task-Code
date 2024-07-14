import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByAmout'
})
export class SearchByAmoutPipe implements PipeTransform {

  transform(transaction:any[],value:number): any[] {
    return transaction.filter(t => t.amount.includes(value));
  }

}
