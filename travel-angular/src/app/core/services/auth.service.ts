import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {
  private readonly registerUrl = 'http://localhost:5000/auth/signup';
  private readonly loginUrl = 'http://localhost:5000/auth/login';

  constructor(
    private http: HttpClient,
    public toastr: ToastrService,
  ) { }

  register(body) {
    return this.http.post(this.registerUrl, body);
  }

  login(body) {
    return this.http.post(this.loginUrl, body);
  }

  logout() {
    localStorage.clear();
    this.toastr.success('Logout successful!', 'Success');
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  isAdmin() {
    if (localStorage.getItem('isAdmin') === "true") {
      return true;
    }
    return false;
  }

  getToken() {
    let token = localStorage.getItem('token');
    return token;
  }

  saveUserInfo(data) {
    localStorage.setItem('token', data['token']);
    localStorage.setItem('username', data['user']['username']);
    let isAdmin = 'false';
    if (data['user']['roles'][0] === 'Admin') {
      isAdmin = 'true';
    }
    localStorage.setItem('isAdmin', isAdmin);
  }
}