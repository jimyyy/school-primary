import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesabsencesComponent } from './mesabsences.component';

describe('MesabsencesComponent', () => {
  let component: MesabsencesComponent;
  let fixture: ComponentFixture<MesabsencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesabsencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesabsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
