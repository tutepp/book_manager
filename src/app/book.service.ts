import { HttpClient, HttpClientModule } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(environment.url + '/books')
  }
  findById(id:any):Observable<any>{
    return this.http.get(environment.url + '/books/' + id );
  }
  update(id: any ,data:any):Observable<any>{
    return this.http.put(environment.url + '/books/' + id,data);
  }
  delete(id:any):Observable<any>{
    return this.http.delete(environment.url + '/books/' + id );

  }
  creat(data:any):Observable<any>{
    return this.http.post(environment.url + '/books'  , data);
  }
}
