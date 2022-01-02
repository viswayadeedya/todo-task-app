// VISWA YADEEDYA
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ListTaskName } from '../list.task.model';
import { AuthService } from 'src/app/login/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  personalList: ListTaskName[] = [];
  bussinessList: ListTaskName[] = [];

  constructor(private http: HttpClient, private authService: AuthService) {}

  getBussinessList() {
    return this.bussinessList;
  }
  addNewBussinessItem(bussinessItem: ListTaskName) {
    this.bussinessList.push(bussinessItem);
  }
  deleteBussinessListItem(index: number) {
    this.bussinessList.splice(index, 1);
  }
  saveBussinessList() {
    const bussinessSavedList = this.getBussinessList();
    this.http
      .put(
        'https://ng-todolist-f33a6-default-rtdb.firebaseio.com/bussinesslist.json',
        bussinessSavedList
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
  fetchBussinessList() {
    return this.http
      .get<ListTaskName[]>(
        'https://ng-todolist-f33a6-default-rtdb.firebaseio.com/bussinesslist.json'
      )
      .pipe(tap((personalList) => (this.bussinessList = personalList)));
  }

  getPersonalList() {
    return this.personalList;
  }
  addNewPersonalItem(personalItem: ListTaskName) {
    this.personalList.push(personalItem);
  }
  deletePersonalListItem(index) {
    this.personalList.splice(index, 1);
  }
  savePersonalList() {
    const personalSavedList = this.getPersonalList();
    this.http
      .put(
        'https://ng-todolist-f33a6-default-rtdb.firebaseio.com/personallist.json',
        personalSavedList
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
  fetchPersonalList() {
    return this.http
      .get<ListTaskName[]>(
        'https://ng-todolist-f33a6-default-rtdb.firebaseio.com/personallist.json'
      )
      .pipe(tap((bussinessList) => (this.personalList = bussinessList)));
  }
}
