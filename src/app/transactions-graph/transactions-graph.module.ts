import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerGraphComponent } from './components/customer-graph/customer-graph.component';

import { TransactionsGraphRoutingModule } from './transactions-graph-routing.module';


@NgModule({
  declarations: [
    CustomerGraphComponent
  ],
  imports: [
    CommonModule,
    TransactionsGraphRoutingModule
  ],
  exports:[
    CustomerGraphComponent
  ]
})
export class TransactionsGraphModule { }
