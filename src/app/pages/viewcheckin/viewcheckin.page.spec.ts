import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcheckinPage } from './viewcheckin.page';

describe('ViewcheckinPage', () => {
  let component: ViewcheckinPage;
  let fixture: ComponentFixture<ViewcheckinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcheckinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcheckinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
