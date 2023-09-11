import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousinglocationComponent } from './housinglocation.component';

describe('HousinglocationComponent', () => {
  let component: HousinglocationComponent;
  let fixture: ComponentFixture<HousinglocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HousinglocationComponent]
    });
    fixture = TestBed.createComponent(HousinglocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
