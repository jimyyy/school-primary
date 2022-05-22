import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtrangerconfirmeComponent } from './etrangerconfirme.component';

describe('EtrangerconfirmeComponent', () => {
  let component: EtrangerconfirmeComponent;
  let fixture: ComponentFixture<EtrangerconfirmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtrangerconfirmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtrangerconfirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
