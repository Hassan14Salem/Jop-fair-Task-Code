import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(transaction:any[],value:string): any[] {
    return transaction.filter(t => t.name.toLowerCase().includes(value.toLowerCase()));
  }

}
