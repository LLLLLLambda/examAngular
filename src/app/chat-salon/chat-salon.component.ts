import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { ChatService } from '../chat.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-chat-salon',
  templateUrl: './chat-salon.component.html',
  styleUrls: ['./chat-salon.component.css']
})
export class ChatSalonComponent implements OnInit {
  idChannel: number
  _pseudo: string
  _messages: Message[]

  constructor(private loginService: LoginService, private chatService: ChatService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      //on recupere l'id
      this.idChannel = parseInt(params.get('id'))

      this.idChannel && this.chatService.refreshMessages().subscribe(
        (messages: Message[]) => {
          this._messages = messages.filter(m => m && m.idSalon == this.idChannel)
      });
    })

    this.loginService.findUser().subscribe(
      (users: User[]) => this._pseudo = users[0].pseudo
    )
  }

  chargerMessages(idChannel) {
    this.chatService.refreshMessages();
    this.chatService.messages
  }

}
