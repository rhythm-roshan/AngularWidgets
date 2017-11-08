import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WidgetlistService} from "../../widgetlist.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name;
  desc;
  buttonName = 'ADD';
  newWidget;

  @Input() items;

  @Output() addWidget: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteWidget: EventEmitter<any> = new EventEmitter();

  constructor(private request: WidgetlistService) {
  }

  ngOnInit() {

  }

  addWidgets(name, desc) {

    if (this.buttonName == 'UPDATE') {
      this.newWidget.name = name;
      this.newWidget.desc = desc;

      this.updateWidgetDATA(this.newWidget);
    }
    else {
      this.addWidget.emit({name, desc});
      this.name = "";
      this.desc = "";
    }
  }


  deleteWidgetDATA(widget) {
    this.deleteWidget.emit(widget);
  }

  updateWidgetDATA(widget) {


    this.request.updateData(widget)
      .subscribe(data => {
        this.buttonName = 'ADD'
        this.name ="";
        this.desc ="";
        console.log(data);
      })


  }

  loadWidget(widget) {
    this.name = widget.name;
    this.desc = widget.desc;

    this.buttonName = "UPDATE";
    this.newWidget = widget;

  }


}
