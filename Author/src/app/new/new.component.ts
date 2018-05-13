import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpService } from '../http.service'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit{
  constructor(
    private _router: Router,
    private _httpService: HttpService,
  ) { }
  newauthor= {name: ""};
  error: any;

  ngOnInit() {
  }
  createAuthor(){
    if(this.newauthor.name.length > 2){
      let observable = this._httpService.addAuthor(this.newauthor);
      observable.subscribe(data=>{
        console.log("Create Data", data);
      })
      this.goHome()
    }
  }
  goHome(){
    this._router.navigate(['/']);
  }
}
