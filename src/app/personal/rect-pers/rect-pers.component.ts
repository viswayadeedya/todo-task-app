import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rect-pers',
  templateUrl: './rect-pers.component.html',
  styleUrls: ['./rect-pers.component.css'],
})
export class RectPersComponent implements OnInit {
  @Output() personalClick = new EventEmitter<string>();

  onSelect(feature: string) {
    this.personalClick.emit(feature);
  }

  constructor() {}

  ngOnInit(): void {}
}
