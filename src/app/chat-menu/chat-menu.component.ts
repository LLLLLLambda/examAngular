import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-menu',
  templateUrl: './chat-menu.component.html',
  styleUrls: ['./chat-menu.component.css']
})
export class ChatMenuComponent implements OnInit {
  salons: Salon[]

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getSalons().subscribe(
      (salons: Salon[]) => {
        this.salons = salons;
      }
    )
  }

  afficheSalon(id: number){
    console.log('affiche ce salon ', id)
  }

}
