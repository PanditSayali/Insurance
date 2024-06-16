import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInsuranceComponent } from './general-insurance.component';

describe('GeneralInsuranceComponent', () => {
  let component: GeneralInsuranceComponent;
  let fixture: ComponentFixture<GeneralInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralInsuranceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
