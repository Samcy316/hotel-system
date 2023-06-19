import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoompageComponent } from './roompage.component';

describe('RoompageComponent', () => {
  let component: RoompageComponent;
  let fixture: ComponentFixture<RoompageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoompageComponent]
    });
    fixture = TestBed.createComponent(RoompageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
