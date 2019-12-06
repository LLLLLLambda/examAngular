import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-login',
  templateUrl: './chat-login.component.html',
  styleUrls: ['./chat-login.component.css']
})
export class ChatLoginComponent implements OnInit {
  _pseudo: string

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    this.loginService.findUser().subscribe(
      (users: User[]) => this._pseudo = users[0].pseudo
      )
  }

  handleClickLogin(){
    if(!!this._pseudo) {
      let _user = {pseudo: this._pseudo, id: 1}
      this.loginService.updateUser(_user).subscribe()
      this.router.navigateByUrl('/salon')
    }
  }

}
