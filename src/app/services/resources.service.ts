import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private http: HttpClient) { }

  getCharacters() { 
    return this.http.get<any>('http://82.165.96.74:1337/characters');
  }

  getSeasons() { 
    return this.http.get<any>('http://82.165.96.74:1337/seasons');
  }
}
