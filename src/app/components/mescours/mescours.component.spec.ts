import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MescoursComponent } from './mescours.component';

describe('MescoursComponent', () => {
  let component: MescoursComponent;
  let fixture: ComponentFixture<MescoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MescoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MescoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
