import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { HttpService } from '../http.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }
  author: any
  paramId: any;

  ngOnInit() {
    this._route.params.subscribe((params: Params)=> {
      this.paramId = params['id'];
      console.log(params['id']);
    })
    this.getAuthorFromService(this.paramId);
  }
  getAuthorFromService(paramId){
    console.log(paramId);
    let observable = this._httpService.getAuthor(paramId);
    observable.subscribe(data=>{
      console.log("Get Author", data)
        this.author = data['author'];
        console.log(this.author);
      })
  }
  updateAuthor(id){
    console.log(id);
    if(this.author.name.length > 2){
      let observable = this._httpService.editAuthor(id, this.author);
      observable.subscribe(data=>{
        console.log("Got DATA:", data);
      })
      this.goHome();
    }
  }
  goHome(){
    this._router.navigate(['/']);
  }

}
