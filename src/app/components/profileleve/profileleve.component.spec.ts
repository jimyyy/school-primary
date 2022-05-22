import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileleveComponent } from './profileleve.component';

describe('ProfileleveComponent', () => {
  let component: ProfileleveComponent;
  let fixture: ComponentFixture<ProfileleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
