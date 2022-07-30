// VISWA YADEEDYA
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ListTaskName } from '../list.task.model';
import { AuthService } from 'src/app/login/auth.service';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  private readonly loaderSubject: BehaviorSubject<boolean> =
    new BehaviorSubject(false);
  loader$ = this.loaderSubject.asObservable();

  saveBussinessList(bussinessSavedList: ListTaskName[]) {
    return this.http.put(
      'https://ng-todolist-f33a6-default-rtdb.firebaseio.com/bussinesslist.json',
      bussinessSavedList
    );
  }

  fetchBussinessList() {
    return this.http.get<ListTaskName[]>(
      'https://ng-todolist-f33a6-default-rtdb.firebaseio.com/bussinesslist.json'
    );
  }

  savePersonalList(personalSavedList: ListTaskName[]) {
    return this.http.put(
      'https://ng-todolist-f33a6-default-rtdb.firebaseio.com/personallist.json',
      personalSavedList
    );
  }

  fetchPersonalList() {
    return this.http.get<ListTaskName[]>(
      'https://ng-todolist-f33a6-default-rtdb.firebaseio.com/personallist.json'
    );
  }
  syncLoader(loaderFlag: boolean) {
    this.loaderSubject.next(loaderFlag);
  }
}
