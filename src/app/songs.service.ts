import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class SongsService {
  songsUpdated:boolean = false;
  list:object;
  listUpdated = new Subject();
  updateSongs(songsList){
    this.list = songsList;
    this.songsUpdated = true;
    console.log(this.list);
    this.listUpdated.next();
  }
  constructor() { }
}
