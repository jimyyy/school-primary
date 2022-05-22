import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardetrangerComponent } from './dashboardetranger.component';

describe('DashboardetrangerComponent', () => {
  let component: DashboardetrangerComponent;
  let fixture: ComponentFixture<DashboardetrangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardetrangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardetrangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
