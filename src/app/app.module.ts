import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {HttpClientModule} from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { AddTestComponent } from './add-test/add-test.component';
import { RemoveTestComponent } from './remove-test/remove-test.component';
import { HeaderComponent } from './header/header.component';
import { ViewTestComponent } from './view-test/view-test.component';
import { TestFormComponent } from './test-form/test-form.component';
import { TestServiceService } from './test-service.service';





@NgModule({
  declarations: [
    AppComponent,
    AddTestComponent,
    RemoveTestComponent,
    HeaderComponent,
    ViewTestComponent,
    TestFormComponent
  ],
  imports: [
    BrowserModule,
    
    
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
    
  
  ],
  providers: [TestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
