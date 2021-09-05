import { Component, OnInit } from '@angular/core';

const NB_ROWS = 31;
const NB_COLUMNS = 31;
const TABLE_WIDTH = 500;
const TABLE_HEIGHT = 500;
const PADDING = 20;

// Le jour où tout a commencé
const DAY05092021 = new Date(2021, 9, 5);

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  TABLE_WIDTH = TABLE_WIDTH;
  TABLE_HEIGHT = TABLE_HEIGHT;
  NB_ROWS = NB_ROWS;
  NB_COLUMNS = NB_COLUMNS;
  PADDING = PADDING;

  dateStart: Date = new Date(1999, 2, 19);

  matrix: boolean[][];

  constructor() {
    this.matrix = [];
    let row: boolean[];
    let date: Date = this.dateStart;

    const now = Date.now();

    for (let i = 0; i < NB_ROWS; i++) {
      row = [];
      for (let j = 0; j < NB_COLUMNS; j++) {
        date = new Date(date.setMonth(date.getMonth() + 1));
        row.push(date.valueOf() < now);
      }
      this.matrix.push(row);
    }
  }

  ngOnInit(): void {
  }

}
