import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../chat.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-chat-menu',
  templateUrl: './chat-menu.component.html',
  styleUrls: ['./chat-menu.component.css']
})
export class ChatMenuComponent implements OnInit {
  salons: Salon[]

  constructor(private loginService: LoginService,
    private chatService: ChatService) { }

  ngOnInit() {
    //recupere tous les salons
    this.chatService.getSalons().subscribe(
      (salons: Salon[]) => {
        this.salons = salons;
      }
    )
  }

  @Input()
  _pseudo: string;

}
