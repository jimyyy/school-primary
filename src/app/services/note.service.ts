import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  SERVER_URL: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
  public createnote(note)   {
    console.log("from service note",note);
    
    return this.httpClient.post<{message :String}>(`${this.SERVER_URL + '/api/addnote'}`, note)
  }
  public getnotes(){ 
    return this.httpClient.get<{notes:any}>(this.SERVER_URL + '/api/allnotes');
  }

  public deletenote(id){
    return this.httpClient.delete<{message :String}>(`${this.SERVER_URL + '/api/deletenote'}/${id}`)
  }
  public getnote(id) {
    return this.httpClient.get<{ note: any }>(`${this.SERVER_URL + '/api/notebyid'}/${id}`);
  }

}
