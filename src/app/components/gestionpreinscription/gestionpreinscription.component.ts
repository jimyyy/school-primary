import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-gestionpreinscription',
  templateUrl: './gestionpreinscription.component.html',
  styleUrls: ['./gestionpreinscription.component.css']
})
export class GestionpreinscriptionComponent implements OnInit {
  users: any;
  searchText: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getusers().subscribe(
      (data) => { //data howa retour taa requete//
        console.log(data.users);
        this.users = data.users;





      })
  }




  delete(id: any) {
    Swal.fire({
      title: 'Vous Êtes sur?',
      text: "Vous ne pourrez pas revenir en arrière!!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'oui, Supprimer!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteuser(id).subscribe(
          (data) => {
            console.log(data.message);
            this.userService.getusers().subscribe(
              (data) => {
                console.log(data.users);
                this.users = data.users;
              })
          })
        Swal.fire(
          'Supprimé!',
          'Votre donneés sera supprimé.',
          'success'
        )
      }
    })



  }

  accepte(users) {


    Swal.fire({
      title: 'Vous etes sur denregistrer les modifications ?',
      showDenyButton: true,
      
      confirmButtonText: 'Enregistrer',
      denyButtonText: `Annuler`,
    }).then((result) => {
      
      if (result.isConfirmed) {
        users.type = "teacherbyadmin";
        this.userService.updatetype(users).subscribe(
          (data) => {
            console.log(data.message);

          }
        )
        Swal.fire('Enregistré!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })











  }
  refuseens(users) {

    Swal.fire({
      title: 'Vous etes sur denregistrer les modifications?',
      showDenyButton: true,
     
      confirmButtonText: 'Enregistrer',
      denyButtonText: `Annuler`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        users.status = "Réfuser";
        this.userService.updatestatus(users).subscribe(
          (data) => {
            console.log(data.message);

          }
        )
        Swal.fire('Enregistré!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })



  }
  open(img2){
    window.open(img2);
  }



}
