import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDataComponent } from './components/display-data/display-data.component';

const routes: Routes = [
  {path:'',redirectTo:'customers-transactions',pathMatch:'full'},
  {path:'customers-transactions',component:DisplayDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDataRoutingModule { }
