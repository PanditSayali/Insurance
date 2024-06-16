import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InsuranceserviceService } from '../insuranceservice.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-lead',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule, FormsModule, CommonModule, JsonPipe, NgFor],
  templateUrl: './lead.component.html',
  styleUrl: './lead.component.css'
})
export class LeadComponent {

  clientlead: any = [];
  leadform!: FormGroup;
  isFormSubmitted: boolean = false;


  constructor(
    private serviceClass: InsuranceserviceService,
    private formbuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.getlead();
  }

  ngOnInit() {
    this.leadform = new FormGroup({
      customerName: new FormControl("", [Validators.required]),
      email:new FormControl("",[Validators.required,Validators.email]),
      contactno: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required]),
      location: new FormControl("", [Validators.required]),
      insurance: new FormControl("", [Validators.required]),
    });
    
  }


  postleads() {
    if (this.leadform.valid) {
    this.serviceClass.postLeadFromService(this.leadform.value).subscribe((res: any) => {
      console.log(res);
    });
    alert("Lead Enter Sucessfully");
  }
}


  getlead() {
    this.serviceClass.getLeadFromService().subscribe((res) => {
      this.clientlead = res;
    });
  }
}









