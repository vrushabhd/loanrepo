import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddloantypeComponent } from './addloantype.component';

describe('AddloantypeComponent', () => {
  let component: AddloantypeComponent;
  let fixture: ComponentFixture<AddloantypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddloantypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddloantypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
