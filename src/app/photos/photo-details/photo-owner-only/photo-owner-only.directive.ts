import { Renderer2, OnInit} from '@angular/core';
import { Photo } from './../../photo/photo';
import { TokenService } from './../../../core/token/token-service';
import { UserService } from './../../../core/user/user.service';
import { Directive, Input, ElementRef } from '@angular/core';
@Directive({
    selector: '[photo-owner-only]'
})
export class PhotoOwnerOnlyDirective implements OnInit {

    @Input() ownedPhoto!: Photo

    constructor(
        private userService: UserService,
        private tokenService: TokenService,
        private elementRef: ElementRef<any>,
        private renderer2: Renderer2
        ) {}


    ngOnInit(): void {
        
        this.userService
            .getUser()
            .subscribe((user) =>{
                if(!user || user?.id != this.ownedPhoto.userId){            
                    this.renderer2.setStyle(this.elementRef.nativeElement, 'display','none')
                }

            })
    }

    permission() {
        let a = this.tokenService.getToken()
    }
}