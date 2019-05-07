import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { testcomponent } from '././testcomponent.component';

describe('testcomponent', () => {
  let component: testcomponent;
  let fixture: ComponentFixture<testcomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ testcomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(testcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

