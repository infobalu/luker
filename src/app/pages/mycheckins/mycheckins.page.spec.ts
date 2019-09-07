import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycheckinsPage } from './mycheckins.page';

describe('MycheckinsPage', () => {
  let component: MycheckinsPage;
  let fixture: ComponentFixture<MycheckinsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycheckinsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycheckinsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
