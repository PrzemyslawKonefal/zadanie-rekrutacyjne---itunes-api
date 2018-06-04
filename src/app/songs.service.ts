import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class SongsService {
  constructor() { }
  songsUpdated:boolean = false;
  list:object;
  listUpdated = new Subject();
  updateSongs(songsList){
    this.list = songsList;
    this.songsUpdated = true;
    this.listUpdated.next();
  }
}
