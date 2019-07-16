import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlderPostComponent } from './older-post.component';

describe('OlderPostComponent', () => {
  let component: OlderPostComponent;
  let fixture: ComponentFixture<OlderPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlderPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlderPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
