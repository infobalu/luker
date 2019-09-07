import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCheckOutPage } from './create-check-out.page';

describe('CreateCheckOutPage', () => {
  let component: CreateCheckOutPage;
  let fixture: ComponentFixture<CreateCheckOutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCheckOutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCheckOutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
