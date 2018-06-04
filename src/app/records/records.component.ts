import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  constructor(private songs:SongsService) {  }
  displayedTracks:object[];
  displayedTracksIndexes:number[] = [0, 9];
  updateVisibleTracks(){
    this.displayedTracks = this.songs.list['results'].slice(this.displayedTracksIndexes[0], this.displayedTracksIndexes[1]);
  }
  changeTracks(direction:string){
    direction === 'next' ?  this.displayedTracksIndexes = this.displayedTracksIndexes.map((index) => {return index+9}):
                            this.displayedTracksIndexes = this.displayedTracksIndexes.map((index) => {return index-9});
    this.updateVisibleTracks();
  }

  ngOnInit(){
    this.songs.listUpdated.subscribe(
      () => {
        this.displayedTracksIndexes = [0, 9];
        this.updateVisibleTracks();
      }
    )
  }
}
