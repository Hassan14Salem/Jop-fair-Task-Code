import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGraphComponent } from './customer-graph.component';

describe('CustomerGraphComponent', () => {
  let component: CustomerGraphComponent;
  let fixture: ComponentFixture<CustomerGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerGraphComponent]
    });
    fixture = TestBed.createComponent(CustomerGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
