import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcoursonlineComponent } from './listcoursonline.component';

describe('ListcoursonlineComponent', () => {
  let component: ListcoursonlineComponent;
  let fixture: ComponentFixture<ListcoursonlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcoursonlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcoursonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
