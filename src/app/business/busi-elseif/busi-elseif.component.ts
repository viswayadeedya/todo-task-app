import { Component, OnInit } from '@angular/core';
import { BusinessTaskService } from 'src/app/business-task.service';

@Component({
  selector: 'app-busi-elseif',
  templateUrl: './busi-elseif.component.html',
  styleUrls: ['./busi-elseif.component.css'],
})
export class BusiElseifComponent implements OnInit {
  lists: { name: string }[] = [];
  constructor(private businessTask: BusinessTaskService) {}
  ngOnInit() {
    this.lists = this.businessTask.getList();
  }
  onRemove(index) {
    this.lists.splice(index, 1);
  }
}
