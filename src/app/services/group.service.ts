import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  SERVER_URL: string = "http://localhost:3000";

  constructor(private httpClient:HttpClient) { }

  public creategroup(group){
    return this.httpClient.post<{message : string}>(`${this.SERVER_URL + '/api/addgroup'}`, group)
   }
   public getgroups(){ 
    return this.httpClient.get<{groups:any}>(this.SERVER_URL + '/api/allgroups');
  }



}
