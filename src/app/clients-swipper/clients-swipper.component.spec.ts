import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsSwipperComponent } from './clients-swipper.component';

describe('ClientsSwipperComponent', () => {
  let component: ClientsSwipperComponent;
  let fixture: ComponentFixture<ClientsSwipperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsSwipperComponent]
    });
    fixture = TestBed.createComponent(ClientsSwipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
