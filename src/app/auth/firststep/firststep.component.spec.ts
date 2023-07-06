import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirststepComponent } from './firststep.component';

describe('FirststepComponent', () => {
  let component: FirststepComponent;
  let fixture: ComponentFixture<FirststepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirststepComponent]
    });
    fixture = TestBed.createComponent(FirststepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
