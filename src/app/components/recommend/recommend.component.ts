import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss']
})
export class RecommendComponent implements OnInit {

  @Input() iconClass: string;
  @Input() numbers: number;

  constructor() { }

  ngOnInit(): void {
  }

}
