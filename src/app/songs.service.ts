import { Injectable } from '@angular/core';

@Injectable()
export class SongsService {
  songs:object;
  changeSongs(newSongs){
    this.songs = newSongs;
  }
  constructor() { }
}
