import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionreclamationsComponent } from './gestionreclamations.component';

describe('GestionreclamationsComponent', () => {
  let component: GestionreclamationsComponent;
  let fixture: ComponentFixture<GestionreclamationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionreclamationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionreclamationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
