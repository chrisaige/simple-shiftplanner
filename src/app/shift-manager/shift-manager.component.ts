import { Component, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTable, MatTableModule } from '@angular/material/table';
import { allDays, DataManagerService, Shift } from '../data-manager.service';

@Component({
  selector: 'app-shift-manager',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatButtonModule, FormsModule,MatButtonToggleModule],
  templateUrl: './shift-manager.component.html',
  styleUrl: './shift-manager.component.scss'
})
export class ShiftManagerComponent implements OnChanges {

  displayedColumns: string[] = ['name', 'hours', 'possibleDays'];
  dataSource: Array<Shift>;
  days = allDays;

  @ViewChild(MatTable) table: MatTable<Shift>;

  constructor(private dataManager: DataManagerService) {
    this.dataSource = this.dataManager.getShifts();
  }

  //TODO File export / import

  //TODO add new staff


  addData(){
    console.log(this.dataSource);
    this.dataSource.push(<any>{});
    this.table.renderRows();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataManager.persistShifts(this.dataSource);
  }

}
