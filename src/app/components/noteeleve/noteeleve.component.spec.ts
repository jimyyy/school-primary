import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteeleveComponent } from './noteeleve.component';

describe('NoteeleveComponent', () => {
  let component: NoteeleveComponent;
  let fixture: ComponentFixture<NoteeleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteeleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteeleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
