import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PhotoModel } from './photoModel';
const urlBase: string = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  
  constructor(private httpClient: HttpClient) {     
  }

  listFromUser(userName: string){
    return this.httpClient.get<PhotoModel>(urlBase+userName+'/photos');
  }
  listFromUserPaginated(userName: string, page: number){
    const params = new HttpParams().append('page', page.toString());
    return this.httpClient.get<PhotoModel[]>(urlBase+userName+'/photos',{params: params});
  }
}
