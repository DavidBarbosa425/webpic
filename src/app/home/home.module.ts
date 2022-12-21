import { VmessageModule } from './../photos/photo-list/search/vmessage/vmessage.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [SigninComponent],
    imports: [ReactiveFormsModule,
              CommonModule,
            VmessageModule]
})

export class HomeModule {

}