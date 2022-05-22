import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FicheService {
  SERVER_URL: string = "http://localhost:3000";





  constructor(private httpClient: HttpClient) { }
  public createfiche(fiche)   {
    console.log("from service fiche",fiche);
    
    return this.httpClient.post<{message :String}>(`${this.SERVER_URL + '/api/addfiche'}`, fiche)
  }

  public getfiches(){ 
    return this.httpClient.get<{fiches:any}>(this.SERVER_URL + '/api/allfiches');
  }

  public getfiche(id){
    return this.httpClient.get<{fiche:any}>(`${this.SERVER_URL + '/api/allfiches'}/${id}`); 
  }

  public deletefiche(id){
    return this.httpClient.delete<{message :String}>(`${this.SERVER_URL + '/api/deletefiche'}/${id}`)
  }
}
