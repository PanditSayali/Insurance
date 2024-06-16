import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { InsuranceserviceService } from '../insuranceservice.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgFor],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  clientlead: any = [];

  constructor(private serviceClass: InsuranceserviceService, private http: HttpClient, private router: Router) { }


  ngOnInit(): void {
    this.getlead();
    
  }


  getlead() {
    this.serviceClass.getLeadFromService().subscribe((res) => {
      this.clientlead = res;
    });
  }
    

  gethealthlead(){
    this .serviceClass.gethealthleadfromService('health').subscribe(
      (res)=>{
      this.clientlead = res;
  });
}
}

