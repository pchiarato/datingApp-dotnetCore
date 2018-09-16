import { Component, OnInit } from '@angular/core';
import { ValueService } from './value.service';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: Array<any> = [];
  constructor(private valueService: ValueService) {}

  ngOnInit() {
    this.valueService.getValues().subscribe(v => (this.values = v), error => console.log(error));
  }
}
