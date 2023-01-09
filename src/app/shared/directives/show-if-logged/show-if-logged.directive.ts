import { UserService } from './../../../core/user/user.service';
import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[showIfLogged]' 
})

export class ShowIfLoggedDirective implements OnInit {

    constructor(
        private elementRef:ElementRef<any>,
        private renderer2: Renderer2,
        private userService:UserService
    ) {}

    ngOnInit(): void {
        if(!this.userService.isLogged()) {
            this.renderer2.setStyle(this.elementRef.nativeElement,'display', 'none')
        }
    }

}