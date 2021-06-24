import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListTaskName } from '../list.task.model';
import { TodolistService } from '../shared-service/todolist.service';

@Component({
  selector: 'app-sharedlist',
  templateUrl: './sharedlist.component.html',
  styleUrls: ['./sharedlist.component.scss'],
})
export class SharedListComponent implements OnInit, OnChanges {
  @Input() selectedListName: string;
  sharedList: ListTaskName[];
  addNewTask: boolean = false;
  constructor(private listService: TodolistService) {}

  ngOnInit() {
    this.sharedList = this.listService.getBussinessList();
  }

  ngOnChanges() {
    this.addNewTask = false;
    if (this.selectedListName === 'bussiness') {
      this.sharedList = this.listService.getBussinessList();
    }
    if (this.selectedListName === 'personal') {
      this.sharedList = this.listService.getPersonalList();
    }
  }

  onClickCancel() {
    this.addNewTask = false;
  }
  onClickAdd() {
    this.addNewTask = true;
  }
  onAdd(form: NgForm) {
    const value = form.value;
    if (this.selectedListName === 'bussiness') {
      this.listService.addNewBussinessItem(new ListTaskName(value.newTask));
    }
    if (this.selectedListName === 'personal') {
      this.listService.addNewPersonalItem(new ListTaskName(value.newTask));
    }
    form.reset();
  }
}
