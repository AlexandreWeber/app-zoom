import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSalesZoomComponent } from './app-sales-zoom.component';

describe('AppSalesZoomComponent', () => {
  let component: AppSalesZoomComponent;
  let fixture: ComponentFixture<AppSalesZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSalesZoomComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSalesZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
