import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-gestioneleve',
  templateUrl: './gestioneleve.component.html',
  styleUrls: ['./gestioneleve.component.css']
})
export class GestioneleveComponent implements OnInit {
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
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
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
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })








  }

  accepte(users) {

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        users.type = "studentbyadmin";
        this.userService.updatetype(users).subscribe(
          (data) => {
            console.log(data.message);

          }
        )
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })











  }

  refuseeleve(users) {

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        users.status = "Réfuser";
        this.userService.updatestatus(users).subscribe(
          (data) => {
            console.log(data.message);

          }
        )
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })



  }

  open(img){
    window.open(img);
  }




}
