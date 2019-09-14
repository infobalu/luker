import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileadminPage } from './profileadmin.page';

describe('ProfileadminPage', () => {
  let component: ProfileadminPage;
  let fixture: ComponentFixture<ProfileadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileadminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
