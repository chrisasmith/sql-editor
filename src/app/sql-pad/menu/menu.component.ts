import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public openTree = false;

  public database = {
    name: 'sample',
    tables: [
      {name: 'l_airline_id', values: [], selected: false},
      {name: 'l_airport', values: [], selected: false},
      {name: 'l_airport_id', values: [], selected: false},
      {name: 'l_airport_seq_id', values: [], selected: false},
      {name: 'l_airport_cancellation', values: [], selected: false},
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  public toggleTreeOpen(): void {
    this.openTree = !this.openTree;
  }
  public getTableDetails(idx: number): void {
    this.database.tables.forEach(t => t.selected = false);
    this.database.tables[idx].selected = true;
  }

}
