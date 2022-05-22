import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCoursesComponent } from './categories-courses.component';

describe('CategoriesCoursesComponent', () => {
  let component: CategoriesCoursesComponent;
  let fixture: ComponentFixture<CategoriesCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
