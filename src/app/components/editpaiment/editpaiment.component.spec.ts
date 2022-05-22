import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpaimentComponent } from './editpaiment.component';

describe('EditpaimentComponent', () => {
  let component: EditpaimentComponent;
  let fixture: ComponentFixture<EditpaimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpaimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpaimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
