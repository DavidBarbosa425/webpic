import { ImmadiateClickModule } from './../../shared/directives/immediate-click/immediate-click.module';
import { PhotoModule } from './../photo/photo.module';
import { VmessageModule } from './../photo-list/search/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form.component';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [PhotoFormComponent],
    imports: [
        CommonModule,
        VmessageModule,
        PhotoModule,
        ReactiveFormsModule,
        ImmadiateClickModule
    ]
})

export class PhotoFormModule {

}