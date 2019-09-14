import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpallcheckinPage } from './empallcheckin.page';

describe('EmpallcheckinPage', () => {
  let component: EmpallcheckinPage;
  let fixture: ComponentFixture<EmpallcheckinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpallcheckinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpallcheckinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
