import {Component, OnInit} from '@angular/core';
import {WidgetlistService} from "../widgetlist.service";

@Component({
  selector: 'app-widget-services',
  templateUrl: './widget-services.component.html',
  styleUrls: ['./widget-services.component.css']
})
export class WidgetServicesComponent implements OnInit {
  items: Object[];

  constructor(private request: WidgetlistService) {
  }

  ngOnInit() {
   this.getWidgets();
  }

  getWidgets()
  {
    this.request.loadData()
      .subscribe((data) => {
        this.items = data;
      })
  }
  addWidgets(event) {

    console.log("hey")
    let widget = {
      name: event.name,
      desc: event.desc
    };

    this.request.postData(widget)
      .subscribe(data => {
        this.items.push(data);
        this.getWidgets();
      })


  }

  checkWidget(item) {

    this.request.checkData(item)
      .subscribe(data => {

      })


  }

  deleteWidgetFinal(item) {
    this.request.deleteData(item.id)
      .subscribe(data => {
        this.getWidgets();
        console.log(data)
      })

  }

}
