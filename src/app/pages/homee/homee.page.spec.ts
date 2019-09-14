import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeePage } from './homee.page';

describe('HomeePage', () => {
  let component: HomeePage;
  let fixture: ComponentFixture<HomeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
