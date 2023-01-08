import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css'],
})
export class Grafica1Component {
  public labels1 = ['Pan', 'Refrescos', 'Hamburguesas'];
  public data1 = [{ data: [60, 30, 10] }];
}
