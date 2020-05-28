import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { EmployeesComponent } from './employees/employees.component';
import { SecondComponent } from './second/second.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'main', component: MainComponent },
  { path: 'employees', component: EmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
