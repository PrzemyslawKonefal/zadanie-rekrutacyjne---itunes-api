import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private Songs:SongsService, private http:HttpClient) { }

  getSongs(){
    const songNameInput = (<HTMLInputElement>document.getElementById('songSearchInput')).value;
    songNameInput = songNameInput.replace(/ /g, '+');
    console.log(songNameInput);
    this.http.get(`https://itunes.apple.com/search?term=${songNameInput}&entity=song&limit=200`)
    .subscribe(
      (data) => {
        this.Songs.changeSongs(data);
      }
    )
  }

  ngOnInit() {

  }

}
