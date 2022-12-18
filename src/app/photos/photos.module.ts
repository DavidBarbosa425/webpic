import { DarkenOnHoverModule } from './../shared/directives/darken-on-hover/darken-on-hover.module';
import { SearchComponent } from './photo-list/search/search.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescription } from './photo-list/filter-by-description';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { CardModule } from '../shared/components/card/card.module';



@NgModule({
    declarations: [
         PhotoComponent,
         PhotoListComponent,
         PhotoFormComponent,
         PhotosComponent,
         FilterByDescription,
         LoadButtonComponent,
         SearchComponent
        ],
    imports: [
        HttpClientModule,
        CommonModule,
        CardModule,
        DarkenOnHoverModule
    ]
})

export class PhotosModule {


}