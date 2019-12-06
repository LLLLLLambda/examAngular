import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {
  newMessage: string;

  @Input()
  _pseudo: string;
  @Input()
  _isSalon: number;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  addMessage() {
    this.chatService.sendMessage(this._pseudo, this.newMessage, this._isSalon).subscribe()
    this.newMessage = ""
    //Reste a rafrichir la liste etc
  }

}
