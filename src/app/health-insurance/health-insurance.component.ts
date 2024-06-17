import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { InsuranceserviceService } from '../insuranceservice.service';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-health-insurance',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgFor],
  templateUrl: './health-insurance.component.html',
  styleUrl: './health-insurance.component.css'
})
export class HealthInsuranceComponent {
  clientlead: any = [];

  constructor(private serviceClass: InsuranceserviceService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.getHealthLeads();
  }


  getHealthLeads(): void {
    this.serviceClass.getHealthInsuranceLeads().subscribe((res) => {
      this.clientlead= res;
    });
  }
}
