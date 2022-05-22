import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncoursdistanceComponent } from './gestioncoursdistance.component';

describe('GestioncoursdistanceComponent', () => {
  let component: GestioncoursdistanceComponent;
  let fixture: ComponentFixture<GestioncoursdistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioncoursdistanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioncoursdistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
