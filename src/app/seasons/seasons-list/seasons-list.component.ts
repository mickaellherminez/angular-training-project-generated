import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-seasons-list',
  templateUrl: './seasons-list.component.html',
  styleUrls: ['./seasons-list.component.css']
})
export class SeasonsListComponent implements OnInit, OnDestroy {
  seasons:[] = [];
  seasonsSub: any;

  constructor(private resources: ResourcesService) { }

  ngOnInit(): void {
    this.seasonsSub = this.resources.getSeasons().subscribe((data) => {
      console.log(data);
      this.seasons = data;
    })
  }

  ngOnDestroy(): void {
    this.seasonsSub.unsubscribe()
  }
}
