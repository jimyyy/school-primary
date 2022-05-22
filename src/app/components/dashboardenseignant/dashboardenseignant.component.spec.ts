import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardenseignantComponent } from './dashboardenseignant.component';

describe('DashboardenseignantComponent', () => {
  let component: DashboardenseignantComponent;
  let fixture: ComponentFixture<DashboardenseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardenseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardenseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
