import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesnotesComponent } from './mesnotes.component';

describe('MesnotesComponent', () => {
  let component: MesnotesComponent;
  let fixture: ComponentFixture<MesnotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesnotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
