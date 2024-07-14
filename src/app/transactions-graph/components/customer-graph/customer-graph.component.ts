import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, registerables  } from 'chart.js';
import { ITransactions } from 'src/app/user-data/interfaces/Itransactions';
import { CustomerService } from 'src/app/user-data/services/customer.service';

Chart.register(...registerables);
@Component({
  selector: 'app-customer-graph',
  templateUrl: './customer-graph.component.html',
  styleUrls: ['./customer-graph.component.css']
})
export class CustomerGraphComponent implements  AfterViewInit, OnChanges, OnDestroy , OnInit{
  @Input() transactions: any[] = [];

  chart: Chart | null = null; 
  customerName:string=''
  customerTransactions:ITransactions[]=[]
  AllTransactions:ITransactions[]=[]
  customerId:string ='';
  constructor(private _customerService:CustomerService , private route:ActivatedRoute) {}

  ngAfterViewInit(): void {
    if (this.transactions.length > 0) {
      this.renderChart();
    }
  }

  getCustomerTransactions()
  {
    this._customerService.getAllTransactionsMain().subscribe({
      next:(Response ) => {
        this.AllTransactions = Response

        this.getCustomerTransactionsById()
      }
    });
  }

  getCustomerTransactionsById()
  {
    for(let i =0 ; i< this.AllTransactions.length; i++)
    {
      if(this.AllTransactions[i].customer_id.toString() === this.customerId)
      {
        this.customerTransactions.push(this.AllTransactions[i]);
        console.log(this.customerTransactions);

      }
    }
    this.renderChart()
    this.getCustomerName()
  }
  getCustomerName()
  {
    this._customerService.getAllCustomersMain().subscribe({
      next:(Response) => {
        for(let i=0;Response.length ; i++)
        {
          if(Response[i].id == this.customerId)
          {
            this.customerName = Response[i].name;
          }
        }
      }
    })
  }


  ngOnChanges(): void {
    if (this.chart) {
      this.chart.destroy(); // Destroy existing chart if it exists
    }
    if (this.transactions.length > 0) {
      this.renderChart();
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy(); // Ensure chart is destroyed when component is destroyed
    }
  }

  renderChart(): void {
    const labels = this.customerTransactions.map(transaction => transaction.date);
    const data = this.customerTransactions.map(transaction => transaction.amount);
    console.log(`labels : ${labels}`)
    console.log(`data : ${data}`)

  
  
    this.chart = new Chart('Transactions', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Transactions',
          data: data,
          fill: false,
          borderColor: '#3252dfda',
          tension: 0.1
        }]
      }
    });
  }

  ngOnInit(): void {
    this.getCustomerTransactions()
    this.customerId = this.route.snapshot.paramMap.get('id') || '';
    console.log(`customer Id : ${this.customerId}`)
  }
}
