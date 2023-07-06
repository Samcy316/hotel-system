import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestuarantComponent } from './restuarant.component';

describe('RestuarantComponent', () => {
  let component: RestuarantComponent;
  let fixture: ComponentFixture<RestuarantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestuarantComponent]
    });
    fixture = TestBed.createComponent(RestuarantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
