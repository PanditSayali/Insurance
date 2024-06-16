import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

const baseURL ="http://localhost:9191/Insurance/";
const leadURL = "http://localhost:9191/leads/";

@Injectable({
  providedIn: 'root'
})

export class InsuranceserviceService {
  
  // baseUrl: any;
  

  // addCustomer(customer: any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/users/addDetails`, customer);
  // }

  // registerUser(user: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/users/register`, user);
  // }

  // login(username: string, password: string): Observable<any> {
  //   const headers = new HttpHeaders({ 'Authorization': 'Basic ' + btoa(username + ':' + password) });
  //   return this.http.get(`${this.baseUrl}/login`, { headers: headers });
  // }

  // getUserProfile(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/users/user/userProfile`);
  // }

  // getAdminProfile(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/users/admin/adminProfile`);
  // }

  // authenticate(userData: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/users/login`, userData);
  // }


  // patternValidator(): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } | null => {
  //     if (!control.value) {
  //       return null;
  //     }
  //     const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
  //     const valid = regex.test(control.value);
  //     return valid ? null : { invalidPassword: true };
  //   };
  // }

  // MatchPassword(password: string, confirmPassword: string) {
  //   return (formGroup: FormGroup): { [key: string]: any } | null => {
  //     const passwordControl = formGroup.controls[password];
  //     const confirmPasswordControl = formGroup.controls[confirmPassword];

  //     if (!passwordControl || !confirmPasswordControl) {
  //       return null;
  //     }

  //     if (confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']) {
  //       return null;
  //     }

  //     if (passwordControl.value !== confirmPasswordControl.value) {
  //       confirmPasswordControl.setErrors({ passwordMismatch: true });
  //     } else {
  //       confirmPasswordControl.setErrors(null);
  //     }

  //     return null;
  //   }
  // }

  // userNameValidator(userControl: AbstractControl): Promise<{ [key: string]: any } | null> {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       if (this.validateUserName(userControl.value)) {
  //         resolve({ userNameNotAvailable: true });
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1000);
  //   });
  // }

  // validateUserName(userName: string): boolean {
  //   const UserList = ['ankit', 'admin', 'user', 'superuser'];
  //   return (UserList.indexOf(userName) > -1);
  // }

  constructor(private http: HttpClient) {
    console.log('service running...');
  }

  
  //Metthod for register
  postRegisterFromService(register: any): Observable<any> {
    return this.http.post(baseURL + 'addemp', register);
  }

  postLoginFromService(bodyData: any): Observable<any> {
    return this.http.post(baseURL +'loginEmp', bodyData);
  }



  // Method for contact US
  postContactFromService(contact: any): Observable<any> {
    return this.http.post(baseURL + 'contactsadd', contact);
    
  }

  // Methods for Lead
  postLeadFromService(clientlead: any): Observable<any> {
   
    return this.http.post(leadURL + 'leadadd', clientlead);
  }

  getLeadFromService()
  {
    return this.http.get(leadURL + 'getAlllead');
  }
  
  // gethealthleadfromService(insurance:health) {
  //   return this.http.get(leadURL + 'getbyinsurance', { params: { type: insuranceType } });
  // }
  gethealthleadfromService(insurance: string): Observable<any[]> {
    return this.http.get<any[]>(leadURL + 'getbyinsurance', { params: { type: insurance } });
  }
}
