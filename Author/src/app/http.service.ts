import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors(){
    return this._http.get('/authors');
  }
  getAuthor(id){
    console.log(id);
    return this._http.get('/authors/' + id)
  }
  addAuthor(newauthor){
    return this._http.post('/authors', newauthor)
  }
  editAuthor(id, author){
    console.log(id);
    console.log(author);
    return this._http.put('/authors/edit/'+ id, author);
  }
  deleteAuthor(id){
    console.log(id);
    return this._http.delete('/authors/delete/'+id)
  }
}
