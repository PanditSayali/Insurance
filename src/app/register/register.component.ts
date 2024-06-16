import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { InsuranceserviceService } from '../insuranceservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,RouterOutlet,NgIf,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  

  register: any = [];
  registerForm!: FormGroup;
  submitted = false;
  

  constructor(private formBuilder: FormBuilder,private serviceClass :InsuranceserviceService, private router: Router, private http:HttpClient) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[ Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]],
      adharno: ['',[Validators.required,Validators.maxLength(12)]],
      pancardno: ['',[Validators.required ,Validators.maxLength(10)]],
      image:['',[Validators.required]],
      terms: [false, Validators.requiredTrue]
    });
  } 


  save(){
    
      this.serviceClass.postRegisterFromService(this.registerForm.value).subscribe((res:any)=>{
        console.log(res);
      });
      alert("Register Sucessfully!");
    
  }
}
  // save()
  // {
  
  //   let bodyData = {
  //     "name" : this.name,
  //     "email" : this.email,
  //     "password" : this.password,
  //     "mobile":this.mobile,
  //     "adharno": this.adharno,
  //     "pancardno": this.pancardno

  //   };
  //   this.http.post("http://localhost:9191/Insurance/addemp",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
  //   {
  //       console.log(resultData);
  //       alert("Employee Registered Successfully");
  //   });
  // }

  

  
  




   
  // customers: any = [];
  // registerForm! : FormGroup;//make it optional
  
  // constructor(
  //   private serviceClass: InsuranceserviceService, //serviceclass ref
  //   private fb: FormBuilder,
  //   private router: Router
  //   ){
  //     this.registerForm = this.fb.group({
  //       username: ['', Validators.required],
  //       password: ['', Validators.required]
  //     });
  // }
  
  // //used to initialize component lifecycle -- invoke once a while or if you want to invoke everytime write in constructor
  // //1. initialization method calling the form and grouping all components
  // //reactive form --we are giving validation through coding--write code to perform some kind of thing
  // //validation in html code directly -- template driven form 
  // ngOnInit() {
  //   this.registerForm = this.fb.group({
  //     name: [null,Validators.required],
  //     contactNumber: [null, [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]],//,Validators.minLength(10), Validators.maxLength(12)
  //     email: [null,Validators.required],
  //     password: [null, Validators.required]

  //   });
  // }
  
  // //after clicking on submit button event is happen and this method will call sevices method
  // postCustomer(){
  //   this.serviceClass
  //   .addCustomer(this.registerForm.value)//pass formgroupname.value--it will take all form details
  //   .subscribe((res) => {
  //     alert("Registration Sucessful");
  //   });
   
  //   }

  //   registerUser() {
  //     this.serviceClass.authenticate(this.registerForm.value).subscribe(
  //       (response: any) => {
  //         localStorage.setItem('token', response); // Store JWT token in local storage
  //         this.router.navigate(['/profile']); // Redirect to profile page
  //         alert("Registration Sucessful");
  //       },
  //       (error) => {
  //         console.error('Error registering user:', error);
  //         // Handle error, e.g., display error message to the user
  //       }
  //     );
  //   }

