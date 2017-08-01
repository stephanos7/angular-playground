import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgeditorComponent } from './ngeditor.component';

describe('NgeditorComponent', () => {
  let component: NgeditorComponent;
  let fixture: ComponentFixture<NgeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
