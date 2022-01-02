// VISWA YADEEDYA
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: boolean = true;
  isLoading: boolean = false;
  error: string = null;
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {}

  onClickLogin() {
    this.login = true;
  }
  onClickSignup() {
    this.login = false;
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    let authObs: Observable<AuthResponseData>;

    if (!this.login) {
      authObs = this.authService.signup(email, password);
    } else {
      authObs = this.authService.login(email, password);
    }

    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.route.navigate(['/list/bussiness']);
      },
      (errorMes) => {
        this.error = errorMes;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}
