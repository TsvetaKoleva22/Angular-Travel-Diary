import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('registerForm') registerForm: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  registerFunc() {
    this.authService
      .register(this.registerForm.value)
      .subscribe((data) => {
        // console.log(data);

        if(data['success']){
          this.registerForm.reset();
          this.router.navigate([ '/login' ]);
        }
      });
  }


}
