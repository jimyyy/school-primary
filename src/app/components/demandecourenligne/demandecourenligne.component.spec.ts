import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandecourenligneComponent } from './demandecourenligne.component';

describe('DemandecourenligneComponent', () => {
  let component: DemandecourenligneComponent;
  let fixture: ComponentFixture<DemandecourenligneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandecourenligneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandecourenligneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
