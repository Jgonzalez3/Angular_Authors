import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
  }
  goHome(){
    this._router.navigate(['/']);
  }
  addAuthor(){
    this._router.navigate(['/new']);
  }
}
