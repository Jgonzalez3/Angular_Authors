import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private _httpService: HttpService
  ) { }
  authors: string[];

  ngOnInit() {
    this.getAuthorsFromService();
  }
  getAuthorsFromService(){
    let observable = this._httpService.getAuthors();
    observable.subscribe(data =>{
      console.log("Data:", data);
      this.authors = data['authors'];
      console.log(this.authors);
    })
  }
  deleteAuthor(id){
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data=>{
      console.log("Got DATA:", data);
    })
    this.getAuthorsFromService();
  }

}
