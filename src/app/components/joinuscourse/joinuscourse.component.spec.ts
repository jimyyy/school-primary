import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinuscourseComponent } from './joinuscourse.component';

describe('JoinuscourseComponent', () => {
  let component: JoinuscourseComponent;
  let fixture: ComponentFixture<JoinuscourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinuscourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinuscourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
