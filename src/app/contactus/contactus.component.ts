import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InsuranceserviceService } from '../insuranceservice.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NonNullAssert } from '@angular/compiler';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ReactiveFormsModule,FormsModule,CommonModule,JsonPipe],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {


  contact: any = [];
  contactform !:FormGroup;
  isFormSubmitted: boolean = false;


  constructor(
    private serviceClass :InsuranceserviceService,
    private formbuilder: FormBuilder,
    private http:HttpClient
  ){ 

  }

  ngOnInit(){
    this.contactform = this.formbuilder.group({
      contactname:[null,[Validators.required]],
      contactemail:[null,[Validators.required,Validators.email]],
      contactsubject:[null,[Validators.required]],
      contactmsg:[null,[Validators.required]],

    });
  }

  //  postContactform(){
  //     this.serviceClass.postContactFromService(this.contactform.value).subscribe((res: any) => {
  //     console.log(res);
  //   });
  //   alert("Your message has been sent. Thank you!");

  // }

    postcontact()
    {
      this.serviceClass.postContactFromService(this.contactform.value).subscribe((res:any)=>{
        console.log(res);
      });
      alert("Your message has been sent. Thank you!");
    }
  

}
