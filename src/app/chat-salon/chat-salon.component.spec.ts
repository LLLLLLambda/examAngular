import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSalonComponent } from './chat-salon.component';

describe('ChatSalonComponent', () => {
  let component: ChatSalonComponent;
  let fixture: ComponentFixture<ChatSalonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSalonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
