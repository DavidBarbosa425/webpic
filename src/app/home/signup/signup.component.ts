import { UserNotTakenValidatorsService } from './user-not-taken.validators.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})

export class SignUpComponent implements OnInit {

    signUpForm!: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private userNotTakenValidatorsService: UserNotTakenValidatorsService) {}

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

}