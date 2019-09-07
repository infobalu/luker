import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClenttypePage } from './clenttype.page';

describe('ClenttypePage', () => {
  let component: ClenttypePage;
  let fixture: ComponentFixture<ClenttypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClenttypePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClenttypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
