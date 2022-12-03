import { PhotoFormComponent } from './photo-form/photo-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from './photo/photo.component';



@NgModule({
    declarations: [
         PhotoComponent,
         PhotoListComponent,
         PhotoFormComponent
        ],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})

export class PhotosModule {


}