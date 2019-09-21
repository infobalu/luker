import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetilviewPage } from './userdetilview.page';

describe('UserdetilviewPage', () => {
  let component: UserdetilviewPage;
  let fixture: ComponentFixture<UserdetilviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetilviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetilviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
