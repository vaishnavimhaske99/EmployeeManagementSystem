import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'get-employee', component:GetEmployeeComponent},
  {path:"add-employee", component:AddEmployeeComponent},
  {path:"update-employee/:id", component:UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
