import { UserService } from './../../../core/user/user.service';
import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[showIfLogged]' 
})

export class ShowIfLoggedDirective implements OnInit {

    currentDisplay!: string

    constructor(
        private elementRef:ElementRef<any>,
        private renderer2: Renderer2,
        private userService:UserService
    ) {}

    ngOnInit(): void {

        this.currentDisplay = getComputedStyle(this.elementRef.nativeElement).display

        this.userService.getUser()
            .subscribe(user => {
                if(user){
                    this.renderer2.setStyle(this.elementRef.nativeElement, 'display', this.currentDisplay)
                }else{
                    this.currentDisplay = getComputedStyle(this.elementRef.nativeElement).display
                    this.renderer2.setStyle(this.elementRef.nativeElement,'display', 'none')
                }
            })
    }

}