import { VmessageModule } from './../photo-list/search/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';

@NgModule({
    declarations: [
        PhotoDetailsComponent,
        PhotoCommentsComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        RouterModule,
        ReactiveFormsModule,
        VmessageModule
    ],
    exports: [
        PhotoDetailsComponent,
        PhotoCommentsComponent
    ]
})

export class PhotoDetailsModule {

}