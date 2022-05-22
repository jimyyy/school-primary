import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcongesComponent } from './addconges.component';

describe('AddcongesComponent', () => {
  let component: AddcongesComponent;
  let fixture: ComponentFixture<AddcongesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcongesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
