import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcourseonlineComponent } from './adcourseonline.component';

describe('AdcourseonlineComponent', () => {
  let component: AdcourseonlineComponent;
  let fixture: ComponentFixture<AdcourseonlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdcourseonlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdcourseonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
