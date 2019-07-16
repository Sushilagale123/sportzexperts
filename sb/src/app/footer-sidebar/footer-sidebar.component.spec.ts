import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSidebarComponent } from './footer-sidebar.component';

describe('FooterSidebarComponent', () => {
  let component: FooterSidebarComponent;
  let fixture: ComponentFixture<FooterSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
