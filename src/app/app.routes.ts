import { Routes } from '@angular/router';
import { StaffManagerComponent } from './staff-manager/staff-manager.component';
import { ShiftManagerComponent } from './shift-manager/shift-manager.component';

export const routes: Routes = [
    {
        path: 'staff',
        component: StaffManagerComponent
    },
    {
      path: 'shifts',
      component: ShiftManagerComponent
  }
];
