import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListetrangercourseComponent } from './listetrangercourse.component';

describe('ListetrangercourseComponent', () => {
  let component: ListetrangercourseComponent;
  let fixture: ComponentFixture<ListetrangercourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListetrangercourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListetrangercourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
