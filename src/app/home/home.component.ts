import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BusinessTaskService } from '../business-task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loadedFeature: string;

  onBusiness(feature: string) {
    this.loadedFeature = feature;
  }
  onPersonal(feature: string) {
    this.loadedFeature = feature;
  }
  ngOnInit() {}
}
