import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcourComponent } from './addcour.component';

describe('AddcourComponent', () => {
  let component: AddcourComponent;
  let fixture: ComponentFixture<AddcourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
