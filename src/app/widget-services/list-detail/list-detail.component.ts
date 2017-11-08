import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  @Input() widgets;

  @Output() deleteWidget: EventEmitter<any> = new EventEmitter();

  @Output() updateWidget: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  deleteWidgets(widget) {
    this.deleteWidget.emit(widget);
  }

  updateWidgets(widget){
    this.updateWidget.emit(widget);
  }

}
