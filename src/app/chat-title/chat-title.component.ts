import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-title',
  templateUrl: './chat-title.component.html',
  styleUrls: ['./chat-title.component.css']
})
export class ChatTitleComponent implements OnInit {
  _pseudo: string

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    //a refacto comme dans menu pour evite la requete http
    this.loginService.findUser().subscribe(
      (users: User[]) => this._pseudo = users[0].pseudo
      )
  }

  handleClickDeconnection(){
    this.router.navigateByUrl('/login')
  }

}
