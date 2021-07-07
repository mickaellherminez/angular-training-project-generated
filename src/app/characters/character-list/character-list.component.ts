import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit, OnDestroy {
  characters: [] = [];
  charactersSub: any;

  constructor(private resources: ResourcesService) { }

  ngOnInit(): void {
    this.charactersSub = this.resources.getCharacters().subscribe((data) => { 
      console.log(data);
      this.characters = data;
    })
  }

  ngOnDestroy(): void {
    this.charactersSub.unsubscribe()
  }
}
