import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerGraphComponent } from './components/customer-graph/customer-graph.component';

const routes: Routes = [
  {path:'',redirectTo:'customer-graph/:id',pathMatch:'full'},

  {path:'customer-graph/:id',component:CustomerGraphComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsGraphRoutingModule { }
