import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckindetailPage } from './checkindetail.page';

describe('CheckindetailPage', () => {
  let component: CheckindetailPage;
  let fixture: ComponentFixture<CheckindetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckindetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckindetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
