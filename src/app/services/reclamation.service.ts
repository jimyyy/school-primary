import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  SERVER_URL: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
  public createreclamation(reclamation)   {
    console.log("from service reclamation",reclamation);
    
    return this.httpClient.post<{message :String}>(`${this.SERVER_URL + '/api/addreclamation'}`, reclamation)
  }

  public getreclamations(){ 
    return this.httpClient.get<{reclamations:any}>(this.SERVER_URL + '/api/allreclamations');
  }
  public deletereclam(id) {
    return this.httpClient.delete<{ message: string }>(`${this.SERVER_URL + '/api/deletereclam'}/${id}`)
  }
}
