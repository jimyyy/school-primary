import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpayeComponent } from './listpaye.component';

describe('ListpayeComponent', () => {
  let component: ListpayeComponent;
  let fixture: ComponentFixture<ListpayeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpayeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
