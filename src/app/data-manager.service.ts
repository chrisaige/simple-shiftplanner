import { Injectable } from '@angular/core';

export interface Staff {
  name: string;
  hours: number;
  preferredDays: Day[];
}

export interface Shift {
  name: string;
  hours: number;
  requiredPersonelAmount: number;
  possibleDays: Day[];
}


export type Day = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

export const allDays: Array<Day> = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];

export type PreferredShift = 'NIGHT' | 'DAY' | 'SHORT';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor() { }

  getShifts(): Array<Shift> {
    return JSON.parse(localStorage.getItem('shifts') || '[]');
  }

  getStaff(): Array<Staff> {
    return JSON.parse(localStorage.getItem('staff') || '[]');
  }

  persistShifts(data: Array<Shift>) {
    localStorage.setItem('shifts', JSON.stringify(data));
  }

  persistStaff(data: Array<Staff>) {
    localStorage.setItem('staff', JSON.stringify(data));
  }

}
