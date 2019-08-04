import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBuzzComponent } from './show-buzz.component';

describe('ShowBuzzComponent', () => {
  let component: ShowBuzzComponent;
  let fixture: ComponentFixture<ShowBuzzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBuzzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
