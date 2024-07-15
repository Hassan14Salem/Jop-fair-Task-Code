import { Component, OnInit } from '@angular/core';
import { ICustomers } from '../../interfaces/Icustomers';
import { ITransactions } from '../../interfaces/Itransactions';
import { CustomerService } from '../../services/customer.service';


@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit{
  customers:ICustomers[]=[];
  transactions:ITransactions[]=[];
  searchValue:string='';
  customerAmounts: { customerId: number, totalAmount: number }[] = [];

  selectedCustomerTransactions: ITransactions[]=[] ;
  searchAmount: string ='';


constructor(private _CustomerService:CustomerService){}
getAllCustomers()
{
  this._CustomerService.getAllCustomersMain().subscribe({
    next:(Response) => {
this.customers = Response.customers;
console.log(this.customers)
    }
  })
}

getAllTransactions()
{
  this._CustomerService.getAllTransactionsMain().subscribe({
    next:(Response) => {
this.transactions = Response.transactions;
    }
  })
}




calculateTransactionAmounts(): void {
  this._CustomerService.getAmountsByCustomer().subscribe(amounts => {
    this.customerAmounts = amounts;
  });
}

getTotalAmount(customerId: number): number {
  const customerAmount = this.customerAmounts.find(item => item.customerId == customerId);
  return customerAmount ? customerAmount.totalAmount : 0;
}

selectCustomer(customerId: any): void {
  this.selectedCustomerTransactions = this.transactions.filter(transaction => transaction.customer_id == +customerId);

}



ngOnInit(): void {
  this.getAllCustomers()
  this.getAllTransactions()
  this.calculateTransactionAmounts()
}
}
