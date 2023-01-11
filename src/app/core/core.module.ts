import { ShowIfLoggedModule } from './../shared/directives/show-if-logged/show-if-logged.module';
import { LoadingModule } from './../shared/components/loading/loading.module';
import { DarkenOnHoverModule } from './../shared/directives/darken-on-hover/darken-on-hover.module';
import { AlertModule } from './../shared/components/alert/alert.module';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './auth/request.interceptor';
import { MenuModule } from '../shared/components/menu/menu.module';

@NgModule({
    declarations: 
        [HeaderComponent,
         FooterComponent],
    exports: 
        [HeaderComponent,
        FooterComponent],
    imports: [
        CommonModule,
        RouterModule,
        AlertModule,
        DarkenOnHoverModule,
        LoadingModule,
        MenuModule,
        ShowIfLoggedModule
        ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true

        }
    ]
})

export class coreModule {

}