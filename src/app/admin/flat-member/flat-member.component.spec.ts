import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatMemberComponent } from './flat-member.component';

describe('FlatMemberComponent', () => {
  let component: FlatMemberComponent;
  let fixture: ComponentFixture<FlatMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
