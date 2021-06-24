import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { TodolistService } from './shared-service/todolist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  selectedList: string = 'bussiness';
  visibleSidebar1;
  constructor(
    private listService: TodolistService,
    private route: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  onClick(listName: string) {
    this.selectedList = listName;
  }

  onLogout() {
    this.authService.logout();
  }

  onSavePersonal() {
    this.listService.savePersonalList();
  }
  onFetch() {
    this.listService.fetchPersonalList().subscribe();
    this.listService.fetchBussinessList().subscribe();
  }
  onSaveBussiness() {
    this.listService.saveBussinessList();
  }
}
