import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { LoadingService } from './loading.service';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LoadingInterceptor implements HttpInterceptor {

    constructor(private loadingService: LoadingService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        return next
            .handle(req)
            .pipe(tap(event => {
                if(event instanceof HttpResponse){
                    this.loadingService.stopLoading()
                }
                else{
                    this.loadingService.startLoading()
                }
            }))
    }

}