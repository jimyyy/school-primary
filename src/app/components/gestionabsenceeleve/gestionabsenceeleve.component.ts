import { Component, OnInit } from '@angular/core';
import { CourService } from 'src/app/services/cour.service';
import { FicheService } from 'src/app/services/fiche.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-gestionabsenceeleve',
  templateUrl: './gestionabsenceeleve.component.html',
  styleUrls: ['./gestionabsenceeleve.component.css']
})
export class GestionabsenceeleveComponent implements OnInit {
  matieres: any;
  fiches: any;
  users: any;

  constructor(private ficheService: FicheService, private courService: CourService, private userService: UserService) { }

  ngOnInit(): void {
    this.ficheService.getfiches().subscribe(
      (data) => {
        console.log(data.fiches);
        this.fiches = data.fiches;

      });


    this.userService.getusers().subscribe(
      (data) => {
        console.log(data.users);
        this.users = data.users;





      });


    this.courService.getmatieres().subscribe(
      (data) => {
        console.log(data.matieres);
        this.matieres = data.matieres;
        console.log(this.matieres)
      });



  }

  deleteabsence(id: any) {

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
        this.ficheService.deletefiche(id).subscribe(
          (data) => {
            console.log(data.message);
            this.ficheService.getfiches().subscribe(
              (data) => {
                console.log(data.fiches);
                this.fiches = data.fiches;
    
              })
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
