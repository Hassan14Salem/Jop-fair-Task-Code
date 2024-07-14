import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDataRoutingModule } from './user-data-routing.module';
import { FormsModule } from '@angular/forms';
import { DisplayDataComponent } from './components/display-data/display-data.component';
import { TransactionsGraphModule } from '../transactions-graph/transactions-graph.module';
import { SearchPipe } from './Pipes/search.pipe';
import { SearchByAmoutPipe } from './Pipes/search-by-amout.pipe';


@NgModule({
  declarations: [
    DisplayDataComponent,
    SearchPipe,
    SearchByAmoutPipe

  ],
  imports: [
    CommonModule,
    UserDataRoutingModule,
    FormsModule,
    TransactionsGraphModule
  ]
})
export class UserDataModule { }
