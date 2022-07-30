// VISWA YADEEDYA
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListTaskName } from '../list.task.model';
import { TodolistService } from '../shared-service/todolist.service';

@Component({
  selector: 'app-sharedlist',
  templateUrl: './sharedlist.component.html',
  styleUrls: ['./sharedlist.component.scss'],
})
export class SharedListComponent implements OnInit {
  @Input() selectedListName: string;
  sharedList: ListTaskName[];
  bussinessList: ListTaskName[];
  personalList: ListTaskName[];
  addNewTask: boolean = false;
  constructor(private listService: TodolistService) {}

  ngOnInit() {
    this.fetchBussinessList();
    this.fetchPersonalList();
  }

  fetchBussinessList(id?: number) {
    this.listService.fetchBussinessList().subscribe((list) => {
      if (id) {
        this.listService.syncLoader(false);
      }
      list ? (this.bussinessList = list) : (this.bussinessList = []);
    });
  }

  fetchPersonalList(id?: number) {
    this.listService.fetchPersonalList().subscribe((list) => {
      if (id) {
        this.listService.syncLoader(false);
      }
      list ? (this.personalList = list) : (this.personalList = []);
    });
  }

  onClickCancel() {
    this.addNewTask = false;
  }

  onClickAdd() {
    this.addNewTask = true;
  }

  onAdd(form: NgForm) {
    const value = form.value;
    this.listService.syncLoader(true);
    if (this.selectedListName === 'bussiness') {
      this.saveBussinessList(value.newTask);
    }
    if (this.selectedListName === 'personal') {
      this.savePersonalList(value.newTask);
    }
    form.reset();
  }

  saveBussinessList(id?: number, value?: string) {
    this.bussinessList = [...this.bussinessList, { taskName: value }];
    this.listService.saveBussinessList(this.bussinessList).subscribe(() => {
      if (id) {
        this.fetchBussinessList(id);
      } else {
        this.listService.syncLoader(false);
      }
    });
  }

  savePersonalList(id?: number, value?: string) {
    this.personalList = [...this.personalList, { taskName: value }];
    this.listService.savePersonalList(this.personalList).subscribe(() => {
      if (id) {
        this.fetchPersonalList(id);
      } else {
        this.listService.syncLoader(false);
      }
    });
  }

  deleteBussinessListItem(id: number) {
    this.listService.syncLoader(true);
    this.bussinessList.splice(id, 1);
    this.saveBussinessList(id);
  }

  deletePersonalListItem(id: number) {
    this.listService.syncLoader(true);
    this.personalList.splice(id, 1);
    this.savePersonalList(id);
  }
}
