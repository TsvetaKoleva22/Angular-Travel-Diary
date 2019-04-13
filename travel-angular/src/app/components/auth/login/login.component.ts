import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm: NgForm;

  constructor(
    private authService : AuthService,
    private router: Router
  ) { }

  loginFunc() {
    this.authService
      .login(this.loginForm.value)
      .subscribe((data) => {
        //console.log(data);
       
        this.loginForm.reset();
        this.router.navigate([ '/' ]);
      });
  }
}