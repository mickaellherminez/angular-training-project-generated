import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seasons-details',
  templateUrl: './seasons-details.component.html',
  styleUrls: ['./seasons-details.component.css']
})
export class SeasonsDetailsComponent implements OnInit {
  @Input()
  season: any;
  constructor() { }

  ngOnInit(): void {
  }

}
