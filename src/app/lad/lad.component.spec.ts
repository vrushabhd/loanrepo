import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadComponent } from './lad.component';

describe('LadComponent', () => {
  let component: LadComponent;
  let fixture: ComponentFixture<LadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
