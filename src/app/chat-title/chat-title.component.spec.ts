import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTitleComponent } from './chat-title.component';

describe('ChatTitleComponent', () => {
  let component: ChatTitleComponent;
  let fixture: ComponentFixture<ChatTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
