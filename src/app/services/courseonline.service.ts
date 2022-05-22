import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseonlineService {
  SERVER_URL: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public createonlinecour(courseonline, img: File) {
    let formData = new FormData();
    formData.append('nom', courseonline.nom);
    formData.append('prix', courseonline.prix);
    formData.append('description', courseonline.description);
    formData.append('img', img);
    formData.append('max', courseonline.max);
    formData.append('enseignant', courseonline.enseignant);
   


    return this.httpClient.post<{ message: string }>(`${this.SERVER_URL + '/api/addcourseonline'}`, formData)
  }













  public getcours() {
    return this.httpClient.get<{ courseonlines: any }>(this.SERVER_URL + '/api/allcourseonline');
  }


  public deletecour(id) {
    return this.httpClient.delete<{ message: String }>(`${this.SERVER_URL + '/api/deletecouronline'}/${id}`)
  }

}
