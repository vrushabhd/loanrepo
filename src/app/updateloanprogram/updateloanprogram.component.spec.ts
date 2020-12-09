import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateloanprogramComponent } from './updateloanprogram.component';

describe('UpdateloanprogramComponent', () => {
  let component: UpdateloanprogramComponent;
  let fixture: ComponentFixture<UpdateloanprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateloanprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateloanprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
