import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonalTaskService {
  private lists = [
    {
      name: 'Add your Personal Tasks',
    },
  ];
  constructor() {}

  getList() {
    return this.lists;
  }

  addList(name: string) {
    this.lists.push({ name: name });
  }
  removeItem(index: number) {
    this.lists.splice(index, 1);
  }
}
