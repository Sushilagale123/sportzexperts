import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOnFbComponent } from './find-on-fb.component';

describe('FindOnFbComponent', () => {
  let component: FindOnFbComponent;
  let fixture: ComponentFixture<FindOnFbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindOnFbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindOnFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
