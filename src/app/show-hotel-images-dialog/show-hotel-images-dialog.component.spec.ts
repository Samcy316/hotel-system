import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHotelImagesDialogComponent } from './show-hotel-images-dialog.component';

describe('ShowHotelImagesDialogComponent', () => {
  let component: ShowHotelImagesDialogComponent;
  let fixture: ComponentFixture<ShowHotelImagesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowHotelImagesDialogComponent]
    });
    fixture = TestBed.createComponent(ShowHotelImagesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
