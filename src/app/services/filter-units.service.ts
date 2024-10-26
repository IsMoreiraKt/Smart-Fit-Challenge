import { Injectable } from '@angular/core';
import { Location } from '../types/location.interface';



const OPENING_HOURS = {
  morning   : { first: '06', last: '12' },
  afternoon : { first: '12', last: '18' },
  night     : { first: '18', last: '23' }
};

type HOUR_INDEXES = 'morning' | 'afternoon' | 'night';


@Injectable({
  providedIn: 'root'
})
export class FilterUnitsService {
  constructor() { }


  transformWeekday(weekday: number): string {
    switch(weekday) {
      case 0:
        return "Dom."
      case 6:
        return "Sáb."
      default:
        return "Seg. à Sex."
    }
  }


  filterUnits(
    open_hour: string, close_hour: string, 
    unit: Location
  ): boolean {
    if (!unit.schedules) return true;

    let open_hour_filter = parseInt(open_hour, 10);
    let close_hour_filter = parseInt(close_hour, 10);
    let todays_weekday = this.transformWeekday(new Date().getDay());

    for (let counter = 0; counter < unit.schedules.length; counter ++) {
      let schedule_hour = unit.schedules[counter].hour;
      let schedule_weekday = unit.schedules[counter].weekdays;

      if (schedule_weekday === todays_weekday) {
        if(schedule_hour !== 'Fechada') {
          let [unit_open_hour, unit_close_hour] = schedule_hour.split(' às ');
          let unit_open_hour_filter = parseInt(
            unit_open_hour.replace('h', ''), 
            10
          );
          let unit_close_hour_filter = parseInt(
            unit_close_hour.replace('h', ''), 
            10
          );
          
          if (
            unit_open_hour_filter <= open_hour_filter 
            &&
            unit_close_hour_filter >= close_hour_filter
          ) return true;
        }
      }
    };

    return false;
  }


  filter(
    results: Location[],
    showClosed: boolean,
    hour: string
  ) {
    let intermediateResults = results;

    if (!showClosed) {
      intermediateResults = results.filter(
        location => location.opened === true
      );
    }

    if (!hour) {
      return intermediateResults;
    }
    
    const OPEN_HOUR = OPENING_HOURS[
      hour as HOUR_INDEXES
    ].first;

    const CLOSE_HOUR = OPENING_HOURS[
      hour as HOUR_INDEXES
    ].last;

    return intermediateResults.filter(
      location => this.filterUnits(OPEN_HOUR, CLOSE_HOUR, location)
    );
  }
}