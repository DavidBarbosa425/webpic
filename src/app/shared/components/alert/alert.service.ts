import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Alert, AlertType } from './alert';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AlertService {

    alertSubject: Subject<Alert | null> = new Subject<Alert | null>()
    keepAfterRouterChange: boolean = false

    constructor(router: Router){

        router.events.subscribe(event =>{
            if(event instanceof NavigationEnd){
                if(this.keepAfterRouterChange){
                    this.keepAfterRouterChange = false
                }
                else{
                    this.clear()
                }
            }
        })
    }

    success(message: string, keepAfterRouterChange: boolean = false) {
        this.alert(AlertType.SUCCESS, message,keepAfterRouterChange)
    }

    warning(message: string, keepAfterRouterChange: boolean = false) {
        this.alert(AlertType.WARNING, message,keepAfterRouterChange)
    }

    danger(message: string, keepAfterRouterChange: boolean = false) {
        this.alert(AlertType.DANGER, message,keepAfterRouterChange)
    }

    info(message: string, keepAfterRouterChange: boolean = false) {
        this.alert(AlertType.INFO, message,keepAfterRouterChange)
    }

    alert(alertType: AlertType, message: string, keepAfterRouterChange: boolean) {
        this.keepAfterRouterChange = keepAfterRouterChange
        this.alertSubject.next(new Alert(alertType, message))
    }

    getAlert() {
        return this.alertSubject.asObservable()
    }

    clear(){
        this.alertSubject.next(null)
    }
}