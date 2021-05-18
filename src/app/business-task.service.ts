import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BusinessTaskService {
  private lists = [
    {
      name: 'Add your Business Tasks',
    },
  ];
  constructor() {}
  getList() {
    return this.lists.slice();
  }

  addList(n: string) {
    this.lists.push({ name: n });
  }
}
