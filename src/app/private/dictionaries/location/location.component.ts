import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Location } from '../models/location';
import { LocationService } from '../services/location.service';
import { LocationInfoComponent } from './location-info/location-info.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  dataSource: MatTableDataSource<Location>;
  displayedColumns = ['id', 'location', 'actions'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private locationService: LocationService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.locationService.fetchAll().subscribe( data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  private openDialog(location: Location): Observable<Location> {
    return this.dialog.open(LocationInfoComponent, {width: '400px', data: location})
      .afterClosed()
      .pipe(filter(it => !!it));
  }

  edit(location: Location) {
    this.openDialog(location).subscribe(updatedLocation => {
      this.locationService.update(updatedLocation).subscribe(() => this.loadData());
    });
  }

  delete(id: number) {
    this.locationService.delete(id).subscribe(() => this.loadData());
  }

  create() {
    this.openDialog({} as Location).subscribe(updatedLocation => {
      this.locationService.save(updatedLocation).subscribe(() => this.loadData());
    });
  }
}
