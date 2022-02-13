import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AthletesDataService } from './services/athletes-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'athletes-app';
  displayedColumns: any;
  isSportSelected: boolean = false;

  dataSource: any[] = [];
  columns: string[] = [];
  sports: string[] = ['100m', '200m', '400m'];
  nationalities: string[] = [];
  nationality = new FormControl();
  columnsToDisplay = new FormControl();
  showFirstAthletes: boolean = false;
  displayedColumnsForSelect: string[] = [];
  removedCols: string[] = [];
  changedLayout: boolean = false;

  constructor(private _athletesDataService: AthletesDataService) {}

  ngOnInit(): void {
    const isSportSelected = localStorage.getItem('isSportSelected');
    if (isSportSelected) {
      this.isSportSelected = true;
    }
    this.columns = [...Object.keys(this._athletesDataService.data[0])];
    this.displayedColumns = [...this._athletesDataService.columns];
    this.displayedColumnsForSelect = [...this._athletesDataService.columns];
    this.dataSource = [...this._athletesDataService.data];
    this.nationalities = this._athletesDataService.data
      .map((n) => n.nat.text)
      .filter(this.onlyUnique);
    this.columnsToDisplay.patchValue([
      ...this.displayedColumns.map((item: any) => item),
      0,
    ]);
  }

  onlyUnique(value: any, index: any, self: any) {
    return self.indexOf(value) === index;
  }
//Function that shows the top three athletes
  showFirstThree(event: any) {
    if (event.checked) {
      this.dataSource = [...this._athletesDataService.data.slice(0, 3)];
    } else {
      this.dataSource = [...this._athletesDataService.data];
    }
  }
//Function used that takes the value chosen in the event to filter the proper values
  filterByNationality(event: any) {
    const valueArray = event.value;
    if (valueArray?.length) {
      this.dataSource = [
        ...this._athletesDataService.data.filter((row) =>
          valueArray.includes(row.nat.text)
        ),
      ];
    } else {
      this.dataSource = [...this._athletesDataService.data];
    }
  }
//Add function to choose the columns wanted to be present
  removeColumns(event: any) {
    const valueArray = event.value;
    if (valueArray?.length) {
      this.removedCols = [
        ...this._athletesDataService.columns.filter(
          (c) => !valueArray.includes(c)
        ),
      ];
      for (const col of this._athletesDataService.columns) {
        if (
          !this.removedCols.includes(col) &&
          !this.displayedColumns.includes(col)
        ) {
          const index = this._athletesDataService.columns.findIndex(
            (row: any) => row === col
          );
          this.columns.splice(
            index,
            1,
            Object.keys(this._athletesDataService.data[0])[index]
          );
          this.displayedColumns.splice(index, 1, col);
        } else if (
          this.removedCols.includes(col) &&
          this.displayedColumns.includes(col)
        ) {
          const index = this.displayedColumns.findIndex(
            (row: any) => row === col
          );
          this.columns.splice(index, 1);
          this.displayedColumns.splice(index, 1);
        }
      }
    } else {
      this.columns = [...Object.keys(this._athletesDataService.data[0])];
      this.displayedColumns = [...this._athletesDataService.columns];
    }
  }
//Function to sort table data by pressing the header 
  sortData(sort: any) {
    const data = this.dataSource.slice();
    if (!sort.active || sort.direction === '') {
      return;
    }

    this.dataSource = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'rank':
          return this.compare(a.rank, b.rank, isAsc);
        case 'personalBest':
          return this.compare(a.personalBest, b.personalBest, isAsc);
        case 'wind':
          return this.compare(
            a.wind.replace('-', '').replace('+', ''),
            b.wind.replace('-', '').replace('+', ''),
            isAsc
          );
        case 'competitor':
          return this.compare(a.competitor.title, b.competitor.title, isAsc);
        case 'venue':
          return this.compare(a.venue, b.venue, isAsc);
        case 'results':
          return this.compare(a.results, b.results, isAsc);
        case 'date':
          return this.compare(a.date, b.date, isAsc);
        case 'dob':
          return this.compare(a.dob, b.dob, isAsc);
        default:
          return 0;
      }
    });
  }
//Function that saves in local storage the choice of the sport
  selectSport() {
    localStorage.setItem('isSportSelected', 'true');
    this.isSportSelected = true;
  }
//Function that used for sorting in ascending and descending order
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  changeLayout() {
    this.changedLayout = !this.changedLayout;
  }
}
