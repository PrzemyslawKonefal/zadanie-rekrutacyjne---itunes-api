import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RecordsComponent } from './records/records.component';
import { RecordComponent } from './records/record/record.component';
import { SearchComponent } from './search/search.component';
import { SongsService } from './songs.service';

@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent,
    RecordComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SongsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
