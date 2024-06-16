import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LeadComponent } from './lead/lead.component';
import { LeaddetailsComponent } from './leaddetails/leaddetails.component';
import { AdminComponent } from './admin/admin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LifeInsuranceComponent } from './life-insurance/life-insurance.component';
import { GeneralInsuranceComponent } from './general-insurance/general-insurance.component';
import { HealthInsuranceComponent } from './health-insurance/health-insurance.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent,AdminComponent,LifeInsuranceComponent,GeneralInsuranceComponent,HealthInsuranceComponent,ContactusComponent ,LoginComponent,RegisterComponent,LeadComponent,LeaddetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'INSURANCE';

  //sidebar toggle click functionality
status: boolean = true;
clickEvent(){
    this.status = !this.status;       
}
}
