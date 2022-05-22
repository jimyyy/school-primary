import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  SERVER_URL: string = "http://localhost:3000";


  constructor(private httpClient: HttpClient) { }
  public createmat(mat) {

    return this.httpClient.post<{ message: string }>(`${this.SERVER_URL + '/api/addmat'}`, mat)
  }
}
