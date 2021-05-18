import { Component, Input, OnInit } from '@angular/core';
import { PersonalTaskService } from 'src/app/personal-task.service';

@Component({
  selector: 'app-personal-list',
  templateUrl: './personal-list.component.html',
  styleUrls: ['./personal-list.component.css'],
})
export class PersonalListComponent implements OnInit {
  checkCircle: boolean = true;
  @Input() list: { name: string };

  constructor(private personalsTask: PersonalTaskService) {}

  ngOnInit(): void {}
  onShow() {
    this.checkCircle = false;
  }
}
