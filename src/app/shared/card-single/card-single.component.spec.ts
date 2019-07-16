import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSingleComponent } from './card-single.component';

describe('CardSingleComponent', () => {
  let component: CardSingleComponent;
  let fixture: ComponentFixture<CardSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
