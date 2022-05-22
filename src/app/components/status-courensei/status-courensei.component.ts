import { Component, OnInit } from '@angular/core';
import { CourService } from 'src/app/services/cour.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-status-courensei',
  templateUrl: './status-courensei.component.html',
  styleUrls: ['./status-courensei.component.css']
})
export class StatusCourenseiComponent implements OnInit {
  connectedUser:any;
  cours:any;
  mycour:any=[];
  searchText:any;
  subjects:any;
  matieres:any;

  constructor(private courService:CourService,) { }

  ngOnInit(): void {
    this.connectedUser=JSON.parse(localStorage.getItem("connectedUser"));
    this.courService.getcours().subscribe(
      (data)=>{
      console.log(data.cours);
      this.cours = data.cours;
      for (let i = 0; i < this.cours.length; i++) {
        if (this.cours[i].idEnseignant == this.connectedUser._id) {
          this.mycour.push(this.cours[i]);
        }
        
      }
    });

    this.courService.getmodules().subscribe(
      (data) => {
        console.log(data.subjects);
        this.subjects = data.subjects;

        console.log(this.subjects)

    });

    this.courService.getmatieres().subscribe(
      (data) => {
        console.log(data.matieres);
        this.matieres = data.matieres;
        console.log(this.matieres)
      })
      



  }

  deletecour(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.courService.deletecour(id).subscribe(
          (data) => {
            console.log(data.message);
            location.reload();
           
           
           
            
          })
       
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    
    
  }

  

}
