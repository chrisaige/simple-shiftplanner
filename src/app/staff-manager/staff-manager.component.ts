import { Component, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTable, MatTableModule } from '@angular/material/table';
import { allDays, DataManagerService, Staff } from '../data-manager.service';

@Component({
  selector: 'app-staff-manager',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatButtonModule, FormsModule,MatButtonToggleModule],
  templateUrl: './staff-manager.component.html',
  styleUrl: './staff-manager.component.scss'
})
export class StaffManagerComponent implements OnChanges {

  displayedColumns: string[] = ['name', 'hours', 'preferredDays'];
  dataSource: Array<Staff>;
  days = allDays;

  @ViewChild(MatTable) table: MatTable<Staff>;

  constructor(private dataManager: DataManagerService) {
    this.dataSource = dataManager.getStaff();
  }

  //TODO File export / import

  //TODO add new staff

  ngOnChanges(changes: SimpleChanges): void {
    this.dataManager.persistStaff(this.dataSource);
  }

  addData(){
    console.log(this.dataSource);
    this.dataSource.push(<any>{});
    this.table.renderRows();
  }
}
