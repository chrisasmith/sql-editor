import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-query-viewer',
  templateUrl: './query-viewer.component.html',
  styleUrls: ['./query-viewer.component.scss']
})
export class QueryViewerComponent implements OnInit {

  editorOptions = {theme: 'vs-light', language: 'sql'};
  code = `SELECT
  top 10 origincityname as City,
  count(*) as Num_of_flights
FROM
  sample.ontime
GROUP BY
  origincityname
ORDER BY
  Num_of_flights DESC;`;

  constructor() {
  }

  ngOnInit() {
  }

}
