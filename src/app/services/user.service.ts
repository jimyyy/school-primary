import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  SERVER_URL: string = "http://localhost:3000";

 
  
  
  

  constructor(private httpClient: HttpClient) { }
  public createuser(user: any, img: File) {
    let formData = new FormData();
    formData.append('nom', user.nom);
    formData.append('prenom', user.prenom);
    formData.append('email', user.email);
    formData.append('datenaissance', user.datenaissance);
    formData.append('tel', user.tel);
    formData.append('mdp', user.mdp);
    formData.append('nat', user.nat);
    formData.append('role', user.role);
    formData.append('type', user.type);
    formData.append('status', user.status);
    formData.append('cin', user.cin);
    formData.append('presence', user.presence);
    formData.append('niveau', user.niveau);
    formData.append('img', img);
    
   

  
   



    return this.httpClient.post<{ message: string }>(`${this.SERVER_URL + '/api/adduser'}`, formData)
  }


  public getusers() {
    return this.httpClient.get<{ users: any }>(this.SERVER_URL + '/api/allUsers');
  }


  public deleteuser(id) {
    return this.httpClient.delete<{ message: string }>(`${this.SERVER_URL + '/api/deleteuser'}/${id}`)
  }

  //login
  public login(user) {
    return this.httpClient.post<{ findedUser: any }>(this.SERVER_URL + '/api/login', user);


  }

  public getuser(id) {
    return this.httpClient.get<{ user: any }>(`${this.SERVER_URL + '/api/allusers'}/${id}`);
  }

  public updateuser(user) {
    return this.httpClient.put<{ message: string }>(`${this.SERVER_URL + '/api/updateuser'}/${user._id}`, user)
  }

  public updatetype(user) {
    console.log("from service", user);

    return this.httpClient.put<{ message: string }>(`${this.SERVER_URL + '/api/updatetype'}/${user._id}`, user)
  }
  public updatestatus(user) {
    console.log("from service", user);

    return this.httpClient.put<{ message: string }>(`${this.SERVER_URL + '/api/updatestatus'}/${user._id}`, user)
  }
  public createaffect(affect, user) {
    return this.httpClient.post<{ message: string }>(`${this.SERVER_URL + '/api/addaffect'}/${user._id}`, affect)
  }

  public createphoto(user,photo: File) {
    let formData = new FormData();
    formData.append('photo',photo);

    return this.httpClient.post<{ message: string }>(`${this.SERVER_URL + '/api/addphoto'}/${user._id}`,formData)
  }

  public createonlineuser(user)   {
    console.log("from service user",user);
    
    return this.httpClient.post<{message :String}>(`${this.SERVER_URL + '/api/addonline'}`, user)
  }


}
