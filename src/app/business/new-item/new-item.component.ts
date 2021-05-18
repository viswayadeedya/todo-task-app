import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessTaskService } from '../../business-task.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css'],
})
export class NewItemComponent implements OnInit {
  newTaskItem: string;
  constructor(private router: Router, private busiTask: BusinessTaskService) {}

  ngOnInit(): void {}

  onLoadNewTask() {
    //after adding new tasks
    this.busiTask.addList(this.newTaskItem);

    this.router.navigate(['/']);
  }

  log(x) {
    this.newTaskItem = x.viewModel;
  }
}
