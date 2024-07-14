import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getAllCustomersMain():Observable<any>
  {
    return this.http.get("http://localhost:3000/customers")
  }

  getAllTransactionsMain():Observable<any>
  {
    return this.http.get("http://localhost:3000/transactions")
  }


  getAmountsByCustomer(): Observable<{ customerId: number, totalAmount: number }[]> {
    return this.getAllTransactionsMain().pipe(
      map(transactions => {
        const amountsMap = new Map<number, number>();

        transactions.forEach((transaction: { customer_id: number; amount: number; }) => {
          const currentTotal = amountsMap.get(transaction.customer_id) || 0;
          amountsMap.set(transaction.customer_id, currentTotal + transaction.amount);
        });

        const amounts: { customerId: number, totalAmount: number }[] = [];

        amountsMap.forEach((totalAmount, customerId) => {
          amounts.push({ customerId, totalAmount });
        });
        console.log(`Hi from Service ${amounts  }`)

        return amounts;
      })
    );
  }
}
