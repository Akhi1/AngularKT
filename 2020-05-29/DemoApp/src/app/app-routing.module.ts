import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { EmployeesComponent } from './employees/employees.component';
import { SecondComponent } from './second/second.component';
import { MainComponent } from './main/main.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SectionsComponent } from './sections/sections.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'first', component: FirstComponent },
  { path: 'fist', redirectTo: '/first' },
  { path: 'second', component: SecondComponent },
  { path: 'main', component: MainComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/:guy', component: EmployeesComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'sections', component: SectionsComponent },
  { path: 'list/:section', component: ListComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'details/:name', component: DetailsComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
