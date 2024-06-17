import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { InsuranceserviceService } from '../insuranceservice.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { async } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule, FormsModule, CommonModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup;
  submitted = false;

  email: string = "";
  password: string = "";

  constructor(
    private serviceClass: InsuranceserviceService,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {

  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }


  login() {
    this.submitted = true;

    console.log(this.email);
    console.log(this.password);

    let bodyData = {
      email: this.email,
      password: this.password,
    };

    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.email);

    this.serviceClass.postLoginFromService(this.loginForm.value).subscribe({
      next: (result: LoginResponse) => {
        if (result.status == "Success") {
          alert("Login Successfully!");
          this.router.navigate(['/admin']); // navigate to dashboard or desired route
        } else {
          alert("Login Failed!, Verify your username and password");
        }

      },
      error: (err) => {
        alert("Login Failed. Please check your email and password.");
        console.error('Login error', err);
      }
    });
  }
}

class LoginResponse {
  constructor(status: string) {
    this.status = status;
  }
  status: string;
}
