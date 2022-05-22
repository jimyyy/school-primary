import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuscongesensComponent } from './statuscongesens.component';

describe('StatuscongesensComponent', () => {
  let component: StatuscongesensComponent;
  let fixture: ComponentFixture<StatuscongesensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatuscongesensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuscongesensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
