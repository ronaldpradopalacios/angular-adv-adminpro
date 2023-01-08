import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css'],
})
export class DonaComponent {
  @Input('title') title: string = 'Sin título';
  // @Input('labels') labels: string[] = [];
  @Input('data') dataPercents = [{ data: [350, 400, 200] }];

  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [
    'Label 1',
    'Label 2',
    'Label 3',
  ];
}
