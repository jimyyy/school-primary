import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CourService {
  SERVER_URL: string = "http://localhost:3000";


  constructor(private httpClient: HttpClient) { }
  public createcour(cour, img: File) {
    let formData = new FormData();
    formData.append('nomModule', cour.nomModule);
    formData.append('nomMatiere', cour.nomMatiere);
    formData.append('idMatiere', cour.idMatiere);
    formData.append('idModule', cour.idModule);
    formData.append('niveau', cour.niveau);
    formData.append('img', img);
    formData.append('idEnseignant', cour.idEnseignant);
    formData.append('status', cour.status);
    formData.append('type', cour.type)
    return this.httpClient.post<{ message: string }>(`${this.SERVER_URL + '/api/addcour'}`, formData)
  }
  public getcours() {
    return this.httpClient.get<{ cours: any }>(this.SERVER_URL + '/api/allcours');
  }

  public deletecour(id) {
    return this.httpClient.delete<{ message: string }>(`${this.SERVER_URL + '/api/deletecour'}/${id}`)
  }

  public createmodule(subject) {
    return this.httpClient.post<{ message: string }>(`${this.SERVER_URL + '/api/addsubject'}`, subject)
  }
  public getmodules() {
    return this.httpClient.get<{ subjects: any }>(this.SERVER_URL + '/api/allmodules');
  }
  public creatematiere(matiere) {
    return this.httpClient.post<{ message: string }>(`${this.SERVER_URL + '/api/addmatiere'}`, matiere)
  }

  public getmatieres() {
    return this.httpClient.get<{ matieres: any }>(this.SERVER_URL + '/api/allmatieres');
  }

  public updatestatus(cour) {
    console.log("from service",cour);
    
   return this.httpClient.put<{message:string}>(`${this.SERVER_URL + '/api/updatestatuscour'}/${cour._id}`,cour)
 }



}
