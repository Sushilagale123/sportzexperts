import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslaterComponent } from './newslater.component';

describe('NewslaterComponent', () => {
  let component: NewslaterComponent;
  let fixture: ComponentFixture<NewslaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewslaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewslaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
