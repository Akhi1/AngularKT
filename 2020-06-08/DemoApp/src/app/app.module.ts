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
import { SectionsComponent } from './sections/sections.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { ApplicationComponent } from './application/application.component';
import { SquarePipe } from './pipes/square.pipe';
import { DefaultimgPipe } from './pipes/defaultimg.pipe';

import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './form/form.component';

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
    SectionsComponent,
    DetailsComponent,
    ListComponent,
    ParentComponent,
    ChildComponent,
    SiblingComponent,
    ApplicationComponent,
    SquarePipe,
    DefaultimgPipe,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
