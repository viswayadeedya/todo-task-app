import { Component, Input, OnInit } from '@angular/core';
import { BusinessTaskService } from 'src/app/business-task.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  hiddenClass: string = 'show';
  @Input() list: { name: string };

  constructor(private businessTask: BusinessTaskService) {}

  ngOnInit(): void {}
  onHidden(f) {
    this.hiddenClass = f;
  }
}
