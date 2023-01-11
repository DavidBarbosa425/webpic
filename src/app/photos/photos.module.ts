import { DarkenOnHoverModule } from './../shared/directives/darken-on-hover/darken-on-hover.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';
import { NgModule } from '@angular/core';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';



@NgModule({
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        PhotoDetailsModule,
        DarkenOnHoverModule
    ]
})

export class PhotosModule {


}