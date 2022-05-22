import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  SERVER_URL: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public  getAllEvents(){ 
    return this.httpClient.get<{data:any}>(this.SERVER_URL + '/api/allevents');
  } 
  public  addEvent(event){
    return this.httpClient.post<{message : string}>(`${this.SERVER_URL + '/api/addevent'}`, event)
   }
   public  deleteSingleEvent(id){
     return this.httpClient.delete<{data:string}>(`${this.SERVER_URL + '/api/deleteevent'}/${id}`)
  }
}
