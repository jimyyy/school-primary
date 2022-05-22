import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenseignatComponent } from './listenseignat.component';

describe('ListenseignatComponent', () => {
  let component: ListenseignatComponent;
  let fixture: ComponentFixture<ListenseignatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListenseignatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenseignatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
