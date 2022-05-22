import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinscriptionetrangerComponent } from './listinscriptionetranger.component';

describe('ListinscriptionetrangerComponent', () => {
  let component: ListinscriptionetrangerComponent;
  let fixture: ComponentFixture<ListinscriptionetrangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListinscriptionetrangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListinscriptionetrangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
