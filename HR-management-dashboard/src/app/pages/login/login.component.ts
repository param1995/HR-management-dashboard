import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginObj: any = {
    userName: 'param',
    password: '1234',
  };

  constructor(private router: Router) {}
  http = inject(HttpClient);

  onLogin() {
    if (!this.loginObj.userName || !this.loginObj.password) {
      alert('Please enter username and password');
      return;
    }

    this.http
      .post(
        'https://projectapi.gerasim.in/api/EmployeeManagement/login',
        this.loginObj
      )
      .subscribe({
        next: (res: any) => {
          if (res.result) {
            localStorage.setItem('employeeApp', JSON.stringify(res.data));
            this.router.navigateByUrl('/dashboard');
          } else {
            alert(res.message || 'Invalid credentials');
          }
        },
        error: (err) => {
          console.error('Login Error:', err);
          alert(
            'Login failed: ' + (err?.error?.message || 'Please try again.')
          );
        },
      });
  }
}
