import { PlatformDetectorService } from './../../core/platform-detector/platform-detector.service';
import { Router } from '@angular/router';
import { SignUpService } from './signup.service';
import { NewUser } from './new-user';
import { UserNotTakenValidatorsService } from './user-not-taken.validators.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})

export class SignUpComponent implements OnInit, AfterViewInit {

    signUpForm!: FormGroup;
    @ViewChild('inputEmail') inputEmail!: ElementRef<HTMLInputElement>

    constructor(private formBuilder: FormBuilder,
                private userNotTakenValidatorsService: UserNotTakenValidatorsService,
                private signUpService: SignUpService,
                private router:Router,
                private platformDetectorService: PlatformDetectorService) {}

    ngAfterViewInit(): void {
        this.platformDetectorService.isPlatform() &&
        this.inputEmail.nativeElement.focus()
    }

    ngOnInit(): void {
        const fn = this.userNotTakenValidatorsService.checkUserNameTaken()
        this.signUpForm = this.formBuilder.group({
         email: ['', 
                [
                    Validators.required,
                    Validators.email
                ]
        ],
        fullName: ['', 
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
        userName: ['', 
            [
                Validators.required,
                Validators.pattern(/^[a-z0-9_\-]+$/),
                Validators.minLength(2),
                Validators.maxLength(30)
            ],
            this.userNotTakenValidatorsService.checkUserNameTaken()
        ],
        password: ['', 
            [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(15)
            ]
        ]
        })
    }

    signup() {
        const newUser: NewUser  = this.signUpForm.getRawValue() as NewUser

        this.signUpService.signup(newUser)
        .subscribe(() => this.router.navigate(['']),
            err => alert(err)
            
        )
    }

}