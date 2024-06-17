import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { InsuranceserviceService } from '../insuranceservice.service';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-life-insurance',
  standalone: true,
  imports: [RouterLink,RouterOutlet,NgFor],
  templateUrl: './life-insurance.component.html',
  styleUrl: './life-insurance.component.css'
})
export class LifeInsuranceComponent {

  clientlead: any = [];

  constructor(private serviceClass: InsuranceserviceService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.getLifeLeads();
  }


  getLifeLeads(): void {
    this.serviceClass.getLifeInsuranceLeads().subscribe((res) => {
      this.clientlead= res;
    });
  }


}
