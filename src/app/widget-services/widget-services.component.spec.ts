import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetServicesComponent } from './widget-services.component';

describe('WidgetServicesComponent', () => {
  let component: WidgetServicesComponent;
  let fixture: ComponentFixture<WidgetServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
