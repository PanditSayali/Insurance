import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { InsuranceserviceService } from '../insuranceservice.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ReactiveFormsModule,FormsModule,CommonModule,JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup;
  submitted = false;

  email: string ="";
  password: string ="";

  constructor(
    private serviceClass: InsuranceserviceService,
    private fb: FormBuilder,
    private router: Router,
    private http:HttpClient
  ) {
    
   }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required,Validators.email],
      password: ['', Validators.required]
    });
  }



//   login() {
//     console.log(this.email);
//     console.log(this.password);
 
//     let bodyData = {
//       email: this.email,
//       password: this.password,
//     };

//     this.http.post("http://localhost:9191/Insurance/loginEmp", bodyData).subscribe(  (resultData: any) => {
//       console.log(resultData);

//       if (resultData.message == "Email not exits")
//       {
    
//         alert("Email not exits");
  

//       }
//       else if(resultData.message == "Login Success")
  
//        {
//         this.router.navigateByUrl('/admin');
//       }
//       else
//       {
//         alert("Incorrect Email and Password not match");
//       }
//     });
//   }
// }


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
      next: (res: any) => {
        alert("Login Successfully!");
        this.router.navigate(['/admin']); // navigate to dashboard or desired route
      },
      error: (err) => {
        alert("Login Failed. Please check your email and password.");
        console.error('Login error', err);
      }
    });
  }
}
