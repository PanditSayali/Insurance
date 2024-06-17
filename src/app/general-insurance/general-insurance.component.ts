import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { InsuranceserviceService } from '../insuranceservice.service';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-general-insurance',
  standalone: true,
  imports: [RouterLink,RouterOutlet,NgFor],
  templateUrl: './general-insurance.component.html',
  styleUrl: './general-insurance.component.css'
})
export class GeneralInsuranceComponent {

  clientlead: any = [];

  constructor(private serviceClass: InsuranceserviceService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.getGeneralLeads();
  }


  getGeneralLeads(): void {
    this.serviceClass.getGeneralInsuranceLeads().subscribe((res) => {
      this.clientlead= res;
    });
  }
}
