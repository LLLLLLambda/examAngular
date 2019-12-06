import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { ChatLoginComponent } from './chat-login/chat-login.component';
import { ChatSalonComponent } from './chat-salon/chat-salon.component';
import { ChatTitleComponent } from './chat-title/chat-title.component';

const appRoutes: Routes = [
  { path: 'salon', component: ChatSalonComponent },

  { path: '**', component: ChatLoginComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ChatLoginComponent,
    ChatSalonComponent,
    ChatTitleComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
