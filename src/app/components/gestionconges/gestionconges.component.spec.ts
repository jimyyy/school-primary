import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncongesComponent } from './gestionconges.component';

describe('GestioncongesComponent', () => {
  let component: GestioncongesComponent;
  let fixture: ComponentFixture<GestioncongesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioncongesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioncongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
