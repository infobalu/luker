import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAttendaneRptPage } from './emp-attendane-rpt.page';

describe('EmpAttendaneRptPage', () => {
  let component: EmpAttendaneRptPage;
  let fixture: ComponentFixture<EmpAttendaneRptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpAttendaneRptPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpAttendaneRptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
