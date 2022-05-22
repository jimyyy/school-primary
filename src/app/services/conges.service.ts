import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CongesService {
  SERVER_URL: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public createconge(conges,certif:File) {
    let formData = new FormData();
      formData.append('nom',conges.nom);
      formData.append('prenom',conges.prenom);
      formData.append('email',conges.email);
      formData.append('message',conges.message);
      formData.append('certif',certif);
      formData.append('datedebut',conges.datedebut);
      formData.append('datefin',conges.datefin);
      formData.append('idenseignant',conges.idenseignant);
      formData.append('status',conges.status);
      formData.append('type',conges.type);
    return this.httpClient.post<{ message: string }>(`${this.SERVER_URL + '/api/addconges'}`,formData)
  }
  public getconges() {
    return this.httpClient.get<{ conges: any }>(this.SERVER_URL + '/api/allconges');
  }

  public updateconge(conges) {
    return this.httpClient.put<{ message: string }>(`${this.SERVER_URL + '/api/updateconge'}/${conges._id}`, conges)
  }
  public getconge(id) {
    return this.httpClient.get<{ conge: any }>(`${this.SERVER_URL + '/api/allconge'}/${id}`);
  }
  public deleteconge(id) {
    return this.httpClient.delete<{ message: string }>(`${this.SERVER_URL + '/api/deleteconge'}/${id}`)
  }
  public updatestatus(conges) {
    console.log("from service",conges);
    
   return this.httpClient.put<{message:string}>(`${this.SERVER_URL + '/api/updatestatusconges'}/${conges._id}`,conges)
 }
}
