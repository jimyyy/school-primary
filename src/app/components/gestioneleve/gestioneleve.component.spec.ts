import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneleveComponent } from './gestioneleve.component';

describe('GestioneleveComponent', () => {
  let component: GestioneleveComponent;
  let fixture: ComponentFixture<GestioneleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
