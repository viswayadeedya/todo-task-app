import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rect-busi',
  templateUrl: './rect-busi.component.html',
  styleUrls: ['./rect-busi.component.css'],
})
export class RectBusiComponent implements OnInit {
  @Output() businessClick = new EventEmitter<string>();

  onSelect(feature: string) {
    this.businessClick.emit(feature);
  }

  constructor() {}

  ngOnInit(): void {}
}
