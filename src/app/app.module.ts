import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(// ToastrModule added
  {
    timeOut:4000,
    progressBar:true,
    easing:"ease-in",
    closeButton:false,
    progressAnimation:"decreasing",
    preventDuplicates:true,
    positionClass:"toast-bottom-left"
  }

    ), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
