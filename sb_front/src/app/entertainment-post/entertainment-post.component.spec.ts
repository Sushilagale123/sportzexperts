import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentPostComponent } from './entertainment-post.component';

describe('EntertainmentPostComponent', () => {
  let component: EntertainmentPostComponent;
  let fixture: ComponentFixture<EntertainmentPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
