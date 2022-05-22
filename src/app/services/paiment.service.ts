import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaimentService {
  SERVER_URL: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public createpaiment(paiment) {
    return this.httpClient.post<{ message: string }>(`${this.SERVER_URL + '/api/addpay'}`, paiment)
  }

  public getpaiments() {
    return this.httpClient.get<{ paiments: any }>(this.SERVER_URL + '/api/allpaiments');
  }

  public getpaiment(id){
    return this.httpClient.get<{paiment:any}>(`${this.SERVER_URL + '/api/allpaiment'}/${id}`); 
  }

  public updatepaiment(paiment) {
    return this.httpClient.put<{message:string}>(`${this.SERVER_URL + '/api/updatepaiment'}/${paiment._id}`, paiment)
 }

 getPdf(){
   
  return this.httpClient.get<{ message: String}>(`${this.SERVER_URL}/paiments/generateFile/pdf`);
  }

  getPdfme(id){
    return this.httpClient.get<{ message: String}>(`${this.SERVER_URL}/payments/generateFile/pdf/${id}`);
    }
  public deletepaiment(id){
    return this.httpClient.delete<{message:string}>(`${this.SERVER_URL + '/api/deletepaiment'}/${id}`)
 }

}
