import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  salonCurrent: Salon
  pseudo: string
  messages: Message[]

  constructor(private http: HttpClient) { }

  refreshMessages(): Observable<Message[]>{
    return this.http.get<Message[]>('http://localhost:3000/messages')
  }

  sendMessage(){

  }

  getSalons(): Observable<Salon[]>{
    return this.http.get<Salon[]>('http://localhost:3000/channels')
  }
}
