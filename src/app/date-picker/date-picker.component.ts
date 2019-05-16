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
  timezoneVal: string;
  timeZones: string[];

  date = moment(new Date());
  currentTime = moment(new Date()).format('LLLL');
  minDate = new Date();

  // const tempDate = moment.tz(this.date, this.timezoneVal).format('MMMM Do YYYY, h:mm a');
  // new Date(moment(tempDate, 'MMMM Do YYYY, h:mm a'))

	settings = {
    bigBanner: true,
    timePicker: true,
    clockHour: 12,
    format: 'dd-mm-yyyy h:mm a',
    defaultOpen: true,
    minDate: this.minDate,
    closeOnSelect: false,
    preserveTimeValue: false,
    // incrementByMinutes: 30,
  };
  constructor() { }

  ngOnInit() {
    this.timeZones =  momentTimeZone.tz.names();
    this.timezoneVal = 'UTC';
  }

  onDateSelect(): void {
    console.log('On Date Select :: ', this.date);
  }

  setNewTimeZone():void {
    console.log('Time Zome Selcted :: ', this.timezoneVal);
    const tempDate = momentTimeZone.tz(this.date, this.timezoneVal).format('MMMM Do YYYY, h:mm a');
    var tempMoment = moment(tempDate, 'MMMM Do YYYY, h:mm a').toLocaleString();
    this.minDate = new Date(tempMoment);
    console.log('Min Date :: ', this.minDate);
  }
}
