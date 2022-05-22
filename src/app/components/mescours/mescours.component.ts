import { Component, OnInit } from '@angular/core';
import { CourService } from 'src/app/services/cour.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mescours',
  templateUrl: './mescours.component.html',
  styleUrls: ['./mescours.component.css']
})
export class MescoursComponent implements OnInit {
  cours: any;
  users: any;
  matieres: any;
  subjects: any;
  mycours:any=[];
  connectedUser:any;

  constructor(private userService: UserService, private courService: CourService) { }

  ngOnInit(): void {
    this.connectedUser=JSON.parse(localStorage.getItem("connectedUser"));
    this.userService.getusers().subscribe(
      (data) => {
        console.log(data.users);
        this.users = data.users;



      });
    this.courService.getcours().subscribe(
      (data) => {
        console.log(data.cours);
        this.cours = data.cours;
        for (let j = 0; j < this.cours.length; j++) {
          if(this.cours[j].niveau==this.connectedUser.niveau && this.cours[j].status=="confirmé")
          this.mycours.push(this.cours[j]);
                    
          
        
          
          
        }



      });
    this.courService.getmatieres().subscribe(
      (data) => {
        console.log(data.matieres);
        this.matieres = data.matieres;
        console.log(this.matieres)
      });

    this.courService.getmodules().subscribe(
      (data) => {
        console.log(data.subjects);
        this.subjects = data.subjects;



      });

     
        
        
        
        
      








  }

  open(img) {
    window.open(img);
  }

}
