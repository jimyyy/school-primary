import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeleveComponent } from './listeleve.component';

describe('ListeleveComponent', () => {
  let component: ListeleveComponent;
  let fixture: ComponentFixture<ListeleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
