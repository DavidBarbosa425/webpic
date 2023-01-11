import { DarkenOnHoverModule } from './../../shared/directives/darken-on-hover/darken-on-hover.module';
import { RouterModule } from '@angular/router';
import { PhotoDetailsModule } from './../photo-details/photo-details.module';

import { SearchComponent } from './search/search.component';
import { PhotoModule } from './../photo/photo.module';
import { CommonModule } from '@angular/common';
import { FilterByDescription } from './filter-by-description';
import { PhotoListComponent } from './photo-list.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { NgModule } from '@angular/core';
import { PhotosComponent } from './photos/photos.component';
import { CardModule } from 'src/app/shared/components/card/card.module';


@NgModule({
    declarations: [
        PhotoListComponent,
        LoadButtonComponent,
        PhotosComponent,
        FilterByDescription,
        SearchComponent

    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        RouterModule,
        DarkenOnHoverModule
        ]
})

export class PhotoListModule {

}