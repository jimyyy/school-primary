import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilensComponent } from './profilens.component';

describe('ProfilensComponent', () => {
  let component: ProfilensComponent;
  let fixture: ComponentFixture<ProfilensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
