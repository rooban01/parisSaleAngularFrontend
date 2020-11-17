import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, AuthResponseData } from 'src/app/services/auth.service';
import { User } from 'src/app/model/users';
import { Observable } from 'rxjs';



@Component({
    selector:'[app-auth]',
    templateUrl: './auth.component.html'
})
export class AuthComponent{

    user: User;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private authService: AuthService){}

onSubmit(form: NgForm){
    if(!form.valid){
        return;
    }

    this.authService.signup(this.user).subscribe();
   console.log(this.user);
    form.reset();
}
    
}