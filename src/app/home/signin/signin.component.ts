import { PlatformDetectorService } from './../../core/platform-detector/platform-detector.service';
import { ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { OnInit, AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
    templateUrl: './signin.component.html'

})
export class SigninComponent implements OnInit, AfterViewInit {

    loginForm!: FormGroup;
    @ViewChild('userNameInput')
    userNameInput!: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder,
                private AuthService: AuthService,
                private router: Router,
                private platformDetectorService: PlatformDetectorService) {

    }


    ngOnInit(): void {

        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        })

    }

    ngAfterViewInit(): void {
        this.platformDetectorService.isPlatform() &&
        this.userNameInput.nativeElement.focus()
    }


    login(){
        
        const userName = this.loginForm.get('userName')?.value;
        const password = this.loginForm.get('password')?.value;

        this.AuthService.authenticate(userName, password)
            .subscribe(() => this.router.navigateByUrl('user/' + userName),
            erro => {
            this.loginForm.reset()
            this.platformDetectorService.isPlatform() &&
            this.userNameInput.nativeElement.focus()
            }
                
        )
    }
}