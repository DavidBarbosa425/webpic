import { AuthService } from './../../core/auth.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    templateUrl: './signin.component.html'

})
export class SigninComponent implements OnInit {

    loginForm!: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private AuthService: AuthService) {

    }

    ngOnInit(): void {

        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    login(){
        
        const userName = this.loginForm.get('userName')?.value;
        const password = this.loginForm.get('password')?.value;

        this.AuthService.authenticate(userName, password)
            .subscribe(() => console.log('autenticado'),
            erro => {
            console.log( 'erro:' + erro)
            this.loginForm.reset()
            }
                
        )
    }
}