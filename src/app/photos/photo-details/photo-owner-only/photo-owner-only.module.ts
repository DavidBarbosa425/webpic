import { CommonModule } from '@angular/common';
import { PhotoOwnerOnlyDirective } from './photo-owner-only.directive';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [PhotoOwnerOnlyDirective],
    imports: [CommonModule],
    exports: [PhotoOwnerOnlyDirective]
})

export class PhotoOwnerOnlyModule {

}