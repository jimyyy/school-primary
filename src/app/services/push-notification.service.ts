import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {
  SERVER_URL: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
  public createnotif(notif)   {
    console.log("from service notification",notif);
    
    return this.httpClient.post<{message :String}>(`${this.SERVER_URL + '/api/addnotif'}`, notif)
  }

  public getnotifications() {
    return this.httpClient.get<{ notification: any }>(this.SERVER_URL + '/api/allnotifications');
  }

  public deletenotification(id) {
    return this.httpClient.delete<{ message: string }>(`${this.SERVER_URL + '/api/deletenotification'}/${id}`)
  }

  public updatestatus(notif) {
    console.log("from service", notif);

    return this.httpClient.put<{ message: string }>(`${this.SERVER_URL + '/api/updatestatusnotif'}/${notif._id}`, notif)
  }


  
}
