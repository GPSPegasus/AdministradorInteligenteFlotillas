import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})

export class VehiclesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'activo'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'activo'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'activo'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'activo'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'activo'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'activo'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'activo'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'activo'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'activo'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'activo'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'activo'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'activo'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'activo'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'activo'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'activo'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'activo'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'activo'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'activo'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'activo'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'activo'},
];
