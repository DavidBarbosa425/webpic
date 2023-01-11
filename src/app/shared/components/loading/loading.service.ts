import { LoadingType } from './loading-type';
import { startWith, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class LoadingService {
    loadingSubject: Subject<LoadingType> = new Subject<LoadingType>()

    getLoading() {
        return this.loadingSubject
            .asObservable()
            .pipe(startWith(LoadingType.STOPPED))
    }

    startLoading(){
        this.loadingSubject.next(LoadingType.LOADING)
    }

    stopLoading(){
        this.loadingSubject.next(LoadingType.STOPPED)
    }
}