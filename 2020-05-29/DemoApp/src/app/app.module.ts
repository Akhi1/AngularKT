import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { EmployeesComponent } from './employees/employees.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    EmployeesComponent,
    PagenotfoundComponent,
    DepartmentsComponent,
    DetailsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
