import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationabsenceComponent } from './reclamationabsence.component';

describe('ReclamationabsenceComponent', () => {
  let component: ReclamationabsenceComponent;
  let fixture: ComponentFixture<ReclamationabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
