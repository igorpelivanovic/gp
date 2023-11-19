import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsSwipperComponent } from './testimonials-swipper.component';

describe('TestimonialsSwipperComponent', () => {
  let component: TestimonialsSwipperComponent;
  let fixture: ComponentFixture<TestimonialsSwipperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialsSwipperComponent]
    });
    fixture = TestBed.createComponent(TestimonialsSwipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
