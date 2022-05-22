import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceelevesComponent } from './absenceeleves.component';

describe('AbsenceelevesComponent', () => {
  let component: AbsenceelevesComponent;
  let fixture: ComponentFixture<AbsenceelevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsenceelevesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenceelevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
