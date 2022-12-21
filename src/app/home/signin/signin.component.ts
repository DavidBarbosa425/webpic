import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    templateUrl: './signin.component.html'

})
export class SigninComponent implements OnInit {

    loginForm!: FormGroup;

    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit(): void {

        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        })
    }
}