import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquittanceComponent } from './maquittance.component';

describe('MaquittanceComponent', () => {
  let component: MaquittanceComponent;
  let fixture: ComponentFixture<MaquittanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaquittanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquittanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
