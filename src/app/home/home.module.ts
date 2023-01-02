import { RouterModule } from '@angular/router';
import { VmessageModule } from './../photos/photo-list/search/vmessage/vmessage.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './signup/signup.component';


@NgModule({
    declarations: [
      SigninComponent,
      SignUpComponent
    ],
    imports: [ReactiveFormsModule,
              CommonModule,
              VmessageModule,
              FormsModule,
              RouterModule]
})

export class HomeModule {

}