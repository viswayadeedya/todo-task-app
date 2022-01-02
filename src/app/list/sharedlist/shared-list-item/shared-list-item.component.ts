// VISWA YADEEDYA
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ListTaskName } from '../../list.task.model';
import { TodolistService } from '../../shared-service/todolist.service';

@Component({
  selector: 'app-shared-list-item',
  templateUrl: './shared-list-item.component.html',
  styleUrls: ['./shared-list-item.component.scss'],
})
export class SharedListItemComponent implements OnInit {
  @Input() bussinessList: ListTaskName;
  @Input() id: number;
  @Input() name: string;
  status: boolean = false;
  constructor(private route: ActivatedRoute, private list: TodolistService) {}

  ngOnInit(): void {
    this.list.fetchBussinessList().subscribe();
    this.list.fetchPersonalList().subscribe();
  }
  onClick() {
    this.status = !this.status;
  }
  onDelete(index: number) {
    if (this.name === 'bussiness') {
      this.list.deleteBussinessListItem(index);
    }
    if (this.name === 'personal') {
      this.list.deletePersonalListItem(index);
    }
  }
}
