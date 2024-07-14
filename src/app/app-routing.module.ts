import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren:() => import('./user-data/user-data.module').then(u => u.UserDataModule)},
  {path:'',loadChildren:() => import('./transactions-graph/transactions-graph.module').then(u => u.TransactionsGraphModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
