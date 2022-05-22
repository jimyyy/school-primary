import { Component, OnInit } from '@angular/core';
import { PaimentService } from 'src/app/services/paiment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-maquittance',
  templateUrl: './maquittance.component.html',
  styleUrls: ['./maquittance.component.css']
})
export class MaquittanceComponent implements OnInit {
  paiments:any;
  searchText:any;
  connectedUser:any;
  myquittance:any=[];
  users:any;

  constructor( private paimentService:PaimentService,
    private userService:UserService) { }

  ngOnInit(): void {
    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    this.paimentService.getpaiments().subscribe(
      (data) => {
        console.log(data.paiments);
        this.paiments = data.paiments;

        for (let i = 0;  i< this.paiments.length; i++) {
          if(this.paiments[i].idEleve==this.connectedUser._id){
            this.myquittance.push(this.paiments[i])
          }
          this.paiments[i].Rest=this.paiments[i].Price - this.paiments[i].Advance;

      
        }



      });
      this.userService.getusers().subscribe(
        (data) => {
          console.log(data.users);
          this.users = data.users;
  
  
  
        });
  }
  downLoadPdfEleve(id){
    this.paimentService.getPdfme(id).subscribe(
      (data)=>{
        console.log(data.message)
      }
    )
  
  }

}
