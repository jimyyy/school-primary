import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionabsenceeleveComponent } from './gestionabsenceeleve.component';

describe('GestionabsenceeleveComponent', () => {
  let component: GestionabsenceeleveComponent;
  let fixture: ComponentFixture<GestionabsenceeleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionabsenceeleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionabsenceeleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
