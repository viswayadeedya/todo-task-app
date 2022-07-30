// VISWA YADEEDYA
import { Component, OnInit } from '@angular/core';
import { TodolistService } from './list/shared-service/todolist.service';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private listService: TodolistService
  ) {}
  loaderFlag = false;

  ngOnInit() {
    this.listService.loader$.subscribe((loader) => (this.loaderFlag = loader));
    this.authService.autoLogin();
  }
}
