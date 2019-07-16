import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmatchFormComponent } from './addmatch-form.component';

describe('AddmatchFormComponent', () => {
  let component: AddmatchFormComponent;
  let fixture: ComponentFixture<AddmatchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmatchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmatchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
