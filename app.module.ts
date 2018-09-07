import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



// import { FormValidationComponent } from './app.formvalidations';

import { AppComponent } from './app.component';
import { EmployeeComponent} from './employee/employee.component';
import { TestComponent } from './shared/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TestComponent,
    // FormValidationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
