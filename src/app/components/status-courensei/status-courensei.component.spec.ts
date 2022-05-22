import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCourenseiComponent } from './status-courensei.component';

describe('StatusCourenseiComponent', () => {
  let component: StatusCourenseiComponent;
  let fixture: ComponentFixture<StatusCourenseiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusCourenseiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusCourenseiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
