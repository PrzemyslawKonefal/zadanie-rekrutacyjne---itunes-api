import { Component, OnInit, Input } from '@angular/core';
import { SongsService } from '../../songs.service';
@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  constructor(private songs:SongsService) { }
  @Input() trackData:object;
  ngOnInit() {
  }

}
