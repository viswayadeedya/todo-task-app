import { Component, OnInit } from '@angular/core';
import { PersonalTaskService } from 'src/app/personal-task.service';

@Component({
  selector: 'app-pers-elseif',
  templateUrl: './pers-elseif.component.html',
  styleUrls: ['./pers-elseif.component.css'],
})
export class PersElseifComponent implements OnInit {
  lists: { name: string }[] = [];
  constructor(private personalTask: PersonalTaskService) {}
  ngOnInit() {
    this.lists = this.personalTask.getList();
  }
  onRemove(index) {
    this.personalTask.removeItem(index);
    this.lists = this.personalTask.getList();
  }
}
