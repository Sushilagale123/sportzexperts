import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsGalleryComponent } from './sports-gallery.component';

describe('SportsGalleryComponent', () => {
  let component: SportsGalleryComponent;
  let fixture: ComponentFixture<SportsGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
