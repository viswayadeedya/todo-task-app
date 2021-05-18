import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalTaskService } from '../../personal-task.service';

@Component({
  selector: 'app-new-item-personal',
  templateUrl: './new-item-personal.component.html',
  styleUrls: ['./new-item-personal.component.css'],
})
export class NewItemPersonalComponent implements OnInit {
  newTaskItem: string;
  constructor(
    private router: Router,
    private personalTask: PersonalTaskService
  ) {}

  ngOnInit(): void {}

  onLoadNewTask() {
    this.personalTask.addList(this.newTaskItem);
    //after adding new task
    console.log(this.newTaskItem);
    this.router.navigate(['/']);
  }

  log(x) {
    this.newTaskItem = x.viewModel;
  }
}
