import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardeleveComponent } from './dashboardeleve.component';

describe('DashboardeleveComponent', () => {
  let component: DashboardeleveComponent;
  let fixture: ComponentFixture<DashboardeleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardeleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardeleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
