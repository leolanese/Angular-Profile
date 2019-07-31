import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSingleActionsComponent } from './card-single-actions.component';

describe('CardComponent', () => {
  let component: CardSingleActionsComponent;
  let fixture: ComponentFixture<CardSingleActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardSingleActionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSingleActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
