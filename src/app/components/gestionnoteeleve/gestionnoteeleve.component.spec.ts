import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnoteeleveComponent } from './gestionnoteeleve.component';

describe('GestionnoteeleveComponent', () => {
  let component: GestionnoteeleveComponent;
  let fixture: ComponentFixture<GestionnoteeleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionnoteeleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionnoteeleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
