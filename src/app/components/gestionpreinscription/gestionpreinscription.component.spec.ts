import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionpreinscriptionComponent } from './gestionpreinscription.component';

describe('GestionpreinscriptionComponent', () => {
  let component: GestionpreinscriptionComponent;
  let fixture: ComponentFixture<GestionpreinscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionpreinscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionpreinscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
