import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as momentTimeZone from 'moment-timezone';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: [
    './date-picker.component.css',
    // './angular2-calendar/dist/css/angular2-calendar.css'
  ]
})
export class DatePickerComponent implements OnInit {
  moment = moment;
  currentTime = moment(new Date()).format('LLLL');

  timezoneVal: string;
  timeZones: string[];

  current_datetime = '';

	settings = {
    bigBanner: true,
    timePicker: true,
    clockHour: 12,
    format: 'dd-MMM-yyyy hh:mm a',
    defaultOpen: false,
    minDate: new Date(),
    closeOnSelect: false,
    preserveTimeValue: false,
    // incrementByMinutes: 30,
  };
  constructor() { }

  ngOnInit() {
    this.current_datetime = momentTimeZone(new Date()).tz('UTC')._d;
    this.timeZones =  momentTimeZone.tz.names();
    this.timezoneVal = 'UTC';
  }

  onDateSelect(): void {
    console.log('On Date Select :: ', this.current_datetime);
  }

  setNewTimeZone():void {
    console.log('Time Zome Selcted :: ', this.timezoneVal);
    
    var tempSetting = this.settings;
    tempSetting.minDate = momentTimeZone(this.settings.minDate).tz(this.timezoneVal);;
    this.settings = tempSetting;

    this.current_datetime = momentTimeZone(this.current_datetime).tz(this.timezoneVal);

    console.log('Selected Date :: ', this.current_datetime);
  }
}
