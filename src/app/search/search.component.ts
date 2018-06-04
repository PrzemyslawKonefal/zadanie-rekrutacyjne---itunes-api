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
    let inputedExpression = (<HTMLInputElement>document.getElementById('songSearchInput')).value;
    inputedExpression = inputedExpression.replace(/ /g, '+');
    this.http.get(`https://itunes.apple.com/search?term=${inputedExpression}&entity=song&limit=200`)
    .subscribe(
      (data) => {
        this.Songs.updateSongs(data);
      }
    )
  }

  ngOnInit() {

  }

}
